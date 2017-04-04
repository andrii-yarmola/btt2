import express from 'express';
import paypal from 'paypal-rest-sdk';
import paypalConfig from '../configs/paypalConfig';
import url from 'url';

import authenticate from '../middlewares/authenticate'

import Order from '../models/order';
import Orders from '../collections/orders';

let router = express.Router();

router.post('/', authenticate, (req, res) => {
  const { orderName, description, price } = req.body;
  const { CLIENT_ID, CLIENT_SECRET, RETURN_URL, CANCEL_URL, MODE, CURRENCY } = paypalConfig;
  
  paypal.configure({
    mode: MODE,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET
  });
  
  const create_payment_json = {
    intent: 'sale',
    payer: {
      payment_method: 'paypal'
    },
    redirect_urls: {
      return_url: RETURN_URL,
      cancel_url: CANCEL_URL
    },
    transactions: [{
      description: description,
      amount: {
        currency: CURRENCY,
        total: price
      }
    }]
  };
  
  paypal.payment.create(create_payment_json, (err, payment) => {
    if (err) {
      console.log(err.response);
      throw err;
    } else {
      let approvalUrl = payment.links.find(link => link.rel == 'approval_url').href;
      let token = url.parse(approvalUrl, true).query.token;
      console.log(
        {
        name: orderName,
        amount: price,
        status: 'new',
        paymentJson: payment,
        paymentId: payment.id,
        token: token
      }
      )
      Order.forge({
        name: orderName,
        amount: price,
        status: 'new',
        //paymentJson: payment,
        paymentId: payment.id,
        token: token
      }, { hasTimestamps: true }).save();
      
      
      res.json({ approvalUrl: approvalUrl });
    }
  });
  
  // зачем 2 БД? ордера и пейменты? к тому же один включает в себя второй 
  // почему 3 линки? почему работаем токо с апрувным?
  // что за токен?
  
});

export default router;
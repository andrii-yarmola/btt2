import express from 'express';
import paypal from 'paypal-rest-sdk';
import paypalConfig from '../configs/paypalConfig';

let router = express.Router();

router.post('/', (req, res) => {
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
  
  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
      console.log(error.response);
      throw error;
    } else {
      console.log("Create Payment Response");
      console.log(payment);
    }
  });
  
  // зачем 2 БД? ордера и пейменты? к тому же один включает в себя второй 
  // почему 3 линки? почему работаем токо с апрувным?
  // что за токен?
  
});

export default router;
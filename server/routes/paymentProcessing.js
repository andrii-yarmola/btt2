import express from 'express';
import paypal from 'paypal-rest-sdk';
import paypalConfig from '../configs/paypalConfig';

import Order from '../models/order';
import Orders from '../collections/orders';

let router = express.Router();

router.get('/', (req, res, next) => {
  const { paymentId, token, PayerID } = req.query;
  Order.forge({ paymentId: paymentId })
  .fetch({require: true})
  .then(
    (order) => {
      order.save({ status: 'paid' })
      .then(next())
      .catch((err) => {
        res.status(500).json({error: true, data: {message: err.message}});
      })
    }
  )
});

export default router;
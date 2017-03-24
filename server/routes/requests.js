import express from 'express';
import isObjEmpty from 'lodash/isEmpty';
import moment from 'moment';
import multer from 'multer';

import commonValidations from '../shared/validations/request';
import authenticate from '../middlewares/authenticate'

import Request from '../models/request';
import Requests from '../collections/requests';


moment().format();

const upload = multer({ 
  dest: 'uploads/',
  limits: {
    fileSize: 25 * 1024 * 1024
  }
});

let router = express.Router();

router.post('/', upload.array('uploads', 3), (req, res) => {
  let { errors, isValid } = commonValidations(req.body);
  if ( isValid ) {
    const { type, name, phone, time, date, email, message } = req.body;

    const file1 = req.files[0] ? req.files[0].filename : '';
    const file2 = req.files[1] ? req.files[1].filename : '';
    const file3 = req.files[2] ? req.files[2].filename : '';

    Request.forge({
      type, name, phone, time, date, email, message, file1, file2, file3
    }, { hasTimestamps: true }).save()
      .then(user => res.json({ success: true }))
      .catch(err => res.status(500).json({ error: err }));
      
  } else {
    res.status(400).json(errors);
  }
});

router.get('/', authenticate, (req, res) => {
  const { activeFilter, search, pageSize, currentPage, filterDirection } = req.query;
  Requests.forge()
    .orderBy(activeFilter, filterDirection)
    .query(function(qb) {
      qb
        .where('name', '~*', search)
        .orWhere('email', '~*', search)
        .orWhere('phone', '~*', search)
    })
    .fetch()
    .then(function (collection) {
      const count = collection.length;
      const newCollection = collection.toJSON()
        .slice(pageSize*(currentPage - 1), pageSize*currentPage);
      const collectionFormatted = newCollection.map(
        (row) => {
          row.created_at = moment(row.created_at).format("MMM DD YYYY");
          return row
        }
      );
      res.json({error: false, data: collectionFormatted, count: Math.ceil(count/pageSize)});
    })
    .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
  });
});

router.get('/:id', authenticate, (req, res) => {
  Request.forge({id: req.params.id})
  .fetch()
  .then(
  (request) => {
    if (!request) {
      res.status(404).json({error: true, data: {}});
    }
    else {
      res.json({error: false, data: request.toJSON()});
    }
  })
  .catch(function (err) {
    res.status(500).json({error: true, data: {message: err.message}});
  });
});

export default router;
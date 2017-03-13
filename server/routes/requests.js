import express from 'express';
import commonValidations from '../shared/validations/request';
import isObjEmpty from 'lodash/isEmpty';

import Request from '../models/request';

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' }) // file type

let router = express.Router();

router.post('/', upload.single('myuploads'), (req, res) => {
  var isValid = true; // TODO: validate
  if ( isValid ) {
    
    // const { type, name, phone, time, date, email, message } = req.body;
    console.log(req.body);
    res.json({ success: true });
  } else {
    res.status(400).json(errors);
  }
});

export default router;
import express from 'express';
import commonValidations from '../shared/validations/request';
import isObjEmpty from 'lodash/isEmpty';

import Request from '../models/request';

import multer from 'multer';
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

export default router;
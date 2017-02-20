import express from 'express';
import Validator from 'validator';
import isObjEmpty from 'lodash/isEmpty';

let router = express.Router();

function validateInput(data) {
  let errors = {};
  if (Validator.isEmpty(data.username)) {
    errors.username = 'Something is wrong here...'
  }

  if (data.password == '') {
    errors.password = 'Something is wrong here...'
  }

  return {
    errors,
    isValid: isObjEmpty(errors)
  }
}

router.post('/', (req, res) => {
  const { errors, isValid } = validateInput(req.body);
  
  if ( !isValid ) {
    res.status(400).json(errors);
  }
});

export default router;
import Validator from 'validator';
import isObjEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};

  if (data.type === 'request-proposal') {
    if (Validator.isEmpty(data.name)) {
      errors.name = 'Something is wrong here...'
    }
    if (Validator.isEmpty(data.email)) {
      errors.email = 'Something is wrong here...'
    }
  }

  else if (data.type = 'request-call') {
    if (Validator.isEmpty(data.name)) {
      errors.name = 'Something is wrong here...'
    }
    
    if (Validator.isEmpty(data.phone)) {
      errors.phone = 'Something is wrong here...'
    }
    
    if (Validator.isEmpty(data.date)) {
      errors.date = 'Something is wrong here...'
    }
    
    if (Validator.isEmpty(data.time)) {
      errors.time = 'Something is wrong here...'
    }
  }
  else errors.general = 'Unknown request type'

  return {
    errors,
    isValid: isObjEmpty(errors)
  }
}
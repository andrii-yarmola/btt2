import Validator from 'validator';
import isObjEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
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
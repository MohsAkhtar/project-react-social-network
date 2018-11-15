// Validation for login
const isEmpty = require('./is-empty');
const validator = require('validator');

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  // Email Validations

  if (!validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  // Password Validations
  if (validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  // return object with any errors
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

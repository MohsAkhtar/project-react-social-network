// Validates the user registration inputs using Validator library
// Note: Validator can only check validation of strings not objects etc.
const isEmpty = require('./is-empty');
const validator = require('validator');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Validator can only take in strings so we check for empty strings using the created isEmpty function
  // If empty we are returning a string here so validator can work with it
  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';

  // Name Validations
  if (!validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 and 30 characters';
  }

  if (validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  // Email Validations

  if (!validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  // Password Validations

  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be between 2 and 30 characters';
  }

  if (validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  // Confirm Password Validations
  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
  }

  if (validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm password field is required';
  }

  // return object with any errors
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

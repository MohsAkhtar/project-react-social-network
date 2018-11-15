// Validation for login
const isEmpty = require('./is-empty');
const validator = require('validator');

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.company = !isEmpty(data.company) ? data.company : '';
  data.from = !isEmpty(data.from) ? data.from : '';

  // Experience Validations

  if (validator.isEmpty(data.title)) {
    errors.title = 'Job title field is required';
  }

  if (validator.isEmpty(data.company)) {
    errors.company = 'Company field is required';
  }

  if (validator.isEmpty(data.from)) {
    errors.from = 'From date field is required';
  }

  // return object with any errors
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

// Validates the user registration inputs using Validator library
// Note: Validator can only check validation of strings not objects etc.
const isEmpty = require('./is-empty');
const validator = require('validator');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  if (!validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 and 30 characters';
  }

  // return object with any errors
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

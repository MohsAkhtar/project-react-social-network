// Function used in app to check if given value is empty

const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().lenth === 0);

module.exports = isEmpty;
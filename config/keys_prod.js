// keep all production keys here
//module.exports makes object available outside of this file as we need to connect to it
module.exports = {
  mongoURI: process.env.MONGO_URI,
  secretOrKey: process.env.SECRET_OR_KEY
};

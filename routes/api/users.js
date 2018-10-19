// file to do with all login, authentication, passport etc.
const express = require('express'); // to use router we need to bring in express first
const router = express.Router();

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Users works' })); // res.json is similar to res.send except it is going to output json

// we have to export router in order for the server.js file to pick it up
module.exports = router;



var express = require('express');
var router = express.Router();

let jwt = require('jsonwebtoken');


router.get('/', function(req, res, next) {
  const token = jwt.sign({ role: 'user' }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.render('ticket',  {username: req.cookies['username'], title: 'Token', token: token} );
});


module.exports = router;

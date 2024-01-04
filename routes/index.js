var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/protected',(req,res) => {

  if(req.session.userid){
      res.send("Welcome User <a href=\'/logout'>click to logout</a>");
  }else
      res.render('index');
});

router.get('/logout',(req,res) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;

var express = require('express');
var router = express.Router();
const database = require("./database.json");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/user',(req,res) => {
  if(database.filter(r => r.username == req.body.username).length > 0 && database.filter(r => r.password == req.body.password).length > 0){
      req.session.userid=req.body.username;
      console.log(req.session)
      res.redirect('/protected');
  }
  else{
      res.render('index',{ error: 'Kredentzialak ez dira zuzenak'});
  }
})

module.exports = router;

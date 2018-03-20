var express = require('express');
var router = express.Router();
const User = require("../models/User");
const passport = require("passport");

/* GET users listing. */
router.post('/signup', function(req, res, next) {
  User.register(req.body, req.body.password, (err,user)=>{
    if(err) return res.send(err);
    return res.json(user);
  });
});

router.post('/login', 
passport.authenticate('local'),
(req,res)=>{
  return res.json(req.user);
})

router.post('/private', (req,res)=>{
 // res.json(req.user);
  if(req.isAuthenticated()){
    console.log("paso");
    res.json("pasaste");
    return;
  } 
    res.json("sin permiso");
  
  
});

module.exports = router;

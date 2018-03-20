var express = require('express');
var router = express.Router();
const multer = require("multer");
const uploads = multer({dest:'public/uploads'});

function isAuth(req,res, next){
	if(req.isAuthenticated()) return next();
	res.json("No has iniciado sesión");
}

router.post('/single', uploads.single('one'), (req,res)=>{
	res.json('http://localhost:3000/uploads/'+req.file.filename);
});

router.post('/array', uploads.array('photos'), (req,res)=>{
	let arraOfLinks = [];
	for (let file of req.files){
		arraOfLinks.push('http://localhost:3000/uploads/'+file.filename);
	}
	res.send(arraOfLinks);
});

router.post('/multiple', 
	isAuth,
	uploads.fields([
			{name:'profilePic', maxCount:1},
			{name:'galery', maxCount:12}
		]),
	(req,res)=>{
		console.log(req.body);
		let links={};
		let galeryArray = [];

		links['profilePic'] = 'http://localhost:3000/uploads/'+req.files.profilePic[0].filename;
		for(let file of req.files.galery){
			links['galery'] = galeryArray.push('http://localhost:3000/uploads/'+file.filename);
		}
		links['galery'] = galeryArray;
		//user.galery = links.galery;
		res.json(links);
	})




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

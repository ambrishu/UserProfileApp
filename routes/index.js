var express = require('express');
var userp = require('./user.js');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'User Profile' });
});
router.get('/index', function(req, res) {
  res.render('index', { title: 'User Profile' });
});
router.get('/registration', function(req, res) 
{
  res.render('registration', { title: 'Here you can register Your Self' });
});

router.get('/updateProfile', function(req, res) 
{
  res.render('updateProfile', { title: 'Here you can register Your Self' });
});

router.get('/user', function(req, res) {
	var session = req.session;
    var userID= session.userID;
   console.log('*****session.userID;-1********* '+userID);
   var user_Profile=userp.getUserProfile(userID.toString());
   console.log('*****UserProfile.userID;-1*********'+JSON.stringify(user_Profile));
  res.render('user', { userID: userID, userFName: user_Profile.firstName, userLName:user_Profile.lastName });
});
router.post('/loginsubmit', function(req, res) {
	
	console.log('We are here so form is submited'+JSON.stringify(req.body));
	var username = req.body.loginid;
	var session = req.session;
	
    var password = req.body.password;
	var userPr = userp.getUser(username);
	if(userPr)
	{
			session.userID=username;
			console.log('success with logon ID'+JSON.stringify(userPr));
			res.contentType('application/json');
			res.setHeader('Content-Type', 'application/json');
			var responce = [{"Status":true,"data":"user"}];
			console.log('Responce object length'+responce.length);
			res.end(JSON.stringify(responce));

	} else
	{
			console.log('success with logon ID'+JSON.stringify(userPr));
			res.contentType('application/json');
			res.setHeader('Content-Type', 'application/json');
			var responce = [{"Status":false,"data":" "}];
			console.log('Responce object length'+responce.length);
			res.end(JSON.stringify(responce));

		
	}
});

router.post('/registrationsubmit', function(req, res) {
	
	console.log(req.headers['content-type'])
	console.log('We are here in registrationsubmit form is submited'+JSON.stringify(req.body));
	var userProfileo =  { "loginid" : req.body.loginid, "hashpassword" : req.body.password, "firstName" : req.body.firstname , "lastName" : req.body.lastname , "emailID" : req.body.emailid , "mobileNumber" : req.body.mobile};
	console.log('WuserProfile object before adding data'+JSON.stringify(userProfileo));
    var success =userp.addUser(userProfileo);
	res.contentType('application/json');
	if (success)
	{
	console.log("New photo added");
    console.log(req.body.files);
	console.log('WuserProfile object after adding data');
	var session = req.session;
	session.userID= req.body.loginid;
	var responce = [{"Status":true}];
	console.log('Responce object length'+responce.length);
	res.end(JSON.stringify(responce));
	
	} else {
   
   console.log('WuserProfile object fail to  adding data');
	var responce = [{"Status":false}];
	console.log('Responce object length'+responce.length);
	res.end(JSON.stringify(responce));
	}
	
});
router.post('/imageUpload', function(req, res) {
	
	console.log(req.headers['content-type'])
	console.log('We are here in imageupad form is submited'+JSON.stringify(req.body));
	console.log("New photo added");
    console.log(req.files.file.name);
	var session = req.session;
    var userID= session.userID;
   console.log('*****session.userID;-1********* '+userID);
   var user_Profile=userp.getUserProfile(userID.toString());
    user_Profile.imagePath=  req.files.file.name;
	
   console.log('*****UserProfile.userID;-2*********'+JSON.stringify(user_Profile));
   var updateStatus=userp.updateUserProfile(user_Profile);
	
	res.contentType('application/json');
	if (upload_success)
	{
	console.log('WuserProfile object after adding data');
	var responce = [{"Status":true}];
	console.log('Responce object length'+responce.length);
	res.end(JSON.stringify(responce));
	
	} else {
   
   console.log('WuserProfile object fail to  adding data');
	var responce = [{"Status":false}];
	console.log('Responce object length'+responce.length);
	res.end(JSON.stringify(responce));
	}
	
});

router.get('/getProfileData', function(req, res) {
	var session = req.session;
    var userID= session.userID;
   console.log('*****session.userID;-1********* '+userID);
   var user_Profile=userp.getUserProfile(userID.toString());
   console.log('*****UserProfile.userID;-2*********'+JSON.stringify(user_Profile));
  res.contentType('application/json');
	res.end(JSON.stringify(user_Profile));
});
router.post('/updateProfleSubmit', function (req, res){
	var session = req.session;
    var userID= session.userID;
	 console.log('*****UserProfile.userID;-2*********'+JSON.stringify(req.body));
	 var updateStatus=userp.updateUserProfile(req.body);
	 var data = 'user';
	res.header('Content-Length', data.length);
	res.end(data);
	
});

module.exports = router;

var cache={};
var userProfile =[ { "loginid" : "ambrishu", "hashpassword" : "1q2w3e4r", "firstName" : "Ambrish" , "lastName" : "Upadhyay" , "emailID" : "amb@amb.com" , "mobileNumber" : "9989820631" , "imagePath": "D:\\jnode\\learning\\UserProfiling\\userProfileApp\\upload\\telephone1424658323.jpg"},
						   { "loginid" : "amrita", "hashpassword" : "manyou07", "firstName" : "amrita" , "lastName" : "Upadhyay" , "emailID" : "asd@amb.com" , "mobileNumber" : "9989821631" , "imagePath": "D:\\jnode\\learning\\UserProfiling\\userProfileApp\\upload\\telephone1424658323.jpg"}];


var addUser = function ( userProfile_new )

{
	console.log("***** Ading the user profile user");
	var old_length=userProfile.length;
	console.log("***** old_length t****"+old_length);

	var new_length=userProfile.push(userProfile_new);
		console.log("***** new_length ****"+new_length);

	if(new_length>old_length)
	{
		return true;
	}else { return false; }
}

var getUser = function ( loginid ) {
	console.log('We are in verified function'+loginid);
	var loginID_new = loginid;
	console.log('We are in verified userProfile.length'+ userProfile.length.toString());
	for (var i= 0, len=userProfile.length; i < len ; i++)
		{
		var old_userProfile=userProfile [i];
		console.log('We are in verified old_userProfile function '+old_userProfile.loginid);
		console.log('XXXXXXXXXXXXX' );
		if(JSON.stringify(old_userProfile.loginid) === JSON.stringify(loginID_new))
		{
			console.log('We are done with verified function');
	
		    return true;
		
		}
	}
	
	
}

var getUserProfile = function ( loginid ) 

{
	console.log('We are in verified function'+loginid);
	var loginID_new = loginid;
	console.log('*****getUserProfile-1********* '+ userProfile.length.toString());
	for (var i= 0, len=userProfile.length; i < len ; i++)
	{
		var old_userProfile=userProfile [i];
		console.log('*****getUserProfile-2********* '+old_userProfile.loginid);
		if(JSON.stringify(old_userProfile.loginid) === JSON.stringify(loginID_new))
		{
			console.log('We are done with verified function');
	
		    return old_userProfile;
		
		}
	}
	
	
}
var updateUserProfile =function(userProfile_u)
{
	console.log('*****UpdateUserProfile********* '+ JSON.stringify(userProfile_u));
	for (var i= 0, len=userProfile.length; i < len ; i++)
	{
		var old_userProfile=userProfile [i];
		console.log('*****getUserProfile-2********* '+old_userProfile.loginid);
		if(JSON.stringify(old_userProfile.loginid) === JSON.stringify(userProfile_u.loginid))
		{
			console.log('We are done with verified function');
			userProfile [i] =userProfile_u;
	        console.log('*****new updated profile for the user-2*********'+JSON.stringify(userProfile [i]));
			return true;
		
		}
	}
		
}

exports.userProfile= userProfile;
exports.addUser= addUser;
exports.getUser= getUser;
exports.getUserProfile= getUserProfile;
exports.updateUserProfile= updateUserProfile;
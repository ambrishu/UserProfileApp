var cache={};

var userProfile = { loginid : "ambrishu", hashpassword : "1q2w3e4r", user : [ {firstName : "Ambrish" , lastName : "Upadhyay" , emailID : "amb@amb.com" , mobileNumber : "9989820631" }] };

var addUser = function ( userProfile )

{
	var cache_size= cache.length;
	cache_size++;
	cache.cache_size++ = userProfile

}

var getUser = function ( loginid ) 

{
	var loginID_new = loginid;
	for (var i= 0, len= cache.length; i < len ; i++)
	{
		var old_userProfile=cache [i];
		If (old_userProfile.loginid === loginID_new;
		return true;
	}
	
	
}

//module.exports=cacheUserProfile;
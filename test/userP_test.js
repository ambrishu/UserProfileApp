var expect = require('chai').expect;
var userp = require('../routes/user.js');
var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);



describe ("High Level test driver", function () {
	
		describe("userProfile Array" , function() {
			it("Test the initial length of Array " ,function(){
				
				var current_length= userp.userProfile.length;
				console.log("Lenth of Array"+current_length);
				expect(current_length).to.equal(2);
							
			});
			it("Test the add Object of Array " ,function(){
				
				var current_length= userp.userProfile.length;
				var new_userProfile={ "loginid" : "mamd", "hashpassword" : "csdfg", "firstName" : "Amar" , "lastName" : "Sharma" , "emailID" : "asd@amar.com" , "mobileNumber" : "6023266026" , "imagePath": "D:\\jnode\\learning\\UserProfiling\\userProfileApp\\upload\\telephone1424658323.jpg"};
				var result= userp.addUser(new_userProfile);
				console.log("Status of Add Operation"+result);
				expect(result).to.equal(true);
							
			});
			it("test the Request to Server" , function() {
								console.log("******************");

								chai.request('http://localhost:8080').get('/').end(function(error, res) { console.log("Responce Receive"+res);});

				
			});
			
		});
		
});
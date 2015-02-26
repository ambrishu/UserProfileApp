 var app= angular.module("myapp", []);
 

 app.controller("MyController", function($scope, $http) {
				$scope.myForm = {};
				$scope.myForm.loginid = "Jakob";
				$scope.myForm.password  = "Jenkov";
				
				var formData=$scope.myForm;
				$scope.submitForm= function (items, event)
				{
					console.log("Posting the data"+ JSON.stringify(formData));
					
					var req= $http.post('/loginsubmit', JSON.stringify(formData));
					req.success(function(data){ 
					
				   	console.log("Response receive from login"+ JSON.stringify(data));
					console.log("Response receive from login"+ JSON.stringify(data[0].Status));
					if (data[0].Status)
					{
						window.location = data[0].data.toString()
						
					} else {
						
						document.getElementById('error_message').style.display = 'block';
					
					}
					});
					req.error(function(){ alert(error);});
				
				}
				
} );

 app.controller("userRegistration", function($scope, $http) {
				$scope.myForm = {};
				$scope.myForm.loginid = "ishitau";
				$scope.myForm.password  = "manyou07";
				$scope.myForm.firstname  = "ishita";
				$scope.myForm.lastname  = "upadhyay";
				$scope.myForm.email  = "ishita@yahoo.com";
				$scope.myForm.mobile  = "9989820631";

				console.log("Posting the data"+ JSON.stringify($scope.myForm	));
				
				$scope.submitRegistration= function (items, event)
				{
					console.log("Posting the data"+ JSON.stringify($scope.myForm));
					console.log("Posting the file data"+ $scope.myForm.image);

					var req= $http.post('/registrationsubmit', JSON.stringify($scope.myForm));
					req.success(function(data)
					{ 
					
					console.log("Response receive from login"+ JSON.stringify(data[0].Status));
					if (JSON.stringify(data[0].Status))
					{
					console.log("&&&&&&&&&&&&&&&"+ JSON.stringify(data[0].Status));
					var fd = new FormData();
					console.log("&&&&&&&&&&&&&&&"+ $scope.myForm.image);
					fd.append('file', $scope.myForm.image);
					var req_upload= $http.post('/imageUpload', fd, {transformRequest: angular.identity, headers: {'Content-Type': undefined}});
					req_upload.success(function(data){window.location = "index";});
					req_upload.error(function(){alert(error);});
					} else  {
						console.log("Response receive from login"+ JSON.stringify(data.Status));
					}
						
					});
					
					
					req.error(function(){ alert(error);});
				
				}
				$scope.uploadFile = function(files)
				{
				console.log ("****File data***"+files);
				$scope.myForm.image=files[0];
				}
	
				
				
} );

app.controller("updateProfile", function ($scope, $http) {
	
$scope.init=function()

{
					var req= $http.get('/getProfileData');
					req.success(function(data){ 
					console.log("******Got the updated profile data"+JSON.stringify(data));
					$scope.myForm=data;
					console.log("******Got the updated profile data"+$scope.myForm.imagePath);
					});
					req.error(function(){ alert(error);});
	
}
$scope.submitUpdateProfle=function()
{
	var req= $http.post('/updateProfleSubmit', JSON.stringify($scope.myForm));
	req.success(function(data){ 
	var fd = new FormData();
	console.log("&&&&&&&&&&&&&&&");
	fd.append('file', $scope.myForm.image);
	var req_upload= $http.post('/imageUpload', fd, {transformRequest: angular.identity, headers: {'Content-Type': undefined}});
	req_upload.success(function(data){window.location = "user";});
	req_upload.error(function(){alert(error);});

	window.location = data.toString()});
	req.error(function(){ alert(error);});
	
}

$scope.uploadFile = function(files)
			{
			console.log ("****File data***"+files);
			$scope.myForm.image=files[0];
			}
	
	
	
	
	
	
	
	
});



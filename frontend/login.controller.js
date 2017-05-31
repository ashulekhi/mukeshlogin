
var app = angular.module('myapp');

app.controller('loginCtrl' ,function($scope , $http ,$state){
	console.log('controller inititated');



	$scope.logIn = function(){
		console.log(">>>> login clicked")
		var user = {}
		user.name = $scope.name;
		user.pass = $scope.pass;
		$http({
			method:'GET',
			url:'/login/getUser',
			params:user



		}).then(function(response){
          console.log('respons' ,response);
		  $state.go('user');
		})
	}




})

.controller('profileCtrl' , function($scope,$http){
     $http({
     	method:'GET',
		 url:'login/getAllUsers'
	 }).then(function(response){
	 	console.log(':::::' , response);
	 	$scope.users = response.data;
	 })
	 // $scope.users = [{name:'ashu'},{name:'mukesh'}]


	$scope.deleteUsers = function(){
     	$http({
     		method:'POST',
			url:'login/deleteUsers'
		})
			.then(function(res){
				console.log("?????" ,res);
			})
	}
});

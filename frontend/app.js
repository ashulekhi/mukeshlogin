angular.module('myapp',['ui.router'])


.config(function($stateProvider,$urlRouterProvider,$locationProvider){

	console.log('this is cofig block')
	$locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});

// $urlRouterProvider.otherwise('/login')
})

.run(function($state){
console.log('>>>>>this app is running ')
// $state.go('login');


});



app.config(function($stateProvider){

$stateProvider.state('login',{
url:'/login1',
templateUrl:'/login.html',
controller:'loginCtrl'
})


    .state('user' , {
        url:'users',
        templateUrl:'/users.html',
        controller: 'profileCtrl'
    })

})




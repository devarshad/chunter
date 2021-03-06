angular.module('routes',['ngRoute'])
.config(['$routeProvider','$locationProvider','$httpProvider',function($routeProvider,$locationProvider,$httpProvider){
	$routeProvider
		.when('/chat/index',{templateUrl:'/Angular/templates/chat/index.htm',
					controller:'chatController'})
		.when('/chat/error',{templateUrl:'/Angular/templates/error/index.htm',
					controller:'errorController'})
		.otherwise({redirectTo:'/error'})
	$locationProvider.html5Mode(true);
}]);
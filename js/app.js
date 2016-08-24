var app = angular.module('myApp', ['ngRoute']);

    app.config(function($routeProvider){
    		$routeProvider
    			.when('/', {templateUrl: 'partials/home.html', controller: 'PostController'})
    			.when('/comments/:id', {templateUrl: 'partials/comments.html', controller: 'CommentsController'})
    			.otherwise({redirectTo: '/'});
    });
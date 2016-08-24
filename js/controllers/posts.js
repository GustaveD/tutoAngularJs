app.controller('PostController', function($scope, PostFactory, $rootScope){
	$rootScope.loading = true;
	$scope.posts = PostFactory.getPosts().then(function(posts){
		$rootScope.loading = false;
		$scope.posts = posts;
	}, function(msg){
		alert(msg);
	});

});
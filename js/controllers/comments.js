app.controller('CommentsController', function($scope, PostFactory, $routeParams, $routeScope) {

	$routeScope.loading = true;
	$scope.newComment = {};

	var post = PostFactory.getPost($routeParams.id).then(function(post){
		$routeScope.loading = false;
		$scope.title = post.name;
		$scope.comments = post.comments;
	}, function(msg){
		alert(msg);
	});

$scope.addComment = function(){
		$scope.comments.push($scope.newComment);
		Post.add($scope.newComment).then(function(){

		}, function(){
			alert('votre message n\' a pas pu etre sauve');
		})
		$scope.newComment = {};
	}

});
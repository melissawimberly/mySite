var postControllers = angular.module('postControllers', ['ngAnimate']);

postControllers.controller('ListController', ['$scope','$http',function($scope, $http){
	$http.get('js/data.json').success(function(data){
		$scope.posts = data;
		$scope.postOrder = 'name'	
	});
}]);


postControllers.controller('DetailsController', ['$scope','$http', '$routeParams',function($scope, $http, $routeParams){
	$http.get('js/data.json').success(function(data){
		$scope.posts = data;
		$scope.whichItem = $routeParams.itemId;	
	
		if($routeParams.itemId > 0){
			$scope.prevItem = Number($routeParams.itemId) - 1;
		} else{
			$scope.prevItem = $scope.posts.length - 1;

		}

		if($routeParams.itemId < $scope.posts.length - 1){
			$scope.nextItem = Number($routeParams.itemId) + 1;
		} else{
			$scope.nextItem = 0;

		}

	});
}]);

angular.module('website', ['ngAnimate'])
    .controller('MainCtrl', function ($scope) {
    	$scope.slides = [
    		{image: 'images/cover.jpg', description:' Cover Image'},
    		{image: 'images/carousel/traveler.jpg', description:' Image'},
    		{image: 'images/carousel/yogaSitting.jpg', description:' Image'},
    		{image: 'images/yogaShapes.jpg', description:' Image'},
    		{image: 'images/carousel/masonjars.jpg', description:' Image'},
    		{image: 'images/sunglasses.jpg', description:' Image'},

    	]
     });
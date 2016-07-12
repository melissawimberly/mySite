var myApp = angular.module('myApp', [
	'ngRoute',
	'siteControllers'
]);

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/home', {
		templateUrl: 'partials/home.html',
		controller: 'CarouselCtrl'
	}).
	when('/portfolio',{
		templateUrl: 'partials/portfolio.html',
		controller: 'PortfolioCtrl'
	}).
	when('/about', {
		templateUrl: 'partials/about.html',
		controller: 'AboutCtrl'
	})
	otherwise({
		redirectTo: '/home'
	});
}]); 
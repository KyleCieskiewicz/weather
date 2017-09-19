var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.config(function($routeProvider) {

	$routeProvider

	.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'homeController',
			data: {
				background: 'home'
			}
	})

	.when('/forecast', {
			templateUrl: 'templates/forecast.html',
			controller: 'forecastController',
			data: {
				background: 'forecast'
			}
	})

	.when('/forecast/:days', {
			templateUrl: 'templates/forecast.html',
			controller: 'forecastController',
			data: {
				background: 'forecast'
			}
	})

	.otherwise('/', {
			templateUrl: 'templates/home.html',
			controller: 'homeController'
	});



});










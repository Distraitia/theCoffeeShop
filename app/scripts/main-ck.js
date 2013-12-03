console.log('\'Allo \'Allo!');

console.log("Let's do this!");

angular.module('coffeeHouseApp', ['ngRoute', 'ngAnimate'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'homeCtrl'
			})
		})
	})

var app = angular.module('coffeeHouseApp');

app.controller('HomeCtrl', function() {
	console.log('HomeCtrl');
})
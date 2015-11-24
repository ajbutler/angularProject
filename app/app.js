'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'phonecatAnimations',
  'myApp.home',
  'myApp.gallery',
  'myApp.version',
  'phonecatServices'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);

'use strict';

var gallery =  angular.module('myApp.gallery', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gallery', {
    templateUrl: 'partials/gallery/gallery.html',
    controller: 'galleryCtrl'
  }).when('/gallery/category/:category', {
        templateUrl: 'partials/gallery/gallery.html',
        controller: 'categoryCtrl'
   }).when('/gallery/details/:phoneId', {
        templateUrl: 'partials/gallery/gallery-details.html',
        controller: 'PhoneDetailCtrl'
   });
}])


gallery.controller('galleryCtrl', ['$scope', 'Phone', 
  function($scope, Phone) {
  $scope.phones = Phone.query();
  $scope.orderProp = 'date';
}]);

gallery.controller('categoryCtrl', ['$scope', '$routeParams', 'Phone', 
  function($scope, $routeParams, Phone) {
  $scope.phones = Phone.query();
  $scope.categoryId = $routeParams.category;
  $scope.orderProp = 'date';
}]);

gallery.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone', 
  function($scope, $routeParams, Phone) {
  $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
  });
}]);
'use strict';

var view2 =  angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'partials/view2/view2.html',
    controller: 'View2Ctrl'
  }).when('/view2/:phoneId', {
        templateUrl: 'partials/view2/view2-details.html',
        controller: 'PhoneDetailCtrl'
   });
}])


view2.controller('View2Ctrl', ['$scope', 'Phone', 
  function($scope, Phone) {
  $scope.phones = Phone.query();
  $scope.orderProp = 'date';
}]);

view2.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone', 
  function($scope, $routeParams, Phone) {
  $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
  });
}]);
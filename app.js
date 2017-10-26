var app = angular.module("libretaApp", ['ngRoute']);
app.controller("mainCtrl", ['$scope', function ($scope) {
  $scope.message = "Mi primera aplicacion completa!"
}]);

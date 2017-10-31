angular.module('myApp.page1', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/page1', {
      templateUrl: 'page1/page1.html',
      controller: 'page1Ctrl'
    });
  }])
  .controller('page1Ctrl', function() {
    console.log("Page 1");
  });

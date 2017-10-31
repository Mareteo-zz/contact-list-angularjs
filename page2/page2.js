angular.module('myApp.page2', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/page2', {
      templateUrl: 'page2/page2.html',
      controller: 'page2Ctrl'
    });
  }])
  .controller('page2Ctrl', function() {
    console.log("Page 2");
  });

angular.module('myApp.page2', ['ngRoute', 'firebase'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/page2', {
      templateUrl: 'page2/page2.html',
      controller: 'page2Ctrl'
    });
  }])
  .controller('page2Ctrl', function($scope, $firebaseArray) {
    $scope.addContact = function (){
      var ref = firebase.database().ref("contacts");
      $firebaseArray(ref).$add($scope.contact)
      .then(function (ref) {
        $scope.contact.name = "";
        $scope.contact.email = "";
        $scope.contact.phone = "";
        $scope.contact.note = "";
      },
      function(error){
        console.log(error);
      }
    )
    };
  });

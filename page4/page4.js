angular.module('myApp.page3', ['ngRoute', 'firebase'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/page3/:id', {
      templateUrl: 'page3/page3.html',
      controller: 'page3Ctrl'
    });
  }])
  .controller('page3Ctrl', function($scope, $firebaseArray, $firebaseObject, $routeParams) {
    var id = $routeParams.id;
    var ref = firebase.database().ref("contacts/" + id);
    $scope.contact = $firebaseObject(ref);

    $scope.editContact = function (id) {
      var ref = firebase.database().ref("contacts/"+id);
      ref.update({
        name: $scope.contact.name,
        email: $scope.contact.email,
        phone: $scope.contact.phone,
        note: $scope.contact.note,
      })
      .then(function(ref){
        $scope.contact.name = "";
        $scope.contact.email = "";
        $scope.contact.phone = "";
        $scope.contact.note = "";
      },function(error){
        console.log(error);
      }
      );
    }

  });

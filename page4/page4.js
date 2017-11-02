angular.module('myApp.page4', ['ngRoute', 'firebase'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/page4/:id', {
      templateUrl: 'page4/page4.html',
      controller: 'page4Ctrl'
    });
  }])
  .controller('page4Ctrl', function($scope, $firebaseArray, $firebaseObject, $routeParams) {
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

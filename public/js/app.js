var myApp = angular.module('myApp', ["firebase"]);

myApp.controller('mainController', ['$scope', '$filter', '$http', '$firebaseObject', '$firebaseArray', function ($scope, $filter, $http, $firebaseObject, $firebaseArray) {


    // GETS DATA FROM FIREBASE
    var firebase = new Firebase("https://angularunderstanding.firebaseio.com/");


    $scope.rulename = $firebaseArray(firebase);
    $scope.newRule = "";


    $scope.addRule = function () {
        $scope.rulename.$add({
          rulename: $scope.newRule
        });
        $scope.newRule = "";
    };


    // GETS THE WHOLE OBJECT
    // var ref = new Firebase("https://angularunderstanding.firebaseio.com/");
    // var syncObject = $firebaseObject(ref);
    // syncObject.$bindTo($scope, "data");


    //GETS DATA FROM LOCAL SERVER
    $http.get('/api')
        .success(function (result) {
            console.log(result.rules);
         })
         .error(function (data, status) {
             console.log(data, error)
         });



    
}]);

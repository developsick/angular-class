(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
    $scope.name = "devsick"
    $scope.sayHello = function () {
        return "Hello Coursera!";
    };
});

})();
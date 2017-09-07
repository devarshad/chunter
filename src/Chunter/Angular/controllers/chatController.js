angular.module('controllers')
.controller('chatController', ['$scope',function ($scope) {
    $scope.user = { name: "", email: "", mobile: "", message: "" };

    $scope.addUser = function () {
        if ($scope.form.$valid) {

        }
    }

}])
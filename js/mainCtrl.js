angular.module('assessment').controller("mainCtrl", function($scope, mainService) {
    $scope.test = "Test";
    $scope.serviceTest = mainService.test;
})
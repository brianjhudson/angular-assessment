angular.module("assessment").directive("productDirective", function() {
    return {
        restrict: 'AE',
        replace: true,
        scope: {},
        templateUrl: "../views/product-details.html",
        controller: function($scope) {
            $scope.test = "Directive Working";
        }
    }
})
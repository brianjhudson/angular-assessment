angular.module("assessment").directive("productDirective", function() {
    return {
        restrict: 'AE',
        replace: true,
        scope: {
            product: "="
        },
        templateUrl: "../views/product-tmpl.html",
        controller: function($scope, $state) {
            $scope.test = "Directive Working";
            $scope.viewProduct = id => {
                $state.go("product-details", {id: id});
            }

        }
    }
})
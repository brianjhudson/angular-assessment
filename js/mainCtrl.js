angular.module('assessment').controller("mainCtrl", function($scope, $state, mainService) {
    mainService.getProducts().then(response => {
        $scope.products = response.data;
        console.log($scope.products);
    })
    $scope.imageHide = () => {
        $scope.hideImage = true;
        console.log($scope.hideImage);
    }
})
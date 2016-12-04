angular.module('assessment').config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "../views/home.html",
            controller: "mainCtrl"
        })
        .state('about', {
            url: "/about",
            templateUrl: "../views/about.html",
            controller: "mainCtrl"

        })
        .state('blog', {
            url: "/blog",
            templateUrl: "../views/blog.html",
            controller: "mainCtrl"
        })
        .state('shop', {
            url: "/shop",
            templateUrl: "../views/shop.html",
            controller: "mainCtrl"
        })
        .state('product-details', {
            url: "/product-details",
            templateUrl: "../views/product-details.html",
            controller: function($scope, $stateParams, mainService) {
                console.log($stateParams.id);
                mainService.getProductDetails($stateParams.id).then(result => {
                    $scope.product = result.data;
                })
            },
            params: {id: null}
        })

    $urlRouterProvider.otherwise("/");
})
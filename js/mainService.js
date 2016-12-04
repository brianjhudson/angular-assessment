angular.module("assessment").service("mainService", function($http) {
    this.test = "Service working";
    this.getProducts = () => {
        return $http.get("http://practiceapi.devmounta.in/products").then(response => response);
    }
    this.getProductDetails = id => {
        return $http.get("http://practiceapi.devmounta.in/products/" + id).then(response => response);
    }
})
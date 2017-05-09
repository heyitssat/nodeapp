var app = angular.module("ui.bootstrap.demo", ['ngRoute','ngAnimate', 'ngSanitize', 'ui.bootstrap']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : "/javascripts/home.ejs",
            controller: "AccordionDemoCtrl",
        })
        .when('/login' , {
            templateUrl : "/javascripts/temp.ejs"
        })
        .when("/profile", {
            templateUrl : "/javascripts/profile.ejs"
        })
        .otherwise({
            redirectTo:'/'
        });

});
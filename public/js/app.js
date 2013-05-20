angular.module("myApp",[]).config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider.
        when("/", {templateUrl: "/partials/first"}).
        when("/first", {templateUrl: "/partials/first"}).
        when("/second", {templateUrl: "/partials/second"}).
        otherwise({redirectTo: "/"});
});
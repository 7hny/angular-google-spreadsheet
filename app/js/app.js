'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/partial1.html', controller: 'FrontCtrl'});
    $routeProvider.when('/add', {templateUrl: 'partials/partial2.html', controller: 'AddCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);

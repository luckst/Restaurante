'use strict';

// Declare app level module which depends on views, and components
angular.module('restauranteApp', []);

restauranteApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/mesas', {
      templateUrl: '/views/mesas/mesas.html',
      controller: 'mesasController'
    }).
    otherwise({
      redirectTo: '/mesas'
    });
  }]);

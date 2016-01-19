/**
 * Created by lucas on 17/01/2016.
 */
'use strict';

/* Controllers */

var mesasController = angular.module('mesasController', []);

mesasController.controller('mesasController', ['$scope', function($scope) {
    $scope.mensaje="hola";
    $scope.mesas = [
        {
            "numero":1,
            "estado":'O'
        },
        {
            "numero":2,
            "estado":'D'
        },
        {
            "numero":3,
            "estado":'R'
        }
    ];
}]);

/*
mesasController.controller('mesasList',['$scope','$http'],
    function($scope,$http){
        $scope.mesas = [
            {
                "numero":1,
                "estado":'O'
            },
            {
                "numero":2,
                "estado":'D'
            },
            {
                "numero":3,
                "estado":'R'
            }
        ];
    });*/

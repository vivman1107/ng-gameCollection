'use strict';

angular.module('gameCollectionApp')
    .service('GameService', function($http) {
        var gameSvc = {};

        gameSvc.getGames = function() {
            return $http.get('http://localhost:8080/api/games')
                .then(function (response) {
                    return response.data;
                }, function(response) {
                    console.log(response);
                });
        };

        return gameSvc;
    });
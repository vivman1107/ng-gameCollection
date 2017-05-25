'use strict';

angular.module('gameCollectionApp')
    .service('GameService', function($http) {
        var gameSvc = {};

        gameSvc.getGames = function() {
            return $http.get('http://localhost:8080/api/games')
                .then(function(response) {
                    return response.data;
                }, function(response) {
                    console.log(response);
                });
        };

        gameSvc.addGame = function(data) {
            return $http.post('http://localhost:8080/api/games', data)
                .then(function(response) {
                    return response.data;
                }, function(response) {
                    console.log(response);
                });
        };

        gameSvc.getGame = function(gameID) {
            return $http.get('http://localhost:8080/api/games/' + gameID)
                .then(function(response) {
                    return response.data;
                }, function(response) {
                    console.log(response);
                });
        };

        gameSvc.updateGame = function(data) {
            return $http.put('http://localhost:8080/api/games/' + data._id, data)
                .then(function(response) {
                    return response.data;
                }, function(response) {
                    console.log(response);
                });
        };

        gameSvc.deleteGame = function(gameID) {
            return $http.delete('http://localhost:8080/api/games/' + gameID)
                .then(function(response) {
                    return response.data;
                }, function(response) {
                    console.log(response);
                });
        };

        return gameSvc;
    });
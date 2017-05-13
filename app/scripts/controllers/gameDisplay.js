'use strict';

angular.module('gameCollectionApp')
    .controller('GameDisplayController', function($scope, GameService) {
        $scope.gameList = [];

        GameService.getGames()
            .then(function(response) {
                $scope.gameList = response;
            });
    });
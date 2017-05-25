'use strict';

angular.module('gameCollectionApp')
    .controller('UpdateGameController', function($scope, GameService, $stateParams, Notification) {
        $scope.gameDetail = {}; // set an empty object as the default game detail

        // Call the get game function in the game service to get the game with the current ID
        GameService.getGame($stateParams.id)
            .then(function(response) {
                $scope.gameDetail = response; // set game detail to the response from get game
            });
        
        $scope.updateGame = function() {
            GameService.updateGame($scope.gameDetail)
                .then(function(response) {
                    if (response.message === 'Game updated!') {
                        $scope.$emit('updateGameList', 'refresh'); // Emit the update game list event so that the game list will be updated
                        Notification.success('Game updated!');
                    }
                    else {
                        Notification.error('An error occurred!');
                    }
                });
        };
    });
'use strict';

angular.module('gameCollectionApp')
    .controller('GameDisplayController', function($scope, GameService, Notification) {
        $scope.gameList = []; // set an empty array as the default game list
        $scope.sortType     = 'name'; // set the default sort type
        $scope.sortReverse  = false;  // set the default sort order

        // Function to call the get games function in the game service to get all games
        $scope.updateGameList = function() {
            GameService.getGames()
                .then(function(response) {
                    $scope.gameList = response; // set game list to the response from get games
                });
        };

        // Function to delete a game
        $scope.deleteGame = function(gameID) {
            GameService.deleteGame(gameID)
                .then(function(response) {
                    if (response.message === 'Successfully deleted') {
                        $scope.updateGameList();
                        Notification.success('Game deleted!');
                    }
                    else {
                        Notification.error('An error occurred!');
                    }
                });
        };
        
        // Update the game list when the update game list event is emitted or broadcasted
        $scope.$on('updateGameList', function() {
            $scope.updateGameList();
        });

        // Update the game list on controller load
        $scope.updateGameList();
    });
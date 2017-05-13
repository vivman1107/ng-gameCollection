'use strict';

angular.module('gameCollectionApp')
    .controller('GameDisplayController', function($scope, GameService) {
        $scope.gameList = []; // set an empty array as the default game list
        $scope.sortType     = 'name'; // set the default sort type
        $scope.sortReverse  = false;  // set the default sort order

        // Call the get games function in the game service to get all games
        GameService.getGames()
            .then(function(response) {
                $scope.gameList = response; // set game list to the response from get games
            });
    });
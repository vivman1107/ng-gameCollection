'use strict';

angular.module('gameCollectionApp')
    .controller('AddGameController', function($scope, GameService, Notification) {
        $scope.newGame = {
            'name': '',
            'platform': '',
            'genre': '',
            'format': ''
        };

        $scope.addGame = function() {
            GameService.addGame($scope.newGame)
                .then(function(response) {
                    if (response.message === 'Game created!') {
                        Notification.success('Game created!');
                    }
                    else {
                        Notification.error('An error occurred!');
                    }

                    $scope.resetForm();
                });
        };

        $scope.resetForm = function() {
            $scope.newGame = {
                'name': '',
                'platform': '',
                'genre': '',
                'format': ''
            };
        };
    });
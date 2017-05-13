'use strict';

/**
 * @ngdoc overview
 * @name gameCollectionApp
 * @description
 * # gameCollectionApp
 *
 * Main module of the application.
 */
var gameCollectionApp = 
  angular.module('gameCollectionApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        views: {
          'header': {
            templateUrl: 'views/header.html'
          },
          'content': {
            templateUrl: 'views/gameDisplay.html',
            controller: 'GameDisplayController'
          },
          'footer': {
            templateUrl: 'views/footer.html'
          }
        }
      });
  }]);

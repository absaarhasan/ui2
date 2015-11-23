(function() {

    'use strict';

    angular.module('ui2.home', ['ui.router'])
        .factory('homeService', homeService)
        .controller('HomeCtrl',  HomeCtrl)
        .directive('screenShot', screenShot)
        .config(function($stateProvider) {

            $stateProvider
                .state('pagination', {
                    url: "/",
                    parent: 'main',
                    templateUrl: "views/home/home.html",
                    controller: 'HomeCtrl',
                    controllerAs: 'vm'
                })

        });


   HomeCtrl.$inject = ['homeService'];

    function HomeCtrl(homeService ) {

        homeService.activate()

    }


})();
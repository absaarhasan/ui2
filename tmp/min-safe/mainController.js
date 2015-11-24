(function() {

        'use strict';

        angular.module('ui2.main', ['ui.router'])
            .factory('mainService', mainService)
            .controller('MainCtrl',  MainCtrl)
            .directive('banner', banner)
            .config(['$stateProvider', function($stateProvider) {
                $stateProvider

                    .state('main', {
                        abstract: true,
                        templateUrl: "views/shared/main.html",
                        controller: 'MainCtrl',
                        controllerAs: 'vm'
                    })

            }]);

        MainCtrl.$inject = [ '$rootScope', 'mainService'];

        function MainCtrl( $rootScope, mainService) {

            /* jshint validthis: true */
            var vm = this;

            vm.menuState = mainService.menuState;
            vm.menuDisplay = mainService.menuDisplay;

            mainService.activate()

        }


})();


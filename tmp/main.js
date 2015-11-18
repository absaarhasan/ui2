
'use strict';

//paginatedService.$inject = ['$http'];

function homeService(  ) {

    var service = {

    };

    return service;

}
(function() {

    'use strict';

    angular.module('ui2.home', ['ui.router'])
        .factory('homeService', homeService)
        .controller('HomeCtrl',  HomeCtrl)
        .config(['$stateProvider', function($stateProvider) {

            $stateProvider
                .state('pagination', {
                    url: "/",
                    parent: 'main',
                    templateUrl: "views/home/home.html",
                    controller: 'HomeCtrl',
                    controllerAs: 'vm'
                })

        }]);


   HomeCtrl.$inject = ['homeService'];

    function HomeCtrl(homeService ) {



    }


})();

    'use strict';

//    mainService.$inject = ['$state', '$timeout'];

    function mainService( ) {


        var service = {

            splash: { state: true },
            closeSplash: closeSplash

        };

        return service;


        function closeSplash(display) {

            service.splash.state = display;

        }


    }


(function() {

        'use strict';

        angular.module('ui2.main', ['ui.router'])
            .factory('mainService', mainService)
            .controller('MainCtrl',  MainCtrl)
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

            vm.splash = mainService.splash;
            vm.closeSplash = mainService.closeSplash;

        }


})();


(function() {

    'use strict';

    angular.module('ui2', ['ui.router','hmTouchEvents','ui2.main','ui2.home'])

        .config(['$urlRouterProvider', function( $urlRouterProvider) {

            $urlRouterProvider.otherwise("/");

        }])

})();



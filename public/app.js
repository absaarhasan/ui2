(function() {

    'use strict';

    angular.module('ui2', ['ui.router','hmTouchEvents','ui2.main','ui2.home'])
        .directive('scroll', scroll)
        .config(function( $urlRouterProvider) {

            $urlRouterProvider.otherwise("/");

        })

})();



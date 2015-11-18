
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


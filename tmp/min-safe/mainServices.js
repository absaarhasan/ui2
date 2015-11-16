
    'use strict';

//    mainService.$inject = ['$state', '$timeout'];

    function mainService( ) {


        var service = {

            minHead: { state: false },
            closeSplash: closeSplash

        };

        return service;


        function closeSplash(display) {

            service.minHead.state = display;

        }


    }


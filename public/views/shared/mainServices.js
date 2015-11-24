
    'use strict';

//    mainService.$inject = ['$window'];

    function mainService() {


        var service = {
            menuState: {state : true},
            menuDisplay: menuDisplay,
            activate: activate

        };

        return service;

            function activate(){


            }

        function menuDisplay(){


            if (service.menuState.state == false){


                service.menuState.state = true

            } else {

                service.menuState.state = false

            }


        }


    }


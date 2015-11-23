
'use strict';

screenShot.$inject = ['$window','$timeout'];


function screenShot ($window , $timeout ) {
    var directive = {
        link: link,
        templateUrl: 'views/home/_screenshot.html',
        replace: 'true',
        transclude: 'true',
        restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {

        var box = element.children('.box');


        element.bind('click', function() {

            box.toggleClass('flipped');

        });


        element.bind('mouseleave', function() {

            box.removeClass('flipped');

        });

    }
}






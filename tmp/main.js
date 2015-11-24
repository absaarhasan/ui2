scroll.$inject = ['$window'];

function scroll($window) {
    return function(scope, element) {

        scope.boolChangeClass = true;

        angular.element($window).bind("scroll", function() {

            var pageOffSet = Math.floor(this.pageYOffset);
            var banner = angular.element(document.querySelector('.banner'));
            var bannerText = angular.element(document.querySelector('.banner ul'));

            var bannerHeight = $window.innerHeight/1.25 + 'px';
            var bannerTextOffSet = (($window.innerHeight/1.25) - pageOffSet) / 2 + 'px';

            banner.css('height', bannerHeight);
            bannerText.css('bottom', bannerTextOffSet);

                if (pageOffSet % 10 !== 0){

                    var bgScroll = pageOffSet/5 * -1 + 'px';
                    element.css('background-position', '0 ' + bgScroll)

                }

            scope.boolChangeClass = false;
            scope.$apply();

        });
    };
}


banner.$inject = [ '$interval' ];

function banner ( $interval) {
    var directive = {
        link: link,
        template: '<section id="banner" class="banner" ng-transclude></section>',
        replace: 'true',
        transclude: 'true',
        restrict: 'EA'
    };

    return directive;

    function link(scope, element, attrs) {

        var listItems = document.querySelectorAll('.banner ul li');
        var loop = listItems.length -1;
        var i = 0;

        $interval(function(){

            angular.forEach(listItems, function(value, key){

                var item = angular.element(value);
                item.removeClass('on');

               });

            var currentItem = angular.element(listItems[i]);
            currentItem.addClass('on');

            if (i === loop) {
                i = 0;
            } else {
                i ++
            }

        }, 3000);

    }
}












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







'use strict';

homeService.$inject = ['$window'];

function homeService($window) {

    var service = {

        activate: activate

    };

    return service;

}

function activate(){

 /*   getChapter(chapter);

    $window.onscroll = function(ev) {

        if (($window.innerHeight + $window.scrollY) >= document.body.scrollHeight - 100 && chapter <= maxChapters && chapterLock == false) {

            chapterLock = true;
            getChapter(chapter);

        }
    };
*/
}
(function() {

    'use strict';

    angular.module('ui2.home', ['ui.router'])
        .factory('homeService', homeService)
        .controller('HomeCtrl',  HomeCtrl)
        .directive('screenShot', screenShot)
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

        homeService.activate()

    }


})();

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


(function() {

    'use strict';

    angular.module('ui2', ['ui.router','hmTouchEvents','ui2.main','ui2.home'])
        .directive('scroll', scroll)
        .config(['$urlRouterProvider', function( $urlRouterProvider) {

            $urlRouterProvider.otherwise("/");

        }])

})();



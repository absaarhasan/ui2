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











function scroll(a){return function(b,c){b.boolChangeClass=!0,angular.element(a).bind("scroll",function(){var d=Math.floor(this.pageYOffset),e=angular.element(document.querySelector(".banner")),f=angular.element(document.querySelector(".banner ul")),g=a.innerHeight/1.25+"px",h=(a.innerHeight/1.25-d)/2+"px";if(e.css("height",g),f.css("bottom",h),d%10!==0){var i=d/5*-1+"px";c.css("background-position","0 "+i)}b.boolChangeClass=!1,b.$apply()})}}function banner(a){function b(b,c,d){var e=document.querySelectorAll(".banner ul li"),f=e.length-1,g=0;a(function(){angular.forEach(e,function(a,b){var c=angular.element(a);c.removeClass("on")});var a=angular.element(e[g]);a.addClass("on"),g===f?g=0:g++},3e3)}var c={link:b,template:'<section id="banner" class="banner" ng-transclude></section>',replace:"true",transclude:"true",restrict:"EA"};return c}function screenShot(a,b){function c(a,b,c){var d=b.children(".box");b.bind("click",function(){d.toggleClass("flipped")}),b.bind("mouseleave",function(){d.removeClass("flipped")})}var d={link:c,templateUrl:"views/home/_screenshot.html",replace:"true",transclude:"true",restrict:"EA"};return d}function homeService(a){var b={activate:activate};return b}function activate(){}function mainService(a){function b(){}var c={activate:b};return c}scroll.$inject=["$window"],banner.$inject=["$interval"],screenShot.$inject=["$window","$timeout"],homeService.$inject=["$window"],function(){"use strict";function a(a){a.activate()}angular.module("ui2.home",["ui.router"]).factory("homeService",homeService).controller("HomeCtrl",a).directive("screenShot",screenShot).config(["$stateProvider",function(a){a.state("pagination",{url:"/",parent:"main",templateUrl:"views/home/home.html",controller:"HomeCtrl",controllerAs:"vm"})}]),a.$inject=["homeService"]}(),mainService.$inject=["$window"],function(){"use strict";function a(a,b){b.activate()}angular.module("ui2.main",["ui.router"]).factory("mainService",mainService).controller("MainCtrl",a).directive("banner",banner).config(["$stateProvider",function(a){a.state("main",{"abstract":!0,templateUrl:"views/shared/main.html",controller:"MainCtrl",controllerAs:"vm"})}]),a.$inject=["$rootScope","mainService"]}(),function(){"use strict";angular.module("ui2",["ui.router","hmTouchEvents","ui2.main","ui2.home"]).directive("scroll",scroll).config(["$urlRouterProvider",function(a){a.otherwise("/")}])}();
'use strict';
(function () {
    function AppConfig($urlRouterProvider, $locationProvider) {
        $urlRouterProvider.rule(function ($injector, $location) {
            var path = $location.path();
            var hasTrailingSlash = path[path.length - 1] === '/';
            if (hasTrailingSlash) {
                var newPath = path.substr(0, path.length - 1);
                return newPath;
            }
        });

        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    }

    function AppRun($rootScope, $state, $location) {
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        });

        $rootScope.$on('$stateChangeStart', function (event, next, toParams, fromState, fromParams) {            
        });
    }

    angular.module('app')
        .config(['$urlRouterProvider', '$locationProvider', AppConfig])
        .run(['$rootScope', '$state', '$location', AppRun]);
})();
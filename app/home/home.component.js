(function () {
    'use strict';

    function HomeController($scope) {

    }
    angular.module('app')
        .component('home', {
            templateUrl: 'app/home/home.template.html',
            controller: HomeController
        })
        .config(function ($stateProvider) {
            $stateProvider.state('home', {
                url: '/',
                template: '<home></home>'
            });
        });
})();
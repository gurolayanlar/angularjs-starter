(function () {
    'use strict';

    function AboutController($scope) {

    }
    angular.module('app')
        .component('about', {
            templateUrl: 'app/about/about.template.html',
            controller: AboutController
        })
        .config(function ($stateProvider) {
            $stateProvider.state('about', {
                url: '/about',
                template: '<about></about>'
            });
        });
})();
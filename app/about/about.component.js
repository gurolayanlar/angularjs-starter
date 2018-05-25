(function () {
    'use strict';

    function AboutController($scope) {

    }
    angular.module('app')
        .component('about', {
            templateUrl: 'app/about/about.template.html',
            controller: ['$scope', AboutController]
        })
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider.state('about', {
                url: '/about',
                template: '<about></about>'
            });
        }]);
})();
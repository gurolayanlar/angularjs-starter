(function () {
    'use strict';

    function ContactController($scope) {

    }
    angular.module('app')
        .component('contact', {
            templateUrl: 'app/contact/contact.template.html',
            controller: ['$scope', ContactController]
        })
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider.state('contact', {
                url: '/contact',
                template: '<contact></contact>'
            });
        }]);
})();
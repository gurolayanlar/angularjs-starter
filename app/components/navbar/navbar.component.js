(function () {
    'use strict';

    function NavbarController($scope) {

    }
    angular.module('app')
        .component('navbar', {
            templateUrl: 'app/components/navbar/navbar.template.html',
            controller: NavbarController
        });
})();
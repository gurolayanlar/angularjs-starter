(function () {
    'use strict';

    function FooterController($scope) {

    }
    angular.module('app')
        .component('footer', {
            templateUrl: 'app/components/footer/footer.template.html',
            controller: ['$scope', FooterController]
        });
})();
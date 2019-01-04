'use strict'
module.exports = function(ngModule) {
    ngModule.controller('BarController', function ($scope, $routeParams) {
        console.log($routeParams);
        $scope.title = '我是BarVC'
    });
}
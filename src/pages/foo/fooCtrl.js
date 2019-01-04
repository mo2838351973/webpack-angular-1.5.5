'use strict'
module.exports = function(ngModule) {
    ngModule.controller('FooController', function ($scope, $routeParams) {
        console.log($routeParams);
        $scope.title = '我是fooVC'
    });
}
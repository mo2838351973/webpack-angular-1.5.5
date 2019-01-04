'use strict';
export default function ($routeProvider) {
    $routeProvider.when('/foo', {
        template:require('../pages/foo/foo.html'),
        //templateUrl:'./pages/about.html',
        controller: 'FooController'
    }).when('/bar', {
        template:require('../pages/bar/bar.html'),
        //templateUrl:'./pages/about.html',
        controller: 'BarController'
    }).otherwise({
        redirectTo: '/foo'
    });
}

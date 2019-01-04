import angular from 'angular';
//import HeaderController from './controller';
//import HeaderService from './service';
import header from './directive';
export default angular.module('app_header', [])
    //.controller('HeaderController', HeaderController)
    //.service('HeaderService', HeaderService)
    .directive('header', () => new header)
    .name




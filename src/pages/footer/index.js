import angular from 'angular';
import Footer from './directive.js';

export default angular.module('footer',[])
    .directive('footerDirective',()=> new Footer)
    .name
//import Vue from "vue"
//import App from "./app.vue"
//import router from './router'
//import Utils from "../static/utils"
//import Vuex from 'vuex'
//import createVuex from "./store"
//
//Vue.use(Vuex)
//const div = document.createElement("div");
//document.body.appendChild(div)
//
//Utils.a()
//
//const store = createVuex(Vuex)
//new Vue({
//    el: 'div',
//    store,
//    router,
//    render:(h)=>h(App)
//})

import angular from 'angular';
import ngrouter  from 'angular-route';
import routing from "./router";
//require('./controllers.js');
//require('./animations.js');
//require('./filters.js');
//require('./services.js');
//require('../css/app.css');
//require('../css/animations.css');
//require('../../node_modules/bootstrap/dist/css/bootstrap.css');


var app = angular.module('app', [ngrouter])
    .config(routing)


require('./directives/hello-world/hello-world.js')(app);//引入指令(directive)文件

require('./pages/foo/index.js')(app);//引入指令(directive)文件
require('./pages/bar/bar.js')(app);//引入指令(directive)文件

require('./css/style.css');//引入样式文件


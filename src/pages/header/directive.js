class Header {
    constructor($scope){
        'ngInject';
        $scope.isshow = false;
    }
}
export default class header {
    constructor() {
        this.restrict = 'E',
            this.scope = {},
            this.template = require("./header.html")
        this.controller = Header
        this.link = (scope, element, attr) => {}
    }
}

export default class Footer {
    constructor(){
        this.restrict = 'E',
            this.scope = {},
            this.template = "<div>footer-Directive</div>"// ng-click='alert()'
        this.controller = Foot
        this.link = (scope, element, attr) => {}
    }
}
//class Foot{
//    constructor(){
//        $scope.alert = () => {  alert(1) }
//    }
//}
Foot.$inject = ['$scope']

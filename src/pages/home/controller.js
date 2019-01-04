export default class HomeController {
    constructor($scope) {
        'ngInject';
        this.isshow = false;
        this.eage = 'sds';
        $scope.edg = 'sma'
    }
    change(){
        this.isshow = !this.isshow;
        console.log(this.isshow);
    }
}

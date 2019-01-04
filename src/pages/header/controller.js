
export default class HeaderController {
    consturctor($scope,HeaderService){
        this.home = 'header'
        $scope.component = 'head'
        $scope.name = HeaderService.getName
    }
}
HeaderController.$inject = ['$scope','HeaderService']


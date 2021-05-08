angular.module("CtrlModule", [])

.controller("Ctrl1", ["$scope" , function ($scope){

    $scope.appctrl= {};
    $scope.appctrl.isim="app adı burada";
    $scope.appctrl.liste="app listesi";
}])
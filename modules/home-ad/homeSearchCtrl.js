define(['router','css!modules/home-ad/home_search.css'], function (app,css) {
    //angular会自动根据controller函数的参数名，导入相应的服务

    return app.controller('homeSearchCtrl',['$scope', function ($scope) {
		 $scope.backHome = function () {
            window.location.href = window.location.href.split('#')[0]+'#/home';
        }
    }])
});
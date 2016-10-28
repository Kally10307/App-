/**
 * Created by Administrator on 2016/9/23.
 */
define(['router','css!modules/home-ad/ad.css'], function (app,css) {
    //angular会自动根据controller函数的参数名，导入相应的服务

    return app.controller('AdController',['$scope', function ($scope) {
        $scope.adBack =function(){
            window.history.back();
        }
    }])
});
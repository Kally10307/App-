/**
 * Created by Administrator on 2016/9/22.
 */
define(['router','css!modules/order/order.css'], function (app) {
    //angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller('OrderController',['$scope', function ($scope) {
        $scope.changeBreakfast = function(){
            // 早餐切换
            $('.breakfast').animate({
                left:0
            });
            $('.orderMenu span').animate({
                left:'70%'
            });
        };
        $scope.changeOutSold = function(){
            // 外卖切换
            $('.breakfast').animate({
                left:"100%"
            });
            $('.orderMenu span').animate({
                left:'20%'
            });
        }

    }])
});

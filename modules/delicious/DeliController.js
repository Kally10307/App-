define(['router','css!modules/delicious/delicious.css'],function(app,css){
    //angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller('DeliController',['$scope','$http',function($scope,$http){
        $http.get('data/shopList.json').success(function(res){
            $scope.data = res;
        });
        //这个函数是用来跳转到shops-detail页面；解决冲突时不要删掉
        $scope.jumpToDetail = function () {
            window.location.href = window.location.href.split('#')[0]+'#/shops-detail';
        };
        $scope.meiShiSelect = function(){
            $('.meishiPage').slideToggle();
        };
        $scope.backHome = function(){

            $('.deliciousPage').animate({
                left:'100%'
            },function(){
                window.history.back();
            });
            // $('.deliciousPage').css({
            //     left:'100%'
            // });

            window.history.back();
        }
    }])
});

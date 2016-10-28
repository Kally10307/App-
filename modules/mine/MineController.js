/**
 * Created by Administrator on 2016/9/22.
 */
define(['router','css!modules/mine/mine.css','css!modules/mine/iconfonts.css','css!modules/submit-order/mobileDialog.css','zepto','mobileDialog'], function (app,zepto,mobileDialog) {
    //angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller('MineController',['$scope', function ($scope) {
        // 账户信息
        $scope.myAccount = function(){
            if($('.nickName').text() == '立即登录'){
                (function($){
                    var d = $.dialog({
                        width:'2.864rem',
                        type:'loading',
                        message:'加载中！',
                        maskClose:true
                    });
                })(Zepto);

                return;
            }
            $('.account').animate({
                left:0
            },function(){
                $(this).on('swipeRight',function(){
                    $(this).animate({
                        left:'100%'
                    });
                });
            })
        };
        $scope.accountReturn = function(){
            $('.account').animate({
                left:'100%'
            })
        };
        // 设置
        $scope.toSettings = function(){
            $('.mineSettings').animate({
                left:0
            })
        };
        $scope.backToPage = function(){
            $('.mineSettings').animate({
                left:'100%'
            })
        };
        // 清除图片缓存
        $scope.clearCache = function(){
            $('.picCache').text('0MB');
        };
        // 退出登录
        $scope.quitButton = function(){
            $('.mineSettings').animate({
                left:'100%'
            },function(){
                $('.nickName').text('立即登录');
                $('.userPhone').text('登录后可享受更多特权');
                $('.quitMoney').text('0');
                $()
            })
        }
    }]);
});

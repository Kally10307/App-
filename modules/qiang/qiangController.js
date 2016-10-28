/**
 * Created by Administrator on 2016/9/22.
 */
define(['router','css!modules/qiang/qiang.css','css!modules/qiang/iconfont.css','zepto'], function (app, css1, css2,zepto) {
    // add 自定义一个服务
    app.factory('qiangEvent',function(){
        return {
            qScroll: function(){
                (function($){
                    $("#qiang_box").on('scroll',function(){
                        var qTop = this.scrollTop;
                        var qH = $(".qiang_bg").height();
                        if(qTop > qH) {
                            $("#qiang_nav").addClass("qiang_nav_fixed");
                        }else{
                            $("#qiang_nav").removeClass("qiang_nav_fixed");
                        }
                    });
                })(Zepto);

            },
            qiangTab:function(){
                (function($){
                    $("#qiang_nav li").tap(function(){
                        $(this).addClass("qiang_active").siblings().removeClass("qiang_active");
                        var index = $(this).index();
                        $(".qiang_tab").eq(index).show().siblings().hide();
                    });
                })(Zepto);
            }
        }
    });


    //angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller('qiangController',['$scope','$http','qiangEvent',function ($scope,$http,qiangEvent) {
    	
    	//获取数据
        $http.get('data/qiang.json').success(function(res){
            $scope.now_data = res.qiang_now;
            $scope.later_data = res.qiang_later;
            $scope.over_data = res.qiang_over;
        });
        $scope.qiangBack = function(){
            window.history.back();
        };
        qiangEvent.qScroll();
        qiangEvent.qiangTab();


    }]);
});

/**
>>>>>>> 4eb9ac3c9efa9b985086a37598d9086a935438be
 * Created by Administrator on 2016/9/22.
 */
define(['router','css!modules/shops-detail/shops-detail.css','jquery','jqueryFly'], function (app,css,$,jqueryFly) {
    // add 自定义一个服务
    app.factory('detailScroll',function () {
        return {
            deScroll:function () {

                $("#shops-detail").on('scroll',function () {

                    var tabTop = $("#detail-header").outerHeight();
                    // var dTop = $(this).scrollTop();
                    var dTop = this.scrollTop;
                    var opc = parseFloat(dTop/tabTop).toFixed(1);

                    if(dTop < tabTop){
                        $(".detail-tab").removeClass("detail-tab2");
                        $("#content-left").removeClass("fixed");
                        if(dTop <= 0){
                            $(".detail-back").removeAttr('style').find("h3").html("").removeAttr('style');
                        }else{
                            $(".detail-back").removeClass("detail-back2").css("backgroundColor","rgba(47,143,230,"+opc+")");
                            if(opc >= 0.7){
                                $(".detail-back").find("h3").html($("figcaption").children("h3").html()).css("color","rgba(255,255,255,"+opc+")");
                            }else{
                                $(".detail-back").find("h3").html("").removeAttr('style');
                            }
                                               // .children("h3").html($("figcaption").children("h3").html()).css("color","rgba(255,255,255,"+opc+")");
                        }
                    }else{
                        $(".detail-back").addClass("detail-back2").removeAttr('style').find("h3").html($("figcaption").children("h3").html()).css("color","#fff");
                        $(".detail-tab").addClass("detail-tab2");
                        $("#content-left").addClass("fixed");
                    }

                    // if(this.scrollTop > 31){
                    //     $('header').css('background','#3290e9');
                    // }else{
                    //     $('header').css('background',' rgba(0, 0, 200, 0.1)');
                    // }
                })
            }
        }
    });

    //angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller('DetailController',['$scope','$http','detailScroll', function ($scope,$http,detailScroll) {
        $http.get("data/shopDetail.json").success(function(res) {$scope.data = res;});
        $scope.show = function () {
            $("#detail-info").slideToggle();
        };
        $scope.pay = function () {
            window.location.href = window.location.href.split('#')[0]+'#/submit-order';
        };
        $scope.forward = function(){
            window.history.back();
        };
        detailScroll.deScroll();

        var offset = $("#num").offset();
        var addcar = $(".addcar");
        var img = 'imgs/new.png';
        $scope.add = function (a) {
            $scope.money += Number(a.target.parentNode.children[0].innerHTML.split('￥')[1]);
            $scope.num++;
            // add
            if($scope.num >= 1){
                $(".che").addClass("shopcar");
            }
            var flyer = $('<img class="u-flyer" src="'+img+'">');
            flyer.fly({
                start: {
                    left: a.clientX, //开始位置（必填）#fly元素会被设置成position: fixed
                    top: a.clientY //开始位置（必填）
                },
                end: {
                    left: offset.left-10, //结束位置（必填）
                    top: offset.top-10, //结束位置（必填）
                    width: 0, //结束时宽度
                    height: 0 //结束时高度
                },
                onEnd: function(){ //结束回调
                    this.destroy(); //移除dom
                }
            });
        };
    }]);
});
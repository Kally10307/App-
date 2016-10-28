/**
 * Created by Administrator on 2016/9/22.
 */
define(['router','css!modules/submit-order/submit-order.css','css!modules/submit-order/iconfont.css','css!modules/submit-order/mobileDialog.css','zepto','mobileDialog'], function (app, css1, css2,css3,$,mobileDialog) {
    //angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller('submit-orderController',['$scope', function ($scope) {
    	//让页面点击
			$scope.payment=function(){
				(function($){
					var d = $.dialog({
						width:'2.864rem',
						type:'ok',
						message:'付款成功！',
						buttons:[
							{
								type:'green',
								text:'确认'
							}
						]
					});
				})(Zepto)
			};
			$scope.forward = function () {
				window.history.back();
			}
    }])
});

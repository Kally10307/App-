/**
 * Created by Administrator on 2016/9/22.
 */
define(['router','css!modules/home/home.css','swiper'], function (app,css,swiper) {
	//自定义一个服务;
	app.factory('scroll',function () {
		return {
			scrollToBottom:function () {
				$("#main").on('scroll',function () {
					if(this.scrollTop > 25){
						$('header').css('background','#3290e9');
					}else{
						$('header').css('background',' rgba(0, 0, 200, 0.1)');
					}
				})
			}
		}
	});

    //angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller('HomeController',['$scope','$http', '$timeout','scroll',function ($scope,$http,$timeout,scroll) {
        $scope.info = '首页内容';
        $http.get('data/shopList.json').success(function(res){
        	$scope.data = res;
		});
		//这个函数是用来跳转到shops-detail页面；解决冲突时不要删掉
        $scope.jumpToDetail = function () {
            window.location.href = window.location.href.split('#')[0]+'#/shops-detail';
        };
		$scope.jumpToQiang = function () {
			window.location.href = window.location.href.split('#')[0]+'#/qiang';
		};
		$scope.jumpToGood = function () {
			window.location.href = window.location.href.split('#')[0]+'#/good';
		};
        $scope.show_ad = function () {
            window.location.href = window.location.href.split('#')[0]+'#/ad';
        };
        //跳转到首页头部搜索框下的二级页面
        $scope.show_search = function () {
            window.location.href = window.location.href.split('#')[0]+'#/home_search';
        };
        //使用swiper插件需要使用angular的定时器
		$timeout(function(){
			$scope.swiper =  new Swiper(".swiper-container",{
        		loop : true,
        		setWrapperSize:true,
        		autoplay:2000
//      		autoplayDisableOnInteraction:false
        	});
		},0);
		scroll.scrollToBottom();
		var timer = setInterval(timing,1000);
		oSp1 = document.getElementById('sp1');
		oSp2 = document.getElementById('sp2');
		oSp3 = document.getElementById('sp3');
		// var sec = 45;
		// var min = 35;
		// var hour = 13;
		var sec = parseInt(oSp1.innerHTML);
		var min = parseInt(oSp2.innerHTML);
		var hour = parseInt(oSp3.innerHTML);
		function timing(){
			sec-=1;
			if(sec < 10){
				oSp3.innerHTML = "0"+ sec;
				if(sec==0) {
					min -= 1;
					sec = 60;
					if(min < 10){
						oSp2.innerHTML = "0"+ min;
						if(min==0){
							min=59;
							hour--;
							if(hour < 10){
								oSp3.innerHTML = "0"+ hour;
							}else{
								oSp3.innerHTML = hour;
							}
						}
					}else{
						oSp2.innerHTML = min;
					}
				}
			}else{
				oSp3.innerHTML = sec;
			}
		}
	}])
});

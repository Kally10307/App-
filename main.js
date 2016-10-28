/**
 * Created by Administrator on 2016/9/22.
 */

require.config({
    paths: {
        jquery:'./libs/jquery-2.2.3',
        angular: './libs/angular.min',
        'angular-route': './libs/angular-route',
        router:'./router',
        css:"./libs/css",
        iscroll:'./libs/iscroll-add-slideDown-slideUp',
        index:"./js/controllers/index",
        zepto:'./libs/zepto',
        HomeController:"modules/home/HomeController",
        OrderController:"modules/order/OrderController",
        FindController:"modules/find/FindController",
        MineController:"modules/mine/MineController",
        'submit-orderController':"modules/submit-order/submit-orderController",
        DetailController:"modules/shops-detail/DetailController",
        qiangController:"modules/qiang/qiangController",
        DeliController:"modules/delicious/DeliController",
        GoodController:"modules/good/GoodController",
        AdController:"modules/home-ad/AdController",
        AwardController:"modules/find/AwardController",
        homeSearchCtrl:"modules/home-ad/homeSearchCtrl",
        jqueryFly:"./libs/jquery.fly",
        swiper:"./libs/swiper-3.3.1.min",
        mobileDialog:"modules/submit-order/mobileDialog"
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular'],
            exports: 'angular-route'
        },
        jqueryFly: {
            deps: ['jquery']
        },
        swiper:{
        	deps:['jquery'],
        	exports: 'swiper'
        },
        mobileDialog:{
            deps:['zepto']
        }
    }
});

require(['jquery','swiper','angular', 'index','router','HomeController','OrderController','FindController','MineController','submit-orderController','DetailController','DeliController','AdController','homeSearchCtrl','qiangController','AwardController','GoodController'], function(jquery,swiper,angular,index){
	index.index();
    angular.bootstrap(document, ['webapp']);
});

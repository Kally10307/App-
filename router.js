/**
 * Created by Administrator on 2016/9/22.
 */
define(['angular', 'angular-route'], function (angular) {

    var app = angular.module('webapp', [
        'ngRoute'
    ]);

    app.config(['$routeProvider', '$controllerProvider',
        function($routeProvider, $controllerProvider) {
            $routeProvider.
                when('/home', {
                    templateUrl: 'modules/home/home.html',
                    controller: 'HomeController'
                }).
                when('/order', {
                    templateUrl: 'modules/order/order.html',
                    controller: 'OrderController'
                }).
                when('/find', {
                    templateUrl: 'modules/find/find.html',
                    controller: 'FindController'
                }).
                when('/mine', {
                    templateUrl: 'modules/mine/mine.html',
                    controller: 'MineController'
                }).
                when('/submit-order', {
                    templateUrl: 'modules/submit-order/submit-order.html',
                    controller: 'submit-orderController'
                }).
                when('/shops-detail', {
                    templateUrl: 'modules/shops-detail/shops-detail.html',
                    controller: 'DetailController'
                }).
                when('/qiang', {
                    templateUrl: 'modules/qiang/qiang.html',
                    controller: 'qiangController'
                }).
                when('/delicious',{
                    templateUrl:'modules/delicious/delicious.html',
                    controller:'DeliController'
                }).
                when('/ad',{
                    templateUrl:'modules/home-ad/ad.html',
                    controller:'AdController'
                }).
                when('/award',{
                    templateUrl:'modules/find/find_award.html',
                    controller:'AwardController'
                }).
                when('/home_search',{
                    templateUrl:'modules/home-ad/home_search.html',
                    controller:'homeSearchCtrl'
				}).
                when('/good',{
                    templateUrl:'modules/good/good.html',
                    controller:'GoodController'
                }).
                otherwise({
                    redirectTo: '/home'
                });
        }]);

    return app;
});

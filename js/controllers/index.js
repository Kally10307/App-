/**
 * Created by Administrator on 2016/9/22.
 */
define(['jquery','zepto'],function ($,zepto) {
    function index() {
        $("#tabbar ul li").on("tap",function () {
            $("#tabbar ul li a .icon").attr("id","");
            $(this).find(".icon").attr("id","icon");
        });
        document.documentElement.style.fontSize = window.innerWidth/6.4 + "px";
        $(window).on("resize",function () {
            document.documentElement.style.fontSize = window.innerWidth/6.4 + "px";
        });
    }
    return {
        index:index
    }
});

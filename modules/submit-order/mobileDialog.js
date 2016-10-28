/**
 * Created by Administrator on 2016/9/28.
 */

define(['zepto'], function($) {
	(function($){
		var Dialog = function(cfg){
			var _this = this;

			// 默认配置参数

			this.config = {
				// 对话框的宽
				width:'auto',
				// 对话框的高
				height:'auto',
				// 对话框提示信息
				message:null,
				// 对话框类型
				type:'loading',
				// 按钮组配置
				buttons:null,
				// 弹出框延迟多久关闭
				delay:null,
				// 延迟关闭执行回调函数
				delayCallback:null,
				// 点击遮罩层是否可以关闭
				maskClose:null
			};
			// 默认参数扩展
			if(cfg && $.isPlainObject(cfg)){
				$.extend(this.config,cfg);
			}else{
				this.isConfig = true;
			}
			// 创建基本的DOM
			this.body = $('body');
			//  创建遮罩层
			this.mask = $('<div class="g-dialog-container">');
			// 创建弹出框
			this.win = $('<div class="dialog-window">');
			// 创建弹出框头部
			this.winHeader = $('<div class="dialog-header"></div>');
			// 创建提示信息
			this.winContent = $('<div class="dialog-content">');
			// 创建弹出框按钮区域
			this.winFooter =$('<div class="dialog-footer">');
			// 渲染DOM
			this.creat();
		};

		// 记录弹框层级
		Dialog.zIndex = 1000;
		Dialog.prototype = {
			// 创建弹出框
			creat: function(){
				var _this_ = this,
					config = this.config,
					mask   = this.mask,
					win = this.win,
					header = this.winHeader,
					content = this.winContent,
					footer = this.winFooter,
					body = this.body;
				// 没有传递任何配置参数，弹出一个等待的图标形式的弹框
				if(this.isConfig){
					win.append(header.addClass("loading"));

				}else{
					// 根据配置参数创建相应的弹框
					win.append(header.addClass(config.type));

					// 信息文本
					if(config.message){
						win.append(content.html(config.message));
					}
					// 按钮组
					if(config.buttons){
						this.creatBtns(footer,config.buttons);
						win.append(footer);
					}
					// 设置对话框的宽高
					if(config.width != "auto"){
						win.width(config.width);
					}
					if(config.height != "auto"){
						win.height(config.height);
					}
					// 设置弹出框弹出多久关闭
					if(config.delay && config.delay != 0){
						window.setTimeout(function(){
							_this_.close();
							// 执行延迟关闭的回调函数
							config.delayCallback && config.delayCallback();
						},config.delay);
					}
				}
				// 点击遮罩层关闭
				if(config.maskClose){
					mask.tap(function(){
						_this_.close();
					});
				}
				// 增加弹框的层级
				Dialog.zIndex++;
				this.mask.css("zIndex",Dialog.zIndex);
				// 插入到页面
				mask.append(win);
				body.append(mask);
			},
			// 根据配置参数buttons创建按钮列表
			creatBtns: function(footer,buttons){
				var _this_ = this;

				$(buttons).each(function(i){

					//获取按钮的样式和回调以及文本
					var type = this.type ? " class='"+this.type+"'" : "";
					var btnText = this.text ? this.text : "按钮"+ (++i);
					var callback = this.callback ? this.callback : null;
					var button = $("<button"+type+">"+btnText+"</button>");
					if(callback){
						button.tap(function(e){
							var isClose = callback();
							// 阻止事件冒泡
							e.stopPropagation();
							if(isClose != false){
								_this_.close();
							}
						});
					}else{
						button.tap(function(e){
							// 阻止事件冒泡
							e.stopPropagation();
							_this_.close();
						});
					}

					footer.append(button);
				});
			},
			close: function(){
				// 关闭遮罩层
				this.mask.remove();
			}
		};
		// return{
		//     Dialog:Dialog
		// }
		window.Dialog = Dialog;
		$.dialog = function(config){
			return new Dialog(config);
		};
	})(Zepto)
});
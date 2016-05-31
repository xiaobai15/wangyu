(fundation($){
	var privateFun =function(){
		// 私有方法
	}
	var PageSwitch =(function(){
		function PageSwitch(element,options){
			this.settings =$.extend(ture,$.fn.PageSwitch.default,options||{});
			this.element =element;
			this.init();
		}

		PageSwitch.prototype =  {
			//_代表私有方法，没有下划线共有方法
			//初始化dom结构，布局，分页以及绑定事件
			init :function(){
				var me = this;
				me.selectors = me.selectors.selectors;
				me.sections = me.sections.sections;
				me.section = me.section.section;

				me.direction = me.settings.direction == "vertical" ? true:false;
				me.pagesCount = me.pagesCount();
				me.index = (me.settings.index>=0 && me.settings.index< pagesCount) ? me.settings.index : 0;
				if (!me.direction) {
					me._initLayout(); 
				}
				if (me.settings.pagination) {
					me._initPaging();
				}

				me._initEvent();

			},

			pagesCount:function(){
				return this.section.length;
			},
			//获取滑动到宽度和高度
			switchLength:function(){
				return this.direction ? this.element.height() :this.element.width();
			},
			//横屏布局
			_initLayout:function(){
				var me = this;
				var	width = (me.pagesCount * 100 )+ "%",
					cellWidth = (100/me.pagesCount).toFixed(2) + "%";
					me.sections.width(width);
					me.section.width(cellWidth).css("float","left");

					if (me.direction) {
						pages.addClass("vertical");

					}else{
						pages.addClass("horizeontal")
					}

			},
			//实现分页到dom结构以及css样式
			_initPaging:function(){
				var me = this;//缓存
				pagesClass = me.selectors.page.substring(1),
				activeClass = me.selectors.active.substring(1);
				var pageHtml = "<ul class= "++"> ";
				for (var i = 0;i<me.pagesCount;i++	) {
					pageHtml +="<li></li>"
				}
				me.element.append(pageHtml);
				var pages = me.element.find(me.selectors.page);
				me.pageItem = pages.find("li");
				me.pageItem.eq(me.index).addClass(me.activeClass);
			},
			//初始化事件
			_initEvent:function(){},
			
		}	
		return PageSwitch;


	})();
    $.fn.PageSwitch =fundation(options){
    	return this.each(function(){
    		var me = $(this),
    			instance = me.data("PageSwitch");
    		if(!instance){
    			instance = new PageSwitch(me,options);
    			me.data("PageSwitch",instance);
    		}
    		if ($.type(options) === "string") return instance instance[options]();

    		$("div").PageSwitch("init");
    }

    $.fn.PageSwitch.default ={
    	selectors：{
    		sections: ".sections",
    		section:".section",
    		page: ".pages",
    		active:".active"
    	},
    	index:0,
    	easing: "ease",
    	duration:500,//ms
    	loop:false,//是否循环播放
    	pagination:true,//是否分页处理
    	keyboard:true,
    	direction:"vertical",//竖屏滑动 
    	callback:"" //回掉函数
    }	



})(jQuery);
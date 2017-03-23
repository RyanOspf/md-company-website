$.extend({
	hello:function(){
		alert('hello world');
	},
	//限制范围工具方法
	range:function(val,min,max){
		if(val > max){
			return max;
		}else if(val < min){
			return min;
		}else{
			return val;
		}
	}
})

$.fn.extend({
	//拖拽
	drag:function(){
		//此处的this就是调用这个方法的对象,也就是#div
		var disX = 0,disY = 0;
		this.mousedown(function(ev){
			var _this = $(this);
			disX  = ev.pageX - $(this).offset().left;
			disY = ev.pageY - $(this).offset().top;
			$(document).mousemove(function(ev){
				var L = ev.pageX - disX;
				var T = ev.pageY - disY;

				L = $.range(L,0,$(window).width() - _this.innerWidth());
				T = $.range(T,0,$(window).height() - _this.innerHeight());

				_this.css({left:L,top:T});
			})
			$(document).mouseup(function(){
				$(document).off();
			})
			return false;
		})
	},
	
	
})

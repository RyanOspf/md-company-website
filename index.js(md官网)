/*
移动端  mqqwpa://im/chat?chat_type=wpa&uin=输入QQ号&version=1&src_type=web&web_src=oicqzone.com

PC端  tencent://message/?uin=输入QQ号&Site=http://vps.shuidazhe.com&Menu=yes
*/

//淡入淡出轮播
function tabImg(){
	var l = 0;
	var timer13 = null;
	function tabImg12(){
		$('.imgDot>span').eq(l).removeClass('active');
		$('.imgBox > li').eq(l).css('z-index',0).stop(true,true).animate({
			opacity:0
		},1500);
		l++;
		l = l%$('.imgBox>li').length;
		$('.imgDot>span').eq(l).addClass('active');
		$('.imgBox > li').eq(l).css('z-index',1).stop(true,true).animate({
			opacity:1
		},1500);
	};
	timer13 = setInterval(tabImg12,3000);
	$('.imgDot').on('click','span',function(){
		if($(this).index() != l){
				$('.imgDot>span').eq(l).removeClass('active');
				$('.imgBox > li').eq(l).css('z-index',0).stop(true,true).animate({
					opacity:0
				},1500);
				$('.imgDot>span').eq($(this).index()).addClass('active');
				$('.imgBox > li').eq($(this).index()).css('z-index',1).stop(true,true).animate({
					opacity:1
				},1500);
			l = $(this).index();
		}
	});

	$('.bg_banner').hover(function(){
		clearInterval(timer13);
	},function(){
		timer13 = setInterval(tabImg12,3000);
	});
};

//轮播图的数据
new Vue({
	el:".bg_banner",
	data:{
		list:data[data.length-1]
	}
});

//各种都能贷
new Vue({
	el:".doing",
	data:{
		listDai:data[0]
	}
});

//我们的优势
new Vue({
	el:".ourAdvantage",
	data:{
		advantage:data[1],
	}
})

//我们的服务
new Vue({
	el:".ourService",
	data:{
		service:data[2]
	}
})


tabImg();
move();
function move(){
	var arrDot = [111,301,490,678,869,1058]; //小点移动
	for(var i=0;i<$('.serviceList li').length;i++){
		(function(index){
			$('.serviceList li').eq(index).on('mouseover',function(){
				$('.serviceList li').removeClass('hover');
				$('.hoverList ul').hide();
				$('.serviceList li').eq(index).addClass('hover');
				$('.hoverList ul').eq(index).show();
				$('.dot').stop(true,true).animate({
					'left':arrDot[index]+'px'
				},500);
			})
		})(i)
	}
}


var arr = [0];
var iHeight = 140;
arr.push($('.ourService h3').offset().top-iHeight,$('.ourAdvantage h3').offset().top-iHeight,$('.doing h3').offset().top-iHeight,$('.foot h3').offset().top);

$('.imgScoll').on('click',function(){
	$('html,body').animate({scrollTop:0},1000)
})

function none(){
	for(var i=0;i<$('.right_nav ul li').length;i++){
		$('.right_nav ul li').eq(i).css('border','none');
	}
}

$(document).on('scroll',function(){
	if($(this).scrollTop() > arr[1]-96){
		none();
		$('.right_nav ul li').eq(1).css('border-bottom','2px solid #f13a3a');
	}else{
		none();
		$('.right_nav ul li').eq(0).css('border-bottom','2px solid #f13a3a');
	}
	
	if($(this).scrollTop() > arr[2]-96){
		none();
		$('.right_nav ul li').eq(2).css('border-bottom','2px solid #f13a3a');
	}
	
	if($(this).scrollTop() > arr[3]-96){
		none();
		$('.right_nav ul li').eq(3).css('border-bottom','2px solid #f13a3a');
	}
	
	if($(this).scrollTop() > $('.doingList li').eq(4).offset().top){
		none();
		$('.right_nav ul li').eq(4).css('border-bottom','2px solid #f13a3a');
	}

	if($(this).scrollTop() > 300){
		$('.imgScoll').show();
		$('.top').css({
			position:"fixed",
			background:"rgba(0,0,0,.5)"
		});
		$('.right_nav ul li').css('color','#ffffff');
	}else{
		$('.imgScoll').hide();
		$('.top').css({
			position:"relative",
			background:"#fff"
		});
		$('.right_nav ul li').css('color','#000000');
	}
})

for(var i=0;i<$('.right_nav li').length;i++){
	(function(index){
		$('.right_nav li').eq(index).on('click',function(){
			$('html,body').stop(true,true).animate({scrollTop:arr[index]},1000)
		})
	})(i)
};

$('.jiaweixin').hover(function(){
	$('.weixinImg').stop(true,true).animate({
		'opacity':1
	},1000)
},function(){
	$('.weixinImg').stop(true,true).animate({
		'opacity':0
	},1000)
})

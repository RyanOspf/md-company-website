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


/*
	loan:各种都能贷款的数据
	advantage:优势
	sevice:服务
*/
var money = {
	"loan":function(){
		var strHtml = '';
		for(var i=0;i<data[0].length;i++){
			var jsonData = data[0][i];
			strHtml += '<li>'+
							'<h5>'
								+'<img src="'+jsonData['img']+'" alt="" />'
								+'<span>'+jsonData['purpose']+'</span>'
							+'</h5>'
							+'<p>'+jsonData['usageNote']+'</p>'
						+'</li>';
		}
		$('.doingList').html(strHtml);
	},
	"advantage":function(){
		var advanHtml = '';
		for(var i=0;i<data[1].length;i++){
			var jsonData = data[1][i];
			advanHtml += '<li>'+
						'<img src="'+jsonData['img']+'" alt="" />'+
						'<div>'+
							'<h4>'+jsonData['purpose']+'</h4>'+
							'<p>'+jsonData['usageNote']+'</p>'+
						'</div>'+
					'</li>';
		}
		$('.AdvantageList').html(advanHtml);
	},
	"sevice":function(){
		var title = "";
		var json = {};
		for(var i=0;i<data[2].length;i++){
			var jsonData = data[2][i];
			title += '<li>'+jsonData[0]+'</li>';
		};
		$('.serviceList').html(title);
		$('.serviceList>li').eq(0).addClass('hover');
		
		for(var i=0;i<data[2].length;i++){
			var html = data[2][i][1];
			json[i] = '';
			for(var j=0;j<html.length;j++){
				json[i] += '<li><img src="'+html[j]['img']+'" alt="" /><p>'+html[j]['purpose']+'</p><p>'+html[j]['usageNote']+'</p></li>'
			}
		};
		
		for(key in json){
			$('.hoverList')[0].innerHTML += '<ul>'+json[key]+'</ul>';
		}
		$('.hoverList > ul').eq(0).show();
		
		move();
	},
	"tab":function(){
		var str = "",dot = "";
		for(var i=0;i<data[3].length;i++){
			str += '<li style="background:url('+data[3][i]+') no-repeat center center;"></li>';
			dot += '<span></span>';
		}
		$('.imgBox').eq(0).html(str);
		$('.imgDot').eq(0).html(dot);
		$('.imgDot > span').eq(0).addClass('active');
		tabImg();
		
	},
	init:function(){
		var _this = this;
		_this.loan();
		_this.advantage();
		_this.sevice();
		_this.tab();
	}
}
money.init();


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
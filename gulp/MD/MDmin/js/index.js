function tabImg(){function i(){$(".imgDot>span").eq(t).removeClass("active"),$(".imgBox > li").eq(t).css("z-index",0).stop(!0,!0).animate({opacity:0},1500),t++,t%=$(".imgBox>li").length,$(".imgDot>span").eq(t).addClass("active"),$(".imgBox > li").eq(t).css("z-index",1).stop(!0,!0).animate({opacity:1},1500)}var t=0,o=null;o=setInterval(i,3e3),$(".imgDot").on("click","span",function(){$(this).index()!=t&&($(".imgDot>span").eq(t).removeClass("active"),$(".imgBox > li").eq(t).css("z-index",0).stop(!0,!0).animate({opacity:0},1500),$(".imgDot>span").eq($(this).index()).addClass("active"),$(".imgBox > li").eq($(this).index()).css("z-index",1).stop(!0,!0).animate({opacity:1},1500),t=$(this).index())}),$(".bg_banner").hover(function(){clearInterval(o)},function(){o=setInterval(i,3e3)})}function move(){for(var i=[111,301,490,678,869,1058],t=0;t<$(".serviceList li").length;t++)!function(t){$(".serviceList li").eq(t).on("mouseover",function(){$(".serviceList li").removeClass("hover"),$(".hoverList ul").hide(),$(".serviceList li").eq(t).addClass("hover"),$(".hoverList ul").eq(t).show(),$(".dot").stop(!0,!0).animate({left:i[t]+"px"},500)})}(t)}function none(){for(var i=0;i<$(".right_nav ul li").length;i++)$(".right_nav ul li").eq(i).css("border","none")}var money={loan:function(){for(var i="",t=0;t<data[0].length;t++){var o=data[0][t];i+='<li><h5><img src="'+o.img+'" alt="" /><span>'+o.purpose+"</span></h5><p>"+o.usageNote+"</p></li>"}$(".doingList").html(i)},advantage:function(){for(var i="",t=0;t<data[1].length;t++){var o=data[1][t];i+='<li><img src="'+o.img+'" alt="" /><div><h4>'+o.purpose+"</h4><p>"+o.usageNote+"</p></div></li>"}$(".AdvantageList").html(i)},sevice:function(){for(var i="",t={},o=0;o<data[2].length;o++){i+="<li>"+data[2][o][0]+"</li>"}$(".serviceList").html(i),$(".serviceList>li").eq(0).addClass("hover");for(var o=0;o<data[2].length;o++){var e=data[2][o][1];t[o]="";for(var a=0;a<e.length;a++)t[o]+='<li><img src="'+e[a].img+'" alt="" /><p>'+e[a].purpose+"</p><p>"+e[a].usageNote+"</p></li>"}for(key in t)$(".hoverList")[0].innerHTML+="<ul>"+t[key]+"</ul>";$(".hoverList > ul").eq(0).show(),move()},tab:function(){for(var i="",t="",o=0;o<data[3].length;o++)i+='<li style="background:url('+data[3][o]+') no-repeat center center;"></li>',t+="<span></span>";$(".imgBox").eq(0).html(i),$(".imgDot").eq(0).html(t),$(".imgDot > span").eq(0).addClass("active"),tabImg()},init:function(){var i=this;i.loan(),i.advantage(),i.sevice(),i.tab()}};money.init();var arr=[0],iHeight=140;arr.push($(".ourService h3").offset().top-iHeight,$(".ourAdvantage h3").offset().top-iHeight,$(".doing h3").offset().top-iHeight,$(".foot h3").offset().top),$(".imgScoll").on("click",function(){$("html,body").animate({scrollTop:0},1e3)}),$(document).on("scroll",function(){$(this).scrollTop()>arr[1]-96?(none(),$(".right_nav ul li").eq(1).css("border-bottom","2px solid #f13a3a")):(none(),$(".right_nav ul li").eq(0).css("border-bottom","2px solid #f13a3a")),$(this).scrollTop()>arr[2]-96&&(none(),$(".right_nav ul li").eq(2).css("border-bottom","2px solid #f13a3a")),$(this).scrollTop()>arr[3]-96&&(none(),$(".right_nav ul li").eq(3).css("border-bottom","2px solid #f13a3a")),$(this).scrollTop()>$(".doingList li").eq(4).offset().top&&(none(),$(".right_nav ul li").eq(4).css("border-bottom","2px solid #f13a3a")),$(this).scrollTop()>300?($(".imgScoll").show(),$(".top").css({position:"fixed",background:"rgba(0,0,0,.5)"}),$(".right_nav ul li").css("color","#ffffff")):($(".imgScoll").hide(),$(".top").css({position:"relative",background:"#fff"}),$(".right_nav ul li").css("color","#000000"))});for(var i=0;i<$(".right_nav li").length;i++)!function(i){$(".right_nav li").eq(i).on("click",function(){$("html,body").stop(!0,!0).animate({scrollTop:arr[i]},1e3)})}(i);$(".jiaweixin").hover(function(){$(".weixinImg").stop(!0,!0).animate({opacity:1},1e3)},function(){$(".weixinImg").stop(!0,!0).animate({opacity:0},1e3)});
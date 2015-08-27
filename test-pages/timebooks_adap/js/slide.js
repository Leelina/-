// JavaScript Document
$(function(){
/*index页面导航条*/
$('.navgi a').hover(function(){
	$(this).find('span').stop().fadeIn(0).parent().siblings().find('span').hide(0);
	$(this).addClass("navabottom").siblings().removeClass("navabottom");	
	},function () {
            $(this).find('span').fadeIn().hide(0);
			$(this).removeClass("navabottom");
     });	
	
	})
	
/*首页人气书籍tab切换*/	
$(document).ready(function(){
    $(".popbksort li").click(function(){
	    $(this).addClass("currhot").siblings().removeClass("currhot");	
	});
/*找回密码下一步*/	
	$("#nextphone").click(function(){
		$("#phoneafter").addClass("block").siblings().removeClass("block");
		})
	$("#nextmail").click(function(){
		$("#mailafter").addClass("block").siblings().removeClass("block");
		})
/*用户注册两方式切换*/
	$("#mailst").click(function(){
		$("#mailarrw").addClass("inlneblock");
		$("#phonearrw").removeClass("inlneblock")
		$(this).addClass("now").siblings().removeClass("now");
		$("#mailbox").addClass("block").siblings().removeClass("block");
		$("#mailfind").addClass("block").siblings().removeClass("block");
		})
	$("#phonest").click(function(){
		$("#phonearrw").addClass("inlneblock");
		$("#mailarrw").removeClass("inlneblock")
		$(this).addClass("now").siblings().removeClass("now");
		$("#phonebox").addClass("block").siblings().removeClass("block");
		$("#phonefind").addClass("block").siblings().removeClass("block");
		})
		
//个人中心常见问题点击显示点击隐藏
	  $(".question").toggle(function(){ 
	  $(this).next().show(); 
	  },function(){
		$(this).next().hide(); 
	  })

});
	
/*多媒体图书页面tab切换*/	
    function hsf(obj) {
            if (obj == "aw1") {
                document.getElementById("aw1").style.color ="#1cb177";
				document.getElementById("aw2").style.color="#4c4c4c";
				document.getElementById("aw1").children[0].setAttribute('class','arrowp');
				document.getElementById("aw2").children[0].setAttribute('class','arrowp1');
            } else if (obj == 'aw2') {
                document.getElementById("aw1").style.color = "#4c4c4c";
                document.getElementById("aw2").style.color = "#1cb177";
				document.getElementById("aw2").children[0].setAttribute('class','arrowp');
				document.getElementById("aw1").children[0].setAttribute('class','arrowp1');
            }
         }  

/*返回顶部*/
$(function(){
	//首先将#back-to-top隐藏
	$("#totop").hide();
	//当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
	$(function(){
		$(window).scroll(function(){
			if ($(window).scrollTop()>100){
				$("#totop").fadeIn();
			}else{
				$("#totop").fadeOut();
			}
		});
		//当点击跳转链接后，回到页面顶部位置
		$("#totop").click(function(){
			$('body,html').animate({scrollTop:0},500);
			return false;
		});
	});
}); 
/*分页*/
(function($) {
    $.fn.pager = function(options) {
        var opts = $.extend({}, $.fn.pager.defaults, options);
        return this.each(function() {
            $(this).empty().append(renderpager(parseInt(options.pagenumber), parseInt(options.pagecount), options.buttonClickCallback));
            $('.pages li').mouseover(function() { document.body.style.cursor = "pointer"; }).mouseout(function() { document.body.style.cursor = "auto"; });
        });
    };
    function renderpager(pagenumber, pagecount, buttonClickCallback) {
        var $pager = $('<ul class="pages"></ul>');
        $pager.append(renderButton('首页', pagenumber, pagecount, buttonClickCallback)).append(renderButton('上一页', pagenumber, pagecount, buttonClickCallback));
        var startPoint = 1;
        var endPoint = 9;
        if (pagenumber > 4) {
            startPoint = pagenumber - 4;
            endPoint = pagenumber + 4;
        }
        if (endPoint > pagecount) {
            startPoint = pagecount - 8;
            endPoint = pagecount;
        }
        if (startPoint < 1) {
            startPoint = 1;
        }
        for (var page = startPoint; page <= endPoint; page++) {
            var currentButton = $('<li class="page-number">' + (page) + '</li>');
            page == pagenumber ? currentButton.addClass('pgCurrent') : currentButton.click(function() { buttonClickCallback(this.firstChild.data); });
            currentButton.appendTo($pager);
        }
        $pager.append(renderButton('下一页', pagenumber, pagecount, buttonClickCallback)).append(renderButton('尾页', pagenumber, pagecount, buttonClickCallback));
        return $pager;
    }
    function renderButton(buttonLabel, pagenumber, pagecount, buttonClickCallback) {
        var $Button = $('<li class="pgNext">' + buttonLabel + '</li>');
        var destPage = 1;
        switch (buttonLabel) {
            case "首页":
                destPage = 1;
                break;
            case "上一页":
                destPage = pagenumber - 1;
                break;
            case "下一页":
                destPage = pagenumber + 1;
                break;
            case "尾页":
                destPage = pagecount;
                break;
        }
        if (buttonLabel == "首页" || buttonLabel == "上一页") {
            pagenumber <= 1 ? $Button.addClass('pgEmpty') : $Button.click(function() { buttonClickCallback(destPage); });
        }
        else {
            pagenumber >= pagecount ? $Button.addClass('pgEmpty') : $Button.click(function() { buttonClickCallback(destPage); });
        }
        return $Button;
    }
    $.fn.pager.defaults = {
        pagenumber: 1,
        pagecount: 1
    };
})(jQuery);

/*分页click*/
$(function(){
	$("#pager").pager({
		pagenumber:1,
		pagecout:10,
		buttonClickCallback:PageClick
	});
})
PageClick = function(pageclickednumber){
	$("#pager").pager({
		pagenumber:pageclickednumber,
		pagecount:10,
		buttonClickCallback:PageClick
	})
}

/*首页人气/热销书鼠标滑过显示详细信息效果*/
  function ranklist(id,ele,elename,elechild,start_ele,cur_ele){
	  var obj_id=document.getElementById(id);
	  var obj_ele=$tag(obj_id,ele);
	  for(i=0;i<obj_ele.length;i++){
		  if(obj_ele[i].className.indexOf(elename) == -1) continue;
		  var objlist=$tag(obj_ele[i],elechild);
		  for(j=0;j<objlist.length;j++){
			  objlist[j].onmouseover=function(){
				  var paris=this.parentNode;
				  var list=$tag(paris,elechild);
				  for(x=0;x<list.length;x++){
					  var thisdiv=$tag(list[x],cur_ele)[0];
					  var thisp=$tag(list[x],start_ele)[0];
					  thisdiv.style.display="none";
					  thisp.style.display="block";
					  }
				  var start=$tag(this,start_ele)[0];
				  start.style.display='none';
				  var cur=$tag(this,cur_ele)[0];
				  cur.style.display='block';
			  }
		  }
	  }
  }
  function $tag(id,tag){return id.getElementsByTagName(tag);}
  setTimeout("ranklist('ranklist','ul','topcn','li','p','div')",0);







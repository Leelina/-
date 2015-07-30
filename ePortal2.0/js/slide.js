// JavaScript Document
$(document).ready(function(){
	var label= $('label');
	var content= $('.seclist');
	$('.seclist').hide();
	$('label').on("click",function(){
		var labelClicked = $(this);
		var labelContent = labelClicked.next();
		if(labelContent.is(":visible")) {
			return;
		}
		content.slideUp("normal");
		labelContent.slideDown("slow");
		$(".iconbox").css("background","");
		labelClicked.children(":first-child").css("background","#EC9F37");
		$(".icon_arowrt").css("background-position","-15px 0px");
		labelClicked.children(":last-child").css("background-position","-15px -10px");
	});
<!--左侧二级菜单点击高亮-->	 
    $(".seclist li").click(function(){
		$(".seclist li").removeClass("curr");
	    $(this).addClass("curr");
	});
	
	
	
	
	
	
});




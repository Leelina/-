
if(!this.unsafeWindow) this.unsafeWindow = window;
(function(window, document){
	function search(){
		var t = this;
		t.search = {
			"复制":{
				
			},
			"分享":{
				
			},
			"笔记":{
				
			},
			"删除":{
				
			},
		};
		t.string = "";
	}
	search.prototype = {
		"show":function(x, y){
			var t = this;
			var nodes = t.node.querySelectorAll('a[search]');
			for(var i = 0; i<nodes.length; i++){
				if(nodes[i].className=="ujs_search_link_go") nodes[i].href = t.string;
			}
			t.node.style.display = "block";
			var w = t.node.offsetWidth;
			var h = t.node.offsetHeight;
			var wx = window.scrollX;
			var wy = window.scrollY;
			var ww = window.innerWidth;
			var wh = window.innerHeight;
			var xm = wx + ww - w;
			var ym = wy + wh - h;
			x = (x+10)>xm?xm:(x+10)<wx?wx:x+10;
			y = y>ym?ym:y<wy?wy:y;
			t.node.style.left = x + "px";
			t.node.style.top = y + "px";
		},
		"hide":function(){
			var t = this;
			t.node.style.left = "0px";
			t.node.style.top = "0px";
			t.node.style.display = "none";
		},
		"create":function(){
			var t = this;
			t.node = document.createElement("search");
			t.node.style.position = "absolute";
			t.node.style.border = "none";
			t.node.style.zIndex = "1048576";
			t.node.style.left = "0px";
			t.node.style.top = "0px";
			t.node.style.display = "none";
			t.node.style.background = "#333";
			t.node.style.cursor = "pointer";
			t.node.style.color = "#fff";
			t.node.innerHTML += '<style type="text/css">\
				search>a{\
					display:inline!important;\
					margin:0px!important;\
					border:0px!important;\
					border-right:solid #808080 1px!important;\
					padding:10px 10px!important;\
					font:14px/20px "宋体","Arail"!important;\
					height:20px!important;\
					background:#333!important;\
					color:#fff!important;\
					text-decoration:none!important;\
				}\
				search>a:visited{\
					color:#000000!important;\
					text-decoration:none!important;\
				}\
				search>a:hover{\
					text-decoration:underline!important;\
				}\
			</style>\ '
			t.node.addEventListener("click",function(e){
				e.stopPropagation();
				t.hide();
			},false);
			for(var i in t.search){
				t.node.innerHTML += "<a class=\"ujs_search_link\" search=\""+t.search[i]["url"]+"\">"+i+"</a>";
			}
			document.documentElement.appendChild(t.node);
		},
		"init":function(){
			var t = this;
			t.create();
			function getString(){
				var s = window.getSelection(), r, c
				if(s.rangeCount){
					r = s.getRangeAt(0);
					c = r.cloneContents();
					return c.textContent?c.textContent:"";
				}
				return "";
			}
			window.addEventListener("mouseup",function(e){
				var E = e.target, x = e.pageX, y = e.pageY;
				if(E.nodeName=="#document"){
					t.hide();
				}else if(E==t.node || E.className=="ujs_search_link"){
					e.stopPropagation();
					e.preventDefault();
				}else{
					t.string = getString();
					if(t.string!=="") t.show(x, y);
					else t.hide();
				}
			},false);
		}
	};
	var o = new search();
	o.init();
})(unsafeWindow, unsafeWindow.document);
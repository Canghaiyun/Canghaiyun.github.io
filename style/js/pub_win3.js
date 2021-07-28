function openWin(e) {
	"use strict";
	var t = {};
	if(e.data)
		if("string" == typeof e.data) {
			if("#" != e.data.slice(0, 1) && "." != e.data.slice(0, 1)) return console.log("\u672a\u786e\u5b9a id \u6216 class"), !1;
			t.selector = e.data, t.modus = "pageDom"
		} else e.data instanceof Object && (t = e.data, t.modus || (t.modus = "pageDom"));
	else if(e instanceof Object)
		if(t = e, "pvwin" == t.modus);
		else {
			if(t.modus) return !1;
			t.modus = "pageDom"
		}
	if("pageDom" == t.modus) {
		if(1 != $("body").find(t.selector).length) return console.log(t.selector + " \u4e0d\u5b58\u5728 \u6216 \u6709\u591a\u4e2a"), t = null, !1
	} else t.selector = ".winBox_" + t.modus;
	t.close = function() {
		$("body").find(".winCover").remove(), "pageDom" == t.modus ? t.selector.hide().removeAttr("style") : t.selector.remove(), "function" == typeof t.closeCallback && t.closeCallback(), t = null
	}, $("body").one("click", ".closeWin,.winCover", t.close), t.open = function() {
		if(t.viewWidth = $(window).width(), t.viewHeight = $(window).height(), t.browserScroll = $(document).scrollTop(), "pageDom" != t.modus && "pvwin" != t.modus) {
			if("img" == t.modus) {
				if(t.width < 100 || !t.width) return console.log("\u56fe\u7247width\u4e0d\u80fd\u5c0f\u4e8e100"), t = null, !1;
				t.width + 100 > t.viewWidth && (t.width = t.viewWidth - 100), t.content = '<img src="' + t.imgSrc + '" width="' + t.width + '">'
			}
			t.dom = '<div class="winBox ' + t.selector.slice(1) + '"><span class="closeWin">\u5173\u95ed</span><div class="winCon">' + t.content + "</div></div>", $("body").append(t.dom)
		}
		t.selector = $(t.selector), t.width = t.selector.outerWidth(!0), t.height = t.selector.outerHeight(!0), t.coverCss = "position:fixed;z-index:1000;top:0;left:0;bottom:0;width:100%;height:100%;background:#000;filter:alpha(opacity=70);opacity:.7;", t.coverDom = '<div class="winCover" style="' + t.coverCss + '"></div>', t.css = "z-index:1005;left:50%;margin-left:" + Math.floor(-t.width / 2) + "px;", t.cssFixed = "position:fixed;top:50%;margin-top:" + Math.floor(-t.height / 2) + "px;", t.cssAbsolute = "position:absolute;top:" + (t.browserScroll + 10) + "px;", t.width + 100 > t.viewWidth && (t.width = t.viewWidth - 100, t.maxWidth = "width:" + t.width + "px;", t.css = "z-index:1005;left:50%;margin-left:" + Math.floor(-t.width / 2) + "px;" + t.maxWidth), t.height > t.viewHeight ? t.css += t.cssAbsolute : (t.css += t.cssFixed, navigator.userAgent.indexOf("MSIE 6") > -1 && (t.css += "top:" + Math.floor(t.browserScroll + (t.viewHeight - t.height) / 2) + "px;")), $("body").append(t.coverDom), t.selector.attr("style", t.css).fadeIn(300)
	}, t.open()
}

function playMedia(e) {
	var t = {};
	if(e.data == undefined || null == e.data || "" == e.data) {
		if(!(e instanceof Object)) return !1;
		t = e
	} else {
		if(!(e.data instanceof Object)) return !1;
		t = e.data
	}
	if(t.url == undefined || "" == t.url || null == t.url) return console.log("\u672a\u914d\u7f6e\u89c6\u9891\u5730\u5740 url"), !1;
	if(t.ex = t.url.substr(t.url.length - 4, 4), t.shellClass = "", t.setAutoplay = 'autoplay="autoplay"', t.setControls = 'controls="controls"', t.setLoop = 'loop="loop"', 0 == t.autoplay && (t.setAutoplay = ""), 0 == t.controls && (t.setControls = ""), 0 == t.loop && (t.setLoop = ""), t.bg || (t.bg = ""), "pvwin" == t.modus) t.width == undefined || "" == t.width || t.height == undefined || "" == t.height || t.width < 400 || t.height < 300 || 1 == isNaN(t.width) || 1 == isNaN(t.height) ? (t.width = 800, t.height = 450) : (t.width = Number(t.width), t.height = Number(t.height)), t.width + 100 > $(window).width() && (t.width = $(window).width() - 100), t.selector = ".winBox_pv", t.name = "pvwin";
	else if("page" == t.modus) {
		if(t.name = "page" + Math.ceil(1e10 * Math.random()), "" == t.selector || t.selector == undefined || null == t.selector || 0 == $(t.selector).length) return console.log("selector\u672a\u8bbe\u7f6e\uff0c\u6216\u4e0d\u5b58\u5728"), !1;
		if(t.width == undefined || "" == t.width || t.height == undefined || "" == t.height || 1 == isNaN(t.width) || 1 == isNaN(t.height)) return console.log(t.selector + "\uff1a\u5bbd\u9ad8\u8bbe\u7f6e\u6709\u8bef"), !1;
		if(navigator.userAgent.indexOf("Chrome") > 0 && (t.width < 400 || t.height < 300)) {
			var i = !0,
				o = t.selector,
				s = t.width,
				l = t.height;
			t.width = 400, t.height = 300, t.shellClass = "visibility:hidden;"
		}
	} else console.log("modus\u53ea\u63a5\u53d7 pvwin \u6216 page");
	if(t.shellClass += "width:" + t.width + "px;height:" + t.height + "px;background:#000", t.swf = "<div id=" + t.name + ' style="height:100%;width:100%;"></div>', t.video = '<video src="' + t.url + '" width="100%" height="100%" poster="' + t.bg + '" preload="auto" ' + t.setAutoplay + " " + t.setControls + " " + t.setLoop + ' style="display:block">\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301 video \u6807\u7b7e</video>', t.embed = '<embed src="' + t.url + '" width="100%" height="100%" allowFullScreen="true" quality="high" align="top" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer"></embed>', t.creatDom = function(e) {
			"pvwin" == t.modus ? (t.content = '<div class="winBox winBox_pvwin"><div class="pvshell" style="' + t.shellClass + '">' + e + '</div><span class="closeWin"></span></div>', $("body").append(t.content)) : "page" == t.modus && (t.content = '<div class="pvshell" style="' + t.shellClass + '">' + e + "</div>", $("body").find(t.selector).append(t.content))
		}, ".mp4" == t.ex && 1 == canPlayVideoTag) t.creatDom(t.video);
	else if(".mp4" == t.ex && 0 == canPlayVideoTag) {
		t.creatDom(t.swf);
		var n = new SWFObject("../../../s2.qhimg.com/static/8dccccc36ce33293.swf"/*tpa=http://s2.qhimg.com/static/8dccccc36ce33293.swf*/, "single", "100%", "100%", "7");
		n.addParam("allowfullscreen", "true"), n.addVariable("file", t.url), n.addVariable("width", "100%"), n.addVariable("height", "100%"), n.write(t.name)
	} else {
		if(".swf" != t.ex) return t = null, !1;
		t.creatDom(t.embed)
	}
	"pvwin" == t.modus ? openWin(t) : "page" == t.modus && 1 == i && setTimeout(function() {
		$("body").find(o).find(".pvshell").attr("style", "visibility:visible;width:" + s + "px;height:" + l + "px;")
	}, 500), t = null
}
var canPlayVideoTag = !0;
document.createElement("video").canPlayType || (document.write('<script src="../../../s6.qhimg.com/!5f15c22f/theme/flvobject.js"/*tpa=http://s6.qhimg.com/!5f15c22f/theme/flvobject.js*/><\/script>'), canPlayVideoTag = !1), $(function() {
	if($(".tabTag li").click(function() {
			if(!$(this).hasClass("cur")) {
				var e = $(this).index();
				$(this).addClass("cur").siblings("li").removeClass("cur"), $(this).parents(".tabBox").children(".tabGroup").children(".tabUnit").fadeOut(0).eq(e).fadeIn(200)
			}
		}), $(".tabBox .tabUnit:nth-child(1)").show(), $(".tabBox .tabTag li:nth-child(1)").addClass("cur"), $(".showPlayer").length > 0 && $("body").on("click", ".showPlayer", function() {
			var e = {
				modus: "pvwin",
				url: $(this).attr("pvurl"),
				width: $(this).attr("pvwidth"),
				height: $(this).attr("pvheight")
			};
			playMedia(e), e = null
		}), navigator.userAgent.indexOf("IE 6") > -1) {
		var e = {
			modus: "codeBlock",
			content: '<div style="background:#fff;padding:20px 50px;text-align:center;font-size:14px;line-height:30px;">\u60a8\u4f7f\u7528\u7684\u6d4f\u89c8\u5668\u7248\u672c\u8fc7\u4f4e\uff0c<br>\u5efa\u8bae\u4f7f\u7528360\u5b89\u5168\u6d4f\u89c8\u5668\uff0c\u8fbe\u5230\u6700\u4f73\u6d4f\u89c8\u6548\u679c\uff0c<br><a href="http://se.360.cn/" target="_blank" style="display:block;background:url(http://p1.qhimg.com/d/inn/e2760a50/logo.jpg) no-repeat;width:220px;height:55px;margin:0 auto;line-height:150px;overflow:hidden;">\u4e0b\u8f7d360\u5b89\u5168\u6d4f\u89c8\u5668</a></div>'
		};
		$("body").one("click", e, openWin), $("body").trigger("click")
	}
});
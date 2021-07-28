(function() {
	function e(e, t) {
		for(var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		return e
	}
	if(!monitor) return;
	window.monitor_qdas = window.QIHOO_MONITOR;
	var t = {};
	monitor_qdas.setGlobalParams = function(e, n) {
		t[e] = n
	};
	var n = monitor_qdas.data.getBase;
	monitor_qdas.data.getBase = function() {
		var r = n();
		return e(r, t), r
	}
})(),
function() {
	var e, t, n, r, i = /(?:^|;\s)Q=(.*?);/,
		s = /(?:^|&)qid=(.*?)(&|$)/,
		o = /(?:^|;\s)__guid=(.*?);/,
		u = function(e, t) {
			var n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
				r = location.search.substr(1).match(n);
			return r !== null ? unescape(r[2]) : t || null
		};
	e = u("src"), t = u("channel");
	var a = document.cookie.match(i),
		f = "",
		l = "";
	a && (f = decodeURIComponent(a[1]), l = f.match(s), l && (n = l[1]));
	var c = document.cookie.match(o);
	c && c[1] && (r = c[1]), n && monitor_qdas.setGlobalParams("qid", n), e && monitor_qdas.setGlobalParams("src", e), t && monitor_qdas.setGlobalParams("channel", t), r && monitor_qdas.setGlobalParams("guid", r)
}();
/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/master/LICENSE
 */
(function(e, t) {
	"use strict";
	typeof define == "function" && define.amd ? define(t) : typeof exports == "object" ? module.exports = t() : e.returnExports = t()
})(this, function() {
	var e = Function.call,
		t = Object.prototype,
		n = e.bind(t.hasOwnProperty),
		r = e.bind(t.propertyIsEnumerable),
		i = e.bind(t.toString),
		s, o, u, a, f = n(t, "__defineGetter__");
	f && (s = e.bind(t.__defineGetter__), o = e.bind(t.__defineSetter__), u = e.bind(t.__lookupGetter__), a = e.bind(t.__lookupSetter__)), Object.getPrototypeOf || (Object.getPrototypeOf = function(n) {
		var r = n.__proto__;
		return r || r === null ? r : i(n.constructor) === "[object Function]" ? n.constructor.prototype : n instanceof Object ? t : null
	});
	var l = function(t) {
		try {
			return t.sentinel = 0, Object.getOwnPropertyDescriptor(t, "sentinel").value === 0
		} catch(n) {
			return !1
		}
	};
	if(Object.defineProperty) {
		var c = l({}),
			h = typeof document == "undefined" || l(document.createElement("div"));
		if(!h || !c) var p = Object.getOwnPropertyDescriptor
	}
	if(!Object.getOwnPropertyDescriptor || p) {
		var d = "Object.getOwnPropertyDescriptor called on a non-object: ";
		Object.getOwnPropertyDescriptor = function(i, s) {
			if(typeof i != "object" && typeof i != "function" || i === null) throw new TypeError(d + i);
			if(p) try {
				return p.call(Object, i, s)
			} catch(o) {}
			var l;
			if(!n(i, s)) return l;
			l = {
				enumerable: r(i, s),
				configurable: !0
			};
			if(f) {
				var c = i.__proto__,
					h = i !== t;
				h && (i.__proto__ = t);
				var v = u(i, s),
					m = a(i, s);
				h && (i.__proto__ = c);
				if(v || m) return v && (l.get = v), m && (l.set = m), l
			}
			return l.value = i[s], l.writable = !0, l
		}
	}
	Object.getOwnPropertyNames || (Object.getOwnPropertyNames = function(t) {
		return Object.keys(t)
	});
	if(!Object.create) {
		var v, m = !({
					__proto__: null
				}
				instanceof Object),
			g = function() {
				if(!document.domain) return !1;
				try {
					return !!(new ActiveXObject("htmlfile"))
				} catch(t) {
					return !1
				}
			},
			y = function() {
				var t, n;
				return n = new ActiveXObject("htmlfile"), n.write("<script></script>"), n.close(), t = n.parentWindow.Object.prototype, n = null, t
			},
			b = function() {
				var t = document.createElement("iframe"),
					n = document.body || document.documentElement,
					r;
				return t.style.display = "none", n.appendChild(t), t.src = "javascript:", r = t.contentWindow.Object.prototype, n.removeChild(t), t = null, r
			};
		m || typeof document == "undefined" ? v = function() {
			return {
				__proto__: null
			}
		} : v = function() {
			var e = g() ? y() : b();
			delete e.constructor, delete e.hasOwnProperty, delete e.propertyIsEnumerable, delete e.isPrototypeOf, delete e.toLocaleString, delete e.toString, delete e.valueOf;
			var t = function() {};
			return t.prototype = e, v = function() {
				return new t
			}, new t
		}, Object.create = function(t, n) {
			var r, i = function() {};
			if(t === null) r = v();
			else {
				if(typeof t != "object" && typeof t != "function") throw new TypeError("Object prototype may only be an Object or null");
				i.prototype = t, r = new i, r.__proto__ = t
			}
			return n !== void 0 && Object.defineProperties(r, n), r
		}
	}
	var w = function(t) {
		try {
			return Object.defineProperty(t, "sentinel", {}), "sentinel" in t
		} catch(n) {
			return !1
		}
	};
	if(Object.defineProperty) {
		var E = w({}),
			S = typeof document == "undefined" || w(document.createElement("div"));
		if(!E || !S) var x = Object.defineProperty,
			T = Object.defineProperties
	}
	if(!Object.defineProperty || x) {
		var N = "Property description must be an object: ",
			C = "Object.defineProperty called on non-object: ",
			k = "getters & setters can not be defined on this javascript engine";
		Object.defineProperty = function(n, r, i) {
			if(typeof n != "object" && typeof n != "function" || n === null) throw new TypeError(C + n);
			if(typeof i != "object" && typeof i != "function" || i === null) throw new TypeError(N + i);
			if(x) try {
				return x.call(Object, n, r, i)
			} catch(l) {}
			if("value" in i)
				if(f && (u(n, r) || a(n, r))) {
					var c = n.__proto__;
					n.__proto__ = t, delete n[r], n[r] = i.value, n.__proto__ = c
				} else n[r] = i.value;
			else {
				if(!f && ("get" in i || "set" in i)) throw new TypeError(k);
				"get" in i && s(n, r, i.get), "set" in i && o(n, r, i.set)
			}
			return n
		}
	}
	if(!Object.defineProperties || T) Object.defineProperties = function(t, n) {
		if(T) try {
			return T.call(Object, t, n)
		} catch(r) {}
		return Object.keys(n).forEach(function(e) {
			e !== "__proto__" && Object.defineProperty(t, e, n[e])
		}), t
	};
	Object.seal || (Object.seal = function(t) {
		if(Object(t) !== t) throw new TypeError("Object.seal can only be called on Objects.");
		return t
	}), Object.freeze || (Object.freeze = function(t) {
		if(Object(t) !== t) throw new TypeError("Object.freeze can only be called on Objects.");
		return t
	});
	try {
		Object.freeze(function() {})
	} catch(L) {
		Object.freeze = function(e) {
			return function(n) {
				return typeof n == "function" ? n : e(n)
			}
		}(Object.freeze)
	}
	Object.preventExtensions || (Object.preventExtensions = function(t) {
		if(Object(t) !== t) throw new TypeError("Object.preventExtensions can only be called on Objects.");
		return t
	}), Object.isSealed || (Object.isSealed = function(t) {
		if(Object(t) !== t) throw new TypeError("Object.isSealed can only be called on Objects.");
		return !1
	}), Object.isFrozen || (Object.isFrozen = function(t) {
		if(Object(t) !== t) throw new TypeError("Object.isFrozen can only be called on Objects.");
		return !1
	}), Object.isExtensible || (Object.isExtensible = function(t) {
		if(Object(t) !== t) throw new TypeError("Object.isExtensible can only be called on Objects.");
		var r = "";
		while(n(t, r)) r += "?";
		t[r] = !0;
		var i = n(t, r);
		return delete t[r], i
	})
});
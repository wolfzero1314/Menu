/*
 * @Author: liuyb
 * @Date:   2017-06-28 10:38:35
 * @Last Modified by:   liuyb
 * @Last Modified time: 2017-06-28 11:14:20
 */

'use strict';
(function(n, t) {
    function et(n) {
        return i.isWindow(n) ? n : n.nodeType === 9 ? n.defaultView || n.parentWindow : !1 }

    function li(n) {
        if (!ft[n]) {
            var e = r.body,
                t = i("<" + n + ">").appendTo(e),
                u = t.css("display");
            t.remove(), (u === "none" || u === "") && (f || (f = r.createElement("iframe"), f.frameBorder = f.width = f.height = 0), e.appendChild(f), l && f.createElement || (l = (f.contentWindow || f.contentDocument).document, l.write((r.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"), l.close()), t = l.createElement(n), l.body.appendChild(t), u = i.css(t, "display"), e.removeChild(f)), ft[n] = u }
        return ft[n] }

    function v(n, t) {
        var r = {};
        return i.each(di.concat.apply([], di.slice(0, t)), function() { r[this] = n }), r }

    function ff() { k = t }

    function ur() {
        return setTimeout(ff, 0), k = i.now() }

    function uf() {
        try {
            return new n.ActiveXObject("Microsoft.XMLHTTP") } catch (t) {} }

    function gi() {
        try {
            return new n.XMLHttpRequest } catch (t) {} }

    function rf(n, r) { n.dataFilter && (r = n.dataFilter(r, n.dataType));
        for (var v = n.dataTypes, s = {}, l, p = v.length, a, u = v[0], h, y, f, e, o, c = 1; c < p; c++) {
            if (c === 1)
                for (l in n.converters) typeof l == "string" && (s[l.toLowerCase()] = n.converters[l]);
            if (h = u, u = v[c], u === "*") u = h;
            else if (h !== "*" && h !== u) {
                if (y = h + " " + u, f = s[y] || s["* " + u], !f) { o = t;
                    for (e in s)
                        if (a = e.split(" "), (a[0] === h || a[0] === "*") && (o = s[a[1] + " " + u], o)) { e = s[e], e === !0 ? f = o : o === !0 && (f = e);
                            break } }!f && !o && i.error("No conversion from " + y.replace(" ", " to ")), f !== !0 && (r = f ? f(r) : o(e(r))) } }
        return r }

    function tf(n, i, r) {
        var s = n.contents,
            f = n.dataTypes,
            c = n.responseFields,
            o, u, e, h;
        for (u in c) u in r && (i[c[u]] = r[u]);
        while (f[0] === "*") f.shift(), o === t && (o = n.mimeType || i.getResponseHeader("content-type"));
        if (o)
            for (u in s)
                if (s[u] && s[u].test(o)) { f.unshift(u);
                    break }
        if (f[0] in r) e = f[0];
        else {
            for (u in r) {
                if (!f[0] || n.converters[u + " " + f[0]]) { e = u;
                    break }
                h || (h = u) }
            e = e || h }
        if (e) return e !== f[0] && f.unshift(e), r[e] }

    function ct(n, t, r, u) {
        if (i.isArray(t)) i.each(t, function(t, f) { r || ru.test(n) ? u(n, f) : ct(n + "[" + (typeof f == "object" || i.isArray(f) ? t : "") + "]", f, r, u) });
        else if (r || t == null || typeof t != "object") u(n, t);
        else
            for (var f in t) ct(n + "[" + f + "]", t[f], r, u) }

    function tr(n, r) {
        var u, f, e = i.ajaxSettings.flatOptions || {};
        for (u in r) r[u] !== t && ((e[u] ? n : f || (f = {}))[u] = r[u]);
        f && i.extend(!0, n, f) }

    function nt(n, i, r, u, f, e) { f = f || i.dataTypes[0], e = e || {}, e[f] = !0;
        for (var s = n[f], h = 0, l = s ? s.length : 0, c = n === rt, o; h < l && (c || !o); h++) o = s[h](i, r, u), typeof o == "string" && (!c || e[o] ? o = t : (i.dataTypes.unshift(o), o = nt(n, i, r, u, o, e)));
        return (c || !o) && !e["*"] && (o = nt(n, i, r, u, "*", e)), o }

    function lt(n) {
        return function(t, r) {
            if (typeof t != "string" && (r = t, t = "*"), i.isFunction(r))
                for (var o = t.toLowerCase().split(kt), f = 0, h = o.length, u, s, e; f < h; f++) u = o[f], e = /^\+/.test(u), e && (u = u.substr(1) || "*"), s = n[u] = n[u] || [], s[e ? "unshift" : "push"](r) } }

    function fr(n, t, r) {
        var u = t === "width" ? n.offsetWidth : n.offsetHeight,
            e = t === "width" ? hu : ee,
            f = 0,
            o = e.length;
        if (u > 0) {
            if (r !== "border")
                for (; f < o; f++) r || (u -= parseFloat(i.css(n, "padding" + e[f])) || 0), r === "margin" ? u += parseFloat(i.css(n, r + e[f])) || 0 : u -= parseFloat(i.css(n, "border" + e[f] + "Width")) || 0;
            return u + "px" }
        if (u = a(n, t, t), (u < 0 || u == null) && (u = n.style[t] || 0), u = parseFloat(u) || 0, r)
            for (; f < o; f++) u += parseFloat(i.css(n, "padding" + e[f])) || 0, r !== "padding" && (u += parseFloat(i.css(n, "border" + e[f] + "Width")) || 0), r === "margin" && (u += parseFloat(i.css(n, r + e[f])) || 0);
        return u + "px" }

    function nf(n, t) { t.src ? i.ajax({ url: t.src, async: !1, dataType: "script" }) : i.globalEval((t.text || t.textContent || t.innerHTML || "").replace(pf, "/*$0*/")), t.parentNode && t.parentNode.removeChild(t) }

    function gu(n) {
        var t = r.createElement("div");
        return dt.appendChild(t), t.innerHTML = n.outerHTML, t.firstChild }

    function nr(n) {
        var t = (n.nodeName || "").toLowerCase();
        t === "input" ? wi(n) : t !== "script" && typeof n.getElementsByTagName != "undefined" && i.grep(n.getElementsByTagName("input"), wi) }

    function wi(n) {
        (n.type === "checkbox" || n.type === "radio") && (n.defaultChecked = n.checked) }

    function tt(n) {
        return typeof n.getElementsByTagName != "undefined" ? n.getElementsByTagName("*") : typeof n.querySelectorAll != "undefined" ? n.querySelectorAll("*") : [] }

    function at(n, t) {
        var r;
        t.nodeType === 1 && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(n), r = t.nodeName.toLowerCase(), r === "object" ? t.outerHTML = n.outerHTML : r !== "input" || n.type !== "checkbox" && n.type !== "radio" ? r === "option" ? t.selected = n.defaultSelected : (r === "input" || r === "textarea") && (t.defaultValue = n.defaultValue) : (n.checked && (t.defaultChecked = t.checked = n.checked), t.value !== n.value && (t.value = n.value)), t.removeAttribute(i.expando)) }

    function yr(n, t) {
        if (t.nodeType === 1 && !!i.hasData(n)) {
            var r, u, o, s = i._data(n),
                e = i._data(t, s),
                f = s.events;
            if (f) { delete e.handle, e.events = {};
                for (r in f)
                    for (u = 0, o = f[r].length; u < o; u++) i.event.add(t, r + (f[r][u].namespace ? "." : "") + f[r][u].namespace, f[r][u], f[r][u].data) }
            e.data && (e.data = i.extend({}, e.data)) } }

    function du(n) {
        return i.nodeName(n, "table") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n }

    function vi(n) {
        var i = ni.split("|"),
            t = n.createDocumentFragment();
        if (t.createElement)
            while (i.length) t.createElement(i.pop());
        return t }

    function yi(n, t, r) {
        if (t = t || 0, i.isFunction(t)) return i.grep(n, function(n, i) {
            var u = !!t.call(n, i, n);
            return u === r });
        if (t.nodeType) return i.grep(n, function(n) {
            return n === t === r });
        if (typeof t == "string") {
            var u = i.grep(n, function(n) {
                return n.nodeType === 1 });
            if (ie.test(t)) return i.filter(t, u, !r);
            t = i.filter(t, u) }
        return i.grep(n, function(n) {
            return i.inArray(n, t) >= 0 === r }) }

    function pi(n) {
        return !n || !n.parentNode || n.parentNode.nodeType === 11 }

    function g() {
        return !0 }

    function c() {
        return !1 }

    function bi(n, t, r) {
        var u = t + "defer",
            f = t + "queue",
            e = t + "mark",
            o = i._data(n, u);
        o && (r === "queue" || !i._data(n, f)) && (r === "mark" || !i._data(n, e)) && setTimeout(function() {!i._data(n, f) && !i._data(n, e) && (i.removeData(n, u, !0), o.fire()) }, 0) }

    function ot(n) {
        for (var t in n)
            if ((t !== "data" || !i.isEmptyObject(n[t])) && t !== "toJSON") return !1;
        return !0 }

    function ki(n, r, u) {
        if (u === t && n.nodeType === 1) {
            var f = "data-" + r.replace(ar, "-$1").toLowerCase();
            if (u = n.getAttribute(f), typeof u == "string") {
                try { u = u === "true" ? !0 : u === "false" ? !1 : u === "null" ? null : i.isNumeric(u) ? parseFloat(u) : rr.test(u) ? i.parseJSON(u) : u } catch (e) {}
                i.data(n, r, u) } else u = t }
        return u }

    function ef(n) {
        var i = ir[n] = {},
            t, r;
        for (n = n.split(/\s+/), t = 0, r = n.length; t < r; t++) i[n[t]] = !0;
        return i }
    var r = n.document,
        ku = n.navigator,
        wu = n.location,
        i = function() {
            function c() {
                if (!i.isReady) {
                    try { r.documentElement.doScroll("left") } catch (n) { setTimeout(c, 1);
                        return }
                    i.ready() } }
            var i = function(n, t) {
                    return new i.fn.init(n, t, y) },
                d = n.jQuery,
                g = n.$,
                y, nt = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                p = /\S/,
                w = /^\s+/,
                b = /\s+$/,
                st = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                it = /^[\],:{}\s]*$/,
                k = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                lt = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                ct = /(?:^|:|,)(?:\s*\[)+/g,
                ht = /(webkit)[ \/]([\w.]+)/,
                vt = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                ot = /(msie) ([\w.]+)/,
                et = /(mozilla)(?:.*? rv:([\w.]+))?/,
                ft = /-([a-z]|[0-9])/ig,
                ut = /^-ms-/,
                at = function(n, t) {
                    return (t + "").toUpperCase() },
                rt = ku.userAgent,
                o, e, u, tt = Object.prototype.toString,
                h = Object.prototype.hasOwnProperty,
                s = Array.prototype.push,
                f = Array.prototype.slice,
                l = String.prototype.trim,
                a = Array.prototype.indexOf,
                v = {};
            return i.fn = i.prototype = { constructor: i, init: function(n, u, f) {
                    var e, s, o, h;
                    if (!n) return this;
                    if (n.nodeType) return this.context = this[0] = n, this.length = 1, this;
                    if (n === "body" && !u && r.body) return this.context = r, this[0] = r.body, this.selector = n, this.length = 1, this;
                    if (typeof n == "string") {
                        if (e = n.charAt(0) !== "<" || n.charAt(n.length - 1) !== ">" || n.length < 3 ? nt.exec(n) : [null, n, null], e && (e[1] || !u)) {
                            if (e[1]) return u = u instanceof i ? u[0] : u, h = u ? u.ownerDocument || u : r, o = st.exec(n), o ? i.isPlainObject(u) ? (n = [r.createElement(o[1])], i.fn.attr.call(n, u, !0)) : n = [h.createElement(o[1])] : (o = i.buildFragment([e[1]], [h]), n = (o.cacheable ? i.clone(o.fragment) : o.fragment).childNodes), i.merge(this, n);
                            if (s = r.getElementById(e[2]), s && s.parentNode) {
                                if (s.id !== e[2]) return f.find(n);
                                this.length = 1, this[0] = s }
                            return this.context = r, this.selector = n, this }
                        return !u || u.jquery ? (u || f).find(n) : this.constructor(u).find(n) }
                    return i.isFunction(n) ? f.ready(n) : (n.selector !== t && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this)) }, selector: "", jquery: "1.7.1", length: 0, size: function() {
                    return this.length }, toArray: function() {
                    return f.call(this, 0) }, get: function(n) {
                    return n == null ? this.toArray() : n < 0 ? this[this.length + n] : this[n] }, pushStack: function(n, t, r) {
                    var u = this.constructor();
                    return i.isArray(n) ? s.apply(u, n) : i.merge(u, n), u.prevObject = this, u.context = this.context, t === "find" ? u.selector = this.selector + (this.selector ? " " : "") + r : t && (u.selector = this.selector + "." + t + "(" + r + ")"), u }, each: function(n, t) {
                    return i.each(this, n, t) }, ready: function(n) {
                    return i.bindReady(), e.add(n), this }, eq: function(n) {
                    return n = +n, n === -1 ? this.slice(n) : this.slice(n, n + 1) }, first: function() {
                    return this.eq(0) }, last: function() {
                    return this.eq(-1) }, slice: function() {
                    return this.pushStack(f.apply(this, arguments), "slice", f.call(arguments).join(",")) }, map: function(n) {
                    return this.pushStack(i.map(this, function(t, i) {
                        return n.call(t, i, t) })) }, end: function() {
                    return this.prevObject || this.constructor(null) }, push: s, sort: [].sort, splice: [].splice }, i.fn.init.prototype = i.fn, i.extend = i.fn.extend = function() {
                var o, e, u, r, s, h, n = arguments[0] || {},
                    f = 1,
                    l = arguments.length,
                    c = !1;
                for (typeof n == "boolean" && (c = n, n = arguments[1] || {}, f = 2), typeof n != "object" && !i.isFunction(n) && (n = {}), l === f && (n = this, --f); f < l; f++)
                    if ((o = arguments[f]) != null)
                        for (e in o)(u = n[e], r = o[e], n !== r) && (c && r && (i.isPlainObject(r) || (s = i.isArray(r))) ? (s ? (s = !1, h = u && i.isArray(u) ? u : []) : h = u && i.isPlainObject(u) ? u : {}, n[e] = i.extend(c, h, r)) : r !== t && (n[e] = r));
                return n }, i.extend({ noConflict: function(t) {
                    return n.$ === i && (n.$ = g), t && n.jQuery === i && (n.jQuery = d), i }, isReady: !1, readyWait: 1, holdReady: function(n) { n ? i.readyWait++ : i.ready(!0) }, ready: function(n) {
                    if (n === !0 && !--i.readyWait || n !== !0 && !i.isReady) {
                        if (!r.body) return setTimeout(i.ready, 1);
                        if (i.isReady = !0, n !== !0 && --i.readyWait > 0) return;
                        e.fireWith(r, [i]), i.fn.trigger && i(r).trigger("ready").off("ready") } }, bindReady: function() {
                    if (!e) {
                        if (e = i.Callbacks("once memory"), r.readyState === "complete") return setTimeout(i.ready, 1);
                        if (r.addEventListener) r.addEventListener("DOMContentLoaded", u, !1), n.addEventListener("load", i.ready, !1);
                        else if (r.attachEvent) { r.attachEvent("onreadystatechange", u), n.attachEvent("onload", i.ready);
                            var t = !1;
                            try { t = n.frameElement == null } catch (f) {}
                            r.documentElement.doScroll && t && c() } } }, isFunction: function(n) {
                    return i.type(n) === "function" }, isArray: Array.isArray || function(n) {
                    return i.type(n) === "array" }, isWindow: function(n) {
                    return n && typeof n == "object" && "setInterval" in n }, isNumeric: function(n) {
                    return !isNaN(parseFloat(n)) && isFinite(n) }, type: function(n) {
                    return n == null ? String(n) : v[tt.call(n)] || "object" }, isPlainObject: function(n) {
                    if (!n || i.type(n) !== "object" || n.nodeType || i.isWindow(n)) return !1;
                    try {
                        if (n.constructor && !h.call(n, "constructor") && !h.call(n.constructor.prototype, "isPrototypeOf")) return !1 } catch (u) {
                        return !1 }
                    var r;
                    for (r in n);
                    return r === t || h.call(n, r) }, isEmptyObject: function(n) {
                    for (var t in n) return !1;
                    return !0 }, error: function(n) {
                    throw new Error(n); }, parseJSON: function(t) {
                    if (typeof t != "string" || !t) return null;
                    if (t = i.trim(t), n.JSON && n.JSON.parse) return n.JSON.parse(t);
                    if (it.test(t.replace(k, "@").replace(lt, "]").replace(ct, ""))) return new Function("return " + t)();
                    i.error("Invalid JSON: " + t) }, parseXML: function(r) {
                    var u, f;
                    try { n.DOMParser ? (f = new DOMParser, u = f.parseFromString(r, "text/xml")) : (u = new ActiveXObject("Microsoft.XMLDOM"), u.async = "false", u.loadXML(r)) } catch (e) { u = t }
                    return (!u || !u.documentElement || u.getElementsByTagName("parsererror").length) && i.error("Invalid XML: " + r), u }, noop: function() {}, globalEval: function(t) { t && p.test(t) && (n.execScript || function(t) { n.eval.call(n, t) })(t) }, camelCase: function(n) {
                    return n.replace(ut, "ms-").replace(ft, at) }, nodeName: function(n, t) {
                    return n.nodeName && n.nodeName.toUpperCase() === t.toUpperCase() }, each: function(n, r, u) {
                    var f, e = 0,
                        o = n.length,
                        s = o === t || i.isFunction(n);
                    if (u) {
                        if (s) {
                            for (f in n)
                                if (r.apply(n[f], u) === !1) break } else
                            for (; e < o;)
                                if (r.apply(n[e++], u) === !1) break } else if (s) {
                        for (f in n)
                            if (r.call(n[f], f, n[f]) === !1) break } else
                        for (; e < o;)
                            if (r.call(n[e], e, n[e++]) === !1) break; return n }, trim: l ? function(n) {
                    return n == null ? "" : l.call(n) } : function(n) {
                    return n == null ? "" : (n + "").replace(w, "").replace(b, "") }, makeArray: function(n, t) {
                    var u = t || [],
                        r;
                    return n != null && (r = i.type(n), n.length == null || r === "string" || r === "function" || r === "regexp" || i.isWindow(n) ? s.call(u, n) : i.merge(u, n)), u }, inArray: function(n, t, i) {
                    var r;
                    if (t) {
                        if (a) return a.call(t, n, i);
                        for (r = t.length, i = i ? i < 0 ? Math.max(0, r + i) : i : 0; i < r; i++)
                            if (i in t && t[i] === n) return i }
                    return -1 }, merge: function(n, i) {
                    var u = n.length,
                        r = 0,
                        f;
                    if (typeof i.length == "number")
                        for (f = i.length; r < f; r++) n[u++] = i[r];
                    else
                        while (i[r] !== t) n[u++] = i[r++];
                    return n.length = u, n }, grep: function(n, t, i) {
                    var u = [],
                        f, r, e;
                    for (i = !!i, r = 0, e = n.length; r < e; r++) f = !!t(n[r], r), i !== f && u.push(n[r]);
                    return u }, map: function(n, r, u) {
                    var f, h, e = [],
                        s = 0,
                        o = n.length,
                        c = n instanceof i || o !== t && typeof o == "number" && (o > 0 && n[0] && n[o - 1] || o === 0 || i.isArray(n));
                    if (c)
                        for (; s < o; s++) f = r(n[s], s, u), f != null && (e[e.length] = f);
                    else
                        for (h in n) f = r(n[h], h, u), f != null && (e[e.length] = f);
                    return e.concat.apply([], e) }, guid: 1, proxy: function(n, r) {
                    var e, o, u;
                    return (typeof r == "string" && (e = n[r], r = n, n = e), !i.isFunction(n)) ? t : (o = f.call(arguments, 2), u = function() {
                        return n.apply(r, o.concat(f.call(arguments))) }, u.guid = n.guid = n.guid || u.guid || i.guid++, u) }, access: function(n, r, u, f, e, o) {
                    var c = n.length,
                        h, s;
                    if (typeof r == "object") {
                        for (h in r) i.access(n, h, r[h], f, e, u);
                        return n }
                    if (u !== t) {
                        for (f = !o && f && i.isFunction(u), s = 0; s < c; s++) e(n[s], r, f ? u.call(n[s], s, e(n[s], r)) : u, o);
                        return n }
                    return c ? e(n[0], r) : t }, now: function() {
                    return +new Date }, uaMatch: function(n) { n = n.toLowerCase();
                    var t = ht.exec(n) || vt.exec(n) || ot.exec(n) || n.indexOf("compatible") < 0 && et.exec(n) || [];
                    return { browser: t[1] || "", version: t[2] || "0" } }, sub: function() {
                    function n(t, i) {
                        return new n.fn.init(t, i) }
                    i.extend(!0, n, this), n.superclass = this, n.fn = n.prototype = this(), n.fn.constructor = n, n.sub = this.sub, n.fn.init = function(r, u) {
                        return u && u instanceof i && !(u instanceof n) && (u = n(u)), i.fn.init.call(this, r, u, t) }, n.fn.init.prototype = n.fn;
                    var t = n(r);
                    return n }, browser: {} }), i.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(n, t) { v["[object " + t + "]"] = t.toLowerCase() }), o = i.uaMatch(rt), o.browser && (i.browser[o.browser] = !0, i.browser.version = o.version), i.browser.webkit && (i.browser.safari = !0), p.test(" ") && (w = /^[\s\xA0]+/, b = /[\s\xA0]+$/), y = i(r), r.addEventListener ? u = function() { r.removeEventListener("DOMContentLoaded", u, !1), i.ready() } : r.attachEvent && (u = function() { r.readyState === "complete" && (r.detachEvent("onreadystatechange", u), i.ready()) }), i }(),
        ir = {},
        b, rr, ar, cr, y, p, vr, h, or, ut;
    i.Callbacks = function(n) { n = n ? ir[n] || ef(n) : {};
        var r = [],
            f = [],
            u, s, c, h, e, l = function(t) {
                for (var u, e, h, f = 0, s = t.length; f < s; f++) u = t[f], e = i.type(u), e === "array" ? l(u) : e === "function" && (!n.unique || !o.has(u)) && r.push(u) },
            a = function(t, i) {
                for (i = i || [], u = !n.memory || [t, i], s = !0, e = c || 0, c = 0, h = r.length; r && e < h; e++)
                    if (r[e].apply(t, i) === !1 && n.stopOnFalse) { u = !0;
                        break }
                s = !1, r && (n.once ? u === !0 ? o.disable() : r = [] : f && f.length && (u = f.shift(), o.fireWith(u[0], u[1]))) },
            o = { add: function() {
                    if (r) {
                        var n = r.length;
                        l(arguments), s ? h = r.length : u && u !== !0 && (c = n, a(u[0], u[1])) }
                    return this }, remove: function() {
                    var t;
                    if (r)
                        for (var u = arguments, i = 0, f = u.length; i < f; i++)
                            for (t = 0; t < r.length; t++)
                                if (u[i] === r[t] && (s && t <= h && (h--, t <= e && e--), r.splice(t--, 1), n.unique)) break;
                    return this }, has: function(n) {
                    if (r)
                        for (var t = 0, i = r.length; t < i; t++)
                            if (n === r[t]) return !0;
                    return !1 }, empty: function() {
                    return r = [], this }, disable: function() {
                    return r = f = u = t, this }, disabled: function() {
                    return !r }, lock: function() {
                    return f = t, (!u || u === !0) && o.disable(), this }, locked: function() {
                    return !f }, fireWith: function(t, i) {
                    return f && (s ? n.once || f.push([t, i]) : (!n.once || !u) && a(t, i)), this }, fire: function() {
                    return o.fireWith(this, arguments), this }, fired: function() {
                    return !!u } };
        return o }, b = [].slice, i.extend({ Deferred: function(n) {
            var u = i.Callbacks("once memory"),
                f = i.Callbacks("once memory"),
                e = i.Callbacks("memory"),
                s = "pending",
                h = { resolve: u, reject: f, notify: e },
                o = { done: u.add, fail: f.add, progress: e.add, state: function() {
                        return s }, isResolved: u.fired, isRejected: f.fired, then: function(n, i, r) {
                        return t.done(n).fail(i).progress(r), this }, always: function() {
                        return t.done.apply(t, arguments).fail.apply(t, arguments), this }, pipe: function(n, r, u) {
                        return i.Deferred(function(f) { i.each({ done: [n, "resolve"], fail: [r, "reject"], progress: [u, "notify"] }, function(n, r) {
                                var e = r[0],
                                    o = r[1],
                                    u;
                                i.isFunction(e) ? t[n](function() { u = e.apply(this, arguments), u && i.isFunction(u.promise) ? u.promise().then(f.resolve, f.reject, f.notify) : f[o + "With"](this === t ? f : this, [u]) }) : t[n](f[o]) }) }).promise() }, promise: function(n) {
                        if (n == null) n = o;
                        else
                            for (var t in o) n[t] = o[t];
                        return n } },
                t = o.promise({}),
                r;
            for (r in h) t[r] = h[r].fire, t[r + "With"] = h[r].fireWith;
            return t.done(function() { s = "resolved" }, f.disable, e.lock).fail(function() { s = "rejected" }, u.disable, e.lock), n && n.call(t, t), t }, when: function(n) {
            function h(n) {
                return function(i) { o[n] = arguments.length > 1 ? b.call(arguments, 0) : i, t.notifyWith(s, o) } }

            function c(n) {
                return function(i) { r[n] = arguments.length > 1 ? b.call(arguments, 0) : i, --e || t.resolveWith(t, r) } }
            var r = b.call(arguments, 0),
                u = 0,
                f = r.length,
                o = Array(f),
                e = f,
                l = f,
                t = f <= 1 && n && i.isFunction(n.promise) ? n : i.Deferred(),
                s = t.promise();
            if (f > 1) {
                for (; u < f; u++) r[u] && r[u].promise && i.isFunction(r[u].promise) ? r[u].promise().then(c(u), t.reject, h(u)) : --e;
                e || t.resolveWith(t, r) } else t !== n && t.resolveWith(t, f ? [n] : []);
            return s } }), i.support = function() {
        var u, y, o, l, a, f, s, e, c, w, v, p, h, t = r.createElement("div"),
            b = r.documentElement;
        if (t.setAttribute("className", "t"), t.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", y = t.getElementsByTagName("*"), o = t.getElementsByTagName("a")[0], !y || !y.length || !o) return {};
        l = r.createElement("select"), a = l.appendChild(r.createElement("option")), f = t.getElementsByTagName("input")[0], u = { leadingWhitespace: t.firstChild.nodeType === 3, tbody: !t.getElementsByTagName("tbody").length, htmlSerialize: !!t.getElementsByTagName("link").length, style: /top/.test(o.getAttribute("style")), hrefNormalized: o.getAttribute("href") === "/a", opacity: /^0.55/.test(o.style.opacity), cssFloat: !!o.style.cssFloat, checkOn: f.value === "on", optSelected: a.selected, getSetAttribute: t.className !== "t", enctype: !!r.createElement("form").enctype, html5Clone: r.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>", submitBubbles: !0, changeBubbles: !0, focusinBubbles: !1, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0 }, f.checked = !0, u.noCloneChecked = f.cloneNode(!0).checked, l.disabled = !0, u.optDisabled = !a.disabled;
        try { delete t.test } catch (k) { u.deleteExpando = !1 }
        if (!t.addEventListener && t.attachEvent && t.fireEvent && (t.attachEvent("onclick", function() { u.noCloneEvent = !1 }), t.cloneNode(!0).fireEvent("onclick")), f = r.createElement("input"), f.value = "t", f.setAttribute("type", "radio"), u.radioValue = f.value === "t", f.setAttribute("checked", "checked"), t.appendChild(f), e = r.createDocumentFragment(), e.appendChild(t.lastChild), u.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, u.appendChecked = f.checked, e.removeChild(f), e.appendChild(t), t.innerHTML = "", n.getComputedStyle && (s = r.createElement("div"), s.style.width = "0", s.style.marginRight = "0", t.style.width = "2px", t.appendChild(s), u.reliableMarginRight = (parseInt((n.getComputedStyle(s, null) || { marginRight: 0 }).marginRight, 10) || 0) === 0), t.attachEvent)
            for (p in { submit: 1, change: 1, focusin: 1 }) v = "on" + p, h = v in t, h || (t.setAttribute(v, "return;"), h = typeof t[v] == "function"), u[p + "Bubbles"] = h;
        return e.removeChild(t), e = l = a = s = t = f = null, i(function() {
            var f, e, n, b, p, o, l, a, v, y, w, s = r.getElementsByTagName("body")[0];!s || (l = 1, a = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;", v = "visibility:hidden;border:0;", y = "style='" + a + "border:5px solid #000;padding:0;'", w = "<div " + y + "><div></div></div><table " + y + " cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", f = r.createElement("div"), f.style.cssText = v + "width:0;height:0;position:static;top:0;margin-top:" + l + "px", s.insertBefore(f, s.firstChild), t = r.createElement("div"), f.appendChild(t), t.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", c = t.getElementsByTagName("td"), h = c[0].offsetHeight === 0, c[0].style.display = "", c[1].style.display = "none", u.reliableHiddenOffsets = h && c[0].offsetHeight === 0, t.innerHTML = "", t.style.width = t.style.paddingLeft = "1px", i.boxModel = u.boxModel = t.offsetWidth === 2, typeof t.style.zoom != "undefined" && (t.style.display = "inline", t.style.zoom = 1, u.inlineBlockNeedsLayout = t.offsetWidth === 2, t.style.display = "", t.innerHTML = "<div style='width:4px;'></div>", u.shrinkWrapBlocks = t.offsetWidth !== 2), t.style.cssText = a + v, t.innerHTML = w, e = t.firstChild, n = e.firstChild, p = e.nextSibling.firstChild.firstChild, o = { doesNotAddBorder: n.offsetTop !== 5, doesAddBorderForTableAndCells: p.offsetTop === 5 }, n.style.position = "fixed", n.style.top = "20px", o.fixedPosition = n.offsetTop === 20 || n.offsetTop === 15, n.style.position = n.style.top = "", e.style.overflow = "hidden", e.style.position = "relative", o.subtractsBorderForOverflowNotVisible = n.offsetTop === -5, o.doesNotIncludeMarginInBodyOffset = s.offsetTop !== l, s.removeChild(f), t = f = null, i.extend(u, o)) }), u }(), rr = /^(?:\{.*\}|\[.*\])$/, ar = /([A-Z])/g, i.extend({ cache: {}, uuid: 0, expando: "jQuery" + (i.fn.jquery + Math.random()).replace(/\D/g, ""), noData: { embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0 }, hasData: function(n) {
            return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando], !!n && !ot(n) }, data: function(n, r, u, f) {
            if (!!i.acceptData(n)) {
                var a, o, h, c = i.expando,
                    v = typeof r == "string",
                    l = n.nodeType,
                    s = l ? i.cache : n,
                    e = l ? n[c] : n[c] && c,
                    y = r === "events";
                return (!e || !s[e] || !y && !f && !s[e].data) && v && u === t ? void 0 : (e || (l ? n[c] = e = ++i.uuid : e = c), s[e] || (s[e] = {}, l || (s[e].toJSON = i.noop)), (typeof r == "object" || typeof r == "function") && (f ? s[e] = i.extend(s[e], r) : s[e].data = i.extend(s[e].data, r)), a = o = s[e], f || (o.data || (o.data = {}), o = o.data), u !== t && (o[i.camelCase(r)] = u), y && !o[r]) ? a.events : (v ? (h = o[r], h == null && (h = o[i.camelCase(r)])) : h = o, h) } }, removeData: function(n, t, r) {
            if (!!i.acceptData(n)) {
                var e, s, c, o = i.expando,
                    h = n.nodeType,
                    u = h ? i.cache : n,
                    f = h ? n[o] : o;
                if (!u[f]) return;
                if (t && (e = r ? u[f] : u[f].data, e)) {
                    for (i.isArray(t) || (t in e ? t = [t] : (t = i.camelCase(t), t = t in e ? [t] : t.split(" "))), s = 0, c = t.length; s < c; s++) delete e[t[s]];
                    if (!(r ? ot : i.isEmptyObject)(e)) return }
                if (!r && (delete u[f].data, !ot(u[f]))) return;
                i.support.deleteExpando || !u.setInterval ? delete u[f] : u[f] = null, h && (i.support.deleteExpando ? delete n[o] : n.removeAttribute ? n.removeAttribute(o) : n[o] = null) } }, _data: function(n, t, r) {
            return i.data(n, t, r, !0) }, acceptData: function(n) {
            if (n.nodeName) {
                var t = i.noData[n.nodeName.toLowerCase()];
                if (t) return t !== !0 && n.getAttribute("classid") === t }
            return !0 } }), i.fn.extend({ data: function(n, r) {
            var u, s, e, f = null,
                o, h;
            if (typeof n == "undefined") {
                if (this.length && (f = i.data(this[0]), this[0].nodeType === 1 && !i._data(this[0], "parsedAttrs"))) {
                    for (s = this[0].attributes, o = 0, h = s.length; o < h; o++) e = s[o].name, e.indexOf("data-") === 0 && (e = i.camelCase(e.substring(5)), ki(this[0], e, f[e]));
                    i._data(this[0], "parsedAttrs", !0) }
                return f }
            return typeof n == "object" ? this.each(function() { i.data(this, n) }) : (u = n.split("."), u[1] = u[1] ? "." + u[1] : "", r === t) ? (f = this.triggerHandler("getData" + u[1] + "!", [u[0]]), f === t && this.length && (f = i.data(this[0], n), f = ki(this[0], n, f)), f === t && u[1] ? this.data(u[0]) : f) : this.each(function() {
                var t = i(this),
                    f = [u[0], r];
                t.triggerHandler("setData" + u[1] + "!", f), i.data(this, n, r), t.triggerHandler("changeData" + u[1] + "!", f) }) }, removeData: function(n) {
            return this.each(function() { i.removeData(this, n) }) } }), i.extend({ _mark: function(n, t) { n && (t = (t || "fx") + "mark", i._data(n, t, (i._data(n, t) || 0) + 1)) }, _unmark: function(n, t, r) {
            if (n !== !0 && (r = t, t = n, n = !1), t) { r = r || "fx";
                var u = r + "mark",
                    f = n ? 0 : (i._data(t, u) || 1) - 1;
                f ? i._data(t, u, f) : (i.removeData(t, u, !0), bi(t, r, "mark")) } }, queue: function(n, t, r) {
            var u;
            if (n) return t = (t || "fx") + "queue", u = i._data(n, t), r && (!u || i.isArray(r) ? u = i._data(n, t, i.makeArray(r)) : u.push(r)), u || [] }, dequeue: function(n, t) { t = t || "fx";
            var r = i.queue(n, t),
                u = r.shift(),
                f = {};
            u === "inprogress" && (u = r.shift()), u && (t === "fx" && r.unshift("inprogress"), i._data(n, t + ".run", f), u.call(n, function() { i.dequeue(n, t) }, f)), r.length || (i.removeData(n, t + "queue " + t + ".run", !0), bi(n, t, "queue")) } }), i.fn.extend({ queue: function(n, r) {
            return (typeof n != "string" && (r = n, n = "fx"), r === t) ? i.queue(this[0], n) : this.each(function() {
                var t = i.queue(this, n, r);
                n === "fx" && t[0] !== "inprogress" && i.dequeue(this, n) }) }, dequeue: function(n) {
            return this.each(function() { i.dequeue(this, n) }) }, delay: function(n, t) {
            return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(t, function(t, i) {
                var r = setTimeout(t, n);
                i.stop = function() { clearTimeout(r) } }) }, clearQueue: function(n) {
            return this.queue(n || "fx", []) }, promise: function(n, r) {
            function e() {--s || o.resolveWith(u, [u]) }
            typeof n != "string" && (r = n, n = t), n = n || "fx";
            for (var o = i.Deferred(), u = this, f = u.length, s = 1, h = n + "defer", l = n + "queue", a = n + "mark", c; f--;)(c = i.data(u[f], h, t, !0) || (i.data(u[f], l, t, !0) || i.data(u[f], a, t, !0)) && i.data(u[f], h, i.Callbacks("once memory"), !0)) && (s++, c.add(e));
            return e(), o.promise() } });
    var pr = /[\n\t\r]/g,
        w = /\s+/,
        pu = /\r/g,
        yu = /^(?:button|input)$/i,
        vu = /^(?:button|input|object|select|textarea)$/i,
        au = /^a(?:rea)?$/i,
        hr = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        sr = i.support.getSetAttribute,
        e, er, ai;
    i.fn.extend({ attr: function(n, t) {
            return i.access(this, n, t, !0, i.attr) }, removeAttr: function(n) {
            return this.each(function() { i.removeAttr(this, n) }) }, prop: function(n, t) {
            return i.access(this, n, t, !0, i.prop) }, removeProp: function(n) {
            return n = i.propFix[n] || n, this.each(function() {
                try { this[n] = t, delete this[n] } catch (i) {} }) }, addClass: function(n) {
            var r, f, o, t, e, u, s;
            if (i.isFunction(n)) return this.each(function(t) { i(this).addClass(n.call(this, t, this.className)) });
            if (n && typeof n == "string")
                for (r = n.split(w), f = 0, o = this.length; f < o; f++)
                    if (t = this[f], t.nodeType === 1)
                        if (t.className || r.length !== 1) {
                            for (e = " " + t.className + " ", u = 0, s = r.length; u < s; u++) ~e.indexOf(" " + r[u] + " ") || (e += r[u] + " ");
                            t.className = i.trim(e) } else t.className = n;
            return this }, removeClass: function(n) {
            var o, u, s, r, f, e, h;
            if (i.isFunction(n)) return this.each(function(t) { i(this).removeClass(n.call(this, t, this.className)) });
            if (n && typeof n == "string" || n === t)
                for (o = (n || "").split(w), u = 0, s = this.length; u < s; u++)
                    if (r = this[u], r.nodeType === 1 && r.className)
                        if (n) {
                            for (f = (" " + r.className + " ").replace(pr, " "), e = 0, h = o.length; e < h; e++) f = f.replace(" " + o[e] + " ", " ");
                            r.className = i.trim(f) } else r.className = "";
            return this }, toggleClass: function(n, t) {
            var r = typeof n,
                u = typeof t == "boolean";
            return i.isFunction(n) ? this.each(function(r) { i(this).toggleClass(n.call(this, r, this.className, t), t) }) : this.each(function() {
                if (r === "string")
                    for (var f, s = 0, o = i(this), e = t, h = n.split(w); f = h[s++];) e = u ? e : !o.hasClass(f), o[e ? "addClass" : "removeClass"](f);
                else(r === "undefined" || r === "boolean") && (this.className && i._data(this, "__className__", this.className), this.className = this.className || n === !1 ? "" : i._data(this, "__className__") || "") }) }, hasClass: function(n) {
            for (var i = " " + n + " ", t = 0, r = this.length; t < r; t++)
                if (this[t].nodeType === 1 && (" " + this[t].className + " ").replace(pr, " ").indexOf(i) > -1) return !0;
            return !1 }, val: function(n) {
            var r, u, e, f = this[0];
            return !arguments.length ? f ? (r = i.valHooks[f.nodeName.toLowerCase()] || i.valHooks[f.type], r && "get" in r && (u = r.get(f, "value")) !== t) ? u : (u = f.value, typeof u == "string" ? u.replace(pu, "") : u == null ? "" : u) : void 0 : (e = i.isFunction(n), this.each(function(u) {
                var o = i(this),
                    f;
                this.nodeType === 1 && (f = e ? n.call(this, u, o.val()) : n, f == null ? f = "" : typeof f == "number" ? f += "" : i.isArray(f) && (f = i.map(f, function(n) {
                    return n == null ? "" : n + "" })), r = i.valHooks[this.nodeName.toLowerCase()] || i.valHooks[this.type], r && "set" in r && r.set(this, f, "value") !== t || (this.value = f)) })) } }), i.extend({ valHooks: { option: { get: function(n) {
                    var t = n.attributes.value;
                    return !t || t.specified ? n.value : n.text } }, select: { get: function(n) {
                    var o, r, h, t, u = n.selectedIndex,
                        s = [],
                        f = n.options,
                        e = n.type === "select-one";
                    if (u < 0) return null;
                    for (r = e ? u : 0, h = e ? u + 1 : f.length; r < h; r++)
                        if (t = f[r], t.selected && (i.support.optDisabled ? !t.disabled : t.getAttribute("disabled") === null) && (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) {
                            if (o = i(t).val(), e) return o;
                            s.push(o) }
                    return e && !s.length && f.length ? i(f[u]).val() : s }, set: function(n, t) {
                    var r = i.makeArray(t);
                    return i(n).find("option").each(function() { this.selected = i.inArray(i(this).val(), r) >= 0 }), r.length || (n.selectedIndex = -1), r } } }, attrFn: { val: !0, css: !0, html: !0, text: !0, data: !0, width: !0, height: !0, offset: !0 }, attr: function(n, r, u, f) {
            var o, s, h, c = n.nodeType;
            if (!!n && c !== 3 && c !== 8 && c !== 2) {
                if (f && r in i.attrFn) return i(n)[r](u);
                if (typeof n.getAttribute == "undefined") return i.prop(n, r, u);
                if (h = c !== 1 || !i.isXMLDoc(n), h && (r = r.toLowerCase(), s = i.attrHooks[r] || (hr.test(r) ? er : e)), u !== t) {
                    if (u === null) { i.removeAttr(n, r);
                        return }
                    return s && "set" in s && h && (o = s.set(n, u, r)) !== t ? o : (n.setAttribute(r, "" + u), u) }
                return s && "get" in s && h && (o = s.get(n, r)) !== null ? o : (o = n.getAttribute(r), o === null ? t : o) } }, removeAttr: function(n, t) {
            var u, f, r, o, e = 0;
            if (t && n.nodeType === 1)
                for (f = t.toLowerCase().split(w), o = f.length; e < o; e++) r = f[e], r && (u = i.propFix[r] || r, i.attr(n, r, ""), n.removeAttribute(sr ? r : u), hr.test(r) && u in n && (n[u] = !1)) }, attrHooks: { type: { set: function(n, t) {
                    if (yu.test(n.nodeName) && n.parentNode) i.error("type property can't be changed");
                    else if (!i.support.radioValue && t === "radio" && i.nodeName(n, "input")) {
                        var r = n.value;
                        return n.setAttribute("type", t), r && (n.value = r), t } } }, value: { get: function(n, t) {
                    return e && i.nodeName(n, "button") ? e.get(n, t) : t in n ? n.value : null }, set: function(n, t, r) {
                    if (e && i.nodeName(n, "button")) return e.set(n, t, r);
                    n.value = t } } }, propFix: { tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" }, prop: function(n, r, u) {
            var e, f, s, o = n.nodeType;
            if (!!n && o !== 3 && o !== 8 && o !== 2) return s = o !== 1 || !i.isXMLDoc(n), s && (r = i.propFix[r] || r, f = i.propHooks[r]), u !== t ? f && "set" in f && (e = f.set(n, u, r)) !== t ? e : n[r] = u : f && "get" in f && (e = f.get(n, r)) !== null ? e : n[r] }, propHooks: { tabIndex: { get: function(n) {
                    var i = n.getAttributeNode("tabindex");
                    return i && i.specified ? parseInt(i.value, 10) : vu.test(n.nodeName) || au.test(n.nodeName) && n.href ? 0 : t } } } }), i.attrHooks.tabindex = i.propHooks.tabIndex, er = { get: function(n, r) {
            var u, f = i.prop(n, r);
            return f === !0 || typeof f != "boolean" && (u = n.getAttributeNode(r)) && u.nodeValue !== !1 ? r.toLowerCase() : t }, set: function(n, t, r) {
            var u;
            return t === !1 ? i.removeAttr(n, r) : (u = i.propFix[r] || r, u in n && (n[u] = !0), n.setAttribute(r, r.toLowerCase())), r } }, sr || (ai = { name: !0, id: !0 }, e = i.valHooks.button = { get: function(n, i) {
            var r;
            return r = n.getAttributeNode(i), r && (ai[i] ? r.nodeValue !== "" : r.specified) ? r.nodeValue : t }, set: function(n, t, i) {
            var u = n.getAttributeNode(i);
            return u || (u = r.createAttribute(i), n.setAttributeNode(u)), u.nodeValue = t + "" } }, i.attrHooks.tabindex.set = e.set, i.each(["width", "height"], function(n, t) { i.attrHooks[t] = i.extend(i.attrHooks[t], { set: function(n, i) {
                if (i === "") return n.setAttribute(t, "auto"), i } }) }), i.attrHooks.contenteditable = { get: e.get, set: function(n, t, i) { t === "" && (t = "false"), e.set(n, t, i) } }), i.support.hrefNormalized || i.each(["href", "src", "width", "height"], function(n, r) { i.attrHooks[r] = i.extend(i.attrHooks[r], { get: function(n) {
                var i = n.getAttribute(r, 2);
                return i === null ? t : i } }) }), i.support.style || (i.attrHooks.style = { get: function(n) {
            return n.style.cssText.toLowerCase() || t }, set: function(n, t) {
            return n.style.cssText = "" + t } }), i.support.optSelected || (i.propHooks.selected = i.extend(i.propHooks.selected, { get: function(n) {
            var t = n.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null } })), i.support.enctype || (i.propFix.enctype = "encoding"), i.support.checkOn || i.each(["radio", "checkbox"], function() { i.valHooks[this] = { get: function(n) {
                return n.getAttribute("value") === null ? "on" : n.value } } }), i.each(["radio", "checkbox"], function() { i.valHooks[this] = i.extend(i.valHooks[this], { set: function(n, t) {
                if (i.isArray(t)) return n.checked = i.inArray(i(n).val(), t) >= 0 } }) });
    var it = /^(?:textarea|input|select)$/i,
        ci = /^([^\.]*)?(?:\.(.+))?$/,
        lu = /\bhover(\.\S+)?\b/,
        cu = /^key/,
        bu = /^(?:mouse|contextmenu)|click/,
        vt = /^(?:focusinfocus|focusoutblur)$/,
        of = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        sf = function(n) {
            var t = of.exec(n);
            return t && (t[1] = (t[1] || "").toLowerCase(), t[3] = t[3] && new RegExp("(?:^|\\s)" + t[3] + "(?:\\s|$)")), t },
        hf = function(n, t) {
            var i = n.attributes || {};
            return (!t[1] || n.nodeName.toLowerCase() === t[1]) && (!t[2] || (i.id || {}).value === t[2]) && (!t[3] || t[3].test((i["class"] || {}).value)) },
        wt = function(n) {
            return i.event.special.hover ? n : n.replace(lu, "mouseenter$1 mouseleave$1") };
    i.event = { add: function(n, r, u, f, e) {
                var v, h, a, p, y, o, w, l, b, k, c, s;
                if (!(n.nodeType === 3 || n.nodeType === 8 || !r || !u || !(v = i._data(n)))) {
                    for (u.handler && (b = u, u = b.handler), u.guid || (u.guid = i.guid++), a = v.events, a || (v.events = a = {}), h = v.handle, h || (v.handle = h = function(n) {
                            return typeof i != "undefined" && (!n || i.event.triggered !== n.type) ? i.event.dispatch.apply(h.elem, arguments) : t }, h.elem = n), r = i.trim(wt(r)).split(" "), p = 0; p < r.length; p++) y = ci.exec(r[p]) || [], o = y[1], w = (y[2] || "").split(".").sort(), s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, l = i.extend({ type: o, origType: y[1], data: f, handler: u, guid: u.guid, selector: e, quick: sf(e), namespace: w.join(".") }, b), c = a[o], c || (c = a[o] = [], c.delegateCount = 0, s.setup && s.setup.call(n, f, w, h) !== !1 || (n.addEventListener ? n.addEventListener(o, h, !1) : n.attachEvent && n.attachEvent("on" + o, h))), s.add && (s.add.call(n, l), l.handler.guid || (l.handler.guid = u.guid)), e ? c.splice(c.delegateCount++, 0, l) : c.push(l), i.event.global[o] = !0;
                    n = null } }, global: {}, remove: function(n, t, r, u, f) {
                var y = i.hasData(n) && i._data(n),
                    l, p, e, b, h, k, a, v, c, w, o, s;
                if (!!y && !!(v = y.events)) {
                    for (t = i.trim(wt(t || "")).split(" "), l = 0; l < t.length; l++) {
                        if (p = ci.exec(t[l]) || [], e = b = p[1], h = p[2], !e) {
                            for (e in v) i.event.remove(n, e + t[l], r, u, !0);
                            continue }
                        for (c = i.event.special[e] || {}, e = (u ? c.delegateType : c.bindType) || e, o = v[e] || [], k = o.length, h = h ? new RegExp("(^|\\.)" + h.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null, a = 0; a < o.length; a++) s = o[a], (f || b === s.origType) && (!r || r.guid === s.guid) && (!h || h.test(s.namespace)) && (!u || u === s.selector || u === "**" && s.selector) && (o.splice(a--, 1), s.selector && o.delegateCount--, c.remove && c.remove.call(n, s));
                        o.length === 0 && k !== o.length && ((!c.teardown || c.teardown.call(n, h) === !1) && i.removeEvent(n, e, y.handle), delete v[e]) }
                    i.isEmptyObject(v) && (w = y.handle, w && (w.elem = null), i.removeData(n, ["events", "handle"], !0)) } }, customEvent: { getData: !0, setData: !0, changeData: !0 }, trigger: function(r, u, f, e) {
                if (!f || f.nodeType !== 3 && f.nodeType !== 8) {
                    var o = r.type || r,
                        p = [],
                        w, k, c, s, h, a, l, v, y, b;
                    if (vt.test(o + i.event.triggered)) return;
                    if (o.indexOf("!") >= 0 && (o = o.slice(0, -1), k = !0), o.indexOf(".") >= 0 && (p = o.split("."), o = p.shift(), p.sort()), (!f || i.event.customEvent[o]) && !i.event.global[o]) return;
                    if (r = typeof r == "object" ? r[i.expando] ? r : new i.Event(o, r) : new i.Event(o), r.type = o, r.isTrigger = !0, r.exclusive = k, r.namespace = p.join("."), r.namespace_re = r.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, a = o.indexOf(":") < 0 ? "on" + o : "", !f) { w = i.cache;
                        for (c in w) w[c].events && w[c].events[o] && i.event.trigger(r, u, w[c].handle.elem, !0);
                        return }
                    if (r.result = t, r.target || (r.target = f), u = u != null ? i.makeArray(u) : [], u.unshift(r), l = i.event.special[o] || {}, l.trigger && l.trigger.apply(f, u) === !1) return;
                    if (y = [
                            [f, l.bindType || o]
                        ], !e && !l.noBubble && !i.isWindow(f)) {
                        for (b = l.delegateType || o, s = vt.test(b + o) ? f : f.parentNode, h = null; s; s = s.parentNode) y.push([s, b]), h = s;
                        h && h === f.ownerDocument && y.push([h.defaultView || h.parentWindow || n, b]) }
                    for (c = 0; c < y.length && !r.isPropagationStopped(); c++) s = y[c][0], r.type = y[c][1], v = (i._data(s, "events") || {})[r.type] && i._data(s, "handle"), v && v.apply(s, u), v = a && s[a], v && i.acceptData(s) && v.apply(s, u) === !1 && r.preventDefault();
                    return r.type = o, !e && !r.isDefaultPrevented() && (!l._default || l._default.apply(f.ownerDocument, u) === !1) && (o !== "click" || !i.nodeName(f, "a")) && i.acceptData(f) && a && f[o] && (o !== "focus" && o !== "blur" || r.target.offsetWidth !== 0) && !i.isWindow(f) && (h = f[a], h && (f[a] = null), i.event.triggered = o, f[o](), i.event.triggered = t, h && (f[a] = h)), r.result } }, dispatch: function(r) { r = i.event.fix(r || n.event);
                var w = (i._data(this, "events") || {})[r.type] || [],
                    c = w.delegateCount,
                    b = [].slice.call(arguments, 0),
                    k = !r.exclusive && !r.namespace,
                    h = [],
                    f, l, e, a, v, y, s, p, u, o, d;
                if (b[0] = r, r.delegateTarget = this, c && !r.target.disabled && (!r.button || r.type !== "click"))
                    for (a = i(this), a.context = this.ownerDocument || this, e = r.target; e != this; e = e.parentNode || this) {
                        for (y = {}, p = [], a[0] = e, f = 0; f < c; f++) u = w[f], o = u.selector, y[o] === t && (y[o] = u.quick ? hf(e, u.quick) : a.is(o)), y[o] && p.push(u);
                        p.length && h.push({ elem: e, matches: p }) }
                for (w.length > c && h.push({ elem: this, matches: w.slice(c) }), f = 0; f < h.length && !r.isPropagationStopped(); f++)
                    for (s = h[f], r.currentTarget = s.elem, l = 0; l < s.matches.length && !r.isImmediatePropagationStopped(); l++) u = s.matches[l], (k || !r.namespace && !u.namespace || r.namespace_re && r.namespace_re.test(u.namespace)) && (r.data = u.data, r.handleObj = u, v = ((i.event.special[u.origType] || {}).handle || u.handler).apply(s.elem, b), v !== t && (r.result = v, v === !1 && (r.preventDefault(), r.stopPropagation())));
                return r.result }, props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(n, t) {
                    return n.which == null && (n.which = t.charCode != null ? t.charCode : t.keyCode), n } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(n, i) {
                    var o, u, f, e = i.button,
                        s = i.fromElement;
                    return n.pageX == null && i.clientX != null && (o = n.target.ownerDocument || r, u = o.documentElement, f = o.body, n.pageX = i.clientX + (u && u.scrollLeft || f && f.scrollLeft || 0) - (u && u.clientLeft || f && f.clientLeft || 0), n.pageY = i.clientY + (u && u.scrollTop || f && f.scrollTop || 0) - (u && u.clientTop || f && f.clientTop || 0)), !n.relatedTarget && s && (n.relatedTarget = s === n.target ? i.toElement : s), !n.which && e !== t && (n.which = e & 1 ? 1 : e & 2 ? 3 : e & 4 ? 2 : 0), n } }, fix: function(n) {
                if (n[i.expando]) return n;
                var e, o, u = n,
                    f = i.event.fixHooks[n.type] || {},
                    s = f.props ? this.props.concat(f.props) : this.props;
                for (n = i.Event(u), e = s.length; e;) o = s[--e], n[o] = u[o];
                return n.target || (n.target = u.srcElement || r), n.target.nodeType === 3 && (n.target = n.target.parentNode), n.metaKey === t && (n.metaKey = n.ctrlKey), f.filter ? f.filter(n, u) : n }, special: { ready: { setup: i.bindReady }, load: { noBubble: !0 }, focus: { delegateType: "focusin" }, blur: { delegateType: "focusout" }, beforeunload: { setup: function(n, t, r) { i.isWindow(this) && (this.onbeforeunload = r) }, teardown: function(n, t) { this.onbeforeunload === t && (this.onbeforeunload = null) } } }, simulate: function(n, t, r, u) {
                var f = i.extend(new i.Event, r, { type: n, isSimulated: !0, originalEvent: {} });
                u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f), f.isDefaultPrevented() && r.preventDefault() } }, i.event.handle = i.event.dispatch, i.removeEvent = r.removeEventListener ? function(n, t, i) { n.removeEventListener && n.removeEventListener(t, i, !1) } : function(n, t, i) { n.detachEvent && n.detachEvent("on" + t, i) }, i.Event = function(n, t) {
            if (!(this instanceof i.Event)) return new i.Event(n, t);
            n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || n.returnValue === !1 || n.getPreventDefault && n.getPreventDefault() ? g : c) : this.type = n, t && i.extend(this, t), this.timeStamp = n && n.timeStamp || i.now(), this[i.expando] = !0 }, i.Event.prototype = { preventDefault: function() { this.isDefaultPrevented = g;
                var n = this.originalEvent;!n || (n.preventDefault ? n.preventDefault() : n.returnValue = !1) }, stopPropagation: function() { this.isPropagationStopped = g;
                var n = this.originalEvent;!n || (n.stopPropagation && n.stopPropagation(), n.cancelBubble = !0) }, stopImmediatePropagation: function() { this.isImmediatePropagationStopped = g, this.stopPropagation() }, isDefaultPrevented: c, isPropagationStopped: c, isImmediatePropagationStopped: c }, i.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function(n, t) { i.event.special[n] = { delegateType: t, bindType: t, handle: function(n) {
                    var f = this,
                        r = n.relatedTarget,
                        u = n.handleObj,
                        o = u.selector,
                        e;
                    return r && (r === f || i.contains(f, r)) || (n.type = u.origType, e = u.handler.apply(this, arguments), n.type = t), e } } }), i.support.submitBubbles || (i.event.special.submit = { setup: function() {
                if (i.nodeName(this, "form")) return !1;
                i.event.add(this, "click._submit keypress._submit", function(n) {
                    var u = n.target,
                        r = i.nodeName(u, "input") || i.nodeName(u, "button") ? u.form : t;
                    r && !r._submit_attached && (i.event.add(r, "submit._submit", function(n) { this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0) }), r._submit_attached = !0) }) }, teardown: function() {
                if (i.nodeName(this, "form")) return !1;
                i.event.remove(this, "._submit") } }), i.support.changeBubbles || (i.event.special.change = { setup: function() {
                if (it.test(this.nodeName)) return (this.type === "checkbox" || this.type === "radio") && (i.event.add(this, "propertychange._change", function(n) { n.originalEvent.propertyName === "checked" && (this._just_changed = !0) }), i.event.add(this, "click._change", function(n) { this._just_changed && !n.isTrigger && (this._just_changed = !1, i.event.simulate("change", this, n, !0)) })), !1;
                i.event.add(this, "beforeactivate._change", function(n) {
                    var t = n.target;
                    it.test(t.nodeName) && !t._change_attached && (i.event.add(t, "change._change", function(n) { this.parentNode && !n.isSimulated && !n.isTrigger && i.event.simulate("change", this.parentNode, n, !0) }), t._change_attached = !0) }) }, handle: function(n) {
                var t = n.target;
                if (this !== t || n.isSimulated || n.isTrigger || t.type !== "radio" && t.type !== "checkbox") return n.handleObj.handler.apply(this, arguments) }, teardown: function() {
                return i.event.remove(this, "._change"), it.test(this.nodeName) } }), i.support.focusinBubbles || i.each({ focus: "focusin", blur: "focusout" }, function(n, t) {
            var u = 0,
                f = function(n) { i.event.simulate(t, n.target, i.event.fix(n), !0) };
            i.event.special[t] = { setup: function() { u++ == 0 && r.addEventListener(n, f, !0) }, teardown: function() {--u == 0 && r.removeEventListener(n, f, !0) } } }), i.fn.extend({ on: function(n, r, u, f, e) {
                var o, s;
                if (typeof n == "object") { typeof r != "string" && (u = r, r = t);
                    for (s in n) this.on(s, r, u, n[s], e);
                    return this }
                if (u == null && f == null ? (f = r, u = r = t) : f == null && (typeof r == "string" ? (f = u, u = t) : (f = u, u = r, r = t)), f === !1) f = c;
                else if (!f) return this;
                return e === 1 && (o = f, f = function(n) {
                    return i().off(n), o.apply(this, arguments) }, f.guid = o.guid || (o.guid = i.guid++)), this.each(function() { i.event.add(this, n, f, u, r) }) }, one: function(n, t, i, r) {
                return this.on.call(this, n, t, i, r, 1) }, off: function(n, r, u) {
                var f, e;
                if (n && n.preventDefault && n.handleObj) return f = n.handleObj, i(n.delegateTarget).off(f.namespace ? f.type + "." + f.namespace : f.type, f.selector, f.handler), this;
                if (typeof n == "object") {
                    for (e in n) this.off(e, r, n[e]);
                    return this }
                return (r === !1 || typeof r == "function") && (u = r, r = t), u === !1 && (u = c), this.each(function() { i.event.remove(this, n, u, r) }) }, bind: function(n, t, i) {
                return this.on(n, null, t, i) }, unbind: function(n, t) {
                return this.off(n, null, t) }, live: function(n, t, r) { i(this.context).on(n, this.selector, t, r);
                return this }, die: function(n, t) {
                return i(this.context).off(n, this.selector || "**", t), this }, delegate: function(n, t, i, r) {
                return this.on(t, n, i, r) }, undelegate: function(n, t, i) {
                return arguments.length == 1 ? this.off(n, "**") : this.off(t, n, i) }, trigger: function(n, t) {
                return this.each(function() { i.event.trigger(n, t, this) }) }, triggerHandler: function(n, t) {
                if (this[0]) return i.event.trigger(n, t, this[0], !0) }, toggle: function(n) {
                var t = arguments,
                    u = n.guid || i.guid++,
                    r = 0,
                    f = function(u) {
                        var f = (i._data(this, "lastToggle" + n.guid) || 0) % r;
                        return i._data(this, "lastToggle" + n.guid, f + 1), u.preventDefault(), t[f].apply(this, arguments) || !1 };
                for (f.guid = u; r < t.length;) t[r++].guid = u;
                return this.click(f) }, hover: function(n, t) {
                return this.mouseenter(n).mouseleave(t || n) } }), i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) { i.fn[t] = function(n, i) {
                return i == null && (i = n, n = null), arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t) }, i.attrFn && (i.attrFn[t] = !0), cu.test(t) && (i.event.fixHooks[t] = i.event.keyHooks), bu.test(t) && (i.event.fixHooks[t] = i.event.mouseHooks) }),
        function() {
            function b(t, i, r, u, f, o) {
                for (var s, c, h = 0, l = u.length; h < l; h++)
                    if (s = u[h], s) {
                        for (c = !1, s = s[t]; s;) {
                            if (s[e] === r) { c = u[s.sizset];
                                break }
                            if (s.nodeType === 1)
                                if (o || (s[e] = r, s.sizset = h), typeof i != "string") {
                                    if (s === i) { c = !0;
                                        break } } else if (n.filter(i, [s]).length > 0) { c = s;
                                break }
                            s = s[t] }
                        u[h] = c } }

            function g(n, t, i, r, u, f) {
                for (var o, h, s = 0, c = r.length; s < c; s++)
                    if (o = r[s], o) {
                        for (h = !1, o = o[n]; o;) {
                            if (o[e] === i) { h = r[o.sizset];
                                break }
                            if (o.nodeType === 1 && !f && (o[e] = i, o.sizset = s), o.nodeName.toLowerCase() === t) { h = o;
                                break }
                            o = o[n] }
                        r[s] = h } }
            var v = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                e = "sizcache" + (Math.random() + "").replace(".", ""),
                y = 0,
                d = Object.prototype.toString,
                a = !1,
                k = !0,
                o = /\\/g,
                tt = /\r\n/g,
                c = /\W/,
                n, h, f, l, s, p;
            [0, 0].sort(function() {
                return k = !1, 0 }), n = function(t, i, e, o) {
                var nt;
                if (e = e || [], i = i || r, nt = i, i.nodeType !== 1 && i.nodeType !== 9) return [];
                if (!t || typeof t != "string") return e;
                var y, a, h, g, l, w, b, c, tt = !0,
                    k = n.isXML(i),
                    s = [],
                    rt = t;
                do
                    if (v.exec(""), y = v.exec(rt), y && (rt = y[3], s.push(y[1]), y[2])) { g = y[3];
                        break }
                while (y);
                if (s.length > 1 && it.exec(t))
                    if (s.length === 2 && u.relative[s[0]]) a = p(s[0] + s[1], i, o);
                    else
                        for (a = u.relative[s[0]] ? [i] : n(s.shift(), i); s.length;) t = s.shift(), u.relative[t] && (t += s.shift()), a = p(t, a, o);
                else if (!o && s.length > 1 && i.nodeType === 9 && !k && u.match.ID.test(s[0]) && !u.match.ID.test(s[s.length - 1]) && (l = n.find(s.shift(), i, k), i = l.expr ? n.filter(l.expr, l.set)[0] : l.set[0]), i)
                    for (l = o ? { expr: s.pop(), set: f(o) } : n.find(s.pop(), s.length === 1 && (s[0] === "~" || s[0] === "+") && i.parentNode ? i.parentNode : i, k), a = l.expr ? n.filter(l.expr, l.set) : l.set, s.length > 0 ? h = f(a) : tt = !1; s.length;) w = s.pop(), b = w, u.relative[w] ? b = s.pop() : w = "", b == null && (b = i), u.relative[w](h, b, k);
                else h = s = [];
                if (h || (h = a), h || n.error(w || t), d.call(h) === "[object Array]")
                    if (tt)
                        if (i && i.nodeType === 1)
                            for (c = 0; h[c] != null; c++) h[c] && (h[c] === !0 || h[c].nodeType === 1 && n.contains(i, h[c])) && e.push(a[c]);
                        else
                            for (c = 0; h[c] != null; c++) h[c] && h[c].nodeType === 1 && e.push(a[c]);
                else e.push.apply(e, h);
                else f(h, e);
                return g && (n(g, nt, e, o), n.uniqueSort(e)), e }, n.uniqueSort = function(n) {
                if (l && (a = k, n.sort(l), a))
                    for (var t = 1; t < n.length; t++) n[t] === n[t - 1] && n.splice(t--, 1);
                return n }, n.matches = function(t, i) {
                return n(t, null, null, i) }, n.matchesSelector = function(t, i) {
                return n(i, null, null, [t]).length > 0 }, n.find = function(n, t, i) {
                var f, e, c, r, s, h;
                if (!n) return [];
                for (e = 0, c = u.order.length; e < c; e++)
                    if (s = u.order[e], (r = u.leftMatch[s].exec(n)) && (h = r[1], r.splice(1, 1), h.substr(h.length - 1) !== "\\" && (r[1] = (r[1] || "").replace(o, ""), f = u.find[s](r, t, i), f != null))) { n = n.replace(u.match[s], "");
                        break }
                return f || (f = typeof t.getElementsByTagName != "undefined" ? t.getElementsByTagName("*") : []), { set: f, expr: n } }, n.filter = function(i, r, f, e) {
                for (var o, h, c, l, y, k, w, v, p, b = i, a = [], s = r, d = r && r[0] && n.isXML(r[0]); i && r.length;) {
                    for (c in u.filter)
                        if ((o = u.leftMatch[c].exec(i)) != null && o[2]) {
                            if (k = u.filter[c], w = o[1], h = !1, o.splice(1, 1), w.substr(w.length - 1) === "\\") continue;
                            if (s === a && (a = []), u.preFilter[c])
                                if (o = u.preFilter[c](o, s, f, a, e, d), o) {
                                    if (o === !0) continue } else h = l = !0;
                            if (o)
                                for (v = 0;
                                    (y = s[v]) != null; v++) y && (l = k(y, o, v, s), p = e ^ l, f && l != null ? p ? h = !0 : s[v] = !1 : p && (a.push(y), h = !0));
                            if (l !== t) {
                                if (f || (s = a), i = i.replace(u.match[c], ""), !h) return [];
                                break } }
                    if (i === b)
                        if (h == null) n.error(i);
                        else break;
                    b = i }
                return s }, n.error = function(n) {
                throw new Error("Syntax error, unrecognized expression: " + n); };
            var w = n.getText = function(n) {
                    var i, r, t = n.nodeType,
                        u = "";
                    if (t) {
                        if (t === 1 || t === 9) {
                            if (typeof n.textContent == "string") return n.textContent;
                            if (typeof n.innerText == "string") return n.innerText.replace(tt, "");
                            for (n = n.firstChild; n; n = n.nextSibling) u += w(n) } else if (t === 3 || t === 4) return n.nodeValue } else
                        for (i = 0; r = n[i]; i++) r.nodeType !== 8 && (u += w(r));
                    return u },
                u = n.selectors = { order: ["ID", "NAME", "TAG"], match: { ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/, ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/, TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/, CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/, POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/, PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/ }, leftMatch: {}, attrMap: { "class": "className", "for": "htmlFor" }, attrHandle: { href: function(n) {
                            return n.getAttribute("href") }, type: function(n) {
                            return n.getAttribute("type") } }, relative: { "+": function(t, i) {
                            var f = typeof i == "string",
                                e = f && !c.test(i),
                                o = f && !e,
                                u, s, r;
                            for (e && (i = i.toLowerCase()), u = 0, s = t.length; u < s; u++)
                                if (r = t[u]) {
                                    while ((r = r.previousSibling) && r.nodeType !== 1);
                                    t[u] = o || r && r.nodeName.toLowerCase() === i ? r || !1 : r === i }
                            o && n.filter(i, t, !0) }, ">": function(t, i) {
                            var u, f = typeof i == "string",
                                r = 0,
                                o = t.length,
                                e;
                            if (f && !c.test(i))
                                for (i = i.toLowerCase(); r < o; r++) u = t[r], u && (e = u.parentNode, t[r] = e.nodeName.toLowerCase() === i ? e : !1);
                            else {
                                for (; r < o; r++) u = t[r], u && (t[r] = f ? u.parentNode : u.parentNode === i);
                                f && n.filter(i, t, !0) } }, "": function(n, t, i) {
                            var r, f = y++,
                                u = b;
                            typeof t == "string" && !c.test(t) && (t = t.toLowerCase(), r = t, u = g), u("parentNode", t, f, n, r, i) }, "~": function(n, t, i) {
                            var r, f = y++,
                                u = b;
                            typeof t == "string" && !c.test(t) && (t = t.toLowerCase(), r = t, u = g), u("previousSibling", t, f, n, r, i) } }, find: { ID: function(n, t, i) {
                            if (typeof t.getElementById != "undefined" && !i) {
                                var r = t.getElementById(n[1]);
                                return r && r.parentNode ? [r] : [] } }, NAME: function(n, t) {
                            var r, u, i, f;
                            if (typeof t.getElementsByName != "undefined") {
                                for (r = [], u = t.getElementsByName(n[1]), i = 0, f = u.length; i < f; i++) u[i].getAttribute("name") === n[1] && r.push(u[i]);
                                return r.length === 0 ? null : r } }, TAG: function(n, t) {
                            if (typeof t.getElementsByTagName != "undefined") return t.getElementsByTagName(n[1]) } }, preFilter: { CLASS: function(n, t, i, r, u, f) {
                            if (n = " " + n[1].replace(o, "") + " ", f) return n;
                            for (var s = 0, e;
                                (e = t[s]) != null; s++) e && (u ^ (e.className && (" " + e.className + " ").replace(/[\t\n\r]/g, " ").indexOf(n) >= 0) ? i || r.push(e) : i && (t[s] = !1));
                            return !1 }, ID: function(n) {
                            return n[1].replace(o, "") }, TAG: function(n) {
                            return n[1].replace(o, "").toLowerCase() }, CHILD: function(t) {
                            if (t[1] === "nth") { t[2] || n.error(t[0]), t[2] = t[2].replace(/^\+|\s*/g, "");
                                var i = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(t[2] === "even" && "2n" || t[2] === "odd" && "2n+1" || !/\D/.test(t[2]) && "0n+" + t[2] || t[2]);
                                t[2] = i[1] + (i[2] || 1) - 0, t[3] = i[3] - 0 } else t[2] && n.error(t[0]);
                            return t[0] = y++, t }, ATTR: function(n, t, i, r, f, e) {
                            var s = n[1] = n[1].replace(o, "");
                            return !e && u.attrMap[s] && (n[1] = u.attrMap[s]), n[4] = (n[4] || n[5] || "").replace(o, ""), n[2] === "~=" && (n[4] = " " + n[4] + " "), n }, PSEUDO: function(t, i, r, f, e) {
                            if (t[1] === "not")
                                if ((v.exec(t[3]) || "").length > 1 || /^\w/.test(t[3])) t[3] = n(t[3], null, null, i);
                                else {
                                    var o = n.filter(t[3], i, r, !0 ^ e);
                                    return r || f.push.apply(f, o), !1 }
                            else if (u.match.POS.test(t[0]) || u.match.CHILD.test(t[0])) return !0;
                            return t }, POS: function(n) {
                            return n.unshift(!0), n } }, filters: { enabled: function(n) {
                            return n.disabled === !1 && n.type !== "hidden" }, disabled: function(n) {
                            return n.disabled === !0 }, checked: function(n) {
                            return n.checked === !0 }, selected: function(n) {
                            return n.parentNode && n.parentNode.selectedIndex, n.selected === !0 }, parent: function(n) {
                            return !!n.firstChild }, empty: function(n) {
                            return !n.firstChild }, has: function(t, i, r) {
                            return !!n(r[3], t).length }, header: function(n) {
                            return /h\d/i.test(n.nodeName) }, text: function(n) {
                            var t = n.getAttribute("type"),
                                i = n.type;
                            return n.nodeName.toLowerCase() === "input" && "text" === i && (t === i || t === null) }, radio: function(n) {
                            return n.nodeName.toLowerCase() === "input" && "radio" === n.type }, checkbox: function(n) {
                            return n.nodeName.toLowerCase() === "input" && "checkbox" === n.type }, file: function(n) {
                            return n.nodeName.toLowerCase() === "input" && "file" === n.type }, password: function(n) {
                            return n.nodeName.toLowerCase() === "input" && "password" === n.type }, submit: function(n) {
                            var t = n.nodeName.toLowerCase();
                            return (t === "input" || t === "button") && "submit" === n.type }, image: function(n) {
                            return n.nodeName.toLowerCase() === "input" && "image" === n.type }, reset: function(n) {
                            var t = n.nodeName.toLowerCase();
                            return (t === "input" || t === "button") && "reset" === n.type }, button: function(n) {
                            var t = n.nodeName.toLowerCase();
                            return t === "input" && "button" === n.type || t === "button" }, input: function(n) {
                            return /input|select|textarea|button/i.test(n.nodeName) }, focus: function(n) {
                            return n === n.ownerDocument.activeElement } }, setFilters: { first: function(n, t) {
                            return t === 0 }, last: function(n, t, i, r) {
                            return t === r.length - 1 }, even: function(n, t) {
                            return t % 2 == 0 }, odd: function(n, t) {
                            return t % 2 == 1 }, lt: function(n, t, i) {
                            return t < i[3] - 0 }, gt: function(n, t, i) {
                            return t > i[3] - 0 }, nth: function(n, t, i) {
                            return i[3] - 0 === t }, eq: function(n, t, i) {
                            return i[3] - 0 === t } }, filter: { PSEUDO: function(t, i, r, f) {
                            var e = i[1],
                                h = u.filters[e],
                                s, o, c;
                            if (h) return h(t, r, i, f);
                            if (e === "contains") return (t.textContent || t.innerText || w([t]) || "").indexOf(i[3]) >= 0;
                            if (e === "not") {
                                for (s = i[3], o = 0, c = s.length; o < c; o++)
                                    if (s[o] === t) return !1;
                                return !0 }
                            n.error(e) }, CHILD: function(n, t) {
                            var r, o, s, u, l, h, f, c = t[1],
                                i = n;
                            switch (c) {
                                case "only":
                                case "first":
                                    while (i = i.previousSibling)
                                        if (i.nodeType === 1) return !1;
                                    if (c === "first") return !0;
                                    i = n;
                                case "last":
                                    while (i = i.nextSibling)
                                        if (i.nodeType === 1) return !1;
                                    return !0;
                                case "nth":
                                    if (r = t[2], o = t[3], r === 1 && o === 0) return !0;
                                    if (s = t[0], u = n.parentNode, u && (u[e] !== s || !n.nodeIndex)) {
                                        for (h = 0, i = u.firstChild; i; i = i.nextSibling) i.nodeType === 1 && (i.nodeIndex = ++h);
                                        u[e] = s }
                                    return f = n.nodeIndex - o, r === 0 ? f === 0 : f % r == 0 && f / r >= 0 } }, ID: function(n, t) {
                            return n.nodeType === 1 && n.getAttribute("id") === t }, TAG: function(n, t) {
                            return t === "*" && n.nodeType === 1 || !!n.nodeName && n.nodeName.toLowerCase() === t }, CLASS: function(n, t) {
                            return (" " + (n.className || n.getAttribute("class")) + " ").indexOf(t) > -1 }, ATTR: function(t, i) {
                            var o = i[1],
                                s = n.attr ? n.attr(t, o) : u.attrHandle[o] ? u.attrHandle[o](t) : t[o] != null ? t[o] : t.getAttribute(o),
                                f = s + "",
                                e = i[2],
                                r = i[4];
                            return s == null ? e === "!=" : !e && n.attr ? s != null : e === "=" ? f === r : e === "*=" ? f.indexOf(r) >= 0 : e === "~=" ? (" " + f + " ").indexOf(r) >= 0 : r ? e === "!=" ? f !== r : e === "^=" ? f.indexOf(r) === 0 : e === "$=" ? f.substr(f.length - r.length) === r : e === "|=" ? f === r || f.substr(0, r.length + 1) === r + "-" : !1 : f && s !== !1 }, POS: function(n, t, i, r) {
                            var e = t[2],
                                f = u.setFilters[e];
                            if (f) return f(n, i, t, r) } } },
                it = u.match.POS,
                nt = function(n, t) {
                    return "\\" + (+t + 1) };
            for (h in u.match) u.match[h] = new RegExp(u.match[h].source + /(?![^\[]*\])(?![^\(]*\))/.source), u.leftMatch[h] = new RegExp(/(^(?:.|\r|\n)*?)/.source + u.match[h].source.replace(/\\(\d+)/g, nt));
            f = function(n, t) {
                return (n = Array.prototype.slice.call(n, 0), t) ? (t.push.apply(t, n), t) : n };
            try { Array.prototype.slice.call(r.documentElement.childNodes, 0)[0].nodeType } catch (rt) { f = function(n, t) {
                    var i = 0,
                        r = t || [],
                        u;
                    if (d.call(n) === "[object Array]") Array.prototype.push.apply(r, n);
                    else if (typeof n.length == "number")
                        for (u = n.length; i < u; i++) r.push(n[i]);
                    else
                        for (; n[i]; i++) r.push(n[i]);
                    return r } }
            r.documentElement.compareDocumentPosition ? l = function(n, t) {
                    return n === t ? (a = !0, 0) : !n.compareDocumentPosition || !t.compareDocumentPosition ? n.compareDocumentPosition ? -1 : 1 : n.compareDocumentPosition(t) & 4 ? -1 : 1 } : (l = function(n, t) {
                    var i;
                    if (n === t) return a = !0, 0;
                    if (n.sourceIndex && t.sourceIndex) return n.sourceIndex - t.sourceIndex;
                    var e, c, u = [],
                        f = [],
                        o = n.parentNode,
                        h = t.parentNode,
                        r = o;
                    if (o === h) return s(n, t);
                    if (!o) return -1;
                    if (!h) return 1;
                    while (r) u.unshift(r), r = r.parentNode;
                    for (r = h; r;) f.unshift(r), r = r.parentNode;
                    for (e = u.length, c = f.length, i = 0; i < e && i < c; i++)
                        if (u[i] !== f[i]) return s(u[i], f[i]);
                    return i === e ? s(n, f[i], -1) : s(u[i], t, 1) }, s = function(n, t, i) {
                    if (n === t) return i;
                    for (var r = n.nextSibling; r;) {
                        if (r === t) return -1;
                        r = r.nextSibling }
                    return 1 }),
                function() {
                    var n = r.createElement("div"),
                        f = "script" + +new Date,
                        i = r.documentElement;
                    n.innerHTML = "<a name='" + f + "'/>", i.insertBefore(n, i.firstChild), r.getElementById(f) && (u.find.ID = function(n, i, r) {
                        if (typeof i.getElementById != "undefined" && !r) {
                            var u = i.getElementById(n[1]);
                            return u ? u.id === n[1] || typeof u.getAttributeNode != "undefined" && u.getAttributeNode("id").nodeValue === n[1] ? [u] : t : [] } }, u.filter.ID = function(n, t) {
                        var i = typeof n.getAttributeNode != "undefined" && n.getAttributeNode("id");
                        return n.nodeType === 1 && i && i.nodeValue === t }), i.removeChild(n), i = n = null }(),
                function() {
                    var n = r.createElement("div");
                    n.appendChild(r.createComment("")), n.getElementsByTagName("*").length > 0 && (u.find.TAG = function(n, t) {
                        var i = t.getElementsByTagName(n[1]),
                            u, r;
                        if (n[1] === "*") {
                            for (u = [], r = 0; i[r]; r++) i[r].nodeType === 1 && u.push(i[r]);
                            i = u }
                        return i }), n.innerHTML = "<a href='#'></a>", n.firstChild && typeof n.firstChild.getAttribute != "undefined" && n.firstChild.getAttribute("href") !== "#" && (u.attrHandle.href = function(n) {
                        return n.getAttribute("href", 2) }), n = null }(), r.querySelectorAll && function() {
                    var i = n,
                        t = r.createElement("div"),
                        o = "__sizzle__",
                        e;
                    if (t.innerHTML = "<p class='TEST'></p>", !t.querySelectorAll || t.querySelectorAll(".TEST").length !== 0) { n = function(t, e, s, h) {
                            var c, l;
                            if (e = e || r, !h && !n.isXML(e)) {
                                if (c = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t), c && (e.nodeType === 1 || e.nodeType === 9)) {
                                    if (c[1]) return f(e.getElementsByTagName(t), s);
                                    if (c[2] && u.find.CLASS && e.getElementsByClassName) return f(e.getElementsByClassName(c[2]), s) }
                                if (e.nodeType === 9) {
                                    if (t === "body" && e.body) return f([e.body], s);
                                    if (c && c[3]) {
                                        if (l = e.getElementById(c[3]), !l || !l.parentNode) return f([], s);
                                        if (l.id === c[3]) return f([l], s) }
                                    try {
                                        return f(e.querySelectorAll(t), s) } catch (b) {} } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                                    var w = e,
                                        v = e.getAttribute("id"),
                                        a = v || o,
                                        y = e.parentNode,
                                        p = /^\s*[+~]/.test(t);
                                    v ? a = a.replace(/'/g, "\\$&") : e.setAttribute("id", a), p && y && (e = e.parentNode);
                                    try {
                                        if (!p || y) return f(e.querySelectorAll("[id='" + a + "'] " + t), s) } catch (k) {} finally { v || w.removeAttribute("id") } } }
                            return i(t, e, s, h) };
                        for (e in i) n[e] = i[e];
                        t = null } }(),
                function() {
                    var t = r.documentElement,
                        i = t.matchesSelector || t.mozMatchesSelector || t.webkitMatchesSelector || t.msMatchesSelector,
                        e, f;
                    if (i) { e = !i.call(r.createElement("div"), "div"), f = !1;
                        try { i.call(r.documentElement, "[test!='']:sizzle") } catch (o) { f = !0 }
                        n.matchesSelector = function(t, r) {
                            if (r = r.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !n.isXML(t)) try {
                                if (f || !u.match.PSEUDO.test(r) && !/!=/.test(r)) {
                                    var o = i.call(t, r);
                                    if (o || !e || t.document && t.document.nodeType !== 11) return o } } catch (s) {}
                            return n(r, null, null, [t]).length > 0 } } }(),
                function() {
                    var n = r.createElement("div");
                    if (n.innerHTML = "<div class='test e'></div><div class='test'></div>", !!n.getElementsByClassName && n.getElementsByClassName("e").length !== 0) {
                        if (n.lastChild.className = "e", n.getElementsByClassName("e").length === 1) return;
                        u.order.splice(1, 0, "CLASS"), u.find.CLASS = function(n, t, i) {
                            if (typeof t.getElementsByClassName != "undefined" && !i) return t.getElementsByClassName(n[1]) }, n = null } }(), n.contains = r.documentElement.contains ? function(n, t) {
                    return n !== t && (n.contains ? n.contains(t) : !0) } : r.documentElement.compareDocumentPosition ? function(n, t) {
                    return !!(n.compareDocumentPosition(t) & 16) } : function() {
                    return !1 }, n.isXML = function(n) {
                    var t = (n ? n.ownerDocument || n : 0).documentElement;
                    return t ? t.nodeName !== "HTML" : !1 }, p = function(t, i, r) {
                    for (var e, o = [], s = "", h = i.nodeType ? [i] : i, f, c; e = u.match.PSEUDO.exec(t);) s += e[0], t = t.replace(u.match.PSEUDO, "");
                    for (t = u.relative[t] ? t + "*" : t, f = 0, c = h.length; f < c; f++) n(t, h[f], o, r);
                    return n.filter(s, o) }, n.attr = i.attr, n.selectors.attrMap = {}, i.find = n, i.expr = n.selectors, i.expr[":"] = i.expr.filters, i.unique = n.uniqueSort, i.text = n.getText, i.isXMLDoc = n.isXML, i.contains = n.contains }();
    var fe = /Until$/,
        ue = /^(?:parents|prevUntil|prevAll)/,
        re = /,/,
        ie = /^.[^:#\[\.,]*$/,
        su = Array.prototype.slice,
        hi = i.expr.match.POS,
        te = { children: !0, contents: !0, next: !0, prev: !0 };
    i.fn.extend({ find: function(n) {
            var s = this,
                t, f, r, o, u, e;
            if (typeof n != "string") return i(n).filter(function() {
                for (t = 0, f = s.length; t < f; t++)
                    if (i.contains(s[t], this)) return !0 });
            for (r = this.pushStack("", "find", n), t = 0, f = this.length; t < f; t++)
                if (o = r.length, i.find(n, this[t], r), t > 0)
                    for (u = o; u < r.length; u++)
                        for (e = 0; e < o; e++)
                            if (r[e] === r[u]) { r.splice(u--, 1);
                                break }
            return r }, has: function(n) {
            var t = i(n);
            return this.filter(function() {
                for (var n = 0, r = t.length; n < r; n++)
                    if (i.contains(this, t[n])) return !0 }) }, not: function(n) {
            return this.pushStack(yi(this, n, !1), "not", n) }, filter: function(n) {
            return this.pushStack(yi(this, n, !0), "filter", n) }, is: function(n) {
            return !!n && (typeof n == "string" ? hi.test(n) ? i(n, this.context).index(this[0]) >= 0 : i.filter(n, this).length > 0 : this.filter(n).length > 0) }, closest: function(n, t) {
            var f = [],
                u, s, r = this[0],
                e, o;
            if (i.isArray(n)) {
                for (e = 1; r && r.ownerDocument && r !== t;) {
                    for (u = 0; u < n.length; u++) i(r).is(n[u]) && f.push({ selector: n[u], elem: r, level: e });
                    r = r.parentNode, e++ }
                return f }
            for (o = hi.test(n) || typeof n != "string" ? i(n, t || this.context) : 0, u = 0, s = this.length; u < s; u++)
                for (r = this[u]; r;) {
                    if (o ? o.index(r) > -1 : i.find.matchesSelector(r, n)) { f.push(r);
                        break }
                    if (r = r.parentNode, !r || !r.ownerDocument || r === t || r.nodeType === 11) break }
            return f = f.length > 1 ? i.unique(f) : f, this.pushStack(f, "closest", n) }, index: function(n) {
            return n ? typeof n == "string" ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1 }, add: function(n, t) {
            var u = typeof n == "string" ? i(n, t) : i.makeArray(n && n.nodeType ? [n] : n),
                r = i.merge(this.get(), u);
            return this.pushStack(pi(u[0]) || pi(r[0]) ? r : i.unique(r)) }, andSelf: function() {
            return this.add(this.prevObject) } }), i.each({ parent: function(n) {
            var t = n.parentNode;
            return t && t.nodeType !== 11 ? t : null }, parents: function(n) {
            return i.dir(n, "parentNode") }, parentsUntil: function(n, t, r) {
            return i.dir(n, "parentNode", r) }, next: function(n) {
            return i.nth(n, 2, "nextSibling") }, prev: function(n) {
            return i.nth(n, 2, "previousSibling") }, nextAll: function(n) {
            return i.dir(n, "nextSibling") }, prevAll: function(n) {
            return i.dir(n, "previousSibling") }, nextUntil: function(n, t, r) {
            return i.dir(n, "nextSibling", r) }, prevUntil: function(n, t, r) {
            return i.dir(n, "previousSibling", r) }, siblings: function(n) {
            return i.sibling(n.parentNode.firstChild, n) }, children: function(n) {
            return i.sibling(n.firstChild) }, contents: function(n) {
            return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.makeArray(n.childNodes) } }, function(n, t) { i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return fe.test(n) || (u = r), u && typeof u == "string" && (f = i.filter(u, f)), f = this.length > 1 && !te[n] ? i.unique(f) : f, (this.length > 1 || re.test(u)) && ue.test(n) && (f = f.reverse()), this.pushStack(f, n, su.call(arguments).join(",")) } }), i.extend({ filter: function(n, t, r) {
            return r && (n = ":not(" + n + ")"), t.length === 1 ? i.find.matchesSelector(t[0], n) ? [t[0]] : [] : i.find.matches(n, t) }, dir: function(n, r, u) {
            for (var e = [], f = n[r]; f && f.nodeType !== 9 && (u === t || f.nodeType !== 1 || !i(f).is(u));) f.nodeType === 1 && e.push(f), f = f[r];
            return e }, nth: function(n, t, i) { t = t || 1;
            for (var u = 0; n; n = n[i])
                if (n.nodeType === 1 && ++u === t) break;
            return n }, sibling: function(n, t) {
            for (var i = []; n; n = n.nextSibling) n.nodeType === 1 && n !== t && i.push(n);
            return i } });
    var ni = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ne = / jQuery\d+="(?:\d+|null)"/g,
        st = /^\s+/,
        ri = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        ui = /<([\w:]+)/,
        gf = /<tbody/i,
        df = /<|&#?\w+;/,
        kf = /<(?:script|style)/i,
        bf = /<(?:script|object|embed|option|style)/i,
        ei = new RegExp("<(?:" + ni + ")", "i"),
        oi = /checked\s*(?:[^=]|=\s*.checked.)/i,
        wf = /\/(java|ecma)script/i,
        pf = /^\s*<!(?:\[CDATA\[|\-\-)/,
        u = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area: [1, "<map>", "</map>"], _default: [0, "", ""] },
        dt = vi(r);
    u.optgroup = u.option, u.tbody = u.tfoot = u.colgroup = u.caption = u.thead, u.th = u.td, i.support.htmlSerialize || (u._default = [1, "div<div>", "</div>"]), i.fn.extend({ text: function(n) {
            return i.isFunction(n) ? this.each(function(t) {
                var r = i(this);
                r.text(n.call(this, t, r.text())) }) : typeof n != "object" && n !== t ? this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(n)) : i.text(this) }, wrapAll: function(n) {
            if (i.isFunction(n)) return this.each(function(t) { i(this).wrapAll(n.call(this, t)) });
            if (this[0]) {
                var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var n = this; n.firstChild && n.firstChild.nodeType === 1;) n = n.firstChild;
                    return n }).append(this) }
            return this }, wrapInner: function(n) {
            return i.isFunction(n) ? this.each(function(t) { i(this).wrapInner(n.call(this, t)) }) : this.each(function() {
                var t = i(this),
                    r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n) }) }, wrap: function(n) {
            var t = i.isFunction(n);
            return this.each(function(r) { i(this).wrapAll(t ? n.call(this, r) : n) }) }, unwrap: function() {
            return this.parent().each(function() { i.nodeName(this, "body") || i(this).replaceWith(this.childNodes) }).end() }, append: function() {
            return this.domManip(arguments, !0, function(n) { this.nodeType === 1 && this.appendChild(n) }) }, prepend: function() {
            return this.domManip(arguments, !0, function(n) { this.nodeType === 1 && this.insertBefore(n, this.firstChild) }) }, before: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(n) { this.parentNode.insertBefore(n, this) });
            if (arguments.length) {
                var n = i.clean(arguments);
                return n.push.apply(n, this.toArray()), this.pushStack(n, "before", arguments) } }, after: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(n) { this.parentNode.insertBefore(n, this.nextSibling) });
            if (arguments.length) {
                var n = this.pushStack(this, "after", arguments);
                return n.push.apply(n, i.clean(arguments)), n } }, remove: function(n, t) {
            for (var u = 0, r;
                (r = this[u]) != null; u++)(!n || i.filter(n, [r]).length) && (!t && r.nodeType === 1 && (i.cleanData(r.getElementsByTagName("*")), i.cleanData([r])), r.parentNode && r.parentNode.removeChild(r));
            return this }, empty: function() {
            for (var t = 0, n;
                (n = this[t]) != null; t++)
                for (n.nodeType === 1 && i.cleanData(n.getElementsByTagName("*")); n.firstChild;) n.removeChild(n.firstChild);
            return this }, clone: function(n, t) {
            return n = n == null ? !1 : n, t = t == null ? n : t, this.map(function() {
                return i.clone(this, n, t) }) }, html: function(n) {
            if (n === t) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(ne, "") : null;
            if (typeof n != "string" || kf.test(n) || !i.support.leadingWhitespace && st.test(n) || u[(ui.exec(n) || ["", ""])[1].toLowerCase()]) i.isFunction(n) ? this.each(function(t) {
                var r = i(this);
                r.html(n.call(this, t, r.html())) }) : this.empty().append(n);
            else { n = n.replace(ri, "<$1></$2>");
                try {
                    for (var r = 0, f = this.length; r < f; r++) this[r].nodeType === 1 && (i.cleanData(this[r].getElementsByTagName("*")), this[r].innerHTML = n) } catch (e) { this.empty().append(n) } }
            return this }, replaceWith: function(n) {
            return this[0] && this[0].parentNode ? i.isFunction(n) ? this.each(function(t) {
                var r = i(this),
                    u = r.html();
                r.replaceWith(n.call(this, t, u)) }) : (typeof n != "string" && (n = i(n).detach()), this.each(function() {
                var t = this.nextSibling,
                    r = this.parentNode;
                i(this).remove(), t ? i(t).before(n) : i(r).append(n) })) : this.length ? this.pushStack(i(i.isFunction(n) ? n() : n), "replaceWith", n) : this }, detach: function(n) {
            return this.remove(n, !0) }, domManip: function(n, r, u) {
            var c, o, f, s, e = n[0],
                l = [];
            if (!i.support.checkClone && arguments.length === 3 && typeof e == "string" && oi.test(e)) return this.each(function() { i(this).domManip(n, r, u, !0) });
            if (i.isFunction(e)) return this.each(function(f) {
                var o = i(this);
                n[0] = e.call(this, f, r ? o.html() : t), o.domManip(n, r, u) });
            if (this[0]) {
                if (s = e && e.parentNode, c = i.support.parentNode && s && s.nodeType === 11 && s.childNodes.length === this.length ? { fragment: s } : i.buildFragment(n, this, l), f = c.fragment, o = f.childNodes.length === 1 ? f = f.firstChild : f.firstChild, o) { r = r && i.nodeName(o, "tr");
                    for (var h = 0, a = this.length, v = a - 1; h < a; h++) u.call(r ? du(this[h], o) : this[h], c.cacheable || a > 1 && h < v ? i.clone(f, !0, !0) : f) }
                l.length && i.each(l, nf) }
            return this } }), i.buildFragment = function(n, t, u) {
        var e, h, s, o, f = n[0];
        return t && t[0] && (o = t[0].ownerDocument || t[0]), o.createDocumentFragment || (o = r), n.length === 1 && typeof f == "string" && f.length < 512 && o === r && f.charAt(0) === "<" && !bf.test(f) && (i.support.checkClone || !oi.test(f)) && (i.support.html5Clone || !ei.test(f)) && (h = !0, s = i.fragments[f], s && s !== 1 && (e = s)), e || (e = o.createDocumentFragment(), i.clean(n, o, e, u)), h && (i.fragments[f] = s ? e : 1), { fragment: e, cacheable: h } }, i.fragments = {}, i.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(n, t) { i.fn[n] = function(r) {
            var e = [],
                u = i(r),
                o = this.length === 1 && this[0].parentNode,
                f, h, s;
            if (o && o.nodeType === 11 && o.childNodes.length === 1 && u.length === 1) return u[t](this[0]), this;
            for (f = 0, h = u.length; f < h; f++) s = (f > 0 ? this.clone(!0) : this).get(), i(u[f])[t](s), e = e.concat(s);
            return this.pushStack(e, n, u.selector) } }), i.extend({ clone: function(n, t, r) {
            var f, e, u, o = i.support.html5Clone || !ei.test("<" + n.nodeName) ? n.cloneNode(!0) : gu(n);
            if ((!i.support.noCloneEvent || !i.support.noCloneChecked) && (n.nodeType === 1 || n.nodeType === 11) && !i.isXMLDoc(n))
                for (at(n, o), f = tt(n), e = tt(o), u = 0; f[u]; ++u) e[u] && at(f[u], e[u]);
            if (t && (yr(n, o), r))
                for (f = tt(n), e = tt(o), u = 0; f[u]; ++u) yr(f[u], e[u]);
            return f = e = null, o }, clean: function(n, t, f, e) {
            var b, s, c, h, o, y, a, p, k;
            for (t = t || r, typeof t.createElement == "undefined" && (t = t.ownerDocument || t[0] && t[0].ownerDocument || r), s = [], h = 0;
                (o = n[h]) != null; h++)
                if (typeof o == "number" && (o += ""), o) {
                    if (typeof o == "string")
                        if (df.test(o)) { o = o.replace(ri, "<$1></$2>");
                            var w = (ui.exec(o) || ["", ""])[1].toLowerCase(),
                                v = u[w] || u._default,
                                d = v[0],
                                l = t.createElement("div");
                            for (t === r ? dt.appendChild(l) : vi(t).appendChild(l), l.innerHTML = v[1] + o + v[2]; d--;) l = l.lastChild;
                            if (!i.support.tbody)
                                for (y = gf.test(o), a = w === "table" && !y ? l.firstChild && l.firstChild.childNodes : v[1] === "<table>" && !y ? l.childNodes : [], c = a.length - 1; c >= 0; --c) i.nodeName(a[c], "tbody") && !a[c].childNodes.length && a[c].parentNode.removeChild(a[c]);!i.support.leadingWhitespace && st.test(o) && l.insertBefore(t.createTextNode(st.exec(o)[0]), l.firstChild), o = l.childNodes } else o = t.createTextNode(o);
                    if (!i.support.appendChecked)
                        if (o[0] && typeof(p = o.length) == "number")
                            for (c = 0; c < p; c++) nr(o[c]);
                        else nr(o);
                    o.nodeType ? s.push(o) : s = i.merge(s, o) }
            if (f)
                for (b = function(n) {
                        return !n.type || wf.test(n.type) }, h = 0; s[h]; h++) e && i.nodeName(s[h], "script") && (!s[h].type || s[h].type.toLowerCase() === "text/javascript") ? e.push(s[h].parentNode ? s[h].parentNode.removeChild(s[h]) : s[h]) : (s[h].nodeType === 1 && (k = i.grep(s[h].getElementsByTagName("script"), b), s.splice.apply(s, [h + 1, 0].concat(k))), f.appendChild(s[h]));
            return s }, cleanData: function(n) {
            for (var r, u, o = i.cache, s = i.event.special, h = i.support.deleteExpando, t, f, e = 0;
                (t = n[e]) != null; e++)
                if ((!t.nodeName || !i.noData[t.nodeName.toLowerCase()]) && (u = t[i.expando], u)) {
                    if (r = o[u], r && r.events) {
                        for (f in r.events) s[f] ? i.event.remove(t, f) : i.removeEvent(t, f, r.handle);
                        r.handle && (r.handle.elem = null) }
                    h ? delete t[i.expando] : t.removeAttribute && t.removeAttribute(i.expando), delete o[u] } } });
    var ht = /alpha\([^)]*\)/i,
        yf = /opacity=([^)]*)/,
        vf = /([A-Z]|^ms)/g,
        fi = /^-?\d+(?:px)?$/i,
        af = /^-?\d/,
        lf = /^([\-+])=([\-+.\de]+)/,
        cf = { position: "absolute", visibility: "hidden", display: "block" },
        hu = ["Left", "Right"],
        ee = ["Top", "Bottom"],
        a, lr, gt;
    i.fn.css = function(n, r) {
        return arguments.length === 2 && r === t ? this : i.access(this, n, r, !0, function(n, r, u) {
            return u !== t ? i.style(n, r, u) : i.css(n, r) }) }, i.extend({ cssHooks: { opacity: { get: function(n, t) {
                    if (t) {
                        var i = a(n, "opacity", "opacity");
                        return i === "" ? "1" : i }
                    return n.style.opacity } } }, cssNumber: { fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: i.support.cssFloat ? "cssFloat" : "styleFloat" }, style: function(n, r, u, f) {
            if (!!n && n.nodeType !== 3 && n.nodeType !== 8 && !!n.style) {
                var o, s, h = i.camelCase(r),
                    c = n.style,
                    e = i.cssHooks[h];
                if (r = i.cssProps[h] || h, u === t) return e && "get" in e && (o = e.get(n, !1, f)) !== t ? o : c[r];
                if (s = typeof u, s === "string" && (o = lf.exec(u)) && (u = +(o[1] + 1) * +o[2] + parseFloat(i.css(n, r)), s = "number"), u == null || s === "number" && isNaN(u)) return;
                if (s === "number" && !i.cssNumber[h] && (u += "px"), !e || !("set" in e) || (u = e.set(n, u)) !== t) try { c[r] = u } catch (l) {} } }, css: function(n, r, u) {
            var e, f;
            return (r = i.camelCase(r), f = i.cssHooks[r], r = i.cssProps[r] || r, r === "cssFloat" && (r = "float"), f && "get" in f && (e = f.get(n, !0, u)) !== t) ? e : a ? a(n, r) : void 0 }, swap: function(n, t, i) {
            var u = {},
                r;
            for (r in t) u[r] = n.style[r], n.style[r] = t[r];
            i.call(n);
            for (r in t) n.style[r] = u[r] } }), i.curCSS = i.css, i.each(["height", "width"], function(n, t) { i.cssHooks[t] = { get: function(n, r, u) {
                var f;
                if (r) return n.offsetWidth !== 0 ? fr(n, t, u) : (i.swap(n, cf, function() { f = fr(n, t, u) }), f) }, set: function(n, t) {
                return fi.test(t) ? (t = parseFloat(t), t >= 0 ? t + "px" : void 0) : t } } }), i.support.opacity || (i.cssHooks.opacity = { get: function(n, t) {
            return yf.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : "" }, set: function(n, t) {
            var r = n.style,
                u = n.currentStyle,
                e = i.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                f = u && u.filter || r.filter || "";
            (r.zoom = 1, t >= 1 && i.trim(f.replace(ht, "")) === "" && (r.removeAttribute("filter"), u && !u.filter)) || (r.filter = ht.test(f) ? f.replace(ht, e) : f + " " + e) } }), i(function() { i.support.reliableMarginRight || (i.cssHooks.marginRight = { get: function(n, t) {
                var r;
                return i.swap(n, { display: "inline-block" }, function() { r = t ? a(n, "margin-right", "marginRight") : n.style.marginRight }), r } }) }), r.defaultView && r.defaultView.getComputedStyle && (lr = function(n, t) {
        var r, u, f;
        return t = t.replace(vf, "-$1").toLowerCase(), (u = n.ownerDocument.defaultView) && (f = u.getComputedStyle(n, null)) && (r = f.getPropertyValue(t), r === "" && !i.contains(n.ownerDocument.documentElement, n) && (r = i.style(n, t))), r }), r.documentElement.currentStyle && (gt = function(n, t) {
        var f, u, e, i = n.currentStyle && n.currentStyle[t],
            r = n.style;
        return i === null && r && (e = r[t]) && (i = e), !fi.test(i) && af.test(i) && (f = r.left, u = n.runtimeStyle && n.runtimeStyle.left, u && (n.runtimeStyle.left = n.currentStyle.left), r.left = t === "fontSize" ? "1em" : i || 0, i = r.pixelLeft + "px", r.left = f, u && (n.runtimeStyle.left = u)), i === "" ? "auto" : i }), a = lr || gt, i.expr && i.expr.filters && (i.expr.filters.hidden = function(n) {
        var t = n.offsetWidth,
            r = n.offsetHeight;
        return t === 0 && r === 0 || !i.support.reliableHiddenOffsets && (n.style && n.style.display || i.css(n, "display")) === "none" }, i.expr.filters.visible = function(n) {
        return !i.expr.filters.hidden(n) });
    var fu = /%20/g,
        ru = /\[\]$/,
        si = /\r?\n/g,
        dr = /#.*$/,
        kr = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        eu = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        wr = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        br = /^(?:GET|HEAD)$/,
        gr = /^\/\//,
        ti = /\?/,
        ou = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        iu = /^(?:select|textarea)/i,
        kt = /\s+/,
        nu = /([?&])_=[^&]*/,
        bt = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        pt = i.fn.load,
        rt = {},
        yt = {},
        o, s, ii = ["*/"] + ["*"];
    try { o = wu.href } catch (oe) { o = r.createElement("a"), o.href = "", o = o.href }
    s = bt.exec(o.toLowerCase()) || [], i.fn.extend({ load: function(n, r, u) {
                var f, e, o, s;
                return typeof n != "string" && pt ? pt.apply(this, arguments) : this.length ? (f = n.indexOf(" "), f >= 0 && (e = n.slice(f, n.length), n = n.slice(0, f)), o = "GET", r && (i.isFunction(r) ? (u = r, r = t) : typeof r == "object" && (r = i.param(r, i.ajaxSettings.traditional), o = "POST")), s = this, i.ajax({ url: n, type: o, dataType: "html", data: r, complete: function(n, t, r) { r = n.responseText, n.isResolved() && (n.done(function(n) { r = n }), s.html(e ? i("<div>").append(r.replace(ou, "")).find(e) : r)), u && s.each(u, [r, t, n]) } }), this) : this }, serialize: function() {
                return i.param(this.serializeArray()) }, serializeArray: function() {
                return this.map(function() {
                    return this.elements ? i.makeArray(this.elements) : this }).filter(function() {
                    return this.name && !this.disabled && (this.checked || iu.test(this.nodeName) || eu.test(this.type)) }).map(function(n, t) {
                    var r = i(this).val();
                    return r == null ? null : i.isArray(r) ? i.map(r, function(n) {
                        return { name: t.name, value: n.replace(si, "\r\n") } }) : { name: t.name, value: r.replace(si, "\r\n") } }).get() } }), i.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(n, t) { i.fn[t] = function(n) {
                return this.on(t, n) } }), i.each(["get", "post"], function(n, r) { i[r] = function(n, u, f, e) {
                return i.isFunction(u) && (e = e || f, f = u, u = t), i.ajax({ type: r, url: n, data: u, success: f, dataType: e }) } }), i.extend({ getScript: function(n, r) {
                return i.get(n, t, r, "script") }, getJSON: function(n, t, r) {
                return i.get(n, t, r, "json") }, ajaxSetup: function(n, t) {
                return t ? tr(n, i.ajaxSettings) : (t = n, n = i.ajaxSettings), tr(n, t), n }, ajaxSettings: { url: o, isLocal: wr.test(s[1]), global: !0, type: "GET", contentType: "application/x-www-form-urlencoded", processData: !0, async: !0, accepts: { xml: "application/xml, text/xml", html: "text/html", text: "text/plain", json: "application/json, text/javascript", "*": ii }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText" }, converters: { "* text": n.String, "text html": !0, "text json": i.parseJSON, "text xml": i.parseXML }, flatOptions: { context: !0, url: !0 } }, ajaxPrefilter: lt(rt), ajaxTransport: lt(yt), ajax: function(n, r) {
                function w(n, r, s, l) {
                    if (e !== 2) { e = 2, tt && clearTimeout(tt), c = t, g = l || "", f.readyState = n > 0 ? 4 : 0;
                        var p, k, w, a = r,
                            rt = s ? tf(u, f, s) : t,
                            d, nt;
                        if (n >= 200 && n < 300 || n === 304)
                            if (u.ifModified && ((d = f.getResponseHeader("Last-Modified")) && (i.lastModified[o] = d), (nt = f.getResponseHeader("Etag")) && (i.etag[o] = nt)), n === 304) a = "notmodified", p = !0;
                            else try { k = rf(u, rt), a = "success", p = !0 } catch (ut) { a = "parsererror", w = ut } else w = a, (!a || n) && (a = "error", n < 0 && (n = 0));
                        f.status = n, f.statusText = "" + (r || a), p ? b.resolveWith(h, [k, a, f]) : b.rejectWith(h, [f, a, w]), f.statusCode(y), y = t, v && it.trigger("ajax" + (p ? "Success" : "Error"), [f, u, p ? k : w]), ft.fireWith(h, [f, a]), v && (it.trigger("ajaxComplete", [f, u]), --i.active || i.event.trigger("ajaxStop")) } }
                var k, d;
                typeof n == "object" && (r = n, n = t), r = r || {};
                var u = i.ajaxSetup({}, r),
                    h = u.context || u,
                    it = h !== u && (h.nodeType || h instanceof i) ? i(h) : i.event,
                    b = i.Deferred(),
                    ft = i.Callbacks("once memory"),
                    y = u.statusCode || {},
                    o, et = {},
                    ut = {},
                    g, p, c, tt, l, e = 0,
                    v, a, f = { readyState: 0, setRequestHeader: function(n, t) {
                            if (!e) {
                                var i = n.toLowerCase();
                                n = ut[i] = ut[i] || n, et[n] = t }
                            return this }, getAllResponseHeaders: function() {
                            return e === 2 ? g : null }, getResponseHeader: function(n) {
                            var i;
                            if (e === 2) {
                                if (!p)
                                    for (p = {}; i = kr.exec(g);) p[i[1].toLowerCase()] = i[2];
                                i = p[n.toLowerCase()] }
                            return i === t ? null : i }, overrideMimeType: function(n) {
                            return e || (u.mimeType = n), this }, abort: function(n) {
                            return n = n || "abort", c && c.abort(n), w(0, n), this } };
                if (b.promise(f), f.success = f.done, f.error = f.fail, f.complete = ft.add, f.statusCode = function(n) {
                        if (n) {
                            var t;
                            if (e < 2)
                                for (t in n) y[t] = [y[t], n[t]];
                            else t = n[f.status], f.then(t, t) }
                        return this }, u.url = ((n || u.url) + "").replace(dr, "").replace(gr, s[1] + "//"), u.dataTypes = i.trim(u.dataType || "*").toLowerCase().split(kt), u.crossDomain == null && (l = bt.exec(u.url.toLowerCase()), u.crossDomain = !(!l || l[1] == s[1] && l[2] == s[2] && (l[3] || (l[1] === "http:" ? 80 : 443)) == (s[3] || (s[1] === "http:" ? 80 : 443)))), u.data && u.processData && typeof u.data != "string" && (u.data = i.param(u.data, u.traditional)), nt(rt, u, r, f), e === 2) return !1;
                v = u.global, u.type = u.type.toUpperCase(), u.hasContent = !br.test(u.type), v && i.active++ == 0 && i.event.trigger("ajaxStart"), u.hasContent || (u.data && (u.url += (ti.test(u.url) ? "&" : "?") + u.data, delete u.data), o = u.url, u.cache === !1 && (k = i.now(), d = u.url.replace(nu, "$1_=" + k), u.url = d + (d === u.url ? (ti.test(u.url) ? "&" : "?") + "_=" + k : ""))), (u.data && u.hasContent && u.contentType !== !1 || r.contentType) && f.setRequestHeader("Content-Type", u.contentType), u.ifModified && (o = o || u.url, i.lastModified[o] && f.setRequestHeader("If-Modified-Since", i.lastModified[o]), i.etag[o] && f.setRequestHeader("If-None-Match", i.etag[o])), f.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + (u.dataTypes[0] !== "*" ? ", " + ii + "; q=0.01" : "") : u.accepts["*"]);
                for (a in u.headers) f.setRequestHeader(a, u.headers[a]);
                if (u.beforeSend && (u.beforeSend.call(h, f, u) === !1 || e === 2)) return f.abort(), !1;
                for (a in { success: 1, error: 1, complete: 1 }) f[a](u[a]);
                if (c = nt(yt, u, r, f), c) { f.readyState = 1, v && it.trigger("ajaxSend", [f, u]), u.async && u.timeout > 0 && (tt = setTimeout(function() { f.abort("timeout") }, u.timeout));
                    try { e = 1, c.send(et, w) } catch (ot) {
                        if (e < 2) w(-1, ot);
                        else throw ot; } } else w(-1, "No Transport");
                return f }, param: function(n, r) {
                var u = [],
                    e = function(n, t) { t = i.isFunction(t) ? t() : t, u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t) },
                    f;
                if (r === t && (r = i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() { e(this.name, this.value) });
                else
                    for (f in n) ct(f, n[f], r, e);
                return u.join("&").replace(fu, "+") } }), i.extend({ active: 0, lastModified: {}, etag: {} }), cr = i.now(), y = /(\=)\?(&|$)|\?\?/i, i.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
                return i.expando + "_" + cr++ } }), i.ajaxPrefilter("json jsonp", function(t, r, u) {
            var h = t.contentType === "application/x-www-form-urlencoded" && typeof t.data == "string";
            if (t.dataTypes[0] === "jsonp" || t.jsonp !== !1 && (y.test(t.url) || h && y.test(t.data))) {
                var o, f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                    c = n[f],
                    e = t.url,
                    s = t.data,
                    l = "$1" + f + "$2";
                return t.jsonp !== !1 && (e = e.replace(y, l), t.url === e && (h && (s = s.replace(y, l)), t.data === s && (e += (/\?/.test(e) ? "&" : "?") + t.jsonp + "=" + f))), t.url = e, t.data = s, n[f] = function(n) { o = [n] }, u.always(function() { n[f] = c, o && i.isFunction(c) && n[f](o[0]) }), t.converters["script json"] = function() {
                    return o || i.error(f + " was not called"), o[0] }, t.dataTypes[0] = "json", "script" } }), i.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /javascript|ecmascript/ }, converters: { "text script": function(n) {
                    return i.globalEval(n), n } } }), i.ajaxPrefilter("script", function(n) { n.cache === t && (n.cache = !1), n.crossDomain && (n.type = "GET", n.global = !1) }), i.ajaxTransport("script", function(n) {
            if (n.crossDomain) {
                var i, u = r.head || r.getElementsByTagName("head")[0] || r.documentElement;
                return { send: function(f, e) { i = r.createElement("script"), i.async = "async", n.scriptCharset && (i.charset = n.scriptCharset), i.src = n.url, i.onload = i.onreadystatechange = function(n, r) {
                            (r || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, u && i.parentNode && u.removeChild(i), i = t, r || e(200, "success")) }, u.insertBefore(i, u.firstChild) }, abort: function() { i && i.onload(0, 1) } } } }), p = n.ActiveXObject ? function() {
            for (var n in h) h[n](0, 1) } : !1, vr = 0, i.ajaxSettings.xhr = n.ActiveXObject ? function() {
            return !this.isLocal && gi() || uf() } : gi,
        function(n) { i.extend(i.support, { ajax: !!n, cors: !!n && "withCredentials" in n }) }(i.ajaxSettings.xhr()), i.support.ajax && i.ajaxTransport(function(r) {
            if (!r.crossDomain || i.support.cors) {
                var u;
                return { send: function(f, e) {
                        var o = r.xhr(),
                            c, s;
                        if (r.username ? o.open(r.type, r.url, r.async, r.username, r.password) : o.open(r.type, r.url, r.async), r.xhrFields)
                            for (s in r.xhrFields) o[s] = r.xhrFields[s];
                        r.mimeType && o.overrideMimeType && o.overrideMimeType(r.mimeType), !r.crossDomain && !f["X-Requested-With"] && (f["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (s in f) o.setRequestHeader(s, f[s]) } catch (l) {}
                        o.send(r.hasContent && r.data || null), u = function(n, f) {
                            var s, v, y, l, a;
                            try {
                                if (u && (f || o.readyState === 4))
                                    if (u = t, c && (o.onreadystatechange = i.noop, p && delete h[c]), f) o.readyState !== 4 && o.abort();
                                    else { s = o.status, y = o.getAllResponseHeaders(), l = {}, a = o.responseXML, a && a.documentElement && (l.xml = a), l.text = o.responseText;
                                        try { v = o.statusText } catch (w) { v = "" }!s && r.isLocal && !r.crossDomain ? s = l.text ? 200 : 404 : s === 1223 && (s = 204) } } catch (b) { f || e(-1, b) }
                            l && e(s, v, l, y) }, !r.async || o.readyState === 4 ? u() : (c = ++vr, p && (h || (h = {}, i(n).unload(p)), h[c] = u), o.onreadystatechange = u) }, abort: function() { u && u(0, 1) } } } });
    var ft = {},
        f, l, uu = /^(?:toggle|show|hide)$/,
        tu = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        d, di = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ],
        k;
    i.fn.extend({ show: function(n, t, r) {
            var u, e, f, o;
            if (n || n === 0) return this.animate(v("show", 3), n, t, r);
            for (f = 0, o = this.length; f < o; f++) u = this[f], u.style && (e = u.style.display, !i._data(u, "olddisplay") && e === "none" && (e = u.style.display = ""), e === "" && i.css(u, "display") === "none" && i._data(u, "olddisplay", li(u.nodeName)));
            for (f = 0; f < o; f++) u = this[f], u.style && (e = u.style.display, (e === "" || e === "none") && (u.style.display = i._data(u, "olddisplay") || ""));
            return this }, hide: function(n, t, r) {
            if (n || n === 0) return this.animate(v("hide", 3), n, t, r);
            for (var f, e, u = 0, o = this.length; u < o; u++) f = this[u], f.style && (e = i.css(f, "display"), e !== "none" && !i._data(f, "olddisplay") && i._data(f, "olddisplay", e));
            for (u = 0; u < o; u++) this[u].style && (this[u].style.display = "none");
            return this }, _toggle: i.fn.toggle, toggle: function(n, t, r) {
            var u = typeof n == "boolean";
            return i.isFunction(n) && i.isFunction(t) ? this._toggle.apply(this, arguments) : n == null || u ? this.each(function() {
                var t = u ? n : i(this).is(":hidden");
                i(this)[t ? "show" : "hide"]() }) : this.animate(v("toggle", 3), n, t, r), this }, fadeTo: function(n, t, i, r) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({ opacity: t }, n, i, r) }, animate: function(n, t, r, u) {
            function e() { f.queue === !1 && i._mark(this);
                var u = i.extend({}, f),
                    y = this.nodeType === 1,
                    v = y && i(this).is(":hidden"),
                    e, t, r, o, h, s, c, l, a;
                u.animatedProperties = {};
                for (r in n) {
                    if (e = i.camelCase(r), r !== e && (n[e] = n[r], delete n[r]), t = n[e], i.isArray(t) ? (u.animatedProperties[e] = t[1], t = n[e] = t[0]) : u.animatedProperties[e] = u.specialEasing && u.specialEasing[e] || u.easing || "swing", t === "hide" && v || t === "show" && !v) return u.complete.call(this);
                    y && (e === "height" || e === "width") && (u.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], i.css(this, "display") === "inline" && i.css(this, "float") === "none" && (!i.support.inlineBlockNeedsLayout || li(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1)) }
                u.overflow != null && (this.style.overflow = "hidden");
                for (r in n) o = new i.fx(this, u, r), t = n[r], uu.test(t) ? (a = i._data(this, "toggle" + r) || (t === "toggle" ? v ? "show" : "hide" : 0), a ? (i._data(this, "toggle" + r, a === "show" ? "hide" : "show"), o[a]()) : o[t]()) : (h = tu.exec(t), s = o.cur(), h ? (c = parseFloat(h[2]), l = h[3] || (i.cssNumber[r] ? "" : "px"), l !== "px" && (i.style(this, r, (c || 1) + l), s = (c || 1) / o.cur() * s, i.style(this, r, s + l)), h[1] && (c = (h[1] === "-=" ? -1 : 1) * c + s), o.custom(s, c, l)) : o.custom(s, t, ""));
                return !0 }
            var f = i.speed(t, r, u);
            return i.isEmptyObject(n) ? this.each(f.complete, [!1]) : (n = i.extend({}, n), f.queue === !1 ? this.each(e) : this.queue(f.queue, e)) }, stop: function(n, r, u) {
            return typeof n != "string" && (u = r, r = n, n = t), r && n !== !1 && this.queue(n || "fx", []), this.each(function() {
                function e(n, t, r) {
                    var f = t[r];
                    i.removeData(n, r, !0), f.stop(u) }
                var t, o = !1,
                    f = i.timers,
                    r = i._data(this);
                if (u || i._unmark(!0, this), n == null)
                    for (t in r) r[t] && r[t].stop && t.indexOf(".run") === t.length - 4 && e(this, r, t);
                else r[t = n + ".run"] && r[t].stop && e(this, r, t);
                for (t = f.length; t--;) f[t].elem === this && (n == null || f[t].queue === n) && (u ? f[t](!0) : f[t].saveState(), o = !0, f.splice(t, 1));
                (!u || !o) && i.dequeue(this, n) }) } }), i.each({ slideDown: v("show", 1), slideUp: v("hide", 1), slideToggle: v("toggle", 1), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(n, t) { i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r) } }), i.extend({ speed: function(n, t, r) {
            var u = n && typeof n == "object" ? i.extend({}, n) : { complete: r || !r && t || i.isFunction(n) && n, duration: n, easing: r && t || t && !i.isFunction(t) && t };
            return u.duration = i.fx.off ? 0 : typeof u.duration == "number" ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, (u.queue == null || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function(n) { i.isFunction(u.old) && u.old.call(this), u.queue ? i.dequeue(this, u.queue) : n !== !1 && i._unmark(this) }, u }, easing: { linear: function(n, t, i, r) {
                return i + r * n }, swing: function(n, t, i, r) {
                return (-Math.cos(n * Math.PI) / 2 + .5) * r + i } }, timers: [], fx: function(n, t, i) { this.options = t, this.elem = n, this.prop = i, t.orig = t.orig || {} } }), i.fx.prototype = { update: function() { this.options.step && this.options.step.call(this.elem, this.now, this), (i.fx.step[this.prop] || i.fx.step._default)(this) }, cur: function() {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
            var t, n = i.css(this.elem, this.prop);
            return isNaN(t = parseFloat(n)) ? !n || n === "auto" ? 0 : n : t }, custom: function(n, r, u) {
            function e(n) {
                return f.step(n) }
            var f = this,
                o = i.fx;
            this.startTime = k || ur(), this.end = r, this.now = this.start = n, this.pos = this.state = 0, this.unit = u || this.unit || (i.cssNumber[this.prop] ? "" : "px"), e.queue = this.options.queue, e.elem = this.elem, e.saveState = function() { f.options.hide && i._data(f.elem, "fxshow" + f.prop) === t && i._data(f.elem, "fxshow" + f.prop, f.start) }, e() && i.timers.push(e) && !d && (d = setInterval(o.tick, o.interval)) }, show: function() {
            var n = i._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = n || i.style(this.elem, this.prop), this.options.show = !0, n !== t ? this.custom(this.cur(), n) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), i(this.elem).show() }, hide: function() { this.options.orig[this.prop] = i._data(this.elem, "fxshow" + this.prop) || i.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0) }, step: function(n) {
            var r, f, e, o = k || ur(),
                s = !0,
                u = this.elem,
                t = this.options;
            if (n || o >= t.duration + this.startTime) { this.now = this.end, this.pos = this.state = 1, this.update(), t.animatedProperties[this.prop] = !0;
                for (r in t.animatedProperties) t.animatedProperties[r] !== !0 && (s = !1);
                if (s) {
                    if (t.overflow != null && !i.support.shrinkWrapBlocks && i.each(["", "X", "Y"], function(n, i) { u.style["overflow" + i] = t.overflow[n] }), t.hide && i(u).hide(), t.hide || t.show)
                        for (r in t.animatedProperties) i.style(u, r, t.orig[r]), i.removeData(u, "fxshow" + r, !0), i.removeData(u, "toggle" + r, !0);
                    e = t.complete, e && (t.complete = !1, e.call(u)) }
                return !1 }
            return t.duration == Infinity ? this.now = o : (f = o - this.startTime, this.state = f / t.duration, this.pos = i.easing[t.animatedProperties[this.prop]](this.state, f, 0, 1, t.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0 } }, i.extend(i.fx, { tick: function() {
            for (var r, n = i.timers, t = 0; t < n.length; t++) r = n[t], !r() && n[t] === r && n.splice(t--, 1);
            n.length || i.fx.stop() }, interval: 13, stop: function() { clearInterval(d), d = null }, speeds: { slow: 600, fast: 200, _default: 400 }, step: { opacity: function(n) { i.style(n.elem, "opacity", n.now) }, _default: function(n) { n.elem.style && n.elem.style[n.prop] != null ? n.elem.style[n.prop] = n.now + n.unit : n.elem[n.prop] = n.now } } }), i.each(["width", "height"], function(n, t) { i.fx.step[t] = function(n) { i.style(n.elem, t, Math.max(0, n.now) + n.unit) } }), i.expr && i.expr.filters && (i.expr.filters.animated = function(n) {
        return i.grep(i.timers, function(t) {
            return n === t.elem }).length }), or = /^t(?:able|d|h)$/i, ut = /^(?:body|html)$/i, i.fn.offset = "getBoundingClientRect" in r.documentElement ? function(n) {
        var t = this[0],
            r, f, u;
        if (n) return this.each(function(t) { i.offset.setOffset(this, n, t) });
        if (!t || !t.ownerDocument) return null;
        if (t === t.ownerDocument.body) return i.offset.bodyOffset(t);
        try { r = t.getBoundingClientRect() } catch (y) {}
        if (f = t.ownerDocument, u = f.documentElement, !r || !i.contains(u, t)) return r ? { top: r.top, left: r.left } : { top: 0, left: 0 };
        var e = f.body,
            o = et(f),
            s = u.clientTop || e.clientTop || 0,
            h = u.clientLeft || e.clientLeft || 0,
            c = o.pageYOffset || i.support.boxModel && u.scrollTop || e.scrollTop,
            l = o.pageXOffset || i.support.boxModel && u.scrollLeft || e.scrollLeft,
            a = r.top + c - s,
            v = r.left + l - h;
        return { top: a, left: v } } : function(n) {
        var t = this[0];
        if (n) return this.each(function(t) { i.offset.setOffset(this, n, t) });
        if (!t || !t.ownerDocument) return null;
        if (t === t.ownerDocument.body) return i.offset.bodyOffset(t);
        for (var r, h = t.offsetParent, a = t, c = t.ownerDocument, l = c.documentElement, e = c.body, s = c.defaultView, o = s ? s.getComputedStyle(t, null) : t.currentStyle, u = t.offsetTop, f = t.offsetLeft;
            (t = t.parentNode) && t !== e && t !== l;) {
            if (i.support.fixedPosition && o.position === "fixed") break;
            r = s ? s.getComputedStyle(t, null) : t.currentStyle, u -= t.scrollTop, f -= t.scrollLeft, t === h && (u += t.offsetTop, f += t.offsetLeft, i.support.doesNotAddBorder && (!i.support.doesAddBorderForTableAndCells || !or.test(t.nodeName)) && (u += parseFloat(r.borderTopWidth) || 0, f += parseFloat(r.borderLeftWidth) || 0), a = h, h = t.offsetParent), i.support.subtractsBorderForOverflowNotVisible && r.overflow !== "visible" && (u += parseFloat(r.borderTopWidth) || 0, f += parseFloat(r.borderLeftWidth) || 0), o = r }
        return (o.position === "relative" || o.position === "static") && (u += e.offsetTop, f += e.offsetLeft), i.support.fixedPosition && o.position === "fixed" && (u += Math.max(l.scrollTop, e.scrollTop), f += Math.max(l.scrollLeft, e.scrollLeft)), { top: u, left: f } }, i.offset = { bodyOffset: function(n) {
            var t = n.offsetTop,
                r = n.offsetLeft;
            return i.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(i.css(n, "marginTop")) || 0, r += parseFloat(i.css(n, "marginLeft")) || 0), { top: t, left: r } }, setOffset: function(n, t, r) {
            var f = i.css(n, "position");
            f === "static" && (n.style.position = "relative");
            var e = i(n),
                o = e.offset(),
                l = i.css(n, "top"),
                a = i.css(n, "left"),
                v = (f === "absolute" || f === "fixed") && i.inArray("auto", [l, a]) > -1,
                u = {},
                s = {},
                h, c;
            v ? (s = e.position(), h = s.top, c = s.left) : (h = parseFloat(l) || 0, c = parseFloat(a) || 0), i.isFunction(t) && (t = t.call(n, r, o)), t.top != null && (u.top = t.top - o.top + h), t.left != null && (u.left = t.left - o.left + c), "using" in t ? t.using.call(n, u) : e.css(u) } }, i.fn.extend({ position: function() {
            if (!this[0]) return null;
            var u = this[0],
                n = this.offsetParent(),
                t = this.offset(),
                r = ut.test(n[0].nodeName) ? { top: 0, left: 0 } : n.offset();
            return t.top -= parseFloat(i.css(u, "marginTop")) || 0, t.left -= parseFloat(i.css(u, "marginLeft")) || 0, r.top += parseFloat(i.css(n[0], "borderTopWidth")) || 0, r.left += parseFloat(i.css(n[0], "borderLeftWidth")) || 0, { top: t.top - r.top, left: t.left - r.left } }, offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent || r.body; n && !ut.test(n.nodeName) && i.css(n, "position") === "static";) n = n.offsetParent;
                return n }) } }), i.each(["Left", "Top"], function(n, r) {
        var u = "scroll" + r;
        i.fn[u] = function(r) {
            var e, f;
            return r === t ? (e = this[0], !e) ? null : (f = et(e), f ? "pageXOffset" in f ? f[n ? "pageYOffset" : "pageXOffset"] : i.support.boxModel && f.document.documentElement[u] || f.document.body[u] : e[u]) : this.each(function() { f = et(this), f ? f.scrollTo(n ? i(f).scrollLeft() : r, n ? r : i(f).scrollTop()) : this[u] = r }) } }), i.each(["Height", "Width"], function(n, r) {
        var u = r.toLowerCase();
        i.fn["inner" + r] = function() {
            var n = this[0];
            return n ? n.style ? parseFloat(i.css(n, u, "padding")) : this[u]() : null }, i.fn["outer" + r] = function(n) {
            var t = this[0];
            return t ? t.style ? parseFloat(i.css(t, u, n ? "margin" : "border")) : this[u]() : null }, i.fn[u] = function(n) {
            var f = this[0],
                e, o, s, h;
            return f ? i.isFunction(n) ? this.each(function(t) {
                var r = i(this);
                r[u](n.call(this, t, r[u]())) }) : i.isWindow(f) ? (e = f.document.documentElement["client" + r], o = f.document.body, f.document.compatMode === "CSS1Compat" && e || o && o["client" + r] || e) : f.nodeType === 9 ? Math.max(f.documentElement["client" + r], f.body["scroll" + r], f.documentElement["scroll" + r], f.body["offset" + r], f.documentElement["offset" + r]) : n === t ? (s = i.css(f, u), h = parseFloat(s), i.isNumeric(h) ? h : s) : this.css(u, typeof n == "string" ? n : n + "px") : n == null ? null : this } }), n.jQuery = n.$ = i, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return i }) })(window),
function(n) { "use strict";

    function u(t) {
        var i = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), n(this).ajaxSubmit(i)) }

    function f(t) {
        var r = t.target,
            u = n(r),
            f, i, e;
        if (!u.is("[type=submit],[type=image]")) {
            if (f = u.closest("[type=submit]"), f.length === 0) return;
            r = f[0] }
        i = this, i.clk = r, r.type == "image" && (t.offsetX !== undefined ? (i.clk_x = t.offsetX, i.clk_y = t.offsetY) : typeof n.fn.offset == "function" ? (e = u.offset(), i.clk_x = t.pageX - e.left, i.clk_y = t.pageY - e.top) : (i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop)), setTimeout(function() { i.clk = i.clk_x = i.clk_y = null }, 100) }

    function t() {
        if (n.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t) } }
    var i = {},
        r;
    i.fileapi = n("<input type='file'/>").get(0).files !== undefined, i.formdata = window.FormData !== undefined, r = !!n.fn.prop, n.fn.attr2 = function() {
        if (!r) return this.attr.apply(this, arguments);
        var n = this.prop.apply(this, arguments);
        return n && n.jquery || typeof n == "string" ? n : this.attr.apply(this, arguments) }, n.fn.ajaxSubmit = function(u) {
        function st(t) {
            for (var r = n.param(t, u.traditional).split("&"), o = r.length, e = [], f, i = 0; i < o; i++) r[i] = r[i].replace(/\+/g, " "), f = r[i].split("="), e.push([decodeURIComponent(f[0]), decodeURIComponent(f[1])]);
            return e }

        function ot(t) {
            for (var e = new FormData, f, r, o, i = 0; i < t.length; i++) e.append(t[i].name, t[i].value);
            if (u.extraData)
                for (f = st(u.extraData), i = 0; i < f.length; i++) f[i] && e.append(f[i][0], f[i][1]);
            return u.data = null, r = n.extend(!0, {}, n.ajaxSettings, u, { contentType: !1, processData: !1, cache: !1, type: h || "POST" }), u.uploadProgress && (r.xhr = function() {
                var t = n.ajaxSettings.xhr();
                return t.upload && t.upload.addEventListener("progress", function(n) {
                    var t = 0,
                        i = n.loaded || n.position,
                        r = n.total;
                    n.lengthComputable && (t = Math.ceil(i / r * 100)), u.uploadProgress(n, i, r, t) }, !1), t }), r.data = null, o = r.beforeSend, r.beforeSend = function(n, t) { t.data = e, o && o.call(this, n, t) }, n.ajax(r) }

        function ft(i) {
            function ht(n) {
                var i = null;
                try { n.contentWindow && (i = n.contentWindow.document) } catch (r) { t("cannot get iframe.contentWindow document: " + r) }
                if (i) return i;
                try { i = n.contentDocument ? n.contentDocument : n.document } catch (r) { t("cannot get iframe.contentDocument: " + r), i = n.document }
                return i }

            function ct() {
                function s() {
                    try {
                        var n = ht(a).readyState;
                        t("state = " + n), n && n.toLowerCase() == "uninitialized" && setTimeout(s, 50) } catch (i) { t("Server abort: ", i, " (", i.name, ")"), b(tt), d && clearTimeout(d), d = undefined } }
                var u = f.attr2("target"),
                    o = f.attr2("action"),
                    r, i, c;
                l.setAttribute("target", g), h || l.setAttribute("method", "POST"), o != e.url && l.setAttribute("action", e.url), e.skipEncodingOverride || h && !/post/i.test(h) || f.attr({ encoding: "multipart/form-data", enctype: "multipart/form-data" }), e.timeout && (d = setTimeout(function() { it = !0, b(rt) }, e.timeout)), r = [];
                try {
                    if (e.extraData)
                        for (i in e.extraData) e.extraData.hasOwnProperty(i) && (n.isPlainObject(e.extraData[i]) && e.extraData[i].hasOwnProperty("name") && e.extraData[i].hasOwnProperty("value") ? r.push(n('<input type="hidden" name="' + e.extraData[i].name + '">').val(e.extraData[i].value).appendTo(l)[0]) : r.push(n('<input type="hidden" name="' + i + '">').val(e.extraData[i]).appendTo(l)[0]));
                    e.iframeTarget || (y.appendTo("body"), a.attachEvent ? a.attachEvent("onload", b) : a.addEventListener("load", b, !1)), setTimeout(s, 15);
                    try { l.submit() } catch (v) { c = document.createElement("form").submit, c.apply(l) } } finally { l.setAttribute("action", o), u ? l.setAttribute("target", u) : f.removeAttr("target"), n(r).remove() } }

            function b(i) {
                var r, u, w, f, k, g, h, c, l;
                if (!o.aborted && !ot) {
                    if (s = ht(a), s || (t("cannot access response document"), i = tt), i === rt && o) { o.abort("timeout"), v.reject(o, "timeout");
                        return }
                    if (i == tt && o) { o.abort("server abort"), v.reject(o, "error", "server abort");
                        return }
                    if (s && s.location.href != e.iframeSrc || it) { a.detachEvent ? a.detachEvent("onload", b) : a.removeEventListener("load", b, !1), r = "success";
                        try {
                            if (it) throw "timeout";
                            if (w = e.dataType == "xml" || s.XMLDocument || n.isXMLDoc(s), t("isXml=" + w), !w && window.opera && (s.body === null || !s.body.innerHTML) && --st) { t("requeing onLoad callback, DOM not available"), setTimeout(b, 250);
                                return }
                            f = s.body ? s.body : s.documentElement, o.responseText = f ? f.innerHTML : null, o.responseXML = s.XMLDocument ? s.XMLDocument : s, w && (e.dataType = "xml"), o.getResponseHeader = function(n) {
                                var t = { "content-type": e.dataType };
                                return t[n] }, f && (o.status = Number(f.getAttribute("status")) || o.status, o.statusText = f.getAttribute("statusText") || o.statusText), k = (e.dataType || "").toLowerCase(), g = /(json|script|text)/.test(k), g || e.textarea ? (h = s.getElementsByTagName("textarea")[0], h ? (o.responseText = h.value, o.status = Number(h.getAttribute("status")) || o.status, o.statusText = h.getAttribute("statusText") || o.statusText) : g && (c = s.getElementsByTagName("pre")[0], l = s.getElementsByTagName("body")[0], c ? o.responseText = c.textContent ? c.textContent : c.innerText : l && (o.responseText = l.textContent ? l.textContent : l.innerText))) : k == "xml" && !o.responseXML && o.responseText && (o.responseXML = vt(o.responseText));
                            try { lt = yt(o, k, e) } catch (nt) { r = "parsererror", o.error = u = nt || r } } catch (nt) { t("error caught: ", nt), r = "error", o.error = u = nt || r }
                        o.aborted && (t("upload aborted"), r = null), o.status && (r = o.status >= 200 && o.status < 300 || o.status === 304 ? "success" : "error"), r === "success" ? (e.success && e.success.call(e.context, lt, "success", o), v.resolve(o.responseText, "success", o), p && n.event.trigger("ajaxSuccess", [o, e])) : r && (u === undefined && (u = o.statusText), e.error && e.error.call(e.context, o, r, u), v.reject(o, "error", u), p && n.event.trigger("ajaxError", [o, e, u])), p && n.event.trigger("ajaxComplete", [o, e]), p && !--n.active && n.event.trigger("ajaxStop"), e.complete && e.complete.call(e.context, o, r), ot = !0, e.timeout && clearTimeout(d), setTimeout(function() { e.iframeTarget || y.remove(), o.responseXML = null }, 100) } } }
            var l = f[0],
                et, nt, e, p, g, y, a, o, k, w, it, d, v = n.Deferred(),
                rt, tt, ut, ft, lt, s, st, ot;
            if (v.abort = function(n) { o.abort(n) }, i)
                for (nt = 0; nt < c.length; nt++) et = n(c[nt]), r ? et.prop("disabled", !1) : et.removeAttr("disabled");
            if (e = n.extend(!0, {}, n.ajaxSettings, u), e.context = e.context || e, g = "jqFormIO" + +new Date, e.iframeTarget ? (y = n(e.iframeTarget), w = y.attr2("name"), w ? g = w : y.attr2("name", g)) : (y = n('<iframe name="' + g + '" src="' + e.iframeSrc + '" />'), y.css({ position: "absolute", top: "-1000px", left: "-1000px" })), a = y[0], o = { aborted: 0, responseText: null, responseXML: null, status: 0, statusText: "n/a", getAllResponseHeaders: function() {}, getResponseHeader: function() {}, setRequestHeader: function() {}, abort: function(i) {
                        var r = i === "timeout" ? "timeout" : "aborted";
                        t("aborting upload... " + r), this.aborted = 1;
                        try { a.contentWindow.document.execCommand && a.contentWindow.document.execCommand("Stop") } catch (u) {}
                        y.attr("src", e.iframeSrc), o.error = r, e.error && e.error.call(e.context, o, r, i), p && n.event.trigger("ajaxError", [o, e, r]), e.complete && e.complete.call(e.context, o, r) } }, p = e.global, p && 0 == n.active++ && n.event.trigger("ajaxStart"), p && n.event.trigger("ajaxSend", [o, e]), e.beforeSend && e.beforeSend.call(e.context, o, e) === !1) return e.global && n.active--, v.reject(), v;
            if (o.aborted) return v.reject(), v;
            k = l.clk, k && (w = k.name, w && !k.disabled && (e.extraData = e.extraData || {}, e.extraData[w] = k.value, k.type == "image" && (e.extraData[w + ".x"] = l.clk_x, e.extraData[w + ".y"] = l.clk_y))), rt = 1, tt = 2, ut = n("meta[name=csrf-token]").attr("content"), ft = n("meta[name=csrf-param]").attr("content"), ft && ut && (e.extraData = e.extraData || {}, e.extraData[ft] = ut), e.forceSync ? ct() : setTimeout(ct, 10), st = 50;
            var vt = n.parseXML || function(n, t) {
                    return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(n)) : t = (new DOMParser).parseFromString(n, "text/xml"), t && t.documentElement && t.documentElement.nodeName != "parsererror" ? t : null },
                at = n.parseJSON || function(s) {
                    return window.eval("(" + s + ")") },
                yt = function(t, i, r) {
                    var f = t.getResponseHeader("content-type") || "",
                        e = i === "xml" || !i && f.indexOf("xml") >= 0,
                        u = e ? t.responseXML : t.responseText;
                    return e && u.documentElement.nodeName === "parsererror" && n.error && n.error("parsererror"), r && r.dataFilter && (u = r.dataFilter(u, i)), typeof u == "string" && (i === "json" || !i && f.indexOf("json") >= 0 ? u = at(u) : (i === "script" || !i && f.indexOf("javascript") >= 0) && n.globalEval(u)), u };
            return v }
        var h, b, e, f, v, y, c, w, o, l, s, nt, rt, it, d, a, p;
        if (!this.length) return t("ajaxSubmit: skipping submit process - no element selected"), this;
        if (f = this, typeof u == "function" ? u = { success: u } : u === undefined && (u = {}), h = u.type || this.attr2("method"), b = u.url || this.attr2("action"), e = typeof b == "string" ? n.trim(b) : "", e = e || window.location.href || "", e && (e = (e.match(/^([^#]+)/) || [])[1]), u = n.extend(!0, { url: e, success: n.ajaxSettings.success, type: h || n.ajaxSettings.type, iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank" }, u), v = {}, this.trigger("form-pre-serialize", [this, u, v]), v.veto) return t("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (u.beforeSerialize && u.beforeSerialize(this, u) === !1) return t("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        if (y = u.traditional, y === undefined && (y = n.ajaxSettings.traditional), c = [], o = this.formToArray(u.semantic, c), u.data && (u.extraData = u.data, w = n.param(u.data, y)), u.beforeSubmit && u.beforeSubmit(o, this, u) === !1) return t("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [o, this, u, v]), v.veto) return t("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        l = n.param(o, y), w && (l = l ? l + "&" + w : w), u.type.toUpperCase() == "GET" ? (u.url += (u.url.indexOf("?") >= 0 ? "&" : "?") + l, u.data = null) : u.data = l, s = [], u.resetForm && s.push(function() { f.resetForm() }), u.clearForm && s.push(function() { f.clearForm(u.includeHidden) }), !u.dataType && u.target ? (nt = u.success || function() {}, s.push(function(t) {
            var i = u.replaceTarget ? "replaceWith" : "html";
            n(u.target)[i](t).each(nt, arguments) })) : u.success && s.push(u.success), u.success = function(n, t, i) {
            for (var o = u.context || this, r = 0, e = s.length; r < e; r++) s[r].apply(o, [n, t, i || f, f]) }, u.error && (rt = u.error, u.error = function(n, t, i) {
            var r = u.context || this;
            rt.apply(r, [n, t, i, f]) }), u.complete && (it = u.complete, u.complete = function(n, t) {
            var i = u.context || this;
            it.apply(i, [n, t, f]) });
        var et = n('input[type=file]:enabled:not([value=""])', this),
            tt = et.length > 0,
            ut = "multipart/form-data",
            g = f.attr("enctype") == ut || f.attr("encoding") == ut,
            k = i.fileapi && i.formdata;
        for (t("fileAPI :" + k), d = (tt || g) && !k, u.iframe !== !1 && (u.iframe || d) ? u.closeKeepAlive ? n.get(u.closeKeepAlive, function() { a = ft(o) }) : a = ft(o) : a = (tt || g) && k ? ot(o) : n.ajax(u), f.removeData("jqxhr").data("jqxhr", a), p = 0; p < c.length; p++) c[p] = null;
        return this.trigger("form-submit-notify", [this, u]), this }, n.fn.ajaxForm = function(i) {
        if (i = i || {}, i.delegation = i.delegation && n.isFunction(n.fn.on), !i.delegation && this.length === 0) {
            var r = { s: this.selector, c: this.context };
            return !n.isReady && r.s ? (t("DOM not ready, queuing ajaxForm"), n(function() { n(r.s, r.c).ajaxForm(i) }), this) : (t("terminating; zero elements found by selector" + (n.isReady ? "" : " (DOM not ready)")), this) }
        if (i.delegation) { n(document).off("submit.form-plugin", this.selector, u).off("click.form-plugin", this.selector, f).on("submit.form-plugin", this.selector, i, u).on("click.form-plugin", this.selector, i, f);
            return this }
        return this.ajaxFormUnbind().bind("submit.form-plugin", i, u).bind("click.form-plugin", i, f) }, n.fn.ajaxFormUnbind = function() {
        return this.unbind("submit.form-plugin click.form-plugin") }, n.fn.formToArray = function(t, r) {
        var e = [],
            o, c, l, s, f, h, u, p, w, a, y, v;
        if (this.length === 0 || (o = this[0], c = t ? o.getElementsByTagName("*") : o.elements, !c)) return e;
        for (l = 0, p = c.length; l < p; l++)
            if (u = c[l], f = u.name, f && !u.disabled) {
                if (t && o.clk && u.type == "image") { o.clk == u && (e.push({ name: f, value: n(u).val(), type: u.type }), e.push({ name: f + ".x", value: o.clk_x }, { name: f + ".y", value: o.clk_y }));
                    continue }
                if (h = n.fieldValue(u, !0), h && h.constructor == Array)
                    for (r && r.push(u), s = 0, w = h.length; s < w; s++) e.push({ name: f, value: h[s] });
                else if (i.fileapi && u.type == "file")
                    if (r && r.push(u), a = u.files, a.length)
                        for (s = 0; s < a.length; s++) e.push({ name: f, value: a[s], type: u.type });
                    else e.push({ name: f, value: "", type: u.type });
                else h !== null && typeof h != "undefined" && (r && r.push(u), e.push({ name: f, value: h, type: u.type, required: u.required })) }
        return !t && o.clk && (y = n(o.clk), v = y[0], f = v.name, f && !v.disabled && v.type == "image" && (e.push({ name: f, value: y.val() }), e.push({ name: f + ".x", value: o.clk_x }, { name: f + ".y", value: o.clk_y }))), e }, n.fn.formSerialize = function(t) {
        return n.param(this.formToArray(t)) }, n.fn.fieldSerialize = function(t) {
        var i = [];
        return this.each(function() {
            var f = this.name,
                r, u, e;
            if (f)
                if (r = n.fieldValue(this, t), r && r.constructor == Array)
                    for (u = 0, e = r.length; u < e; u++) i.push({ name: f, value: r[u] });
                else r !== null && typeof r != "undefined" && i.push({ name: this.name, value: r }) }), n.param(i) }, n.fn.fieldValue = function(t) {
        for (var f, i, r = [], u = 0, e = this.length; u < e; u++)(f = this[u], i = n.fieldValue(f, t), i !== null && typeof i != "undefined" && (i.constructor != Array || i.length)) && (i.constructor == Array ? n.merge(r, i) : r.push(i));
        return r }, n.fieldValue = function(t, i) {
        var a = t.name,
            u = t.type,
            h = t.tagName.toLowerCase(),
            e, o, r, f;
        if (i === undefined && (i = !0), i && (!a || t.disabled || u == "reset" || u == "button" || (u == "checkbox" || u == "radio") && !t.checked || (u == "submit" || u == "image") && t.form && t.form.clk != t || h == "select" && t.selectedIndex == -1)) return null;
        if (h == "select") {
            if (e = t.selectedIndex, e < 0) return null;
            var c = [],
                l = t.options,
                s = u == "select-one",
                v = s ? e + 1 : l.length;
            for (o = s ? e : 0; o < v; o++)
                if (r = l[o], r.selected) {
                    if (f = r.value, f || (f = r.attributes && r.attributes.value && !r.attributes.value.specified ? r.text : r.value), s) return f;
                    c.push(f) }
            return c }
        return n(t).val() }, n.fn.clearForm = function(t) {
        return this.each(function() { n("input,select,textarea", this).clearFields(t) }) }, n.fn.clearFields = n.fn.clearInputs = function(t) {
        var i = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var r = this.type,
                u = this.tagName.toLowerCase();
            i.test(r) || u == "textarea" ? this.value = "" : r == "checkbox" || r == "radio" ? this.checked = !1 : u == "select" ? this.selectedIndex = -1 : r == "file" ? /MSIE/.test(navigator.userAgent) ? n(this).replaceWith(n(this).clone(!0)) : n(this).val("") : t && (t === !0 && /hidden/.test(r) || typeof t == "string" && n(this).is(t)) && (this.value = "") }) }, n.fn.resetForm = function() {
        return this.each(function() { typeof this.reset != "function" && (typeof this.reset != "object" || this.reset.nodeType) || this.reset() }) }, n.fn.enable = function(n) {
        return n === undefined && (n = !0), this.each(function() { this.disabled = !n }) }, n.fn.selected = function(t) {
        return t === undefined && (t = !0), this.each(function() {
            var r = this.type,
                i;
            r == "checkbox" || r == "radio" ? this.checked = t : this.tagName.toLowerCase() == "option" && (i = n(this).parent("select"), t && i[0] && i[0].type == "select-one" && i.find("option").selected(!1), this.selected = t) }) }, n.fn.ajaxSubmit.debug = !1 }(typeof jQuery != "undefined" ? jQuery : window.Zepto);
var _hmt = _hmt || [];
(function() {
    var t = document.createElement("script"),
        n;
    t.src = "//hm.baidu.com/hm.js?76a190836f5b589efa6d0ef8f08817b8", n = document.getElementsByTagName("script")[0], n.parentNode.insertBefore(t, n) })()

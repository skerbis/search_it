!function (e) {
    e.suggest = function (t, s) {
        function l() {
            var e = C.offset();
            m.css({top: e.top + t.offsetHeight + "px", left: e.left + "px"})
        }

        function a(e) {
            if (/27$|38$|40$/.test(e.keyCode) && m.is(":visible") || /^13$|^9$/.test(e.keyCode) && o()) switch (e.preventDefault && e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0, e.returnValue = !1, e.keyCode) {
                case 38:
                    d();
                    break;
                case 40:
                    f();
                    break;
                case 9:
                case 13:
                    h();
                    break;
                case 27:
                    m.hide()
            } else C.val().length != v && (p && clearTimeout(p), p = setTimeout(n, s.delay), v = C.val().length)
        }

        function n() {
            var t = e.trim(C.val());
            t.length >= s.minchars ? (cached = r(t), cached ? i(cached.items) : e.get(s.source, {q: t}, function (e) {
                m.hide();
                var s = u(e, t);
                i(s), c(t, s, e.length)
            })) : m.hide()
        }

        function r(e) {
            for (var t = 0; t < g.length; t++) if (g[t].q == e) return g.unshift(g.splice(t, 1)[0]), g[0];
            return !1
        }

        function c(e, t, l) {
            for (; g.length && $ + l > s.maxCacheSize;) {
                var a = g.pop();
                $ -= a.size
            }
            g.push({q: e, size: l, items: t}), $ += l
        }

        function i(t) {
            if (t) {
                if (!t.length) return void m.hide();
                for (var l = "", a = 0; a < t.length; a++) l += "<li>" + t[a] + "</li>";
                m.html(l).show(), m.children("li").mouseover(function () {
                    m.children("li").removeClass(s.selectClass), e(this).addClass(s.selectClass)
                }).click(function (e) {
                    e.preventDefault(), e.stopPropagation(), h()
                })
            }
        }

        function u(t, l) {
            for (var a = [], n = t.split(s.delimiter), r = 0; r < n.length; r++) {
                var c = e.trim(n[r]);
                c && (c = c.replace(new RegExp(l, "ig"), function (e) {
                    return '<span class="' + s.matchClass + '">' + e + "</span>"
                }), a[a.length] = c)
            }
            return a
        }

        function o() {
            if (!m.is(":visible")) return !1;
            var e = m.children("li." + s.selectClass);
            return e.length || (e = !1), e
        }

        function h() {
            $currentResult = o(), $currentResult && (C.val($currentResult.text()), m.hide(), s.onSelect && s.onSelect.apply(C[0]))
        }

        function f() {
            $currentResult = o(), $currentResult ? $currentResult.removeClass(s.selectClass).next().addClass(s.selectClass) : m.children("li:first-child").addClass(s.selectClass)
        }

        function d() {
            $currentResult = o(), $currentResult ? $currentResult.removeClass(s.selectClass).prev().addClass(s.selectClass) : m.children("li:last-child").addClass(s.selectClass)
        }

        var C = e(t).attr("autocomplete", "off"), m = e(document.createElement("ul")), p = !1, v = 0, g = [], $ = 0;
        m.addClass(s.resultsClass).appendTo("body"), l(), e(window).on('load', l).resize(l), C.blur(function () {
            setTimeout(function () {
                m.hide()
            }, 200)
        });
        try {
            m.bgiframe()
        } catch (y) {
        }
        C.keypress(a)
    }, e.fn.suggest = function (t, s) {
        return t ? (s = s || {}, s.source = t, s.delay = s.delay || 100, s.resultsClass = s.resultsClass || "ac_results", s.selectClass = s.selectClass || "ac_over", s.matchClass = s.matchClass || "ac_match", s.minchars = s.minchars || 2, s.delimiter = s.delimiter || "\n", s.onSelect = s.onSelect || !1, s.maxCacheSize = s.maxCacheSize || 65536, this.each(function () {
            new e.suggest(this, s)
        }), this) : void 0
    }
}(jQuery);
!function (e) {
    e.suggest = function (t, s) {
        function l() {
            var e = C.offset();
            m.css({top: e.top + t.offsetHeight + "px", left: e.left + "px"})
        }

        function a(e) {
            if (/27$|38$|40$/.test(e.keyCode) && m.is(":visible") || /^13$|^9$/.test(e.keyCode) && o()) switch (e.preventDefault && e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0, e.returnValue = !1, e.keyCode) {
                case 38:
                    d();
                    break;
                case 40:
                    f();
                    break;
                case 9:
                case 13:
                    h();
                    break;
                case 27:
                    m.hide()
            } else C.val().length != v && (p && clearTimeout(p), p = setTimeout(n, s.delay), v = C.val().length)
        }

        function n() {
            var t = e.trim(C.val());
            t.length >= s.minchars ? (cached = r(t), cached ? i(cached.items) : e.get(s.source, {q: t}, function (e) {
                m.hide();
                var s = u(e, t);
                i(s), c(t, s, e.length)
            })) : m.hide()
        }

        function r(e) {
            for (var t = 0; t < g.length; t++) if (g[t].q == e) return g.unshift(g.splice(t, 1)[0]), g[0];
            return !1
        }

        function c(e, t, l) {
            for (; g.length && $ + l > s.maxCacheSize;) {
                var a = g.pop();
                $ -= a.size
            }
            g.push({q: e, size: l, items: t}), $ += l
        }

        function i(t) {
            if (t) {
                if (!t.length) return void m.hide();
                for (var l = "", a = 0; a < t.length; a++) l += "<li>" + t[a] + "</li>";
                m.html(l).show(), m.children("li").mouseover(function () {
                    m.children("li").removeClass(s.selectClass), e(this).addClass(s.selectClass)
                }).click(function (e) {
                    e.preventDefault(), e.stopPropagation(), h()
                })
            }
        }

        function u(t, l) {
            for (var a = [], n = t.split(s.delimiter), r = 0; r < n.length; r++) {
                var c = e.trim(n[r]);
                c && (c = c.replace(new RegExp(l, "ig"), function (e) {
                    return '<span class="' + s.matchClass + '">' + e + "</span>"
                }), a[a.length] = c)
            }
            return a
        }

        function o() {
            if (!m.is(":visible")) return !1;
            var e = m.children("li." + s.selectClass);
            return e.length || (e = !1), e
        }

        function h() {
            $currentResult = o(), $currentResult && (C.val($currentResult.text()), m.hide(), s.onSelect && s.onSelect.apply(C[0]))
        }

        function f() {
            $currentResult = o(), $currentResult ? $currentResult.removeClass(s.selectClass).next().addClass(s.selectClass) : m.children("li:first-child").addClass(s.selectClass)
        }

        function d() {
            $currentResult = o(), $currentResult ? $currentResult.removeClass(s.selectClass).prev().addClass(s.selectClass) : m.children("li:last-child").addClass(s.selectClass)
        }

        var C = e(t).attr("autocomplete", "off"), m = e(document.createElement("ul")), p = !1, v = 0, g = [], $ = 0;
        m.addClass(s.resultsClass).appendTo("body"), l(), e(window).on('load', l).resize(l), C.blur(function () {
            setTimeout(function () {
                m.hide()
            }, 200)
        });
        try {
            m.bgiframe()
        } catch (y) {
        }
        C.keypress(a)
    }, e.fn.suggest = function (t, s) {
        return t ? (s = s || {}, s.source = t, s.delay = s.delay || 100, s.resultsClass = s.resultsClass || "ac_results", s.selectClass = s.selectClass || "ac_over", s.matchClass = s.matchClass || "ac_match", s.minchars = s.minchars || 2, s.delimiter = s.delimiter || "\n", s.onSelect = s.onSelect || !1, s.maxCacheSize = s.maxCacheSize || 65536, this.each(function () {
            new e.suggest(this, s)
        }), this) : void 0
    }
}(jQuery);

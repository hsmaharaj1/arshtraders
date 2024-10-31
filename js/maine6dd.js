/*! For license information please see main.js.LICENSE.txt */ ! function(t) {
    var e = {};

    function n(i) {
        if (e[i]) return e[i].exports;
        var r = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) n.d(i, r, function(e) {
                return t[e]
            }.bind(null, r));
        return i
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "/", n(n.s = 0)
}([function(t, e, n) {
    n(3), t.exports = n(4)
}, function(t, e, n) {
    var i;
    ! function(e, n) {
        "use strict";
        "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return n(t)
        } : n(e)
    }("undefined" != typeof window ? window : this, (function(n, r) {
        "use strict";
        var o = [],
            s = Object.getPrototypeOf,
            a = o.slice,
            l = o.flat ? function(t) {
                return o.flat.call(t)
            } : function(t) {
                return o.concat.apply([], t)
            },
            u = o.push,
            c = o.indexOf,
            f = {},
            d = f.toString,
            h = f.hasOwnProperty,
            p = h.toString,
            g = p.call(Object),
            m = {},
            v = function(t) {
                return "function" == typeof t && "number" != typeof t.nodeType
            },
            y = function(t) {
                return null != t && t === t.window
            },
            b = n.document,
            x = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };

        function w(t, e, n) {
            var i, r, o = (n = n || b).createElement("script");
            if (o.text = t, e)
                for (i in x)(r = e[i] || e.getAttribute && e.getAttribute(i)) && o.setAttribute(i, r);
            n.head.appendChild(o).parentNode.removeChild(o)
        }

        function _(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? f[d.call(t)] || "object" : typeof t
        }
        var T = function(t, e) {
            return new T.fn.init(t, e)
        };

        function C(t) {
            var e = !!t && "length" in t && t.length,
                n = _(t);
            return !v(t) && !y(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }
        T.fn = T.prototype = {
            jquery: "3.5.1",
            constructor: T,
            length: 0,
            toArray: function() {
                return a.call(this)
            },
            get: function(t) {
                return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t]
            },
            pushStack: function(t) {
                var e = T.merge(this.constructor(), t);
                return e.prevObject = this, e
            },
            each: function(t) {
                return T.each(this, t)
            },
            map: function(t) {
                return this.pushStack(T.map(this, (function(e, n) {
                    return t.call(e, n, e)
                })))
            },
            slice: function() {
                return this.pushStack(a.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            even: function() {
                return this.pushStack(T.grep(this, (function(t, e) {
                    return (e + 1) % 2
                })))
            },
            odd: function() {
                return this.pushStack(T.grep(this, (function(t, e) {
                    return e % 2
                })))
            },
            eq: function(t) {
                var e = this.length,
                    n = +t + (t < 0 ? e : 0);
                return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: u,
            sort: o.sort,
            splice: o.splice
        }, T.extend = T.fn.extend = function() {
            var t, e, n, i, r, o, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || v(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
                if (null != (t = arguments[a]))
                    for (e in t) i = t[e], "__proto__" !== e && s !== i && (u && i && (T.isPlainObject(i) || (r = Array.isArray(i))) ? (n = s[e], o = r && !Array.isArray(n) ? [] : r || T.isPlainObject(n) ? n : {}, r = !1, s[e] = T.extend(u, o, i)) : void 0 !== i && (s[e] = i));
            return s
        }, T.extend({
            expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isPlainObject: function(t) {
                var e, n;
                return !(!t || "[object Object]" !== d.call(t)) && (!(e = s(t)) || "function" == typeof(n = h.call(e, "constructor") && e.constructor) && p.call(n) === g)
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            globalEval: function(t, e, n) {
                w(t, {
                    nonce: e && e.nonce
                }, n)
            },
            each: function(t, e) {
                var n, i = 0;
                if (C(t))
                    for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
                else
                    for (i in t)
                        if (!1 === e.call(t[i], i, t[i])) break;
                return t
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (C(Object(t)) ? T.merge(n, "string" == typeof t ? [t] : t) : u.call(n, t)), n
            },
            inArray: function(t, e, n) {
                return null == e ? -1 : c.call(e, t, n)
            },
            merge: function(t, e) {
                for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
                return t.length = r, t
            },
            grep: function(t, e, n) {
                for (var i = [], r = 0, o = t.length, s = !n; r < o; r++) !e(t[r], r) !== s && i.push(t[r]);
                return i
            },
            map: function(t, e, n) {
                var i, r, o = 0,
                    s = [];
                if (C(t))
                    for (i = t.length; o < i; o++) null != (r = e(t[o], o, n)) && s.push(r);
                else
                    for (o in t) null != (r = e(t[o], o, n)) && s.push(r);
                return l(s)
            },
            guid: 1,
            support: m
        }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = o[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(t, e) {
            f["[object " + e + "]"] = e.toLowerCase()
        }));
        var S = function(t) {
            var e, n, i, r, o, s, a, l, u, c, f, d, h, p, g, m, v, y, b, x = "sizzle" + 1 * new Date,
                w = t.document,
                _ = 0,
                T = 0,
                C = lt(),
                S = lt(),
                k = lt(),
                A = lt(),
                P = function(t, e) {
                    return t === e && (f = !0), 0
                },
                E = {}.hasOwnProperty,
                M = [],
                L = M.pop,
                D = M.push,
                O = M.push,
                $ = M.slice,
                R = function(t, e) {
                    for (var n = 0, i = t.length; n < i; n++)
                        if (t[n] === e) return n;
                    return -1
                },
                N = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                H = "[\\x20\\t\\r\\n\\f]",
                j = "(?:\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                I = "\\[" + H + "*(" + j + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + j + "))|)" + H + "*\\]",
                F = ":(" + j + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
                z = new RegExp(H + "+", "g"),
                q = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
                B = new RegExp("^" + H + "*," + H + "*"),
                W = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
                X = new RegExp(H + "|>"),
                Y = new RegExp(F),
                V = new RegExp("^" + j + "$"),
                U = {
                    ID: new RegExp("^#(" + j + ")"),
                    CLASS: new RegExp("^\\.(" + j + ")"),
                    TAG: new RegExp("^(" + j + "|[*])"),
                    ATTR: new RegExp("^" + I),
                    PSEUDO: new RegExp("^" + F),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + N + ")$", "i"),
                    needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
                },
                G = /HTML$/i,
                Q = /^(?:input|select|textarea|button)$/i,
                K = /^h\d$/i,
                Z = /^[^{]+\{\s*\[native \w/,
                J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                tt = /[+~]/,
                et = new RegExp("\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\([^\\r\\n\\f])", "g"),
                nt = function(t, e) {
                    var n = "0x" + t.slice(1) - 65536;
                    return e || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                },
                it = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                rt = function(t, e) {
                    return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                },
                ot = function() {
                    d()
                },
                st = xt((function(t) {
                    return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
                }), {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                O.apply(M = $.call(w.childNodes), w.childNodes), M[w.childNodes.length].nodeType
            } catch (t) {
                O = {
                    apply: M.length ? function(t, e) {
                        D.apply(t, $.call(e))
                    } : function(t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }

            function at(t, e, i, r) {
                var o, a, u, c, f, p, v, y = e && e.ownerDocument,
                    w = e ? e.nodeType : 9;
                if (i = i || [], "string" != typeof t || !t || 1 !== w && 9 !== w && 11 !== w) return i;
                if (!r && (d(e), e = e || h, g)) {
                    if (11 !== w && (f = J.exec(t)))
                        if (o = f[1]) {
                            if (9 === w) {
                                if (!(u = e.getElementById(o))) return i;
                                if (u.id === o) return i.push(u), i
                            } else if (y && (u = y.getElementById(o)) && b(e, u) && u.id === o) return i.push(u), i
                        } else {
                            if (f[2]) return O.apply(i, e.getElementsByTagName(t)), i;
                            if ((o = f[3]) && n.getElementsByClassName && e.getElementsByClassName) return O.apply(i, e.getElementsByClassName(o)), i
                        } if (n.qsa && !A[t + " "] && (!m || !m.test(t)) && (1 !== w || "object" !== e.nodeName.toLowerCase())) {
                        if (v = t, y = e, 1 === w && (X.test(t) || W.test(t))) {
                            for ((y = tt.test(t) && vt(e.parentNode) || e) === e && n.scope || ((c = e.getAttribute("id")) ? c = c.replace(it, rt) : e.setAttribute("id", c = x)), a = (p = s(t)).length; a--;) p[a] = (c ? "#" + c : ":scope") + " " + bt(p[a]);
                            v = p.join(",")
                        }
                        try {
                            return O.apply(i, y.querySelectorAll(v)), i
                        } catch (e) {
                            A(t, !0)
                        } finally {
                            c === x && e.removeAttribute("id")
                        }
                    }
                }
                return l(t.replace(q, "$1"), e, i, r)
            }

            function lt() {
                var t = [];
                return function e(n, r) {
                    return t.push(n + " ") > i.cacheLength && delete e[t.shift()], e[n + " "] = r
                }
            }

            function ut(t) {
                return t[x] = !0, t
            }

            function ct(t) {
                var e = h.createElement("fieldset");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function ft(t, e) {
                for (var n = t.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = e
            }

            function dt(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function ht(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }

            function pt(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }

            function gt(t) {
                return function(e) {
                    return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && st(e) === t : e.disabled === t : "label" in e && e.disabled === t
                }
            }

            function mt(t) {
                return ut((function(e) {
                    return e = +e, ut((function(n, i) {
                        for (var r, o = t([], n.length, e), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                    }))
                }))
            }

            function vt(t) {
                return t && void 0 !== t.getElementsByTagName && t
            }
            for (e in n = at.support = {}, o = at.isXML = function(t) {
                    var e = t.namespaceURI,
                        n = (t.ownerDocument || t).documentElement;
                    return !G.test(e || n && n.nodeName || "HTML")
                }, d = at.setDocument = function(t) {
                    var e, r, s = t ? t.ownerDocument || t : w;
                    return s != h && 9 === s.nodeType && s.documentElement ? (p = (h = s).documentElement, g = !o(h), w != h && (r = h.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ot, !1) : r.attachEvent && r.attachEvent("onunload", ot)), n.scope = ct((function(t) {
                        return p.appendChild(t).appendChild(h.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length
                    })), n.attributes = ct((function(t) {
                        return t.className = "i", !t.getAttribute("className")
                    })), n.getElementsByTagName = ct((function(t) {
                        return t.appendChild(h.createComment("")), !t.getElementsByTagName("*").length
                    })), n.getElementsByClassName = Z.test(h.getElementsByClassName), n.getById = ct((function(t) {
                        return p.appendChild(t).id = x, !h.getElementsByName || !h.getElementsByName(x).length
                    })), n.getById ? (i.filter.ID = function(t) {
                        var e = t.replace(et, nt);
                        return function(t) {
                            return t.getAttribute("id") === e
                        }
                    }, i.find.ID = function(t, e) {
                        if (void 0 !== e.getElementById && g) {
                            var n = e.getElementById(t);
                            return n ? [n] : []
                        }
                    }) : (i.filter.ID = function(t) {
                        var e = t.replace(et, nt);
                        return function(t) {
                            var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                            return n && n.value === e
                        }
                    }, i.find.ID = function(t, e) {
                        if (void 0 !== e.getElementById && g) {
                            var n, i, r, o = e.getElementById(t);
                            if (o) {
                                if ((n = o.getAttributeNode("id")) && n.value === t) return [o];
                                for (r = e.getElementsByName(t), i = 0; o = r[i++];)
                                    if ((n = o.getAttributeNode("id")) && n.value === t) return [o]
                            }
                            return []
                        }
                    }), i.find.TAG = n.getElementsByTagName ? function(t, e) {
                        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
                    } : function(t, e) {
                        var n, i = [],
                            r = 0,
                            o = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return o
                    }, i.find.CLASS = n.getElementsByClassName && function(t, e) {
                        if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t)
                    }, v = [], m = [], (n.qsa = Z.test(h.querySelectorAll)) && (ct((function(t) {
                        var e;
                        p.appendChild(t).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + H + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[" + H + "*(?:value|" + N + ")"), t.querySelectorAll("[id~=" + x + "-]").length || m.push("~="), (e = h.createElement("input")).setAttribute("name", ""), t.appendChild(e), t.querySelectorAll("[name='']").length || m.push("\\[" + H + "*name" + H + "*=" + H + "*(?:''|\"\")"), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + x + "+*").length || m.push(".#.+[+~]"), t.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
                    })), ct((function(t) {
                        t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var e = h.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name" + H + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:")
                    }))), (n.matchesSelector = Z.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ct((function(t) {
                        n.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), v.push("!=", F)
                    })), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), e = Z.test(p.compareDocumentPosition), b = e || Z.test(p.contains) ? function(t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t,
                            i = e && e.parentNode;
                        return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                    } : function(t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, P = e ? function(t, e) {
                        if (t === e) return f = !0, 0;
                        var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return i || (1 & (i = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t == h || t.ownerDocument == w && b(w, t) ? -1 : e == h || e.ownerDocument == w && b(w, e) ? 1 : c ? R(c, t) - R(c, e) : 0 : 4 & i ? -1 : 1)
                    } : function(t, e) {
                        if (t === e) return f = !0, 0;
                        var n, i = 0,
                            r = t.parentNode,
                            o = e.parentNode,
                            s = [t],
                            a = [e];
                        if (!r || !o) return t == h ? -1 : e == h ? 1 : r ? -1 : o ? 1 : c ? R(c, t) - R(c, e) : 0;
                        if (r === o) return dt(t, e);
                        for (n = t; n = n.parentNode;) s.unshift(n);
                        for (n = e; n = n.parentNode;) a.unshift(n);
                        for (; s[i] === a[i];) i++;
                        return i ? dt(s[i], a[i]) : s[i] == w ? -1 : a[i] == w ? 1 : 0
                    }, h) : h
                }, at.matches = function(t, e) {
                    return at(t, null, null, e)
                }, at.matchesSelector = function(t, e) {
                    if (d(t), n.matchesSelector && g && !A[e + " "] && (!v || !v.test(e)) && (!m || !m.test(e))) try {
                        var i = y.call(t, e);
                        if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                    } catch (t) {
                        A(e, !0)
                    }
                    return at(e, h, null, [t]).length > 0
                }, at.contains = function(t, e) {
                    return (t.ownerDocument || t) != h && d(t), b(t, e)
                }, at.attr = function(t, e) {
                    (t.ownerDocument || t) != h && d(t);
                    var r = i.attrHandle[e.toLowerCase()],
                        o = r && E.call(i.attrHandle, e.toLowerCase()) ? r(t, e, !g) : void 0;
                    return void 0 !== o ? o : n.attributes || !g ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
                }, at.escape = function(t) {
                    return (t + "").replace(it, rt)
                }, at.error = function(t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, at.uniqueSort = function(t) {
                    var e, i = [],
                        r = 0,
                        o = 0;
                    if (f = !n.detectDuplicates, c = !n.sortStable && t.slice(0), t.sort(P), f) {
                        for (; e = t[o++];) e === t[o] && (r = i.push(o));
                        for (; r--;) t.splice(i[r], 1)
                    }
                    return c = null, t
                }, r = at.getText = function(t) {
                    var e, n = "",
                        i = 0,
                        o = t.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) n += r(t)
                        } else if (3 === o || 4 === o) return t.nodeValue
                    } else
                        for (; e = t[i++];) n += r(e);
                    return n
                }, (i = at.selectors = {
                    cacheLength: 50,
                    createPseudo: ut,
                    match: U,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(t) {
                            return t[1] = t[1].replace(et, nt), t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || at.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && at.error(t[0]), t
                        },
                        PSEUDO: function(t) {
                            var e, n = !t[6] && t[2];
                            return U.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && Y.test(n) && (e = s(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            var e = t.replace(et, nt).toLowerCase();
                            return "*" === t ? function() {
                                return !0
                            } : function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function(t) {
                            var e = C[t + " "];
                            return e || (e = new RegExp("(^|" + H + ")" + t + "(" + H + "|$)")) && C(t, (function(t) {
                                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                            }))
                        },
                        ATTR: function(t, e, n) {
                            return function(i) {
                                var r = at.attr(i, t);
                                return null == r ? "!=" === e : !e || (r += "", "=" === e ? r === n : "!=" === e ? r !== n : "^=" === e ? n && 0 === r.indexOf(n) : "*=" === e ? n && r.indexOf(n) > -1 : "$=" === e ? n && r.slice(-n.length) === n : "~=" === e ? (" " + r.replace(z, " ") + " ").indexOf(n) > -1 : "|=" === e && (r === n || r.slice(0, n.length + 1) === n + "-"))
                            }
                        },
                        CHILD: function(t, e, n, i, r) {
                            var o = "nth" !== t.slice(0, 3),
                                s = "last" !== t.slice(-4),
                                a = "of-type" === e;
                            return 1 === i && 0 === r ? function(t) {
                                return !!t.parentNode
                            } : function(e, n, l) {
                                var u, c, f, d, h, p, g = o !== s ? "nextSibling" : "previousSibling",
                                    m = e.parentNode,
                                    v = a && e.nodeName.toLowerCase(),
                                    y = !l && !a,
                                    b = !1;
                                if (m) {
                                    if (o) {
                                        for (; g;) {
                                            for (d = e; d = d[g];)
                                                if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                            p = g = "only" === t && !p && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (p = [s ? m.firstChild : m.lastChild], s && y) {
                                        for (b = (h = (u = (c = (f = (d = m)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[t] || [])[0] === _ && u[1]) && u[2], d = h && m.childNodes[h]; d = ++h && d && d[g] || (b = h = 0) || p.pop();)
                                            if (1 === d.nodeType && ++b && d === e) {
                                                c[t] = [_, h, b];
                                                break
                                            }
                                    } else if (y && (b = h = (u = (c = (f = (d = e)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[t] || [])[0] === _ && u[1]), !1 === b)
                                        for (;
                                            (d = ++h && d && d[g] || (b = h = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((c = (f = d[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[t] = [_, b]), d !== e)););
                                    return (b -= r) === i || b % i == 0 && b / i >= 0
                                }
                            }
                        },
                        PSEUDO: function(t, e) {
                            var n, r = i.pseudos[t] || i.setFilters[t.toLowerCase()] || at.error("unsupported pseudo: " + t);
                            return r[x] ? r(e) : r.length > 1 ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? ut((function(t, n) {
                                for (var i, o = r(t, e), s = o.length; s--;) t[i = R(t, o[s])] = !(n[i] = o[s])
                            })) : function(t) {
                                return r(t, 0, n)
                            }) : r
                        }
                    },
                    pseudos: {
                        not: ut((function(t) {
                            var e = [],
                                n = [],
                                i = a(t.replace(q, "$1"));
                            return i[x] ? ut((function(t, e, n, r) {
                                for (var o, s = i(t, null, r, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                            })) : function(t, r, o) {
                                return e[0] = t, i(e, null, o, n), e[0] = null, !n.pop()
                            }
                        })),
                        has: ut((function(t) {
                            return function(e) {
                                return at(t, e).length > 0
                            }
                        })),
                        contains: ut((function(t) {
                            return t = t.replace(et, nt),
                                function(e) {
                                    return (e.textContent || r(e)).indexOf(t) > -1
                                }
                        })),
                        lang: ut((function(t) {
                            return V.test(t || "") || at.error("unsupported lang: " + t), t = t.replace(et, nt).toLowerCase(),
                                function(e) {
                                    var n;
                                    do {
                                        if (n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        })),
                        target: function(e) {
                            var n = t.location && t.location.hash;
                            return n && n.slice(1) === e.id
                        },
                        root: function(t) {
                            return t === p
                        },
                        focus: function(t) {
                            return t === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: gt(!1),
                        disabled: gt(!0),
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(t) {
                            return !i.pseudos.empty(t)
                        },
                        header: function(t) {
                            return K.test(t.nodeName)
                        },
                        input: function(t) {
                            return Q.test(t.nodeName)
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function(t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        },
                        first: mt((function() {
                            return [0]
                        })),
                        last: mt((function(t, e) {
                            return [e - 1]
                        })),
                        eq: mt((function(t, e, n) {
                            return [n < 0 ? n + e : n]
                        })),
                        even: mt((function(t, e) {
                            for (var n = 0; n < e; n += 2) t.push(n);
                            return t
                        })),
                        odd: mt((function(t, e) {
                            for (var n = 1; n < e; n += 2) t.push(n);
                            return t
                        })),
                        lt: mt((function(t, e, n) {
                            for (var i = n < 0 ? n + e : n > e ? e : n; --i >= 0;) t.push(i);
                            return t
                        })),
                        gt: mt((function(t, e, n) {
                            for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                            return t
                        }))
                    }
                }).pseudos.nth = i.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) i.pseudos[e] = ht(e);
            for (e in {
                    submit: !0,
                    reset: !0
                }) i.pseudos[e] = pt(e);

            function yt() {}

            function bt(t) {
                for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
                return i
            }

            function xt(t, e, n) {
                var i = e.dir,
                    r = e.next,
                    o = r || i,
                    s = n && "parentNode" === o,
                    a = T++;
                return e.first ? function(e, n, r) {
                    for (; e = e[i];)
                        if (1 === e.nodeType || s) return t(e, n, r);
                    return !1
                } : function(e, n, l) {
                    var u, c, f, d = [_, a];
                    if (l) {
                        for (; e = e[i];)
                            if ((1 === e.nodeType || s) && t(e, n, l)) return !0
                    } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || s)
                                if (c = (f = e[x] || (e[x] = {}))[e.uniqueID] || (f[e.uniqueID] = {}), r && r === e.nodeName.toLowerCase()) e = e[i] || e;
                                else {
                                    if ((u = c[o]) && u[0] === _ && u[1] === a) return d[2] = u[2];
                                    if (c[o] = d, d[2] = t(e, n, l)) return !0
                                } return !1
                }
            }

            function wt(t) {
                return t.length > 1 ? function(e, n, i) {
                    for (var r = t.length; r--;)
                        if (!t[r](e, n, i)) return !1;
                    return !0
                } : t[0]
            }

            function _t(t, e, n, i, r) {
                for (var o, s = [], a = 0, l = t.length, u = null != e; a < l; a++)(o = t[a]) && (n && !n(o, i, r) || (s.push(o), u && e.push(a)));
                return s
            }

            function Tt(t, e, n, i, r, o) {
                return i && !i[x] && (i = Tt(i)), r && !r[x] && (r = Tt(r, o)), ut((function(o, s, a, l) {
                    var u, c, f, d = [],
                        h = [],
                        p = s.length,
                        g = o || function(t, e, n) {
                            for (var i = 0, r = e.length; i < r; i++) at(t, e[i], n);
                            return n
                        }(e || "*", a.nodeType ? [a] : a, []),
                        m = !t || !o && e ? g : _t(g, d, t, a, l),
                        v = n ? r || (o ? t : p || i) ? [] : s : m;
                    if (n && n(m, v, a, l), i)
                        for (u = _t(v, h), i(u, [], a, l), c = u.length; c--;)(f = u[c]) && (v[h[c]] = !(m[h[c]] = f));
                    if (o) {
                        if (r || t) {
                            if (r) {
                                for (u = [], c = v.length; c--;)(f = v[c]) && u.push(m[c] = f);
                                r(null, v = [], u, l)
                            }
                            for (c = v.length; c--;)(f = v[c]) && (u = r ? R(o, f) : d[c]) > -1 && (o[u] = !(s[u] = f))
                        }
                    } else v = _t(v === s ? v.splice(p, v.length) : v), r ? r(null, s, v, l) : O.apply(s, v)
                }))
            }

            function Ct(t) {
                for (var e, n, r, o = t.length, s = i.relative[t[0].type], a = s || i.relative[" "], l = s ? 1 : 0, c = xt((function(t) {
                        return t === e
                    }), a, !0), f = xt((function(t) {
                        return R(e, t) > -1
                    }), a, !0), d = [function(t, n, i) {
                        var r = !s && (i || n !== u) || ((e = n).nodeType ? c(t, n, i) : f(t, n, i));
                        return e = null, r
                    }]; l < o; l++)
                    if (n = i.relative[t[l].type]) d = [xt(wt(d), n)];
                    else {
                        if ((n = i.filter[t[l].type].apply(null, t[l].matches))[x]) {
                            for (r = ++l; r < o && !i.relative[t[r].type]; r++);
                            return Tt(l > 1 && wt(d), l > 1 && bt(t.slice(0, l - 1).concat({
                                value: " " === t[l - 2].type ? "*" : ""
                            })).replace(q, "$1"), n, l < r && Ct(t.slice(l, r)), r < o && Ct(t = t.slice(r)), r < o && bt(t))
                        }
                        d.push(n)
                    } return wt(d)
            }
            return yt.prototype = i.filters = i.pseudos, i.setFilters = new yt, s = at.tokenize = function(t, e) {
                var n, r, o, s, a, l, u, c = S[t + " "];
                if (c) return e ? 0 : c.slice(0);
                for (a = t, l = [], u = i.preFilter; a;) {
                    for (s in n && !(r = B.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = W.exec(a)) && (n = r.shift(), o.push({
                            value: n,
                            type: r[0].replace(q, " ")
                        }), a = a.slice(n.length)), i.filter) !(r = U[s].exec(a)) || u[s] && !(r = u[s](r)) || (n = r.shift(), o.push({
                        value: n,
                        type: s,
                        matches: r
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return e ? a.length : a ? at.error(t) : S(t, l).slice(0)
            }, a = at.compile = function(t, e) {
                var n, r = [],
                    o = [],
                    a = k[t + " "];
                if (!a) {
                    for (e || (e = s(t)), n = e.length; n--;)(a = Ct(e[n]))[x] ? r.push(a) : o.push(a);
                    (a = k(t, function(t, e) {
                        var n = e.length > 0,
                            r = t.length > 0,
                            o = function(o, s, a, l, c) {
                                var f, p, m, v = 0,
                                    y = "0",
                                    b = o && [],
                                    x = [],
                                    w = u,
                                    T = o || r && i.find.TAG("*", c),
                                    C = _ += null == w ? 1 : Math.random() || .1,
                                    S = T.length;
                                for (c && (u = s == h || s || c); y !== S && null != (f = T[y]); y++) {
                                    if (r && f) {
                                        for (p = 0, s || f.ownerDocument == h || (d(f), a = !g); m = t[p++];)
                                            if (m(f, s || h, a)) {
                                                l.push(f);
                                                break
                                            } c && (_ = C)
                                    }
                                    n && ((f = !m && f) && v--, o && b.push(f))
                                }
                                if (v += y, n && y !== v) {
                                    for (p = 0; m = e[p++];) m(b, x, s, a);
                                    if (o) {
                                        if (v > 0)
                                            for (; y--;) b[y] || x[y] || (x[y] = L.call(l));
                                        x = _t(x)
                                    }
                                    O.apply(l, x), c && !o && x.length > 0 && v + e.length > 1 && at.uniqueSort(l)
                                }
                                return c && (_ = C, u = w), b
                            };
                        return n ? ut(o) : o
                    }(o, r))).selector = t
                }
                return a
            }, l = at.select = function(t, e, n, r) {
                var o, l, u, c, f, d = "function" == typeof t && t,
                    h = !r && s(t = d.selector || t);
                if (n = n || [], 1 === h.length) {
                    if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === e.nodeType && g && i.relative[l[1].type]) {
                        if (!(e = (i.find.ID(u.matches[0].replace(et, nt), e) || [])[0])) return n;
                        d && (e = e.parentNode), t = t.slice(l.shift().value.length)
                    }
                    for (o = U.needsContext.test(t) ? 0 : l.length; o-- && (u = l[o], !i.relative[c = u.type]);)
                        if ((f = i.find[c]) && (r = f(u.matches[0].replace(et, nt), tt.test(l[0].type) && vt(e.parentNode) || e))) {
                            if (l.splice(o, 1), !(t = r.length && bt(l))) return O.apply(n, r), n;
                            break
                        }
                }
                return (d || a(t, h))(r, e, !g, n, !e || tt.test(t) && vt(e.parentNode) || e), n
            }, n.sortStable = x.split("").sort(P).join("") === x, n.detectDuplicates = !!f, d(), n.sortDetached = ct((function(t) {
                return 1 & t.compareDocumentPosition(h.createElement("fieldset"))
            })), ct((function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            })) || ft("type|href|height|width", (function(t, e, n) {
                if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            })), n.attributes && ct((function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            })) || ft("value", (function(t, e, n) {
                if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
            })), ct((function(t) {
                return null == t.getAttribute("disabled")
            })) || ft(N, (function(t, e, n) {
                var i;
                if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            })), at
        }(n);
        T.find = S, T.expr = S.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = S.uniqueSort, T.text = S.getText, T.isXMLDoc = S.isXML, T.contains = S.contains, T.escapeSelector = S.escape;
        var k = function(t, e, n) {
                for (var i = [], r = void 0 !== n;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (r && T(t).is(n)) break;
                        i.push(t)
                    } return i
            },
            A = function(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            },
            P = T.expr.match.needsContext;

        function E(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }
        var M = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function L(t, e, n) {
            return v(e) ? T.grep(t, (function(t, i) {
                return !!e.call(t, i, t) !== n
            })) : e.nodeType ? T.grep(t, (function(t) {
                return t === e !== n
            })) : "string" != typeof e ? T.grep(t, (function(t) {
                return c.call(e, t) > -1 !== n
            })) : T.filter(e, t, n)
        }
        T.filter = function(t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? T.find.matchesSelector(i, t) ? [i] : [] : T.find.matches(t, T.grep(e, (function(t) {
                return 1 === t.nodeType
            })))
        }, T.fn.extend({
            find: function(t) {
                var e, n, i = this.length,
                    r = this;
                if ("string" != typeof t) return this.pushStack(T(t).filter((function() {
                    for (e = 0; e < i; e++)
                        if (T.contains(r[e], this)) return !0
                })));
                for (n = this.pushStack([]), e = 0; e < i; e++) T.find(t, r[e], n);
                return i > 1 ? T.uniqueSort(n) : n
            },
            filter: function(t) {
                return this.pushStack(L(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(L(this, t || [], !0))
            },
            is: function(t) {
                return !!L(this, "string" == typeof t && P.test(t) ? T(t) : t || [], !1).length
            }
        });
        var D, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (T.fn.init = function(t, e, n) {
            var i, r;
            if (!t) return this;
            if (n = n || D, "string" == typeof t) {
                if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : O.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof T ? e[0] : e, T.merge(this, T.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : b, !0)), M.test(i[1]) && T.isPlainObject(e))
                        for (i in e) v(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return (r = b.getElementById(i[2])) && (this[0] = r, this.length = 1), this
            }
            return t.nodeType ? (this[0] = t, this.length = 1, this) : v(t) ? void 0 !== n.ready ? n.ready(t) : t(T) : T.makeArray(t, this)
        }).prototype = T.fn, D = T(b);
        var $ = /^(?:parents|prev(?:Until|All))/,
            R = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function N(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }
        T.fn.extend({
            has: function(t) {
                var e = T(t, this),
                    n = e.length;
                return this.filter((function() {
                    for (var t = 0; t < n; t++)
                        if (T.contains(this, e[t])) return !0
                }))
            },
            closest: function(t, e) {
                var n, i = 0,
                    r = this.length,
                    o = [],
                    s = "string" != typeof t && T(t);
                if (!P.test(t))
                    for (; i < r; i++)
                        for (n = this[i]; n && n !== e; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && T.find.matchesSelector(n, t))) {
                                o.push(n);
                                break
                            } return this.pushStack(o.length > 1 ? T.uniqueSort(o) : o)
            },
            index: function(t) {
                return t ? "string" == typeof t ? c.call(T(t), this[0]) : c.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(T.uniqueSort(T.merge(this.get(), T(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), T.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return k(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return k(t, "parentNode", n)
            },
            next: function(t) {
                return N(t, "nextSibling")
            },
            prev: function(t) {
                return N(t, "previousSibling")
            },
            nextAll: function(t) {
                return k(t, "nextSibling")
            },
            prevAll: function(t) {
                return k(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return k(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return k(t, "previousSibling", n)
            },
            siblings: function(t) {
                return A((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return A(t.firstChild)
            },
            contents: function(t) {
                return null != t.contentDocument && s(t.contentDocument) ? t.contentDocument : (E(t, "template") && (t = t.content || t), T.merge([], t.childNodes))
            }
        }, (function(t, e) {
            T.fn[t] = function(n, i) {
                var r = T.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = T.filter(i, r)), this.length > 1 && (R[t] || T.uniqueSort(r), $.test(t) && r.reverse()), this.pushStack(r)
            }
        }));
        var H = /[^\x20\t\r\n\f]+/g;

        function j(t) {
            return t
        }

        function I(t) {
            throw t
        }

        function F(t, e, n, i) {
            var r;
            try {
                t && v(r = t.promise) ? r.call(t).done(e).fail(n) : t && v(r = t.then) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i))
            } catch (t) {
                n.apply(void 0, [t])
            }
        }
        T.Callbacks = function(t) {
            t = "string" == typeof t ? function(t) {
                var e = {};
                return T.each(t.match(H) || [], (function(t, n) {
                    e[n] = !0
                })), e
            }(t) : T.extend({}, t);
            var e, n, i, r, o = [],
                s = [],
                a = -1,
                l = function() {
                    for (r = r || t.once, i = e = !0; s.length; a = -1)
                        for (n = s.shift(); ++a < o.length;) !1 === o[a].apply(n[0], n[1]) && t.stopOnFalse && (a = o.length, n = !1);
                    t.memory || (n = !1), e = !1, r && (o = n ? [] : "")
                },
                u = {
                    add: function() {
                        return o && (n && !e && (a = o.length - 1, s.push(n)), function e(n) {
                            T.each(n, (function(n, i) {
                                v(i) ? t.unique && u.has(i) || o.push(i) : i && i.length && "string" !== _(i) && e(i)
                            }))
                        }(arguments), n && !e && l()), this
                    },
                    remove: function() {
                        return T.each(arguments, (function(t, e) {
                            for (var n;
                                (n = T.inArray(e, o, n)) > -1;) o.splice(n, 1), n <= a && a--
                        })), this
                    },
                    has: function(t) {
                        return t ? T.inArray(t, o) > -1 : o.length > 0
                    },
                    empty: function() {
                        return o && (o = []), this
                    },
                    disable: function() {
                        return r = s = [], o = n = "", this
                    },
                    disabled: function() {
                        return !o
                    },
                    lock: function() {
                        return r = s = [], n || e || (o = n = ""), this
                    },
                    locked: function() {
                        return !!r
                    },
                    fireWith: function(t, n) {
                        return r || (n = [t, (n = n || []).slice ? n.slice() : n], s.push(n), e || l()), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return u
        }, T.extend({
            Deferred: function(t) {
                var e = [
                        ["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2],
                        ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]
                    ],
                    i = "pending",
                    r = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        catch: function(t) {
                            return r.then(null, t)
                        },
                        pipe: function() {
                            var t = arguments;
                            return T.Deferred((function(n) {
                                T.each(e, (function(e, i) {
                                    var r = v(t[i[4]]) && t[i[4]];
                                    o[i[1]]((function() {
                                        var t = r && r.apply(this, arguments);
                                        t && v(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [t] : arguments)
                                    }))
                                })), t = null
                            })).promise()
                        },
                        then: function(t, i, r) {
                            var o = 0;

                            function s(t, e, i, r) {
                                return function() {
                                    var a = this,
                                        l = arguments,
                                        u = function() {
                                            var n, u;
                                            if (!(t < o)) {
                                                if ((n = i.apply(a, l)) === e.promise()) throw new TypeError("Thenable self-resolution");
                                                u = n && ("object" == typeof n || "function" == typeof n) && n.then, v(u) ? r ? u.call(n, s(o, e, j, r), s(o, e, I, r)) : (o++, u.call(n, s(o, e, j, r), s(o, e, I, r), s(o, e, j, e.notifyWith))) : (i !== j && (a = void 0, l = [n]), (r || e.resolveWith)(a, l))
                                            }
                                        },
                                        c = r ? u : function() {
                                            try {
                                                u()
                                            } catch (n) {
                                                T.Deferred.exceptionHook && T.Deferred.exceptionHook(n, c.stackTrace), t + 1 >= o && (i !== I && (a = void 0, l = [n]), e.rejectWith(a, l))
                                            }
                                        };
                                    t ? c() : (T.Deferred.getStackHook && (c.stackTrace = T.Deferred.getStackHook()), n.setTimeout(c))
                                }
                            }
                            return T.Deferred((function(n) {
                                e[0][3].add(s(0, n, v(r) ? r : j, n.notifyWith)), e[1][3].add(s(0, n, v(t) ? t : j)), e[2][3].add(s(0, n, v(i) ? i : I))
                            })).promise()
                        },
                        promise: function(t) {
                            return null != t ? T.extend(t, r) : r
                        }
                    },
                    o = {};
                return T.each(e, (function(t, n) {
                    var s = n[2],
                        a = n[5];
                    r[n[1]] = s.add, a && s.add((function() {
                        i = a
                    }), e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock), s.add(n[3].fire), o[n[0]] = function() {
                        return o[n[0] + "With"](this === o ? void 0 : this, arguments), this
                    }, o[n[0] + "With"] = s.fireWith
                })), r.promise(o), t && t.call(o, o), o
            },
            when: function(t) {
                var e = arguments.length,
                    n = e,
                    i = Array(n),
                    r = a.call(arguments),
                    o = T.Deferred(),
                    s = function(t) {
                        return function(n) {
                            i[t] = this, r[t] = arguments.length > 1 ? a.call(arguments) : n, --e || o.resolveWith(i, r)
                        }
                    };
                if (e <= 1 && (F(t, o.done(s(n)).resolve, o.reject, !e), "pending" === o.state() || v(r[n] && r[n].then))) return o.then();
                for (; n--;) F(r[n], s(n), o.reject);
                return o.promise()
            }
        });
        var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        T.Deferred.exceptionHook = function(t, e) {
            n.console && n.console.warn && t && z.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
        }, T.readyException = function(t) {
            n.setTimeout((function() {
                throw t
            }))
        };
        var q = T.Deferred();

        function B() {
            b.removeEventListener("DOMContentLoaded", B), n.removeEventListener("load", B), T.ready()
        }
        T.fn.ready = function(t) {
            return q.then(t).catch((function(t) {
                T.readyException(t)
            })), this
        }, T.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(t) {
                (!0 === t ? --T.readyWait : T.isReady) || (T.isReady = !0, !0 !== t && --T.readyWait > 0 || q.resolveWith(b, [T]))
            }
        }), T.ready.then = q.then, "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? n.setTimeout(T.ready) : (b.addEventListener("DOMContentLoaded", B), n.addEventListener("load", B));
        var W = function(t, e, n, i, r, o, s) {
                var a = 0,
                    l = t.length,
                    u = null == n;
                if ("object" === _(n))
                    for (a in r = !0, n) W(t, e, a, n[a], !0, o, s);
                else if (void 0 !== i && (r = !0, v(i) || (s = !0), u && (s ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) {
                        return u.call(T(t), n)
                    })), e))
                    for (; a < l; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
                return r ? t : u ? e.call(t) : l ? e(t[0], n) : o
            },
            X = /^-ms-/,
            Y = /-([a-z])/g;

        function V(t, e) {
            return e.toUpperCase()
        }

        function U(t) {
            return t.replace(X, "ms-").replace(Y, V)
        }
        var G = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };

        function Q() {
            this.expando = T.expando + Q.uid++
        }
        Q.uid = 1, Q.prototype = {
            cache: function(t) {
                var e = t[this.expando];
                return e || (e = {}, G(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function(t, e, n) {
                var i, r = this.cache(t);
                if ("string" == typeof e) r[U(e)] = n;
                else
                    for (i in e) r[U(i)] = e[i];
                return r
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][U(e)]
            },
            access: function(t, e, n) {
                return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
            },
            remove: function(t, e) {
                var n, i = t[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== e) {
                        n = (e = Array.isArray(e) ? e.map(U) : (e = U(e)) in i ? [e] : e.match(H) || []).length;
                        for (; n--;) delete i[e[n]]
                    }(void 0 === e || T.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !T.isEmptyObject(e)
            }
        };
        var K = new Q,
            Z = new Q,
            J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            tt = /[A-Z]/g;

        function et(t, e, n) {
            var i;
            if (void 0 === n && 1 === t.nodeType)
                if (i = "data-" + e.replace(tt, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(i))) {
                    try {
                        n = function(t) {
                            return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : J.test(t) ? JSON.parse(t) : t)
                        }(n)
                    } catch (t) {}
                    Z.set(t, e, n)
                } else n = void 0;
            return n
        }
        T.extend({
            hasData: function(t) {
                return Z.hasData(t) || K.hasData(t)
            },
            data: function(t, e, n) {
                return Z.access(t, e, n)
            },
            removeData: function(t, e) {
                Z.remove(t, e)
            },
            _data: function(t, e, n) {
                return K.access(t, e, n)
            },
            _removeData: function(t, e) {
                K.remove(t, e)
            }
        }), T.fn.extend({
            data: function(t, e) {
                var n, i, r, o = this[0],
                    s = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (r = Z.get(o), 1 === o.nodeType && !K.get(o, "hasDataAttrs"))) {
                        for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = U(i.slice(5)), et(o, i, r[i]));
                        K.set(o, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each((function() {
                    Z.set(this, t)
                })) : W(this, (function(e) {
                    var n;
                    if (o && void 0 === e) return void 0 !== (n = Z.get(o, t)) || void 0 !== (n = et(o, t)) ? n : void 0;
                    this.each((function() {
                        Z.set(this, t, e)
                    }))
                }), null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each((function() {
                    Z.remove(this, t)
                }))
            }
        }), T.extend({
            queue: function(t, e, n) {
                var i;
                if (t) return e = (e || "fx") + "queue", i = K.get(t, e), n && (!i || Array.isArray(n) ? i = K.access(t, e, T.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = T.queue(t, e),
                    i = n.length,
                    r = n.shift(),
                    o = T._queueHooks(t, e);
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, (function() {
                    T.dequeue(t, e)
                }), o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return K.get(t, n) || K.access(t, n, {
                    empty: T.Callbacks("once memory").add((function() {
                        K.remove(t, [e + "queue", n])
                    }))
                })
            }
        }), T.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? T.queue(this[0], t) : void 0 === e ? this : this.each((function() {
                    var n = T.queue(this, t, e);
                    T._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && T.dequeue(this, t)
                }))
            },
            dequeue: function(t) {
                return this.each((function() {
                    T.dequeue(this, t)
                }))
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, i = 1,
                    r = T.Deferred(),
                    o = this,
                    s = this.length,
                    a = function() {
                        --i || r.resolveWith(o, [o])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(n = K.get(o[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                return a(), r.promise(e)
            }
        });
        var nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            it = new RegExp("^(?:([+-])=|)(" + nt + ")([a-z%]*)$", "i"),
            rt = ["Top", "Right", "Bottom", "Left"],
            ot = b.documentElement,
            st = function(t) {
                return T.contains(t.ownerDocument, t)
            },
            at = {
                composed: !0
            };
        ot.getRootNode && (st = function(t) {
            return T.contains(t.ownerDocument, t) || t.getRootNode(at) === t.ownerDocument
        });
        var lt = function(t, e) {
            return "none" === (t = e || t).style.display || "" === t.style.display && st(t) && "none" === T.css(t, "display")
        };

        function ut(t, e, n, i) {
            var r, o, s = 20,
                a = i ? function() {
                    return i.cur()
                } : function() {
                    return T.css(t, e, "")
                },
                l = a(),
                u = n && n[3] || (T.cssNumber[e] ? "" : "px"),
                c = t.nodeType && (T.cssNumber[e] || "px" !== u && +l) && it.exec(T.css(t, e));
            if (c && c[3] !== u) {
                for (l /= 2, u = u || c[3], c = +l || 1; s--;) T.style(t, e, c + u), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), c /= o;
                c *= 2, T.style(t, e, c + u), n = n || []
            }
            return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
        }
        var ct = {};

        function ft(t) {
            var e, n = t.ownerDocument,
                i = t.nodeName,
                r = ct[i];
            return r || (e = n.body.appendChild(n.createElement(i)), r = T.css(e, "display"), e.parentNode.removeChild(e), "none" === r && (r = "block"), ct[i] = r, r)
        }

        function dt(t, e) {
            for (var n, i, r = [], o = 0, s = t.length; o < s; o++)(i = t[o]).style && (n = i.style.display, e ? ("none" === n && (r[o] = K.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && lt(i) && (r[o] = ft(i))) : "none" !== n && (r[o] = "none", K.set(i, "display", n)));
            for (o = 0; o < s; o++) null != r[o] && (t[o].style.display = r[o]);
            return t
        }
        T.fn.extend({
            show: function() {
                return dt(this, !0)
            },
            hide: function() {
                return dt(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each((function() {
                    lt(this) ? T(this).show() : T(this).hide()
                }))
            }
        });
        var ht, pt, gt = /^(?:checkbox|radio)$/i,
            mt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            vt = /^$|^module$|\/(?:java|ecma)script/i;
        ht = b.createDocumentFragment().appendChild(b.createElement("div")), (pt = b.createElement("input")).setAttribute("type", "radio"), pt.setAttribute("checked", "checked"), pt.setAttribute("name", "t"), ht.appendChild(pt), m.checkClone = ht.cloneNode(!0).cloneNode(!0).lastChild.checked, ht.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!ht.cloneNode(!0).lastChild.defaultValue, ht.innerHTML = "<option></option>", m.option = !!ht.lastChild;
        var yt = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

        function bt(t, e) {
            var n;
            return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && E(t, e) ? T.merge([t], n) : n
        }

        function xt(t, e) {
            for (var n = 0, i = t.length; n < i; n++) K.set(t[n], "globalEval", !e || K.get(e[n], "globalEval"))
        }
        yt.tbody = yt.tfoot = yt.colgroup = yt.caption = yt.thead, yt.th = yt.td, m.option || (yt.optgroup = yt.option = [1, "<select multiple='multiple'>", "</select>"]);
        var wt = /<|&#?\w+;/;

        function _t(t, e, n, i, r) {
            for (var o, s, a, l, u, c, f = e.createDocumentFragment(), d = [], h = 0, p = t.length; h < p; h++)
                if ((o = t[h]) || 0 === o)
                    if ("object" === _(o)) T.merge(d, o.nodeType ? [o] : o);
                    else if (wt.test(o)) {
                for (s = s || f.appendChild(e.createElement("div")), a = (mt.exec(o) || ["", ""])[1].toLowerCase(), l = yt[a] || yt._default, s.innerHTML = l[1] + T.htmlPrefilter(o) + l[2], c = l[0]; c--;) s = s.lastChild;
                T.merge(d, s.childNodes), (s = f.firstChild).textContent = ""
            } else d.push(e.createTextNode(o));
            for (f.textContent = "", h = 0; o = d[h++];)
                if (i && T.inArray(o, i) > -1) r && r.push(o);
                else if (u = st(o), s = bt(f.appendChild(o), "script"), u && xt(s), n)
                for (c = 0; o = s[c++];) vt.test(o.type || "") && n.push(o);
            return f
        }
        var Tt = /^key/,
            Ct = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            St = /^([^.]*)(?:\.(.+)|)/;

        function kt() {
            return !0
        }

        function At() {
            return !1
        }

        function Pt(t, e) {
            return t === function() {
                try {
                    return b.activeElement
                } catch (t) {}
            }() == ("focus" === e)
        }

        function Et(t, e, n, i, r, o) {
            var s, a;
            if ("object" == typeof e) {
                for (a in "string" != typeof n && (i = i || n, n = void 0), e) Et(t, a, n, i, e[a], o);
                return t
            }
            if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = At;
            else if (!r) return t;
            return 1 === o && (s = r, (r = function(t) {
                return T().off(t), s.apply(this, arguments)
            }).guid = s.guid || (s.guid = T.guid++)), t.each((function() {
                T.event.add(this, e, r, i, n)
            }))
        }

        function Mt(t, e, n) {
            n ? (K.set(t, e, !1), T.event.add(t, e, {
                namespace: !1,
                handler: function(t) {
                    var i, r, o = K.get(this, e);
                    if (1 & t.isTrigger && this[e]) {
                        if (o.length)(T.event.special[e] || {}).delegateType && t.stopPropagation();
                        else if (o = a.call(arguments), K.set(this, e, o), i = n(this, e), this[e](), o !== (r = K.get(this, e)) || i ? K.set(this, e, !1) : r = {}, o !== r) return t.stopImmediatePropagation(), t.preventDefault(), r.value
                    } else o.length && (K.set(this, e, {
                        value: T.event.trigger(T.extend(o[0], T.Event.prototype), o.slice(1), this)
                    }), t.stopImmediatePropagation())
                }
            })) : void 0 === K.get(t, e) && T.event.add(t, e, kt)
        }
        T.event = {
            global: {},
            add: function(t, e, n, i, r) {
                var o, s, a, l, u, c, f, d, h, p, g, m = K.get(t);
                if (G(t))
                    for (n.handler && (n = (o = n).handler, r = o.selector), r && T.find.matchesSelector(ot, r), n.guid || (n.guid = T.guid++), (l = m.events) || (l = m.events = Object.create(null)), (s = m.handle) || (s = m.handle = function(e) {
                            return void 0 !== T && T.event.triggered !== e.type ? T.event.dispatch.apply(t, arguments) : void 0
                        }), u = (e = (e || "").match(H) || [""]).length; u--;) h = g = (a = St.exec(e[u]) || [])[1], p = (a[2] || "").split(".").sort(), h && (f = T.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, f = T.event.special[h] || {}, c = T.extend({
                        type: h,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && T.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, o), (d = l[h]) || ((d = l[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(h, s)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, c) : d.push(c), T.event.global[h] = !0)
            },
            remove: function(t, e, n, i, r) {
                var o, s, a, l, u, c, f, d, h, p, g, m = K.hasData(t) && K.get(t);
                if (m && (l = m.events)) {
                    for (u = (e = (e || "").match(H) || [""]).length; u--;)
                        if (h = g = (a = St.exec(e[u]) || [])[1], p = (a[2] || "").split(".").sort(), h) {
                            for (f = T.event.special[h] || {}, d = l[h = (i ? f.delegateType : f.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) c = d[o], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(t, c));
                            s && !d.length && (f.teardown && !1 !== f.teardown.call(t, p, m.handle) || T.removeEvent(t, h, m.handle), delete l[h])
                        } else
                            for (h in l) T.event.remove(t, h + e[u], n, i, !0);
                    T.isEmptyObject(l) && K.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                var e, n, i, r, o, s, a = new Array(arguments.length),
                    l = T.event.fix(t),
                    u = (K.get(this, "events") || Object.create(null))[l.type] || [],
                    c = T.event.special[l.type] || {};
                for (a[0] = l, e = 1; e < arguments.length; e++) a[e] = arguments[e];
                if (l.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, l)) {
                    for (s = T.event.handlers.call(this, l, u), e = 0;
                        (r = s[e++]) && !l.isPropagationStopped();)
                        for (l.currentTarget = r.elem, n = 0;
                            (o = r.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (i = ((T.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, l), l.result
                }
            },
            handlers: function(t, e) {
                var n, i, r, o, s, a = [],
                    l = e.delegateCount,
                    u = t.target;
                if (l && u.nodeType && !("click" === t.type && t.button >= 1))
                    for (; u !== this; u = u.parentNode || this)
                        if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
                            for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = e[n]).selector + " "] && (s[r] = i.needsContext ? T(r, this).index(u) > -1 : T.find(r, this, null, [u]).length), s[r] && o.push(i);
                            o.length && a.push({
                                elem: u,
                                handlers: o
                            })
                        } return u = this, l < e.length && a.push({
                    elem: u,
                    handlers: e.slice(l)
                }), a
            },
            addProp: function(t, e) {
                Object.defineProperty(T.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: v(e) ? function() {
                        if (this.originalEvent) return e(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[t]
                    },
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            },
            fix: function(t) {
                return t[T.expando] ? t : new T.Event(t)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(t) {
                        var e = this || t;
                        return gt.test(e.type) && e.click && E(e, "input") && Mt(e, "click", kt), !1
                    },
                    trigger: function(t) {
                        var e = this || t;
                        return gt.test(e.type) && e.click && E(e, "input") && Mt(e, "click"), !0
                    },
                    _default: function(t) {
                        var e = t.target;
                        return gt.test(e.type) && e.click && E(e, "input") && K.get(e, "click") || E(e, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, T.removeEvent = function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n)
        }, T.Event = function(t, e) {
            if (!(this instanceof T.Event)) return new T.Event(t, e);
            t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? kt : At, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && T.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[T.expando] = !0
        }, T.Event.prototype = {
            constructor: T.Event,
            isDefaultPrevented: At,
            isPropagationStopped: At,
            isImmediatePropagationStopped: At,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = kt, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = kt, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = kt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, T.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(t) {
                var e = t.button;
                return null == t.which && Tt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Ct.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
            }
        }, T.event.addProp), T.each({
            focus: "focusin",
            blur: "focusout"
        }, (function(t, e) {
            T.event.special[t] = {
                setup: function() {
                    return Mt(this, t, Pt), !1
                },
                trigger: function() {
                    return Mt(this, t), !0
                },
                delegateType: e
            }
        })), T.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, (function(t, e) {
            T.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = this,
                        r = t.relatedTarget,
                        o = t.handleObj;
                    return r && (r === i || T.contains(i, r)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
                }
            }
        })), T.fn.extend({
            on: function(t, e, n, i) {
                return Et(this, t, e, n, i)
            },
            one: function(t, e, n, i) {
                return Et(this, t, e, n, i, 1)
            },
            off: function(t, e, n) {
                var i, r;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, T(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (r in t) this.off(r, e, t[r]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = At), this.each((function() {
                    T.event.remove(this, t, n, e)
                }))
            }
        });
        var Lt = /<script|<style|<link/i,
            Dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function $t(t, e) {
            return E(t, "table") && E(11 !== e.nodeType ? e : e.firstChild, "tr") && T(t).children("tbody")[0] || t
        }

        function Rt(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function Nt(t) {
            return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
        }

        function Ht(t, e) {
            var n, i, r, o, s, a;
            if (1 === e.nodeType) {
                if (K.hasData(t) && (a = K.get(t).events))
                    for (r in K.remove(e, "handle events"), a)
                        for (n = 0, i = a[r].length; n < i; n++) T.event.add(e, r, a[r][n]);
                Z.hasData(t) && (o = Z.access(t), s = T.extend({}, o), Z.set(e, s))
            }
        }

        function jt(t, e) {
            var n = e.nodeName.toLowerCase();
            "input" === n && gt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }

        function It(t, e, n, i) {
            e = l(e);
            var r, o, s, a, u, c, f = 0,
                d = t.length,
                h = d - 1,
                p = e[0],
                g = v(p);
            if (g || d > 1 && "string" == typeof p && !m.checkClone && Dt.test(p)) return t.each((function(r) {
                var o = t.eq(r);
                g && (e[0] = p.call(this, r, o.html())), It(o, e, n, i)
            }));
            if (d && (o = (r = _t(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
                for (a = (s = T.map(bt(r, "script"), Rt)).length; f < d; f++) u = r, f !== h && (u = T.clone(u, !0, !0), a && T.merge(s, bt(u, "script"))), n.call(t[f], u, f);
                if (a)
                    for (c = s[s.length - 1].ownerDocument, T.map(s, Nt), f = 0; f < a; f++) u = s[f], vt.test(u.type || "") && !K.access(u, "globalEval") && T.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? T._evalUrl && !u.noModule && T._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }, c) : w(u.textContent.replace(Ot, ""), u, c))
            }
            return t
        }

        function Ft(t, e, n) {
            for (var i, r = e ? T.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || T.cleanData(bt(i)), i.parentNode && (n && st(i) && xt(bt(i, "script")), i.parentNode.removeChild(i));
            return t
        }
        T.extend({
            htmlPrefilter: function(t) {
                return t
            },
            clone: function(t, e, n) {
                var i, r, o, s, a = t.cloneNode(!0),
                    l = st(t);
                if (!(m.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || T.isXMLDoc(t)))
                    for (s = bt(a), i = 0, r = (o = bt(t)).length; i < r; i++) jt(o[i], s[i]);
                if (e)
                    if (n)
                        for (o = o || bt(t), s = s || bt(a), i = 0, r = o.length; i < r; i++) Ht(o[i], s[i]);
                    else Ht(t, a);
                return (s = bt(a, "script")).length > 0 && xt(s, !l && bt(t, "script")), a
            },
            cleanData: function(t) {
                for (var e, n, i, r = T.event.special, o = 0; void 0 !== (n = t[o]); o++)
                    if (G(n)) {
                        if (e = n[K.expando]) {
                            if (e.events)
                                for (i in e.events) r[i] ? T.event.remove(n, i) : T.removeEvent(n, i, e.handle);
                            n[K.expando] = void 0
                        }
                        n[Z.expando] && (n[Z.expando] = void 0)
                    }
            }
        }), T.fn.extend({
            detach: function(t) {
                return Ft(this, t, !0)
            },
            remove: function(t) {
                return Ft(this, t)
            },
            text: function(t) {
                return W(this, (function(t) {
                    return void 0 === t ? T.text(this) : this.empty().each((function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    }))
                }), null, t, arguments.length)
            },
            append: function() {
                return It(this, arguments, (function(t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || $t(this, t).appendChild(t)
                }))
            },
            prepend: function() {
                return It(this, arguments, (function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = $t(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                }))
            },
            before: function() {
                return It(this, arguments, (function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                }))
            },
            after: function() {
                return It(this, arguments, (function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                }))
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (T.cleanData(bt(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map((function() {
                    return T.clone(this, t, e)
                }))
            },
            html: function(t) {
                return W(this, (function(t) {
                    var e = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !Lt.test(t) && !yt[(mt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = T.htmlPrefilter(t);
                        try {
                            for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (T.cleanData(bt(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }), null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return It(this, arguments, (function(e) {
                    var n = this.parentNode;
                    T.inArray(this, t) < 0 && (T.cleanData(bt(this)), n && n.replaceChild(e, this))
                }), t)
            }
        }), T.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, (function(t, e) {
            T.fn[t] = function(t) {
                for (var n, i = [], r = T(t), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), T(r[s])[e](n), u.apply(i, n.get());
                return this.pushStack(i)
            }
        }));
        var zt = new RegExp("^(" + nt + ")(?!px)[a-z%]+$", "i"),
            qt = function(t) {
                var e = t.ownerDocument.defaultView;
                return e && e.opener || (e = n), e.getComputedStyle(t)
            },
            Bt = function(t, e, n) {
                var i, r, o = {};
                for (r in e) o[r] = t.style[r], t.style[r] = e[r];
                for (r in i = n.call(t), e) t.style[r] = o[r];
                return i
            },
            Wt = new RegExp(rt.join("|"), "i");

        function Xt(t, e, n) {
            var i, r, o, s, a = t.style;
            return (n = n || qt(t)) && ("" !== (s = n.getPropertyValue(e) || n[e]) || st(t) || (s = T.style(t, e)), !m.pixelBoxStyles() && zt.test(s) && Wt.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
        }

        function Yt(t, e) {
            return {
                get: function() {
                    if (!t()) return (this.get = e).apply(this, arguments);
                    delete this.get
                }
            }
        }! function() {
            function t() {
                if (c) {
                    u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ot.appendChild(u).appendChild(c);
                    var t = n.getComputedStyle(c);
                    i = "1%" !== t.top, l = 12 === e(t.marginLeft), c.style.right = "60%", s = 36 === e(t.right), r = 36 === e(t.width), c.style.position = "absolute", o = 12 === e(c.offsetWidth / 3), ot.removeChild(u), c = null
                }
            }

            function e(t) {
                return Math.round(parseFloat(t))
            }
            var i, r, o, s, a, l, u = b.createElement("div"),
                c = b.createElement("div");
            c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === c.style.backgroundClip, T.extend(m, {
                boxSizingReliable: function() {
                    return t(), r
                },
                pixelBoxStyles: function() {
                    return t(), s
                },
                pixelPosition: function() {
                    return t(), i
                },
                reliableMarginLeft: function() {
                    return t(), l
                },
                scrollboxSize: function() {
                    return t(), o
                },
                reliableTrDimensions: function() {
                    var t, e, i, r;
                    return null == a && (t = b.createElement("table"), e = b.createElement("tr"), i = b.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", e.style.height = "1px", i.style.height = "9px", ot.appendChild(t).appendChild(e).appendChild(i), r = n.getComputedStyle(e), a = parseInt(r.height) > 3, ot.removeChild(t)), a
                }
            }))
        }();
        var Vt = ["Webkit", "Moz", "ms"],
            Ut = b.createElement("div").style,
            Gt = {};

        function Qt(t) {
            var e = T.cssProps[t] || Gt[t];
            return e || (t in Ut ? t : Gt[t] = function(t) {
                for (var e = t[0].toUpperCase() + t.slice(1), n = Vt.length; n--;)
                    if ((t = Vt[n] + e) in Ut) return t
            }(t) || t)
        }
        var Kt = /^(none|table(?!-c[ea]).+)/,
            Zt = /^--/,
            Jt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            te = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function ee(t, e, n) {
            var i = it.exec(e);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
        }

        function ne(t, e, n, i, r, o) {
            var s = "width" === e ? 1 : 0,
                a = 0,
                l = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; s < 4; s += 2) "margin" === n && (l += T.css(t, n + rt[s], !0, r)), i ? ("content" === n && (l -= T.css(t, "padding" + rt[s], !0, r)), "margin" !== n && (l -= T.css(t, "border" + rt[s] + "Width", !0, r))) : (l += T.css(t, "padding" + rt[s], !0, r), "padding" !== n ? l += T.css(t, "border" + rt[s] + "Width", !0, r) : a += T.css(t, "border" + rt[s] + "Width", !0, r));
            return !i && o >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - .5)) || 0), l
        }

        function ie(t, e, n) {
            var i = qt(t),
                r = (!m.boxSizingReliable() || n) && "border-box" === T.css(t, "boxSizing", !1, i),
                o = r,
                s = Xt(t, e, i),
                a = "offset" + e[0].toUpperCase() + e.slice(1);
            if (zt.test(s)) {
                if (!n) return s;
                s = "auto"
            }
            return (!m.boxSizingReliable() && r || !m.reliableTrDimensions() && E(t, "tr") || "auto" === s || !parseFloat(s) && "inline" === T.css(t, "display", !1, i)) && t.getClientRects().length && (r = "border-box" === T.css(t, "boxSizing", !1, i), (o = a in t) && (s = t[a])), (s = parseFloat(s) || 0) + ne(t, e, n || (r ? "border" : "content"), o, i, s) + "px"
        }

        function re(t, e, n, i, r) {
            return new re.prototype.init(t, e, n, i, r)
        }
        T.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = Xt(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, o, s, a = U(e),
                        l = Zt.test(e),
                        u = t.style;
                    if (l || (e = Qt(a)), s = T.cssHooks[e] || T.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : u[e];
                    "string" === (o = typeof n) && (r = it.exec(n)) && r[1] && (n = ut(t, e, r), o = "number"), null != n && n == n && ("number" !== o || l || (n += r && r[3] || (T.cssNumber[a] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l ? u.setProperty(e, n) : u[e] = n))
                }
            },
            css: function(t, e, n, i) {
                var r, o, s, a = U(e);
                return Zt.test(e) || (e = Qt(a)), (s = T.cssHooks[e] || T.cssHooks[a]) && "get" in s && (r = s.get(t, !0, n)), void 0 === r && (r = Xt(t, e, i)), "normal" === r && e in te && (r = te[e]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
            }
        }), T.each(["height", "width"], (function(t, e) {
            T.cssHooks[e] = {
                get: function(t, n, i) {
                    if (n) return !Kt.test(T.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? ie(t, e, i) : Bt(t, Jt, (function() {
                        return ie(t, e, i)
                    }))
                },
                set: function(t, n, i) {
                    var r, o = qt(t),
                        s = !m.scrollboxSize() && "absolute" === o.position,
                        a = (s || i) && "border-box" === T.css(t, "boxSizing", !1, o),
                        l = i ? ne(t, e, i, a, o) : 0;
                    return a && s && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - ne(t, e, "border", !1, o) - .5)), l && (r = it.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = T.css(t, e)), ee(0, n, l)
                }
            }
        })), T.cssHooks.marginLeft = Yt(m.reliableMarginLeft, (function(t, e) {
            if (e) return (parseFloat(Xt(t, "marginLeft")) || t.getBoundingClientRect().left - Bt(t, {
                marginLeft: 0
            }, (function() {
                return t.getBoundingClientRect().left
            }))) + "px"
        })), T.each({
            margin: "",
            padding: "",
            border: "Width"
        }, (function(t, e) {
            T.cssHooks[t + e] = {
                expand: function(n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[t + rt[i] + e] = o[i] || o[i - 2] || o[0];
                    return r
                }
            }, "margin" !== t && (T.cssHooks[t + e].set = ee)
        })), T.fn.extend({
            css: function(t, e) {
                return W(this, (function(t, e, n) {
                    var i, r, o = {},
                        s = 0;
                    if (Array.isArray(e)) {
                        for (i = qt(t), r = e.length; s < r; s++) o[e[s]] = T.css(t, e[s], !1, i);
                        return o
                    }
                    return void 0 !== n ? T.style(t, e, n) : T.css(t, e)
                }), t, e, arguments.length > 1)
            }
        }), T.Tween = re, re.prototype = {
            constructor: re,
            init: function(t, e, n, i, r, o) {
                this.elem = t, this.prop = n, this.easing = r || T.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (T.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = re.propHooks[this.prop];
                return t && t.get ? t.get(this) : re.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = re.propHooks[this.prop];
                return this.options.duration ? this.pos = e = T.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : re.propHooks._default.set(this), this
            }
        }, re.prototype.init.prototype = re.prototype, re.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = T.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                },
                set: function(t) {
                    T.fx.step[t.prop] ? T.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !T.cssHooks[t.prop] && null == t.elem.style[Qt(t.prop)] ? t.elem[t.prop] = t.now : T.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, re.propHooks.scrollTop = re.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, T.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, T.fx = re.prototype.init, T.fx.step = {};
        var oe, se, ae = /^(?:toggle|show|hide)$/,
            le = /queueHooks$/;

        function ue() {
            se && (!1 === b.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ue) : n.setTimeout(ue, T.fx.interval), T.fx.tick())
        }

        function ce() {
            return n.setTimeout((function() {
                oe = void 0
            })), oe = Date.now()
        }

        function fe(t, e) {
            var n, i = 0,
                r = {
                    height: t
                };
            for (e = e ? 1 : 0; i < 4; i += 2 - e) r["margin" + (n = rt[i])] = r["padding" + n] = t;
            return e && (r.opacity = r.width = t), r
        }

        function de(t, e, n) {
            for (var i, r = (he.tweeners[e] || []).concat(he.tweeners["*"]), o = 0, s = r.length; o < s; o++)
                if (i = r[o].call(n, e, t)) return i
        }

        function he(t, e, n) {
            var i, r, o = 0,
                s = he.prefilters.length,
                a = T.Deferred().always((function() {
                    delete l.elem
                })),
                l = function() {
                    if (r) return !1;
                    for (var e = oe || ce(), n = Math.max(0, u.startTime + u.duration - e), i = 1 - (n / u.duration || 0), o = 0, s = u.tweens.length; o < s; o++) u.tweens[o].run(i);
                    return a.notifyWith(t, [u, i, n]), i < 1 && s ? n : (s || a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u]), !1)
                },
                u = a.promise({
                    elem: t,
                    props: T.extend({}, e),
                    opts: T.extend(!0, {
                        specialEasing: {},
                        easing: T.easing._default
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: oe || ce(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var i = T.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function(e) {
                        var n = 0,
                            i = e ? u.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; n < i; n++) u.tweens[n].run(1);
                        return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
                    }
                }),
                c = u.props;
            for (! function(t, e) {
                    var n, i, r, o, s;
                    for (n in t)
                        if (r = e[i = U(n)], o = t[n], Array.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), (s = T.cssHooks[i]) && "expand" in s)
                            for (n in o = s.expand(o), delete t[i], o) n in t || (t[n] = o[n], e[n] = r);
                        else e[i] = r
                }(c, u.opts.specialEasing); o < s; o++)
                if (i = he.prefilters[o].call(u, t, c, u.opts)) return v(i.stop) && (T._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
            return T.map(c, de, u), v(u.opts.start) && u.opts.start.call(t, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), T.fx.timer(T.extend(l, {
                elem: t,
                anim: u,
                queue: u.opts.queue
            })), u
        }
        T.Animation = T.extend(he, {
                tweeners: {
                    "*": [function(t, e) {
                        var n = this.createTween(t, e);
                        return ut(n.elem, t, it.exec(e), n), n
                    }]
                },
                tweener: function(t, e) {
                    v(t) ? (e = t, t = ["*"]) : t = t.match(H);
                    for (var n, i = 0, r = t.length; i < r; i++) n = t[i], he.tweeners[n] = he.tweeners[n] || [], he.tweeners[n].unshift(e)
                },
                prefilters: [function(t, e, n) {
                    var i, r, o, s, a, l, u, c, f = "width" in e || "height" in e,
                        d = this,
                        h = {},
                        p = t.style,
                        g = t.nodeType && lt(t),
                        m = K.get(t, "fxshow");
                    for (i in n.queue || (null == (s = T._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                            s.unqueued || a()
                        }), s.unqueued++, d.always((function() {
                            d.always((function() {
                                s.unqueued--, T.queue(t, "fx").length || s.empty.fire()
                            }))
                        }))), e)
                        if (r = e[i], ae.test(r)) {
                            if (delete e[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                                if ("show" !== r || !m || void 0 === m[i]) continue;
                                g = !0
                            }
                            h[i] = m && m[i] || T.style(t, i)
                        } if ((l = !T.isEmptyObject(e)) || !T.isEmptyObject(h))
                        for (i in f && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = m && m.display) && (u = K.get(t, "display")), "none" === (c = T.css(t, "display")) && (u ? c = u : (dt([t], !0), u = t.style.display || u, c = T.css(t, "display"), dt([t]))), ("inline" === c || "inline-block" === c && null != u) && "none" === T.css(t, "float") && (l || (d.done((function() {
                                p.display = u
                            })), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always((function() {
                                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                            }))), l = !1, h) l || (m ? "hidden" in m && (g = m.hidden) : m = K.access(t, "fxshow", {
                            display: u
                        }), o && (m.hidden = !g), g && dt([t], !0), d.done((function() {
                            for (i in g || dt([t]), K.remove(t, "fxshow"), h) T.style(t, i, h[i])
                        }))), l = de(g ? m[i] : 0, i, d), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
                }],
                prefilter: function(t, e) {
                    e ? he.prefilters.unshift(t) : he.prefilters.push(t)
                }
            }), T.speed = function(t, e, n) {
                var i = t && "object" == typeof t ? T.extend({}, t) : {
                    complete: n || !n && e || v(t) && t,
                    duration: t,
                    easing: n && e || e && !v(e) && e
                };
                return T.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in T.fx.speeds ? i.duration = T.fx.speeds[i.duration] : i.duration = T.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    v(i.old) && i.old.call(this), i.queue && T.dequeue(this, i.queue)
                }, i
            }, T.fn.extend({
                fadeTo: function(t, e, n, i) {
                    return this.filter(lt).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, i)
                },
                animate: function(t, e, n, i) {
                    var r = T.isEmptyObject(t),
                        o = T.speed(e, n, i),
                        s = function() {
                            var e = he(this, T.extend({}, t), o);
                            (r || K.get(this, "finish")) && e.stop(!0)
                        };
                    return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
                },
                stop: function(t, e, n) {
                    var i = function(t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && this.queue(t || "fx", []), this.each((function() {
                        var e = !0,
                            r = null != t && t + "queueHooks",
                            o = T.timers,
                            s = K.get(this);
                        if (r) s[r] && s[r].stop && i(s[r]);
                        else
                            for (r in s) s[r] && s[r].stop && le.test(r) && i(s[r]);
                        for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                        !e && n || T.dequeue(this, t)
                    }))
                },
                finish: function(t) {
                    return !1 !== t && (t = t || "fx"), this.each((function() {
                        var e, n = K.get(this),
                            i = n[t + "queue"],
                            r = n[t + "queueHooks"],
                            o = T.timers,
                            s = i ? i.length : 0;
                        for (n.finish = !0, T.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; e < s; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    }))
                }
            }), T.each(["toggle", "show", "hide"], (function(t, e) {
                var n = T.fn[e];
                T.fn[e] = function(t, i, r) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(fe(e, !0), t, i, r)
                }
            })), T.each({
                slideDown: fe("show"),
                slideUp: fe("hide"),
                slideToggle: fe("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, (function(t, e) {
                T.fn[t] = function(t, n, i) {
                    return this.animate(e, t, n, i)
                }
            })), T.timers = [], T.fx.tick = function() {
                var t, e = 0,
                    n = T.timers;
                for (oe = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
                n.length || T.fx.stop(), oe = void 0
            }, T.fx.timer = function(t) {
                T.timers.push(t), T.fx.start()
            }, T.fx.interval = 13, T.fx.start = function() {
                se || (se = !0, ue())
            }, T.fx.stop = function() {
                se = null
            }, T.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, T.fn.delay = function(t, e) {
                return t = T.fx && T.fx.speeds[t] || t, e = e || "fx", this.queue(e, (function(e, i) {
                    var r = n.setTimeout(e, t);
                    i.stop = function() {
                        n.clearTimeout(r)
                    }
                }))
            },
            function() {
                var t = b.createElement("input"),
                    e = b.createElement("select").appendChild(b.createElement("option"));
                t.type = "checkbox", m.checkOn = "" !== t.value, m.optSelected = e.selected, (t = b.createElement("input")).value = "t", t.type = "radio", m.radioValue = "t" === t.value
            }();
        var pe, ge = T.expr.attrHandle;
        T.fn.extend({
            attr: function(t, e) {
                return W(this, T.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each((function() {
                    T.removeAttr(this, t)
                }))
            }
        }), T.extend({
            attr: function(t, e, n) {
                var i, r, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? T.prop(t, e, n) : (1 === o && T.isXMLDoc(t) || (r = T.attrHooks[e.toLowerCase()] || (T.expr.match.bool.test(e) ? pe : void 0)), void 0 !== n ? null === n ? void T.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : null == (i = T.find.attr(t, e)) ? void 0 : i)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!m.radioValue && "radio" === e && E(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var n, i = 0,
                    r = e && e.match(H);
                if (r && 1 === t.nodeType)
                    for (; n = r[i++];) t.removeAttribute(n)
            }
        }), pe = {
            set: function(t, e, n) {
                return !1 === e ? T.removeAttr(t, n) : t.setAttribute(n, n), n
            }
        }, T.each(T.expr.match.bool.source.match(/\w+/g), (function(t, e) {
            var n = ge[e] || T.find.attr;
            ge[e] = function(t, e, i) {
                var r, o, s = e.toLowerCase();
                return i || (o = ge[s], ge[s] = r, r = null != n(t, e, i) ? s : null, ge[s] = o), r
            }
        }));
        var me = /^(?:input|select|textarea|button)$/i,
            ve = /^(?:a|area)$/i;

        function ye(t) {
            return (t.match(H) || []).join(" ")
        }

        function be(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function xe(t) {
            return Array.isArray(t) ? t : "string" == typeof t && t.match(H) || []
        }
        T.fn.extend({
            prop: function(t, e) {
                return W(this, T.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each((function() {
                    delete this[T.propFix[t] || t]
                }))
            }
        }), T.extend({
            prop: function(t, e, n) {
                var i, r, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && T.isXMLDoc(t) || (e = T.propFix[e] || e, r = T.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = T.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : me.test(t.nodeName) || ve.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), m.optSelected || (T.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
            T.propFix[this.toLowerCase()] = this
        })), T.fn.extend({
            addClass: function(t) {
                var e, n, i, r, o, s, a, l = 0;
                if (v(t)) return this.each((function(e) {
                    T(this).addClass(t.call(this, e, be(this)))
                }));
                if ((e = xe(t)).length)
                    for (; n = this[l++];)
                        if (r = be(n), i = 1 === n.nodeType && " " + ye(r) + " ") {
                            for (s = 0; o = e[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            r !== (a = ye(i)) && n.setAttribute("class", a)
                        } return this
            },
            removeClass: function(t) {
                var e, n, i, r, o, s, a, l = 0;
                if (v(t)) return this.each((function(e) {
                    T(this).removeClass(t.call(this, e, be(this)))
                }));
                if (!arguments.length) return this.attr("class", "");
                if ((e = xe(t)).length)
                    for (; n = this[l++];)
                        if (r = be(n), i = 1 === n.nodeType && " " + ye(r) + " ") {
                            for (s = 0; o = e[s++];)
                                for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                            r !== (a = ye(i)) && n.setAttribute("class", a)
                        } return this
            },
            toggleClass: function(t, e) {
                var n = typeof t,
                    i = "string" === n || Array.isArray(t);
                return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : v(t) ? this.each((function(n) {
                    T(this).toggleClass(t.call(this, n, be(this), e), e)
                })) : this.each((function() {
                    var e, r, o, s;
                    if (i)
                        for (r = 0, o = T(this), s = xe(t); e = s[r++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                    else void 0 !== t && "boolean" !== n || ((e = be(this)) && K.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : K.get(this, "__className__") || ""))
                }))
            },
            hasClass: function(t) {
                var e, n, i = 0;
                for (e = " " + t + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + ye(be(n)) + " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var we = /\r/g;
        T.fn.extend({
            val: function(t) {
                var e, n, i, r = this[0];
                return arguments.length ? (i = v(t), this.each((function(n) {
                    var r;
                    1 === this.nodeType && (null == (r = i ? t.call(this, n, T(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = T.map(r, (function(t) {
                        return null == t ? "" : t + ""
                    }))), (e = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                }))) : r ? (e = T.valHooks[r.type] || T.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(we, "") : null == n ? "" : n : void 0
            }
        }), T.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = T.find.attr(t, "value");
                        return null != e ? e : ye(T.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        var e, n, i, r = t.options,
                            o = t.selectedIndex,
                            s = "select-one" === t.type,
                            a = s ? null : [],
                            l = s ? o + 1 : r.length;
                        for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                            if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !E(n.parentNode, "optgroup"))) {
                                if (e = T(n).val(), s) return e;
                                a.push(e)
                            } return a
                    },
                    set: function(t, e) {
                        for (var n, i, r = t.options, o = T.makeArray(e), s = r.length; s--;)((i = r[s]).selected = T.inArray(T.valHooks.option.get(i), o) > -1) && (n = !0);
                        return n || (t.selectedIndex = -1), o
                    }
                }
            }
        }), T.each(["radio", "checkbox"], (function() {
            T.valHooks[this] = {
                set: function(t, e) {
                    if (Array.isArray(e)) return t.checked = T.inArray(T(t).val(), e) > -1
                }
            }, m.checkOn || (T.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        })), m.focusin = "onfocusin" in n;
        var _e = /^(?:focusinfocus|focusoutblur)$/,
            Te = function(t) {
                t.stopPropagation()
            };
        T.extend(T.event, {
            trigger: function(t, e, i, r) {
                var o, s, a, l, u, c, f, d, p = [i || b],
                    g = h.call(t, "type") ? t.type : t,
                    m = h.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = d = a = i = i || b, 3 !== i.nodeType && 8 !== i.nodeType && !_e.test(g + T.event.triggered) && (g.indexOf(".") > -1 && (m = g.split("."), g = m.shift(), m.sort()), u = g.indexOf(":") < 0 && "on" + g, (t = t[T.expando] ? t : new T.Event(g, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = m.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : T.makeArray(e, [t]), f = T.event.special[g] || {}, r || !f.trigger || !1 !== f.trigger.apply(i, e))) {
                    if (!r && !f.noBubble && !y(i)) {
                        for (l = f.delegateType || g, _e.test(l + g) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                        a === (i.ownerDocument || b) && p.push(a.defaultView || a.parentWindow || n)
                    }
                    for (o = 0;
                        (s = p[o++]) && !t.isPropagationStopped();) d = s, t.type = o > 1 ? l : f.bindType || g, (c = (K.get(s, "events") || Object.create(null))[t.type] && K.get(s, "handle")) && c.apply(s, e), (c = u && s[u]) && c.apply && G(s) && (t.result = c.apply(s, e), !1 === t.result && t.preventDefault());
                    return t.type = g, r || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(p.pop(), e) || !G(i) || u && v(i[g]) && !y(i) && ((a = i[u]) && (i[u] = null), T.event.triggered = g, t.isPropagationStopped() && d.addEventListener(g, Te), i[g](), t.isPropagationStopped() && d.removeEventListener(g, Te), T.event.triggered = void 0, a && (i[u] = a)), t.result
                }
            },
            simulate: function(t, e, n) {
                var i = T.extend(new T.Event, n, {
                    type: t,
                    isSimulated: !0
                });
                T.event.trigger(i, null, e)
            }
        }), T.fn.extend({
            trigger: function(t, e) {
                return this.each((function() {
                    T.event.trigger(t, e, this)
                }))
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                if (n) return T.event.trigger(t, e, n, !0)
            }
        }), m.focusin || T.each({
            focus: "focusin",
            blur: "focusout"
        }, (function(t, e) {
            var n = function(t) {
                T.event.simulate(e, t.target, T.event.fix(t))
            };
            T.event.special[e] = {
                setup: function() {
                    var i = this.ownerDocument || this.document || this,
                        r = K.access(i, e);
                    r || i.addEventListener(t, n, !0), K.access(i, e, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this.document || this,
                        r = K.access(i, e) - 1;
                    r ? K.access(i, e, r) : (i.removeEventListener(t, n, !0), K.remove(i, e))
                }
            }
        }));
        var Ce = n.location,
            Se = {
                guid: Date.now()
            },
            ke = /\?/;
        T.parseXML = function(t) {
            var e;
            if (!t || "string" != typeof t) return null;
            try {
                e = (new n.DOMParser).parseFromString(t, "text/xml")
            } catch (t) {
                e = void 0
            }
            return e && !e.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + t), e
        };
        var Ae = /\[\]$/,
            Pe = /\r?\n/g,
            Ee = /^(?:submit|button|image|reset|file)$/i,
            Me = /^(?:input|select|textarea|keygen)/i;

        function Le(t, e, n, i) {
            var r;
            if (Array.isArray(e)) T.each(e, (function(e, r) {
                n || Ae.test(t) ? i(t, r) : Le(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
            }));
            else if (n || "object" !== _(e)) i(t, e);
            else
                for (r in e) Le(t + "[" + r + "]", e[r], n, i)
        }
        T.param = function(t, e) {
            var n, i = [],
                r = function(t, e) {
                    var n = v(e) ? e() : e;
                    i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (null == t) return "";
            if (Array.isArray(t) || t.jquery && !T.isPlainObject(t)) T.each(t, (function() {
                r(this.name, this.value)
            }));
            else
                for (n in t) Le(n, t[n], e, r);
            return i.join("&")
        }, T.fn.extend({
            serialize: function() {
                return T.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map((function() {
                    var t = T.prop(this, "elements");
                    return t ? T.makeArray(t) : this
                })).filter((function() {
                    var t = this.type;
                    return this.name && !T(this).is(":disabled") && Me.test(this.nodeName) && !Ee.test(t) && (this.checked || !gt.test(t))
                })).map((function(t, e) {
                    var n = T(this).val();
                    return null == n ? null : Array.isArray(n) ? T.map(n, (function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Pe, "\r\n")
                        }
                    })) : {
                        name: e.name,
                        value: n.replace(Pe, "\r\n")
                    }
                })).get()
            }
        });
        var De = /%20/g,
            Oe = /#.*$/,
            $e = /([?&])_=[^&]*/,
            Re = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Ne = /^(?:GET|HEAD)$/,
            He = /^\/\//,
            je = {},
            Ie = {},
            Fe = "*/".concat("*"),
            ze = b.createElement("a");

        function qe(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, r = 0,
                    o = e.toLowerCase().match(H) || [];
                if (v(n))
                    for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function Be(t, e, n, i) {
            var r = {},
                o = t === Ie;

            function s(a) {
                var l;
                return r[a] = !0, T.each(t[a] || [], (function(t, a) {
                    var u = a(e, n, i);
                    return "string" != typeof u || o || r[u] ? o ? !(l = u) : void 0 : (e.dataTypes.unshift(u), s(u), !1)
                })), l
            }
            return s(e.dataTypes[0]) || !r["*"] && s("*")
        }

        function We(t, e) {
            var n, i, r = T.ajaxSettings.flatOptions || {};
            for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
            return i && T.extend(!0, t, i), t
        }
        ze.href = Ce.href, T.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ce.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ce.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Fe,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": T.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? We(We(t, T.ajaxSettings), e) : We(T.ajaxSettings, t)
            },
            ajaxPrefilter: qe(je),
            ajaxTransport: qe(Ie),
            ajax: function(t, e) {
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var i, r, o, s, a, l, u, c, f, d, h = T.ajaxSetup({}, e),
                    p = h.context || h,
                    g = h.context && (p.nodeType || p.jquery) ? T(p) : T.event,
                    m = T.Deferred(),
                    v = T.Callbacks("once memory"),
                    y = h.statusCode || {},
                    x = {},
                    w = {},
                    _ = "canceled",
                    C = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (u) {
                                if (!s)
                                    for (s = {}; e = Re.exec(o);) s[e[1].toLowerCase() + " "] = (s[e[1].toLowerCase() + " "] || []).concat(e[2]);
                                e = s[t.toLowerCase() + " "]
                            }
                            return null == e ? null : e.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return u ? o : null
                        },
                        setRequestHeader: function(t, e) {
                            return null == u && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t, x[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return null == u && (h.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (u) C.always(t[C.status]);
                                else
                                    for (e in t) y[e] = [y[e], t[e]];
                            return this
                        },
                        abort: function(t) {
                            var e = t || _;
                            return i && i.abort(e), S(0, e), this
                        }
                    };
                if (m.promise(C), h.url = ((t || h.url || Ce.href) + "").replace(He, Ce.protocol + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(H) || [""], null == h.crossDomain) {
                    l = b.createElement("a");
                    try {
                        l.href = h.url, l.href = l.href, h.crossDomain = ze.protocol + "//" + ze.host != l.protocol + "//" + l.host
                    } catch (t) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = T.param(h.data, h.traditional)), Be(je, h, e, C), u) return C;
                for (f in (c = T.event && h.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Ne.test(h.type), r = h.url.replace(Oe, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(De, "+")) : (d = h.url.slice(r.length), h.data && (h.processData || "string" == typeof h.data) && (r += (ke.test(r) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (r = r.replace($e, "$1"), d = (ke.test(r) ? "&" : "?") + "_=" + Se.guid++ + d), h.url = r + d), h.ifModified && (T.lastModified[r] && C.setRequestHeader("If-Modified-Since", T.lastModified[r]), T.etag[r] && C.setRequestHeader("If-None-Match", T.etag[r])), (h.data && h.hasContent && !1 !== h.contentType || e.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Fe + "; q=0.01" : "") : h.accepts["*"]), h.headers) C.setRequestHeader(f, h.headers[f]);
                if (h.beforeSend && (!1 === h.beforeSend.call(p, C, h) || u)) return C.abort();
                if (_ = "abort", v.add(h.complete), C.done(h.success), C.fail(h.error), i = Be(Ie, h, e, C)) {
                    if (C.readyState = 1, c && g.trigger("ajaxSend", [C, h]), u) return C;
                    h.async && h.timeout > 0 && (a = n.setTimeout((function() {
                        C.abort("timeout")
                    }), h.timeout));
                    try {
                        u = !1, i.send(x, S)
                    } catch (t) {
                        if (u) throw t;
                        S(-1, t)
                    }
                } else S(-1, "No Transport");

                function S(t, e, s, l) {
                    var f, d, b, x, w, _ = e;
                    u || (u = !0, a && n.clearTimeout(a), i = void 0, o = l || "", C.readyState = t > 0 ? 4 : 0, f = t >= 200 && t < 300 || 304 === t, s && (x = function(t, e, n) {
                        for (var i, r, o, s, a = t.contents, l = t.dataTypes;
                            "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                        if (i)
                            for (r in a)
                                if (a[r] && a[r].test(i)) {
                                    l.unshift(r);
                                    break
                                } if (l[0] in n) o = l[0];
                        else {
                            for (r in n) {
                                if (!l[0] || t.converters[r + " " + l[0]]) {
                                    o = r;
                                    break
                                }
                                s || (s = r)
                            }
                            o = o || s
                        }
                        if (o) return o !== l[0] && l.unshift(o), n[o]
                    }(h, C, s)), !f && T.inArray("script", h.dataTypes) > -1 && (h.converters["text script"] = function() {}), x = function(t, e, n, i) {
                        var r, o, s, a, l, u = {},
                            c = t.dataTypes.slice();
                        if (c[1])
                            for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
                        for (o = c.shift(); o;)
                            if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                                if ("*" === o) o = l;
                                else if ("*" !== l && l !== o) {
                            if (!(s = u[l + " " + o] || u["* " + o]))
                                for (r in u)
                                    if ((a = r.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                        !0 === s ? s = u[r] : !0 !== u[r] && (o = a[0], c.unshift(a[1]));
                                        break
                                    } if (!0 !== s)
                                if (s && t.throws) e = s(e);
                                else try {
                                    e = s(e)
                                } catch (t) {
                                    return {
                                        state: "parsererror",
                                        error: s ? t : "No conversion from " + l + " to " + o
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: e
                        }
                    }(h, x, C, f), f ? (h.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (T.lastModified[r] = w), (w = C.getResponseHeader("etag")) && (T.etag[r] = w)), 204 === t || "HEAD" === h.type ? _ = "nocontent" : 304 === t ? _ = "notmodified" : (_ = x.state, d = x.data, f = !(b = x.error))) : (b = _, !t && _ || (_ = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (e || _) + "", f ? m.resolveWith(p, [d, _, C]) : m.rejectWith(p, [C, _, b]), C.statusCode(y), y = void 0, c && g.trigger(f ? "ajaxSuccess" : "ajaxError", [C, h, f ? d : b]), v.fireWith(p, [C, _]), c && (g.trigger("ajaxComplete", [C, h]), --T.active || T.event.trigger("ajaxStop")))
                }
                return C
            },
            getJSON: function(t, e, n) {
                return T.get(t, e, n, "json")
            },
            getScript: function(t, e) {
                return T.get(t, void 0, e, "script")
            }
        }), T.each(["get", "post"], (function(t, e) {
            T[e] = function(t, n, i, r) {
                return v(n) && (r = r || i, i = n, n = void 0), T.ajax(T.extend({
                    url: t,
                    type: e,
                    dataType: r,
                    data: n,
                    success: i
                }, T.isPlainObject(t) && t))
            }
        })), T.ajaxPrefilter((function(t) {
            var e;
            for (e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
        })), T._evalUrl = function(t, e, n) {
            return T.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(t) {
                    T.globalEval(t, e, n)
                }
            })
        }, T.fn.extend({
            wrapAll: function(t) {
                var e;
                return this[0] && (v(t) && (t = t.call(this[0])), e = T(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map((function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                })).append(this)), this
            },
            wrapInner: function(t) {
                return v(t) ? this.each((function(e) {
                    T(this).wrapInner(t.call(this, e))
                })) : this.each((function() {
                    var e = T(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                }))
            },
            wrap: function(t) {
                var e = v(t);
                return this.each((function(n) {
                    T(this).wrapAll(e ? t.call(this, n) : t)
                }))
            },
            unwrap: function(t) {
                return this.parent(t).not("body").each((function() {
                    T(this).replaceWith(this.childNodes)
                })), this
            }
        }), T.expr.pseudos.hidden = function(t) {
            return !T.expr.pseudos.visible(t)
        }, T.expr.pseudos.visible = function(t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }, T.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (t) {}
        };
        var Xe = {
                0: 200,
                1223: 204
            },
            Ye = T.ajaxSettings.xhr();
        m.cors = !!Ye && "withCredentials" in Ye, m.ajax = Ye = !!Ye, T.ajaxTransport((function(t) {
            var e, i;
            if (m.cors || Ye && !t.crossDomain) return {
                send: function(r, o) {
                    var s, a = t.xhr();
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (s in t.xhrFields) a[s] = t.xhrFields[s];
                    for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(s, r[s]);
                    e = function(t) {
                        return function() {
                            e && (e = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Xe[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }, a.onload = e(), i = a.onerror = a.ontimeout = e("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                        4 === a.readyState && n.setTimeout((function() {
                            e && i()
                        }))
                    }, e = e("abort");
                    try {
                        a.send(t.hasContent && t.data || null)
                    } catch (t) {
                        if (e) throw t
                    }
                },
                abort: function() {
                    e && e()
                }
            }
        })), T.ajaxPrefilter((function(t) {
            t.crossDomain && (t.contents.script = !1)
        })), T.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return T.globalEval(t), t
                }
            }
        }), T.ajaxPrefilter("script", (function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        })), T.ajaxTransport("script", (function(t) {
            var e, n;
            if (t.crossDomain || t.scriptAttrs) return {
                send: function(i, r) {
                    e = T("<script>").attr(t.scriptAttrs || {}).prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function(t) {
                        e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                    }), b.head.appendChild(e[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }));
        var Ve, Ue = [],
            Ge = /(=)\?(?=&|$)|\?\?/;
        T.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Ue.pop() || T.expando + "_" + Se.guid++;
                return this[t] = !0, t
            }
        }), T.ajaxPrefilter("json jsonp", (function(t, e, i) {
            var r, o, s, a = !1 !== t.jsonp && (Ge.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ge.test(t.data) && "data");
            if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = v(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ge, "$1" + r) : !1 !== t.jsonp && (t.url += (ke.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
                return s || T.error(r + " was not called"), s[0]
            }, t.dataTypes[0] = "json", o = n[r], n[r] = function() {
                s = arguments
            }, i.always((function() {
                void 0 === o ? T(n).removeProp(r) : n[r] = o, t[r] && (t.jsonpCallback = e.jsonpCallback, Ue.push(r)), s && v(o) && o(s[0]), s = o = void 0
            })), "script"
        })), m.createHTMLDocument = ((Ve = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ve.childNodes.length), T.parseHTML = function(t, e, n) {
            return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (m.createHTMLDocument ? ((i = (e = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, e.head.appendChild(i)) : e = b), o = !n && [], (r = M.exec(t)) ? [e.createElement(r[1])] : (r = _t([t], e, o), o && o.length && T(o).remove(), T.merge([], r.childNodes)));
            var i, r, o
        }, T.fn.load = function(t, e, n) {
            var i, r, o, s = this,
                a = t.indexOf(" ");
            return a > -1 && (i = ye(t.slice(a)), t = t.slice(0, a)), v(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && T.ajax({
                url: t,
                type: r || "GET",
                dataType: "html",
                data: e
            }).done((function(t) {
                o = arguments, s.html(i ? T("<div>").append(T.parseHTML(t)).find(i) : t)
            })).always(n && function(t, e) {
                s.each((function() {
                    n.apply(this, o || [t.responseText, e, t])
                }))
            }), this
        }, T.expr.pseudos.animated = function(t) {
            return T.grep(T.timers, (function(e) {
                return t === e.elem
            })).length
        }, T.offset = {
            setOffset: function(t, e, n) {
                var i, r, o, s, a, l, u = T.css(t, "position"),
                    c = T(t),
                    f = {};
                "static" === u && (t.style.position = "relative"), a = c.offset(), o = T.css(t, "top"), l = T.css(t, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (s = (i = c.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), v(e) && (e = e.call(t, n, T.extend({}, a))), null != e.top && (f.top = e.top - a.top + s), null != e.left && (f.left = e.left - a.left + r), "using" in e ? e.using.call(t, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f))
            }
        }, T.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each((function(e) {
                    T.offset.setOffset(this, t, e)
                }));
                var e, n, i = this[0];
                return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                    top: e.top + n.pageYOffset,
                    left: e.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, n, i = this[0],
                        r = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === T.css(i, "position")) e = i.getBoundingClientRect();
                    else {
                        for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === T.css(t, "position");) t = t.parentNode;
                        t && t !== i && 1 === t.nodeType && ((r = T(t).offset()).top += T.css(t, "borderTopWidth", !0), r.left += T.css(t, "borderLeftWidth", !0))
                    }
                    return {
                        top: e.top - r.top - T.css(i, "marginTop", !0),
                        left: e.left - r.left - T.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map((function() {
                    for (var t = this.offsetParent; t && "static" === T.css(t, "position");) t = t.offsetParent;
                    return t || ot
                }))
            }
        }), T.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, (function(t, e) {
            var n = "pageYOffset" === e;
            T.fn[t] = function(i) {
                return W(this, (function(t, i, r) {
                    var o;
                    if (y(t) ? o = t : 9 === t.nodeType && (o = t.defaultView), void 0 === r) return o ? o[e] : t[i];
                    o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : t[i] = r
                }), t, i, arguments.length)
            }
        })), T.each(["top", "left"], (function(t, e) {
            T.cssHooks[e] = Yt(m.pixelPosition, (function(t, n) {
                if (n) return n = Xt(t, e), zt.test(n) ? T(t).position()[e] + "px" : n
            }))
        })), T.each({
            Height: "height",
            Width: "width"
        }, (function(t, e) {
            T.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, (function(n, i) {
                T.fn[i] = function(r, o) {
                    var s = arguments.length && (n || "boolean" != typeof r),
                        a = n || (!0 === r || !0 === o ? "margin" : "border");
                    return W(this, (function(e, n, r) {
                        var o;
                        return y(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === r ? T.css(e, n, a) : T.style(e, n, r, a)
                    }), e, s ? r : void 0, s)
                }
            }))
        })), T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(t, e) {
            T.fn[e] = function(t) {
                return this.on(e, t)
            }
        })), T.fn.extend({
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            },
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(t, e) {
            T.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }));
        var Qe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        T.proxy = function(t, e) {
            var n, i, r;
            if ("string" == typeof e && (n = t[e], e = t, t = n), v(t)) return i = a.call(arguments, 2), (r = function() {
                return t.apply(e || this, i.concat(a.call(arguments)))
            }).guid = t.guid = t.guid || T.guid++, r
        }, T.holdReady = function(t) {
            t ? T.readyWait++ : T.ready(!0)
        }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = E, T.isFunction = v, T.isWindow = y, T.camelCase = U, T.type = _, T.now = Date.now, T.isNumeric = function(t) {
            var e = T.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        }, T.trim = function(t) {
            return null == t ? "" : (t + "").replace(Qe, "")
        }, void 0 === (i = function() {
            return T
        }.apply(e, [])) || (t.exports = i);
        var Ke = n.jQuery,
            Ze = n.$;
        return T.noConflict = function(t) {
            return n.$ === T && (n.$ = Ze), t && n.jQuery === T && (n.jQuery = Ke), T
        }, void 0 === r && (n.jQuery = n.$ = T), T
    }))
}, function(t, e) {
    ! function(t, e, n, i) {
        "use strict";
        if (t.console = t.console || {
                info: function(t) {}
            }, n)
            if (n.fn.fancybox) console.info("fancyBox already initialized");
            else {
                var r, o, s = {
                        closeExisting: !1,
                        loop: !1,
                        gutter: 50,
                        keyboard: !0,
                        preventCaptionOverlap: !0,
                        arrows: !0,
                        infobar: !0,
                        smallBtn: "auto",
                        toolbar: "auto",
                        buttons: ["zoom", "slideShow", "thumbs", "close"],
                        idleTime: 3,
                        protect: !1,
                        modal: !1,
                        image: {
                            preload: !1
                        },
                        ajax: {
                            settings: {
                                data: {
                                    fancybox: !0
                                }
                            }
                        },
                        iframe: {
                            tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                            preload: !0,
                            css: {},
                            attr: {
                                scrolling: "auto"
                            }
                        },
                        video: {
                            tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                            format: "",
                            autoStart: !0
                        },
                        defaultType: "image",
                        animationEffect: "zoom",
                        animationDuration: 366,
                        zoomOpacity: "auto",
                        transitionEffect: "fade",
                        transitionDuration: 366,
                        slideClass: "",
                        baseClass: "",
                        baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
                        spinnerTpl: '<div class="fancybox-loading"></div>',
                        errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
                        btnTpl: {
                            download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                            zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                            close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                            arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                            arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                            smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
                        },
                        parentEl: "body",
                        hideScrollbar: !0,
                        autoFocus: !0,
                        backFocus: !0,
                        trapFocus: !0,
                        fullScreen: {
                            autoStart: !1
                        },
                        touch: {
                            vertical: !0,
                            momentum: !0
                        },
                        hash: null,
                        media: {},
                        slideShow: {
                            autoStart: !1,
                            speed: 3e3
                        },
                        thumbs: {
                            autoStart: !1,
                            hideOnClose: !0,
                            parentEl: ".fancybox-container",
                            axis: "y"
                        },
                        wheel: "auto",
                        onInit: n.noop,
                        beforeLoad: n.noop,
                        afterLoad: n.noop,
                        beforeShow: n.noop,
                        afterShow: n.noop,
                        beforeClose: n.noop,
                        afterClose: n.noop,
                        onActivate: n.noop,
                        onDeactivate: n.noop,
                        clickContent: function(t, e) {
                            return "image" === t.type && "zoom"
                        },
                        clickSlide: "close",
                        clickOutside: "close",
                        dblclickContent: !1,
                        dblclickSlide: !1,
                        dblclickOutside: !1,
                        mobile: {
                            preventCaptionOverlap: !1,
                            idleTime: !1,
                            clickContent: function(t, e) {
                                return "image" === t.type && "toggleControls"
                            },
                            clickSlide: function(t, e) {
                                return "image" === t.type ? "toggleControls" : "close"
                            },
                            dblclickContent: function(t, e) {
                                return "image" === t.type && "zoom"
                            },
                            dblclickSlide: function(t, e) {
                                return "image" === t.type && "zoom"
                            }
                        },
                        lang: "en",
                        i18n: {
                            en: {
                                CLOSE: "Close",
                                NEXT: "Next",
                                PREV: "Previous",
                                ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                                PLAY_START: "Start slideshow",
                                PLAY_STOP: "Pause slideshow",
                                FULL_SCREEN: "Full screen",
                                THUMBS: "Thumbnails",
                                DOWNLOAD: "Download",
                                SHARE: "Share",
                                ZOOM: "Zoom"
                            },
                            de: {
                                CLOSE: "Schlie&szlig;en",
                                NEXT: "Weiter",
                                PREV: "Zur&uuml;ck",
                                ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                                PLAY_START: "Diaschau starten",
                                PLAY_STOP: "Diaschau beenden",
                                FULL_SCREEN: "Vollbild",
                                THUMBS: "Vorschaubilder",
                                DOWNLOAD: "Herunterladen",
                                SHARE: "Teilen",
                                ZOOM: "Vergr&ouml;&szlig;ern"
                            }
                        }
                    },
                    a = n(t),
                    l = n(e),
                    u = 0,
                    c = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
                        return t.setTimeout(e, 1e3 / 60)
                    },
                    f = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
                        t.clearTimeout(e)
                    },
                    d = function() {
                        var t, n = e.createElement("fakeelement"),
                            i = {
                                transition: "transitionend",
                                OTransition: "oTransitionEnd",
                                MozTransition: "transitionend",
                                WebkitTransition: "webkitTransitionEnd"
                            };
                        for (t in i)
                            if (void 0 !== n.style[t]) return i[t];
                        return "transitionend"
                    }(),
                    h = function(t) {
                        return t && t.length && t[0].offsetHeight
                    },
                    p = function(t, e) {
                        var i = n.extend(!0, {}, t, e);
                        return n.each(e, (function(t, e) {
                            n.isArray(e) && (i[t] = e)
                        })), i
                    },
                    g = function(t, e, i) {
                        this.opts = p({
                            index: i
                        }, n.fancybox.defaults), n.isPlainObject(e) && (this.opts = p(this.opts, e)), n.fancybox.isMobile && (this.opts = p(this.opts, this.opts.mobile)), this.id = this.opts.id || ++u, this.currIndex = parseInt(this.opts.index, 10) || 0, this.prevIndex = null, this.prevPos = null, this.currPos = 0, this.firstRun = !0, this.group = [], this.slides = {}, this.addContent(t), this.group.length && this.init()
                    };
                n.extend(g.prototype, {
                    init: function() {
                        var i, r, o = this,
                            s = o.group[o.currIndex].opts;
                        s.closeExisting && n.fancybox.close(!0), n("body").addClass("fancybox-active"), !n.fancybox.getInstance() && !1 !== s.hideScrollbar && !n.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (t.innerWidth - e.documentElement.clientWidth) + "px;}</style>"), n("body").addClass("compensate-for-scrollbar")), r = "", n.each(s.buttons, (function(t, e) {
                            r += s.btnTpl[e] || ""
                        })), i = n(o.translate(o, s.baseTpl.replace("{{buttons}}", r).replace("{{arrows}}", s.btnTpl.arrowLeft + s.btnTpl.arrowRight))).attr("id", "fancybox-container-" + o.id).addClass(s.baseClass).data("FancyBox", o).appendTo(s.parentEl), o.$refs = {
                            container: i
                        }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach((function(t) {
                            o.$refs[t] = i.find(".fancybox-" + t)
                        })), o.trigger("onInit"), o.activate(), o.jumpTo(o.currIndex)
                    },
                    translate: function(t, e) {
                        var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
                        return e.replace(/\{\{(\w+)\}\}/g, (function(t, e) {
                            return void 0 === n[e] ? t : n[e]
                        }))
                    },
                    addContent: function(t) {
                        var e, i = this,
                            r = n.makeArray(t);
                        n.each(r, (function(t, e) {
                            var r, o, s, a, l, u = {},
                                c = {};
                            n.isPlainObject(e) ? (u = e, c = e.opts || e) : "object" === n.type(e) && n(e).length ? (c = (r = n(e)).data() || {}, (c = n.extend(!0, {}, c, c.options)).$orig = r, u.src = i.opts.src || c.src || r.attr("href"), u.type || u.src || (u.type = "inline", u.src = e)) : u = {
                                type: "html",
                                src: e + ""
                            }, u.opts = n.extend(!0, {}, i.opts, c), n.isArray(c.buttons) && (u.opts.buttons = c.buttons), n.fancybox.isMobile && u.opts.mobile && (u.opts = p(u.opts, u.opts.mobile)), o = u.type || u.opts.type, a = u.src || "", !o && a && ((s = a.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (o = "video", u.opts.video.format || (u.opts.video.format = "video/" + ("ogv" === s[1] ? "ogg" : s[1]))) : a.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? o = "image" : a.match(/\.(pdf)((\?|#).*)?$/i) ? (o = "iframe", u = n.extend(!0, u, {
                                contentType: "pdf",
                                opts: {
                                    iframe: {
                                        preload: !1
                                    }
                                }
                            })) : "#" === a.charAt(0) && (o = "inline")), o ? u.type = o : i.trigger("objectNeedsType", u), u.contentType || (u.contentType = n.inArray(u.type, ["html", "inline", "ajax"]) > -1 ? "html" : u.type), u.index = i.group.length, "auto" == u.opts.smallBtn && (u.opts.smallBtn = n.inArray(u.type, ["html", "inline", "ajax"]) > -1), "auto" === u.opts.toolbar && (u.opts.toolbar = !u.opts.smallBtn), u.$thumb = u.opts.$thumb || null, u.opts.$trigger && u.index === i.opts.index && (u.$thumb = u.opts.$trigger.find("img:first"), u.$thumb.length && (u.opts.$orig = u.opts.$trigger)), u.$thumb && u.$thumb.length || !u.opts.$orig || (u.$thumb = u.opts.$orig.find("img:first")), u.$thumb && !u.$thumb.length && (u.$thumb = null), u.thumb = u.opts.thumb || (u.$thumb ? u.$thumb[0].src : null), "function" === n.type(u.opts.caption) && (u.opts.caption = u.opts.caption.apply(e, [i, u])), "function" === n.type(i.opts.caption) && (u.opts.caption = i.opts.caption.apply(e, [i, u])), u.opts.caption instanceof n || (u.opts.caption = void 0 === u.opts.caption ? "" : u.opts.caption + ""), "ajax" === u.type && (l = a.split(/\s+/, 2)).length > 1 && (u.src = l.shift(), u.opts.filter = l.shift()), u.opts.modal && (u.opts = n.extend(!0, u.opts, {
                                trapFocus: !0,
                                infobar: 0,
                                toolbar: 0,
                                smallBtn: 0,
                                keyboard: 0,
                                slideShow: 0,
                                fullScreen: 0,
                                thumbs: 0,
                                touch: 0,
                                clickContent: !1,
                                clickSlide: !1,
                                clickOutside: !1,
                                dblclickContent: !1,
                                dblclickSlide: !1,
                                dblclickOutside: !1
                            })), i.group.push(u)
                        })), Object.keys(i.slides).length && (i.updateControls(), (e = i.Thumbs) && e.isActive && (e.create(), e.focus()))
                    },
                    addEvents: function() {
                        var e = this;
                        e.removeEvents(), e.$refs.container.on("click.fb-close", "[data-fancybox-close]", (function(t) {
                            t.stopPropagation(), t.preventDefault(), e.close(t)
                        })).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", (function(t) {
                            t.stopPropagation(), t.preventDefault(), e.previous()
                        })).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", (function(t) {
                            t.stopPropagation(), t.preventDefault(), e.next()
                        })).on("click.fb", "[data-fancybox-zoom]", (function(t) {
                            e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                        })), a.on("orientationchange.fb resize.fb", (function(t) {
                            t && t.originalEvent && "resize" === t.originalEvent.type ? (e.requestId && f(e.requestId), e.requestId = c((function() {
                                e.update(t)
                            }))) : (e.current && "iframe" === e.current.type && e.$refs.stage.hide(), setTimeout((function() {
                                e.$refs.stage.show(), e.update(t)
                            }), n.fancybox.isMobile ? 600 : 250))
                        })), l.on("keydown.fb", (function(t) {
                            var i = (n.fancybox ? n.fancybox.getInstance() : null).current,
                                r = t.keyCode || t.which;
                            if (9 != r) {
                                if (!(!i.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || n(t.target).is("input,textarea,video,audio,select"))) return 8 === r || 27 === r ? (t.preventDefault(), void e.close(t)) : 37 === r || 38 === r ? (t.preventDefault(), void e.previous()) : 39 === r || 40 === r ? (t.preventDefault(), void e.next()) : void e.trigger("afterKeydown", t, r)
                            } else i.opts.trapFocus && e.focus(t)
                        })), e.group[e.currIndex].opts.idleTime && (e.idleSecondsCounter = 0, l.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", (function(t) {
                            e.idleSecondsCounter = 0, e.isIdle && e.showControls(), e.isIdle = !1
                        })), e.idleInterval = t.setInterval((function() {
                            e.idleSecondsCounter++, e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime && !e.isDragging && (e.isIdle = !0, e.idleSecondsCounter = 0, e.hideControls())
                        }), 1e3))
                    },
                    removeEvents: function() {
                        a.off("orientationchange.fb resize.fb"), l.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), this.idleInterval && (t.clearInterval(this.idleInterval), this.idleInterval = null)
                    },
                    previous: function(t) {
                        return this.jumpTo(this.currPos - 1, t)
                    },
                    next: function(t) {
                        return this.jumpTo(this.currPos + 1, t)
                    },
                    jumpTo: function(t, e) {
                        var i, r, o, s, a, l, u, c, f, d = this,
                            p = d.group.length;
                        if (!(d.isDragging || d.isClosing || d.isAnimating && d.firstRun)) {
                            if (t = parseInt(t, 10), !(o = d.current ? d.current.opts.loop : d.opts.loop) && (t < 0 || t >= p)) return !1;
                            if (i = d.firstRun = !Object.keys(d.slides).length, a = d.current, d.prevIndex = d.currIndex, d.prevPos = d.currPos, s = d.createSlide(t), p > 1 && ((o || s.index < p - 1) && d.createSlide(t + 1), (o || s.index > 0) && d.createSlide(t - 1)), d.current = s, d.currIndex = s.index, d.currPos = s.pos, d.trigger("beforeShow", i), d.updateControls(), s.forcedDuration = void 0, n.isNumeric(e) ? s.forcedDuration = e : e = s.opts[i ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), r = d.isMoved(s), s.$slide.addClass("fancybox-slide--current"), i) return s.opts.animationEffect && e && d.$refs.container.css("transition-duration", e + "ms"), d.$refs.container.addClass("fancybox-is-open").trigger("focus"), d.loadSlide(s), void d.preload("image");
                            l = n.fancybox.getTranslate(a.$slide), u = n.fancybox.getTranslate(d.$refs.stage), n.each(d.slides, (function(t, e) {
                                n.fancybox.stop(e.$slide, !0)
                            })), a.pos !== s.pos && (a.isComplete = !1), a.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), r ? (f = l.left - (a.pos * l.width + a.pos * a.opts.gutter), n.each(d.slides, (function(t, i) {
                                i.$slide.removeClass("fancybox-animated").removeClass((function(t, e) {
                                    return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                                }));
                                var r = i.pos * l.width + i.pos * i.opts.gutter;
                                n.fancybox.setTranslate(i.$slide, {
                                    top: 0,
                                    left: r - u.left + f
                                }), i.pos !== s.pos && i.$slide.addClass("fancybox-slide--" + (i.pos > s.pos ? "next" : "previous")), h(i.$slide), n.fancybox.animate(i.$slide, {
                                    top: 0,
                                    left: (i.pos - s.pos) * l.width + (i.pos - s.pos) * i.opts.gutter
                                }, e, (function() {
                                    i.$slide.css({
                                        transform: "",
                                        opacity: ""
                                    }).removeClass("fancybox-slide--next fancybox-slide--previous"), i.pos === d.currPos && d.complete()
                                }))
                            }))) : e && s.opts.transitionEffect && (c = "fancybox-animated fancybox-fx-" + s.opts.transitionEffect, a.$slide.addClass("fancybox-slide--" + (a.pos > s.pos ? "next" : "previous")), n.fancybox.animate(a.$slide, c, e, (function() {
                                a.$slide.removeClass(c).removeClass("fancybox-slide--next fancybox-slide--previous")
                            }), !1)), s.isLoaded ? d.revealContent(s) : d.loadSlide(s), d.preload("image")
                        }
                    },
                    createSlide: function(t) {
                        var e, i;
                        return i = (i = t % this.group.length) < 0 ? this.group.length + i : i, !this.slides[t] && this.group[i] && (e = n('<div class="fancybox-slide"></div>').appendTo(this.$refs.stage), this.slides[t] = n.extend(!0, {}, this.group[i], {
                            pos: t,
                            $slide: e,
                            isLoaded: !1
                        }), this.updateSlide(this.slides[t])), this.slides[t]
                    },
                    scaleToActual: function(t, e, i) {
                        var r, o, s, a, l, u = this,
                            c = u.current,
                            f = c.$content,
                            d = n.fancybox.getTranslate(c.$slide).width,
                            h = n.fancybox.getTranslate(c.$slide).height,
                            p = c.width,
                            g = c.height;
                        u.isAnimating || u.isMoved() || !f || "image" != c.type || !c.isLoaded || c.hasError || (u.isAnimating = !0, n.fancybox.stop(f), t = void 0 === t ? .5 * d : t, e = void 0 === e ? .5 * h : e, (r = n.fancybox.getTranslate(f)).top -= n.fancybox.getTranslate(c.$slide).top, r.left -= n.fancybox.getTranslate(c.$slide).left, a = p / r.width, l = g / r.height, o = .5 * d - .5 * p, s = .5 * h - .5 * g, p > d && ((o = r.left * a - (t * a - t)) > 0 && (o = 0), o < d - p && (o = d - p)), g > h && ((s = r.top * l - (e * l - e)) > 0 && (s = 0), s < h - g && (s = h - g)), u.updateCursor(p, g), n.fancybox.animate(f, {
                            top: s,
                            left: o,
                            scaleX: a,
                            scaleY: l
                        }, i || 366, (function() {
                            u.isAnimating = !1
                        })), u.SlideShow && u.SlideShow.isActive && u.SlideShow.stop())
                    },
                    scaleToFit: function(t) {
                        var e, i = this,
                            r = i.current,
                            o = r.$content;
                        i.isAnimating || i.isMoved() || !o || "image" != r.type || !r.isLoaded || r.hasError || (i.isAnimating = !0, n.fancybox.stop(o), e = i.getFitPos(r), i.updateCursor(e.width, e.height), n.fancybox.animate(o, {
                            top: e.top,
                            left: e.left,
                            scaleX: e.width / o.width(),
                            scaleY: e.height / o.height()
                        }, t || 366, (function() {
                            i.isAnimating = !1
                        })))
                    },
                    getFitPos: function(t) {
                        var e, i, r, o, s = t.$content,
                            a = t.$slide,
                            l = t.width || t.opts.width,
                            u = t.height || t.opts.height,
                            c = {};
                        return !!(t.isLoaded && s && s.length) && (e = n.fancybox.getTranslate(this.$refs.stage).width, i = n.fancybox.getTranslate(this.$refs.stage).height, e -= parseFloat(a.css("paddingLeft")) + parseFloat(a.css("paddingRight")) + parseFloat(s.css("marginLeft")) + parseFloat(s.css("marginRight")), i -= parseFloat(a.css("paddingTop")) + parseFloat(a.css("paddingBottom")) + parseFloat(s.css("marginTop")) + parseFloat(s.css("marginBottom")), l && u || (l = e, u = i), (l *= r = Math.min(1, e / l, i / u)) > e - .5 && (l = e), (u *= r) > i - .5 && (u = i), "image" === t.type ? (c.top = Math.floor(.5 * (i - u)) + parseFloat(a.css("paddingTop")), c.left = Math.floor(.5 * (e - l)) + parseFloat(a.css("paddingLeft"))) : "video" === t.contentType && (u > l / (o = t.opts.width && t.opts.height ? l / u : t.opts.ratio || 16 / 9) ? u = l / o : l > u * o && (l = u * o)), c.width = l, c.height = u, c)
                    },
                    update: function(t) {
                        var e = this;
                        n.each(e.slides, (function(n, i) {
                            e.updateSlide(i, t)
                        }))
                    },
                    updateSlide: function(t, e) {
                        var i = t && t.$content,
                            r = t.width || t.opts.width,
                            o = t.height || t.opts.height,
                            s = t.$slide;
                        this.adjustCaption(t), i && (r || o || "video" === t.contentType) && !t.hasError && (n.fancybox.stop(i), n.fancybox.setTranslate(i, this.getFitPos(t)), t.pos === this.currPos && (this.isAnimating = !1, this.updateCursor())), this.adjustLayout(t), s.length && (s.trigger("refresh"), t.pos === this.currPos && this.$refs.toolbar.add(this.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", s.get(0).scrollHeight > s.get(0).clientHeight)), this.trigger("onUpdate", t, e)
                    },
                    centerSlide: function(t) {
                        var e = this,
                            i = e.current,
                            r = i.$slide;
                        !e.isClosing && i && (r.siblings().css({
                            transform: "",
                            opacity: ""
                        }), r.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), n.fancybox.animate(r, {
                            top: 0,
                            left: 0,
                            opacity: 1
                        }, void 0 === t ? 0 : t, (function() {
                            r.css({
                                transform: "",
                                opacity: ""
                            }), i.isComplete || e.complete()
                        }), !1))
                    },
                    isMoved: function(t) {
                        var e, i, r = t || this.current;
                        return !!r && (i = n.fancybox.getTranslate(this.$refs.stage), e = n.fancybox.getTranslate(r.$slide), !r.$slide.hasClass("fancybox-animated") && (Math.abs(e.top - i.top) > .5 || Math.abs(e.left - i.left) > .5))
                    },
                    updateCursor: function(t, e) {
                        var i, r, o = this.current,
                            s = this.$refs.container;
                        o && !this.isClosing && this.Guestures && (s.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), r = !!(i = this.canPan(t, e)) || this.isZoomable(), s.toggleClass("fancybox-is-zoomable", r), n("[data-fancybox-zoom]").prop("disabled", !r), i ? s.addClass("fancybox-can-pan") : r && ("zoom" === o.opts.clickContent || n.isFunction(o.opts.clickContent) && "zoom" == o.opts.clickContent(o)) ? s.addClass("fancybox-can-zoomIn") : o.opts.touch && (o.opts.touch.vertical || this.group.length > 1) && "video" !== o.contentType && s.addClass("fancybox-can-swipe"))
                    },
                    isZoomable: function() {
                        var t, e = this.current;
                        if (e && !this.isClosing && "image" === e.type && !e.hasError) {
                            if (!e.isLoaded) return !0;
                            if ((t = this.getFitPos(e)) && (e.width > t.width || e.height > t.height)) return !0
                        }
                        return !1
                    },
                    isScaledDown: function(t, e) {
                        var i = !1,
                            r = this.current,
                            o = r.$content;
                        return void 0 !== t && void 0 !== e ? i = t < r.width && e < r.height : o && (i = (i = n.fancybox.getTranslate(o)).width < r.width && i.height < r.height), i
                    },
                    canPan: function(t, e) {
                        var i = this.current,
                            r = null,
                            o = !1;
                        return "image" === i.type && (i.isComplete || t && e) && !i.hasError && (o = this.getFitPos(i), void 0 !== t && void 0 !== e ? r = {
                            width: t,
                            height: e
                        } : i.isComplete && (r = n.fancybox.getTranslate(i.$content)), r && o && (o = Math.abs(r.width - o.width) > 1.5 || Math.abs(r.height - o.height) > 1.5)), o
                    },
                    loadSlide: function(t) {
                        var e, i, r, o = this;
                        if (!t.isLoading && !t.isLoaded) {
                            if (t.isLoading = !0, !1 === o.trigger("beforeLoad", t)) return t.isLoading = !1, !1;
                            switch (e = t.type, (i = t.$slide).off("refresh").trigger("onReset").addClass(t.opts.slideClass), e) {
                                case "image":
                                    o.setImage(t);
                                    break;
                                case "iframe":
                                    o.setIframe(t);
                                    break;
                                case "html":
                                    o.setContent(t, t.src || t.content);
                                    break;
                                case "video":
                                    o.setContent(t, t.opts.video.tpl.replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.opts.videoFormat || t.opts.video.format || "").replace("{{poster}}", t.thumb || ""));
                                    break;
                                case "inline":
                                    n(t.src).length ? o.setContent(t, n(t.src)) : o.setError(t);
                                    break;
                                case "ajax":
                                    o.showLoading(t), r = n.ajax(n.extend({}, t.opts.ajax.settings, {
                                        url: t.src,
                                        success: function(e, n) {
                                            "success" === n && o.setContent(t, e)
                                        },
                                        error: function(e, n) {
                                            e && "abort" !== n && o.setError(t)
                                        }
                                    })), i.one("onReset", (function() {
                                        r.abort()
                                    }));
                                    break;
                                default:
                                    o.setError(t)
                            }
                            return !0
                        }
                    },
                    setImage: function(t) {
                        var i, r = this;
                        setTimeout((function() {
                            var e = t.$image;
                            r.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || r.showLoading(t)
                        }), 50), r.checkSrcset(t), t.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")), !1 !== t.opts.preload && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width, t.height = t.opts.height, (i = e.createElement("img")).onerror = function() {
                            n(this).remove(), t.$ghost = null
                        }, i.onload = function() {
                            r.afterLoad(t)
                        }, t.$ghost = n(i).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)), r.setBigImage(t)
                    },
                    checkSrcset: function(e) {
                        var n, i, r, o, s = e.opts.srcset || e.opts.image.srcset;
                        if (s) {
                            r = t.devicePixelRatio || 1, o = t.innerWidth * r, (i = s.split(",").map((function(t) {
                                var e = {};
                                return t.trim().split(/\s+/).forEach((function(t, n) {
                                    var i = parseInt(t.substring(0, t.length - 1), 10);
                                    if (0 === n) return e.url = t;
                                    i && (e.value = i, e.postfix = t[t.length - 1])
                                })), e
                            }))).sort((function(t, e) {
                                return t.value - e.value
                            }));
                            for (var a = 0; a < i.length; a++) {
                                var l = i[a];
                                if ("w" === l.postfix && l.value >= o || "x" === l.postfix && l.value >= r) {
                                    n = l;
                                    break
                                }
                            }!n && i.length && (n = i[i.length - 1]), n && (e.src = n.url, e.width && e.height && "w" == n.postfix && (e.height = e.width / e.height * n.value, e.width = n.value), e.opts.srcset = s)
                        }
                    },
                    setBigImage: function(t) {
                        var i = this,
                            r = e.createElement("img"),
                            o = n(r);
                        t.$image = o.one("error", (function() {
                            i.setError(t)
                        })).one("load", (function() {
                            var e;
                            t.$ghost || (i.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), i.afterLoad(t)), i.isClosing || (t.opts.srcset && ((e = t.opts.sizes) && "auto" !== e || (e = (t.width / t.height > 1 && a.width() / a.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"), o.attr("sizes", e).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout((function() {
                                t.$ghost && !i.isClosing && t.$ghost.hide()
                            }), Math.min(300, Math.max(1e3, t.height / 1600))), i.hideLoading(t))
                        })).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (r.complete || "complete" == r.readyState) && o.naturalWidth && o.naturalHeight ? o.trigger("load") : r.error && o.trigger("error")
                    },
                    resolveImageSlideSize: function(t, e, n) {
                        var i = parseInt(t.opts.width, 10),
                            r = parseInt(t.opts.height, 10);
                        t.width = e, t.height = n, i > 0 && (t.width = i, t.height = Math.floor(i * n / e)), r > 0 && (t.width = Math.floor(r * e / n), t.height = r)
                    },
                    setIframe: function(t) {
                        var e, i = this,
                            r = t.opts.iframe,
                            o = t.$slide;
                        t.$content = n('<div class="fancybox-content' + (r.preload ? " fancybox-is-hidden" : "") + '"></div>').css(r.css).appendTo(o), o.addClass("fancybox-slide--" + t.contentType), t.$iframe = e = n(r.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(r.attr).appendTo(t.$content), r.preload ? (i.showLoading(t), e.on("load.fb error.fb", (function(e) {
                            this.isReady = 1, t.$slide.trigger("refresh"), i.afterLoad(t)
                        })), o.on("refresh.fb", (function() {
                            var n, i = t.$content,
                                s = r.css.width,
                                a = r.css.height;
                            if (1 === e[0].isReady) {
                                try {
                                    n = e.contents().find("body")
                                } catch (t) {}
                                n && n.length && n.children().length && (o.css("overflow", "visible"), i.css({
                                    width: "100%",
                                    "max-width": "100%",
                                    height: "9999px"
                                }), void 0 === s && (s = Math.ceil(Math.max(n[0].clientWidth, n.outerWidth(!0)))), i.css("width", s || "").css("max-width", ""), void 0 === a && (a = Math.ceil(Math.max(n[0].clientHeight, n.outerHeight(!0)))), i.css("height", a || ""), o.css("overflow", "auto")), i.removeClass("fancybox-is-hidden")
                            }
                        }))) : i.afterLoad(t), e.attr("src", t.src), o.one("onReset", (function() {
                            try {
                                n(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                            } catch (t) {}
                            n(this).off("refresh.fb").empty(), t.isLoaded = !1, t.isRevealed = !1
                        }))
                    },
                    setContent: function(t, e) {
                        var i;
                        this.isClosing || (this.hideLoading(t), t.$content && n.fancybox.stop(t.$content), t.$slide.empty(), (i = e) && i.hasOwnProperty && i instanceof n && e.parent().length ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"), t.$placeholder = n("<div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents()), t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", (function() {
                            n(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (n(this).empty(), t.isLoaded = !1, t.isRevealed = !1)
                        })), n(e).appendTo(t.$slide), n(e).is("video,audio") && (n(e).addClass("fancybox-video"), n(e).wrap("<div></div>"), t.contentType = "video", t.opts.width = t.opts.width || n(e).attr("width"), t.opts.height = t.opts.height || n(e).attr("height")), t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), t.$content.siblings().hide(), t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()), t.$content.addClass("fancybox-content"), t.$slide.addClass("fancybox-slide--" + t.contentType), this.afterLoad(t))
                    },
                    setError: function(t) {
                        t.hasError = !0, t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"), t.contentType = "html", this.setContent(t, this.translate(t, t.opts.errorTpl)), t.pos === this.currPos && (this.isAnimating = !1)
                    },
                    showLoading: function(t) {
                        (t = t || this.current) && !t.$spinner && (t.$spinner = n(this.translate(this, this.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))
                    },
                    hideLoading: function(t) {
                        (t = t || this.current) && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner)
                    },
                    afterLoad: function(t) {
                        this.isClosing || (t.isLoading = !1, t.isLoaded = !0, this.trigger("afterLoad", t), this.hideLoading(t), !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = n(this.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", (function(t) {
                            return 2 == t.button && t.preventDefault(), !0
                        })), "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), this.adjustCaption(t), this.adjustLayout(t), t.pos === this.currPos && this.updateCursor(), this.revealContent(t))
                    },
                    adjustCaption: function(t) {
                        var e, n = t || this.current,
                            i = n.opts.caption,
                            r = n.opts.preventCaptionOverlap,
                            o = this.$refs.caption,
                            s = !1;
                        o.toggleClass("fancybox-caption--separate", r), r && i && i.length && (n.pos !== this.currPos ? ((e = o.clone().appendTo(o.parent())).children().eq(0).empty().html(i), s = e.outerHeight(!0), e.empty().remove()) : this.$caption && (s = this.$caption.outerHeight(!0)), n.$slide.css("padding-bottom", s || ""))
                    },
                    adjustLayout: function(t) {
                        var e, n, i, r, o = t || this.current;
                        o.isLoaded && !0 !== o.opts.disableLayoutFix && (o.$content.css("margin-bottom", ""), o.$content.outerHeight() > o.$slide.height() + .5 && (i = o.$slide[0].style["padding-bottom"], r = o.$slide.css("padding-bottom"), parseFloat(r) > 0 && (e = o.$slide[0].scrollHeight, o.$slide.css("padding-bottom", 0), Math.abs(e - o.$slide[0].scrollHeight) < 1 && (n = r), o.$slide.css("padding-bottom", i))), o.$content.css("margin-bottom", n))
                    },
                    revealContent: function(t) {
                        var e, i, r, o, s = this,
                            a = t.$slide,
                            l = !1,
                            u = !1,
                            c = s.isMoved(t),
                            f = t.isRevealed;
                        return t.isRevealed = !0, e = t.opts[s.firstRun ? "animationEffect" : "transitionEffect"], r = t.opts[s.firstRun ? "animationDuration" : "transitionDuration"], r = parseInt(void 0 === t.forcedDuration ? r : t.forcedDuration, 10), !c && t.pos === s.currPos && r || (e = !1), "zoom" === e && (t.pos === s.currPos && r && "image" === t.type && !t.hasError && (u = s.getThumbPos(t)) ? l = s.getFitPos(t) : e = "fade"), "zoom" === e ? (s.isAnimating = !0, l.scaleX = l.width / u.width, l.scaleY = l.height / u.height, "auto" == (o = t.opts.zoomOpacity) && (o = Math.abs(t.width / t.height - u.width / u.height) > .1), o && (u.opacity = .1, l.opacity = 1), n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), u), h(t.$content), void n.fancybox.animate(t.$content, l, r, (function() {
                            s.isAnimating = !1, s.complete()
                        }))) : (s.updateSlide(t), e ? (n.fancybox.stop(a), i = "fancybox-slide--" + (t.pos >= s.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e, a.addClass(i).removeClass("fancybox-slide--current"), t.$content.removeClass("fancybox-is-hidden"), h(a), "image" !== t.type && t.$content.hide().show(0), void n.fancybox.animate(a, "fancybox-slide--current", r, (function() {
                            a.removeClass(i).css({
                                transform: "",
                                opacity: ""
                            }), t.pos === s.currPos && s.complete()
                        }), !0)) : (t.$content.removeClass("fancybox-is-hidden"), f || !c || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"), void(t.pos === s.currPos && s.complete())))
                    },
                    getThumbPos: function(t) {
                        var i, r, o, s, a, l, u = t.$thumb;
                        return !(!u || ! function(t) {
                            var i, r;
                            return !(!t || t.ownerDocument !== e) && (n(".fancybox-container").css("pointer-events", "none"), i = {
                                x: t.getBoundingClientRect().left + t.offsetWidth / 2,
                                y: t.getBoundingClientRect().top + t.offsetHeight / 2
                            }, r = e.elementFromPoint(i.x, i.y) === t, n(".fancybox-container").css("pointer-events", ""), r)
                        }(u[0])) && (r = n.fancybox.getTranslate(u), o = parseFloat(u.css("border-top-width") || 0), s = parseFloat(u.css("border-right-width") || 0), a = parseFloat(u.css("border-bottom-width") || 0), l = parseFloat(u.css("border-left-width") || 0), i = {
                            top: r.top + o,
                            left: r.left + l,
                            width: r.width - s - l,
                            height: r.height - o - a,
                            scaleX: 1,
                            scaleY: 1
                        }, r.width > 0 && r.height > 0 && i)
                    },
                    complete: function() {
                        var t, e = this,
                            i = e.current,
                            r = {};
                        !e.isMoved() && i.isLoaded && (i.isComplete || (i.isComplete = !0, i.$slide.siblings().trigger("onReset"), e.preload("inline"), h(i.$slide), i.$slide.addClass("fancybox-slide--complete"), n.each(e.slides, (function(t, i) {
                            i.pos >= e.currPos - 1 && i.pos <= e.currPos + 1 ? r[i.pos] = i : i && (n.fancybox.stop(i.$slide), i.$slide.off().remove())
                        })), e.slides = r), e.isAnimating = !1, e.updateCursor(), e.trigger("afterShow"), i.opts.video.autoStart && i.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", (function() {
                            Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), e.next()
                        })), i.opts.autoFocus && "html" === i.contentType && ((t = i.$content.find("input[autofocus]:enabled:visible:first")).length ? t.trigger("focus") : e.focus(null, !0)), i.$slide.scrollTop(0).scrollLeft(0))
                    },
                    preload: function(t) {
                        var e, n;
                        this.group.length < 2 || (n = this.slides[this.currPos + 1], (e = this.slides[this.currPos - 1]) && e.type === t && this.loadSlide(e), n && n.type === t && this.loadSlide(n))
                    },
                    focus: function(t, i) {
                        var r, o, s = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
                        this.isClosing || ((r = (r = !t && this.current && this.current.isComplete ? this.current.$slide.find("*:visible" + (i ? ":not(.fancybox-close-small)" : "")) : this.$refs.container.find("*:visible")).filter(s).filter((function() {
                            return "hidden" !== n(this).css("visibility") && !n(this).hasClass("disabled")
                        }))).length ? (o = r.index(e.activeElement), t && t.shiftKey ? (o < 0 || 0 == o) && (t.preventDefault(), r.eq(r.length - 1).trigger("focus")) : (o < 0 || o == r.length - 1) && (t && t.preventDefault(), r.eq(0).trigger("focus"))) : this.$refs.container.trigger("focus"))
                    },
                    activate: function() {
                        var t = this;
                        n(".fancybox-container").each((function() {
                            var e = n(this).data("FancyBox");
                            e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1)
                        })), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents()
                    },
                    close: function(t, e) {
                        var i, r, o, s, a, l, u, f = this,
                            d = f.current,
                            p = function() {
                                f.cleanUp(t)
                            };
                        return !f.isClosing && (f.isClosing = !0, !1 === f.trigger("beforeClose", t) ? (f.isClosing = !1, c((function() {
                            f.update()
                        })), !1) : (f.removeEvents(), o = d.$content, i = d.opts.animationEffect, r = n.isNumeric(e) ? e : i ? d.opts.animationDuration : 0, d.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== t ? n.fancybox.stop(d.$slide) : i = !1, d.$slide.siblings().trigger("onReset").remove(), r && f.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", r + "ms"), f.hideLoading(d), f.hideControls(!0), f.updateCursor(), "zoom" !== i || o && r && "image" === d.type && !f.isMoved() && !d.hasError && (u = f.getThumbPos(d)) || (i = "fade"), "zoom" === i ? (n.fancybox.stop(o), l = {
                            top: (s = n.fancybox.getTranslate(o)).top,
                            left: s.left,
                            scaleX: s.width / u.width,
                            scaleY: s.height / u.height,
                            width: u.width,
                            height: u.height
                        }, "auto" == (a = d.opts.zoomOpacity) && (a = Math.abs(d.width / d.height - u.width / u.height) > .1), a && (u.opacity = 0), n.fancybox.setTranslate(o, l), h(o), n.fancybox.animate(o, u, r, p), !0) : (i && r ? n.fancybox.animate(d.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + i, r, p) : !0 === t ? setTimeout(p, r) : p(), !0)))
                    },
                    cleanUp: function(e) {
                        var i, r, o, s = this.current.opts.$orig;
                        this.current.$slide.trigger("onReset"), this.$refs.container.empty().remove(), this.trigger("afterClose", e), this.current.opts.backFocus && (s && s.length && s.is(":visible") || (s = this.$trigger), s && s.length && (r = t.scrollX, o = t.scrollY, s.trigger("focus"), n("html, body").scrollTop(o).scrollLeft(r))), this.current = null, (i = n.fancybox.getInstance()) ? i.activate() : (n("body").removeClass("fancybox-active compensate-for-scrollbar"), n("#fancybox-style-noscroll").remove())
                    },
                    trigger: function(t, e) {
                        var i, r = Array.prototype.slice.call(arguments, 1),
                            o = this,
                            s = e && e.opts ? e : o.current;
                        if (s ? r.unshift(s) : s = o, r.unshift(o), n.isFunction(s.opts[t]) && (i = s.opts[t].apply(s, r)), !1 === i) return i;
                        "afterClose" !== t && o.$refs ? o.$refs.container.trigger(t + ".fb", r) : l.trigger(t + ".fb", r)
                    },
                    updateControls: function() {
                        var t = this.current,
                            i = t.index,
                            r = this.$refs.container,
                            o = this.$refs.caption,
                            s = t.opts.caption;
                        t.$slide.trigger("refresh"), s && s.length ? (this.$caption = o, o.children().eq(0).html(s)) : this.$caption = null, this.hasHiddenControls || this.isIdle || this.showControls(), r.find("[data-fancybox-count]").html(this.group.length), r.find("[data-fancybox-index]").html(i + 1), r.find("[data-fancybox-prev]").prop("disabled", !t.opts.loop && i <= 0), r.find("[data-fancybox-next]").prop("disabled", !t.opts.loop && i >= this.group.length - 1), "image" === t.type ? r.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", t.opts.image.src || t.src).show() : t.opts.toolbar && r.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), n(e.activeElement).is(":hidden,[disabled]") && this.$refs.container.trigger("focus")
                    },
                    hideControls: function(t) {
                        var e = ["infobar", "toolbar", "nav"];
                        !t && this.current.opts.preventCaptionOverlap || e.push("caption"), this.$refs.container.removeClass(e.map((function(t) {
                            return "fancybox-show-" + t
                        })).join(" ")), this.hasHiddenControls = !0
                    },
                    showControls: function() {
                        var t = this.current ? this.current.opts : this.opts,
                            e = this.$refs.container;
                        this.hasHiddenControls = !1, this.idleSecondsCounter = 0, e.toggleClass("fancybox-show-toolbar", !(!t.toolbar || !t.buttons)).toggleClass("fancybox-show-infobar", !!(t.infobar && this.group.length > 1)).toggleClass("fancybox-show-caption", !!this.$caption).toggleClass("fancybox-show-nav", !!(t.arrows && this.group.length > 1)).toggleClass("fancybox-is-modal", !!t.modal)
                    },
                    toggleControls: function() {
                        this.hasHiddenControls ? this.showControls() : this.hideControls()
                    }
                }), n.fancybox = {
                    version: "3.5.7",
                    defaults: s,
                    getInstance: function(t) {
                        var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                            i = Array.prototype.slice.call(arguments, 1);
                        return e instanceof g && ("string" === n.type(t) ? e[t].apply(e, i) : "function" === n.type(t) && t.apply(e, i), e)
                    },
                    open: function(t, e, n) {
                        return new g(t, e, n)
                    },
                    close: function(t) {
                        var e = this.getInstance();
                        e && (e.close(), !0 === t && this.close(t))
                    },
                    destroy: function() {
                        this.close(!0), l.add("body").off("click.fb-start", "**")
                    },
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    use3d: (r = e.createElement("div"), t.getComputedStyle && t.getComputedStyle(r) && t.getComputedStyle(r).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)),
                    getTranslate: function(t) {
                        var e;
                        return !(!t || !t.length) && {
                            top: (e = t[0].getBoundingClientRect()).top || 0,
                            left: e.left || 0,
                            width: e.width,
                            height: e.height,
                            opacity: parseFloat(t.css("opacity"))
                        }
                    },
                    setTranslate: function(t, e) {
                        var n = "",
                            i = {};
                        if (t && e) return void 0 === e.left && void 0 === e.top || (n = (void 0 === e.left ? t.position().left : e.left) + "px, " + (void 0 === e.top ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), void 0 !== e.scaleX && void 0 !== e.scaleY ? n += " scale(" + e.scaleX + ", " + e.scaleY + ")" : void 0 !== e.scaleX && (n += " scaleX(" + e.scaleX + ")"), n.length && (i.transform = n), void 0 !== e.opacity && (i.opacity = e.opacity), void 0 !== e.width && (i.width = e.width), void 0 !== e.height && (i.height = e.height), t.css(i)
                    },
                    animate: function(t, e, i, r, o) {
                        var s, a = this;
                        n.isFunction(i) && (r = i, i = null), a.stop(t), s = a.getTranslate(t), t.on(d, (function(l) {
                            (!l || !l.originalEvent || t.is(l.originalEvent.target) && "z-index" != l.originalEvent.propertyName) && (a.stop(t), n.isNumeric(i) && t.css("transition-duration", ""), n.isPlainObject(e) ? void 0 !== e.scaleX && void 0 !== e.scaleY && a.setTranslate(t, {
                                top: e.top,
                                left: e.left,
                                width: s.width * e.scaleX,
                                height: s.height * e.scaleY,
                                scaleX: 1,
                                scaleY: 1
                            }) : !0 !== o && t.removeClass(e), n.isFunction(r) && r(l))
                        })), n.isNumeric(i) && t.css("transition-duration", i + "ms"), n.isPlainObject(e) ? (void 0 !== e.scaleX && void 0 !== e.scaleY && (delete e.width, delete e.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), n.fancybox.setTranslate(t, e)) : t.addClass(e), t.data("timer", setTimeout((function() {
                            t.trigger(d)
                        }), i + 33))
                    },
                    stop: function(t, e) {
                        t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(d), t.off(d).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"))
                    }
                }, n.fn.fancybox = function(t) {
                    var e;
                    return (e = (t = t || {}).selector || !1) ? n("body").off("click.fb-start", e).on("click.fb-start", e, {
                        options: t
                    }, m) : this.off("click.fb-start").on("click.fb-start", {
                        items: this,
                        options: t
                    }, m), this
                }, l.on("click.fb-start", "[data-fancybox]", m), l.on("click.fb-start", "[data-fancybox-trigger]", (function(t) {
                    n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]').eq(n(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
                        $trigger: n(this)
                    })
                })), o = null, l.on("mousedown mouseup focus blur", ".fancybox-button", (function(t) {
                    switch (t.type) {
                        case "mousedown":
                            o = n(this);
                            break;
                        case "mouseup":
                            o = null;
                            break;
                        case "focusin":
                            n(".fancybox-button").removeClass("fancybox-focus"), n(this).is(o) || n(this).is("[disabled]") || n(this).addClass("fancybox-focus");
                            break;
                        case "focusout":
                            n(".fancybox-button").removeClass("fancybox-focus")
                    }
                }))
            }
        function m(t, e) {
            var i, r, o, s = [],
                a = 0;
            t && t.isDefaultPrevented() || (t.preventDefault(), e = e || {}, t && t.data && (e = p(t.data.options, e)), i = e.$target || n(t.currentTarget).trigger("blur"), (o = n.fancybox.getInstance()) && o.$trigger && o.$trigger.is(i) || (s = e.selector ? n(e.selector) : (r = i.attr("data-fancybox") || "") ? (s = t.data ? t.data.items : []).length ? s.filter('[data-fancybox="' + r + '"]') : n('[data-fancybox="' + r + '"]') : [i], (a = n(s).index(i)) < 0 && (a = 0), (o = n.fancybox.open(s, e, a)).$trigger = i))
        }
    }(window, document, jQuery),
    function(t) {
        "use strict";
        var e = {
                youtube: {
                    matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                    params: {
                        autoplay: 1,
                        autohide: 1,
                        fs: 1,
                        rel: 0,
                        hd: 1,
                        wmode: "transparent",
                        enablejsapi: 1,
                        html5: 1
                    },
                    paramPlace: 8,
                    type: "iframe",
                    url: "https://www.youtube-nocookie.com/embed/$4",
                    thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
                },
                vimeo: {
                    matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                    params: {
                        autoplay: 1,
                        hd: 1,
                        show_title: 1,
                        show_byline: 1,
                        show_portrait: 0,
                        fullscreen: 1
                    },
                    paramPlace: 3,
                    type: "iframe",
                    url: "//player.vimeo.com/video/$2"
                },
                instagram: {
                    matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                    type: "image",
                    url: "//$1/p/$2/media/?size=l"
                },
                gmap_place: {
                    matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                    type: "iframe",
                    url: function(t) {
                        return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                    }
                },
                gmap_search: {
                    matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                    type: "iframe",
                    url: function(t) {
                        return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
                    }
                }
            },
            n = function(e, n, i) {
                if (e) return i = i || "", "object" === t.type(i) && (i = t.param(i, !0)), t.each(n, (function(t, n) {
                    e = e.replace("$" + t, n || "")
                })), i.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + i), e
            };
        t(document).on("objectNeedsType.fb", (function(i, r, o) {
            var s, a, l, u, c, f, d, h = o.src || "",
                p = !1;
            s = t.extend(!0, {}, e, o.opts.media), t.each(s, (function(e, i) {
                if (l = h.match(i.matcher)) {
                    if (p = i.type, d = e, f = {}, i.paramPlace && l[i.paramPlace]) {
                        "?" == (c = l[i.paramPlace])[0] && (c = c.substring(1)), c = c.split("&");
                        for (var r = 0; r < c.length; ++r) {
                            var s = c[r].split("=", 2);
                            2 == s.length && (f[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")))
                        }
                    }
                    return u = t.extend(!0, {}, i.params, o.opts[e], f), h = "function" === t.type(i.url) ? i.url.call(this, l, u, o) : n(i.url, l, u), a = "function" === t.type(i.thumb) ? i.thumb.call(this, l, u, o) : n(i.thumb, l), "youtube" === e ? h = h.replace(/&t=((\d+)m)?(\d+)s/, (function(t, e, n, i) {
                        return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(i, 10))
                    })) : "vimeo" === e && (h = h.replace("&%23", "#")), !1
                }
            })), p ? (o.opts.thumb || o.opts.$thumb && o.opts.$thumb.length || (o.opts.thumb = a), "iframe" === p && (o.opts = t.extend(!0, o.opts, {
                iframe: {
                    preload: !1,
                    attr: {
                        scrolling: "no"
                    }
                }
            })), t.extend(o, {
                type: p,
                src: h,
                origSrc: o.src,
                contentSource: d,
                contentType: "image" === p ? "image" : "gmap_place" == d || "gmap_search" == d ? "map" : "video"
            })) : h && (o.type = o.opts.defaultType)
        }));
        var i = {
            youtube: {
                src: "https://www.youtube.com/iframe_api",
                class: "YT",
                loading: !1,
                loaded: !1
            },
            vimeo: {
                src: "https://player.vimeo.com/api/player.js",
                class: "Vimeo",
                loading: !1,
                loaded: !1
            },
            load: function(t) {
                var e, n = this;
                this[t].loaded ? setTimeout((function() {
                    n.done(t)
                })) : this[t].loading || (this[t].loading = !0, (e = document.createElement("script")).type = "text/javascript", e.src = this[t].src, "youtube" === t ? window.onYouTubeIframeAPIReady = function() {
                    n[t].loaded = !0, n.done(t)
                } : e.onload = function() {
                    n[t].loaded = !0, n.done(t)
                }, document.body.appendChild(e))
            },
            done: function(e) {
                var n, i;
                "youtube" === e && delete window.onYouTubeIframeAPIReady, (n = t.fancybox.getInstance()) && (i = n.current.$content.find("iframe"), "youtube" === e && void 0 !== YT && YT ? new YT.Player(i.attr("id"), {
                    events: {
                        onStateChange: function(t) {
                            0 == t.data && n.next()
                        }
                    }
                }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && new Vimeo.Player(i).on("ended", (function() {
                    n.next()
                })))
            }
        };
        t(document).on({
            "afterShow.fb": function(t, e, n) {
                e.group.length > 1 && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && i.load(n.contentSource)
            }
        })
    }(jQuery),
    function(t, e, n) {
        "use strict";
        var i = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
                return t.setTimeout(e, 1e3 / 60)
            },
            r = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
                t.clearTimeout(e)
            },
            o = function(e) {
                var n = [];
                for (var i in e = (e = e.originalEvent || e || t.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e]) e[i].pageX ? n.push({
                    x: e[i].pageX,
                    y: e[i].pageY
                }) : e[i].clientX && n.push({
                    x: e[i].clientX,
                    y: e[i].clientY
                });
                return n
            },
            s = function(t, e, n) {
                return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
            },
            a = function(t) {
                if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || n.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
                for (var e = 0, i = t[0].attributes, r = i.length; e < r; e++)
                    if ("data-fancybox-" === i[e].nodeName.substr(0, 14)) return !0;
                return !1
            },
            l = function(e) {
                for (var n, i, r, o, s, a = !1; n = e.get(0), i = void 0, r = void 0, o = void 0, s = void 0, i = t.getComputedStyle(n)["overflow-y"], r = t.getComputedStyle(n)["overflow-x"], o = ("scroll" === i || "auto" === i) && n.scrollHeight > n.clientHeight, s = ("scroll" === r || "auto" === r) && n.scrollWidth > n.clientWidth, !(a = o || s) && (e = e.parent()).length && !e.hasClass("fancybox-stage") && !e.is("body"););
                return a
            },
            u = function(t) {
                this.instance = t, this.$bg = t.$refs.bg, this.$stage = t.$refs.stage, this.$container = t.$refs.container, this.destroy(), this.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(this, "ontouchstart"))
            };
        u.prototype.destroy = function() {
            this.$container.off(".fb.touch"), n(e).off(".fb.touch"), this.requestId && (r(this.requestId), this.requestId = null), this.tapped && (clearTimeout(this.tapped), this.tapped = null)
        }, u.prototype.ontouchstart = function(i) {
            var r = n(i.target),
                u = this.instance,
                c = u.current,
                f = c.$slide,
                d = c.$content,
                h = "touchstart" == i.type;
            if (h && this.$container.off("mousedown.fb.touch"), (!i.originalEvent || 2 != i.originalEvent.button) && f.length && r.length && !a(r) && !a(r.parent()) && (r.is("img") || !(i.originalEvent.clientX > r[0].clientWidth + r.offset().left))) {
                if (!c || u.isAnimating || c.$slide.hasClass("fancybox-animated")) return i.stopPropagation(), void i.preventDefault();
                this.realPoints = this.startPoints = o(i), this.startPoints.length && (c.touch && i.stopPropagation(), this.startEvent = i, this.canTap = !0, this.$target = r, this.$content = d, this.opts = c.opts.touch, this.isPanning = !1, this.isSwiping = !1, this.isZooming = !1, this.isScrolling = !1, this.canPan = u.canPan(), this.startTime = (new Date).getTime(), this.distanceX = this.distanceY = this.distance = 0, this.canvasWidth = Math.round(f[0].clientWidth), this.canvasHeight = Math.round(f[0].clientHeight), this.contentLastPos = null, this.contentStartPos = n.fancybox.getTranslate(this.$content) || {
                    top: 0,
                    left: 0
                }, this.sliderStartPos = n.fancybox.getTranslate(f), this.stagePos = n.fancybox.getTranslate(u.$refs.stage), this.sliderStartPos.top -= this.stagePos.top, this.sliderStartPos.left -= this.stagePos.left, this.contentStartPos.top -= this.stagePos.top, this.contentStartPos.left -= this.stagePos.left, n(e).off(".fb.touch").on(h ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(this, "ontouchend")).on(h ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(this, "ontouchmove")), n.fancybox.isMobile && e.addEventListener("scroll", this.onscroll, !0), ((this.opts || this.canPan) && (r.is(this.$stage) || this.$stage.find(r).length) || (r.is(".fancybox-image") && i.preventDefault(), n.fancybox.isMobile && r.parents(".fancybox-caption").length)) && (this.isScrollable = l(r) || l(r.parent()), n.fancybox.isMobile && this.isScrollable || i.preventDefault(), (1 === this.startPoints.length || c.hasError) && (this.canPan ? (n.fancybox.stop(this.$content), this.isPanning = !0) : this.isSwiping = !0, this.$container.addClass("fancybox-is-grabbing")), 2 === this.startPoints.length && "image" === c.type && (c.isLoaded || c.$ghost) && (this.canTap = !1, this.isSwiping = !1, this.isPanning = !1, this.isZooming = !0, n.fancybox.stop(this.$content), this.centerPointStartX = .5 * (this.startPoints[0].x + this.startPoints[1].x) - n(t).scrollLeft(), this.centerPointStartY = .5 * (this.startPoints[0].y + this.startPoints[1].y) - n(t).scrollTop(), this.percentageOfImageAtPinchPointX = (this.centerPointStartX - this.contentStartPos.left) / this.contentStartPos.width, this.percentageOfImageAtPinchPointY = (this.centerPointStartY - this.contentStartPos.top) / this.contentStartPos.height, this.startDistanceBetweenFingers = s(this.startPoints[0], this.startPoints[1]))))
            }
        }, u.prototype.onscroll = function(t) {
            this.isScrolling = !0, e.removeEventListener("scroll", this.onscroll, !0)
        }, u.prototype.ontouchmove = function(t) {
            void 0 === t.originalEvent.buttons || 0 !== t.originalEvent.buttons ? this.isScrolling ? this.canTap = !1 : (this.newPoints = o(t), (this.opts || this.canPan) && this.newPoints.length && this.newPoints.length && (this.isSwiping && !0 === this.isSwiping || t.preventDefault(), this.distanceX = s(this.newPoints[0], this.startPoints[0], "x"), this.distanceY = s(this.newPoints[0], this.startPoints[0], "y"), this.distance = s(this.newPoints[0], this.startPoints[0]), this.distance > 0 && (this.isSwiping ? this.onSwipe(t) : this.isPanning ? this.onPan() : this.isZooming && this.onZoom()))) : this.ontouchend(t)
        }, u.prototype.onSwipe = function(e) {
            var o, s = this,
                a = s.instance,
                l = s.isSwiping,
                u = s.sliderStartPos.left || 0;
            if (!0 !== l) "x" == l && (s.distanceX > 0 && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? u += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? u -= Math.pow(-s.distanceX, .8) : u += s.distanceX), s.sliderLastPos = {
                top: "x" == l ? 0 : s.sliderStartPos.top + s.distanceY,
                left: u
            }, s.requestId && (r(s.requestId), s.requestId = null), s.requestId = i((function() {
                s.sliderLastPos && (n.each(s.instance.slides, (function(t, e) {
                    var i = e.pos - s.instance.currPos;
                    n.fancybox.setTranslate(e.$slide, {
                        top: s.sliderLastPos.top,
                        left: s.sliderLastPos.left + i * s.canvasWidth + i * e.opts.gutter
                    })
                })), s.$container.addClass("fancybox-is-sliding"))
            }));
            else if (Math.abs(s.distance) > 10) {
                if (s.canTap = !1, a.group.length < 2 && s.opts.vertical ? s.isSwiping = "y" : a.isDragging || !1 === s.opts.vertical || "auto" === s.opts.vertical && n(t).width() > 800 ? s.isSwiping = "x" : (o = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI), s.isSwiping = o > 45 && o < 135 ? "y" : "x"), "y" === s.isSwiping && n.fancybox.isMobile && s.isScrollable) return void(s.isScrolling = !0);
                a.isDragging = s.isSwiping, s.startPoints = s.newPoints, n.each(a.slides, (function(t, e) {
                    var i, r;
                    n.fancybox.stop(e.$slide), i = n.fancybox.getTranslate(e.$slide), r = n.fancybox.getTranslate(a.$refs.stage), e.$slide.css({
                        transform: "",
                        opacity: "",
                        "transition-duration": ""
                    }).removeClass("fancybox-animated").removeClass((function(t, e) {
                        return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                    })), e.pos === a.current.pos && (s.sliderStartPos.top = i.top - r.top, s.sliderStartPos.left = i.left - r.left), n.fancybox.setTranslate(e.$slide, {
                        top: i.top - r.top,
                        left: i.left - r.left
                    })
                })), a.SlideShow && a.SlideShow.isActive && a.SlideShow.stop()
            }
        }, u.prototype.onPan = function() {
            var t = this;
            s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5) ? t.startPoints = t.newPoints : (t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && r(t.requestId), t.requestId = i((function() {
                n.fancybox.setTranslate(t.$content, t.contentLastPos)
            })))
        }, u.prototype.limitMovement = function() {
            var t, e, n, i, r, o, s = this.canvasWidth,
                a = this.canvasHeight,
                l = this.distanceX,
                u = this.distanceY,
                c = this.contentStartPos,
                f = c.left,
                d = c.top,
                h = c.width,
                p = c.height;
            return r = h > s ? f + l : f, o = d + u, t = Math.max(0, .5 * s - .5 * h), e = Math.max(0, .5 * a - .5 * p), n = Math.min(s - h, .5 * s - .5 * h), i = Math.min(a - p, .5 * a - .5 * p), l > 0 && r > t && (r = t - 1 + Math.pow(-t + f + l, .8) || 0), l < 0 && r < n && (r = n + 1 - Math.pow(n - f - l, .8) || 0), u > 0 && o > e && (o = e - 1 + Math.pow(-e + d + u, .8) || 0), u < 0 && o < i && (o = i + 1 - Math.pow(i - d - u, .8) || 0), {
                top: o,
                left: r
            }
        }, u.prototype.limitPosition = function(t, e, n, i) {
            var r = this.canvasWidth,
                o = this.canvasHeight;
            return t = n > r ? (t = t > 0 ? 0 : t) < r - n ? r - n : t : Math.max(0, r / 2 - n / 2), {
                top: e = i > o ? (e = e > 0 ? 0 : e) < o - i ? o - i : e : Math.max(0, o / 2 - i / 2),
                left: t
            }
        }, u.prototype.onZoom = function() {
            var e = this,
                o = e.contentStartPos,
                a = o.width,
                l = o.height,
                u = o.left,
                c = o.top,
                f = s(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers,
                d = Math.floor(a * f),
                h = Math.floor(l * f),
                p = (a - d) * e.percentageOfImageAtPinchPointX,
                g = (l - h) * e.percentageOfImageAtPinchPointY,
                m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
                v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
                y = m - e.centerPointStartX,
                b = {
                    top: c + (g + (v - e.centerPointStartY)),
                    left: u + (p + y),
                    scaleX: f,
                    scaleY: f
                };
            e.canTap = !1, e.newWidth = d, e.newHeight = h, e.contentLastPos = b, e.requestId && r(e.requestId), e.requestId = i((function() {
                n.fancybox.setTranslate(e.$content, e.contentLastPos)
            }))
        }, u.prototype.ontouchend = function(t) {
            var i = this.isSwiping,
                s = this.isPanning,
                a = this.isZooming,
                l = this.isScrolling;
            if (this.endPoints = o(t), this.dMs = Math.max((new Date).getTime() - this.startTime, 1), this.$container.removeClass("fancybox-is-grabbing"), n(e).off(".fb.touch"), e.removeEventListener("scroll", this.onscroll, !0), this.requestId && (r(this.requestId), this.requestId = null), this.isSwiping = !1, this.isPanning = !1, this.isZooming = !1, this.isScrolling = !1, this.instance.isDragging = !1, this.canTap) return this.onTap(t);
            this.speed = 100, this.velocityX = this.distanceX / this.dMs * .5, this.velocityY = this.distanceY / this.dMs * .5, s ? this.endPanning() : a ? this.endZooming() : this.endSwiping(i, l)
        }, u.prototype.endSwiping = function(t, e) {
            var i = !1,
                r = this.instance.group.length,
                o = Math.abs(this.distanceX),
                s = "x" == t && r > 1 && (this.dMs > 130 && o > 10 || o > 50);
            this.sliderLastPos = null, "y" == t && !e && Math.abs(this.distanceY) > 50 ? (n.fancybox.animate(this.instance.current.$slide, {
                top: this.sliderStartPos.top + this.distanceY + 150 * this.velocityY,
                opacity: 0
            }, 200), i = this.instance.close(!0, 250)) : s && this.distanceX > 0 ? i = this.instance.previous(300) : s && this.distanceX < 0 && (i = this.instance.next(300)), !1 !== i || "x" != t && "y" != t || this.instance.centerSlide(200), this.$container.removeClass("fancybox-is-sliding")
        }, u.prototype.endPanning = function() {
            var t, e, i;
            this.contentLastPos && (!1 === this.opts.momentum || this.dMs > 350 ? (t = this.contentLastPos.left, e = this.contentLastPos.top) : (t = this.contentLastPos.left + 500 * this.velocityX, e = this.contentLastPos.top + 500 * this.velocityY), (i = this.limitPosition(t, e, this.contentStartPos.width, this.contentStartPos.height)).width = this.contentStartPos.width, i.height = this.contentStartPos.height, n.fancybox.animate(this.$content, i, 366))
        }, u.prototype.endZooming = function() {
            var t, e, i, r, o = this.instance.current,
                s = this.newWidth,
                a = this.newHeight;
            this.contentLastPos && (t = this.contentLastPos.left, r = {
                top: e = this.contentLastPos.top,
                left: t,
                width: s,
                height: a,
                scaleX: 1,
                scaleY: 1
            }, n.fancybox.setTranslate(this.$content, r), s < this.canvasWidth && a < this.canvasHeight ? this.instance.scaleToFit(150) : s > o.width || a > o.height ? this.instance.scaleToActual(this.centerPointStartX, this.centerPointStartY, 150) : (i = this.limitPosition(t, e, s, a), n.fancybox.animate(this.$content, i, 150)))
        }, u.prototype.onTap = function(e) {
            var i, r = this,
                s = n(e.target),
                a = r.instance,
                l = a.current,
                u = e && o(e) || r.startPoints,
                c = u[0] ? u[0].x - n(t).scrollLeft() - r.stagePos.left : 0,
                f = u[0] ? u[0].y - n(t).scrollTop() - r.stagePos.top : 0,
                d = function(t) {
                    var i = l.opts[t];
                    if (n.isFunction(i) && (i = i.apply(a, [l, e])), i) switch (i) {
                        case "close":
                            a.close(r.startEvent);
                            break;
                        case "toggleControls":
                            a.toggleControls();
                            break;
                        case "next":
                            a.next();
                            break;
                        case "nextOrClose":
                            a.group.length > 1 ? a.next() : a.close(r.startEvent);
                            break;
                        case "zoom":
                            "image" == l.type && (l.isLoaded || l.$ghost) && (a.canPan() ? a.scaleToFit() : a.isScaledDown() ? a.scaleToActual(c, f) : a.group.length < 2 && a.close(r.startEvent))
                    }
                };
            if ((!e.originalEvent || 2 != e.originalEvent.button) && (s.is("img") || !(c > s[0].clientWidth + s.offset().left))) {
                if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) i = "Outside";
                else if (s.is(".fancybox-slide")) i = "Slide";
                else {
                    if (!a.current.$content || !a.current.$content.find(s).addBack().filter(s).length) return;
                    i = "Content"
                }
                if (r.tapped) {
                    if (clearTimeout(r.tapped), r.tapped = null, Math.abs(c - r.tapX) > 50 || Math.abs(f - r.tapY) > 50) return this;
                    d("dblclick" + i)
                } else r.tapX = c, r.tapY = f, l.opts["dblclick" + i] && l.opts["dblclick" + i] !== l.opts["click" + i] ? r.tapped = setTimeout((function() {
                    r.tapped = null, a.isAnimating || d("click" + i)
                }), 500) : d("click" + i);
                return this
            }
        }, n(e).on("onActivate.fb", (function(t, e) {
            e && !e.Guestures && (e.Guestures = new u(e))
        })).on("beforeClose.fb", (function(t, e) {
            e && e.Guestures && e.Guestures.destroy()
        }))
    }(window, document, jQuery),
    function(t, e) {
        "use strict";
        e.extend(!0, e.fancybox.defaults, {
            btnTpl: {
                slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
            },
            slideShow: {
                autoStart: !1,
                speed: 3e3,
                progress: !0
            }
        });
        var n = function(t) {
            this.instance = t, this.init()
        };
        e.extend(n.prototype, {
            timer: null,
            isActive: !1,
            $button: null,
            init: function() {
                var t = this,
                    n = t.instance,
                    i = n.group[n.currIndex].opts.slideShow;
                t.$button = n.$refs.toolbar.find("[data-fancybox-play]").on("click", (function() {
                    t.toggle()
                })), n.group.length < 2 || !i ? t.$button.hide() : i.progress && (t.$progress = e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))
            },
            set: function(t) {
                var n = this.instance,
                    i = n.current;
                i && (!0 === t || i.opts.loop || n.currIndex < n.group.length - 1) ? this.isActive && "video" !== i.contentType && (this.$progress && e.fancybox.animate(this.$progress.show(), {
                    scaleX: 1
                }, i.opts.slideShow.speed), this.timer = setTimeout((function() {
                    n.current.opts.loop || n.current.index != n.group.length - 1 ? n.next() : n.jumpTo(0)
                }), i.opts.slideShow.speed)) : (this.stop(), n.idleSecondsCounter = 0, n.showControls())
            },
            clear: function() {
                clearTimeout(this.timer), this.timer = null, this.$progress && this.$progress.removeAttr("style").hide()
            },
            start: function() {
                var t = this.instance.current;
                t && (this.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), this.isActive = !0, t.isComplete && this.set(!0), this.instance.trigger("onSlideShowChange", !0))
            },
            stop: function() {
                var t = this.instance.current;
                this.clear(), this.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), this.isActive = !1, this.instance.trigger("onSlideShowChange", !1), this.$progress && this.$progress.removeAttr("style").hide()
            },
            toggle: function() {
                this.isActive ? this.stop() : this.start()
            }
        }), e(t).on({
            "onInit.fb": function(t, e) {
                e && !e.SlideShow && (e.SlideShow = new n(e))
            },
            "beforeShow.fb": function(t, e, n, i) {
                var r = e && e.SlideShow;
                i ? r && n.opts.slideShow.autoStart && r.start() : r && r.isActive && r.clear()
            },
            "afterShow.fb": function(t, e, n) {
                var i = e && e.SlideShow;
                i && i.isActive && i.set()
            },
            "afterKeydown.fb": function(n, i, r, o, s) {
                var a = i && i.SlideShow;
                !a || !r.opts.slideShow || 80 !== s && 32 !== s || e(t.activeElement).is("button,a,input") || (o.preventDefault(), a.toggle())
            },
            "beforeClose.fb onDeactivate.fb": function(t, e) {
                var n = e && e.SlideShow;
                n && n.stop()
            }
        }), e(t).on("visibilitychange", (function() {
            var n = e.fancybox.getInstance(),
                i = n && n.SlideShow;
            i && i.isActive && (t.hidden ? i.clear() : i.set())
        }))
    }(document, jQuery),
    function(t, e) {
        "use strict";
        var n = function() {
            for (var e = [
                    ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                    ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                    ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                ], n = {}, i = 0; i < e.length; i++) {
                var r = e[i];
                if (r && r[1] in t) {
                    for (var o = 0; o < r.length; o++) n[e[0][o]] = r[o];
                    return n
                }
            }
            return !1
        }();
        if (n) {
            var i = {
                request: function(e) {
                    (e = e || t.documentElement)[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
                },
                exit: function() {
                    t[n.exitFullscreen]()
                },
                toggle: function(e) {
                    e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e)
                },
                isFullscreen: function() {
                    return Boolean(t[n.fullscreenElement])
                },
                enabled: function() {
                    return Boolean(t[n.fullscreenEnabled])
                }
            };
            e.extend(!0, e.fancybox.defaults, {
                btnTpl: {
                    fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
                },
                fullScreen: {
                    autoStart: !1
                }
            }), e(t).on(n.fullscreenchange, (function() {
                var t = i.isFullscreen(),
                    n = e.fancybox.getInstance();
                n && (n.current && "image" === n.current.type && n.isAnimating && (n.isAnimating = !1, n.update(!0, !0, 0), n.isComplete || n.complete()), n.trigger("onFullscreenChange", t), n.$refs.container.toggleClass("fancybox-is-fullscreen", t), n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t))
            }))
        }
        e(t).on({
            "onInit.fb": function(t, e) {
                n ? e && e.group[e.currIndex].opts.fullScreen ? (e.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", (function(t) {
                    t.stopPropagation(), t.preventDefault(), i.toggle()
                })), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && i.request(), e.FullScreen = i) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide() : e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()
            },
            "afterKeydown.fb": function(t, e, n, i, r) {
                e && e.FullScreen && 70 === r && (i.preventDefault(), e.FullScreen.toggle())
            },
            "beforeClose.fb": function(t, e) {
                e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && i.exit()
            }
        })
    }(document, jQuery),
    function(t, e) {
        "use strict";
        var n = "fancybox-thumbs";
        e.fancybox.defaults = e.extend(!0, {
            btnTpl: {
                thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
            },
            thumbs: {
                autoStart: !1,
                hideOnClose: !0,
                parentEl: ".fancybox-container",
                axis: "y"
            }
        }, e.fancybox.defaults);
        var i = function(t) {
            this.init(t)
        };
        e.extend(i.prototype, {
            $button: null,
            $grid: null,
            $list: null,
            isVisible: !1,
            isActive: !1,
            init: function(t) {
                var e = this,
                    n = t.group,
                    i = 0;
                e.instance = t, e.opts = n[t.currIndex].opts.thumbs, t.Thumbs = e, e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]");
                for (var r = 0, o = n.length; r < o && (n[r].thumb && i++, !(i > 1)); r++);
                i > 1 && e.opts ? (e.$button.removeAttr("style").on("click", (function() {
                    e.toggle()
                })), e.isActive = !0) : e.$button.hide()
            },
            create: function() {
                var t, i = this.instance,
                    r = this.opts.parentEl,
                    o = [];
                this.$grid || (this.$grid = e('<div class="' + n + " " + n + "-" + this.opts.axis + '"></div>').appendTo(i.$refs.container.find(r).addBack().filter(r)), this.$grid.on("click", "a", (function() {
                    i.jumpTo(e(this).attr("data-index"))
                }))), this.$list || (this.$list = e('<div class="' + n + '__list">').appendTo(this.$grid)), e.each(i.group, (function(e, n) {
                    (t = n.thumb) || "image" !== n.type || (t = n.src), o.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (t && t.length ? ' style="background-image:url(' + t + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
                })), this.$list[0].innerHTML = o.join(""), "x" === this.opts.axis && this.$list.width(parseInt(this.$grid.css("padding-right"), 10) + i.group.length * this.$list.children().eq(0).outerWidth(!0))
            },
            focus: function(t) {
                var e, n, i = this.$list,
                    r = this.$grid;
                this.instance.current && (n = (e = i.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + this.instance.current.index + '"]').addClass("fancybox-thumbs-active")).position(), "y" === this.opts.axis && (n.top < 0 || n.top > i.height() - e.outerHeight()) ? i.stop().animate({
                    scrollTop: i.scrollTop() + n.top
                }, t) : "x" === this.opts.axis && (n.left < r.scrollLeft() || n.left > r.scrollLeft() + (r.width() - e.outerWidth())) && i.parent().stop().animate({
                    scrollLeft: n.left
                }, t))
            },
            update: function() {
                this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus(0)) : this.$grid && this.instance.trigger("onThumbsHide"), this.instance.update()
            },
            hide: function() {
                this.isVisible = !1, this.update()
            },
            show: function() {
                this.isVisible = !0, this.update()
            },
            toggle: function() {
                this.isVisible = !this.isVisible, this.update()
            }
        }), e(t).on({
            "onInit.fb": function(t, e) {
                var n;
                e && !e.Thumbs && (n = new i(e)).isActive && !0 === n.opts.autoStart && n.show()
            },
            "beforeShow.fb": function(t, e, n, i) {
                var r = e && e.Thumbs;
                r && r.isVisible && r.focus(i ? 0 : 250)
            },
            "afterKeydown.fb": function(t, e, n, i, r) {
                var o = e && e.Thumbs;
                o && o.isActive && 71 === r && (i.preventDefault(), o.toggle())
            },
            "beforeClose.fb": function(t, e) {
                var n = e && e.Thumbs;
                n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide()
            }
        })
    }(document, jQuery),
    function(t, e) {
        "use strict";
        e.extend(!0, e.fancybox.defaults, {
            btnTpl: {
                share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
            },
            share: {
                url: function(t, e) {
                    return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location
                },
                tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
            }
        }), e(t).on("click", "[data-fancybox-share]", (function() {
            var t, n, i, r, o = e.fancybox.getInstance(),
                s = o.current || null;
            s && ("function" === e.type(s.opts.share.url) && (t = s.opts.share.url.apply(s, [o, s])), n = s.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === s.type ? encodeURIComponent(s.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, (i = t, r = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
                "`": "&#x60;",
                "=": "&#x3D;"
            }, String(i).replace(/[&<>"'`=\/]/g, (function(t) {
                return r[t]
            })))).replace(/\{\{descr\}\}/g, o.$caption ? encodeURIComponent(o.$caption.text()) : ""), e.fancybox.open({
                src: o.translate(o, n),
                type: "html",
                opts: {
                    touch: !1,
                    animationEffect: !1,
                    afterLoad: function(t, e) {
                        o.$refs.container.one("beforeClose.fb", (function() {
                            t.close(null, 0)
                        })), e.$content.find(".fancybox-share__button").click((function() {
                            return window.open(this.href, "Share", "width=550, height=450"), !1
                        }))
                    },
                    mobile: {
                        autoFocus: !1
                    }
                }
            }))
        }))
    }(document, jQuery),
    function(t, e, n) {
        "use strict";

        function i() {
            var e = t.location.hash.substr(1),
                n = e.split("-"),
                i = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) && parseInt(n.pop(-1), 10) || 1;
            return {
                hash: e,
                index: i < 1 ? 1 : i,
                gallery: n.join("-")
            }
        }

        function r(t) {
            "" !== t.gallery && n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start")
        }

        function o(t) {
            var e, n;
            return !!t && ("" !== (n = (e = t.current ? t.current.opts : t.opts).hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && n)
        }
        n.escapeSelector || (n.escapeSelector = function(t) {
            return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, (function(t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            }))
        }), n((function() {
            !1 !== n.fancybox.defaults.hash && (n(e).on({
                "onInit.fb": function(t, e) {
                    var n, r;
                    !1 !== e.group[e.currIndex].opts.hash && (n = i(), (r = o(e)) && n.gallery && r == n.gallery && (e.currIndex = n.index - 1))
                },
                "beforeShow.fb": function(n, i, r, s) {
                    var a;
                    r && !1 !== r.opts.hash && (a = o(i)) && (i.currentHash = a + (i.group.length > 1 ? "-" + (r.index + 1) : ""), t.location.hash !== "#" + i.currentHash && (s && !i.origHash && (i.origHash = t.location.hash), i.hashTimer && clearTimeout(i.hashTimer), i.hashTimer = setTimeout((function() {
                        "replaceState" in t.history ? (t.history[s ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + i.currentHash), s && (i.hasCreatedHistory = !0)) : t.location.hash = i.currentHash, i.hashTimer = null
                    }), 300)))
                },
                "beforeClose.fb": function(n, i, r) {
                    r && !1 !== r.opts.hash && (clearTimeout(i.hashTimer), i.currentHash && i.hasCreatedHistory ? t.history.back() : i.currentHash && ("replaceState" in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (i.origHash || "")) : t.location.hash = i.origHash), i.currentHash = null)
                }
            }), n(t).on("hashchange.fb", (function() {
                var t = i(),
                    e = null;
                n.each(n(".fancybox-container").get().reverse(), (function(t, i) {
                    var r = n(i).data("FancyBox");
                    if (r && r.currentHash) return e = r, !1
                })), e ? e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null, e.close()) : "" !== t.gallery && r(t)
            })), setTimeout((function() {
                n.fancybox.getInstance() || r(i())
            }), 50))
        }))
    }(window, document, jQuery),
    function(t, e) {
        "use strict";
        var n = (new Date).getTime();
        e(t).on({
            "onInit.fb": function(t, e, i) {
                e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", (function(t) {
                    var i = e.current,
                        r = (new Date).getTime();
                    e.group.length < 2 || !1 === i.opts.wheel || "auto" === i.opts.wheel && "image" !== i.type || (t.preventDefault(), t.stopPropagation(), i.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, r - n < 250 || (n = r, e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())))
                }))
            }
        })
    }(document, jQuery)
}, function(t, e, n) {
    "use strict";

    function i(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function r(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    n.r(e);
    var o, s, a, l, u, c, f, d, h, p, g, m, v = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        y = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        b = 1e8,
        x = 2 * Math.PI,
        w = x / 4,
        _ = 0,
        T = Math.sqrt,
        C = Math.cos,
        S = Math.sin,
        k = function(t) {
            return "string" == typeof t
        },
        A = function(t) {
            return "function" == typeof t
        },
        P = function(t) {
            return "number" == typeof t
        },
        E = function(t) {
            return void 0 === t
        },
        M = function(t) {
            return "object" == typeof t
        },
        L = function(t) {
            return !1 !== t
        },
        D = function() {
            return "undefined" != typeof window
        },
        O = function(t) {
            return A(t) || k(t)
        },
        R = Array.isArray,
        N = /(?:-?\.?\d|\.)+/gi,
        H = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
        j = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        I = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
        F = /\(([^()]+)\)/i,
        z = /[+-]=-?[\.\d]+/,
        q = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
        B = {},
        W = {},
        X = function(t) {
            return (W = vt(t, B)) && Je
        },
        Y = function(t, e) {
            return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
        },
        V = function(t, e) {
            return !e && console.warn(t)
        },
        U = function(t, e) {
            return t && (B[t] = e) && W && (W[t] = e) || B
        },
        G = function() {
            return 0
        },
        Q = {},
        K = [],
        Z = {},
        J = {},
        tt = {},
        et = 30,
        nt = [],
        it = "",
        rt = function(t) {
            var e, n, i = t[0];
            if (M(i) || A(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
                for (n = nt.length; n-- && !nt[n].targetTest(i););
                e = nt[n]
            }
            for (n = t.length; n--;) t[n] && (t[n]._gsap || (t[n]._gsap = new Ce(t[n], e))) || t.splice(n, 1);
            return t
        },
        ot = function(t) {
            return t._gsap || rt(Wt(t))[0]._gsap
        },
        st = function(t, e) {
            var n = t[e];
            return A(n) ? t[e]() : E(n) && t.getAttribute(e) || n
        },
        at = function(t, e) {
            return (t = t.split(",")).forEach(e) || t
        },
        lt = function(t) {
            return Math.round(1e5 * t) / 1e5 || 0
        },
        ut = function(t, e) {
            for (var n = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < n;);
            return i < n
        },
        ct = function(t, e, n) {
            var i, r = P(t[1]),
                o = (r ? 2 : 1) + (e < 2 ? 0 : 1),
                s = t[o];
            if (r && (s.duration = t[1]), s.parent = n, e) {
                for (i = s; n && !("immediateRender" in i);) i = n.vars.defaults || {}, n = L(n.vars.inherit) && n.parent;
                s.immediateRender = L(i.immediateRender), e < 2 ? s.runBackwards = 1 : s.startAt = t[o - 1]
            }
            return s
        },
        ft = function() {
            var t, e, n = K.length,
                i = K.slice(0);
            for (Z = {}, K.length = 0, t = 0; t < n; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
        },
        dt = function(t, e, n, i) {
            K.length && ft(), t.render(e, n, i), K.length && ft()
        },
        ht = function(t) {
            var e = parseFloat(t);
            return (e || 0 === e) && (t + "").match(q).length < 2 ? e : t
        },
        pt = function(t) {
            return t
        },
        gt = function(t, e) {
            for (var n in e) n in t || (t[n] = e[n]);
            return t
        },
        mt = function(t, e) {
            for (var n in e) n in t || "duration" === n || "ease" === n || (t[n] = e[n])
        },
        vt = function(t, e) {
            for (var n in e) t[n] = e[n];
            return t
        },
        yt = function t(e, n) {
            for (var i in n) e[i] = M(n[i]) ? t(e[i] || (e[i] = {}), n[i]) : n[i];
            return e
        },
        bt = function(t, e) {
            var n, i = {};
            for (n in t) n in e || (i[n] = t[n]);
            return i
        },
        xt = function(t) {
            var e = t.parent || o,
                n = t.keyframes ? mt : gt;
            if (L(t.inherit))
                for (; e;) n(t, e.vars.defaults), e = e.parent || e._dp;
            return t
        },
        wt = function(t, e, n, i) {
            void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
            var r = e._prev,
                o = e._next;
            r ? r._next = o : t[n] === e && (t[n] = o), o ? o._prev = r : t[i] === e && (t[i] = r), e._next = e._prev = e.parent = null
        },
        _t = function(t, e) {
            t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0
        },
        Tt = function(t) {
            for (var e = t; e;) e._dirty = 1, e = e.parent;
            return t
        },
        Ct = function(t) {
            for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
            return t
        },
        St = function(t) {
            return t._repeat ? kt(t._tTime, t = t.duration() + t._rDelay) * t : 0
        },
        kt = function(t, e) {
            return (t /= e) && ~~t === t ? ~~t - 1 : ~~t
        },
        At = function(t, e) {
            return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        },
        Pt = function(t) {
            return t._end = lt(t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0))
        },
        Et = function(t, e) {
            var n = t._dp;
            return n && n.smoothChildTiming && t._ts && (t._start = lt(t._dp._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Pt(t), n._dirty || Tt(n)), t
        },
        Mt = function(t, e) {
            var n;
            if ((e._time || e._initted && !e._dur) && (n = At(t.rawTime(), e), (!e._dur || It(0, e.totalDuration(), n) - e._tTime > 1e-8) && e.render(n, !0)), Tt(t)._dp && t._initted && t._time >= t._dur && t._ts) {
                if (t._dur < t.duration())
                    for (n = t; n._dp;) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
                t._zTime = -1e-8
            }
        },
        Lt = function(t, e, n, i) {
            return e.parent && _t(e), e._start = lt(n + e._delay), e._end = lt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
                function(t, e, n, i, r) {
                    void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
                    var o, s = t[i];
                    if (r)
                        for (o = e[r]; s && s[r] > o;) s = s._prev;
                    s ? (e._next = s._next, s._next = e) : (e._next = t[n], t[n] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t
                }(t, e, "_first", "_last", t._sort ? "_start" : 0), t._recent = e, i || Mt(t, e), t
        },
        Dt = function(t, e) {
            return (B.ScrollTrigger || Y("scrollTrigger", e)) && B.ScrollTrigger.create(e, t)
        },
        Ot = function(t, e, n, i) {
            return Le(t, e), t._initted ? !n && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && c !== fe.frame ? (K.push(t), t._lazy = [e, i], 1) : void 0 : 1
        },
        $t = function(t, e, n) {
            var i = t._repeat,
                r = lt(e) || 0;
            return t._dur = r, t._tDur = i ? i < 0 ? 1e10 : lt(r * (i + 1) + t._rDelay * i) : r, t._time > r && (t._time = r, t._tTime = Math.min(t._tTime, t._tDur)), !n && Tt(t.parent), t.parent && Pt(t), t
        },
        Rt = function(t) {
            return t instanceof ke ? Tt(t) : $t(t, t._dur)
        },
        Nt = {
            _start: 0,
            endTime: G
        },
        Ht = function t(e, n) {
            var i, r, o = e.labels,
                s = e._recent || Nt,
                a = e.duration() >= b ? s.endTime(!1) : e._dur;
            return k(n) && (isNaN(n) || n in o) ? "<" === (i = n.charAt(0)) || ">" === i ? ("<" === i ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) : (i = n.indexOf("=")) < 0 ? (n in o || (o[n] = a), o[n]) : (r = +(n.charAt(i - 1) + n.substr(i + 1)), i > 1 ? t(e, n.substr(0, i - 1)) + r : a + r) : null == n ? a : +n
        },
        jt = function(t, e) {
            return t || 0 === t ? e(t) : e
        },
        It = function(t, e, n) {
            return n < t ? t : n > e ? e : n
        },
        Ft = function(t) {
            return (t + "").substr((parseFloat(t) + "").length)
        },
        zt = [].slice,
        qt = function(t, e) {
            return t && M(t) && "length" in t && (!e && !t.length || t.length - 1 in t && M(t[0])) && !t.nodeType && t !== s
        },
        Bt = function(t, e, n) {
            return void 0 === n && (n = []), t.forEach((function(t) {
                var i;
                return k(t) && !e || qt(t, 1) ? (i = n).push.apply(i, Wt(t)) : n.push(t)
            })) || n
        },
        Wt = function(t, e) {
            return !k(t) || e || !a && de() ? R(t) ? Bt(t, e) : qt(t) ? zt.call(t, 0) : t ? [t] : [] : zt.call(l.querySelectorAll(t), 0)
        },
        Xt = function(t) {
            return t.sort((function() {
                return .5 - Math.random()
            }))
        },
        Yt = function(t) {
            if (A(t)) return t;
            var e = M(t) ? t : {
                    each: t
                },
                n = be(e.ease),
                i = e.from || 0,
                r = parseFloat(e.base) || 0,
                o = {},
                s = i > 0 && i < 1,
                a = isNaN(i) || s,
                l = e.axis,
                u = i,
                c = i;
            return k(i) ? u = c = {
                    center: .5,
                    edges: .5,
                    end: 1
                } [i] || 0 : !s && a && (u = i[0], c = i[1]),
                function(t, s, f) {
                    var d, h, p, g, m, v, y, x, w, _ = (f || e).length,
                        C = o[_];
                    if (!C) {
                        if (!(w = "auto" === e.grid ? 0 : (e.grid || [1, b])[1])) {
                            for (y = -b; y < (y = f[w++].getBoundingClientRect().left) && w < _;);
                            w--
                        }
                        for (C = o[_] = [], d = a ? Math.min(w, _) * u - .5 : i % w, h = a ? _ * c / w - .5 : i / w | 0, y = 0, x = b, v = 0; v < _; v++) p = v % w - d, g = h - (v / w | 0), C[v] = m = l ? Math.abs("y" === l ? g : p) : T(p * p + g * g), m > y && (y = m), m < x && (x = m);
                        "random" === i && Xt(C), C.max = y - x, C.min = x, C.v = _ = (parseFloat(e.amount) || parseFloat(e.each) * (w > _ ? _ - 1 : l ? "y" === l ? _ / w : w : Math.max(w, _ / w)) || 0) * ("edges" === i ? -1 : 1), C.b = _ < 0 ? r - _ : r, C.u = Ft(e.amount || e.each) || 0, n = n && _ < 0 ? ve(n) : n
                    }
                    return _ = (C[t] - C.min) / C.max || 0, lt(C.b + (n ? n(_) : _) * C.v) + C.u
                }
        },
        Vt = function(t) {
            var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
            return function(n) {
                return Math.floor(Math.round(parseFloat(n) / t) * t * e) / e + (P(n) ? 0 : Ft(n))
            }
        },
        Ut = function(t, e) {
            var n, i, r = R(t);
            return !r && M(t) && (n = r = t.radius || b, t.values ? (t = Wt(t.values), (i = !P(t[0])) && (n *= n)) : t = Vt(t.increment)), jt(e, r ? A(t) ? function(e) {
                return i = t(e), Math.abs(i - e) <= n ? i : e
            } : function(e) {
                for (var r, o, s = parseFloat(i ? e.x : e), a = parseFloat(i ? e.y : 0), l = b, u = 0, c = t.length; c--;)(r = i ? (r = t[c].x - s) * r + (o = t[c].y - a) * o : Math.abs(t[c] - s)) < l && (l = r, u = c);
                return u = !n || l <= n ? t[u] : e, i || u === e || P(e) ? u : u + Ft(e)
            } : Vt(t))
        },
        Gt = function(t, e, n, i) {
            return jt(R(t) ? !e : !0 === n ? !!(n = 0) : !i, (function() {
                return R(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t + Math.random() * (e - t)) / n) * n * i) / i
            }))
        },
        Qt = function(t, e, n) {
            return jt(n, (function(n) {
                return t[~~e(n)]
            }))
        },
        Kt = function(t) {
            for (var e, n, i, r, o = 0, s = ""; ~(e = t.indexOf("random(", o));) i = t.indexOf(")", e), r = "[" === t.charAt(e + 7), n = t.substr(e + 7, i - e - 7).match(r ? q : N), s += t.substr(o, e - o) + Gt(r ? n : +n[0], +n[1], +n[2] || 1e-5), o = i + 1;
            return s + t.substr(o, t.length - o)
        },
        Zt = function(t, e, n, i, r) {
            var o = e - t,
                s = i - n;
            return jt(r, (function(e) {
                return n + ((e - t) / o * s || 0)
            }))
        },
        Jt = function(t, e, n) {
            var i, r, o, s = t.labels,
                a = b;
            for (i in s)(r = s[i] - e) < 0 == !!n && r && a > (r = Math.abs(r)) && (o = i, a = r);
            return o
        },
        te = function(t, e, n) {
            var i, r, o = t.vars,
                s = o[e];
            if (s) return i = o[e + "Params"], r = o.callbackScope || t, n && K.length && ft(), i ? s.apply(r, i) : s.call(r)
        },
        ee = function(t) {
            return _t(t), t.progress() < 1 && te(t, "onInterrupt"), t
        },
        ne = function(t) {
            var e = (t = !t.name && t.default || t).name,
                n = A(t),
                i = e && !n && t.init ? function() {
                    this._props = []
                } : t,
                r = {
                    init: G,
                    render: We,
                    add: Ee,
                    kill: Ye,
                    modifier: Xe,
                    rawVars: 0
                },
                o = {
                    targetTest: 0,
                    get: 0,
                    getSetter: Fe,
                    aliases: {},
                    register: 0
                };
            if (de(), t !== i) {
                if (J[e]) return;
                gt(i, gt(bt(t, r), o)), vt(i.prototype, vt(r, bt(t, o))), J[i.prop = e] = i, t.targetTest && (nt.push(i), Q[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
            }
            U(e, i), t.register && t.register(Je, i, Ge)
        },
        ie = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        },
        re = function(t, e, n) {
            return 255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (n - e) * t * 6 : t < .5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) + .5 | 0
        },
        oe = function(t, e, n) {
            var i, r, o, s, a, l, u, c, f, d, h = t ? P(t) ? [t >> 16, t >> 8 & 255, 255 & t] : 0 : ie.black;
            if (!h) {
                if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ie[t]) h = ie[t];
                else if ("#" === t.charAt(0)) 4 === t.length && (i = t.charAt(1), r = t.charAt(2), o = t.charAt(3), t = "#" + i + i + r + r + o + o), h = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                else if ("hsl" === t.substr(0, 3))
                    if (h = d = t.match(N), e) {
                        if (~t.indexOf("=")) return h = t.match(H), n && h.length < 4 && (h[3] = 1), h
                    } else s = +h[0] % 360 / 360, a = +h[1] / 100, i = 2 * (l = +h[2] / 100) - (r = l <= .5 ? l * (a + 1) : l + a - l * a), h.length > 3 && (h[3] *= 1), h[0] = re(s + 1 / 3, i, r), h[1] = re(s, i, r), h[2] = re(s - 1 / 3, i, r);
                else h = t.match(N) || ie.transparent;
                h = h.map(Number)
            }
            return e && !d && (i = h[0] / 255, r = h[1] / 255, o = h[2] / 255, l = ((u = Math.max(i, r, o)) + (c = Math.min(i, r, o))) / 2, u === c ? s = a = 0 : (f = u - c, a = l > .5 ? f / (2 - u - c) : f / (u + c), s = u === i ? (r - o) / f + (r < o ? 6 : 0) : u === r ? (o - i) / f + 2 : (i - r) / f + 4, s *= 60), h[0] = ~~(s + .5), h[1] = ~~(100 * a + .5), h[2] = ~~(100 * l + .5)), n && h.length < 4 && (h[3] = 1), h
        },
        se = function(t) {
            var e = [],
                n = [],
                i = -1;
            return t.split(le).forEach((function(t) {
                var r = t.match(j) || [];
                e.push.apply(e, r), n.push(i += r.length + 1)
            })), e.c = n, e
        },
        ae = function(t, e, n) {
            var i, r, o, s, a = "",
                l = (t + a).match(le),
                u = e ? "hsla(" : "rgba(",
                c = 0;
            if (!l) return t;
            if (l = l.map((function(t) {
                    return (t = oe(t, e, 1)) && u + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
                })), n && (o = se(t), (i = n.c).join(a) !== o.c.join(a)))
                for (s = (r = t.replace(le, "1").split(j)).length - 1; c < s; c++) a += r[c] + (~i.indexOf(c) ? l.shift() || u + "0,0,0,0)" : (o.length ? o : l.length ? l : n).shift());
            if (!r)
                for (s = (r = t.split(le)).length - 1; c < s; c++) a += r[c] + l[c];
            return a + r[s]
        },
        le = function() {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (t in ie) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(),
        ue = /hsl[a]?\(/,
        ce = function(t) {
            var e, n = t.join(" ");
            if (le.lastIndex = 0, le.test(n)) return e = ue.test(n), t[1] = ae(t[1], e), t[0] = ae(t[0], e, se(t[1])), !0
        },
        fe = function() {
            var t, e, n, i, r = Date.now,
                o = 500,
                c = 33,
                f = r(),
                h = f,
                p = 1 / 240,
                g = p,
                m = [],
                v = function n(s) {
                    var a, l, u = r() - h,
                        d = !0 === s;
                    u > o && (f += u - c), h += u, i.time = (h - f) / 1e3, ((a = i.time - g) > 0 || d) && (i.frame++, g += a + (a >= p ? .004 : p - a), l = 1), d || (t = e(n)), l && m.forEach((function(t) {
                        return t(i.time, u, i.frame, s)
                    }))
                };
            return i = {
                time: 0,
                frame: 0,
                tick: function() {
                    v(!0)
                },
                wake: function() {
                    u && (!a && D() && (s = a = window, l = s.document || {}, B.gsap = Je, (s.gsapVersions || (s.gsapVersions = [])).push(Je.version), X(W || s.GreenSockGlobals || !s.gsap && s || {}), n = s.requestAnimationFrame), t && i.sleep(), e = n || function(t) {
                        return setTimeout(t, 1e3 * (g - i.time) + 1 | 0)
                    }, d = 1, v(2))
                },
                sleep: function() {
                    (n ? s.cancelAnimationFrame : clearTimeout)(t), d = 0, e = G
                },
                lagSmoothing: function(t, e) {
                    o = t || 1 / 1e-8, c = Math.min(e, o, 0)
                },
                fps: function(t) {
                    p = 1 / (t || 240), g = i.time + p
                },
                add: function(t) {
                    m.indexOf(t) < 0 && m.push(t), de()
                },
                remove: function(t) {
                    var e;
                    ~(e = m.indexOf(t)) && m.splice(e, 1)
                },
                _listeners: m
            }
        }(),
        de = function() {
            return !d && fe.wake()
        },
        he = {},
        pe = /^[\d.\-M][\d.\-,\s]/,
        ge = /["']/g,
        me = function(t) {
            for (var e, n, i, r = {}, o = t.substr(1, t.length - 3).split(":"), s = o[0], a = 1, l = o.length; a < l; a++) n = o[a], e = a !== l - 1 ? n.lastIndexOf(",") : n.length, i = n.substr(0, e), r[s] = isNaN(i) ? i.replace(ge, "").trim() : +i, s = n.substr(e + 1).trim();
            return r
        },
        ve = function(t) {
            return function(e) {
                return 1 - t(1 - e)
            }
        },
        ye = function t(e, n) {
            for (var i, r = e._first; r;) r instanceof ke ? t(r, n) : !r.vars.yoyoEase || r._yoyo && r._repeat || r._yoyo === n || (r.timeline ? t(r.timeline, n) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = n)), r = r._next
        },
        be = function(t, e) {
            return t && (A(t) ? t : he[t] || function(t) {
                var e = (t + "").split("("),
                    n = he[e[0]];
                return n && e.length > 1 && n.config ? n.config.apply(null, ~t.indexOf("{") ? [me(e[1])] : F.exec(t)[1].split(",").map(ht)) : he._CE && pe.test(t) ? he._CE("", t) : n
            }(t)) || e
        },
        xe = function(t, e, n, i) {
            void 0 === n && (n = function(t) {
                return 1 - e(1 - t)
            }), void 0 === i && (i = function(t) {
                return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
            });
            var r, o = {
                easeIn: e,
                easeOut: n,
                easeInOut: i
            };
            return at(t, (function(t) {
                for (var e in he[t] = B[t] = o, he[r = t.toLowerCase()] = n, o) he[r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = he[t + "." + e] = o[e]
            })), o
        },
        we = function(t) {
            return function(e) {
                return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
            }
        },
        _e = function t(e, n, i) {
            var r = n >= 1 ? n : 1,
                o = (i || (e ? .3 : .45)) / (n < 1 ? n : 1),
                s = o / x * (Math.asin(1 / r) || 0),
                a = function(t) {
                    return 1 === t ? 1 : r * Math.pow(2, -10 * t) * S((t - s) * o) + 1
                },
                l = "out" === e ? a : "in" === e ? function(t) {
                    return 1 - a(1 - t)
                } : we(a);
            return o = x / o, l.config = function(n, i) {
                return t(e, n, i)
            }, l
        },
        Te = function t(e, n) {
            void 0 === n && (n = 1.70158);
            var i = function(t) {
                    return t ? --t * t * ((n + 1) * t + n) + 1 : 0
                },
                r = "out" === e ? i : "in" === e ? function(t) {
                    return 1 - i(1 - t)
                } : we(i);
            return r.config = function(n) {
                return t(e, n)
            }, r
        };
    at("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
        var n = e < 5 ? e + 1 : e;
        xe(t + ",Power" + (n - 1), e ? function(t) {
            return Math.pow(t, n)
        } : function(t) {
            return t
        }, (function(t) {
            return 1 - Math.pow(1 - t, n)
        }), (function(t) {
            return t < .5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 * (1 - t), n) / 2
        }))
    })), he.Linear.easeNone = he.none = he.Linear.easeIn, xe("Elastic", _e("in"), _e("out"), _e()), h = 7.5625, g = 1 / (p = 2.75), xe("Bounce", (function(t) {
        return 1 - m(1 - t)
    }), m = function(t) {
        return t < g ? h * t * t : t < .7272727272727273 ? h * Math.pow(t - 1.5 / p, 2) + .75 : t < .9090909090909092 ? h * (t -= 2.25 / p) * t + .9375 : h * Math.pow(t - 2.625 / p, 2) + .984375
    }), xe("Expo", (function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    })), xe("Circ", (function(t) {
        return -(T(1 - t * t) - 1)
    })), xe("Sine", (function(t) {
        return 1 === t ? 1 : 1 - C(t * w)
    })), xe("Back", Te("in"), Te("out"), Te()), he.SteppedEase = he.steps = B.SteppedEase = {
        config: function(t, e) {
            void 0 === t && (t = 1);
            var n = 1 / t,
                i = t + (e ? 0 : 1),
                r = e ? 1 : 0;
            return function(t) {
                return ((i * It(0, 1 - 1e-8, t) | 0) + r) * n
            }
        }
    }, y.ease = he["quad.out"], at("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) {
        return it += t + "," + t + "Params,"
    }));
    var Ce = function(t, e) {
            this.id = _++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : st, this.set = e ? e.getSetter : Fe
        },
        Se = function() {
            function t(t, e) {
                var n = t.parent || o;
                this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, $t(this, +t.duration, 1), this.data = t.data, d || fe.wake(), n && Lt(n, this, e || 0 === e ? e : n._time, 1), t.reversed && this.reverse(), t.paused && this.paused(!0)
            }
            var e = t.prototype;
            return e.delay = function(t) {
                return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
            }, e.duration = function(t) {
                return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
            }, e.totalDuration = function(t) {
                if (!arguments.length) return this._tDur;
                this._dirty = 0;
                var e = this._time / this._dur || 0;
                return $t(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1)), this._tTime ? Et(this, e * t + St(this)) : this
            }, e.totalTime = function(t, e) {
                if (de(), !arguments.length) return this._tTime;
                var n = this._dp;
                if (n && n.smoothChildTiming && this._ts) {
                    for (Et(this, t); n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
                    !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Lt(this._dp, this, this._start - this._delay)
                }
                return (this._tTime !== t || !this._dur && !e || this._initted && 1e-8 === Math.abs(this._zTime) || !t && !this._initted) && (this._ts || (this._pTime = t), dt(this, t, e)), this
            }, e.time = function(t, e) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + St(this)) % this._dur || (t ? this._dur : 0), e) : this._time
            }, e.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
            }, e.progress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + St(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
            }, e.iteration = function(t, e) {
                var n = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (t - 1) * n, e) : this._repeat ? kt(this._tTime, n) + 1 : 1
            }, e.timeScale = function(t) {
                if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                if (this._rts === t) return this;
                var e = this.parent && this._ts ? At(this.parent._time, this) : this._tTime;
                return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, Ct(this.totalTime(It(-this._delay, this._tDur, e), !0))
            }, e.paused = function(t) {
                return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (de(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= 1e-8) && 1e-8 !== Math.abs(this._zTime)))), this) : this._ps
            }, e.startTime = function(t) {
                if (arguments.length) {
                    this._start = t;
                    var e = this.parent || this._dp;
                    return e && (e._sort || !this.parent) && Lt(e, this, t - this._delay), this
                }
                return this._start
            }, e.endTime = function(t) {
                return this._start + (L(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
            }, e.rawTime = function(t) {
                var e = this.parent || this._dp;
                return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? At(e.rawTime(t), this) : this._tTime : this._tTime
            }, e.globalTime = function(t) {
                for (var e = this, n = arguments.length ? t : e.rawTime(); e;) n = e._start + n / (e._ts || 1), e = e._dp;
                return n
            }, e.repeat = function(t) {
                return arguments.length ? (this._repeat = t, Rt(this)) : this._repeat
            }, e.repeatDelay = function(t) {
                return arguments.length ? (this._rDelay = t, Rt(this)) : this._rDelay
            }, e.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, e.seek = function(t, e) {
                return this.totalTime(Ht(this, t), L(e))
            }, e.restart = function(t, e) {
                return this.play().totalTime(t ? -this._delay : 0, L(e))
            }, e.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, e.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, e.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, e.resume = function() {
                return this.paused(!1)
            }, e.reversed = function(t) {
                return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
            }, e.invalidate = function() {
                return this._initted = 0, this._zTime = -1e-8, this
            }, e.isActive = function() {
                var t, e = this.parent || this._dp,
                    n = this._start;
                return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= n && t < this.endTime(!0) - 1e-8))
            }, e.eventCallback = function(t, e, n) {
                var i = this.vars;
                return arguments.length > 1 ? (e ? (i[t] = e, n && (i[t + "Params"] = n), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t]
            }, e.then = function(t) {
                var e = this;
                return new Promise((function(n) {
                    var i = A(t) ? t : pt,
                        r = function() {
                            var t = e.then;
                            e.then = null, A(i) && (i = i(e)) && (i.then || i === e) && (e.then = t), n(i), e.then = t
                        };
                    e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? r() : e._prom = r
                }))
            }, e.kill = function() {
                ee(this)
            }, t
        }();
    gt(Se.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var ke = function(t) {
        function e(e, n) {
            var r;
            return void 0 === e && (e = {}), (r = t.call(this, e, n) || this).labels = {}, r.smoothChildTiming = !!e.smoothChildTiming, r.autoRemoveChildren = !!e.autoRemoveChildren, r._sort = L(e.sortChildren), r.parent && Mt(r.parent, i(r)), e.scrollTrigger && Dt(i(r), e.scrollTrigger), r
        }
        r(e, t);
        var n = e.prototype;
        return n.to = function(t, e, n) {
            return new Re(t, ct(arguments, 0, this), Ht(this, P(e) ? arguments[3] : n)), this
        }, n.from = function(t, e, n) {
            return new Re(t, ct(arguments, 1, this), Ht(this, P(e) ? arguments[3] : n)), this
        }, n.fromTo = function(t, e, n, i) {
            return new Re(t, ct(arguments, 2, this), Ht(this, P(e) ? arguments[4] : i)), this
        }, n.set = function(t, e, n) {
            return e.duration = 0, e.parent = this, xt(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Re(t, e, Ht(this, n), 1), this
        }, n.call = function(t, e, n) {
            return Lt(this, Re.delayedCall(0, t, e), Ht(this, n))
        }, n.staggerTo = function(t, e, n, i, r, o, s) {
            return n.duration = e, n.stagger = n.stagger || i, n.onComplete = o, n.onCompleteParams = s, n.parent = this, new Re(t, n, Ht(this, r)), this
        }, n.staggerFrom = function(t, e, n, i, r, o, s) {
            return n.runBackwards = 1, xt(n).immediateRender = L(n.immediateRender), this.staggerTo(t, e, n, i, r, o, s)
        }, n.staggerFromTo = function(t, e, n, i, r, o, s, a) {
            return i.startAt = n, xt(i).immediateRender = L(i.immediateRender), this.staggerTo(t, e, i, r, o, s, a)
        }, n.render = function(t, e, n) {
            var i, r, s, a, l, u, c, f, d, h, p, g, m = this._time,
                v = this._dirty ? this.totalDuration() : this._tDur,
                y = this._dur,
                b = this !== o && t > v - 1e-8 && t >= 0 ? v : t < 1e-8 ? 0 : t,
                x = this._zTime < 0 != t < 0 && (this._initted || !y);
            if (b !== this._tTime || n || x) {
                if (m !== this._time && y && (b += this._time - m, t += this._time - m), i = b, d = this._start, u = !(f = this._ts), x && (y || (m = this._zTime), (t || !e) && (this._zTime = t)), this._repeat && (p = this._yoyo, l = y + this._rDelay, ((i = lt(b % l)) > y || v === b) && (i = y), (a = ~~(b / l)) && a === b / l && (i = y, a--), h = kt(this._tTime, l), !m && this._tTime && h !== a && (h = a), p && 1 & a && (i = y - i, g = 1), a !== h && !this._lock)) {
                    var w = p && 1 & h,
                        _ = w === (p && 1 & a);
                    if (a < h && (w = !w), m = w ? 0 : y, this._lock = 1, this.render(m || (g ? 0 : lt(a * l)), e, !y)._lock = 0, !e && this.parent && te(this, "onRepeat"), this.vars.repeatRefresh && !g && (this.invalidate()._lock = 1), m !== this._time || u !== !this._ts) return this;
                    if (_ && (this._lock = 2, m = w ? y + 1e-4 : -1e-4, this.render(m, !0), this.vars.repeatRefresh && !g && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
                    ye(this, g)
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (c = function(t, e, n) {
                        var i;
                        if (n > e)
                            for (i = t._first; i && i._start <= n;) {
                                if (!i._dur && "isPause" === i.data && i._start > e) return i;
                                i = i._next
                            } else
                                for (i = t._last; i && i._start >= n;) {
                                    if (!i._dur && "isPause" === i.data && i._start < e) return i;
                                    i = i._prev
                                }
                    }(this, lt(m), lt(i))) && (b -= i - (i = c._start)), this._tTime = b, this._time = i, this._act = !f, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t), m || !i || e || te(this, "onStart"), i >= m && t >= 0)
                    for (r = this._first; r;) {
                        if (s = r._next, (r._act || i >= r._start) && r._ts && c !== r) {
                            if (r.parent !== this) return this.render(t, e, n);
                            if (r.render(r._ts > 0 ? (i - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (i - r._start) * r._ts, e, n), i !== this._time || !this._ts && !u) {
                                c = 0, s && (b += this._zTime = -1e-8);
                                break
                            }
                        }
                        r = s
                    } else {
                        r = this._last;
                        for (var T = t < 0 ? t : i; r;) {
                            if (s = r._prev, (r._act || T <= r._end) && r._ts && c !== r) {
                                if (r.parent !== this) return this.render(t, e, n);
                                if (r.render(r._ts > 0 ? (T - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (T - r._start) * r._ts, e, n), i !== this._time || !this._ts && !u) {
                                    c = 0, s && (b += this._zTime = T ? -1e-8 : 1e-8);
                                    break
                                }
                            }
                            r = s
                        }
                    }
                if (c && !e && (this.pause(), c.render(i >= m ? 0 : -1e-8)._zTime = i >= m ? 1 : -1, this._ts)) return this._start = d, Pt(this), this.render(t, e, n);
                this._onUpdate && !e && te(this, "onUpdate", !0), (b === v && v >= this.totalDuration() || !b && m) && (d !== this._start && Math.abs(f) === Math.abs(this._ts) || this._lock || ((t || !y) && (b === v && this._ts > 0 || !b && this._ts < 0) && _t(this, 1), e || t < 0 && !m || !b && !m || (te(this, b === v ? "onComplete" : "onReverseComplete", !0), this._prom && !(b < v && this.timeScale() > 0) && this._prom())))
            }
            return this
        }, n.add = function(t, e) {
            var n = this;
            if (P(e) || (e = Ht(this, e)), !(t instanceof Se)) {
                if (R(t)) return t.forEach((function(t) {
                    return n.add(t, e)
                })), Tt(this);
                if (k(t)) return this.addLabel(t, e);
                if (!A(t)) return this;
                t = Re.delayedCall(0, t)
            }
            return this !== t ? Lt(this, t, e) : this
        }, n.getChildren = function(t, e, n, i) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === n && (n = !0), void 0 === i && (i = -b);
            for (var r = [], o = this._first; o;) o._start >= i && (o instanceof Re ? e && r.push(o) : (n && r.push(o), t && r.push.apply(r, o.getChildren(!0, e, n)))), o = o._next;
            return r
        }, n.getById = function(t) {
            for (var e = this.getChildren(1, 1, 1), n = e.length; n--;)
                if (e[n].vars.id === t) return e[n]
        }, n.remove = function(t) {
            return k(t) ? this.removeLabel(t) : A(t) ? this.killTweensOf(t) : (wt(this, t), t === this._recent && (this._recent = this._last), Tt(this))
        }, n.totalTime = function(e, n) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = lt(fe.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, n), this._forcing = 0, this) : this._tTime
        }, n.addLabel = function(t, e) {
            return this.labels[t] = Ht(this, e), this
        }, n.removeLabel = function(t) {
            return delete this.labels[t], this
        }, n.addPause = function(t, e, n) {
            var i = Re.delayedCall(0, e || G, n);
            return i.data = "isPause", this._hasPause = 1, Lt(this, i, Ht(this, t))
        }, n.removePause = function(t) {
            var e = this._first;
            for (t = Ht(this, t); e;) e._start === t && "isPause" === e.data && _t(e), e = e._next
        }, n.killTweensOf = function(t, e, n) {
            for (var i = this.getTweensOf(t, n), r = i.length; r--;) Ae !== i[r] && i[r].kill(t, e);
            return this
        }, n.getTweensOf = function(t, e) {
            for (var n, i = [], r = Wt(t), o = this._first, s = P(e); o;) o instanceof Re ? ut(o._targets, r) && (s ? (!Ae || o._initted && o._ts) && o.globalTime(0) <= e && o.globalTime(o.totalDuration()) > e : !e || o.isActive()) && i.push(o) : (n = o.getTweensOf(r, e)).length && i.push.apply(i, n), o = o._next;
            return i
        }, n.tweenTo = function(t, e) {
            e = e || {};
            var n = this,
                i = Ht(n, t),
                r = e,
                o = r.startAt,
                s = r.onStart,
                a = r.onStartParams,
                l = Re.to(n, gt(e, {
                    ease: "none",
                    lazy: !1,
                    time: i,
                    duration: e.duration || Math.abs((i - (o && "time" in o ? o.time : n._time)) / n.timeScale()) || 1e-8,
                    onStart: function() {
                        n.pause();
                        var t = e.duration || Math.abs((i - n._time) / n.timeScale());
                        l._dur !== t && $t(l, t).render(l._time, !0, !0), s && s.apply(l, a || [])
                    }
                }));
            return l
        }, n.tweenFromTo = function(t, e, n) {
            return this.tweenTo(e, gt({
                startAt: {
                    time: Ht(this, t)
                }
            }, n))
        }, n.recent = function() {
            return this._recent
        }, n.nextLabel = function(t) {
            return void 0 === t && (t = this._time), Jt(this, Ht(this, t))
        }, n.previousLabel = function(t) {
            return void 0 === t && (t = this._time), Jt(this, Ht(this, t), 1)
        }, n.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + 1e-8)
        }, n.shiftChildren = function(t, e, n) {
            void 0 === n && (n = 0);
            for (var i, r = this._first, o = this.labels; r;) r._start >= n && (r._start += t), r = r._next;
            if (e)
                for (i in o) o[i] >= n && (o[i] += t);
            return Tt(this)
        }, n.invalidate = function() {
            var e = this._first;
            for (this._lock = 0; e;) e.invalidate(), e = e._next;
            return t.prototype.invalidate.call(this)
        }, n.clear = function(t) {
            void 0 === t && (t = !0);
            for (var e, n = this._first; n;) e = n._next, this.remove(n), n = e;
            return this._time = this._tTime = this._pTime = 0, t && (this.labels = {}), Tt(this)
        }, n.totalDuration = function(t) {
            var e, n, i, r, s = 0,
                a = this,
                l = a._last,
                u = b;
            if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
            if (a._dirty) {
                for (r = a.parent; l;) e = l._prev, l._dirty && l.totalDuration(), (i = l._start) > u && a._sort && l._ts && !a._lock ? (a._lock = 1, Lt(a, l, i - l._delay, 1)._lock = 0) : u = i, i < 0 && l._ts && (s -= i, (!r && !a._dp || r && r.smoothChildTiming) && (a._start += i / a._ts, a._time -= i, a._tTime -= i), a.shiftChildren(-i, !1, -Infinity), u = 0), (n = Pt(l)) > s && l._ts && (s = n), l = e;
                $t(a, a === o && a._time > s ? a._time : s, 1), a._dirty = 0
            }
            return a._tDur
        }, e.updateRoot = function(t) {
            if (o._ts && (dt(o, At(t, o)), c = fe.frame), fe.frame >= et) {
                et += v.autoSleep || 120;
                var e = o._first;
                if ((!e || !e._ts) && v.autoSleep && fe._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || fe.sleep()
                }
            }
        }, e
    }(Se);
    gt(ke.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var Ae, Pe = function(t, e, n, i, r, o, s) {
            var a, l, u, c, f, d, h, p, g = new Ge(this._pt, t, e, 0, 1, Be, null, r),
                m = 0,
                v = 0;
            for (g.b = n, g.e = i, n += "", (h = ~(i += "").indexOf("random(")) && (i = Kt(i)), o && (o(p = [n, i], t, e), n = p[0], i = p[1]), l = n.match(I) || []; a = I.exec(i);) c = a[0], f = i.substring(m, a.index), u ? u = (u + 1) % 5 : "rgba(" === f.substr(-5) && (u = 1), c !== l[v++] && (d = parseFloat(l[v - 1]) || 0, g._pt = {
                _next: g._pt,
                p: f || 1 === v ? f : ",",
                s: d,
                c: "=" === c.charAt(1) ? parseFloat(c.substr(2)) * ("-" === c.charAt(0) ? -1 : 1) : parseFloat(c) - d,
                m: u && u < 4 ? Math.round : 0
            }, m = I.lastIndex);
            return g.c = m < i.length ? i.substring(m, i.length) : "", g.fp = s, (z.test(i) || h) && (g.e = 0), this._pt = g, g
        },
        Ee = function(t, e, n, i, r, o, s, a, l) {
            A(i) && (i = i(r || 0, t, o));
            var u, c = t[e],
                f = "get" !== n ? n : A(c) ? l ? t[e.indexOf("set") || !A(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : c,
                d = A(c) ? l ? je : He : Ne;
            if (k(i) && (~i.indexOf("random(") && (i = Kt(i)), "=" === i.charAt(1) && (i = parseFloat(f) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (Ft(f) || 0))), f !== i) return isNaN(f * i) ? (!c && !(e in t) && Y(e, i), Pe.call(this, t, e, f, i, d, a || v.stringFilter, l)) : (u = new Ge(this._pt, t, e, +f || 0, i - (f || 0), "boolean" == typeof c ? qe : ze, 0, d), l && (u.fp = l), s && u.modifier(s, this, t), this._pt = u)
        },
        Me = function(t, e, n, i, r, o) {
            var s, a, l, u;
            if (J[t] && !1 !== (s = new J[t]).init(r, s.rawVars ? e[t] : function(t, e, n, i, r) {
                    if (A(t) && (t = De(t, r, e, n, i)), !M(t) || t.style && t.nodeType || R(t)) return k(t) ? De(t, r, e, n, i) : t;
                    var o, s = {};
                    for (o in t) s[o] = De(t[o], r, e, n, i);
                    return s
                }(e[t], i, r, o, n), n, i, o) && (n._pt = a = new Ge(n._pt, r, t, 0, 1, s.render, s, 0, s.priority), n !== f))
                for (l = n._ptLookup[n._targets.indexOf(r)], u = s._props.length; u--;) l[s._props[u]] = a;
            return s
        },
        Le = function t(e, n) {
            var i, r, s, a, l, u, c, f, d, h, p, g, m, v = e.vars,
                b = v.ease,
                x = v.startAt,
                w = v.immediateRender,
                _ = v.lazy,
                T = v.onUpdate,
                C = v.onUpdateParams,
                S = v.callbackScope,
                k = v.runBackwards,
                A = v.yoyoEase,
                P = v.keyframes,
                E = v.autoRevert,
                M = e._dur,
                D = e._startAt,
                O = e._targets,
                $ = e.parent,
                R = $ && "nested" === $.data ? $.parent._targets : O,
                N = "auto" === e._overwrite,
                H = e.timeline;
            if (H && (!P || !b) && (b = "none"), e._ease = be(b, y.ease), e._yEase = A ? ve(be(!0 === A ? b : A, y.ease)) : 0, A && e._yoyo && !e._repeat && (A = e._yEase, e._yEase = e._ease, e._ease = A), !H) {
                if (g = (f = O[0] ? ot(O[0]).harness : 0) && v[f.prop], i = bt(v, Q), D && D.render(-1, !0).kill(), x) {
                    if (_t(e._startAt = Re.set(O, gt({
                            data: "isStart",
                            overwrite: !1,
                            parent: $,
                            immediateRender: !0,
                            lazy: L(_),
                            startAt: null,
                            delay: 0,
                            onUpdate: T,
                            onUpdateParams: C,
                            callbackScope: S,
                            stagger: 0
                        }, x))), w)
                        if (n > 0) !E && (e._startAt = 0);
                        else if (M && !(n < 0 && D)) return void(e._zTime = n)
                } else if (k && M)
                    if (D) !E && (e._startAt = 0);
                    else if (n && (w = !1), s = gt({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: w && L(_),
                        immediateRender: w,
                        stagger: 0,
                        parent: $
                    }, i), g && (s[f.prop] = g), _t(e._startAt = Re.set(O, s)), w) {
                    if (!n) return
                } else t(e._startAt, 1e-8);
                for (e._pt = 0, _ = M && L(_) || _ && !M, r = 0; r < O.length; r++) {
                    if (c = (l = O[r])._gsap || rt(O)[r]._gsap, e._ptLookup[r] = h = {}, Z[c.id] && ft(), p = R === O ? r : R.indexOf(l), f && !1 !== (d = new f).init(l, g || i, e, p, R) && (e._pt = a = new Ge(e._pt, l, d.name, 0, 1, d.render, d, 0, d.priority), d._props.forEach((function(t) {
                            h[t] = a
                        })), d.priority && (u = 1)), !f || g)
                        for (s in i) J[s] && (d = Me(s, i, e, p, l, R)) ? d.priority && (u = 1) : h[s] = a = Ee.call(e, l, s, "get", i[s], p, R, 0, v.stringFilter);
                    e._op && e._op[r] && e.kill(l, e._op[r]), N && e._pt && (Ae = e, o.killTweensOf(l, h, e.globalTime(0)), m = !e.parent, Ae = 0), e._pt && _ && (Z[c.id] = 1)
                }
                u && Ue(e), e._onInit && e._onInit(e)
            }
            e._from = !H && !!v.runBackwards, e._onUpdate = T, e._initted = (!e._op || e._pt) && !m
        },
        De = function(t, e, n, i, r) {
            return A(t) ? t.call(e, n, i, r) : k(t) && ~t.indexOf("random(") ? Kt(t) : t
        },
        Oe = it + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        $e = (Oe + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
        Re = function(t) {
            function e(e, n, r, s) {
                var a;
                "number" == typeof n && (r.duration = n, n = r, r = null);
                var l, u, c, f, d, h, p, g, m = (a = t.call(this, s ? n : xt(n), r) || this).vars,
                    y = m.duration,
                    b = m.delay,
                    x = m.immediateRender,
                    w = m.stagger,
                    _ = m.overwrite,
                    T = m.keyframes,
                    C = m.defaults,
                    S = m.scrollTrigger,
                    k = m.yoyoEase,
                    A = a.parent,
                    E = (R(e) ? P(e[0]) : "length" in n) ? [e] : Wt(e);
                if (a._targets = E.length ? rt(E) : V("GSAP target " + e + " not found. https://greensock.com", !v.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = _, T || w || O(y) || O(b)) {
                    if (n = a.vars, (l = a.timeline = new ke({
                            data: "nested",
                            defaults: C || {}
                        })).kill(), l.parent = i(a), T) gt(l.vars.defaults, {
                        ease: "none"
                    }), T.forEach((function(t) {
                        return l.to(E, t, ">")
                    }));
                    else {
                        if (f = E.length, p = w ? Yt(w) : G, M(w))
                            for (d in w) ~Oe.indexOf(d) && (g || (g = {}), g[d] = w[d]);
                        for (u = 0; u < f; u++) {
                            for (d in c = {}, n) $e.indexOf(d) < 0 && (c[d] = n[d]);
                            c.stagger = 0, k && (c.yoyoEase = k), g && vt(c, g), h = E[u], c.duration = +De(y, i(a), u, h, E), c.delay = (+De(b, i(a), u, h, E) || 0) - a._delay, !w && 1 === f && c.delay && (a._delay = b = c.delay, a._start += b, c.delay = 0), l.to(h, c, p(u, h, E))
                        }
                        l.duration() ? y = b = 0 : a.timeline = 0
                    }
                    y || a.duration(y = l.duration())
                } else a.timeline = 0;
                return !0 === _ && (Ae = i(a), o.killTweensOf(E), Ae = 0), A && Mt(A, i(a)), (x || !y && !T && a._start === lt(A._time) && L(x) && function t(e) {
                    return !e || e._ts && t(e.parent)
                }(i(a)) && "nested" !== A.data) && (a._tTime = -1e-8, a.render(Math.max(0, -b))), S && Dt(i(a), S), a
            }
            r(e, t);
            var n = e.prototype;
            return n.render = function(t, e, n) {
                var i, r, o, s, a, l, u, c, f, d = this._time,
                    h = this._tDur,
                    p = this._dur,
                    g = t > h - 1e-8 && t >= 0 ? h : t < 1e-8 ? 0 : t;
                if (p) {
                    if (g !== this._tTime || !t || n || this._startAt && this._zTime < 0 != t < 0) {
                        if (i = g, c = this.timeline, this._repeat) {
                            if (s = p + this._rDelay, ((i = lt(g % s)) > p || h === g) && (i = p), (o = ~~(g / s)) && o === g / s && (i = p, o--), (l = this._yoyo && 1 & o) && (f = this._yEase, i = p - i), a = kt(this._tTime, s), i === d && !n && this._initted) return this;
                            o !== a && (c && this._yEase && ye(c, l), !this.vars.repeatRefresh || l || this._lock || (this._lock = n = 1, this.render(lt(s * o), !0).invalidate()._lock = 0))
                        }
                        if (!this._initted) {
                            if (Ot(this, t < 0 ? t : i, n, e)) return this._tTime = 0, this;
                            if (p !== this._dur) return this.render(t, e, n)
                        }
                        for (this._tTime = g, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = u = (f || this._ease)(i / p), this._from && (this.ratio = u = 1 - u), i && !d && !e && te(this, "onStart"), r = this._pt; r;) r.r(u, r.d), r = r._next;
                        c && c.render(t < 0 ? t : !i && l ? -1e-8 : c._dur * u, e, n) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, n), te(this, "onUpdate")), this._repeat && o !== a && this.vars.onRepeat && !e && this.parent && te(this, "onRepeat"), g !== this._tDur && g || this._tTime !== g || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), (t || !p) && (g === this._tDur && this._ts > 0 || !g && this._ts < 0) && _t(this, 1), e || t < 0 && !d || !g && !d || (te(this, g === h ? "onComplete" : "onReverseComplete", !0), this._prom && !(g < h && this.timeScale() > 0) && this._prom()))
                    }
                } else ! function(t, e, n, i) {
                    var r, o, s = t.ratio,
                        a = e < 0 || !e && s && !t._start && t._zTime > 1e-8 && !t._dp._lock || t._ts < 0 || t._dp._ts < 0 ? 0 : 1,
                        l = t._rDelay,
                        u = 0;
                    if (l && t._repeat && (u = It(0, t._tDur, e), kt(u, l) !== (o = kt(t._tTime, l)) && (s = 1 - a, t.vars.repeatRefresh && t._initted && t.invalidate())), t._initted || !Ot(t, e, i, n))
                        if (a !== s || i || 1e-8 === t._zTime || !e && t._zTime) {
                            for (o = t._zTime, t._zTime = e || (n ? 1e-8 : 0), n || (n = e && !o), t.ratio = a, t._from && (a = 1 - a), t._time = 0, t._tTime = u, n || te(t, "onStart"), r = t._pt; r;) r.r(a, r.d), r = r._next;
                            t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !n && te(t, "onUpdate"), u && t._repeat && !n && t.parent && te(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === a && (a && _t(t, 1), n || (te(t, a ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                        } else t._zTime || (t._zTime = e)
                }(this, t, e, n);
                return this
            }, n.targets = function() {
                return this._targets
            }, n.invalidate = function() {
                return this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this)
            }, n.kill = function(t, e) {
                if (void 0 === e && (e = "all"), !(t || e && "all" !== e) && (this._lazy = 0, this.parent)) return ee(this);
                if (this.timeline) {
                    var n = this.timeline.totalDuration();
                    return this.timeline.killTweensOf(t, e, Ae && !0 !== Ae.vars.overwrite)._first || ee(this), this.parent && n !== this.timeline.totalDuration() && $t(this, this._dur * this.timeline._tDur / n), this
                }
                var i, r, o, s, a, l, u, c = this._targets,
                    f = t ? Wt(t) : c,
                    d = this._ptLookup,
                    h = this._pt;
                if ((!e || "all" === e) && function(t, e) {
                        for (var n = t.length, i = n === e.length; i && n-- && t[n] === e[n];);
                        return n < 0
                    }(c, f)) return "all" === e && (this._pt = 0), ee(this);
                for (i = this._op = this._op || [], "all" !== e && (k(e) && (a = {}, at(e, (function(t) {
                        return a[t] = 1
                    })), e = a), e = function(t, e) {
                        var n, i, r, o, s = t[0] ? ot(t[0]).harness : 0,
                            a = s && s.aliases;
                        if (!a) return e;
                        for (i in n = vt({}, e), a)
                            if (i in n)
                                for (r = (o = a[i].split(",")).length; r--;) n[o[r]] = n[i];
                        return n
                    }(c, e)), u = c.length; u--;)
                    if (~f.indexOf(c[u]))
                        for (a in r = d[u], "all" === e ? (i[u] = e, s = r, o = {}) : (o = i[u] = i[u] || {}, s = e), s)(l = r && r[a]) && ("kill" in l.d && !0 !== l.d.kill(a) || wt(this, l, "_pt"), delete r[a]), "all" !== o && (o[a] = 1);
                return this._initted && !this._pt && h && ee(this), this
            }, e.to = function(t, n) {
                return new e(t, n, arguments[2])
            }, e.from = function(t, n) {
                return new e(t, ct(arguments, 1))
            }, e.delayedCall = function(t, n, i, r) {
                return new e(n, 0, {
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: t,
                    onComplete: n,
                    onReverseComplete: n,
                    onCompleteParams: i,
                    onReverseCompleteParams: i,
                    callbackScope: r
                })
            }, e.fromTo = function(t, n, i) {
                return new e(t, ct(arguments, 2))
            }, e.set = function(t, n) {
                return n.duration = 0, n.repeatDelay || (n.repeat = 0), new e(t, n)
            }, e.killTweensOf = function(t, e, n) {
                return o.killTweensOf(t, e, n)
            }, e
        }(Se);
    gt(Re.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), at("staggerTo,staggerFrom,staggerFromTo", (function(t) {
        Re[t] = function() {
            var e = new ke,
                n = zt.call(arguments, 0);
            return n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n)
        }
    }));
    var Ne = function(t, e, n) {
            return t[e] = n
        },
        He = function(t, e, n) {
            return t[e](n)
        },
        je = function(t, e, n, i) {
            return t[e](i.fp, n)
        },
        Ie = function(t, e, n) {
            return t.setAttribute(e, n)
        },
        Fe = function(t, e) {
            return A(t[e]) ? He : E(t[e]) && t.setAttribute ? Ie : Ne
        },
        ze = function(t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e)
        },
        qe = function(t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        Be = function(t, e) {
            var n = e._pt,
                i = "";
            if (!t && e.b) i = e.b;
            else if (1 === t && e.e) i = e.e;
            else {
                for (; n;) i = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round(1e4 * (n.s + n.c * t)) / 1e4) + i, n = n._next;
                i += e.c
            }
            e.set(e.t, e.p, i, e)
        },
        We = function(t, e) {
            for (var n = e._pt; n;) n.r(t, n.d), n = n._next
        },
        Xe = function(t, e, n, i) {
            for (var r, o = this._pt; o;) r = o._next, o.p === i && o.modifier(t, e, n), o = r
        },
        Ye = function(t) {
            for (var e, n, i = this._pt; i;) n = i._next, i.p === t && !i.op || i.op === t ? wt(this, i, "_pt") : i.dep || (e = 1), i = n;
            return !e
        },
        Ve = function(t, e, n, i) {
            i.mSet(t, e, i.m.call(i.tween, n, i.mt), i)
        },
        Ue = function(t) {
            for (var e, n, i, r, o = t._pt; o;) {
                for (e = o._next, n = i; n && n.pr > o.pr;) n = n._next;
                (o._prev = n ? n._prev : r) ? o._prev._next = o: i = o, (o._next = n) ? n._prev = o : r = o, o = e
            }
            t._pt = i
        },
        Ge = function() {
            function t(t, e, n, i, r, o, s, a, l) {
                this.t = e, this.s = i, this.c = r, this.p = n, this.r = o || ze, this.d = s || this, this.set = a || Ne, this.pr = l || 0, this._next = t, t && (t._prev = this)
            }
            return t.prototype.modifier = function(t, e, n) {
                this.mSet = this.mSet || this.set, this.set = Ve, this.m = t, this.mt = n, this.tween = e
            }, t
        }();
    at(it + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(t) {
        return Q[t] = 1
    })), B.TweenMax = B.TweenLite = Re, B.TimelineLite = B.TimelineMax = ke, o = new ke({
        sortChildren: !1,
        defaults: y,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), v.stringFilter = ce;
    var Qe = {
        registerPlugin: function() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            e.forEach((function(t) {
                return ne(t)
            }))
        },
        timeline: function(t) {
            return new ke(t)
        },
        getTweensOf: function(t, e) {
            return o.getTweensOf(t, e)
        },
        getProperty: function(t, e, n, i) {
            k(t) && (t = Wt(t)[0]);
            var r = ot(t || {}).get,
                o = n ? pt : ht;
            return "native" === n && (n = ""), t ? e ? o((J[e] && J[e].get || r)(t, e, n, i)) : function(e, n, i) {
                return o((J[e] && J[e].get || r)(t, e, n, i))
            } : t
        },
        quickSetter: function(t, e, n) {
            if ((t = Wt(t)).length > 1) {
                var i = t.map((function(t) {
                        return Je.quickSetter(t, e, n)
                    })),
                    r = i.length;
                return function(t) {
                    for (var e = r; e--;) i[e](t)
                }
            }
            t = t[0] || {};
            var o = J[e],
                s = ot(t),
                a = s.harness && (s.harness.aliases || {})[e] || e,
                l = o ? function(e) {
                    var i = new o;
                    f._pt = 0, i.init(t, n ? e + n : e, f, 0, [t]), i.render(1, i), f._pt && We(1, f)
                } : s.set(t, a);
            return o ? l : function(e) {
                return l(t, a, n ? e + n : e, s, 1)
            }
        },
        isTweening: function(t) {
            return o.getTweensOf(t, !0).length > 0
        },
        defaults: function(t) {
            return t && t.ease && (t.ease = be(t.ease, y.ease)), yt(y, t || {})
        },
        config: function(t) {
            return yt(v, t || {})
        },
        registerEffect: function(t) {
            var e = t.name,
                n = t.effect,
                i = t.plugins,
                r = t.defaults,
                o = t.extendTimeline;
            (i || "").split(",").forEach((function(t) {
                return t && !J[t] && !B[t] && V(e + " effect requires " + t + " plugin.")
            })), tt[e] = function(t, e, i) {
                return n(Wt(t), gt(e || {}, r), i)
            }, o && (ke.prototype[e] = function(t, n, i) {
                return this.add(tt[e](t, M(n) ? n : (i = n) && {}, this), i)
            })
        },
        registerEase: function(t, e) {
            he[t] = be(e)
        },
        parseEase: function(t, e) {
            return arguments.length ? be(t, e) : he
        },
        getById: function(t) {
            return o.getById(t)
        },
        exportRoot: function(t, e) {
            void 0 === t && (t = {});
            var n, i, r = new ke(t);
            for (r.smoothChildTiming = L(t.smoothChildTiming), o.remove(r), r._dp = 0, r._time = r._tTime = o._time, n = o._first; n;) i = n._next, !e && !n._dur && n instanceof Re && n.vars.onComplete === n._targets[0] || Lt(r, n, n._start - n._delay), n = i;
            return Lt(o, r, 0), r
        },
        utils: {
            wrap: function t(e, n, i) {
                var r = n - e;
                return R(e) ? Qt(e, t(0, e.length), n) : jt(i, (function(t) {
                    return (r + (t - e) % r) % r + e
                }))
            },
            wrapYoyo: function t(e, n, i) {
                var r = n - e,
                    o = 2 * r;
                return R(e) ? Qt(e, t(0, e.length - 1), n) : jt(i, (function(t) {
                    return e + ((t = (o + (t - e) % o) % o || 0) > r ? o - t : t)
                }))
            },
            distribute: Yt,
            random: Gt,
            snap: Ut,
            normalize: function(t, e, n) {
                return Zt(t, e, 0, 1, n)
            },
            getUnit: Ft,
            clamp: function(t, e, n) {
                return jt(n, (function(n) {
                    return It(t, e, n)
                }))
            },
            splitColor: oe,
            toArray: Wt,
            mapRange: Zt,
            pipe: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return function(t) {
                    return e.reduce((function(t, e) {
                        return e(t)
                    }), t)
                }
            },
            unitize: function(t, e) {
                return function(n) {
                    return t(parseFloat(n)) + (e || Ft(n))
                }
            },
            interpolate: function t(e, n, i, r) {
                var o = isNaN(e + n) ? 0 : function(t) {
                    return (1 - t) * e + t * n
                };
                if (!o) {
                    var s, a, l, u, c, f = k(e),
                        d = {};
                    if (!0 === i && (r = 1) && (i = null), f) e = {
                        p: e
                    }, n = {
                        p: n
                    };
                    else if (R(e) && !R(n)) {
                        for (l = [], u = e.length, c = u - 2, a = 1; a < u; a++) l.push(t(e[a - 1], e[a]));
                        u--, o = function(t) {
                            t *= u;
                            var e = Math.min(c, ~~t);
                            return l[e](t - e)
                        }, i = n
                    } else r || (e = vt(R(e) ? [] : {}, e));
                    if (!l) {
                        for (s in n) Ee.call(d, e, s, "get", n[s]);
                        o = function(t) {
                            return We(t, d) || (f ? e.p : e)
                        }
                    }
                }
                return jt(i, o)
            },
            shuffle: Xt
        },
        install: X,
        effects: tt,
        ticker: fe,
        updateRoot: ke.updateRoot,
        plugins: J,
        globalTimeline: o,
        core: {
            PropTween: Ge,
            globals: U,
            Tween: Re,
            Timeline: ke,
            Animation: Se,
            getCache: ot,
            _removeLinkedListItem: wt
        }
    };
    at("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) {
        return Qe[t] = Re[t]
    })), fe.add(ke.updateRoot), f = Qe.to({}, {
        duration: 0
    });
    var Ke = function(t, e) {
            for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e;) n = n._next;
            return n
        },
        Ze = function(t, e) {
            return {
                name: t,
                rawVars: 1,
                init: function(t, n, i) {
                    i._onInit = function(t) {
                        var i, r;
                        if (k(n) && (i = {}, at(n, (function(t) {
                                return i[t] = 1
                            })), n = i), e) {
                            for (r in i = {}, n) i[r] = e(n[r]);
                            n = i
                        }! function(t, e) {
                            var n, i, r, o = t._targets;
                            for (n in e)
                                for (i = o.length; i--;)(r = t._ptLookup[i][n]) && (r = r.d) && (r._pt && (r = Ke(r, n)), r && r.modifier && r.modifier(e[n], t, o[i], n))
                        }(t, n)
                    }
                }
            }
        },
        Je = Qe.registerPlugin({
            name: "attr",
            init: function(t, e, n, i, r) {
                var o, s;
                for (o in e)(s = this.add(t, "setAttribute", (t.getAttribute(o) || 0) + "", e[o], i, r, 0, 0, o)) && (s.op = o), this._props.push(o)
            }
        }, {
            name: "endArray",
            init: function(t, e) {
                for (var n = e.length; n--;) this.add(t, n, t[n] || 0, e[n])
            }
        }, Ze("roundProps", Vt), Ze("modifiers"), Ze("snap", Ut)) || Qe;
    Re.version = ke.version = Je.version = "3.4.1", u = 1, D() && de();
    he.Power0, he.Power1, he.Power2, he.Power3, he.Power4, he.Linear, he.Quad, he.Cubic, he.Quart, he.Quint, he.Strong, he.Elastic, he.Back, he.SteppedEase, he.Bounce, he.Sine, he.Expo, he.Circ;
    var tn, en, nn, rn, on, sn, an, ln, un = {},
        cn = 180 / Math.PI,
        fn = Math.PI / 180,
        dn = Math.atan2,
        hn = /([A-Z])/g,
        pn = /(?:left|right|width|margin|padding|x)/i,
        gn = /[\s,\(]\S/,
        mn = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        vn = function(t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        yn = function(t, e) {
            return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        bn = function(t, e) {
            return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
        },
        xn = function(t, e) {
            var n = e.s + e.c * t;
            e.set(e.t, e.p, ~~(n + (n < 0 ? -.5 : .5)) + e.u, e)
        },
        wn = function(t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e)
        },
        _n = function(t, e) {
            return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
        },
        Tn = function(t, e, n) {
            return t.style[e] = n
        },
        Cn = function(t, e, n) {
            return t.style.setProperty(e, n)
        },
        Sn = function(t, e, n) {
            return t._gsap[e] = n
        },
        kn = function(t, e, n) {
            return t._gsap.scaleX = t._gsap.scaleY = n
        },
        An = function(t, e, n, i, r) {
            var o = t._gsap;
            o.scaleX = o.scaleY = n, o.renderTransform(r, o)
        },
        Pn = function(t, e, n, i, r) {
            var o = t._gsap;
            o[e] = n, o.renderTransform(r, o)
        },
        En = "transform",
        Mn = En + "Origin",
        Ln = function(t, e) {
            var n = en.createElementNS ? en.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : en.createElement(t);
            return n.style ? n : en.createElement(t)
        },
        Dn = function t(e, n, i) {
            var r = getComputedStyle(e);
            return r[n] || r.getPropertyValue(n.replace(hn, "-$1").toLowerCase()) || r.getPropertyValue(n) || !i && t(e, $n(n) || n, 1) || ""
        },
        On = "O,Moz,ms,Ms,Webkit".split(","),
        $n = function(t, e, n) {
            var i = (e || on).style,
                r = 5;
            if (t in i && !n) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); r-- && !(On[r] + t in i););
            return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? On[r] : "") + t
        },
        Rn = function() {
            "undefined" != typeof window && window.document && (tn = window, en = tn.document, nn = en.documentElement, on = Ln("div") || {
                style: {}
            }, sn = Ln("div"), En = $n(En), Mn = En + "Origin", on.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", ln = !!$n("perspective"), rn = 1)
        },
        Nn = function t(e) {
            var n, i = Ln("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                r = this.parentNode,
                o = this.nextSibling,
                s = this.style.cssText;
            if (nn.appendChild(i), i.appendChild(this), this.style.display = "block", e) try {
                n = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
            } catch (t) {} else this._gsapBBox && (n = this._gsapBBox());
            return r && (o ? r.insertBefore(this, o) : r.appendChild(this)), nn.removeChild(i), this.style.cssText = s, n
        },
        Hn = function(t, e) {
            for (var n = e.length; n--;)
                if (t.hasAttribute(e[n])) return t.getAttribute(e[n])
        },
        jn = function(t) {
            var e;
            try {
                e = t.getBBox()
            } catch (n) {
                e = Nn.call(t, !0)
            }
            return e && (e.width || e.height) || t.getBBox === Nn || (e = Nn.call(t, !0)), !e || e.width || e.x || e.y ? e : {
                x: +Hn(t, ["x", "cx", "x1"]) || 0,
                y: +Hn(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0
            }
        },
        In = function(t) {
            return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !jn(t))
        },
        Fn = function(t, e) {
            if (e) {
                var n = t.style;
                e in un && e !== Mn && (e = En), n.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), n.removeProperty(e.replace(hn, "-$1").toLowerCase())) : n.removeAttribute(e)
            }
        },
        zn = function(t, e, n, i, r, o) {
            var s = new Ge(t._pt, e, n, 0, 1, o ? _n : wn);
            return t._pt = s, s.b = i, s.e = r, t._props.push(n), s
        },
        qn = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        Bn = function t(e, n, i, r) {
            var o, s, a, l, u = parseFloat(i) || 0,
                c = (i + "").trim().substr((u + "").length) || "px",
                f = on.style,
                d = pn.test(n),
                h = "svg" === e.tagName.toLowerCase(),
                p = (h ? "client" : "offset") + (d ? "Width" : "Height"),
                g = "px" === r,
                m = "%" === r;
            return r === c || !u || qn[r] || qn[c] ? u : ("px" !== c && !g && (u = t(e, n, i, "px")), l = e.getCTM && In(e), m && (un[n] || ~n.indexOf("adius")) ? lt(u / (l ? e.getBBox()[d ? "width" : "height"] : e[p]) * 100) : (f[d ? "width" : "height"] = 100 + (g ? c : r), s = ~n.indexOf("adius") || "em" === r && e.appendChild && !h ? e : e.parentNode, l && (s = (e.ownerSVGElement || {}).parentNode), s && s !== en && s.appendChild || (s = en.body), (a = s._gsap) && m && a.width && d && a.time === fe.time ? lt(u / a.width * 100) : ((m || "%" === c) && (f.position = Dn(e, "position")), s === e && (f.position = "static"), s.appendChild(on), o = on[p], s.removeChild(on), f.position = "absolute", d && m && ((a = ot(s)).time = fe.time, a.width = s[p]), lt(g ? o * u / 100 : o && u ? 100 / o * u : 0))))
        },
        Wn = function(t, e, n, i) {
            var r;
            return rn || Rn(), e in mn && "transform" !== e && ~(e = mn[e]).indexOf(",") && (e = e.split(",")[0]), un[e] && "transform" !== e ? (r = ei(t, i), r = "transformOrigin" !== e ? r[e] : ni(Dn(t, Mn)) + " " + r.zOrigin + "px") : (!(r = t.style[e]) || "auto" === r || i || ~(r + "").indexOf("calc(")) && (r = Un[e] && Un[e](t, e, n) || Dn(t, e) || st(t, e) || ("opacity" === e ? 1 : 0)), n && !~(r + "").indexOf(" ") ? Bn(t, e, r, n) + n : r
        },
        Xn = function(t, e, n, i) {
            if (!n || "none" === n) {
                var r = $n(e, t, 1),
                    o = r && Dn(t, r, 1);
                o && o !== n ? (e = r, n = o) : "borderColor" === e && (n = Dn(t, "borderTopColor"))
            }
            var s, a, l, u, c, f, d, h, p, g, m, y, b = new Ge(this._pt, t.style, e, 0, 1, Be),
                x = 0,
                w = 0;
            if (b.b = n, b.e = i, n += "", "auto" === (i += "") && (t.style[e] = i, i = Dn(t, e) || i, t.style[e] = n), ce(s = [n, i]), i = s[1], l = (n = s[0]).match(j) || [], (i.match(j) || []).length) {
                for (; a = j.exec(i);) d = a[0], p = i.substring(x, a.index), c ? c = (c + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (c = 1), d !== (f = l[w++] || "") && (u = parseFloat(f) || 0, m = f.substr((u + "").length), (y = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) && (d = d.substr(2)), h = parseFloat(d), g = d.substr((h + "").length), x = j.lastIndex - g.length, g || (g = g || v.units[e] || m, x === i.length && (i += g, b.e += g)), m !== g && (u = Bn(t, e, f, g) || 0), b._pt = {
                    _next: b._pt,
                    p: p || 1 === w ? p : ",",
                    s: u,
                    c: y ? y * h : h - u,
                    m: c && c < 4 ? Math.round : 0
                });
                b.c = x < i.length ? i.substring(x, i.length) : ""
            } else b.r = "display" === e && "none" === i ? _n : wn;
            return z.test(i) && (b.e = 0), this._pt = b, b
        },
        Yn = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        Vn = function(t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
                var n, i, r, o = e.t,
                    s = o.style,
                    a = e.u,
                    l = o._gsap;
                if ("all" === a || !0 === a) s.cssText = "", i = 1;
                else
                    for (r = (a = a.split(",")).length; --r > -1;) n = a[r], un[n] && (i = 1, n = "transformOrigin" === n ? Mn : En), Fn(o, n);
                i && (Fn(o, En), l && (l.svg && o.removeAttribute("transform"), ei(o, 1), l.uncache = 1))
            }
        },
        Un = {
            clearProps: function(t, e, n, i, r) {
                if ("isFromStart" !== r.data) {
                    var o = t._pt = new Ge(t._pt, e, n, 0, 0, Vn);
                    return o.u = i, o.pr = -10, o.tween = r, t._props.push(n), 1
                }
            }
        },
        Gn = [1, 0, 0, 1, 0, 0],
        Qn = {},
        Kn = function(t) {
            return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
        },
        Zn = function(t) {
            var e = Dn(t, En);
            return Kn(e) ? Gn : e.substr(7).match(H).map(lt)
        },
        Jn = function(t, e) {
            var n, i, r, o, s = t._gsap || ot(t),
                a = t.style,
                l = Zn(t);
            return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(r = t.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",") ? Gn : l : (l !== Gn || t.offsetParent || t === nn || s.svg || (r = a.display, a.display = "block", (n = t.parentNode) && t.offsetParent || (o = 1, i = t.nextSibling, nn.appendChild(t)), l = Zn(t), r ? a.display = r : Fn(t, "display"), o && (i ? n.insertBefore(t, i) : n ? n.appendChild(t) : nn.removeChild(t))), e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
        },
        ti = function(t, e, n, i, r, o) {
            var s, a, l, u = t._gsap,
                c = r || Jn(t, !0),
                f = u.xOrigin || 0,
                d = u.yOrigin || 0,
                h = u.xOffset || 0,
                p = u.yOffset || 0,
                g = c[0],
                m = c[1],
                v = c[2],
                y = c[3],
                b = c[4],
                x = c[5],
                w = e.split(" "),
                _ = parseFloat(w[0]) || 0,
                T = parseFloat(w[1]) || 0;
            n ? c !== Gn && (a = g * y - m * v) && (l = _ * (-m / a) + T * (g / a) - (g * x - m * b) / a, _ = _ * (y / a) + T * (-v / a) + (v * x - y * b) / a, T = l) : (_ = (s = jn(t)).x + (~w[0].indexOf("%") ? _ / 100 * s.width : _), T = s.y + (~(w[1] || w[0]).indexOf("%") ? T / 100 * s.height : T)), i || !1 !== i && u.smooth ? (b = _ - f, x = T - d, u.xOffset = h + (b * g + x * v) - b, u.yOffset = p + (b * m + x * y) - x) : u.xOffset = u.yOffset = 0, u.xOrigin = _, u.yOrigin = T, u.smooth = !!i, u.origin = e, u.originIsAbsolute = !!n, t.style[Mn] = "0px 0px", o && (zn(o, u, "xOrigin", f, _), zn(o, u, "yOrigin", d, T), zn(o, u, "xOffset", h, u.xOffset), zn(o, u, "yOffset", p, u.yOffset)), t.setAttribute("data-svg-origin", _ + " " + T)
        },
        ei = function(t, e) {
            var n = t._gsap || new Ce(t);
            if ("x" in n && !e && !n.uncache) return n;
            var i, r, o, s, a, l, u, c, f, d, h, p, g, m, y, b, x, w, _, T, C, S, k, A, P, E, M, L, D, O, $, R, N = t.style,
                H = n.scaleX < 0,
                j = Dn(t, Mn) || "0";
            return i = r = o = l = u = c = f = d = h = 0, s = a = 1, n.svg = !(!t.getCTM || !In(t)), m = Jn(t, n.svg), n.svg && (A = !n.uncache && t.getAttribute("data-svg-origin"), ti(t, A || j, !!A || n.originIsAbsolute, !1 !== n.smooth, m)), p = n.xOrigin || 0, g = n.yOrigin || 0, m !== Gn && (w = m[0], _ = m[1], T = m[2], C = m[3], i = S = m[4], r = k = m[5], 6 === m.length ? (s = Math.sqrt(w * w + _ * _), a = Math.sqrt(C * C + T * T), l = w || _ ? dn(_, w) * cn : 0, (f = T || C ? dn(T, C) * cn + l : 0) && (a *= Math.cos(f * fn)), n.svg && (i -= p - (p * w + g * T), r -= g - (p * _ + g * C))) : (R = m[6], O = m[7], M = m[8], L = m[9], D = m[10], $ = m[11], i = m[12], r = m[13], o = m[14], u = (y = dn(R, D)) * cn, y && (A = S * (b = Math.cos(-y)) + M * (x = Math.sin(-y)), P = k * b + L * x, E = R * b + D * x, M = S * -x + M * b, L = k * -x + L * b, D = R * -x + D * b, $ = O * -x + $ * b, S = A, k = P, R = E), c = (y = dn(-T, D)) * cn, y && (b = Math.cos(-y), $ = C * (x = Math.sin(-y)) + $ * b, w = A = w * b - M * x, _ = P = _ * b - L * x, T = E = T * b - D * x), l = (y = dn(_, w)) * cn, y && (A = w * (b = Math.cos(y)) + _ * (x = Math.sin(y)), P = S * b + k * x, _ = _ * b - w * x, k = k * b - S * x, w = A, S = P), u && Math.abs(u) + Math.abs(l) > 359.9 && (u = l = 0, c = 180 - c), s = lt(Math.sqrt(w * w + _ * _ + T * T)), a = lt(Math.sqrt(k * k + R * R)), y = dn(S, k), f = Math.abs(y) > 2e-4 ? y * cn : 0, h = $ ? 1 / ($ < 0 ? -$ : $) : 0), n.svg && (A = t.getAttribute("transform"), n.forceCSS = t.setAttribute("transform", "") || !Kn(Dn(t, En)), A && t.setAttribute("transform", A))), Math.abs(f) > 90 && Math.abs(f) < 270 && (H ? (s *= -1, f += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (a *= -1, f += f <= 0 ? 180 : -180)), n.x = ((n.xPercent = i && Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0) ? 0 : i) + "px", n.y = ((n.yPercent = r && Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0) ? 0 : r) + "px", n.z = o + "px", n.scaleX = lt(s), n.scaleY = lt(a), n.rotation = lt(l) + "deg", n.rotationX = lt(u) + "deg", n.rotationY = lt(c) + "deg", n.skewX = f + "deg", n.skewY = d + "deg", n.transformPerspective = h + "px", (n.zOrigin = parseFloat(j.split(" ")[2]) || 0) && (N[Mn] = ni(j)), n.xOffset = n.yOffset = 0, n.force3D = v.force3D, n.renderTransform = n.svg ? si : ln ? oi : ri, n.uncache = 0, n
        },
        ni = function(t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        ii = function(t, e, n) {
            var i = Ft(e);
            return lt(parseFloat(e) + parseFloat(Bn(t, "x", n + "px", i))) + i
        },
        ri = function(t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, oi(t, e)
        },
        oi = function(t, e) {
            var n = e || this,
                i = n.xPercent,
                r = n.yPercent,
                o = n.x,
                s = n.y,
                a = n.z,
                l = n.rotation,
                u = n.rotationY,
                c = n.rotationX,
                f = n.skewX,
                d = n.skewY,
                h = n.scaleX,
                p = n.scaleY,
                g = n.transformPerspective,
                m = n.force3D,
                v = n.target,
                y = n.zOrigin,
                b = "",
                x = "auto" === m && t && 1 !== t || !0 === m;
            if (y && ("0deg" !== c || "0deg" !== u)) {
                var w, _ = parseFloat(u) * fn,
                    T = Math.sin(_),
                    C = Math.cos(_);
                _ = parseFloat(c) * fn, w = Math.cos(_), o = ii(v, o, T * w * -y), s = ii(v, s, -Math.sin(_) * -y), a = ii(v, a, C * w * -y + y)
            }
            "0px" !== g && (b += "perspective(" + g + ") "), (i || r) && (b += "translate(" + i + "%, " + r + "%) "), (x || "0px" !== o || "0px" !== s || "0px" !== a) && (b += "0px" !== a || x ? "translate3d(" + o + ", " + s + ", " + a + ") " : "translate(" + o + ", " + s + ") "), "0deg" !== l && (b += "rotate(" + l + ") "), "0deg" !== u && (b += "rotateY(" + u + ") "), "0deg" !== c && (b += "rotateX(" + c + ") "), "0deg" === f && "0deg" === d || (b += "skew(" + f + ", " + d + ") "), 1 === h && 1 === p || (b += "scale(" + h + ", " + p + ") "), v.style[En] = b || "translate(0, 0)"
        },
        si = function(t, e) {
            var n, i, r, o, s, a = e || this,
                l = a.xPercent,
                u = a.yPercent,
                c = a.x,
                f = a.y,
                d = a.rotation,
                h = a.skewX,
                p = a.skewY,
                g = a.scaleX,
                m = a.scaleY,
                v = a.target,
                y = a.xOrigin,
                b = a.yOrigin,
                x = a.xOffset,
                w = a.yOffset,
                _ = a.forceCSS,
                T = parseFloat(c),
                C = parseFloat(f);
            d = parseFloat(d), h = parseFloat(h), (p = parseFloat(p)) && (h += p = parseFloat(p), d += p), d || h ? (d *= fn, h *= fn, n = Math.cos(d) * g, i = Math.sin(d) * g, r = Math.sin(d - h) * -m, o = Math.cos(d - h) * m, h && (p *= fn, s = Math.tan(h - p), r *= s = Math.sqrt(1 + s * s), o *= s, p && (s = Math.tan(p), n *= s = Math.sqrt(1 + s * s), i *= s)), n = lt(n), i = lt(i), r = lt(r), o = lt(o)) : (n = g, o = m, i = r = 0), (T && !~(c + "").indexOf("px") || C && !~(f + "").indexOf("px")) && (T = Bn(v, "x", c, "px"), C = Bn(v, "y", f, "px")), (y || b || x || w) && (T = lt(T + y - (y * n + b * r) + x), C = lt(C + b - (y * i + b * o) + w)), (l || u) && (s = v.getBBox(), T = lt(T + l / 100 * s.width), C = lt(C + u / 100 * s.height)), s = "matrix(" + n + "," + i + "," + r + "," + o + "," + T + "," + C + ")", v.setAttribute("transform", s), _ && (v.style[En] = s)
        },
        ai = function(t, e, n, i, r, o) {
            var s, a, l = k(r),
                u = parseFloat(r) * (l && ~r.indexOf("rad") ? cn : 1),
                c = o ? u * o : u - i,
                f = i + c + "deg";
            return l && ("short" === (s = r.split("_")[1]) && (c %= 360) !== c % 180 && (c += c < 0 ? 360 : -360), "cw" === s && c < 0 ? c = (c + 36e9) % 360 - 360 * ~~(c / 360) : "ccw" === s && c > 0 && (c = (c - 36e9) % 360 - 360 * ~~(c / 360))), t._pt = a = new Ge(t._pt, e, n, i, c, yn), a.e = f, a.u = "deg", t._props.push(n), a
        },
        li = function(t, e, n) {
            var i, r, o, s, a, l, u, c = sn.style,
                f = n._gsap;
            for (r in c.cssText = getComputedStyle(n).cssText + ";position:absolute;display:block;", c[En] = e, en.body.appendChild(sn), i = ei(sn, 1), un)(o = f[r]) !== (s = i[r]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 && (a = Ft(o) !== (u = Ft(s)) ? Bn(n, r, o, u) : parseFloat(o), l = parseFloat(s), t._pt = new Ge(t._pt, f, r, a, l - a, vn), t._pt.u = u || 0, t._props.push(r));
            en.body.removeChild(sn)
        };
    at("padding,margin,Width,Radius", (function(t, e) {
        var n = "Top",
            i = "Right",
            r = "Bottom",
            o = "Left",
            s = (e < 3 ? [n, i, r, o] : [n + o, n + i, r + i, r + o]).map((function(n) {
                return e < 2 ? t + n : "border" + n + t
            }));
        Un[e > 1 ? "border" + t : t] = function(t, e, n, i, r) {
            var o, a;
            if (arguments.length < 4) return o = s.map((function(e) {
                return Wn(t, e, n)
            })), 5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a;
            o = (i + "").split(" "), a = {}, s.forEach((function(t, e) {
                return a[t] = o[e] = o[e] || o[(e - 1) / 2 | 0]
            })), t.init(e, a, r)
        }
    }));
    var ui, ci, fi = {
        name: "css",
        register: Rn,
        targetTest: function(t) {
            return t.style && t.nodeType
        },
        init: function(t, e, n, i, r) {
            var o, s, a, l, u, c, f, d, h, p, g, m, y, b, x, w, _, T, C, S = this._props,
                k = t.style;
            for (f in rn || Rn(), e)
                if ("autoRound" !== f && (s = e[f], !J[f] || !Me(f, e, n, i, t, r)))
                    if (u = typeof s, c = Un[f], "function" === u && (u = typeof(s = s.call(n, i, t, r))), "string" === u && ~s.indexOf("random(") && (s = Kt(s)), c) c(this, t, f, s, n) && (x = 1);
                    else if ("--" === f.substr(0, 2)) this.add(k, "setProperty", getComputedStyle(t).getPropertyValue(f) + "", s + "", i, r, 0, 0, f);
            else {
                if (o = Wn(t, f), l = parseFloat(o), (p = "string" === u && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)), a = parseFloat(s), f in mn && ("autoAlpha" === f && (1 === l && "hidden" === Wn(t, "visibility") && a && (l = 0), zn(this, k, "visibility", l ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== f && "transform" !== f && ~(f = mn[f]).indexOf(",") && (f = f.split(",")[0])), g = f in un)
                    if (m || ((y = t._gsap).renderTransform || ei(t), b = !1 !== e.smoothOrigin && y.smooth, (m = this._pt = new Ge(this._pt, k, En, 0, 1, y.renderTransform, y, 0, -1)).dep = 1), "scale" === f) this._pt = new Ge(this._pt, y, "scaleY", y.scaleY, p ? p * a : a - y.scaleY), S.push("scaleY", f), f += "X";
                    else {
                        if ("transformOrigin" === f) {
                            _ = void 0, T = void 0, C = void 0, _ = (w = s).split(" "), T = _[0], C = _[1] || "50%", "top" !== T && "bottom" !== T && "left" !== C && "right" !== C || (w = T, T = C, C = w), _[0] = Yn[T] || T, _[1] = Yn[C] || C, s = _.join(" "), y.svg ? ti(t, s, 0, b, 0, this) : ((h = parseFloat(s.split(" ")[2]) || 0) !== y.zOrigin && zn(this, y, "zOrigin", y.zOrigin, h), zn(this, k, f, ni(o), ni(s)));
                            continue
                        }
                        if ("svgOrigin" === f) {
                            ti(t, s, 1, b, 0, this);
                            continue
                        }
                        if (f in Qn) {
                            ai(this, y, f, l, s, p);
                            continue
                        }
                        if ("smoothOrigin" === f) {
                            zn(this, y, "smooth", y.smooth, s);
                            continue
                        }
                        if ("force3D" === f) {
                            y[f] = s;
                            continue
                        }
                        if ("transform" === f) {
                            li(this, s, t);
                            continue
                        }
                    }
                else f in k || (f = $n(f) || f);
                if (g || (a || 0 === a) && (l || 0 === l) && !gn.test(s) && f in k) a || (a = 0), (d = (o + "").substr((l + "").length)) !== (h = (s + "").substr((a + "").length) || (f in v.units ? v.units[f] : d)) && (l = Bn(t, f, o, h)), this._pt = new Ge(this._pt, g ? y : k, f, l, p ? p * a : a - l, "px" !== h || !1 === e.autoRound || g ? vn : xn), this._pt.u = h || 0, d !== h && (this._pt.b = o, this._pt.r = bn);
                else if (f in k) Xn.call(this, t, f, o, s);
                else {
                    if (!(f in t)) {
                        Y(f, s);
                        continue
                    }
                    this.add(t, f, t[f], s, i, r)
                }
                S.push(f)
            }
            x && Ue(this)
        },
        get: Wn,
        aliases: mn,
        getSetter: function(t, e, n) {
            var i = mn[e];
            return i && i.indexOf(",") < 0 && (e = i), e in un && e !== Mn && (t._gsap.x || Wn(t, "x")) ? n && an === n ? "scale" === e ? kn : Sn : (an = n || {}) && ("scale" === e ? An : Pn) : t.style && !E(t.style[e]) ? Tn : ~e.indexOf("-") ? Cn : Fe(t, e)
        },
        core: {
            _removeProperty: Fn,
            _getMatrix: Jn
        }
    };
    Je.utils.checkPrefix = $n, ci = at("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + (ui = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) {
        un[t] = 1
    })), at(ui, (function(t) {
        v.units[t] = "deg", Qn[t] = 1
    })), mn[ci[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + ui, at("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
        var e = t.split(":");
        mn[e[1]] = ci[e[0]]
    })), at("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) {
        v.units[t] = "px"
    })), Je.registerPlugin(fi);
    var di, hi, pi, gi, mi, vi, yi, bi = Je.registerPlugin(fi) || Je,
        xi = (bi.core.Tween, function() {
            return "undefined" != typeof window
        }),
        wi = function() {
            return di || xi() && (di = window.gsap) && di.registerPlugin && di
        },
        _i = function(t) {
            return "string" == typeof t
        },
        Ti = function(t, e) {
            var n = "x" === e ? "Width" : "Height",
                i = "scroll" + n,
                r = "client" + n;
            return t === pi || t === gi || t === mi ? Math.max(gi[i], mi[i]) - (pi["inner" + n] || gi[r] || mi[r]) : t[i] - t["offset" + n]
        },
        Ci = function(t, e) {
            var n = "scroll" + ("x" === e ? "Left" : "Top");
            return t === pi && (null != t.pageXOffset ? n = "page" + e.toUpperCase() + "Offset" : t = null != gi[n] ? gi : mi),
                function() {
                    return t[n]
                }
        },
        Si = function(t, e) {
            var n = vi(t)[0].getBoundingClientRect(),
                i = !e || e === pi || e === mi,
                r = i ? {
                    top: gi.clientTop - (pi.pageYOffset || gi.scrollTop || mi.scrollTop || 0),
                    left: gi.clientLeft - (pi.pageXOffset || gi.scrollLeft || mi.scrollLeft || 0)
                } : e.getBoundingClientRect(),
                o = {
                    x: n.left - r.left,
                    y: n.top - r.top
                };
            return !i && e && (o.x += Ci(e, "x")(), o.y += Ci(e, "y")()), o
        },
        ki = function(t, e, n, i) {
            return isNaN(t) || "object" == typeof t ? _i(t) && "=" === t.charAt(1) ? parseFloat(t.substr(2)) * ("-" === t.charAt(0) ? -1 : 1) + i : "max" === t ? Ti(e, n) : Math.min(Ti(e, n), Si(t, e)[n]) : parseFloat(t)
        },
        Ai = function() {
            di = wi(), xi() && di && document.body && (pi = window, mi = document.body, gi = document.documentElement, vi = di.utils.toArray, di.config({
                autoKillThreshold: 7
            }), yi = di.config(), hi = 1)
        },
        Pi = {
            version: "3.4.1",
            name: "scrollTo",
            rawVars: 1,
            register: function(t) {
                di = t, Ai()
            },
            init: function(t, e, n, i, r) {
                hi || Ai();
                this.isWin = t === pi, this.target = t, this.tween = n, "object" != typeof e ? _i((e = {
                    y: e
                }).y) && "max" !== e.y && "=" !== e.y.charAt(1) && (e.x = e.y) : e.nodeType && (e = {
                    y: e,
                    x: e
                }), this.vars = e, this.autoKill = !!e.autoKill, this.getX = Ci(t, "x"), this.getY = Ci(t, "y"), this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != e.x ? (this.add(this, "x", this.x, ki(e.x, t, "x", this.x) - (e.offsetX || 0), i, r, Math.round), this._props.push("scrollTo_x")) : this.skipX = 1, null != e.y ? (this.add(this, "y", this.y, ki(e.y, t, "y", this.y) - (e.offsetY || 0), i, r, Math.round), this._props.push("scrollTo_y")) : this.skipY = 1
            },
            render: function(t, e) {
                for (var n, i, r, o, s, a = e._pt, l = e.target, u = e.tween, c = e.autoKill, f = e.xPrev, d = e.yPrev, h = e.isWin; a;) a.r(t, a.d), a = a._next;
                n = h || !e.skipX ? e.getX() : f, r = (i = h || !e.skipY ? e.getY() : d) - d, o = n - f, s = yi.autoKillThreshold, e.x < 0 && (e.x = 0), e.y < 0 && (e.y = 0), c && (!e.skipX && (o > s || o < -s) && n < Ti(l, "x") && (e.skipX = 1), !e.skipY && (r > s || r < -s) && i < Ti(l, "y") && (e.skipY = 1), e.skipX && e.skipY && (u.kill(), e.vars.onAutoKill && e.vars.onAutoKill.apply(u, e.vars.onAutoKillParams || []))), h ? pi.scrollTo(e.skipX ? n : e.x, e.skipY ? i : e.y) : (e.skipY || (l.scrollTop = e.y), e.skipX || (l.scrollLeft = e.x)), e.xPrev = e.x, e.yPrev = e.y
            },
            kill: function(t) {
                var e = "scrollTo" === t;
                (e || "scrollTo_x" === t) && (this.skipX = 1), (e || "scrollTo_y" === t) && (this.skipY = 1)
            }
        };
    Pi.max = Ti, Pi.getOffset = Si, Pi.buildGetter = Ci, wi() && di.registerPlugin(Pi);
    var Ei, Mi, Li, Di, Oi, $i, Ri, Ni, Hi, ji, Ii, Fi, zi, qi, Bi, Wi, Xi, Yi, Vi, Ui, Gi, Qi, Ki, Zi, Ji, tr = 1,
        er = [],
        nr = [],
        ir = Date.now,
        rr = ir(),
        or = 0,
        sr = 1,
        ar = function(t) {
            return t
        },
        lr = function() {
            return "undefined" != typeof window
        },
        ur = function() {
            return Ei || lr() && (Ei = window.gsap) && Ei.registerPlugin && Ei
        },
        cr = function(t) {
            return !!~Ri.indexOf(t)
        },
        fr = function(t, e) {
            return ~er.indexOf(t) && er[er.indexOf(t) + 1][e]
        },
        dr = function(t, e) {
            var n = e.s,
                i = e.sc,
                r = nr.indexOf(t),
                o = ~r ? nr[r + 1] : fr(t, n) || (cr(t) ? i : function(e) {
                    return arguments.length ? t[n] = e : t[n]
                });
            return !~r && nr.push(t, o), o
        },
        hr = function(t) {
            return fr(t, "getBoundingClientRect") || (cr(t) ? function() {
                return co.width = Li.innerWidth, co.height = Li.innerHeight, co
            } : function() {
                return Er(t)
            })
        },
        pr = function(t, e) {
            var n = e.s,
                i = e.d2,
                r = e.d,
                o = e.a;
            return (n = "scroll" + i) && (o = fr(t, n)) ? o() - hr(t)()[r] : cr(t) ? Math.max(Oi[n], $i[n]) - (Li["inner" + i] || Oi["client" + i] || $i["client" + i]) : t[n] - t["offset" + i]
        },
        gr = function(t, e) {
            for (var n = 0; n < Gi.length; n += 3)(!e || ~e.indexOf(Gi[n + 1])) && t(Gi[n], Gi[n + 1], Gi[n + 2])
        },
        mr = function(t) {
            return "string" == typeof t
        },
        vr = function(t) {
            return "function" == typeof t
        },
        yr = function(t) {
            return "number" == typeof t
        },
        br = function(t) {
            return "object" == typeof t
        },
        xr = function(t) {
            return vr(t) && t()
        },
        wr = function(t, e) {
            return function() {
                var n = xr(t),
                    i = xr(e);
                return function() {
                    xr(n), xr(i)
                }
            }
        },
        _r = Math.abs,
        Tr = "padding",
        Cr = "px",
        Sr = {
            s: "scrollLeft",
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: function(t) {
                return arguments.length ? Li.scrollTo(t, kr.sc()) : Li.pageXOffset || Di.scrollLeft || Oi.scrollLeft || $i.scrollLeft || 0
            }
        },
        kr = {
            s: "scrollTop",
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: Sr,
            sc: function(t) {
                return arguments.length ? Li.scrollTo(Sr.sc(), t) : Li.pageYOffset || Di.scrollTop || Oi.scrollTop || $i.scrollTop || 0
            }
        },
        Ar = function(t) {
            return Li.getComputedStyle(t)
        },
        Pr = function(t, e) {
            for (var n in e) n in t || (t[n] = e[n]);
            return t
        },
        Er = function(t, e) {
            var n = e && "matrix(1, 0, 0, 1, 0, 0)" !== Ar(t)[Xi] && Ei.to(t, {
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0
                }).progress(1),
                i = t.getBoundingClientRect();
            return n && n.progress(0).kill(), i
        },
        Mr = function(t, e) {
            var n = e.d2;
            return t["offset" + n] || t["client" + n] || 0
        },
        Lr = function(t, e, n, i) {
            return n.split(",").forEach((function(n) {
                return t(e, n, i)
            }))
        },
        Dr = function(t, e, n) {
            return t.addEventListener(e, n, {
                passive: !0
            })
        },
        Or = function(t, e, n) {
            return t.removeEventListener(e, n)
        },
        $r = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal"
        },
        Rr = {
            toggleActions: "play",
            anticipatePin: 0
        },
        Nr = {
            top: 0,
            left: 0,
            center: .5,
            bottom: 1,
            right: 1
        },
        Hr = function(t, e) {
            if (mr(t)) {
                var n = t.indexOf("="),
                    i = ~n ? +(t.charAt(n - 1) + 1) * parseFloat(t.substr(n + 1)) : 0;
                i && (t.indexOf("%") > n && (i *= e / 100), t = t.substr(0, n - 1)), t = i + (t in Nr ? Nr[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
            }
            return t
        },
        jr = function(t, e, n, i, r, o, s) {
            var a = r.startColor,
                l = r.endColor,
                u = r.fontSize,
                c = r.indent,
                f = r.fontWeight,
                d = Di.createElement("div"),
                h = cr(n) || "fixed" === fr(n, "pinType"),
                p = -1 !== t.indexOf("scroller"),
                g = h ? $i : n,
                m = -1 !== t.indexOf("start"),
                v = m ? a : l,
                y = "border-color:" + v + ";font-size:" + u + ";color:" + v + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
            return y += "position:" + (p && h ? "fixed;" : "absolute;"), (p || !h) && (y += (i === kr ? "right" : "bottom") + ":" + (o + parseFloat(c)) + "px;"), s && (y += "box-sizing:border-box;text-align:left;width:" + s.offsetWidth + "px;"), d._isStart = m, d.setAttribute("class", "gsap-marker-" + t), d.style.cssText = y, d.innerText = e || 0 === e ? t + "-" + e : t, g.insertBefore(d, g.children[0]), d._offset = d["offset" + i.op.d2], Ir(d, 0, i, m), d
        },
        Ir = function(t, e, n, i) {
            var r = {
                    display: "block"
                },
                o = n[i ? "os2" : "p2"],
                s = n[i ? "p2" : "os2"];
            t._isFlipped = i, r[n.a + "Percent"] = i ? -100 : 0, r[n.a] = i ? 1 : 0, r["border" + o + "Width"] = 1, r["border" + s + "Width"] = 0, r[n.p] = e, Ei.set(t, r)
        },
        Fr = [],
        zr = {},
        qr = function() {
            return ji || (ji = Hi(io))
        },
        Br = function() {
            ji || (ji = Hi(io), or || Qr("scrollStart"), or = ir())
        },
        Wr = function() {
            return !Bi && Ni.restart(!0)
        },
        Xr = {},
        Yr = [],
        Vr = [],
        Ur = function(t) {
            var e = Ei.ticker.frame,
                n = [],
                i = 0;
            if (Ji !== e || tr) {
                for (Jr(); i < Vr.length; i += 3) Li.matchMedia(Vr[i]).matches ? n.push(i) : Jr(1, Vr[i]) || vr(Vr[i + 2]) && Vr[i + 2]();
                for (Zr(), i = 0; i < n.length; i++) Zi = Vr[n[i]], Vr[n[i] + 2] = Vr[n[i] + 1](t);
                Zi = 0, to(0, 1), Ji = e
            }
        },
        Gr = function t() {
            return Or(go, "scrollEnd", t) || to(!0)
        },
        Qr = function(t) {
            return Xr[t] && Xr[t].map((function(t) {
                return t()
            })) || Yr
        },
        Kr = [],
        Zr = function(t) {
            for (var e = 0; e < Kr.length; e += 4) t && Kr[e + 3] !== t || (Kr[e].style.cssText = Kr[e + 1], Kr[e + 2].uncache = 1)
        },
        Jr = function(t, e) {
            var n;
            for (Yi = 0; Yi < Fr.length; Yi++) n = Fr[Yi], e && n.media !== e || (t ? n.kill(1) : (n.scroll.rec || (n.scroll.rec = n.scroll()), n.revert()));
            Zr(e), e || Qr("revert")
        },
        to = function(t, e) {
            if (!or || t) {
                var n = Qr("refreshInit");
                for (Qi && go.sort(), e || Jr(), Yi = 0; Yi < Fr.length; Yi++) Fr[Yi].refresh();
                for (n.forEach((function(t) {
                        return t && t.render && t.render(-1)
                    })), Yi = Fr.length; Yi--;) Fr[Yi].scroll.rec = 0;
                Qr("refresh")
            } else Dr(go, "scrollEnd", Gr)
        },
        eo = 0,
        no = 1,
        io = function() {
            var t = Fr.length,
                e = ir(),
                n = e - rr >= 50,
                i = t && Fr[0].scroll();
            if (no = eo > i ? -1 : 1, eo = i, n && (or && !Wi && e - or > 200 && (or = 0, Qr("scrollEnd")), zi = rr, rr = e), no < 0) {
                for (Yi = t; Yi--;) Fr[Yi].update(0, n);
                no = 1
            } else
                for (Yi = 0; Yi < t; Yi++) Fr[Yi] && Fr[Yi].update(0, n);
            ji = 0
        },
        ro = ["left", "top", "bottom", "right", "marginBottom", "marginRight", "marginTop", "marginLeft", "display", "flexShrink", "float"],
        oo = ro.concat(["width", "height", "boxSizing", "maxWidth", "maxHeight", "position", "margin", Tr, Tr + "Top", Tr + "Right", Tr + "Bottom", Tr + "Left"]),
        so = function(t, e, n) {
            if (t.parentNode !== e) {
                for (var i, r = ro.length, o = e.style, s = t.style; r--;) o[i = ro[r]] = n[i];
                o.position = "absolute" === n.position ? "absolute" : "relative", "inline" === n.display && (o.display = "inline-block"), s.bottom = s.right = "auto", o.overflow = "visible", o.boxSizing = "border-box", o.width = Mr(t, Sr) + Cr, o.height = Mr(t, kr) + Cr, o[Tr] = s.margin = s.top = s.left = "0", s.width = n.width, s.height = n.height, s[Tr] = n[Tr], t.parentNode.insertBefore(e, t), e.appendChild(t)
            }
        },
        ao = /([A-Z])/g,
        lo = function(t) {
            if (t)
                for (var e, n, i = t.t.style, r = t.length, o = 0; o < r; o += 2) n = t[o + 1], e = t[o], n ? i[e] = n : i[e] && i.removeProperty(e.replace(ao, "-$1").toLowerCase())
        },
        uo = function(t) {
            for (var e = oo.length, n = t.style, i = [], r = 0; r < e; r++) i.push(oo[r], n[oo[r]]);
            return i.t = t, i
        },
        co = {
            left: 0,
            top: 0
        },
        fo = function(t, e, n, i, r, o, s, a, l, u, c, f) {
            if (vr(t) && (t = t(a)), mr(t) && "max" === t.substr(0, 3) && (t = f + ("=" === t.charAt(4) ? Hr("0" + t.substr(3), n) : 0)), yr(t)) s && Ir(s, n, i, !0);
            else {
                vr(e) && (e = e(a));
                var d, h, p, g = Ii(e)[0] || $i,
                    m = Er(g) || {},
                    v = t.split(" ");
                m && (m.left || m.top) || "none" !== Ar(g).display || (p = g.style.display, g.style.display = "block", m = Er(g), p ? g.style.display = p : g.style.removeProperty("display")), d = Hr(v[0], m[i.d]), h = Hr(v[1] || "0", n), t = m[i.p] - l[i.p] - u + d + r - h, s && Ir(s, h, i, n - h < 20 || s._isStart && h > 20), n -= n - h
            }
            if (o) {
                var y = t + n,
                    b = o._isStart;
                f = "scroll" + i.d2, Ir(o, y, i, b && y > 20 || !b && (c ? Math.max($i[f], Oi[f]) : o.parentNode[f]) <= y + 1), c && (l = Er(s), c && (o.style[i.op.p] = l[i.op.p] - i.op.m - o._offset + Cr))
            }
            return Math.round(t)
        },
        ho = /(?:webkit|moz|length)/i,
        po = function(t, e) {
            var n, i = dr(t, e),
                r = "_scroll" + e.p2;
            return t[r] = i,
                function e(o, s, a, l, u) {
                    var c = e.tween,
                        f = s.onComplete,
                        d = {};
                    return c && c.kill(), n = i(), s[r] = o, s.modifiers = d, d[r] = function(t) {
                        return Math.abs(i() - n) > 7 ? (c.kill(), e.tween = 0, t = i()) : l && (t = a + l * c.ratio + u * c.ratio * c.ratio), n = Math.round(t)
                    }, s.onComplete = function() {
                        e.tween = 0, f && f.call(c)
                    }, c = e.tween = Ei.to(t, s)
                }
        };
    Sr.op = kr;
    var go = function() {
        function t(e, n) {
            Mi || t.register(Ei) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, n)
        }
        return t.prototype.init = function(e, n) {
            if (this.progress = 0, this.vars && this.kill(1), sr) {
                var i, r, o, s, a, l, u, c, f, d, h, p, g, m, v, y, b, x, w, _, T, C, S, k, A, P, E, M, L, D, O, $, R, N, H, j, I, F, z, q = (e = Pr(mr(e) || yr(e) || e.nodeType ? {
                        trigger: e
                    } : e, Rr)).horizontal ? Sr : kr,
                    B = e,
                    W = B.onUpdate,
                    X = B.toggleClass,
                    Y = B.id,
                    V = B.onToggle,
                    U = B.onRefresh,
                    G = B.scrub,
                    Q = B.trigger,
                    K = B.pin,
                    Z = B.pinSpacing,
                    J = B.invalidateOnRefresh,
                    tt = B.anticipatePin,
                    et = B.onScrubComplete,
                    nt = B.onSnapComplete,
                    it = B.once,
                    rt = B.snap,
                    ot = B.pinReparent,
                    st = !G && 0 !== G,
                    at = Ii(e.scroller || Li)[0],
                    lt = Ei.core.getCache(at),
                    ut = cr(at),
                    ct = ut || "fixed" === fr(at, "pinType"),
                    ft = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                    dt = st && (it ? "play" : e.toggleActions).split(" "),
                    ht = "markers" in e ? e.markers : Rr.markers,
                    pt = ut ? 0 : parseFloat(Ar(at)["border" + q.p2 + "Width"]) || 0,
                    gt = this,
                    mt = e.onRefreshInit && function() {
                        return e.onRefreshInit(gt)
                    },
                    vt = function(t, e, n) {
                        var i = n.d,
                            r = n.d2,
                            o = n.a;
                        return (o = fr(t, "getBoundingClientRect")) ? function() {
                            return o()[i]
                        } : function() {
                            return (e ? Li["inner" + r] : t["client" + r]) || 0
                        }
                    }(at, ut, q),
                    yt = function(t, e) {
                        return !e || ~er.indexOf(t) ? hr(t) : function() {
                            return co
                        }
                    }(at, ut);
                gt.media = Zi, tt *= 45, Fr.push(gt), gt.scroller = at, gt.scroll = dr(at, q), a = gt.scroll(), gt.vars = e, n = n || e.animation, "refreshPriority" in e && (Qi = 1), lt.tweenScroll = lt.tweenScroll || {
                    top: po(at, kr),
                    left: po(at, Sr)
                }, gt.tweenTo = i = lt.tweenScroll[q.p], n && (n.vars.lazy = !1, n._initted || !1 !== n.vars.immediateRender && !1 !== e.immediateRender && n.render(0, !0, !0), gt.animation = n.pause(), n.scrollTrigger = gt, (R = yr(G) && G) && ($ = Ei.to(n, {
                    ease: "power3",
                    duration: R,
                    onComplete: function() {
                        return et && et(gt)
                    }
                })), L = 0, Y || (Y = n.vars.id)), rt && (br(rt) || (rt = {
                    snapTo: rt
                }), Ei.set(ut ? [$i, Oi] : at, {
                    scrollBehavior: "auto"
                }), o = vr(rt.snapTo) ? rt.snapTo : "labels" === rt.snapTo ? function(t) {
                    return function(e) {
                        var n, i = [],
                            r = t.labels,
                            o = t.duration();
                        for (n in r) i.push(r[n] / o);
                        return Ei.utils.snap(i, e)
                    }
                }(n) : Ei.utils.snap(rt.snapTo), N = rt.duration || {
                    min: .1,
                    max: 2
                }, N = br(N) ? Fi(N.min, N.max) : Fi(N, N), H = Ei.delayedCall(rt.delay || R / 2 || .1, (function() {
                    if (!or || or === O && !Wi) {
                        var t = n && !st ? n.totalProgress() : gt.progress,
                            e = (t - D) / (ir() - zi) * 1e3 || 0,
                            r = _r(e / 2) * e / .185,
                            s = t + r,
                            a = Fi(0, 1, o(s, gt)),
                            l = a - t - r,
                            f = gt.scroll(),
                            d = Math.round(u + a * m),
                            h = i.tween;
                        if (f <= c && f >= u) {
                            if (h && !h._initted) {
                                if (h.data <= Math.abs(d - f)) return;
                                h.kill()
                            }
                            i(d, {
                                duration: N(_r(.185 * Math.max(_r(s - t), _r(a - t)) / e / .05 || 0)),
                                ease: rt.ease || "power3",
                                data: Math.abs(d - f),
                                onComplete: function() {
                                    L = D = n && !st ? n.totalProgress() : gt.progress, nt && nt(gt)
                                }
                            }, u + t * m, r * m, l * m)
                        }
                    } else H.restart(!0)
                })).pause()), Y && (zr[Y] = gt), Q = gt.trigger = Ii(Q || K)[0], K = !0 === K ? Q : Ii(K)[0], mr(X) && (X = {
                    targets: Q,
                    className: X
                }), K && (!1 === Z || "margin" === Z || (Z = "flex" !== Ar(K.parentNode).display && Tr), gt.pin = K, !1 !== e.force3D && Ei.set(K, {
                    force3D: !0
                }), (r = Ei.core.getCache(K)).spacer ? v = r.pinState : (r.spacer = x = Di.createElement("div"), x.setAttribute("class", "pin-spacer" + (Y ? " pin-spacer-" + Y : "")), r.pinState = v = uo(K)), gt.spacer = x = r.spacer, M = Ar(K), k = M[Z + q.os2], _ = Ei.getProperty(K), T = Ei.quickSetter(K, q.a, Cr), so(K, x, M), b = uo(K)), ht && (g = br(ht) ? Pr(ht, $r) : $r, h = jr("scroller-start", Y, at, q, g, 0), p = jr("scroller-end", Y, at, q, g, 0, h), w = h["offset" + q.op.d2], f = jr("start", Y, at, q, g, w), d = jr("end", Y, at, q, g, w), ct || ((z = at).style.position = "absolute" === Ar(z).position ? "absolute" : "relative", Ei.set([h, p], {
                    force3D: !0
                }), P = Ei.quickSetter(h, q.a, Cr), E = Ei.quickSetter(p, q.a, Cr))), gt.revert = function(t) {
                    var e = !1 !== t || !gt.enabled,
                        i = Bi;
                    e !== s && (e && (I = Math.max(gt.scroll(), gt.scroll.rec || 0), j = gt.progress, F = n && n.progress()), f && [f, d, h, p].forEach((function(t) {
                        return t.style.display = e ? "none" : "block"
                    })), Bi = 1, gt.update(e), Bi = i, K && e && function(t, e, n) {
                        if (lo(n), t.parentNode === e) {
                            var i = e.parentNode;
                            i && (i.insertBefore(t, e), i.removeChild(e))
                        }
                    }(K, x, v), s = e)
                }, gt.refresh = function(i) {
                    if (!Bi && gt.enabled)
                        if (K && i && or) Dr(t, "scrollEnd", Gr);
                        else {
                            Bi = 1, $ && $.kill(), J && n && n.progress(0).invalidate(), s || gt.revert();
                            for (var r, o, g, w, T, k, P, E = vt(), M = yt(), L = pr(at, q), D = 0, O = 0, R = e.end, N = e.endTrigger || Q, H = e.start || (K || !Q ? "0 0" : "0 100%"), z = Q && Math.max(0, Fr.indexOf(gt)) || 0, B = z; B--;)(P = Fr[B].pin) && (P === Q || P === K) && Fr[B].revert();
                            for (u = fo(H, Q, E, q, gt.scroll(), f, h, gt, M, pt, ct, L) || (K ? -.001 : 0), vr(R) && (R = R(gt)), mr(R) && !R.indexOf("+=") && (~R.indexOf(" ") ? R = (mr(H) ? H.split(" ")[0] : "") + R : (D = Hr(R.substr(2), E), R = mr(H) ? H : u + D, N = Q)), c = Math.max(u, fo(R || (N ? "100% 0" : L), N, E, q, gt.scroll() + D, d, p, gt, M, pt, ct, L)) || -.001, m = c - u || (u -= .01) && .001, D = 0, B = z; B--;)(P = (k = Fr[B]).pin) && k.start - k._pinPush < u && (r = k.end - k.start, P === Q && (D += r), P === K && (O += r));
                            if (u += D, c += D, gt._pinPush = O, f && D && ((r = {})[q.a] = "+=" + D, Ei.set([f, d], r)), K) r = Ar(K), w = q === kr, g = gt.scroll(), C = parseFloat(_(q.a)) + O, so(K, x, r), b = uo(K), o = Er(K, !0), Z && (x.style[Z + q.os2] = m + O + Cr, (A = Z === Tr ? Mr(K, q) + m + O : 0) && (x.style[q.d] = A + Cr), ct && gt.scroll(I)), ct && ((T = {
                                top: o.top + (w ? g - u : 0) + Cr,
                                left: o.left + (w ? 0 : g - u) + Cr,
                                boxSizing: "border-box",
                                position: "fixed"
                            }).width = T.maxWidth = Math.ceil(o.width) + Cr, T.height = T.maxHeight = Math.ceil(o.height) + Cr, T.margin = T.marginTop = T.marginRight = T.marginBottom = T.marginLeft = "0", T[Tr] = r[Tr], T[Tr + "Top"] = r[Tr + "Top"], T[Tr + "Right"] = r[Tr + "Right"], T[Tr + "Bottom"] = r[Tr + "Bottom"], T[Tr + "Left"] = r[Tr + "Left"], y = function(t, e, n) {
                                for (var i, r = [], o = t.length, s = n ? 8 : 0; s < o; s += 2) i = t[s], r.push(i, i in e ? e[i] : t[s + 1]);
                                return r.t = t.t, r
                            }(v, T, ot)), n ? (n.progress(1, !0), S = _(q.a) - C + m + O, m !== S && y.splice(y.length - 2, 2), n.progress(0, !0)) : S = m;
                            else if (Q && gt.scroll())
                                for (o = Q.parentNode; o && o !== $i;) o._pinOffset && (u -= o._pinOffset, c -= o._pinOffset), o = o.parentNode;
                            for (B = 0; B < z; B++)(k = Fr[B].pin) && (k === Q || k === K) && Fr[B].revert(!1);
                            gt.start = u, gt.end = c, (a = l = gt.scroll()) < I && gt.scroll(I), gt.revert(!1), Bi = 0, F && st && n.progress(F, !0), j !== gt.progress && ($ && n.totalProgress(j, !0), gt.progress = j, gt.update()), K && Z && (x._pinOffset = Math.round(gt.progress * S)), U && U(gt)
                        }
                }, gt.getVelocity = function() {
                    return (gt.scroll() - l) / (ir() - zi) * 1e3 || 0
                }, gt.update = function(t, e) {
                    var r, o, s, f, d, p = gt.scroll(),
                        g = t ? 0 : (p - u) / m,
                        v = g < 0 ? 0 : g > 1 ? 1 : g || 0,
                        w = gt.progress;
                    if (e && (l = a, a = p, rt && (D = L, L = n && !st ? n.totalProgress() : v)), tt && !v && K && !Bi && !tr && or && u < p + (p - l) / (ir() - zi) * tt && (v = 1e-4), v !== w && gt.enabled) {
                        if (f = (d = (r = gt.isActive = !!v && v < 1) !== (!!w && w < 1)) || !!v != !!w, gt.direction = v > w ? 1 : -1, gt.progress = v, st || (!$ || Bi || tr ? n && n.totalProgress(v, !!Bi) : ($.vars.totalProgress = v, $.invalidate().restart())), K)
                            if (t && Z && (x.style[Z + q.os2] = k), ct) {
                                if (f) {
                                    if (s = !t && v > w && c + 1 > p && p + 1 >= pr(at, q), ot) {
                                        if (!Bi && (r || s)) {
                                            var _ = Er(K, !0),
                                                A = p - u;
                                            K.style.top = _.top + (q === kr ? A : 0) + Cr, K.style.left = _.left + (q === kr ? 0 : A) + Cr
                                        }! function(t, e) {
                                            if (t.parentNode !== e) {
                                                var n, i, r = t.style;
                                                if (e === $i)
                                                    for (n in t._stOrig = r.cssText, i = Ar(t)) + n || ho.test(n) || !i[n] || "string" != typeof r[n] || "0" === n || (r[n] = i[n]);
                                                else r.cssText = t._stOrig;
                                                e.appendChild(t)
                                            }
                                        }(K, Bi || !r && !s ? x : $i)
                                    }
                                    lo(r || s ? y : b), S !== m && v < 1 && r || T(C + (1 !== v || s ? 0 : S))
                                }
                            } else T(C + S * v);
                        !rt || i.tween || Bi || tr || (O = or, H.restart(!0)), X && d && (!it || r) && Ii(X.targets).forEach((function(t) {
                            return t.classList[r ? "add" : "remove"](X.className)
                        })), W && !st && !t && W(gt), f && !Bi ? (o = v && !w ? 0 : 1 === v ? 1 : 1 === w ? 2 : 3, st && (s = !d && "none" !== dt[o + 1] && dt[o + 1] || dt[o], n && ("complete" === s || "reset" === s || s in n) && ("complete" === s ? n.pause().totalProgress(1) : "reset" === s ? n.restart(!0).pause() : n[s]()), W && W(gt)), !d && Ki || (V && d && V(gt), ft[o] && ft[o](gt), it && (1 === v ? gt.kill(!1, 1) : ft[o] = 0), d || ft[o = 1 === v ? 1 : 3] && ft[o](gt))) : st && W && !Bi && W(gt)
                    }
                    E && (P(p + (h._isFlipped ? 1 : 0)), E(p))
                }, gt.enable = function() {
                    gt.enabled || (gt.enabled = !0, Dr(at, "resize", Wr), Dr(at, "scroll", Br), mt && Dr(t, "refreshInit", mt), n && n.add ? Ei.delayedCall(.01, gt.refresh) && (m = .01) && (u = c = 0) : gt.refresh())
                }, gt.disable = function(e, n) {
                    if (gt.enabled && (!1 !== e && gt.revert(), gt.enabled = gt.isActive = !1, n || $ && $.pause(), I = 0, r && (r.uncache = 1), mt && Or(t, "refreshInit", mt), H && (H.pause(), i.tween && i.tween.kill()), !ut)) {
                        for (var o = Fr.length; o--;)
                            if (Fr[o].scroller === at && Fr[o] !== gt) return;
                        Or(at, "resize", Wr), Or(at, "scroll", Br)
                    }
                }, gt.kill = function(t, e) {
                    gt.disable(t, e), Y && delete zr[Y];
                    var i = Fr.indexOf(gt);
                    Fr.splice(i, 1), i === Yi && no > 0 && Yi--, n && (n.scrollTrigger = null, t && n.render(-1), e && $ || n.kill()), f && [f, d, h, p].forEach((function(t) {
                        return t.parentNode.removeChild(t)
                    })), r && (r.uncache = 1)
                }, gt.enable()
            } else this.update = this.refresh = this.kill = ar
        }, t.register = function(e) {
            if (!Mi && (Ei = e || ur(), lr() && window.document && (Li = window, Di = document, Oi = Di.documentElement, $i = Di.body), Ei && (Ii = Ei.utils.toArray, Fi = Ei.utils.clamp, Ei.core.globals("ScrollTrigger", t), $i))) {
                Hi = Li.requestAnimationFrame || function(t) {
                    return setTimeout(t, 16)
                }, Dr(Li, "mousewheel", Br), Ri = [Li, Di, Oi, $i], Dr(Di, "scroll", Br);
                var n, i = $i.style,
                    r = i.borderTop;
                i.borderTop = "1px solid #000", n = Er($i), kr.m = Math.round(n.top + kr.sc()) || 0, Sr.m = Math.round(n.left + Sr.sc()) || 0, r ? i.borderTop = r : i.removeProperty("border-top"), qi = setInterval(qr, 200), Ei.delayedCall(.5, (function() {
                    return tr = 0
                })), Dr(Di, "touchcancel", ar), Dr($i, "touchstart", ar), Lr(Dr, Di, "pointerdown,touchstart,mousedown", (function() {
                    return Wi = 1
                })), Lr(Dr, Di, "pointerup,touchend,mouseup", (function() {
                    return Wi = 0
                })), Xi = Ei.utils.checkPrefix("transform"), oo.push(Xi), Mi = ir(), Ni = Ei.delayedCall(.2, to).pause(), Gi = [Di, "visibilitychange", function() {
                    var t = Li.innerWidth,
                        e = Li.innerHeight;
                    Di.hidden ? (Vi = t, Ui = e) : Vi === t && Ui === e || Wr()
                }, Di, "DOMContentLoaded", to, Li, "load", function() {
                    return or || to()
                }, Li, "resize", Wr], gr(Dr)
            }
            return Mi
        }, t.defaults = function(t) {
            for (var e in t) Rr[e] = t[e]
        }, t.kill = function() {
            sr = 0, Fr.slice(0).forEach((function(t) {
                return t.kill(1)
            }))
        }, t.config = function(t) {
            "limitCallbacks" in t && (Ki = !!t.limitCallbacks);
            var e = t.syncInterval;
            e && clearInterval(qi) || (qi = e) && setInterval(qr, e), "autoRefreshEvents" in t && (gr(Or) || gr(Dr, t.autoRefreshEvents || "none"))
        }, t.scrollerProxy = function(t, e) {
            var n = Ii(t)[0];
            cr(n) ? er.unshift(Li, e, $i, e, Oi, e) : er.unshift(n, e)
        }, t.matchMedia = function(t) {
            var e, n, i, r, o;
            for (n in t) i = Vr.indexOf(n), r = t[n], Zi = n, "all" === n ? r() : (e = Li.matchMedia(n)) && (e.matches && (o = r()), ~i ? (Vr[i + 1] = wr(Vr[i + 1], r), Vr[i + 2] = wr(Vr[i + 2], o)) : (i = Vr.length, Vr.push(n, r, o), e.addListener ? e.addListener(Ur) : e.addEventListener("change", Ur))), Zi = 0;
            return Vr
        }, t
    }();
    go.version = "3.4.1", go.saveStyles = function(t) {
        return t ? Ii(t).forEach((function(t) {
            var e = Kr.indexOf(t);
            e >= 0 && Kr.splice(e, 4), Kr.push(t, t.style.cssText, Ei.core.getCache(t), Zi)
        })) : Kr
    }, go.revert = function(t, e) {
        return Jr(!t, e)
    }, go.create = function(t, e) {
        return new go(t, e)
    }, go.refresh = function(t) {
        return t ? Wr() : to(!0)
    }, go.update = io, go.maxScroll = function(t, e) {
        return pr(t, e ? Sr : kr)
    }, go.getScrollFunc = function(t, e) {
        return dr(Ii(t)[0], e ? Sr : kr)
    }, go.getById = function(t) {
        return zr[t]
    }, go.getAll = function() {
        return Fr.slice(0)
    }, go.isScrolling = function() {
        return !!or
    }, go.addEventListener = function(t, e) {
        var n = Xr[t] || (Xr[t] = []);
        ~n.indexOf(e) || n.push(e)
    }, go.removeEventListener = function(t, e) {
        var n = Xr[t],
            i = n && n.indexOf(e);
        i >= 0 && n.splice(i, 1)
    }, go.batch = function(t, e) {
        var n, i = [],
            r = {},
            o = e.interval || .016,
            s = e.batchMax || 1e9,
            a = function(t, e) {
                var n = [],
                    i = [],
                    r = Ei.delayedCall(o, (function() {
                        e(n, i), n = [], i = []
                    })).pause();
                return function(t) {
                    n.length || r.restart(!0), n.push(t.trigger), i.push(t), s <= n.length && r.progress(1)
                }
            };
        for (n in e) r[n] = "on" === n.substr(0, 2) && vr(e[n]) && "onRefreshInit" !== n ? a(0, e[n]) : e[n];
        return vr(s) && (s = s(), Dr(go, "refresh", (function() {
            return s = e.batchMax()
        }))), Ii(t).forEach((function(t) {
            var e = {};
            for (n in r) e[n] = r[n];
            e.trigger = t, i.push(go.create(e))
        })), i
    }, go.sort = function(t) {
        return Fr.sort(t || function(t, e) {
            return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0))
        })
    }, ur() && Ei.registerPlugin(go);
    var mo, vo, yo, bo, xo, wo = function() {
            return "undefined" != typeof window
        },
        _o = function() {
            return mo || wo() && (mo = window.gsap) && mo.registerPlugin && mo
        },
        To = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
        Co = {
            rect: ["width", "height"],
            circle: ["r", "r"],
            ellipse: ["rx", "ry"],
            line: ["x2", "y2"]
        },
        So = function(t) {
            return Math.round(1e4 * t) / 1e4
        },
        ko = function(t) {
            return parseFloat(t || 0)
        },
        Ao = function(t, e) {
            return ko(t.getAttribute(e))
        },
        Po = Math.sqrt,
        Eo = function(t, e, n, i, r, o) {
            return Po(Math.pow((ko(n) - ko(t)) * r, 2) + Math.pow((ko(i) - ko(e)) * o, 2))
        },
        Mo = function(t) {
            return console.warn(t)
        },
        Lo = function(t) {
            return "non-scaling-stroke" === t.getAttribute("vector-effect")
        },
        Do = function(t) {
            if (!(t = vo(t)[0])) return 0;
            var e, n, i, r, o, s, a, l = t.tagName.toLowerCase(),
                u = t.style,
                c = 1,
                f = 1;
            Lo(t) && (f = t.getScreenCTM(), c = Po(f.a * f.a + f.b * f.b), f = Po(f.d * f.d + f.c * f.c));
            try {
                n = t.getBBox()
            } catch (t) {
                Mo("Some browsers won't measure invisible elements (like display:none or masks inside defs).")
            }
            var d = n || {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                },
                h = d.x,
                p = d.y,
                g = d.width,
                m = d.height;
            if (n && (g || m) || !Co[l] || (g = Ao(t, Co[l][0]), m = Ao(t, Co[l][1]), "rect" !== l && "line" !== l && (g *= 2, m *= 2), "line" === l && (h = Ao(t, "x1"), p = Ao(t, "y1"), g = Math.abs(g - h), m = Math.abs(m - p))), "path" === l) r = u.strokeDasharray, u.strokeDasharray = "none", e = t.getTotalLength() || 0, c !== f && Mo("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."), e *= (c + f) / 2, u.strokeDasharray = r;
            else if ("rect" === l) e = 2 * g * c + 2 * m * f;
            else if ("line" === l) e = Eo(h, p, h + g, p + m, c, f);
            else if ("polyline" === l || "polygon" === l)
                for (i = t.getAttribute("points").match(To) || [], "polygon" === l && i.push(i[0], i[1]), e = 0, o = 2; o < i.length; o += 2) e += Eo(i[o - 2], i[o - 1], i[o], i[o + 1], c, f) || 0;
            else "circle" !== l && "ellipse" !== l || (s = g / 2 * c, a = m / 2 * f, e = Math.PI * (3 * (s + a) - Po((3 * s + a) * (s + 3 * a))));
            return e || 0
        },
        Oo = function(t, e) {
            if (!(t = vo(t)[0])) return [0, 0];
            e || (e = Do(t) + 1);
            var n = yo.getComputedStyle(t),
                i = n.strokeDasharray || "",
                r = ko(n.strokeDashoffset),
                o = i.indexOf(",");
            return o < 0 && (o = i.indexOf(" ")), (i = o < 0 ? e : ko(i.substr(0, o)) || 1e-5) > e && (i = e), [Math.max(0, -r), Math.max(0, i - r)]
        },
        $o = function() {
            wo() && (document, yo = window, xo = mo = _o(), vo = mo.utils.toArray, bo = -1 !== ((yo.navigator || {}).userAgent || "").indexOf("Edge"))
        },
        Ro = {
            version: "3.4.1",
            name: "drawSVG",
            register: function(t) {
                mo = t, $o()
            },
            init: function(t, e, n, i, r) {
                if (!t.getBBox) return !1;
                xo || $o();
                var o, s, a, l, u = Do(t) + 1;
                return this._style = t.style, this._target = t, e + "" == "true" ? e = "0 100%" : e ? -1 === (e + "").indexOf(" ") && (e = "0 " + e) : e = "0 0", s = function(t, e, n) {
                    var i, r, o = t.indexOf(" ");
                    return o < 0 ? (i = void 0 !== n ? n + "" : t, r = t) : (i = t.substr(0, o), r = t.substr(o + 1)), (i = ~i.indexOf("%") ? ko(i) / 100 * e : ko(i)) > (r = ~r.indexOf("%") ? ko(r) / 100 * e : ko(r)) ? [r, i] : [i, r]
                }(e, u, (o = Oo(t, u))[0]), this._length = So(u + 10), 0 === o[0] && 0 === s[0] ? (a = Math.max(1e-5, s[1] - u), this._dash = So(u + a), this._offset = So(u - o[1] + a), this._offsetPT = this.add(this, "_offset", this._offset, So(u - s[1] + a))) : (this._dash = So(o[1] - o[0]) || 1e-6, this._offset = So(-o[0]), this._dashPT = this.add(this, "_dash", this._dash, So(s[1] - s[0]) || 1e-5), this._offsetPT = this.add(this, "_offset", this._offset, So(-s[0]))), bo && (l = yo.getComputedStyle(t)).strokeLinecap !== l.strokeLinejoin && (s = ko(l.strokeMiterlimit), this.add(t.style, "strokeMiterlimit", s, s + .01)), this._live = Lo(t) || ~(e + "").indexOf("live"), this._props.push("drawSVG"), 1
            },
            render: function(t, e) {
                var n, i, r, o, s = e._pt,
                    a = e._style;
                if (s) {
                    for (e._live && (n = Do(e._target) + 11) !== e._length && (i = n / e._length, e._length = n, e._offsetPT.s *= i, e._offsetPT.c *= i, e._dashPT ? (e._dashPT.s *= i, e._dashPT.c *= i) : e._dash *= i); s;) s.r(t, s.d), s = s._next;
                    r = e._dash, o = e._offset, n = e._length, a.strokeDashoffset = e._offset, 1 !== t && t ? a.strokeDasharray = r + "px," + n + "px" : (r - o < .001 && n - r <= 10 && (a.strokeDashoffset = o + 1), a.strokeDasharray = o < .001 && n - r <= 10 ? "none" : o === r ? "0px, 999999px" : r + "px," + n + "px")
                }
            },
            getLength: Do,
            getPosition: Oo
        };
    _o() && mo.registerPlugin(Ro);
    var No = {
        type: "slider",
        startAt: 0,
        perView: 1,
        focusAt: 0,
        gap: 10,
        autoplay: !1,
        hoverpause: !0,
        keyboard: !0,
        bound: !1,
        swipeThreshold: 80,
        dragThreshold: 120,
        perTouch: !1,
        touchRatio: .5,
        touchAngle: 45,
        animationDuration: 400,
        rewind: !0,
        rewindDuration: 800,
        animationTimingFunc: "cubic-bezier(.165, .840, .440, 1)",
        throttle: 10,
        direction: "ltr",
        peek: 0,
        breakpoints: {},
        classes: {
            direction: {
                ltr: "glide--ltr",
                rtl: "glide--rtl"
            },
            slider: "glide--slider",
            carousel: "glide--carousel",
            swipeable: "glide--swipeable",
            dragging: "glide--dragging",
            cloneSlide: "glide__slide--clone",
            activeNav: "glide__bullet--active",
            activeSlide: "glide__slide--active",
            disabledArrow: "glide__arrow--disabled"
        }
    };

    function Ho(t) {
        console.error("[Glide warn]: " + t)
    }
    var jo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        Io = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        },
        Fo = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        zo = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        },
        qo = function t(e, n, i) {
            null === e && (e = Function.prototype);
            var r = Object.getOwnPropertyDescriptor(e, n);
            if (void 0 === r) {
                var o = Object.getPrototypeOf(e);
                return null === o ? void 0 : t(o, n, i)
            }
            if ("value" in r) return r.value;
            var s = r.get;
            return void 0 !== s ? s.call(i) : void 0
        },
        Bo = function(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        };

    function Wo(t) {
        return parseInt(t)
    }

    function Xo(t) {
        return "string" == typeof t
    }

    function Yo(t) {
        var e = void 0 === t ? "undefined" : jo(t);
        return "function" === e || "object" === e && !!t
    }

    function Vo(t) {
        return "function" == typeof t
    }

    function Uo(t) {
        return void 0 === t
    }

    function Go(t) {
        return t.constructor === Array
    }

    function Qo(t, e, n) {
        var i = {};
        for (var r in e) Vo(e[r]) ? i[r] = e[r](t, i, n) : Ho("Extension must be a function");
        for (var o in i) Vo(i[o].mount) && i[o].mount();
        return i
    }

    function Ko(t, e, n) {
        Object.defineProperty(t, e, n)
    }

    function Zo(t, e) {
        var n = zo({}, t, e);
        return e.hasOwnProperty("classes") && (n.classes = zo({}, t.classes, e.classes), e.classes.hasOwnProperty("direction") && (n.classes.direction = zo({}, t.classes.direction, e.classes.direction))), e.hasOwnProperty("breakpoints") && (n.breakpoints = zo({}, t.breakpoints, e.breakpoints)), n
    }
    var Jo = function() {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                Io(this, t), this.events = e, this.hop = e.hasOwnProperty
            }
            return Fo(t, [{
                key: "on",
                value: function(t, e) {
                    if (Go(t))
                        for (var n = 0; n < t.length; n++) this.on(t[n], e);
                    this.hop.call(this.events, t) || (this.events[t] = []);
                    var i = this.events[t].push(e) - 1;
                    return {
                        remove: function() {
                            delete this.events[t][i]
                        }
                    }
                }
            }, {
                key: "emit",
                value: function(t, e) {
                    if (Go(t))
                        for (var n = 0; n < t.length; n++) this.emit(t[n], e);
                    this.hop.call(this.events, t) && this.events[t].forEach((function(t) {
                        t(e || {})
                    }))
                }
            }]), t
        }(),
        ts = function() {
            function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                Io(this, t), this._c = {}, this._t = [], this._e = new Jo, this.disabled = !1, this.selector = e, this.settings = Zo(No, n), this.index = this.settings.startAt
            }
            return Fo(t, [{
                key: "mount",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return this._e.emit("mount.before"), Yo(t) ? this._c = Qo(this, t, this._e) : Ho("You need to provide a object on `mount()`"), this._e.emit("mount.after"), this
                }
            }, {
                key: "mutate",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return Go(t) ? this._t = t : Ho("You need to provide a array on `mutate()`"), this
                }
            }, {
                key: "update",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return this.settings = Zo(this.settings, t), t.hasOwnProperty("startAt") && (this.index = t.startAt), this._e.emit("update"), this
                }
            }, {
                key: "go",
                value: function(t) {
                    return this._c.Run.make(t), this
                }
            }, {
                key: "move",
                value: function(t) {
                    return this._c.Transition.disable(), this._c.Move.make(t), this
                }
            }, {
                key: "destroy",
                value: function() {
                    return this._e.emit("destroy"), this
                }
            }, {
                key: "play",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return t && (this.settings.autoplay = t), this._e.emit("play"), this
                }
            }, {
                key: "pause",
                value: function() {
                    return this._e.emit("pause"), this
                }
            }, {
                key: "disable",
                value: function() {
                    return this.disabled = !0, this
                }
            }, {
                key: "enable",
                value: function() {
                    return this.disabled = !1, this
                }
            }, {
                key: "on",
                value: function(t, e) {
                    return this._e.on(t, e), this
                }
            }, {
                key: "isType",
                value: function(t) {
                    return this.settings.type === t
                }
            }, {
                key: "settings",
                get: function() {
                    return this._o
                },
                set: function(t) {
                    Yo(t) ? this._o = t : Ho("Options must be an `object` instance.")
                }
            }, {
                key: "index",
                get: function() {
                    return this._i
                },
                set: function(t) {
                    this._i = Wo(t)
                }
            }, {
                key: "type",
                get: function() {
                    return this.settings.type
                }
            }, {
                key: "disabled",
                get: function() {
                    return this._d
                },
                set: function(t) {
                    this._d = !!t
                }
            }]), t
        }();

    function es() {
        return (new Date).getTime()
    }

    function ns(t, e, n) {
        var i = void 0,
            r = void 0,
            o = void 0,
            s = void 0,
            a = 0;
        n || (n = {});
        var l = function() {
                a = !1 === n.leading ? 0 : es(), i = null, s = t.apply(r, o), i || (r = o = null)
            },
            u = function() {
                var u = es();
                a || !1 !== n.leading || (a = u);
                var c = e - (u - a);
                return r = this, o = arguments, c <= 0 || c > e ? (i && (clearTimeout(i), i = null), a = u, s = t.apply(r, o), i || (r = o = null)) : i || !1 === n.trailing || (i = setTimeout(l, c)), s
            };
        return u.cancel = function() {
            clearTimeout(i), a = 0, i = r = o = null
        }, u
    }
    var is = {
        ltr: ["marginLeft", "marginRight"],
        rtl: ["marginRight", "marginLeft"]
    };

    function rs(t) {
        if (t && t.parentNode) {
            for (var e = t.parentNode.firstChild, n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
        return []
    }

    function os(t) {
        return !!(t && t instanceof window.HTMLElement)
    }
    var ss = function() {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            Io(this, t), this.listeners = e
        }
        return Fo(t, [{
            key: "on",
            value: function(t, e, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                Xo(t) && (t = [t]);
                for (var r = 0; r < t.length; r++) this.listeners[t[r]] = n, e.addEventListener(t[r], this.listeners[t[r]], i)
            }
        }, {
            key: "off",
            value: function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                Xo(t) && (t = [t]);
                for (var i = 0; i < t.length; i++) e.removeEventListener(t[i], this.listeners[t[i]], n)
            }
        }, {
            key: "destroy",
            value: function() {
                delete this.listeners
            }
        }]), t
    }();
    var as = ["ltr", "rtl"],
        ls = {
            ">": "<",
            "<": ">",
            "=": "="
        };

    function us(t, e) {
        return {
            modify: function(t) {
                return e.Direction.is("rtl") ? -t : t
            }
        }
    }

    function cs(t, e) {
        return {
            modify: function(n) {
                return n + e.Gaps.value * t.index
            }
        }
    }

    function fs(t, e) {
        return {
            modify: function(t) {
                return t + e.Clones.grow / 2
            }
        }
    }

    function ds(t, e) {
        return {
            modify: function(n) {
                if (t.settings.focusAt >= 0) {
                    var i = e.Peek.value;
                    return Yo(i) ? n - i.before : n - i
                }
                return n
            }
        }
    }

    function hs(t, e) {
        return {
            modify: function(n) {
                var i = e.Gaps.value,
                    r = e.Sizes.width,
                    o = t.settings.focusAt,
                    s = e.Sizes.slideWidth;
                return "center" === o ? n - (r / 2 - s / 2) : n - s * o - i * o
            }
        }
    }
    var ps = !1;
    try {
        var gs = Object.defineProperty({}, "passive", {
            get: function() {
                ps = !0
            }
        });
        window.addEventListener("testPassive", null, gs), window.removeEventListener("testPassive", null, gs)
    } catch (t) {}
    var ms = ps,
        vs = ["touchstart", "mousedown"],
        ys = ["touchmove", "mousemove"],
        bs = ["touchend", "touchcancel", "mouseup", "mouseleave"],
        xs = ["mousedown", "mousemove", "mouseup", "mouseleave"];

    function ws(t) {
        return Yo(t) ? (e = t, Object.keys(e).sort().reduce((function(t, n) {
            return t[n] = e[n], t[n], t
        }), {})) : (Ho("Breakpoints option must be an object"), {});
        var e
    }
    var _s = {
            Html: function(t, e) {
                var n = {
                    mount: function() {
                        this.root = t.selector, this.track = this.root.querySelector('[data-glide-el="track"]'), this.slides = Array.prototype.slice.call(this.wrapper.children).filter((function(e) {
                            return !e.classList.contains(t.settings.classes.cloneSlide)
                        }))
                    }
                };
                return Ko(n, "root", {
                    get: function() {
                        return n._r
                    },
                    set: function(t) {
                        Xo(t) && (t = document.querySelector(t)), os(t) ? n._r = t : Ho("Root element must be a existing Html node")
                    }
                }), Ko(n, "track", {
                    get: function() {
                        return n._t
                    },
                    set: function(t) {
                        os(t) ? n._t = t : Ho('Could not find track element. Please use [data-glide-el="track"] attribute.')
                    }
                }), Ko(n, "wrapper", {
                    get: function() {
                        return n.track.children[0]
                    }
                }), n
            },
            Translate: function(t, e, n) {
                var i = {
                    set: function(n) {
                        var i = function(t, e, n) {
                            var i = [cs, fs, ds, hs].concat(t._t, [us]);
                            return {
                                mutate: function(r) {
                                    for (var o = 0; o < i.length; o++) {
                                        var s = i[o];
                                        Vo(s) && Vo(s().modify) ? r = s(t, e, n).modify(r) : Ho("Transformer should be a function that returns an object with `modify()` method")
                                    }
                                    return r
                                }
                            }
                        }(t, e).mutate(n);
                        e.Html.wrapper.style.transform = "translate3d(" + -1 * i + "px, 0px, 0px)"
                    },
                    remove: function() {
                        e.Html.wrapper.style.transform = ""
                    }
                };
                return n.on("move", (function(r) {
                    var o = e.Gaps.value,
                        s = e.Sizes.length,
                        a = e.Sizes.slideWidth;
                    return t.isType("carousel") && e.Run.isOffset("<") ? (e.Transition.after((function() {
                        n.emit("translate.jump"), i.set(a * (s - 1))
                    })), i.set(-a - o * s)) : t.isType("carousel") && e.Run.isOffset(">") ? (e.Transition.after((function() {
                        n.emit("translate.jump"), i.set(0)
                    })), i.set(a * s + o * s)) : i.set(r.movement)
                })), n.on("destroy", (function() {
                    i.remove()
                })), i
            },
            Transition: function(t, e, n) {
                var i = !1,
                    r = {
                        compose: function(e) {
                            var n = t.settings;
                            return i ? e + " 0ms " + n.animationTimingFunc : e + " " + this.duration + "ms " + n.animationTimingFunc
                        },
                        set: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transform";
                            e.Html.wrapper.style.transition = this.compose(t)
                        },
                        remove: function() {
                            e.Html.wrapper.style.transition = ""
                        },
                        after: function(t) {
                            setTimeout((function() {
                                t()
                            }), this.duration)
                        },
                        enable: function() {
                            i = !1, this.set()
                        },
                        disable: function() {
                            i = !0, this.set()
                        }
                    };
                return Ko(r, "duration", {
                    get: function() {
                        var n = t.settings;
                        return t.isType("slider") && e.Run.offset ? n.rewindDuration : n.animationDuration
                    }
                }), n.on("move", (function() {
                    r.set()
                })), n.on(["build.before", "resize", "translate.jump"], (function() {
                    r.disable()
                })), n.on("run", (function() {
                    r.enable()
                })), n.on("destroy", (function() {
                    r.remove()
                })), r
            },
            Direction: function(t, e, n) {
                var i = {
                    mount: function() {
                        this.value = t.settings.direction
                    },
                    resolve: function(t) {
                        var e = t.slice(0, 1);
                        return this.is("rtl") ? t.split(e).join(ls[e]) : t
                    },
                    is: function(t) {
                        return this.value === t
                    },
                    addClass: function() {
                        e.Html.root.classList.add(t.settings.classes.direction[this.value])
                    },
                    removeClass: function() {
                        e.Html.root.classList.remove(t.settings.classes.direction[this.value])
                    }
                };
                return Ko(i, "value", {
                    get: function() {
                        return i._v
                    },
                    set: function(t) {
                        as.indexOf(t) > -1 ? i._v = t : Ho("Direction value must be `ltr` or `rtl`")
                    }
                }), n.on(["destroy", "update"], (function() {
                    i.removeClass()
                })), n.on("update", (function() {
                    i.mount()
                })), n.on(["build.before", "update"], (function() {
                    i.addClass()
                })), i
            },
            Peek: function(t, e, n) {
                var i = {
                    mount: function() {
                        this.value = t.settings.peek
                    }
                };
                return Ko(i, "value", {
                    get: function() {
                        return i._v
                    },
                    set: function(t) {
                        Yo(t) ? (t.before = Wo(t.before), t.after = Wo(t.after)) : t = Wo(t), i._v = t
                    }
                }), Ko(i, "reductor", {
                    get: function() {
                        var e = i.value,
                            n = t.settings.perView;
                        return Yo(e) ? e.before / n + e.after / n : 2 * e / n
                    }
                }), n.on(["resize", "update"], (function() {
                    i.mount()
                })), i
            },
            Sizes: function(t, e, n) {
                var i = {
                    setupSlides: function() {
                        for (var t = this.slideWidth + "px", n = e.Html.slides, i = 0; i < n.length; i++) n[i].style.width = t
                    },
                    setupWrapper: function(t) {
                        e.Html.wrapper.style.width = this.wrapperSize + "px"
                    },
                    remove: function() {
                        for (var t = e.Html.slides, n = 0; n < t.length; n++) t[n].style.width = "";
                        e.Html.wrapper.style.width = ""
                    }
                };
                return Ko(i, "length", {
                    get: function() {
                        return e.Html.slides.length
                    }
                }), Ko(i, "width", {
                    get: function() {
                        return e.Html.root.offsetWidth
                    }
                }), Ko(i, "wrapperSize", {
                    get: function() {
                        return i.slideWidth * i.length + e.Gaps.grow + e.Clones.grow
                    }
                }), Ko(i, "slideWidth", {
                    get: function() {
                        return i.width / t.settings.perView - e.Peek.reductor - e.Gaps.reductor
                    }
                }), n.on(["build.before", "resize", "update"], (function() {
                    i.setupSlides(), i.setupWrapper()
                })), n.on("destroy", (function() {
                    i.remove()
                })), i
            },
            Gaps: function(t, e, n) {
                var i = {
                    apply: function(t) {
                        for (var n = 0, i = t.length; n < i; n++) {
                            var r = t[n].style,
                                o = e.Direction.value;
                            r[is[o][0]] = 0 !== n ? this.value / 2 + "px" : "", n !== t.length - 1 ? r[is[o][1]] = this.value / 2 + "px" : r[is[o][1]] = ""
                        }
                    },
                    remove: function(t) {
                        for (var e = 0, n = t.length; e < n; e++) {
                            var i = t[e].style;
                            i.marginLeft = "", i.marginRight = ""
                        }
                    }
                };
                return Ko(i, "value", {
                    get: function() {
                        return Wo(t.settings.gap)
                    }
                }), Ko(i, "grow", {
                    get: function() {
                        return i.value * (e.Sizes.length - 1)
                    }
                }), Ko(i, "reductor", {
                    get: function() {
                        var e = t.settings.perView;
                        return i.value * (e - 1) / e
                    }
                }), n.on(["build.after", "update"], ns((function() {
                    i.apply(e.Html.wrapper.children)
                }), 30)), n.on("destroy", (function() {
                    i.remove(e.Html.wrapper.children)
                })), i
            },
            Move: function(t, e, n) {
                var i = {
                    mount: function() {
                        this._o = 0
                    },
                    make: function() {
                        var t = this,
                            i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        this.offset = i, n.emit("move", {
                            movement: this.value
                        }), e.Transition.after((function() {
                            n.emit("move.after", {
                                movement: t.value
                            })
                        }))
                    }
                };
                return Ko(i, "offset", {
                    get: function() {
                        return i._o
                    },
                    set: function(t) {
                        i._o = Uo(t) ? 0 : Wo(t)
                    }
                }), Ko(i, "translate", {
                    get: function() {
                        return e.Sizes.slideWidth * t.index
                    }
                }), Ko(i, "value", {
                    get: function() {
                        var t = this.offset,
                            n = this.translate;
                        return e.Direction.is("rtl") ? n + t : n - t
                    }
                }), n.on(["build.before", "run"], (function() {
                    i.make()
                })), i
            },
            Clones: function(t, e, n) {
                var i = {
                    mount: function() {
                        this.items = [], t.isType("carousel") && (this.items = this.collect())
                    },
                    collect: function() {
                        for (var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], i = e.Html.slides, r = t.settings, o = r.perView, s = r.classes, a = +!!t.settings.peek, l = o + a, u = i.slice(0, l), c = i.slice(-l), f = 0; f < Math.max(1, Math.floor(o / i.length)); f++) {
                            for (var d = 0; d < u.length; d++) {
                                var h = u[d].cloneNode(!0);
                                h.classList.add(s.cloneSlide), n.push(h)
                            }
                            for (var p = 0; p < c.length; p++) {
                                var g = c[p].cloneNode(!0);
                                g.classList.add(s.cloneSlide), n.unshift(g)
                            }
                        }
                        return n
                    },
                    append: function() {
                        for (var t = this.items, n = e.Html, i = n.wrapper, r = n.slides, o = Math.floor(t.length / 2), s = t.slice(0, o).reverse(), a = t.slice(o, t.length), l = e.Sizes.slideWidth + "px", u = 0; u < a.length; u++) i.appendChild(a[u]);
                        for (var c = 0; c < s.length; c++) i.insertBefore(s[c], r[0]);
                        for (var f = 0; f < t.length; f++) t[f].style.width = l
                    },
                    remove: function() {
                        for (var t = this.items, n = 0; n < t.length; n++) e.Html.wrapper.removeChild(t[n])
                    }
                };
                return Ko(i, "grow", {
                    get: function() {
                        return (e.Sizes.slideWidth + e.Gaps.value) * i.items.length
                    }
                }), n.on("update", (function() {
                    i.remove(), i.mount(), i.append()
                })), n.on("build.before", (function() {
                    t.isType("carousel") && i.append()
                })), n.on("destroy", (function() {
                    i.remove()
                })), i
            },
            Resize: function(t, e, n) {
                var i = new ss,
                    r = {
                        mount: function() {
                            this.bind()
                        },
                        bind: function() {
                            i.on("resize", window, ns((function() {
                                n.emit("resize")
                            }), t.settings.throttle))
                        },
                        unbind: function() {
                            i.off("resize", window)
                        }
                    };
                return n.on("destroy", (function() {
                    r.unbind(), i.destroy()
                })), r
            },
            Build: function(t, e, n) {
                var i = {
                    mount: function() {
                        n.emit("build.before"), this.typeClass(), this.activeClass(), n.emit("build.after")
                    },
                    typeClass: function() {
                        e.Html.root.classList.add(t.settings.classes[t.settings.type])
                    },
                    activeClass: function() {
                        var n = t.settings.classes,
                            i = e.Html.slides[t.index];
                        i && (i.classList.add(n.activeSlide), rs(i).forEach((function(t) {
                            t.classList.remove(n.activeSlide)
                        })))
                    },
                    removeClasses: function() {
                        var n = t.settings.classes;
                        e.Html.root.classList.remove(n[t.settings.type]), e.Html.slides.forEach((function(t) {
                            t.classList.remove(n.activeSlide)
                        }))
                    }
                };
                return n.on(["destroy", "update"], (function() {
                    i.removeClasses()
                })), n.on(["resize", "update"], (function() {
                    i.mount()
                })), n.on("move.after", (function() {
                    i.activeClass()
                })), i
            },
            Run: function(t, e, n) {
                var i = {
                    mount: function() {
                        this._o = !1
                    },
                    make: function(i) {
                        var r = this;
                        t.disabled || (t.disable(), this.move = i, n.emit("run.before", this.move), this.calculate(), n.emit("run", this.move), e.Transition.after((function() {
                            r.isStart() && n.emit("run.start", r.move), r.isEnd() && n.emit("run.end", r.move), (r.isOffset("<") || r.isOffset(">")) && (r._o = !1, n.emit("run.offset", r.move)), n.emit("run.after", r.move), t.enable()
                        })))
                    },
                    calculate: function() {
                        var e = this.move,
                            n = this.length,
                            i = e.steps,
                            r = e.direction,
                            o = "number" == typeof Wo(i) && 0 !== Wo(i);
                        switch (r) {
                            case ">":
                                ">" === i ? t.index = n : this.isEnd() ? t.isType("slider") && !t.settings.rewind || (this._o = !0, t.index = 0) : o ? t.index += Math.min(n - t.index, -Wo(i)) : t.index++;
                                break;
                            case "<":
                                "<" === i ? t.index = 0 : this.isStart() ? t.isType("slider") && !t.settings.rewind || (this._o = !0, t.index = n) : o ? t.index -= Math.min(t.index, Wo(i)) : t.index--;
                                break;
                            case "=":
                                t.index = i;
                                break;
                            default:
                                Ho("Invalid direction pattern [" + r + i + "] has been used")
                        }
                    },
                    isStart: function() {
                        return 0 === t.index
                    },
                    isEnd: function() {
                        return t.index === this.length
                    },
                    isOffset: function(t) {
                        return this._o && this.move.direction === t
                    }
                };
                return Ko(i, "move", {
                    get: function() {
                        return this._m
                    },
                    set: function(t) {
                        var e = t.substr(1);
                        this._m = {
                            direction: t.substr(0, 1),
                            steps: e ? Wo(e) ? Wo(e) : e : 0
                        }
                    }
                }), Ko(i, "length", {
                    get: function() {
                        var n = t.settings,
                            i = e.Html.slides.length;
                        return t.isType("slider") && "center" !== n.focusAt && n.bound ? i - 1 - (Wo(n.perView) - 1) + Wo(n.focusAt) : i - 1
                    }
                }), Ko(i, "offset", {
                    get: function() {
                        return this._o
                    }
                }), i
            },
            Swipe: function(t, e, n) {
                var i = new ss,
                    r = 0,
                    o = 0,
                    s = 0,
                    a = !1,
                    l = !!ms && {
                        passive: !0
                    },
                    u = {
                        mount: function() {
                            this.bindSwipeStart()
                        },
                        start: function(e) {
                            if (!a && !t.disabled) {
                                this.disable();
                                var i = this.touches(e);
                                r = null, o = Wo(i.pageX), s = Wo(i.pageY), this.bindSwipeMove(), this.bindSwipeEnd(), n.emit("swipe.start")
                            }
                        },
                        move: function(i) {
                            if (!t.disabled) {
                                var a = t.settings,
                                    l = a.touchAngle,
                                    u = a.touchRatio,
                                    c = a.classes,
                                    f = this.touches(i),
                                    d = Wo(f.pageX) - o,
                                    h = Wo(f.pageY) - s,
                                    p = Math.abs(d << 2),
                                    g = Math.abs(h << 2),
                                    m = Math.sqrt(p + g),
                                    v = Math.sqrt(g);
                                if (!(180 * (r = Math.asin(v / m)) / Math.PI < l)) return !1;
                                i.stopPropagation(), e.Move.make(d * parseFloat(u)), e.Html.root.classList.add(c.dragging), n.emit("swipe.move")
                            }
                        },
                        end: function(i) {
                            if (!t.disabled) {
                                var s = t.settings,
                                    a = this.touches(i),
                                    l = this.threshold(i),
                                    u = a.pageX - o,
                                    c = 180 * r / Math.PI,
                                    f = Math.round(u / e.Sizes.slideWidth);
                                this.enable(), u > l && c < s.touchAngle ? (s.perTouch && (f = Math.min(f, Wo(s.perTouch))), e.Direction.is("rtl") && (f = -f), e.Run.make(e.Direction.resolve("<" + f))) : u < -l && c < s.touchAngle ? (s.perTouch && (f = Math.max(f, -Wo(s.perTouch))), e.Direction.is("rtl") && (f = -f), e.Run.make(e.Direction.resolve(">" + f))) : e.Move.make(), e.Html.root.classList.remove(s.classes.dragging), this.unbindSwipeMove(), this.unbindSwipeEnd(), n.emit("swipe.end")
                            }
                        },
                        bindSwipeStart: function() {
                            var n = this,
                                r = t.settings;
                            r.swipeThreshold && i.on(vs[0], e.Html.wrapper, (function(t) {
                                n.start(t)
                            }), l), r.dragThreshold && i.on(vs[1], e.Html.wrapper, (function(t) {
                                n.start(t)
                            }), l)
                        },
                        unbindSwipeStart: function() {
                            i.off(vs[0], e.Html.wrapper, l), i.off(vs[1], e.Html.wrapper, l)
                        },
                        bindSwipeMove: function() {
                            var n = this;
                            i.on(ys, e.Html.wrapper, ns((function(t) {
                                n.move(t)
                            }), t.settings.throttle), l)
                        },
                        unbindSwipeMove: function() {
                            i.off(ys, e.Html.wrapper, l)
                        },
                        bindSwipeEnd: function() {
                            var t = this;
                            i.on(bs, e.Html.wrapper, (function(e) {
                                t.end(e)
                            }))
                        },
                        unbindSwipeEnd: function() {
                            i.off(bs, e.Html.wrapper)
                        },
                        touches: function(t) {
                            return xs.indexOf(t.type) > -1 ? t : t.touches[0] || t.changedTouches[0]
                        },
                        threshold: function(e) {
                            var n = t.settings;
                            return xs.indexOf(e.type) > -1 ? n.dragThreshold : n.swipeThreshold
                        },
                        enable: function() {
                            return a = !1, e.Transition.enable(), this
                        },
                        disable: function() {
                            return a = !0, e.Transition.disable(), this
                        }
                    };
                return n.on("build.after", (function() {
                    e.Html.root.classList.add(t.settings.classes.swipeable)
                })), n.on("destroy", (function() {
                    u.unbindSwipeStart(), u.unbindSwipeMove(), u.unbindSwipeEnd(), i.destroy()
                })), u
            },
            Images: function(t, e, n) {
                var i = new ss,
                    r = {
                        mount: function() {
                            this.bind()
                        },
                        bind: function() {
                            i.on("dragstart", e.Html.wrapper, this.dragstart)
                        },
                        unbind: function() {
                            i.off("dragstart", e.Html.wrapper)
                        },
                        dragstart: function(t) {
                            t.preventDefault()
                        }
                    };
                return n.on("destroy", (function() {
                    r.unbind(), i.destroy()
                })), r
            },
            Anchors: function(t, e, n) {
                var i = new ss,
                    r = !1,
                    o = !1,
                    s = {
                        mount: function() {
                            this._a = e.Html.wrapper.querySelectorAll("a"), this.bind()
                        },
                        bind: function() {
                            i.on("click", e.Html.wrapper, this.click)
                        },
                        unbind: function() {
                            i.off("click", e.Html.wrapper)
                        },
                        click: function(t) {
                            o && (t.stopPropagation(), t.preventDefault())
                        },
                        detach: function() {
                            if (o = !0, !r) {
                                for (var t = 0; t < this.items.length; t++) this.items[t].draggable = !1, this.items[t].setAttribute("data-href", this.items[t].getAttribute("href")), this.items[t].removeAttribute("href");
                                r = !0
                            }
                            return this
                        },
                        attach: function() {
                            if (o = !1, r) {
                                for (var t = 0; t < this.items.length; t++) this.items[t].draggable = !0, this.items[t].setAttribute("href", this.items[t].getAttribute("data-href"));
                                r = !1
                            }
                            return this
                        }
                    };
                return Ko(s, "items", {
                    get: function() {
                        return s._a
                    }
                }), n.on("swipe.move", (function() {
                    s.detach()
                })), n.on("swipe.end", (function() {
                    e.Transition.after((function() {
                        s.attach()
                    }))
                })), n.on("destroy", (function() {
                    s.attach(), s.unbind(), i.destroy()
                })), s
            },
            Controls: function(t, e, n) {
                var i = new ss,
                    r = !!ms && {
                        passive: !0
                    },
                    o = {
                        mount: function() {
                            this._n = e.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]'), this._c = e.Html.root.querySelectorAll('[data-glide-el^="controls"]'), this.addBindings()
                        },
                        setActive: function() {
                            for (var t = 0; t < this._n.length; t++) this.addClass(this._n[t].children)
                        },
                        removeActive: function() {
                            for (var t = 0; t < this._n.length; t++) this.removeClass(this._n[t].children)
                        },
                        addClass: function(e) {
                            var n = t.settings,
                                i = e[t.index];
                            i && (i.classList.add(n.classes.activeNav), rs(i).forEach((function(t) {
                                t.classList.remove(n.classes.activeNav)
                            })))
                        },
                        removeClass: function(e) {
                            var n = e[t.index];
                            n && n.classList.remove(t.settings.classes.activeNav)
                        },
                        addBindings: function() {
                            for (var t = 0; t < this._c.length; t++) this.bind(this._c[t].children)
                        },
                        removeBindings: function() {
                            for (var t = 0; t < this._c.length; t++) this.unbind(this._c[t].children)
                        },
                        bind: function(t) {
                            for (var e = 0; e < t.length; e++) i.on("click", t[e], this.click), i.on("touchstart", t[e], this.click, r)
                        },
                        unbind: function(t) {
                            for (var e = 0; e < t.length; e++) i.off(["click", "touchstart"], t[e])
                        },
                        click: function(t) {
                            t.preventDefault(), e.Run.make(e.Direction.resolve(t.currentTarget.getAttribute("data-glide-dir")))
                        }
                    };
                return Ko(o, "items", {
                    get: function() {
                        return o._c
                    }
                }), n.on(["mount.after", "move.after"], (function() {
                    o.setActive()
                })), n.on("destroy", (function() {
                    o.removeBindings(), o.removeActive(), i.destroy()
                })), o
            },
            Keyboard: function(t, e, n) {
                var i = new ss,
                    r = {
                        mount: function() {
                            t.settings.keyboard && this.bind()
                        },
                        bind: function() {
                            i.on("keyup", document, this.press)
                        },
                        unbind: function() {
                            i.off("keyup", document)
                        },
                        press: function(t) {
                            39 === t.keyCode && e.Run.make(e.Direction.resolve(">")), 37 === t.keyCode && e.Run.make(e.Direction.resolve("<"))
                        }
                    };
                return n.on(["destroy", "update"], (function() {
                    r.unbind()
                })), n.on("update", (function() {
                    r.mount()
                })), n.on("destroy", (function() {
                    i.destroy()
                })), r
            },
            Autoplay: function(t, e, n) {
                var i = new ss,
                    r = {
                        mount: function() {
                            this.start(), t.settings.hoverpause && this.bind()
                        },
                        start: function() {
                            var n = this;
                            t.settings.autoplay && Uo(this._i) && (this._i = setInterval((function() {
                                n.stop(), e.Run.make(">"), n.start()
                            }), this.time))
                        },
                        stop: function() {
                            this._i = clearInterval(this._i)
                        },
                        bind: function() {
                            var t = this;
                            i.on("mouseover", e.Html.root, (function() {
                                t.stop()
                            })), i.on("mouseout", e.Html.root, (function() {
                                t.start()
                            }))
                        },
                        unbind: function() {
                            i.off(["mouseover", "mouseout"], e.Html.root)
                        }
                    };
                return Ko(r, "time", {
                    get: function() {
                        var n = e.Html.slides[t.index].getAttribute("data-glide-autoplay");
                        return Wo(n || t.settings.autoplay)
                    }
                }), n.on(["destroy", "update"], (function() {
                    r.unbind()
                })), n.on(["run.before", "pause", "destroy", "swipe.start", "update"], (function() {
                    r.stop()
                })), n.on(["run.after", "play", "swipe.end"], (function() {
                    r.start()
                })), n.on("update", (function() {
                    r.mount()
                })), n.on("destroy", (function() {
                    i.destroy()
                })), r
            },
            Breakpoints: function(t, e, n) {
                var i = new ss,
                    r = t.settings,
                    o = ws(r.breakpoints),
                    s = zo({}, r),
                    a = {
                        match: function(t) {
                            if (void 0 !== window.matchMedia)
                                for (var e in t)
                                    if (t.hasOwnProperty(e) && window.matchMedia("(max-width: " + e + "px)").matches) return t[e];
                            return s
                        }
                    };
                return zo(r, a.match(o)), i.on("resize", window, ns((function() {
                    t.settings = Zo(r, a.match(o))
                }), t.settings.throttle)), n.on("update", (function() {
                    o = ws(o), s = zo({}, r)
                })), n.on("destroy", (function() {
                    i.off("resize", window)
                })), a
            }
        },
        Ts = function(t) {
            function e() {
                return Io(this, e), Bo(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(e, t), Fo(e, [{
                key: "mount",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return qo(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "mount", this).call(this, zo({}, _s, t))
                }
            }]), e
        }(ts),
        Cs = window,
        Ss = Cs.requestAnimationFrame || Cs.webkitRequestAnimationFrame || Cs.mozRequestAnimationFrame || Cs.msRequestAnimationFrame || function(t) {
            return setTimeout(t, 16)
        },
        ks = window,
        As = ks.cancelAnimationFrame || ks.mozCancelAnimationFrame || function(t) {
            clearTimeout(t)
        };

    function Ps() {
        for (var t, e, n, i = arguments[0] || {}, r = 1, o = arguments.length; r < o; r++)
            if (null !== (t = arguments[r]))
                for (e in t) i !== (n = t[e]) && void 0 !== n && (i[e] = n);
        return i
    }

    function Es(t) {
        return ["true", "false"].indexOf(t) >= 0 ? JSON.parse(t) : t
    }

    function Ms(t, e, n, i) {
        if (i) try {
            t.setItem(e, n)
        } catch (t) {}
        return n
    }

    function Ls() {
        var t = document,
            e = t.body;
        return e || ((e = t.createElement("body")).fake = !0), e
    }
    var Ds = document.documentElement;

    function Os(t) {
        var e = "";
        return t.fake && (e = Ds.style.overflow, t.style.background = "", t.style.overflow = Ds.style.overflow = "hidden", Ds.appendChild(t)), e
    }

    function $s(t, e) {
        t.fake && (t.remove(), Ds.style.overflow = e, Ds.offsetHeight)
    }

    function Rs(t, e, n, i) {
        "insertRule" in t ? t.insertRule(e + "{" + n + "}", i) : t.addRule(e, n, i)
    }

    function Ns(t) {
        return ("insertRule" in t ? t.cssRules : t.rules).length
    }

    function Hs(t, e, n) {
        for (var i = 0, r = t.length; i < r; i++) e.call(n, t[i], i)
    }
    var js = "classList" in document.createElement("_"),
        Is = js ? function(t, e) {
            return t.classList.contains(e)
        } : function(t, e) {
            return t.className.indexOf(e) >= 0
        },
        Fs = js ? function(t, e) {
            Is(t, e) || t.classList.add(e)
        } : function(t, e) {
            Is(t, e) || (t.className += " " + e)
        },
        zs = js ? function(t, e) {
            Is(t, e) && t.classList.remove(e)
        } : function(t, e) {
            Is(t, e) && (t.className = t.className.replace(e, ""))
        };

    function qs(t, e) {
        return t.hasAttribute(e)
    }

    function Bs(t, e) {
        return t.getAttribute(e)
    }

    function Ws(t) {
        return void 0 !== t.item
    }

    function Xs(t, e) {
        if (t = Ws(t) || t instanceof Array ? t : [t], "[object Object]" === Object.prototype.toString.call(e))
            for (var n = t.length; n--;)
                for (var i in e) t[n].setAttribute(i, e[i])
    }

    function Ys(t, e) {
        t = Ws(t) || t instanceof Array ? t : [t];
        for (var n = (e = e instanceof Array ? e : [e]).length, i = t.length; i--;)
            for (var r = n; r--;) t[i].removeAttribute(e[r])
    }

    function Vs(t) {
        for (var e = [], n = 0, i = t.length; n < i; n++) e.push(t[n]);
        return e
    }

    function Us(t, e) {
        "none" !== t.style.display && (t.style.display = "none")
    }

    function Gs(t, e) {
        "none" === t.style.display && (t.style.display = "")
    }

    function Qs(t) {
        return "none" !== window.getComputedStyle(t).display
    }

    function Ks(t) {
        if ("string" == typeof t) {
            var e = [t],
                n = t.charAt(0).toUpperCase() + t.substr(1);
            ["Webkit", "Moz", "ms", "O"].forEach((function(i) {
                "ms" === i && "transform" !== t || e.push(i + n)
            })), t = e
        }
        for (var i = document.createElement("fakeelement"), r = (t.length, 0); r < t.length; r++) {
            var o = t[r];
            if (void 0 !== i.style[o]) return o
        }
        return !1
    }

    function Zs(t, e) {
        var n = !1;
        return /^Webkit/.test(t) ? n = "webkit" + e + "End" : /^O/.test(t) ? n = "o" + e + "End" : t && (n = e.toLowerCase() + "end"), n
    }
    var Js = !1;
    try {
        var ta = Object.defineProperty({}, "passive", {
            get: function() {
                Js = !0
            }
        });
        window.addEventListener("test", null, ta)
    } catch (t) {}
    var ea = !!Js && {
        passive: !0
    };

    function na(t, e, n) {
        for (var i in e) {
            var r = ["touchstart", "touchmove"].indexOf(i) >= 0 && !n && ea;
            t.addEventListener(i, e[i], r)
        }
    }

    function ia(t, e) {
        for (var n in e) {
            var i = ["touchstart", "touchmove"].indexOf(n) >= 0 && ea;
            t.removeEventListener(n, e[n], i)
        }
    }

    function ra() {
        return {
            topics: {},
            on: function(t, e) {
                this.topics[t] = this.topics[t] || [], this.topics[t].push(e)
            },
            off: function(t, e) {
                if (this.topics[t])
                    for (var n = 0; n < this.topics[t].length; n++)
                        if (this.topics[t][n] === e) {
                            this.topics[t].splice(n, 1);
                            break
                        }
            },
            emit: function(t, e) {
                e.type = t, this.topics[t] && this.topics[t].forEach((function(n) {
                    n(e, t)
                }))
            }
        }
    }
    Object.keys || (Object.keys = function(t) {
        var e = [];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
        return e
    }), "remove" in Element.prototype || (Element.prototype.remove = function() {
        this.parentNode && this.parentNode.removeChild(this)
    });
    var oa = function(t) {
        t = Ps({
            container: ".slider",
            mode: "carousel",
            axis: "horizontal",
            items: 1,
            gutter: 0,
            edgePadding: 0,
            fixedWidth: !1,
            autoWidth: !1,
            viewportMax: !1,
            slideBy: 1,
            center: !1,
            controls: !0,
            controlsPosition: "top",
            controlsText: ["prev", "next"],
            controlsContainer: !1,
            prevButton: !1,
            nextButton: !1,
            nav: !0,
            navPosition: "top",
            navContainer: !1,
            navAsThumbnails: !1,
            arrowKeys: !1,
            speed: 300,
            autoplay: !1,
            autoplayPosition: "top",
            autoplayTimeout: 5e3,
            autoplayDirection: "forward",
            autoplayText: ["start", "stop"],
            autoplayHoverPause: !1,
            autoplayButton: !1,
            autoplayButtonOutput: !0,
            autoplayResetOnVisibility: !0,
            animateIn: "tns-fadeIn",
            animateOut: "tns-fadeOut",
            animateNormal: "tns-normal",
            animateDelay: !1,
            loop: !0,
            rewind: !1,
            autoHeight: !1,
            responsive: !1,
            lazyload: !1,
            lazyloadSelector: ".tns-lazy-img",
            touch: !0,
            mouseDrag: !1,
            swipeAngle: 15,
            nested: !1,
            preventActionWhenRunning: !1,
            preventScrollOnTouch: !1,
            freezable: !0,
            onInit: !1,
            useLocalStorage: !0,
            nonce: !1
        }, t || {});
        var e = document,
            n = window,
            i = {
                ENTER: 13,
                SPACE: 32,
                LEFT: 37,
                RIGHT: 39
            },
            r = {},
            o = t.useLocalStorage;
        if (o) {
            var s = navigator.userAgent,
                a = new Date;
            try {
                (r = n.localStorage) ? (r.setItem(a, a), o = r.getItem(a) == a, r.removeItem(a)) : o = !1, o || (r = {})
            } catch (t) {
                o = !1
            }
            o && (r.tnsApp && r.tnsApp !== s && ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach((function(t) {
                r.removeItem(t)
            })), localStorage.tnsApp = s)
        }
        var l = r.tC ? Es(r.tC) : Ms(r, "tC", function() {
                var t = document,
                    e = Ls(),
                    n = Os(e),
                    i = t.createElement("div"),
                    r = !1;
                e.appendChild(i);
                try {
                    for (var o, s = "(10px * 10)", a = ["calc" + s, "-moz-calc" + s, "-webkit-calc" + s], l = 0; l < 3; l++)
                        if (o = a[l], i.style.width = o, 100 === i.offsetWidth) {
                            r = o.replace(s, "");
                            break
                        }
                } catch (t) {}
                return e.fake ? $s(e, n) : i.remove(), r
            }(), o),
            u = r.tPL ? Es(r.tPL) : Ms(r, "tPL", function() {
                var t, e = document,
                    n = Ls(),
                    i = Os(n),
                    r = e.createElement("div"),
                    o = e.createElement("div"),
                    s = "";
                r.className = "tns-t-subp2", o.className = "tns-t-ct";
                for (var a = 0; a < 70; a++) s += "<div></div>";
                return o.innerHTML = s, r.appendChild(o), n.appendChild(r), t = Math.abs(r.getBoundingClientRect().left - o.children[67].getBoundingClientRect().left) < 2, n.fake ? $s(n, i) : r.remove(), t
            }(), o),
            c = r.tMQ ? Es(r.tMQ) : Ms(r, "tMQ", function() {
                if (window.matchMedia || window.msMatchMedia) return !0;
                var t, e = document,
                    n = Ls(),
                    i = Os(n),
                    r = e.createElement("div"),
                    o = e.createElement("style"),
                    s = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}";
                return o.type = "text/css", r.className = "tns-mq-test", n.appendChild(o), n.appendChild(r), o.styleSheet ? o.styleSheet.cssText = s : o.appendChild(e.createTextNode(s)), t = window.getComputedStyle ? window.getComputedStyle(r).position : r.currentStyle.position, n.fake ? $s(n, i) : r.remove(), "absolute" === t
            }(), o),
            f = r.tTf ? Es(r.tTf) : Ms(r, "tTf", Ks("transform"), o),
            d = r.t3D ? Es(r.t3D) : Ms(r, "t3D", function(t) {
                if (!t) return !1;
                if (!window.getComputedStyle) return !1;
                var e, n = document,
                    i = Ls(),
                    r = Os(i),
                    o = n.createElement("p"),
                    s = t.length > 9 ? "-" + t.slice(0, -9).toLowerCase() + "-" : "";
                return s += "transform", i.insertBefore(o, null), o.style[t] = "translate3d(1px,1px,1px)", e = window.getComputedStyle(o).getPropertyValue(s), i.fake ? $s(i, r) : o.remove(), void 0 !== e && e.length > 0 && "none" !== e
            }(f), o),
            h = r.tTDu ? Es(r.tTDu) : Ms(r, "tTDu", Ks("transitionDuration"), o),
            p = r.tTDe ? Es(r.tTDe) : Ms(r, "tTDe", Ks("transitionDelay"), o),
            g = r.tADu ? Es(r.tADu) : Ms(r, "tADu", Ks("animationDuration"), o),
            m = r.tADe ? Es(r.tADe) : Ms(r, "tADe", Ks("animationDelay"), o),
            v = r.tTE ? Es(r.tTE) : Ms(r, "tTE", Zs(h, "Transition"), o),
            y = r.tAE ? Es(r.tAE) : Ms(r, "tAE", Zs(g, "Animation"), o),
            b = n.console && "function" == typeof n.console.warn,
            x = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"],
            w = {};
        if (x.forEach((function(n) {
                if ("string" == typeof t[n]) {
                    var i = t[n],
                        r = e.querySelector(i);
                    if (w[n] = i, !r || !r.nodeName) return void(b && console.warn("Can't find", t[n]));
                    t[n] = r
                }
            })), !(t.container.children.length < 1)) {
            var _ = t.responsive,
                T = t.nested,
                C = "carousel" === t.mode;
            if (_) {
                0 in _ && (t = Ps(t, _[0]), delete _[0]);
                var S = {};
                for (var k in _) {
                    var A = _[k];
                    A = "number" == typeof A ? {
                        items: A
                    } : A, S[k] = A
                }
                _ = S, S = null
            }
            if (C || function t(e) {
                    for (var n in e) C || ("slideBy" === n && (e[n] = "page"), "edgePadding" === n && (e[n] = !1), "autoHeight" === n && (e[n] = !1)), "responsive" === n && t(e[n])
                }(t), !C) {
                t.axis = "horizontal", t.slideBy = "page", t.edgePadding = !1;
                var P = t.animateIn,
                    E = t.animateOut,
                    M = t.animateDelay,
                    L = t.animateNormal
            }
            var D, O, $ = "horizontal" === t.axis,
                R = e.createElement("div"),
                N = e.createElement("div"),
                H = t.container,
                j = H.parentNode,
                I = H.outerHTML,
                F = H.children,
                z = F.length,
                q = rn(),
                B = !1;
            _ && Cn(), C && (H.className += " tns-vpfix");
            var W, X, Y, V, U, G, Q, K, Z, J = t.autoWidth,
                tt = ln("fixedWidth"),
                et = ln("edgePadding"),
                nt = ln("gutter"),
                it = sn(),
                rt = ln("center"),
                ot = J ? 1 : Math.floor(ln("items")),
                st = ln("slideBy"),
                at = t.viewportMax || t.fixedWidthViewportWidth,
                lt = ln("arrowKeys"),
                ut = ln("speed"),
                ct = t.rewind,
                ft = !ct && t.loop,
                dt = ln("autoHeight"),
                ht = ln("controls"),
                pt = ln("controlsText"),
                gt = ln("nav"),
                mt = ln("touch"),
                vt = ln("mouseDrag"),
                yt = ln("autoplay"),
                bt = ln("autoplayTimeout"),
                xt = ln("autoplayText"),
                wt = ln("autoplayHoverPause"),
                _t = ln("autoplayResetOnVisibility"),
                Tt = (Q = null, K = ln("nonce"), Z = document.createElement("style"), Q && Z.setAttribute("media", Q), K && Z.setAttribute("nonce", K), document.querySelector("head").appendChild(Z), Z.sheet ? Z.sheet : Z.styleSheet),
                Ct = t.lazyload,
                St = t.lazyloadSelector,
                kt = [],
                At = ft ? (U = function() {
                    if (J || tt && !at) return z - 1;
                    var e = tt ? "fixedWidth" : "items",
                        n = [];
                    if ((tt || t[e] < z) && n.push(t[e]), _)
                        for (var i in _) {
                            var r = _[i][e];
                            r && (tt || r < z) && n.push(r)
                        }
                    return n.length || n.push(0), Math.ceil(tt ? at / Math.min.apply(null, n) : Math.max.apply(null, n))
                }(), G = C ? Math.ceil((5 * U - z) / 2) : 4 * U - z, G = Math.max(U, G), an("edgePadding") ? G + 1 : G) : 0,
                Pt = C ? z + 2 * At : z + At,
                Et = !(!tt && !J || ft),
                Mt = tt ? Qn() : null,
                Lt = !C || !ft,
                Dt = $ ? "left" : "top",
                Ot = "",
                $t = "",
                Rt = tt ? function() {
                    return rt && !ft ? z - 1 : Math.ceil(-Mt / (tt + nt))
                } : J ? function() {
                    for (var t = 0; t < Pt; t++)
                        if (W[t] >= -Mt) return t
                } : function() {
                    return rt && C && !ft ? z - 1 : ft || C ? Math.max(0, Pt - Math.ceil(ot)) : Pt - 1
                },
                Nt = tn(ln("startIndex")),
                Ht = Nt,
                jt = (Je(), 0),
                It = J ? null : Rt(),
                Ft = t.preventActionWhenRunning,
                zt = t.swipeAngle,
                qt = !zt || "?",
                Bt = !1,
                Wt = t.onInit,
                Xt = new ra,
                Yt = " tns-slider tns-" + t.mode,
                Vt = H.id || (V = window.tnsId, window.tnsId = V ? V + 1 : 1, "tns" + window.tnsId),
                Ut = ln("disable"),
                Gt = !1,
                Qt = t.freezable,
                Kt = !(!Qt || J) && Tn(),
                Zt = !1,
                Jt = {
                    click: oi,
                    keydown: function(t) {
                        t = hi(t);
                        var e = [i.LEFT, i.RIGHT].indexOf(t.keyCode);
                        e >= 0 && (0 === e ? xe.disabled || oi(t, -1) : we.disabled || oi(t, 1))
                    }
                },
                te = {
                    click: function(t) {
                        if (Bt) {
                            if (Ft) return;
                            ii()
                        }
                        var e = pi(t = hi(t));
                        for (; e !== Se && !qs(e, "data-nav");) e = e.parentNode;
                        if (qs(e, "data-nav")) {
                            var n = Ee = Number(Bs(e, "data-nav")),
                                i = tt || J ? n * z / Ae : n * ot;
                            ri(le ? n : Math.min(Math.ceil(i), z - 1), t), Me === n && (Ne && ci(), Ee = -1)
                        }
                    },
                    keydown: function(t) {
                        t = hi(t);
                        var n = e.activeElement;
                        if (!qs(n, "data-nav")) return;
                        var r = [i.LEFT, i.RIGHT, i.ENTER, i.SPACE].indexOf(t.keyCode),
                            o = Number(Bs(n, "data-nav"));
                        r >= 0 && (0 === r ? o > 0 && di(Ce[o - 1]) : 1 === r ? o < Ae - 1 && di(Ce[o + 1]) : (Ee = o, ri(o, t)))
                    }
                },
                ee = {
                    mouseover: function() {
                        Ne && (ai(), He = !0)
                    },
                    mouseout: function() {
                        He && (si(), He = !1)
                    }
                },
                ne = {
                    visibilitychange: function() {
                        e.hidden ? Ne && (ai(), Ie = !0) : Ie && (si(), Ie = !1)
                    }
                },
                ie = {
                    keydown: function(t) {
                        t = hi(t);
                        var e = [i.LEFT, i.RIGHT].indexOf(t.keyCode);
                        e >= 0 && oi(t, 0 === e ? -1 : 1)
                    }
                },
                re = {
                    touchstart: yi,
                    touchmove: bi,
                    touchend: xi,
                    touchcancel: xi
                },
                oe = {
                    mousedown: yi,
                    mousemove: bi,
                    mouseup: xi,
                    mouseleave: xi
                },
                se = an("controls"),
                ae = an("nav"),
                le = !!J || t.navAsThumbnails,
                ue = an("autoplay"),
                ce = an("touch"),
                fe = an("mouseDrag"),
                de = "tns-slide-active",
                he = "tns-complete",
                pe = {
                    load: function(t) {
                        On(pi(t))
                    },
                    error: function(t) {
                        e = pi(t), Fs(e, "failed"), $n(e);
                        var e
                    }
                },
                ge = "force" === t.preventScrollOnTouch;
            if (se) var me, ve, ye = t.controlsContainer,
                be = t.controlsContainer ? t.controlsContainer.outerHTML : "",
                xe = t.prevButton,
                we = t.nextButton,
                _e = t.prevButton ? t.prevButton.outerHTML : "",
                Te = t.nextButton ? t.nextButton.outerHTML : "";
            if (ae) var Ce, Se = t.navContainer,
                ke = t.navContainer ? t.navContainer.outerHTML : "",
                Ae = J ? z : _i(),
                Pe = 0,
                Ee = -1,
                Me = nn(),
                Le = Me,
                De = "tns-nav-active",
                Oe = "Carousel Page ",
                $e = " (Current Slide)";
            if (ue) var Re, Ne, He, je, Ie, Fe = "forward" === t.autoplayDirection ? 1 : -1,
                ze = t.autoplayButton,
                qe = t.autoplayButton ? t.autoplayButton.outerHTML : "",
                Be = ["<span class='tns-visually-hidden'>", " animation</span>"];
            if (ce || fe) var We, Xe, Ye = {},
                Ve = {},
                Ue = !1,
                Ge = $ ? function(t, e) {
                    return t.x - e.x
                } : function(t, e) {
                    return t.y - e.y
                };
            J || Ze(Ut || Kt), f && (Dt = f, Ot = "translate", d ? (Ot += $ ? "3d(" : "3d(0px, ", $t = $ ? ", 0px, 0px)" : ", 0px)") : (Ot += $ ? "X(" : "Y(", $t = ")")), C && (H.className = H.className.replace("tns-vpfix", "")),
                function() {
                    an("gutter");
                    R.className = "tns-outer", N.className = "tns-inner", R.id = Vt + "-ow", N.id = Vt + "-iw", "" === H.id && (H.id = Vt);
                    Yt += u || J ? " tns-subpixel" : " tns-no-subpixel", Yt += l ? " tns-calc" : " tns-no-calc", J && (Yt += " tns-autowidth");
                    Yt += " tns-" + t.axis, H.className += Yt, C ? ((D = e.createElement("div")).id = Vt + "-mw", D.className = "tns-ovh", R.appendChild(D), D.appendChild(N)) : R.appendChild(N);
                    if (dt) {
                        (D || N).className += " tns-ah"
                    }
                    if (j.insertBefore(R, H), N.appendChild(H), Hs(F, (function(t, e) {
                            Fs(t, "tns-item"), t.id || (t.id = Vt + "-item" + e), !C && L && Fs(t, L), Xs(t, {
                                "aria-hidden": "true",
                                tabindex: "-1"
                            })
                        })), At) {
                        for (var n = e.createDocumentFragment(), i = e.createDocumentFragment(), r = At; r--;) {
                            var o = r % z,
                                s = F[o].cloneNode(!0);
                            if (Fs(s, "tns-slide-cloned"), Ys(s, "id"), i.insertBefore(s, i.firstChild), C) {
                                var a = F[z - 1 - o].cloneNode(!0);
                                Fs(a, "tns-slide-cloned"), Ys(a, "id"), n.appendChild(a)
                            }
                        }
                        H.insertBefore(n, H.firstChild), H.appendChild(i), F = H.children
                    }
                }(),
                function() {
                    if (!C)
                        for (var e = Nt, i = Nt + Math.min(z, ot); e < i; e++) {
                            var r = F[e];
                            r.style.left = 100 * (e - Nt) / ot + "%", Fs(r, P), zs(r, L)
                        }
                    $ && (u || J ? (Rs(Tt, "#" + Vt + " > .tns-item", "font-size:" + n.getComputedStyle(F[0]).fontSize + ";", Ns(Tt)), Rs(Tt, "#" + Vt, "font-size:0;", Ns(Tt))) : C && Hs(F, (function(t, e) {
                        t.style.marginLeft = function(t) {
                            return l ? l + "(" + 100 * t + "% / " + Pt + ")" : 100 * t / Pt + "%"
                        }(e)
                    })));
                    if (c) {
                        if (h) {
                            var o = D && t.autoHeight ? pn(t.speed) : "";
                            Rs(Tt, "#" + Vt + "-mw", o, Ns(Tt))
                        }
                        o = un(t.edgePadding, t.gutter, t.fixedWidth, t.speed, t.autoHeight), Rs(Tt, "#" + Vt + "-iw", o, Ns(Tt)), C && (o = $ && !J ? "width:" + cn(t.fixedWidth, t.gutter, t.items) + ";" : "", h && (o += pn(ut)), Rs(Tt, "#" + Vt, o, Ns(Tt))), o = $ && !J ? fn(t.fixedWidth, t.gutter, t.items) : "", t.gutter && (o += dn(t.gutter)), C || (h && (o += pn(ut)), g && (o += gn(ut))), o && Rs(Tt, "#" + Vt + " > .tns-item", o, Ns(Tt))
                    } else {
                        C && dt && (D.style[h] = ut / 1e3 + "s"), N.style.cssText = un(et, nt, tt, dt), C && $ && !J && (H.style.width = cn(tt, nt, ot));
                        o = $ && !J ? fn(tt, nt, ot) : "";
                        nt && (o += dn(nt)), o && Rs(Tt, "#" + Vt + " > .tns-item", o, Ns(Tt))
                    }
                    if (_ && c)
                        for (var s in _) {
                            s = parseInt(s);
                            var a = _[s],
                                f = (o = "", ""),
                                d = "",
                                p = "",
                                m = "",
                                v = J ? null : ln("items", s),
                                y = ln("fixedWidth", s),
                                b = ln("speed", s),
                                x = ln("edgePadding", s),
                                w = ln("autoHeight", s),
                                T = ln("gutter", s);
                            h && D && ln("autoHeight", s) && "speed" in a && (f = "#" + Vt + "-mw{" + pn(b) + "}"), ("edgePadding" in a || "gutter" in a) && (d = "#" + Vt + "-iw{" + un(x, T, y, b, w) + "}"), C && $ && !J && ("fixedWidth" in a || "items" in a || tt && "gutter" in a) && (p = "width:" + cn(y, T, v) + ";"), h && "speed" in a && (p += pn(b)), p && (p = "#" + Vt + "{" + p + "}"), ("fixedWidth" in a || tt && "gutter" in a || !C && "items" in a) && (m += fn(y, T, v)), "gutter" in a && (m += dn(T)), !C && "speed" in a && (h && (m += pn(b)), g && (m += gn(b))), m && (m = "#" + Vt + " > .tns-item{" + m + "}"), (o = f + d + p + m) && Tt.insertRule("@media (min-width: " + s / 16 + "em) {" + o + "}", Tt.cssRules.length)
                        }
                }(), mn();
            var Qe = ft ? C ? function() {
                    var t = jt,
                        e = It;
                    t += st, e -= st, et ? (t += 1, e -= 1) : tt && (it + nt) % (tt + nt) && (e -= 1), At && (Nt > e ? Nt -= z : Nt < t && (Nt += z))
                } : function() {
                    if (Nt > It)
                        for (; Nt >= jt + z;) Nt -= z;
                    else if (Nt < jt)
                        for (; Nt <= It - z;) Nt += z
                } : function() {
                    Nt = Math.max(jt, Math.min(It, Nt))
                },
                Ke = C ? function() {
                    var t, e, n, i, r, o, s, a, l, u, c;
                    Un(H, ""), h || !ut ? (Jn(), ut && Qs(H) || ii()) : (t = H, e = Dt, n = Ot, i = $t, r = Kn(), o = ut, s = ii, a = Math.min(o, 10), l = r.indexOf("%") >= 0 ? "%" : "px", r = r.replace(l, ""), u = Number(t.style[e].replace(n, "").replace(i, "").replace(l, "")), c = (r - u) / o * a, setTimeout((function r() {
                        o -= a, u += c, t.style[e] = n + u + l + i, o > 0 ? setTimeout(r, a) : s()
                    }), a)), $ || wi()
                } : function() {
                    kt = [];
                    var t = {};
                    t[v] = t[y] = ii, ia(F[Ht], t), na(F[Nt], t), ti(Ht, P, E, !0), ti(Nt, L, P), v && y && ut && Qs(H) || ii()
                };
            return {
                version: "2.9.3",
                getInfo: Ci,
                events: Xt,
                goTo: ri,
                play: function() {
                    yt && !Ne && (ui(), je = !1)
                },
                pause: function() {
                    Ne && (ci(), je = !0)
                },
                isOn: B,
                updateSliderHeight: Fn,
                refresh: mn,
                destroy: function() {
                    if (Tt.disabled = !0, Tt.ownerNode && Tt.ownerNode.remove(), ia(n, {
                            resize: wn
                        }), lt && ia(e, ie), ye && ia(ye, Jt), Se && ia(Se, te), ia(H, ee), ia(H, ne), ze && ia(ze, {
                            click: fi
                        }), yt && clearInterval(Re), C && v) {
                        var i = {};
                        i[v] = ii, ia(H, i)
                    }
                    mt && ia(H, re), vt && ia(H, oe);
                    var r = [I, be, _e, Te, ke, qe];
                    for (var o in x.forEach((function(e, n) {
                            var i = "container" === e ? R : t[e];
                            if ("object" == typeof i && i) {
                                var o = !!i.previousElementSibling && i.previousElementSibling,
                                    s = i.parentNode;
                                i.outerHTML = r[n], t[e] = o ? o.nextElementSibling : s.firstElementChild
                            }
                        })), x = P = E = M = L = $ = R = N = H = j = I = F = z = O = q = J = tt = et = nt = it = ot = st = at = lt = ut = ct = ft = dt = Tt = Ct = W = kt = At = Pt = Et = Mt = Lt = Dt = Ot = $t = Rt = Nt = Ht = jt = It = zt = qt = Bt = Wt = Xt = Yt = Vt = Ut = Gt = Qt = Kt = Zt = Jt = te = ee = ne = ie = re = oe = se = ae = le = ue = ce = fe = de = he = pe = X = ht = pt = ye = be = xe = we = me = ve = gt = Se = ke = Ce = Ae = Pe = Ee = Me = Le = De = Oe = $e = yt = bt = Fe = xt = wt = ze = qe = _t = Be = Re = Ne = He = je = Ie = Ye = Ve = We = Ue = Xe = Ge = mt = vt = null, this) "rebuild" !== o && (this[o] = null);
                    B = !1
                },
                rebuild: function() {
                    return oa(Ps(t, w))
                }
            }
        }

        function Ze(t) {
            t && (ht = gt = mt = vt = lt = yt = wt = _t = !1)
        }

        function Je() {
            for (var t = C ? Nt - At : Nt; t < 0;) t += z;
            return t % z + 1
        }

        function tn(t) {
            return t = t ? Math.max(0, Math.min(ft ? z - 1 : z - ot, t)) : 0, C ? t + At : t
        }

        function en(t) {
            for (null == t && (t = Nt), C && (t -= At); t < 0;) t += z;
            return Math.floor(t % z)
        }

        function nn() {
            var t, e = en();
            return t = le ? e : tt || J ? Math.ceil((e + 1) * Ae / z - 1) : Math.floor(e / ot), !ft && C && Nt === It && (t = Ae - 1), t
        }

        function rn() {
            return n.innerWidth || e.documentElement.clientWidth || e.body.clientWidth
        }

        function on(t) {
            return "top" === t ? "afterbegin" : "beforeend"
        }

        function sn() {
            var t = et ? 2 * et - nt : 0;
            return function t(n) {
                if (null != n) {
                    var i, r, o = e.createElement("div");
                    return n.appendChild(o), r = (i = o.getBoundingClientRect()).right - i.left, o.remove(), r || t(n.parentNode)
                }
            }(j) - t
        }

        function an(e) {
            if (t[e]) return !0;
            if (_)
                for (var n in _)
                    if (_[n][e]) return !0;
            return !1
        }

        function ln(e, n) {
            if (null == n && (n = q), "items" === e && tt) return Math.floor((it + nt) / (tt + nt)) || 1;
            var i = t[e];
            if (_)
                for (var r in _) n >= parseInt(r) && e in _[r] && (i = _[r][e]);
            return "slideBy" === e && "page" === i && (i = ln("items")), C || "slideBy" !== e && "items" !== e || (i = Math.floor(i)), i
        }

        function un(t, e, n, i, r) {
            var o = "";
            if (void 0 !== t) {
                var s = t;
                e && (s -= e), o = $ ? "margin: 0 " + s + "px 0 " + t + "px;" : "margin: " + t + "px 0 " + s + "px 0;"
            } else if (e && !n) {
                var a = "-" + e + "px";
                o = "margin: 0 " + ($ ? a + " 0 0" : "0 " + a + " 0") + ";"
            }
            return !C && r && h && i && (o += pn(i)), o
        }

        function cn(t, e, n) {
            return t ? (t + e) * Pt + "px" : l ? l + "(" + 100 * Pt + "% / " + n + ")" : 100 * Pt / n + "%"
        }

        function fn(t, e, n) {
            var i;
            if (t) i = t + e + "px";
            else {
                C || (n = Math.floor(n));
                var r = C ? Pt : n;
                i = l ? l + "(100% / " + r + ")" : 100 / r + "%"
            }
            return i = "width:" + i, "inner" !== T ? i + ";" : i + " !important;"
        }

        function dn(t) {
            var e = "";
            !1 !== t && (e = ($ ? "padding-" : "margin-") + ($ ? "right" : "bottom") + ": " + t + "px;");
            return e
        }

        function hn(t, e) {
            var n = t.substring(0, t.length - e).toLowerCase();
            return n && (n = "-" + n + "-"), n
        }

        function pn(t) {
            return hn(h, 18) + "transition-duration:" + t / 1e3 + "s;"
        }

        function gn(t) {
            return hn(g, 17) + "animation-duration:" + t / 1e3 + "s;"
        }

        function mn() {
            if (an("autoHeight") || J || !$) {
                var t = H.querySelectorAll("img");
                Hs(t, (function(t) {
                    var e = t.src;
                    Ct || (e && e.indexOf("data:image") < 0 ? (t.src = "", na(t, pe), Fs(t, "loading"), t.src = e) : On(t))
                })), Ss((function() {
                    Hn(Vs(t), (function() {
                        X = !0
                    }))
                })), an("autoHeight") && (t = Rn(Nt, Math.min(Nt + ot - 1, Pt - 1))), Ct ? vn() : Ss((function() {
                    Hn(Vs(t), vn)
                }))
            } else C && Zn(), bn(), xn()
        }

        function vn() {
            if (J && z > 1) {
                var t = ft ? Nt : z - 1;
                ! function e() {
                    var n = F[t].getBoundingClientRect().left,
                        i = F[t - 1].getBoundingClientRect().right;
                    Math.abs(n - i) <= 1 ? yn() : setTimeout((function() {
                        e()
                    }), 16)
                }()
            } else yn()
        }

        function yn() {
            $ && !J || (zn(), J ? (Mt = Qn(), Qt && (Kt = Tn()), It = Rt(), Ze(Ut || Kt)) : wi()), C && Zn(), bn(), xn()
        }

        function bn() {
            if (qn(), R.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + Mn() + "</span>  of " + z + "</div>"), Y = R.querySelector(".tns-liveregion .current"), ue) {
                var e = yt ? "stop" : "start";
                ze ? Xs(ze, {
                    "data-action": e
                }) : t.autoplayButtonOutput && (R.insertAdjacentHTML(on(t.autoplayPosition), '<button type="button" data-action="' + e + '">' + Be[0] + e + Be[1] + xt[0] + "</button>"), ze = R.querySelector("[data-action]")), ze && na(ze, {
                    click: fi
                }), yt && (ui(), wt && na(H, ee), _t && na(H, ne))
            }
            if (ae) {
                if (Se) Xs(Se, {
                    "aria-label": "Carousel Pagination"
                }), Hs(Ce = Se.children, (function(t, e) {
                    Xs(t, {
                        "data-nav": e,
                        tabindex: "-1",
                        "aria-label": Oe + (e + 1),
                        "aria-controls": Vt
                    })
                }));
                else {
                    for (var n = "", i = le ? "" : 'style="display:none"', r = 0; r < z; r++) n += '<button type="button" data-nav="' + r + '" tabindex="-1" aria-controls="' + Vt + '" ' + i + ' aria-label="' + Oe + (r + 1) + '"></button>';
                    n = '<div class="tns-nav" aria-label="Carousel Pagination">' + n + "</div>", R.insertAdjacentHTML(on(t.navPosition), n), Se = R.querySelector(".tns-nav"), Ce = Se.children
                }
                if (Ti(), h) {
                    var o = h.substring(0, h.length - 18).toLowerCase(),
                        s = "transition: all " + ut / 1e3 + "s";
                    o && (s = "-" + o + "-" + s), Rs(Tt, "[aria-controls^=" + Vt + "-item]", s, Ns(Tt))
                }
                Xs(Ce[Me], {
                    "aria-label": Oe + (Me + 1) + $e
                }), Ys(Ce[Me], "tabindex"), Fs(Ce[Me], De), na(Se, te)
            }
            se && (ye || xe && we || (R.insertAdjacentHTML(on(t.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + Vt + '">' + pt[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + Vt + '">' + pt[1] + "</button></div>"), ye = R.querySelector(".tns-controls")), xe && we || (xe = ye.children[0], we = ye.children[1]), t.controlsContainer && Xs(ye, {
                "aria-label": "Carousel Navigation",
                tabindex: "0"
            }), (t.controlsContainer || t.prevButton && t.nextButton) && Xs([xe, we], {
                "aria-controls": Vt,
                tabindex: "-1"
            }), (t.controlsContainer || t.prevButton && t.nextButton) && (Xs(xe, {
                "data-controls": "prev"
            }), Xs(we, {
                "data-controls": "next"
            })), me = Wn(xe), ve = Wn(we), Vn(), ye ? na(ye, Jt) : (na(xe, Jt), na(we, Jt))), Sn()
        }

        function xn() {
            if (C && v) {
                var i = {};
                i[v] = ii, na(H, i)
            }
            mt && na(H, re, t.preventScrollOnTouch), vt && na(H, oe), lt && na(e, ie), "inner" === T ? Xt.on("outerResized", (function() {
                _n(), Xt.emit("innerLoaded", Ci())
            })) : (_ || tt || J || dt || !$) && na(n, {
                resize: wn
            }), dt && ("outer" === T ? Xt.on("innerLoaded", Nn) : Ut || Nn()), Dn(), Ut ? Pn() : Kt && An(), Xt.on("indexChanged", jn), "inner" === T && Xt.emit("innerLoaded", Ci()), "function" == typeof Wt && Wt(Ci()), B = !0
        }

        function wn(t) {
            Ss((function() {
                _n(hi(t))
            }))
        }

        function _n(n) {
            if (B) {
                "outer" === T && Xt.emit("outerResized", Ci(n)), q = rn();
                var i, r = O,
                    o = !1;
                _ && (Cn(), (i = r !== O) && Xt.emit("newBreakpointStart", Ci(n)));
                var s, a, l = ot,
                    u = Ut,
                    f = Kt,
                    d = lt,
                    h = ht,
                    p = gt,
                    g = mt,
                    m = vt,
                    v = yt,
                    y = wt,
                    b = _t,
                    x = Nt;
                if (i) {
                    var w = tt,
                        S = dt,
                        k = pt,
                        A = rt,
                        M = xt;
                    if (!c) var D = nt,
                        R = et
                }
                if (lt = ln("arrowKeys"), ht = ln("controls"), gt = ln("nav"), mt = ln("touch"), rt = ln("center"), vt = ln("mouseDrag"), yt = ln("autoplay"), wt = ln("autoplayHoverPause"), _t = ln("autoplayResetOnVisibility"), i && (Ut = ln("disable"), tt = ln("fixedWidth"), ut = ln("speed"), dt = ln("autoHeight"), pt = ln("controlsText"), xt = ln("autoplayText"), bt = ln("autoplayTimeout"), c || (et = ln("edgePadding"), nt = ln("gutter"))), Ze(Ut), it = sn(), $ && !J || Ut || (zn(), $ || (wi(), o = !0)), (tt || J) && (Mt = Qn(), It = Rt()), (i || tt) && (ot = ln("items"), st = ln("slideBy"), (a = ot !== l) && (tt || J || (It = Rt()), Qe())), i && Ut !== u && (Ut ? Pn() : function() {
                        if (!Gt) return;
                        if (Tt.disabled = !1, H.className += Yt, Zn(), ft)
                            for (var t = At; t--;) C && Gs(F[t]), Gs(F[Pt - t - 1]);
                        if (!C)
                            for (var e = Nt, n = Nt + z; e < n; e++) {
                                var i = F[e],
                                    r = e < Nt + ot ? P : L;
                                i.style.left = 100 * (e - Nt) / ot + "%", Fs(i, r)
                            }
                        kn(), Gt = !1
                    }()), Qt && (i || tt || J) && (Kt = Tn()) !== f && (Kt ? (Jn(Kn(tn(0))), An()) : (! function() {
                        if (!Zt) return;
                        et && c && (N.style.margin = "");
                        if (At)
                            for (var t = "tns-transparent", e = At; e--;) C && zs(F[e], t), zs(F[Pt - e - 1], t);
                        kn(), Zt = !1
                    }(), o = !0)), Ze(Ut || Kt), yt || (wt = _t = !1), lt !== d && (lt ? na(e, ie) : ia(e, ie)), ht !== h && (ht ? ye ? Gs(ye) : (xe && Gs(xe), we && Gs(we)) : ye ? Us(ye) : (xe && Us(xe), we && Us(we))), gt !== p && (gt ? (Gs(Se), Ti()) : Us(Se)), mt !== g && (mt ? na(H, re, t.preventScrollOnTouch) : ia(H, re)), vt !== m && (vt ? na(H, oe) : ia(H, oe)), yt !== v && (yt ? (ze && Gs(ze), Ne || je || ui()) : (ze && Us(ze), Ne && ci())), wt !== y && (wt ? na(H, ee) : ia(H, ee)), _t !== b && (_t ? na(e, ne) : ia(e, ne)), i) {
                    if (tt === w && rt === A || (o = !0), dt !== S && (dt || (N.style.height = "")), ht && pt !== k && (xe.innerHTML = pt[0], we.innerHTML = pt[1]), ze && xt !== M) {
                        var j = yt ? 1 : 0,
                            I = ze.innerHTML,
                            W = I.length - M[j].length;
                        I.substring(W) === M[j] && (ze.innerHTML = I.substring(0, W) + xt[j])
                    }
                } else rt && (tt || J) && (o = !0);
                if ((a || tt && !J) && (Ae = _i(), Ti()), (s = Nt !== x) ? (Xt.emit("indexChanged", Ci()), o = !0) : a ? s || jn() : (tt || J) && (Dn(), qn(), En()), a && !C && function() {
                        for (var t = Nt + Math.min(z, ot), e = Pt; e--;) {
                            var n = F[e];
                            e >= Nt && e < t ? (Fs(n, "tns-moving"), n.style.left = 100 * (e - Nt) / ot + "%", Fs(n, P), zs(n, L)) : n.style.left && (n.style.left = "", Fs(n, L), zs(n, P)), zs(n, E)
                        }
                        setTimeout((function() {
                            Hs(F, (function(t) {
                                zs(t, "tns-moving")
                            }))
                        }), 300)
                    }(), !Ut && !Kt) {
                    if (i && !c && (et === R && nt === D || (N.style.cssText = un(et, nt, tt, ut, dt)), $)) {
                        C && (H.style.width = cn(tt, nt, ot));
                        var X = fn(tt, nt, ot) + dn(nt);
                        ! function(t, e) {
                            "deleteRule" in t ? t.deleteRule(e) : t.removeRule(e)
                        }(Tt, Ns(Tt) - 1), Rs(Tt, "#" + Vt + " > .tns-item", X, Ns(Tt))
                    }
                    dt && Nn(), o && (Zn(), Ht = Nt)
                }
                i && Xt.emit("newBreakpointEnd", Ci(n))
            }
        }

        function Tn() {
            if (!tt && !J) return z <= (rt ? ot - (ot - 1) / 2 : ot);
            var t = tt ? (tt + nt) * z : W[z],
                e = et ? it + 2 * et : it + nt;
            return rt && (e -= tt ? (it - tt) / 2 : (it - (W[Nt + 1] - W[Nt] - nt)) / 2), t <= e
        }

        function Cn() {
            for (var t in O = 0, _) t = parseInt(t), q >= t && (O = t)
        }

        function Sn() {
            !yt && ze && Us(ze), !gt && Se && Us(Se), ht || (ye ? Us(ye) : (xe && Us(xe), we && Us(we)))
        }

        function kn() {
            yt && ze && Gs(ze), gt && Se && Gs(Se), ht && (ye ? Gs(ye) : (xe && Gs(xe), we && Gs(we)))
        }

        function An() {
            if (!Zt) {
                if (et && (N.style.margin = "0px"), At)
                    for (var t = "tns-transparent", e = At; e--;) C && Fs(F[e], t), Fs(F[Pt - e - 1], t);
                Sn(), Zt = !0
            }
        }

        function Pn() {
            if (!Gt) {
                if (Tt.disabled = !0, H.className = H.className.replace(Yt.substring(1), ""), Ys(H, ["style"]), ft)
                    for (var t = At; t--;) C && Us(F[t]), Us(F[Pt - t - 1]);
                if ($ && C || Ys(N, ["style"]), !C)
                    for (var e = Nt, n = Nt + z; e < n; e++) {
                        var i = F[e];
                        Ys(i, ["style"]), zs(i, P), zs(i, L)
                    }
                Sn(), Gt = !0
            }
        }

        function En() {
            var t = Mn();
            Y.innerHTML !== t && (Y.innerHTML = t)
        }

        function Mn() {
            var t = Ln(),
                e = t[0] + 1,
                n = t[1] + 1;
            return e === n ? e + "" : e + " to " + n
        }

        function Ln(t) {
            null == t && (t = Kn());
            var e, n, i, r = Nt;
            if (rt || et ? (J || tt) && (n = -(parseFloat(t) + et), i = n + it + 2 * et) : J && (n = W[Nt], i = n + it), J) W.forEach((function(t, o) {
                o < Pt && ((rt || et) && t <= n + .5 && (r = o), i - t >= .5 && (e = o))
            }));
            else {
                if (tt) {
                    var o = tt + nt;
                    rt || et ? (r = Math.floor(n / o), e = Math.ceil(i / o - 1)) : e = r + Math.ceil(it / o) - 1
                } else if (rt || et) {
                    var s = ot - 1;
                    if (rt ? (r -= s / 2, e = Nt + s / 2) : e = Nt + s, et) {
                        var a = et * ot / it;
                        r -= a, e += a
                    }
                    r = Math.floor(r), e = Math.ceil(e)
                } else e = r + ot - 1;
                r = Math.max(r, 0), e = Math.min(e, Pt - 1)
            }
            return [r, e]
        }

        function Dn() {
            if (Ct && !Ut) {
                var t = Ln();
                t.push(St), Rn.apply(null, t).forEach((function(t) {
                    if (!Is(t, he)) {
                        var e = {};
                        e[v] = function(t) {
                            t.stopPropagation()
                        }, na(t, e), na(t, pe), t.src = Bs(t, "data-src");
                        var n = Bs(t, "data-srcset");
                        n && (t.srcset = n), Fs(t, "loading")
                    }
                }))
            }
        }

        function On(t) {
            Fs(t, "loaded"), $n(t)
        }

        function $n(t) {
            Fs(t, he), zs(t, "loading"), ia(t, pe)
        }

        function Rn(t, e, n) {
            var i = [];
            for (n || (n = "img"); t <= e;) Hs(F[t].querySelectorAll(n), (function(t) {
                i.push(t)
            })), t++;
            return i
        }

        function Nn() {
            var t = Rn.apply(null, Ln());
            Ss((function() {
                Hn(t, Fn)
            }))
        }

        function Hn(t, e) {
            return X ? e() : (t.forEach((function(e, n) {
                !Ct && e.complete && $n(e), Is(e, he) && t.splice(n, 1)
            })), t.length ? void Ss((function() {
                Hn(t, e)
            })) : e())
        }

        function jn() {
            Dn(), qn(), En(), Vn(),
                function() {
                    if (gt && (Me = Ee >= 0 ? Ee : nn(), Ee = -1, Me !== Le)) {
                        var t = Ce[Le],
                            e = Ce[Me];
                        Xs(t, {
                            tabindex: "-1",
                            "aria-label": Oe + (Le + 1)
                        }), zs(t, De), Xs(e, {
                            "aria-label": Oe + (Me + 1) + $e
                        }), Ys(e, "tabindex"), Fs(e, De), Le = Me
                    }
                }()
        }

        function In(t, e) {
            for (var n = [], i = t, r = Math.min(t + e, Pt); i < r; i++) n.push(F[i].offsetHeight);
            return Math.max.apply(null, n)
        }

        function Fn() {
            var t = dt ? In(Nt, ot) : In(At, z),
                e = D || N;
            e.style.height !== t && (e.style.height = t + "px")
        }

        function zn() {
            W = [0];
            var t = $ ? "left" : "top",
                e = $ ? "right" : "bottom",
                n = F[0].getBoundingClientRect()[t];
            Hs(F, (function(i, r) {
                r && W.push(i.getBoundingClientRect()[t] - n), r === Pt - 1 && W.push(i.getBoundingClientRect()[e] - n)
            }))
        }

        function qn() {
            var t = Ln(),
                e = t[0],
                n = t[1];
            Hs(F, (function(t, i) {
                i >= e && i <= n ? qs(t, "aria-hidden") && (Ys(t, ["aria-hidden", "tabindex"]), Fs(t, de)) : qs(t, "aria-hidden") || (Xs(t, {
                    "aria-hidden": "true",
                    tabindex: "-1"
                }), zs(t, de))
            }))
        }

        function Bn(t) {
            return t.nodeName.toLowerCase()
        }

        function Wn(t) {
            return "button" === Bn(t)
        }

        function Xn(t) {
            return "true" === t.getAttribute("aria-disabled")
        }

        function Yn(t, e, n) {
            t ? e.disabled = n : e.setAttribute("aria-disabled", n.toString())
        }

        function Vn() {
            if (ht && !ct && !ft) {
                var t = me ? xe.disabled : Xn(xe),
                    e = ve ? we.disabled : Xn(we),
                    n = Nt <= jt,
                    i = !ct && Nt >= It;
                n && !t && Yn(me, xe, !0), !n && t && Yn(me, xe, !1), i && !e && Yn(ve, we, !0), !i && e && Yn(ve, we, !1)
            }
        }

        function Un(t, e) {
            h && (t.style[h] = e)
        }

        function Gn(t) {
            return null == t && (t = Nt), J ? (it - (et ? nt : 0) - (W[t + 1] - W[t] - nt)) / 2 : tt ? (it - tt) / 2 : (ot - 1) / 2
        }

        function Qn() {
            var t = it + (et ? nt : 0) - (tt ? (tt + nt) * Pt : W[Pt]);
            return rt && !ft && (t = tt ? -(tt + nt) * (Pt - 1) - Gn() : Gn(Pt - 1) - W[Pt - 1]), t > 0 && (t = 0), t
        }

        function Kn(t) {
            var e;
            if (null == t && (t = Nt), $ && !J)
                if (tt) e = -(tt + nt) * t, rt && (e += Gn());
                else {
                    var n = f ? Pt : ot;
                    rt && (t -= Gn()), e = 100 * -t / n
                }
            else e = -W[t], rt && J && (e += Gn());
            return Et && (e = Math.max(e, Mt)), e += !$ || J || tt ? "px" : "%"
        }

        function Zn(t) {
            Un(H, "0s"), Jn(t)
        }

        function Jn(t) {
            null == t && (t = Kn()), H.style[Dt] = Ot + t + $t
        }

        function ti(t, e, n, i) {
            var r = t + ot;
            ft || (r = Math.min(r, Pt));
            for (var o = t; o < r; o++) {
                var s = F[o];
                i || (s.style.left = 100 * (o - Nt) / ot + "%"), M && p && (s.style[p] = s.style[m] = M * (o - t) / 1e3 + "s"), zs(s, e), Fs(s, n), i && kt.push(s)
            }
        }

        function ei(t, e) {
            Lt && Qe(), (Nt !== Ht || e) && (Xt.emit("indexChanged", Ci()), Xt.emit("transitionStart", Ci()), dt && Nn(), Ne && t && ["click", "keydown"].indexOf(t.type) >= 0 && ci(), Bt = !0, Ke())
        }

        function ni(t) {
            return t.toLowerCase().replace(/-/g, "")
        }

        function ii(t) {
            if (C || Bt) {
                if (Xt.emit("transitionEnd", Ci(t)), !C && kt.length > 0)
                    for (var e = 0; e < kt.length; e++) {
                        var n = kt[e];
                        n.style.left = "", m && p && (n.style[m] = "", n.style[p] = ""), zs(n, E), Fs(n, L)
                    }
                if (!t || !C && t.target.parentNode === H || t.target === H && ni(t.propertyName) === ni(Dt)) {
                    if (!Lt) {
                        var i = Nt;
                        Qe(), Nt !== i && (Xt.emit("indexChanged", Ci()), Zn())
                    }
                    "inner" === T && Xt.emit("innerLoaded", Ci()), Bt = !1, Ht = Nt
                }
            }
        }

        function ri(t, e) {
            if (!Kt)
                if ("prev" === t) oi(e, -1);
                else if ("next" === t) oi(e, 1);
            else {
                if (Bt) {
                    if (Ft) return;
                    ii()
                }
                var n = en(),
                    i = 0;
                if ("first" === t ? i = -n : "last" === t ? i = C ? z - ot - n : z - 1 - n : ("number" != typeof t && (t = parseInt(t)), isNaN(t) || (e || (t = Math.max(0, Math.min(z - 1, t))), i = t - n)), !C && i && Math.abs(i) < ot) {
                    var r = i > 0 ? 1 : -1;
                    i += Nt + i - z >= jt ? z * r : 2 * z * r * -1
                }
                Nt += i, C && ft && (Nt < jt && (Nt += z), Nt > It && (Nt -= z)), en(Nt) !== en(Ht) && ei(e)
            }
        }

        function oi(t, e) {
            if (Bt) {
                if (Ft) return;
                ii()
            }
            var n;
            if (!e) {
                for (var i = pi(t = hi(t)); i !== ye && [xe, we].indexOf(i) < 0;) i = i.parentNode;
                var r = [xe, we].indexOf(i);
                r >= 0 && (n = !0, e = 0 === r ? -1 : 1)
            }
            if (ct) {
                if (Nt === jt && -1 === e) return void ri("last", t);
                if (Nt === It && 1 === e) return void ri("first", t)
            }
            e && (Nt += st * e, J && (Nt = Math.floor(Nt)), ei(n || t && "keydown" === t.type ? t : null))
        }

        function si() {
            Re = setInterval((function() {
                oi(null, Fe)
            }), bt), Ne = !0
        }

        function ai() {
            clearInterval(Re), Ne = !1
        }

        function li(t, e) {
            Xs(ze, {
                "data-action": t
            }), ze.innerHTML = Be[0] + t + Be[1] + e
        }

        function ui() {
            si(), ze && li("stop", xt[1])
        }

        function ci() {
            ai(), ze && li("start", xt[0])
        }

        function fi() {
            Ne ? (ci(), je = !0) : (ui(), je = !1)
        }

        function di(t) {
            t.focus()
        }

        function hi(t) {
            return gi(t = t || n.event) ? t.changedTouches[0] : t
        }

        function pi(t) {
            return t.target || n.event.srcElement
        }

        function gi(t) {
            return t.type.indexOf("touch") >= 0
        }

        function mi(t) {
            t.preventDefault ? t.preventDefault() : t.returnValue = !1
        }

        function vi() {
            return o = Ve.y - Ye.y, s = Ve.x - Ye.x, e = Math.atan2(o, s) * (180 / Math.PI), n = zt, i = !1, (r = Math.abs(90 - Math.abs(e))) >= 90 - n ? i = "horizontal" : r <= n && (i = "vertical"), i === t.axis;
            var e, n, i, r, o, s
        }

        function yi(t) {
            if (Bt) {
                if (Ft) return;
                ii()
            }
            yt && Ne && ai(), Ue = !0, Xe && (As(Xe), Xe = null);
            var e = hi(t);
            Xt.emit(gi(t) ? "touchStart" : "dragStart", Ci(t)), !gi(t) && ["img", "a"].indexOf(Bn(pi(t))) >= 0 && mi(t), Ve.x = Ye.x = e.clientX, Ve.y = Ye.y = e.clientY, C && (We = parseFloat(H.style[Dt].replace(Ot, "")), Un(H, "0s"))
        }

        function bi(t) {
            if (Ue) {
                var e = hi(t);
                Ve.x = e.clientX, Ve.y = e.clientY, C ? Xe || (Xe = Ss((function() {
                    ! function t(e) {
                        if (!qt) return void(Ue = !1);
                        As(Xe), Ue && (Xe = Ss((function() {
                            t(e)
                        })));
                        "?" === qt && (qt = vi());
                        if (qt) {
                            !ge && gi(e) && (ge = !0);
                            try {
                                e.type && Xt.emit(gi(e) ? "touchMove" : "dragMove", Ci(e))
                            } catch (t) {}
                            var n = We,
                                i = Ge(Ve, Ye);
                            if (!$ || tt || J) n += i, n += "px";
                            else n += f ? i * ot * 100 / ((it + nt) * Pt) : 100 * i / (it + nt), n += "%";
                            H.style[Dt] = Ot + n + $t
                        }
                    }(t)
                }))) : ("?" === qt && (qt = vi()), qt && (ge = !0)), ("boolean" != typeof t.cancelable || t.cancelable) && ge && t.preventDefault()
            }
        }

        function xi(e) {
            if (Ue) {
                Xe && (As(Xe), Xe = null), C && Un(H, ""), Ue = !1;
                var n = hi(e);
                Ve.x = n.clientX, Ve.y = n.clientY;
                var i = Ge(Ve, Ye);
                if (Math.abs(i)) {
                    if (!gi(e)) {
                        var r = pi(e);
                        na(r, {
                            click: function t(e) {
                                mi(e), ia(r, {
                                    click: t
                                })
                            }
                        })
                    }
                    C ? Xe = Ss((function() {
                        if ($ && !J) {
                            var t = -i * ot / (it + nt);
                            t = i > 0 ? Math.floor(t) : Math.ceil(t), Nt += t
                        } else {
                            var n = -(We + i);
                            if (n <= 0) Nt = jt;
                            else if (n >= W[Pt - 1]) Nt = It;
                            else
                                for (var r = 0; r < Pt && n >= W[r];) Nt = r, n > W[r] && i < 0 && (Nt += 1), r++
                        }
                        ei(e, i), Xt.emit(gi(e) ? "touchEnd" : "dragEnd", Ci(e))
                    })) : qt && oi(e, i > 0 ? -1 : 1)
                }
            }
            "auto" === t.preventScrollOnTouch && (ge = !1), zt && (qt = "?"), yt && !Ne && si()
        }

        function wi() {
            (D || N).style.height = W[Nt + ot] - W[Nt] + "px"
        }

        function _i() {
            var t = tt ? (tt + nt) * z / it : z / ot;
            return Math.min(Math.ceil(t), z)
        }

        function Ti() {
            if (gt && !le && Ae !== Pe) {
                var t = Pe,
                    e = Ae,
                    n = Gs;
                for (Pe > Ae && (t = Ae, e = Pe, n = Us); t < e;) n(Ce[t]), t++;
                Pe = Ae
            }
        }

        function Ci(t) {
            return {
                container: H,
                slideItems: F,
                navContainer: Se,
                navItems: Ce,
                controlsContainer: ye,
                hasControls: se,
                prevButton: xe,
                nextButton: we,
                items: ot,
                slideBy: st,
                cloneCount: At,
                slideCount: z,
                slideCountNew: Pt,
                index: Nt,
                indexCached: Ht,
                displayIndex: Je(),
                navCurrentIndex: Me,
                navCurrentIndexCached: Le,
                pages: Ae,
                pagesCached: Pe,
                sheet: Tt,
                isOn: B,
                event: t || {}
            }
        }
        b && console.warn("No slides found in", t.container)
    };

    function sa() {
        $('[data-fancybox="gallery"]').fancybox({
            buttons: ["close"],
            loop: !0,
            infobar: !1,
            backFocus: !1
        })
    }
    window.$ = window.jQuery = n(1), bi.registerPlugin(Pi, go, Ro), n(2), "ontouchstart" in document.documentElement || (document.documentElement.className += " no-touch"), document.querySelectorAll(".glide--home").length > 0 && new Ts(".glide--home", {
        type: "carousel",
        startAt: 0,
        perView: 3,
        breakpoints: {
            600: {
                perView: 1,
                peek: {
                    before: 50,
                    after: 50
                }
            },
            1024: {
                perView: 2
            }
        },
        gap: 2,
        peek: {
            before: 0,
            after: 0
        }
    }).mount(), document.querySelectorAll(".glide--project-carousel").length > 0 && new Ts(".glide--project-carousel", {
        type: "carousel",
        startAt: 0,
        perView: 1,
        breakpoints: {
            600: {
                peek: {
                    before: 0,
                    after: 0
                }
            }
        },
        gap: 2,
        peek: {
            before: 0,
            after: 200
        }
    }).mount(), document.addEventListener("DOMContentLoaded", (function() {
        if (document.querySelectorAll(".my-slider").length > 0) {
            var t = oa({
                container: ".my-slider",
                autoWidth: !0,
                items: 3.5,
                gutter: 10,
                mouseDrag: !1,
                swipeAngle: !1,
                speed: 400,
                controlsPosition: "bottom",
                nav: !0,
                navPosition: "bottom",
                onInit: sa,
                loop: !1
            });
            t.getInfo();
            t.events.on("transitionEnd", (function(t, e) {
                document.querySelector(".slide--active").classList.remove("slide--active"), document.querySelectorAll(".carousel--current-slide span")[t.navCurrentIndex].classList.add("slide--active"), document.querySelector(".my-slider .current-index-of-carousel").classList.remove("current-index-of-carousel"), document.querySelectorAll(".my-slider .tns-item")[t.navCurrentIndex].classList.add("current-index-of-carousel")
            }))
        }
    })), $(document).ready((function() {
        $("#navToggle, #navCloseToggle").on("click", (function() {
            var t = $("#mobileNavWrapper");
            t.hasClass("hidden") ? (t.removeClass("hidden"), $("body").addClass("mobile-nav-active")) : (t.addClass("hidden"), $("body").removeClass("mobile-nav-active"))
        }))
    }));
    var aa = window.sessionStorage,
        la = aa.getItem("victorySeenMainLoader");
    bi.set("#circle", {
        drawSVG: "0% 0%"
    });
    var ua, ca, fa = bi.timeline({
        paused: !0
    });

    function da() {
        $("body").removeClass("loader-active"), $("#loadingScreen").remove(), aa.setItem("victorySeenMainLoader", !0)
    }
    la ? da() : fa.add(((ua = bi.timeline()).to("#loadingScreenSvg", {
        autoAlpha: 1,
        duration: .2
    }), ua.to("#circle", {
        delay: .5,
        duration: 3,
        drawSVG: "0% 100%"
    }), ua.to("#loadingScreen", {
        delay: .5,
        duration: .2,
        autoAlpha: 0,
        onComplete: da
    }), ua)), fa.add(((ca = bi.timeline()).set(".v--header", {
        yPercent: -100
    }), ca.to(".v--header", {
        yPercent: 0,
        duration: 1,
        ease: "power3.out",
        delay: .5
    }, "headerAnimStart"), ca.to(".v--header", {
        autoAlpha: 1,
        duration: 1,
        ease: "power3.out",
        delay: 1
    }, "headerAnimStart"), ca.to(".v--hero-fade-in", {
        autoAlpha: 1,
        duration: 1,
        delay: -.6,
        ease: "power3.in"
    }), ca.to(".v--hero-fade-in-next", {
        autoAlpha: 1,
        duration: 1,
        delay: -.6,
        ease: "power3.in"
    }), bi.utils.toArray(".v--hero-image").forEach((function(t) {
        ca.to(t, {
            autoAlpha: 1,
            duration: 1,
            delay: -.6,
            ease: "power3.in"
        })
    })), ca)), setTimeout((function() {
        fa.play()
    }), 500), document.querySelectorAll("[data-js-biog-toggle]").forEach((function(t) {
        t.addEventListener("click", (function(t) {
            t.preventDefault();
            var e = this.getAttribute("href"),
                n = bi.timeline();
            n.to(".biography-detail.active", {
                height: "0",
                onComplete: function() {
                    document.querySelectorAll(".biography-detail.active").forEach((function(t) {
                        t.classList.remove("active")
                    }))
                }
            }, "startLabel"), n.to(".biog--opener.active", {
                autoAlpha: 1,
                onComplete: function() {
                    document.querySelectorAll(".biog--opener.active").forEach((function(t) {
                        t.classList.remove("active")
                    }))
                }
            }, "startLabel"), document.querySelector(e).classList.contains("active") ? n.to('.biog--opener[href="' + e + '"]', {
                autoAlpha: 1,
                onComplete: function() {
                    document.querySelectorAll('.biog--opener[href="' + e + '"]').forEach((function(t) {
                        t.classList.add("active")
                    }))
                }
            }, "startLabel") : (n.to('.biog--opener[href="' + e + '"]', {
                autoAlpha: 0,
                onComplete: function() {
                    document.querySelectorAll('.biog--opener[href="' + e + '"]').forEach((function(t) {
                        t.classList.add("active")
                    }))
                }
            }, "startLabel"), n.to(e, {
                height: "auto",
                onComplete: function() {
                    document.querySelectorAll(e).forEach((function(t) {
                        t.classList.add("active")
                    }))
                }
            }, "startLabel"))
        }))
    })), $("body").hasClass("anim-enabled") && window.addEventListener("load", (function() {
        bi.utils.toArray(".lazy img").forEach((function(t) {
            go.create({
                trigger: t,
                start: "center bottom",
                once: !0,
                onEnter: function() {
                    bi.to(t, {
                        autoAlpha: 1,
                        duration: 1,
                        ease: "power3.in"
                    })
                }
            })
        }))
    })), $(document).ready((function() {
        $(".next-project-cta").on("click", (function(t) {
            t.preventDefault(), window.location.href = $(".next-project-cta a").attr("href")
        }))
    })), bi.registerPlugin({
        name: "className",
        init: !0,
        register: function(t, e) {
            var n = t.plugins.css,
                i = n.core || console.warn("Requires GSAP 3.2.1 or later") || {},
                r = t.core._removeLinkedListItem,
                o = i._removeProperty,
                s = t.core.PropTween,
                a = function(e, n) {
                    var i, r = {},
                        o = getComputedStyle(e),
                        s = e._gsap;
                    for (i in o) isNaN(i) && "cssText" !== i && "length" !== i && (r[i] = o[i]);
                    for (i in n && s && (s.uncache = !0), t.getProperty(e, "x"), s = e._gsap) r[i] = s[i];
                    return r
                };
            e.prototype.init = function(e, i, l) {
                var u, c, f = e.getAttribute("class"),
                    d = e.style,
                    h = d.cssText,
                    p = e._gsap,
                    g = p.classPT,
                    m = {},
                    v = "=" !== i.charAt(1) ? i : f.replace(new RegExp("(?:\\s|^)" + i.substr(2) + "(?![\\w-])"), "") + ("+" === i.charAt(0) ? " " + i.substr(2) : ""),
                    y = {},
                    b = a(e),
                    x = /(transform|perspective)/i,
                    w = new n;
                for (c in g && (g.r(1, g.d), r(g.d, g, "_pt")), e.setAttribute("class", v), u = a(e, !0), e.setAttribute("class", f), u) u[c] === b[c] || x.test(c) || (y[c] = u[c], d[c] || "0" === d[c] || (m[c] = 1));
                return p.classPT = this._pt = new s(null, e, "className", 0, 0, (function(t) {
                    if (w.render(t, w), !t || 1 === t)
                        for (var n in e.setAttribute("class", t ? v : f), m) o(e, n)
                }), this, 0, -11), d.cssText !== h && (d.cssText = h), p.uncache = !0, t.getProperty(e, "x"), w.init(e, y, l), this._props.push.apply(this._props, w._props), 1
            }
        }
    })
}, function(t, e) {}]);
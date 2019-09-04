// 4.7.13 (2018-05-16)
! function() {
    "use strict";
    var e, t, n, r, o, i, a, u, s, c, l, f, d, m, p, g, h, v = function(e) {
            return function() {
                return e
            }
        },
        y = v(!1),
        b = v(!0),
        V = {
            noop: function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
            },
            noarg: function(n) {
                return function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return n()
                }
            },
            compose: function(n, r) {
                return function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return n(r.apply(null, arguments))
                }
            },
            constant: v,
            identity: function(e) {
                return e
            },
            tripleEquals: function(e, t) {
                return e === t
            },
            curry: function(i) {
                for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
                for (var a = new Array(arguments.length - 1), n = 1; n < arguments.length; n++) a[n - 1] = arguments[n];
                return function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                    var o = a.concat(n);
                    return i.apply(null, o)
                }
            },
            not: function(n) {
                return function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return !n.apply(null, arguments)
                }
            },
            die: function(e) {
                return function() {
                    throw new Error(e)
                }
            },
            apply: function(e) {
                return e()
            },
            call: function(e) {
                e()
            },
            never: y,
            always: b
        },
        C = V.never,
        x = V.always,
        w = function() {
            return N
        },
        N = (r = {
            fold: function(e, t) {
                return e()
            },
            is: C,
            isSome: C,
            isNone: x,
            getOr: n = function(e) {
                return e
            },
            getOrThunk: t = function(e) {
                return e()
            },
            getOrDie: function(e) {
                throw new Error(e || "error: getOrDie called on none.")
            },
            or: n,
            orThunk: t,
            map: w,
            ap: w,
            each: function() {},
            bind: w,
            flatten: w,
            exists: C,
            forall: x,
            filter: w,
            equals: e = function(e) {
                return e.isNone()
            },
            equals_: e,
            toArray: function() {
                return []
            },
            toString: V.constant("none()")
        }, Object.freeze && Object.freeze(r), r),
        E = function(n) {
            var e = function() {
                    return n
                },
                t = function() {
                    return o
                },
                r = function(e) {
                    return e(n)
                },
                o = {
                    fold: function(e, t) {
                        return t(n)
                    },
                    is: function(e) {
                        return n === e
                    },
                    isSome: x,
                    isNone: C,
                    getOr: e,
                    getOrThunk: e,
                    getOrDie: e,
                    or: t,
                    orThunk: t,
                    map: function(e) {
                        return E(e(n))
                    },
                    ap: function(e) {
                        return e.fold(w, function(e) {
                            return E(e(n))
                        })
                    },
                    each: function(e) {
                        e(n)
                    },
                    bind: r,
                    flatten: e,
                    exists: r,
                    forall: r,
                    filter: function(e) {
                        return e(n) ? o : N
                    },
                    equals: function(e) {
                        return e.is(n)
                    },
                    equals_: function(e, t) {
                        return e.fold(C, function(e) {
                            return t(n, e)
                        })
                    },
                    toArray: function() {
                        return [n]
                    },
                    toString: function() {
                        return "some(" + n + ")"
                    }
                };
            return o
        },
        A = {
            some: E,
            none: w,
            from: function(e) {
                return null === e || e === undefined ? N : E(e)
            }
        },
        S = function(t) {
            return function(e) {
                return function(e) {
                    if (null === e) return "null";
                    var t = typeof e;
                    return "object" === t && Array.prototype.isPrototypeOf(e) ? "array" : "object" === t && String.prototype.isPrototypeOf(e) ? "string" : t
                }(e) === t
            }
        },
        k = {
            isString: S("string"),
            isObject: S("object"),
            isArray: S("array"),
            isNull: S("null"),
            isBoolean: S("boolean"),
            isUndefined: S("undefined"),
            isFunction: S("function"),
            isNumber: S("number")
        },
        T = (o = Array.prototype.indexOf) === undefined ? function(e, t) {
            return L(e, t)
        } : function(e, t) {
            return o.call(e, t)
        },
        R = function(e, t) {
            return -1 < T(e, t)
        },
        _ = function(e, t) {
            for (var n = e.length, r = new Array(n), o = 0; o < n; o++) {
                var i = e[o];
                r[o] = t(i, o, e)
            }
            return r
        },
        B = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++) t(e[n], n, e)
        },
        D = function(e, t) {
            for (var n = e.length - 1; 0 <= n; n--) t(e[n], n, e)
        },
        O = function(e, t) {
            for (var n = [], r = 0, o = e.length; r < o; r++) {
                var i = e[r];
                t(i, r, e) && n.push(i)
            }
            return n
        },
        P = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (t(e[n], n, e)) return A.some(n);
            return A.none()
        },
        L = function(e, t) {
            for (var n = 0, r = e.length; n < r; ++n)
                if (e[n] === t) return n;
            return -1
        },
        I = Array.prototype.push,
        M = function(e) {
            for (var t = [], n = 0, r = e.length; n < r; ++n) {
                if (!Array.prototype.isPrototypeOf(e[n])) throw new Error("Arr.flatten item " + n + " was not an array, input: " + e);
                I.apply(t, e[n])
            }
            return t
        },
        F = function(e, t) {
            for (var n = 0, r = e.length; n < r; ++n)
                if (!0 !== t(e[n], n, e)) return !1;
            return !0
        },
        z = Array.prototype.slice,
        U = k.isFunction(Array.from) ? Array.from : function(e) {
            return z.call(e)
        },
        H = {
            map: _,
            each: B,
            eachr: D,
            partition: function(e, t) {
                for (var n = [], r = [], o = 0, i = e.length; o < i; o++) {
                    var a = e[o];
                    (t(a, o, e) ? n : r).push(a)
                }
                return {
                    pass: n,
                    fail: r
                }
            },
            filter: O,
            groupBy: function(e, t) {
                if (0 === e.length) return [];
                for (var n = t(e[0]), r = [], o = [], i = 0, a = e.length; i < a; i++) {
                    var u = e[i],
                        s = t(u);
                    s !== n && (r.push(o), o = []), n = s, o.push(u)
                }
                return 0 !== o.length && r.push(o), r
            },
            indexOf: function(e, t) {
                var n = T(e, t);
                return -1 === n ? A.none() : A.some(n)
            },
            foldr: function(e, t, n) {
                return D(e, function(e) {
                    n = t(n, e)
                }), n
            },
            foldl: function(e, t, n) {
                return B(e, function(e) {
                    n = t(n, e)
                }), n
            },
            find: function(e, t) {
                for (var n = 0, r = e.length; n < r; n++) {
                    var o = e[n];
                    if (t(o, n, e)) return A.some(o)
                }
                return A.none()
            },
            findIndex: P,
            flatten: M,
            bind: function(e, t) {
                var n = _(e, t);
                return M(n)
            },
            forall: F,
            exists: function(e, t) {
                return P(e, t).isSome()
            },
            contains: R,
            equal: function(e, n) {
                return e.length === n.length && F(e, function(e, t) {
                    return e === n[t]
                })
            },
            reverse: function(e) {
                var t = z.call(e, 0);
                return t.reverse(), t
            },
            chunk: function(e, t) {
                for (var n = [], r = 0; r < e.length; r += t) {
                    var o = e.slice(r, r + t);
                    n.push(o)
                }
                return n
            },
            difference: function(e, t) {
                return O(e, function(e) {
                    return !R(t, e)
                })
            },
            mapToObject: function(e, t) {
                for (var n = {}, r = 0, o = e.length; r < o; r++) {
                    var i = e[r];
                    n[String(i)] = t(i, r)
                }
                return n
            },
            pure: function(e) {
                return [e]
            },
            sort: function(e, t) {
                var n = z.call(e, 0);
                return n.sort(t), n
            },
            range: function(e, t) {
                for (var n = [], r = 0; r < e; r++) n.push(t(r));
                return n
            },
            head: function(e) {
                return 0 === e.length ? A.none() : A.some(e[0])
            },
            last: function(e) {
                return 0 === e.length ? A.none() : A.some(e[e.length - 1])
            },
            from: U
        },
        q = "undefined" != typeof window ? window : Function("return this;")(),
        j = function(e, t) {
            for (var n = t !== undefined && null !== t ? t : q, r = 0; r < e.length && n !== undefined && null !== n; ++r) n = n[e[r]];
            return n
        },
        $ = function(e, t) {
            var n = e.split(".");
            return j(n, t)
        },
        W = {
            getOrDie: function(e, t) {
                var n = $(e, t);
                if (n === undefined || null === n) throw e + " not available on this browser";
                return n
            }
        },
        K = function() {
            return W.getOrDie("URL")
        },
        X = {
            createObjectURL: function(e) {
                return K().createObjectURL(e)
            },
            revokeObjectURL: function(e) {
                K().revokeObjectURL(e)
            }
        },
        Y = navigator,
        G = Y.userAgent,
        J = function(e) {
            return "matchMedia" in window && matchMedia(e).matches
        };
    d = /Android/.test(G), a = (a = !(i = /WebKit/.test(G)) && /MSIE/gi.test(G) && /Explorer/gi.test(Y.appName)) && /MSIE (\w+)\./.exec(G)[1], u = -1 !== G.indexOf("Trident/") && (-1 !== G.indexOf("rv:") || -1 !== Y.appName.indexOf("Netscape")) && 11, s = -1 !== G.indexOf("Edge/") && !a && !u && 12, a = a || u || s, c = !i && !u && /Gecko/.test(G), l = -1 !== G.indexOf("Mac"), f = /(iPad|iPhone)/.test(G), m = "FormData" in window && "FileReader" in window && "URL" in window && !!X.createObjectURL, p = J("only screen and (max-device-width: 480px)") && (d || f), g = J("only screen and (min-width: 800px)") && (d || f), h = -1 !== G.indexOf("Windows Phone"), s && (i = !1);
    var Q, Z, ee, te, ne, re, oe, ie, ae, ue, se, ce, le, fe, de, me, pe, ge, he, ve = {
            opera: !1,
            webkit: i,
            ie: a,
            gecko: c,
            mac: l,
            iOS: f,
            android: d,
            contentEditable: !f || m || 534 <= parseInt(G.match(/AppleWebKit\/(\d*)/)[1], 10),
            transparentSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            caretAfter: 8 !== a,
            range: window.getSelection && "Range" in window,
            documentMode: a && !s ? document.documentMode || 7 : 10,
            fileApi: m,
            ceFalse: !1 === a || 8 < a,
            cacheSuffix: null,
            container: null,
            overrideViewPort: null,
            experimentalShadowDom: !1,
            canHaveCSP: !1 === a || 11 < a,
            desktop: !p && !g,
            windowsPhone: h
        },
        ye = window.Promise ? window.Promise : function() {
            function r(e, t) {
                return function() {
                    e.apply(t, arguments)
                }
            }
            var e = Array.isArray || function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                i = function(e) {
                    if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof e) throw new TypeError("not a function");
                    this._state = null, this._value = null, this._deferreds = [], l(e, r(o, this), r(u, this))
                },
                t = i.immediateFn || "function" == typeof setImmediate && setImmediate || function(e) {
                    setTimeout(e, 1)
                };

            function a(r) {
                var o = this;
                null !== this._state ? t(function() {
                    var e = o._state ? r.onFulfilled : r.onRejected;
                    if (null !== e) {
                        var t;
                        try {
                            t = e(o._value)
                        } catch (n) {
                            return void r.reject(n)
                        }
                        r.resolve(t)
                    } else(o._state ? r.resolve : r.reject)(o._value)
                }) : this._deferreds.push(r)
            }

            function o(e) {
                try {
                    if (e === this) throw new TypeError("A promise cannot be resolved with itself.");
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                        var t = e.then;
                        if ("function" == typeof t) return void l(r(t, e), r(o, this), r(u, this))
                    }
                    this._state = !0, this._value = e, s.call(this)
                } catch (n) {
                    u.call(this, n)
                }
            }

            function u(e) {
                this._state = !1, this._value = e, s.call(this)
            }

            function s() {
                for (var e = 0, t = this._deferreds.length; e < t; e++) a.call(this, this._deferreds[e]);
                this._deferreds = null
            }

            function c(e, t, n, r) {
                this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.resolve = n, this.reject = r
            }

            function l(e, t, n) {
                var r = !1;
                try {
                    e(function(e) {
                        r || (r = !0, t(e))
                    }, function(e) {
                        r || (r = !0, n(e))
                    })
                } catch (o) {
                    if (r) return;
                    r = !0, n(o)
                }
            }
            return i.prototype["catch"] = function(e) {
                return this.then(null, e)
            }, i.prototype.then = function(n, r) {
                var o = this;
                return new i(function(e, t) {
                    a.call(o, new c(n, r, e, t))
                })
            }, i.all = function() {
                var s = Array.prototype.slice.call(1 === arguments.length && e(arguments[0]) ? arguments[0] : arguments);
                return new i(function(o, i) {
                    if (0 === s.length) return o([]);
                    var a = s.length;

                    function u(t, e) {
                        try {
                            if (e && ("object" == typeof e || "function" == typeof e)) {
                                var n = e.then;
                                if ("function" == typeof n) return void n.call(e, function(e) {
                                    u(t, e)
                                }, i)
                            }
                            s[t] = e, 0 == --a && o(s)
                        } catch (r) {
                            i(r)
                        }
                    }
                    for (var e = 0; e < s.length; e++) u(e, s[e])
                })
            }, i.resolve = function(t) {
                return t && "object" == typeof t && t.constructor === i ? t : new i(function(e) {
                    e(t)
                })
            }, i.reject = function(n) {
                return new i(function(e, t) {
                    t(n)
                })
            }, i.race = function(o) {
                return new i(function(e, t) {
                    for (var n = 0, r = o.length; n < r; n++) o[n].then(e, t)
                })
            }, i
        }(),
        be = function(e, t) {
            return "number" != typeof t && (t = 0), setTimeout(e, t)
        },
        Ce = function(e, t) {
            return "number" != typeof t && (t = 1), setInterval(e, t)
        },
        xe = function(t, n) {
            var r, e;
            return (e = function() {
                var e = arguments;
                clearTimeout(r), r = be(function() {
                    t.apply(this, e)
                }, n)
            }).stop = function() {
                clearTimeout(r)
            }, e
        },
        we = {
            requestAnimationFrame: function(e, t) {
                Q ? Q.then(e) : Q = new ye(function(e) {
                    t || (t = document.body),
                        function(e, t) {
                            var n, r = window.requestAnimationFrame,
                                o = ["ms", "moz", "webkit"];
                            for (n = 0; n < o.length && !r; n++) r = window[o[n] + "RequestAnimationFrame"];
                            r || (r = function(e) {
                                window.setTimeout(e, 0)
                            }), r(e, t)
                        }(e, t)
                }).then(e)
            },
            setTimeout: be,
            setInterval: Ce,
            setEditorTimeout: function(e, t, n) {
                return be(function() {
                    e.removed || t()
                }, n)
            },
            setEditorInterval: function(e, t, n) {
                var r;
                return r = Ce(function() {
                    e.removed ? clearInterval(r) : t()
                }, n)
            },
            debounce: xe,
            throttle: xe,
            clearInterval: function(e) {
                return clearInterval(e)
            },
            clearTimeout: function(e) {
                return clearTimeout(e)
            }
        },
        Ne = /^(?:mouse|contextmenu)|click/,
        Ee = {
            keyLocation: 1,
            layerX: 1,
            layerY: 1,
            returnValue: 1,
            webkitMovementX: 1,
            webkitMovementY: 1,
            keyIdentifier: 1
        },
        Se = function() {
            return !1
        },
        ke = function() {
            return !0
        },
        Te = function(e, t, n, r) {
            e.addEventListener ? e.addEventListener(t, n, r || !1) : e.attachEvent && e.attachEvent("on" + t, n)
        },
        Ae = function(e, t, n, r) {
            e.removeEventListener ? e.removeEventListener(t, n, r || !1) : e.detachEvent && e.detachEvent("on" + t, n)
        },
        Re = function(e, t) {
            var n, r, o, i, a, u, s = t || {};
            for (n in e) Ee[n] || (s[n] = e[n]);
            if (s.target || (s.target = s.srcElement || document), ve.experimentalShadowDom && (s.target = (r = e, o = s.target, a = o, (i = r.path) && 0 < i.length && (a = i[0]), r.composedPath && (i = r.composedPath()) && 0 < i.length && (a = i[0]), a)), e && Ne.test(e.type) && e.pageX === undefined && e.clientX !== undefined) {
                var c = s.target.ownerDocument || document,
                    l = c.documentElement,
                    f = c.body;
                s.pageX = e.clientX + (l && l.scrollLeft || f && f.scrollLeft || 0) - (l && l.clientLeft || f && f.clientLeft || 0), s.pageY = e.clientY + (l && l.scrollTop || f && f.scrollTop || 0) - (l && l.clientTop || f && f.clientTop || 0)
            }
            return s.preventDefault = function() {
                s.isDefaultPrevented = ke, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            }, s.stopPropagation = function() {
                s.isPropagationStopped = ke, e && (e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0)
            }, !(s.stopImmediatePropagation = function() {
                s.isImmediatePropagationStopped = ke, s.stopPropagation()
            }) == ((u = s).isDefaultPrevented === ke || u.isDefaultPrevented === Se) && (s.isDefaultPrevented = Se, s.isPropagationStopped = Se, s.isImmediatePropagationStopped = Se), "undefined" == typeof s.metaKey && (s.metaKey = !1), s
        },
        _e = function(e, t, n) {
            var r = e.document,
                o = {
                    type: "ready"
                };
            if (n.domLoaded) t(o);
            else {
                var i = function() {
                        return "complete" === r.readyState || "interactive" === r.readyState && r.body
                    },
                    a = function() {
                        n.domLoaded || (n.domLoaded = !0, t(o))
                    },
                    u = function() {
                        i() && (Ae(r, "readystatechange", u), a())
                    },
                    s = function() {
                        try {
                            r.documentElement.doScroll("left")
                        } catch (e) {
                            return void we.setTimeout(s)
                        }
                        a()
                    };
                !r.addEventListener || ve.ie && ve.ie < 11 ? (Te(r, "readystatechange", u), r.documentElement.doScroll && e.self === e.top && s()) : i() ? a() : Te(e, "DOMContentLoaded", a), Te(e, "load", a)
            }
        },
        Be = function() {
            var m, p, g, h, v, y = this,
                b = {};
            p = "mce-data-" + (+new Date).toString(32), h = "onmouseenter" in document.documentElement, g = "onfocusin" in document.documentElement, v = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }, m = 1, y.domLoaded = !1, y.events = b;
            var C = function(e, t) {
                var n, r, o, i, a = b[t];
                if (n = a && a[e.type])
                    for (r = 0, o = n.length; r < o; r++)
                        if ((i = n[r]) && !1 === i.func.call(i.scope, e) && e.preventDefault(), e.isImmediatePropagationStopped()) return
            };
            y.bind = function(e, t, n, r) {
                var o, i, a, u, s, c, l, f = window,
                    d = function(e) {
                        C(Re(e || f.event), o)
                    };
                if (e && 3 !== e.nodeType && 8 !== e.nodeType) {
                    for (e[p] ? o = e[p] : (o = m++, e[p] = o, b[o] = {}), r = r || e, a = (t = t.split(" ")).length; a--;) c = d, s = l = !1, "DOMContentLoaded" === (u = t[a]) && (u = "ready"), y.domLoaded && "ready" === u && "complete" === e.readyState ? n.call(r, Re({
                        type: u
                    })) : (h || (s = v[u]) && (c = function(e) {
                        var t, n;
                        if (t = e.currentTarget, (n = e.relatedTarget) && t.contains) n = t.contains(n);
                        else
                            for (; n && n !== t;) n = n.parentNode;
                        n || ((e = Re(e || f.event)).type = "mouseout" === e.type ? "mouseleave" : "mouseenter", e.target = t, C(e, o))
                    }), g || "focusin" !== u && "focusout" !== u || (l = !0, s = "focusin" === u ? "focus" : "blur", c = function(e) {
                        (e = Re(e || f.event)).type = "focus" === e.type ? "focusin" : "focusout", C(e, o)
                    }), (i = b[o][u]) ? "ready" === u && y.domLoaded ? n({
                        type: u
                    }) : i.push({
                        func: n,
                        scope: r
                    }) : (b[o][u] = i = [{
                        func: n,
                        scope: r
                    }], i.fakeName = s, i.capture = l, i.nativeHandler = c, "ready" === u ? _e(e, c, y) : Te(e, s || u, c, l)));
                    return e = i = 0, n
                }
            }, y.unbind = function(e, t, n) {
                var r, o, i, a, u, s;
                if (!e || 3 === e.nodeType || 8 === e.nodeType) return y;
                if (r = e[p]) {
                    if (s = b[r], t) {
                        for (i = (t = t.split(" ")).length; i--;)
                            if (o = s[u = t[i]]) {
                                if (n)
                                    for (a = o.length; a--;)
                                        if (o[a].func === n) {
                                            var c = o.nativeHandler,
                                                l = o.fakeName,
                                                f = o.capture;
                                            (o = o.slice(0, a).concat(o.slice(a + 1))).nativeHandler = c, o.fakeName = l, o.capture = f, s[u] = o
                                        }
                                n && 0 !== o.length || (delete s[u], Ae(e, o.fakeName || u, o.nativeHandler, o.capture))
                            }
                    } else {
                        for (u in s) o = s[u], Ae(e, o.fakeName || u, o.nativeHandler, o.capture);
                        s = {}
                    }
                    for (u in s) return y;
                    delete b[r];
                    try {
                        delete e[p]
                    } catch (d) {
                        e[p] = null
                    }
                }
                return y
            }, y.fire = function(e, t, n) {
                var r;
                if (!e || 3 === e.nodeType || 8 === e.nodeType) return y;
                for ((n = Re(null, n)).type = t, n.target = e;
                    (r = e[p]) && C(n, r), (e = e.parentNode || e.ownerDocument || e.defaultView || e.parentWindow) && !n.isPropagationStopped(););
                return y
            }, y.clean = function(e) {
                var t, n, r = y.unbind;
                if (!e || 3 === e.nodeType || 8 === e.nodeType) return y;
                if (e[p] && r(e), e.getElementsByTagName || (e = e.document), e && e.getElementsByTagName)
                    for (r(e), t = (n = e.getElementsByTagName("*")).length; t--;)(e = n[t])[p] && r(e);
                return y
            }, y.destroy = function() {
                b = {}
            }, y.cancel = function(e) {
                return e && (e.preventDefault(), e.stopImmediatePropagation()), !1
            }
        };
    Be.Event = new Be, Be.Event.bind(window, "ready", function() {});
    var De = "sizzle" + -new Date,
        Oe = window.document,
        Pe = 0,
        Le = 0,
        Ie = pt(),
        Me = pt(),
        Fe = pt(),
        ze = function(e, t) {
            return e === t && (ce = !0), 0
        },
        Ue = typeof undefined,
        qe = {}.hasOwnProperty,
        Ve = [],
        He = Ve.pop,
        je = Ve.push,
        $e = Ve.push,
        We = Ve.slice,
        Ke = Ve.indexOf || function(e) {
            for (var t = 0, n = this.length; t < n; t++)
                if (this[t] === e) return t;
            return -1
        },
        Xe = "[\\x20\\t\\r\\n\\f]",
        Ye = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        Ge = "\\[" + Xe + "*(" + Ye + ")(?:" + Xe + "*([*^$|!~]?=)" + Xe + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + Ye + "))|)" + Xe + "*\\]",
        Je = ":(" + Ye + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + Ge + ")*)|.*)\\)|)",
        Qe = new RegExp("^" + Xe + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Xe + "+$", "g"),
        Ze = new RegExp("^" + Xe + "*," + Xe + "*"),
        et = new RegExp("^" + Xe + "*([>+~]|" + Xe + ")" + Xe + "*"),
        tt = new RegExp("=" + Xe + "*([^\\]'\"]*?)" + Xe + "*\\]", "g"),
        nt = new RegExp(Je),
        rt = new RegExp("^" + Ye + "$"),
        ot = {
            ID: new RegExp("^#(" + Ye + ")"),
            CLASS: new RegExp("^\\.(" + Ye + ")"),
            TAG: new RegExp("^(" + Ye + "|[*])"),
            ATTR: new RegExp("^" + Ge),
            PSEUDO: new RegExp("^" + Je),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + Xe + "*(even|odd|(([+-]|)(\\d*)n|)" + Xe + "*(?:([+-]|)" + Xe + "*(\\d+)|))" + Xe + "*\\)|)", "i"),
            bool: new RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
            needsContext: new RegExp("^" + Xe + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + Xe + "*((?:-\\d)?\\d*)" + Xe + "*\\)|)(?=[^-]|$)", "i")
        },
        it = /^(?:input|select|textarea|button)$/i,
        at = /^h\d$/i,
        ut = /^[^{]+\{\s*\[native \w/,
        st = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ct = /[+~]/,
        lt = /'|\\/g,
        ft = new RegExp("\\\\([\\da-f]{1,6}" + Xe + "?|(" + Xe + ")|.)", "ig"),
        dt = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        };
    try {
        $e.apply(Ve = We.call(Oe.childNodes), Oe.childNodes), Ve[Oe.childNodes.length].nodeType
    } catch (Dw) {
        $e = {
            apply: Ve.length ? function(e, t) {
                je.apply(e, We.call(t))
            } : function(e, t) {
                for (var n = e.length, r = 0; e[n++] = t[r++];);
                e.length = n - 1
            }
        }
    }
    var mt = function(e, t, n, r) {
        var o, i, a, u, s, c, l, f, d, m;
        if ((t ? t.ownerDocument || t : Oe) !== fe && le(t), n = n || [], !e || "string" != typeof e) return n;
        if (1 !== (u = (t = t || fe).nodeType) && 9 !== u) return [];
        if (me && !r) {
            if (o = st.exec(e))
                if (a = o[1]) {
                    if (9 === u) {
                        if (!(i = t.getElementById(a)) || !i.parentNode) return n;
                        if (i.id === a) return n.push(i), n
                    } else if (t.ownerDocument && (i = t.ownerDocument.getElementById(a)) && he(t, i) && i.id === a) return n.push(i), n
                } else {
                    if (o[2]) return $e.apply(n, t.getElementsByTagName(e)), n;
                    if ((a = o[3]) && ee.getElementsByClassName) return $e.apply(n, t.getElementsByClassName(a)), n
                }
            if (ee.qsa && (!pe || !pe.test(e))) {
                if (f = l = De, d = t, m = 9 === u && e, 1 === u && "object" !== t.nodeName.toLowerCase()) {
                    for (c = oe(e), (l = t.getAttribute("id")) ? f = l.replace(lt, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", s = c.length; s--;) c[s] = f + wt(c[s]);
                    d = ct.test(e) && Ct(t.parentNode) || t, m = c.join(",")
                }
                if (m) try {
                    return $e.apply(n, d.querySelectorAll(m)), n
                } catch (p) {} finally {
                    l || t.removeAttribute("id")
                }
            }
        }
        return ae(e.replace(Qe, "$1"), t, n, r)
    };

    function pt() {
        var r = [];
        return function e(t, n) {
            return r.push(t + " ") > te.cacheLength && delete e[r.shift()], e[t + " "] = n
        }
    }

    function gt(e) {
        return e[De] = !0, e
    }

    function ht(e, t) {
        var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
        if (r) return r;
        if (n)
            for (; n = n.nextSibling;)
                if (n === t) return -1;
        return e ? 1 : -1
    }

    function vt(t) {
        return function(e) {
            return "input" === e.nodeName.toLowerCase() && e.type === t
        }
    }

    function yt(n) {
        return function(e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t || "button" === t) && e.type === n
        }
    }

    function bt(a) {
        return gt(function(i) {
            return i = +i, gt(function(e, t) {
                for (var n, r = a([], e.length, i), o = r.length; o--;) e[n = r[o]] && (e[n] = !(t[n] = e[n]))
            })
        })
    }

    function Ct(e) {
        return e && typeof e.getElementsByTagName !== Ue && e
    }
    for (Z in ee = mt.support = {}, re = mt.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, le = mt.setDocument = function(e) {
            var t, s = e ? e.ownerDocument || e : Oe,
                n = s.defaultView;
            return s !== fe && 9 === s.nodeType && s.documentElement ? (de = (fe = s).documentElement, me = !re(s), n && n !== function(e) {
                try {
                    return e.top
                } catch (t) {}
                return null
            }(n) && (n.addEventListener ? n.addEventListener("unload", function() {
                le()
            }, !1) : n.attachEvent && n.attachEvent("onunload", function() {
                le()
            })), ee.attributes = !0, ee.getElementsByTagName = !0, ee.getElementsByClassName = ut.test(s.getElementsByClassName), ee.getById = !0, te.find.ID = function(e, t) {
                if (typeof t.getElementById !== Ue && me) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, te.filter.ID = function(e) {
                var t = e.replace(ft, dt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }, te.find.TAG = ee.getElementsByTagName ? function(e, t) {
                if (typeof t.getElementsByTagName !== Ue) return t.getElementsByTagName(e)
            } : function(e, t) {
                var n, r = [],
                    o = 0,
                    i = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return i
            }, te.find.CLASS = ee.getElementsByClassName && function(e, t) {
                if (me) return t.getElementsByClassName(e)
            }, ge = [], pe = [], ee.disconnectedMatch = !0, pe = pe.length && new RegExp(pe.join("|")), ge = ge.length && new RegExp(ge.join("|")), t = ut.test(de.compareDocumentPosition), he = t || ut.test(de.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, ze = t ? function(e, t) {
                if (e === t) return ce = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !ee.sortDetached && t.compareDocumentPosition(e) === n ? e === s || e.ownerDocument === Oe && he(Oe, e) ? -1 : t === s || t.ownerDocument === Oe && he(Oe, t) ? 1 : se ? Ke.call(se, e) - Ke.call(se, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return ce = !0, 0;
                var n, r = 0,
                    o = e.parentNode,
                    i = t.parentNode,
                    a = [e],
                    u = [t];
                if (!o || !i) return e === s ? -1 : t === s ? 1 : o ? -1 : i ? 1 : se ? Ke.call(se, e) - Ke.call(se, t) : 0;
                if (o === i) return ht(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; a[r] === u[r];) r++;
                return r ? ht(a[r], u[r]) : a[r] === Oe ? -1 : u[r] === Oe ? 1 : 0
            }, s) : fe
        }, mt.matches = function(e, t) {
            return mt(e, null, null, t)
        }, mt.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== fe && le(e), t = t.replace(tt, "='$1']"), ee.matchesSelector && me && (!ge || !ge.test(t)) && (!pe || !pe.test(t))) try {
                var n = (void 0).call(e, t);
                if (n || ee.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (Dw) {}
            return 0 < mt(t, fe, null, [e]).length
        }, mt.contains = function(e, t) {
            return (e.ownerDocument || e) !== fe && le(e), he(e, t)
        }, mt.attr = function(e, t) {
            (e.ownerDocument || e) !== fe && le(e);
            var n = te.attrHandle[t.toLowerCase()],
                r = n && qe.call(te.attrHandle, t.toLowerCase()) ? n(e, t, !me) : undefined;
            return r !== undefined ? r : ee.attributes || !me ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, mt.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, mt.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                o = 0;
            if (ce = !ee.detectDuplicates, se = !ee.sortStable && e.slice(0), e.sort(ze), ce) {
                for (; t = e[o++];) t === e[o] && (r = n.push(o));
                for (; r--;) e.splice(n[r], 1)
            }
            return se = null, e
        }, ne = mt.getText = function(e) {
            var t, n = "",
                r = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += ne(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[r++];) n += ne(t);
            return n
        }, (te = mt.selectors = {
            cacheLength: 50,
            createPseudo: gt,
            match: ot,
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
                ATTR: function(e) {
                    return e[1] = e[1].replace(ft, dt), e[3] = (e[3] || e[4] || e[5] || "").replace(ft, dt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || mt.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && mt.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return ot.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && nt.test(n) && (t = oe(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ft, dt).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = Ie[e + " "];
                    return t || (t = new RegExp("(^|" + Xe + ")" + e + "(" + Xe + "|$)")) && Ie(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== Ue && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, r, o) {
                    return function(e) {
                        var t = mt.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === o : "!=" === r ? t !== o : "^=" === r ? o && 0 === t.indexOf(o) : "*=" === r ? o && -1 < t.indexOf(o) : "$=" === r ? o && t.slice(-o.length) === o : "~=" === r ? -1 < (" " + t + " ").indexOf(o) : "|=" === r && (t === o || t.slice(0, o.length + 1) === o + "-"))
                    }
                },
                CHILD: function(m, e, t, p, g) {
                    var h = "nth" !== m.slice(0, 3),
                        v = "last" !== m.slice(-4),
                        y = "of-type" === e;
                    return 1 === p && 0 === g ? function(e) {
                        return !!e.parentNode
                    } : function(e, t, n) {
                        var r, o, i, a, u, s, c = h !== v ? "nextSibling" : "previousSibling",
                            l = e.parentNode,
                            f = y && e.nodeName.toLowerCase(),
                            d = !n && !y;
                        if (l) {
                            if (h) {
                                for (; c;) {
                                    for (i = e; i = i[c];)
                                        if (y ? i.nodeName.toLowerCase() === f : 1 === i.nodeType) return !1;
                                    s = c = "only" === m && !s && "nextSibling"
                                }
                                return !0
                            }
                            if (s = [v ? l.firstChild : l.lastChild], v && d) {
                                for (u = (r = (o = l[De] || (l[De] = {}))[m] || [])[0] === Pe && r[1], a = r[0] === Pe && r[2], i = u && l.childNodes[u]; i = ++u && i && i[c] || (a = u = 0) || s.pop();)
                                    if (1 === i.nodeType && ++a && i === e) {
                                        o[m] = [Pe, u, a];
                                        break
                                    }
                            } else if (d && (r = (e[De] || (e[De] = {}))[m]) && r[0] === Pe) a = r[1];
                            else
                                for (;
                                    (i = ++u && i && i[c] || (a = u = 0) || s.pop()) && ((y ? i.nodeName.toLowerCase() !== f : 1 !== i.nodeType) || !++a || (d && ((i[De] || (i[De] = {}))[m] = [Pe, a]), i !== e)););
                            return (a -= g) === p || a % p == 0 && 0 <= a / p
                        }
                    }
                },
                PSEUDO: function(e, i) {
                    var t, a = te.pseudos[e] || te.setFilters[e.toLowerCase()] || mt.error("unsupported pseudo: " + e);
                    return a[De] ? a(i) : 1 < a.length ? (t = [e, e, "", i], te.setFilters.hasOwnProperty(e.toLowerCase()) ? gt(function(e, t) {
                        for (var n, r = a(e, i), o = r.length; o--;) e[n = Ke.call(e, r[o])] = !(t[n] = r[o])
                    }) : function(e) {
                        return a(e, 0, t)
                    }) : a
                }
            },
            pseudos: {
                not: gt(function(e) {
                    var r = [],
                        o = [],
                        u = ie(e.replace(Qe, "$1"));
                    return u[De] ? gt(function(e, t, n, r) {
                        for (var o, i = u(e, null, r, []), a = e.length; a--;)(o = i[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, t, n) {
                        return r[0] = e, u(r, null, n, o), !o.pop()
                    }
                }),
                has: gt(function(t) {
                    return function(e) {
                        return 0 < mt(t, e).length
                    }
                }),
                contains: gt(function(t) {
                    return t = t.replace(ft, dt),
                        function(e) {
                            return -1 < (e.textContent || e.innerText || ne(e)).indexOf(t)
                        }
                }),
                lang: gt(function(n) {
                    return rt.test(n || "") || mt.error("unsupported lang: " + n), n = n.replace(ft, dt).toLowerCase(),
                        function(e) {
                            var t;
                            do {
                                if (t = me ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var t = window.location && window.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === de
                },
                focus: function(e) {
                    return e === fe.activeElement && (!fe.hasFocus || fe.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return !1 === e.disabled
                },
                disabled: function(e) {
                    return !0 === e.disabled
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !te.pseudos.empty(e)
                },
                header: function(e) {
                    return at.test(e.nodeName)
                },
                input: function(e) {
                    return it.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: bt(function() {
                    return [0]
                }),
                last: bt(function(e, t) {
                    return [t - 1]
                }),
                eq: bt(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: bt(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: bt(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: bt(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
                    return e
                }),
                gt: bt(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = te.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) te.pseudos[Z] = vt(Z);
    for (Z in {
            submit: !0,
            reset: !0
        }) te.pseudos[Z] = yt(Z);

    function xt() {}

    function wt(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
        return r
    }

    function Nt(a, e, t) {
        var u = e.dir,
            s = t && "parentNode" === u,
            c = Le++;
        return e.first ? function(e, t, n) {
            for (; e = e[u];)
                if (1 === e.nodeType || s) return a(e, t, n)
        } : function(e, t, n) {
            var r, o, i = [Pe, c];
            if (n) {
                for (; e = e[u];)
                    if ((1 === e.nodeType || s) && a(e, t, n)) return !0
            } else
                for (; e = e[u];)
                    if (1 === e.nodeType || s) {
                        if ((r = (o = e[De] || (e[De] = {}))[u]) && r[0] === Pe && r[1] === c) return i[2] = r[2];
                        if ((o[u] = i)[2] = a(e, t, n)) return !0
                    }
        }
    }

    function Et(o) {
        return 1 < o.length ? function(e, t, n) {
            for (var r = o.length; r--;)
                if (!o[r](e, t, n)) return !1;
            return !0
        } : o[0]
    }

    function St(e, t, n, r, o) {
        for (var i, a = [], u = 0, s = e.length, c = null != t; u < s; u++)(i = e[u]) && (n && !n(i, r, o) || (a.push(i), c && t.push(u)));
        return a
    }

    function kt(m, p, g, h, v, e) {
        return h && !h[De] && (h = kt(h)), v && !v[De] && (v = kt(v, e)), gt(function(e, t, n, r) {
            var o, i, a, u = [],
                s = [],
                c = t.length,
                l = e || function(e, t, n) {
                    for (var r = 0, o = t.length; r < o; r++) mt(e, t[r], n);
                    return n
                }(p || "*", n.nodeType ? [n] : n, []),
                f = !m || !e && p ? l : St(l, u, m, n, r),
                d = g ? v || (e ? m : c || h) ? [] : t : f;
            if (g && g(f, d, n, r), h)
                for (o = St(d, s), h(o, [], n, r), i = o.length; i--;)(a = o[i]) && (d[s[i]] = !(f[s[i]] = a));
            if (e) {
                if (v || m) {
                    if (v) {
                        for (o = [], i = d.length; i--;)(a = d[i]) && o.push(f[i] = a);
                        v(null, d = [], o, r)
                    }
                    for (i = d.length; i--;)(a = d[i]) && -1 < (o = v ? Ke.call(e, a) : u[i]) && (e[o] = !(t[o] = a))
                }
            } else d = St(d === t ? d.splice(c, d.length) : d), v ? v(null, t, d, r) : $e.apply(t, d)
        })
    }

    function Tt(e) {
        for (var r, t, n, o = e.length, i = te.relative[e[0].type], a = i || te.relative[" "], u = i ? 1 : 0, s = Nt(function(e) {
                return e === r
            }, a, !0), c = Nt(function(e) {
                return -1 < Ke.call(r, e)
            }, a, !0), l = [function(e, t, n) {
                return !i && (n || t !== ue) || ((r = t).nodeType ? s(e, t, n) : c(e, t, n))
            }]; u < o; u++)
            if (t = te.relative[e[u].type]) l = [Nt(Et(l), t)];
            else {
                if ((t = te.filter[e[u].type].apply(null, e[u].matches))[De]) {
                    for (n = ++u; n < o && !te.relative[e[n].type]; n++);
                    return kt(1 < u && Et(l), 1 < u && wt(e.slice(0, u - 1).concat({
                        value: " " === e[u - 2].type ? "*" : ""
                    })).replace(Qe, "$1"), t, u < n && Tt(e.slice(u, n)), n < o && Tt(e = e.slice(n)), n < o && wt(e))
                }
                l.push(t)
            }
        return Et(l)
    }
    xt.prototype = te.filters = te.pseudos, te.setFilters = new xt, oe = mt.tokenize = function(e, t) {
        var n, r, o, i, a, u, s, c = Me[e + " "];
        if (c) return t ? 0 : c.slice(0);
        for (a = e, u = [], s = te.preFilter; a;) {
            for (i in n && !(r = Ze.exec(a)) || (r && (a = a.slice(r[0].length) || a), u.push(o = [])), n = !1, (r = et.exec(a)) && (n = r.shift(), o.push({
                    value: n,
                    type: r[0].replace(Qe, " ")
                }), a = a.slice(n.length)), te.filter) !(r = ot[i].exec(a)) || s[i] && !(r = s[i](r)) || (n = r.shift(), o.push({
                value: n,
                type: i,
                matches: r
            }), a = a.slice(n.length));
            if (!n) break
        }
        return t ? a.length : a ? mt.error(e) : Me(e, u).slice(0)
    }, ie = mt.compile = function(e, t) {
        var n, h, v, y, b, r, o = [],
            i = [],
            a = Fe[e + " "];
        if (!a) {
            for (t || (t = oe(e)), n = t.length; n--;)(a = Tt(t[n]))[De] ? o.push(a) : i.push(a);
            (a = Fe(e, (h = i, y = 0 < (v = o).length, b = 0 < h.length, r = function(e, t, n, r, o) {
                var i, a, u, s = 0,
                    c = "0",
                    l = e && [],
                    f = [],
                    d = ue,
                    m = e || b && te.find.TAG("*", o),
                    p = Pe += null == d ? 1 : Math.random() || .1,
                    g = m.length;
                for (o && (ue = t !== fe && t); c !== g && null != (i = m[c]); c++) {
                    if (b && i) {
                        for (a = 0; u = h[a++];)
                            if (u(i, t, n)) {
                                r.push(i);
                                break
                            }
                        o && (Pe = p)
                    }
                    y && ((i = !u && i) && s--, e && l.push(i))
                }
                if (s += c, y && c !== s) {
                    for (a = 0; u = v[a++];) u(l, f, t, n);
                    if (e) {
                        if (0 < s)
                            for (; c--;) l[c] || f[c] || (f[c] = He.call(r));
                        f = St(f)
                    }
                    $e.apply(r, f), o && !e && 0 < f.length && 1 < s + v.length && mt.uniqueSort(r)
                }
                return o && (Pe = p, ue = d), l
            }, y ? gt(r) : r))).selector = e
        }
        return a
    }, ae = mt.select = function(e, t, n, r) {
        var o, i, a, u, s, c = "function" == typeof e && e,
            l = !r && oe(e = c.selector || e);
        if (n = n || [], 1 === l.length) {
            if (2 < (i = l[0] = l[0].slice(0)).length && "ID" === (a = i[0]).type && ee.getById && 9 === t.nodeType && me && te.relative[i[1].type]) {
                if (!(t = (te.find.ID(a.matches[0].replace(ft, dt), t) || [])[0])) return n;
                c && (t = t.parentNode), e = e.slice(i.shift().value.length)
            }
            for (o = ot.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o], !te.relative[u = a.type]);)
                if ((s = te.find[u]) && (r = s(a.matches[0].replace(ft, dt), ct.test(i[0].type) && Ct(t.parentNode) || t))) {
                    if (i.splice(o, 1), !(e = r.length && wt(i))) return $e.apply(n, r), n;
                    break
                }
        }
        return (c || ie(e, l))(r, t, !me, n, ct.test(e) && Ct(t.parentNode) || t), n
    }, ee.sortStable = De.split("").sort(ze).join("") === De, ee.detectDuplicates = !!ce, le(), ee.sortDetached = !0;
    var At = Array.isArray,
        Rt = function(e, t, n) {
            var r, o;
            if (!e) return 0;
            if (n = n || e, e.length !== undefined) {
                for (r = 0, o = e.length; r < o; r++)
                    if (!1 === t.call(n, e[r], r, e)) return 0
            } else
                for (r in e)
                    if (e.hasOwnProperty(r) && !1 === t.call(n, e[r], r, e)) return 0; return 1
        },
        _t = function(e, t, n) {
            var r, o;
            for (r = 0, o = e.length; r < o; r++)
                if (t.call(n, e[r], r, e)) return r;
            return -1
        },
        Bt = {
            isArray: At,
            toArray: function(e) {
                var t, n, r = e;
                if (!At(e))
                    for (r = [], t = 0, n = e.length; t < n; t++) r[t] = e[t];
                return r
            },
            each: Rt,
            map: function(n, r) {
                var o = [];
                return Rt(n, function(e, t) {
                    o.push(r(e, t, n))
                }), o
            },
            filter: function(n, r) {
                var o = [];
                return Rt(n, function(e, t) {
                    r && !r(e, t, n) || o.push(e)
                }), o
            },
            indexOf: function(e, t) {
                var n, r;
                if (e)
                    for (n = 0, r = e.length; n < r; n++)
                        if (e[n] === t) return n;
                return -1
            },
            reduce: function(e, t, n, r) {
                var o = 0;
                for (arguments.length < 3 && (n = e[0]); o < e.length; o++) n = t.call(r, n, e[o], o);
                return n
            },
            findIndex: _t,
            find: function(e, t, n) {
                var r = _t(e, t, n);
                return -1 !== r ? e[r] : undefined
            },
            last: function(e) {
                return e[e.length - 1]
            }
        },
        Dt = /^\s*|\s*$/g,
        Ot = function(e) {
            return null === e || e === undefined ? "" : ("" + e).replace(Dt, "")
        },
        Pt = function(e, t) {
            return t ? !("array" !== t || !Bt.isArray(e)) || typeof e === t : e !== undefined
        },
        Lt = function(e, n, r, o) {
            o = o || this, e && (r && (e = e[r]), Bt.each(e, function(e, t) {
                if (!1 === n.call(o, e, t, r)) return !1;
                Lt(e, n, r, o)
            }))
        },
        It = {
            trim: Ot,
            isArray: Bt.isArray,
            is: Pt,
            toArray: Bt.toArray,
            makeMap: function(e, t, n) {
                var r;
                for (t = t || ",", "string" == typeof(e = e || []) && (e = e.split(t)), n = n || {}, r = e.length; r--;) n[e[r]] = {};
                return n
            },
            each: Bt.each,
            map: Bt.map,
            grep: Bt.filter,
            inArray: Bt.indexOf,
            hasOwn: function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            },
            extend: function(e, t) {
                for (var n, r, o, i = [], a = 2; a < arguments.length; a++) i[a - 2] = arguments[a];
                var u, s = arguments;
                for (n = 1, r = s.length; n < r; n++)
                    for (o in t = s[n]) t.hasOwnProperty(o) && (u = t[o]) !== undefined && (e[o] = u);
                return e
            },
            create: function(e, t, n) {
                var r, o, i, a, u, s = this,
                    c = 0;
                if (e = /^((static) )?([\w.]+)(:([\w.]+))?/.exec(e), i = e[3].match(/(^|\.)(\w+)$/i)[2], !(o = s.createNS(e[3].replace(/\.\w+$/, ""), n))[i]) {
                    if ("static" === e[2]) return o[i] = t, void(this.onCreate && this.onCreate(e[2], e[3], o[i]));
                    t[i] || (t[i] = function() {}, c = 1), o[i] = t[i], s.extend(o[i].prototype, t), e[5] && (r = s.resolve(e[5]).prototype, a = e[5].match(/\.(\w+)$/i)[1], u = o[i], o[i] = c ? function() {
                        return r[a].apply(this, arguments)
                    } : function() {
                        return this.parent = r[a], u.apply(this, arguments)
                    }, o[i].prototype[i] = o[i], s.each(r, function(e, t) {
                        o[i].prototype[t] = r[t]
                    }), s.each(t, function(e, t) {
                        r[t] ? o[i].prototype[t] = function() {
                            return this.parent = r[t], e.apply(this, arguments)
                        } : t !== i && (o[i].prototype[t] = e)
                    })), s.each(t["static"], function(e, t) {
                        o[i][t] = e
                    })
                }
            },
            walk: Lt,
            createNS: function(e, t) {
                var n, r;
                for (t = t || window, e = e.split("."), n = 0; n < e.length; n++) t[r = e[n]] || (t[r] = {}), t = t[r];
                return t
            },
            resolve: function(e, t) {
                var n, r;
                for (t = t || window, n = 0, r = (e = e.split(".")).length; n < r && (t = t[e[n]]); n++);
                return t
            },
            explode: function(e, t) {
                return !e || Pt(e, "array") ? e : Bt.map(e.split(t || ","), Ot)
            },
            _addCacheSuffix: function(e) {
                var t = ve.cacheSuffix;
                return t && (e += (-1 === e.indexOf("?") ? "?" : "&") + t), e
            }
        },
        Mt = document,
        Ft = Array.prototype.push,
        zt = Array.prototype.slice,
        Ut = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        qt = Be.Event,
        Vt = It.makeMap("children,contents,next,prev"),
        Ht = function(e) {
            return void 0 !== e
        },
        jt = function(e) {
            return "string" == typeof e
        },
        $t = function(e, t) {
            var n, r, o;
            for (o = (t = t || Mt).createElement("div"), n = t.createDocumentFragment(), o.innerHTML = e; r = o.firstChild;) n.appendChild(r);
            return n
        },
        Wt = function(e, t, n, r) {
            var o;
            if (jt(t)) t = $t(t, un(e[0]));
            else if (t.length && !t.nodeType) {
                if (t = tn.makeArray(t), r)
                    for (o = t.length - 1; 0 <= o; o--) Wt(e, t[o], n, r);
                else
                    for (o = 0; o < t.length; o++) Wt(e, t[o], n, r);
                return e
            }
            if (t.nodeType)
                for (o = e.length; o--;) n.call(e[o], t);
            return e
        },
        Kt = function(e, t) {
            return e && t && -1 !== (" " + e.className + " ").indexOf(" " + t + " ")
        },
        Xt = function(e, t, n) {
            var r, o;
            return t = tn(t)[0], e.each(function() {
                var e = this;
                n && r === e.parentNode || (r = e.parentNode, o = t.cloneNode(!1), e.parentNode.insertBefore(o, e)), o.appendChild(e)
            }), e
        },
        Yt = It.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom", " "),
        Gt = It.makeMap("checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected", " "),
        Jt = {
            "for": "htmlFor",
            "class": "className",
            readonly: "readOnly"
        },
        Qt = {
            "float": "cssFloat"
        },
        Zt = {},
        en = {},
        tn = function(e, t) {
            return new tn.fn.init(e, t)
        },
        nn = /^\s*|\s*$/g,
        rn = function(e) {
            return null === e || e === undefined ? "" : ("" + e).replace(nn, "")
        },
        on = function(e, t) {
            var n, r, o, i;
            if (e)
                if ((n = e.length) === undefined) {
                    for (r in e)
                        if (e.hasOwnProperty(r) && (i = e[r], !1 === t.call(i, r, i))) break
                } else
                    for (o = 0; o < n && (i = e[o], !1 !== t.call(i, o, i)); o++);
            return e
        },
        an = function(e, n) {
            var r = [];
            return on(e, function(e, t) {
                n(t, e) && r.push(t)
            }), r
        },
        un = function(e) {
            return e ? 9 === e.nodeType ? e : e.ownerDocument : Mt
        };
    tn.fn = tn.prototype = {
        constructor: tn,
        selector: "",
        context: null,
        length: 0,
        init: function(e, t) {
            var n, r, o = this;
            if (!e) return o;
            if (e.nodeType) return o.context = o[0] = e, o.length = 1, o;
            if (t && t.nodeType) o.context = t;
            else {
                if (t) return tn(e).attr(t);
                o.context = t = document
            }
            if (jt(e)) {
                if (!(n = "<" === (o.selector = e).charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : Ut.exec(e))) return tn(t).find(e);
                if (n[1])
                    for (r = $t(e, un(t)).firstChild; r;) Ft.call(o, r), r = r.nextSibling;
                else {
                    if (!(r = un(t).getElementById(n[2]))) return o;
                    if (r.id !== n[2]) return o.find(e);
                    o.length = 1, o[0] = r
                }
            } else this.add(e, !1);
            return o
        },
        toArray: function() {
            return It.toArray(this)
        },
        add: function(e, t) {
            var n, r, o = this;
            if (jt(e)) return o.add(tn(e));
            if (!1 !== t)
                for (n = tn.unique(o.toArray().concat(tn.makeArray(e))), o.length = n.length, r = 0; r < n.length; r++) o[r] = n[r];
            else Ft.apply(o, tn.makeArray(e));
            return o
        },
        attr: function(t, n) {
            var e, r = this;
            if ("object" == typeof t) on(t, function(e, t) {
                r.attr(e, t)
            });
            else {
                if (!Ht(n)) {
                    if (r[0] && 1 === r[0].nodeType) {
                        if ((e = Zt[t]) && e.get) return e.get(r[0], t);
                        if (Gt[t]) return r.prop(t) ? t : undefined;
                        null === (n = r[0].getAttribute(t, 2)) && (n = undefined)
                    }
                    return n
                }
                this.each(function() {
                    var e;
                    if (1 === this.nodeType) {
                        if ((e = Zt[t]) && e.set) return void e.set(this, n);
                        null === n ? this.removeAttribute(t, 2) : this.setAttribute(t, n, 2)
                    }
                })
            }
            return r
        },
        removeAttr: function(e) {
            return this.attr(e, null)
        },
        prop: function(e, t) {
            var n = this;
            if ("object" == typeof(e = Jt[e] || e)) on(e, function(e, t) {
                n.prop(e, t)
            });
            else {
                if (!Ht(t)) return n[0] && n[0].nodeType && e in n[0] ? n[0][e] : t;
                this.each(function() {
                    1 === this.nodeType && (this[e] = t)
                })
            }
            return n
        },
        css: function(n, r) {
            var e, o, i = this,
                t = function(e) {
                    return e.replace(/-(\D)/g, function(e, t) {
                        return t.toUpperCase()
                    })
                },
                a = function(e) {
                    return e.replace(/[A-Z]/g, function(e) {
                        return "-" + e
                    })
                };
            if ("object" == typeof n) on(n, function(e, t) {
                i.css(e, t)
            });
            else if (Ht(r)) n = t(n), "number" != typeof r || Yt[n] || (r = r.toString() + "px"), i.each(function() {
                var e = this.style;
                if ((o = en[n]) && o.set) o.set(this, r);
                else {
                    try {
                        this.style[Qt[n] || n] = r
                    } catch (t) {}
                    null !== r && "" !== r || (e.removeProperty ? e.removeProperty(a(n)) : e.removeAttribute(n))
                }
            });
            else {
                if (e = i[0], (o = en[n]) && o.get) return o.get(e);
                if (!e.ownerDocument.defaultView) return e.currentStyle ? e.currentStyle[t(n)] : "";
                try {
                    return e.ownerDocument.defaultView.getComputedStyle(e, null).getPropertyValue(a(n))
                } catch (u) {
                    return undefined
                }
            }
            return i
        },
        remove: function() {
            for (var e, t = this.length; t--;) e = this[t], qt.clean(e), e.parentNode && e.parentNode.removeChild(e);
            return this
        },
        empty: function() {
            for (var e, t = this.length; t--;)
                for (e = this[t]; e.firstChild;) e.removeChild(e.firstChild);
            return this
        },
        html: function(e) {
            var t, n = this;
            if (Ht(e)) {
                t = n.length;
                try {
                    for (; t--;) n[t].innerHTML = e
                } catch (r) {
                    tn(n[t]).empty().append(e)
                }
                return n
            }
            return n[0] ? n[0].innerHTML : ""
        },
        text: function(e) {
            var t, n = this;
            if (Ht(e)) {
                for (t = n.length; t--;) "innerText" in n[t] ? n[t].innerText = e : n[0].textContent = e;
                return n
            }
            return n[0] ? n[0].innerText || n[0].textContent : ""
        },
        append: function() {
            return Wt(this, arguments, function(e) {
                (1 === this.nodeType || this.host && 1 === this.host.nodeType) && this.appendChild(e)
            })
        },
        prepend: function() {
            return Wt(this, arguments, function(e) {
                (1 === this.nodeType || this.host && 1 === this.host.nodeType) && this.insertBefore(e, this.firstChild)
            }, !0)
        },
        before: function() {
            return this[0] && this[0].parentNode ? Wt(this, arguments, function(e) {
                this.parentNode.insertBefore(e, this)
            }) : this
        },
        after: function() {
            return this[0] && this[0].parentNode ? Wt(this, arguments, function(e) {
                this.parentNode.insertBefore(e, this.nextSibling)
            }, !0) : this
        },
        appendTo: function(e) {
            return tn(e).append(this), this
        },
        prependTo: function(e) {
            return tn(e).prepend(this), this
        },
        replaceWith: function(e) {
            return this.before(e).remove()
        },
        wrap: function(e) {
            return Xt(this, e)
        },
        wrapAll: function(e) {
            return Xt(this, e, !0)
        },
        wrapInner: function(e) {
            return this.each(function() {
                tn(this).contents().wrapAll(e)
            }), this
        },
        unwrap: function() {
            return this.parent().each(function() {
                tn(this).replaceWith(this.childNodes)
            })
        },
        clone: function() {
            var e = [];
            return this.each(function() {
                e.push(this.cloneNode(!0))
            }), tn(e)
        },
        addClass: function(e) {
            return this.toggleClass(e, !0)
        },
        removeClass: function(e) {
            return this.toggleClass(e, !1)
        },
        toggleClass: function(o, i) {
            var e = this;
            return "string" != typeof o || (-1 !== o.indexOf(" ") ? on(o.split(" "), function() {
                e.toggleClass(this, i)
            }) : e.each(function(e, t) {
                var n, r;
                (r = Kt(t, o)) !== i && (n = t.className, r ? t.className = rn((" " + n + " ").replace(" " + o + " ", " ")) : t.className += n ? " " + o : o)
            })), e
        },
        hasClass: function(e) {
            return Kt(this[0], e)
        },
        each: function(e) {
            return on(this, e)
        },
        on: function(e, t) {
            return this.each(function() {
                qt.bind(this, e, t)
            })
        },
        off: function(e, t) {
            return this.each(function() {
                qt.unbind(this, e, t)
            })
        },
        trigger: function(e) {
            return this.each(function() {
                "object" == typeof e ? qt.fire(this, e.type, e) : qt.fire(this, e)
            })
        },
        show: function() {
            return this.css("display", "")
        },
        hide: function() {
            return this.css("display", "none")
        },
        slice: function() {
            return new tn(zt.apply(this, arguments))
        },
        eq: function(e) {
            return -1 === e ? this.slice(e) : this.slice(e, +e + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        find: function(e) {
            var t, n, r = [];
            for (t = 0, n = this.length; t < n; t++) tn.find(e, this[t], r);
            return tn(r)
        },
        filter: function(n) {
            return tn("function" == typeof n ? an(this.toArray(), function(e, t) {
                return n(t, e)
            }) : tn.filter(n, this.toArray()))
        },
        closest: function(n) {
            var r = [];
            return n instanceof tn && (n = n[0]), this.each(function(e, t) {
                for (; t;) {
                    if ("string" == typeof n && tn(t).is(n)) {
                        r.push(t);
                        break
                    }
                    if (t === n) {
                        r.push(t);
                        break
                    }
                    t = t.parentNode
                }
            }), tn(r)
        },
        offset: function(e) {
            var t, n, r, o, i = 0,
                a = 0;
            return e ? this.css(e) : ((t = this[0]) && (r = (n = t.ownerDocument).documentElement, t.getBoundingClientRect && (i = (o = t.getBoundingClientRect()).left + (r.scrollLeft || n.body.scrollLeft) - r.clientLeft, a = o.top + (r.scrollTop || n.body.scrollTop) - r.clientTop)), {
                left: i,
                top: a
            })
        },
        push: Ft,
        sort: [].sort,
        splice: [].splice
    }, It.extend(tn, {
        extend: It.extend,
        makeArray: function(e) {
            return (t = e) && t === t.window || e.nodeType ? [e] : It.toArray(e);
            var t
        },
        inArray: function(e, t) {
            var n;
            if (t.indexOf) return t.indexOf(e);
            for (n = t.length; n--;)
                if (t[n] === e) return n;
            return -1
        },
        isArray: It.isArray,
        each: on,
        trim: rn,
        grep: an,
        find: mt,
        expr: mt.selectors,
        unique: mt.uniqueSort,
        text: mt.getText,
        contains: mt.contains,
        filter: function(e, t, n) {
            var r = t.length;
            for (n && (e = ":not(" + e + ")"); r--;) 1 !== t[r].nodeType && t.splice(r, 1);
            return t = 1 === t.length ? tn.find.matchesSelector(t[0], e) ? [t[0]] : [] : tn.find.matches(e, t)
        }
    });
    var sn = function(e, t, n) {
            var r = [],
                o = e[t];
            for ("string" != typeof n && n instanceof tn && (n = n[0]); o && 9 !== o.nodeType;) {
                if (n !== undefined) {
                    if (o === n) break;
                    if ("string" == typeof n && tn(o).is(n)) break
                }
                1 === o.nodeType && r.push(o), o = o[t]
            }
            return r
        },
        cn = function(e, t, n, r) {
            var o = [];
            for (r instanceof tn && (r = r[0]); e; e = e[t])
                if (!n || e.nodeType === n) {
                    if (r !== undefined) {
                        if (e === r) break;
                        if ("string" == typeof r && tn(e).is(r)) break
                    }
                    o.push(e)
                }
            return o
        },
        ln = function(e, t, n) {
            for (e = e[t]; e; e = e[t])
                if (e.nodeType === n) return e;
            return null
        };
    on({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return sn(e, "parentNode")
        },
        next: function(e) {
            return ln(e, "nextSibling", 1)
        },
        prev: function(e) {
            return ln(e, "previousSibling", 1)
        },
        children: function(e) {
            return cn(e.firstChild, "nextSibling", 1)
        },
        contents: function(e) {
            return It.toArray(("iframe" === e.nodeName ? e.contentDocument || e.contentWindow.document : e).childNodes)
        }
    }, function(e, r) {
        tn.fn[e] = function(t) {
            var n = [];
            return this.each(function() {
                var e = r.call(n, this, t, n);
                e && (tn.isArray(e) ? n.push.apply(n, e) : n.push(e))
            }), 1 < this.length && (Vt[e] || (n = tn.unique(n)), 0 === e.indexOf("parents") && (n = n.reverse())), n = tn(n), t ? n.filter(t) : n
        }
    }), on({
        parentsUntil: function(e, t) {
            return sn(e, "parentNode", t)
        },
        nextUntil: function(e, t) {
            return cn(e, "nextSibling", 1, t).slice(1)
        },
        prevUntil: function(e, t) {
            return cn(e, "previousSibling", 1, t).slice(1)
        }
    }, function(r, o) {
        tn.fn[r] = function(t, e) {
            var n = [];
            return this.each(function() {
                var e = o.call(n, this, t, n);
                e && (tn.isArray(e) ? n.push.apply(n, e) : n.push(e))
            }), 1 < this.length && (n = tn.unique(n), 0 !== r.indexOf("parents") && "prevUntil" !== r || (n = n.reverse())), n = tn(n), e ? n.filter(e) : n
        }
    }), tn.fn.is = function(e) {
        return !!e && 0 < this.filter(e).length
    }, tn.fn.init.prototype = tn.fn, tn.overrideDefaults = function(n) {
        var r, o = function(e, t) {
            return r = r || n(), 0 === arguments.length && (e = r.element), t || (t = r.context), new o.fn.init(e, t)
        };
        return tn.extend(o, this), o
    };
    var fn = function(n, r, e) {
        on(e, function(e, t) {
            n[e] = n[e] || {}, n[e][r] = t
        })
    };
    ve.ie && ve.ie < 8 && (fn(Zt, "get", {
        maxlength: function(e) {
            var t = e.maxLength;
            return 2147483647 === t ? undefined : t
        },
        size: function(e) {
            var t = e.size;
            return 20 === t ? undefined : t
        },
        "class": function(e) {
            return e.className
        },
        style: function(e) {
            var t = e.style.cssText;
            return 0 === t.length ? undefined : t
        }
    }), fn(Zt, "set", {
        "class": function(e, t) {
            e.className = t
        },
        style: function(e, t) {
            e.style.cssText = t
        }
    })), ve.ie && ve.ie < 9 && (Qt["float"] = "styleFloat", fn(en, "set", {
        opacity: function(e, t) {
            var n = e.style;
            null === t || "" === t ? n.removeAttribute("filter") : (n.zoom = 1, n.filter = "alpha(opacity=" + 100 * t + ")")
        }
    })), tn.attrHooks = Zt, tn.cssHooks = en;
    var dn, mn = function(e) {
            var t, n = !1;
            return function() {
                return n || (n = !0, t = e.apply(null, arguments)), t
            }
        },
        pn = function(e, t) {
            var n = function(e, t) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    if (r.test(t)) return r
                }
                return undefined
            }(e, t);
            if (!n) return {
                major: 0,
                minor: 0
            };
            var r = function(e) {
                return Number(t.replace(n, "$" + e))
            };
            return hn(r(1), r(2))
        },
        gn = function() {
            return hn(0, 0)
        },
        hn = function(e, t) {
            return {
                major: e,
                minor: t
            }
        },
        vn = {
            nu: hn,
            detect: function(e, t) {
                var n = String(t).toLowerCase();
                return 0 === e.length ? gn() : pn(e, n)
            },
            unknown: gn
        },
        yn = "Firefox",
        bn = function(e, t) {
            return function() {
                return t === e
            }
        },
        Cn = function(e) {
            var t = e.current;
            return {
                current: t,
                version: e.version,
                isEdge: bn("Edge", t),
                isChrome: bn("Chrome", t),
                isIE: bn("IE", t),
                isOpera: bn("Opera", t),
                isFirefox: bn(yn, t),
                isSafari: bn("Safari", t)
            }
        },
        xn = {
            unknown: function() {
                return Cn({
                    current: undefined,
                    version: vn.unknown()
                })
            },
            nu: Cn,
            edge: V.constant("Edge"),
            chrome: V.constant("Chrome"),
            ie: V.constant("IE"),
            opera: V.constant("Opera"),
            firefox: V.constant(yn),
            safari: V.constant("Safari")
        },
        wn = "Windows",
        Nn = "Android",
        En = "Solaris",
        Sn = "FreeBSD",
        kn = function(e, t) {
            return function() {
                return t === e
            }
        },
        Tn = function(e) {
            var t = e.current;
            return {
                current: t,
                version: e.version,
                isWindows: kn(wn, t),
                isiOS: kn("iOS", t),
                isAndroid: kn(Nn, t),
                isOSX: kn("OSX", t),
                isLinux: kn("Linux", t),
                isSolaris: kn(En, t),
                isFreeBSD: kn(Sn, t)
            }
        },
        An = {
            unknown: function() {
                return Tn({
                    current: undefined,
                    version: vn.unknown()
                })
            },
            nu: Tn,
            windows: V.constant(wn),
            ios: V.constant("iOS"),
            android: V.constant(Nn),
            linux: V.constant("Linux"),
            osx: V.constant("OSX"),
            solaris: V.constant(En),
            freebsd: V.constant(Sn)
        },
        Rn = function(e, t) {
            var n = String(t).toLowerCase();
            return H.find(e, function(e) {
                return e.search(n)
            })
        },
        _n = function(e, n) {
            return Rn(e, n).map(function(e) {
                var t = vn.detect(e.versionRegexes, n);
                return {
                    current: e.name,
                    version: t
                }
            })
        },
        Bn = function(e, n) {
            return Rn(e, n).map(function(e) {
                var t = vn.detect(e.versionRegexes, n);
                return {
                    current: e.name,
                    version: t
                }
            })
        },
        Dn = function(e, t) {
            return -1 !== e.indexOf(t)
        },
        On = function(e) {
            return e.replace(/^\s+|\s+$/g, "")
        },
        Pn = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
        Ln = function(t) {
            return function(e) {
                return Dn(e, t)
            }
        },
        In = [{
            name: "Edge",
            versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
            search: function(e) {
                return Dn(e, "edge/") && Dn(e, "chrome") && Dn(e, "safari") && Dn(e, "applewebkit")
            }
        }, {
            name: "Chrome",
            versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, Pn],
            search: function(e) {
                return Dn(e, "chrome") && !Dn(e, "chromeframe")
            }
        }, {
            name: "IE",
            versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/],
            search: function(e) {
                return Dn(e, "msie") || Dn(e, "trident")
            }
        }, {
            name: "Opera",
            versionRegexes: [Pn, /.*?opera\/([0-9]+)\.([0-9]+).*/],
            search: Ln("opera")
        }, {
            name: "Firefox",
            versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
            search: Ln("firefox")
        }, {
            name: "Safari",
            versionRegexes: [Pn, /.*?cpu os ([0-9]+)_([0-9]+).*/],
            search: function(e) {
                return (Dn(e, "safari") || Dn(e, "mobile/")) && Dn(e, "applewebkit")
            }
        }],
        Mn = [{
            name: "Windows",
            search: Ln("win"),
            versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
        }, {
            name: "iOS",
            search: function(e) {
                return Dn(e, "iphone") || Dn(e, "ipad")
            },
            versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/]
        }, {
            name: "Android",
            search: Ln("android"),
            versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
        }, {
            name: "OSX",
            search: Ln("os x"),
            versionRegexes: [/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]
        }, {
            name: "Linux",
            search: Ln("linux"),
            versionRegexes: []
        }, {
            name: "Solaris",
            search: Ln("sunos"),
            versionRegexes: []
        }, {
            name: "FreeBSD",
            search: Ln("freebsd"),
            versionRegexes: []
        }],
        Fn = {
            browsers: V.constant(In),
            oses: V.constant(Mn)
        },
        zn = function(e) {
            var t, n, r, o, i, a, u, s, c, l, f, d = Fn.browsers(),
                m = Fn.oses(),
                p = _n(d, e).fold(xn.unknown, xn.nu),
                g = Bn(m, e).fold(An.unknown, An.nu);
            return {
                browser: p,
                os: g,
                deviceType: (n = p, r = e, o = (t = g).isiOS() && !0 === /ipad/i.test(r), i = t.isiOS() && !o, a = t.isAndroid() && 3 === t.version.major, u = t.isAndroid() && 4 === t.version.major, s = o || a || u && !0 === /mobile/i.test(r), c = t.isiOS() || t.isAndroid(), l = c && !s, f = n.isSafari() && t.isiOS() && !1 === /safari/i.test(r), {
                    isiPad: V.constant(o),
                    isiPhone: V.constant(i),
                    isTablet: V.constant(s),
                    isPhone: V.constant(l),
                    isTouch: V.constant(c),
                    isAndroid: t.isAndroid,
                    isiOS: t.isiOS,
                    isWebView: V.constant(f)
                })
            }
        },
        Un = {
            detect: mn(function() {
                var e = navigator.userAgent;
                return zn(e)
            })
        },
        qn = function(e) {
            if (null === e || e === undefined) throw new Error("Node cannot be null or undefined");
            return {
                dom: V.constant(e)
            }
        },
        Vn = {
            fromHtml: function(e, t) {
                var n = (t || document).createElement("div");
                if (n.innerHTML = e, !n.hasChildNodes() || 1 < n.childNodes.length) throw console.error("HTML does not have a single root node", e), "HTML must have a single root node";
                return qn(n.childNodes[0])
            },
            fromTag: function(e, t) {
                var n = (t || document).createElement(e);
                return qn(n)
            },
            fromText: function(e, t) {
                var n = (t || document).createTextNode(e);
                return qn(n)
            },
            fromDom: qn,
            fromPoint: function(e, t, n) {
                return A.from(e.dom().elementFromPoint(t, n)).map(qn)
            }
        },
        Hn = 8,
        jn = 9,
        $n = 1,
        Wn = 3,
        Kn = function(e) {
            return e.dom().nodeName.toLowerCase()
        },
        Xn = function(e) {
            return e.dom().nodeType
        },
        Yn = function(t) {
            return function(e) {
                return Xn(e) === t
            }
        },
        Gn = Yn($n),
        Jn = Yn(Wn),
        Qn = Yn(jn),
        Zn = {
            name: Kn,
            type: Xn,
            value: function(e) {
                return e.dom().nodeValue
            },
            isElement: Gn,
            isText: Jn,
            isDocument: Qn,
            isComment: function(e) {
                return Xn(e) === Hn || "#comment" === Kn(e)
            }
        },
        er = (dn = Object.keys) === undefined ? function(e) {
            var t = [];
            for (var n in e) e.hasOwnProperty(n) && t.push(n);
            return t
        } : dn,
        tr = function(e, t) {
            for (var n = er(e), r = 0, o = n.length; r < o; r++) {
                var i = n[r];
                t(e[i], i, e)
            }
        },
        nr = function(r, o) {
            var i = {};
            return tr(r, function(e, t) {
                var n = o(e, t, r);
                i[n.k] = n.v
            }), i
        },
        rr = function(e, n) {
            var r = [];
            return tr(e, function(e, t) {
                r.push(n(e, t))
            }), r
        },
        or = function(e) {
            return rr(e, function(e) {
                return e
            })
        },
        ir = {
            bifilter: function(e, n) {
                var r = {},
                    o = {};
                return tr(e, function(e, t) {
                    (n(e, t) ? r : o)[t] = e
                }), {
                    t: r,
                    f: o
                }
            },
            each: tr,
            map: function(e, r) {
                return nr(e, function(e, t, n) {
                    return {
                        k: t,
                        v: r(e, t, n)
                    }
                })
            },
            mapToArray: rr,
            tupleMap: nr,
            find: function(e, t) {
                for (var n = er(e), r = 0, o = n.length; r < o; r++) {
                    var i = n[r],
                        a = e[i];
                    if (t(a, i, e)) return A.some(a)
                }
                return A.none()
            },
            keys: er,
            values: or,
            size: function(e) {
                return or(e).length
            }
        },
        ar = function(e, t, n) {
            if (!(k.isString(n) || k.isBoolean(n) || k.isNumber(n))) throw console.error("Invalid call to Attr.set. Key ", t, ":: Value ", n, ":: Element ", e), new Error("Attribute value was not simple");
            e.setAttribute(t, n + "")
        },
        ur = function(e, t, n) {
            ar(e.dom(), t, n)
        },
        sr = function(e, t) {
            var n = e.dom().getAttribute(t);
            return null === n ? undefined : n
        },
        cr = function(e, t) {
            var n = e.dom();
            return !(!n || !n.hasAttribute) && n.hasAttribute(t)
        },
        lr = {
            clone: function(e) {
                return H.foldl(e.dom().attributes, function(e, t) {
                    return e[t.name] = t.value, e
                }, {})
            },
            set: ur,
            setAll: function(e, t) {
                var n = e.dom();
                ir.each(t, function(e, t) {
                    ar(n, t, e)
                })
            },
            get: sr,
            has: cr,
            remove: function(e, t) {
                e.dom().removeAttribute(t)
            },
            hasNone: function(e) {
                var t = e.dom().attributes;
                return t === undefined || null === t || 0 === t.length
            },
            transfer: function(o, i, e) {
                Zn.isElement(o) && Zn.isElement(i) && H.each(e, function(e) {
                    var t, n, r;
                    n = i, cr(t = o, r = e) && !cr(n, r) && ur(n, r, sr(t, r))
                })
            }
        },
        fr = mn(function() {
            return dr(Vn.fromDom(document))
        }),
        dr = function(e) {
            var t = e.dom().body;
            if (null === t || t === undefined) throw "Body is not available yet";
            return Vn.fromDom(t)
        },
        mr = {
            body: fr,
            getBody: dr,
            inBody: function(e) {
                var t = Zn.isText(e) ? e.dom().parentNode : e.dom();
                return t !== undefined && null !== t && t.ownerDocument.body.contains(t)
            }
        },
        pr = function(e) {
            return e.style !== undefined
        },
        gr = function(e, t, n) {
            if (!k.isString(n)) throw console.error("Invalid call to CSS.set. Property ", t, ":: Value ", n, ":: Element ", e), new Error("CSS value must be a string: " + n);
            pr(e) && e.style.setProperty(t, n)
        },
        hr = function(e, t) {
            return pr(e) ? e.style.getPropertyValue(t) : ""
        },
        vr = function(e, t) {
            var n = e.dom(),
                r = hr(n, t);
            return A.from(r).filter(function(e) {
                return 0 < e.length
            })
        },
        yr = function(e, t) {
            var n = e.dom();
            ir.each(t, function(e, t) {
                gr(n, t, e)
            })
        },
        br = function(e, t) {
            var n = e.dom(),
                r = window.getComputedStyle(n).getPropertyValue(t),
                o = "" !== r || mr.inBody(e) ? r : hr(n, t);
            return null === o ? undefined : o
        },
        Cr = vr,
        xr = function(e) {
            return e.slice(0).sort()
        },
        wr = function(e, t) {
            throw new Error("All required keys (" + xr(e).join(", ") + ") were not specified. Specified keys were: " + xr(t).join(", ") + ".")
        },
        Nr = function(e) {
            throw new Error("Unsupported keys for object: " + xr(e).join(", "))
        },
        Er = function(t, e) {
            if (!k.isArray(e)) throw new Error("The " + t + " fields must be an array. Was: " + e + ".");
            H.each(e, function(e) {
                if (!k.isString(e)) throw new Error("The value " + e + " in the " + t + " fields was not a string.")
            })
        },
        Sr = function(e) {
            var n = xr(e);
            H.find(n, function(e, t) {
                return t < n.length - 1 && e === n[t + 1]
            }).each(function(e) {
                throw new Error("The field: " + e + " occurs more than once in the combined fields: [" + n.join(", ") + "].")
            })
        },
        kr = {
            immutable: function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return function() {
                    for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
                    if (t.length !== n.length) throw new Error('Wrong number of arguments to struct. Expected "[' + t.length + ']", got ' + n.length + " arguments");
                    var r = {};
                    return H.each(t, function(e, t) {
                        r[e] = V.constant(n[t])
                    }), r
                }
            },
            immutableBag: function(o, i) {
                var a = o.concat(i);
                if (0 === a.length) throw new Error("You must specify at least one required or optional field.");
                return Er("required", o), Er("optional", i), Sr(a),
                    function(t) {
                        var n = ir.keys(t);
                        H.forall(o, function(e) {
                            return H.contains(n, e)
                        }) || wr(o, n);
                        var e = H.filter(n, function(e) {
                            return !H.contains(a, e)
                        });
                        0 < e.length && Nr(e);
                        var r = {};
                        return H.each(o, function(e) {
                            r[e] = V.constant(t[e])
                        }), H.each(i, function(e) {
                            r[e] = V.constant(Object.prototype.hasOwnProperty.call(t, e) ? A.some(t[e]) : A.none())
                        }), r
                    }
            }
        },
        Tr = function(e, t) {
            for (var n = [], r = function(e) {
                    return n.push(e), t(e)
                }, o = t(e);
                (o = o.bind(r)).isSome(););
            return n
        },
        Ar = function() {
            return W.getOrDie("Node")
        },
        Rr = function(e, t, n) {
            return 0 != (e.compareDocumentPosition(t) & n)
        },
        _r = function(e, t) {
            return Rr(e, t, Ar().DOCUMENT_POSITION_CONTAINED_BY)
        },
        Br = $n,
        Dr = jn,
        Or = function(e) {
            return e.nodeType !== Br && e.nodeType !== Dr || 0 === e.childElementCount
        },
        Pr = {
            all: function(e, t) {
                var n = t === undefined ? document : t.dom();
                return Or(n) ? [] : H.map(n.querySelectorAll(e), Vn.fromDom)
            },
            is: function(e, t) {
                var n = e.dom();
                if (n.nodeType !== Br) return !1;
                if (n.matches !== undefined) return n.matches(t);
                if (n.msMatchesSelector !== undefined) return n.msMatchesSelector(t);
                if (n.webkitMatchesSelector !== undefined) return n.webkitMatchesSelector(t);
                if (n.mozMatchesSelector !== undefined) return n.mozMatchesSelector(t);
                throw new Error("Browser lacks native selectors")
            },
            one: function(e, t) {
                var n = t === undefined ? document : t.dom();
                return Or(n) ? A.none() : A.from(n.querySelector(e)).map(Vn.fromDom)
            }
        },
        Lr = function(e, t) {
            return e.dom() === t.dom()
        },
        Ir = Un.detect().browser.isIE() ? function(e, t) {
            return _r(e.dom(), t.dom())
        } : function(e, t) {
            var n = e.dom(),
                r = t.dom();
            return n !== r && n.contains(r)
        },
        Mr = {
            eq: Lr,
            isEqualNode: function(e, t) {
                return e.dom().isEqualNode(t.dom())
            },
            member: function(e, t) {
                return H.exists(t, V.curry(Lr, e))
            },
            contains: Ir,
            is: Pr.is
        },
        Fr = function(e) {
            return Vn.fromDom(e.dom().ownerDocument)
        },
        zr = function(e) {
            var t = e.dom();
            return A.from(t.parentNode).map(Vn.fromDom)
        },
        Ur = function(e) {
            var t = e.dom();
            return A.from(t.previousSibling).map(Vn.fromDom)
        },
        qr = function(e) {
            var t = e.dom();
            return A.from(t.nextSibling).map(Vn.fromDom)
        },
        Vr = function(e) {
            var t = e.dom();
            return H.map(t.childNodes, Vn.fromDom)
        },
        Hr = function(e, t) {
            var n = e.dom().childNodes;
            return A.from(n[t]).map(Vn.fromDom)
        },
        jr = kr.immutable("element", "offset"),
        $r = {
            owner: Fr,
            defaultView: function(e) {
                var t = e.dom().ownerDocument.defaultView;
                return Vn.fromDom(t)
            },
            documentElement: function(e) {
                var t = Fr(e);
                return Vn.fromDom(t.dom().documentElement)
            },
            parent: zr,
            findIndex: function(n) {
                return zr(n).bind(function(e) {
                    var t = Vr(e);
                    return H.findIndex(t, function(e) {
                        return Mr.eq(n, e)
                    })
                })
            },
            parents: function(e, t) {
                for (var n = k.isFunction(t) ? t : V.constant(!1), r = e.dom(), o = []; null !== r.parentNode && r.parentNode !== undefined;) {
                    var i = r.parentNode,
                        a = Vn.fromDom(i);
                    if (o.push(a), !0 === n(a)) break;
                    r = i
                }
                return o
            },
            siblings: function(t) {
                return zr(t).map(Vr).map(function(e) {
                    return H.filter(e, function(e) {
                        return !Mr.eq(t, e)
                    })
                }).getOr([])
            },
            prevSibling: Ur,
            offsetParent: function(e) {
                var t = e.dom();
                return A.from(t.offsetParent).map(Vn.fromDom)
            },
            prevSiblings: function(e) {
                return H.reverse(Tr(e, Ur))
            },
            nextSibling: qr,
            nextSiblings: function(e) {
                return Tr(e, qr)
            },
            children: Vr,
            child: Hr,
            firstChild: function(e) {
                return Hr(e, 0)
            },
            lastChild: function(e) {
                return Hr(e, e.dom().childNodes.length - 1)
            },
            childNodesCount: function(e) {
                return e.dom().childNodes.length
            },
            hasChildNodes: function(e) {
                return e.dom().hasChildNodes()
            },
            leaf: function(e, t) {
                var n = Vr(e);
                return 0 < n.length && t < n.length ? jr(n[t], 0) : jr(e, t)
            }
        },
        Wr = Un.detect().browser,
        Kr = function(e) {
            return H.find(e, Zn.isElement)
        },
        Xr = {
            getPos: function(e, t, n) {
                var r, o, i, a = 0,
                    u = 0,
                    s = e.ownerDocument;
                if (n = n || e, t) {
                    if (n === e && t.getBoundingClientRect && "static" === br(Vn.fromDom(e), "position")) return {
                        x: a = (o = t.getBoundingClientRect()).left + (s.documentElement.scrollLeft || e.scrollLeft) - s.documentElement.clientLeft,
                        y: u = o.top + (s.documentElement.scrollTop || e.scrollTop) - s.documentElement.clientTop
                    };
                    for (r = t; r && r !== n && r.nodeType;) a += r.offsetLeft || 0, u += r.offsetTop || 0, r = r.offsetParent;
                    for (r = t.parentNode; r && r !== n && r.nodeType;) a -= r.scrollLeft || 0, u -= r.scrollTop || 0, r = r.parentNode;
                    u += (i = Vn.fromDom(t), Wr.isFirefox() && "table" === Zn.name(i) ? Kr($r.children(i)).filter(function(e) {
                        return "caption" === Zn.name(e)
                    }).bind(function(o) {
                        return Kr($r.nextSiblings(o)).map(function(e) {
                            var t = e.dom().offsetTop,
                                n = o.dom().offsetTop,
                                r = o.dom().offsetHeight;
                            return t <= n ? -r : 0
                        })
                    }).getOr(0) : 0)
                }
                return {
                    x: a,
                    y: u
                }
            }
        },
        Yr = function(e) {
            var n = A.none(),
                t = [],
                r = function(e) {
                    o() ? a(e) : t.push(e)
                },
                o = function() {
                    return n.isSome()
                },
                i = function(e) {
                    H.each(e, a)
                },
                a = function(t) {
                    n.each(function(e) {
                        setTimeout(function() {
                            t(e)
                        }, 0)
                    })
                };
            return e(function(e) {
                n = A.some(e), i(t), t = []
            }), {
                get: r,
                map: function(n) {
                    return Yr(function(t) {
                        r(function(e) {
                            t(n(e))
                        })
                    })
                },
                isReady: o
            }
        },
        Gr = {
            nu: Yr,
            pure: function(t) {
                return Yr(function(e) {
                    e(t)
                })
            }
        },
        Jr = function(n) {
            return function() {
                var e = Array.prototype.slice.call(arguments),
                    t = this;
                setTimeout(function() {
                    n.apply(t, e)
                }, 0)
            }
        },
        Qr = function(t) {
            var e = function(e) {
                t(Jr(e))
            };
            return {
                map: function(r) {
                    return Qr(function(n) {
                        e(function(e) {
                            var t = r(e);
                            n(t)
                        })
                    })
                },
                bind: function(n) {
                    return Qr(function(t) {
                        e(function(e) {
                            n(e).get(t)
                        })
                    })
                },
                anonBind: function(n) {
                    return Qr(function(t) {
                        e(function(e) {
                            n.get(t)
                        })
                    })
                },
                toLazy: function() {
                    return Gr.nu(e)
                },
                get: e
            }
        },
        Zr = {
            nu: Qr,
            pure: function(t) {
                return Qr(function(e) {
                    e(t)
                })
            }
        },
        eo = function(a, e) {
            return e(function(r) {
                var o = [],
                    i = 0;
                0 === a.length ? r([]) : H.each(a, function(e, t) {
                    var n;
                    e.get((n = t, function(e) {
                        o[n] = e, ++i >= a.length && r(o)
                    }))
                })
            })
        },
        to = function(e) {
            return eo(e, Zr.nu)
        },
        no = {
            par: to,
            mapM: function(e, t) {
                var n = H.map(e, t);
                return to(n)
            },
            compose: function(t, n) {
                return function(e) {
                    return n(e).bind(t)
                }
            }
        },
        ro = function(n) {
            return {
                is: function(e) {
                    return n === e
                },
                isValue: V.always,
                isError: V.never,
                getOr: V.constant(n),
                getOrThunk: V.constant(n),
                getOrDie: V.constant(n),
                or: function(e) {
                    return ro(n)
                },
                orThunk: function(e) {
                    return ro(n)
                },
                fold: function(e, t) {
                    return t(n)
                },
                map: function(e) {
                    return ro(e(n))
                },
                each: function(e) {
                    e(n)
                },
                bind: function(e) {
                    return e(n)
                },
                exists: function(e) {
                    return e(n)
                },
                forall: function(e) {
                    return e(n)
                },
                toOption: function() {
                    return A.some(n)
                }
            }
        },
        oo = function(n) {
            return {
                is: V.never,
                isValue: V.never,
                isError: V.always,
                getOr: V.identity,
                getOrThunk: function(e) {
                    return e()
                },
                getOrDie: function() {
                    return V.die(String(n))()
                },
                or: function(e) {
                    return e
                },
                orThunk: function(e) {
                    return e()
                },
                fold: function(e, t) {
                    return e(n)
                },
                map: function(e) {
                    return oo(n)
                },
                each: V.noop,
                bind: function(e) {
                    return oo(n)
                },
                exists: V.never,
                forall: V.always,
                toOption: A.none
            }
        },
        io = {
            value: ro,
            error: oo
        };

    function ao(e, u) {
        var t = e,
            n = function(e, t, n, r) {
                var o, i;
                if (e) {
                    if (!r && e[t]) return e[t];
                    if (e !== u) {
                        if (o = e[n]) return o;
                        for (i = e.parentNode; i && i !== u; i = i.parentNode)
                            if (o = i[n]) return o
                    }
                }
            };
        this.current = function() {
            return t
        }, this.next = function(e) {
            return t = n(t, "firstChild", "nextSibling", e)
        }, this.prev = function(e) {
            return t = n(t, "lastChild", "previousSibling", e)
        }, this.prev2 = function(e) {
            return t = function(e, t, n, r) {
                var o, i, a;
                if (e) {
                    if (o = e[n], u && o === u) return;
                    if (o) {
                        if (!r)
                            for (a = o[t]; a; a = a[t])
                                if (!a[t]) return a;
                        return o
                    }
                    if ((i = e.parentNode) && i !== u) return i
                }
            }(t, "lastChild", "previousSibling", e)
        }
    }
    var uo, so, co, lo = function(t) {
            var n;
            return function(e) {
                return (n = n || H.mapToObject(t, V.constant(!0))).hasOwnProperty(Zn.name(e))
            }
        },
        fo = lo(["h1", "h2", "h3", "h4", "h5", "h6"]),
        mo = lo(["article", "aside", "details", "div", "dt", "figcaption", "footer", "form", "fieldset", "header", "hgroup", "html", "main", "nav", "section", "summary", "body", "p", "dl", "multicol", "dd", "figure", "address", "center", "blockquote", "h1", "h2", "h3", "h4", "h5", "h6", "listing", "xmp", "pre", "plaintext", "menu", "dir", "ul", "ol", "li", "hr", "table", "tbody", "thead", "tfoot", "th", "tr", "td", "caption"]),
        po = function(e) {
            return Zn.isElement(e) && !mo(e)
        },
        go = function(e) {
            return Zn.isElement(e) && "br" === Zn.name(e)
        },
        ho = lo(["h1", "h2", "h3", "h4", "h5", "h6", "p", "div", "address", "pre", "form", "blockquote", "center", "dir", "fieldset", "header", "footer", "article", "section", "hgroup", "aside", "nav", "figure"]),
        vo = lo(["ul", "ol", "dl"]),
        yo = lo(["li", "dd", "dt"]),
        bo = lo(["area", "base", "basefont", "br", "col", "frame", "hr", "img", "input", "isindex", "link", "meta", "param", "embed", "source", "wbr", "track"]),
        Co = lo(["thead", "tbody", "tfoot"]),
        xo = lo(["td", "th"]),
        wo = lo(["pre", "script", "textarea", "style"]),
        No = function(t) {
            return function(e) {
                return !!e && e.nodeType === t
            }
        },
        Eo = No(1),
        So = function(e) {
            var r = e.toLowerCase().split(" ");
            return function(e) {
                var t, n;
                if (e && e.nodeType)
                    for (n = e.nodeName.toLowerCase(), t = 0; t < r.length; t++)
                        if (n === r[t]) return !0;
                return !1
            }
        },
        ko = function(t) {
            return function(e) {
                if (Eo(e)) {
                    if (e.contentEditable === t) return !0;
                    if (e.getAttribute("data-mce-contenteditable") === t) return !0
                }
                return !1
            }
        },
        To = No(3),
        Ao = No(8),
        Ro = No(9),
        _o = So("br"),
        Bo = ko("true"),
        Do = ko("false"),
        Oo = {
            isText: To,
            isElement: Eo,
            isComment: Ao,
            isDocument: Ro,
            isBr: _o,
            isContentEditableTrue: Bo,
            isContentEditableFalse: Do,
            matchNodeNames: So,
            hasPropValue: function(t, n) {
                return function(e) {
                    return Eo(e) && e[t] === n
                }
            },
            hasAttribute: function(t, e) {
                return function(e) {
                    return Eo(e) && e.hasAttribute(t)
                }
            },
            hasAttributeValue: function(t, n) {
                return function(e) {
                    return Eo(e) && e.getAttribute(t) === n
                }
            },
            matchStyleValues: function(r, e) {
                var o = e.toLowerCase().split(" ");
                return function(e) {
                    var t;
                    if (Eo(e))
                        for (t = 0; t < o.length; t++) {
                            var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
                            if ((n ? n.getPropertyValue(r) : null) === o[t]) return !0
                        }
                    return !1
                }
            },
            isBogus: function(e) {
                return Eo(e) && e.hasAttribute("data-mce-bogus")
            },
            isBogusAll: function(e) {
                return Eo(e) && "all" === e.getAttribute("data-mce-bogus")
            },
            isTable: function(e) {
                return Eo(e) && "TABLE" === e.tagName
            }
        },
        Po = function(e) {
            return e && "SPAN" === e.tagName && "bookmark" === e.getAttribute("data-mce-type")
        },
        Lo = function(e, t) {
            var n, r = t.childNodes;
            if (!Oo.isElement(t) || !Po(t)) {
                for (n = r.length - 1; 0 <= n; n--) Lo(e, r[n]);
                if (!1 === Oo.isDocument(t)) {
                    if (Oo.isText(t) && 0 < t.nodeValue.length) {
                        var o = It.trim(t.nodeValue).length;
                        if (e.isBlock(t.parentNode) || 0 < o) return;
                        if (0 === o && (a = (i = t).previousSibling && "SPAN" === i.previousSibling.nodeName, u = i.nextSibling && "SPAN" === i.nextSibling.nodeName, a && u)) return
                    } else if (Oo.isElement(t) && (1 === (r = t.childNodes).length && Po(r[0]) && t.parentNode.insertBefore(r[0], t), r.length || bo(Vn.fromDom(t)))) return;
                    e.remove(t)
                }
                var i, a, u;
                return t
            }
        },
        Io = {
            trimNode: Lo
        },
        Mo = It.makeMap,
        Fo = /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        zo = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        Uo = /[<>&\"\']/g,
        qo = /&#([a-z0-9]+);?|&([a-z0-9]+);/gi,
        Vo = {
            128: "\u20ac",
            130: "\u201a",
            131: "\u0192",
            132: "\u201e",
            133: "\u2026",
            134: "\u2020",
            135: "\u2021",
            136: "\u02c6",
            137: "\u2030",
            138: "\u0160",
            139: "\u2039",
            140: "\u0152",
            142: "\u017d",
            145: "\u2018",
            146: "\u2019",
            147: "\u201c",
            148: "\u201d",
            149: "\u2022",
            150: "\u2013",
            151: "\u2014",
            152: "\u02dc",
            153: "\u2122",
            154: "\u0161",
            155: "\u203a",
            156: "\u0153",
            158: "\u017e",
            159: "\u0178"
        };
    so = {
        '"': "&quot;",
        "'": "&#39;",
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        "`": "&#96;"
    }, co = {
        "&lt;": "<",
        "&gt;": ">",
        "&amp;": "&",
        "&quot;": '"',
        "&apos;": "'"
    };
    var Ho = function(e, t) {
        var n, r, o, i = {};
        if (e) {
            for (e = e.split(","), t = t || 10, n = 0; n < e.length; n += 2) r = String.fromCharCode(parseInt(e[n], t)), so[r] || (o = "&" + e[n + 1] + ";", i[r] = o, i[o] = r);
            return i
        }
    };
    uo = Ho("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro", 32);
    var jo = function(e, t) {
            return e.replace(t ? Fo : zo, function(e) {
                return so[e] || e
            })
        },
        $o = function(e, t) {
            return e.replace(t ? Fo : zo, function(e) {
                return 1 < e.length ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : so[e] || "&#" + e.charCodeAt(0) + ";"
            })
        },
        Wo = function(e, t, n) {
            return n = n || uo, e.replace(t ? Fo : zo, function(e) {
                return so[e] || n[e] || e
            })
        },
        Ko = {
            encodeRaw: jo,
            encodeAllRaw: function(e) {
                return ("" + e).replace(Uo, function(e) {
                    return so[e] || e
                })
            },
            encodeNumeric: $o,
            encodeNamed: Wo,
            getEncodeFunc: function(e, t) {
                var n = Ho(t) || uo,
                    r = Mo(e.replace(/\+/g, ","));
                return r.named && r.numeric ? function(e, t) {
                    return e.replace(t ? Fo : zo, function(e) {
                        return so[e] !== undefined ? so[e] : n[e] !== undefined ? n[e] : 1 < e.length ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : "&#" + e.charCodeAt(0) + ";"
                    })
                } : r.named ? t ? function(e, t) {
                    return Wo(e, t, n)
                } : Wo : r.numeric ? $o : jo
            },
            decode: function(e) {
                return e.replace(qo, function(e, t) {
                    return t ? 65535 < (t = "x" === t.charAt(0).toLowerCase() ? parseInt(t.substr(1), 16) : parseInt(t, 10)) ? (t -= 65536, String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t))) : Vo[t] || String.fromCharCode(t) : co[e] || uo[e] || (n = e, (r = Vn.fromTag("div").dom()).innerHTML = n, r.textContent || r.innerText || n);
                    var n, r
                })
            }
        },
        Xo = {},
        Yo = {},
        Go = It.makeMap,
        Jo = It.each,
        Qo = It.extend,
        Zo = It.explode,
        ei = It.inArray,
        ti = function(e, t) {
            return (e = It.trim(e)) ? e.split(t || " ") : []
        },
        ni = function(e) {
            var u, t, n, r, o, i, s = {},
                a = function(e, t, n) {
                    var r, o, i, a = function(e, t) {
                        var n, r, o = {};
                        for (n = 0, r = e.length; n < r; n++) o[e[n]] = t || {};
                        return o
                    };
                    for (t = t || "", "string" == typeof(n = n || []) && (n = ti(n)), r = (e = ti(e)).length; r--;) i = {
                        attributes: a(o = ti([u, t].join(" "))),
                        attributesOrder: o,
                        children: a(n, Yo)
                    }, s[e[r]] = i
                },
                c = function(e, t) {
                    var n, r, o, i;
                    for (n = (e = ti(e)).length, t = ti(t); n--;)
                        for (r = s[e[n]], o = 0, i = t.length; o < i; o++) r.attributes[t[o]] = {}, r.attributesOrder.push(t[o])
                };
            return Xo[e] ? Xo[e] : (u = "id accesskey class dir lang style tabindex title role", t = "address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul", n = "a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment", "html4" !== e && (u += " contenteditable contextmenu draggable dropzone hidden spellcheck translate", t += " article aside details dialog figure header footer hgroup section nav", n += " audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen"), "html5-strict" !== e && (u += " xml:lang", n = [n, i = "acronym applet basefont big font strike tt"].join(" "), Jo(ti(i), function(e) {
                a(e, "", n)
            }), t = [t, o = "center dir isindex noframes"].join(" "), r = [t, n].join(" "), Jo(ti(o), function(e) {
                a(e, "", r)
            })), r = r || [t, n].join(" "), a("html", "manifest", "head body"), a("head", "", "base command link meta noscript script style title"), a("title hr noscript br"), a("base", "href target"), a("link", "href rel media hreflang type sizes hreflang"), a("meta", "name http-equiv content charset"), a("style", "media type scoped"), a("script", "src async defer type charset"), a("body", "onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload", r), a("address dt dd div caption", "", r), a("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn", "", n), a("blockquote", "cite", r), a("ol", "reversed start type", "li"), a("ul", "", "li"), a("li", "value", r), a("dl", "", "dt dd"), a("a", "href target rel media hreflang type", n), a("q", "cite", n), a("ins del", "cite datetime", r), a("img", "src sizes srcset alt usemap ismap width height"), a("iframe", "src name width height", r), a("embed", "src type width height"), a("object", "data type typemustmatch name usemap form width height", [r, "param"].join(" ")), a("param", "name value"), a("map", "name", [r, "area"].join(" ")), a("area", "alt coords shape href target rel media hreflang type"), a("table", "border", "caption colgroup thead tfoot tbody tr" + ("html4" === e ? " col" : "")), a("colgroup", "span", "col"), a("col", "span"), a("tbody thead tfoot", "", "tr"), a("tr", "", "td th"), a("td", "colspan rowspan headers", r), a("th", "colspan rowspan headers scope abbr", r), a("form", "accept-charset action autocomplete enctype method name novalidate target", r), a("fieldset", "disabled form name", [r, "legend"].join(" ")), a("label", "form for", n), a("input", "accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"), a("button", "disabled form formaction formenctype formmethod formnovalidate formtarget name type value", "html4" === e ? r : n), a("select", "disabled form multiple name required size", "option optgroup"), a("optgroup", "disabled label", "option"), a("option", "disabled label selected value"), a("textarea", "cols dirname disabled form maxlength name readonly required rows wrap"), a("menu", "type label", [r, "li"].join(" ")), a("noscript", "", r), "html4" !== e && (a("wbr"), a("ruby", "", [n, "rt rp"].join(" ")), a("figcaption", "", r), a("mark rt rp summary bdi", "", n), a("canvas", "width height", r), a("video", "src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered", [r, "track source"].join(" ")), a("audio", "src crossorigin preload autoplay mediagroup loop muted controls buffered volume", [r, "track source"].join(" ")), a("picture", "", "img source"), a("source", "src srcset type media sizes"), a("track", "kind src srclang label default"), a("datalist", "", [n, "option"].join(" ")), a("article section nav aside header footer", "", r), a("hgroup", "", "h1 h2 h3 h4 h5 h6"), a("figure", "", [r, "figcaption"].join(" ")), a("time", "datetime", n), a("dialog", "open", r), a("command", "type label icon disabled checked radiogroup command"), a("output", "for form name", n), a("progress", "value max", n), a("meter", "value min max low high optimum", n), a("details", "open", [r, "summary"].join(" ")), a("keygen", "autofocus challenge disabled form keytype name")), "html5-strict" !== e && (c("script", "language xml:space"), c("style", "xml:space"), c("object", "declare classid code codebase codetype archive standby align border hspace vspace"), c("embed", "align name hspace vspace"), c("param", "valuetype type"), c("a", "charset name rev shape coords"), c("br", "clear"), c("applet", "codebase archive code object alt name width height align hspace vspace"), c("img", "name longdesc align border hspace vspace"), c("iframe", "longdesc frameborder marginwidth marginheight scrolling align"), c("font basefont", "size color face"), c("input", "usemap align"), c("select", "onchange"), c("textarea"), c("h1 h2 h3 h4 h5 h6 div p legend caption", "align"), c("ul", "type compact"), c("li", "type"), c("ol dl menu dir", "compact"), c("pre", "width xml:space"), c("hr", "align noshade size width"), c("isindex", "prompt"), c("table", "summary width frame rules cellspacing cellpadding align bgcolor"), c("col", "width align char charoff valign"), c("colgroup", "width align char charoff valign"), c("thead", "align char charoff valign"), c("tr", "align char charoff valign bgcolor"), c("th", "axis align char charoff valign nowrap bgcolor width height"), c("form", "accept"), c("td", "abbr axis scope align char charoff valign nowrap bgcolor width height"), c("tfoot", "align char charoff valign"), c("tbody", "align char charoff valign"), c("area", "nohref"), c("body", "background bgcolor text link vlink alink")), "html4" !== e && (c("input button select textarea", "autofocus"), c("input textarea", "placeholder"), c("a", "download"), c("link script img", "crossorigin"), c("iframe", "sandbox seamless allowfullscreen")), Jo(ti("a form meter progress dfn"), function(e) {
                s[e] && delete s[e].children[e]
            }), delete s.caption.children.table, delete s.script, Xo[e] = s)
        },
        ri = function(e, n) {
            var r;
            return e && (r = {}, "string" == typeof e && (e = {
                "*": e
            }), Jo(e, function(e, t) {
                r[t] = r[t.toUpperCase()] = "map" === n ? Go(e, /[, ]/) : Zo(e, /[, ]/)
            })), r
        };

    function oi(i) {
        var e, t, n, r, o, a, u, s, c, l, f, d, m, N = {},
            p = {},
            E = [],
            g = {},
            h = {},
            v = function(e, t, n) {
                var r = i[e];
                return r ? r = Go(r, /[, ]/, Go(r.toUpperCase(), /[, ]/)) : (r = Xo[e]) || (r = Go(t, " ", Go(t.toUpperCase(), " ")), r = Qo(r, n), Xo[e] = r), r
            };
        n = ni((i = i || {}).schema), !1 === i.verify_html && (i.valid_elements = "*[*]"), e = ri(i.valid_styles), t = ri(i.invalid_styles, "map"), s = ri(i.valid_classes, "map"), r = v("whitespace_elements", "pre script noscript style textarea video audio iframe object code"), o = v("self_closing_elements", "colgroup dd dt li option p td tfoot th thead tr"), a = v("short_ended_elements", "area base basefont br col frame hr img input isindex link meta param embed source wbr track"), u = v("boolean_attributes", "checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"), l = v("non_empty_elements", "td th iframe video audio object script pre code", a), f = v("move_caret_before_on_enter_elements", "table", l), d = v("text_block_elements", "h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside nav figure"), c = v("block_elements", "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary", d), m = v("text_inline_elements", "span strong b em i font strike u var cite dfn code mark q sup sub samp"), Jo((i.special || "script noscript noframes noembed title style textarea xmp").split(" "), function(e) {
            h[e] = new RegExp("</" + e + "[^>]*>", "gi")
        });
        var S = function(e) {
                return new RegExp("^" + e.replace(/([?+*])/g, ".$1") + "$")
            },
            y = function(e) {
                var t, n, r, o, i, a, u, s, c, l, f, d, m, p, g, h, v, y, b, C = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)\])?$/,
                    x = /^([!\-])?(\w+[\\:]:\w+|[^=:<]+)?(?:([=:<])(.*))?$/,
                    w = /[*?+]/;
                if (e)
                    for (e = ti(e, ","), N["@"] && (h = N["@"].attributes, v = N["@"].attributesOrder), t = 0, n = e.length; t < n; t++)
                        if (i = C.exec(e[t])) {
                            if (p = i[1], c = i[2], g = i[3], s = i[5], a = {
                                    attributes: d = {},
                                    attributesOrder: m = []
                                }, "#" === p && (a.paddEmpty = !0), "-" === p && (a.removeEmpty = !0), "!" === i[4] && (a.removeEmptyAttrs = !0), h) {
                                for (y in h) d[y] = h[y];
                                m.push.apply(m, v)
                            }
                            if (s)
                                for (r = 0, o = (s = ti(s, "|")).length; r < o; r++)
                                    if (i = x.exec(s[r])) {
                                        if (u = {}, f = i[1], l = i[2].replace(/[\\:]:/g, ":"), p = i[3], b = i[4], "!" === f && (a.attributesRequired = a.attributesRequired || [], a.attributesRequired.push(l), u.required = !0), "-" === f) {
                                            delete d[l], m.splice(ei(m, l), 1);
                                            continue
                                        }
                                        p && ("=" === p && (a.attributesDefault = a.attributesDefault || [], a.attributesDefault.push({
                                            name: l,
                                            value: b
                                        }), u.defaultValue = b), ":" === p && (a.attributesForced = a.attributesForced || [], a.attributesForced.push({
                                            name: l,
                                            value: b
                                        }), u.forcedValue = b), "<" === p && (u.validValues = Go(b, "?"))), w.test(l) ? (a.attributePatterns = a.attributePatterns || [], u.pattern = S(l), a.attributePatterns.push(u)) : (d[l] || m.push(l), d[l] = u)
                                    }
                            h || "@" !== c || (h = d, v = m), g && (a.outputName = c, N[g] = a), w.test(c) ? (a.pattern = S(c), E.push(a)) : N[c] = a
                        }
            },
            b = function(e) {
                N = {}, E = [], y(e), Jo(n, function(e, t) {
                    p[t] = e.children
                })
            },
            C = function(e) {
                var a = /^(~)?(.+)$/;
                e && (Xo.text_block_elements = Xo.block_elements = null, Jo(ti(e, ","), function(e) {
                    var t = a.exec(e),
                        n = "~" === t[1],
                        r = n ? "span" : "div",
                        o = t[2];
                    if (p[o] = p[r], g[o] = r, n || (c[o.toUpperCase()] = {}, c[o] = {}), !N[o]) {
                        var i = N[r];
                        delete(i = Qo({}, i)).removeEmptyAttrs, delete i.removeEmpty, N[o] = i
                    }
                    Jo(p, function(e, t) {
                        e[r] && (p[t] = e = Qo({}, p[t]), e[o] = e[r])
                    })
                }))
            },
            x = function(e) {
                var o = /^([+\-]?)(\w+)\[([^\]]+)\]$/;
                Xo[i.schema] = null, e && Jo(ti(e, ","), function(e) {
                    var t, n, r = o.exec(e);
                    r && (n = r[1], t = n ? p[r[2]] : p[r[2]] = {
                        "#comment": {}
                    }, t = p[r[2]], Jo(ti(r[3], "|"), function(e) {
                        "-" === n ? delete t[e] : t[e] = {}
                    }))
                })
            },
            w = function(e) {
                var t, n = N[e];
                if (n) return n;
                for (t = E.length; t--;)
                    if ((n = E[t]).pattern.test(e)) return n
            };
        return i.valid_elements ? b(i.valid_elements) : (Jo(n, function(e, t) {
            N[t] = {
                attributes: e.attributes,
                attributesOrder: e.attributesOrder
            }, p[t] = e.children
        }), "html5" !== i.schema && Jo(ti("strong/b em/i"), function(e) {
            e = ti(e, "/"), N[e[1]].outputName = e[0]
        }), Jo(ti("ol ul sub sup blockquote span font a table tbody tr strong em b i"), function(e) {
            N[e] && (N[e].removeEmpty = !0)
        }), Jo(ti("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"), function(e) {
            N[e].paddEmpty = !0
        }), Jo(ti("span"), function(e) {
            N[e].removeEmptyAttrs = !0
        })), C(i.custom_elements), x(i.valid_children), y(i.extended_valid_elements), x("+ol[ul|ol],+ul[ul|ol]"), Jo({
            dd: "dl",
            dt: "dl",
            li: "ul ol",
            td: "tr",
            th: "tr",
            tr: "tbody thead tfoot",
            tbody: "table",
            thead: "table",
            tfoot: "table",
            legend: "fieldset",
            area: "map",
            param: "video audio object"
        }, function(e, t) {
            N[t] && (N[t].parentsRequired = ti(e))
        }), i.invalid_elements && Jo(Zo(i.invalid_elements), function(e) {
            N[e] && delete N[e]
        }), w("span") || y("span[!data-mce-type|*]"), {
            children: p,
            elements: N,
            getValidStyles: function() {
                return e
            },
            getValidClasses: function() {
                return s
            },
            getBlockElements: function() {
                return c
            },
            getInvalidStyles: function() {
                return t
            },
            getShortEndedElements: function() {
                return a
            },
            getTextBlockElements: function() {
                return d
            },
            getTextInlineElements: function() {
                return m
            },
            getBoolAttrs: function() {
                return u
            },
            getElementRule: w,
            getSelfClosingElements: function() {
                return o
            },
            getNonEmptyElements: function() {
                return l
            },
            getMoveCaretBeforeOnEnterElements: function() {
                return f
            },
            getWhiteSpaceElements: function() {
                return r
            },
            getSpecialElements: function() {
                return h
            },
            isValidChild: function(e, t) {
                var n = p[e.toLowerCase()];
                return !(!n || !n[t.toLowerCase()])
            },
            isValid: function(e, t) {
                var n, r, o = w(e);
                if (o) {
                    if (!t) return !0;
                    if (o.attributes[t]) return !0;
                    if (n = o.attributePatterns)
                        for (r = n.length; r--;)
                            if (n[r].pattern.test(e)) return !0
                }
                return !1
            },
            getCustomElements: function() {
                return g
            },
            addValidElements: y,
            setValidElements: b,
            addCustomElements: C,
            addValidChildren: x
        }
    }
    var ii = function(e, t, n, r) {
        var o = function(e) {
            return 1 < (e = parseInt(e, 10).toString(16)).length ? e : "0" + e
        };
        return "#" + o(t) + o(n) + o(r)
    };

    function ai(b, e) {
        var C, t, c, l, x = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,
            w = /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,
            N = /\s*([^:]+):\s*([^;]+);?/g,
            E = /\s+$/,
            S = {},
            k = "\ufeff";
        for (b = b || {}, e && (c = e.getValidStyles(), l = e.getInvalidStyles()), t = ("\\\" \\' \\; \\: ; : " + k).split(" "), C = 0; C < t.length; C++) S[t[C]] = k + C, S[k + C] = t[C];
        return {
            toHex: function(e) {
                return e.replace(x, ii)
            },
            parse: function(e) {
                var t, n, r, o, i, a, u, s, c = {},
                    l = b.url_converter,
                    f = b.url_converter_scope || this,
                    d = function(e, t, n) {
                        var r, o, i, a;
                        if ((r = c[e + "-top" + t]) && (o = c[e + "-right" + t]) && (i = c[e + "-bottom" + t]) && (a = c[e + "-left" + t])) {
                            var u = [r, o, i, a];
                            for (C = u.length - 1; C-- && u[C] === u[C + 1];); - 1 < C && n || (c[e + t] = -1 === C ? u[0] : u.join(" "), delete c[e + "-top" + t], delete c[e + "-right" + t], delete c[e + "-bottom" + t], delete c[e + "-left" + t])
                        }
                    },
                    m = function(e) {
                        var t, n = c[e];
                        if (n) {
                            for (t = (n = n.split(" ")).length; t--;)
                                if (n[t] !== n[0]) return !1;
                            return c[e] = n[0], !0
                        }
                    },
                    p = function(e) {
                        return o = !0, S[e]
                    },
                    g = function(e, t) {
                        return o && (e = e.replace(/\uFEFF[0-9]/g, function(e) {
                            return S[e]
                        })), t || (e = e.replace(/\\([\'\";:])/g, "$1")), e
                    },
                    h = function(e) {
                        return String.fromCharCode(parseInt(e.slice(1), 16))
                    },
                    v = function(e) {
                        return e.replace(/\\[0-9a-f]+/gi, h)
                    },
                    y = function(e, t, n, r, o, i) {
                        if (o = o || i) return "'" + (o = g(o)).replace(/\'/g, "\\'") + "'";
                        if (t = g(t || n || r), !b.allow_script_urls) {
                            var a = t.replace(/[\s\r\n]+/g, "");
                            if (/(java|vb)script:/i.test(a)) return "";
                            if (!b.allow_svg_data_urls && /^data:image\/svg/i.test(a)) return ""
                        }
                        return l && (t = l.call(f, t, "style")), "url('" + t.replace(/\'/g, "\\'") + "')"
                    };
                if (e) {
                    for (e = (e = e.replace(/[\u0000-\u001F]/g, "")).replace(/\\[\"\';:\uFEFF]/g, p).replace(/\"[^\"]+\"|\'[^\']+\'/g, function(e) {
                            return e.replace(/[;:]/g, p)
                        }); t = N.exec(e);)
                        if (N.lastIndex = t.index + t[0].length, n = t[1].replace(E, "").toLowerCase(), r = t[2].replace(E, ""), n && r) {
                            if (n = v(n), r = v(r), -1 !== n.indexOf(k) || -1 !== n.indexOf('"')) continue;
                            if (!b.allow_script_urls && ("behavior" === n || /expression\s*\(|\/\*|\*\//.test(r))) continue;
                            "font-weight" === n && "700" === r ? r = "bold" : "color" !== n && "background-color" !== n || (r = r.toLowerCase()), r = (r = r.replace(x, ii)).replace(w, y), c[n] = o ? g(r, !0) : r
                        }
                    d("border", "", !0), d("border", "-width"), d("border", "-color"), d("border", "-style"), d("padding", ""), d("margin", ""), i = "border", u = "border-style", s = "border-color", m(a = "border-width") && m(u) && m(s) && (c[i] = c[a] + " " + c[u] + " " + c[s], delete c[a], delete c[u], delete c[s]), "medium none" === c.border && delete c.border, "none" === c["border-image"] && delete c["border-image"]
                }
                return c
            },
            serialize: function(i, e) {
                var t, n, r, o, a, u = "",
                    s = function(e) {
                        var t, n, r, o;
                        if (t = c[e])
                            for (n = 0, r = t.length; n < r; n++) e = t[n], (o = i[e]) && (u += (0 < u.length ? " " : "") + e + ": " + o + ";")
                    };
                if (e && c) s("*"), s(e);
                else
                    for (t in i) !(n = i[t]) || l && (r = t, o = e, a = void 0, (a = l["*"]) && a[r] || (a = l[o]) && a[r]) || (u += (0 < u.length ? " " : "") + t + ": " + n + ";");
                return u
            }
        }
    }
    var ui, si = It.each,
        ci = It.grep,
        li = ve.ie,
        fi = /^([a-z0-9],?)+$/i,
        di = /^[ \t\r\n]*$/,
        mi = function(n, r, o) {
            var e = {},
                i = r.keep_values,
                t = {
                    set: function(e, t, n) {
                        r.url_converter && (t = r.url_converter.call(r.url_converter_scope || o(), t, n, e[0])), e.attr("data-mce-" + n, t).attr(n, t)
                    },
                    get: function(e, t) {
                        return e.attr("data-mce-" + t) || e.attr(t)
                    }
                };
            return e = {
                style: {
                    set: function(e, t) {
                        null === t || "object" != typeof t ? (i && e.attr("data-mce-style", t), e.attr("style", t)) : e.css(t)
                    },
                    get: function(e) {
                        var t = e.attr("data-mce-style") || e.attr("style");
                        return t = n.serialize(n.parse(t), e[0].nodeName)
                    }
                }
            }, i && (e.href = e.src = t), e
        },
        pi = function(e, t) {
            var n = t.attr("style"),
                r = e.serialize(e.parse(n), t[0].nodeName);
            r || (r = null), t.attr("data-mce-style", r)
        },
        gi = function(e, t) {
            var n, r, o = 0;
            if (e)
                for (n = e.nodeType, e = e.previousSibling; e; e = e.previousSibling) r = e.nodeType, (!t || 3 !== r || r !== n && e.nodeValue.length) && (o++, n = r);
            return o
        };

    function hi(a, u) {
        var s, c = this;
        void 0 === u && (u = {});
        var r = {},
            i = window,
            o = {},
            t = 0,
            e = function(m, e) {
                var p, g = 0,
                    h = {};
                p = (e = e || {}).maxLoadTime || 5e3;
                var v = function(e) {
                        m.getElementsByTagName("head")[0].appendChild(e)
                    },
                    n = function(e, t, n) {
                        var o, r, i, a, u = function() {
                                for (var e = a.passed, t = e.length; t--;) e[t]();
                                a.status = 2, a.passed = [], a.failed = []
                            },
                            s = function() {
                                for (var e = a.failed, t = e.length; t--;) e[t]();
                                a.status = 3, a.passed = [], a.failed = []
                            },
                            c = function(e, t) {
                                e() || ((new Date).getTime() - i < p ? we.setTimeout(t) : s())
                            },
                            l = function() {
                                c(function() {
                                    for (var e, t, n = m.styleSheets, r = n.length; r--;)
                                        if ((t = (e = n[r]).ownerNode ? e.ownerNode : e.owningElement) && t.id === o.id) return u(), !0
                                }, l)
                            },
                            f = function() {
                                c(function() {
                                    try {
                                        var e = r.sheet.cssRules;
                                        return u(), !!e
                                    } catch (t) {}
                                }, f)
                            };
                        if (e = It._addCacheSuffix(e), h[e] ? a = h[e] : (a = {
                                passed: [],
                                failed: []
                            }, h[e] = a), t && a.passed.push(t), n && a.failed.push(n), 1 !== a.status)
                            if (2 !== a.status)
                                if (3 !== a.status) {
                                    if (a.status = 1, (o = m.createElement("link")).rel = "stylesheet", o.type = "text/css", o.id = "u" + g++, o.async = !1, o.defer = !1, i = (new Date).getTime(), "onload" in o && !((d = navigator.userAgent.match(/WebKit\/(\d*)/)) && parseInt(d[1], 10) < 536)) o.onload = l, o.onerror = s;
                                    else {
                                        if (0 < navigator.userAgent.indexOf("Firefox")) return (r = m.createElement("style")).textContent = '@import "' + e + '"', f(), void v(r);
                                        l()
                                    }
                                    var d;
                                    v(o), o.href = e
                                } else s();
                        else u()
                    },
                    t = function(t) {
                        return Zr.nu(function(e) {
                            n(t, V.compose(e, V.constant(io.value(t))), V.compose(e, V.constant(io.error(t))))
                        })
                    },
                    o = function(e) {
                        return e.fold(V.identity, V.identity)
                    };
                return {
                    load: n,
                    loadAll: function(e, n, r) {
                        no.par(H.map(e, t)).get(function(e) {
                            var t = H.partition(e, function(e) {
                                return e.isValue()
                            });
                            0 < t.fail.length ? r(t.fail.map(o)) : n(t.pass.map(o))
                        })
                    }
                }
            }(a),
            l = [],
            f = u.schema ? u.schema : oi({}),
            d = ai({
                url_converter: u.url_converter,
                url_converter_scope: u.url_converter_scope
            }, u.schema),
            m = u.ownEvents ? new Be(u.proxy) : Be.Event,
            n = f.getBlockElements(),
            p = tn.overrideDefaults(function() {
                return {
                    context: a,
                    element: q.getRoot()
                }
            }),
            g = function(e) {
                if (e && a && "string" == typeof e) {
                    var t = a.getElementById(e);
                    return t && t.id !== e ? a.getElementsByName(e)[1] : t
                }
                return e
            },
            h = function(e) {
                return "string" == typeof e && (e = g(e)), p(e)
            },
            v = function(e, t, n) {
                var r, o, i = h(e);
                return i.length && (o = (r = s[t]) && r.get ? r.get(i, t) : i.attr(t)), void 0 === o && (o = n || ""), o
            },
            y = function(e) {
                var t = g(e);
                return t ? t.attributes : []
            },
            b = function(e, t, n) {
                var r, o;
                "" === n && (n = null);
                var i = h(e);
                r = i.attr(t), i.length && ((o = s[t]) && o.set ? o.set(i, n, t) : i.attr(t, n), r !== n && u.onSetAttrib && u.onSetAttrib({
                    attrElm: i,
                    attrName: t,
                    attrValue: n
                }))
            },
            C = function() {
                return u.root_element || a.body
            },
            x = function(e, t) {
                return Xr.getPos(a.body, g(e), t)
            },
            w = function(e, t, n) {
                var r = h(e);
                return n ? r.css(t) : ("float" === (t = t.replace(/-(\D)/g, function(e, t) {
                    return t.toUpperCase()
                })) && (t = ve.ie && ve.ie < 12 ? "styleFloat" : "cssFloat"), r[0] && r[0].style ? r[0].style[t] : undefined)
            },
            N = function(e) {
                var t, n;
                return e = g(e), t = w(e, "width"), n = w(e, "height"), -1 === t.indexOf("px") && (t = 0), -1 === n.indexOf("px") && (n = 0), {
                    w: parseInt(t, 10) || e.offsetWidth || e.clientWidth,
                    h: parseInt(n, 10) || e.offsetHeight || e.clientHeight
                }
            },
            E = function(e, t) {
                var n;
                if (!e) return !1;
                if (!Array.isArray(e)) {
                    if ("*" === t) return 1 === e.nodeType;
                    if (fi.test(t)) {
                        var r = t.toLowerCase().split(/,/),
                            o = e.nodeName.toLowerCase();
                        for (n = r.length - 1; 0 <= n; n--)
                            if (r[n] === o) return !0;
                        return !1
                    }
                    if (e.nodeType && 1 !== e.nodeType) return !1
                }
                var i = Array.isArray(e) ? e : [e];
                return 0 < mt(t, i[0].ownerDocument || i[0], null, i).length
            },
            S = function(e, t, n, r) {
                var o, i = [],
                    a = g(e);
                for (r = r === undefined, n = n || ("BODY" !== C().nodeName ? C().parentNode : null), It.is(t, "string") && (t = "*" === (o = t) ? function(e) {
                        return 1 === e.nodeType
                    } : function(e) {
                        return E(e, o)
                    }); a && a !== n && a.nodeType && 9 !== a.nodeType;) {
                    if (!t || "function" == typeof t && t(a)) {
                        if (!r) return [a];
                        i.push(a)
                    }
                    a = a.parentNode
                }
                return r ? i : null
            },
            k = function(e, t, n) {
                var r = t;
                if (e)
                    for ("string" == typeof t && (r = function(e) {
                            return E(e, t)
                        }), e = e[n]; e; e = e[n])
                        if ("function" == typeof r && r(e)) return e;
                return null
            },
            T = function(e, n, r) {
                var o, t = "string" == typeof e ? g(e) : e;
                if (!t) return !1;
                if (It.isArray(t) && (t.length || 0 === t.length)) return o = [], si(t, function(e, t) {
                    e && ("string" == typeof e && (e = g(e)), o.push(n.call(r, e, t)))
                }), o;
                var i = r || c;
                return n.call(i, t)
            },
            A = function(e, t) {
                h(e).each(function(e, n) {
                    si(t, function(e, t) {
                        b(n, t, e)
                    })
                })
            },
            R = function(e, r) {
                var t = h(e);
                li ? t.each(function(e, t) {
                    if (!1 !== t.canHaveHTML) {
                        for (; t.firstChild;) t.removeChild(t.firstChild);
                        try {
                            t.innerHTML = "<br>" + r, t.removeChild(t.firstChild)
                        } catch (n) {
                            tn("<div></div>").html("<br>" + r).contents().slice(1).appendTo(t)
                        }
                        return r
                    }
                }) : t.html(r)
            },
            _ = function(e, n, r, o, i) {
                return T(e, function(e) {
                    var t = "string" == typeof n ? a.createElement(n) : n;
                    return A(t, r), o && ("string" != typeof o && o.nodeType ? t.appendChild(o) : "string" == typeof o && R(t, o)), i ? t : e.appendChild(t)
                })
            },
            B = function(e, t, n) {
                return _(a.createElement(e), e, t, n, !0)
            },
            D = Ko.decode,
            O = Ko.encodeAllRaw,
            P = function(e, t) {
                var n = h(e);
                return t ? n.each(function() {
                    for (var e; e = this.firstChild;) 3 === e.nodeType && 0 === e.data.length ? this.removeChild(e) : this.parentNode.insertBefore(e, this)
                }).remove() : n.remove(), 1 < n.length ? n.toArray() : n[0]
            },
            L = function(e, t, n) {
                h(e).toggleClass(t, n).each(function() {
                    "" === this.className && tn(this).attr("class", null)
                })
            },
            I = function(t, e, n) {
                return T(e, function(e) {
                    return It.is(e, "array") && (t = t.cloneNode(!0)), n && si(ci(e.childNodes), function(e) {
                        t.appendChild(e)
                    }), e.parentNode.replaceChild(t, e)
                })
            },
            M = function() {
                return a.createRange()
            },
            F = function(e, t, n, r) {
                if (It.isArray(e)) {
                    for (var o = e.length; o--;) e[o] = F(e[o], t, n, r);
                    return e
                }
                return !u.collect || e !== a && e !== i || l.push([e, t, n, r]), m.bind(e, t, n, r || q)
            },
            z = function(e, t, n) {
                var r;
                if (It.isArray(e)) {
                    for (r = e.length; r--;) e[r] = z(e[r], t, n);
                    return e
                }
                if (l && (e === a || e === i))
                    for (r = l.length; r--;) {
                        var o = l[r];
                        e !== o[0] || t && t !== o[1] || n && n !== o[2] || m.unbind(o[0], o[1], o[2])
                    }
                return m.unbind(e, t, n)
            },
            U = function(e) {
                if (e && Oo.isElement(e)) {
                    var t = e.getAttribute("data-mce-contenteditable");
                    return t && "inherit" !== t ? t : "inherit" !== e.contentEditable ? e.contentEditable : null
                }
                return null
            },
            q = {
                doc: a,
                settings: u,
                win: i,
                files: o,
                stdMode: !0,
                boxModel: !0,
                styleSheetLoader: e,
                boundEvents: l,
                styles: d,
                schema: f,
                events: m,
                isBlock: function(e) {
                    if ("string" == typeof e) return !!n[e];
                    if (e) {
                        var t = e.nodeType;
                        if (t) return !(1 !== t || !n[e.nodeName])
                    }
                    return !1
                },
                $: p,
                $$: h,
                root: null,
                clone: function(t, e) {
                    if (!li || 1 !== t.nodeType || e) return t.cloneNode(e);
                    if (!e) {
                        var n = a.createElement(t.nodeName);
                        return si(y(t), function(e) {
                            b(n, e.nodeName, v(t, e.nodeName))
                        }), n
                    }
                    return null
                },
                getRoot: C,
                getViewPort: function(e) {
                    var t = e || i,
                        n = t.document,
                        r = n.documentElement;
                    return {
                        x: t.pageXOffset || r.scrollLeft,
                        y: t.pageYOffset || r.scrollTop,
                        w: t.innerWidth || r.clientWidth,
                        h: t.innerHeight || r.clientHeight
                    }
                },
                getRect: function(e) {
                    var t, n;
                    return e = g(e), t = x(e), n = N(e), {
                        x: t.x,
                        y: t.y,
                        w: n.w,
                        h: n.h
                    }
                },
                getSize: N,
                getParent: function(e, t, n) {
                    var r = S(e, t, n, !1);
                    return r && 0 < r.length ? r[0] : null
                },
                getParents: S,
                get: g,
                getNext: function(e, t) {
                    return k(e, t, "nextSibling")
                },
                getPrev: function(e, t) {
                    return k(e, t, "previousSibling")
                },
                select: function(e, t) {
                    return mt(e, g(t) || u.root_element || a, [])
                },
                is: E,
                add: _,
                create: B,
                createHTML: function(e, t, n) {
                    var r, o = "";
                    for (r in o += "<" + e, t) t.hasOwnProperty(r) && null !== t[r] && "undefined" != typeof t[r] && (o += " " + r + '="' + O(t[r]) + '"');
                    return void 0 !== n ? o + ">" + n + "</" + e + ">" : o + " />"
                },
                createFragment: function(e) {
                    var t, n = a.createElement("div"),
                        r = a.createDocumentFragment();
                    for (e && (n.innerHTML = e); t = n.firstChild;) r.appendChild(t);
                    return r
                },
                remove: P,
                setStyle: function(e, t, n) {
                    var r = h(e).css(t, n);
                    u.update_styles && pi(d, r)
                },
                getStyle: w,
                setStyles: function(e, t) {
                    var n = h(e).css(t);
                    u.update_styles && pi(d, n)
                },
                removeAllAttribs: function(e) {
                    return T(e, function(e) {
                        var t, n = e.attributes;
                        for (t = n.length - 1; 0 <= t; t--) e.removeAttributeNode(n.item(t))
                    })
                },
                setAttrib: b,
                setAttribs: A,
                getAttrib: v,
                getPos: x,
                parseStyle: function(e) {
                    return d.parse(e)
                },
                serializeStyle: function(e, t) {
                    return d.serialize(e, t)
                },
                addStyle: function(e) {
                    var t, n;
                    if (q !== hi.DOM && a === document) {
                        if (r[e]) return;
                        r[e] = !0
                    }(n = a.getElementById("mceDefaultStyles")) || ((n = a.createElement("style")).id = "mceDefaultStyles", n.type = "text/css", (t = a.getElementsByTagName("head")[0]).firstChild ? t.insertBefore(n, t.firstChild) : t.appendChild(n)), n.styleSheet ? n.styleSheet.cssText += e : n.appendChild(a.createTextNode(e))
                },
                loadCSS: function(e) {
                    var n;
                    q === hi.DOM || a !== document ? (e || (e = ""), n = a.getElementsByTagName("head")[0], si(e.split(","), function(e) {
                        var t;
                        e = It._addCacheSuffix(e), o[e] || (o[e] = !0, t = B("link", {
                            rel: "stylesheet",
                            href: e
                        }), n.appendChild(t))
                    })) : hi.DOM.loadCSS(e)
                },
                addClass: function(e, t) {
                    h(e).addClass(t)
                },
                removeClass: function(e, t) {
                    L(e, t, !1)
                },
                hasClass: function(e, t) {
                    return h(e).hasClass(t)
                },
                toggleClass: L,
                show: function(e) {
                    h(e).show()
                },
                hide: function(e) {
                    h(e).hide()
                },
                isHidden: function(e) {
                    return "none" === h(e).css("display")
                },
                uniqueId: function(e) {
                    return (e || "mce_") + t++
                },
                setHTML: R,
                getOuterHTML: function(e) {
                    var t = "string" == typeof e ? g(e) : e;
                    return Oo.isElement(t) ? t.outerHTML : tn("<div></div>").append(tn(t).clone()).html()
                },
                setOuterHTML: function(e, t) {
                    h(e).each(function() {
                        try {
                            if ("outerHTML" in this) return void(this.outerHTML = t)
                        } catch (e) {}
                        P(tn(this).html(t), !0)
                    })
                },
                decode: D,
                encode: O,
                insertAfter: function(e, t) {
                    var r = g(t);
                    return T(e, function(e) {
                        var t, n;
                        return t = r.parentNode, (n = r.nextSibling) ? t.insertBefore(e, n) : t.appendChild(e), e
                    })
                },
                replace: I,
                rename: function(t, e) {
                    var n;
                    return t.nodeName !== e.toUpperCase() && (n = B(e), si(y(t), function(e) {
                        b(n, e.nodeName, v(t, e.nodeName))
                    }), I(n, t, !0)), n || t
                },
                findCommonAncestor: function(e, t) {
                    for (var n, r = e; r;) {
                        for (n = t; n && r !== n;) n = n.parentNode;
                        if (r === n) break;
                        r = r.parentNode
                    }
                    return !r && e.ownerDocument ? e.ownerDocument.documentElement : r
                },
                toHex: function(e) {
                    return d.toHex(It.trim(e))
                },
                run: T,
                getAttribs: y,
                isEmpty: function(e, t) {
                    var n, r, o, i, a, u, s = 0;
                    if (e = e.firstChild) {
                        a = new ao(e, e.parentNode), t = t || (f ? f.getNonEmptyElements() : null), i = f ? f.getWhiteSpaceElements() : {};
                        do {
                            if (o = e.nodeType, Oo.isElement(e)) {
                                var c = e.getAttribute("data-mce-bogus");
                                if (c) {
                                    e = a.next("all" === c);
                                    continue
                                }
                                if (u = e.nodeName.toLowerCase(), t && t[u]) {
                                    if ("br" === u) {
                                        s++, e = a.next();
                                        continue
                                    }
                                    return !1
                                }
                                for (n = (r = y(e)).length; n--;)
                                    if ("name" === (u = r[n].nodeName) || "data-mce-bookmark" === u) return !1
                            }
                            if (8 === o) return !1;
                            if (3 === o && !di.test(e.nodeValue)) return !1;
                            if (3 === o && e.parentNode && i[e.parentNode.nodeName] && di.test(e.nodeValue)) return !1;
                            e = a.next()
                        } while (e)
                    }
                    return s <= 1
                },
                createRng: M,
                nodeIndex: gi,
                split: function(e, t, n) {
                    var r, o, i, a = M();
                    if (e && t) return a.setStart(e.parentNode, gi(e)), a.setEnd(t.parentNode, gi(t)), r = a.extractContents(), (a = M()).setStart(t.parentNode, gi(t) + 1), a.setEnd(e.parentNode, gi(e) + 1), o = a.extractContents(), (i = e.parentNode).insertBefore(Io.trimNode(q, r), e), n ? i.insertBefore(n, e) : i.insertBefore(t, e), i.insertBefore(Io.trimNode(q, o), e), P(e), n || t
                },
                bind: F,
                unbind: z,
                fire: function(e, t, n) {
                    return m.fire(e, t, n)
                },
                getContentEditable: U,
                getContentEditableParent: function(e) {
                    for (var t = C(), n = null; e && e !== t && null === (n = U(e)); e = e.parentNode);
                    return n
                },
                destroy: function() {
                    if (l)
                        for (var e = l.length; e--;) {
                            var t = l[e];
                            m.unbind(t[0], t[1], t[2])
                        }
                    mt.setDocument && mt.setDocument()
                },
                isChildOf: function(e, t) {
                    for (; e;) {
                        if (t === e) return !0;
                        e = e.parentNode
                    }
                    return !1
                },
                dumpRng: function(e) {
                    return "startContainer: " + e.startContainer.nodeName + ", startOffset: " + e.startOffset + ", endContainer: " + e.endContainer.nodeName + ", endOffset: " + e.endOffset
                }
            };
        return s = mi(d, u, function() {
            return q
        }), q
    }(ui = hi || (hi = {})).DOM = ui(document), ui.nodeIndex = gi;
    var vi = hi,
        yi = vi.DOM,
        bi = It.each,
        Ci = It.grep,
        xi = function(e) {
            return "function" == typeof e
        },
        wi = function() {
            var f = {},
                o = [],
                i = {},
                a = [],
                d = 0;
            this.isDone = function(e) {
                return 2 === f[e]
            }, this.markDone = function(e) {
                f[e] = 2
            }, this.add = this.load = function(e, t, n, r) {
                f[e] === undefined && (o.push(e), f[e] = 0), t && (i[e] || (i[e] = []), i[e].push({
                    success: t,
                    failure: r,
                    scope: n || this
                }))
            }, this.remove = function(e) {
                delete f[e], delete i[e]
            }, this.loadQueue = function(e, t, n) {
                this.loadScripts(o, e, t, n)
            }, this.loadScripts = function(n, e, t, r) {
                var s, c = [],
                    l = function(t, e) {
                        bi(i[e], function(e) {
                            xi(e[t]) && e[t].call(e.scope)
                        }), i[e] = undefined
                    };
                a.push({
                    success: e,
                    failure: r,
                    scope: t || this
                }), (s = function() {
                    var e = Ci(n);
                    if (n.length = 0, bi(e, function(e) {
                            var t, n, r, o, i, a, u;
                            2 !== f[e] ? 3 !== f[e] ? 1 !== f[e] && (f[e] = 1, d++, t = e, n = function() {
                                f[e] = 2, d--, l("success", e), s()
                            }, r = function() {
                                f[e] = 3, d--, c.push(e), l("failure", e), s()
                            }, u = function() {
                                a.remove(i), o && (o.onreadystatechange = o.onload = o = null), n()
                            }, i = (a = yi).uniqueId(), (o = document.createElement("script")).id = i, o.type = "text/javascript", o.src = It._addCacheSuffix(t), "onreadystatechange" in o ? o.onreadystatechange = function() {
                                /loaded|complete/.test(o.readyState) && u()
                            } : o.onload = u, o.onerror = function() {
                                xi(r) ? r() : "undefined" != typeof console && console.log && console.log("Failed to load script: " + t)
                            }, (document.getElementsByTagName("head")[0] || document.body).appendChild(o)) : l("failure", e) : l("success", e)
                        }), !d) {
                        var t = a.slice(0);
                        a.length = 0, bi(t, function(e) {
                            0 === c.length ? xi(e.success) && e.success.call(e.scope) : xi(e.failure) && e.failure.call(e.scope, c)
                        })
                    }
                })()
            }
        };
    wi.ScriptLoader = new wi;
    var Ni, Ei = It.each;

    function Si() {
        var r = this,
            o = [],
            a = {},
            u = {},
            i = [],
            s = function(e) {
                var t;
                return u[e] && (t = u[e].dependencies), t || []
            },
            c = function(e, t) {
                return "object" == typeof t ? t : "string" == typeof e ? {
                    prefix: "",
                    resource: t,
                    suffix: ""
                } : {
                    prefix: e.prefix,
                    resource: t,
                    suffix: e.suffix
                }
            },
            l = function(n, e, t) {
                var r = s(name);
                Ei(r, function(e) {
                    var t = c(n, e);
                    f(t.resource, t, undefined, undefined)
                }), e && (t ? e.call(t) : e.call(wi))
            },
            f = function(e, t, n, r, o) {
                if (!a[e]) {
                    var i = "string" == typeof t ? t : t.prefix + t.resource + t.suffix;
                    0 !== i.indexOf("/") && -1 === i.indexOf("://") && (i = Si.baseURL + "/" + i), a[e] = i.substring(0, i.lastIndexOf("/")), u[e] ? l(t, n, r) : wi.ScriptLoader.add(i, function() {
                        return l(t, n, r)
                    }, r, o)
                }
            };
        return {
            items: o,
            urls: a,
            lookup: u,
            _listeners: i,
            get: function(e) {
                return u[e] ? u[e].instance : undefined
            },
            dependencies: s,
            requireLangPack: function(e, t) {
                var n = Si.language;
                if (n && !1 !== Si.languageLoad) {
                    if (t)
                        if (-1 !== (t = "," + t + ",").indexOf("," + n.substr(0, 2) + ",")) n = n.substr(0, 2);
                        else if (-1 === t.indexOf("," + n + ",")) return;
                    wi.ScriptLoader.add(a[e] + "/langs/" + n + ".js")
                }
            },
            add: function(t, e, n) {
                o.push(e), u[t] = {
                    instance: e,
                    dependencies: n
                };
                var r = H.partition(i, function(e) {
                    return e.name === t
                });
                return i = r.fail, Ei(r.pass, function(e) {
                    e.callback()
                }), e
            },
            remove: function(e) {
                delete a[e], delete u[e]
            },
            createUrl: c,
            addComponents: function(e, t) {
                var n = r.urls[e];
                Ei(t, function(e) {
                    wi.ScriptLoader.add(n + "/" + e)
                })
            },
            load: f,
            waitFor: function(e, t) {
                u.hasOwnProperty(e) ? t() : i.push({
                    name: e,
                    callback: t
                })
            }
        }
    }(Ni = Si || (Si = {})).PluginManager = Ni(), Ni.ThemeManager = Ni();
    var ki, Ti = "\ufeff",
        Ai = function(e) {
            return e === Ti
        },
        Ri = Ti,
        _i = function(e) {
            return e.replace(new RegExp(Ti, "g"), "")
        },
        Bi = Oo.isElement,
        Di = Oo.isText,
        Oi = function(e) {
            return Di(e) && (e = e.parentNode), Bi(e) && e.hasAttribute("data-mce-caret")
        },
        Pi = function(e) {
            return Di(e) && Ai(e.data)
        },
        Li = function(e) {
            return Oi(e) || Pi(e)
        },
        Ii = function(e) {
            return e.firstChild !== e.lastChild || !Oo.isBr(e.firstChild)
        },
        Mi = function(e) {
            var t = e.container();
            return e && Oo.isText(t) && t.data.charAt(e.offset()) === Ri
        },
        Fi = function(e) {
            var t = e.container();
            return e && Oo.isText(t) && t.data.charAt(e.offset() - 1) === Ri
        },
        zi = function(e, t, n) {
            var r, o, i;
            return (r = t.ownerDocument.createElement(e)).setAttribute("data-mce-caret", n ? "before" : "after"), r.setAttribute("data-mce-bogus", "all"), r.appendChild(((i = document.createElement("br")).setAttribute("data-mce-bogus", "1"), i)), o = t.parentNode, n ? o.insertBefore(r, t) : t.nextSibling ? o.insertBefore(r, t.nextSibling) : o.appendChild(r), r
        },
        Ui = function(e) {
            return Di(e) && e.data[0] === Ri
        },
        qi = function(e) {
            return Di(e) && e.data[e.data.length - 1] === Ri
        },
        Vi = function(e) {
            return e && e.hasAttribute("data-mce-caret") ? (t = e.getElementsByTagName("br"), n = t[t.length - 1], Oo.isBogus(n) && n.parentNode.removeChild(n), e.removeAttribute("data-mce-caret"), e.removeAttribute("data-mce-bogus"), e.removeAttribute("style"), e.removeAttribute("_moz_abspos"), e) : null;
            var t, n
        },
        Hi = Oo.isContentEditableTrue,
        ji = Oo.isContentEditableFalse,
        $i = Oo.isBr,
        Wi = Oo.isText,
        Ki = Oo.matchNodeNames("script style textarea"),
        Xi = Oo.matchNodeNames("img input textarea hr iframe video audio object"),
        Yi = Oo.matchNodeNames("table"),
        Gi = Li,
        Ji = function(e) {
            return !Gi(e) && (Wi(e) ? !Ki(e.parentNode) : Xi(e) || $i(e) || Yi(e) || Qi(e))
        },
        Qi = function(e) {
            return !1 === (t = e, Oo.isElement(t) && "true" === t.getAttribute("unselectable")) && ji(e);
            var t
        },
        Zi = function(e, t) {
            return Ji(e) && function(e, t) {
                for (e = e.parentNode; e && e !== t; e = e.parentNode) {
                    if (Qi(e)) return !1;
                    if (Hi(e)) return !0
                }
                return !0
            }(e, t)
        },
        ea = Math.round,
        ta = function(e) {
            return e ? {
                left: ea(e.left),
                top: ea(e.top),
                bottom: ea(e.bottom),
                right: ea(e.right),
                width: ea(e.width),
                height: ea(e.height)
            } : {
                left: 0,
                top: 0,
                bottom: 0,
                right: 0,
                width: 0,
                height: 0
            }
        },
        na = function(e, t) {
            return e = ta(e), t || (e.left = e.left + e.width), e.right = e.left, e.width = 0, e
        },
        ra = function(e, t, n) {
            return 0 <= e && e <= Math.min(t.height, n.height) / 2
        },
        oa = function(e, t) {
            return e.bottom - e.height / 2 < t.top || !(e.top > t.bottom) && ra(t.top - e.bottom, e, t)
        },
        ia = function(e, t) {
            return e.top > t.bottom || !(e.bottom < t.top) && ra(t.bottom - e.top, e, t)
        },
        aa = function(e) {
            var t = e.startContainer,
                n = e.startOffset;
            return t.hasChildNodes() && e.endOffset === n + 1 ? t.childNodes[n] : null
        },
        ua = function(e, t) {
            return 1 === e.nodeType && e.hasChildNodes() && (t >= e.childNodes.length && (t = e.childNodes.length - 1), e = e.childNodes[t]), e
        },
        sa = new RegExp("[\u0300-\u036f\u0483-\u0487\u0488-\u0489\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7-\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e3-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962-\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2-\u09e3\u0a01-\u0a02\u0a3c\u0a41-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a70-\u0a71\u0a75\u0a81-\u0a82\u0abc\u0ac1-\u0ac5\u0ac7-\u0ac8\u0acd\u0ae2-\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62-\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c00\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c62-\u0c63\u0c81\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc-\u0ccd\u0cd5-\u0cd6\u0ce2-\u0ce3\u0d01\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62-\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb-\u0ebc\u0ec8-\u0ecd\u0f18-\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039-\u103a\u103d-\u103e\u1058-\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17b4-\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193b\u1a17-\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abd\u1abe\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80-\u1b81\u1ba2-\u1ba5\u1ba8-\u1ba9\u1bab-\u1bad\u1be6\u1be8-\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36-\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8-\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u200c-\u200d\u20d0-\u20dc\u20dd-\u20e0\u20e1\u20e2-\u20e4\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u302e-\u302f\u3099-\u309a\ua66f\ua670-\ua672\ua674-\ua67d\ua69e-\ua69f\ua6f0-\ua6f1\ua802\ua806\ua80b\ua825-\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9e5\uaa29-\uaa2e\uaa31-\uaa32\uaa35-\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7-\uaab8\uaabe-\uaabf\uaac1\uaaec-\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\uff9e-\uff9f]"),
        ca = function(e) {
            return "string" == typeof e && 768 <= e.charCodeAt(0) && sa.test(e)
        },
        la = [].slice,
        fa = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            var r = la.call(arguments);
            return r.length - 1 >= e.length ? e.apply(this, r.slice(1)) : function() {
                var e = r.concat([].slice.call(arguments));
                return fa.apply(this, e)
            }
        },
        da = {
            constant: function(e) {
                return function() {
                    return e
                }
            },
            negate: function(t) {
                return function(e) {
                    return !t(e)
                }
            },
            and: function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = la.call(arguments);
                return function(e) {
                    for (var t = 0; t < n.length; t++)
                        if (!n[t](e)) return !1;
                    return !0
                }
            },
            or: function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = la.call(arguments);
                return function(e) {
                    for (var t = 0; t < n.length; t++)
                        if (n[t](e)) return !0;
                    return !1
                }
            },
            curry: fa,
            compose: function(t, n) {
                return function(e) {
                    return t(n(e))
                }
            },
            noop: function() {}
        },
        ma = function(e, t) {
            for (var n = [], r = 0; r < e.length; r++) {
                var o = e[r];
                if (!o.isSome()) return A.none();
                n.push(o.getOrDie())
            }
            return A.some(t.apply(null, n))
        },
        pa = Oo.isElement,
        ga = Ji,
        ha = Oo.matchStyleValues("display", "block table"),
        va = Oo.matchStyleValues("float", "left right"),
        ya = da.and(pa, ga, da.negate(va)),
        ba = da.negate(Oo.matchStyleValues("white-space", "pre pre-line pre-wrap")),
        Ca = Oo.isText,
        xa = Oo.isBr,
        wa = vi.nodeIndex,
        Na = ua,
        Ea = function(e) {
            return "createRange" in e ? e.createRange() : vi.DOM.createRng()
        },
        Sa = function(e) {
            return e && /[\r\n\t ]/.test(e)
        },
        ka = function(e) {
            return !!e.setStart && !!e.setEnd
        },
        Ta = function(e) {
            var t, n = e.startContainer,
                r = e.startOffset;
            return !!(Sa(e.toString()) && ba(n.parentNode) && Oo.isText(n) && (t = n.data, Sa(t[r - 1]) || Sa(t[r + 1])))
        },
        Aa = function(e) {
            return 0 === e.left && 0 === e.right && 0 === e.top && 0 === e.bottom
        },
        Ra = function(e) {
            var t, n, r, o, i, a, u, s;
            return t = 0 < (n = e.getClientRects()).length ? ta(n[0]) : ta(e.getBoundingClientRect()), !ka(e) && xa(e) && Aa(t) ? (i = (r = e).ownerDocument, a = Ea(i), u = i.createTextNode("\xa0"), (s = r.parentNode).insertBefore(u, r), a.setStart(u, 0), a.setEnd(u, 1), o = ta(a.getBoundingClientRect()), s.removeChild(u), o) : Aa(t) && ka(e) ? function(e) {
                var t = e.startContainer,
                    n = e.endContainer,
                    r = e.startOffset,
                    o = e.endOffset;
                if (t === n && Oo.isText(n) && 0 === r && 1 === o) {
                    var i = e.cloneRange();
                    return i.setEndAfter(n), Ra(i)
                }
                return null
            }(e) : t
        },
        _a = function(e, t) {
            var n = na(e, t);
            return n.width = 1, n.right = n.left + 1, n
        },
        Ba = function(e) {
            var t, n, r = [],
                o = function(e) {
                    var t, n;
                    0 !== e.height && (0 < r.length && (t = e, n = r[r.length - 1], t.left === n.left && t.top === n.top && t.bottom === n.bottom && t.right === n.right) || r.push(e))
                },
                i = function(e, t) {
                    var n = Ea(e.ownerDocument);
                    if (t < e.data.length) {
                        if (ca(e.data[t])) return r;
                        if (ca(e.data[t - 1]) && (n.setStart(e, t), n.setEnd(e, t + 1), !Ta(n))) return o(_a(Ra(n), !1)), r
                    }
                    0 < t && (n.setStart(e, t - 1), n.setEnd(e, t), Ta(n) || o(_a(Ra(n), !1))), t < e.data.length && (n.setStart(e, t), n.setEnd(e, t + 1), Ta(n) || o(_a(Ra(n), !0)))
                };
            if (Ca(e.container())) return i(e.container(), e.offset()), r;
            if (pa(e.container()))
                if (e.isAtEnd()) n = Na(e.container(), e.offset()), Ca(n) && i(n, n.data.length), ya(n) && !xa(n) && o(_a(Ra(n), !1));
                else {
                    if (n = Na(e.container(), e.offset()), Ca(n) && i(n, 0), ya(n) && e.isAtEnd()) return o(_a(Ra(n), !1)), r;
                    t = Na(e.container(), e.offset() - 1), ya(t) && !xa(t) && (ha(t) || ha(n) || !ya(n)) && o(_a(Ra(t), !1)), ya(n) && o(_a(Ra(n), !0))
                }
            return r
        };

    function Da(t, n, e) {
        var r = function() {
            return e || (e = Ba(Da(t, n))), e
        };
        return {
            container: da.constant(t),
            offset: da.constant(n),
            toRange: function() {
                var e;
                return (e = Ea(t.ownerDocument)).setStart(t, n), e.setEnd(t, n), e
            },
            getClientRects: r,
            isVisible: function() {
                return 0 < r().length
            },
            isAtStart: function() {
                return Ca(t), 0 === n
            },
            isAtEnd: function() {
                return Ca(t) ? n >= t.data.length : n >= t.childNodes.length
            },
            isEqual: function(e) {
                return e && t === e.container() && n === e.offset()
            },
            getNode: function(e) {
                return Na(t, e ? n - 1 : n)
            }
        }
    }(ki = Da || (Da = {})).fromRangeStart = function(e) {
        return ki(e.startContainer, e.startOffset)
    }, ki.fromRangeEnd = function(e) {
        return ki(e.endContainer, e.endOffset)
    }, ki.after = function(e) {
        return ki(e.parentNode, wa(e) + 1)
    }, ki.before = function(e) {
        return ki(e.parentNode, wa(e))
    }, ki.isAbove = function(e, t) {
        return ma([H.head(t.getClientRects()), H.last(e.getClientRects())], oa).getOr(!1)
    }, ki.isBelow = function(e, t) {
        return ma([H.last(t.getClientRects()), H.head(e.getClientRects())], ia).getOr(!1)
    }, ki.isAtStart = function(e) {
        return !!e && e.isAtStart()
    }, ki.isAtEnd = function(e) {
        return !!e && e.isAtEnd()
    }, ki.isTextPosition = function(e) {
        return !!e && Oo.isText(e.container())
    }, ki.isElementPosition = function(e) {
        return !1 === ki.isTextPosition(e)
    };
    var Oa, Pa, La = Da,
        Ia = Oo.isElement,
        Ma = Oo.isText,
        Fa = function(e) {
            var t = e.parentNode;
            t && t.removeChild(e)
        },
        za = function(e, t) {
            0 === t.length ? Fa(e) : e.nodeValue = t
        },
        Ua = function(e) {
            var t = _i(e);
            return {
                count: e.length - t.length,
                text: t
            }
        },
        qa = function(e, t) {
            return ja(e), t
        },
        Va = function(e, t) {
            return Ma(e) && t.container() === e ? (r = t, o = Ua((n = e).data.substr(0, r.offset())), i = Ua(n.data.substr(r.offset())), 0 < (a = o.text + i.text).length ? (za(n, a), La(n, r.offset() - o.count)) : r) : qa(e, t);
            var n, r, o, i, a
        },
        Ha = function(e, t) {
            return t.container() === e.parentNode ? (n = e, o = (r = t).container(), i = H.indexOf(H.from(o.childNodes), n).map(function(e) {
                return e < r.offset() ? La(o, r.offset() - 1) : r
            }).getOr(r), ja(n), i) : qa(e, t);
            var n, r, o, i
        },
        ja = function(e) {
            if (Ia(e) && Li(e) && (Ii(e) ? e.removeAttribute("data-mce-caret") : Fa(e)), Ma(e)) {
                var t = _i(function(e) {
                    try {
                        return e.nodeValue
                    } catch (t) {
                        return ""
                    }
                }(e));
                za(e, t)
            }
        },
        $a = {
            removeAndReposition: function(e, t) {
                return La.isTextPosition(t) ? Va(e, t) : Ha(e, t)
            },
            remove: ja
        },
        Wa = function(e) {
            return La.isTextPosition(e) ? 0 === e.offset() : Ji(e.getNode())
        },
        Ka = function(e) {
            if (La.isTextPosition(e)) {
                var t = e.container();
                return e.offset() === t.data.length
            }
            return Ji(e.getNode(!0))
        },
        Xa = function(e, t) {
            return !La.isTextPosition(e) && !La.isTextPosition(t) && e.getNode() === t.getNode(!0)
        },
        Ya = function(e, t, n) {
            return e ? !Xa(t, n) && (r = t, !(!La.isTextPosition(r) && Oo.isBr(r.getNode()))) && Ka(t) && Wa(n) : !Xa(n, t) && Wa(t) && Ka(n);
            var r
        },
        Ga = function(e, t, n) {
            var r = Ys(t);
            return A.from(e ? r.next(n) : r.prev(n))
        },
        Ja = function(e, t) {
            var n, r, o, i, a, u = e ? t.firstChild : t.lastChild;
            return Oo.isText(u) ? A.some(La(u, e ? 0 : u.data.length)) : u ? Ji(u) ? A.some(e ? La.before(u) : (a = u, Oo.isBr(a) ? La.before(a) : La.after(a))) : (r = t, o = u, i = (n = e) ? La.before(o) : La.after(o), Ga(n, r, i)) : A.none()
        },
        Qa = {
            fromPosition: Ga,
            nextPosition: V.curry(Ga, !0),
            prevPosition: V.curry(Ga, !1),
            navigate: function(t, n, r) {
                return Ga(t, n, r).bind(function(e) {
                    return bs(r, e, n) && Ya(t, r, e) ? Ga(t, n, e) : A.some(e)
                })
            },
            positionIn: Ja,
            firstPositionIn: V.curry(Ja, !0),
            lastPositionIn: V.curry(Ja, !1)
        },
        Za = Oo.isContentEditableTrue,
        eu = Oo.isContentEditableFalse,
        tu = function(e, t, n, r, o) {
            return t._selectionOverrides.showCaret(e, n, r, o)
        },
        nu = function(e, t) {
            var n, r;
            return e.fire("BeforeObjectSelected", {
                target: t
            }).isDefaultPrevented() ? null : ((r = (n = t).ownerDocument.createRange()).selectNode(n), r)
        },
        ru = function(e, t, n) {
            var r = Ss(1, e.getBody(), t),
                o = La.fromRangeStart(r),
                i = o.getNode();
            if (eu(i)) return tu(1, e, i, !o.isAtEnd(), !1);
            var a = o.getNode(!0);
            if (eu(a)) return tu(1, e, a, !1, !1);
            var u = e.dom.getParent(o.getNode(), function(e) {
                return eu(e) || Za(e)
            });
            return eu(u) ? tu(1, e, u, !1, n) : null
        },
        ou = function(e, t, n) {
            if (!t || !t.collapsed) return t;
            var r = ru(e, t, n);
            return r || t
        };
    (Pa = Oa || (Oa = {}))[Pa.Br = 0] = "Br", Pa[Pa.Block = 1] = "Block", Pa[Pa.Wrap = 2] = "Wrap", Pa[Pa.Eol = 3] = "Eol";
    var iu, au, uu = function(e, t) {
            return e === iu.Backwards ? t.reverse() : t
        },
        su = function(e, t, n, r) {
            for (var o, i, a, u, s, c, l = Ys(n), f = r, d = []; f && (s = l, c = f, o = t === iu.Forwards ? s.next(c) : s.prev(c));) {
                if (Oo.isBr(o.getNode(!1))) return t === iu.Forwards ? {
                    positions: uu(t, d).concat([o]),
                    breakType: Oa.Br,
                    breakAt: A.some(o)
                } : {
                    positions: uu(t, d),
                    breakType: Oa.Br,
                    breakAt: A.some(o)
                };
                if (o.isVisible()) {
                    if (e(f, o)) {
                        var m = (i = t, a = f, u = o, Oo.isBr(u.getNode(i === iu.Forwards)) ? Oa.Br : !1 === bs(a, u) ? Oa.Block : Oa.Wrap);
                        return {
                            positions: uu(t, d),
                            breakType: m,
                            breakAt: A.some(o)
                        }
                    }
                    d.push(o), f = o
                } else f = o
            }
            return {
                positions: uu(t, d),
                breakType: Oa.Eol,
                breakAt: A.none()
            }
        },
        cu = function(n, r, o, e) {
            return r(o, e).breakAt.map(function(e) {
                var t = r(o, e).positions;
                return n === iu.Backwards ? t.concat(e) : [e].concat(t)
            }).getOr([])
        },
        lu = function(e, i) {
            return H.foldl(e, function(e, o) {
                return e.fold(function() {
                    return A.some(o)
                }, function(r) {
                    return ma([H.head(r.getClientRects()), H.head(o.getClientRects())], function(e, t) {
                        var n = Math.abs(i - e.left);
                        return Math.abs(i - t.left) <= n ? o : r
                    }).or(e)
                })
            }, A.none())
        },
        fu = function(t, e) {
            return H.head(e.getClientRects()).bind(function(e) {
                return lu(t, e.left)
            })
        },
        du = V.curry(su, Da.isAbove, -1),
        mu = V.curry(su, Da.isBelow, 1),
        pu = V.curry(cu, -1, du),
        gu = V.curry(cu, 1, mu),
        hu = function(e, t) {
            return Pr.all(t, e)
        },
        vu = function(e, t, n, r, o) {
            var i, a, u, s, c, l = hu(Vn.fromDom(n), "td,th").map(function(e) {
                    return e.dom()
                }),
                f = H.filter((i = e, a = l, H.bind(a, function(e) {
                    var t, n, r = (t = e.getBoundingClientRect(), n = -1, {
                        left: t.left - n,
                        top: t.top - n,
                        right: t.right + 2 * n,
                        bottom: t.bottom + 2 * n,
                        width: t.width + n,
                        height: t.height + n
                    });
                    return [{
                        x: r.left,
                        y: i(r),
                        cell: e
                    }, {
                        x: r.right,
                        y: i(r),
                        cell: e
                    }]
                })), function(e) {
                    return t(e, o)
                });
            return (u = f, s = r, c = o, H.foldl(u, function(e, r) {
                return e.fold(function() {
                    return A.some(r)
                }, function(e) {
                    var t = Math.sqrt(Math.abs(e.x - s) + Math.abs(e.y - c)),
                        n = Math.sqrt(Math.abs(r.x - s) + Math.abs(r.y - c));
                    return A.some(n < t ? r : e)
                })
            }, A.none())).map(function(e) {
                return e.cell
            })
        },
        yu = V.curry(vu, function(e) {
            return e.bottom
        }, function(e, t) {
            return e.y < t
        }),
        bu = V.curry(vu, function(e) {
            return e.top
        }, function(e, t) {
            return e.y > t
        }),
        Cu = function(t, n) {
            return H.head(n.getClientRects()).bind(function(e) {
                return yu(t, e.left, e.top)
            }).bind(function(e) {
                return fu((t = e, Qa.lastPositionIn(t).map(function(e) {
                    return du(t, e).positions.concat(e)
                }).getOr([])), n);
                var t
            })
        },
        xu = function(t, n) {
            return H.last(n.getClientRects()).bind(function(e) {
                return bu(t, e.left, e.top)
            }).bind(function(e) {
                return fu((t = e, Qa.firstPositionIn(t).map(function(e) {
                    return [e].concat(mu(t, e).positions)
                }).getOr([])), n);
                var t
            })
        },
        wu = function(e) {
            for (var t = 0, n = 0, r = e; r && r.nodeType;) t += r.offsetLeft || 0, n += r.offsetTop || 0, r = r.offsetParent;
            return {
                x: t,
                y: n
            }
        },
        Nu = function(e, t, n) {
            var r, o, i, a, u, s = e.dom,
                c = s.getRoot(),
                l = 0;
            if (u = {
                    elm: t,
                    alignToTop: n
                }, e.fire("scrollIntoView", u), !u.isDefaultPrevented() && Oo.isElement(t)) {
                if (!1 === n && (l = t.offsetHeight), "BODY" !== c.nodeName) {
                    var f = e.selection.getScrollContainer();
                    if (f) return r = wu(t).y - wu(f).y + l, a = f.clientHeight, void((r < (i = f.scrollTop) || i + a < r + 25) && (f.scrollTop = r < i ? r : r - a + 25))
                }
                o = s.getViewPort(e.getWin()), r = s.getPos(t).y + l, i = o.y, a = o.h, (r < o.y || i + a < r + 25) && e.getWin().scrollTo(0, r < i ? r : r - a + 25)
            }
        },
        Eu = function(d, e) {
            H.head(Da.fromRangeStart(e).getClientRects()).each(function(e) {
                var t, n, r, o, i, a, u, s, c, l = function(e) {
                        if (e.inline) return e.getBody().getBoundingClientRect();
                        var t = e.getWin();
                        return {
                            left: 0,
                            right: t.innerWidth,
                            top: 0,
                            bottom: t.innerHeight,
                            width: t.innerWidth,
                            height: t.innerHeight
                        }
                    }(d),
                    f = {
                        x: (i = t = l, a = n = e, a.left > i.left && a.right < i.right ? 0 : a.left < i.left ? a.left - i.left : a.right - i.right),
                        y: (r = t, o = n, o.top > r.top && o.bottom < r.bottom ? 0 : o.top < r.top ? o.top - r.top : o.bottom - r.bottom)
                    };
                s = 0 !== f.x ? 0 < f.x ? f.x + 4 : f.x - 4 : 0, c = 0 !== f.y ? 0 < f.y ? f.y + 4 : f.y - 4 : 0, (u = d).inline ? (u.getBody().scrollLeft += s, u.getBody().scrollTop += c) : u.getWin().scrollBy(s, c)
            })
        },
        Su = function(e, t, n) {
            var r = e.getParam(t, n);
            if (-1 !== r.indexOf("=")) {
                var o = e.getParam(t, "", "hash");
                return o.hasOwnProperty(e.id) ? o[e.id] : n
            }
            return r
        },
        ku = function(e) {
            return e.getParam("iframe_attrs", {})
        },
        Tu = function(e) {
            return e.getParam("doctype", "<!DOCTYPE html>")
        },
        Au = function(e) {
            return e.getParam("document_base_url", "")
        },
        Ru = function(e) {
            return Su(e, "body_id", "tinymce")
        },
        _u = function(e) {
            return Su(e, "body_class", "")
        },
        Bu = function(e) {
            return e.getParam("content_security_policy", "")
        },
        Du = function(e) {
            return e.getParam("br_in_pre", !0)
        },
        Ou = function(e) {
            if (e.getParam("force_p_newlines", !1)) return "p";
            var t = e.getParam("forced_root_block", "p");
            return !1 === t ? "" : t
        },
        Pu = function(e) {
            return e.getParam("forced_root_block_attrs", {})
        },
        Lu = function(e) {
            return e.getParam("br_newline_selector", ".mce-toc h2,figcaption,caption")
        },
        Iu = function(e) {
            return e.getParam("no_newline_selector", "")
        },
        Mu = function(e) {
            return e.getParam("keep_styles", !0)
        },
        Fu = function(e) {
            return e.getParam("end_container_on_empty_block", !1)
        },
        zu = function(e) {
            return It.explode(e.getParam("font_size_style_values", ""))
        },
        Uu = function(e) {
            return It.explode(e.getParam("font_size_classes", ""))
        },
        qu = function(t, n) {
            $r.parent(t).each(function(e) {
                e.dom().insertBefore(n.dom(), t.dom())
            })
        },
        Vu = function(e, t) {
            e.dom().appendChild(t.dom())
        },
        Hu = {
            before: qu,
            after: function(e, t) {
                $r.nextSibling(e).fold(function() {
                    $r.parent(e).each(function(e) {
                        Vu(e, t)
                    })
                }, function(e) {
                    qu(e, t)
                })
            },
            prepend: function(t, n) {
                $r.firstChild(t).fold(function() {
                    Vu(t, n)
                }, function(e) {
                    t.dom().insertBefore(n.dom(), e.dom())
                })
            },
            append: Vu,
            appendAt: function(e, t, n) {
                $r.child(e, n).fold(function() {
                    Vu(e, t)
                }, function(e) {
                    qu(e, t)
                })
            },
            wrap: function(e, t) {
                qu(e, t), Vu(t, e)
            }
        },
        ju = Un.detect().browser,
        $u = function() {
            return ju.isIE() || ju.isEdge() || ju.isFirefox()
        },
        Wu = function(e, t) {
            e.selection.setRng(t), Eu(e, t)
        },
        Ku = function(t, n, e) {
            var r = t(n, e);
            return r.breakType === Oa.Wrap && 0 === r.positions.length ? r.breakAt.map(function(e) {
                return t(n, e).breakAt.isNone()
            }).getOr(!0) : r.breakAt.isNone()
        },
        Xu = da.curry(Ku, du),
        Yu = da.curry(Ku, mu),
        Gu = function(e, t, n, r) {
            var o, i, a, u, s = e.selection.getRng(),
                c = t ? 1 : -1;
            if ($u() && (o = t, i = s, a = n, u = La.fromRangeStart(i), Qa.positionIn(!o, a).map(function(e) {
                    return e.isEqual(u)
                }).getOr(!1))) {
                var l = tu(c, e, n, !t, !0);
                return Wu(e, l), !0
            }
            return !1
        },
        Ju = function(e, t) {
            var n = t.getNode(e);
            return Oo.isElement(n) && "TABLE" === n.nodeName ? A.some(n) : A.none()
        },
        Qu = function(u, s, c) {
            var e = Ju(!!s, c),
                t = !1 === s;
            e.fold(function() {
                return Wu(u, c.toRange())
            }, function(a) {
                return Qa.positionIn(t, u.getBody()).filter(function(e) {
                    return e.isEqual(c)
                }).fold(function() {
                    return Wu(u, c.toRange())
                }, function(e) {
                    return n = s, o = a, t = c, void((i = Ou(r = u)) ? r.undoManager.transact(function() {
                        var e = Vn.fromTag(i);
                        lr.setAll(e, Pu(r)), Hu.append(e, Vn.fromTag("br")), n ? Hu.after(Vn.fromDom(o), e) : Hu.before(Vn.fromDom(o), e);
                        var t = r.dom.createRng();
                        t.setStart(e.dom(), 0), t.setEnd(e.dom(), 0), Wu(r, t)
                    }) : Wu(r, t.toRange()));
                    var n, r, o, t, i
                })
            })
        },
        Zu = function(e, t, n, r) {
            var o, i, a, u, s, c, l = e.selection.getRng(),
                f = La.fromRangeStart(l),
                d = e.getBody();
            if (!t && Xu(r, f)) {
                var m = (u = d, Cu(s = n, c = f).orThunk(function() {
                    return H.head(c.getClientRects()).bind(function(e) {
                        return lu(pu(u, La.before(s)), e.left)
                    })
                }).getOr(La.before(s)));
                return Qu(e, t, m), !0
            }
            return !(!t || !Yu(r, f)) && (o = d, m = xu(i = n, a = f).orThunk(function() {
                return H.head(a.getClientRects()).bind(function(e) {
                    return lu(gu(o, La.after(i)), e.left)
                })
            }).getOr(La.after(i)), Qu(e, t, m), !0)
        },
        es = function(t, n) {
            return function() {
                return A.from(t.dom.getParent(t.selection.getNode(), "td,th")).bind(function(e) {
                    return A.from(t.dom.getParent(e, "table")).map(function(e) {
                        return Gu(t, n, e)
                    })
                }).getOr(!1)
            }
        },
        ts = function(n, r) {
            return function() {
                return A.from(n.dom.getParent(n.selection.getNode(), "td,th")).bind(function(t) {
                    return A.from(n.dom.getParent(t, "table")).map(function(e) {
                        return Zu(n, r, e, t)
                    })
                }).getOr(!1)
            }
        },
        ns = function(e) {
            var t = e,
                n = function() {
                    return t
                };
            return {
                get: n,
                set: function(e) {
                    t = e
                },
                clone: function() {
                    return ns(n())
                }
            }
        },
        rs = Oo.isContentEditableFalse,
        os = function(e, t, n) {
            var r, o, i, a, u, s = na(t.getBoundingClientRect(), n);
            return "BODY" === e.tagName ? (r = e.ownerDocument.documentElement, o = e.scrollLeft || r.scrollLeft, i = e.scrollTop || r.scrollTop) : (u = e.getBoundingClientRect(), o = e.scrollLeft - u.left, i = e.scrollTop - u.top), s.left += o, s.right += o, s.top += i, s.bottom += i, s.width = 1, 0 < (a = t.offsetWidth - t.clientWidth) && (n && (a *= -1), s.left += a, s.right += a), s
        },
        is = function(a, u, e) {
            var t, s, c = ns(A.none()),
                l = function() {
                    ! function(e) {
                        var t, n, r, o, i;
                        for (t = tn("*[contentEditable=false]", e), o = 0; o < t.length; o++) r = (n = t[o]).previousSibling, qi(r) && (1 === (i = r.data).length ? r.parentNode.removeChild(r) : r.deleteData(i.length - 1, 1)), r = n.nextSibling, Ui(r) && (1 === (i = r.data).length ? r.parentNode.removeChild(r) : r.deleteData(0, 1))
                    }(a), s && ($a.remove(s), s = null), c.get().each(function(e) {
                        tn(e.caret).remove(), c.set(A.none())
                    }), clearInterval(t)
                },
                f = function() {
                    t = we.setInterval(function() {
                        e() ? tn("div.mce-visual-caret", a).toggleClass("mce-visual-caret-hidden") : tn("div.mce-visual-caret", a).addClass("mce-visual-caret-hidden")
                    }, 500)
                };
            return {
                show: function(t, e) {
                    var n, r, o;
                    if (l(), o = e, Oo.isElement(o) && /^(TD|TH)$/i.test(o.tagName)) return null;
                    if (!u(e)) return s = function(e, t) {
                        var n, r, o;
                        if (r = e.ownerDocument.createTextNode(Ri), o = e.parentNode, t) {
                            if (n = e.previousSibling, Di(n)) {
                                if (Li(n)) return n;
                                if (qi(n)) return n.splitText(n.data.length - 1)
                            }
                            o.insertBefore(r, e)
                        } else {
                            if (n = e.nextSibling, Di(n)) {
                                if (Li(n)) return n;
                                if (Ui(n)) return n.splitText(1), n
                            }
                            e.nextSibling ? o.insertBefore(r, e.nextSibling) : o.appendChild(r)
                        }
                        return r
                    }(e, t), r = e.ownerDocument.createRange(), rs(s.nextSibling) ? (r.setStart(s, 0), r.setEnd(s, 0)) : (r.setStart(s, 1), r.setEnd(s, 1)), r;
                    s = zi("p", e, t), n = os(a, e, t), tn(s).css("top", n.top);
                    var i = tn('<div class="mce-visual-caret" data-mce-bogus="all"></div>').css(n).appendTo(a)[0];
                    return c.set(A.some({
                        caret: i,
                        element: e,
                        before: t
                    })), c.get().each(function(e) {
                        t && tn(e.caret).addClass("mce-visual-caret-before")
                    }), f(), (r = e.ownerDocument.createRange()).setStart(s, 0), r.setEnd(s, 0), r
                },
                hide: l,
                getCss: function() {
                    return ".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}"
                },
                reposition: function() {
                    c.get().each(function(e) {
                        var t = os(a, e.element, e.before);
                        tn(e.caret).css(t)
                    })
                },
                destroy: function() {
                    return we.clearInterval(t)
                }
            }
        },
        as = function(e) {
            return rs(e) || Oo.isTable(e) && $u()
        },
        us = Oo.isContentEditableFalse,
        ss = Oo.matchStyleValues("display", "block table table-cell table-caption list-item"),
        cs = Li,
        ls = Oi,
        fs = da.curry,
        ds = Oo.isElement,
        ms = Ji,
        ps = function(e) {
            return 0 < e
        },
        gs = function(e) {
            return e < 0
        },
        hs = function(e, t) {
            for (var n; n = e(t);)
                if (!ls(n)) return n;
            return null
        },
        vs = function(e, t, n, r, o) {
            var i = new ao(e, r);
            if (gs(t)) {
                if ((us(e) || ls(e)) && n(e = hs(i.prev, !0))) return e;
                for (; e = hs(i.prev, o);)
                    if (n(e)) return e
            }
            if (ps(t)) {
                if ((us(e) || ls(e)) && n(e = hs(i.next, !0))) return e;
                for (; e = hs(i.next, o);)
                    if (n(e)) return e
            }
            return null
        },
        ys = function(e, t) {
            for (; e && e !== t;) {
                if (ss(e)) return e;
                e = e.parentNode
            }
            return null
        },
        bs = function(e, t, n) {
            return ys(e.container(), n) === ys(t.container(), n)
        },
        Cs = function(e, t) {
            var n, r;
            return t ? (n = t.container(), r = t.offset(), ds(n) ? n.childNodes[r + e] : null) : null
        },
        xs = function(e, t) {
            var n = t.ownerDocument.createRange();
            return e ? (n.setStartBefore(t), n.setEndBefore(t)) : (n.setStartAfter(t), n.setEndAfter(t)), n
        },
        ws = function(e, t, n) {
            var r, o, i, a;
            for (o = e ? "previousSibling" : "nextSibling"; n && n !== t;) {
                if (r = n[o], cs(r) && (r = r[o]), us(r)) {
                    if (a = n, ys(r, i = t) === ys(a, i)) return r;
                    break
                }
                if (ms(r)) break;
                n = n.parentNode
            }
            return null
        },
        Ns = fs(xs, !0),
        Es = fs(xs, !1),
        Ss = function(e, t, n) {
            var r, o, i, a, u = fs(ws, !0, t),
                s = fs(ws, !1, t);
            if (o = n.startContainer, i = n.startOffset, Oi(o)) {
                if (ds(o) || (o = o.parentNode), "before" === (a = o.getAttribute("data-mce-caret")) && (r = o.nextSibling, as(r))) return Ns(r);
                if ("after" === a && (r = o.previousSibling, as(r))) return Es(r)
            }
            if (!n.collapsed) return n;
            if (Oo.isText(o)) {
                if (cs(o)) {
                    if (1 === e) {
                        if (r = s(o)) return Ns(r);
                        if (r = u(o)) return Es(r)
                    }
                    if (-1 === e) {
                        if (r = u(o)) return Es(r);
                        if (r = s(o)) return Ns(r)
                    }
                    return n
                }
                if (qi(o) && i >= o.data.length - 1) return 1 === e && (r = s(o)) ? Ns(r) : n;
                if (Ui(o) && i <= 1) return -1 === e && (r = u(o)) ? Es(r) : n;
                if (i === o.data.length) return (r = s(o)) ? Ns(r) : n;
                if (0 === i) return (r = u(o)) ? Es(r) : n
            }
            return n
        },
        ks = function(e, t) {
            var n = Cs(e, t);
            return us(n) && !Oo.isBogusAll(n)
        },
        Ts = function(e, t) {
            return Oo.isTable(Cs(e, t))
        },
        As = function(e, t) {
            return A.from(Cs(e ? 0 : -1, t)).filter(us)
        },
        Rs = function(e, t, n) {
            var r = Ss(e, t, n);
            return -1 === e ? Da.fromRangeStart(r) : Da.fromRangeEnd(r)
        },
        _s = fs(ks, 0),
        Bs = fs(ks, -1),
        Ds = fs(Ts, 0),
        Os = fs(Ts, -1);
    (au = iu || (iu = {}))[au.Backwards = -1] = "Backwards", au[au.Forwards = 1] = "Forwards";
    var Ps, Ls, Is, Ms, Fs, zs = Oo.isContentEditableFalse,
        Us = Oo.isText,
        qs = Oo.isElement,
        Vs = Oo.isBr,
        Hs = Ji,
        js = function(e) {
            return Xi(e) || !!Qi(t = e) && !0 !== Bt.reduce(t.getElementsByTagName("*"), function(e, t) {
                return e || Hi(t)
            }, !1);
            var t
        },
        $s = Zi,
        Ws = function(e, t) {
            return e.hasChildNodes() && t < e.childNodes.length ? e.childNodes[t] : null
        },
        Ks = function(e, t) {
            if (ps(e)) {
                if (Hs(t.previousSibling) && !Us(t.previousSibling)) return La.before(t);
                if (Us(t)) return La(t, 0)
            }
            if (gs(e)) {
                if (Hs(t.nextSibling) && !Us(t.nextSibling)) return La.after(t);
                if (Us(t)) return La(t, t.data.length)
            }
            return gs(e) ? Vs(t) ? La.before(t) : La.after(t) : La.before(t)
        },
        Xs = function(e, t, n) {
            var r, o, i, a, u;
            if (!qs(n) || !t) return null;
            if (t.isEqual(La.after(n)) && n.lastChild) {
                if (u = La.after(n.lastChild), gs(e) && Hs(n.lastChild) && qs(n.lastChild)) return Vs(n.lastChild) ? La.before(n.lastChild) : u
            } else u = t;
            var s, c, l, f = u.container(),
                d = u.offset();
            if (Us(f)) {
                if (gs(e) && 0 < d) return La(f, --d);
                if (ps(e) && d < f.length) return La(f, ++d);
                r = f
            } else {
                if (gs(e) && 0 < d && (o = Ws(f, d - 1), Hs(o))) return !js(o) && (i = vs(o, e, $s, o)) ? Us(i) ? La(i, i.data.length) : La.after(i) : Us(o) ? La(o, o.data.length) : La.before(o);
                if (ps(e) && d < f.childNodes.length && (o = Ws(f, d), Hs(o))) return Vs(o) && n.lastChild === o ? null : (s = o, c = n, Oo.isBr(s) && (l = Xs(1, La.after(s), c)) && !bs(La.before(s), La.before(l), c) ? Xs(e, La.after(o), n) : !js(o) && (i = vs(o, e, $s, o)) ? Us(i) ? La(i, 0) : La.before(i) : Us(o) ? La(o, 0) : La.after(o));
                r = o || u.getNode()
            }
            return (ps(e) && u.isAtEnd() || gs(e) && u.isAtStart()) && (r = vs(r, e, da.constant(!0), n, !0), $s(r, n)) ? Ks(e, r) : (o = vs(r, e, $s, n), !(a = Bt.last(Bt.filter(function(e, t) {
                for (var n = []; e && e !== t;) n.push(e), e = e.parentNode;
                return n
            }(f, n), zs))) || o && a.contains(o) ? o ? Ks(e, o) : null : u = ps(e) ? La.after(a) : La.before(a))
        },
        Ys = function(t) {
            return {
                next: function(e) {
                    return Xs(iu.Forwards, e, t)
                },
                prev: function(e) {
                    return Xs(iu.Backwards, e, t)
                }
            }
        },
        Gs = function(e) {
            return It.grep(e.childNodes, function(e) {
                return "LI" === e.nodeName
            })
        },
        Js = function(e) {
            return e && e.firstChild && e.firstChild === e.lastChild && ("\xa0" === (t = e.firstChild).data || Oo.isBr(t));
            var t
        },
        Qs = function(e) {
            return 0 < e.length && (!(t = e[e.length - 1]).firstChild || Js(t)) ? e.slice(0, -1) : e;
            var t
        },
        Zs = function(e, t) {
            var n = e.getParent(t, e.isBlock);
            return n && "LI" === n.nodeName ? n : null
        },
        ec = function(e, t) {
            var n = La.after(e),
                r = Ys(t).prev(n);
            return r ? r.toRange() : null
        },
        tc = function(t, e, n) {
            var r, o, i, a, u = t.parentNode;
            return It.each(e, function(e) {
                u.insertBefore(e, t)
            }), r = t, o = n, i = La.before(r), (a = Ys(o).next(i)) ? a.toRange() : null
        },
        nc = function(e, t) {
            var n, r, o, i, a, u, s = t.firstChild,
                c = t.lastChild;
            return s && "meta" === s.name && (s = s.next), c && "mce_marker" === c.attr("id") && (c = c.prev), r = c, u = (n = e).getNonEmptyElements(), r && (r.isEmpty(u) || (o = r, n.getBlockElements()[o.name] && (a = o).firstChild && a.firstChild === a.lastChild && ("br" === (i = o.firstChild).name || "\xa0" === i.value))) && (c = c.prev), !(!s || s !== c || "ul" !== s.name && "ol" !== s.name)
        },
        rc = function(e, o, i, t) {
            var n, r, a, u, s, c, l, f, d, m, p, g, h, v, y, b, C, x, w, N = (n = o, r = t, c = e.serialize(r), l = n.createFragment(c), u = (a = l).firstChild, s = a.lastChild, u && "META" === u.nodeName && u.parentNode.removeChild(u), s && "mce_marker" === s.id && s.parentNode.removeChild(s), a),
                E = Zs(o, i.startContainer),
                S = Qs(Gs(N.firstChild)),
                k = o.getRoot(),
                T = function(e) {
                    var t = La.fromRangeStart(i),
                        n = Ys(o.getRoot()),
                        r = 1 === e ? n.prev(t) : n.next(t);
                    return !r || Zs(o, r.getNode()) !== E
                };
            return T(1) ? tc(E, S, k) : T(2) ? (f = E, d = S, m = k, o.insertAfter(d.reverse(), f), ec(d[0], m)) : (g = S, h = k, v = p = E, b = (y = i).cloneRange(), C = y.cloneRange(), b.setStartBefore(v), C.setEndAfter(v), x = [b.cloneContents(), C.cloneContents()], (w = p.parentNode).insertBefore(x[0], p), It.each(g, function(e) {
                w.insertBefore(e, p)
            }), w.insertBefore(x[1], p), w.removeChild(p), ec(g[g.length - 1], h))
        },
        oc = function(e, t) {
            return !!Zs(e, t)
        },
        ic = Oo.isText,
        ac = Oo.isBogus,
        uc = vi.nodeIndex,
        sc = function(e) {
            var t = e.parentNode;
            return ac(t) ? sc(t) : t
        },
        cc = function(e) {
            return e ? Bt.reduce(e.childNodes, function(e, t) {
                return ac(t) && "BR" !== t.nodeName ? e = e.concat(cc(t)) : e.push(t), e
            }, []) : []
        },
        lc = function(t) {
            return function(e) {
                return t === e
            }
        },
        fc = function(e) {
            var t, r, n, o;
            return (ic(e) ? "text()" : e.nodeName.toLowerCase()) + "[" + (r = cc(sc(t = e)), n = Bt.findIndex(r, lc(t), t), r = r.slice(0, n + 1), o = Bt.reduce(r, function(e, t, n) {
                return ic(t) && ic(r[n - 1]) && e++, e
            }, 0), r = Bt.filter(r, Oo.matchNodeNames(t.nodeName)), (n = Bt.findIndex(r, lc(t), t)) - o) + "]"
        },
        dc = function(e, t) {
            var n, r, o, i, a, u = [];
            return n = t.container(), r = t.offset(), ic(n) ? o = function(e, t) {
                for (;
                    (e = e.previousSibling) && ic(e);) t += e.data.length;
                return t
            }(n, r) : (r >= (i = n.childNodes).length ? (o = "after", r = i.length - 1) : o = "before", n = i[r]), u.push(fc(n)), a = function(e, t, n) {
                var r = [];
                for (t = t.parentNode; !(t === e || n && n(t)); t = t.parentNode) r.push(t);
                return r
            }(e, n), a = Bt.filter(a, da.negate(Oo.isBogus)), (u = u.concat(Bt.map(a, function(e) {
                return fc(e)
            }))).reverse().join("/") + "," + o
        },
        mc = function(e, t) {
            var n, r, o;
            return t ? (t = (n = t.split(","))[0].split("/"), o = 1 < n.length ? n[1] : "before", (r = Bt.reduce(t, function(e, t) {
                return (t = /([\w\-\(\)]+)\[([0-9]+)\]/.exec(t)) ? ("text()" === t[1] && (t[1] = "#text"), n = e, r = t[1], o = parseInt(t[2], 10), i = cc(n), i = Bt.filter(i, function(e, t) {
                    return !ic(e) || !ic(i[t - 1])
                }), (i = Bt.filter(i, Oo.matchNodeNames(r)))[o]) : null;
                var n, r, o, i
            }, e)) ? ic(r) ? function(e, t) {
                for (var n, r = e, o = 0; ic(r);) {
                    if (n = r.data.length, o <= t && t <= o + n) {
                        e = r, t -= o;
                        break
                    }
                    if (!ic(r.nextSibling)) {
                        e = r, t = n;
                        break
                    }
                    o += n, r = r.nextSibling
                }
                return ic(e) && t > e.data.length && (t = e.data.length), La(e, t)
            }(r, parseInt(o, 10)) : (o = "after" === o ? uc(r) + 1 : uc(r), La(r.parentNode, o)) : null) : null
        },
        pc = Oo.isContentEditableFalse,
        gc = function(e, t, n, r, o) {
            var i, a = r[o ? "startContainer" : "endContainer"],
                u = r[o ? "startOffset" : "endOffset"],
                s = [],
                c = 0,
                l = e.getRoot();
            for (Oo.isText(a) ? s.push(n ? function(e, t, n) {
                    var r, o;
                    for (o = e(t.data.slice(0, n)).length, r = t.previousSibling; r && Oo.isText(r); r = r.previousSibling) o += e(r.data).length;
                    return o
                }(t, a, u) : u) : (u >= (i = a.childNodes).length && i.length && (c = 1, u = Math.max(0, i.length - 1)), s.push(e.nodeIndex(i[u], n) + c)); a && a !== l; a = a.parentNode) s.push(e.nodeIndex(a, n));
            return s
        },
        hc = function(e) {
            Oo.isText(e) && 0 === e.data.length && e.parentNode.removeChild(e)
        },
        vc = function(e, t, n) {
            var r = 0;
            return It.each(e.select(t), function(e) {
                if ("all" !== e.getAttribute("data-mce-bogus")) return e !== n && void r++
            }), r
        },
        yc = function(e, t) {
            var n, r, o, i = t ? "start" : "end";
            n = e[i + "Container"], r = e[i + "Offset"], Oo.isElement(n) && "TR" === n.nodeName && (n = (o = n.childNodes)[Math.min(t ? r : r - 1, o.length - 1)]) && (r = t ? 0 : n.childNodes.length, e["set" + (t ? "Start" : "End")](n, r))
        },
        bc = function(e) {
            return yc(e, !0), yc(e, !1), e
        },
        Cc = function(e, t) {
            var n;
            if (Oo.isElement(e) && (e = ua(e, t), pc(e))) return e;
            if (Li(e)) {
                if (Oo.isText(e) && Oi(e) && (e = e.parentNode), n = e.previousSibling, pc(n)) return n;
                if (n = e.nextSibling, pc(n)) return n
            }
        },
        xc = function(e, t, n) {
            var r = n.getNode(),
                o = r ? r.nodeName : null,
                i = n.getRng();
            if (pc(r) || "IMG" === o) return {
                name: o,
                index: vc(n.dom, o, r)
            };
            var a, u, s, c, l, f, d, m = Cc((a = i).startContainer, a.startOffset) || Cc(a.endContainer, a.endOffset);
            return m ? {
                name: o = m.tagName,
                index: vc(n.dom, o, m)
            } : (u = e, c = t, l = i, f = (s = n).dom, (d = {}).start = gc(f, u, c, l, !0), s.isCollapsed() || (d.end = gc(f, u, c, l, !1)), d)
        },
        wc = function(e, t, n) {
            var r = {
                "data-mce-type": "bookmark",
                id: t,
                style: "overflow:hidden;line-height:0px"
            };
            return n ? e.create("span", r, "&#xFEFF;") : e.create("span", r)
        },
        Nc = function(e, t) {
            var n = e.dom,
                r = e.getRng(),
                o = n.uniqueId(),
                i = e.isCollapsed(),
                a = e.getNode(),
                u = a.nodeName;
            if ("IMG" === u) return {
                name: u,
                index: vc(n, u, a)
            };
            var s = bc(r.cloneRange());
            if (!i) {
                s.collapse(!1);
                var c = wc(n, o + "_end", t);
                s.insertNode(c), hc(c.nextSibling)
            }(r = bc(r)).collapse(!0);
            var l = wc(n, o + "_start", t);
            return r.insertNode(l), hc(l.previousSibling), e.moveToBookmark({
                id: o,
                keep: 1
            }), {
                id: o
            }
        },
        Ec = {
            getBookmark: function(e, t, n) {
                return 2 === t ? xc(_i, n, e) : 3 === t ? (o = (r = e).getRng(), {
                    start: dc(r.dom.getRoot(), La.fromRangeStart(o)),
                    end: dc(r.dom.getRoot(), La.fromRangeEnd(o))
                }) : t ? {
                    rng: e.getRng()
                } : Nc(e, !1);
                var r, o
            },
            getUndoBookmark: V.curry(xc, V.identity, !0),
            getPersistentBookmark: Nc
        },
        Sc = "_mce_caret",
        kc = function(e) {
            return Oo.isElement(e) && e.id === Sc
        },
        Tc = function(e, t) {
            for (; t && t !== e;) {
                if (t.id === Sc) return t;
                t = t.parentNode
            }
            return null
        },
        Ac = function(e, t) {
            return !e.isBlock(t) || t.innerHTML || ve.ie || (t.innerHTML = '<br data-mce-bogus="1" />'), t
        },
        Rc = function(e, t) {
            return Qa.lastPositionIn(e).fold(function() {
                return !1
            }, function(e) {
                return t.setStart(e.container(), e.offset()), t.setEnd(e.container(), e.offset()), !0
            })
        },
        _c = function(e, t, n) {
            return !(!1 !== t.hasChildNodes() || !Tc(e, t) || (o = n, i = (r = t).ownerDocument.createTextNode(Ri), r.appendChild(i), o.setStart(i, 0), o.setEnd(i, 0), 0));
            var r, o, i
        },
        Bc = function(e, t, n, r) {
            var o, i, a, u, s = n[t ? "start" : "end"],
                c = e.getRoot();
            if (s) {
                for (a = s[0], i = c, o = s.length - 1; 1 <= o; o--) {
                    if (u = i.childNodes, _c(c, i, r)) return !0;
                    if (s[o] > u.length - 1) return !!_c(c, i, r) || Rc(i, r);
                    i = u[s[o]]
                }
                3 === i.nodeType && (a = Math.min(s[0], i.nodeValue.length)), 1 === i.nodeType && (a = Math.min(s[0], i.childNodes.length)), t ? r.setStart(i, a) : r.setEnd(i, a)
            }
            return !0
        },
        Dc = function(e) {
            return Oo.isText(e) && 0 < e.data.length
        },
        Oc = function(e, t, n) {
            var r, o, i, a, u, s, c = e.get(n.id + "_" + t),
                l = n.keep;
            if (c) {
                if (r = c.parentNode, "start" === t ? l ? c.hasChildNodes() ? (r = c.firstChild, o = 1) : Dc(c.nextSibling) ? (r = c.nextSibling, o = 0) : Dc(c.previousSibling) ? (r = c.previousSibling, o = c.previousSibling.data.length) : (r = c.parentNode, o = e.nodeIndex(c) + 1) : o = e.nodeIndex(c) : l ? c.hasChildNodes() ? (r = c.firstChild, o = 1) : Dc(c.previousSibling) ? (r = c.previousSibling, o = c.previousSibling.data.length) : (r = c.parentNode, o = e.nodeIndex(c)) : o = e.nodeIndex(c), u = r, s = o, !l) {
                    for (a = c.previousSibling, i = c.nextSibling, It.each(It.grep(c.childNodes), function(e) {
                            Oo.isText(e) && (e.nodeValue = e.nodeValue.replace(/\uFEFF/g, ""))
                        }); c = e.get(n.id + "_" + t);) e.remove(c, !0);
                    a && i && a.nodeType === i.nodeType && Oo.isText(a) && !ve.opera && (o = a.nodeValue.length, a.appendData(i.nodeValue), e.remove(i), u = a, s = o)
                }
                return A.some(La(u, s))
            }
            return A.none()
        },
        Pc = function(e, t) {
            var n, r, o, i, a, u, s, c, l, f, d, m, p, g, h, v, y = e.dom;
            if (t) {
                if (v = t, It.isArray(v.start)) return g = t, h = (p = y).createRng(), Bc(p, !0, g, h) && Bc(p, !1, g, h) ? A.some(h) : A.none();
                if ("string" == typeof t.start) return A.some((f = t, d = (l = y).createRng(), m = mc(l.getRoot(), f.start), d.setStart(m.container(), m.offset()), m = mc(l.getRoot(), f.end), d.setEnd(m.container(), m.offset()), d));
                if (t.hasOwnProperty("id")) return s = Oc(o = y, "start", i = t), c = Oc(o, "end", i), ma([s, (a = c, u = s, a.isSome() ? a : u)], function(e, t) {
                    var n = o.createRng();
                    return n.setStart(Ac(o, e.container()), e.offset()), n.setEnd(Ac(o, t.container()), t.offset()), n
                });
                if (t.hasOwnProperty("name")) return n = y, r = t, A.from(n.select(r.name)[r.index]).map(function(e) {
                    var t = n.createRng();
                    return t.selectNode(e), t
                });
                if (t.hasOwnProperty("rng")) return A.some(t.rng)
            }
            return A.none()
        },
        Lc = function(e, t, n) {
            return Ec.getBookmark(e, t, n)
        },
        Ic = function(t, e) {
            Pc(t, e).each(function(e) {
                t.setRng(e)
            })
        },
        Mc = function(e) {
            return Oo.isElement(e) && "SPAN" === e.tagName && "bookmark" === e.getAttribute("data-mce-type")
        },
        Fc = It.each,
        zc = function(o) {
            this.compare = function(e, t) {
                if (e.nodeName !== t.nodeName) return !1;
                var n = function(n) {
                        var r = {};
                        return Fc(o.getAttribs(n), function(e) {
                            var t = e.nodeName.toLowerCase();
                            0 !== t.indexOf("_") && "style" !== t && 0 !== t.indexOf("data-") && (r[t] = o.getAttrib(n, t))
                        }), r
                    },
                    r = function(e, t) {
                        var n, r;
                        for (r in e)
                            if (e.hasOwnProperty(r)) {
                                if (void 0 === (n = t[r])) return !1;
                                if (e[r] !== n) return !1;
                                delete t[r]
                            }
                        for (r in t)
                            if (t.hasOwnProperty(r)) return !1;
                        return !0
                    };
                return !(!r(n(e), n(t)) || !r(o.parseStyle(o.getAttrib(e, "style")), o.parseStyle(o.getAttrib(t, "style"))) || Mc(e) || Mc(t))
            }
        },
        Uc = function(t, e) {
            H.each(e, function(e) {
                Hu.before(t, e)
            })
        },
        qc = function(t, e) {
            H.each(e, function(e) {
                Hu.append(t, e)
            })
        },
        Vc = function(e) {
            var t = e.dom();
            null !== t.parentNode && t.parentNode.removeChild(t)
        },
        Hc = {
            empty: function(e) {
                e.dom().textContent = "", H.each($r.children(e), function(e) {
                    Vc(e)
                })
            },
            remove: Vc,
            unwrap: function(e) {
                var t = $r.children(e);
                0 < t.length && Uc(e, t), Vc(e)
            }
        },
        jc = (Ps = Zn.isText, Ls = "text", Is = function(e) {
            return Ps(e) ? A.from(e.dom().nodeValue) : A.none()
        }, Ms = Un.detect().browser, {
            get: function(e) {
                if (!Ps(e)) throw new Error("Can only get " + Ls + " value of a " + Ls + " node");
                return Fs(e).getOr("")
            },
            getOption: Fs = Ms.isIE() && 10 === Ms.version.major ? function(e) {
                try {
                    return Is(e)
                } catch (Dw) {
                    return A.none()
                }
            } : Is,
            set: function(e, t) {
                if (!Ps(e)) throw new Error("Can only set raw " + Ls + " value of a " + Ls + " node");
                e.dom().nodeValue = t
            }
        }),
        $c = function(e) {
            return jc.get(e)
        },
        Wc = function(e) {
            var t = hu(e, "br"),
                n = H.filter(function(e) {
                    for (var t = [], n = e.dom(); n;) t.push(Vn.fromDom(n)), n = n.lastChild;
                    return t
                }(e).slice(-1), go);
            t.length === n.length && H.each(n, Hc.remove)
        },
        Kc = function(e) {
            Hc.empty(e), Hu.append(e, Vn.fromHtml('<br data-mce-bogus="1">'))
        },
        Xc = function(n) {
            $r.lastChild(n).each(function(t) {
                $r.prevSibling(t).each(function(e) {
                    mo(n) && go(t) && mo(e) && Hc.remove(t)
                })
            })
        },
        Yc = It.makeMap;

    function Gc(e) {
        var u, s, c, l, f, d = [];
        return u = (e = e || {}).indent, s = Yc(e.indent_before || ""), c = Yc(e.indent_after || ""), l = Ko.getEncodeFunc(e.entity_encoding || "raw", e.entities), f = "html" === e.element_format, {
            start: function(e, t, n) {
                var r, o, i, a;
                if (u && s[e] && 0 < d.length && 0 < (a = d[d.length - 1]).length && "\n" !== a && d.push("\n"), d.push("<", e), t)
                    for (r = 0, o = t.length; r < o; r++) i = t[r], d.push(" ", i.name, '="', l(i.value, !0), '"');
                d[d.length] = !n || f ? ">" : " />", n && u && c[e] && 0 < d.length && 0 < (a = d[d.length - 1]).length && "\n" !== a && d.push("\n")
            },
            end: function(e) {
                var t;
                d.push("</", e, ">"), u && c[e] && 0 < d.length && 0 < (t = d[d.length - 1]).length && "\n" !== t && d.push("\n")
            },
            text: function(e, t) {
                0 < e.length && (d[d.length] = t ? e : l(e))
            },
            cdata: function(e) {
                d.push("<![CDATA[", e, "]]>")
            },
            comment: function(e) {
                d.push("\x3c!--", e, "--\x3e")
            },
            pi: function(e, t) {
                t ? d.push("<?", e, " ", l(t), "?>") : d.push("<?", e, "?>"), u && d.push("\n")
            },
            doctype: function(e) {
                d.push("<!DOCTYPE", e, ">", u ? "\n" : "")
            },
            reset: function() {
                d.length = 0
            },
            getContent: function() {
                return d.join("").replace(/\n$/, "")
            }
        }
    }

    function Jc(t, p) {
        void 0 === p && (p = oi());
        var g = Gc(t);
        return (t = t || {}).validate = !("validate" in t) || t.validate, {
            serialize: function(e) {
                var f, d;
                d = t.validate, f = {
                    3: function(e) {
                        g.text(e.value, e.raw)
                    },
                    8: function(e) {
                        g.comment(e.value)
                    },
                    7: function(e) {
                        g.pi(e.name, e.value)
                    },
                    10: function(e) {
                        g.doctype(e.value)
                    },
                    4: function(e) {
                        g.cdata(e.value)
                    },
                    11: function(e) {
                        if (e = e.firstChild)
                            for (; m(e), e = e.next;);
                    }
                }, g.reset();
                var m = function(e) {
                    var t, n, r, o, i, a, u, s, c, l = f[e.type];
                    if (l) l(e);
                    else {
                        if (t = e.name, n = e.shortEnded, r = e.attributes, d && r && 1 < r.length && ((a = []).map = {}, c = p.getElementRule(e.name))) {
                            for (u = 0, s = c.attributesOrder.length; u < s; u++)(o = c.attributesOrder[u]) in r.map && (i = r.map[o], a.map[o] = i, a.push({
                                name: o,
                                value: i
                            }));
                            for (u = 0, s = r.length; u < s; u++)(o = r[u].name) in a.map || (i = r.map[o], a.map[o] = i, a.push({
                                name: o,
                                value: i
                            }));
                            r = a
                        }
                        if (g.start(e.name, r, n), !n) {
                            if (e = e.firstChild)
                                for (; m(e), e = e.next;);
                            g.end(t)
                        }
                    }
                };
                return 1 !== e.type || t.inner ? f[11](e) : m(e), g.getContent()
            }
        }
    }
    var Qc = function(a) {
            var u = La.fromRangeStart(a),
                s = La.fromRangeEnd(a),
                c = a.commonAncestorContainer;
            return Qa.fromPosition(!1, c, s).map(function(e) {
                return !bs(u, s, c) && bs(u, e, c) ? (t = u.container(), n = u.offset(), r = e.container(), o = e.offset(), (i = document.createRange()).setStart(t, n), i.setEnd(r, o), i) : a;
                var t, n, r, o, i
            }).getOr(a)
        },
        Zc = function(e) {
            return e.collapsed ? e : Qc(e)
        },
        el = Oo.matchNodeNames("td th"),
        tl = function(o, e, t) {
            var n, r, i, a, u, s, c, l, f, d, m, p, g = o.schema.getTextInlineElements(),
                h = o.selection,
                v = o.dom;
            if (/^ | $/.test(e) && (e = function(e) {
                    var t, n, r;
                    t = h.getRng(), n = t.startContainer, r = t.startOffset;
                    var o = function(e) {
                        return n[e] && 3 === n[e].nodeType
                    };
                    return 3 === n.nodeType && (0 < r ? e = e.replace(/^&nbsp;/, " ") : o("previousSibling") || (e = e.replace(/^ /, "&nbsp;")), r < n.length ? e = e.replace(/&nbsp;(<br>|)$/, " ") : o("nextSibling") || (e = e.replace(/(&nbsp;| )(<br>|)$/, "&nbsp;"))), e
                }(e)), n = o.parser, p = t.merge, r = Jc({
                    validate: o.settings.validate
                }, o.schema), m = '<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;&#x200B;</span>', s = {
                    content: e,
                    format: "html",
                    selection: !0,
                    paste: t.paste
                }, (s = o.fire("BeforeSetContent", s)).isDefaultPrevented()) o.fire("SetContent", {
                content: s.content,
                format: "html",
                selection: !0,
                paste: t.paste
            });
            else {
                -1 === (e = s.content).indexOf("{$caret}") && (e += "{$caret}"), e = e.replace(/\{\$caret\}/, m);
                var y, b, C, x, w = (l = h.getRng()).startContainer || (l.parentElement ? l.parentElement() : null),
                    N = o.getBody();
                w === N && h.isCollapsed() && v.isBlock(N.firstChild) && (y = N.firstChild) && !o.schema.getShortEndedElements()[y.nodeName] && v.isEmpty(N.firstChild) && ((l = v.createRng()).setStart(N.firstChild, 0), l.setEnd(N.firstChild, 0), h.setRng(l)), h.isCollapsed() || (o.selection.setRng(Zc(o.selection.getRng())), o.getDoc().execCommand("Delete", !1, null), C = (b = h.getRng()).startContainer, x = b.startOffset, 3 === C.nodeType && b.collapsed && ("\xa0" === C.data[x] ? (C.deleteData(x, 1), /[\u00a0| ]$/.test(e) || (e += " ")) : "\xa0" === C.data[x - 1] && (C.deleteData(x - 1, 1), /[\u00a0| ]$/.test(e) || (e = " " + e))));
                var E, S, k, T = {
                    context: (i = h.getNode()).nodeName.toLowerCase(),
                    data: t.data,
                    insert: !0
                };
                if (u = n.parse(e, T), !0 === t.paste && nc(o.schema, u) && oc(v, i)) return l = rc(r, v, o.selection.getRng(), u), o.selection.setRng(l), void o.fire("SetContent", s);
                if (function(e) {
                        for (var t = e; t = t.walk();) 1 === t.type && t.attr("data-mce-fragment", "1")
                    }(u), "mce_marker" === (f = u.lastChild).attr("id"))
                    for (f = (c = f).prev; f; f = f.walk(!0))
                        if (3 === f.type || !v.isBlock(f.name)) {
                            o.schema.isValidChild(f.parent.name, "span") && f.parent.insert(c, f, "br" === f.name);
                            break
                        }
                if (o._selectionOverrides.showBlockCaretContainer(i), T.invalid) {
                    for (h.setContent(m), i = h.getNode(), a = o.getBody(), 9 === i.nodeType ? i = f = a : f = i; f !== a;) f = (i = f).parentNode;
                    e = i === a ? a.innerHTML : v.getOuterHTML(i), e = r.serialize(n.parse(e.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i, function() {
                        return r.serialize(u)
                    }))), i === a ? v.setHTML(a, e) : v.setOuterHTML(i, e)
                } else e = r.serialize(u),
                    function(e, t, n) {
                        if ("all" === n.getAttribute("data-mce-bogus")) n.parentNode.insertBefore(e.dom.createFragment(t), n);
                        else {
                            var r = n.firstChild,
                                o = n.lastChild;
                            !r || r === o && "BR" === r.nodeName ? e.dom.setHTML(n, t) : e.selection.setContent(t)
                        }
                    }(o, e, i);
                ! function() {
                    if (p) {
                        var n = o.getBody(),
                            r = new zc(v);
                        It.each(v.select("*[data-mce-fragment]"), function(e) {
                            for (var t = e.parentNode; t && t !== n; t = t.parentNode) g[e.nodeName.toLowerCase()] && r.compare(t, e) && v.remove(e, !0)
                        })
                    }
                }(),
                function(e) {
                    var t, n, r;
                    if (e) {
                        if (h.scrollIntoView(e), t = function(e) {
                                for (var t = o.getBody(); e && e !== t; e = e.parentNode)
                                    if ("false" === o.dom.getContentEditable(e)) return e;
                                return null
                            }(e)) return v.remove(e), h.select(t);
                        l = v.createRng(), (f = e.previousSibling) && 3 === f.nodeType ? (l.setStart(f, f.nodeValue.length), ve.ie || (d = e.nextSibling) && 3 === d.nodeType && (f.appendData(d.data), d.parentNode.removeChild(d))) : (l.setStartBefore(e), l.setEndBefore(e)), n = v.getParent(e, v.isBlock), v.remove(e), n && v.isEmpty(n) && (o.$(n).empty(), l.setStart(n, 0), l.setEnd(n, 0), el(n) || n.getAttribute("data-mce-fragment") || !(r = function(e) {
                            var t = La.fromRangeStart(e);
                            if (t = Ys(o.getBody()).next(t)) return t.toRange()
                        }(l)) ? v.add(n, v.create("br", {
                            "data-mce-bogus": "1"
                        })) : (l = r, v.remove(n))), h.setRng(l)
                    }
                }(v.get("mce_marker")), E = o.getBody(), It.each(E.getElementsByTagName("*"), function(e) {
                    e.removeAttribute("data-mce-fragment")
                }), S = o.dom, k = o.selection.getStart(), A.from(S.getParent(k, "td,th")).map(Vn.fromDom).each(Xc), o.fire("SetContent", s), o.addVisual()
            }
        },
        nl = function(e, t) {
            var n, r, o = "string" != typeof(n = t) ? (r = It.extend({
                paste: n.paste,
                data: {
                    paste: n.paste
                }
            }, n), {
                content: n.content,
                details: r
            }) : {
                content: n,
                details: {}
            };
            tl(e, o.content, o.details)
        };

    function rl(e, t, n, r, o) {
        return e(n, r) ? A.some(n) : k.isFunction(o) && o(n) ? A.none() : t(n, r, o)
    }
    var ol = function(e, t, n) {
            for (var r = e.dom(), o = k.isFunction(n) ? n : V.constant(!1); r.parentNode;) {
                r = r.parentNode;
                var i = Vn.fromDom(r);
                if (t(i)) return A.some(i);
                if (o(i)) break
            }
            return A.none()
        },
        il = function(e, t) {
            return H.find(e.dom().childNodes, V.compose(t, Vn.fromDom)).map(Vn.fromDom)
        },
        al = function(e, r) {
            var o = function(e) {
                for (var t = 0; t < e.childNodes.length; t++) {
                    if (r(Vn.fromDom(e.childNodes[t]))) return A.some(Vn.fromDom(e.childNodes[t]));
                    var n = o(e.childNodes[t]);
                    if (n.isSome()) return n
                }
                return A.none()
            };
            return o(e.dom())
        },
        ul = {
            first: function(e) {
                return al(mr.body(), e)
            },
            ancestor: ol,
            closest: function(e, t, n) {
                return rl(function(e) {
                    return t(e)
                }, ol, e, t, n)
            },
            sibling: function(t, n) {
                var e = t.dom();
                return e.parentNode ? il(Vn.fromDom(e.parentNode), function(e) {
                    return !Mr.eq(t, e) && n(e)
                }) : A.none()
            },
            child: il,
            descendant: al
        },
        sl = kr.immutable("sections", "settings"),
        cl = Un.detect().deviceType.isTouch(),
        ll = ["lists", "autolink", "autosave"],
        fl = {
            theme: "mobile"
        },
        dl = function(e) {
            var t = k.isArray(e) ? e.join(" ") : e,
                n = H.map(k.isString(t) ? t.split(" ") : [], On);
            return H.filter(n, function(e) {
                return 0 < e.length
            })
        },
        ml = function(e, t) {
            return e.sections().hasOwnProperty(t)
        },
        pl = function(e, t, n, r) {
            var o, i, a = dl(n.forced_plugins),
                u = dl(r.plugins),
                s = e && ml(t, "mobile") ? (o = u, H.filter(o, V.curry(H.contains, ll))) : u,
                c = (i = s, [].concat(dl(a)).concat(dl(i)));
            return It.extend(r, {
                plugins: c.join(" ")
            })
        },
        gl = function(e, t, n, r) {
            var o, i, a, u, s, c, l, f, d, m, p, g, h, v = (o = ["mobile"], i = r, a = ir.bifilter(i, function(e, t) {
                    return H.contains(o, t)
                }), sl(a.t, a.f)),
                y = It.extend(t, n, v.settings(), (p = e, h = (g = v).settings().inline, p && ml(g, "mobile") && !h ? (l = "mobile", f = fl, d = v.sections(), m = d.hasOwnProperty(l) ? d[l] : {}, It.extend({}, f, m)) : {}), {
                    validate: !0,
                    content_editable: v.settings().inline,
                    external_plugins: (u = n, s = v.settings(), c = s.external_plugins ? s.external_plugins : {}, u && u.external_plugins ? It.extend({}, u.external_plugins, c) : c)
                });
            return pl(e, v, n, y)
        },
        hl = function(e, t, n) {
            return A.from(t.settings[n]).filter(e)
        },
        vl = V.curry(hl, k.isString),
        yl = function(e, t, n, r) {
            var o, i, a, u = t in e.settings ? e.settings[t] : n;
            return "hash" === r ? (a = {}, "string" == typeof(i = u) ? H.each(0 < i.indexOf("=") ? i.split(/[;,](?![^=;,]*(?:[;,]|$))/) : i.split(","), function(e) {
                var t = e.split("=");
                1 < t.length ? a[It.trim(t[0])] = It.trim(t[1]) : a[It.trim(t[0])] = It.trim(t)
            }) : a = i, a) : "string" === r ? hl(k.isString, e, t).getOr(n) : "number" === r ? hl(k.isNumber, e, t).getOr(n) : "boolean" === r ? hl(k.isBoolean, e, t).getOr(n) : "object" === r ? hl(k.isObject, e, t).getOr(n) : "array" === r ? hl(k.isArray, e, t).getOr(n) : "string[]" === r ? hl((o = k.isString, function(e) {
                return k.isArray(e) && H.forall(e, o)
            }), e, t).getOr(n) : "function" === r ? hl(k.isFunction, e, t).getOr(n) : u
        },
        bl = /[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,
        Cl = function(e, t) {
            var n = t.container(),
                r = t.offset();
            return e ? Pi(n) ? Oo.isText(n.nextSibling) ? La(n.nextSibling, 0) : La.after(n) : Mi(t) ? La(n, r + 1) : t : Pi(n) ? Oo.isText(n.previousSibling) ? La(n.previousSibling, n.previousSibling.data.length) : La.before(n) : Fi(t) ? La(n, r - 1) : t
        },
        xl = {
            isInlineTarget: function(e, t) {
                var n = vl(e, "inline_boundaries_selector").getOr("a[href],code");
                return Pr.is(Vn.fromDom(t), n)
            },
            findRootInline: function(e, t, n) {
                var r, o, i, a = (r = e, o = t, i = n, H.filter(vi.DOM.getParents(i.container(), "*", o), r));
                return A.from(a[a.length - 1])
            },
            isRtl: function(e) {
                return "rtl" === vi.DOM.getStyle(e, "direction", !0) || (t = e.textContent, bl.test(t));
                var t
            },
            isAtZwsp: function(e) {
                return Mi(e) || Fi(e)
            },
            normalizePosition: Cl,
            normalizeForwards: V.curry(Cl, !0),
            normalizeBackwards: V.curry(Cl, !1),
            hasSameParentBlock: function(e, t, n) {
                var r = ys(t, e),
                    o = ys(n, e);
                return r && r === o
            }
        },
        wl = function(e, t) {
            return Mr.contains(e, t) ? ul.closest(t, function(e) {
                return ho(e) || yo(e)
            }, (n = e, function(e) {
                return Mr.eq(n, Vn.fromDom(e.dom().parentNode))
            })) : A.none();
            var n
        },
        Nl = function(e) {
            var t, n, r;
            e.dom.isEmpty(e.getBody()) && (e.setContent(""), n = (t = e).getBody(), r = n.firstChild && t.dom.isBlock(n.firstChild) ? n.firstChild : n, t.selection.setCursorLocation(r, 0))
        },
        El = function(i, a, u) {
            return ma([Qa.firstPositionIn(u), Qa.lastPositionIn(u)], function(e, t) {
                var n = xl.normalizePosition(!0, e),
                    r = xl.normalizePosition(!1, t),
                    o = xl.normalizePosition(!1, a);
                return i ? Qa.nextPosition(u, o).map(function(e) {
                    return e.isEqual(r) && a.isEqual(n)
                }).getOr(!1) : Qa.prevPosition(u, o).map(function(e) {
                    return e.isEqual(n) && a.isEqual(r)
                }).getOr(!1)
            }).getOr(!0)
        },
        Sl = function(e, t, n) {
            return ul.ancestor(e, function(e) {
                return Pr.is(e, t)
            }, n)
        },
        kl = Sl,
        Tl = function(e, t) {
            return Pr.one(t, e)
        },
        Al = function(e, t, n) {
            return rl(Pr.is, Sl, e, t, n)
        },
        Rl = function(e, t, n) {
            return kl(e, t, n).isSome()
        },
        _l = function(e, t) {
            return Oo.isText(t) && /^[ \t\r\n]*$/.test(t.data) && !1 === (n = e, r = t, o = Vn.fromDom(n), i = Vn.fromDom(r), Rl(i, "pre,code", V.curry(Mr.eq, o)));
            var n, r, o, i
        },
        Bl = function(e, t) {
            return Ji(t) && !1 === _l(e, t) || (n = t, Oo.isElement(n) && "A" === n.nodeName && n.hasAttribute("name")) || Dl(t);
            var n
        },
        Dl = Oo.hasAttribute("data-mce-bookmark"),
        Ol = Oo.hasAttribute("data-mce-bogus"),
        Pl = Oo.hasAttributeValue("data-mce-bogus", "all"),
        Ll = function(e) {
            return function(e) {
                var t, n, r = 0;
                if (Bl(e, e)) return !1;
                if (!(n = e.firstChild)) return !0;
                t = new ao(n, e);
                do {
                    if (Pl(n)) n = t.next(!0);
                    else if (Ol(n)) n = t.next();
                    else if (Oo.isBr(n)) r++, n = t.next();
                    else {
                        if (Bl(e, n)) return !1;
                        n = t.next()
                    }
                } while (n);
                return r <= 1
            }(e.dom())
        },
        Il = kr.immutable("block", "position"),
        Ml = kr.immutable("from", "to"),
        Fl = function(e, t) {
            var n = Vn.fromDom(e),
                r = Vn.fromDom(t.container());
            return wl(n, r).map(function(e) {
                return Il(e, t)
            })
        },
        zl = function(o, i, e) {
            var t = Fl(o, La.fromRangeStart(e)),
                n = t.bind(function(e) {
                    return Qa.fromPosition(i, o, e.position()).bind(function(e) {
                        return Fl(o, e).map(function(e) {
                            return t = o, n = i, r = e, Oo.isBr(r.position().getNode()) && !1 === Ll(r.block()) ? Qa.positionIn(!1, r.block().dom()).bind(function(e) {
                                return e.isEqual(r.position()) ? Qa.fromPosition(n, t, e).bind(function(e) {
                                    return Fl(t, e)
                                }) : A.some(r)
                            }).getOr(r) : r;
                            var t, n, r
                        })
                    })
                });
            return ma([t, n], Ml).filter(function(e) {
                return r = e, !1 === Mr.eq(r.from().block(), r.to().block()) && (n = e, $r.parent(n.from().block()).bind(function(t) {
                    return $r.parent(n.to().block()).filter(function(e) {
                        return Mr.eq(t, e)
                    })
                }).isSome()) && (t = e, !1 === Oo.isContentEditableFalse(t.from().block()) && !1 === Oo.isContentEditableFalse(t.to().block()));
                var t, n, r
            })
        },
        Ul = function(e, t, n) {
            return n.collapsed ? zl(e, t, n) : A.none()
        },
        ql = function(e, t, n) {
            return Mr.contains(t, e) ? $r.parents(e, function(e) {
                return n(e) || Mr.eq(e, t)
            }).slice(0, -1) : []
        },
        Vl = function(e, t) {
            return ql(e, t, V.constant(!1))
        },
        Hl = Vl,
        jl = function(e, t) {
            return [e].concat(Vl(e, t))
        },
        $l = function(e) {
            var t, n, r = (t = e, n = $r.children(t), H.findIndex(n, mo).fold(function() {
                return n
            }, function(e) {
                return n.slice(0, e)
            }));
            return H.each(r, function(e) {
                Hc.remove(e)
            }), r
        },
        Wl = function(e, t) {
            Qa.positionIn(e, t.dom()).each(function(e) {
                var t = e.getNode();
                Oo.isBr(t) && Hc.remove(Vn.fromDom(t))
            })
        },
        Kl = function(e, t) {
            var n = jl(t, e);
            return H.find(n.reverse(), Ll).each(Hc.remove)
        },
        Xl = function(o, i) {
            return Mr.contains(i, o) ? $r.parent(o).bind(function(e) {
                return Mr.eq(e, i) ? A.some(o) : (t = i, n = o, r = $r.parents(n, function(e) {
                    return Mr.eq(e, t)
                }), A.from(r[r.length - 2]));
                var t, n, r
            }) : A.none()
        },
        Yl = function(n, r, o) {
            if (Ll(o)) return Hc.remove(o), Ll(r) && Kc(r), Qa.firstPositionIn(r.dom());
            Wl(!0, r), Wl(!1, o);
            var i = $l(r);
            return Xl(r, o).fold(function() {
                Kl(n, r);
                var e = Qa.lastPositionIn(o.dom());
                return H.each(i, function(e) {
                    Hu.append(o, e)
                }), e
            }, function(t) {
                var e = Qa.prevPosition(o.dom(), La.before(t.dom()));
                return H.each(i, function(e) {
                    Hu.before(t, e)
                }), Kl(n, r), e
            })
        },
        Gl = function(e, t, n, r) {
            return t ? Yl(e, r, n) : Yl(e, n, r)
        },
        Jl = function(t, n) {
            var e, r = Vn.fromDom(t.getBody());
            return (e = Ul(r.dom(), n, t.selection.getRng()).bind(function(e) {
                return Gl(r, n, e.from().block(), e.to().block())
            })).each(function(e) {
                t.selection.setRng(e.toRange())
            }), e.isSome()
        },
        Ql = function(e, t) {
            var n = Vn.fromDom(t),
                r = V.curry(Mr.eq, e);
            return ul.ancestor(n, xo, r).isSome()
        },
        Zl = function(e, t) {
            var n, r, o = Qa.prevPosition(e.dom(), La.fromRangeStart(t)).isNone(),
                i = Qa.nextPosition(e.dom(), La.fromRangeEnd(t)).isNone();
            return !(Ql(n = e, (r = t).startContainer) || Ql(n, r.endContainer)) && o && i
        },
        ef = function(e) {
            var n, r, o, t, i = Vn.fromDom(e.getBody()),
                a = e.selection.getRng();
            return Zl(i, a) ? ((t = e).setContent(""), t.selection.setCursorLocation(), !0) : (n = i, r = e.selection, o = r.getRng(), ma([wl(n, Vn.fromDom(o.startContainer)), wl(n, Vn.fromDom(o.endContainer))], function(e, t) {
                return !1 === Mr.eq(e, t) && (o.deleteContents(), Gl(n, !0, e, t).each(function(e) {
                    r.setRng(e.toRange())
                }), !0)
            }).getOr(!1))
        },
        tf = function(e, t) {
            return !e.selection.isCollapsed() && ef(e)
        },
        nf = function(a) {
            if (!k.isArray(a)) throw new Error("cases must be an array");
            if (0 === a.length) throw new Error("there must be at least one case");
            var u = [],
                n = {};
            return H.each(a, function(e, r) {
                var t = ir.keys(e);
                if (1 !== t.length) throw new Error("one and only one name per case");
                var o = t[0],
                    i = e[o];
                if (n[o] !== undefined) throw new Error("duplicate key detected:" + o);
                if ("cata" === o) throw new Error("cannot have a case named cata (sorry)");
                if (!k.isArray(i)) throw new Error("case arguments must be an array");
                u.push(o), n[o] = function() {
                    var e = arguments.length;
                    if (e !== i.length) throw new Error("Wrong number of arguments to case " + o + ". Expected " + i.length + " (" + i + "), got " + e);
                    for (var n = new Array(e), t = 0; t < n.length; t++) n[t] = arguments[t];
                    return {
                        fold: function() {
                            if (arguments.length !== a.length) throw new Error("Wrong number of arguments to fold. Expected " + a.length + ", got " + arguments.length);
                            return arguments[r].apply(null, n)
                        },
                        match: function(e) {
                            var t = ir.keys(e);
                            if (u.length !== t.length) throw new Error("Wrong number of arguments to match. Expected: " + u.join(",") + "\nActual: " + t.join(","));
                            if (!H.forall(u, function(e) {
                                    return H.contains(t, e)
                                })) throw new Error("Not all branches were specified when using match. Specified: " + t.join(", ") + "\nRequired: " + u.join(", "));
                            return e[o].apply(null, n)
                        },
                        log: function(e) {
                            console.log(e, {
                                constructors: u,
                                constructor: o,
                                params: n
                            })
                        }
                    }
                }
            }), n
        },
        rf = nf([{
            remove: ["element"]
        }, {
            moveToElement: ["element"]
        }, {
            moveToPosition: ["position"]
        }]),
        of = function(e, t, n, r) {
            var o = r.getNode(!1 === t);
            return wl(Vn.fromDom(e), Vn.fromDom(n.getNode())).map(function(e) {
                return Ll(e) ? rf.remove(e.dom()) : rf.moveToElement(o)
            }).orThunk(function() {
                return A.some(rf.moveToElement(o))
            })
        },
        af = function(u, s, c) {
            return Qa.fromPosition(s, u, c).bind(function(e) {
                return a = e.getNode(), xo(Vn.fromDom(a)) || yo(Vn.fromDom(a)) ? A.none() : (t = u, o = e, i = function(e) {
                    return po(Vn.fromDom(e)) && !bs(r, o, t)
                }, As(!(n = s), r = c).fold(function() {
                    return As(n, o).fold(V.constant(!1), i)
                }, i) ? A.none() : s && Oo.isContentEditableFalse(e.getNode()) ? of(u, s, c, e) : !1 === s && Oo.isContentEditableFalse(e.getNode(!0)) ? of(u, s, c, e) : s && Bs(c) ? A.some(rf.moveToPosition(e)) : !1 === s && _s(c) ? A.some(rf.moveToPosition(e)) : A.none());
                var t, n, r, o, i, a
            })
        },
        uf = function(r, e, o) {
            return i = e, a = o.getNode(!1 === i), u = i ? "after" : "before", Oo.isElement(a) && a.getAttribute("data-mce-caret") === u ? (t = e, n = o.getNode(!1 === e), t && Oo.isContentEditableFalse(n.nextSibling) ? A.some(rf.moveToElement(n.nextSibling)) : !1 === t && Oo.isContentEditableFalse(n.previousSibling) ? A.some(rf.moveToElement(n.previousSibling)) : A.none()).fold(function() {
                return af(r, e, o)
            }, A.some) : af(r, e, o).bind(function(e) {
                return t = r, n = o, e.fold(function(e) {
                    return A.some(rf.remove(e))
                }, function(e) {
                    return A.some(rf.moveToElement(e))
                }, function(e) {
                    return bs(n, e, t) ? A.none() : A.some(rf.moveToPosition(e))
                });
                var t, n
            });
            var t, n, i, a, u
        },
        sf = function(e, t) {
            return r = e, o = (n = t).container(), i = n.offset(), !1 === La.isTextPosition(n) && o === r.parentNode && i > La.before(r).offset() ? La(t.container(), t.offset() - 1) : t;
            var n, r, o, i
        },
        cf = function(e) {
            return Ji(e.previousSibling) ? A.some((t = e.previousSibling, Oo.isText(t) ? La(t, t.data.length) : La.after(t))) : e.previousSibling ? Qa.lastPositionIn(e.previousSibling) : A.none();
            var t
        },
        lf = function(e) {
            return Ji(e.nextSibling) ? A.some((t = e.nextSibling, Oo.isText(t) ? La(t, 0) : La.before(t))) : e.nextSibling ? Qa.firstPositionIn(e.nextSibling) : A.none();
            var t
        },
        ff = function(r, o) {
            return cf(o).orThunk(function() {
                return lf(o)
            }).orThunk(function() {
                return e = r, t = o, n = La.before(t.previousSibling ? t.previousSibling : t.parentNode), Qa.prevPosition(e, n).fold(function() {
                    return Qa.nextPosition(e, La.after(t))
                }, A.some);
                var e, t, n
            })
        },
        df = function(n, r) {
            return lf(r).orThunk(function() {
                return cf(r)
            }).orThunk(function() {
                return e = n, t = r, Qa.nextPosition(e, La.after(t)).fold(function() {
                    return Qa.prevPosition(e, La.before(t))
                }, A.some);
                var e, t
            })
        },
        mf = function(e, t, n) {
            return (r = e, o = t, i = n, r ? df(o, i) : ff(o, i)).map(V.curry(sf, n));
            var r, o, i
        },
        pf = function(t, n, e) {
            e.fold(function() {
                t.focus()
            }, function(e) {
                t.selection.setRng(e.toRange(), n)
            })
        },
        gf = function(e, t) {
            return t && e.schema.getBlockElements().hasOwnProperty(Zn.name(t))
        },
        hf = function(e) {
            if (Ll(e)) {
                var t = Vn.fromHtml('<br data-mce-bogus="1">');
                return Hc.empty(e), Hu.append(e, t), A.some(La.before(t.dom()))
            }
            return A.none()
        },
        vf = function(t, n, e) {
            var r, a, o, i = mf(n, t.getBody(), e.dom()),
                u = ul.ancestor(e, V.curry(gf, t), (r = t.getBody(), function(e) {
                    return e.dom() === r
                })),
                s = (a = e, o = i, ma([$r.prevSibling(a), $r.nextSibling(a), o], function(e, t, n) {
                    var r, o = e.dom(),
                        i = t.dom();
                    return Oo.isText(o) && Oo.isText(i) ? (r = o.data.length, o.appendData(i.data), Hc.remove(t), Hc.remove(a), n.container() === i ? La(o, r) : n) : (Hc.remove(a), n)
                }).orThunk(function() {
                    return Hc.remove(a), o
                }));
            t.dom.isEmpty(t.getBody()) ? (t.setContent(""), t.selection.setCursorLocation()) : u.bind(hf).fold(function() {
                pf(t, n, s)
            }, function(e) {
                pf(t, n, A.some(e))
            })
        },
        yf = function(a, u) {
            var e, t, n, r, o;
            return (e = a.getBody(), t = u, n = a.selection.getRng(), r = Ss(t ? 1 : -1, e, n), o = La.fromRangeStart(r), !1 === t && Bs(o) ? A.some(rf.remove(o.getNode(!0))) : t && _s(o) ? A.some(rf.remove(o.getNode())) : uf(e, t, o)).map(function(e) {
                return e.fold((o = a, i = u, function(e) {
                    return o._selectionOverrides.hideFakeCaret(), vf(o, i, Vn.fromDom(e)), !0
                }), (n = a, r = u, function(e) {
                    var t = r ? La.before(e) : La.after(e);
                    return n.selection.setRng(t.toRange()), !0
                }), (t = a, function(e) {
                    return t.selection.setRng(e.toRange()), !0
                }));
                var t, n, r, o, i
            }).getOr(!1)
        },
        bf = function(e, t) {
            var n, r = e.selection.getNode();
            return !!Oo.isContentEditableFalse(r) && (n = Vn.fromDom(e.getBody()), H.each(hu(n, ".mce-offscreen-selection"), Hc.remove), vf(e, t, Vn.fromDom(e.selection.getNode())), Nl(e), !0)
        },
        Cf = function(e, t) {
            return e.selection.isCollapsed() ? yf(e, t) : bf(e, t)
        },
        xf = function(e) {
            var t, n = function(e, t) {
                for (; t && t !== e;) {
                    if (Oo.isContentEditableTrue(t) || Oo.isContentEditableFalse(t)) return t;
                    t = t.parentNode
                }
                return null
            }(e.getBody(), e.selection.getNode());
            return Oo.isContentEditableTrue(n) && e.dom.isBlock(n) && e.dom.isEmpty(n) && (t = e.dom.create("br", {
                "data-mce-bogus": "1"
            }), e.dom.setHTML(n, ""), n.appendChild(t), e.selection.setRng(La.before(t).toRange())), !0
        },
        wf = Oo.isText,
        Nf = function(e) {
            return wf(e) && e.data[0] === Ri
        },
        Ef = function(e) {
            return wf(e) && e.data[e.data.length - 1] === Ri
        },
        Sf = function(e) {
            return e.ownerDocument.createTextNode(Ri)
        },
        kf = function(e, t) {
            return e ? function(e) {
                if (wf(e.previousSibling)) return Ef(e.previousSibling) || e.previousSibling.appendData(Ri), e.previousSibling;
                if (wf(e)) return Nf(e) || e.insertData(0, Ri), e;
                var t = Sf(e);
                return e.parentNode.insertBefore(t, e), t
            }(t) : function(e) {
                if (wf(e.nextSibling)) return Nf(e.nextSibling) || e.nextSibling.insertData(0, Ri), e.nextSibling;
                if (wf(e)) return Ef(e) || e.appendData(Ri), e;
                var t = Sf(e);
                return e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t), t
            }(t)
        },
        Tf = V.curry(kf, !0),
        Af = V.curry(kf, !1),
        Rf = function(e, t) {
            return Oo.isText(e.container()) ? kf(t, e.container()) : kf(t, e.getNode())
        },
        _f = function(e, t) {
            var n = t.get();
            return n && e.container() === n && Pi(n)
        },
        Bf = function(n, e) {
            return e.fold(function(e) {
                $a.remove(n.get());
                var t = Tf(e);
                return n.set(t), A.some(La(t, t.length - 1))
            }, function(e) {
                return Qa.firstPositionIn(e).map(function(e) {
                    if (_f(e, n)) return La(n.get(), 1);
                    $a.remove(n.get());
                    var t = Rf(e, !0);
                    return n.set(t), La(t, 1)
                })
            }, function(e) {
                return Qa.lastPositionIn(e).map(function(e) {
                    if (_f(e, n)) return La(n.get(), n.get().length - 1);
                    $a.remove(n.get());
                    var t = Rf(e, !1);
                    return n.set(t), La(t, t.length - 1)
                })
            }, function(e) {
                $a.remove(n.get());
                var t = Af(e);
                return n.set(t), A.some(La(t, 1))
            })
        },
        Df = function(e, t) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n].apply(null, t);
                if (r.isSome()) return r
            }
            return A.none()
        },
        Of = nf([{
            before: ["element"]
        }, {
            start: ["element"]
        }, {
            end: ["element"]
        }, {
            after: ["element"]
        }]),
        Pf = function(e, t) {
            var n = ys(t, e);
            return n || e
        },
        Lf = function(e, t, n) {
            var r = xl.normalizeForwards(n),
                o = Pf(t, r.container());
            return xl.findRootInline(e, o, r).fold(function() {
                return Qa.nextPosition(o, r).bind(V.curry(xl.findRootInline, e, o)).map(function(e) {
                    return Of.before(e)
                })
            }, A.none)
        },
        If = function(e, t) {
            return null === Tc(e, t)
        },
        Mf = function(e, t, n) {
            return xl.findRootInline(e, t, n).filter(V.curry(If, t))
        },
        Ff = function(e, t, n) {
            var r = xl.normalizeBackwards(n);
            return Mf(e, t, r).bind(function(e) {
                return Qa.prevPosition(e, r).isNone() ? A.some(Of.start(e)) : A.none()
            })
        },
        zf = function(e, t, n) {
            var r = xl.normalizeForwards(n);
            return Mf(e, t, r).bind(function(e) {
                return Qa.nextPosition(e, r).isNone() ? A.some(Of.end(e)) : A.none()
            })
        },
        Uf = function(e, t, n) {
            var r = xl.normalizeBackwards(n),
                o = Pf(t, r.container());
            return xl.findRootInline(e, o, r).fold(function() {
                return Qa.prevPosition(o, r).bind(V.curry(xl.findRootInline, e, o)).map(function(e) {
                    return Of.after(e)
                })
            }, A.none)
        },
        qf = function(e) {
            return !1 === xl.isRtl(Hf(e))
        },
        Vf = function(e, t, n) {
            return Df([Lf, Ff, zf, Uf], [e, t, n]).filter(qf)
        },
        Hf = function(e) {
            return e.fold(V.identity, V.identity, V.identity, V.identity)
        },
        jf = function(e) {
            return e.fold(V.constant("before"), V.constant("start"), V.constant("end"), V.constant("after"))
        },
        $f = function(e) {
            return e.fold(Of.before, Of.before, Of.after, Of.after)
        },
        Wf = function(n, e, r, t, o, i) {
            return ma([xl.findRootInline(e, r, t), xl.findRootInline(e, r, o)], function(e, t) {
                return e !== t && xl.hasSameParentBlock(r, e, t) ? Of.after(n ? e : t) : i
            }).getOr(i)
        },
        Kf = function(e, r) {
            return e.fold(V.constant(!0), function(e) {
                return n = r, !(jf(t = e) === jf(n) && Hf(t) === Hf(n));
                var t, n
            })
        },
        Xf = function(e, t) {
            return e ? t.fold(V.compose(A.some, Of.start), A.none, V.compose(A.some, Of.after), A.none) : t.fold(A.none, V.compose(A.some, Of.before), A.none, V.compose(A.some, Of.end))
        },
        Yf = function(a, u, s, c) {
            var e = xl.normalizePosition(a, c),
                l = Vf(u, s, e);
            return Vf(u, s, e).bind(V.curry(Xf, a)).orThunk(function() {
                return t = a, n = u, r = s, o = l, e = c, i = xl.normalizePosition(t, e), Qa.fromPosition(t, r, i).map(V.curry(xl.normalizePosition, t)).fold(function() {
                    return o.map($f)
                }, function(e) {
                    return Vf(n, r, e).map(V.curry(Wf, t, n, r, i, e)).filter(V.curry(Kf, o))
                }).filter(qf);
                var t, n, r, o, e, i
            })
        },
        Gf = Vf,
        Jf = Yf,
        Qf = (V.curry(Yf, !1), V.curry(Yf, !0), $f),
        Zf = function(e) {
            return e.fold(Of.start, Of.start, Of.end, Of.end)
        },
        ed = function(e) {
            return k.isFunction(e.selection.getSel().modify)
        },
        td = function(e, t, n) {
            var r = e ? 1 : -1;
            return t.setRng(La(n.container(), n.offset() + r).toRange()), t.getSel().modify("move", e ? "forward" : "backward", "word"), !0
        },
        nd = function(e, t) {
            var n = t.selection.getRng(),
                r = e ? La.fromRangeEnd(n) : La.fromRangeStart(n);
            return !!ed(t) && (e && Mi(r) ? td(!0, t.selection, r) : !(e || !Fi(r)) && td(!1, t.selection, r))
        },
        rd = function(e, t) {
            var n = e.dom.createRng();
            n.setStart(t.container(), t.offset()), n.setEnd(t.container(), t.offset()), e.selection.setRng(n)
        },
        od = function(e) {
            return !1 !== e.settings.inline_boundaries
        },
        id = function(e, t) {
            e ? t.setAttribute("data-mce-selected", "inline-boundary") : t.removeAttribute("data-mce-selected")
        },
        ad = function(t, e, n) {
            return Bf(e, n).map(function(e) {
                return rd(t, e), n
            })
        },
        ud = function(e, t, n) {
            return function() {
                return !!od(t) && nd(e, t)
            }
        },
        sd = {
            move: function(a, u, s) {
                return function() {
                    return !!od(a) && (t = a, n = u, e = s, r = t.getBody(), o = La.fromRangeStart(t.selection.getRng()), i = V.curry(xl.isInlineTarget, t), Jf(e, i, r, o).bind(function(e) {
                        return ad(t, n, e)
                    })).isSome();
                    var t, n, e, r, o, i
                }
            },
            moveNextWord: V.curry(ud, !0),
            movePrevWord: V.curry(ud, !1),
            setupSelectedState: function(a) {
                var u = ns(null),
                    s = V.curry(xl.isInlineTarget, a);
                return a.on("NodeChange", function(e) {
                    var t, n, r, o, i;
                    od(a) && (t = s, n = a.dom, r = e.parents, o = H.filter(n.select('*[data-mce-selected="inline-boundary"]'), t), i = H.filter(r, t), H.each(H.difference(o, i), V.curry(id, !1)), H.each(H.difference(i, o), V.curry(id, !0)), function(e, t) {
                        if (e.selection.isCollapsed() && !0 !== e.composing && t.get()) {
                            var n = La.fromRangeStart(e.selection.getRng());
                            La.isTextPosition(n) && !1 === xl.isAtZwsp(n) && (rd(e, $a.removeAndReposition(t.get(), n)), t.set(null))
                        }
                    }(a, u), function(n, r, o, e) {
                        if (r.selection.isCollapsed()) {
                            var t = H.filter(e, n);
                            H.each(t, function(e) {
                                var t = La.fromRangeStart(r.selection.getRng());
                                Gf(n, r.getBody(), t).bind(function(e) {
                                    return ad(r, o, e)
                                })
                            })
                        }
                    }(s, a, u, e.parents))
                }), u
            },
            setCaretPosition: rd
        },
        cd = function(t, n) {
            return function(e) {
                return Bf(n, e).map(function(e) {
                    return sd.setCaretPosition(t, e), !0
                }).getOr(!1)
            }
        },
        ld = function(r, o, i, a) {
            var u = r.getBody(),
                s = V.curry(xl.isInlineTarget, r);
            r.undoManager.ignore(function() {
                var e, t, n;
                r.selection.setRng((e = i, t = a, (n = document.createRange()).setStart(e.container(), e.offset()), n.setEnd(t.container(), t.offset()), n)), r.execCommand("Delete"), Gf(s, u, La.fromRangeStart(r.selection.getRng())).map(Zf).map(cd(r, o))
            }), r.nodeChanged()
        },
        fd = function(n, r, i, o) {
            var e, t, a = (e = n.getBody(), t = o.container(), ys(t, e) || e),
                u = V.curry(xl.isInlineTarget, n),
                s = Gf(u, a, o);
            return s.bind(function(e) {
                return i ? e.fold(V.constant(A.some(Zf(e))), A.none, V.constant(A.some(Qf(e))), A.none) : e.fold(A.none, V.constant(A.some(Qf(e))), A.none, V.constant(A.some(Zf(e))))
            }).map(cd(n, r)).getOrThunk(function() {
                var t = Qa.navigate(i, a, o),
                    e = t.bind(function(e) {
                        return Gf(u, a, e)
                    });
                return s.isSome() && e.isSome() ? xl.findRootInline(u, a, o).map(function(e) {
                    return o = e, !!ma([Qa.firstPositionIn(o), Qa.lastPositionIn(o)], function(e, t) {
                        var n = xl.normalizePosition(!0, e),
                            r = xl.normalizePosition(!1, t);
                        return Qa.nextPosition(o, n).map(function(e) {
                            return e.isEqual(r)
                        }).getOr(!0)
                    }).getOr(!0) && (vf(n, i, Vn.fromDom(e)), !0);
                    var o
                }).getOr(!1) : e.bind(function(e) {
                    return t.map(function(e) {
                        return i ? ld(n, r, o, e) : ld(n, r, e, o), !0
                    })
                }).getOr(!1)
            })
        },
        dd = function(e, t, n) {
            if (e.selection.isCollapsed() && !1 !== e.settings.inline_boundaries) {
                var r = La.fromRangeStart(e.selection.getRng());
                return fd(e, t, n, r)
            }
            return !1
        },
        md = kr.immutable("start", "end"),
        pd = kr.immutable("rng", "table", "cells"),
        gd = nf([{
            removeTable: ["element"]
        }, {
            emptyCells: ["cells"]
        }]),
        hd = function(e, t) {
            return Al(Vn.fromDom(e), "td,th", t)
        },
        vd = function(e, t) {
            return kl(e, "table", t)
        },
        yd = function(e) {
            return !1 === Mr.eq(e.start(), e.end())
        },
        bd = function(e, n) {
            return vd(e.start(), n).bind(function(t) {
                return vd(e.end(), n).bind(function(e) {
                    return Mr.eq(t, e) ? A.some(t) : A.none()
                })
            })
        },
        Cd = function(e) {
            return hu(e, "td,th")
        },
        xd = function(r, e) {
            var t = hd(e.startContainer, r),
                n = hd(e.endContainer, r);
            return e.collapsed ? A.none() : ma([t, n], md).fold(function() {
                return t.fold(function() {
                    return n.bind(function(t) {
                        return vd(t, r).bind(function(e) {
                            return H.head(Cd(e)).map(function(e) {
                                return md(e, t)
                            })
                        })
                    })
                }, function(t) {
                    return vd(t, r).bind(function(e) {
                        return H.last(Cd(e)).map(function(e) {
                            return md(t, e)
                        })
                    })
                })
            }, function(e) {
                return wd(r, e) ? A.none() : (n = r, vd((t = e).start(), n).bind(function(e) {
                    return H.last(Cd(e)).map(function(e) {
                        return md(t.start(), e)
                    })
                }));
                var t, n
            })
        },
        wd = function(e, t) {
            return bd(t, e).isSome()
        },
        Nd = function(e, t) {
            var n, r, o, i, a, u = (n = e, V.curry(Mr.eq, n));
            return (r = t, o = u, i = hd(r.startContainer, o), a = hd(r.endContainer, o), ma([i, a], md).filter(yd).filter(function(e) {
                return wd(o, e)
            }).orThunk(function() {
                return xd(o, r)
            })).bind(function(e) {
                return bd(t = e, u).map(function(e) {
                    return pd(t, e, Cd(e))
                });
                var t
            })
        },
        Ed = function(e, t) {
            return H.findIndex(e, function(e) {
                return Mr.eq(e, t)
            })
        },
        Sd = function(n) {
            return (r = n, ma([Ed(r.cells(), r.rng().start()), Ed(r.cells(), r.rng().end())], function(e, t) {
                return r.cells().slice(e, t + 1)
            })).map(function(e) {
                var t = n.cells();
                return e.length === t.length ? gd.removeTable(n.table()) : gd.emptyCells(e)
            });
            var r
        },
        kd = function(e, t) {
            return Nd(e, t).bind(Sd)
        },
        Td = function(e) {
            var t = [];
            if (e)
                for (var n = 0; n < e.rangeCount; n++) t.push(e.getRangeAt(n));
            return t
        },
        Ad = Td,
        Rd = function(e) {
            return H.bind(e, function(e) {
                var t = aa(e);
                return t ? [Vn.fromDom(t)] : []
            })
        },
        _d = function(e) {
            return 1 < Td(e).length
        },
        Bd = function(e) {
            return H.filter(Rd(e), xo)
        },
        Dd = function(e) {
            return hu(e, "td[data-mce-selected],th[data-mce-selected]")
        },
        Od = function(e, t) {
            var n = Dd(t),
                r = Bd(e);
            return 0 < n.length ? n : r
        },
        Pd = Od,
        Ld = function(e) {
            return Od(Ad(e.selection.getSel()), Vn.fromDom(e.getBody()))
        },
        Id = function(e, t) {
            return H.each(t, Kc), e.selection.setCursorLocation(t[0].dom(), 0), !0
        },
        Md = function(e, t) {
            return vf(e, !1, t), !0
        },
        Fd = function(n, e, r, t) {
            return Ud(e, t).fold(function() {
                return t = n, kd(e, r).map(function(e) {
                    return e.fold(V.curry(Md, t), V.curry(Id, t))
                });
                var t
            }, function(e) {
                return qd(n, e)
            }).getOr(!1)
        },
        zd = function(e, t) {
            return H.find(jl(t, e), xo)
        },
        Ud = function(e, t) {
            return H.find(jl(t, e), function(e) {
                return "caption" === Zn.name(e)
            })
        },
        qd = function(e, t) {
            return Kc(t), e.selection.setCursorLocation(t.dom(), 0), A.some(!0)
        },
        Vd = function(u, s, c, l, f) {
            return Qa.navigate(c, u.getBody(), f).bind(function(e) {
                return r = l, o = c, i = f, a = e, Qa.firstPositionIn(r.dom()).bind(function(t) {
                    return Qa.lastPositionIn(r.dom()).map(function(e) {
                        return o ? i.isEqual(t) && a.isEqual(e) : i.isEqual(e) && a.isEqual(t)
                    })
                }).getOr(!0) ? qd(u, l) : (t = l, n = e, Ud(s, Vn.fromDom(n.getNode())).map(function(e) {
                    return !1 === Mr.eq(e, t)
                }));
                var t, n, r, o, i, a
            }).or(A.some(!0))
        },
        Hd = function(a, u, s, e) {
            var c = La.fromRangeStart(a.selection.getRng());
            return zd(s, e).bind(function(e) {
                return Ll(e) ? qd(a, e) : (t = a, n = s, r = u, o = e, i = c, Qa.navigate(r, t.getBody(), i).bind(function(e) {
                    return zd(n, Vn.fromDom(e.getNode())).map(function(e) {
                        return !1 === Mr.eq(e, o)
                    })
                }));
                var t, n, r, o, i
            })
        },
        jd = function(a, u, e) {
            var s = Vn.fromDom(a.getBody());
            return Ud(s, e).fold(function() {
                return Hd(a, u, s, e)
            }, function(e) {
                return t = a, n = u, r = s, o = e, i = La.fromRangeStart(t.selection.getRng()), Ll(o) ? qd(t, o) : Vd(t, r, n, o, i);
                var t, n, r, o, i
            }).getOr(!1)
        },
        $d = function(e, t) {
            var n, r, o, i, a, u = Vn.fromDom(e.selection.getStart(!0)),
                s = Ld(e);
            return e.selection.isCollapsed() && 0 === s.length ? jd(e, t, u) : (n = e, r = u, o = Vn.fromDom(n.getBody()), i = n.selection.getRng(), 0 !== (a = Ld(n)).length ? Id(n, a) : Fd(n, o, i, r))
        },
        Wd = function(e, t) {
            e.getDoc().execCommand(t, !1, null)
        },
        Kd = function(e) {
            Cf(e, !1) || dd(e, !1) || Jl(e, !1) || $d(e) || tf(e, !1) || (Wd(e, "Delete"), Nl(e))
        },
        Xd = function(e) {
            Cf(e, !0) || dd(e, !0) || Jl(e, !0) || $d(e) || tf(e, !0) || Wd(e, "ForwardDelete")
        },
        Yd = function(s) {
            return function(u, e) {
                return A.from(e).map(Vn.fromDom).filter(Zn.isElement).bind(function(e) {
                    return (r = s, o = u, i = e.dom(), a = function(e) {
                        return Cr(e, r)
                    }, ul.closest(Vn.fromDom(i), function(e) {
                        return a(e).isSome()
                    }, function(e) {
                        return Mr.eq(Vn.fromDom(o), e)
                    }).bind(a)).or((t = s, n = e.dom(), A.from(vi.DOM.getStyle(n, t, !0))));
                    var t, n, r, o, i, a
                }).getOr("")
            }
        },
        Gd = {
            getFontSize: Yd("font-size"),
            getFontFamily: V.compose(function(e) {
                return e.replace(/[\'\"\\]/g, "").replace(/,\s+/g, ",")
            }, Yd("font-family")),
            toPt: function(e, t) {
                return /[0-9.]+px$/.test(e) ? (n = 72 * parseInt(e, 10) / 96, r = t || 0, o = Math.pow(10, r), Math.round(n * o) / o + "pt") : e;
                var n, r, o
            }
        },
        Jd = function(e) {
            return Qa.firstPositionIn(e.getBody()).map(function(e) {
                var t = e.container();
                return Oo.isText(t) ? t.parentNode : t
            })
        },
        Qd = function(o) {
            return A.from(o.selection.getRng()).bind(function(e) {
                var t, n, r = o.getBody();
                return n = r, (t = e).startContainer === n && 0 === t.startOffset ? A.none() : A.from(o.selection.getStart(!0))
            })
        },
        Zd = function(e, t) {
            if (/^[0-9\.]+$/.test(t)) {
                var n = parseInt(t, 10);
                if (1 <= n && n <= 7) {
                    var r = zu(e),
                        o = Uu(e);
                    return o ? o[n - 1] || t : r[n - 1] || t
                }
                return t
            }
            return t
        },
        em = function(e, t) {
            return e && t && e.startContainer === t.startContainer && e.startOffset === t.startOffset && e.endContainer === t.endContainer && e.endOffset === t.endOffset
        },
        tm = function(e, t, n) {
            return null !== function(e, t, n) {
                for (; e && e !== t;) {
                    if (n(e)) return e;
                    e = e.parentNode
                }
                return null
            }(e, t, n)
        },
        nm = function(e, t, n) {
            return tm(e, t, function(e) {
                return e.nodeName === n
            })
        },
        rm = function(e) {
            return e && "TABLE" === e.nodeName
        },
        om = function(e, t, n) {
            for (var r = new ao(t, e.getParent(t.parentNode, e.isBlock) || e.getRoot()); t = r[n ? "prev" : "next"]();)
                if (Oo.isBr(t)) return !0
        },
        im = function(e, t, n, r, o) {
            var i, a, u, s, c, l, f = e.getRoot(),
                d = e.schema.getNonEmptyElements();
            if (u = e.getParent(o.parentNode, e.isBlock) || f, r && Oo.isBr(o) && t && e.isEmpty(u)) return A.some(Da(o.parentNode, e.nodeIndex(o)));
            for (i = new ao(o, u); s = i[r ? "prev" : "next"]();) {
                if ("false" === e.getContentEditableParent(s) || (l = f, Li(c = s) && !1 === tm(c, l, kc))) return A.none();
                if (Oo.isText(s) && 0 < s.nodeValue.length) return !1 === nm(s, f, "A") ? A.some(Da(s, r ? s.nodeValue.length : 0)) : A.none();
                if (e.isBlock(s) || d[s.nodeName.toLowerCase()]) return A.none();
                a = s
            }
            return n && a ? A.some(Da(a, 0)) : A.none()
        },
        am = function(e, t, n, r) {
            var o, i, a, u, s, c, l, f, d, m, p = e.getRoot(),
                g = !1;
            if (o = r[(n ? "start" : "end") + "Container"], i = r[(n ? "start" : "end") + "Offset"], l = Oo.isElement(o) && i === o.childNodes.length, s = e.schema.getNonEmptyElements(), c = n, Li(o)) return A.none();
            if (Oo.isElement(o) && i > o.childNodes.length - 1 && (c = !1), Oo.isDocument(o) && (o = p, i = 0), o === p) {
                if (c && (u = o.childNodes[0 < i ? i - 1 : 0])) {
                    if (Li(u)) return A.none();
                    if (s[u.nodeName] || rm(u)) return A.none()
                }
                if (o.hasChildNodes()) {
                    if (i = Math.min(!c && 0 < i ? i - 1 : i, o.childNodes.length - 1), o = o.childNodes[i], i = Oo.isText(o) && l ? o.data.length : 0, !t && o === p.lastChild && rm(o)) return A.none();
                    if (function(e, t) {
                            for (; t && t !== e;) {
                                if (Oo.isContentEditableFalse(t)) return !0;
                                t = t.parentNode
                            }
                            return !1
                        }(p, o) || Li(o)) return A.none();
                    if (o.hasChildNodes() && !1 === rm(o)) {
                        a = new ao(u = o, p);
                        do {
                            if (Oo.isContentEditableFalse(u) || Li(u)) {
                                g = !1;
                                break
                            }
                            if (Oo.isText(u) && 0 < u.nodeValue.length) {
                                i = c ? 0 : u.nodeValue.length, o = u, g = !0;
                                break
                            }
                            if (s[u.nodeName.toLowerCase()] && (!(f = u) || !/^(TD|TH|CAPTION)$/.test(f.nodeName))) {
                                i = e.nodeIndex(u), o = u.parentNode, c || i++, g = !0;
                                break
                            }
                        } while (u = c ? a.next() : a.prev())
                    }
                }
            }
            return t && (Oo.isText(o) && 0 === i && im(e, l, t, !0, o).each(function(e) {
                o = e.container(), i = e.offset(), g = !0
            }), Oo.isElement(o) && ((u = o.childNodes[i]) || (u = o.childNodes[i - 1]), !u || !Oo.isBr(u) || (m = "A", (d = u).previousSibling && d.previousSibling.nodeName === m) || om(e, u, !1) || om(e, u, !0) || im(e, l, t, !0, u).each(function(e) {
                o = e.container(), i = e.offset(), g = !0
            }))), c && !t && Oo.isText(o) && i === o.nodeValue.length && im(e, l, t, !1, o).each(function(e) {
                o = e.container(), i = e.offset(), g = !0
            }), g ? A.some(Da(o, i)) : A.none()
        },
        um = function(e, t) {
            var n = t.collapsed,
                r = t.cloneRange(),
                o = Da.fromRangeStart(t);
            return am(e, n, !0, r).each(function(e) {
                n && Da.isAbove(o, e) || r.setStart(e.container(), e.offset())
            }), n || am(e, n, !1, r).each(function(e) {
                r.setEnd(e.container(), e.offset())
            }), n && r.collapse(!0), em(t, r) ? A.none() : A.some(r)
        },
        sm = function(e, t, n) {
            var r = e.create("span", {}, "&nbsp;");
            n.parentNode.insertBefore(r, n), t.scrollIntoView(r), e.remove(r)
        },
        cm = function(e, t, n, r) {
            var o = e.createRng();
            r ? (o.setStartBefore(n), o.setEndBefore(n)) : (o.setStartAfter(n), o.setEndAfter(n)), t.setRng(o)
        },
        lm = function(e, t) {
            var n, r, o = e.selection,
                i = e.dom,
                a = o.getRng();
            um(i, a).each(function(e) {
                a.setStart(e.startContainer, e.startOffset), a.setEnd(e.endContainer, e.endOffset)
            });
            var u = a.startOffset,
                s = a.startContainer;
            if (1 === s.nodeType && s.hasChildNodes()) {
                var c = u > s.childNodes.length - 1;
                s = s.childNodes[Math.min(u, s.childNodes.length - 1)] || s, u = c && 3 === s.nodeType ? s.nodeValue.length : 0
            }
            var l = i.getParent(s, i.isBlock),
                f = l ? i.getParent(l.parentNode, i.isBlock) : null,
                d = f ? f.nodeName.toUpperCase() : "",
                m = t && t.ctrlKey;
            "LI" !== d || m || (l = f), s && 3 === s.nodeType && u >= s.nodeValue.length && (function(e, t, n) {
                for (var r, o = new ao(t, n), i = e.getNonEmptyElements(); r = o.next();)
                    if (i[r.nodeName.toLowerCase()] || 0 < r.length) return !0
            }(e.schema, s, l) || (n = i.create("br"), a.insertNode(n), a.setStartAfter(n), a.setEndAfter(n), r = !0)), n = i.create("br"), a.insertNode(n), sm(i, o, n), cm(i, o, n, r), e.undoManager.add()
        },
        fm = function(e, t) {
            var n = Vn.fromTag("br");
            Hu.before(Vn.fromDom(t), n), e.undoManager.add()
        },
        dm = function(e, t) {
            mm(e.getBody(), t) || Hu.after(Vn.fromDom(t), Vn.fromTag("br"));
            var n = Vn.fromTag("br");
            Hu.after(Vn.fromDom(t), n), sm(e.dom, e.selection, n.dom()), cm(e.dom, e.selection, n.dom(), !1), e.undoManager.add()
        },
        mm = function(e, t) {
            return n = La.after(t), !!Oo.isBr(n.getNode()) || Qa.nextPosition(e, La.after(t)).map(function(e) {
                return Oo.isBr(e.getNode())
            }).getOr(!1);
            var n
        },
        pm = function(e) {
            return e && "A" === e.nodeName && "href" in e
        },
        gm = function(e) {
            return e.fold(V.constant(!1), pm, pm, V.constant(!1))
        },
        hm = function(e, t) {
            t.fold(V.noop, V.curry(fm, e), V.curry(dm, e), V.noop)
        },
        vm = function(e, t) {
            var n, r, o, i = (n = e, r = V.curry(xl.isInlineTarget, n), o = La.fromRangeStart(n.selection.getRng()), Gf(r, n.getBody(), o).filter(gm));
            i.isSome() ? i.each(V.curry(hm, e)) : lm(e, t)
        },
        ym = nf([{
            before: ["element"]
        }, {
            on: ["element", "offset"]
        }, {
            after: ["element"]
        }]),
        bm = (ym.before, ym.on, ym.after, function(e) {
            return e.fold(V.identity, V.identity, V.identity)
        }),
        Cm = nf([{
            domRange: ["rng"]
        }, {
            relative: ["startSitu", "finishSitu"]
        }, {
            exact: ["start", "soffset", "finish", "foffset"]
        }]),
        xm = kr.immutable("start", "soffset", "finish", "foffset"),
        wm = {
            domRange: Cm.domRange,
            relative: Cm.relative,
            exact: Cm.exact,
            exactFromRange: function(e) {
                return Cm.exact(e.start(), e.soffset(), e.finish(), e.foffset())
            },
            range: xm,
            getWin: function(e) {
                var t = e.match({
                    domRange: function(e) {
                        return Vn.fromDom(e.startContainer)
                    },
                    relative: function(e, t) {
                        return bm(e)
                    },
                    exact: function(e, t, n, r) {
                        return e
                    }
                });
                return $r.defaultView(t)
            }
        },
        Nm = Un.detect().browser,
        Em = function(e, t) {
            var n = Zn.isText(t) ? $c(t).length : $r.children(t).length + 1;
            return n < e ? n : e < 0 ? 0 : e
        },
        Sm = function(e) {
            return wm.range(e.start(), Em(e.soffset(), e.start()), e.finish(), Em(e.foffset(), e.finish()))
        },
        km = function(e, t) {
            return Mr.contains(e, t) || Mr.eq(e, t)
        },
        Tm = function(t) {
            return function(e) {
                return km(t, e.start()) && km(t, e.finish())
            }
        },
        Am = function(e) {
            return !0 === e.inline || Nm.isIE()
        },
        Rm = function(e) {
            return wm.range(Vn.fromDom(e.startContainer), e.startOffset, Vn.fromDom(e.endContainer), e.endOffset)
        },
        _m = function(e) {
            var t = e.getSelection();
            return (t && 0 !== t.rangeCount ? A.from(t.getRangeAt(0)) : A.none()).map(Rm)
        },
        Bm = function(e) {
            var t = $r.defaultView(e);
            return _m(t.dom()).filter(Tm(e))
        },
        Dm = function(e, t) {
            return A.from(t).filter(Tm(e)).map(Sm)
        },
        Om = function(e) {
            var t = document.createRange();
            try {
                return t.setStart(e.start().dom(), e.soffset()), t.setEnd(e.finish().dom(), e.foffset()), A.some(t)
            } catch (n) {
                return A.none()
            }
        },
        Pm = function(e) {
            return (e.bookmark ? e.bookmark : A.none()).bind(V.curry(Dm, Vn.fromDom(e.getBody()))).bind(Om)
        },
        Lm = function(e) {
            var t = Am(e) ? Bm(Vn.fromDom(e.getBody())) : A.none();
            e.bookmark = t.isSome() ? t : e.bookmark
        },
        Im = function(t) {
            Pm(t).each(function(e) {
                t.selection.setRng(e)
            })
        },
        Mm = Pm,
        Fm = function(e, t) {
            var n = e.settings,
                r = e.dom,
                o = e.selection,
                i = e.formatter,
                a = /[a-z%]+$/i.exec(n.indentation)[0],
                u = parseInt(n.indentation, 10),
                s = e.getParam("indent_use_margin", !1);
            e.queryCommandState("InsertUnorderedList") || e.queryCommandState("InsertOrderedList") || (n.forced_root_block || r.getParent(o.getNode(), r.isBlock) || i.apply("div"), H.each(o.getSelectedBlocks(), function(e) {
                return function(e, t, n, r, o, i) {
                    if ("false" !== e.getContentEditable(i) && "LI" !== i.nodeName) {
                        var a = n ? "margin" : "padding";
                        if (a = "TABLE" === i.nodeName ? "margin" : a, a += "rtl" === e.getStyle(i, "direction", !0) ? "Right" : "Left", "outdent" === t) {
                            var u = Math.max(0, parseInt(i.style[a] || 0, 10) - r);
                            e.setStyle(i, a, u ? u + o : "")
                        } else u = parseInt(i.style[a] || 0, 10) + r + o, e.setStyle(i, a, u)
                    }
                }(r, t, s, u, a, e)
            }))
        },
        zm = It.each,
        Um = It.extend,
        qm = It.map,
        Vm = It.inArray;

    function Hm(s) {
        var o, i, a, t, c = {
                state: {},
                exec: {},
                value: {}
            },
            n = s.settings;
        s.on("PreInit", function() {
            o = s.dom, i = s.selection, n = s.settings, a = s.formatter
        });
        var r = function(e) {
                var t;
                if (!s.quirks.isHidden() && !s.removed) {
                    if (e = e.toLowerCase(), t = c.state[e]) return t(e);
                    try {
                        return s.getDoc().queryCommandState(e)
                    } catch (n) {}
                    return !1
                }
            },
            e = function(e, n) {
                n = n || "exec", zm(e, function(t, e) {
                    zm(e.toLowerCase().split(","), function(e) {
                        c[n][e] = t
                    })
                })
            },
            u = function(e, t, n) {
                e = e.toLowerCase(), c.value[e] = function() {
                    return t.call(n || s)
                }
            };
        Um(this, {
            execCommand: function(t, n, r, e) {
                var o, i, a = !1;
                if (!s.removed) {
                    if (/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(t) || e && e.skip_focus ? Im(s) : s.focus(), (e = s.fire("BeforeExecCommand", {
                            command: t,
                            ui: n,
                            value: r
                        })).isDefaultPrevented()) return !1;
                    if (i = t.toLowerCase(), o = c.exec[i]) return o(i, n, r), s.fire("ExecCommand", {
                        command: t,
                        ui: n,
                        value: r
                    }), !0;
                    if (zm(s.plugins, function(e) {
                            if (e.execCommand && e.execCommand(t, n, r)) return s.fire("ExecCommand", {
                                command: t,
                                ui: n,
                                value: r
                            }), !(a = !0)
                        }), a) return a;
                    if (s.theme && s.theme.execCommand && s.theme.execCommand(t, n, r)) return s.fire("ExecCommand", {
                        command: t,
                        ui: n,
                        value: r
                    }), !0;
                    try {
                        a = s.getDoc().execCommand(t, n, r)
                    } catch (u) {}
                    return !!a && (s.fire("ExecCommand", {
                        command: t,
                        ui: n,
                        value: r
                    }), !0)
                }
            },
            queryCommandState: r,
            queryCommandValue: function(e) {
                var t;
                if (!s.quirks.isHidden() && !s.removed) {
                    if (e = e.toLowerCase(), t = c.value[e]) return t(e);
                    try {
                        return s.getDoc().queryCommandValue(e)
                    } catch (n) {}
                }
            },
            queryCommandSupported: function(e) {
                if (e = e.toLowerCase(), c.exec[e]) return !0;
                try {
                    return s.getDoc().queryCommandSupported(e)
                } catch (t) {}
                return !1
            },
            addCommands: e,
            addCommand: function(e, o, i) {
                e = e.toLowerCase(), c.exec[e] = function(e, t, n, r) {
                    return o.call(i || s, t, n, r)
                }
            },
            addQueryStateHandler: function(e, t, n) {
                e = e.toLowerCase(), c.state[e] = function() {
                    return t.call(n || s)
                }
            },
            addQueryValueHandler: u,
            hasCustomCommand: function(e) {
                return e = e.toLowerCase(), !!c.exec[e]
            }
        });
        var l = function(e, t, n) {
                return t === undefined && (t = !1), n === undefined && (n = null), s.getDoc().execCommand(e, t, n)
            },
            f = function(e) {
                return a.match(e)
            },
            d = function(e, t) {
                a.toggle(e, t ? {
                    value: t
                } : undefined), s.nodeChanged()
            },
            m = function(e) {
                t = i.getBookmark(e)
            },
            p = function() {
                i.moveToBookmark(t)
            };
        e({
            "mceResetDesignMode,mceBeginUndoLevel": function() {},
            "mceEndUndoLevel,mceAddUndoLevel": function() {
                s.undoManager.add()
            },
            "Cut,Copy,Paste": function(e) {
                var t, n = s.getDoc();
                try {
                    l(e)
                } catch (o) {
                    t = !0
                }
                if ("paste" !== e || n.queryCommandEnabled(e) || (t = !0), t || !n.queryCommandSupported(e)) {
                    var r = s.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.");
                    ve.mac && (r = r.replace(/Ctrl\+/g, "\u2318+")), s.notificationManager.open({
                        text: r,
                        type: "error"
                    })
                }
            },
            unlink: function() {
                if (i.isCollapsed()) {
                    var e = s.dom.getParent(s.selection.getStart(), "a");
                    e && s.dom.remove(e, !0)
                } else a.remove("link")
            },
            "JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone": function(e) {
                var t = e.substring(7);
                "full" === t && (t = "justify"), zm("left,center,right,justify".split(","), function(e) {
                    t !== e && a.remove("align" + e)
                }), "none" !== t && d("align" + t)
            },
            "InsertUnorderedList,InsertOrderedList": function(e) {
                var t, n;
                l(e), (t = o.getParent(i.getNode(), "ol,ul")) && (n = t.parentNode, /^(H[1-6]|P|ADDRESS|PRE)$/.test(n.nodeName) && (m(), o.split(n, t), p()))
            },
            "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function(e) {
                d(e)
            },
            "ForeColor,HiliteColor": function(e, t, n) {
                d(e, n)
            },
            FontName: function(e, t, n) {
                var r, o;
                o = n, (r = s).formatter.toggle("fontname", {
                    value: Zd(r, o)
                }), r.nodeChanged()
            },
            FontSize: function(e, t, n) {
                var r, o;
                o = n, (r = s).formatter.toggle("fontsize", {
                    value: Zd(r, o)
                }), r.nodeChanged()
            },
            RemoveFormat: function(e) {
                a.remove(e)
            },
            mceBlockQuote: function() {
                d("blockquote")
            },
            FormatBlock: function(e, t, n) {
                return d(n || "p")
            },
            mceCleanup: function() {
                var e = i.getBookmark();
                s.setContent(s.getContent()), i.moveToBookmark(e)
            },
            mceRemoveNode: function(e, t, n) {
                var r = n || i.getNode();
                r !== s.getBody() && (m(), s.dom.remove(r, !0), p())
            },
            mceSelectNodeDepth: function(e, t, n) {
                var r = 0;
                o.getParent(i.getNode(), function(e) {
                    if (1 === e.nodeType && r++ === n) return i.select(e), !1
                }, s.getBody())
            },
            mceSelectNode: function(e, t, n) {
                i.select(n)
            },
            mceInsertContent: function(e, t, n) {
                nl(s, n)
            },
            mceInsertRawHTML: function(e, t, n) {
                var r = s.getContent();
                i.setContent("tiny_mce_marker"), s.setContent(r.replace(/tiny_mce_marker/g, function() {
                    return n
                }))
            },
            mceToggleFormat: function(e, t, n) {
                d(n)
            },
            mceSetContent: function(e, t, n) {
                s.setContent(n)
            },
            "Indent,Outdent": function(e) {
                Fm(s, e)
            },
            mceRepaint: function() {},
            InsertHorizontalRule: function() {
                s.execCommand("mceInsertContent", !1, "<hr />")
            },
            mceToggleVisualAid: function() {
                s.hasVisual = !s.hasVisual, s.addVisual()
            },
            mceReplaceContent: function(e, t, n) {
                s.execCommand("mceInsertContent", !1, n.replace(/\{\$selection\}/g, i.getContent({
                    format: "text"
                })))
            },
            mceInsertLink: function(e, t, n) {
                var r;
                "string" == typeof n && (n = {
                    href: n
                }), r = o.getParent(i.getNode(), "a"), n.href = n.href.replace(" ", "%20"), r && n.href || a.remove("link"), n.href && a.apply("link", n, r)
            },
            selectAll: function() {
                var e = o.getParent(i.getStart(), Oo.isContentEditableTrue);
                if (e) {
                    var t = o.createRng();
                    t.selectNodeContents(e), i.setRng(t)
                }
            },
            "delete": function() {
                Kd(s)
            },
            forwardDelete: function() {
                Xd(s)
            },
            mceNewDocument: function() {
                s.setContent("")
            },
            InsertLineBreak: function(e, t, n) {
                return vm(s, n), !0
            }
        });
        var g = function(n) {
            return function() {
                var e = i.isCollapsed() ? [o.getParent(i.getNode(), o.isBlock)] : i.getSelectedBlocks(),
                    t = qm(e, function(e) {
                        return !!a.matchNode(e, n)
                    });
                return -1 !== Vm(t, !0)
            }
        };
        e({
            JustifyLeft: g("alignleft"),
            JustifyCenter: g("aligncenter"),
            JustifyRight: g("alignright"),
            JustifyFull: g("alignjustify"),
            "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function(e) {
                return f(e)
            },
            mceBlockQuote: function() {
                return f("blockquote")
            },
            Outdent: function() {
                var e;
                if (n.inline_styles) {
                    if ((e = o.getParent(i.getStart(), o.isBlock)) && 0 < parseInt(e.style.paddingLeft, 10)) return !0;
                    if ((e = o.getParent(i.getEnd(), o.isBlock)) && 0 < parseInt(e.style.paddingLeft, 10)) return !0
                }
                return r("InsertUnorderedList") || r("InsertOrderedList") || !n.inline_styles && !!o.getParent(i.getNode(), "BLOCKQUOTE")
            },
            "InsertUnorderedList,InsertOrderedList": function(e) {
                var t = o.getParent(i.getNode(), "ul,ol");
                return t && ("insertunorderedlist" === e && "UL" === t.tagName || "insertorderedlist" === e && "OL" === t.tagName)
            }
        }, "state"), e({
            Undo: function() {
                s.undoManager.undo()
            },
            Redo: function() {
                s.undoManager.redo()
            }
        }), u("FontName", function() {
            return Qd(t = s).fold(function() {
                return Jd(t).map(function(e) {
                    return Gd.getFontFamily(t.getBody(), e)
                }).getOr("")
            }, function(e) {
                return Gd.getFontFamily(t.getBody(), e)
            });
            var t
        }, this), u("FontSize", function() {
            return Qd(t = s).fold(function() {
                return Jd(t).map(function(e) {
                    return Gd.getFontSize(t.getBody(), e)
                }).getOr("")
            }, function(e) {
                return Gd.getFontSize(t.getBody(), e)
            });
            var t
        }, this)
    }
    var jm = It.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend", " "),
        $m = function(a) {
            var u, s, c = this,
                l = {},
                f = function() {
                    return !1
                },
                d = function() {
                    return !0
                };
            u = (a = a || {}).scope || c, s = a.toggleEvent || f;
            var r = function(e, t, n, r) {
                    var o, i, a;
                    if (!1 === t && (t = f), t)
                        for (t = {
                                func: t
                            }, r && It.extend(t, r), a = (i = e.toLowerCase().split(" ")).length; a--;) e = i[a], (o = l[e]) || (o = l[e] = [], s(e, !0)), n ? o.unshift(t) : o.push(t);
                    return c
                },
                m = function(e, t) {
                    var n, r, o, i, a;
                    if (e)
                        for (n = (i = e.toLowerCase().split(" ")).length; n--;) {
                            if (e = i[n], r = l[e], !e) {
                                for (o in l) s(o, !1), delete l[o];
                                return c
                            }
                            if (r) {
                                if (t)
                                    for (a = r.length; a--;) r[a].func === t && (r = r.slice(0, a).concat(r.slice(a + 1)), l[e] = r);
                                else r.length = 0;
                                r.length || (s(e, !1), delete l[e])
                            }
                        } else {
                            for (e in l) s(e, !1);
                            l = {}
                        }
                    return c
                };
            c.fire = function(e, t) {
                var n, r, o, i;
                if (e = e.toLowerCase(), (t = t || {}).type = e, t.target || (t.target = u), t.preventDefault || (t.preventDefault = function() {
                        t.isDefaultPrevented = d
                    }, t.stopPropagation = function() {
                        t.isPropagationStopped = d
                    }, t.stopImmediatePropagation = function() {
                        t.isImmediatePropagationStopped = d
                    }, t.isDefaultPrevented = f, t.isPropagationStopped = f, t.isImmediatePropagationStopped = f), a.beforeFire && a.beforeFire(t), n = l[e])
                    for (r = 0, o = n.length; r < o; r++) {
                        if ((i = n[r]).once && m(e, i.func), t.isImmediatePropagationStopped()) return t.stopPropagation(), t;
                        if (!1 === i.func.call(u, t)) return t.preventDefault(), t
                    }
                return t
            }, c.on = r, c.off = m, c.once = function(e, t, n) {
                return r(e, t, n, {
                    once: !0
                })
            }, c.has = function(e) {
                return e = e.toLowerCase(), !(!l[e] || 0 === l[e].length)
            }
        };
    $m.isNative = function(e) {
        return !!jm[e.toLowerCase()]
    };
    var Wm, Km = function(n) {
            return n._eventDispatcher || (n._eventDispatcher = new $m({
                scope: n,
                toggleEvent: function(e, t) {
                    $m.isNative(e) && n.toggleNativeEvent && n.toggleNativeEvent(e, t)
                }
            })), n._eventDispatcher
        },
        Xm = {
            fire: function(e, t, n) {
                if (this.removed && "remove" !== e) return t;
                if (t = Km(this).fire(e, t, n), !1 !== n && this.parent)
                    for (var r = this.parent(); r && !t.isPropagationStopped();) r.fire(e, t, !1), r = r.parent();
                return t
            },
            on: function(e, t, n) {
                return Km(this).on(e, t, n)
            },
            off: function(e, t) {
                return Km(this).off(e, t)
            },
            once: function(e, t) {
                return Km(this).once(e, t)
            },
            hasEventListeners: function(e) {
                return Km(this).has(e)
            }
        },
        Ym = function(e, t) {
            var n = lr.get(e, t);
            return n === undefined || "" === n ? [] : n.split(" ")
        },
        Gm = Ym,
        Jm = function(e, t, n) {
            var r = Ym(e, t).concat([n]);
            lr.set(e, t, r.join(" "))
        },
        Qm = function(e, t, n) {
            var r = H.filter(Ym(e, t), function(e) {
                return e !== n
            });
            0 < r.length ? lr.set(e, t, r.join(" ")) : lr.remove(e, t)
        },
        Zm = function(e) {
            return Gm(e, "class")
        },
        ep = function(e, t) {
            return Jm(e, "class", t)
        },
        tp = function(e, t) {
            return Qm(e, "class", t)
        },
        np = Zm,
        rp = ep,
        op = tp,
        ip = function(e, t) {
            H.contains(Zm(e), t) ? tp(e, t) : ep(e, t)
        },
        ap = function(e) {
            return e.dom().classList !== undefined
        },
        up = function(e, t) {
            return ap(e) && e.dom().classList.contains(t)
        },
        sp = {
            add: function(e, t) {
                ap(e) ? e.dom().classList.add(t) : rp(e, t)
            },
            remove: function(e, t) {
                var n;
                ap(e) ? e.dom().classList.remove(t) : op(e, t), 0 === (ap(n = e) ? n.dom().classList : np(n)).length && lr.remove(n, "class")
            },
            toggle: function(e, t) {
                return ap(e) ? e.dom().classList.toggle(t) : ip(e, t)
            },
            toggler: function(e, t) {
                var n, r, o, i, a, u, s = ap(e),
                    c = e.dom().classList;
                return n = function() {
                    s ? c.remove(t) : op(e, t)
                }, r = function() {
                    s ? c.add(t) : rp(e, t)
                }, o = up(e, t), i = o || !1, {
                    on: a = function() {
                        r(), i = !0
                    },
                    off: u = function() {
                        n(), i = !1
                    },
                    toggle: function() {
                        (i ? u : a)()
                    },
                    isOn: function() {
                        return i
                    }
                }
            },
            has: up
        },
        cp = function(e, t) {
            return e.fire("PreProcess", t)
        },
        lp = function(e, t) {
            return e.fire("PostProcess", t)
        },
        fp = function(e) {
            return e.fire("remove")
        },
        dp = function(e, t) {
            return e.fire("SwitchMode", {
                mode: t
            })
        },
        mp = function(e, t, n, r) {
            e.fire("ObjectResizeStart", {
                target: t,
                width: n,
                height: r
            })
        },
        pp = function(e, t, n, r) {
            e.fire("ObjectResized", {
                target: t,
                width: n,
                height: r
            })
        },
        gp = function(e, t, n) {
            try {
                e.getDoc().execCommand(t, !1, n)
            } catch (r) {}
        },
        hp = function(e, t) {
            var n, r, o;
            n = Vn.fromDom(e.getBody()), r = "mce-content-readonly", o = t, sp.has(n, r) && !1 === o ? sp.remove(n, r) : o && sp.add(n, r), t ? (e.selection.controlSelection.hideResizeRect(), e.readonly = !0, e.getBody().contentEditable = "false") : (e.readonly = !1, e.getBody().contentEditable = "true", gp(e, "StyleWithCSS", !1), gp(e, "enableInlineTableEditing", !1), gp(e, "enableObjectResizing", !1), e.focus(), e.nodeChanged())
        },
        vp = function(e) {
            return e.readonly ? "readonly" : "design"
        },
        yp = vi.DOM,
        bp = function(e, t) {
            return "selectionchange" === t ? e.getDoc() : !e.inline && /^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t) ? e.getDoc().documentElement : e.settings.event_root ? (e.eventRoot || (e.eventRoot = yp.select(e.settings.event_root)[0]), e.eventRoot) : e.getBody()
        },
        Cp = function(e, t, n) {
            var r;
            (r = e).hidden || r.readonly ? !0 === e.readonly && n.preventDefault() : e.fire(t, n)
        },
        xp = function(i, a) {
            var e, t;
            if (i.delegates || (i.delegates = {}), !i.delegates[a] && !i.removed)
                if (e = bp(i, a), i.settings.event_root) {
                    if (Wm || (Wm = {}, i.editorManager.on("removeEditor", function() {
                            var e;
                            if (!i.editorManager.activeEditor && Wm) {
                                for (e in Wm) i.dom.unbind(bp(i, e));
                                Wm = null
                            }
                        })), Wm[a]) return;
                    t = function(e) {
                        for (var t = e.target, n = i.editorManager.get(), r = n.length; r--;) {
                            var o = n[r].getBody();
                            (o === t || yp.isChildOf(t, o)) && Cp(n[r], a, e)
                        }
                    }, Wm[a] = t, yp.bind(e, a, t)
                } else t = function(e) {
                    Cp(i, a, e)
                }, yp.bind(e, a, t), i.delegates[a] = t
        },
        wp = {
            bindPendingEventDelegates: function() {
                var t = this;
                It.each(t._pendingNativeEvents, function(e) {
                    xp(t, e)
                })
            },
            toggleNativeEvent: function(e, t) {
                var n = this;
                "focus" !== e && "blur" !== e && (t ? n.initialized ? xp(n, e) : n._pendingNativeEvents ? n._pendingNativeEvents.push(e) : n._pendingNativeEvents = [e] : n.initialized && (n.dom.unbind(bp(n, e), e, n.delegates[e]), delete n.delegates[e]))
            },
            unbindAllNativeEvents: function() {
                var e, t = this,
                    n = t.getBody(),
                    r = t.dom;
                if (t.delegates) {
                    for (e in t.delegates) t.dom.unbind(bp(t, e), e, t.delegates[e]);
                    delete t.delegates
                }!t.inline && n && r && (n.onload = null, r.unbind(t.getWin()), r.unbind(t.getDoc())), r && (r.unbind(n), r.unbind(t.getContainer()))
            }
        },
        Np = wp = It.extend({}, Xm, wp),
        Ep = It.each,
        Sp = It.explode,
        kp = {
            f9: 120,
            f10: 121,
            f11: 122
        },
        Tp = It.makeMap("alt,ctrl,shift,meta,access");

    function Ap(i) {
        var a = {},
            r = [],
            u = function(e) {
                var t, n, r = {};
                for (n in Ep(Sp(e, "+"), function(e) {
                        e in Tp ? r[e] = !0 : /^[0-9]{2,}$/.test(e) ? r.keyCode = parseInt(e, 10) : (r.charCode = e.charCodeAt(0), r.keyCode = kp[e] || e.toUpperCase().charCodeAt(0))
                    }), t = [r.keyCode], Tp) r[n] ? t.push(n) : r[n] = !1;
                return r.id = t.join(","), r.access && (r.alt = !0, ve.mac ? r.ctrl = !0 : r.shift = !0), r.meta && (ve.mac ? r.meta = !0 : (r.ctrl = !0, r.meta = !1)), r
            },
            s = function(e, t, n, r) {
                var o;
                return (o = It.map(Sp(e, ">"), u))[o.length - 1] = It.extend(o[o.length - 1], {
                    func: n,
                    scope: r || i
                }), It.extend(o[0], {
                    desc: i.translate(t),
                    subpatterns: o.slice(1)
                })
            },
            o = function(e, t) {
                return !!t && t.ctrl === e.ctrlKey && t.meta === e.metaKey && t.alt === e.altKey && t.shift === e.shiftKey && !!(e.keyCode === t.keyCode || e.charCode && e.charCode === t.charCode) && (e.preventDefault(), !0)
            },
            c = function(e) {
                return e.func ? e.func.call(e.scope) : null
            };
        i.on("keyup keypress keydown", function(t) {
            var e, n;
            ((n = t).altKey || n.ctrlKey || n.metaKey || "keydown" === (e = t).type && 112 <= e.keyCode && e.keyCode <= 123) && !t.isDefaultPrevented() && (Ep(a, function(e) {
                if (o(t, e)) return r = e.subpatterns.slice(0), "keydown" === t.type && c(e), !0
            }), o(t, r[0]) && (1 === r.length && "keydown" === t.type && c(r[0]), r.shift()))
        }), this.add = function(e, n, r, o) {
            var t;
            return "string" == typeof(t = r) ? r = function() {
                i.execCommand(t, !1, null)
            } : It.isArray(t) && (r = function() {
                i.execCommand(t[0], t[1], t[2])
            }), Ep(Sp(It.trim(e.toLowerCase())), function(e) {
                var t = s(e, n, r, o);
                a[t.id] = t
            }), !0
        }, this.remove = function(e) {
            var t = s(e);
            return !!a[t.id] && (delete a[t.id], !0)
        }
    }
    var Rp = function(e) {
            var t = e !== undefined ? e.dom() : document;
            return A.from(t.activeElement).map(Vn.fromDom)
        },
        _p = function(e) {
            var t = $r.owner(e).dom();
            return e.dom() === t.activeElement
        },
        Bp = function(t) {
            return Rp($r.owner(t)).filter(function(e) {
                return t.dom().contains(e.dom())
            })
        },
        Dp = function(t, e) {
            return (n = e, n.collapsed ? A.from(ua(n.startContainer, n.startOffset)).map(Vn.fromDom) : A.none()).bind(function(e) {
                return Co(e) ? A.some(e) : !1 === Mr.contains(t, e) ? A.some(t) : A.none()
            });
            var n
        },
        Op = function(t, e) {
            Dp(Vn.fromDom(t.getBody()), e).bind(function(e) {
                return Qa.firstPositionIn(e.dom())
            }).fold(function() {
                t.selection.normalize()
            }, function(e) {
                return t.selection.setRng(e.toRange())
            })
        },
        Pp = function(e) {
            if (e.setActive) try {
                e.setActive()
            } catch (t) {
                e.focus()
            } else e.focus()
        },
        Lp = function(e) {
            var t, n = e.getBody();
            return n && (t = Vn.fromDom(n), _p(t) || Bp(t).isSome())
        },
        Ip = function(e) {
            return e.inline ? Lp(e) : (t = e).iframeElement && _p(Vn.fromDom(t.iframeElement));
            var t
        },
        Mp = function(e) {
            return e.editorManager.setActive(e)
        },
        Fp = function(e, t) {
            e.removed || (t ? Mp(e) : function(t) {
                var e = t.selection,
                    n = t.settings.content_editable,
                    r = t.getBody(),
                    o = e.getRng();
                t.quirks.refreshContentEditable();
                var i, a, u = (i = t, a = e.getNode(), i.dom.getParent(a, function(e) {
                    return "true" === i.dom.getContentEditable(e)
                }));
                if (t.$.contains(r, u)) return Pp(u), Op(t, o), Mp(t);
                t.bookmark !== undefined && !1 === Ip(t) && Mm(t).each(function(e) {
                    t.selection.setRng(e), o = e
                }), n || (ve.opera || Pp(r), t.getWin().focus()), (ve.gecko || n) && (Pp(r), Op(t, o)), Mp(t)
            }(e))
        },
        zp = Ip,
        Up = function(e, t) {
            return t.dom()[e]
        },
        qp = function(e, t) {
            return parseInt(br(t, e), 10)
        },
        Vp = V.curry(Up, "clientWidth"),
        Hp = V.curry(Up, "clientHeight"),
        jp = V.curry(qp, "margin-top"),
        $p = V.curry(qp, "margin-left"),
        Wp = function(e, t, n) {
            var r, o, i, a, u, s, c, l, f, d, m = Vn.fromDom(e.getBody()),
                p = e.inline ? m : $r.documentElement(m),
                g = (r = e.inline, i = t, a = n, u = (o = p).dom().getBoundingClientRect(), {
                    x: i - (r ? u.left + o.dom().clientLeft + $p(o) : 0),
                    y: a - (r ? u.top + o.dom().clientTop + jp(o) : 0)
                });
            return c = g.x, l = g.y, f = Vp(s = p), d = Hp(s), 0 <= c && 0 <= l && c <= f && l <= d
        },
        Kp = function(e) {
            var t, n = e.inline ? e.getBody() : e.getContentAreaContainer();
            return (t = n, A.from(t).map(Vn.fromDom)).map(function(e) {
                return Mr.contains($r.owner(e), e)
            }).getOr(!1)
        };

    function Xp(n) {
        var t, o = [],
            i = function() {
                var e, t = n.theme;
                return t && t.getNotificationManagerImpl ? t.getNotificationManagerImpl() : {
                    open: e = function() {
                        throw new Error("Theme did not provide a NotificationManager implementation.")
                    },
                    close: e,
                    reposition: e,
                    getArgs: e
                }
            },
            a = function() {
                0 < o.length && i().reposition(o)
            },
            u = function(t) {
                H.findIndex(o, function(e) {
                    return e === t
                }).each(function(e) {
                    o.splice(e, 1)
                })
            },
            r = function(r) {
                if (!n.removed && Kp(n)) return H.find(o, function(e) {
                    return t = i().getArgs(e), n = r, !(t.type !== n.type || t.text !== n.text || t.progressBar || t.timeout || n.progressBar || n.timeout);
                    var t, n
                }).getOrThunk(function() {
                    n.editorManager.setActive(n);
                    var e, t = i().open(r, function() {
                        u(t), a()
                    });
                    return e = t, o.push(e), a(), t
                })
            };
        return (t = n).on("SkinLoaded", function() {
            var e = t.settings.service_message;
            e && r({
                text: e,
                type: "warning",
                timeout: 0,
                icon: ""
            })
        }), t.on("ResizeEditor ResizeWindow", function() {
            we.requestAnimationFrame(a)
        }), t.on("remove", function() {
            H.each(o, function(e) {
                i().close(e)
            })
        }), {
            open: r,
            close: function() {
                A.from(o[0]).each(function(e) {
                    i().close(e), u(e), a()
                })
            },
            getNotifications: function() {
                return o
            }
        }
    }

    function Yp(r) {
        var o = [],
            i = function() {
                var e, t = r.theme;
                return t && t.getWindowManagerImpl ? t.getWindowManagerImpl() : {
                    open: e = function() {
                        throw new Error("Theme did not provide a WindowManager implementation.")
                    },
                    alert: e,
                    confirm: e,
                    close: e,
                    getParams: e,
                    setParams: e
                }
            },
            a = function(e, t) {
                return function() {
                    return t ? t.apply(e, arguments) : undefined
                }
            },
            u = function(e) {
                var t;
                o.push(e), t = e, r.fire("OpenWindow", {
                    win: t
                })
            },
            s = function(n) {
                H.findIndex(o, function(e) {
                    return e === n
                }).each(function(e) {
                    var t;
                    o.splice(e, 1), t = n, r.fire("CloseWindow", {
                        win: t
                    }), 0 === o.length && r.focus()
                })
            },
            e = function() {
                return A.from(o[o.length - 1])
            };
        return r.on("remove", function() {
            H.each(o.slice(0), function(e) {
                i().close(e)
            })
        }), {
            windows: o,
            open: function(e, t) {
                r.editorManager.setActive(r), Lm(r);
                var n = i().open(e, t, s);
                return u(n), n
            },
            alert: function(e, t, n) {
                var r = i().alert(e, a(n || this, t), s);
                u(r)
            },
            confirm: function(e, t, n) {
                var r = i().confirm(e, a(n || this, t), s);
                u(r)
            },
            close: function() {
                e().each(function(e) {
                    i().close(e), s(e)
                })
            },
            getParams: function() {
                return e().map(i().getParams).getOr(null)
            },
            setParams: function(t) {
                e().each(function(e) {
                    i().setParams(e, t)
                })
            },
            getWindows: function() {
                return o
            }
        }
    }
    var Gp = Si.PluginManager,
        Jp = function(e, t) {
            var n = function(e, t) {
                for (var n in Gp.urls)
                    if (Gp.urls[n] + "/plugin" + t + ".js" === e) return n;
                return null
            }(t, e.suffix);
            return n ? "Failed to load plugin: " + n + " from url " + t : "Failed to load plugin url: " + t
        },
        Qp = function(e, t) {
            e.notificationManager.open({
                type: "error",
                text: t
            })
        },
        Zp = function(e, t) {
            e._skinLoaded ? Qp(e, t) : e.on("SkinLoaded", function() {
                Qp(e, t)
            })
        },
        eg = function(e, t) {
            Zp(e, Jp(e, t))
        },
        tg = function(e, t) {
            Zp(e, "Failed to upload image: " + t)
        },
        ng = Zp,
        rg = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            var r = window.console;
            r && (r.error ? r.error.apply(r, arguments) : r.log.apply(r, arguments))
        },
        og = Si.PluginManager,
        ig = Si.ThemeManager;

    function ag() {
        return new(W.getOrDie("XMLHttpRequest"))
    }

    function ug(u, s) {
        var r = {},
            n = function(e, r, o, t) {
                var i, n;
                (i = new ag).open("POST", s.url), i.withCredentials = s.credentials, i.upload.onprogress = function(e) {
                    t(e.loaded / e.total * 100)
                }, i.onerror = function() {
                    o("Image upload failed due to a XHR Transport error. Code: " + i.status)
                }, i.onload = function() {
                    var e, t, n;
                    i.status < 200 || 300 <= i.status ? o("HTTP Error: " + i.status) : (e = JSON.parse(i.responseText)) && "string" == typeof e.location ? r((t = s.basePath, n = e.location, t ? t.replace(/\/$/, "") + "/" + n.replace(/^\//, "") : n)) : o("Invalid JSON: " + i.responseText)
                }, (n = new FormData).append("file", e.blob(), e.filename()), i.send(n)
            },
            c = function(e, t) {
                return {
                    url: t,
                    blobInfo: e,
                    status: !0
                }
            },
            l = function(e, t) {
                return {
                    url: "",
                    blobInfo: e,
                    status: !1,
                    error: t
                }
            },
            f = function(e, t) {
                It.each(r[e], function(e) {
                    e(t)
                }), delete r[e]
            },
            o = function(e, n) {
                return e = It.grep(e, function(e) {
                    return !u.isUploaded(e.blobUri())
                }), ye.all(It.map(e, function(e) {
                    return u.isPending(e.blobUri()) ? (t = e.blobUri(), new ye(function(e) {
                        r[t] = r[t] || [], r[t].push(e)
                    })) : (o = e, i = s.handler, a = n, u.markPending(o.blobUri()), new ye(function(t) {
                        var n;
                        try {
                            var r = function() {
                                n && n.close()
                            };
                            i(o, function(e) {
                                r(), u.markUploaded(o.blobUri(), e), f(o.blobUri(), c(o, e)), t(c(o, e))
                            }, function(e) {
                                r(), u.removeFailed(o.blobUri()), f(o.blobUri(), l(o, e)), t(l(o, e))
                            }, function(e) {
                                e < 0 || 100 < e || (n || (n = a()), n.progressBar.value(e))
                            })
                        } catch (e) {
                            t(l(o, e.message))
                        }
                    }));
                    var o, i, a, t
                }))
            };
        return s = It.extend({
            credentials: !1,
            handler: n
        }, s), {
            upload: function(e, t) {
                return s.url || s.handler !== n ? o(e, t) : new ye(function(e) {
                    e([])
                })
            }
        }
    }

    function sg(e, t) {
        return new(W.getOrDie("Blob"))(e, t)
    }

    function cg() {
        return new(W.getOrDie("FileReader"))
    }

    function lg(e) {
        return new(W.getOrDie("Uint8Array"))(e)
    }
    var fg = function(e) {
            return W.getOrDie("atob")(e)
        },
        dg = function(e) {
            var t, n;
            return e = decodeURIComponent(e).split(","), (n = /data:([^;]+)/.exec(e[0])) && (t = n[1]), {
                type: t,
                data: e[1]
            }
        },
        mg = function(e) {
            return 0 === e.indexOf("blob:") ? (i = e, new ye(function(e, t) {
                var n = function() {
                    t("Cannot convert " + i + " to Blob. Resource might not exist or is inaccessible.")
                };
                try {
                    var r = new ag;
                    r.open("GET", i, !0), r.responseType = "blob", r.onload = function() {
                        200 === this.status ? e(this.response) : n()
                    }, r.onerror = n, r.send()
                } catch (o) {
                    n()
                }
            })) : 0 === e.indexOf("data:") ? (o = e, new ye(function(e) {
                var t, n, r;
                o = dg(o);
                try {
                    t = fg(o.data)
                } catch (Dw) {
                    return void e(new sg([]))
                }
                for (n = new lg(t.length), r = 0; r < n.length; r++) n[r] = t.charCodeAt(r);
                e(new sg([n], {
                    type: o.type
                }))
            })) : null;
            var i, o
        },
        pg = function(n) {
            return new ye(function(e) {
                var t = new cg;
                t.onloadend = function() {
                    e(t.result)
                }, t.readAsDataURL(n)
            })
        },
        gg = dg,
        hg = 0,
        vg = function(e) {
            return (e || "blobid") + hg++
        },
        yg = function(n, r, o, t) {
            var i, a;
            0 !== r.src.indexOf("blob:") ? (i = gg(r.src).data, (a = n.findFirst(function(e) {
                return e.base64() === i
            })) ? o({
                image: r,
                blobInfo: a
            }) : mg(r.src).then(function(e) {
                a = n.create(vg(), e, i), n.add(a), o({
                    image: r,
                    blobInfo: a
                })
            }, function(e) {
                t(e)
            })) : (a = n.getByUri(r.src)) ? o({
                image: r,
                blobInfo: a
            }) : mg(r.src).then(function(t) {
                pg(t).then(function(e) {
                    i = gg(e).data, a = n.create(vg(), t, i), n.add(a), o({
                        image: r,
                        blobInfo: a
                    })
                })
            }, function(e) {
                t(e)
            })
        },
        bg = function(e) {
            return e ? e.getElementsByTagName("img") : []
        },
        Cg = 0,
        xg = {
            uuid: function(e) {
                return e + Cg++ + (t = function() {
                    return Math.round(4294967295 * Math.random()).toString(36)
                }, "s" + (new Date).getTime().toString(36) + t() + t() + t());
                var t
            }
        };

    function wg(u) {
        var n, o, i, t, e, a, r, s, c, l, f = (n = [], o = da.constant, i = function(e) {
                var t, n, r;
                if (!e.blob || !e.base64) throw new Error("blob and base64 representations of the image are required for BlobInfo to be created");
                return t = e.id || xg.uuid("blobid"), n = e.name || t, {
                    id: o(t),
                    name: o(n),
                    filename: o(n + "." + (r = e.blob.type, {
                        "image/jpeg": "jpg",
                        "image/jpg": "jpg",
                        "image/gif": "gif",
                        "image/png": "png"
                    }[r.toLowerCase()] || "dat")),
                    blob: o(e.blob),
                    base64: o(e.base64),
                    blobUri: o(e.blobUri || X.createObjectURL(e.blob)),
                    uri: o(e.uri)
                }
            }, {
                create: function(e, t, n, r) {
                    return i("object" == typeof e ? e : {
                        id: e,
                        name: r,
                        blob: t,
                        base64: n
                    })
                },
                add: function(e) {
                    t(e.id()) || n.push(e)
                },
                get: t = function(t) {
                    return e(function(e) {
                        return e.id() === t
                    })
                },
                getByUri: function(t) {
                    return e(function(e) {
                        return e.blobUri() === t
                    })
                },
                findFirst: e = function(e) {
                    return Bt.filter(n, e)[0]
                },
                removeByUri: function(t) {
                    n = Bt.filter(n, function(e) {
                        return e.blobUri() !== t || (X.revokeObjectURL(e.blobUri()), !1)
                    })
                },
                destroy: function() {
                    Bt.each(n, function(e) {
                        X.revokeObjectURL(e.blobUri())
                    }), n = []
                }
            }),
            d = u.settings,
            m = (s = {}, c = function(e, t) {
                return {
                    status: e,
                    resultUri: t
                }
            }, {
                hasBlobUri: l = function(e) {
                    return e in s
                },
                getResultUri: function(e) {
                    var t = s[e];
                    return t ? t.resultUri : null
                },
                isPending: function(e) {
                    return !!l(e) && 1 === s[e].status
                },
                isUploaded: function(e) {
                    return !!l(e) && 2 === s[e].status
                },
                markPending: function(e) {
                    s[e] = c(1, null)
                },
                markUploaded: function(e, t) {
                    s[e] = c(2, t)
                },
                removeFailed: function(e) {
                    delete s[e]
                },
                destroy: function() {
                    s = {}
                }
            }),
            p = function(t) {
                return function(e) {
                    return u.selection ? t(e) : []
                }
            },
            g = function(e, t, n) {
                for (var r = 0; - 1 !== (r = e.indexOf(t, r)) && (e = e.substring(0, r) + n + e.substr(r + t.length), r += n.length - t.length + 1), -1 !== r;);
                return e
            },
            h = function(e, t, n) {
                return e = g(e, 'src="' + t + '"', 'src="' + n + '"'), e = g(e, 'data-mce-src="' + t + '"', 'data-mce-src="' + n + '"')
            },
            v = function(t, n) {
                Bt.each(u.undoManager.data, function(e) {
                    "fragmented" === e.type ? e.fragments = Bt.map(e.fragments, function(e) {
                        return h(e, t, n)
                    }) : e.content = h(e.content, t, n)
                })
            },
            y = function() {
                return u.notificationManager.open({
                    text: u.translate("Image uploading..."),
                    type: "info",
                    timeout: -1,
                    progressBar: !0
                })
            },
            b = function(e, t) {
                f.removeByUri(e.src), v(e.src, t), u.$(e).attr({
                    src: d.images_reuse_filename ? t + "?" + (new Date).getTime() : t,
                    "data-mce-src": u.convertURL(t, "src")
                })
            },
            C = function(n) {
                return a || (a = ug(m, {
                    url: d.images_upload_url,
                    basePath: d.images_upload_base_path,
                    credentials: d.images_upload_credentials,
                    handler: d.images_upload_handler
                })), N().then(p(function(r) {
                    var e;
                    return e = Bt.map(r, function(e) {
                        return e.blobInfo
                    }), a.upload(e, y).then(p(function(e) {
                        var t = Bt.map(e, function(e, t) {
                            var n = r[t].image;
                            return e.status && !1 !== u.settings.images_replace_blob_uris ? b(n, e.url) : e.error && tg(u, e.error), {
                                element: n,
                                status: e.status
                            }
                        });
                        return n && n(t), t
                    }))
                }))
            },
            x = function(e) {
                if (!1 !== d.automatic_uploads) return C(e)
            },
            w = function(e) {
                return !d.images_dataimg_filter || d.images_dataimg_filter(e)
            },
            N = function() {
                var o, i, a;
                return r || (o = m, i = f, a = {}, r = {
                    findAll: function(e, n) {
                        var t;
                        n || (n = da.constant(!0)), t = Bt.filter(bg(e), function(e) {
                            var t = e.src;
                            return !!ve.fileApi && !e.hasAttribute("data-mce-bogus") && !e.hasAttribute("data-mce-placeholder") && !(!t || t === ve.transparentSrc) && (0 === t.indexOf("blob:") ? !o.isUploaded(t) : 0 === t.indexOf("data:") && n(e))
                        });
                        var r = Bt.map(t, function(n) {
                            if (a[n.src]) return new ye(function(t) {
                                a[n.src].then(function(e) {
                                    if ("string" == typeof e) return e;
                                    t({
                                        image: n,
                                        blobInfo: e.blobInfo
                                    })
                                })
                            });
                            var e = new ye(function(e, t) {
                                yg(i, n, e, t)
                            }).then(function(e) {
                                return delete a[e.image.src], e
                            })["catch"](function(e) {
                                return delete a[n.src], e
                            });
                            return a[n.src] = e
                        });
                        return ye.all(r)
                    }
                }), r.findAll(u.getBody(), w).then(p(function(e) {
                    return e = Bt.filter(e, function(e) {
                        return "string" != typeof e || (ng(u, e), !1)
                    }), Bt.each(e, function(e) {
                        v(e.image.src, e.blobInfo.blobUri()), e.image.src = e.blobInfo.blobUri(), e.image.removeAttribute("data-mce-src")
                    }), e
                }))
            },
            E = function(e) {
                return e.replace(/src="(blob:[^"]+)"/g, function(e, n) {
                    var t = m.getResultUri(n);
                    if (t) return 'src="' + t + '"';
                    var r = f.getByUri(n);
                    return r || (r = Bt.reduce(u.editorManager.get(), function(e, t) {
                        return e || t.editorUpload && t.editorUpload.blobCache.getByUri(n)
                    }, null)), r ? 'src="data:' + r.blob().type + ";base64," + r.base64() + '"' : e
                })
            };
        return u.on("setContent", function() {
            !1 !== u.settings.automatic_uploads ? x() : N()
        }), u.on("RawSaveContent", function(e) {
            e.content = E(e.content)
        }), u.on("getContent", function(e) {
            e.source_view || "raw" === e.format || (e.content = E(e.content))
        }), u.on("PostRender", function() {
            u.parser.addNodeFilter("img", function(e) {
                Bt.each(e, function(e) {
                    var t = e.attr("src");
                    if (!f.getByUri(t)) {
                        var n = m.getResultUri(t);
                        n && e.attr("src", n)
                    }
                })
            })
        }), {
            blobCache: f,
            uploadImages: C,
            uploadImagesAuto: x,
            scanForImages: N,
            destroy: function() {
                f.destroy(), m.destroy(), r = a = null
            }
        }
    }
    var Ng = function(e, t) {
            return e.hasOwnProperty(t.nodeName)
        },
        Eg = function(e, t) {
            if (Oo.isText(t)) {
                if (0 === t.nodeValue.length) return !0;
                if (/^\s+$/.test(t.nodeValue) && (!t.nextSibling || Ng(e, t.nextSibling))) return !0
            }
            return !1
        },
        Sg = function(e) {
            var t, n, r, o, i, a, u, s, c, l, f, d = e.settings,
                m = e.dom,
                p = e.selection,
                g = e.schema,
                h = g.getBlockElements(),
                v = p.getStart(),
                y = e.getBody();
            if (f = d.forced_root_block, v && Oo.isElement(v) && f && (l = y.nodeName.toLowerCase(), g.isValidChild(l, f.toLowerCase()) && (b = h, C = y, x = v, !H.exists(Hl(Vn.fromDom(x), Vn.fromDom(C)), function(e) {
                    return Ng(b, e.dom())
                })))) {
                var b, C, x, w, N;
                for (n = (t = p.getRng()).startContainer, r = t.startOffset, o = t.endContainer, i = t.endOffset, c = zp(e), v = y.firstChild; v;)
                    if (w = h, N = v, Oo.isText(N) || Oo.isElement(N) && !Ng(w, N) && !Mc(N)) {
                        if (Eg(h, v)) {
                            v = (u = v).nextSibling, m.remove(u);
                            continue
                        }
                        a || (a = m.create(f, e.settings.forced_root_block_attrs), v.parentNode.insertBefore(a, v), s = !0), v = (u = v).nextSibling, a.appendChild(u)
                    } else a = null, v = v.nextSibling;
                s && c && (t.setStart(n, r), t.setEnd(o, i), p.setRng(t), e.nodeChanged())
            }
        },
        kg = function(e) {
            e.settings.forced_root_block && e.on("NodeChange", V.curry(Sg, e))
        },
        Tg = function(t) {
            return $r.firstChild(t).fold(V.constant([t]), function(e) {
                return [t].concat(Tg(e))
            })
        },
        Ag = function(t) {
            return $r.lastChild(t).fold(V.constant([t]), function(e) {
                return "br" === Zn.name(e) ? $r.prevSibling(e).map(function(e) {
                    return [t].concat(Ag(e))
                }).getOr([]) : [t].concat(Ag(e))
            })
        },
        Rg = function(o, e) {
            return ma([(i = e, a = i.startContainer, u = i.startOffset, Oo.isText(a) ? 0 === u ? A.some(Vn.fromDom(a)) : A.none() : A.from(a.childNodes[u]).map(Vn.fromDom)), (t = e, n = t.endContainer, r = t.endOffset, Oo.isText(n) ? r === n.data.length ? A.some(Vn.fromDom(n)) : A.none() : A.from(n.childNodes[r - 1]).map(Vn.fromDom))], function(e, t) {
                var n = H.find(Tg(o), V.curry(Mr.eq, e)),
                    r = H.find(Ag(o), V.curry(Mr.eq, t));
                return n.isSome() && r.isSome()
            }).getOr(!1);
            var t, n, r, i, a, u
        },
        _g = function(e, t, n, r) {
            var o = n,
                i = new ao(n, o),
                a = e.schema.getNonEmptyElements();
            do {
                if (3 === n.nodeType && 0 !== It.trim(n.nodeValue).length) return void(r ? t.setStart(n, 0) : t.setEnd(n, n.nodeValue.length));
                if (a[n.nodeName] && !/^(TD|TH)$/.test(n.nodeName)) return void(r ? t.setStartBefore(n) : "BR" === n.nodeName ? t.setEndBefore(n) : t.setEndAfter(n));
                if (ve.ie && ve.ie < 11 && e.isBlock(n) && e.isEmpty(n)) return void(r ? t.setStart(n, 0) : t.setEnd(n, 0))
            } while (n = r ? i.next() : i.prev());
            "BODY" === o.nodeName && (r ? t.setStart(o, 0) : t.setEnd(o, o.childNodes.length))
        },
        Bg = function(e) {
            var t = e.selection.getSel();
            return t && 0 < t.rangeCount
        };

    function Dg(i) {
        var r, o = [];
        "onselectionchange" in i.getDoc() || i.on("NodeChange Click MouseUp KeyUp Focus", function(e) {
            var t, n;
            n = {
                startContainer: (t = i.selection.getRng()).startContainer,
                startOffset: t.startOffset,
                endContainer: t.endContainer,
                endOffset: t.endOffset
            }, "nodechange" !== e.type && em(n, r) || i.fire("SelectionChange"), r = n
        }), i.on("contextmenu", function() {
            i.fire("SelectionChange")
        }), i.on("SelectionChange", function() {
            var e = i.selection.getStart(!0);
            !e || !ve.range && i.selection.isCollapsed() || Bg(i) && ! function(e) {
                var t, n;
                if ((n = i.$(e).parentsUntil(i.getBody()).add(e)).length === o.length) {
                    for (t = n.length; 0 <= t && n[t] === o[t]; t--);
                    if (-1 === t) return o = n, !0
                }
                return o = n, !1
            }(e) && i.dom.isChildOf(e, i.getBody()) && i.nodeChanged({
                selectionChange: !0
            })
        }), i.on("MouseUp", function(e) {
            !e.isDefaultPrevented() && Bg(i) && ("IMG" === i.selection.getNode().nodeName ? we.setEditorTimeout(i, function() {
                i.nodeChanged()
            }) : i.nodeChanged())
        }), this.nodeChanged = function(e) {
            var t, n, r, o = i.selection;
            i.initialized && o && !i.settings.disable_nodechange && !i.readonly && (r = i.getBody(), (t = o.getStart(!0) || r).ownerDocument === i.getDoc() && i.dom.isChildOf(t, r) || (t = r), n = [], i.dom.getParent(t, function(e) {
                if (e === r) return !0;
                n.push(e)
            }), (e = e || {}).element = t, e.parents = n, i.fire("NodeChange", e))
        }
    }
    var Og, Pg, Lg = function(e) {
            var t, n, r, o;
            return o = e.getBoundingClientRect(), n = (t = e.ownerDocument).documentElement, r = t.defaultView, {
                top: o.top + r.pageYOffset - n.clientTop,
                left: o.left + r.pageXOffset - n.clientLeft
            }
        },
        Ig = function(e, t) {
            return n = (u = e).inline ? Lg(u.getBody()) : {
                left: 0,
                top: 0
            }, a = (i = e).getBody(), r = i.inline ? {
                left: a.scrollLeft,
                top: a.scrollTop
            } : {
                left: 0,
                top: 0
            }, {
                pageX: (o = function(e, t) {
                    if (t.target.ownerDocument !== e.getDoc()) {
                        var n = Lg(e.getContentAreaContainer()),
                            r = (i = (o = e).getBody(), a = o.getDoc().documentElement, u = {
                                left: i.scrollLeft,
                                top: i.scrollTop
                            }, s = {
                                left: i.scrollLeft || a.scrollLeft,
                                top: i.scrollTop || a.scrollTop
                            }, o.inline ? u : s);
                        return {
                            left: t.pageX - n.left + r.left,
                            top: t.pageY - n.top + r.top
                        }
                    }
                    var o, i, a, u, s;
                    return {
                        left: t.pageX,
                        top: t.pageY
                    }
                }(e, t)).left - n.left + r.left,
                pageY: o.top - n.top + r.top
            };
            var n, r, o, i, a, u
        },
        Mg = Oo.isContentEditableFalse,
        Fg = Oo.isContentEditableTrue,
        zg = function(e) {
            e && e.parentNode && e.parentNode.removeChild(e)
        },
        Ug = function(u, s) {
            return function(e) {
                if (0 === e.button) {
                    var t = Bt.find(s.dom.getParents(e.target), da.or(Mg, Fg));
                    if (i = s.getBody(), Mg(a = t) && a !== i) {
                        var n = s.dom.getPos(t),
                            r = s.getBody(),
                            o = s.getDoc().documentElement;
                        u.element = t, u.screenX = e.screenX, u.screenY = e.screenY, u.maxX = (s.inline ? r.scrollWidth : o.offsetWidth) - 2, u.maxY = (s.inline ? r.scrollHeight : o.offsetHeight) - 2, u.relX = e.pageX - n.x, u.relY = e.pageY - n.y, u.width = t.offsetWidth, u.height = t.offsetHeight, u.ghost = function(e, t, n, r) {
                            var o = t.cloneNode(!0);
                            e.dom.setStyles(o, {
                                width: n,
                                height: r
                            }), e.dom.setAttrib(o, "data-mce-selected", null);
                            var i = e.dom.create("div", {
                                "class": "mce-drag-container",
                                "data-mce-bogus": "all",
                                unselectable: "on",
                                contenteditable: "false"
                            });
                            return e.dom.setStyles(i, {
                                position: "absolute",
                                opacity: .5,
                                overflow: "hidden",
                                border: 0,
                                padding: 0,
                                margin: 0,
                                width: n,
                                height: r
                            }), e.dom.setStyles(o, {
                                margin: 0,
                                boxSizing: "border-box"
                            }), i.appendChild(o), i
                        }(s, t, u.width, u.height)
                    }
                }
                var i, a
            }
        },
        qg = function(l, f) {
            return function(e) {
                if (l.dragging && (s = (i = f).selection, c = s.getSel().getRangeAt(0).startContainer, a = 3 === c.nodeType ? c.parentNode : c, u = l.element, a !== u && !i.dom.isChildOf(a, u) && !Mg(a))) {
                    var t = (r = l.element, (o = r.cloneNode(!0)).removeAttribute("data-mce-selected"), o),
                        n = f.fire("drop", {
                            targetClone: t,
                            clientX: e.clientX,
                            clientY: e.clientY
                        });
                    n.isDefaultPrevented() || (t = n.targetClone, f.undoManager.transact(function() {
                        zg(l.element), f.insertContent(f.dom.getOuterHTML(t)), f._selectionOverrides.hideFakeCaret()
                    }))
                }
                var r, o, i, a, u, s, c;
                Vg(l)
            }
        },
        Vg = function(e) {
            e.dragging = !1, e.element = null, zg(e.ghost)
        },
        Hg = function(e) {
            var t, n, r, o, i, a, g, h, v, u, s, c = {};
            t = vi.DOM, a = document, n = Ug(c, e), g = c, h = e, v = we.throttle(function(e, t) {
                h._selectionOverrides.hideFakeCaret(), h.selection.placeCaretAt(e, t)
            }, 0), r = function(e) {
                var t, n, r, o, i, a, u, s, c, l, f, d, m = Math.max(Math.abs(e.screenX - g.screenX), Math.abs(e.screenY - g.screenY));
                if (g.element && !g.dragging && 10 < m) {
                    if (h.fire("dragstart", {
                            target: g.element
                        }).isDefaultPrevented()) return;
                    g.dragging = !0, h.focus()
                }
                if (g.dragging) {
                    var p = (f = g, {
                        pageX: (d = Ig(h, e)).pageX - f.relX,
                        pageY: d.pageY + 5
                    });
                    c = g.ghost, l = h.getBody(), c.parentNode !== l && l.appendChild(c), t = g.ghost, n = p, r = g.width, o = g.height, i = g.maxX, a = g.maxY, s = u = 0, t.style.left = n.pageX + "px", t.style.top = n.pageY + "px", n.pageX + r > i && (u = n.pageX + r - i), n.pageY + o > a && (s = n.pageY + o - a), t.style.width = r - u + "px", t.style.height = o - s + "px", v(e.clientX, e.clientY)
                }
            }, o = qg(c, e), u = c, i = function() {
                u.dragging && s.fire("dragend"), Vg(u)
            }, (s = e).on("mousedown", n), e.on("mousemove", r), e.on("mouseup", o), t.bind(a, "mousemove", r), t.bind(a, "mouseup", i), e.on("remove", function() {
                t.unbind(a, "mousemove", r), t.unbind(a, "mouseup", i)
            })
        },
        jg = function(e) {
            var n;
            Hg(e), (n = e).on("drop", function(e) {
                var t = "undefined" != typeof e.clientX ? n.getDoc().elementFromPoint(e.clientX, e.clientY) : null;
                (Mg(t) || Mg(n.dom.getContentEditableParent(t))) && e.preventDefault()
            })
        },
        $g = function(e) {
            return Bt.reduce(e, function(e, t) {
                return e.concat(function(t) {
                    var e = function(e) {
                        return Bt.map(e, function(e) {
                            return (e = ta(e)).node = t, e
                        })
                    };
                    if (Oo.isElement(t)) return e(t.getClientRects());
                    if (Oo.isText(t)) {
                        var n = t.ownerDocument.createRange();
                        return n.setStart(t, 0), n.setEnd(t, t.data.length), e(n.getClientRects())
                    }
                }(t))
            }, [])
        };
    (Pg = Og || (Og = {}))[Pg.Up = -1] = "Up", Pg[Pg.Down = 1] = "Down";
    var Wg = function(o, i, a, e, u, t) {
            var n, s, c = 0,
                l = [],
                r = function(e) {
                    var t, n, r;
                    for (r = $g([e]), -1 === o && (r = r.reverse()), t = 0; t < r.length; t++)
                        if (n = r[t], !a(n, s)) {
                            if (0 < l.length && i(n, Bt.last(l)) && c++, n.line = c, u(n)) return !0;
                            l.push(n)
                        }
                };
            return (s = Bt.last(t.getClientRects())) && (r(n = t.getNode()), function(e, t, n, r) {
                for (; r = vs(r, e, Zi, t);)
                    if (n(r)) return
            }(o, e, r, n)), l
        },
        Kg = V.curry(Wg, Og.Up, oa, ia),
        Xg = V.curry(Wg, Og.Down, ia, oa),
        Yg = function(n) {
            return function(e) {
                return t = n, e.line > t;
                var t
            }
        },
        Gg = function(n) {
            return function(e) {
                return t = n, e.line === t;
                var t
            }
        },
        Jg = Oo.isContentEditableFalse,
        Qg = vs,
        Zg = function(e, t) {
            return Math.abs(e.left - t)
        },
        eh = function(e, t) {
            return Math.abs(e.right - t)
        },
        th = function(e, t) {
            return e >= t.left && e <= t.right
        },
        nh = function(e, o) {
            return Bt.reduce(e, function(e, t) {
                var n, r;
                return n = Math.min(Zg(e, o), eh(e, o)), r = Math.min(Zg(t, o), eh(t, o)), th(o, t) ? t : th(o, e) ? e : r === n && Jg(t.node) ? t : r < n ? t : e
            })
        },
        rh = function(e, t, n, r) {
            for (; r = Qg(r, e, Zi, t);)
                if (n(r)) return
        },
        oh = function(e, t, n) {
            var r, o, i, a, u, s, c, l, f = $g((o = e, Bt.filter(Bt.toArray(o.getElementsByTagName("*")), as))),
                d = Bt.filter(f, function(e) {
                    return n >= e.top && n <= e.bottom
                });
            return (r = nh(d, t)) && (r = nh((u = e, l = function(t, e) {
                var n;
                return n = Bt.filter($g([e]), function(e) {
                    return !t(e, s)
                }), c = c.concat(n), 0 === n.length
            }, (c = []).push(s = r), rh(Og.Up, u, V.curry(l, oa), s.node), rh(Og.Down, u, V.curry(l, ia), s.node), c), t)) && as(r.node) ? (a = t, {
                node: (i = r).node,
                before: Zg(i, a) < eh(i, a)
            }) : null
        },
        ih = function(i, a, e) {
            return !e.collapsed && H.foldl(e.getClientRects(), function(e, t) {
                return e || (o = a, (r = i) >= (n = t).left && r <= n.right && o >= n.top && o <= n.bottom);
                var n, r, o
            }, !1)
        },
        ah = function(t, n) {
            var r = null;
            return {
                cancel: function() {
                    null !== r && (clearTimeout(r), r = null)
                },
                throttle: function() {
                    var e = arguments;
                    null === r && (r = setTimeout(function() {
                        t.apply(null, e), e = r = null
                    }, n))
                }
            }
        },
        uh = function(t) {
            var e = ah(function() {
                if (!t.removed && t.selection.getRng().collapsed) {
                    var e = ou(t, t.selection.getRng(), !1);
                    t.selection.setRng(e)
                }
            }, 0);
            t.on("focus", function() {
                e.throttle()
            }), t.on("blur", function() {
                e.cancel()
            })
        },
        sh = {
            BACKSPACE: 8,
            DELETE: 46,
            DOWN: 40,
            ENTER: 13,
            LEFT: 37,
            RIGHT: 39,
            SPACEBAR: 32,
            TAB: 9,
            UP: 38,
            modifierPressed: function(e) {
                return e.shiftKey || e.ctrlKey || e.altKey || this.metaKeyPressed(e)
            },
            metaKeyPressed: function(e) {
                return ve.mac ? e.metaKey : e.ctrlKey && !e.altKey
            }
        },
        ch = Oo.isContentEditableTrue,
        lh = Oo.isContentEditableFalse,
        fh = Bs,
        dh = _s,
        mh = function(e, t) {
            for (var n = e.getBody(); t && t !== n;) {
                if (ch(t) || lh(t)) return t;
                t = t.parentNode
            }
            return null
        },
        ph = function(p) {
            var g, e, t, a = p.getBody(),
                o = is(p.getBody(), function(e) {
                    return p.dom.isBlock(e)
                }, function() {
                    return zp(p)
                }),
                h = "sel-" + p.dom.uniqueId(),
                u = function(e) {
                    e && p.selection.setRng(e)
                },
                s = function() {
                    return p.selection.getRng()
                },
                v = function(e, t, n, r) {
                    return void 0 === r && (r = !0), p.fire("ShowCaret", {
                        target: t,
                        direction: e,
                        before: n
                    }).isDefaultPrevented() ? null : (r && p.selection.scrollIntoView(t, -1 === e), o.show(n, t))
                },
                y = function(e, t) {
                    return t = Ss(e, a, t), -1 === e ? La.fromRangeStart(t) : La.fromRangeEnd(t)
                },
                n = function(e) {
                    return Li(e) || Ui(e) || qi(e)
                },
                b = function(e) {
                    return n(e.startContainer) || n(e.endContainer)
                },
                c = function(e, t) {
                    var n, r, o, i, a, u, s, c, l, f, d = p.$,
                        m = p.dom;
                    if (!e) return null;
                    if (e.collapsed) {
                        if (!b(e))
                            if (!1 === t) {
                                if (c = y(-1, e), as(c.getNode(!0))) return v(-1, c.getNode(!0), !1, !1);
                                if (as(c.getNode())) return v(-1, c.getNode(), !c.isAtEnd(), !1)
                            } else {
                                if (c = y(1, e), as(c.getNode())) return v(1, c.getNode(), !c.isAtEnd(), !1);
                                if (as(c.getNode(!0))) return v(1, c.getNode(!0), !1, !1)
                            }
                        return null
                    }
                    return i = e.startContainer, a = e.startOffset, u = e.endOffset, 3 === i.nodeType && 0 === a && lh(i.parentNode) && (i = i.parentNode, a = m.nodeIndex(i), i = i.parentNode), 1 !== i.nodeType ? null : (u === a + 1 && (n = i.childNodes[a]), lh(n) ? (l = f = n.cloneNode(!0), (s = p.fire("ObjectSelected", {
                        target: n,
                        targetClone: l
                    })).isDefaultPrevented() ? null : (r = Tl(Vn.fromDom(p.getBody()), "#" + h).fold(function() {
                        return d([])
                    }, function(e) {
                        return d([e.dom()])
                    }), l = s.targetClone, 0 === r.length && (r = d('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>').attr("id", h)).appendTo(p.getBody()), e = p.dom.createRng(), l === f && ve.ie ? (r.empty().append('<p style="font-size: 0" data-mce-bogus="all">\xa0</p>').append(l), e.setStartAfter(r[0].firstChild.firstChild), e.setEndAfter(l)) : (r.empty().append("\xa0").append(l).append("\xa0"), e.setStart(r[0].firstChild, 1), e.setEnd(r[0].lastChild, 0)), r.css({
                        top: m.getPos(n, p.getBody()).y
                    }), r[0].focus(), (o = p.selection.getSel()).removeAllRanges(), o.addRange(e), H.each(hu(Vn.fromDom(p.getBody()), "*[data-mce-selected]"), function(e) {
                        lr.remove(e, "data-mce-selected")
                    }), n.setAttribute("data-mce-selected", "1"), g = n, C(), e)) : null)
                },
                l = function() {
                    g && g.removeAttribute("data-mce-selected"), Tl(Vn.fromDom(p.getBody()), "#" + h).each(Hc.remove), g = null
                },
                C = function() {
                    o.hide()
                };
            return ve.ceFalse && (function() {
                p.on("mouseup", function(e) {
                    var t = s();
                    t.collapsed && Wp(p, e.clientX, e.clientY) && u(ru(p, t, !1))
                }), p.on("click", function(e) {
                    var t;
                    (t = mh(p, e.target)) && (lh(t) && (e.preventDefault(), p.focus()), ch(t) && p.dom.isChildOf(t, p.selection.getNode()) && l())
                }), p.on("blur NewBlock", function() {
                    l()
                }), p.on("ResizeWindow FullscreenStateChanged", function() {
                    return o.reposition()
                });
                var n, r, i = function(e, t) {
                    var n, r, o = p.dom.getParent(e, p.dom.isBlock),
                        i = p.dom.getParent(t, p.dom.isBlock);
                    return !(!o || !p.dom.isChildOf(o, i) || !1 !== lh(mh(p, o))) || o && (n = o, r = i, !(p.dom.getParent(n, p.dom.isBlock) === p.dom.getParent(r, p.dom.isBlock))) && function(e) {
                        var t = Ys(e);
                        if (!e.firstChild) return !1;
                        var n = La.before(e.firstChild),
                            r = t.next(n);
                        return r && !dh(r) && !fh(r)
                    }(o)
                };
                r = !1, (n = p).on("touchstart", function() {
                    r = !1
                }), n.on("touchmove", function() {
                    r = !0
                }), n.on("touchend", function(e) {
                    var t = mh(n, e.target);
                    lh(t) && (r || (e.preventDefault(), c(nu(n, t))))
                }), p.on("mousedown", function(e) {
                    var t, n = e.target;
                    if ((n === a || "HTML" === n.nodeName || p.dom.isChildOf(n, a)) && !1 !== Wp(p, e.clientX, e.clientY))
                        if (t = mh(p, n)) lh(t) ? (e.preventDefault(), c(nu(p, t))) : (l(), ch(t) && e.shiftKey || ih(e.clientX, e.clientY, p.selection.getRng()) || (C(), p.selection.placeCaretAt(e.clientX, e.clientY)));
                        else if (!1 === as(n)) {
                        l(), C();
                        var r = oh(a, e.clientX, e.clientY);
                        if (r && !i(e.target, r.node)) {
                            e.preventDefault();
                            var o = v(1, r.node, r.before, !1);
                            p.getBody().focus(), u(o)
                        }
                    }
                }), p.on("keypress", function(e) {
                    sh.modifierPressed(e) || (e.keyCode, lh(p.selection.getNode()) && e.preventDefault())
                }), p.on("getSelectionRange", function(e) {
                    var t = e.range;
                    if (g) {
                        if (!g.parentNode) return void(g = null);
                        (t = t.cloneRange()).selectNode(g), e.range = t
                    }
                }), p.on("setSelectionRange", function(e) {
                    var t;
                    (t = c(e.range, e.forward)) && (e.range = t)
                }), p.on("AfterSetSelectionRange", function(e) {
                    var t, n = e.range;
                    b(n) || C(), t = n.startContainer.parentNode, p.dom.hasClass(t, "mce-offscreen-selection") || l()
                }), p.on("copy", function(e) {
                    var t, n = e.clipboardData;
                    if (!e.isDefaultPrevented() && e.clipboardData && !ve.ie) {
                        var r = (t = p.dom.get(h)) ? t.getElementsByTagName("*")[0] : t;
                        r && (e.preventDefault(), n.clearData(), n.setData("text/html", r.outerHTML), n.setData("text/plain", r.outerText))
                    }
                }), jg(p), uh(p)
            }(), e = p.contentStyles, t = ".mce-content-body", e.push(o.getCss()), e.push(t + " .mce-offscreen-selection {position: absolute;left: -9999999999px;max-width: 1000000px;}" + t + " *[contentEditable=false] {cursor: default;}" + t + " *[contentEditable=true] {cursor: text;}")), {
                showCaret: v,
                showBlockCaretContainer: function(e) {
                    e.hasAttribute("data-mce-caret") && (Vi(e), u(s()), p.selection.scrollIntoView(e[0]))
                },
                hideFakeCaret: C,
                destroy: function() {
                    o.destroy(), g = null
                }
            }
        },
        gh = function(e, t, n) {
            var r, o, i, a, u = 1;
            for (a = e.getShortEndedElements(), (i = /<([!?\/])?([A-Za-z0-9\-_\:\.]+)((?:\s+[^"\'>]+(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>]*))*|\/|\s+)>/g).lastIndex = r = n; o = i.exec(t);) {
                if (r = i.lastIndex, "/" === o[1]) u--;
                else if (!o[1]) {
                    if (o[2] in a) continue;
                    u++
                }
                if (0 === u) break
            }
            return r
        };

    function hh(F, z) {
        void 0 === z && (z = oi());
        var e = function() {};
        !1 !== (F = F || {}).fix_self_closing && (F.fix_self_closing = !0);
        var U = F.comment ? F.comment : e,
            q = F.cdata ? F.cdata : e,
            V = F.text ? F.text : e,
            H = F.start ? F.start : e,
            j = F.end ? F.end : e,
            $ = F.pi ? F.pi : e,
            W = F.doctype ? F.doctype : e;
        return {
            parse: function(e) {
                var t, n, r, d, o, i, a, m, u, s, p, c, g, l, f, h, v, y, b, C, x, w, N, E, S, k, T, A, R, _ = 0,
                    B = [],
                    D = 0,
                    O = Ko.decode,
                    P = It.makeMap("src,href,data,background,formaction,poster,xlink:href"),
                    L = /((java|vb)script|mhtml):/i,
                    I = function(e) {
                        var t, n;
                        for (t = B.length; t-- && B[t].name !== e;);
                        if (0 <= t) {
                            for (n = B.length - 1; t <= n; n--)(e = B[n]).valid && j(e.name);
                            B.length = t
                        }
                    },
                    M = function(e, t, n, r, o) {
                        var i, a, u, s, c;
                        if (n = (t = t.toLowerCase()) in p ? t : O(n || r || o || ""), g && !m && 0 == (0 === (u = t).indexOf("data-") || 0 === u.indexOf("aria-"))) {
                            if (!(i = y[t]) && b) {
                                for (a = b.length; a-- && !(i = b[a]).pattern.test(t);); - 1 === a && (i = null)
                            }
                            if (!i) return;
                            if (i.validValues && !(n in i.validValues)) return
                        }
                        if (P[t] && !F.allow_script_urls) {
                            var l = n.replace(/[\s\u0000-\u001F]+/g, "");
                            try {
                                l = decodeURIComponent(l)
                            } catch (f) {
                                l = unescape(l)
                            }
                            if (L.test(l)) return;
                            if (c = l, !(s = F).allow_html_data_urls && (/^data:image\//i.test(c) ? !1 === s.allow_svg_data_urls && /^data:image\/svg\+xml/i.test(c) : /^data:/i.test(c))) return
                        }
                        m && (t in P || 0 === t.indexOf("on")) || (d.map[t] = n, d.push({
                            name: t,
                            value: n
                        }))
                    };
                for (S = new RegExp("<(?:(?:!--([\\w\\W]*?)--\x3e)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:!DOCTYPE([\\w\\W]*?)>)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)>)|(?:([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)((?:\\s+[^\"'>]+(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>]*))*|\\/|\\s+)>))", "g"), k = /([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g, s = z.getShortEndedElements(), E = F.self_closing_elements || z.getSelfClosingElements(), p = z.getBoolAttrs(), g = F.validate, u = F.remove_internals, R = F.fix_self_closing, T = z.getSpecialElements(), N = e + ">"; t = S.exec(N);) {
                    if (_ < t.index && V(O(e.substr(_, t.index - _))), n = t[6]) ":" === (n = n.toLowerCase()).charAt(0) && (n = n.substr(1)), I(n);
                    else if (n = t[7]) {
                        if (t.index + t[0].length > e.length) {
                            V(O(e.substr(t.index))), _ = t.index + t[0].length;
                            continue
                        }
                        if (":" === (n = n.toLowerCase()).charAt(0) && (n = n.substr(1)), c = n in s, R && E[n] && 0 < B.length && B[B.length - 1].name === n && I(n), !g || (l = z.getElementRule(n))) {
                            if (f = !0, g && (y = l.attributes, b = l.attributePatterns), (v = t[8]) ? ((m = -1 !== v.indexOf("data-mce-type")) && u && (f = !1), (d = []).map = {}, v.replace(k, M)) : (d = []).map = {}, g && !m) {
                                if (C = l.attributesRequired, x = l.attributesDefault, w = l.attributesForced, l.removeEmptyAttrs && !d.length && (f = !1), w)
                                    for (o = w.length; o--;) a = (h = w[o]).name, "{$uid}" === (A = h.value) && (A = "mce_" + D++), d.map[a] = A, d.push({
                                        name: a,
                                        value: A
                                    });
                                if (x)
                                    for (o = x.length; o--;)(a = (h = x[o]).name) in d.map || ("{$uid}" === (A = h.value) && (A = "mce_" + D++), d.map[a] = A, d.push({
                                        name: a,
                                        value: A
                                    }));
                                if (C) {
                                    for (o = C.length; o-- && !(C[o] in d.map);); - 1 === o && (f = !1)
                                }
                                if (h = d.map["data-mce-bogus"]) {
                                    if ("all" === h) {
                                        _ = gh(z, e, S.lastIndex), S.lastIndex = _;
                                        continue
                                    }
                                    f = !1
                                }
                            }
                            f && H(n, d, c)
                        } else f = !1;
                        if (r = T[n]) {
                            r.lastIndex = _ = t.index + t[0].length, (t = r.exec(e)) ? (f && (i = e.substr(_, t.index - _)), _ = t.index + t[0].length) : (i = e.substr(_), _ = e.length), f && (0 < i.length && V(i, !0), j(n)), S.lastIndex = _;
                            continue
                        }
                        c || (v && v.indexOf("/") === v.length - 1 ? f && j(n) : B.push({
                            name: n,
                            valid: f
                        }))
                    } else(n = t[1]) ? (">" === n.charAt(0) && (n = " " + n), F.allow_conditional_comments || "[if" !== n.substr(0, 3).toLowerCase() || (n = " " + n), U(n)) : (n = t[2]) ? q(n.replace(/<!--|-->/g, "")) : (n = t[3]) ? W(n) : (n = t[4]) && $(n, t[5]);
                    _ = t.index + t[0].length
                }
                for (_ < e.length && V(O(e.substr(_))), o = B.length - 1; 0 <= o; o--)(n = B[o]).valid && j(n.name)
            }
        }
    }(hh || (hh = {})).findEndTag = gh;
    var vh = hh,
        yh = function(e, t) {
            var n, r, o, i, a, u, s, c, l = t,
                f = /<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,
                d = e.schema;
            for (u = e.getTempAttrs(), s = l, c = new RegExp(["\\s?(" + u.join("|") + ')="[^"]+"'].join("|"), "gi"), l = s.replace(c, ""), a = d.getShortEndedElements(); i = f.exec(l);) r = f.lastIndex, o = i[0].length, n = a[i[1]] ? r : vh.findEndTag(d, l, r), l = l.substring(0, r - o) + l.substring(n), f.lastIndex = r - o;
            return _i(l)
        },
        bh = {
            trimExternal: yh,
            trimInternal: yh
        },
        Ch = 0,
        xh = 2,
        wh = 1,
        Nh = function(p, g) {
            var e = p.length + g.length + 2,
                h = new Array(e),
                v = new Array(e),
                c = function(e, t, n, r, o) {
                    var i = l(e, t, n, r);
                    if (null === i || i.start === t && i.diag === t - r || i.end === e && i.diag === e - n)
                        for (var a = e, u = n; a < t || u < r;) a < t && u < r && p[a] === g[u] ? (o.push([0, p[a]]), ++a, ++u) : r - n < t - e ? (o.push([2, p[a]]), ++a) : (o.push([1, g[u]]), ++u);
                    else {
                        c(e, i.start, n, i.start - i.diag, o);
                        for (var s = i.start; s < i.end; ++s) o.push([0, p[s]]);
                        c(i.end, t, i.end - i.diag, r, o)
                    }
                },
                y = function(e, t, n, r) {
                    for (var o = e; o - t < r && o < n && p[o] === g[o - t];) ++o;
                    return {
                        start: e,
                        end: o,
                        diag: t
                    }
                },
                l = function(e, t, n, r) {
                    var o = t - e,
                        i = r - n;
                    if (0 === o || 0 === i) return null;
                    var a, u, s, c, l, f = o - i,
                        d = i + o,
                        m = (d % 2 == 0 ? d : d + 1) / 2;
                    for (h[1 + m] = e, v[1 + m] = t + 1, a = 0; a <= m; ++a) {
                        for (u = -a; u <= a; u += 2) {
                            for (s = u + m, u === -a || u !== a && h[s - 1] < h[s + 1] ? h[s] = h[s + 1] : h[s] = h[s - 1] + 1, l = (c = h[s]) - e + n - u; c < t && l < r && p[c] === g[l];) h[s] = ++c, ++l;
                            if (f % 2 != 0 && f - a <= u && u <= f + a && v[s - f] <= h[s]) return y(v[s - f], u + e - n, t, r)
                        }
                        for (u = f - a; u <= f + a; u += 2) {
                            for (s = u + m - f, u === f - a || u !== f + a && v[s + 1] <= v[s - 1] ? v[s] = v[s + 1] - 1 : v[s] = v[s - 1], l = (c = v[s] - 1) - e + n - u; e <= c && n <= l && p[c] === g[l];) v[s] = c--, l--;
                            if (f % 2 == 0 && -a <= u && u <= a && v[s] <= h[s + f]) return y(v[s], u + e - n, t, r)
                        }
                    }
                },
                t = [];
            return c(0, p.length, 0, g.length, t), t
        },
        Eh = function(e) {
            return Oo.isElement(e) ? e.outerHTML : Oo.isText(e) ? Ko.encodeRaw(e.data, !1) : Oo.isComment(e) ? "\x3c!--" + e.data + "--\x3e" : ""
        },
        Sh = function(e, t, n) {
            var r = function(e) {
                var t, n, r;
                for (r = document.createElement("div"), t = document.createDocumentFragment(), e && (r.innerHTML = e); n = r.firstChild;) t.appendChild(n);
                return t
            }(t);
            if (e.hasChildNodes() && n < e.childNodes.length) {
                var o = e.childNodes[n];
                o.parentNode.insertBefore(r, o)
            } else e.appendChild(r)
        },
        kh = function(e) {
            return Bt.filter(Bt.map(e.childNodes, Eh), function(e) {
                return 0 < e.length
            })
        },
        Th = function(e, t) {
            var n, r, o, i = Bt.map(t.childNodes, Eh);
            return n = Nh(i, e), r = t, o = 0, Bt.each(n, function(e) {
                e[0] === Ch ? o++ : e[0] === wh ? (Sh(r, e[1], o), o++) : e[0] === xh && function(e, t) {
                    if (e.hasChildNodes() && t < e.childNodes.length) {
                        var n = e.childNodes[t];
                        n.parentNode.removeChild(n)
                    }
                }(r, o)
            }), t
        },
        Ah = function(e, t) {
            var n = (t || document).createElement("div");
            return n.innerHTML = e, $r.children(Vn.fromDom(n))
        },
        Rh = function(e) {
            return e.dom().innerHTML
        },
        _h = Rh,
        Bh = function(e, t) {
            var n = $r.owner(e).dom(),
                r = Vn.fromDom(n.createDocumentFragment()),
                o = Ah(t, n);
            qc(r, o), Hc.empty(e), Hu.append(e, r)
        },
        Dh = ns(A.none()),
        Oh = function(e) {
            return {
                type: "fragmented",
                fragments: e,
                content: "",
                bookmark: null,
                beforeBookmark: null
            }
        },
        Ph = function(e) {
            return {
                type: "complete",
                fragments: null,
                content: e,
                bookmark: null,
                beforeBookmark: null
            }
        },
        Lh = function(e) {
            return "fragmented" === e.type ? e.fragments.join("") : e.content
        },
        Ih = function(e) {
            var t = Vn.fromTag("body", Dh.get().getOrThunk(function() {
                var e = document.implementation.createHTMLDocument("undo");
                return Dh.set(A.some(e)), e
            }));
            return Bh(t, Lh(e)), H.each(hu(t, "*[data-mce-bogus]"), Hc.unwrap), _h(t)
        },
        Mh = function(n) {
            var e, t, r;
            return e = kh(n.getBody()), -1 !== (t = (r = H.bind(e, function(e) {
                var t = bh.trimInternal(n.serializer, e);
                return 0 < t.length ? [t] : []
            })).join("")).indexOf("</iframe>") ? Oh(r) : Ph(t)
        },
        Fh = function(e, t, n) {
            "fragmented" === t.type ? Th(t.fragments, e.getBody()) : e.setContent(t.content, {
                format: "raw"
            }), e.selection.moveToBookmark(n ? t.beforeBookmark : t.bookmark)
        },
        zh = function(e, t) {
            return !(!e || !t) && (r = t, Lh(e) === Lh(r) || (n = t, Ih(e) === Ih(n)));
            var n, r
        };

    function Uh(u) {
        var s, r, o = this,
            c = 0,
            l = [],
            t = 0,
            f = function() {
                return 0 === t
            },
            i = function(e) {
                f() && (o.typing = e)
            },
            d = function(e) {
                u.setDirty(e)
            },
            a = function(e) {
                i(!1), o.add({}, e)
            },
            n = function() {
                o.typing && (i(!1), o.add())
            };
        return u.on("init", function() {
            o.add()
        }), u.on("BeforeExecCommand", function(e) {
            var t = e.command;
            "Undo" !== t && "Redo" !== t && "mceRepaint" !== t && (n(), o.beforeChange())
        }), u.on("ExecCommand", function(e) {
            var t = e.command;
            "Undo" !== t && "Redo" !== t && "mceRepaint" !== t && a(e)
        }), u.on("ObjectResizeStart Cut", function() {
            o.beforeChange()
        }), u.on("SaveContent ObjectResized blur", a), u.on("DragEnd", a), u.on("KeyUp", function(e) {
            var t = e.keyCode;
            e.isDefaultPrevented() || ((33 <= t && t <= 36 || 37 <= t && t <= 40 || 45 === t || e.ctrlKey) && (a(), u.nodeChanged()), 46 !== t && 8 !== t || u.nodeChanged(), r && o.typing && !1 === zh(Mh(u), l[0]) && (!1 === u.isDirty() && (d(!0), u.fire("change", {
                level: l[0],
                lastLevel: null
            })), u.fire("TypingUndo"), r = !1, u.nodeChanged()))
        }), u.on("KeyDown", function(e) {
            var t = e.keyCode;
            if (!e.isDefaultPrevented())
                if (33 <= t && t <= 36 || 37 <= t && t <= 40 || 45 === t) o.typing && a(e);
                else {
                    var n = e.ctrlKey && !e.altKey || e.metaKey;
                    !(t < 16 || 20 < t) || 224 === t || 91 === t || o.typing || n || (o.beforeChange(), i(!0), o.add({}, e), r = !0)
                }
        }), u.on("MouseDown", function(e) {
            o.typing && a(e)
        }), u.on("input", function(e) {
            var t;
            e.inputType && ("insertReplacementText" === e.inputType || "insertText" === (t = e).inputType && null === t.data) && a(e)
        }), u.addShortcut("meta+z", "", "Undo"), u.addShortcut("meta+y,meta+shift+z", "", "Redo"), u.on("AddUndo Undo Redo ClearUndos", function(e) {
            e.isDefaultPrevented() || u.nodeChanged()
        }), o = {
            data: l,
            typing: !1,
            beforeChange: function() {
                f() && (s = Ec.getUndoBookmark(u.selection))
            },
            add: function(e, t) {
                var n, r, o, i = u.settings;
                if (o = Mh(u), e = e || {}, e = It.extend(e, o), !1 === f() || u.removed) return null;
                if (r = l[c], u.fire("BeforeAddUndo", {
                        level: e,
                        lastLevel: r,
                        originalEvent: t
                    }).isDefaultPrevented()) return null;
                if (r && zh(r, e)) return null;
                if (l[c] && (l[c].beforeBookmark = s), i.custom_undo_redo_levels && l.length > i.custom_undo_redo_levels) {
                    for (n = 0; n < l.length - 1; n++) l[n] = l[n + 1];
                    l.length--, c = l.length
                }
                e.bookmark = Ec.getUndoBookmark(u.selection), c < l.length - 1 && (l.length = c + 1), l.push(e), c = l.length - 1;
                var a = {
                    level: e,
                    lastLevel: r,
                    originalEvent: t
                };
                return u.fire("AddUndo", a), 0 < c && (d(!0), u.fire("change", a)), e
            },
            undo: function() {
                var e;
                return o.typing && (o.add(), o.typing = !1, i(!1)), 0 < c && (e = l[--c], Fh(u, e, !0), d(!0), u.fire("undo", {
                    level: e
                })), e
            },
            redo: function() {
                var e;
                return c < l.length - 1 && (e = l[++c], Fh(u, e, !1), d(!0), u.fire("redo", {
                    level: e
                })), e
            },
            clear: function() {
                l = [], c = 0, o.typing = !1, o.data = l, u.fire("ClearUndos")
            },
            hasUndo: function() {
                return 0 < c || o.typing && l[0] && !zh(Mh(u), l[0])
            },
            hasRedo: function() {
                return c < l.length - 1 && !o.typing
            },
            transact: function(e) {
                return n(), o.beforeChange(), o.ignore(e), o.add()
            },
            ignore: function(e) {
                try {
                    t++, e()
                } finally {
                    t--
                }
            },
            extra: function(e, t) {
                var n, r;
                o.transact(e) && (r = l[c].bookmark, n = l[c - 1], Fh(u, n, !0), o.transact(t) && (l[c - 1].beforeBookmark = r))
            }
        }
    }
    var qh, Vh, Hh = function(e) {
            return e && /^(IMG)$/.test(e.nodeName)
        },
        jh = function(e) {
            return e && 3 === e.nodeType && /^([\t \r\n]+|)$/.test(e.nodeValue)
        },
        $h = function(e, t, n) {
            return "color" !== n && "backgroundColor" !== n || (t = e.toHex(t)), "fontWeight" === n && 700 === t && (t = "bold"), "fontFamily" === n && (t = t.replace(/[\'\"]/g, "").replace(/,\s+/g, ",")), "" + t
        },
        Wh = {
            isInlineBlock: Hh,
            moveStart: function(e, t, n) {
                var r, o, i, a = n.startOffset,
                    u = n.startContainer;
                if ((n.startContainer !== n.endContainer || !Hh(n.startContainer.childNodes[n.startOffset])) && 1 === u.nodeType)
                    for (a < (i = u.childNodes).length ? r = new ao(u = i[a], e.getParent(u, e.isBlock)) : (r = new ao(u = i[i.length - 1], e.getParent(u, e.isBlock))).next(!0), o = r.current(); o; o = r.next())
                        if (3 === o.nodeType && !jh(o)) return n.setStart(o, 0), void t.setRng(n)
            },
            getNonWhiteSpaceSibling: function(e, t, n) {
                if (e)
                    for (t = t ? "nextSibling" : "previousSibling", e = n ? e : e[t]; e; e = e[t])
                        if (1 === e.nodeType || !jh(e)) return e
            },
            isTextBlock: function(e, t) {
                return t.nodeType && (t = t.nodeName), !!e.schema.getTextBlockElements()[t.toLowerCase()]
            },
            isValid: function(e, t, n) {
                return e.schema.isValidChild(t, n)
            },
            isWhiteSpaceNode: jh,
            replaceVars: function(e, n) {
                return "string" != typeof e ? e = e(n) : n && (e = e.replace(/%(\w+)/g, function(e, t) {
                    return n[t] || e
                })), e
            },
            isEq: function(e, t) {
                return t = t || "", e = "" + ((e = e || "").nodeName || e), t = "" + (t.nodeName || t), e.toLowerCase() === t.toLowerCase()
            },
            normalizeStyleValue: $h,
            getStyle: function(e, t, n) {
                return $h(e, e.getStyle(t, n), n)
            },
            getTextDecoration: function(t, e) {
                var n;
                return t.getParent(e, function(e) {
                    return (n = t.getStyle(e, "text-decoration")) && "none" !== n
                }), n
            },
            getParents: function(e, t, n) {
                return e.getParents(t, n, e.getRoot())
            }
        },
        Kh = Mc,
        Xh = Wh.getParents,
        Yh = Wh.isWhiteSpaceNode,
        Gh = Wh.isTextBlock,
        Jh = function(e, t) {
            for (void 0 === t && (t = 3 === e.nodeType ? e.length : e.childNodes.length); e && e.hasChildNodes();)(e = e.childNodes[t]) && (t = 3 === e.nodeType ? e.length : e.childNodes.length);
            return {
                node: e,
                offset: t
            }
        },
        Qh = function(e, t) {
            for (var n = t; n;) {
                if (1 === n.nodeType && e.getContentEditable(n)) return "false" === e.getContentEditable(n) ? n : t;
                n = n.parentNode
            }
            return t
        },
        Zh = function(e, t, n, r) {
            var o, i, a = n.nodeValue;
            return void 0 === r && (r = e ? a.length : 0), e ? (o = a.lastIndexOf(" ", r), -1 === (o = (i = a.lastIndexOf("\xa0", r)) < o ? o : i) || t || o++) : (o = a.indexOf(" ", r), i = a.indexOf("\xa0", r), o = -1 !== o && (-1 === i || o < i) ? o : i), o
        },
        ev = function(e, t, n, r, o, i) {
            var a, u, s, c;
            if (3 === n.nodeType) {
                if (-1 !== (s = Zh(o, i, n, r))) return {
                    container: n,
                    offset: s
                };
                c = n
            }
            for (a = new ao(n, e.getParent(n, e.isBlock) || t); u = a[o ? "prev" : "next"]();)
                if (3 === u.nodeType) {
                    if (-1 !== (s = Zh(o, i, c = u))) return {
                        container: u,
                        offset: s
                    }
                } else if (e.isBlock(u)) break;
            if (c) return {
                container: c,
                offset: r = o ? 0 : c.length
            }
        },
        tv = function(e, t, n, r, o) {
            var i, a, u, s;
            for (3 === r.nodeType && 0 === r.nodeValue.length && r[o] && (r = r[o]), i = Xh(e, r), a = 0; a < i.length; a++)
                for (u = 0; u < t.length; u++)
                    if (!("collapsed" in (s = t[u]) && s.collapsed !== n.collapsed) && e.is(i[a], s.selector)) return i[a];
            return r
        },
        nv = function(t, e, n, r) {
            var o, i = t.dom,
                a = i.getRoot();
            if (e[0].wrapper || (o = i.getParent(n, e[0].block, a)), !o) {
                var u = i.getParent(n, "LI,TD,TH");
                o = i.getParent(3 === n.nodeType ? n.parentNode : n, function(e) {
                    return e !== a && Gh(t, e)
                }, u)
            }
            if (o && e[0].wrapper && (o = Xh(i, o, "ul,ol").reverse()[0] || o), !o)
                for (o = n; o[r] && !i.isBlock(o[r]) && (o = o[r], !Wh.isEq(o, "br")););
            return o || n
        },
        rv = function(e, t, n, r, o, i, a) {
            var u, s, c, l, f, d;
            if (u = s = a ? n : o, l = a ? "previousSibling" : "nextSibling", f = e.getRoot(), 3 === u.nodeType && !Yh(u) && (a ? 0 < r : i < u.nodeValue.length)) return u;
            for (;;) {
                if (!t[0].block_expand && e.isBlock(s)) return s;
                for (c = s[l]; c; c = c[l])
                    if (!Kh(c) && !Yh(c) && ("BR" !== (d = c).nodeName || !d.getAttribute("data-mce-bogus") || d.nextSibling)) return s;
                if (s === f || s.parentNode === f) {
                    u = s;
                    break
                }
                s = s.parentNode
            }
            return u
        },
        ov = function(e, t, n, r) {
            var o, i = t.startContainer,
                a = t.startOffset,
                u = t.endContainer,
                s = t.endOffset,
                c = e.dom;
            return 1 === i.nodeType && i.hasChildNodes() && 3 === (i = ua(i, a)).nodeType && (a = 0), 1 === u.nodeType && u.hasChildNodes() && 3 === (u = ua(u, t.collapsed ? s : s - 1)).nodeType && (s = u.nodeValue.length), i = Qh(c, i), u = Qh(c, u), (Kh(i.parentNode) || Kh(i)) && 3 === (i = (i = Kh(i) ? i : i.parentNode).nextSibling || i).nodeType && (a = 0), (Kh(u.parentNode) || Kh(u)) && 3 === (u = (u = Kh(u) ? u : u.parentNode).previousSibling || u).nodeType && (s = u.length), n[0].inline && (t.collapsed && ((o = ev(c, e.getBody(), i, a, !0, r)) && (i = o.container, a = o.offset), (o = ev(c, e.getBody(), u, s, !1, r)) && (u = o.container, s = o.offset)), u = r ? u : function(e, t) {
                var n = Jh(e, t);
                if (n.node) {
                    for (; n.node && 0 === n.offset && n.node.previousSibling;) n = Jh(n.node.previousSibling);
                    n.node && 0 < n.offset && 3 === n.node.nodeType && " " === n.node.nodeValue.charAt(n.offset - 1) && 1 < n.offset && (e = n.node).splitText(n.offset - 1)
                }
                return e
            }(u, s)), (n[0].inline || n[0].block_expand) && (n[0].inline && 3 === i.nodeType && 0 !== a || (i = rv(c, n, i, a, u, s, !0)), n[0].inline && 3 === u.nodeType && s !== u.nodeValue.length || (u = rv(c, n, i, a, u, s, !1))), n[0].selector && !1 !== n[0].expand && !n[0].inline && (i = tv(c, n, t, i, "previousSibling"), u = tv(c, n, t, u, "nextSibling")), (n[0].block || n[0].selector) && (i = nv(e, n, i, "previousSibling"), u = nv(e, n, u, "nextSibling"), n[0].block && (c.isBlock(i) || (i = rv(c, n, i, a, u, s, !0)), c.isBlock(u) || (u = rv(c, n, i, a, u, s, !1)))), 1 === i.nodeType && (a = c.nodeIndex(i), i = i.parentNode), 1 === u.nodeType && (s = c.nodeIndex(u) + 1, u = u.parentNode), {
                startContainer: i,
                startOffset: a,
                endContainer: u,
                endOffset: s
            }
        },
        iv = Wh.isEq,
        av = function(e, t, n) {
            var r = e.formatter.get(n);
            if (r)
                for (var o = 0; o < r.length; o++)
                    if (!1 === r[o].inherit && e.dom.is(t, r[o].selector)) return !0;
            return !1
        },
        uv = function(t, e, n, r) {
            var o = t.dom.getRoot();
            return e !== o && (e = t.dom.getParent(e, function(e) {
                return !!av(t, e, n) || e.parentNode === o || !!lv(t, e, n, r, !0)
            }), lv(t, e, n, r))
        },
        sv = function(e, t, n) {
            return !!iv(t, n.inline) || !!iv(t, n.block) || (n.selector ? 1 === t.nodeType && e.is(t, n.selector) : void 0)
        },
        cv = function(e, t, n, r, o, i) {
            var a, u, s, c = n[r];
            if (n.onmatch) return n.onmatch(t, n, r);
            if (c)
                if ("undefined" == typeof c.length) {
                    for (a in c)
                        if (c.hasOwnProperty(a)) {
                            if (u = "attributes" === r ? e.getAttrib(t, a) : Wh.getStyle(e, t, a), o && !u && !n.exact) return;
                            if ((!o || n.exact) && !iv(u, Wh.normalizeStyleValue(e, Wh.replaceVars(c[a], i), a))) return
                        }
                } else
                    for (s = 0; s < c.length; s++)
                        if ("attributes" === r ? e.getAttrib(t, c[s]) : Wh.getStyle(e, t, c[s])) return n;
            return n
        },
        lv = function(e, t, n, r, o) {
            var i, a, u, s, c = e.formatter.get(n),
                l = e.dom;
            if (c && t)
                for (a = 0; a < c.length; a++)
                    if (i = c[a], sv(e.dom, t, i) && cv(l, t, i, "attributes", o, r) && cv(l, t, i, "styles", o, r)) {
                        if (s = i.classes)
                            for (u = 0; u < s.length; u++)
                                if (!e.dom.hasClass(t, s[u])) return;
                        return i
                    }
        },
        fv = {
            matchNode: lv,
            matchName: sv,
            match: function(e, t, n, r) {
                var o;
                return r ? uv(e, r, t, n) : (r = e.selection.getNode(), !!uv(e, r, t, n) || !((o = e.selection.getStart()) === r || !uv(e, o, t, n)))
            },
            matchAll: function(r, o, i) {
                var e, a = [],
                    u = {};
                return e = r.selection.getStart(), r.dom.getParent(e, function(e) {
                    var t, n;
                    for (t = 0; t < o.length; t++) n = o[t], !u[n] && lv(r, e, n, i) && (u[n] = !0, a.push(n))
                }, r.dom.getRoot()), a
            },
            canApply: function(e, t) {
                var n, r, o, i, a, u = e.formatter.get(t),
                    s = e.dom;
                if (u)
                    for (n = e.selection.getStart(), r = Wh.getParents(s, n), i = u.length - 1; 0 <= i; i--) {
                        if (!(a = u[i].selector) || u[i].defaultBlock) return !0;
                        for (o = r.length - 1; 0 <= o; o--)
                            if (s.is(r[o], a)) return !0
                    }
                return !1
            },
            matchesUnInheritedFormatSelector: av
        },
        dv = function(e, t) {
            return e.splitText(t)
        },
        mv = function(e) {
            var t = e.startContainer,
                n = e.startOffset,
                r = e.endContainer,
                o = e.endOffset;
            return t === r && Oo.isText(t) ? 0 < n && n < t.nodeValue.length && (t = (r = dv(t, n)).previousSibling, n < o ? (t = r = dv(r, o -= n).previousSibling, o = r.nodeValue.length, n = 0) : o = 0) : (Oo.isText(t) && 0 < n && n < t.nodeValue.length && (t = dv(t, n), n = 0), Oo.isText(r) && 0 < o && o < r.nodeValue.length && (o = (r = dv(r, o).previousSibling).nodeValue.length)), {
                startContainer: t,
                startOffset: n,
                endContainer: r,
                endOffset: o
            }
        },
        pv = Ri,
        gv = "_mce_caret",
        hv = function(e) {
            return 0 < function(e) {
                for (var t = []; e;) {
                    if (3 === e.nodeType && e.nodeValue !== pv || 1 < e.childNodes.length) return [];
                    1 === e.nodeType && t.push(e), e = e.firstChild
                }
                return t
            }(e).length
        },
        vv = function(e) {
            var t;
            if (e)
                for (e = (t = new ao(e, e)).current(); e; e = t.next())
                    if (3 === e.nodeType) return e;
            return null
        },
        yv = function(e) {
            var t = Vn.fromTag("span");
            return lr.setAll(t, {
                id: gv,
                "data-mce-bogus": "1",
                "data-mce-type": "format-caret"
            }), e && Hu.append(t, Vn.fromText(pv)), t
        },
        bv = function(e, t, n, r) {
            var o, i, a, u;
            o = t.getRng(!0), i = e.getParent(n, e.isBlock), hv(n) ? (!1 !== r && (o.setStartBefore(n), o.setEndBefore(n)), e.remove(n)) : ((u = vv(n)) && u.nodeValue.charAt(0) === pv && u.deleteData(0, 1), a = u, o.startContainer === a && 0 < o.startOffset && o.setStart(a, o.startOffset - 1), o.endContainer === a && 0 < o.endOffset && o.setEnd(a, o.endOffset - 1), e.remove(n, !0)), i && e.isEmpty(i) && Kc(Vn.fromDom(i)), t.setRng(o)
        },
        Cv = function(e, t, n, r, o) {
            if (r) bv(t, n, r, o);
            else if (!(r = Tc(e, n.getStart())))
                for (; r = t.get(gv);) bv(t, n, r, !1)
        },
        xv = function(e, t, n) {
            var r = e.dom,
                o = r.getParent(n, da.curry(Wh.isTextBlock, e));
            o && r.isEmpty(o) ? n.parentNode.replaceChild(t, n) : (Wc(Vn.fromDom(n)), r.isEmpty(n) ? n.parentNode.replaceChild(t, n) : r.insertAfter(t, n))
        },
        wv = function(e, t) {
            return e.appendChild(t), t
        },
        Nv = function(e, t) {
            var n = H.foldr(e, function(e, t) {
                return wv(e, t.cloneNode(!1))
            }, t);
            return wv(n, n.ownerDocument.createTextNode(pv))
        },
        Ev = function(e) {
            var i = e.dom,
                a = e.selection,
                u = e.getBody();
            e.on("mouseup keydown", function(e) {
                var t, n, r, o;
                t = u, n = i, r = a, o = e.keyCode, Cv(t, n, r, null, !1), 8 === o && r.isCollapsed() && r.getStart().innerHTML === pv && Cv(t, n, r, Tc(t, r.getStart())), 37 !== o && 39 !== o || Cv(t, n, r, Tc(t, r.getStart()))
            })
        },
        Sv = function(e, t) {
            return e.schema.getTextInlineElements().hasOwnProperty(Zn.name(t)) && !kc(t.dom()) && !Oo.isBogus(t.dom())
        },
        kv = {},
        Tv = Bt.filter,
        Av = Bt.each;
    Vh = function(e) {
        var t, n, r = e.selection.getRng();
        t = Oo.matchNodeNames("pre"), r.collapsed || (n = e.selection.getSelectedBlocks(), Av(Tv(Tv(n, t), function(e) {
            return t(e.previousSibling) && -1 !== Bt.indexOf(n, e.previousSibling)
        }), function(e) {
            var t, n;
            t = e.previousSibling, tn(n = e).remove(), tn(t).append("<br><br>").append(n.childNodes)
        }))
    }, kv[qh = "pre"] || (kv[qh] = []), kv[qh].push(Vh);
    var Rv = function(e, t) {
            Av(kv[e], function(e) {
                e(t)
            })
        },
        _v = It.each,
        Bv = function(e, t, o) {
            var n, r, i, a, u, s, c, l = t.startContainer,
                f = t.startOffset,
                d = t.endContainer,
                m = t.endOffset;
            if (0 < (c = e.select("td[data-mce-selected],th[data-mce-selected]")).length) _v(c, function(e) {
                o([e])
            });
            else {
                var p, g, h, v = function(e) {
                        var t;
                        return 3 === (t = e[0]).nodeType && t === l && f >= t.nodeValue.length && e.splice(0, 1), t = e[e.length - 1], 0 === m && 0 < e.length && t === d && 3 === t.nodeType && e.splice(e.length - 1, 1), e
                    },
                    y = function(e, t, n) {
                        for (var r = []; e && e !== n; e = e[t]) r.push(e);
                        return r
                    },
                    b = function(e, t) {
                        do {
                            if (e.parentNode === t) return e;
                            e = e.parentNode
                        } while (e)
                    },
                    C = function(e, t, n) {
                        var r = n ? "nextSibling" : "previousSibling";
                        for (u = (a = e).parentNode; a && a !== t; a = u) u = a.parentNode, (s = y(a === e ? a : a[r], r)).length && (n || s.reverse(), o(v(s)))
                    };
                if (1 === l.nodeType && l.hasChildNodes() && (l = l.childNodes[f]), 1 === d.nodeType && d.hasChildNodes() && (g = m, h = (p = d).childNodes, --g > h.length - 1 ? g = h.length - 1 : g < 0 && (g = 0), d = h[g] || p), l === d) return o(v([l]));
                for (n = e.findCommonAncestor(l, d), a = l; a; a = a.parentNode) {
                    if (a === d) return C(l, n, !0);
                    if (a === n) break
                }
                for (a = d; a; a = a.parentNode) {
                    if (a === l) return C(d, n);
                    if (a === n) break
                }
                r = b(l, n) || l, i = b(d, n) || d, C(l, r, !0), (s = y(r === l ? r : r.nextSibling, "nextSibling", i === d ? i.nextSibling : i)).length && o(v(s)), C(d, i)
            }
        },
        Dv = /^(src|href|style)$/,
        Ov = It.each,
        Pv = Wh.isEq,
        Lv = function(e) {
            return /^(TH|TD)$/.test(e.nodeName)
        },
        Iv = function(e, t, n) {
            var r, o, i;
            return r = t[n ? "startContainer" : "endContainer"], o = t[n ? "startOffset" : "endOffset"], Oo.isElement(r) && (i = r.childNodes.length - 1, !n && o && o--, r = r.childNodes[i < o ? i : o]), Oo.isText(r) && n && o >= r.nodeValue.length && (r = new ao(r, e.getBody()).next() || r), Oo.isText(r) && !n && 0 === o && (r = new ao(r, e.getBody()).prev() || r), r
        },
        Mv = function(e, t, n, r) {
            var o = e.create(n, r);
            return t.parentNode.insertBefore(o, t), o.appendChild(t), o
        },
        Fv = function(e, t, n, r) {
            return !(t = Wh.getNonWhiteSpaceSibling(t, n, r)) || "BR" === t.nodeName || e.isBlock(t)
        },
        zv = function(e, n, r, o, i) {
            var t, a, u, s, c, l, f, d, m, p, g, h, v, y, b = e.dom;
            if (c = b, !(Pv(l = o, (f = n).inline) || Pv(l, f.block) || (f.selector ? Oo.isElement(l) && c.is(l, f.selector) : void 0) || (s = o, n.links && "A" === s.tagName))) return !1;
            if ("all" !== n.remove)
                for (Ov(n.styles, function(e, t) {
                        e = Wh.normalizeStyleValue(b, Wh.replaceVars(e, r), t), "number" == typeof t && (t = e, i = 0), (n.remove_similar || !i || Pv(Wh.getStyle(b, i, t), e)) && b.setStyle(o, t, ""), u = 1
                    }), u && "" === b.getAttrib(o, "style") && (o.removeAttribute("style"), o.removeAttribute("data-mce-style")), Ov(n.attributes, function(e, t) {
                        var n;
                        if (e = Wh.replaceVars(e, r), "number" == typeof t && (t = e, i = 0), !i || Pv(b.getAttrib(i, t), e)) {
                            if ("class" === t && (e = b.getAttrib(o, t)) && (n = "", Ov(e.split(/\s+/), function(e) {
                                    /mce\-\w+/.test(e) && (n += (n ? " " : "") + e)
                                }), n)) return void b.setAttrib(o, t, n);
                            "class" === t && o.removeAttribute("className"), Dv.test(t) && o.removeAttribute("data-mce-" + t), o.removeAttribute(t)
                        }
                    }), Ov(n.classes, function(e) {
                        e = Wh.replaceVars(e, r), i && !b.hasClass(i, e) || b.removeClass(o, e)
                    }), a = b.getAttribs(o), t = 0; t < a.length; t++) {
                    var C = a[t].nodeName;
                    if (0 !== C.indexOf("_") && 0 !== C.indexOf("data-")) return !1
                }
            return "none" !== n.remove ? (d = e, p = n, h = (m = o).parentNode, v = d.dom, y = d.settings.forced_root_block, p.block && (y ? h === v.getRoot() && (p.list_block && Pv(m, p.list_block) || Ov(It.grep(m.childNodes), function(e) {
                Wh.isValid(d, y, e.nodeName.toLowerCase()) ? g ? g.appendChild(e) : (g = Mv(v, e, y), v.setAttribs(g, d.settings.forced_root_block_attrs)) : g = 0
            })) : v.isBlock(m) && !v.isBlock(h) && (Fv(v, m, !1) || Fv(v, m.firstChild, !0, 1) || m.insertBefore(v.create("br"), m.firstChild), Fv(v, m, !0) || Fv(v, m.lastChild, !1, 1) || m.appendChild(v.create("br")))), p.selector && p.inline && !Pv(p.inline, m) || v.remove(m, 1), !0) : void 0
        },
        Uv = zv,
        qv = function(s, c, l, e, f) {
            var t, n, d = s.formatter.get(c),
                m = d[0],
                a = !0,
                u = s.dom,
                r = s.selection,
                o = function(e) {
                    var n, t, r, o, i, a, u = (n = s, t = e, r = c, o = l, i = f, Ov(Wh.getParents(n.dom, t.parentNode).reverse(), function(e) {
                        var t;
                        a || "_start" === e.id || "_end" === e.id || (t = fv.matchNode(n, e, r, o, i)) && !1 !== t.split && (a = e)
                    }), a);
                    return function(e, t, n, r, o, i, a, u) {
                        var s, c, l, f, d, m, p = e.dom;
                        if (n) {
                            for (m = n.parentNode, s = r.parentNode; s && s !== m; s = s.parentNode) {
                                for (c = p.clone(s, !1), d = 0; d < t.length; d++)
                                    if (zv(e, t[d], u, c, c)) {
                                        c = 0;
                                        break
                                    }
                                c && (l && c.appendChild(l), f || (f = c), l = c)
                            }!i || a.mixed && p.isBlock(n) || (r = p.split(n, r)), l && (o.parentNode.insertBefore(l, o), f.appendChild(o))
                        }
                        return r
                    }(s, d, u, e, e, !0, m, l)
                },
                p = function(e) {
                    var t, n, r, o, i;
                    if (Oo.isElement(e) && u.getContentEditable(e) && (o = a, a = "true" === u.getContentEditable(e), i = !0), t = It.grep(e.childNodes), a && !i)
                        for (n = 0, r = d.length; n < r && !zv(s, d[n], l, e, e); n++);
                    if (m.deep && t.length) {
                        for (n = 0, r = t.length; n < r; n++) p(t[n]);
                        i && (a = o)
                    }
                },
                i = function(e) {
                    var t = u.get(e ? "_start" : "_end"),
                        n = t[e ? "firstChild" : "lastChild"];
                    return Mc(n) && (n = n[e ? "firstChild" : "lastChild"]), Oo.isText(n) && 0 === n.data.length && (n = e ? t.previousSibling || t.nextSibling : t.nextSibling || t.previousSibling), u.remove(t, !0), n
                },
                g = function(e) {
                    var t, n, r = e.commonAncestorContainer;
                    if (e = ov(s, e, d, !0), m.split) {
                        if ((t = Iv(s, e, !0)) !== (n = Iv(s, e))) {
                            if (/^(TR|TH|TD)$/.test(t.nodeName) && t.firstChild && (t = "TR" === t.nodeName ? t.firstChild.firstChild || t : t.firstChild || t), r && /^T(HEAD|BODY|FOOT|R)$/.test(r.nodeName) && Lv(n) && n.firstChild && (n = n.firstChild || n), u.isChildOf(t, n) && t !== n && !u.isBlock(n) && !Lv(t) && !Lv(n)) return t = Mv(u, t, "span", {
                                id: "_start",
                                "data-mce-type": "bookmark"
                            }), o(t), void(t = i(!0));
                            t = Mv(u, t, "span", {
                                id: "_start",
                                "data-mce-type": "bookmark"
                            }), n = Mv(u, n, "span", {
                                id: "_end",
                                "data-mce-type": "bookmark"
                            }), o(t), o(n), t = i(!0), n = i()
                        } else t = n = o(t);
                        e.startContainer = t.parentNode ? t.parentNode : t, e.startOffset = u.nodeIndex(t), e.endContainer = n.parentNode ? n.parentNode : n, e.endOffset = u.nodeIndex(n) + 1
                    }
                    Bv(u, e, function(e) {
                        Ov(e, function(e) {
                            p(e), Oo.isElement(e) && "underline" === s.dom.getStyle(e, "text-decoration") && e.parentNode && "underline" === Wh.getTextDecoration(u, e.parentNode) && zv(s, {
                                deep: !1,
                                exact: !0,
                                inline: "span",
                                styles: {
                                    textDecoration: "underline"
                                }
                            }, null, e)
                        })
                    })
                };
            if (e) e.nodeType ? ((n = u.createRng()).setStartBefore(e), n.setEndAfter(e), g(n)) : g(e);
            else if ("false" !== u.getContentEditable(r.getNode())) r.isCollapsed() && m.inline && !u.select("td[data-mce-selected],th[data-mce-selected]").length ? function(e, t, n, r) {
                var o, i, a, u, s, c, l, f = e.dom,
                    d = e.selection,
                    m = [],
                    p = d.getRng();
                for (o = p.startContainer, i = p.startOffset, 3 === (s = o).nodeType && (i !== o.nodeValue.length && (u = !0), s = s.parentNode); s;) {
                    if (fv.matchNode(e, s, t, n, r)) {
                        c = s;
                        break
                    }
                    s.nextSibling && (u = !0), m.push(s), s = s.parentNode
                }
                if (c)
                    if (u) {
                        a = d.getBookmark(), p.collapse(!0);
                        var g = ov(e, p, e.formatter.get(t), !0);
                        g = mv(g), e.formatter.remove(t, n, g), d.moveToBookmark(a)
                    } else {
                        l = Tc(e.getBody(), c);
                        var h = yv(!1).dom(),
                            v = Nv(m, h);
                        xv(e, h, l || c), bv(f, d, l, !1), d.setCursorLocation(v, 1), f.isEmpty(c) && f.remove(c)
                    }
            }(s, c, l, f) : (t = Ec.getPersistentBookmark(s.selection, !0), g(r.getRng()), r.moveToBookmark(t), m.inline && fv.match(s, c, l, r.getStart()) && Wh.moveStart(u, r, r.getRng()), s.nodeChanged());
            else {
                e = r.getNode();
                for (var h = 0, v = d.length; h < v && (!d[h].ceFalseOverride || !zv(s, d[h], l, e, e)); h++);
            }
        },
        Vv = It.each,
        Hv = function(e) {
            return e && 1 === e.nodeType && !Mc(e) && !kc(e) && !Oo.isBogus(e)
        },
        jv = function(e, t) {
            var n;
            for (n = e; n; n = n[t]) {
                if (3 === n.nodeType && 0 !== n.nodeValue.length) return e;
                if (1 === n.nodeType && !Mc(n)) return n
            }
            return e
        },
        $v = function(e, t, n) {
            var r, o, i = new zc(e);
            if (t && n && (t = jv(t, "previousSibling"), n = jv(n, "nextSibling"), i.compare(t, n))) {
                for (r = t.nextSibling; r && r !== n;) r = (o = r).nextSibling, t.appendChild(o);
                return e.remove(n), It.each(It.grep(n.childNodes), function(e) {
                    t.appendChild(e)
                }), t
            }
            return n
        },
        Wv = function(e, t, n) {
            Vv(e.childNodes, function(e) {
                Hv(e) && (t(e) && n(e), e.hasChildNodes() && Wv(e, t, n))
            })
        },
        Kv = function(n, e) {
            return V.curry(function(e, t) {
                return !(!t || !Wh.getStyle(n, t, e))
            }, e)
        },
        Xv = function(r, e, t) {
            return V.curry(function(e, t, n) {
                r.setStyle(n, e, t), "" === n.getAttribute("style") && n.removeAttribute("style"), Yv(r, n)
            }, e, t)
        },
        Yv = function(e, t) {
            "SPAN" === t.nodeName && 0 === e.getAttribs(t).length && e.remove(t, !0)
        },
        Gv = function(e, t) {
            var n;
            1 === t.nodeType && t.parentNode && 1 === t.parentNode.nodeType && (n = Wh.getTextDecoration(e, t.parentNode), e.getStyle(t, "color") && n ? e.setStyle(t, "text-decoration", n) : e.getStyle(t, "text-decoration") === n && e.setStyle(t, "text-decoration", null))
        },
        Jv = function(n, e, r, o) {
            Vv(e, function(t) {
                Vv(n.dom.select(t.inline, o), function(e) {
                        Hv(e) && Uv(n, t, r, e, t.exact ? e : null)
                    }),
                    function(r, e, t) {
                        if (e.clear_child_styles) {
                            var n = e.links ? "*:not(a)" : "*";
                            Vv(r.select(n, t), function(n) {
                                Hv(n) && Vv(e.styles, function(e, t) {
                                    r.setStyle(n, t, "")
                                })
                            })
                        }
                    }(n.dom, t, o)
            })
        },
        Qv = function(e, t, n, r) {
            (t.styles.color || t.styles.textDecoration) && (It.walk(r, V.curry(Gv, e), "childNodes"), Gv(e, r))
        },
        Zv = function(e, t, n, r) {
            t.styles && t.styles.backgroundColor && Wv(r, Kv(e, "fontSize"), Xv(e, "backgroundColor", Wh.replaceVars(t.styles.backgroundColor, n)))
        },
        ey = function(e, t, n, r) {
            "sub" !== t.inline && "sup" !== t.inline || (Wv(r, Kv(e, "fontSize"), Xv(e, "fontSize", "")), e.remove(e.select("sup" === t.inline ? "sub" : "sup", r), !0))
        },
        ty = function(e, t, n, r) {
            r && !1 !== t.merge_siblings && (r = $v(e, Wh.getNonWhiteSpaceSibling(r), r), r = $v(e, r, Wh.getNonWhiteSpaceSibling(r, !0)))
        },
        ny = function(t, n, r, o, i) {
            fv.matchNode(t, i.parentNode, r, o) && Uv(t, n, o, i) || n.merge_with_parents && t.dom.getParent(i.parentNode, function(e) {
                if (fv.matchNode(t, e, r, o)) return Uv(t, n, o, i), !0
            })
        },
        ry = It.each,
        oy = function(p, g, h, r) {
            var e, t, v = p.formatter.get(g),
                y = v[0],
                o = !r && p.selection.isCollapsed(),
                i = p.dom,
                n = p.selection,
                b = function(n, e) {
                    if (e = e || y, n) {
                        if (e.onformat && e.onformat(n, e, h, r), ry(e.styles, function(e, t) {
                                i.setStyle(n, t, Wh.replaceVars(e, h))
                            }), e.styles) {
                            var t = i.getAttrib(n, "style");
                            t && n.setAttribute("data-mce-style", t)
                        }
                        ry(e.attributes, function(e, t) {
                            i.setAttrib(n, t, Wh.replaceVars(e, h))
                        }), ry(e.classes, function(e) {
                            e = Wh.replaceVars(e, h), i.hasClass(n, e) || i.addClass(n, e)
                        })
                    }
                },
                C = function(e, t) {
                    var n = !1;
                    return !!y.selector && (ry(e, function(e) {
                        if (!("collapsed" in e && e.collapsed !== o)) return i.is(t, e.selector) && !kc(t) ? (b(t, e), !(n = !0)) : void 0
                    }), n)
                },
                a = function(s, e, t, c) {
                    var l, f, d = [],
                        m = !0;
                    l = y.inline || y.block, f = s.create(l), b(f), Bv(s, e, function(e) {
                        var a, u = function(e) {
                            var t, n, r, o;
                            if (o = m, t = e.nodeName.toLowerCase(), n = e.parentNode.nodeName.toLowerCase(), 1 === e.nodeType && s.getContentEditable(e) && (o = m, m = "true" === s.getContentEditable(e), r = !0), Wh.isEq(t, "br")) return a = 0, void(y.block && s.remove(e));
                            if (y.wrapper && fv.matchNode(p, e, g, h)) a = 0;
                            else {
                                if (m && !r && y.block && !y.wrapper && Wh.isTextBlock(p, t) && Wh.isValid(p, n, l)) return e = s.rename(e, l), b(e), d.push(e), void(a = 0);
                                if (y.selector) {
                                    var i = C(v, e);
                                    if (!y.inline || i) return void(a = 0)
                                }!m || r || !Wh.isValid(p, l, t) || !Wh.isValid(p, n, l) || !c && 3 === e.nodeType && 1 === e.nodeValue.length && 65279 === e.nodeValue.charCodeAt(0) || kc(e) || y.inline && s.isBlock(e) ? (a = 0, ry(It.grep(e.childNodes), u), r && (m = o), a = 0) : (a || (a = s.clone(f, !1), e.parentNode.insertBefore(a, e), d.push(a)), a.appendChild(e))
                            }
                        };
                        ry(e, u)
                    }), !0 === y.links && ry(d, function(e) {
                        var t = function(e) {
                            "A" === e.nodeName && b(e, y), ry(It.grep(e.childNodes), t)
                        };
                        t(e)
                    }), ry(d, function(e) {
                        var t, n, r, o, i, a = function(e) {
                            var n = !1;
                            return ry(e.childNodes, function(e) {
                                if ((t = e) && 1 === t.nodeType && !Mc(t) && !kc(t) && !Oo.isBogus(t)) return n = e, !1;
                                var t
                            }), n
                        };
                        n = 0, ry(e.childNodes, function(e) {
                            Wh.isWhiteSpaceNode(e) || Mc(e) || n++
                        }), t = n, !(1 < d.length) && s.isBlock(e) || 0 !== t ? (y.inline || y.wrapper) && (y.exact || 1 !== t || ((o = a(r = e)) && !Mc(o) && fv.matchName(s, o, y) && (i = s.clone(o, !1), b(i), s.replace(i, r, !0), s.remove(o, 1)), e = i || r), Jv(p, v, h, e), ny(p, y, g, h, e), Zv(s, y, h, e), ey(s, y, h, e), ty(s, y, h, e)) : s.remove(e, 1)
                    })
                };
            if ("false" !== i.getContentEditable(n.getNode())) {
                if (y) {
                    if (r) r.nodeType ? C(v, r) || ((t = i.createRng()).setStartBefore(r), t.setEndAfter(r), a(i, ov(p, t, v), 0, !0)) : a(i, r, 0, !0);
                    else if (o && y.inline && !i.select("td[data-mce-selected],th[data-mce-selected]").length) ! function(e, t, n) {
                        var r, o, i, a, u, s, c = e.selection;
                        a = (r = c.getRng(!0)).startOffset, s = r.startContainer.nodeValue, (o = Tc(e.getBody(), c.getStart())) && (i = vv(o));
                        var l, f, d = /[^\s\u00a0\u00ad\u200b\ufeff]/;
                        s && 0 < a && a < s.length && d.test(s.charAt(a)) && d.test(s.charAt(a - 1)) ? (u = c.getBookmark(), r.collapse(!0), r = ov(e, r, e.formatter.get(t)), r = mv(r), e.formatter.apply(t, n, r), c.moveToBookmark(u)) : (o && i.nodeValue === pv || (l = e.getDoc(), f = yv(!0).dom(), i = (o = l.importNode(f, !0)).firstChild, r.insertNode(o), a = 1), e.formatter.apply(t, n, o), c.setCursorLocation(i, a))
                    }(p, g, h);
                    else {
                        var u = p.selection.getNode();
                        p.settings.forced_root_block || !v[0].defaultBlock || i.getParent(u, i.isBlock) || oy(p, v[0].defaultBlock), p.selection.setRng(Zc(p.selection.getRng())), e = Ec.getPersistentBookmark(p.selection, !0), a(i, ov(p, n.getRng(), v)), y.styles && Qv(i, y, h, u), n.moveToBookmark(e), Wh.moveStart(i, n, n.getRng()), p.nodeChanged()
                    }
                    Rv(g, p)
                }
            } else {
                r = n.getNode();
                for (var s = 0, c = v.length; s < c; s++)
                    if (v[s].ceFalseOverride && i.is(r, v[s].selector)) return void b(r, v[s])
            }
        },
        iy = {
            applyFormat: oy
        },
        ay = It.each,
        uy = function(e, t, n, r, o) {
            var i, a, u, s, c, l, f, d;
            null === t.get() && (a = e, u = {}, (i = t).set({}), a.on("NodeChange", function(n) {
                var r = Wh.getParents(a.dom, n.element),
                    o = {};
                r = It.grep(r, function(e) {
                    return 1 === e.nodeType && !e.getAttribute("data-mce-bogus")
                }), ay(i.get(), function(e, n) {
                    ay(r, function(t) {
                        return a.formatter.matchNode(t, n, {}, e.similar) ? (u[n] || (ay(e, function(e) {
                            e(!0, {
                                node: t,
                                format: n,
                                parents: r
                            })
                        }), u[n] = e), o[n] = e, !1) : !fv.matchesUnInheritedFormatSelector(a, t, n) && void 0
                    })
                }), ay(u, function(e, t) {
                    o[t] || (delete u[t], ay(e, function(e) {
                        e(!1, {
                            node: n.element,
                            format: t,
                            parents: r
                        })
                    }))
                })
            })), c = n, l = r, f = o, d = (s = t).get(), ay(c.split(","), function(e) {
                d[e] || (d[e] = [], d[e].similar = f), d[e].push(l)
            }), s.set(d)
        },
        sy = {
            get: function(r) {
                var t = {
                    valigntop: [{
                        selector: "td,th",
                        styles: {
                            verticalAlign: "top"
                        }
                    }],
                    valignmiddle: [{
                        selector: "td,th",
                        styles: {
                            verticalAlign: "middle"
                        }
                    }],
                    valignbottom: [{
                        selector: "td,th",
                        styles: {
                            verticalAlign: "bottom"
                        }
                    }],
                    alignleft: [{
                        selector: "figure.image",
                        collapsed: !1,
                        classes: "align-left",
                        ceFalseOverride: !0,
                        preview: "font-family font-size"
                    }, {
                        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                        styles: {
                            textAlign: "left"
                        },
                        inherit: !1,
                        preview: !1,
                        defaultBlock: "div"
                    }, {
                        selector: "img,table",
                        collapsed: !1,
                        styles: {
                            "float": "left"
                        },
                        preview: "font-family font-size"
                    }],
                    aligncenter: [{
                        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                        styles: {
                            textAlign: "center"
                        },
                        inherit: !1,
                        preview: "font-family font-size",
                        defaultBlock: "div"
                    }, {
                        selector: "figure.image",
                        collapsed: !1,
                        classes: "align-center",
                        ceFalseOverride: !0,
                        preview: "font-family font-size"
                    }, {
                        selector: "img",
                        collapsed: !1,
                        styles: {
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto"
                        },
                        preview: !1
                    }, {
                        selector: "table",
                        collapsed: !1,
                        styles: {
                            marginLeft: "auto",
                            marginRight: "auto"
                        },
                        preview: "font-family font-size"
                    }],
                    alignright: [{
                        selector: "figure.image",
                        collapsed: !1,
                        classes: "align-right",
                        ceFalseOverride: !0,
                        preview: "font-family font-size"
                    }, {
                        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                        styles: {
                            textAlign: "right"
                        },
                        inherit: !1,
                        preview: "font-family font-size",
                        defaultBlock: "div"
                    }, {
                        selector: "img,table",
                        collapsed: !1,
                        styles: {
                            "float": "right"
                        },
                        preview: "font-family font-size"
                    }],
                    alignjustify: [{
                        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                        styles: {
                            textAlign: "justify"
                        },
                        inherit: !1,
                        defaultBlock: "div",
                        preview: "font-family font-size"
                    }],
                    bold: [{
                        inline: "strong",
                        remove: "all"
                    }, {
                        inline: "span",
                        styles: {
                            fontWeight: "bold"
                        }
                    }, {
                        inline: "b",
                        remove: "all"
                    }],
                    italic: [{
                        inline: "em",
                        remove: "all"
                    }, {
                        inline: "span",
                        styles: {
                            fontStyle: "italic"
                        }
                    }, {
                        inline: "i",
                        remove: "all"
                    }],
                    underline: [{
                        inline: "span",
                        styles: {
                            textDecoration: "underline"
                        },
                        exact: !0
                    }, {
                        inline: "u",
                        remove: "all"
                    }],
                    strikethrough: [{
                        inline: "span",
                        styles: {
                            textDecoration: "line-through"
                        },
                        exact: !0
                    }, {
                        inline: "strike",
                        remove: "all"
                    }],
                    forecolor: {
                        inline: "span",
                        styles: {
                            color: "%value"
                        },
                        links: !0,
                        remove_similar: !0,
                        clear_child_styles: !0
                    },
                    hilitecolor: {
                        inline: "span",
                        styles: {
                            backgroundColor: "%value"
                        },
                        links: !0,
                        remove_similar: !0,
                        clear_child_styles: !0
                    },
                    fontname: {
                        inline: "span",
                        toggle: !1,
                        styles: {
                            fontFamily: "%value"
                        },
                        clear_child_styles: !0
                    },
                    fontsize: {
                        inline: "span",
                        toggle: !1,
                        styles: {
                            fontSize: "%value"
                        },
                        clear_child_styles: !0
                    },
                    fontsize_class: {
                        inline: "span",
                        attributes: {
                            "class": "%value"
                        }
                    },
                    blockquote: {
                        block: "blockquote",
                        wrapper: 1,
                        remove: "all"
                    },
                    subscript: {
                        inline: "sub"
                    },
                    superscript: {
                        inline: "sup"
                    },
                    code: {
                        inline: "code"
                    },
                    link: {
                        inline: "a",
                        selector: "a",
                        remove: "all",
                        split: !0,
                        deep: !0,
                        onmatch: function() {
                            return !0
                        },
                        onformat: function(n, e, t) {
                            It.each(t, function(e, t) {
                                r.setAttrib(n, t, e)
                            })
                        }
                    },
                    removeformat: [{
                        selector: "b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins",
                        remove: "all",
                        split: !0,
                        expand: !1,
                        block_expand: !0,
                        deep: !0
                    }, {
                        selector: "span",
                        attributes: ["style", "class"],
                        remove: "empty",
                        split: !0,
                        expand: !1,
                        deep: !0
                    }, {
                        selector: "*",
                        attributes: ["style", "class"],
                        split: !1,
                        expand: !1,
                        deep: !0
                    }]
                };
                return It.each("p h1 h2 h3 h4 h5 h6 div address pre div dt dd samp".split(/\s/), function(e) {
                    t[e] = {
                        block: e,
                        remove: "all"
                    }
                }), t
            }
        },
        cy = It.each,
        ly = vi.DOM,
        fy = function(e, t) {
            var n, o, r, m = t && t.schema || oi({}),
                p = function(e) {
                    var t, n, r;
                    return o = "string" == typeof e ? {
                        name: e,
                        classes: [],
                        attrs: {}
                    } : e, t = ly.create(o.name), n = t, (r = o).classes.length && ly.addClass(n, r.classes.join(" ")), ly.setAttribs(n, r.attrs), t
                },
                g = function(n, e, t) {
                    var r, o, i, a, u, s, c, l, f = 0 < e.length && e[0],
                        d = f && f.name;
                    if (u = d, s = "string" != typeof(a = n) ? a.nodeName.toLowerCase() : a, c = m.getElementRule(s), i = !(!(l = c && c.parentsRequired) || !l.length) && (u && -1 !== It.inArray(l, u) ? u : l[0])) d === i ? (o = e[0], e = e.slice(1)) : o = i;
                    else if (f) o = e[0], e = e.slice(1);
                    else if (!t) return n;
                    return o && (r = p(o)).appendChild(n), t && (r || (r = ly.create("div")).appendChild(n), It.each(t, function(e) {
                        var t = p(e);
                        r.insertBefore(t, n)
                    })), g(r, e, o && o.siblings)
                };
            return e && e.length ? (o = e[0], n = p(o), (r = ly.create("div")).appendChild(g(n, e.slice(1), o.siblings)), r) : ""
        },
        dy = function(e) {
            var t, a = {
                classes: [],
                attrs: {}
            };
            return "*" !== (e = a.selector = It.trim(e)) && (t = e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g, function(e, t, n, r, o) {
                switch (t) {
                    case "#":
                        a.attrs.id = n;
                        break;
                    case ".":
                        a.classes.push(n);
                        break;
                    case ":":
                        -1 !== It.inArray("checked disabled enabled read-only required".split(" "), n) && (a.attrs[n] = n)
                }
                if ("[" === r) {
                    var i = o.match(/([\w\-]+)(?:\=\"([^\"]+))?/);
                    i && (a.attrs[i[1]] = i[2])
                }
                return ""
            })), a.name = t || "div", a
        },
        my = function(e) {
            return e && "string" == typeof e ? (e = (e = e.split(/\s*,\s*/)[0]).replace(/\s*(~\+|~|\+|>)\s*/g, "$1"), It.map(e.split(/(?:>|\s+(?![^\[\]]+\]))/), function(e) {
                var t = It.map(e.split(/(?:~\+|~|\+)/), dy),
                    n = t.pop();
                return t.length && (n.siblings = t), n
            }).reverse()) : []
        },
        py = function(n, e) {
            var t, r, o, i, a, u, s = "";
            if (!1 === (u = n.settings.preview_styles)) return "";
            "string" != typeof u && (u = "font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow");
            var c = function(e) {
                return e.replace(/%(\w+)/g, "")
            };
            if ("string" == typeof e) {
                if (!(e = n.formatter.get(e))) return;
                e = e[0]
            }
            return "preview" in e && !1 === (u = e.preview) ? "" : (t = e.block || e.inline || "span", (i = my(e.selector)).length ? (i[0].name || (i[0].name = t), t = e.selector, r = fy(i, n)) : r = fy([t], n), o = ly.select(t, r)[0] || r.firstChild, cy(e.styles, function(e, t) {
                (e = c(e)) && ly.setStyle(o, t, e)
            }), cy(e.attributes, function(e, t) {
                (e = c(e)) && ly.setAttrib(o, t, e)
            }), cy(e.classes, function(e) {
                e = c(e), ly.hasClass(o, e) || ly.addClass(o, e)
            }), n.fire("PreviewFormats"), ly.setStyles(r, {
                position: "absolute",
                left: -65535
            }), n.getBody().appendChild(r), a = ly.getStyle(n.getBody(), "fontSize", !0), a = /px$/.test(a) ? parseInt(a, 10) : 0, cy(u.split(" "), function(e) {
                var t = ly.getStyle(o, e, !0);
                if (!("background-color" === e && /transparent|rgba\s*\([^)]+,\s*0\)/.test(t) && (t = ly.getStyle(n.getBody(), e, !0), "#ffffff" === ly.toHex(t).toLowerCase()) || "color" === e && "#000000" === ly.toHex(t).toLowerCase())) {
                    if ("font-size" === e && /em|%$/.test(t)) {
                        if (0 === a) return;
                        t = parseFloat(t) / (/%$/.test(t) ? 100 : 1) * a + "px"
                    }
                    "border" === e && t && (s += "padding:0 2px;"), s += e + ":" + t + ";"
                }
            }), n.fire("AfterPreviewFormats"), ly.remove(r), s)
        },
        gy = function(e, t, n, r, o) {
            var i = t.get(n);
            !fv.match(e, n, r, o) || "toggle" in i[0] && !i[0].toggle ? iy.applyFormat(e, n, r, o) : qv(e, n, r, o)
        },
        hy = function(e) {
            e.addShortcut("meta+b", "", "Bold"), e.addShortcut("meta+i", "", "Italic"), e.addShortcut("meta+u", "", "Underline");
            for (var t = 1; t <= 6; t++) e.addShortcut("access+" + t, "", ["FormatBlock", !1, "h" + t]);
            e.addShortcut("access+7", "", ["FormatBlock", !1, "p"]), e.addShortcut("access+8", "", ["FormatBlock", !1, "div"]), e.addShortcut("access+9", "", ["FormatBlock", !1, "address"])
        };

    function vy(e) {
        var t, n, r, o = (t = e, n = {}, (r = function(e, t) {
                e && ("string" != typeof e ? It.each(e, function(e, t) {
                    r(t, e)
                }) : (t = t.length ? t : [t], It.each(t, function(e) {
                    "undefined" == typeof e.deep && (e.deep = !e.selector), "undefined" == typeof e.split && (e.split = !e.selector || e.inline), "undefined" == typeof e.remove && e.selector && !e.inline && (e.remove = "none"), e.selector && e.inline && (e.mixed = !0, e.block_expand = !0), "string" == typeof e.classes && (e.classes = e.classes.split(/\s+/))
                }), n[e] = t))
            })(sy.get(t.dom)), r(t.settings.formats), {
                get: function(e) {
                    return e ? n[e] : n
                },
                register: r,
                unregister: function(e) {
                    return e && n[e] && delete n[e], n
                }
            }),
            i = ns(null);
        return hy(e), Ev(e), {
            get: o.get,
            register: o.register,
            unregister: o.unregister,
            apply: V.curry(iy.applyFormat, e),
            remove: V.curry(qv, e),
            toggle: V.curry(gy, e, o),
            match: V.curry(fv.match, e),
            matchAll: V.curry(fv.matchAll, e),
            matchNode: V.curry(fv.matchNode, e),
            canApply: V.curry(fv.canApply, e),
            formatChanged: V.curry(uy, e, i),
            getCssText: V.curry(py, e)
        }
    }
    var yy = function(a) {
            return function() {
                for (var e = new Array(arguments.length), t = 0; t < e.length; t++) e[t] = arguments[t];
                if (0 === e.length) throw new Error("Can't merge zero objects");
                for (var n = {}, r = 0; r < e.length; r++) {
                    var o = e[r];
                    for (var i in o) o.hasOwnProperty(i) && (n[i] = a(n[i], o[i]))
                }
                return n
            }
        },
        by = yy(function(e, t) {
            return k.isObject(e) && k.isObject(t) ? by(e, t) : t
        }),
        Cy = yy(function(e, t) {
            return t
        }),
        xy = {
            deepMerge: by,
            merge: Cy
        },
        wy = {
            register: function(t, s, c) {
                t.addAttributeFilter("data-mce-tabindex", function(e, t) {
                    for (var n, r = e.length; r--;)(n = e[r]).attr("tabindex", n.attributes.map["data-mce-tabindex"]), n.attr(t, null)
                }), t.addAttributeFilter("src,href,style", function(e, t) {
                    for (var n, r, o = e.length, i = "data-mce-" + t, a = s.url_converter, u = s.url_converter_scope; o--;)(r = (n = e[o]).attributes.map[i]) !== undefined ? (n.attr(t, 0 < r.length ? r : null), n.attr(i, null)) : (r = n.attributes.map[t], "style" === t ? r = c.serializeStyle(c.parseStyle(r), n.name) : a && (r = a.call(u, r, t, n.name)), n.attr(t, 0 < r.length ? r : null))
                }), t.addAttributeFilter("class", function(e) {
                    for (var t, n, r = e.length; r--;)(n = (t = e[r]).attr("class")) && (n = t.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g, ""), t.attr("class", 0 < n.length ? n : null))
                }), t.addAttributeFilter("data-mce-type", function(e, t, n) {
                    for (var r, o = e.length; o--;) "bookmark" !== (r = e[o]).attributes.map["data-mce-type"] || n.cleanup || r.remove()
                }), t.addNodeFilter("noscript", function(e) {
                    for (var t, n = e.length; n--;)(t = e[n].firstChild) && (t.value = Ko.decode(t.value))
                }), t.addNodeFilter("script,style", function(e, t) {
                    for (var n, r, o, i = e.length, a = function(e) {
                            return e.replace(/(<!--\[CDATA\[|\]\]-->)/g, "\n").replace(/^[\r\n]*|[\r\n]*$/g, "").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi, "").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g, "")
                        }; i--;) r = (n = e[i]).firstChild ? n.firstChild.value : "", "script" === t ? ((o = n.attr("type")) && n.attr("type", "mce-no/type" === o ? null : o.replace(/^mce\-/, "")), "xhtml" === s.element_format && 0 < r.length && (n.firstChild.value = "// <![CDATA[\n" + a(r) + "\n// ]]>")) : "xhtml" === s.element_format && 0 < r.length && (n.firstChild.value = "\x3c!--\n" + a(r) + "\n--\x3e")
                }), t.addNodeFilter("#comment", function(e) {
                    for (var t, n = e.length; n--;) 0 === (t = e[n]).value.indexOf("[CDATA[") ? (t.name = "#cdata", t.type = 4, t.value = t.value.replace(/^\[CDATA\[|\]\]$/g, "")) : 0 === t.value.indexOf("mce:protected ") && (t.name = "#text", t.type = 3, t.raw = !0, t.value = unescape(t.value).substr(14))
                }), t.addNodeFilter("xml:namespace,input", function(e, t) {
                    for (var n, r = e.length; r--;) 7 === (n = e[r]).type ? n.remove() : 1 === n.type && ("input" !== t || "type" in n.attributes.map || n.attr("type", "text"))
                }), t.addAttributeFilter("data-mce-type", function(e) {
                    H.each(e, function(e) {
                        "format-caret" === e.attr("data-mce-type") && (e.isEmpty(t.schema.getNonEmptyElements()) ? e.remove() : e.unwrap())
                    })
                }), t.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize", function(e, t) {
                    for (var n = e.length; n--;) e[n].attr(t, null)
                })
            },
            trimTrailingBr: function(e) {
                var t, n, r = function(e) {
                    return e && "br" === e.name
                };
                r(t = e.lastChild) && r(n = t.prev) && (t.remove(), n.remove())
            }
        },
        Ny = {
            process: function(e, t, n) {
                return f = n, (l = e) && l.hasEventListeners("PreProcess") && !f.no_events ? (o = t, i = n, c = (r = e).dom, o = o.cloneNode(!0), (a = document.implementation).createHTMLDocument && (u = a.createHTMLDocument(""), It.each("BODY" === o.nodeName ? o.childNodes : [o], function(e) {
                    u.body.appendChild(u.importNode(e, !0))
                }), o = "BODY" !== o.nodeName ? u.body.firstChild : u.body, s = c.doc, c.doc = u), cp(r, xy.merge(i, {
                    node: o
                })), s && (c.doc = s), o) : t;
                var r, o, i, a, u, s, c, l, f
            }
        },
        Ey = function(e, u, s) {
            e.addNodeFilter("font", function(e) {
                H.each(e, function(e) {
                    var t, n, r = u.parse(e.attr("style")),
                        o = e.attr("color"),
                        i = e.attr("face"),
                        a = e.attr("size");
                    o && (r.color = o), i && (r["font-family"] = i), a && (r["font-size"] = s[parseInt(e.attr("size"), 10) - 1]), e.name = "span", e.attr("style", u.serialize(r)), t = e, n = ["color", "face", "size"], H.each(n, function(e) {
                        t.attr(e, null)
                    })
                })
            })
        },
        Sy = function(e, t) {
            var n, r = ai();
            t.convert_fonts_to_spans && Ey(e, r, It.explode(t.font_size_legacy_values)), n = r, e.addNodeFilter("strike", function(e) {
                H.each(e, function(e) {
                    var t = n.parse(e.attr("style"));
                    t["text-decoration"] = "line-through", e.name = "span", e.attr("style", n.serialize(t))
                })
            })
        },
        ky = {
            register: function(e, t) {
                t.inline_styles && Sy(e, t)
            }
        },
        Ty = /^[ \t\r\n]*$/,
        Ay = {
            "#text": 3,
            "#comment": 8,
            "#cdata": 4,
            "#pi": 7,
            "#doctype": 10,
            "#document-fragment": 11
        },
        Ry = function(e, t, n) {
            var r, o, i = n ? "lastChild" : "firstChild",
                a = n ? "prev" : "next";
            if (e[i]) return e[i];
            if (e !== t) {
                if (r = e[a]) return r;
                for (o = e.parent; o && o !== t; o = o.parent)
                    if (r = o[a]) return r
            }
        },
        _y = function() {
            function a(e, t) {
                this.name = e, 1 === (this.type = t) && (this.attributes = [], this.attributes.map = {})
            }
            return a.create = function(e, t) {
                var n, r;
                if (n = new a(e, Ay[e] || 1), t)
                    for (r in t) n.attr(r, t[r]);
                return n
            }, a.prototype.replace = function(e) {
                return e.parent && e.remove(), this.insert(e, this), this.remove(), this
            }, a.prototype.attr = function(e, t) {
                var n, r;
                if ("string" != typeof e) {
                    for (r in e) this.attr(r, e[r]);
                    return this
                }
                if (n = this.attributes) {
                    if (t !== undefined) {
                        if (null === t) {
                            if (e in n.map)
                                for (delete n.map[e], r = n.length; r--;)
                                    if (n[r].name === e) return n = n.splice(r, 1), this;
                            return this
                        }
                        if (e in n.map) {
                            for (r = n.length; r--;)
                                if (n[r].name === e) {
                                    n[r].value = t;
                                    break
                                }
                        } else n.push({
                            name: e,
                            value: t
                        });
                        return n.map[e] = t, this
                    }
                    return n.map[e]
                }
            }, a.prototype.clone = function() {
                var e, t, n, r, o, i = new a(this.name, this.type);
                if (n = this.attributes) {
                    for ((o = []).map = {}, e = 0, t = n.length; e < t; e++) "id" !== (r = n[e]).name && (o[o.length] = {
                        name: r.name,
                        value: r.value
                    }, o.map[r.name] = r.value);
                    i.attributes = o
                }
                return i.value = this.value, i.shortEnded = this.shortEnded, i
            }, a.prototype.wrap = function(e) {
                return this.parent.insert(e, this), e.append(this), this
            }, a.prototype.unwrap = function() {
                var e, t;
                for (e = this.firstChild; e;) t = e.next, this.insert(e, this, !0), e = t;
                this.remove()
            }, a.prototype.remove = function() {
                var e = this.parent,
                    t = this.next,
                    n = this.prev;
                return e && (e.firstChild === this ? (e.firstChild = t) && (t.prev = null) : n.next = t, e.lastChild === this ? (e.lastChild = n) && (n.next = null) : t.prev = n, this.parent = this.next = this.prev = null), this
            }, a.prototype.append = function(e) {
                var t;
                return e.parent && e.remove(), (t = this.lastChild) ? ((t.next = e).prev = t, this.lastChild = e) : this.lastChild = this.firstChild = e, e.parent = this, e
            }, a.prototype.insert = function(e, t, n) {
                var r;
                return e.parent && e.remove(), r = t.parent || this, n ? (t === r.firstChild ? r.firstChild = e : t.prev.next = e, e.prev = t.prev, (e.next = t).prev = e) : (t === r.lastChild ? r.lastChild = e : t.next.prev = e, e.next = t.next, (e.prev = t).next = e), e.parent = r, e
            }, a.prototype.getAll = function(e) {
                var t, n = [];
                for (t = this.firstChild; t; t = Ry(t, this)) t.name === e && n.push(t);
                return n
            }, a.prototype.empty = function() {
                var e, t, n;
                if (this.firstChild) {
                    for (e = [], n = this.firstChild; n; n = Ry(n, this)) e.push(n);
                    for (t = e.length; t--;)(n = e[t]).parent = n.firstChild = n.lastChild = n.next = n.prev = null
                }
                return this.firstChild = this.lastChild = null, this
            }, a.prototype.isEmpty = function(e, t, n) {
                var r, o, i = this.firstChild;
                if (t = t || {}, i)
                    do {
                        if (1 === i.type) {
                            if (i.attributes.map["data-mce-bogus"]) continue;
                            if (e[i.name]) return !1;
                            for (r = i.attributes.length; r--;)
                                if ("name" === (o = i.attributes[r].name) || 0 === o.indexOf("data-mce-bookmark")) return !1
                        }
                        if (8 === i.type) return !1;
                        if (3 === i.type && !Ty.test(i.value)) return !1;
                        if (3 === i.type && i.parent && t[i.parent.name] && Ty.test(i.value)) return !1;
                        if (n && n(i)) return !1
                    } while (i = Ry(i, this));
                return !0
            }, a.prototype.walk = function(e) {
                return Ry(this, null, e)
            }, a
        }(),
        By = function(e, t, n, r) {
            (e.padd_empty_with_br || t.insert) && n[r.name] ? r.empty().append(new _y("br", 1)).shortEnded = !0 : r.empty().append(new _y("#text", 3)).value = "\xa0"
        },
        Dy = function(e) {
            return Oy(e, "#text") && "\xa0" === e.firstChild.value
        },
        Oy = function(e, t) {
            return e && e.firstChild && e.firstChild === e.lastChild && e.firstChild.name === t
        },
        Py = function(r, e, t, n) {
            return n.isEmpty(e, t, function(e) {
                return t = e, (n = r.getElementRule(t.name)) && n.paddEmpty;
                var t, n
            })
        },
        Ly = function(e, t) {
            return e && (t[e.name] || "br" === e.name)
        },
        Iy = function(e, g) {
            var h = e.schema;
            g.remove_trailing_brs && e.addNodeFilter("br", function(e, t, n) {
                var r, o, i, a, u, s, c, l, f = e.length,
                    d = It.extend({}, h.getBlockElements()),
                    m = h.getNonEmptyElements(),
                    p = h.getNonEmptyElements();
                for (d.body = 1, r = 0; r < f; r++)
                    if (i = (o = e[r]).parent, d[o.parent.name] && o === i.lastChild) {
                        for (u = o.prev; u;) {
                            if ("span" !== (s = u.name) || "bookmark" !== u.attr("data-mce-type")) {
                                if ("br" !== s) break;
                                if ("br" === s) {
                                    o = null;
                                    break
                                }
                            }
                            u = u.prev
                        }
                        o && (o.remove(), Py(h, m, p, i) && (c = h.getElementRule(i.name)) && (c.removeEmpty ? i.remove() : c.paddEmpty && By(g, n, d, i)))
                    } else {
                        for (a = o; i && i.firstChild === a && i.lastChild === a && !d[(a = i).name];) i = i.parent;
                        a === i && !0 !== g.padd_empty_with_br && ((l = new _y("#text", 3)).value = "\xa0", o.replace(l))
                    }
            }), e.addAttributeFilter("href", function(e) {
                var t, n, r, o = e.length;
                if (!g.allow_unsafe_link_target)
                    for (; o--;) "a" === (t = e[o]).name && "_blank" === t.attr("target") && t.attr("rel", (n = t.attr("rel"), r = n ? It.trim(n) : "", /\b(noopener)\b/g.test(r) ? r : r.split(" ").filter(function(e) {
                        return 0 < e.length
                    }).concat(["noopener"]).sort().join(" ")))
            }), g.allow_html_in_named_anchor || e.addAttributeFilter("id,name", function(e) {
                for (var t, n, r, o, i = e.length; i--;)
                    if ("a" === (o = e[i]).name && o.firstChild && !o.attr("href"))
                        for (r = o.parent, t = o.lastChild; n = t.prev, r.insert(t, o), t = n;);
            }), g.fix_list_elements && e.addNodeFilter("ul,ol", function(e) {
                for (var t, n, r = e.length; r--;)
                    if ("ul" === (n = (t = e[r]).parent).name || "ol" === n.name)
                        if (t.prev && "li" === t.prev.name) t.prev.append(t);
                        else {
                            var o = new _y("li", 1);
                            o.attr("style", "list-style-type: none"), t.wrap(o)
                        }
            }), g.validate && h.getValidClasses() && e.addAttributeFilter("class", function(e) {
                for (var t, n, r, o, i, a, u, s = e.length, c = h.getValidClasses(); s--;) {
                    for (n = (t = e[s]).attr("class").split(" "), i = "", r = 0; r < n.length; r++) o = n[r], u = !1, (a = c["*"]) && a[o] && (u = !0), a = c[t.name], !u && a && a[o] && (u = !0), u && (i && (i += " "), i += o);
                    i.length || (i = null), t.attr("class", i)
                }
            })
        },
        My = It.makeMap,
        Fy = It.each,
        zy = It.explode,
        Uy = It.extend;

    function qy(k, T) {
        void 0 === T && (T = oi());
        var A = {},
            R = [],
            _ = {},
            B = {};
        (k = k || {}).validate = !("validate" in k) || k.validate, k.root_name = k.root_name || "body";
        var D = function(e) {
                var t, n, r;
                n in A && ((r = _[n]) ? r.push(e) : _[n] = [e]), t = R.length;
                for (; t--;)(n = R[t].name) in e.attributes.map && ((r = B[n]) ? r.push(e) : B[n] = [e]);
                return e
            },
            e = {
                schema: T,
                addAttributeFilter: function(e, n) {
                    Fy(zy(e), function(e) {
                        var t;
                        for (t = 0; t < R.length; t++)
                            if (R[t].name === e) return void R[t].callbacks.push(n);
                        R.push({
                            name: e,
                            callbacks: [n]
                        })
                    })
                },
                getAttributeFilters: function() {
                    return [].concat(R)
                },
                addNodeFilter: function(e, n) {
                    Fy(zy(e), function(e) {
                        var t = A[e];
                        t || (A[e] = t = []), t.push(n)
                    })
                },
                getNodeFilters: function() {
                    var e = [];
                    for (var t in A) A.hasOwnProperty(t) && e.push({
                        name: t,
                        callbacks: A[t]
                    });
                    return e
                },
                filterNode: D,
                parse: function(e, a) {
                    var t, n, r, o, i, u, s, c, l, f, d, m = [];
                    a = a || {}, _ = {}, B = {}, l = Uy(My("script,style,head,html,body,title,meta,param"), T.getBlockElements());
                    var p = T.getNonEmptyElements(),
                        g = T.children,
                        h = k.validate,
                        v = "forced_root_block" in a ? a.forced_root_block : k.forced_root_block,
                        y = T.getWhiteSpaceElements(),
                        b = /^[ \t\r\n]+/,
                        C = /[ \t\r\n]+$/,
                        x = /[ \t\r\n]+/g,
                        w = /^[ \t\r\n]+$/;
                    f = y.hasOwnProperty(a.context) || y.hasOwnProperty(k.root_name);
                    var N = function(e, t) {
                            var n, r = new _y(e, t);
                            return e in A && ((n = _[e]) ? n.push(r) : _[e] = [r]), r
                        },
                        E = function(e) {
                            var t, n, r, o, i = T.getBlockElements();
                            for (t = e.prev; t && 3 === t.type;) {
                                if (0 < (r = t.value.replace(C, "")).length) return void(t.value = r);
                                if (n = t.next) {
                                    if (3 === n.type && n.value.length) {
                                        t = t.prev;
                                        continue
                                    }
                                    if (!i[n.name] && "script" !== n.name && "style" !== n.name) {
                                        t = t.prev;
                                        continue
                                    }
                                }
                                o = t.prev, t.remove(), t = o
                            }
                        };
                    t = vh({
                        validate: h,
                        allow_script_urls: k.allow_script_urls,
                        allow_conditional_comments: k.allow_conditional_comments,
                        self_closing_elements: function(e) {
                            var t, n = {};
                            for (t in e) "li" !== t && "p" !== t && (n[t] = e[t]);
                            return n
                        }(T.getSelfClosingElements()),
                        cdata: function(e) {
                            d.append(N("#cdata", 4)).value = e
                        },
                        text: function(e, t) {
                            var n;
                            f || (e = e.replace(x, " "), Ly(d.lastChild, l) && (e = e.replace(b, ""))), 0 !== e.length && ((n = N("#text", 3)).raw = !!t, d.append(n).value = e)
                        },
                        comment: function(e) {
                            d.append(N("#comment", 8)).value = e
                        },
                        pi: function(e, t) {
                            d.append(N(e, 7)).value = t, E(d)
                        },
                        doctype: function(e) {
                            d.append(N("#doctype", 10)).value = e, E(d)
                        },
                        start: function(e, t, n) {
                            var r, o, i, a, u;
                            if (i = h ? T.getElementRule(e) : {}) {
                                for ((r = N(i.outputName || e, 1)).attributes = t, r.shortEnded = n, d.append(r), (u = g[d.name]) && g[r.name] && !u[r.name] && m.push(r), o = R.length; o--;)(a = R[o].name) in t.map && ((s = B[a]) ? s.push(r) : B[a] = [r]);
                                l[e] && E(r), n || (d = r), !f && y[e] && (f = !0)
                            }
                        },
                        end: function(e) {
                            var t, n, r, o, i;
                            if (n = h ? T.getElementRule(e) : {}) {
                                if (l[e] && !f) {
                                    if ((t = d.firstChild) && 3 === t.type)
                                        if (0 < (r = t.value.replace(b, "")).length) t.value = r, t = t.next;
                                        else
                                            for (o = t.next, t.remove(), t = o; t && 3 === t.type;) r = t.value, o = t.next, (0 === r.length || w.test(r)) && (t.remove(), t = o), t = o;
                                    if ((t = d.lastChild) && 3 === t.type)
                                        if (0 < (r = t.value.replace(C, "")).length) t.value = r, t = t.prev;
                                        else
                                            for (o = t.prev, t.remove(), t = o; t && 3 === t.type;) r = t.value, o = t.prev, (0 === r.length || w.test(r)) && (t.remove(), t = o), t = o
                                }
                                if (f && y[e] && (f = !1), n.removeEmpty && Py(T, p, y, d) && !d.attributes.map.name && !d.attr("id")) return i = d.parent, l[d.name] ? d.empty().remove() : d.unwrap(), void(d = i);
                                n.paddEmpty && (Dy(d) || Py(T, p, y, d)) && By(k, a, l, d), d = d.parent
                            }
                        }
                    }, T);
                    var S = d = new _y(a.context || k.root_name, 11);
                    if (t.parse(e), h && m.length && (a.context ? a.invalid = !0 : function(e) {
                            var t, n, r, o, i, a, u, s, c, l, f, d, m, p, g, h;
                            for (d = My("tr,td,th,tbody,thead,tfoot,table"), l = T.getNonEmptyElements(), f = T.getWhiteSpaceElements(), m = T.getTextBlockElements(), p = T.getSpecialElements(), t = 0; t < e.length; t++)
                                if ((n = e[t]).parent && !n.fixed)
                                    if (m[n.name] && "li" === n.parent.name) {
                                        for (g = n.next; g && m[g.name];) g.name = "li", g.fixed = !0, n.parent.insert(g, n.parent), g = g.next;
                                        n.unwrap(n)
                                    } else {
                                        for (o = [n], r = n.parent; r && !T.isValidChild(r.name, n.name) && !d[r.name]; r = r.parent) o.push(r);
                                        if (r && 1 < o.length) {
                                            for (o.reverse(), i = a = D(o[0].clone()), c = 0; c < o.length - 1; c++) {
                                                for (T.isValidChild(a.name, o[c].name) ? (u = D(o[c].clone()), a.append(u)) : u = a, s = o[c].firstChild; s && s !== o[c + 1];) h = s.next, u.append(s), s = h;
                                                a = u
                                            }
                                            Py(T, l, f, i) ? r.insert(n, o[0], !0) : (r.insert(i, o[0], !0), r.insert(n, i)), r = o[0], (Py(T, l, f, r) || Oy(r, "br")) && r.empty().remove()
                                        } else if (n.parent) {
                                            if ("li" === n.name) {
                                                if ((g = n.prev) && ("ul" === g.name || "ul" === g.name)) {
                                                    g.append(n);
                                                    continue
                                                }
                                                if ((g = n.next) && ("ul" === g.name || "ul" === g.name)) {
                                                    g.insert(n, g.firstChild, !0);
                                                    continue
                                                }
                                                n.wrap(D(new _y("ul", 1)));
                                                continue
                                            }
                                            T.isValidChild(n.parent.name, "div") && T.isValidChild("div", n.name) ? n.wrap(D(new _y("div", 1))) : p[n.name] ? n.empty().remove() : n.unwrap()
                                        }
                                    }
                        }(m)), v && ("body" === S.name || a.isRootContent) && function() {
                            var e, t, n = S.firstChild,
                                r = function(e) {
                                    e && ((n = e.firstChild) && 3 === n.type && (n.value = n.value.replace(b, "")), (n = e.lastChild) && 3 === n.type && (n.value = n.value.replace(C, "")))
                                };
                            if (T.isValidChild(S.name, v.toLowerCase())) {
                                for (; n;) e = n.next, 3 === n.type || 1 === n.type && "p" !== n.name && !l[n.name] && !n.attr("data-mce-type") ? (t || ((t = N(v, 1)).attr(k.forced_root_block_attrs), S.insert(t, n)), t.append(n)) : (r(t), t = null), n = e;
                                r(t)
                            }
                        }(), !a.invalid) {
                        for (c in _) {
                            for (s = A[c], i = (n = _[c]).length; i--;) n[i].parent || n.splice(i, 1);
                            for (r = 0, o = s.length; r < o; r++) s[r](n, c, a)
                        }
                        for (r = 0, o = R.length; r < o; r++)
                            if ((s = R[r]).name in B) {
                                for (i = (n = B[s.name]).length; i--;) n[i].parent || n.splice(i, 1);
                                for (i = 0, u = s.callbacks.length; i < u; i++) s.callbacks[i](n, s.name, a)
                            }
                    }
                    return S
                }
            };
        return Iy(e, k), ky.register(e, k), e
    }
    var Vy = function(e, t, n) {
            -1 === It.inArray(t, n) && (e.addAttributeFilter(n, function(e, t) {
                for (var n = e.length; n--;) e[n].attr(t, null)
            }), t.push(n))
        },
        Hy = function(e, t, n) {
            var r = _i(n.getInner ? t.innerHTML : e.getOuterHTML(t));
            return n.selection || wo(Vn.fromDom(t)) ? r : It.trim(r)
        },
        jy = function(e, t, n) {
            var r = n.selection ? xy.merge({
                    forced_root_block: !1
                }, n) : n,
                o = e.parse(t, r);
            return wy.trimTrailingBr(o), o
        },
        $y = function(e, t, n, r, o) {
            var i, a, u, s, c = (i = r, Jc(t, n).serialize(i));
            return a = e, s = c, !(u = o).no_events && a ? lp(a, xy.merge(u, {
                content: s
            })).content : s
        };

    function Wy(e, t) {
        var a, u, s, c, l, n, r = (a = e, n = ["data-mce-selected"], s = (u = t) && u.dom ? u.dom : vi.DOM, c = u && u.schema ? u.schema : oi(a), a.entity_encoding = a.entity_encoding || "named", a.remove_trailing_brs = !("remove_trailing_brs" in a) || a.remove_trailing_brs, l = qy(a, c), wy.register(l, a, s), {
            schema: c,
            addNodeFilter: l.addNodeFilter,
            addAttributeFilter: l.addAttributeFilter,
            serialize: function(e, t) {
                var n = xy.merge({
                        format: "html"
                    }, t || {}),
                    r = Ny.process(u, e, n),
                    o = Hy(s, r, n),
                    i = jy(l, o, n);
                return "tree" === n.format ? i : $y(u, a, c, i, n)
            },
            addRules: function(e) {
                c.addValidElements(e)
            },
            setRules: function(e) {
                c.setValidElements(e)
            },
            addTempAttr: V.curry(Vy, l, n),
            getTempAttrs: function() {
                return n
            }
        });
        return {
            schema: r.schema,
            addNodeFilter: r.addNodeFilter,
            addAttributeFilter: r.addAttributeFilter,
            serialize: r.serialize,
            addRules: r.addRules,
            setRules: r.setRules,
            addTempAttr: r.addTempAttr,
            getTempAttrs: r.getTempAttrs
        }
    }

    function Ky(e) {
        return {
            getBookmark: V.curry(Lc, e),
            moveToBookmark: V.curry(Ic, e)
        }
    }(Ky || (Ky = {})).isBookmarkNode = Mc;
    var Xy = Ky,
        Yy = Oo.isContentEditableFalse,
        Gy = Oo.isContentEditableTrue,
        Jy = function(r, a) {
            var u, s, c, l, f, d, m, p, g, h, v, y, i, b, C, x, w, N = a.dom,
                E = It.each,
                S = a.getDoc(),
                k = document,
                T = Math.abs,
                A = Math.round,
                R = a.getBody();
            l = {
                nw: [0, 0, -1, -1],
                ne: [1, 0, 1, -1],
                se: [1, 1, 1, 1],
                sw: [0, 1, -1, 1]
            };
            var e = ".mce-content-body";
            a.contentStyles.push(e + " div.mce-resizehandle {position: absolute;border: 1px solid black;box-sizing: content-box;background: #FFF;width: 7px;height: 7px;z-index: 10000}" + e + " .mce-resizehandle:hover {background: #000}" + e + " img[data-mce-selected]," + e + " hr[data-mce-selected] {outline: 1px solid black;resize: none}" + e + " .mce-clonedresizable {position: absolute;" + (ve.gecko ? "" : "outline: 1px dashed black;") + "opacity: .5;filter: alpha(opacity=50);z-index: 10000}" + e + " .mce-resize-helper {background: #555;background: rgba(0,0,0,0.75);border-radius: 3px;border: 1px;color: white;display: none;font-family: sans-serif;font-size: 12px;white-space: nowrap;line-height: 14px;margin: 5px 10px;padding: 5px;position: absolute;z-index: 10001}");
            var _ = function(e) {
                    return e && ("IMG" === e.nodeName || a.dom.is(e, "figure.image"))
                },
                n = function(e) {
                    var t, n, r = e.target;
                    t = e, n = a.selection.getRng(), !_(t.target) || ih(t.clientX, t.clientY, n) || e.isDefaultPrevented() || (e.preventDefault(), a.selection.select(r))
                },
                B = function(e) {
                    return a.dom.is(e, "figure.image") ? e.querySelector("img") : e
                },
                D = function(e) {
                    var t = a.settings.object_resizing;
                    return !1 !== t && !ve.iOS && ("string" != typeof t && (t = "table,img,figure.image,div"), "false" !== e.getAttribute("data-mce-resize") && e !== a.getBody() && Pr.is(Vn.fromDom(e), t))
                },
                O = function(e) {
                    var t, n, r, o;
                    t = e.screenX - d, n = e.screenY - m, b = t * f[2] + h, C = n * f[3] + v, b = b < 5 ? 5 : b, C = C < 5 ? 5 : C, (_(u) && !1 !== a.settings.resize_img_proportional ? !sh.modifierPressed(e) : sh.modifierPressed(e) || _(u) && f[2] * f[3] != 0) && (T(t) > T(n) ? (C = A(b * y), b = A(C / y)) : (b = A(C / y), C = A(b * y))), N.setStyles(B(s), {
                        width: b,
                        height: C
                    }), r = 0 < (r = f.startPos.x + t) ? r : 0, o = 0 < (o = f.startPos.y + n) ? o : 0, N.setStyles(c, {
                        left: r,
                        top: o,
                        display: "block"
                    }), c.innerHTML = b + " &times; " + C, f[2] < 0 && s.clientWidth <= b && N.setStyle(s, "left", p + (h - b)), f[3] < 0 && s.clientHeight <= C && N.setStyle(s, "top", g + (v - C)), (t = R.scrollWidth - x) + (n = R.scrollHeight - w) != 0 && N.setStyles(c, {
                        left: r - t,
                        top: o - n
                    }), i || (mp(a, u, h, v), i = !0)
                },
                P = function() {
                    i = !1;
                    var e = function(e, t) {
                        t && (u.style[e] || !a.schema.isValid(u.nodeName.toLowerCase(), e) ? N.setStyle(B(u), e, t) : N.setAttrib(B(u), e, t))
                    };
                    e("width", b), e("height", C), N.unbind(S, "mousemove", O), N.unbind(S, "mouseup", P), k !== S && (N.unbind(k, "mousemove", O), N.unbind(k, "mouseup", P)), N.remove(s), N.remove(c), o(u), pp(a, u, b, C), N.setAttrib(u, "style", N.getAttrib(u, "style")), a.nodeChanged()
                },
                o = function(e) {
                    var t, r, o, n, i;
                    L(), F(), t = N.getPos(e, R), p = t.x, g = t.y, i = e.getBoundingClientRect(), r = i.width || i.right - i.left, o = i.height || i.bottom - i.top, u !== e && (u = e, b = C = 0), n = a.fire("ObjectSelected", {
                        target: e
                    }), D(e) && !n.isDefaultPrevented() ? E(l, function(n, e) {
                        var t;
                        (t = N.get("mceResizeHandle" + e)) && N.remove(t), t = N.add(R, "div", {
                            id: "mceResizeHandle" + e,
                            "data-mce-bogus": "all",
                            "class": "mce-resizehandle",
                            unselectable: !0,
                            style: "cursor:" + e + "-resize; margin:0; padding:0"
                        }), 11 === ve.ie && (t.contentEditable = !1), N.bind(t, "mousedown", function(e) {
                            var t;
                            e.stopImmediatePropagation(), e.preventDefault(), d = (t = e).screenX, m = t.screenY, h = B(u).clientWidth, v = B(u).clientHeight, y = v / h, (f = n).startPos = {
                                x: r * n[0] + p,
                                y: o * n[1] + g
                            }, x = R.scrollWidth, w = R.scrollHeight, s = u.cloneNode(!0), N.addClass(s, "mce-clonedresizable"), N.setAttrib(s, "data-mce-bogus", "all"), s.contentEditable = !1, s.unSelectabe = !0, N.setStyles(s, {
                                left: p,
                                top: g,
                                margin: 0
                            }), s.removeAttribute("data-mce-selected"), R.appendChild(s), N.bind(S, "mousemove", O), N.bind(S, "mouseup", P), k !== S && (N.bind(k, "mousemove", O), N.bind(k, "mouseup", P)), c = N.add(R, "div", {
                                "class": "mce-resize-helper",
                                "data-mce-bogus": "all"
                            }, h + " &times; " + v)
                        }), n.elm = t, N.setStyles(t, {
                            left: r * n[0] + p - t.offsetWidth / 2,
                            top: o * n[1] + g - t.offsetHeight / 2
                        })
                    }) : L(), u.setAttribute("data-mce-selected", "1")
                },
                L = function() {
                    var e, t;
                    for (e in F(), u && u.removeAttribute("data-mce-selected"), l)(t = N.get("mceResizeHandle" + e)) && (N.unbind(t), N.remove(t))
                },
                I = function(e) {
                    var t, n = function(e, t) {
                        if (e)
                            do {
                                if (e === t) return !0
                            } while (e = e.parentNode)
                    };
                    i || a.removed || (E(N.select("img[data-mce-selected],hr[data-mce-selected]"), function(e) {
                        e.removeAttribute("data-mce-selected")
                    }), t = "mousedown" === e.type ? e.target : r.getNode(), n(t = N.$(t).closest("table,img,figure.image,hr")[0], R) && (z(), n(r.getStart(!0), t) && n(r.getEnd(!0), t)) ? o(t) : L())
                },
                M = function(e) {
                    return Yy(function(e, t) {
                        for (; t && t !== e;) {
                            if (Gy(t) || Yy(t)) return t;
                            t = t.parentNode
                        }
                        return null
                    }(a.getBody(), e))
                },
                F = function() {
                    for (var e in l) {
                        var t = l[e];
                        t.elm && (N.unbind(t.elm), delete t.elm)
                    }
                },
                z = function() {
                    try {
                        a.getDoc().execCommand("enableObjectResizing", !1, !1)
                    } catch (e) {}
                };
            return a.on("init", function() {
                z(), ve.ie && 11 <= ve.ie && (a.on("mousedown click", function(e) {
                    var t = e.target,
                        n = t.nodeName;
                    i || !/^(TABLE|IMG|HR)$/.test(n) || M(t) || (2 !== e.button && a.selection.select(t, "TABLE" === n), "mousedown" === e.type && a.nodeChanged())
                }), a.dom.bind(R, "mscontrolselect", function(e) {
                    var t = function(e) {
                        we.setEditorTimeout(a, function() {
                            a.selection.select(e)
                        })
                    };
                    if (M(e.target)) return e.preventDefault(), void t(e.target);
                    /^(TABLE|IMG|HR)$/.test(e.target.nodeName) && (e.preventDefault(), "IMG" === e.target.tagName && t(e.target))
                }));
                var t = we.throttle(function(e) {
                    a.composing || I(e)
                });
                a.on("nodechange ResizeEditor ResizeWindow drop FullscreenStateChanged", t), a.on("keyup compositionend", function(e) {
                    u && "TABLE" === u.nodeName && t(e)
                }), a.on("hide blur", L), a.on("contextmenu", n)
            }), a.on("remove", F), {
                isResizable: D,
                showResizeRect: o,
                hideResizeRect: L,
                updateResizeRect: I,
                destroy: function() {
                    u = s = null
                }
            }
        },
        Qy = function(e) {
            return Oo.isContentEditableTrue(e) || Oo.isContentEditableFalse(e)
        },
        Zy = function(e, t, n) {
            var r, o, i, a, u, s = n;
            if (s.caretPositionFromPoint)(o = s.caretPositionFromPoint(e, t)) && ((r = n.createRange()).setStart(o.offsetNode, o.offset), r.collapse(!0));
            else if (n.caretRangeFromPoint) r = n.caretRangeFromPoint(e, t);
            else if (s.body.createTextRange) {
                r = s.body.createTextRange();
                try {
                    r.moveToPoint(e, t), r.collapse(!0)
                } catch (c) {
                    r = function(e, n, t) {
                        var r, o, i;
                        if (r = t.elementFromPoint(e, n), o = t.body.createTextRange(), r && "HTML" !== r.tagName || (r = t.body), o.moveToElementText(r), 0 < (i = (i = It.toArray(o.getClientRects())).sort(function(e, t) {
                                return (e = Math.abs(Math.max(e.top - n, e.bottom - n))) - (t = Math.abs(Math.max(t.top - n, t.bottom - n)))
                            })).length) {
                            n = (i[0].bottom + i[0].top) / 2;
                            try {
                                return o.moveToPoint(e, n), o.collapse(!0), o
                            } catch (a) {}
                        }
                        return null
                    }(e, t, n)
                }
                return i = r, a = n.body, u = i && i.parentElement ? i.parentElement() : null, Oo.isContentEditableFalse(function(e, t, n) {
                    for (; e && e !== t;) {
                        if (n(e)) return e;
                        e = e.parentNode
                    }
                    return null
                }(u, a, Qy)) ? null : i
            }
            return r
        },
        eb = function(n, e) {
            return H.map(e, function(e) {
                var t = n.fire("GetSelectionRange", {
                    range: e
                });
                return t.range !== e ? t.range : e
            })
        },
        tb = function(e, t) {
            return Vn.fromDom(e.dom().cloneNode(t))
        },
        nb = function(e) {
            return tb(e, !0)
        },
        rb = function(e) {
            return tb(e, !1)
        },
        ob = nb,
        ib = function(e, t) {
            var n = (t || document).createDocumentFragment();
            return H.each(e, function(e) {
                n.appendChild(e.dom())
            }), Vn.fromDom(n)
        },
        ab = kr.immutable("element", "width", "rows"),
        ub = kr.immutable("element", "cells"),
        sb = kr.immutable("x", "y"),
        cb = function(e, t) {
            var n = parseInt(lr.get(e, t), 10);
            return isNaN(n) ? 1 : n
        },
        lb = function(e) {
            return H.foldl(e, function(e, t) {
                return t.cells().length > e ? t.cells().length : e
            }, 0)
        },
        fb = function(e, t) {
            for (var n = e.rows(), r = 0; r < n.length; r++)
                for (var o = n[r].cells(), i = 0; i < o.length; i++)
                    if (Mr.eq(o[i], t)) return A.some(sb(i, r));
            return A.none()
        },
        db = function(e, t, n, r, o) {
            for (var i = [], a = e.rows(), u = n; u <= o; u++) {
                var s = a[u].cells(),
                    c = t < r ? s.slice(t, r + 1) : s.slice(r, t + 1);
                i.push(ub(a[u].element(), c))
            }
            return i
        },
        mb = function(e) {
            var o = ab(rb(e), 0, []);
            return H.each(hu(e, "tr"), function(n, r) {
                H.each(hu(n, "td,th"), function(e, t) {
                    ! function(e, t, n, r, o) {
                        for (var i = cb(o, "rowspan"), a = cb(o, "colspan"), u = e.rows(), s = n; s < n + i; s++) {
                            u[s] || (u[s] = ub(ob(r), []));
                            for (var c = t; c < t + a; c++) u[s].cells()[c] = s === n && c === t ? o : rb(o)
                        }
                    }(o, function(e, t, n) {
                        for (; r = t, o = n, i = void 0, ((i = e.rows())[o] ? i[o].cells() : [])[r];) t++;
                        var r, o, i;
                        return t
                    }(o, t, r), r, n, e)
                })
            }), ab(o.element(), lb(o.rows()), o.rows())
        },
        pb = function(e) {
            return i = t = e, n = H.map(i.rows(), function(e) {
                var t = H.map(e.cells(), function(e) {
                        var t = ob(e);
                        return lr.remove(t, "colspan"), lr.remove(t, "rowspan"), t
                    }),
                    n = rb(e.element());
                return qc(n, t), n
            }), r = rb(t.element()), o = Vn.fromTag("tbody"), qc(o, n), Hu.append(r, o), r;
            var t, n, r, o, i
        },
        gb = function(l, e, t) {
            return fb(l, e).bind(function(c) {
                return fb(l, t).map(function(e) {
                    return t = l, r = e, o = (n = c).x(), i = n.y(), a = r.x(), u = r.y(), s = i < u ? db(t, o, i, a, u) : db(t, o, u, a, i), ab(t.element(), lb(s), s);
                    var t, n, r, o, i, a, u, s
                })
            })
        },
        hb = function(n, t) {
            return H.find(n, function(e) {
                return "li" === Zn.name(e) && Rg(e, t)
            }).fold(V.constant([]), function(e) {
                return (t = n, H.find(t, function(e) {
                    return "ul" === Zn.name(e) || "ol" === Zn.name(e)
                })).map(function(e) {
                    return [Vn.fromTag("li"), Vn.fromTag(Zn.name(e))]
                }).getOr([]);
                var t
            })
        },
        vb = function(e, t) {
            var n, r = Vn.fromDom(t.commonAncestorContainer),
                o = jl(r, e),
                i = H.filter(o, function(e) {
                    return po(e) || fo(e)
                }),
                a = hb(o, t),
                u = i.concat(a.length ? a : yo(n = r) ? $r.parent(n).filter(vo).fold(V.constant([]), function(e) {
                    return [n, e]
                }) : vo(n) ? [n] : []);
            return H.map(u, rb)
        },
        yb = function() {
            return ib([])
        },
        bb = function(e, t) {
            return n = Vn.fromDom(t.cloneContents()), r = vb(e, t), o = H.foldl(r, function(e, t) {
                return Hu.append(t, e), t
            }, n), 0 < r.length ? ib([o]) : o;
            var n, r, o
        },
        Cb = function(e, o) {
            return (t = e, n = o[0], kl(n, "table", V.curry(Mr.eq, t))).bind(function(e) {
                var t = o[0],
                    n = o[o.length - 1],
                    r = mb(e);
                return gb(r, t, n).map(function(e) {
                    return ib([pb(e)])
                })
            }).getOrThunk(yb);
            var t, n
        },
        xb = function(e, t) {
            var n, r, o = Pd(t, e);
            return 0 < o.length ? Cb(e, o) : (n = e, 0 < (r = t).length && r[0].collapsed ? yb() : bb(n, r[0]))
        },
        wb = function(e, t) {
            var n, r = e.selection.getRng(),
                o = e.dom.create("body"),
                i = e.selection.getSel(),
                a = eb(e, Ad(i));
            if ((t = t || {}).get = !0, t.format = t.format || "html", t.selection = !0, (t = e.fire("BeforeGetContent", t)).isDefaultPrevented()) return e.fire("GetContent", t), t.content;
            if ("text" === t.format) return e.selection.isCollapsed() ? "" : _i(r.text || (i.toString ? i.toString() : ""));
            r.cloneContents ? (n = t.contextual ? xb(Vn.fromDom(e.getBody()), a).dom() : r.cloneContents()) && o.appendChild(n) : r.item !== undefined || r.htmlText !== undefined ? (o.innerHTML = "<br>" + (r.item ? r.item(0).outerHTML : r.htmlText), o.removeChild(o.firstChild)) : o.innerHTML = r.toString(), t.getInner = !0;
            var u = e.selection.serializer.serialize(o, t);
            return "tree" === t.format ? u : (t.content = e.selection.isCollapsed() ? "" : u, e.fire("GetContent", t), t.content)
        },
        Nb = function(e, t, n) {
            var r, o, i, a = e.selection.getRng(),
                u = e.getDoc();
            if ((n = n || {
                    format: "html"
                }).set = !0, n.selection = !0, n.content = t, n.no_events || !(n = e.fire("BeforeSetContent", n)).isDefaultPrevented()) {
                if (t = n.content, a.insertNode) {
                    t += '<span id="__caret">_</span>', a.startContainer === u && a.endContainer === u ? u.body.innerHTML = t : (a.deleteContents(), 0 === u.body.childNodes.length ? u.body.innerHTML = t : a.createContextualFragment ? a.insertNode(a.createContextualFragment(t)) : (o = u.createDocumentFragment(), i = u.createElement("div"), o.appendChild(i), i.outerHTML = t, a.insertNode(o))), r = e.dom.get("__caret"), (a = u.createRange()).setStartBefore(r), a.setEndBefore(r), e.selection.setRng(a), e.dom.remove("__caret");
                    try {
                        e.selection.setRng(a)
                    } catch (s) {}
                } else a.item && (u.execCommand("Delete", !1, null), a = e.getRng()), /^\s+/.test(t) ? (a.pasteHTML('<span id="__mce_tmp">_</span>' + t), e.dom.remove("__mce_tmp")) : a.pasteHTML(t);
                n.no_events || e.fire("SetContent", n)
            } else e.fire("SetContent", n)
        },
        Eb = function(e, t, n, r, o) {
            var i = n ? t.startContainer : t.endContainer,
                a = n ? t.startOffset : t.endOffset;
            return A.from(i).map(Vn.fromDom).map(function(e) {
                return r && t.collapsed ? e : $r.child(e, o(e, a)).getOr(e)
            }).bind(function(e) {
                return Zn.isElement(e) ? A.some(e) : $r.parent(e)
            }).map(function(e) {
                return e.dom()
            }).getOr(e)
        },
        Sb = function(e, t, n) {
            return Eb(e, t, !0, n, function(e, t) {
                return Math.min($r.childNodesCount(e), t)
            })
        },
        kb = function(e, t, n) {
            return Eb(e, t, !1, n, function(e, t) {
                return 0 < t ? t - 1 : t
            })
        },
        Tb = function(e, t) {
            for (var n = e; e && Oo.isText(e) && 0 === e.length;) e = t ? e.nextSibling : e.previousSibling;
            return e || n
        },
        Ab = It.each,
        Rb = function(e) {
            return !!e.select
        },
        _b = function(e) {
            return !(!e || !e.ownerDocument) && Mr.contains(Vn.fromDom(e.ownerDocument), Vn.fromDom(e))
        },
        Bb = function(u, s, e, c) {
            var n, t, l, f, a, r = function(e, t) {
                    return Nb(c, e, t)
                },
                o = function(e) {
                    var t = m();
                    t.collapse(!!e), i(t)
                },
                d = function() {
                    return s.getSelection ? s.getSelection() : s.document.selection
                },
                m = function() {
                    var e, t, n, r, o = function(e, t, n) {
                        try {
                            return t.compareBoundaryPoints(e, n)
                        } catch (r) {
                            return -1
                        }
                    };
                    if (!s) return null;
                    if (null == (r = s.document)) return null;
                    if (c.bookmark !== undefined && !1 === zp(c)) {
                        var i = Mm(c);
                        if (i.isSome()) return i.map(function(e) {
                            return eb(c, [e])[0]
                        }).getOr(r.createRange())
                    }
                    try {
                        (e = d()) && (t = 0 < e.rangeCount ? e.getRangeAt(0) : e.createRange ? e.createRange() : r.createRange())
                    } catch (a) {}
                    return (t = eb(c, [t])[0]) || (t = r.createRange ? r.createRange() : r.body.createTextRange()), t.setStart && 9 === t.startContainer.nodeType && t.collapsed && (n = u.getRoot(), t.setStart(n, 0), t.setEnd(n, 0)), l && f && (0 === o(t.START_TO_START, t, l) && 0 === o(t.END_TO_END, t, l) ? t = f : f = l = null), t
                },
                i = function(e, t) {
                    var n, r;
                    if ((o = e) && (Rb(o) || _b(o.startContainer) && _b(o.endContainer))) {
                        var o, i = Rb(e) ? e : null;
                        if (i) {
                            f = null;
                            try {
                                i.select()
                            } catch (a) {}
                        } else {
                            if (n = d(), e = c.fire("SetSelectionRange", {
                                    range: e,
                                    forward: t
                                }).range, n) {
                                f = e;
                                try {
                                    n.removeAllRanges(), n.addRange(e)
                                } catch (a) {}!1 === t && n.extend && (n.collapse(e.endContainer, e.endOffset), n.extend(e.startContainer, e.startOffset)), l = 0 < n.rangeCount ? n.getRangeAt(0) : null
                            }
                            e.collapsed || e.startContainer !== e.endContainer || !n.setBaseAndExtent || ve.ie || e.endOffset - e.startOffset < 2 && e.startContainer.hasChildNodes() && (r = e.startContainer.childNodes[e.startOffset]) && "IMG" === r.tagName && (n.setBaseAndExtent(e.startContainer, e.startOffset, e.endContainer, e.endOffset), n.anchorNode === e.startContainer && n.focusNode === e.endContainer || n.setBaseAndExtent(r, 0, r, 1)), c.fire("AfterSetSelectionRange", {
                                range: e,
                                forward: t
                            })
                        }
                    }
                },
                p = function() {
                    var e, t, n = d();
                    return !(n && n.anchorNode && n.focusNode) || ((e = u.createRng()).setStart(n.anchorNode, n.anchorOffset), e.collapse(!0), (t = u.createRng()).setStart(n.focusNode, n.focusOffset), t.collapse(!0), e.compareBoundaryPoints(e.START_TO_START, t) <= 0)
                },
                g = {
                    bookmarkManager: null,
                    controlSelection: null,
                    dom: u,
                    win: s,
                    serializer: e,
                    editor: c,
                    collapse: o,
                    setCursorLocation: function(e, t) {
                        var n = u.createRng();
                        e ? (n.setStart(e, t), n.setEnd(e, t), i(n), o(!1)) : (_g(u, n, c.getBody(), !0), i(n))
                    },
                    getContent: function(e) {
                        return wb(c, e)
                    },
                    setContent: r,
                    getBookmark: function(e, t) {
                        return n.getBookmark(e, t)
                    },
                    moveToBookmark: function(e) {
                        return n.moveToBookmark(e)
                    },
                    select: function(e, t) {
                        var r, n, o;
                        return (r = u, n = e, o = t, A.from(n).map(function(e) {
                            var t = r.nodeIndex(e),
                                n = r.createRng();
                            return n.setStart(e.parentNode, t), n.setEnd(e.parentNode, t + 1), o && (_g(r, n, e, !0), _g(r, n, e, !1)), n
                        })).each(i), e
                    },
                    isCollapsed: function() {
                        var e = m(),
                            t = d();
                        return !(!e || e.item) && (e.compareEndPoints ? 0 === e.compareEndPoints("StartToEnd", e) : !t || e.collapsed)
                    },
                    isForward: p,
                    setNode: function(e) {
                        return r(u.getOuterHTML(e)), e
                    },
                    getNode: function() {
                        return e = c.getBody(), (t = m()) ? (r = t.startContainer, o = t.endContainer, i = t.startOffset, a = t.endOffset, n = t.commonAncestorContainer, !t.collapsed && (r === o && a - i < 2 && r.hasChildNodes() && (n = r.childNodes[i]), 3 === r.nodeType && 3 === o.nodeType && (r = r.length === i ? Tb(r.nextSibling, !0) : r.parentNode, o = 0 === a ? Tb(o.previousSibling, !1) : o.parentNode, r && r === o)) ? r : n && 3 === n.nodeType ? n.parentNode : n) : e;
                        var e, t, n, r, o, i, a
                    },
                    getSel: d,
                    setRng: i,
                    getRng: m,
                    getStart: function(e) {
                        return Sb(c.getBody(), m(), e)
                    },
                    getEnd: function(e) {
                        return kb(c.getBody(), m(), e)
                    },
                    getSelectedBlocks: function(e, t) {
                        return function(e, t, n, r) {
                            var o, i, a = [];
                            if (i = e.getRoot(), n = e.getParent(n || Sb(i, t, !1), e.isBlock), r = e.getParent(r || kb(i, t, !1), e.isBlock), n && n !== i && a.push(n), n && r && n !== r)
                                for (var u = new ao(o = n, i);
                                    (o = u.next()) && o !== r;) e.isBlock(o) && a.push(o);
                            return r && n !== r && r !== i && a.push(r), a
                        }(u, m(), e, t)
                    },
                    normalize: function() {
                        var e = m(),
                            t = d();
                        if (!_d(t) && Bg(c)) {
                            var n = um(u, e);
                            return n.each(function(e) {
                                i(e, p())
                            }), n.getOr(e)
                        }
                        return e
                    },
                    selectorChanged: function(e, t) {
                        var i;
                        return a || (a = {}, i = {}, c.on("NodeChange", function(e) {
                            var n = e.element,
                                r = u.getParents(n, null, u.getRoot()),
                                o = {};
                            Ab(a, function(e, n) {
                                Ab(r, function(t) {
                                    if (u.is(t, n)) return i[n] || (Ab(e, function(e) {
                                        e(!0, {
                                            node: t,
                                            selector: n,
                                            parents: r
                                        })
                                    }), i[n] = e), o[n] = e, !1
                                })
                            }), Ab(i, function(e, t) {
                                o[t] || (delete i[t], Ab(e, function(e) {
                                    e(!1, {
                                        node: n,
                                        selector: t,
                                        parents: r
                                    })
                                }))
                            })
                        })), a[e] || (a[e] = []), a[e].push(t), g
                    },
                    getScrollContainer: function() {
                        for (var e, t = u.getRoot(); t && "BODY" !== t.nodeName;) {
                            if (t.scrollHeight > t.clientHeight) {
                                e = t;
                                break
                            }
                            t = t.parentNode
                        }
                        return e
                    },
                    scrollIntoView: function(e, t) {
                        return Nu(c, e, t)
                    },
                    placeCaretAt: function(e, t) {
                        return i(Zy(e, t, c.getDoc()))
                    },
                    getBoundingClientRect: function() {
                        var e = m();
                        return e.collapsed ? La.fromRangeStart(e).getClientRects()[0] : e.getBoundingClientRect()
                    },
                    destroy: function() {
                        s = l = f = null, t.destroy()
                    }
                };
            return n = Xy(g), t = Jy(g, c), g.bookmarkManager = n, g.controlSelection = t, g
        },
        Db = Oo.isContentEditableFalse,
        Ob = aa,
        Pb = Bs,
        Lb = _s,
        Ib = function(e, t) {
            for (; t = e(t);)
                if (t.isVisible()) return t;
            return t
        },
        Mb = function(e, t, n, r) {
            var o, i, a, u, s, c, l = e === iu.Forwards,
                f = l ? Lb : Pb;
            return !r.collapsed && (o = Ob(r), Db(o)) ? tu(e, t, o, e === iu.Backwards, !0) : (u = Oi(r.startContainer), f(i = Rs(e, t.getBody(), r)) ? nu(t, i.getNode(!l)) : (i = n(i)) ? f(i) ? tu(e, t, i.getNode(!l), l, !0) : f(a = n(i)) && (!(c = bs(s = i, a)) && Oo.isBr(s.getNode()) || c) ? tu(e, t, a.getNode(!l), l, !0) : u ? ou(t, i.toRange(), !0) : null : u ? r : null)
        },
        Fb = function(e, t, n, r) {
            var o, i, a, u, s, c, l, f, d;
            if (d = Ob(r), o = Rs(e, t.getBody(), r), i = n(t.getBody(), Yg(1), o), a = Bt.filter(i, Gg(1)), s = Bt.last(o.getClientRects()), (Lb(o) || Ds(o)) && (d = o.getNode()), (Pb(o) || Os(o)) && (d = o.getNode(!0)), !s) return null;
            if (c = s.left, (u = nh(a, c)) && Db(u.node)) return l = Math.abs(c - u.left), f = Math.abs(c - u.right), tu(e, t, u.node, l < f, !0);
            if (d) {
                var m = function(e, t, n, r) {
                    var o, i, a, u, s, c, l = Ys(t),
                        f = [],
                        d = 0,
                        m = function(e) {
                            return Bt.last(e.getClientRects())
                        };
                    1 === e ? (o = l.next, i = ia, a = oa, u = La.after(r)) : (o = l.prev, i = oa, a = ia, u = La.before(r)), c = m(u);
                    do {
                        if (u.isVisible() && !a(s = m(u), c)) {
                            if (0 < f.length && i(s, Bt.last(f)) && d++, (s = ta(s)).position = u, s.line = d, n(s)) return f;
                            f.push(s)
                        }
                    } while (u = o(u));
                    return f
                }(e, t.getBody(), Yg(1), d);
                if (u = nh(Bt.filter(m, Gg(1)), c)) return ou(t, u.position.toRange(), !0);
                if (u = Bt.last(Bt.filter(m, Gg(0)))) return ou(t, u.position.toRange(), !0)
            }
        },
        zb = function(e, t, n) {
            var r, o, i, a, u = Ys(e.getBody()),
                s = da.curry(Ib, u.next),
                c = da.curry(Ib, u.prev);
            if (n.collapsed && e.settings.forced_root_block) {
                if (!(r = e.dom.getParent(n.startContainer, "PRE"))) return;
                (1 === t ? s(La.fromRangeStart(n)) : c(La.fromRangeStart(n))) || (a = (i = e).dom.create(i.settings.forced_root_block), (!ve.ie || 11 <= ve.ie) && (a.innerHTML = '<br data-mce-bogus="1">'), o = a, 1 === t ? e.$(r).after(o) : e.$(r).before(o), e.selection.select(o, !0), e.selection.collapse())
            }
        },
        Ub = function(l, f) {
            return function() {
                var e, t, n, r, o, i, a, u, s, c = (t = f, r = Ys((e = l).getBody()), o = da.curry(Ib, r.next), i = da.curry(Ib, r.prev), a = t ? iu.Forwards : iu.Backwards, u = t ? o : i, s = e.selection.getRng(), (n = Mb(a, e, u, s)) ? n : (n = zb(e, a, s)) || null);
                return !!c && (l.selection.setRng(c), !0)
            }
        },
        qb = function(u, s) {
            return function() {
                var e, t, n, r, o, i, a = (r = (t = s) ? 1 : -1, o = t ? Xg : Kg, i = (e = u).selection.getRng(), (n = Fb(r, e, o, i)) ? n : (n = zb(e, r, i)) || null);
                return !!a && (u.selection.setRng(a), !0)
            }
        },
        Vb = function(e, r) {
            return H.bind((t = e, H.map(t, function(e) {
                return xy.merge({
                    shiftKey: !1,
                    altKey: !1,
                    ctrlKey: !1,
                    metaKey: !1,
                    keyCode: 0,
                    action: V.noop
                }, e)
            })), function(e) {
                return t = e, (n = r).keyCode === t.keyCode && n.shiftKey === t.shiftKey && n.altKey === t.altKey && n.ctrlKey === t.ctrlKey && n.metaKey === t.metaKey ? [e] : [];
                var t, n
            });
            var t
        },
        Hb = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            var r = Array.prototype.slice.call(arguments, 1);
            return function() {
                return e.apply(null, r)
            }
        },
        jb = function(e, t) {
            return H.find(Vb(e, t), function(e) {
                return e.action()
            })
        },
        $b = function(i, a) {
            i.on("keydown", function(e) {
                var t, n, r, o;
                !1 === e.isDefaultPrevented() && (t = i, n = a, r = e, o = Un.detect().os, jb([{
                    keyCode: sh.RIGHT,
                    action: Ub(t, !0)
                }, {
                    keyCode: sh.LEFT,
                    action: Ub(t, !1)
                }, {
                    keyCode: sh.UP,
                    action: qb(t, !1)
                }, {
                    keyCode: sh.DOWN,
                    action: qb(t, !0)
                }, {
                    keyCode: sh.RIGHT,
                    action: es(t, !0)
                }, {
                    keyCode: sh.LEFT,
                    action: es(t, !1)
                }, {
                    keyCode: sh.UP,
                    action: ts(t, !1)
                }, {
                    keyCode: sh.DOWN,
                    action: ts(t, !0)
                }, {
                    keyCode: sh.RIGHT,
                    action: sd.move(t, n, !0)
                }, {
                    keyCode: sh.LEFT,
                    action: sd.move(t, n, !1)
                }, {
                    keyCode: sh.RIGHT,
                    ctrlKey: !o.isOSX(),
                    altKey: o.isOSX(),
                    action: sd.moveNextWord(t, n)
                }, {
                    keyCode: sh.LEFT,
                    ctrlKey: !o.isOSX(),
                    altKey: o.isOSX(),
                    action: sd.movePrevWord(t, n)
                }], r).each(function(e) {
                    r.preventDefault()
                }))
            })
        },
        Wb = function(e) {
            return 1 === $r.children(e).length
        },
        Kb = function(e, t, n, r) {
            var o, i, a, u, s = V.curry(Sv, t),
                c = H.map(H.filter(r, s), function(e) {
                    return e.dom()
                });
            if (0 === c.length) vf(t, e, n);
            else {
                var l = (o = n.dom(), i = c, a = yv(!1), u = Nv(i, a.dom()), Hu.before(Vn.fromDom(o), a), Hc.remove(Vn.fromDom(o)), La(u, 0));
                t.selection.setRng(l.toRange())
            }
        },
        Xb = function(n, r) {
            var t, e = Vn.fromDom(n.getBody()),
                o = Vn.fromDom(n.selection.getStart()),
                i = H.filter((t = jl(o, e), H.findIndex(t, mo).fold(V.constant(t), function(e) {
                    return t.slice(0, e)
                })), Wb);
            return H.last(i).map(function(e) {
                var t = La.fromRangeStart(n.selection.getRng());
                return !!El(r, t, e.dom()) && (Kb(r, n, e, i), !0)
            }).getOr(!1)
        },
        Yb = function(e, t) {
            return !!e.selection.isCollapsed() && Xb(e, t)
        },
        Gb = function(o, i) {
            o.on("keydown", function(e) {
                var t, n, r;
                !1 === e.isDefaultPrevented() && (t = o, n = i, r = e, jb([{
                    keyCode: sh.BACKSPACE,
                    action: Hb(Cf, t, !1)
                }, {
                    keyCode: sh.DELETE,
                    action: Hb(Cf, t, !0)
                }, {
                    keyCode: sh.BACKSPACE,
                    action: Hb(dd, t, n, !1)
                }, {
                    keyCode: sh.DELETE,
                    action: Hb(dd, t, n, !0)
                }, {
                    keyCode: sh.BACKSPACE,
                    action: Hb(tf, t, !1)
                }, {
                    keyCode: sh.DELETE,
                    action: Hb(tf, t, !0)
                }, {
                    keyCode: sh.BACKSPACE,
                    action: Hb(Jl, t, !1)
                }, {
                    keyCode: sh.DELETE,
                    action: Hb(Jl, t, !0)
                }, {
                    keyCode: sh.BACKSPACE,
                    action: Hb($d, t, !1)
                }, {
                    keyCode: sh.DELETE,
                    action: Hb($d, t, !0)
                }, {
                    keyCode: sh.BACKSPACE,
                    action: Hb(Yb, t, !1)
                }, {
                    keyCode: sh.DELETE,
                    action: Hb(Yb, t, !0)
                }], r).each(function(e) {
                    r.preventDefault()
                }))
            }), o.on("keyup", function(e) {
                var t, n;
                !1 === e.isDefaultPrevented() && (t = o, n = e, jb([{
                    keyCode: sh.BACKSPACE,
                    action: Hb(xf, t)
                }, {
                    keyCode: sh.DELETE,
                    action: Hb(xf, t)
                }], n))
            })
        },
        Jb = function(e) {
            return A.from(e.dom.getParent(e.selection.getStart(!0), e.dom.isBlock))
        },
        Qb = function(e, t) {
            var n, r, o, i = t,
                a = e.dom,
                u = e.schema.getMoveCaretBeforeOnEnterElements();
            if (t) {
                if (/^(LI|DT|DD)$/.test(t.nodeName)) {
                    var s = function(e) {
                        for (; e;) {
                            if (1 === e.nodeType || 3 === e.nodeType && e.data && /[\r\n\s]/.test(e.data)) return e;
                            e = e.nextSibling
                        }
                    }(t.firstChild);
                    s && /^(UL|OL|DL)$/.test(s.nodeName) && t.insertBefore(a.doc.createTextNode("\xa0"), t.firstChild)
                }
                if (o = a.createRng(), t.normalize(), t.hasChildNodes()) {
                    for (n = new ao(t, t); r = n.current();) {
                        if (Oo.isText(r)) {
                            o.setStart(r, 0), o.setEnd(r, 0);
                            break
                        }
                        if (u[r.nodeName.toLowerCase()]) {
                            o.setStartBefore(r), o.setEndBefore(r);
                            break
                        }
                        i = r, r = n.next()
                    }
                    r || (o.setStart(i, 0), o.setEnd(i, 0))
                } else Oo.isBr(t) ? t.nextSibling && a.isBlock(t.nextSibling) ? (o.setStartBefore(t), o.setEndBefore(t)) : (o.setStartAfter(t), o.setEndAfter(t)) : (o.setStart(t, 0), o.setEnd(t, 0));
                e.selection.setRng(o), a.remove(void 0), e.selection.scrollIntoView(t)
            }
        },
        Zb = function(e, t) {
            var n, r, o = e.getRoot();
            for (n = t; n !== o && "false" !== e.getContentEditable(n);) "true" === e.getContentEditable(n) && (r = n), n = n.parentNode;
            return n !== o ? r : o
        },
        eC = Jb,
        tC = function(e) {
            return Jb(e).fold(V.constant(""), function(e) {
                return e.nodeName.toUpperCase()
            })
        },
        nC = function(e) {
            return Jb(e).filter(function(e) {
                return yo(Vn.fromDom(e))
            }).isSome()
        },
        rC = function(e, t) {
            return e && e.parentNode && e.parentNode.nodeName === t
        },
        oC = function(e) {
            return e && /^(OL|UL|LI)$/.test(e.nodeName)
        },
        iC = function(e) {
            var t = e.parentNode;
            return /^(LI|DT|DD)$/.test(t.nodeName) ? t : e
        },
        aC = function(e, t, n) {
            for (var r = e[n ? "firstChild" : "lastChild"]; r && !Oo.isElement(r);) r = r[n ? "nextSibling" : "previousSibling"];
            return r === t
        },
        uC = function(e, t, n, r, o) {
            var i = e.dom,
                a = e.selection.getRng();
            if (n !== e.getBody()) {
                var u;
                oC(u = n) && oC(u.parentNode) && (o = "LI");
                var s, c, l = o ? t(o) : i.create("BR");
                if (aC(n, r, !0) && aC(n, r, !1)) rC(n, "LI") ? i.insertAfter(l, iC(n)) : i.replace(l, n);
                else if (aC(n, r, !0)) rC(n, "LI") ? (i.insertAfter(l, iC(n)), l.appendChild(i.doc.createTextNode(" ")), l.appendChild(n)) : n.parentNode.insertBefore(l, n);
                else if (aC(n, r, !1)) i.insertAfter(l, iC(n));
                else {
                    n = iC(n);
                    var f = a.cloneRange();
                    f.setStartAfter(r), f.setEndAfter(n);
                    var d = f.extractContents();
                    "LI" === o && (c = "LI", (s = d).firstChild && s.firstChild.nodeName === c) ? (l = d.firstChild, i.insertAfter(d, n)) : (i.insertAfter(d, n), i.insertAfter(l, n))
                }
                i.remove(r), Qb(e, l)
            }
        },
        sC = function(e) {
            e.innerHTML = '<br data-mce-bogus="1">'
        },
        cC = function(e, t) {
            return e.nodeName === t || e.previousSibling && e.previousSibling.nodeName === t
        },
        lC = function(e, t) {
            return t && e.isBlock(t) && !/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName) && !/^(fixed|absolute)/i.test(t.style.position) && "true" !== e.getContentEditable(t)
        },
        fC = function(e, t, n) {
            return !1 === Oo.isText(t) ? n : e ? 1 === n && t.data.charAt(n - 1) === Ri ? 0 : n : n === t.data.length - 1 && t.data.charAt(n) === Ri ? t.data.length : n
        },
        dC = function(e, t) {
            var n, r, o = e.getRoot();
            for (n = t; n !== o && "false" !== e.getContentEditable(n);) "true" === e.getContentEditable(n) && (r = n), n = n.parentNode;
            return n !== o ? r : o
        },
        mC = function(e, t) {
            var n = Ou(e);
            n && n.toLowerCase() === t.tagName.toLowerCase() && e.dom.setAttribs(t, Pu(e))
        },
        pC = function(a, e) {
            var t, u, s, i, c, n, r, o, l, f, d, m, p, g, h, v, y, b, C = a.dom,
                x = a.schema,
                w = x.getNonEmptyElements(),
                N = a.selection.getRng(),
                E = function(e) {
                    var t, n, r, o = s,
                        i = x.getTextInlineElements();
                    if (e || "TABLE" === f || "HR" === f ? (t = C.create(e || m), mC(a, t)) : t = c.cloneNode(!1), r = t, !1 === Mu(a)) C.setAttrib(t, "style", null), C.setAttrib(t, "class", null);
                    else
                        do {
                            if (i[o.nodeName]) {
                                if (kc(o)) continue;
                                n = o.cloneNode(!1), C.setAttrib(n, "id", ""), t.hasChildNodes() ? n.appendChild(t.firstChild) : r = n, t.appendChild(n)
                            }
                        } while ((o = o.parentNode) && o !== u);
                    return sC(r), t
                },
                S = function(e) {
                    var t, n, r, o;
                    if (o = fC(e, s, i), Oo.isText(s) && (e ? 0 < o : o < s.nodeValue.length)) return !1;
                    if (s.parentNode === c && p && !e) return !0;
                    if (e && Oo.isElement(s) && s === c.firstChild) return !0;
                    if (cC(s, "TABLE") || cC(s, "HR")) return p && !e || !p && e;
                    for (t = new ao(s, c), Oo.isText(s) && (e && 0 === o ? t.prev() : e || o !== s.nodeValue.length || t.next()); n = t.current();) {
                        if (Oo.isElement(n)) {
                            if (!n.getAttribute("data-mce-bogus") && (r = n.nodeName.toLowerCase(), w[r] && "br" !== r)) return !1
                        } else if (Oo.isText(n) && !/^[ \t\r\n]*$/.test(n.nodeValue)) return !1;
                        e ? t.prev() : t.next()
                    }
                    return !0
                },
                k = function() {
                    r = /^(H[1-6]|PRE|FIGURE)$/.test(f) && "HGROUP" !== d ? E(m) : E(), Fu(a) && lC(C, l) && C.isEmpty(c) ? r = C.split(l, c) : C.insertAfter(r, c), Qb(a, r)
                };
            um(C, N).each(function(e) {
                N.setStart(e.startContainer, e.startOffset), N.setEnd(e.endContainer, e.endOffset)
            }), s = N.startContainer, i = N.startOffset, m = Ou(a), n = e.shiftKey, Oo.isElement(s) && s.hasChildNodes() && (p = i > s.childNodes.length - 1, s = s.childNodes[Math.min(i, s.childNodes.length - 1)] || s, i = p && Oo.isText(s) ? s.nodeValue.length : 0), (u = dC(C, s)) && ((m && !n || !m && n) && (s = function(e, t, n, r, o) {
                var i, a, u, s, c, l, f, d = t || "P",
                    m = e.dom,
                    p = dC(m, r);
                if (!(a = m.getParent(r, m.isBlock)) || !lC(m, a)) {
                    if (l = (a = a || p) === e.getBody() || (f = a) && /^(TD|TH|CAPTION)$/.test(f.nodeName) ? a.nodeName.toLowerCase() : a.parentNode.nodeName.toLowerCase(), !a.hasChildNodes()) return i = m.create(d), mC(e, i), a.appendChild(i), n.setStart(i, 0), n.setEnd(i, 0), i;
                    for (s = r; s.parentNode !== a;) s = s.parentNode;
                    for (; s && !m.isBlock(s);) s = (u = s).previousSibling;
                    if (u && e.schema.isValidChild(l, d.toLowerCase())) {
                        for (i = m.create(d), mC(e, i), u.parentNode.insertBefore(i, u), s = u; s && !m.isBlock(s);) c = s.nextSibling, i.appendChild(s), s = c;
                        n.setStart(r, o), n.setEnd(r, o)
                    }
                }
                return r
            }(a, m, N, s, i)), c = C.getParent(s, C.isBlock), l = c ? C.getParent(c.parentNode, C.isBlock) : null, f = c ? c.nodeName.toUpperCase() : "", "LI" !== (d = l ? l.nodeName.toUpperCase() : "") || e.ctrlKey || (l = (c = l).parentNode, f = d), /^(LI|DT|DD)$/.test(f) && C.isEmpty(c) ? uC(a, E, l, c, m) : m && c === a.getBody() || (m = m || "P", Oi(c) ? (r = Vi(c), C.isEmpty(c) && sC(c), Qb(a, r)) : S() ? k() : S(!0) ? (r = c.parentNode.insertBefore(E(), c), Qb(a, cC(c, "HR") ? r : c)) : ((t = (y = N, b = y.cloneRange(), b.setStart(y.startContainer, fC(!0, y.startContainer, y.startOffset)), b.setEnd(y.endContainer, fC(!1, y.endContainer, y.endOffset)), b).cloneRange()).setEndAfter(c), function(e) {
                for (; Oo.isText(e) && (e.nodeValue = e.nodeValue.replace(/^[\r\n]+/, "")), e = e.firstChild;);
            }(o = t.extractContents()), r = o.firstChild, C.insertAfter(o, c), function(e, t, n) {
                var r, o = n,
                    i = [];
                if (o) {
                    for (; o = o.firstChild;) {
                        if (e.isBlock(o)) return;
                        Oo.isElement(o) && !t[o.nodeName.toLowerCase()] && i.push(o)
                    }
                    for (r = i.length; r--;) !(o = i[r]).hasChildNodes() || o.firstChild === o.lastChild && "" === o.firstChild.nodeValue ? e.remove(o) : (a = o) && "A" === a.nodeName && 0 === It.trim(_i(a.innerText || a.textContent)).length && e.remove(o);
                    var a
                }
            }(C, w, r), g = C, (h = c).normalize(), (v = h.lastChild) && !/^(left|right)$/gi.test(g.getStyle(v, "float", !0)) || g.add(h, "br"), C.isEmpty(c) && sC(c), r.normalize(), C.isEmpty(r) ? (C.remove(r), k()) : Qb(a, r)), C.setAttrib(r, "id", ""), a.fire("NewBlock", {
                newBlock: r
            })))
        },
        gC = function(e, t) {
            return eC(e).filter(function(e) {
                return 0 < t.length && Pr.is(Vn.fromDom(e), t)
            }).isSome()
        },
        hC = function(e) {
            return gC(e, Lu(e))
        },
        vC = function(e) {
            return gC(e, Iu(e))
        },
        yC = nf([{
            br: []
        }, {
            block: []
        }, {
            none: []
        }]),
        bC = function(e, t) {
            return vC(e)
        },
        CC = function(n) {
            return function(e, t) {
                return "" === Ou(e) === n
            }
        },
        xC = function(n) {
            return function(e, t) {
                return nC(e) === n
            }
        },
        wC = function(n, r) {
            return function(e, t) {
                return tC(e) === n.toUpperCase() === r
            }
        },
        NC = function(e) {
            return wC("pre", e)
        },
        EC = function(n) {
            return function(e, t) {
                return Du(e) === n
            }
        },
        SC = function(e, t) {
            return hC(e)
        },
        kC = function(e, t) {
            return t
        },
        TC = function(e) {
            var t = Ou(e),
                n = Zb(e.dom, e.selection.getStart());
            return n && e.schema.isValidChild(n.nodeName, t || "P")
        },
        AC = function(e, t) {
            return function(n, r) {
                return H.foldl(e, function(e, t) {
                    return e && t(n, r)
                }, !0) ? A.some(t) : A.none()
            }
        },
        RC = function(e, t) {
            return Df([AC([bC], yC.none()), AC([wC("summary", !0)], yC.br()), AC([NC(!0), EC(!1), kC], yC.br()), AC([NC(!0), EC(!1)], yC.block()), AC([NC(!0), EC(!0), kC], yC.block()), AC([NC(!0), EC(!0)], yC.br()), AC([xC(!0), kC], yC.br()), AC([xC(!0)], yC.block()), AC([CC(!0), kC, TC], yC.block()), AC([CC(!0)], yC.br()), AC([SC], yC.br()), AC([CC(!1), kC], yC.br()), AC([TC], yC.block())], [e, t.shiftKey]).getOr(yC.none())
        },
        _C = function(e, t) {
            RC(e, t).fold(function() {
                vm(e, t)
            }, function() {
                pC(e, t)
            }, V.noop)
        },
        BC = function(o) {
            o.on("keydown", function(e) {
                var t, n, r;
                e.keyCode === sh.ENTER && (t = o, (n = e).isDefaultPrevented() || (n.preventDefault(), (r = t.undoManager).typing && (r.typing = !1, r.add()), t.undoManager.transact(function() {
                    !1 === t.selection.isCollapsed() && t.execCommand("Delete"), _C(t, n)
                })))
            })
        },
        DC = function(e, t, n) {
            return u = t, !(!OC(n) || !Oo.isText(u.container()) || (r = e, i = (o = t).container(), a = o.offset(), i.insertData(a, "\xa0"), r.selection.setCursorLocation(i, a + 1), 0));
            var r, o, i, a, u
        },
        OC = function(e) {
            return e.fold(V.constant(!1), V.constant(!0), V.constant(!0), V.constant(!1))
        },
        PC = function(e) {
            return !!e.selection.isCollapsed() && (t = e, n = V.curry(xl.isInlineTarget, t), r = La.fromRangeStart(t.selection.getRng()), Gf(n, t.getBody(), r).map(V.curry(DC, t, r)).getOr(!1));
            var t, n, r
        },
        LC = function(r) {
            r.on("keydown", function(e) {
                var t, n;
                !1 === e.isDefaultPrevented() && (t = r, n = e, jb([{
                    keyCode: sh.SPACEBAR,
                    action: Hb(PC, t)
                }], n).each(function(e) {
                    n.preventDefault()
                }))
            })
        },
        IC = function(e, t) {
            var n;
            t.hasAttribute("data-mce-caret") && (Vi(t), (n = e).selection.setRng(n.selection.getRng()), e.selection.scrollIntoView(t))
        },
        MC = function(e, t) {
            var n, r = (n = e, Tl(Vn.fromDom(n.getBody()), "*[data-mce-caret]").fold(V.constant(null), function(e) {
                return e.dom()
            }));
            if (r) return "compositionstart" === t.type ? (t.preventDefault(), t.stopPropagation(), void IC(e, r)) : void(Ii(r) && (IC(e, r), e.undoManager.add()))
        },
        FC = function(e) {
            e.on("keyup compositionstart", V.curry(MC, e))
        },
        zC = function(e) {
            var t = sd.setupSelectedState(e);
            FC(e), $b(e, t), Gb(e, t), BC(e), LC(e)
        };

    function UC(u) {
        var s, n, r, o = It.each,
            c = sh.BACKSPACE,
            l = sh.DELETE,
            f = u.dom,
            d = u.selection,
            e = u.settings,
            t = u.parser,
            i = ve.gecko,
            a = ve.ie,
            m = ve.webkit,
            p = "data:text/mce-internal,",
            g = a ? "Text" : "URL",
            h = function(e, t) {
                try {
                    u.getDoc().execCommand(e, !1, t)
                } catch (n) {}
            },
            v = function(e) {
                return e.isDefaultPrevented()
            },
            y = function() {
                u.shortcuts.add("meta+a", null, "SelectAll")
            },
            b = function() {
                u.on("keydown", function(e) {
                    if (!v(e) && e.keyCode === c && d.isCollapsed() && 0 === d.getRng().startOffset) {
                        var t = d.getNode().previousSibling;
                        if (t && t.nodeName && "table" === t.nodeName.toLowerCase()) return e.preventDefault(), !1
                    }
                })
            },
            C = function() {
                u.inline || (u.contentStyles.push("body {min-height: 150px}"), u.on("click", function(e) {
                    var t;
                    if ("HTML" === e.target.nodeName) {
                        if (11 < ve.ie) return void u.getBody().focus();
                        t = u.selection.getRng(), u.getBody().focus(), u.selection.setRng(t), u.selection.normalize(), u.nodeChanged()
                    }
                }))
            };
        return u.on("keydown", function(e) {
            var t, n, r, o, i;
            if (!v(e) && e.keyCode === sh.BACKSPACE && (n = (t = d.getRng()).startContainer, r = t.startOffset, o = f.getRoot(), i = n, t.collapsed && 0 === r)) {
                for (; i && i.parentNode && i.parentNode.firstChild === i && i.parentNode !== o;) i = i.parentNode;
                "BLOCKQUOTE" === i.tagName && (u.formatter.toggle("blockquote", null, i), (t = f.createRng()).setStart(n, 0), t.setEnd(n, 0), d.setRng(t))
            }
        }), s = function(e) {
            var t = f.create("body"),
                n = e.cloneContents();
            return t.appendChild(n), d.serializer.serialize(t, {
                format: "html"
            })
        }, u.on("keydown", function(e) {
            var t, n, r, o, i, a = e.keyCode;
            if (!v(e) && (a === l || a === c)) {
                if (t = u.selection.isCollapsed(), n = u.getBody(), t && !f.isEmpty(n)) return;
                if (!t && (r = u.selection.getRng(), o = s(r), (i = f.createRng()).selectNode(u.getBody()), o !== s(i))) return;
                e.preventDefault(), u.setContent(""), n.firstChild && f.isBlock(n.firstChild) ? u.selection.setCursorLocation(n.firstChild, 0) : u.selection.setCursorLocation(n, 0), u.nodeChanged()
            }
        }), ve.windowsPhone || u.on("keyup focusin mouseup", function(e) {
            sh.modifierPressed(e) || d.normalize()
        }, !0), m && (u.settings.content_editable || f.bind(u.getDoc(), "mousedown mouseup", function(e) {
            var t;
            if (e.target === u.getDoc().documentElement)
                if (t = d.getRng(), u.getBody().focus(), "mousedown" === e.type) {
                    if (Li(t.startContainer)) return;
                    d.placeCaretAt(e.clientX, e.clientY)
                } else d.setRng(t)
        }), u.on("click", function(e) {
            var t = e.target;
            /^(IMG|HR)$/.test(t.nodeName) && "false" !== f.getContentEditableParent(t) && (e.preventDefault(), u.selection.select(t), u.nodeChanged()), "A" === t.nodeName && f.hasClass(t, "mce-item-anchor") && (e.preventDefault(), d.select(t))
        }), e.forced_root_block && u.on("init", function() {
            h("DefaultParagraphSeparator", e.forced_root_block)
        }), u.on("init", function() {
            u.dom.bind(u.getBody(), "submit", function(e) {
                e.preventDefault()
            })
        }), b(), t.addNodeFilter("br", function(e) {
            for (var t = e.length; t--;) "Apple-interchange-newline" === e[t].attr("class") && e[t].remove()
        }), ve.iOS ? (u.inline || u.on("keydown", function() {
            document.activeElement === document.body && u.getWin().focus()
        }), C(), u.on("click", function(e) {
            var t = e.target;
            do {
                if ("A" === t.tagName) return void e.preventDefault()
            } while (t = t.parentNode)
        }), u.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")) : y()), 11 <= ve.ie && (C(), b()), ve.ie && (y(), h("AutoUrlDetect", !1), u.on("dragstart", function(e) {
            var t, n, r;
            (t = e).dataTransfer && (u.selection.isCollapsed() && "IMG" === t.target.tagName && d.select(t.target), 0 < (n = u.selection.getContent()).length && (r = p + escape(u.id) + "," + escape(n), t.dataTransfer.setData(g, r)))
        }), u.on("drop", function(e) {
            if (!v(e)) {
                var t = (i = e).dataTransfer && (a = i.dataTransfer.getData(g)) && 0 <= a.indexOf(p) ? (a = a.substr(p.length).split(","), {
                    id: unescape(a[0]),
                    html: unescape(a[1])
                }) : null;
                if (t && t.id !== u.id) {
                    e.preventDefault();
                    var n = Zy(e.x, e.y, u.getDoc());
                    d.setRng(n), r = t.html, o = !0, u.queryCommandSupported("mceInsertClipboardContent") ? u.execCommand("mceInsertClipboardContent", !1, {
                        content: r,
                        internal: o
                    }) : u.execCommand("mceInsertContent", !1, r)
                }
            }
            var r, o, i, a
        })), i && (u.on("keydown", function(e) {
            if (!v(e) && e.keyCode === c) {
                if (!u.getBody().getElementsByTagName("hr").length) return;
                if (d.isCollapsed() && 0 === d.getRng().startOffset) {
                    var t = d.getNode(),
                        n = t.previousSibling;
                    if ("HR" === t.nodeName) return f.remove(t), void e.preventDefault();
                    n && n.nodeName && "hr" === n.nodeName.toLowerCase() && (f.remove(n), e.preventDefault())
                }
            }
        }), Range.prototype.getClientRects || u.on("mousedown", function(e) {
            if (!v(e) && "HTML" === e.target.nodeName) {
                var t = u.getBody();
                t.blur(), we.setEditorTimeout(u, function() {
                    t.focus()
                })
            }
        }), n = function() {
            var e = f.getAttribs(d.getStart().cloneNode(!1));
            return function() {
                var t = d.getStart();
                t !== u.getBody() && (f.setAttrib(t, "style", null), o(e, function(e) {
                    t.setAttributeNode(e.cloneNode(!0))
                }))
            }
        }, r = function() {
            return !d.isCollapsed() && f.getParent(d.getStart(), f.isBlock) !== f.getParent(d.getEnd(), f.isBlock)
        }, u.on("keypress", function(e) {
            var t;
            if (!v(e) && (8 === e.keyCode || 46 === e.keyCode) && r()) return t = n(), u.getDoc().execCommand("delete", !1, null), t(), e.preventDefault(), !1
        }), f.bind(u.getDoc(), "cut", function(e) {
            var t;
            !v(e) && r() && (t = n(), we.setEditorTimeout(u, function() {
                t()
            }))
        }), e.readonly || u.on("BeforeExecCommand MouseDown", function() {
            h("StyleWithCSS", !1), h("enableInlineTableEditing", !1), e.object_resizing || h("enableObjectResizing", !1)
        }), u.on("SetContent ExecCommand", function(e) {
            "setcontent" !== e.type && "mceInsertLink" !== e.command || o(f.select("a"), function(e) {
                var t = e.parentNode,
                    n = f.getRoot();
                if (t.lastChild === e) {
                    for (; t && !f.isBlock(t);) {
                        if (t.parentNode.lastChild !== t || t === n) return;
                        t = t.parentNode
                    }
                    f.add(t, "br", {
                        "data-mce-bogus": 1
                    })
                }
            })
        }), u.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}"), ve.mac && u.on("keydown", function(e) {
            !sh.metaKeyPressed(e) || e.shiftKey || 37 !== e.keyCode && 39 !== e.keyCode || (e.preventDefault(), u.selection.getSel().modify("move", 37 === e.keyCode ? "backward" : "forward", "lineboundary"))
        }), b()), {
            refreshContentEditable: function() {},
            isHidden: function() {
                var e;
                return !i || u.removed ? 0 : !(e = u.selection.getSel()) || !e.rangeCount || 0 === e.rangeCount
            }
        }
    }
    var qC = function(e) {
            return Oo.isElement(e) && ho(Vn.fromDom(e))
        },
        VC = function(t) {
            t.on("click", function(e) {
                3 === e.detail && function(e) {
                    var t = e.selection.getRng(),
                        n = Da.fromRangeStart(t),
                        r = Da.fromRangeEnd(t);
                    if (Da.isElementPosition(n)) {
                        var o = n.container();
                        qC(o) && Qa.firstPositionIn(o).each(function(e) {
                            return t.setStart(e.container(), e.offset())
                        })
                    }
                    Da.isElementPosition(r) && (o = n.container(), qC(o) && Qa.lastPositionIn(o).each(function(e) {
                        return t.setEnd(e.container(), e.offset())
                    })), e.selection.setRng(Zc(t))
                }(t)
            })
        },
        HC = function(e) {
            var t, n;
            (t = e).on("click", function(e) {
                t.dom.getParent(e.target, "details") && e.preventDefault()
            }), (n = e).parser.addNodeFilter("details", function(e) {
                H.each(e, function(e) {
                    e.attr("data-mce-open", e.attr("open")), e.attr("open", "open")
                })
            }), n.serializer.addNodeFilter("details", function(e) {
                H.each(e, function(e) {
                    var t = e.attr("data-mce-open");
                    e.attr("open", k.isString(t) ? t : null), e.attr("data-mce-open", null)
                })
            })
        },
        jC = vi.DOM,
        $C = function(e) {
            var t;
            e.bindPendingEventDelegates(), e.initialized = !0, e.fire("init"), e.focus(!0), e.nodeChanged({
                initial: !0
            }), e.execCallback("init_instance_callback", e), (t = e).settings.auto_focus && we.setEditorTimeout(t, function() {
                var e;
                (e = !0 === t.settings.auto_focus ? t : t.editorManager.get(t.settings.auto_focus)).destroyed || e.focus()
            }, 100)
        },
        WC = function(t, e) {
            var n, r, u, o, i, a, s, c, l, f = t.settings,
                d = t.getElement(),
                m = t.getDoc();
            f.inline || (t.getElement().style.visibility = t.orgVisibility), e || f.content_editable || (m.open(), m.write(t.iframeHTML), m.close()), f.content_editable && (t.on("remove", function() {
                var e = this.getBody();
                jC.removeClass(e, "mce-content-body"), jC.removeClass(e, "mce-edit-focus"), jC.setAttrib(e, "contentEditable", null)
            }), jC.addClass(d, "mce-content-body"), t.contentDocument = m = f.content_document || document, t.contentWindow = f.content_window || window, t.bodyElement = d, f.content_document = f.content_window = null, f.root_name = d.nodeName.toLowerCase()), (n = t.getBody()).disabled = !0, t.readonly = f.readonly, t.readonly || (t.inline && "static" === jC.getStyle(n, "position", !0) && (n.style.position = "relative"), n.contentEditable = t.getParam("content_editable_state", !0)), n.disabled = !1, t.editorUpload = wg(t), t.schema = oi(f), t.dom = vi(m, {
                keep_values: !0,
                url_converter: t.convertURL,
                url_converter_scope: t,
                hex_colors: f.force_hex_style_colors,
                class_filter: f.class_filter,
                update_styles: !0,
                root_element: t.inline ? t.getBody() : null,
                collect: f.content_editable,
                schema: t.schema,
                onSetAttrib: function(e) {
                    t.fire("SetAttrib", e)
                }
            }), t.parser = ((o = qy((u = t).settings, u.schema)).addAttributeFilter("src,href,style,tabindex", function(e, t) {
                for (var n, r, o, i = e.length, a = u.dom; i--;)
                    if (r = (n = e[i]).attr(t), o = "data-mce-" + t, !n.attributes.map[o]) {
                        if (0 === r.indexOf("data:") || 0 === r.indexOf("blob:")) continue;
                        "style" === t ? ((r = a.serializeStyle(a.parseStyle(r), n.name)).length || (r = null), n.attr(o, r), n.attr(t, r)) : "tabindex" === t ? (n.attr(o, r), n.attr(t, null)) : n.attr(o, u.convertURL(r, t, n.name))
                    }
            }), o.addNodeFilter("script", function(e) {
                for (var t, n, r = e.length; r--;) 0 !== (n = (t = e[r]).attr("type") || "no/type").indexOf("mce-") && t.attr("type", "mce-" + n)
            }), o.addNodeFilter("#cdata", function(e) {
                for (var t, n = e.length; n--;)(t = e[n]).type = 8, t.name = "#comment", t.value = "[CDATA[" + t.value + "]]"
            }), o.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div", function(e) {
                for (var t, n = e.length, r = u.schema.getNonEmptyElements(); n--;)(t = e[n]).isEmpty(r) && 0 === t.getAll("br").length && (t.append(new _y("br", 1)).shortEnded = !0)
            }), o), t.serializer = Wy(f, t), t.selection = Bb(t.dom, t.getWin(), t.serializer, t), t.formatter = vy(t), t.undoManager = Uh(t), t._nodeChangeDispatcher = new Dg(t), t._selectionOverrides = ph(t), HC(t), VC(t), zC(t), kg(t), t.fire("PreInit"), f.browser_spellcheck || f.gecko_spellcheck || (m.body.spellcheck = !1, jC.setAttrib(n, "spellcheck", "false")), t.quirks = UC(t), t.fire("PostRender"), f.directionality && (n.dir = f.directionality), f.nowrap && (n.style.whiteSpace = "nowrap"), f.protect && t.on("BeforeSetContent", function(t) {
                It.each(f.protect, function(e) {
                    t.content = t.content.replace(e, function(e) {
                        return "\x3c!--mce:protected " + escape(e) + "--\x3e"
                    })
                })
            }), t.on("SetContent", function() {
                t.addVisual(t.getBody())
            }), t.load({
                initial: !0,
                format: "html"
            }), t.startContent = t.getContent({
                format: "raw"
            }), t.on("compositionstart compositionend", function(e) {
                t.composing = "compositionstart" === e.type
            }), 0 < t.contentStyles.length && (r = "", It.each(t.contentStyles, function(e) {
                r += e + "\r\n"
            }), t.dom.addStyle(r)), (i = t, i.inline ? jC.styleSheetLoader : i.dom.styleSheetLoader).loadAll(t.contentCSS, function(e) {
                $C(t)
            }, function(e) {
                $C(t)
            }), f.content_style && (a = t, s = f.content_style, c = Vn.fromDom(a.getDoc().head), l = Vn.fromTag("style"), lr.set(l, "type", "text/css"), Hu.append(l, Vn.fromText(s)), Hu.append(c, l))
        },
        KC = vi.DOM,
        XC = function(e, t) {
            var n, r, o, i, a, u, s, c = e.editorManager.translate("Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help"),
                l = (n = e.id, r = c, o = t.height, i = ku(e), s = Vn.fromTag("iframe"), lr.setAll(s, i), lr.setAll(s, {
                    id: n + "_ifr",
                    frameBorder: "0",
                    allowTransparency: "true",
                    title: r
                }), yr(s, {
                    width: "100%",
                    height: (a = o, u = "number" == typeof a ? a + "px" : a, u || ""),
                    display: "block"
                }), s).dom();
            l.onload = function() {
                l.onload = null, e.fire("load")
            };
            var f, d, m, p, g = function(e, t) {
                if (document.domain !== window.location.hostname && ve.ie && ve.ie < 12) {
                    var n = xg.uuid("mce");
                    e[n] = function() {
                        WC(e)
                    };
                    var r = 'javascript:(function(){document.open();document.domain="' + document.domain + '";var ed = window.parent.tinymce.get("' + e.id + '");document.write(ed.iframeHTML);document.close();ed.' + n + "(true);})()";
                    return KC.setAttrib(t, "src", r), !0
                }
                return !1
            }(e, l);
            return e.contentAreaContainer = t.iframeContainer, e.iframeElement = l, e.iframeHTML = (p = Tu(f = e) + "<html><head>", Au(f) !== f.documentBaseUrl && (p += '<base href="' + f.documentBaseURI.getURI() + '" />'), p += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />', d = Ru(f), m = _u(f), Bu(f) && (p += '<meta http-equiv="Content-Security-Policy" content="' + Bu(f) + '" />'), p += '</head><body id="' + d + '" class="mce-content-body ' + m + '" data-id="' + f.id + '"><br></body></html>'), KC.add(t.iframeContainer, l), g
        },
        YC = function(e, t) {
            var n = XC(e, t);
            t.editorContainer && (KC.get(t.editorContainer).style.display = e.orgDisplay, e.hidden = KC.isHidden(t.editorContainer)), e.getElement().style.display = "none", KC.setAttrib(e.id, "aria-hidden", "true"), n || WC(e)
        },
        GC = vi.DOM,
        JC = function(t, n, e) {
            var r, o, i = og.get(e);
            if (r = og.urls[e] || t.documentBaseUrl.replace(/\/$/, ""), e = It.trim(e), i && -1 === It.inArray(n, e)) {
                if (It.each(og.dependencies(e), function(e) {
                        JC(t, n, e)
                    }), t.plugins[e]) return;
                o = new i(t, r, t.$), (t.plugins[e] = o).init && (o.init(t, r), n.push(e))
            }
        },
        QC = function(e) {
            return e.replace(/^\-/, "")
        },
        ZC = function(e) {
            return {
                editorContainer: e,
                iframeContainer: e
            }
        },
        ex = function(e) {
            var t, n, r = e.getElement();
            return e.inline ? ZC(null) : (t = r, n = GC.create("div"), GC.insertAfter(n, t), ZC(n))
        },
        tx = function(e) {
            var t, n, r, o, i, a, u, s, c, l, f, d = e.settings,
                m = e.getElement();
            return e.orgDisplay = m.style.display, k.isString(d.theme) ? (l = (o = e).settings, f = o.getElement(), i = l.width || GC.getStyle(f, "width") || "100%", a = l.height || GC.getStyle(f, "height") || f.offsetHeight, u = l.min_height || 100, (s = /^[0-9\.]+(|px)$/i).test("" + i) && (i = Math.max(parseInt(i, 10), 100)), s.test("" + a) && (a = Math.max(parseInt(a, 10), u)), c = o.theme.renderUI({
                targetNode: f,
                width: i,
                height: a,
                deltaWidth: l.delta_width,
                deltaHeight: l.delta_height
            }), l.content_editable || (a = (c.iframeHeight || a) + ("number" == typeof a ? c.deltaHeight || 0 : "")) < u && (a = u), c.height = a, c) : k.isFunction(d.theme) ? (r = (t = e).getElement(), (n = t.settings.theme(t, r)).editorContainer.nodeType && (n.editorContainer.id = n.editorContainer.id || t.id + "_parent"), n.iframeContainer && n.iframeContainer.nodeType && (n.iframeContainer.id = n.iframeContainer.id || t.id + "_iframecontainer"), n.height = n.iframeHeight ? n.iframeHeight : r.offsetHeight, n) : ex(e)
        },
        nx = function(t) {
            var e, n, r, o, i, a, u = t.settings,
                s = t.getElement();
            return t.rtl = u.rtl_ui || t.editorManager.i18n.rtl, t.editorManager.i18n.setCode(u.language), u.aria_label = u.aria_label || GC.getAttrib(s, "aria-label", t.getLang("aria.rich_text_area")), t.fire("ScriptsLoaded"), o = (n = t).settings.theme, k.isString(o) ? (n.settings.theme = QC(o), r = ig.get(o), n.theme = new r(n, ig.urls[o]), n.theme.init && n.theme.init(n, ig.urls[o] || n.documentBaseUrl.replace(/\/$/, ""), n.$)) : n.theme = {}, i = t, a = [], It.each(i.settings.plugins.split(/[ ,]/), function(e) {
                JC(i, a, QC(e))
            }), e = tx(t), t.editorContainer = e.editorContainer ? e.editorContainer : null, u.content_css && It.each(It.explode(u.content_css), function(e) {
                t.contentCSS.push(t.documentBaseURI.toAbsolute(e))
            }), u.content_editable ? WC(t) : YC(t, e)
        },
        rx = vi.DOM,
        ox = function(e) {
            return "-" === e.charAt(0)
        },
        ix = function(i, a) {
            var u = wi.ScriptLoader;
            ! function(e, t, n, r) {
                var o = t.settings,
                    i = o.theme;
                if (k.isString(i)) {
                    if (!ox(i) && !ig.urls.hasOwnProperty(i)) {
                        var a = o.theme_url;
                        a ? ig.load(i, t.documentBaseURI.toAbsolute(a)) : ig.load(i, "themes/" + i + "/theme" + n + ".js")
                    }
                    e.loadQueue(function() {
                        ig.waitFor(i, r)
                    })
                } else r()
            }(u, i, a, function() {
                var e, t, n, r, o;
                e = u, (n = (t = i).settings).language && "en" !== n.language && !n.language_url && (n.language_url = t.editorManager.baseURL + "/langs/" + n.language + ".js"), n.language_url && !t.editorManager.i18n.data[n.language] && e.add(n.language_url), r = i.settings, o = a, It.isArray(r.plugins) && (r.plugins = r.plugins.join(" ")), It.each(r.external_plugins, function(e, t) {
                    og.load(t, e), r.plugins += " " + t
                }), It.each(r.plugins.split(/[ ,]/), function(e) {
                    if ((e = It.trim(e)) && !og.urls[e])
                        if (ox(e)) {
                            e = e.substr(1, e.length);
                            var t = og.dependencies(e);
                            It.each(t, function(e) {
                                var t = {
                                    prefix: "plugins/",
                                    resource: e,
                                    suffix: "/plugin" + o + ".js"
                                };
                                e = og.createUrl(t, e), og.load(e.resource, e)
                            })
                        } else og.load(e, {
                            prefix: "plugins/",
                            resource: e,
                            suffix: "/plugin" + o + ".js"
                        })
                }), u.loadQueue(function() {
                    i.removed || nx(i)
                }, i, function(e) {
                    eg(i, e[0]), i.removed || nx(i)
                })
            })
        },
        ax = function(t) {
            var e = t.settings,
                n = t.id,
                r = function() {
                    rx.unbind(window, "ready", r), t.render()
                };
            if (Be.Event.domLoaded) {
                if (t.getElement() && ve.contentEditable) {
                    e.inline ? t.inline = !0 : (t.orgVisibility = t.getElement().style.visibility, t.getElement().style.visibility = "hidden");
                    var o = t.getElement().form || rx.getParent(n, "form");
                    o && (t.formElement = o, e.hidden_input && !/TEXTAREA|INPUT/i.test(t.getElement().nodeName) && (rx.insertAfter(rx.create("input", {
                        type: "hidden",
                        name: n
                    }), n), t.hasHiddenInput = !0), t.formEventDelegate = function(e) {
                        t.fire(e.type, e)
                    }, rx.bind(o, "submit reset", t.formEventDelegate), t.on("reset", function() {
                        t.setContent(t.startContent, {
                            format: "raw"
                        })
                    }), !e.submit_patch || o.submit.nodeType || o.submit.length || o._mceOldSubmit || (o._mceOldSubmit = o.submit, o.submit = function() {
                        return t.editorManager.triggerSave(), t.setDirty(!1), o._mceOldSubmit(o)
                    })), t.windowManager = Yp(t), t.notificationManager = Xp(t), "xml" === e.encoding && t.on("GetContent", function(e) {
                        e.save && (e.content = rx.encode(e.content))
                    }), e.add_form_submit_trigger && t.on("submit", function() {
                        t.initialized && t.save()
                    }), e.add_unload_trigger && (t._beforeUnload = function() {
                        !t.initialized || t.destroyed || t.isHidden() || t.save({
                            format: "raw",
                            no_events: !0,
                            set_dirty: !1
                        })
                    }, t.editorManager.on("BeforeUnload", t._beforeUnload)), t.editorManager.add(t), ix(t, t.suffix)
                }
            } else rx.bind(window, "ready", r)
        },
        ux = function(e, t, n) {
            var r = e.sidebars ? e.sidebars : [];
            r.push({
                name: t,
                settings: n
            }), e.sidebars = r
        },
        sx = It.each,
        cx = It.trim,
        lx = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),
        fx = {
            ftp: 21,
            http: 80,
            https: 443,
            mailto: 25
        },
        dx = function(r, e) {
            var t, n, o = this;
            if (r = cx(r), t = (e = o.settings = e || {}).base_uri, /^([\w\-]+):([^\/]{2})/i.test(r) || /^\s*#/.test(r)) o.source = r;
            else {
                var i = 0 === r.indexOf("//");
                0 !== r.indexOf("/") || i || (r = (t && t.protocol || "http") + "://mce_host" + r), /^[\w\-]*:?\/\//.test(r) || (n = e.base_uri ? e.base_uri.path : new dx(document.location.href).directory, "" == e.base_uri.protocol ? r = "//mce_host" + o.toAbsPath(n, r) : (r = /([^#?]*)([#?]?.*)/.exec(r), r = (t && t.protocol || "http") + "://mce_host" + o.toAbsPath(n, r[1]) + r[2])), r = r.replace(/@@/g, "(mce_at)"), r = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(r), sx(lx, function(e, t) {
                    var n = r[t];
                    n && (n = n.replace(/\(mce_at\)/g, "@@")), o[e] = n
                }), t && (o.protocol || (o.protocol = t.protocol), o.userInfo || (o.userInfo = t.userInfo), o.port || "mce_host" !== o.host || (o.port = t.port), o.host && "mce_host" !== o.host || (o.host = t.host), o.source = ""), i && (o.protocol = "")
            }
        };
    dx.prototype = {
        setPath: function(e) {
            e = /^(.*?)\/?(\w+)?$/.exec(e), this.path = e[0], this.directory = e[1], this.file = e[2], this.source = "", this.getURI()
        },
        toRelative: function(e) {
            var t;
            if ("./" === e) return e;
            if ("mce_host" !== (e = new dx(e, {
                    base_uri: this
                })).host && this.host !== e.host && e.host || this.port !== e.port || this.protocol !== e.protocol && "" !== e.protocol) return e.getURI();
            var n = this.getURI(),
                r = e.getURI();
            return n === r || "/" === n.charAt(n.length - 1) && n.substr(0, n.length - 1) === r ? n : (t = this.toRelPath(this.path, e.path), e.query && (t += "?" + e.query), e.anchor && (t += "#" + e.anchor), t)
        },
        toAbsolute: function(e, t) {
            return (e = new dx(e, {
                base_uri: this
            })).getURI(t && this.isSameOrigin(e))
        },
        isSameOrigin: function(e) {
            if (this.host == e.host && this.protocol == e.protocol) {
                if (this.port == e.port) return !0;
                var t = fx[this.protocol];
                if (t && (this.port || t) == (e.port || t)) return !0
            }
            return !1
        },
        toRelPath: function(e, t) {
            var n, r, o, i = 0,
                a = "";
            if (e = (e = e.substring(0, e.lastIndexOf("/"))).split("/"), n = t.split("/"), e.length >= n.length)
                for (r = 0, o = e.length; r < o; r++)
                    if (r >= n.length || e[r] !== n[r]) {
                        i = r + 1;
                        break
                    }
            if (e.length < n.length)
                for (r = 0, o = n.length; r < o; r++)
                    if (r >= e.length || e[r] !== n[r]) {
                        i = r + 1;
                        break
                    }
            if (1 === i) return t;
            for (r = 0, o = e.length - (i - 1); r < o; r++) a += "../";
            for (r = i - 1, o = n.length; r < o; r++) a += r !== i - 1 ? "/" + n[r] : n[r];
            return a
        },
        toAbsPath: function(e, t) {
            var n, r, o, i = 0,
                a = [];
            for (r = /\/$/.test(t) ? "/" : "", e = e.split("/"), t = t.split("/"), sx(e, function(e) {
                    e && a.push(e)
                }), e = a, n = t.length - 1, a = []; 0 <= n; n--) 0 !== t[n].length && "." !== t[n] && (".." !== t[n] ? 0 < i ? i-- : a.push(t[n]) : i++);
            return 0 !== (o = (n = e.length - i) <= 0 ? a.reverse().join("/") : e.slice(0, n).join("/") + "/" + a.reverse().join("/")).indexOf("/") && (o = "/" + o), r && o.lastIndexOf("/") !== o.length - 1 && (o += r), o
        },
        getURI: function(e) {
            var t, n = this;
            return n.source && !e || (t = "", e || (n.protocol ? t += n.protocol + "://" : t += "//", n.userInfo && (t += n.userInfo + "@"), n.host && (t += n.host), n.port && (t += ":" + n.port)), n.path && (t += n.path), n.query && (t += "?" + n.query), n.anchor && (t += "#" + n.anchor), n.source = t), n.source
        }
    }, dx.parseDataUri = function(e) {
        var t, n;
        return e = decodeURIComponent(e).split(","), (n = /data:([^;]+)/.exec(e[0])) && (t = n[1]), {
            type: t,
            data: e[1]
        }
    }, dx.getDocumentBaseUrl = function(e) {
        var t;
        return t = 0 !== e.protocol.indexOf("http") && "file:" !== e.protocol ? e.href : e.protocol + "//" + e.host + e.pathname, /^[^:]+:\/\/\/?[^\/]+\//.test(t) && (t = t.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(t) || (t += "/")), t
    };
    var mx = function(e, t, n) {
            var r, o, i, a, u;
            if (t.format = t.format ? t.format : "html", t.get = !0, t.getInner = !0, t.no_events || e.fire("BeforeGetContent", t), "raw" === t.format) r = It.trim(bh.trimExternal(e.serializer, n.innerHTML));
            else if ("text" === t.format) r = _i(n.innerText || n.textContent);
            else {
                if ("tree" === t.format) return e.serializer.serialize(n, t);
                i = (o = e).serializer.serialize(n, t), a = Ou(o), u = new RegExp("^(<" + a + "[^>]*>(&nbsp;|&#160;|\\s|\xa0|<br \\/>|)<\\/" + a + ">[\r\n]*|<br \\/>[\r\n]*)$"), r = i.replace(u, "")
            }
            return "text" === t.format || wo(Vn.fromDom(n)) ? t.content = r : t.content = It.trim(r), t.no_events || e.fire("GetContent", t), t.content
        },
        px = function(e, t) {
            t(e), e.firstChild && px(e.firstChild, t), e.next && px(e.next, t)
        },
        gx = function(e, t, n) {
            var r = function(e, n, t) {
                var r = {},
                    o = {},
                    i = [];
                for (var a in t.firstChild && px(t.firstChild, function(t) {
                        H.each(e, function(e) {
                            e.name === t.name && (r[e.name] ? r[e.name].nodes.push(t) : r[e.name] = {
                                filter: e,
                                nodes: [t]
                            })
                        }), H.each(n, function(e) {
                            "string" == typeof t.attr(e.name) && (o[e.name] ? o[e.name].nodes.push(t) : o[e.name] = {
                                filter: e,
                                nodes: [t]
                            })
                        })
                    }), r) r.hasOwnProperty(a) && i.push(r[a]);
                for (var u in o) o.hasOwnProperty(u) && i.push(o[u]);
                return i
            }(e, t, n);
            H.each(r, function(t) {
                H.each(t.filter.callbacks, function(e) {
                    e(t.nodes, t.filter.name, {})
                })
            })
        },
        hx = function(e) {
            return e instanceof _y
        },
        vx = function(e, t) {
            var r;
            e.dom.setHTML(e.getBody(), t), zp(r = e) && Qa.firstPositionIn(r.getBody()).each(function(e) {
                var t = e.getNode(),
                    n = Oo.isTable(t) ? Qa.firstPositionIn(t).getOr(e) : e;
                r.selection.setRng(n.toRange())
            })
        },
        yx = function(u, s, c) {
            return void 0 === c && (c = {}), c.format = c.format ? c.format : "html", c.set = !0, c.content = hx(s) ? "" : s, hx(s) || c.no_events || (u.fire("BeforeSetContent", c), s = c.content), A.from(u.getBody()).fold(V.constant(s), function(e) {
                return hx(s) ? function(e, t, n, r) {
                    gx(e.parser.getNodeFilters(), e.parser.getAttributeFilters(), n);
                    var o = Jc({
                        validate: e.validate
                    }, e.schema).serialize(n);
                    return r.content = wo(Vn.fromDom(t)) ? o : It.trim(o), vx(e, r.content), r.no_events || e.fire("SetContent", r), n
                }(u, e, s, c) : (t = u, n = e, o = c, 0 === (r = s).length || /^\s+$/.test(r) ? (a = '<br data-mce-bogus="1">', "TABLE" === n.nodeName ? r = "<tr><td>" + a + "</td></tr>" : /^(UL|OL)$/.test(n.nodeName) && (r = "<li>" + a + "</li>"), (i = Ou(t)) && t.schema.isValidChild(n.nodeName.toLowerCase(), i.toLowerCase()) ? (r = a, r = t.dom.createHTML(i, t.settings.forced_root_block_attrs, r)) : r || (r = '<br data-mce-bogus="1">'), vx(t, r), t.fire("SetContent", o)) : ("raw" !== o.format && (r = Jc({
                    validate: t.validate
                }, t.schema).serialize(t.parser.parse(r, {
                    isRootContent: !0,
                    insert: !0
                }))), o.content = wo(Vn.fromDom(n)) ? r : It.trim(r), vx(t, o.content), o.no_events || t.fire("SetContent", o)), o.content);
                var t, n, r, o, i, a
            })
        },
        bx = vi.DOM,
        Cx = function(e) {
            return A.from(e).each(function(e) {
                return e.destroy()
            })
        },
        xx = function(e) {
            if (!e.removed) {
                var t = e._selectionOverrides,
                    n = e.editorUpload,
                    r = e.getBody(),
                    o = e.getElement();
                r && e.save(), e.removed = !0, e.unbindAllNativeEvents(), e.hasHiddenInput && o && bx.remove(o.nextSibling), !e.inline && r && (i = e, bx.setStyle(i.id, "display", i.orgDisplay)), fp(e), e.editorManager.remove(e), bx.remove(e.getContainer()), Cx(t), Cx(n), e.destroy()
            }
            var i
        },
        wx = function(e, t) {
            var n, r, o, i = e.selection,
                a = e.dom;
            e.destroyed || (t || e.removed ? (t || (e.editorManager.off("beforeunload", e._beforeUnload), e.theme && e.theme.destroy && e.theme.destroy(), Cx(i), Cx(a)), (r = (n = e).formElement) && (r._mceOldSubmit && (r.submit = r._mceOldSubmit, r._mceOldSubmit = null), bx.unbind(r, "submit reset", n.formEventDelegate)), (o = e).contentAreaContainer = o.formElement = o.container = o.editorContainer = null, o.bodyElement = o.contentDocument = o.contentWindow = null, o.iframeElement = o.targetElm = null, o.selection && (o.selection = o.selection.win = o.selection.dom = o.selection.dom.doc = null), e.destroyed = !0) : e.remove())
        },
        Nx = vi.DOM,
        Ex = It.extend,
        Sx = It.each,
        kx = It.resolve,
        Tx = ve.ie,
        Ax = function(e, t, n) {
            var r, o, i, a, u, s, c, l = this,
                f = l.documentBaseUrl = n.documentBaseURL,
                d = n.baseURI;
            r = l, o = e, i = f, a = n.defaultSettings, u = t, c = {
                id: o,
                theme: "modern",
                delta_width: 0,
                delta_height: 0,
                popup_css: "",
                plugins: "",
                document_base_url: i,
                add_form_submit_trigger: !0,
                submit_patch: !0,
                add_unload_trigger: !0,
                convert_urls: !0,
                relative_urls: !0,
                remove_script_host: !0,
                object_resizing: !0,
                doctype: "<!DOCTYPE html>",
                visual: !0,
                font_size_style_values: "xx-small,x-small,small,medium,large,x-large,xx-large",
                font_size_legacy_values: "xx-small,small,medium,large,x-large,xx-large,300%",
                forced_root_block: "p",
                hidden_input: !0,
                render_ui: !0,
                indentation: "30px",
                inline_styles: !0,
                convert_fonts_to_spans: !0,
                indent: "simple",
                indent_before: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
                indent_after: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
                entity_encoding: "named",
                url_converter: (s = r).convertURL,
                url_converter_scope: s,
                ie7_compat: !0
            }, t = gl(cl, c, a, u), l.settings = t, Si.language = t.language || "en", Si.languageLoad = t.language_load, Si.baseURL = n.baseURL, l.id = e, l.setDirty(!1), l.plugins = {}, l.documentBaseURI = new dx(t.document_base_url, {
                base_uri: d
            }), l.baseURI = d, l.contentCSS = [], l.contentStyles = [], l.shortcuts = new Ap(l), l.loadedCSS = {}, l.editorCommands = new Hm(l), l.suffix = n.suffix, l.editorManager = n, l.inline = t.inline, l.buttons = {}, l.menuItems = {}, t.cache_suffix && (ve.cacheSuffix = t.cache_suffix.replace(/^[\?\&]+/, "")), !1 === t.override_viewport && (ve.overrideViewPort = !1), n.fire("SetupEditor", {
                editor: l
            }), l.execCallback("setup", l), l.$ = tn.overrideDefaults(function() {
                return {
                    context: l.inline ? l.getBody() : l.getDoc(),
                    element: l.getBody()
                }
            })
        };
    Ex(Ax.prototype = {
        render: function() {
            ax(this)
        },
        focus: function(e) {
            Fp(this, e)
        },
        hasFocus: function() {
            return zp(this)
        },
        execCallback: function(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            var r, o = this.settings[e];
            if (o) return this.callbackLookup && (r = this.callbackLookup[e]) && (o = r.func, r = r.scope), "string" == typeof o && (r = (r = o.replace(/\.\w+$/, "")) ? kx(r) : 0, o = kx(o), this.callbackLookup = this.callbackLookup || {}, this.callbackLookup[e] = {
                func: o,
                scope: r
            }), o.apply(r || this, Array.prototype.slice.call(arguments, 1))
        },
        translate: function(e) {
            if (e && It.is(e, "string")) {
                var n = this.settings.language || "en",
                    r = this.editorManager.i18n;
                e = r.data[n + "." + e] || e.replace(/\{\#([^\}]+)\}/g, function(e, t) {
                    return r.data[n + "." + t] || "{#" + t + "}"
                })
            }
            return this.editorManager.translate(e)
        },
        getLang: function(e, t) {
            return this.editorManager.i18n.data[(this.settings.language || "en") + "." + e] || (t !== undefined ? t : "{#" + e + "}")
        },
        getParam: function(e, t, n) {
            return yl(this, e, t, n)
        },
        nodeChanged: function(e) {
            this._nodeChangeDispatcher.nodeChanged(e)
        },
        addButton: function(e, t) {
            var n = this;
            t.cmd && (t.onclick = function() {
                n.execCommand(t.cmd)
            }), t.stateSelector && "undefined" == typeof t.active && (t.active = !1), t.text || t.icon || (t.icon = e), n.buttons = n.buttons, t.tooltip = t.tooltip || t.title, n.buttons[e] = t
        },
        addSidebar: function(e, t) {
            return ux(this, e, t)
        },
        addMenuItem: function(e, t) {
            var n = this;
            t.cmd && (t.onclick = function() {
                n.execCommand(t.cmd)
            }), n.menuItems = n.menuItems, n.menuItems[e] = t
        },
        addContextToolbar: function(e, t) {
            var n, r = this;
            r.contextToolbars = r.contextToolbars || [], "string" == typeof e && (n = e, e = function(e) {
                return r.dom.is(e, n)
            }), r.contextToolbars.push({
                id: xg.uuid("mcet"),
                predicate: e,
                items: t
            })
        },
        addCommand: function(e, t, n) {
            this.editorCommands.addCommand(e, t, n)
        },
        addQueryStateHandler: function(e, t, n) {
            this.editorCommands.addQueryStateHandler(e, t, n)
        },
        addQueryValueHandler: function(e, t, n) {
            this.editorCommands.addQueryValueHandler(e, t, n)
        },
        addShortcut: function(e, t, n, r) {
            this.shortcuts.add(e, t, n, r)
        },
        execCommand: function(e, t, n, r) {
            return this.editorCommands.execCommand(e, t, n, r)
        },
        queryCommandState: function(e) {
            return this.editorCommands.queryCommandState(e)
        },
        queryCommandValue: function(e) {
            return this.editorCommands.queryCommandValue(e)
        },
        queryCommandSupported: function(e) {
            return this.editorCommands.queryCommandSupported(e)
        },
        show: function() {
            this.hidden && (this.hidden = !1, this.inline ? this.getBody().contentEditable = !0 : (Nx.show(this.getContainer()), Nx.hide(this.id)), this.load(), this.fire("show"))
        },
        hide: function() {
            var e = this,
                t = e.getDoc();
            e.hidden || (Tx && t && !e.inline && t.execCommand("SelectAll"), e.save(), e.inline ? (e.getBody().contentEditable = !1, e === e.editorManager.focusedEditor && (e.editorManager.focusedEditor = null)) : (Nx.hide(e.getContainer()), Nx.setStyle(e.id, "display", e.orgDisplay)), e.hidden = !0, e.fire("hide"))
        },
        isHidden: function() {
            return !!this.hidden
        },
        setProgressState: function(e, t) {
            this.fire("ProgressState", {
                state: e,
                time: t
            })
        },
        load: function(e) {
            var t, n = this.getElement();
            return this.removed ? "" : n ? ((e = e || {}).load = !0, t = this.setContent(n.value !== undefined ? n.value : n.innerHTML, e), e.element = n, e.no_events || this.fire("LoadContent", e), e.element = n = null, t) : void 0
        },
        save: function(e) {
            var t, n, r = this,
                o = r.getElement();
            if (o && r.initialized && !r.removed) return (e = e || {}).save = !0, e.element = o, e.content = r.getContent(e), e.no_events || r.fire("SaveContent", e), "raw" === e.format && r.fire("RawSaveContent", e), t = e.content, /TEXTAREA|INPUT/i.test(o.nodeName) ? o.value = t : (r.inline || (o.innerHTML = t), (n = Nx.getParent(r.id, "form")) && Sx(n.elements, function(e) {
                if (e.name === r.id) return e.value = t, !1
            })), e.element = o = null, !1 !== e.set_dirty && r.setDirty(!1), t
        },
        setContent: function(e, t) {
            return yx(this, e, t)
        },
        getContent: function(e) {
            return t = this, void 0 === (n = e) && (n = {}), A.from(t.getBody()).fold(V.constant("tree" === n.format ? new _y("body", 11) : ""), function(e) {
                return mx(t, n, e)
            });
            var t, n
        },
        insertContent: function(e, t) {
            t && (e = Ex({
                content: e
            }, t)), this.execCommand("mceInsertContent", !1, e)
        },
        isDirty: function() {
            return !this.isNotDirty
        },
        setDirty: function(e) {
            var t = !this.isNotDirty;
            this.isNotDirty = !e, e && e !== t && this.fire("dirty")
        },
        setMode: function(e) {
            var t, n;
            (n = e) !== vp(t = this) && (t.initialized ? hp(t, "readonly" === n) : t.on("init", function() {
                hp(t, "readonly" === n)
            }), dp(t, n))
        },
        getContainer: function() {
            return this.container || (this.container = Nx.get(this.editorContainer || this.id + "_parent")), this.container
        },
        getContentAreaContainer: function() {
            return this.contentAreaContainer
        },
        getElement: function() {
            return this.targetElm || (this.targetElm = Nx.get(this.id)), this.targetElm
        },
        getWin: function() {
            var e;
            return this.contentWindow || (e = this.iframeElement) && (this.contentWindow = e.contentWindow), this.contentWindow
        },
        getDoc: function() {
            var e;
            return this.contentDocument || (e = this.getWin()) && (this.contentDocument = e.document), this.contentDocument
        },
        getBody: function() {
            var e = this.getDoc();
            return this.bodyElement || (e ? e.body : null)
        },
        convertURL: function(e, t, n) {
            var r = this.settings;
            return r.urlconverter_callback ? this.execCallback("urlconverter_callback", e, n, !0, t) : !r.convert_urls || n && "LINK" === n.nodeName || 0 === e.indexOf("file:") || 0 === e.length ? e : r.relative_urls ? this.documentBaseURI.toRelative(e) : e = this.documentBaseURI.toAbsolute(e, r.remove_script_host)
        },
        addVisual: function(e) {
            var n, r = this,
                o = r.settings,
                i = r.dom;
            e = e || r.getBody(), r.hasVisual === undefined && (r.hasVisual = o.visual), Sx(i.select("table,a", e), function(e) {
                var t;
                switch (e.nodeName) {
                    case "TABLE":
                        return n = o.visual_table_class || "mce-item-table", void((t = i.getAttrib(e, "border")) && "0" !== t || !r.hasVisual ? i.removeClass(e, n) : i.addClass(e, n));
                    case "A":
                        return void(i.getAttrib(e, "href") || (t = i.getAttrib(e, "name") || e.id, n = o.visual_anchor_class || "mce-item-anchor", t && r.hasVisual ? i.addClass(e, n) : i.removeClass(e, n)))
                }
            }), r.fire("VisualAid", {
                element: e,
                hasVisual: r.hasVisual
            })
        },
        remove: function() {
            xx(this)
        },
        destroy: function(e) {
            wx(this, e)
        },
        uploadImages: function(e) {
            return this.editorUpload.uploadImages(e)
        },
        _scanForImages: function() {
            return this.editorUpload.scanForImages()
        }
    }, Np);
    var Rx, _x, Bx, Dx = {
            isEditorUIElement: function(e) {
                return -1 !== e.className.toString().indexOf("mce-")
            }
        },
        Ox = function(n, e) {
            var t, r;
            Un.detect().browser.isIE() ? (r = n).on("focusout", function() {
                Lm(r)
            }) : (t = e, n.on("mouseup touchend", function(e) {
                t.throttle()
            })), n.on("keyup nodechange", function(e) {
                var t;
                "nodechange" === (t = e).type && t.selectionChange || Lm(n)
            })
        },
        Px = function(e) {
            var t, n, r, o = ah(function() {
                Lm(e)
            }, 0);
            e.inline && (t = e, n = o, r = function() {
                n.throttle()
            }, vi.DOM.bind(document, "mouseup", r), t.on("remove", function() {
                vi.DOM.unbind(document, "mouseup", r)
            })), e.on("init", function() {
                Ox(e, o)
            }), e.on("remove", function() {
                o.cancel()
            })
        },
        Lx = vi.DOM,
        Ix = function(e) {
            return Dx.isEditorUIElement(e)
        },
        Mx = function(t, e) {
            var n = t ? t.settings.custom_ui_selector : "";
            return null !== Lx.getParent(e, function(e) {
                return Ix(e) || !!n && t.dom.is(e, n)
            })
        },
        Fx = function(r, e) {
            var t = e.editor;
            Px(t), t.on("focusin", function() {
                var e = r.focusedEditor;
                e !== this && (e && e.fire("blur", {
                    focusedEditor: this
                }), r.setActive(this), (r.focusedEditor = this).fire("focus", {
                    blurredEditor: e
                }), this.focus(!0))
            }), t.on("focusout", function() {
                var t = this;
                we.setEditorTimeout(t, function() {
                    var e = r.focusedEditor;
                    Mx(t, function() {
                        try {
                            return document.activeElement
                        } catch (e) {
                            return document.body
                        }
                    }()) || e !== t || (t.fire("blur", {
                        focusedEditor: null
                    }), r.focusedEditor = null)
                })
            }), Rx || (Rx = function(e) {
                var t, n = r.activeEditor;
                t = e.target, n && t.ownerDocument === document && (t === document.body || Mx(n, t) || r.focusedEditor !== n || (n.fire("blur", {
                    focusedEditor: null
                }), r.focusedEditor = null))
            }, Lx.bind(document, "focusin", Rx))
        },
        zx = function(e, t) {
            e.focusedEditor === t.editor && (e.focusedEditor = null), e.activeEditor || (Lx.unbind(document, "focusin", Rx), Rx = null)
        },
        Ux = function(e) {
            e.on("AddEditor", V.curry(Fx, e)), e.on("RemoveEditor", V.curry(zx, e))
        },
        qx = {},
        Vx = "en",
        Hx = {
            setCode: function(e) {
                e && (Vx = e, this.rtl = !!this.data[e] && "rtl" === this.data[e]._dir)
            },
            getCode: function() {
                return Vx
            },
            rtl: !1,
            add: function(e, t) {
                var n = qx[e];
                for (var r in n || (qx[e] = n = {}), t) n[r] = t[r];
                this.setCode(e)
            },
            translate: function(e) {
                var t = qx[Vx] || {},
                    n = function(e) {
                        return It.is(e, "function") ? Object.prototype.toString.call(e) : r(e) ? "" : "" + e
                    },
                    r = function(e) {
                        return "" === e || null === e || It.is(e, "undefined")
                    },
                    o = function(e) {
                        return e = n(e), It.hasOwn(t, e) ? n(t[e]) : e
                    };
                if (r(e)) return "";
                if (It.is(e, "object") && It.hasOwn(e, "raw")) return n(e.raw);
                if (It.is(e, "array")) {
                    var i = e.slice(1);
                    e = o(e[0]).replace(/\{([0-9]+)\}/g, function(e, t) {
                        return It.hasOwn(i, t) ? n(i[t]) : e
                    })
                }
                return o(e).replace(/{context:\w+}$/, "")
            },
            data: qx
        },
        jx = vi.DOM,
        $x = It.explode,
        Wx = It.each,
        Kx = It.extend,
        Xx = 0,
        Yx = !1,
        Gx = [],
        Jx = [],
        Qx = function(t) {
            Wx(Bx.get(), function(e) {
                "scroll" === t.type ? e.fire("ScrollWindow", t) : e.fire("ResizeWindow", t)
            })
        },
        Zx = function(e) {
            e !== Yx && (e ? tn(window).on("resize scroll", Qx) : tn(window).off("resize scroll", Qx), Yx = e)
        },
        ew = function(t) {
            var e = Jx;
            delete Gx[t.id];
            for (var n = 0; n < Gx.length; n++)
                if (Gx[n] === t) {
                    Gx.splice(n, 1);
                    break
                }
            return Jx = H.filter(Jx, function(e) {
                return t !== e
            }), Bx.activeEditor === t && (Bx.activeEditor = 0 < Jx.length ? Jx[0] : null), Bx.focusedEditor === t && (Bx.focusedEditor = null), e.length !== Jx.length
        };
    Kx(Bx = {
        defaultSettings: {},
        $: tn,
        majorVersion: "4",
        minorVersion: "7.13",
        releaseDate: "2018-05-16",
        editors: Gx,
        i18n: Hx,
        activeEditor: null,
        settings: {},
        setup: function() {
            var e, t, n, r, o = "";
            if (t = dx.getDocumentBaseUrl(document.location), /^[^:]+:\/\/\/?[^\/]+\//.test(t) && (t = t.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(t) || (t += "/")), n = window.tinymce || window.tinyMCEPreInit) e = n.base || n.baseURL, o = n.suffix;
            else {
                for (var i = document.getElementsByTagName("script"), a = 0; a < i.length; a++) {
                    var u = (r = i[a].src).substring(r.lastIndexOf("/"));
                    if (/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(r)) {
                        -1 !== u.indexOf(".min") && (o = ".min"), e = r.substring(0, r.lastIndexOf("/"));
                        break
                    }
                }!e && document.currentScript && (-1 !== (r = document.currentScript.src).indexOf(".min") && (o = ".min"), e = r.substring(0, r.lastIndexOf("/")))
            }
            this.baseURL = new dx(t).toAbsolute(e), this.documentBaseURL = t, this.baseURI = new dx(this.baseURL), this.suffix = o, Ux(this)
        },
        overrideDefaults: function(e) {
            var t, n;
            (t = e.base_url) && (this.baseURL = new dx(this.documentBaseURL).toAbsolute(t.replace(/\/+$/, "")), this.baseURI = new dx(this.baseURL)), n = e.suffix, e.suffix && (this.suffix = n);
            var r = (this.defaultSettings = e).plugin_base_urls;
            for (var o in r) Si.PluginManager.urls[o] = r[o]
        },
        init: function(r) {
            var n, u, s = this;
            u = It.makeMap("area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option tbody tfoot thead tr script noscript style textarea video audio iframe object menu", " ");
            var c = function(e) {
                    var t = e.id;
                    return t || (t = (t = e.name) && !jx.get(t) ? e.name : jx.uniqueId(), e.setAttribute("id", t)), t
                },
                l = function(e, t) {
                    return t.constructor === RegExp ? t.test(e.className) : jx.hasClass(e, t)
                },
                f = function(e) {
                    n = e
                },
                e = function() {
                    var o, i = 0,
                        a = [],
                        n = function(e, t, n) {
                            var r = new Ax(e, t, s);
                            a.push(r), r.on("init", function() {
                                ++i === o.length && f(a)
                            }), r.targetElm = r.targetElm || n, r.render()
                        };
                    jx.unbind(window, "ready", e),
                        function(e) {
                            var t = r[e];
                            t && t.apply(s, Array.prototype.slice.call(arguments, 2))
                        }("onpageload"), o = tn.unique(function(t) {
                            var e, n = [];
                            if (ve.ie && ve.ie < 11) return rg("TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tinymce.com/docs/get-started/system-requirements/"), [];
                            if (t.types) return Wx(t.types, function(e) {
                                n = n.concat(jx.select(e.selector))
                            }), n;
                            if (t.selector) return jx.select(t.selector);
                            if (t.target) return [t.target];
                            switch (t.mode) {
                                case "exact":
                                    0 < (e = t.elements || "").length && Wx($x(e), function(t) {
                                        var e;
                                        (e = jx.get(t)) ? n.push(e): Wx(document.forms, function(e) {
                                            Wx(e.elements, function(e) {
                                                e.name === t && (t = "mce_editor_" + Xx++, jx.setAttrib(e, "id", t), n.push(e))
                                            })
                                        })
                                    });
                                    break;
                                case "textareas":
                                case "specific_textareas":
                                    Wx(jx.select("textarea"), function(e) {
                                        t.editor_deselector && l(e, t.editor_deselector) || t.editor_selector && !l(e, t.editor_selector) || n.push(e)
                                    })
                            }
                            return n
                        }(r)), r.types ? Wx(r.types, function(t) {
                            It.each(o, function(e) {
                                return !jx.is(e, t.selector) || (n(c(e), Kx({}, r, t), e), !1)
                            })
                        }) : (It.each(o, function(e) {
                            var t;
                            (t = s.get(e.id)) && t.initialized && !(t.getContainer() || t.getBody()).parentNode && (ew(t), t.unbindAllNativeEvents(), t.destroy(!0), t.removed = !0, t = null)
                        }), 0 === (o = It.grep(o, function(e) {
                            return !s.get(e.id)
                        })).length ? f([]) : Wx(o, function(e) {
                            var t;
                            t = e, r.inline && t.tagName.toLowerCase() in u ? rg("Could not initialize inline editor on invalid inline target element", e) : n(c(e), r, e)
                        }))
                };
            return s.settings = r, jx.bind(window, "ready", e), new ye(function(t) {
                n ? t(n) : f = function(e) {
                    t(e)
                }
            })
        },
        get: function(t) {
            return 0 === arguments.length ? Jx.slice(0) : k.isString(t) ? H.find(Jx, function(e) {
                return e.id === t
            }).getOr(null) : k.isNumber(t) && Jx[t] ? Jx[t] : null
        },
        add: function(e) {
            var t = this;
            return Gx[e.id] === e || (null === t.get(e.id) && ("length" !== e.id && (Gx[e.id] = e), Gx.push(e), Jx.push(e)), Zx(!0), t.activeEditor = e, t.fire("AddEditor", {
                editor: e
            }), _x || (_x = function() {
                t.fire("BeforeUnload")
            }, jx.bind(window, "beforeunload", _x))), e
        },
        createEditor: function(e, t) {
            return this.add(new Ax(e, t, this))
        },
        remove: function(e) {
            var t, n, r = this;
            if (e) return k.isString(e) ? (e = e.selector || e, void Wx(jx.select(e), function(e) {
                (n = r.get(e.id)) && r.remove(n)
            })) : (n = e, k.isNull(r.get(n.id)) ? null : (ew(n) && r.fire("RemoveEditor", {
                editor: n
            }), 0 === Jx.length && jx.unbind(window, "beforeunload", _x), n.remove(), Zx(0 < Jx.length), n));
            for (t = Jx.length - 1; 0 <= t; t--) r.remove(Jx[t])
        },
        execCommand: function(e, t, n) {
            var r = this.get(n);
            switch (e) {
                case "mceAddEditor":
                    return this.get(n) || new Ax(n, this.settings, this).render(), !0;
                case "mceRemoveEditor":
                    return r && r.remove(), !0;
                case "mceToggleEditor":
                    return r ? r.isHidden() ? r.show() : r.hide() : this.execCommand("mceAddEditor", 0, n), !0
            }
            return !!this.activeEditor && this.activeEditor.execCommand(e, t, n)
        },
        triggerSave: function() {
            Wx(Jx, function(e) {
                e.save()
            })
        },
        addI18n: function(e, t) {
            Hx.add(e, t)
        },
        translate: function(e) {
            return Hx.translate(e)
        },
        setActive: function(e) {
            var t = this.activeEditor;
            this.activeEditor !== e && (t && t.fire("deactivate", {
                relatedTarget: e
            }), e.fire("activate", {
                relatedTarget: t
            })), this.activeEditor = e
        }
    }, Xm), Bx.setup();
    var tw, nw = Bx;

    function rw(n) {
        return {
            walk: function(e, t) {
                return Bv(n, e, t)
            },
            split: mv,
            normalize: function(t) {
                return um(n, t).fold(V.constant(!1), function(e) {
                    return t.setStart(e.startContainer, e.startOffset), t.setEnd(e.endContainer, e.endOffset), !0
                })
            }
        }
    }(tw = rw || (rw = {})).compareRanges = em, tw.getCaretRangeFromPoint = Zy, tw.getSelectedNode = aa, tw.getNode = ua;
    var ow, iw, aw = rw,
        uw = Math.min,
        sw = Math.max,
        cw = Math.round,
        lw = function(e, t, n) {
            var r, o, i, a, u, s;
            return r = t.x, o = t.y, i = e.w, a = e.h, u = t.w, s = t.h, "b" === (n = (n || "").split(""))[0] && (o += s), "r" === n[1] && (r += u), "c" === n[0] && (o += cw(s / 2)), "c" === n[1] && (r += cw(u / 2)), "b" === n[3] && (o -= a), "r" === n[4] && (r -= i), "c" === n[3] && (o -= cw(a / 2)), "c" === n[4] && (r -= cw(i / 2)), fw(r, o, i, a)
        },
        fw = function(e, t, n, r) {
            return {
                x: e,
                y: t,
                w: n,
                h: r
            }
        },
        dw = {
            inflate: function(e, t, n) {
                return fw(e.x - t, e.y - n, e.w + 2 * t, e.h + 2 * n)
            },
            relativePosition: lw,
            findBestRelativePosition: function(e, t, n, r) {
                var o, i;
                for (i = 0; i < r.length; i++)
                    if ((o = lw(e, t, r[i])).x >= n.x && o.x + o.w <= n.w + n.x && o.y >= n.y && o.y + o.h <= n.h + n.y) return r[i];
                return null
            },
            intersect: function(e, t) {
                var n, r, o, i;
                return n = sw(e.x, t.x), r = sw(e.y, t.y), o = uw(e.x + e.w, t.x + t.w), i = uw(e.y + e.h, t.y + t.h), o - n < 0 || i - r < 0 ? null : fw(n, r, o - n, i - r)
            },
            clamp: function(e, t, n) {
                var r, o, i, a, u, s, c, l, f, d;
                return u = e.x, s = e.y, c = e.x + e.w, l = e.y + e.h, f = t.x + t.w, d = t.y + t.h, r = sw(0, t.x - u), o = sw(0, t.y - s), i = sw(0, c - f), a = sw(0, l - d), u += r, s += o, n && (c += r, l += o, u -= i, s -= a), fw(u, s, (c -= i) - u, (l -= a) - s)
            },
            create: fw,
            fromClientRect: function(e) {
                return fw(e.left, e.top, e.width, e.height)
            }
        },
        mw = {},
        pw = {
            add: function(e, t) {
                mw[e.toLowerCase()] = t
            },
            has: function(e) {
                return !!mw[e.toLowerCase()]
            },
            get: function(e) {
                var t = e.toLowerCase(),
                    n = mw.hasOwnProperty(t) ? mw[t] : null;
                if (null === n) throw new Error("Could not find module for type: " + e);
                return n
            },
            create: function(e, t) {
                var n;
                if ("string" == typeof e ? (t = t || {}).type = e : e = (t = e).type, e = e.toLowerCase(), !(n = mw[e])) throw new Error("Could not find control by type: " + e);
                return (n = new n(t)).type = e, n
            }
        },
        gw = It.each,
        hw = It.extend,
        vw = function() {};
    vw.extend = ow = function(n) {
        var e, t, r, o = this.prototype,
            i = function() {
                var e, t, n;
                if (!iw && (this.init && this.init.apply(this, arguments), t = this.Mixins))
                    for (e = t.length; e--;)(n = t[e]).init && n.init.apply(this, arguments)
            },
            a = function() {
                return this
            },
            u = function(n, r) {
                return function() {
                    var e, t = this._super;
                    return this._super = o[n], e = r.apply(this, arguments), this._super = t, e
                }
            };
        for (t in iw = !0, e = new this, iw = !1, n.Mixins && (gw(n.Mixins, function(e) {
                for (var t in e) "init" !== t && (n[t] = e[t])
            }), o.Mixins && (n.Mixins = o.Mixins.concat(n.Mixins))), n.Methods && gw(n.Methods.split(","), function(e) {
                n[e] = a
            }), n.Properties && gw(n.Properties.split(","), function(e) {
                var t = "_" + e;
                n[e] = function(e) {
                    return e !== undefined ? (this[t] = e, this) : this[t]
                }
            }), n.Statics && gw(n.Statics, function(e, t) {
                i[t] = e
            }), n.Defaults && o.Defaults && (n.Defaults = hw({}, o.Defaults, n.Defaults)), n) "function" == typeof(r = n[t]) && o[t] ? e[t] = u(t, r) : e[t] = r;
        return i.prototype = e, (i.constructor = i).extend = ow, i
    };
    var yw = Math.min,
        bw = Math.max,
        Cw = Math.round,
        xw = function(e, n) {
            var r, o, t, i;
            if (n = n || '"', null === e) return "null";
            if ("string" == (t = typeof e)) return o = "\bb\tt\nn\ff\rr\"\"''\\\\", n + e.replace(/([\u0080-\uFFFF\x00-\x1f\"\'\\])/g, function(e, t) {
                return '"' === n && "'" === e ? e : (r = o.indexOf(t)) + 1 ? "\\" + o.charAt(r + 1) : (e = t.charCodeAt().toString(16), "\\u" + "0000".substring(e.length) + e)
            }) + n;
            if ("object" === t) {
                if (e.hasOwnProperty && "[object Array]" === Object.prototype.toString.call(e)) {
                    for (r = 0, o = "["; r < e.length; r++) o += (0 < r ? "," : "") + xw(e[r], n);
                    return o + "]"
                }
                for (i in o = "{", e) e.hasOwnProperty(i) && (o += "function" != typeof e[i] ? (1 < o.length ? "," + n : n) + i + n + ":" + xw(e[i], n) : "");
                return o + "}"
            }
            return "" + e
        },
        ww = {
            serialize: xw,
            parse: function(e) {
                try {
                    return JSON.parse(e)
                } catch (t) {}
            }
        },
        Nw = {
            callbacks: {},
            count: 0,
            send: function(t) {
                var n = this,
                    r = vi.DOM,
                    o = t.count !== undefined ? t.count : n.count,
                    i = "tinymce_jsonp_" + o;
                n.callbacks[o] = function(e) {
                    r.remove(i), delete n.callbacks[o], t.callback(e)
                }, r.add(r.doc.body, "script", {
                    id: i,
                    src: t.url,
                    type: "text/javascript"
                }), n.count++
            }
        },
        Ew = {
            send: function(e) {
                var t, n = 0,
                    r = function() {
                        !e.async || 4 === t.readyState || 1e4 < n++ ? (e.success && n < 1e4 && 200 === t.status ? e.success.call(e.success_scope, "" + t.responseText, t, e) : e.error && e.error.call(e.error_scope, 1e4 < n ? "TIMED_OUT" : "GENERAL", t, e), t = null) : setTimeout(r, 10)
                    };
                if (e.scope = e.scope || this, e.success_scope = e.success_scope || e.scope, e.error_scope = e.error_scope || e.scope, e.async = !1 !== e.async, e.data = e.data || "", Ew.fire("beforeInitialize", {
                        settings: e
                    }), t = new ag) {
                    if (t.overrideMimeType && t.overrideMimeType(e.content_type), t.open(e.type || (e.data ? "POST" : "GET"), e.url, e.async), e.crossDomain && (t.withCredentials = !0), e.content_type && t.setRequestHeader("Content-Type", e.content_type), e.requestheaders && It.each(e.requestheaders, function(e) {
                            t.setRequestHeader(e.key, e.value)
                        }), t.setRequestHeader("X-Requested-With", "XMLHttpRequest"), (t = Ew.fire("beforeSend", {
                            xhr: t,
                            settings: e
                        }).xhr).send(e.data), !e.async) return r();
                    setTimeout(r, 10)
                }
            }
        };
    It.extend(Ew, Xm);
    var Sw = It.extend,
        kw = function(e) {
            this.settings = Sw({}, e), this.count = 0
        };
    kw.sendRPC = function(e) {
        return (new kw).send(e)
    }, kw.prototype = {
        send: function(n) {
            var r = n.error,
                o = n.success;
            (n = Sw(this.settings, n)).success = function(e, t) {
                void 0 === (e = ww.parse(e)) && (e = {
                    error: "JSON Parse error."
                }), e.error ? r.call(n.error_scope || n.scope, e.error, t) : o.call(n.success_scope || n.scope, e.result)
            }, n.error = function(e, t) {
                r && r.call(n.error_scope || n.scope, e, t)
            }, n.data = ww.serialize({
                id: n.id || "c" + this.count++,
                method: n.method,
                params: n.params
            }), n.content_type = "application/json", Ew.send(n)
        }
    };
    var Tw, Aw = window.localStorage,
        Rw = nw,
        _w = {
            geom: {
                Rect: dw
            },
            util: {
                Promise: ye,
                Delay: we,
                Tools: It,
                VK: sh,
                URI: dx,
                Class: vw,
                EventDispatcher: $m,
                Observable: Xm,
                I18n: Hx,
                XHR: Ew,
                JSON: ww,
                JSONRequest: kw,
                JSONP: Nw,
                LocalStorage: Aw,
                Color: function(e) {
                    var n = {},
                        u = 0,
                        s = 0,
                        c = 0,
                        t = function(e) {
                            var t;
                            return "object" == typeof e ? "r" in e ? (u = e.r, s = e.g, c = e.b) : "v" in e && function(e, t, n) {
                                var r, o, i, a;
                                if (e = (parseInt(e, 10) || 0) % 360, t = parseInt(t, 10) / 100, n = parseInt(n, 10) / 100, t = bw(0, yw(t, 1)), n = bw(0, yw(n, 1)), 0 !== t) {
                                    switch (r = e / 60, i = (o = n * t) * (1 - Math.abs(r % 2 - 1)), a = n - o, Math.floor(r)) {
                                        case 0:
                                            u = o, s = i, c = 0;
                                            break;
                                        case 1:
                                            u = i, s = o, c = 0;
                                            break;
                                        case 2:
                                            u = 0, s = o, c = i;
                                            break;
                                        case 3:
                                            u = 0, s = i, c = o;
                                            break;
                                        case 4:
                                            u = i, s = 0, c = o;
                                            break;
                                        case 5:
                                            u = o, s = 0, c = i;
                                            break;
                                        default:
                                            u = s = c = 0
                                    }
                                    u = Cw(255 * (u + a)), s = Cw(255 * (s + a)), c = Cw(255 * (c + a))
                                } else u = s = c = Cw(255 * n)
                            }(e.h, e.s, e.v) : (t = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(e)) ? (u = parseInt(t[1], 10), s = parseInt(t[2], 10), c = parseInt(t[3], 10)) : (t = /#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e)) ? (u = parseInt(t[1], 16), s = parseInt(t[2], 16), c = parseInt(t[3], 16)) : (t = /#([0-F])([0-F])([0-F])/gi.exec(e)) && (u = parseInt(t[1] + t[1], 16), s = parseInt(t[2] + t[2], 16), c = parseInt(t[3] + t[3], 16)), u = u < 0 ? 0 : 255 < u ? 255 : u, s = s < 0 ? 0 : 255 < s ? 255 : s, c = c < 0 ? 0 : 255 < c ? 255 : c, n
                        };
                    return e && t(e), n.toRgb = function() {
                        return {
                            r: u,
                            g: s,
                            b: c
                        }
                    }, n.toHsv = function() {
                        return e = u, t = s, n = c, o = 0, (i = yw(e /= 255, yw(t /= 255, n /= 255))) === (a = bw(e, bw(t, n))) ? {
                            h: 0,
                            s: 0,
                            v: 100 * (o = i)
                        } : (r = (a - i) / a, {
                            h: Cw(60 * ((e === i ? 3 : n === i ? 1 : 5) - (e === i ? t - n : n === i ? e - t : n - e) / ((o = a) - i))),
                            s: Cw(100 * r),
                            v: Cw(100 * o)
                        });
                        var e, t, n, r, o, i, a
                    }, n.toHex = function() {
                        var e = function(e) {
                            return 1 < (e = parseInt(e, 10).toString(16)).length ? e : "0" + e
                        };
                        return "#" + e(u) + e(s) + e(c)
                    }, n.parse = t, n
                }
            },
            dom: {
                EventUtils: Be,
                Sizzle: mt,
                DomQuery: tn,
                TreeWalker: ao,
                DOMUtils: vi,
                ScriptLoader: wi,
                RangeUtils: aw,
                Serializer: Wy,
                ControlSelection: Jy,
                BookmarkManager: Xy,
                Selection: Bb,
                Event: Be.Event
            },
            html: {
                Styles: ai,
                Entities: Ko,
                Node: _y,
                Schema: oi,
                SaxParser: vh,
                DomParser: qy,
                Writer: Gc,
                Serializer: Jc
            },
            ui: {
                Factory: pw
            },
            Env: ve,
            AddOnManager: Si,
            Formatter: vy,
            UndoManager: Uh,
            EditorCommands: Hm,
            WindowManager: Yp,
            NotificationManager: Xp,
            EditorObservable: Np,
            Shortcuts: Ap,
            Editor: Ax,
            FocusManager: Dx,
            EditorManager: nw,
            DOM: vi.DOM,
            ScriptLoader: wi.ScriptLoader,
            PluginManager: Si.PluginManager,
            ThemeManager: Si.ThemeManager,
            trim: It.trim,
            isArray: It.isArray,
            is: It.is,
            toArray: It.toArray,
            makeMap: It.makeMap,
            each: It.each,
            map: It.map,
            grep: It.grep,
            inArray: It.inArray,
            extend: It.extend,
            create: It.create,
            walk: It.walk,
            createNS: It.createNS,
            resolve: It.resolve,
            explode: It.explode,
            _addCacheSuffix: It._addCacheSuffix,
            isOpera: ve.opera,
            isWebKit: ve.webkit,
            isIE: ve.ie,
            isGecko: ve.gecko,
            isMac: ve.mac
        },
        Bw = Rw = It.extend(Rw, _w);
    Tw = Bw, window.tinymce = Tw, window.tinyMCE = Tw,
        function(e) {
            if ("object" == typeof module) try {
                module.exports = e
            } catch (t) {}
        }(Bw)
}();
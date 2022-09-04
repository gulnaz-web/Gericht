/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  var e = {
      1807: (e) => {
        var t = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        );
        e.exports = t;
      },
      1296: (e, t, s) => {
        var i = /^\s+|\s+$/g,
          n = /^[-+]0x[0-9a-f]+$/i,
          r = /^0b[01]+$/i,
          o = /^0o[0-7]+$/i,
          a = parseInt,
          l = "object" == typeof s.g && s.g && s.g.Object === Object && s.g,
          c = "object" == typeof self && self && self.Object === Object && self,
          d = l || c || Function("return this")(),
          u = Object.prototype.toString,
          h = Math.max,
          p = Math.min,
          f = function () {
            return d.Date.now();
          };
        function g(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function m(e) {
          if ("number" == typeof e) return e;
          if (
            (function (e) {
              return (
                "symbol" == typeof e ||
                ((function (e) {
                  return !!e && "object" == typeof e;
                })(e) &&
                  "[object Symbol]" == u.call(e))
              );
            })(e)
          )
            return NaN;
          if (g(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = g(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(i, "");
          var s = r.test(e);
          return s || o.test(e)
            ? a(e.slice(2), s ? 2 : 8)
            : n.test(e)
            ? NaN
            : +e;
        }
        e.exports = function (e, t, s) {
          var i,
            n,
            r,
            o,
            a,
            l,
            c = 0,
            d = !1,
            u = !1,
            v = !0;
          if ("function" != typeof e)
            throw new TypeError("Expected a function");
          function y(t) {
            var s = i,
              r = n;
            return (i = n = void 0), (c = t), (o = e.apply(r, s));
          }
          function b(e) {
            return (c = e), (a = setTimeout(x, t)), d ? y(e) : o;
          }
          function w(e) {
            var s = e - l;
            return void 0 === l || s >= t || s < 0 || (u && e - c >= r);
          }
          function x() {
            var e = f();
            if (w(e)) return S(e);
            a = setTimeout(
              x,
              (function (e) {
                var s = t - (e - l);
                return u ? p(s, r - (e - c)) : s;
              })(e)
            );
          }
          function S(e) {
            return (a = void 0), v && i ? y(e) : ((i = n = void 0), o);
          }
          function E() {
            var e = f(),
              s = w(e);
            if (((i = arguments), (n = this), (l = e), s)) {
              if (void 0 === a) return b(l);
              if (u) return (a = setTimeout(x, t)), y(l);
            }
            return void 0 === a && (a = setTimeout(x, t)), o;
          }
          return (
            (t = m(t) || 0),
            g(s) &&
              ((d = !!s.leading),
              (r = (u = "maxWait" in s) ? h(m(s.maxWait) || 0, t) : r),
              (v = "trailing" in s ? !!s.trailing : v)),
            (E.cancel = function () {
              void 0 !== a && clearTimeout(a),
                (c = 0),
                (i = l = n = a = void 0);
            }),
            (E.flush = function () {
              return void 0 === a ? o : S(f());
            }),
            E
          );
        };
      },
      773: (e, t, s) => {
        var i = "__lodash_hash_undefined__",
          n = "[object Function]",
          r = "[object GeneratorFunction]",
          o = /^\[object .+?Constructor\]$/,
          a = "object" == typeof s.g && s.g && s.g.Object === Object && s.g,
          l = "object" == typeof self && self && self.Object === Object && self,
          c = a || l || Function("return this")();
        var d,
          u = Array.prototype,
          h = Function.prototype,
          p = Object.prototype,
          f = c["__core-js_shared__"],
          g = (d = /[^.]+$/.exec((f && f.keys && f.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + d
            : "",
          m = h.toString,
          v = p.hasOwnProperty,
          y = p.toString,
          b = RegExp(
            "^" +
              m
                .call(v)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          w = u.splice,
          x = I(c, "Map"),
          S = I(Object, "create");
        function E(e) {
          var t = -1,
            s = e ? e.length : 0;
          for (this.clear(); ++t < s; ) {
            var i = e[t];
            this.set(i[0], i[1]);
          }
        }
        function C(e) {
          var t = -1,
            s = e ? e.length : 0;
          for (this.clear(); ++t < s; ) {
            var i = e[t];
            this.set(i[0], i[1]);
          }
        }
        function T(e) {
          var t = -1,
            s = e ? e.length : 0;
          for (this.clear(); ++t < s; ) {
            var i = e[t];
            this.set(i[0], i[1]);
          }
        }
        function O(e, t) {
          for (var s, i, n = e.length; n--; )
            if ((s = e[n][0]) === (i = t) || (s != s && i != i)) return n;
          return -1;
        }
        function L(e) {
          if (!_(e) || ((t = e), g && g in t)) return !1;
          var t,
            s =
              (function (e) {
                var t = _(e) ? y.call(e) : "";
                return t == n || t == r;
              })(e) ||
              (function (e) {
                var t = !1;
                if (null != e && "function" != typeof e.toString)
                  try {
                    t = !!(e + "");
                  } catch (e) {}
                return t;
              })(e)
                ? b
                : o;
          return s.test(
            (function (e) {
              if (null != e) {
                try {
                  return m.call(e);
                } catch (e) {}
                try {
                  return e + "";
                } catch (e) {}
              }
              return "";
            })(e)
          );
        }
        function A(e, t) {
          var s,
            i,
            n = e.__data__;
          return (
            "string" == (i = typeof (s = t)) ||
            "number" == i ||
            "symbol" == i ||
            "boolean" == i
              ? "__proto__" !== s
              : null === s
          )
            ? n["string" == typeof t ? "string" : "hash"]
            : n.map;
        }
        function I(e, t) {
          var s = (function (e, t) {
            return null == e ? void 0 : e[t];
          })(e, t);
          return L(s) ? s : void 0;
        }
        function k(e, t) {
          if ("function" != typeof e || (t && "function" != typeof t))
            throw new TypeError("Expected a function");
          var s = function () {
            var i = arguments,
              n = t ? t.apply(this, i) : i[0],
              r = s.cache;
            if (r.has(n)) return r.get(n);
            var o = e.apply(this, i);
            return (s.cache = r.set(n, o)), o;
          };
          return (s.cache = new (k.Cache || T)()), s;
        }
        function _(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        (E.prototype.clear = function () {
          this.__data__ = S ? S(null) : {};
        }),
          (E.prototype.delete = function (e) {
            return this.has(e) && delete this.__data__[e];
          }),
          (E.prototype.get = function (e) {
            var t = this.__data__;
            if (S) {
              var s = t[e];
              return s === i ? void 0 : s;
            }
            return v.call(t, e) ? t[e] : void 0;
          }),
          (E.prototype.has = function (e) {
            var t = this.__data__;
            return S ? void 0 !== t[e] : v.call(t, e);
          }),
          (E.prototype.set = function (e, t) {
            return (this.__data__[e] = S && void 0 === t ? i : t), this;
          }),
          (C.prototype.clear = function () {
            this.__data__ = [];
          }),
          (C.prototype.delete = function (e) {
            var t = this.__data__,
              s = O(t, e);
            return (
              !(s < 0) && (s == t.length - 1 ? t.pop() : w.call(t, s, 1), !0)
            );
          }),
          (C.prototype.get = function (e) {
            var t = this.__data__,
              s = O(t, e);
            return s < 0 ? void 0 : t[s][1];
          }),
          (C.prototype.has = function (e) {
            return O(this.__data__, e) > -1;
          }),
          (C.prototype.set = function (e, t) {
            var s = this.__data__,
              i = O(s, e);
            return i < 0 ? s.push([e, t]) : (s[i][1] = t), this;
          }),
          (T.prototype.clear = function () {
            this.__data__ = {
              hash: new E(),
              map: new (x || C)(),
              string: new E(),
            };
          }),
          (T.prototype.delete = function (e) {
            return A(this, e).delete(e);
          }),
          (T.prototype.get = function (e) {
            return A(this, e).get(e);
          }),
          (T.prototype.has = function (e) {
            return A(this, e).has(e);
          }),
          (T.prototype.set = function (e, t) {
            return A(this, e).set(e, t), this;
          }),
          (k.Cache = T),
          (e.exports = k);
      },
      3096: (e, t, s) => {
        var i = "Expected a function",
          n = /^\s+|\s+$/g,
          r = /^[-+]0x[0-9a-f]+$/i,
          o = /^0b[01]+$/i,
          a = /^0o[0-7]+$/i,
          l = parseInt,
          c = "object" == typeof s.g && s.g && s.g.Object === Object && s.g,
          d = "object" == typeof self && self && self.Object === Object && self,
          u = c || d || Function("return this")(),
          h = Object.prototype.toString,
          p = Math.max,
          f = Math.min,
          g = function () {
            return u.Date.now();
          };
        function m(e, t, s) {
          var n,
            r,
            o,
            a,
            l,
            c,
            d = 0,
            u = !1,
            h = !1,
            m = !0;
          if ("function" != typeof e) throw new TypeError(i);
          function b(t) {
            var s = n,
              i = r;
            return (n = r = void 0), (d = t), (a = e.apply(i, s));
          }
          function w(e) {
            return (d = e), (l = setTimeout(S, t)), u ? b(e) : a;
          }
          function x(e) {
            var s = e - c;
            return void 0 === c || s >= t || s < 0 || (h && e - d >= o);
          }
          function S() {
            var e = g();
            if (x(e)) return E(e);
            l = setTimeout(
              S,
              (function (e) {
                var s = t - (e - c);
                return h ? f(s, o - (e - d)) : s;
              })(e)
            );
          }
          function E(e) {
            return (l = void 0), m && n ? b(e) : ((n = r = void 0), a);
          }
          function C() {
            var e = g(),
              s = x(e);
            if (((n = arguments), (r = this), (c = e), s)) {
              if (void 0 === l) return w(c);
              if (h) return (l = setTimeout(S, t)), b(c);
            }
            return void 0 === l && (l = setTimeout(S, t)), a;
          }
          return (
            (t = y(t) || 0),
            v(s) &&
              ((u = !!s.leading),
              (o = (h = "maxWait" in s) ? p(y(s.maxWait) || 0, t) : o),
              (m = "trailing" in s ? !!s.trailing : m)),
            (C.cancel = function () {
              void 0 !== l && clearTimeout(l),
                (d = 0),
                (n = c = r = l = void 0);
            }),
            (C.flush = function () {
              return void 0 === l ? a : E(g());
            }),
            C
          );
        }
        function v(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function y(e) {
          if ("number" == typeof e) return e;
          if (
            (function (e) {
              return (
                "symbol" == typeof e ||
                ((function (e) {
                  return !!e && "object" == typeof e;
                })(e) &&
                  "[object Symbol]" == h.call(e))
              );
            })(e)
          )
            return NaN;
          if (v(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = v(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(n, "");
          var s = o.test(e);
          return s || a.test(e)
            ? l(e.slice(2), s ? 2 : 8)
            : r.test(e)
            ? NaN
            : +e;
        }
        e.exports = function (e, t, s) {
          var n = !0,
            r = !0;
          if ("function" != typeof e) throw new TypeError(i);
          return (
            v(s) &&
              ((n = "leading" in s ? !!s.leading : n),
              (r = "trailing" in s ? !!s.trailing : r)),
            m(e, t, { leading: n, maxWait: t, trailing: r })
          );
        };
      },
      5055: (e, t, s) => {
        var i = s(6282),
          n = s(180),
          r = TypeError;
        e.exports = function (e) {
          if (i(e)) return e;
          throw r(n(e) + " is not a function");
        };
      },
      2004: (e, t, s) => {
        var i = s(6282),
          n = String,
          r = TypeError;
        e.exports = function (e) {
          if ("object" == typeof e || i(e)) return e;
          throw r("Can't set " + n(e) + " as a prototype");
        };
      },
      9256: (e, t, s) => {
        var i = s(8149),
          n = s(1525),
          r = s(9168).f,
          o = i("unscopables"),
          a = Array.prototype;
        null == a[o] && r(a, o, { configurable: !0, value: n(null) }),
          (e.exports = function (e) {
            a[o][e] = !0;
          });
      },
      3615: (e, t, s) => {
        "use strict";
        var i = s(7321).charAt;
        e.exports = function (e, t, s) {
          return t + (s ? i(e, t).length : 1);
        };
      },
      3046: (e, t, s) => {
        var i = s(1786),
          n = TypeError;
        e.exports = function (e, t) {
          if (i(t, e)) return e;
          throw n("Incorrect invocation");
        };
      },
      1474: (e, t, s) => {
        var i = s(5896),
          n = String,
          r = TypeError;
        e.exports = function (e) {
          if (i(e)) return e;
          throw r(n(e) + " is not an object");
        };
      },
      8774: (e, t, s) => {
        var i = s(6183);
        e.exports = i(function () {
          if ("function" == typeof ArrayBuffer) {
            var e = new ArrayBuffer(8);
            Object.isExtensible(e) &&
              Object.defineProperty(e, "a", { value: 8 });
          }
        });
      },
      1269: (e, t, s) => {
        "use strict";
        var i = s(528).forEach,
          n = s(1923)("forEach");
        e.exports = n
          ? [].forEach
          : function (e) {
              return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
            };
      },
      5675: (e, t, s) => {
        var i = s(3206),
          n = s(9623),
          r = s(1829),
          o = function (e) {
            return function (t, s, o) {
              var a,
                l = i(t),
                c = r(l),
                d = n(o, c);
              if (e && s != s) {
                for (; c > d; ) if ((a = l[d++]) != a) return !0;
              } else
                for (; c > d; d++)
                  if ((e || d in l) && l[d] === s) return e || d || 0;
              return !e && -1;
            };
          };
        e.exports = { includes: o(!0), indexOf: o(!1) };
      },
      528: (e, t, s) => {
        var i = s(1098),
          n = s(1768),
          r = s(7530),
          o = s(9473),
          a = s(1829),
          l = s(2768),
          c = n([].push),
          d = function (e) {
            var t = 1 == e,
              s = 2 == e,
              n = 3 == e,
              d = 4 == e,
              u = 6 == e,
              h = 7 == e,
              p = 5 == e || u;
            return function (f, g, m, v) {
              for (
                var y,
                  b,
                  w = o(f),
                  x = r(w),
                  S = i(g, m),
                  E = a(x),
                  C = 0,
                  T = v || l,
                  O = t ? T(f, E) : s || h ? T(f, 0) : void 0;
                E > C;
                C++
              )
                if ((p || C in x) && ((b = S((y = x[C]), C, w)), e))
                  if (t) O[C] = b;
                  else if (b)
                    switch (e) {
                      case 3:
                        return !0;
                      case 5:
                        return y;
                      case 6:
                        return C;
                      case 2:
                        c(O, y);
                    }
                  else
                    switch (e) {
                      case 4:
                        return !1;
                      case 7:
                        c(O, y);
                    }
              return u ? -1 : n || d ? d : O;
            };
          };
        e.exports = {
          forEach: d(0),
          map: d(1),
          filter: d(2),
          some: d(3),
          every: d(4),
          find: d(5),
          findIndex: d(6),
          filterReject: d(7),
        };
      },
      4820: (e, t, s) => {
        var i = s(6183),
          n = s(8149),
          r = s(4324),
          o = n("species");
        e.exports = function (e) {
          return (
            r >= 51 ||
            !i(function () {
              var t = [];
              return (
                ((t.constructor = {})[o] = function () {
                  return { foo: 1 };
                }),
                1 !== t[e](Boolean).foo
              );
            })
          );
        };
      },
      1923: (e, t, s) => {
        "use strict";
        var i = s(6183);
        e.exports = function (e, t) {
          var s = [][e];
          return (
            !!s &&
            i(function () {
              s.call(
                null,
                t ||
                  function () {
                    return 1;
                  },
                1
              );
            })
          );
        };
      },
      6589: (e, t, s) => {
        var i = s(5055),
          n = s(9473),
          r = s(7530),
          o = s(1829),
          a = TypeError,
          l = function (e) {
            return function (t, s, l, c) {
              i(s);
              var d = n(t),
                u = r(d),
                h = o(d),
                p = e ? h - 1 : 0,
                f = e ? -1 : 1;
              if (l < 2)
                for (;;) {
                  if (p in u) {
                    (c = u[p]), (p += f);
                    break;
                  }
                  if (((p += f), e ? p < 0 : h <= p))
                    throw a("Reduce of empty array with no initial value");
                }
              for (; e ? p >= 0 : h > p; p += f)
                p in u && (c = s(c, u[p], p, d));
              return c;
            };
          };
        e.exports = { left: l(!1), right: l(!0) };
      },
      4072: (e, t, s) => {
        var i = s(9623),
          n = s(1829),
          r = s(2759),
          o = Array,
          a = Math.max;
        e.exports = function (e, t, s) {
          for (
            var l = n(e),
              c = i(t, l),
              d = i(void 0 === s ? l : s, l),
              u = o(a(d - c, 0)),
              h = 0;
            c < d;
            c++, h++
          )
            r(u, h, e[c]);
          return (u.length = h), u;
        };
      },
      9882: (e, t, s) => {
        var i = s(7931),
          n = s(2240),
          r = s(5896),
          o = s(8149)("species"),
          a = Array;
        e.exports = function (e) {
          var t;
          return (
            i(e) &&
              ((t = e.constructor),
              ((n(t) && (t === a || i(t.prototype))) ||
                (r(t) && null === (t = t[o]))) &&
                (t = void 0)),
            void 0 === t ? a : t
          );
        };
      },
      2768: (e, t, s) => {
        var i = s(9882);
        e.exports = function (e, t) {
          return new (i(e))(0 === t ? 0 : t);
        };
      },
      1751: (e, t, s) => {
        var i = s(8149)("iterator"),
          n = !1;
        try {
          var r = 0,
            o = {
              next: function () {
                return { done: !!r++ };
              },
              return: function () {
                n = !0;
              },
            };
          (o[i] = function () {
            return this;
          }),
            Array.from(o, function () {
              throw 2;
            });
        } catch (e) {}
        e.exports = function (e, t) {
          if (!t && !n) return !1;
          var s = !1;
          try {
            var r = {};
            (r[i] = function () {
              return {
                next: function () {
                  return { done: (s = !0) };
                },
              };
            }),
              e(r);
          } catch (e) {}
          return s;
        };
      },
      1510: (e, t, s) => {
        var i = s(1768),
          n = i({}.toString),
          r = i("".slice);
        e.exports = function (e) {
          return r(n(e), 8, -1);
        };
      },
      9225: (e, t, s) => {
        var i = s(4823),
          n = s(6282),
          r = s(1510),
          o = s(8149)("toStringTag"),
          a = Object,
          l =
            "Arguments" ==
            r(
              (function () {
                return arguments;
              })()
            );
        e.exports = i
          ? r
          : function (e) {
              var t, s, i;
              return void 0 === e
                ? "Undefined"
                : null === e
                ? "Null"
                : "string" ==
                  typeof (s = (function (e, t) {
                    try {
                      return e[t];
                    } catch (e) {}
                  })((t = a(e)), o))
                ? s
                : l
                ? r(t)
                : "Object" == (i = r(t)) && n(t.callee)
                ? "Arguments"
                : i;
            };
      },
      7790: (e, t, s) => {
        "use strict";
        var i = s(1768),
          n = s(6367),
          r = s(6582).getWeakData,
          o = s(1474),
          a = s(5896),
          l = s(3046),
          c = s(1518),
          d = s(528),
          u = s(8281),
          h = s(1030),
          p = h.set,
          f = h.getterFor,
          g = d.find,
          m = d.findIndex,
          v = i([].splice),
          y = 0,
          b = function (e) {
            return e.frozen || (e.frozen = new w());
          },
          w = function () {
            this.entries = [];
          },
          x = function (e, t) {
            return g(e.entries, function (e) {
              return e[0] === t;
            });
          };
        (w.prototype = {
          get: function (e) {
            var t = x(this, e);
            if (t) return t[1];
          },
          has: function (e) {
            return !!x(this, e);
          },
          set: function (e, t) {
            var s = x(this, e);
            s ? (s[1] = t) : this.entries.push([e, t]);
          },
          delete: function (e) {
            var t = m(this.entries, function (t) {
              return t[0] === e;
            });
            return ~t && v(this.entries, t, 1), !!~t;
          },
        }),
          (e.exports = {
            getConstructor: function (e, t, s, i) {
              var d = e(function (e, n) {
                  l(e, h),
                    p(e, { type: t, id: y++, frozen: void 0 }),
                    null != n && c(n, e[i], { that: e, AS_ENTRIES: s });
                }),
                h = d.prototype,
                g = f(t),
                m = function (e, t, s) {
                  var i = g(e),
                    n = r(o(t), !0);
                  return !0 === n ? b(i).set(t, s) : (n[i.id] = s), e;
                };
              return (
                n(h, {
                  delete: function (e) {
                    var t = g(this);
                    if (!a(e)) return !1;
                    var s = r(e);
                    return !0 === s
                      ? b(t).delete(e)
                      : s && u(s, t.id) && delete s[t.id];
                  },
                  has: function (e) {
                    var t = g(this);
                    if (!a(e)) return !1;
                    var s = r(e);
                    return !0 === s ? b(t).has(e) : s && u(s, t.id);
                  },
                }),
                n(
                  h,
                  s
                    ? {
                        get: function (e) {
                          var t = g(this);
                          if (a(e)) {
                            var s = r(e);
                            return !0 === s
                              ? b(t).get(e)
                              : s
                              ? s[t.id]
                              : void 0;
                          }
                        },
                        set: function (e, t) {
                          return m(this, e, t);
                        },
                      }
                    : {
                        add: function (e) {
                          return m(this, e, !0);
                        },
                      }
                ),
                d
              );
            },
          });
      },
      6645: (e, t, s) => {
        "use strict";
        var i = s(4761),
          n = s(8454),
          r = s(1768),
          o = s(1949),
          a = s(2054),
          l = s(6582),
          c = s(1518),
          d = s(3046),
          u = s(6282),
          h = s(5896),
          p = s(6183),
          f = s(1751),
          g = s(820),
          m = s(7770);
        e.exports = function (e, t, s) {
          var v = -1 !== e.indexOf("Map"),
            y = -1 !== e.indexOf("Weak"),
            b = v ? "set" : "add",
            w = n[e],
            x = w && w.prototype,
            S = w,
            E = {},
            C = function (e) {
              var t = r(x[e]);
              a(
                x,
                e,
                "add" == e
                  ? function (e) {
                      return t(this, 0 === e ? 0 : e), this;
                    }
                  : "delete" == e
                  ? function (e) {
                      return !(y && !h(e)) && t(this, 0 === e ? 0 : e);
                    }
                  : "get" == e
                  ? function (e) {
                      return y && !h(e) ? void 0 : t(this, 0 === e ? 0 : e);
                    }
                  : "has" == e
                  ? function (e) {
                      return !(y && !h(e)) && t(this, 0 === e ? 0 : e);
                    }
                  : function (e, s) {
                      return t(this, 0 === e ? 0 : e, s), this;
                    }
              );
            };
          if (
            o(
              e,
              !u(w) ||
                !(
                  y ||
                  (x.forEach &&
                    !p(function () {
                      new w().entries().next();
                    }))
                )
            )
          )
            (S = s.getConstructor(t, e, v, b)), l.enable();
          else if (o(e, !0)) {
            var T = new S(),
              O = T[b](y ? {} : -0, 1) != T,
              L = p(function () {
                T.has(1);
              }),
              A = f(function (e) {
                new w(e);
              }),
              I =
                !y &&
                p(function () {
                  for (var e = new w(), t = 5; t--; ) e[b](t, t);
                  return !e.has(-0);
                });
            A ||
              (((S = t(function (e, t) {
                d(e, x);
                var s = m(new w(), e, S);
                return null != t && c(t, s[b], { that: s, AS_ENTRIES: v }), s;
              })).prototype = x),
              (x.constructor = S)),
              (L || I) && (C("delete"), C("has"), v && C("get")),
              (I || O) && C(b),
              y && x.clear && delete x.clear;
          }
          return (
            (E[e] = S),
            i({ global: !0, constructor: !0, forced: S != w }, E),
            g(S, e),
            y || s.setStrong(S, e, v),
            S
          );
        };
      },
      882: (e, t, s) => {
        var i = s(8281),
          n = s(1441),
          r = s(5663),
          o = s(9168);
        e.exports = function (e, t, s) {
          for (var a = n(t), l = o.f, c = r.f, d = 0; d < a.length; d++) {
            var u = a[d];
            i(e, u) || (s && i(s, u)) || l(e, u, c(t, u));
          }
        };
      },
      7401: (e, t, s) => {
        var i = s(6183);
        e.exports = !i(function () {
          function e() {}
          return (
            (e.prototype.constructor = null),
            Object.getPrototypeOf(new e()) !== e.prototype
          );
        });
      },
      2538: (e, t, s) => {
        "use strict";
        var i = s(6524).IteratorPrototype,
          n = s(1525),
          r = s(9273),
          o = s(820),
          a = s(6126),
          l = function () {
            return this;
          };
        e.exports = function (e, t, s, c) {
          var d = t + " Iterator";
          return (
            (e.prototype = n(i, { next: r(+!c, s) })),
            o(e, d, !1, !0),
            (a[d] = l),
            e
          );
        };
      },
      1501: (e, t, s) => {
        var i = s(723),
          n = s(9168),
          r = s(9273);
        e.exports = i
          ? function (e, t, s) {
              return n.f(e, t, r(1, s));
            }
          : function (e, t, s) {
              return (e[t] = s), e;
            };
      },
      9273: (e) => {
        e.exports = function (e, t) {
          return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t,
          };
        };
      },
      2759: (e, t, s) => {
        "use strict";
        var i = s(2988),
          n = s(9168),
          r = s(9273);
        e.exports = function (e, t, s) {
          var o = i(t);
          o in e ? n.f(e, o, r(0, s)) : (e[o] = s);
        };
      },
      2054: (e, t, s) => {
        var i = s(6282),
          n = s(9168),
          r = s(5903),
          o = s(7194);
        e.exports = function (e, t, s, a) {
          a || (a = {});
          var l = a.enumerable,
            c = void 0 !== a.name ? a.name : t;
          if ((i(s) && r(s, c, a), a.global)) l ? (e[t] = s) : o(t, s);
          else {
            try {
              a.unsafe ? e[t] && (l = !0) : delete e[t];
            } catch (e) {}
            l
              ? (e[t] = s)
              : n.f(e, t, {
                  value: s,
                  enumerable: !1,
                  configurable: !a.nonConfigurable,
                  writable: !a.nonWritable,
                });
          }
          return e;
        };
      },
      6367: (e, t, s) => {
        var i = s(2054);
        e.exports = function (e, t, s) {
          for (var n in t) i(e, n, t[n], s);
          return e;
        };
      },
      7194: (e, t, s) => {
        var i = s(8454),
          n = Object.defineProperty;
        e.exports = function (e, t) {
          try {
            n(i, e, { value: t, configurable: !0, writable: !0 });
          } catch (s) {
            i[e] = t;
          }
          return t;
        };
      },
      7583: (e, t, s) => {
        "use strict";
        var i = s(4761),
          n = s(4552),
          r = s(8977),
          o = s(4530),
          a = s(6282),
          l = s(2538),
          c = s(4204),
          d = s(5900),
          u = s(820),
          h = s(1501),
          p = s(2054),
          f = s(8149),
          g = s(6126),
          m = s(6524),
          v = o.PROPER,
          y = o.CONFIGURABLE,
          b = m.IteratorPrototype,
          w = m.BUGGY_SAFARI_ITERATORS,
          x = f("iterator"),
          S = "keys",
          E = "values",
          C = "entries",
          T = function () {
            return this;
          };
        e.exports = function (e, t, s, o, f, m, O) {
          l(s, t, o);
          var L,
            A,
            I,
            k = function (e) {
              if (e === f && z) return z;
              if (!w && e in P) return P[e];
              switch (e) {
                case S:
                case E:
                case C:
                  return function () {
                    return new s(this, e);
                  };
              }
              return function () {
                return new s(this);
              };
            },
            _ = t + " Iterator",
            M = !1,
            P = e.prototype,
            $ = P[x] || P["@@iterator"] || (f && P[f]),
            z = (!w && $) || k(f),
            D = ("Array" == t && P.entries) || $;
          if (
            (D &&
              (L = c(D.call(new e()))) !== Object.prototype &&
              L.next &&
              (r || c(L) === b || (d ? d(L, b) : a(L[x]) || p(L, x, T)),
              u(L, _, !0, !0),
              r && (g[_] = T)),
            v &&
              f == E &&
              $ &&
              $.name !== E &&
              (!r && y
                ? h(P, "name", E)
                : ((M = !0),
                  (z = function () {
                    return n($, this);
                  }))),
            f)
          )
            if (((A = { values: k(E), keys: m ? z : k(S), entries: k(C) }), O))
              for (I in A) (w || M || !(I in P)) && p(P, I, A[I]);
            else i({ target: t, proto: !0, forced: w || M }, A);
          return (
            (r && !O) || P[x] === z || p(P, x, z, { name: f }), (g[t] = z), A
          );
        };
      },
      723: (e, t, s) => {
        var i = s(6183);
        e.exports = !i(function () {
          return (
            7 !=
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              },
            })[1]
          );
        });
      },
      7282: (e, t, s) => {
        var i = s(8454),
          n = s(5896),
          r = i.document,
          o = n(r) && n(r.createElement);
        e.exports = function (e) {
          return o ? r.createElement(e) : {};
        };
      },
      6181: (e) => {
        e.exports = {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0,
        };
      },
      2387: (e, t, s) => {
        var i = s(7282)("span").classList,
          n = i && i.constructor && i.constructor.prototype;
        e.exports = n === Object.prototype ? void 0 : n;
      },
      7594: (e, t, s) => {
        var i = s(1510),
          n = s(8454);
        e.exports = "process" == i(n.process);
      },
      2543: (e, t, s) => {
        var i = s(4991);
        e.exports = i("navigator", "userAgent") || "";
      },
      4324: (e, t, s) => {
        var i,
          n,
          r = s(8454),
          o = s(2543),
          a = r.process,
          l = r.Deno,
          c = (a && a.versions) || (l && l.version),
          d = c && c.v8;
        d && (n = (i = d.split("."))[0] > 0 && i[0] < 4 ? 1 : +(i[0] + i[1])),
          !n &&
            o &&
            (!(i = o.match(/Edge\/(\d+)/)) || i[1] >= 74) &&
            (i = o.match(/Chrome\/(\d+)/)) &&
            (n = +i[1]),
          (e.exports = n);
      },
      8409: (e) => {
        e.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf",
        ];
      },
      4761: (e, t, s) => {
        var i = s(8454),
          n = s(5663).f,
          r = s(1501),
          o = s(2054),
          a = s(7194),
          l = s(882),
          c = s(1949);
        e.exports = function (e, t) {
          var s,
            d,
            u,
            h,
            p,
            f = e.target,
            g = e.global,
            m = e.stat;
          if ((s = g ? i : m ? i[f] || a(f, {}) : (i[f] || {}).prototype))
            for (d in t) {
              if (
                ((h = t[d]),
                (u = e.dontCallGetSet ? (p = n(s, d)) && p.value : s[d]),
                !c(g ? d : f + (m ? "." : "#") + d, e.forced) && void 0 !== u)
              ) {
                if (typeof h == typeof u) continue;
                l(h, u);
              }
              (e.sham || (u && u.sham)) && r(h, "sham", !0), o(s, d, h, e);
            }
        };
      },
      6183: (e) => {
        e.exports = function (e) {
          try {
            return !!e();
          } catch (e) {
            return !0;
          }
        };
      },
      9696: (e, t, s) => {
        "use strict";
        s(9989);
        var i = s(1768),
          n = s(2054),
          r = s(5510),
          o = s(6183),
          a = s(8149),
          l = s(1501),
          c = a("species"),
          d = RegExp.prototype;
        e.exports = function (e, t, s, u) {
          var h = a(e),
            p = !o(function () {
              var t = {};
              return (
                (t[h] = function () {
                  return 7;
                }),
                7 != ""[e](t)
              );
            }),
            f =
              p &&
              !o(function () {
                var t = !1,
                  s = /a/;
                return (
                  "split" === e &&
                    (((s = {}).constructor = {}),
                    (s.constructor[c] = function () {
                      return s;
                    }),
                    (s.flags = ""),
                    (s[h] = /./[h])),
                  (s.exec = function () {
                    return (t = !0), null;
                  }),
                  s[h](""),
                  !t
                );
              });
          if (!p || !f || s) {
            var g = i(/./[h]),
              m = t(h, ""[e], function (e, t, s, n, o) {
                var a = i(e),
                  l = t.exec;
                return l === r || l === d.exec
                  ? p && !o
                    ? { done: !0, value: g(t, s, n) }
                    : { done: !0, value: a(s, t, n) }
                  : { done: !1 };
              });
            n(String.prototype, e, m[0]), n(d, h, m[1]);
          }
          u && l(d[h], "sham", !0);
        };
      },
      3116: (e, t, s) => {
        var i = s(6183);
        e.exports = !i(function () {
          return Object.isExtensible(Object.preventExtensions({}));
        });
      },
      6218: (e, t, s) => {
        var i = s(160),
          n = Function.prototype,
          r = n.apply,
          o = n.call;
        e.exports =
          ("object" == typeof Reflect && Reflect.apply) ||
          (i
            ? o.bind(r)
            : function () {
                return o.apply(r, arguments);
              });
      },
      1098: (e, t, s) => {
        var i = s(1768),
          n = s(5055),
          r = s(160),
          o = i(i.bind);
        e.exports = function (e, t) {
          return (
            n(e),
            void 0 === t
              ? e
              : r
              ? o(e, t)
              : function () {
                  return e.apply(t, arguments);
                }
          );
        };
      },
      160: (e, t, s) => {
        var i = s(6183);
        e.exports = !i(function () {
          var e = function () {}.bind();
          return "function" != typeof e || e.hasOwnProperty("prototype");
        });
      },
      4552: (e, t, s) => {
        var i = s(160),
          n = Function.prototype.call;
        e.exports = i
          ? n.bind(n)
          : function () {
              return n.apply(n, arguments);
            };
      },
      4530: (e, t, s) => {
        var i = s(723),
          n = s(8281),
          r = Function.prototype,
          o = i && Object.getOwnPropertyDescriptor,
          a = n(r, "name"),
          l = a && "something" === function () {}.name,
          c = a && (!i || (i && o(r, "name").configurable));
        e.exports = { EXISTS: a, PROPER: l, CONFIGURABLE: c };
      },
      1768: (e, t, s) => {
        var i = s(160),
          n = Function.prototype,
          r = n.bind,
          o = n.call,
          a = i && r.bind(o, o);
        e.exports = i
          ? function (e) {
              return e && a(e);
            }
          : function (e) {
              return (
                e &&
                function () {
                  return o.apply(e, arguments);
                }
              );
            };
      },
      4991: (e, t, s) => {
        var i = s(8454),
          n = s(6282),
          r = function (e) {
            return n(e) ? e : void 0;
          };
        e.exports = function (e, t) {
          return arguments.length < 2 ? r(i[e]) : i[e] && i[e][t];
        };
      },
      650: (e, t, s) => {
        var i = s(9225),
          n = s(9827),
          r = s(6126),
          o = s(8149)("iterator");
        e.exports = function (e) {
          if (null != e) return n(e, o) || n(e, "@@iterator") || r[i(e)];
        };
      },
      7755: (e, t, s) => {
        var i = s(4552),
          n = s(5055),
          r = s(1474),
          o = s(180),
          a = s(650),
          l = TypeError;
        e.exports = function (e, t) {
          var s = arguments.length < 2 ? a(e) : t;
          if (n(s)) return r(i(s, e));
          throw l(o(e) + " is not iterable");
        };
      },
      9827: (e, t, s) => {
        var i = s(5055);
        e.exports = function (e, t) {
          var s = e[t];
          return null == s ? void 0 : i(s);
        };
      },
      4742: (e, t, s) => {
        var i = s(1768),
          n = s(9473),
          r = Math.floor,
          o = i("".charAt),
          a = i("".replace),
          l = i("".slice),
          c = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
          d = /\$([$&'`]|\d{1,2})/g;
        e.exports = function (e, t, s, i, u, h) {
          var p = s + e.length,
            f = i.length,
            g = d;
          return (
            void 0 !== u && ((u = n(u)), (g = c)),
            a(h, g, function (n, a) {
              var c;
              switch (o(a, 0)) {
                case "$":
                  return "$";
                case "&":
                  return e;
                case "`":
                  return l(t, 0, s);
                case "'":
                  return l(t, p);
                case "<":
                  c = u[l(a, 1, -1)];
                  break;
                default:
                  var d = +a;
                  if (0 === d) return n;
                  if (d > f) {
                    var h = r(d / 10);
                    return 0 === h
                      ? n
                      : h <= f
                      ? void 0 === i[h - 1]
                        ? o(a, 1)
                        : i[h - 1] + o(a, 1)
                      : n;
                  }
                  c = i[d - 1];
              }
              return void 0 === c ? "" : c;
            })
          );
        };
      },
      8454: (e, t, s) => {
        var i = function (e) {
          return e && e.Math == Math && e;
        };
        e.exports =
          i("object" == typeof globalThis && globalThis) ||
          i("object" == typeof window && window) ||
          i("object" == typeof self && self) ||
          i("object" == typeof s.g && s.g) ||
          (function () {
            return this;
          })() ||
          Function("return this")();
      },
      8281: (e, t, s) => {
        var i = s(1768),
          n = s(9473),
          r = i({}.hasOwnProperty);
        e.exports =
          Object.hasOwn ||
          function (e, t) {
            return r(n(e), t);
          };
      },
      4377: (e) => {
        e.exports = {};
      },
      7461: (e, t, s) => {
        var i = s(4991);
        e.exports = i("document", "documentElement");
      },
      4985: (e, t, s) => {
        var i = s(723),
          n = s(6183),
          r = s(7282);
        e.exports =
          !i &&
          !n(function () {
            return (
              7 !=
              Object.defineProperty(r("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
      },
      7530: (e, t, s) => {
        var i = s(1768),
          n = s(6183),
          r = s(1510),
          o = Object,
          a = i("".split);
        e.exports = n(function () {
          return !o("z").propertyIsEnumerable(0);
        })
          ? function (e) {
              return "String" == r(e) ? a(e, "") : o(e);
            }
          : o;
      },
      7770: (e, t, s) => {
        var i = s(6282),
          n = s(5896),
          r = s(5900);
        e.exports = function (e, t, s) {
          var o, a;
          return (
            r &&
              i((o = t.constructor)) &&
              o !== s &&
              n((a = o.prototype)) &&
              a !== s.prototype &&
              r(e, a),
            e
          );
        };
      },
      6901: (e, t, s) => {
        var i = s(1768),
          n = s(6282),
          r = s(2047),
          o = i(Function.toString);
        n(r.inspectSource) ||
          (r.inspectSource = function (e) {
            return o(e);
          }),
          (e.exports = r.inspectSource);
      },
      6582: (e, t, s) => {
        var i = s(4761),
          n = s(1768),
          r = s(4377),
          o = s(5896),
          a = s(8281),
          l = s(9168).f,
          c = s(6785),
          d = s(6675),
          u = s(6662),
          h = s(9059),
          p = s(3116),
          f = !1,
          g = h("meta"),
          m = 0,
          v = function (e) {
            l(e, g, { value: { objectID: "O" + m++, weakData: {} } });
          },
          y = (e.exports = {
            enable: function () {
              (y.enable = function () {}), (f = !0);
              var e = c.f,
                t = n([].splice),
                s = {};
              (s[g] = 1),
                e(s).length &&
                  ((c.f = function (s) {
                    for (var i = e(s), n = 0, r = i.length; n < r; n++)
                      if (i[n] === g) {
                        t(i, n, 1);
                        break;
                      }
                    return i;
                  }),
                  i(
                    { target: "Object", stat: !0, forced: !0 },
                    { getOwnPropertyNames: d.f }
                  ));
            },
            fastKey: function (e, t) {
              if (!o(e))
                return "symbol" == typeof e
                  ? e
                  : ("string" == typeof e ? "S" : "P") + e;
              if (!a(e, g)) {
                if (!u(e)) return "F";
                if (!t) return "E";
                v(e);
              }
              return e[g].objectID;
            },
            getWeakData: function (e, t) {
              if (!a(e, g)) {
                if (!u(e)) return !0;
                if (!t) return !1;
                v(e);
              }
              return e[g].weakData;
            },
            onFreeze: function (e) {
              return p && f && u(e) && !a(e, g) && v(e), e;
            },
          });
        r[g] = !0;
      },
      1030: (e, t, s) => {
        var i,
          n,
          r,
          o = s(4404),
          a = s(8454),
          l = s(1768),
          c = s(5896),
          d = s(1501),
          u = s(8281),
          h = s(2047),
          p = s(8873),
          f = s(4377),
          g = "Object already initialized",
          m = a.TypeError,
          v = a.WeakMap;
        if (o || h.state) {
          var y = h.state || (h.state = new v()),
            b = l(y.get),
            w = l(y.has),
            x = l(y.set);
          (i = function (e, t) {
            if (w(y, e)) throw new m(g);
            return (t.facade = e), x(y, e, t), t;
          }),
            (n = function (e) {
              return b(y, e) || {};
            }),
            (r = function (e) {
              return w(y, e);
            });
        } else {
          var S = p("state");
          (f[S] = !0),
            (i = function (e, t) {
              if (u(e, S)) throw new m(g);
              return (t.facade = e), d(e, S, t), t;
            }),
            (n = function (e) {
              return u(e, S) ? e[S] : {};
            }),
            (r = function (e) {
              return u(e, S);
            });
        }
        e.exports = {
          set: i,
          get: n,
          has: r,
          enforce: function (e) {
            return r(e) ? n(e) : i(e, {});
          },
          getterFor: function (e) {
            return function (t) {
              var s;
              if (!c(t) || (s = n(t)).type !== e)
                throw m("Incompatible receiver, " + e + " required");
              return s;
            };
          },
        };
      },
      5859: (e, t, s) => {
        var i = s(8149),
          n = s(6126),
          r = i("iterator"),
          o = Array.prototype;
        e.exports = function (e) {
          return void 0 !== e && (n.Array === e || o[r] === e);
        };
      },
      7931: (e, t, s) => {
        var i = s(1510);
        e.exports =
          Array.isArray ||
          function (e) {
            return "Array" == i(e);
          };
      },
      6282: (e) => {
        e.exports = function (e) {
          return "function" == typeof e;
        };
      },
      2240: (e, t, s) => {
        var i = s(1768),
          n = s(6183),
          r = s(6282),
          o = s(9225),
          a = s(4991),
          l = s(6901),
          c = function () {},
          d = [],
          u = a("Reflect", "construct"),
          h = /^\s*(?:class|function)\b/,
          p = i(h.exec),
          f = !h.exec(c),
          g = function (e) {
            if (!r(e)) return !1;
            try {
              return u(c, d, e), !0;
            } catch (e) {
              return !1;
            }
          },
          m = function (e) {
            if (!r(e)) return !1;
            switch (o(e)) {
              case "AsyncFunction":
              case "GeneratorFunction":
              case "AsyncGeneratorFunction":
                return !1;
            }
            try {
              return f || !!p(h, l(e));
            } catch (e) {
              return !0;
            }
          };
        (m.sham = !0),
          (e.exports =
            !u ||
            n(function () {
              var e;
              return (
                g(g.call) ||
                !g(Object) ||
                !g(function () {
                  e = !0;
                }) ||
                e
              );
            })
              ? m
              : g);
      },
      1949: (e, t, s) => {
        var i = s(6183),
          n = s(6282),
          r = /#|\.prototype\./,
          o = function (e, t) {
            var s = l[a(e)];
            return s == d || (s != c && (n(t) ? i(t) : !!t));
          },
          a = (o.normalize = function (e) {
            return String(e).replace(r, ".").toLowerCase();
          }),
          l = (o.data = {}),
          c = (o.NATIVE = "N"),
          d = (o.POLYFILL = "P");
        e.exports = o;
      },
      5896: (e, t, s) => {
        var i = s(6282);
        e.exports = function (e) {
          return "object" == typeof e ? null !== e : i(e);
        };
      },
      8977: (e) => {
        e.exports = !1;
      },
      1527: (e, t, s) => {
        var i = s(4991),
          n = s(6282),
          r = s(1786),
          o = s(4746),
          a = Object;
        e.exports = o
          ? function (e) {
              return "symbol" == typeof e;
            }
          : function (e) {
              var t = i("Symbol");
              return n(t) && r(t.prototype, a(e));
            };
      },
      1518: (e, t, s) => {
        var i = s(1098),
          n = s(4552),
          r = s(1474),
          o = s(180),
          a = s(5859),
          l = s(1829),
          c = s(1786),
          d = s(7755),
          u = s(650),
          h = s(9193),
          p = TypeError,
          f = function (e, t) {
            (this.stopped = e), (this.result = t);
          },
          g = f.prototype;
        e.exports = function (e, t, s) {
          var m,
            v,
            y,
            b,
            w,
            x,
            S,
            E = s && s.that,
            C = !(!s || !s.AS_ENTRIES),
            T = !(!s || !s.IS_ITERATOR),
            O = !(!s || !s.INTERRUPTED),
            L = i(t, E),
            A = function (e) {
              return m && h(m, "normal", e), new f(!0, e);
            },
            I = function (e) {
              return C
                ? (r(e), O ? L(e[0], e[1], A) : L(e[0], e[1]))
                : O
                ? L(e, A)
                : L(e);
            };
          if (T) m = e;
          else {
            if (!(v = u(e))) throw p(o(e) + " is not iterable");
            if (a(v)) {
              for (y = 0, b = l(e); b > y; y++)
                if ((w = I(e[y])) && c(g, w)) return w;
              return new f(!1);
            }
            m = d(e, v);
          }
          for (x = m.next; !(S = n(x, m)).done; ) {
            try {
              w = I(S.value);
            } catch (e) {
              h(m, "throw", e);
            }
            if ("object" == typeof w && w && c(g, w)) return w;
          }
          return new f(!1);
        };
      },
      9193: (e, t, s) => {
        var i = s(4552),
          n = s(1474),
          r = s(9827);
        e.exports = function (e, t, s) {
          var o, a;
          n(e);
          try {
            if (!(o = r(e, "return"))) {
              if ("throw" === t) throw s;
              return s;
            }
            o = i(o, e);
          } catch (e) {
            (a = !0), (o = e);
          }
          if ("throw" === t) throw s;
          if (a) throw o;
          return n(o), s;
        };
      },
      6524: (e, t, s) => {
        "use strict";
        var i,
          n,
          r,
          o = s(6183),
          a = s(6282),
          l = s(1525),
          c = s(4204),
          d = s(2054),
          u = s(8149),
          h = s(8977),
          p = u("iterator"),
          f = !1;
        [].keys &&
          ("next" in (r = [].keys())
            ? (n = c(c(r))) !== Object.prototype && (i = n)
            : (f = !0)),
          null == i ||
          o(function () {
            var e = {};
            return i[p].call(e) !== e;
          })
            ? (i = {})
            : h && (i = l(i)),
          a(i[p]) ||
            d(i, p, function () {
              return this;
            }),
          (e.exports = { IteratorPrototype: i, BUGGY_SAFARI_ITERATORS: f });
      },
      6126: (e) => {
        e.exports = {};
      },
      1829: (e, t, s) => {
        var i = s(3917);
        e.exports = function (e) {
          return i(e.length);
        };
      },
      5903: (e, t, s) => {
        var i = s(6183),
          n = s(6282),
          r = s(8281),
          o = s(723),
          a = s(4530).CONFIGURABLE,
          l = s(6901),
          c = s(1030),
          d = c.enforce,
          u = c.get,
          h = Object.defineProperty,
          p =
            o &&
            !i(function () {
              return 8 !== h(function () {}, "length", { value: 8 }).length;
            }),
          f = String(String).split("String"),
          g = (e.exports = function (e, t, s) {
            "Symbol(" === String(t).slice(0, 7) &&
              (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
              s && s.getter && (t = "get " + t),
              s && s.setter && (t = "set " + t),
              (!r(e, "name") || (a && e.name !== t)) &&
                (o
                  ? h(e, "name", { value: t, configurable: !0 })
                  : (e.name = t)),
              p &&
                s &&
                r(s, "arity") &&
                e.length !== s.arity &&
                h(e, "length", { value: s.arity });
            try {
              s && r(s, "constructor") && s.constructor
                ? o && h(e, "prototype", { writable: !1 })
                : e.prototype && (e.prototype = void 0);
            } catch (e) {}
            var i = d(e);
            return (
              r(i, "source") ||
                (i.source = f.join("string" == typeof t ? t : "")),
              e
            );
          });
        Function.prototype.toString = g(function () {
          return (n(this) && u(this).source) || l(this);
        }, "toString");
      },
      1021: (e) => {
        var t = Math.ceil,
          s = Math.floor;
        e.exports =
          Math.trunc ||
          function (e) {
            var i = +e;
            return (i > 0 ? s : t)(i);
          };
      },
      323: (e, t, s) => {
        var i = s(4324),
          n = s(6183);
        e.exports =
          !!Object.getOwnPropertySymbols &&
          !n(function () {
            var e = Symbol();
            return (
              !String(e) ||
              !(Object(e) instanceof Symbol) ||
              (!Symbol.sham && i && i < 41)
            );
          });
      },
      4404: (e, t, s) => {
        var i = s(8454),
          n = s(6282),
          r = s(6901),
          o = i.WeakMap;
        e.exports = n(o) && /native code/.test(r(o));
      },
      8513: (e, t, s) => {
        var i = s(8454),
          n = s(6183),
          r = s(1768),
          o = s(7655),
          a = s(9749).trim,
          l = s(8342),
          c = i.parseInt,
          d = i.Symbol,
          u = d && d.iterator,
          h = /^[+-]?0x/i,
          p = r(h.exec),
          f =
            8 !== c(l + "08") ||
            22 !== c(l + "0x16") ||
            (u &&
              !n(function () {
                c(Object(u));
              }));
        e.exports = f
          ? function (e, t) {
              var s = a(o(e));
              return c(s, t >>> 0 || (p(h, s) ? 16 : 10));
            }
          : c;
      },
      4727: (e, t, s) => {
        "use strict";
        var i = s(723),
          n = s(1768),
          r = s(4552),
          o = s(6183),
          a = s(1340),
          l = s(8074),
          c = s(4043),
          d = s(9473),
          u = s(7530),
          h = Object.assign,
          p = Object.defineProperty,
          f = n([].concat);
        e.exports =
          !h ||
          o(function () {
            if (
              i &&
              1 !==
                h(
                  { b: 1 },
                  h(
                    p({}, "a", {
                      enumerable: !0,
                      get: function () {
                        p(this, "b", { value: 3, enumerable: !1 });
                      },
                    }),
                    { b: 2 }
                  )
                ).b
            )
              return !0;
            var e = {},
              t = {},
              s = Symbol(),
              n = "abcdefghijklmnopqrst";
            return (
              (e[s] = 7),
              n.split("").forEach(function (e) {
                t[e] = e;
              }),
              7 != h({}, e)[s] || a(h({}, t)).join("") != n
            );
          })
            ? function (e, t) {
                for (
                  var s = d(e), n = arguments.length, o = 1, h = l.f, p = c.f;
                  n > o;

                )
                  for (
                    var g,
                      m = u(arguments[o++]),
                      v = h ? f(a(m), h(m)) : a(m),
                      y = v.length,
                      b = 0;
                    y > b;

                  )
                    (g = v[b++]), (i && !r(p, m, g)) || (s[g] = m[g]);
                return s;
              }
            : h;
      },
      1525: (e, t, s) => {
        var i,
          n = s(1474),
          r = s(262),
          o = s(8409),
          a = s(4377),
          l = s(7461),
          c = s(7282),
          d = s(8873),
          u = d("IE_PROTO"),
          h = function () {},
          p = function (e) {
            return "<script>" + e + "</" + "script>";
          },
          f = function (e) {
            e.write(p("")), e.close();
            var t = e.parentWindow.Object;
            return (e = null), t;
          },
          g = function () {
            try {
              i = new ActiveXObject("htmlfile");
            } catch (e) {}
            var e, t;
            g =
              "undefined" != typeof document
                ? document.domain && i
                  ? f(i)
                  : (((t = c("iframe")).style.display = "none"),
                    l.appendChild(t),
                    (t.src = String("javascript:")),
                    (e = t.contentWindow.document).open(),
                    e.write(p("document.F=Object")),
                    e.close(),
                    e.F)
                : f(i);
            for (var s = o.length; s--; ) delete g.prototype[o[s]];
            return g();
          };
        (a[u] = !0),
          (e.exports =
            Object.create ||
            function (e, t) {
              var s;
              return (
                null !== e
                  ? ((h.prototype = n(e)),
                    (s = new h()),
                    (h.prototype = null),
                    (s[u] = e))
                  : (s = g()),
                void 0 === t ? s : r.f(s, t)
              );
            });
      },
      262: (e, t, s) => {
        var i = s(723),
          n = s(8654),
          r = s(9168),
          o = s(1474),
          a = s(3206),
          l = s(1340);
        t.f =
          i && !n
            ? Object.defineProperties
            : function (e, t) {
                o(e);
                for (var s, i = a(t), n = l(t), c = n.length, d = 0; c > d; )
                  r.f(e, (s = n[d++]), i[s]);
                return e;
              };
      },
      9168: (e, t, s) => {
        var i = s(723),
          n = s(4985),
          r = s(8654),
          o = s(1474),
          a = s(2988),
          l = TypeError,
          c = Object.defineProperty,
          d = Object.getOwnPropertyDescriptor,
          u = "enumerable",
          h = "configurable",
          p = "writable";
        t.f = i
          ? r
            ? function (e, t, s) {
                if (
                  (o(e),
                  (t = a(t)),
                  o(s),
                  "function" == typeof e &&
                    "prototype" === t &&
                    "value" in s &&
                    p in s &&
                    !s.writable)
                ) {
                  var i = d(e, t);
                  i &&
                    i.writable &&
                    ((e[t] = s.value),
                    (s = {
                      configurable: h in s ? s.configurable : i.configurable,
                      enumerable: u in s ? s.enumerable : i.enumerable,
                      writable: !1,
                    }));
                }
                return c(e, t, s);
              }
            : c
          : function (e, t, s) {
              if ((o(e), (t = a(t)), o(s), n))
                try {
                  return c(e, t, s);
                } catch (e) {}
              if ("get" in s || "set" in s) throw l("Accessors not supported");
              return "value" in s && (e[t] = s.value), e;
            };
      },
      5663: (e, t, s) => {
        var i = s(723),
          n = s(4552),
          r = s(4043),
          o = s(9273),
          a = s(3206),
          l = s(2988),
          c = s(8281),
          d = s(4985),
          u = Object.getOwnPropertyDescriptor;
        t.f = i
          ? u
          : function (e, t) {
              if (((e = a(e)), (t = l(t)), d))
                try {
                  return u(e, t);
                } catch (e) {}
              if (c(e, t)) return o(!n(r.f, e, t), e[t]);
            };
      },
      6675: (e, t, s) => {
        var i = s(1510),
          n = s(3206),
          r = s(6785).f,
          o = s(4072),
          a =
            "object" == typeof window && window && Object.getOwnPropertyNames
              ? Object.getOwnPropertyNames(window)
              : [];
        e.exports.f = function (e) {
          return a && "Window" == i(e)
            ? (function (e) {
                try {
                  return r(e);
                } catch (e) {
                  return o(a);
                }
              })(e)
            : r(n(e));
        };
      },
      6785: (e, t, s) => {
        var i = s(5113),
          n = s(8409).concat("length", "prototype");
        t.f =
          Object.getOwnPropertyNames ||
          function (e) {
            return i(e, n);
          };
      },
      8074: (e, t) => {
        t.f = Object.getOwnPropertySymbols;
      },
      4204: (e, t, s) => {
        var i = s(8281),
          n = s(6282),
          r = s(9473),
          o = s(8873),
          a = s(7401),
          l = o("IE_PROTO"),
          c = Object,
          d = c.prototype;
        e.exports = a
          ? c.getPrototypeOf
          : function (e) {
              var t = r(e);
              if (i(t, l)) return t[l];
              var s = t.constructor;
              return n(s) && t instanceof s
                ? s.prototype
                : t instanceof c
                ? d
                : null;
            };
      },
      6662: (e, t, s) => {
        var i = s(6183),
          n = s(5896),
          r = s(1510),
          o = s(8774),
          a = Object.isExtensible,
          l = i(function () {
            a(1);
          });
        e.exports =
          l || o
            ? function (e) {
                return !!n(e) && (!o || "ArrayBuffer" != r(e)) && (!a || a(e));
              }
            : a;
      },
      1786: (e, t, s) => {
        var i = s(1768);
        e.exports = i({}.isPrototypeOf);
      },
      5113: (e, t, s) => {
        var i = s(1768),
          n = s(8281),
          r = s(3206),
          o = s(5675).indexOf,
          a = s(4377),
          l = i([].push);
        e.exports = function (e, t) {
          var s,
            i = r(e),
            c = 0,
            d = [];
          for (s in i) !n(a, s) && n(i, s) && l(d, s);
          for (; t.length > c; ) n(i, (s = t[c++])) && (~o(d, s) || l(d, s));
          return d;
        };
      },
      1340: (e, t, s) => {
        var i = s(5113),
          n = s(8409);
        e.exports =
          Object.keys ||
          function (e) {
            return i(e, n);
          };
      },
      4043: (e, t) => {
        "use strict";
        var s = {}.propertyIsEnumerable,
          i = Object.getOwnPropertyDescriptor,
          n = i && !s.call({ 1: 2 }, 1);
        t.f = n
          ? function (e) {
              var t = i(this, e);
              return !!t && t.enumerable;
            }
          : s;
      },
      5900: (e, t, s) => {
        var i = s(1768),
          n = s(1474),
          r = s(2004);
        e.exports =
          Object.setPrototypeOf ||
          ("__proto__" in {}
            ? (function () {
                var e,
                  t = !1,
                  s = {};
                try {
                  (e = i(
                    Object.getOwnPropertyDescriptor(
                      Object.prototype,
                      "__proto__"
                    ).set
                  ))(s, []),
                    (t = s instanceof Array);
                } catch (e) {}
                return function (s, i) {
                  return n(s), r(i), t ? e(s, i) : (s.__proto__ = i), s;
                };
              })()
            : void 0);
      },
      4117: (e, t, s) => {
        "use strict";
        var i = s(4823),
          n = s(9225);
        e.exports = i
          ? {}.toString
          : function () {
              return "[object " + n(this) + "]";
            };
      },
      6891: (e, t, s) => {
        var i = s(4552),
          n = s(6282),
          r = s(5896),
          o = TypeError;
        e.exports = function (e, t) {
          var s, a;
          if ("string" === t && n((s = e.toString)) && !r((a = i(s, e))))
            return a;
          if (n((s = e.valueOf)) && !r((a = i(s, e)))) return a;
          if ("string" !== t && n((s = e.toString)) && !r((a = i(s, e))))
            return a;
          throw o("Can't convert object to primitive value");
        };
      },
      1441: (e, t, s) => {
        var i = s(4991),
          n = s(1768),
          r = s(6785),
          o = s(8074),
          a = s(1474),
          l = n([].concat);
        e.exports =
          i("Reflect", "ownKeys") ||
          function (e) {
            var t = r.f(a(e)),
              s = o.f;
            return s ? l(t, s(e)) : t;
          };
      },
      8734: (e, t, s) => {
        var i = s(4552),
          n = s(1474),
          r = s(6282),
          o = s(1510),
          a = s(5510),
          l = TypeError;
        e.exports = function (e, t) {
          var s = e.exec;
          if (r(s)) {
            var c = i(s, e, t);
            return null !== c && n(c), c;
          }
          if ("RegExp" === o(e)) return i(a, e, t);
          throw l("RegExp#exec called on incompatible receiver");
        };
      },
      5510: (e, t, s) => {
        "use strict";
        var i,
          n,
          r = s(4552),
          o = s(1768),
          a = s(7655),
          l = s(8383),
          c = s(6558),
          d = s(1748),
          u = s(1525),
          h = s(1030).get,
          p = s(7672),
          f = s(9729),
          g = d("native-string-replace", String.prototype.replace),
          m = RegExp.prototype.exec,
          v = m,
          y = o("".charAt),
          b = o("".indexOf),
          w = o("".replace),
          x = o("".slice),
          S =
            ((n = /b*/g),
            r(m, (i = /a/), "a"),
            r(m, n, "a"),
            0 !== i.lastIndex || 0 !== n.lastIndex),
          E = c.BROKEN_CARET,
          C = void 0 !== /()??/.exec("")[1];
        (S || C || E || p || f) &&
          (v = function (e) {
            var t,
              s,
              i,
              n,
              o,
              c,
              d,
              p = this,
              f = h(p),
              T = a(e),
              O = f.raw;
            if (O)
              return (
                (O.lastIndex = p.lastIndex),
                (t = r(v, O, T)),
                (p.lastIndex = O.lastIndex),
                t
              );
            var L = f.groups,
              A = E && p.sticky,
              I = r(l, p),
              k = p.source,
              _ = 0,
              M = T;
            if (
              (A &&
                ((I = w(I, "y", "")),
                -1 === b(I, "g") && (I += "g"),
                (M = x(T, p.lastIndex)),
                p.lastIndex > 0 &&
                  (!p.multiline ||
                    (p.multiline && "\n" !== y(T, p.lastIndex - 1))) &&
                  ((k = "(?: " + k + ")"), (M = " " + M), _++),
                (s = new RegExp("^(?:" + k + ")", I))),
              C && (s = new RegExp("^" + k + "$(?!\\s)", I)),
              S && (i = p.lastIndex),
              (n = r(m, A ? s : p, M)),
              A
                ? n
                  ? ((n.input = x(n.input, _)),
                    (n[0] = x(n[0], _)),
                    (n.index = p.lastIndex),
                    (p.lastIndex += n[0].length))
                  : (p.lastIndex = 0)
                : S &&
                  n &&
                  (p.lastIndex = p.global ? n.index + n[0].length : i),
              C &&
                n &&
                n.length > 1 &&
                r(g, n[0], s, function () {
                  for (o = 1; o < arguments.length - 2; o++)
                    void 0 === arguments[o] && (n[o] = void 0);
                }),
              n && L)
            )
              for (n.groups = c = u(null), o = 0; o < L.length; o++)
                c[(d = L[o])[0]] = n[d[1]];
            return n;
          }),
          (e.exports = v);
      },
      8383: (e, t, s) => {
        "use strict";
        var i = s(1474);
        e.exports = function () {
          var e = i(this),
            t = "";
          return (
            e.hasIndices && (t += "d"),
            e.global && (t += "g"),
            e.ignoreCase && (t += "i"),
            e.multiline && (t += "m"),
            e.dotAll && (t += "s"),
            e.unicode && (t += "u"),
            e.unicodeSets && (t += "v"),
            e.sticky && (t += "y"),
            t
          );
        };
      },
      6558: (e, t, s) => {
        var i = s(6183),
          n = s(8454).RegExp,
          r = i(function () {
            var e = n("a", "y");
            return (e.lastIndex = 2), null != e.exec("abcd");
          }),
          o =
            r ||
            i(function () {
              return !n("a", "y").sticky;
            }),
          a =
            r ||
            i(function () {
              var e = n("^r", "gy");
              return (e.lastIndex = 2), null != e.exec("str");
            });
        e.exports = { BROKEN_CARET: a, MISSED_STICKY: o, UNSUPPORTED_Y: r };
      },
      7672: (e, t, s) => {
        var i = s(6183),
          n = s(8454).RegExp;
        e.exports = i(function () {
          var e = n(".", "s");
          return !(e.dotAll && e.exec("\n") && "s" === e.flags);
        });
      },
      9729: (e, t, s) => {
        var i = s(6183),
          n = s(8454).RegExp;
        e.exports = i(function () {
          var e = n("(?<a>b)", "g");
          return (
            "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
          );
        });
      },
      7431: (e) => {
        var t = TypeError;
        e.exports = function (e) {
          if (null == e) throw t("Can't call method on " + e);
          return e;
        };
      },
      820: (e, t, s) => {
        var i = s(9168).f,
          n = s(8281),
          r = s(8149)("toStringTag");
        e.exports = function (e, t, s) {
          e && !s && (e = e.prototype),
            e && !n(e, r) && i(e, r, { configurable: !0, value: t });
        };
      },
      8873: (e, t, s) => {
        var i = s(1748),
          n = s(9059),
          r = i("keys");
        e.exports = function (e) {
          return r[e] || (r[e] = n(e));
        };
      },
      2047: (e, t, s) => {
        var i = s(8454),
          n = s(7194),
          r = "__core-js_shared__",
          o = i[r] || n(r, {});
        e.exports = o;
      },
      1748: (e, t, s) => {
        var i = s(8977),
          n = s(2047);
        (e.exports = function (e, t) {
          return n[e] || (n[e] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: "3.23.3",
          mode: i ? "pure" : "global",
          copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
          license: "https://github.com/zloirock/core-js/blob/v3.23.3/LICENSE",
          source: "https://github.com/zloirock/core-js",
        });
      },
      7321: (e, t, s) => {
        var i = s(1768),
          n = s(8037),
          r = s(7655),
          o = s(7431),
          a = i("".charAt),
          l = i("".charCodeAt),
          c = i("".slice),
          d = function (e) {
            return function (t, s) {
              var i,
                d,
                u = r(o(t)),
                h = n(s),
                p = u.length;
              return h < 0 || h >= p
                ? e
                  ? ""
                  : void 0
                : (i = l(u, h)) < 55296 ||
                  i > 56319 ||
                  h + 1 === p ||
                  (d = l(u, h + 1)) < 56320 ||
                  d > 57343
                ? e
                  ? a(u, h)
                  : i
                : e
                ? c(u, h, h + 2)
                : d - 56320 + ((i - 55296) << 10) + 65536;
            };
          };
        e.exports = { codeAt: d(!1), charAt: d(!0) };
      },
      9749: (e, t, s) => {
        var i = s(1768),
          n = s(7431),
          r = s(7655),
          o = s(8342),
          a = i("".replace),
          l = "[" + o + "]",
          c = RegExp("^" + l + l + "*"),
          d = RegExp(l + l + "*$"),
          u = function (e) {
            return function (t) {
              var s = r(n(t));
              return 1 & e && (s = a(s, c, "")), 2 & e && (s = a(s, d, "")), s;
            };
          };
        e.exports = { start: u(1), end: u(2), trim: u(3) };
      },
      9623: (e, t, s) => {
        var i = s(8037),
          n = Math.max,
          r = Math.min;
        e.exports = function (e, t) {
          var s = i(e);
          return s < 0 ? n(s + t, 0) : r(s, t);
        };
      },
      3206: (e, t, s) => {
        var i = s(7530),
          n = s(7431);
        e.exports = function (e) {
          return i(n(e));
        };
      },
      8037: (e, t, s) => {
        var i = s(1021);
        e.exports = function (e) {
          var t = +e;
          return t != t || 0 === t ? 0 : i(t);
        };
      },
      3917: (e, t, s) => {
        var i = s(8037),
          n = Math.min;
        e.exports = function (e) {
          return e > 0 ? n(i(e), 9007199254740991) : 0;
        };
      },
      9473: (e, t, s) => {
        var i = s(7431),
          n = Object;
        e.exports = function (e) {
          return n(i(e));
        };
      },
      3948: (e, t, s) => {
        var i = s(4552),
          n = s(5896),
          r = s(1527),
          o = s(9827),
          a = s(6891),
          l = s(8149),
          c = TypeError,
          d = l("toPrimitive");
        e.exports = function (e, t) {
          if (!n(e) || r(e)) return e;
          var s,
            l = o(e, d);
          if (l) {
            if (
              (void 0 === t && (t = "default"), (s = i(l, e, t)), !n(s) || r(s))
            )
              return s;
            throw c("Can't convert object to primitive value");
          }
          return void 0 === t && (t = "number"), a(e, t);
        };
      },
      2988: (e, t, s) => {
        var i = s(3948),
          n = s(1527);
        e.exports = function (e) {
          var t = i(e, "string");
          return n(t) ? t : t + "";
        };
      },
      4823: (e, t, s) => {
        var i = {};
        (i[s(8149)("toStringTag")] = "z"),
          (e.exports = "[object z]" === String(i));
      },
      7655: (e, t, s) => {
        var i = s(9225),
          n = String;
        e.exports = function (e) {
          if ("Symbol" === i(e))
            throw TypeError("Cannot convert a Symbol value to a string");
          return n(e);
        };
      },
      180: (e) => {
        var t = String;
        e.exports = function (e) {
          try {
            return t(e);
          } catch (e) {
            return "Object";
          }
        };
      },
      9059: (e, t, s) => {
        var i = s(1768),
          n = 0,
          r = Math.random(),
          o = i((1).toString);
        e.exports = function (e) {
          return "Symbol(" + (void 0 === e ? "" : e) + ")_" + o(++n + r, 36);
        };
      },
      4746: (e, t, s) => {
        var i = s(323);
        e.exports = i && !Symbol.sham && "symbol" == typeof Symbol.iterator;
      },
      8654: (e, t, s) => {
        var i = s(723),
          n = s(6183);
        e.exports =
          i &&
          n(function () {
            return (
              42 !=
              Object.defineProperty(function () {}, "prototype", {
                value: 42,
                writable: !1,
              }).prototype
            );
          });
      },
      8149: (e, t, s) => {
        var i = s(8454),
          n = s(1748),
          r = s(8281),
          o = s(9059),
          a = s(323),
          l = s(4746),
          c = n("wks"),
          d = i.Symbol,
          u = d && d.for,
          h = l ? d : (d && d.withoutSetter) || o;
        e.exports = function (e) {
          if (!r(c, e) || (!a && "string" != typeof c[e])) {
            var t = "Symbol." + e;
            a && r(d, e) ? (c[e] = d[e]) : (c[e] = l && u ? u(t) : h(t));
          }
          return c[e];
        };
      },
      8342: (e) => {
        e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
      },
      8165: (e, t, s) => {
        "use strict";
        var i = s(4761),
          n = s(528).filter;
        i(
          { target: "Array", proto: !0, forced: !s(4820)("filter") },
          {
            filter: function (e) {
              return n(this, e, arguments.length > 1 ? arguments[1] : void 0);
            },
          }
        );
      },
      7543: (e, t, s) => {
        "use strict";
        var i = s(3206),
          n = s(9256),
          r = s(6126),
          o = s(1030),
          a = s(9168).f,
          l = s(7583),
          c = s(8977),
          d = s(723),
          u = "Array Iterator",
          h = o.set,
          p = o.getterFor(u);
        e.exports = l(
          Array,
          "Array",
          function (e, t) {
            h(this, { type: u, target: i(e), index: 0, kind: t });
          },
          function () {
            var e = p(this),
              t = e.target,
              s = e.kind,
              i = e.index++;
            return !t || i >= t.length
              ? ((e.target = void 0), { value: void 0, done: !0 })
              : "keys" == s
              ? { value: i, done: !1 }
              : "values" == s
              ? { value: t[i], done: !1 }
              : { value: [i, t[i]], done: !1 };
          },
          "values"
        );
        var f = (r.Arguments = r.Array);
        if (
          (n("keys"), n("values"), n("entries"), !c && d && "values" !== f.name)
        )
          try {
            a(f, "name", { value: "values" });
          } catch (e) {}
      },
      7985: (e, t, s) => {
        "use strict";
        var i = s(4761),
          n = s(6589).left,
          r = s(1923),
          o = s(4324),
          a = s(7594);
        i(
          {
            target: "Array",
            proto: !0,
            forced: !r("reduce") || (!a && o > 79 && o < 83),
          },
          {
            reduce: function (e) {
              var t = arguments.length;
              return n(this, e, t, t > 1 ? arguments[1] : void 0);
            },
          }
        );
      },
      6618: (e, t, s) => {
        var i = s(723),
          n = s(4530).EXISTS,
          r = s(1768),
          o = s(9168).f,
          a = Function.prototype,
          l = r(a.toString),
          c =
            /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
          d = r(c.exec);
        i &&
          !n &&
          o(a, "name", {
            configurable: !0,
            get: function () {
              try {
                return d(c, l(this))[1];
              } catch (e) {
                return "";
              }
            },
          });
      },
      7692: (e, t, s) => {
        var i = s(4761),
          n = s(4727);
        i(
          { target: "Object", stat: !0, arity: 2, forced: Object.assign !== n },
          { assign: n }
        );
      },
      2352: (e, t, s) => {
        var i = s(4823),
          n = s(2054),
          r = s(4117);
        i || n(Object.prototype, "toString", r, { unsafe: !0 });
      },
      4249: (e, t, s) => {
        var i = s(4761),
          n = s(8513);
        i({ global: !0, forced: parseInt != n }, { parseInt: n });
      },
      9989: (e, t, s) => {
        "use strict";
        var i = s(4761),
          n = s(5510);
        i({ target: "RegExp", proto: !0, forced: /./.exec !== n }, { exec: n });
      },
      3344: (e, t, s) => {
        "use strict";
        var i = s(7321).charAt,
          n = s(7655),
          r = s(1030),
          o = s(7583),
          a = "String Iterator",
          l = r.set,
          c = r.getterFor(a);
        o(
          String,
          "String",
          function (e) {
            l(this, { type: a, string: n(e), index: 0 });
          },
          function () {
            var e,
              t = c(this),
              s = t.string,
              n = t.index;
            return n >= s.length
              ? { value: void 0, done: !0 }
              : ((e = i(s, n)), (t.index += e.length), { value: e, done: !1 });
          }
        );
      },
      8307: (e, t, s) => {
        "use strict";
        var i = s(4552),
          n = s(9696),
          r = s(1474),
          o = s(3917),
          a = s(7655),
          l = s(7431),
          c = s(9827),
          d = s(3615),
          u = s(8734);
        n("match", function (e, t, s) {
          return [
            function (t) {
              var s = l(this),
                n = null == t ? void 0 : c(t, e);
              return n ? i(n, t, s) : new RegExp(t)[e](a(s));
            },
            function (e) {
              var i = r(this),
                n = a(e),
                l = s(t, i, n);
              if (l.done) return l.value;
              if (!i.global) return u(i, n);
              var c = i.unicode;
              i.lastIndex = 0;
              for (var h, p = [], f = 0; null !== (h = u(i, n)); ) {
                var g = a(h[0]);
                (p[f] = g),
                  "" === g && (i.lastIndex = d(n, o(i.lastIndex), c)),
                  f++;
              }
              return 0 === f ? null : p;
            },
          ];
        });
      },
      4390: (e, t, s) => {
        "use strict";
        var i = s(6218),
          n = s(4552),
          r = s(1768),
          o = s(9696),
          a = s(6183),
          l = s(1474),
          c = s(6282),
          d = s(8037),
          u = s(3917),
          h = s(7655),
          p = s(7431),
          f = s(3615),
          g = s(9827),
          m = s(4742),
          v = s(8734),
          y = s(8149)("replace"),
          b = Math.max,
          w = Math.min,
          x = r([].concat),
          S = r([].push),
          E = r("".indexOf),
          C = r("".slice),
          T = "$0" === "a".replace(/./, "$0"),
          O = !!/./[y] && "" === /./[y]("a", "$0");
        o(
          "replace",
          function (e, t, s) {
            var r = O ? "$" : "$0";
            return [
              function (e, s) {
                var i = p(this),
                  r = null == e ? void 0 : g(e, y);
                return r ? n(r, e, i, s) : n(t, h(i), e, s);
              },
              function (e, n) {
                var o = l(this),
                  a = h(e);
                if (
                  "string" == typeof n &&
                  -1 === E(n, r) &&
                  -1 === E(n, "$<")
                ) {
                  var p = s(t, o, a, n);
                  if (p.done) return p.value;
                }
                var g = c(n);
                g || (n = h(n));
                var y = o.global;
                if (y) {
                  var T = o.unicode;
                  o.lastIndex = 0;
                }
                for (var O = []; ; ) {
                  var L = v(o, a);
                  if (null === L) break;
                  if ((S(O, L), !y)) break;
                  "" === h(L[0]) && (o.lastIndex = f(a, u(o.lastIndex), T));
                }
                for (var A, I = "", k = 0, _ = 0; _ < O.length; _++) {
                  for (
                    var M = h((L = O[_])[0]),
                      P = b(w(d(L.index), a.length), 0),
                      $ = [],
                      z = 1;
                    z < L.length;
                    z++
                  )
                    S($, void 0 === (A = L[z]) ? A : String(A));
                  var D = L.groups;
                  if (g) {
                    var B = x([M], $, P, a);
                    void 0 !== D && S(B, D);
                    var N = h(i(n, void 0, B));
                  } else N = m(M, a, P, $, D, n);
                  P >= k && ((I += C(a, k, P) + N), (k = P + M.length));
                }
                return I + C(a, k);
              },
            ];
          },
          !!a(function () {
            var e = /./;
            return (
              (e.exec = function () {
                var e = [];
                return (e.groups = { a: "7" }), e;
              }),
              "7" !== "".replace(e, "$<a>")
            );
          }) ||
            !T ||
            O
        );
      },
      9703: (e, t, s) => {
        "use strict";
        var i,
          n = s(8454),
          r = s(1768),
          o = s(6367),
          a = s(6582),
          l = s(6645),
          c = s(7790),
          d = s(5896),
          u = s(6662),
          h = s(1030).enforce,
          p = s(4404),
          f = !n.ActiveXObject && "ActiveXObject" in n,
          g = function (e) {
            return function () {
              return e(this, arguments.length ? arguments[0] : void 0);
            };
          },
          m = l("WeakMap", g, c);
        if (p && f) {
          (i = c.getConstructor(g, "WeakMap", !0)), a.enable();
          var v = m.prototype,
            y = r(v.delete),
            b = r(v.has),
            w = r(v.get),
            x = r(v.set);
          o(v, {
            delete: function (e) {
              if (d(e) && !u(e)) {
                var t = h(this);
                return (
                  t.frozen || (t.frozen = new i()),
                  y(this, e) || t.frozen.delete(e)
                );
              }
              return y(this, e);
            },
            has: function (e) {
              if (d(e) && !u(e)) {
                var t = h(this);
                return (
                  t.frozen || (t.frozen = new i()),
                  b(this, e) || t.frozen.has(e)
                );
              }
              return b(this, e);
            },
            get: function (e) {
              if (d(e) && !u(e)) {
                var t = h(this);
                return (
                  t.frozen || (t.frozen = new i()),
                  b(this, e) ? w(this, e) : t.frozen.get(e)
                );
              }
              return w(this, e);
            },
            set: function (e, t) {
              if (d(e) && !u(e)) {
                var s = h(this);
                s.frozen || (s.frozen = new i()),
                  b(this, e) ? x(this, e, t) : s.frozen.set(e, t);
              } else x(this, e, t);
              return this;
            },
          });
        }
      },
      7323: (e, t, s) => {
        s(9703);
      },
      3542: (e, t, s) => {
        var i = s(8454),
          n = s(6181),
          r = s(2387),
          o = s(1269),
          a = s(1501),
          l = function (e) {
            if (e && e.forEach !== o)
              try {
                a(e, "forEach", o);
              } catch (t) {
                e.forEach = o;
              }
          };
        for (var c in n) n[c] && l(i[c] && i[c].prototype);
        l(r);
      },
      4079: (e, t, s) => {
        var i = s(8454),
          n = s(6181),
          r = s(2387),
          o = s(7543),
          a = s(1501),
          l = s(8149),
          c = l("iterator"),
          d = l("toStringTag"),
          u = o.values,
          h = function (e, t) {
            if (e) {
              if (e[c] !== u)
                try {
                  a(e, c, u);
                } catch (t) {
                  e[c] = u;
                }
              if ((e[d] || a(e, d, t), n[t]))
                for (var s in o)
                  if (e[s] !== o[s])
                    try {
                      a(e, s, o[s]);
                    } catch (t) {
                      e[s] = o[s];
                    }
            }
          };
        for (var p in n) h(i[p] && i[p].prototype, p);
        h(r, "DOMTokenList");
      },
      2732: function (e) {
        e.exports = (function () {
          "use strict";
          function e() {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var i in s)
                      Object.prototype.hasOwnProperty.call(s, i) &&
                        (e[i] = s[i]);
                  }
                  return e;
                }),
              e.apply(this, arguments)
            );
          }
          var t = "undefined" != typeof window,
            s =
              (t && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            i = t && "IntersectionObserver" in window,
            n = t && "classList" in document.createElement("p"),
            r = t && window.devicePixelRatio > 1,
            o = {
              elements_selector: ".lazy",
              container: s || t ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_bg_set: "bg-set",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
              restore_on_error: !1,
            },
            a = function (t) {
              return e({}, o, t);
            },
            l = function (e, t) {
              var s,
                i = "LazyLoad::Initialized",
                n = new e(t);
              try {
                s = new CustomEvent(i, { detail: { instance: n } });
              } catch (e) {
                (s = document.createEvent("CustomEvent")).initCustomEvent(
                  i,
                  !1,
                  !1,
                  { instance: n }
                );
              }
              window.dispatchEvent(s);
            },
            c = "src",
            d = "srcset",
            u = "sizes",
            h = "poster",
            p = "llOriginalAttrs",
            f = "data",
            g = "loading",
            m = "loaded",
            v = "applied",
            y = "error",
            b = "native",
            w = "data-",
            x = "ll-status",
            S = function (e, t) {
              return e.getAttribute(w + t);
            },
            E = function (e) {
              return S(e, x);
            },
            C = function (e, t) {
              return (function (e, t, s) {
                var i = "data-ll-status";
                null !== s ? e.setAttribute(i, s) : e.removeAttribute(i);
              })(e, 0, t);
            },
            T = function (e) {
              return C(e, null);
            },
            O = function (e) {
              return null === E(e);
            },
            L = function (e) {
              return E(e) === b;
            },
            A = [g, m, v, y],
            I = function (e, t, s, i) {
              e &&
                (void 0 === i ? (void 0 === s ? e(t) : e(t, s)) : e(t, s, i));
            },
            k = function (e, t) {
              n
                ? e.classList.add(t)
                : (e.className += (e.className ? " " : "") + t);
            },
            _ = function (e, t) {
              n
                ? e.classList.remove(t)
                : (e.className = e.className
                    .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            M = function (e) {
              return e.llTempImage;
            },
            P = function (e, t) {
              if (t) {
                var s = t._observer;
                s && s.unobserve(e);
              }
            },
            $ = function (e, t) {
              e && (e.loadingCount += t);
            },
            z = function (e, t) {
              e && (e.toLoadCount = t);
            },
            D = function (e) {
              for (var t, s = [], i = 0; (t = e.children[i]); i += 1)
                "SOURCE" === t.tagName && s.push(t);
              return s;
            },
            B = function (e, t) {
              var s = e.parentNode;
              s && "PICTURE" === s.tagName && D(s).forEach(t);
            },
            N = function (e, t) {
              D(e).forEach(t);
            },
            j = [c],
            R = [c, h],
            W = [c, d, u],
            G = [f],
            H = function (e) {
              return !!e[p];
            },
            F = function (e) {
              return e[p];
            },
            V = function (e) {
              return delete e[p];
            },
            q = function (e, t) {
              if (!H(e)) {
                var s = {};
                t.forEach(function (t) {
                  s[t] = e.getAttribute(t);
                }),
                  (e[p] = s);
              }
            },
            X = function (e, t) {
              if (H(e)) {
                var s = F(e);
                t.forEach(function (t) {
                  !(function (e, t, s) {
                    s ? e.setAttribute(t, s) : e.removeAttribute(t);
                  })(e, t, s[t]);
                });
              }
            },
            Y = function (e, t, s) {
              k(e, t.class_applied),
                C(e, v),
                s &&
                  (t.unobserve_completed && P(e, t),
                  I(t.callback_applied, e, s));
            },
            U = function (e, t, s) {
              k(e, t.class_loading),
                C(e, g),
                s && ($(s, 1), I(t.callback_loading, e, s));
            },
            K = function (e, t, s) {
              s && e.setAttribute(t, s);
            },
            Z = function (e, t) {
              K(e, u, S(e, t.data_sizes)),
                K(e, d, S(e, t.data_srcset)),
                K(e, c, S(e, t.data_src));
            },
            J = {
              IMG: function (e, t) {
                B(e, function (e) {
                  q(e, W), Z(e, t);
                }),
                  q(e, W),
                  Z(e, t);
              },
              IFRAME: function (e, t) {
                q(e, j), K(e, c, S(e, t.data_src));
              },
              VIDEO: function (e, t) {
                N(e, function (e) {
                  q(e, j), K(e, c, S(e, t.data_src));
                }),
                  q(e, R),
                  K(e, h, S(e, t.data_poster)),
                  K(e, c, S(e, t.data_src)),
                  e.load();
              },
              OBJECT: function (e, t) {
                q(e, G), K(e, f, S(e, t.data_src));
              },
            },
            Q = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            ee = function (e, t) {
              !t ||
                (function (e) {
                  return e.loadingCount > 0;
                })(t) ||
                (function (e) {
                  return e.toLoadCount > 0;
                })(t) ||
                I(e.callback_finish, t);
            },
            te = function (e, t, s) {
              e.addEventListener(t, s), (e.llEvLisnrs[t] = s);
            },
            se = function (e, t, s) {
              e.removeEventListener(t, s);
            },
            ie = function (e) {
              return !!e.llEvLisnrs;
            },
            ne = function (e) {
              if (ie(e)) {
                var t = e.llEvLisnrs;
                for (var s in t) {
                  var i = t[s];
                  se(e, s, i);
                }
                delete e.llEvLisnrs;
              }
            },
            re = function (e, t, s) {
              !(function (e) {
                delete e.llTempImage;
              })(e),
                $(s, -1),
                (function (e) {
                  e && (e.toLoadCount -= 1);
                })(s),
                _(e, t.class_loading),
                t.unobserve_completed && P(e, s);
            },
            oe = function (e, t, s) {
              var i = M(e) || e;
              ie(i) ||
                (function (e, t, s) {
                  ie(e) || (e.llEvLisnrs = {});
                  var i = "VIDEO" === e.tagName ? "loadeddata" : "load";
                  te(e, i, t), te(e, "error", s);
                })(
                  i,
                  function (n) {
                    !(function (e, t, s, i) {
                      var n = L(t);
                      re(t, s, i),
                        k(t, s.class_loaded),
                        C(t, m),
                        I(s.callback_loaded, t, i),
                        n || ee(s, i);
                    })(0, e, t, s),
                      ne(i);
                  },
                  function (n) {
                    !(function (e, t, s, i) {
                      var n = L(t);
                      re(t, s, i),
                        k(t, s.class_error),
                        C(t, y),
                        I(s.callback_error, t, i),
                        s.restore_on_error && X(t, W),
                        n || ee(s, i);
                    })(0, e, t, s),
                      ne(i);
                  }
                );
            },
            ae = function (e, t, s) {
              !(function (e) {
                return Q.indexOf(e.tagName) > -1;
              })(e)
                ? (function (e, t, s) {
                    !(function (e) {
                      e.llTempImage = document.createElement("IMG");
                    })(e),
                      oe(e, t, s),
                      (function (e) {
                        H(e) ||
                          (e[p] = { backgroundImage: e.style.backgroundImage });
                      })(e),
                      (function (e, t, s) {
                        var i = S(e, t.data_bg),
                          n = S(e, t.data_bg_hidpi),
                          o = r && n ? n : i;
                        o &&
                          ((e.style.backgroundImage = 'url("'.concat(o, '")')),
                          M(e).setAttribute(c, o),
                          U(e, t, s));
                      })(e, t, s),
                      (function (e, t, s) {
                        var i = S(e, t.data_bg_multi),
                          n = S(e, t.data_bg_multi_hidpi),
                          o = r && n ? n : i;
                        o && ((e.style.backgroundImage = o), Y(e, t, s));
                      })(e, t, s),
                      (function (e, t, s) {
                        var i = S(e, t.data_bg_set);
                        if (i) {
                          var n = i.split("|"),
                            r = n.map(function (e) {
                              return "image-set(".concat(e, ")");
                            });
                          (e.style.backgroundImage = r.join()),
                            "" === e.style.backgroundImage &&
                              ((r = n.map(function (e) {
                                return "-webkit-image-set(".concat(e, ")");
                              })),
                              (e.style.backgroundImage = r.join())),
                            Y(e, t, s);
                        }
                      })(e, t, s);
                  })(e, t, s)
                : (function (e, t, s) {
                    oe(e, t, s),
                      (function (e, t, s) {
                        var i = J[e.tagName];
                        i && (i(e, t), U(e, t, s));
                      })(e, t, s);
                  })(e, t, s);
            },
            le = function (e) {
              e.removeAttribute(c), e.removeAttribute(d), e.removeAttribute(u);
            },
            ce = function (e) {
              B(e, function (e) {
                X(e, W);
              }),
                X(e, W);
            },
            de = {
              IMG: ce,
              IFRAME: function (e) {
                X(e, j);
              },
              VIDEO: function (e) {
                N(e, function (e) {
                  X(e, j);
                }),
                  X(e, R),
                  e.load();
              },
              OBJECT: function (e) {
                X(e, G);
              },
            },
            ue = function (e, t) {
              (function (e) {
                var t = de[e.tagName];
                t
                  ? t(e)
                  : (function (e) {
                      if (H(e)) {
                        var t = F(e);
                        e.style.backgroundImage = t.backgroundImage;
                      }
                    })(e);
              })(e),
                (function (e, t) {
                  O(e) ||
                    L(e) ||
                    (_(e, t.class_entered),
                    _(e, t.class_exited),
                    _(e, t.class_applied),
                    _(e, t.class_loading),
                    _(e, t.class_loaded),
                    _(e, t.class_error));
                })(e, t),
                T(e),
                V(e);
            },
            he = ["IMG", "IFRAME", "VIDEO"],
            pe = function (e) {
              return e.use_native && "loading" in HTMLImageElement.prototype;
            },
            fe = function (e, t, s) {
              e.forEach(function (e) {
                return (function (e) {
                  return e.isIntersecting || e.intersectionRatio > 0;
                })(e)
                  ? (function (e, t, s, i) {
                      var n = (function (e) {
                        return A.indexOf(E(e)) >= 0;
                      })(e);
                      C(e, "entered"),
                        k(e, s.class_entered),
                        _(e, s.class_exited),
                        (function (e, t, s) {
                          t.unobserve_entered && P(e, s);
                        })(e, s, i),
                        I(s.callback_enter, e, t, i),
                        n || ae(e, s, i);
                    })(e.target, e, t, s)
                  : (function (e, t, s, i) {
                      O(e) ||
                        (k(e, s.class_exited),
                        (function (e, t, s, i) {
                          s.cancel_on_exit &&
                            (function (e) {
                              return E(e) === g;
                            })(e) &&
                            "IMG" === e.tagName &&
                            (ne(e),
                            (function (e) {
                              B(e, function (e) {
                                le(e);
                              }),
                                le(e);
                            })(e),
                            ce(e),
                            _(e, s.class_loading),
                            $(i, -1),
                            T(e),
                            I(s.callback_cancel, e, t, i));
                        })(e, t, s, i),
                        I(s.callback_exit, e, t, i));
                    })(e.target, e, t, s);
              });
            },
            ge = function (e) {
              return Array.prototype.slice.call(e);
            },
            me = function (e) {
              return e.container.querySelectorAll(e.elements_selector);
            },
            ve = function (e) {
              return (function (e) {
                return E(e) === y;
              })(e);
            },
            ye = function (e, t) {
              return (function (e) {
                return ge(e).filter(O);
              })(e || me(t));
            },
            be = function (e, s) {
              var n = a(e);
              (this._settings = n),
                (this.loadingCount = 0),
                (function (e, t) {
                  i &&
                    !pe(e) &&
                    (t._observer = new IntersectionObserver(
                      function (s) {
                        fe(s, e, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(e)
                    ));
                })(n, this),
                (function (e, s) {
                  t &&
                    ((s._onlineHandler = function () {
                      !(function (e, t) {
                        var s;
                        ((s = me(e)), ge(s).filter(ve)).forEach(function (t) {
                          _(t, e.class_error), T(t);
                        }),
                          t.update();
                      })(e, s);
                    }),
                    window.addEventListener("online", s._onlineHandler));
                })(n, this),
                this.update(s);
            };
          return (
            (be.prototype = {
              update: function (e) {
                var t,
                  n,
                  r = this._settings,
                  o = ye(e, r);
                z(this, o.length),
                  !s && i
                    ? pe(r)
                      ? (function (e, t, s) {
                          e.forEach(function (e) {
                            -1 !== he.indexOf(e.tagName) &&
                              (function (e, t, s) {
                                e.setAttribute("loading", "lazy"),
                                  oe(e, t, s),
                                  (function (e, t) {
                                    var s = J[e.tagName];
                                    s && s(e, t);
                                  })(e, t),
                                  C(e, b);
                              })(e, t, s);
                          }),
                            z(s, 0);
                        })(o, r, this)
                      : ((n = o),
                        (function (e) {
                          e.disconnect();
                        })((t = this._observer)),
                        (function (e, t) {
                          t.forEach(function (t) {
                            e.observe(t);
                          });
                        })(t, n))
                    : this.loadAll(o);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  t &&
                    window.removeEventListener("online", this._onlineHandler),
                  me(this._settings).forEach(function (e) {
                    V(e);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this._onlineHandler,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (e) {
                var t = this,
                  s = this._settings;
                ye(e, s).forEach(function (e) {
                  P(e, t), ae(e, s, t);
                });
              },
              restoreAll: function () {
                var e = this._settings;
                me(e).forEach(function (t) {
                  ue(t, e);
                });
              },
            }),
            (be.load = function (e, t) {
              var s = a(t);
              ae(e, s);
            }),
            (be.resetStatus = function (e) {
              T(e);
            }),
            t &&
              (function (e, t) {
                if (t)
                  if (t.length) for (var s, i = 0; (s = t[i]); i += 1) l(e, s);
                  else l(e, t);
              })(be, window.lazyLoadOptions),
            be
          );
        })();
      },
    },
    t = {};
  function s(i) {
    var n = t[i];
    if (void 0 !== n) return n.exports;
    var r = (t[i] = { exports: {} });
    return e[i].call(r.exports, r, r.exports, s), r.exports;
  }
  (s.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return s.d(t, { a: t }), t;
  }),
    (s.d = (e, t) => {
      for (var i in t)
        s.o(t, i) &&
          !s.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
    }),
    (s.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      function e(e) {
        this.type = e;
      }
      (e.prototype.init = function () {
        const e = this;
        (this.оbjects = []),
          (this.daClassname = "_dynamic_adapt_"),
          (this.nodes = document.querySelectorAll("[data-da]"));
        for (let e = 0; e < this.nodes.length; e++) {
          const t = this.nodes[e],
            s = t.dataset.da.trim().split(","),
            i = {};
          (i.element = t),
            (i.parent = t.parentNode),
            (i.destination = document.querySelector(s[0].trim())),
            (i.breakpoint = s[1] ? s[1].trim() : "767"),
            (i.place = s[2] ? s[2].trim() : "last"),
            (i.index = this.indexInParent(i.parent, i.element)),
            this.оbjects.push(i);
        }
        this.arraySort(this.оbjects),
          (this.mediaQueries = Array.prototype.map.call(
            this.оbjects,
            function (e) {
              return (
                "(" +
                this.type +
                "-width: " +
                e.breakpoint +
                "px)," +
                e.breakpoint
              );
            },
            this
          )),
          (this.mediaQueries = Array.prototype.filter.call(
            this.mediaQueries,
            function (e, t, s) {
              return Array.prototype.indexOf.call(s, e) === t;
            }
          ));
        for (let t = 0; t < this.mediaQueries.length; t++) {
          const s = this.mediaQueries[t],
            i = String.prototype.split.call(s, ","),
            n = window.matchMedia(i[0]),
            r = i[1],
            o = Array.prototype.filter.call(this.оbjects, function (e) {
              return e.breakpoint === r;
            });
          n.addListener(function () {
            e.mediaHandler(n, o);
          }),
            this.mediaHandler(n, o);
        }
      }),
        (e.prototype.mediaHandler = function (e, t) {
          if (e.matches)
            for (let e = 0; e < t.length; e++) {
              const s = t[e];
              (s.index = this.indexInParent(s.parent, s.element)),
                this.moveTo(s.place, s.element, s.destination);
            }
          else
            for (let e = t.length - 1; e >= 0; e--) {
              const s = t[e];
              s.element.classList.contains(this.daClassname) &&
                this.moveBack(s.parent, s.element, s.index);
            }
        }),
        (e.prototype.moveTo = function (e, t, s) {
          t.classList.add(this.daClassname),
            "last" === e || e >= s.children.length
              ? s.insertAdjacentElement("beforeend", t)
              : "first" !== e
              ? s.children[e].insertAdjacentElement("beforebegin", t)
              : s.insertAdjacentElement("afterbegin", t);
        }),
        (e.prototype.moveBack = function (e, t, s) {
          t.classList.remove(this.daClassname),
            void 0 !== e.children[s]
              ? e.children[s].insertAdjacentElement("beforebegin", t)
              : e.insertAdjacentElement("beforeend", t);
        }),
        (e.prototype.indexInParent = function (e, t) {
          const s = Array.prototype.slice.call(e.children);
          return Array.prototype.indexOf.call(s, t);
        }),
        (e.prototype.arraySort = function (e) {
          "min" === this.type
            ? Array.prototype.sort.call(e, function (e, t) {
                return e.breakpoint === t.breakpoint
                  ? e.place === t.place
                    ? 0
                    : "first" === e.place || "last" === t.place
                    ? -1
                    : "last" === e.place || "first" === t.place
                    ? 1
                    : e.place - t.place
                  : e.breakpoint - t.breakpoint;
              })
            : Array.prototype.sort.call(e, function (e, t) {
                return e.breakpoint === t.breakpoint
                  ? e.place === t.place
                    ? 0
                    : "first" === e.place || "last" === t.place
                    ? 1
                    : "last" === e.place || "first" === t.place
                    ? -1
                    : t.place - e.place
                  : t.breakpoint - e.breakpoint;
              });
        });
      new e("max").init();
      class t {
        constructor(e) {
          (this.isOpen = !1),
            (this.targetOpen = { selector: !1, element: !1 }),
            (this.previousOpen = { selector: !1, element: !1 }),
            (this.lastClosed = { selector: !1, element: !1 }),
            (this._dataValue = !1),
            (this.hash = !1),
            (this._reopen = !1),
            (this._selectorOpen = !1),
            (this.lastFocusEl = !1),
            (this._focusEl = [
              "a[href]",
              'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
              "button:not([disabled]):not([aria-hidden])",
              "select:not([disabled]):not([aria-hidden])",
              "textarea:not([disabled]):not([aria-hidden])",
              "area[href]",
              "iframe",
              "object",
              "embed",
              "[contenteditable]",
              '[tabindex]:not([tabindex^="-"])',
            ]),
            (this.options = Object.assign(
              {
                logging: !1,
                init: !0,
                attributeOpenButton: "data-popup",
                attributeCloseButton: "data-close",
                fixElementSelector: "[data-lp]",
                youtubeAttribute: "data-youtube",
                setAutoplayYoutube: !0,
                classes: {
                  popup: "popup",
                  popupContent: "popup__content",
                  popupActive: "popup_show",
                  bodyActive: "popup-show",
                  popupVideo: "popup__video",
                },
                focusCatch: !0,
                closeEsc: !0,
                bodyLock: !0,
                bodyLockDelay: 500,
                hashSettings: { location: !0, goHash: !0 },
                on: {
                  beforeOpen: function () {},
                  afterOpen: function () {},
                  beforeClose: function () {},
                  afterClose: function () {},
                },
              },
              e
            )),
            e.init && this.initPopups();
        }
        initPopups() {
          this.popupLogging("Проснулся"), this.eventsPopup();
        }
        eventsPopup() {
          document.addEventListener(
            "click",
            function (e) {
              const t = e.target.closest(
                `[${this.options.attributeOpenButton}]`
              );
              if (t)
                return (
                  e.preventDefault(),
                  (this._dataValue = t.getAttribute(
                    this.options.attributeOpenButton
                  )
                    ? t.getAttribute(this.options.attributeOpenButton)
                    : "error"),
                  "error" !== this._dataValue
                    ? (this.isOpen || (this.lastFocusEl = t),
                      (this.targetOpen.selector = `${this._dataValue}`),
                      (this._selectorOpen = !0),
                      void this.open())
                    : void this.popupLogging(
                        `Ой ой, не заполнен атрибут у ${t.classList}`
                      )
                );
              return e.target.closest(
                `[${this.options.attributeCloseButton}]`
              ) ||
                (!e.target.closest(`.${this.options.classes.popupContent}`) &&
                  this.isOpen)
                ? (e.preventDefault(), void this.close())
                : void 0;
            }.bind(this)
          ),
            document.addEventListener(
              "keydown",
              function (e) {
                if (
                  this.options.closeEsc &&
                  27 == e.which &&
                  "Escape" === e.code &&
                  this.isOpen
                )
                  return e.preventDefault(), void this.close();
                this.options.focusCatch &&
                  9 == e.which &&
                  this.isOpen &&
                  this._focusCatch(e);
              }.bind(this)
            ),
            this.options.hashSettings.goHash &&
              (window.addEventListener(
                "hashchange",
                function () {
                  window.location.hash
                    ? this._openToHash()
                    : this.close(this.targetOpen.selector);
                }.bind(this)
              ),
              window.addEventListener(
                "load",
                function () {
                  window.location.hash && this._openToHash();
                }.bind(this)
              ));
        }
        open(e) {
          if (
            (e &&
              "string" == typeof e &&
              "" !== e.trim() &&
              ((this.targetOpen.selector = e), (this._selectorOpen = !0)),
            this.isOpen && ((this._reopen = !0), this.close()),
            this._selectorOpen ||
              (this.targetOpen.selector = this.lastClosed.selector),
            this._reopen ||
              (this.previousActiveElement = document.activeElement),
            (this.targetOpen.element = document.querySelector(
              this.targetOpen.selector
            )),
            this.targetOpen.element)
          ) {
            if (
              this.targetOpen.element.hasAttribute(
                this.options.youtubeAttribute
              )
            ) {
              const e = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
                  this.options.youtubeAttribute
                )}?rel=0&showinfo=0&autoplay=1`,
                t = document.createElement("iframe");
              t.setAttribute("allowfullscreen", "");
              const s = this.options.setAutoplayYoutube ? "autoplay;" : "";
              t.setAttribute("allow", `${s}; encrypted-media`),
                t.setAttribute("src", e),
                this.targetOpen.element.querySelector(
                  `.${this.options.classes.popupVideo}`
                ) &&
                  this.targetOpen.element
                    .querySelector(`.${this.options.classes.popupVideo}`)
                    .appendChild(t);
            }
            this.options.hashSettings.location &&
              (this._getHash(), this._setHash()),
              this.options.on.beforeOpen(this),
              this.targetOpen.element.classList.add(
                this.options.classes.popupActive
              ),
              document.body.classList.add(this.options.classes.bodyActive),
              this._reopen ? (this._reopen = !1) : l(),
              this.targetOpen.element.setAttribute("aria-hidden", "false"),
              (this.previousOpen.selector = this.targetOpen.selector),
              (this.previousOpen.element = this.targetOpen.element),
              (this._selectorOpen = !1),
              (this.isOpen = !0),
              setTimeout(() => {
                this._focusTrap();
              }, 50),
              document.dispatchEvent(
                new CustomEvent("afterPopupOpen", { detail: { popup: this } })
              ),
              this.popupLogging("Открыл попап");
          } else
            this.popupLogging(
              "Ой ой, такого попапа нет. Проверьте корректность ввода. "
            );
        }
        close(e) {
          e &&
            "string" == typeof e &&
            "" !== e.trim() &&
            (this.previousOpen.selector = e),
            this.isOpen &&
              a &&
              (this.options.on.beforeClose(this),
              this.targetOpen.element.hasAttribute(
                this.options.youtubeAttribute
              ) &&
                this.targetOpen.element.querySelector(
                  `.${this.options.classes.popupVideo}`
                ) &&
                (this.targetOpen.element.querySelector(
                  `.${this.options.classes.popupVideo}`
                ).innerHTML = ""),
              this.previousOpen.element.classList.remove(
                this.options.classes.popupActive
              ),
              this.previousOpen.element.setAttribute("aria-hidden", "true"),
              this._reopen ||
                (document.body.classList.remove(
                  this.options.classes.bodyActive
                ),
                l(),
                (this.isOpen = !1)),
              this._removeHash(),
              this._selectorOpen &&
                ((this.lastClosed.selector = this.previousOpen.selector),
                (this.lastClosed.element = this.previousOpen.element)),
              this.options.on.afterClose(this),
              setTimeout(() => {
                this._focusTrap();
              }, 50),
              this.popupLogging("Закрыл попап"));
        }
        _getHash() {
          this.options.hashSettings.location &&
            (this.hash = this.targetOpen.selector.includes("#")
              ? this.targetOpen.selector
              : this.targetOpen.selector.replace(".", "#"));
        }
        _openToHash() {
          let e = document.querySelector(
            `.${window.location.hash.replace("#", "")}`
          )
            ? `.${window.location.hash.replace("#", "")}`
            : document.querySelector(`${window.location.hash}`)
            ? `${window.location.hash}`
            : null;
          document.querySelector(
            `[${this.options.attributeOpenButton}="${e}"]`
          ) &&
            e &&
            this.open(e);
        }
        _setHash() {
          history.pushState("", "", this.hash);
        }
        _removeHash() {
          history.pushState("", "", window.location.href.split("#")[0]);
        }
        _focusCatch(e) {
          const t = this.targetOpen.element.querySelectorAll(this._focusEl),
            s = Array.prototype.slice.call(t),
            i = s.indexOf(document.activeElement);
          e.shiftKey &&
            0 === i &&
            (s[s.length - 1].focus(), e.preventDefault()),
            e.shiftKey ||
              i !== s.length - 1 ||
              (s[0].focus(), e.preventDefault());
        }
        _focusTrap() {
          const e = this.previousOpen.element.querySelectorAll(this._focusEl);
          !this.isOpen && this.lastFocusEl
            ? this.lastFocusEl.focus()
            : e[0].focus();
        }
        popupLogging(e) {
          this.options.logging && console.log(`[Попапос]: ${e}`);
        }
      }
      let i = {
        Android: function () {
          return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
          return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
          return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
          return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
          return (
            i.Android() || i.BlackBerry() || i.iOS() || i.Opera() || i.Windows()
          );
        },
      };
      let n = (e, t = 500, s = 0) => {
          e.classList.contains("_slide") ||
            (e.classList.add("_slide"),
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = `${e.offsetHeight}px`),
            e.offsetHeight,
            (e.style.overflow = "hidden"),
            (e.style.height = s ? `${s}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            window.setTimeout(() => {
              (e.hidden = !s),
                !s && e.style.removeProperty("height"),
                e.style.removeProperty("padding-top"),
                e.style.removeProperty("padding-bottom"),
                e.style.removeProperty("margin-top"),
                e.style.removeProperty("margin-bottom"),
                !s && e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide");
            }, t));
        },
        r = (e, t = 500, s = 0) => {
          if (!e.classList.contains("_slide")) {
            e.classList.add("_slide"),
              (e.hidden = !e.hidden && null),
              s && e.style.removeProperty("height");
            let i = e.offsetHeight;
            (e.style.overflow = "hidden"),
              (e.style.height = s ? `${s}px` : "0px"),
              (e.style.paddingTop = 0),
              (e.style.paddingBottom = 0),
              (e.style.marginTop = 0),
              (e.style.marginBottom = 0),
              e.offsetHeight,
              (e.style.transitionProperty = "height, margin, padding"),
              (e.style.transitionDuration = t + "ms"),
              (e.style.height = i + "px"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              window.setTimeout(() => {
                e.style.removeProperty("height"),
                  e.style.removeProperty("overflow"),
                  e.style.removeProperty("transition-duration"),
                  e.style.removeProperty("transition-property"),
                  e.classList.remove("_slide");
              }, t);
          }
        },
        o = (e, t = 500) => (e.hidden ? r(e, t) : n(e, t)),
        a = !0,
        l = (e = 500) => {
          document.documentElement.classList.contains("lock") ? c(e) : d(e);
        },
        c = (e = 500) => {
          let t = document.querySelector("body");
          if (a) {
            let s = document.querySelectorAll("[data-lp]");
            setTimeout(() => {
              for (let e = 0; e < s.length; e++) {
                s[e].style.paddingRight = "0px";
              }
              (t.style.paddingRight = "0px"),
                document.documentElement.classList.remove("lock");
            }, e),
              (a = !1),
              setTimeout(function () {
                a = !0;
              }, e);
          }
        },
        d = (e = 500) => {
          let t = document.querySelector("body");
          if (a) {
            let s = document.querySelectorAll("[data-lp]");
            for (let e = 0; e < s.length; e++) {
              s[e].style.paddingRight =
                window.innerWidth -
                document.querySelector(".wrapper").offsetWidth +
                "px";
            }
            (t.style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px"),
              document.documentElement.classList.add("lock"),
              (a = !1),
              setTimeout(function () {
                a = !0;
              }, e);
          }
        };
      const u = (e = !1, s = !0) => new t({ logging: e, init: s });
      let h = (e, t = !1, s = 500, i = 0) => {
        const n = document.querySelector(e);
        if (n) {
          let e = "",
            r = 0;
          t &&
            ((e = "header.header"),
            (r = document.querySelector(e).offsetHeight));
          let o = {
            speedAsDuration: !0,
            speed: s,
            header: e,
            offset: i,
            easing: "easeOutQuad",
          };
          if (
            (document.documentElement.classList.contains("menu-open") &&
              (c(), document.documentElement.classList.remove("menu-open")),
            "undefined" != typeof SmoothScroll)
          )
            new SmoothScroll().animateScroll(n, "", o);
          else {
            let e = n.getBoundingClientRect().top + scrollY;
            window.scrollTo({ top: r ? e - r : e, behavior: "smooth" });
          }
        } else console.log(`[gotoBlock]: Такого блока нет на странице: ${e}`);
      };
      class p {
        constructor(e, t = null) {
          if (
            ((this.config = Object.assign({ init: !0, logging: !1 }, e)),
            (this.selectClasses = {
              classSelect: "select",
              classSelectBody: "select__body",
              classSelectTitle: "select__title",
              classSelectValue: "select__value",
              classSelectLabel: "select__label",
              classSelectInput: "select__input",
              classSelectText: "select__text",
              classSelectLink: "select__link",
              classSelectOptions: "select__options",
              classSelectOptionsScroll: "select__scroll",
              classSelectOption: "select__option",
              classSelectContent: "select__content",
              classSelectRow: "select__row",
              classSelectData: "select__asset",
              classSelectDisabled: "_select-disabled",
              classSelectTag: "_select-tag",
              classSelectOpen: "_select-open",
              classSelectActive: "_select-active",
              classSelectFocus: "_select-focus",
              classSelectMultiple: "_select-multiple",
              classSelectCheckBox: "_select-checkbox",
              classSelectOptionSelected: "_select-selected",
            }),
            (this._this = this),
            this.config.init)
          ) {
            const e = t
              ? document.querySelectorAll(t)
              : document.querySelectorAll("select");
            e.length
              ? (this.selectsInit(e),
                this.setLogging(`Проснулся, построил селектов: (${e.length})`))
              : this.setLogging("Нет ни одного select. Сплю...zzZZZzZZz...");
          }
        }
        getSelectClass(e) {
          return `.${e}`;
        }
        getSelectElement(e, t) {
          return {
            originalSelect: e.querySelector("select"),
            selectElement: e.querySelector(this.getSelectClass(t)),
          };
        }
        selectsInit(e) {
          e.forEach((e, t) => {
            this.selectInit(e, t + 1);
          }),
            document.addEventListener(
              "click",
              function (e) {
                this.selectsActions(e);
              }.bind(this)
            ),
            document.addEventListener(
              "keydown",
              function (e) {
                this.selectsActions(e);
              }.bind(this)
            ),
            document.addEventListener(
              "focusin",
              function (e) {
                this.selectsActions(e);
              }.bind(this)
            ),
            document.addEventListener(
              "focusout",
              function (e) {
                this.selectsActions(e);
              }.bind(this)
            );
        }
        selectInit(e, t) {
          const s = this;
          let i = document.createElement("div");
          if (
            (i.classList.add(this.selectClasses.classSelect),
            e.parentNode.insertBefore(i, e),
            i.appendChild(e),
            (e.hidden = !0),
            t && (e.dataset.id = t),
            i.insertAdjacentHTML(
              "beforeend",
              `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`
            ),
            this.selectBuild(e),
            this.getSelectPlaceholder(e) &&
              ((e.dataset.placeholder = this.getSelectPlaceholder(e).value),
              this.getSelectPlaceholder(e).label.show))
          ) {
            this.getSelectElement(
              i,
              this.selectClasses.classSelectTitle
            ).selectElement.insertAdjacentHTML(
              "afterbegin",
              `<span class="${this.selectClasses.classSelectLabel}">${
                this.getSelectPlaceholder(e).label.text
                  ? this.getSelectPlaceholder(e).label.text
                  : this.getSelectPlaceholder(e).value
              }</span>`
            );
          }
          (e.dataset.speed = e.dataset.speed ? e.dataset.speed : "150"),
            e.addEventListener("change", function (e) {
              s.selectChange(e);
            });
        }
        selectBuild(e) {
          const t = e.parentElement;
          (t.dataset.id = e.dataset.id),
            t.classList.add(
              e.getAttribute("class") ? `select_${e.getAttribute("class")}` : ""
            ),
            e.multiple
              ? t.classList.add(this.selectClasses.classSelectMultiple)
              : t.classList.remove(this.selectClasses.classSelectMultiple),
            e.hasAttribute("data-checkbox") && e.multiple
              ? t.classList.add(this.selectClasses.classSelectCheckBox)
              : t.classList.remove(this.selectClasses.classSelectCheckBox),
            this.setSelectTitleValue(t, e),
            this.setOptions(t, e),
            e.hasAttribute("data-search") && this.searchActions(t),
            e.hasAttribute("data-open") && this.selectAction(t),
            this.selectDisabled(t, e);
        }
        selectsActions(e) {
          const t = e.target,
            s = e.type;
          if (
            t.closest(this.getSelectClass(this.selectClasses.classSelect)) ||
            t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
          ) {
            const i = t.closest(".select")
                ? t.closest(".select")
                : document.querySelector(
                    `.${this.selectClasses.classSelect}[data-id="${
                      t.closest(
                        this.getSelectClass(this.selectClasses.classSelectTag)
                      ).dataset.selectId
                    }"]`
                  ),
              n = this.getSelectElement(i).originalSelect;
            if ("click" === s) {
              if (!n.disabled)
                if (
                  t.closest(
                    this.getSelectClass(this.selectClasses.classSelectTag)
                  )
                ) {
                  const e = t.closest(
                      this.getSelectClass(this.selectClasses.classSelectTag)
                    ),
                    s = document.querySelector(
                      `.${this.selectClasses.classSelect}[data-id="${e.dataset.selectId}"] .select__option[data-value="${e.dataset.value}"]`
                    );
                  this.optionAction(i, n, s);
                } else if (
                  t.closest(
                    this.getSelectClass(this.selectClasses.classSelectTitle)
                  )
                )
                  this.selectAction(i);
                else if (
                  t.closest(
                    this.getSelectClass(this.selectClasses.classSelectOption)
                  )
                ) {
                  const e = t.closest(
                    this.getSelectClass(this.selectClasses.classSelectOption)
                  );
                  this.optionAction(i, n, e);
                }
            } else
              "focusin" === s || "focusout" === s
                ? t.closest(
                    this.getSelectClass(this.selectClasses.classSelect)
                  ) &&
                  ("focusin" === s
                    ? i.classList.add(this.selectClasses.classSelectFocus)
                    : i.classList.remove(this.selectClasses.classSelectFocus))
                : "keydown" === s && "Escape" === e.code && this.selectsСlose();
          } else this.selectsСlose();
        }
        selectsСlose() {
          const e = document.querySelectorAll(
            `${this.getSelectClass(
              this.selectClasses.classSelect
            )}${this.getSelectClass(this.selectClasses.classSelectOpen)}`
          );
          e.length &&
            e.forEach((e) => {
              this.selectAction(e);
            });
        }
        selectAction(e) {
          const t = this.getSelectElement(e).originalSelect,
            s = this.getSelectElement(
              e,
              this.selectClasses.classSelectOptions
            ).selectElement;
          s.classList.contains("_slide") ||
            (e.classList.toggle(this.selectClasses.classSelectOpen),
            o(s, t.dataset.speed));
        }
        setSelectTitleValue(e, t) {
          const s = this.getSelectElement(
              e,
              this.selectClasses.classSelectBody
            ).selectElement,
            i = this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement;
          i && i.remove(),
            s.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(e, t));
        }
        getSelectTitleValue(e, t) {
          let s = this.getSelectedOptionsData(t, 2).html;
          if (
            (t.multiple &&
              t.hasAttribute("data-tags") &&
              ((s = this.getSelectedOptionsData(t)
                .elements.map(
                  (t) =>
                    `<span role="button" data-select-id="${
                      e.dataset.id
                    }" data-value="${
                      t.value
                    }" class="_select-tag">${this.getSelectElementContent(
                      t
                    )}</span>`
                )
                .join("")),
              t.dataset.tags &&
                document.querySelector(t.dataset.tags) &&
                ((document.querySelector(t.dataset.tags).innerHTML = s),
                t.hasAttribute("data-search") && (s = !1))),
            (s = s.length ? s : t.dataset.placeholder),
            this.getSelectedOptionsData(t).values.length
              ? e.classList.add(this.selectClasses.classSelectActive)
              : e.classList.remove(this.selectClasses.classSelectActive),
            t.hasAttribute("data-search"))
          )
            return `<div class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${s}" data-placeholder="${s}" class="${this.selectClasses.classSelectInput}"></span></div>`;
          {
            const e =
              this.getSelectedOptionsData(t).elements.length &&
              this.getSelectedOptionsData(t).elements[0].dataset.class
                ? ` ${this.getSelectedOptionsData(t).elements[0].dataset.class}`
                : "";
            return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><span class="${this.selectClasses.classSelectContent}${e}">${s}</span></span></button>`;
          }
        }
        getSelectElementContent(e) {
          const t = e.dataset.asset ? `${e.dataset.asset}` : "",
            s = t.indexOf("img") >= 0 ? `<img src="${t}" alt="">` : t;
          let i = "";
          return (
            (i += t
              ? `<span class="${this.selectClasses.classSelectRow}">`
              : ""),
            (i += t
              ? `<span class="${this.selectClasses.classSelectData}">`
              : ""),
            (i += t ? s : ""),
            (i += t ? "</span>" : ""),
            (i += t
              ? `<span class="${this.selectClasses.classSelectText}">`
              : ""),
            (i += e.textContent),
            (i += t ? "</span>" : ""),
            (i += t ? "</span>" : ""),
            i
          );
        }
        getSelectPlaceholder(e) {
          const t = Array.from(e.options).find((e) => !e.value);
          if (t)
            return {
              value: t.textContent,
              show: t.hasAttribute("data-show"),
              label: {
                show: t.hasAttribute("data-label"),
                text: t.dataset.label,
              },
            };
        }
        getSelectedOptionsData(e, t) {
          let s = [];
          return (
            e.multiple
              ? (s = Array.from(e.options)
                  .filter((e) => e.value)
                  .filter((e) => e.selected))
              : s.push(e.options[e.selectedIndex]),
            {
              elements: s.map((e) => e),
              values: s.filter((e) => e.value).map((e) => e.value),
              html: s.map((e) => this.getSelectElementContent(e)),
            }
          );
        }
        getOptions(e) {
          let t = e.hasAttribute("data-scroll") ? "data-simplebar" : "",
            s = e.dataset.scroll
              ? `style="max-height:${e.dataset.scroll}px"`
              : "",
            i = Array.from(e.options);
          if (i.length > 0) {
            let n = "";
            return (
              ((this.getSelectPlaceholder(e) &&
                !this.getSelectPlaceholder(e).show) ||
                e.multiple) &&
                (i = i.filter((e) => e.value)),
              (n += t
                ? `<div ${t} ${s} class="${this.selectClasses.classSelectOptionsScroll}">`
                : ""),
              i.forEach((t) => {
                n += this.getOption(t, e);
              }),
              (n += t ? "</div>" : ""),
              n
            );
          }
        }
        getOption(e, t) {
          const s =
              e.selected && t.multiple
                ? ` ${this.selectClasses.classSelectOptionSelected}`
                : "",
            i =
              e.selected && !t.hasAttribute("data-show-selected")
                ? "hidden"
                : "",
            n = e.dataset.class ? ` ${e.dataset.class}` : "",
            r = !!e.dataset.href && e.dataset.href,
            o = e.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
          let a = "";
          return (
            (a += r
              ? `<a ${o} ${i} href="${r}" data-value="${e.value}" class="${this.selectClasses.classSelectOption}${n}${s}">`
              : `<button ${i} class="${this.selectClasses.classSelectOption}${n}${s}" data-value="${e.value}" type="button">`),
            (a += this.getSelectElementContent(e)),
            (a += r ? "</a>" : "</button>"),
            a
          );
        }
        setOptions(e, t) {
          this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement.innerHTML = this.getOptions(t);
        }
        optionAction(e, t, s) {
          if (t.multiple) {
            s.classList.toggle(this.selectClasses.classSelectOptionSelected);
            this.getSelectedOptionsData(t).elements.forEach((e) => {
              e.removeAttribute("selected");
            });
            e.querySelectorAll(
              this.getSelectClass(this.selectClasses.classSelectOptionSelected)
            ).forEach((e) => {
              t.querySelector(
                `option[value="${e.dataset.value}"]`
              ).setAttribute("selected", "selected");
            });
          } else
            t.hasAttribute("data-show-selected") ||
              (e.querySelector(
                `${this.getSelectClass(
                  this.selectClasses.classSelectOption
                )}[hidden]`
              ) &&
                (e.querySelector(
                  `${this.getSelectClass(
                    this.selectClasses.classSelectOption
                  )}[hidden]`
                ).hidden = !1),
              (s.hidden = !0)),
              (t.value = s.hasAttribute("data-value")
                ? s.dataset.value
                : s.textContent),
              this.selectAction(e);
          this.setSelectTitleValue(e, t), this.setSelectChange(t);
        }
        selectChange(e) {
          const t = e.target;
          this.selectBuild(t), this.setSelectChange(t);
        }
        setSelectChange(e) {
          if (
            (e.hasAttribute("data-validate") && m.validateInput(e),
            e.hasAttribute("data-submit") && e.value)
          ) {
            let t = document.createElement("button");
            (t.type = "submit"),
              e.closest("form").append(t),
              t.click(),
              t.remove();
          }
          const t = e.parentElement;
          this.selectCallback(t, e);
        }
        selectDisabled(e, t) {
          t.disabled
            ? (e.classList.add(this.selectClasses.classSelectDisabled),
              (this.getSelectElement(
                e,
                this.selectClasses.classSelectTitle
              ).selectElement.disabled = !0))
            : (e.classList.remove(this.selectClasses.classSelectDisabled),
              (this.getSelectElement(
                e,
                this.selectClasses.classSelectTitle
              ).selectElement.disabled = !1));
        }
        searchActions(e) {
          this.getSelectElement(e).originalSelect;
          const t = this.getSelectElement(
              e,
              this.selectClasses.classSelectInput
            ).selectElement,
            s = this.getSelectElement(
              e,
              this.selectClasses.classSelectOptions
            ).selectElement,
            i = s.querySelectorAll(`.${this.selectClasses.classSelectOption}`),
            n = this;
          t.addEventListener("input", function () {
            i.forEach((e) => {
              e.textContent.toUpperCase().indexOf(t.value.toUpperCase()) >= 0
                ? (e.hidden = !1)
                : (e.hidden = !0);
            }),
              !0 === s.hidden && n.selectAction(e);
          });
        }
        selectCallback(e, t) {
          document.dispatchEvent(
            new CustomEvent("selectCallback", { detail: { select: t } })
          );
        }
        setLogging(e) {
          this.config.logging && console.log(`[select]: ${e}`);
        }
      }
      const f = u(),
        g = { inputMaskModule: null, selectModule: null };
      let m = {
        getErrors(e) {
          let t = 0,
            s = e.querySelectorAll("*[data-required]");
          return (
            s.length &&
              s.forEach((e) => {
                (null === e.offsetParent && "SELECT" !== e.tagName) ||
                  e.disabled ||
                  (t += this.validateInput(e));
              }),
            t
          );
        },
        validateInput(e) {
          let t = 0;
          return (
            "email" === e.dataset.required
              ? ((e.value = e.value.replace(" ", "")),
                this.emailTest(e)
                  ? (this.addError(e), t++)
                  : this.removeError(e))
              : ("checkbox" !== e.type || e.checked) && e.value
              ? this.removeError(e)
              : (this.addError(e), t++),
            t
          );
        },
        addError(e) {
          e.classList.add("_form-error"),
            e.parentElement.classList.add("_form-error");
          let t = e.parentElement.querySelector(".form__error");
          t && e.parentElement.removeChild(t),
            e.dataset.error &&
              e.parentElement.insertAdjacentHTML(
                "beforeend",
                `<div class="form__error">${e.dataset.error}</div>`
              );
        },
        removeError(e) {
          e.classList.remove("_form-error"),
            e.parentElement.classList.remove("_form-error"),
            e.parentElement.querySelector(".form__error") &&
              e.parentElement.removeChild(
                e.parentElement.querySelector(".form__error")
              );
        },
        formClean(e) {
          e.reset(),
            setTimeout(() => {
              let t = e.querySelectorAll("input,textarea");
              for (let e = 0; e < t.length; e++) {
                const s = t[e];
                s.parentElement.classList.remove("_form-focus"),
                  s.classList.remove("_form-focus"),
                  m.removeError(s),
                  (s.value = s.dataset.placeholder);
              }
              let s = e.querySelectorAll(".checkbox__input");
              if (s.length > 0)
                for (let e = 0; e < s.length; e++) {
                  s[e].checked = !1;
                }
              if (g.selectModule) {
                let t = e.querySelectorAll(".select");
                if (t.length)
                  for (let e = 0; e < t.length; e++) {
                    const s = t[e].querySelector("select");
                    g.selectModule.selectBuild(s);
                  }
              }
            }, 0);
        },
        emailTest: (e) =>
          !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
      };
      var v = function () {
        return (
          (v =
            Object.assign ||
            function (e) {
              for (var t, s = 1, i = arguments.length; s < i; s++)
                for (var n in (t = arguments[s]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }),
          v.apply(this, arguments)
        );
      };
      var y = "lgAfterAppendSlide",
        b = "lgInit",
        w = "lgHasVideo",
        x = "lgContainerResize",
        S = "lgUpdateSlides",
        E = "lgAfterAppendSubHtml",
        C = "lgBeforeOpen",
        T = "lgAfterOpen",
        O = "lgSlideItemLoad",
        L = "lgBeforeSlide",
        A = "lgAfterSlide",
        I = "lgPosterClick",
        k = "lgDragStart",
        _ = "lgDragMove",
        M = "lgDragEnd",
        P = "lgBeforeNextSlide",
        $ = "lgBeforePrevSlide",
        z = "lgBeforeClose",
        D = "lgAfterClose",
        B = {
          mode: "lg-slide",
          easing: "ease",
          speed: 400,
          licenseKey: "0000-0000-000-0000",
          height: "100%",
          width: "100%",
          addClass: "",
          startClass: "lg-start-zoom",
          backdropDuration: 300,
          container: "",
          startAnimationDuration: 400,
          zoomFromOrigin: !0,
          hideBarsDelay: 0,
          showBarsAfter: 1e4,
          slideDelay: 0,
          supportLegacyBrowser: !0,
          allowMediaOverlap: !1,
          videoMaxSize: "1280-720",
          loadYouTubePoster: !0,
          defaultCaptionHeight: 0,
          ariaLabelledby: "",
          ariaDescribedby: "",
          resetScrollPosition: !0,
          hideScrollbar: !1,
          closable: !0,
          swipeToClose: !0,
          closeOnTap: !0,
          showCloseIcon: !0,
          showMaximizeIcon: !1,
          loop: !0,
          escKey: !0,
          keyPress: !0,
          trapFocus: !0,
          controls: !0,
          slideEndAnimation: !0,
          hideControlOnEnd: !1,
          mousewheel: !1,
          getCaptionFromTitleOrAlt: !0,
          appendSubHtmlTo: ".lg-sub-html",
          subHtmlSelectorRelative: !1,
          preload: 2,
          numberOfSlideItemsInDom: 10,
          selector: "",
          selectWithin: "",
          nextHtml: "",
          prevHtml: "",
          index: 0,
          iframeWidth: "100%",
          iframeHeight: "100%",
          iframeMaxWidth: "100%",
          iframeMaxHeight: "100%",
          download: !0,
          counter: !0,
          appendCounterTo: ".lg-toolbar",
          swipeThreshold: 50,
          enableSwipe: !0,
          enableDrag: !0,
          dynamic: !1,
          dynamicEl: [],
          extraProps: [],
          exThumbImage: "",
          isMobile: void 0,
          mobileSettings: { controls: !1, showCloseIcon: !1, download: !1 },
          plugins: [],
          strings: {
            closeGallery: "Close gallery",
            toggleMaximize: "Toggle maximize",
            previousSlide: "Previous slide",
            nextSlide: "Next slide",
            download: "Download",
            playVideo: "Play video",
          },
        };
      var N = (function () {
        function e(e) {
          return (
            (this.cssVenderPrefixes = [
              "TransitionDuration",
              "TransitionTimingFunction",
              "Transform",
              "Transition",
            ]),
            (this.selector = this._getSelector(e)),
            (this.firstElement = this._getFirstEl()),
            this
          );
        }
        return (
          (e.generateUUID = function () {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
              /[xy]/g,
              function (e) {
                var t = (16 * Math.random()) | 0;
                return ("x" == e ? t : (3 & t) | 8).toString(16);
              }
            );
          }),
          (e.prototype._getSelector = function (e, t) {
            return (
              void 0 === t && (t = document),
              "string" != typeof e
                ? e
                : ((t = t || document),
                  "#" === e.substring(0, 1)
                    ? t.querySelector(e)
                    : t.querySelectorAll(e))
            );
          }),
          (e.prototype._each = function (e) {
            return this.selector
              ? (void 0 !== this.selector.length
                  ? [].forEach.call(this.selector, e)
                  : e(this.selector, 0),
                this)
              : this;
          }),
          (e.prototype._setCssVendorPrefix = function (e, t, s) {
            var i = t.replace(/-([a-z])/gi, function (e, t) {
              return t.toUpperCase();
            });
            -1 !== this.cssVenderPrefixes.indexOf(i)
              ? ((e.style[i.charAt(0).toLowerCase() + i.slice(1)] = s),
                (e.style["webkit" + i] = s),
                (e.style["moz" + i] = s),
                (e.style["ms" + i] = s),
                (e.style["o" + i] = s))
              : (e.style[i] = s);
          }),
          (e.prototype._getFirstEl = function () {
            return this.selector && void 0 !== this.selector.length
              ? this.selector[0]
              : this.selector;
          }),
          (e.prototype.isEventMatched = function (e, t) {
            var s = t.split(".");
            return e
              .split(".")
              .filter(function (e) {
                return e;
              })
              .every(function (e) {
                return -1 !== s.indexOf(e);
              });
          }),
          (e.prototype.attr = function (e, t) {
            return void 0 === t
              ? this.firstElement
                ? this.firstElement.getAttribute(e)
                : ""
              : (this._each(function (s) {
                  s.setAttribute(e, t);
                }),
                this);
          }),
          (e.prototype.find = function (e) {
            return j(this._getSelector(e, this.selector));
          }),
          (e.prototype.first = function () {
            return this.selector && void 0 !== this.selector.length
              ? j(this.selector[0])
              : j(this.selector);
          }),
          (e.prototype.eq = function (e) {
            return j(this.selector[e]);
          }),
          (e.prototype.parent = function () {
            return j(this.selector.parentElement);
          }),
          (e.prototype.get = function () {
            return this._getFirstEl();
          }),
          (e.prototype.removeAttr = function (e) {
            var t = e.split(" ");
            return (
              this._each(function (e) {
                t.forEach(function (t) {
                  return e.removeAttribute(t);
                });
              }),
              this
            );
          }),
          (e.prototype.wrap = function (e) {
            if (!this.firstElement) return this;
            var t = document.createElement("div");
            return (
              (t.className = e),
              this.firstElement.parentNode.insertBefore(t, this.firstElement),
              this.firstElement.parentNode.removeChild(this.firstElement),
              t.appendChild(this.firstElement),
              this
            );
          }),
          (e.prototype.addClass = function (e) {
            return (
              void 0 === e && (e = ""),
              this._each(function (t) {
                e.split(" ").forEach(function (e) {
                  e && t.classList.add(e);
                });
              }),
              this
            );
          }),
          (e.prototype.removeClass = function (e) {
            return (
              this._each(function (t) {
                e.split(" ").forEach(function (e) {
                  e && t.classList.remove(e);
                });
              }),
              this
            );
          }),
          (e.prototype.hasClass = function (e) {
            return (
              !!this.firstElement && this.firstElement.classList.contains(e)
            );
          }),
          (e.prototype.hasAttribute = function (e) {
            return !!this.firstElement && this.firstElement.hasAttribute(e);
          }),
          (e.prototype.toggleClass = function (e) {
            return this.firstElement
              ? (this.hasClass(e) ? this.removeClass(e) : this.addClass(e),
                this)
              : this;
          }),
          (e.prototype.css = function (e, t) {
            var s = this;
            return (
              this._each(function (i) {
                s._setCssVendorPrefix(i, e, t);
              }),
              this
            );
          }),
          (e.prototype.on = function (t, s) {
            var i = this;
            return this.selector
              ? (t.split(" ").forEach(function (t) {
                  Array.isArray(e.eventListeners[t]) ||
                    (e.eventListeners[t] = []),
                    e.eventListeners[t].push(s),
                    i.selector.addEventListener(t.split(".")[0], s);
                }),
                this)
              : this;
          }),
          (e.prototype.once = function (e, t) {
            var s = this;
            return (
              this.on(e, function () {
                s.off(e), t(e);
              }),
              this
            );
          }),
          (e.prototype.off = function (t) {
            var s = this;
            return this.selector
              ? (Object.keys(e.eventListeners).forEach(function (i) {
                  s.isEventMatched(t, i) &&
                    (e.eventListeners[i].forEach(function (e) {
                      s.selector.removeEventListener(i.split(".")[0], e);
                    }),
                    (e.eventListeners[i] = []));
                }),
                this)
              : this;
          }),
          (e.prototype.trigger = function (e, t) {
            if (!this.firstElement) return this;
            var s = new CustomEvent(e.split(".")[0], { detail: t || null });
            return this.firstElement.dispatchEvent(s), this;
          }),
          (e.prototype.load = function (e) {
            var t = this;
            return (
              fetch(e)
                .then(function (e) {
                  return e.text();
                })
                .then(function (e) {
                  t.selector.innerHTML = e;
                }),
              this
            );
          }),
          (e.prototype.html = function (e) {
            return void 0 === e
              ? this.firstElement
                ? this.firstElement.innerHTML
                : ""
              : (this._each(function (t) {
                  t.innerHTML = e;
                }),
                this);
          }),
          (e.prototype.append = function (e) {
            return (
              this._each(function (t) {
                "string" == typeof e
                  ? t.insertAdjacentHTML("beforeend", e)
                  : t.appendChild(e);
              }),
              this
            );
          }),
          (e.prototype.prepend = function (e) {
            return (
              this._each(function (t) {
                t.insertAdjacentHTML("afterbegin", e);
              }),
              this
            );
          }),
          (e.prototype.remove = function () {
            return (
              this._each(function (e) {
                e.parentNode.removeChild(e);
              }),
              this
            );
          }),
          (e.prototype.empty = function () {
            return (
              this._each(function (e) {
                e.innerHTML = "";
              }),
              this
            );
          }),
          (e.prototype.scrollTop = function (e) {
            return void 0 !== e
              ? ((document.body.scrollTop = e),
                (document.documentElement.scrollTop = e),
                this)
              : window.pageYOffset ||
                  document.documentElement.scrollTop ||
                  document.body.scrollTop ||
                  0;
          }),
          (e.prototype.scrollLeft = function (e) {
            return void 0 !== e
              ? ((document.body.scrollLeft = e),
                (document.documentElement.scrollLeft = e),
                this)
              : window.pageXOffset ||
                  document.documentElement.scrollLeft ||
                  document.body.scrollLeft ||
                  0;
          }),
          (e.prototype.offset = function () {
            if (!this.firstElement) return { left: 0, top: 0 };
            var e = this.firstElement.getBoundingClientRect(),
              t = j("body").style().marginLeft;
            return {
              left: e.left - parseFloat(t) + this.scrollLeft(),
              top: e.top + this.scrollTop(),
            };
          }),
          (e.prototype.style = function () {
            return this.firstElement
              ? this.firstElement.currentStyle ||
                  window.getComputedStyle(this.firstElement)
              : {};
          }),
          (e.prototype.width = function () {
            var e = this.style();
            return (
              this.firstElement.clientWidth -
              parseFloat(e.paddingLeft) -
              parseFloat(e.paddingRight)
            );
          }),
          (e.prototype.height = function () {
            var e = this.style();
            return (
              this.firstElement.clientHeight -
              parseFloat(e.paddingTop) -
              parseFloat(e.paddingBottom)
            );
          }),
          (e.eventListeners = {}),
          e
        );
      })();
      function j(e) {
        return (
          (function () {
            if ("function" == typeof window.CustomEvent) return !1;
            window.CustomEvent = function (e, t) {
              t = t || { bubbles: !1, cancelable: !1, detail: null };
              var s = document.createEvent("CustomEvent");
              return s.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), s;
            };
          })(),
          Element.prototype.matches ||
            (Element.prototype.matches =
              Element.prototype.msMatchesSelector ||
              Element.prototype.webkitMatchesSelector),
          new N(e)
        );
      }
      var R = [
        "src",
        "sources",
        "subHtml",
        "subHtmlUrl",
        "html",
        "video",
        "poster",
        "slideName",
        "responsive",
        "srcset",
        "sizes",
        "iframe",
        "downloadUrl",
        "download",
        "width",
        "facebookShareUrl",
        "tweetText",
        "iframeTitle",
        "twitterShareUrl",
        "pinterestShareUrl",
        "pinterestText",
        "fbHtml",
        "disqusIdentifier",
        "disqusUrl",
      ];
      function W(e) {
        return "href" === e
          ? "src"
          : (e = (e =
              (e = e.replace("data-", "")).charAt(0).toLowerCase() +
              e.slice(1)).replace(/-([a-z])/g, function (e) {
              return e[1].toUpperCase();
            }));
      }
      var G = function (e, t, s, i) {
          void 0 === s && (s = 0);
          var n = j(e).attr("data-lg-size") || i;
          if (n) {
            var r = n.split(",");
            if (r[1])
              for (var o = window.innerWidth, a = 0; a < r.length; a++) {
                var l = r[a];
                if (parseInt(l.split("-")[2], 10) > o) {
                  n = l;
                  break;
                }
                a === r.length - 1 && (n = l);
              }
            var c = n.split("-"),
              d = parseInt(c[0], 10),
              u = parseInt(c[1], 10),
              h = t.width(),
              p = t.height() - s,
              f = Math.min(h, d),
              g = Math.min(p, u),
              m = Math.min(f / d, g / u);
            return { width: d * m, height: u * m };
          }
        },
        H = function (e, t, s, i, n) {
          if (n) {
            var r = j(e).find("img").first();
            if (r.get()) {
              var o = t.get().getBoundingClientRect(),
                a = o.width,
                l = t.height() - (s + i),
                c = r.width(),
                d = r.height(),
                u = r.style(),
                h =
                  (a - c) / 2 -
                  r.offset().left +
                  (parseFloat(u.paddingLeft) || 0) +
                  (parseFloat(u.borderLeft) || 0) +
                  j(window).scrollLeft() +
                  o.left,
                p =
                  (l - d) / 2 -
                  r.offset().top +
                  (parseFloat(u.paddingTop) || 0) +
                  (parseFloat(u.borderTop) || 0) +
                  j(window).scrollTop() +
                  s;
              return (
                "translate3d(" +
                (h *= -1) +
                "px, " +
                (p *= -1) +
                "px, 0) scale3d(" +
                c / n.width +
                ", " +
                d / n.height +
                ", 1)"
              );
            }
          }
        },
        F = function (e, t, s, i, n, r) {
          return (
            '<div class="lg-video-cont lg-has-iframe" style="width:' +
            e +
            "; max-width:" +
            s +
            "; height: " +
            t +
            "; max-height:" +
            i +
            '">\n                    <iframe class="lg-object" frameborder="0" ' +
            (r ? 'title="' + r + '"' : "") +
            ' src="' +
            n +
            '"  allowfullscreen="true"></iframe>\n                </div>'
          );
        },
        V = function (e, t, s, i, n, r) {
          var o =
              "<img " +
              s +
              " " +
              (i ? 'srcset="' + i + '"' : "") +
              "  " +
              (n ? 'sizes="' + n + '"' : "") +
              ' class="lg-object lg-image" data-index="' +
              e +
              '" src="' +
              t +
              '" />',
            a = "";
          r &&
            (a = ("string" == typeof r ? JSON.parse(r) : r).map(function (e) {
              var t = "";
              return (
                Object.keys(e).forEach(function (s) {
                  t += " " + s + '="' + e[s] + '"';
                }),
                "<source " + t + "></source>"
              );
            }));
          return "" + a + o;
        },
        q = function (e) {
          for (var t = [], s = [], i = "", n = 0; n < e.length; n++) {
            var r = e[n].split(" ");
            "" === r[0] && r.splice(0, 1), s.push(r[0]), t.push(r[1]);
          }
          for (var o = window.innerWidth, a = 0; a < t.length; a++)
            if (parseInt(t[a], 10) > o) {
              i = s[a];
              break;
            }
          return i;
        },
        X = function (e) {
          return !!e && !!e.complete && 0 !== e.naturalWidth;
        },
        Y = function (e, t, s, i, n) {
          return (
            '<div class="lg-video-cont ' +
            (n && n.youtube
              ? "lg-has-youtube"
              : n && n.vimeo
              ? "lg-has-vimeo"
              : "lg-has-html5") +
            '" style="' +
            s +
            '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="' +
            i +
            '"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>' +
            i +
            '</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' +
            (t || "") +
            '\n            <img class="lg-object lg-video-poster" src="' +
            e +
            '" />\n        </div>'
          );
        },
        U = function (e) {
          var t = e.querySelectorAll(
            'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
          );
          return [].filter.call(t, function (e) {
            var t = window.getComputedStyle(e);
            return "none" !== t.display && "hidden" !== t.visibility;
          });
        },
        K = function (e, t, s, i) {
          var n = [],
            r = (function () {
              for (var e = 0, t = 0, s = arguments.length; t < s; t++)
                e += arguments[t].length;
              var i = Array(e),
                n = 0;
              for (t = 0; t < s; t++)
                for (var r = arguments[t], o = 0, a = r.length; o < a; o++, n++)
                  i[n] = r[o];
              return i;
            })(R, t);
          return (
            [].forEach.call(e, function (e) {
              for (var t = {}, o = 0; o < e.attributes.length; o++) {
                var a = e.attributes[o];
                if (a.specified) {
                  var l = W(a.name),
                    c = "";
                  r.indexOf(l) > -1 && (c = l), c && (t[c] = a.value);
                }
              }
              var d = j(e),
                u = d.find("img").first().attr("alt"),
                h = d.attr("title"),
                p = i ? d.attr(i) : d.find("img").first().attr("src");
              (t.thumb = p),
                s && !t.subHtml && (t.subHtml = h || u || ""),
                (t.alt = u || h || ""),
                n.push(t);
            }),
            n
          );
        },
        Z = function () {
          return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        },
        J = function (e, t, s) {
          if (!e)
            return t
              ? { html5: !0 }
              : void console.error(
                  "lightGallery :- data-src is not provided on slide item " +
                    (s + 1) +
                    ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/"
                );
          var i = e.match(
              /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i
            ),
            n = e.match(
              /\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i
            ),
            r = e.match(
              /https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/
            );
          return i
            ? { youtube: i }
            : n
            ? { vimeo: n }
            : r
            ? { wistia: r }
            : void 0;
        },
        Q = 0,
        ee = (function () {
          function e(e, t) {
            if (
              ((this.lgOpened = !1),
              (this.index = 0),
              (this.plugins = []),
              (this.lGalleryOn = !1),
              (this.lgBusy = !1),
              (this.currentItemsInDom = []),
              (this.prevScrollTop = 0),
              (this.bodyPaddingRight = 0),
              (this.isDummyImageRemoved = !1),
              (this.dragOrSwipeEnabled = !1),
              (this.mediaContainerPosition = { top: 0, bottom: 0 }),
              !e)
            )
              return this;
            if (
              (Q++,
              (this.lgId = Q),
              (this.el = e),
              (this.LGel = j(e)),
              this.generateSettings(t),
              this.buildModules(),
              this.settings.dynamic &&
                void 0 !== this.settings.dynamicEl &&
                !Array.isArray(this.settings.dynamicEl))
            )
              throw "When using dynamic mode, you must also define dynamicEl as an Array.";
            return (
              (this.galleryItems = this.getItems()),
              this.normalizeSettings(),
              this.init(),
              this.validateLicense(),
              this
            );
          }
          return (
            (e.prototype.generateSettings = function (e) {
              if (
                ((this.settings = v(v({}, B), e)),
                this.settings.isMobile &&
                "function" == typeof this.settings.isMobile
                  ? this.settings.isMobile()
                  : Z())
              ) {
                var t = v(
                  v({}, this.settings.mobileSettings),
                  this.settings.mobileSettings
                );
                this.settings = v(v({}, this.settings), t);
              }
            }),
            (e.prototype.normalizeSettings = function () {
              this.settings.slideEndAnimation &&
                (this.settings.hideControlOnEnd = !1),
                this.settings.closable || (this.settings.swipeToClose = !1),
                (this.zoomFromOrigin = this.settings.zoomFromOrigin),
                this.settings.dynamic && (this.zoomFromOrigin = !1),
                this.settings.container ||
                  (this.settings.container = document.body),
                (this.settings.preload = Math.min(
                  this.settings.preload,
                  this.galleryItems.length
                ));
            }),
            (e.prototype.init = function () {
              var e = this;
              this.addSlideVideoInfo(this.galleryItems),
                this.buildStructure(),
                this.LGel.trigger(b, { instance: this }),
                this.settings.keyPress && this.keyPress(),
                setTimeout(function () {
                  e.enableDrag(), e.enableSwipe(), e.triggerPosterClick();
                }, 50),
                this.arrow(),
                this.settings.mousewheel && this.mousewheel(),
                this.settings.dynamic || this.openGalleryOnItemClick();
            }),
            (e.prototype.openGalleryOnItemClick = function () {
              for (
                var e = this,
                  t = function (t) {
                    var i = s.items[t],
                      n = j(i),
                      r = N.generateUUID();
                    n.attr("data-lg-id", r).on(
                      "click.lgcustom-item-" + r,
                      function (s) {
                        s.preventDefault();
                        var n = e.settings.index || t;
                        e.openGallery(n, i);
                      }
                    );
                  },
                  s = this,
                  i = 0;
                i < this.items.length;
                i++
              )
                t(i);
            }),
            (e.prototype.buildModules = function () {
              var e = this;
              this.settings.plugins.forEach(function (t) {
                e.plugins.push(new t(e, j));
              });
            }),
            (e.prototype.validateLicense = function () {
              this.settings.licenseKey
                ? "0000-0000-000-0000" === this.settings.licenseKey &&
                  console.warn(
                    "lightGallery: " +
                      this.settings.licenseKey +
                      " license key is not valid for production use"
                  )
                : console.error("Please provide a valid license key");
            }),
            (e.prototype.getSlideItem = function (e) {
              return j(this.getSlideItemId(e));
            }),
            (e.prototype.getSlideItemId = function (e) {
              return "#lg-item-" + this.lgId + "-" + e;
            }),
            (e.prototype.getIdName = function (e) {
              return e + "-" + this.lgId;
            }),
            (e.prototype.getElementById = function (e) {
              return j("#" + this.getIdName(e));
            }),
            (e.prototype.manageSingleSlideClassName = function () {
              this.galleryItems.length < 2
                ? this.outer.addClass("lg-single-item")
                : this.outer.removeClass("lg-single-item");
            }),
            (e.prototype.buildStructure = function () {
              var e = this;
              if (!(this.$container && this.$container.get())) {
                var t = "",
                  s = "";
                this.settings.controls &&
                  (t =
                    '<button type="button" id="' +
                    this.getIdName("lg-prev") +
                    '" aria-label="' +
                    this.settings.strings.previousSlide +
                    '" class="lg-prev lg-icon"> ' +
                    this.settings.prevHtml +
                    ' </button>\n                <button type="button" id="' +
                    this.getIdName("lg-next") +
                    '" aria-label="' +
                    this.settings.strings.nextSlide +
                    '" class="lg-next lg-icon"> ' +
                    this.settings.nextHtml +
                    " </button>"),
                  ".lg-item" !== this.settings.appendSubHtmlTo &&
                    (s =
                      '<div class="lg-sub-html" role="status" aria-live="polite"></div>');
                var i = "";
                this.settings.allowMediaOverlap && (i += "lg-media-overlap ");
                var n = this.settings.ariaLabelledby
                    ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"'
                    : "",
                  r = this.settings.ariaDescribedby
                    ? 'aria-describedby="' + this.settings.ariaDescribedby + '"'
                    : "",
                  o =
                    "lg-container " +
                    this.settings.addClass +
                    " " +
                    (document.body !== this.settings.container
                      ? "lg-inline"
                      : ""),
                  a =
                    this.settings.closable && this.settings.showCloseIcon
                      ? '<button type="button" aria-label="' +
                        this.settings.strings.closeGallery +
                        '" id="' +
                        this.getIdName("lg-close") +
                        '" class="lg-close lg-icon"></button>'
                      : "",
                  l = this.settings.showMaximizeIcon
                    ? '<button type="button" aria-label="' +
                      this.settings.strings.toggleMaximize +
                      '" id="' +
                      this.getIdName("lg-maximize") +
                      '" class="lg-maximize lg-icon"></button>'
                    : "",
                  c =
                    '\n        <div class="' +
                    o +
                    '" id="' +
                    this.getIdName("lg-container") +
                    '" tabindex="-1" aria-modal="true" ' +
                    n +
                    " " +
                    r +
                    ' role="dialog"\n        >\n            <div id="' +
                    this.getIdName("lg-backdrop") +
                    '" class="lg-backdrop"></div>\n\n            <div id="' +
                    this.getIdName("lg-outer") +
                    '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' +
                    i +
                    ' ">\n\n              <div id="' +
                    this.getIdName("lg-content") +
                    '" class="lg-content">\n                <div id="' +
                    this.getIdName("lg-inner") +
                    '" class="lg-inner">\n                </div>\n                ' +
                    t +
                    '\n              </div>\n                <div id="' +
                    this.getIdName("lg-toolbar") +
                    '" class="lg-toolbar lg-group">\n                    ' +
                    l +
                    "\n                    " +
                    a +
                    "\n                    </div>\n                    " +
                    (".lg-outer" === this.settings.appendSubHtmlTo ? s : "") +
                    '\n                <div id="' +
                    this.getIdName("lg-components") +
                    '" class="lg-components">\n                    ' +
                    (".lg-sub-html" === this.settings.appendSubHtmlTo
                      ? s
                      : "") +
                    "\n                </div>\n            </div>\n        </div>\n        ";
                j(this.settings.container).append(c),
                  document.body !== this.settings.container &&
                    j(this.settings.container).css("position", "relative"),
                  (this.outer = this.getElementById("lg-outer")),
                  (this.$lgComponents = this.getElementById("lg-components")),
                  (this.$backdrop = this.getElementById("lg-backdrop")),
                  (this.$container = this.getElementById("lg-container")),
                  (this.$inner = this.getElementById("lg-inner")),
                  (this.$content = this.getElementById("lg-content")),
                  (this.$toolbar = this.getElementById("lg-toolbar")),
                  this.$backdrop.css(
                    "transition-duration",
                    this.settings.backdropDuration + "ms"
                  );
                var d = this.settings.mode + " ";
                this.manageSingleSlideClassName(),
                  this.settings.enableDrag && (d += "lg-grab "),
                  this.outer.addClass(d),
                  this.$inner.css(
                    "transition-timing-function",
                    this.settings.easing
                  ),
                  this.$inner.css(
                    "transition-duration",
                    this.settings.speed + "ms"
                  ),
                  this.settings.download &&
                    this.$toolbar.append(
                      '<a id="' +
                        this.getIdName("lg-download") +
                        '" target="_blank" rel="noopener" aria-label="' +
                        this.settings.strings.download +
                        '" download class="lg-download lg-icon"></a>'
                    ),
                  this.counter(),
                  j(window).on(
                    "resize.lg.global" +
                      this.lgId +
                      " orientationchange.lg.global" +
                      this.lgId,
                    function () {
                      e.refreshOnResize();
                    }
                  ),
                  this.hideBars(),
                  this.manageCloseGallery(),
                  this.toggleMaximize(),
                  this.initModules();
              }
            }),
            (e.prototype.refreshOnResize = function () {
              if (this.lgOpened) {
                var e = this.galleryItems[this.index].__slideVideoInfo;
                this.mediaContainerPosition = this.getMediaContainerPosition();
                var t = this.mediaContainerPosition,
                  s = t.top,
                  i = t.bottom;
                if (
                  ((this.currentImageSize = G(
                    this.items[this.index],
                    this.outer,
                    s + i,
                    e && this.settings.videoMaxSize
                  )),
                  e && this.resizeVideoSlide(this.index, this.currentImageSize),
                  this.zoomFromOrigin && !this.isDummyImageRemoved)
                ) {
                  var n = this.getDummyImgStyles(this.currentImageSize);
                  this.outer
                    .find(".lg-current .lg-dummy-img")
                    .first()
                    .attr("style", n);
                }
                this.LGel.trigger(x);
              }
            }),
            (e.prototype.resizeVideoSlide = function (e, t) {
              var s = this.getVideoContStyle(t);
              this.getSlideItem(e).find(".lg-video-cont").attr("style", s);
            }),
            (e.prototype.updateSlides = function (e, t) {
              if (
                (this.index > e.length - 1 && (this.index = e.length - 1),
                1 === e.length && (this.index = 0),
                e.length)
              ) {
                var s = this.galleryItems[t].src;
                (this.galleryItems = e),
                  this.updateControls(),
                  this.$inner.empty(),
                  (this.currentItemsInDom = []);
                var i = 0;
                this.galleryItems.some(function (e, t) {
                  return e.src === s && ((i = t), !0);
                }),
                  (this.currentItemsInDom = this.organizeSlideItems(i, -1)),
                  this.loadContent(i, !0),
                  this.getSlideItem(i).addClass("lg-current"),
                  (this.index = i),
                  this.updateCurrentCounter(i),
                  this.LGel.trigger(S);
              } else this.closeGallery();
            }),
            (e.prototype.getItems = function () {
              if (((this.items = []), this.settings.dynamic))
                return this.settings.dynamicEl || [];
              if ("this" === this.settings.selector) this.items.push(this.el);
              else if (this.settings.selector)
                if ("string" == typeof this.settings.selector)
                  if (this.settings.selectWithin) {
                    var e = j(this.settings.selectWithin);
                    this.items = e.find(this.settings.selector).get();
                  } else
                    this.items = this.el.querySelectorAll(
                      this.settings.selector
                    );
                else this.items = this.settings.selector;
              else this.items = this.el.children;
              return K(
                this.items,
                this.settings.extraProps,
                this.settings.getCaptionFromTitleOrAlt,
                this.settings.exThumbImage
              );
            }),
            (e.prototype.shouldHideScrollbar = function () {
              return (
                this.settings.hideScrollbar &&
                document.body === this.settings.container
              );
            }),
            (e.prototype.hideScrollbar = function () {
              if (this.shouldHideScrollbar()) {
                this.bodyPaddingRight = parseFloat(
                  j("body").style().paddingRight
                );
                var e = document.documentElement.getBoundingClientRect(),
                  t = window.innerWidth - e.width;
                j(document.body).css(
                  "padding-right",
                  t + this.bodyPaddingRight + "px"
                ),
                  j(document.body).addClass("lg-overlay-open");
              }
            }),
            (e.prototype.resetScrollBar = function () {
              this.shouldHideScrollbar() &&
                (j(document.body).css(
                  "padding-right",
                  this.bodyPaddingRight + "px"
                ),
                j(document.body).removeClass("lg-overlay-open"));
            }),
            (e.prototype.openGallery = function (e, t) {
              var s = this;
              if ((void 0 === e && (e = this.settings.index), !this.lgOpened)) {
                (this.lgOpened = !0),
                  this.outer.removeClass("lg-hide-items"),
                  this.hideScrollbar(),
                  this.$container.addClass("lg-show");
                var i = this.getItemsToBeInsertedToDom(e, e);
                this.currentItemsInDom = i;
                var n = "";
                i.forEach(function (e) {
                  n = n + '<div id="' + e + '" class="lg-item"></div>';
                }),
                  this.$inner.append(n),
                  this.addHtml(e);
                var r = "";
                this.mediaContainerPosition = this.getMediaContainerPosition();
                var o = this.mediaContainerPosition,
                  a = o.top,
                  l = o.bottom;
                this.settings.allowMediaOverlap ||
                  this.setMediaContainerPosition(a, l);
                var c = this.galleryItems[e].__slideVideoInfo;
                this.zoomFromOrigin &&
                  t &&
                  ((this.currentImageSize = G(
                    t,
                    this.outer,
                    a + l,
                    c && this.settings.videoMaxSize
                  )),
                  (r = H(t, this.outer, a, l, this.currentImageSize))),
                  (this.zoomFromOrigin && r) ||
                    (this.outer.addClass(this.settings.startClass),
                    this.getSlideItem(e).removeClass("lg-complete"));
                var d = this.settings.zoomFromOrigin
                  ? 100
                  : this.settings.backdropDuration;
                setTimeout(function () {
                  s.outer.addClass("lg-components-open");
                }, d),
                  (this.index = e),
                  this.LGel.trigger(C),
                  this.getSlideItem(e).addClass("lg-current"),
                  (this.lGalleryOn = !1),
                  (this.prevScrollTop = j(window).scrollTop()),
                  setTimeout(function () {
                    if (s.zoomFromOrigin && r) {
                      var t = s.getSlideItem(e);
                      t.css("transform", r),
                        setTimeout(function () {
                          t
                            .addClass("lg-start-progress lg-start-end-progress")
                            .css(
                              "transition-duration",
                              s.settings.startAnimationDuration + "ms"
                            ),
                            s.outer.addClass("lg-zoom-from-image");
                        }),
                        setTimeout(function () {
                          t.css("transform", "translate3d(0, 0, 0)");
                        }, 100);
                    }
                    setTimeout(function () {
                      s.$backdrop.addClass("in"),
                        s.$container.addClass("lg-show-in");
                    }, 10),
                      setTimeout(function () {
                        s.settings.trapFocus &&
                          document.body === s.settings.container &&
                          s.trapFocus();
                      }, s.settings.backdropDuration + 50),
                      (s.zoomFromOrigin && r) ||
                        setTimeout(function () {
                          s.outer.addClass("lg-visible");
                        }, s.settings.backdropDuration),
                      s.slide(e, !1, !1, !1),
                      s.LGel.trigger(T);
                  }),
                  document.body === this.settings.container &&
                    j("html").addClass("lg-on");
              }
            }),
            (e.prototype.getMediaContainerPosition = function () {
              if (this.settings.allowMediaOverlap) return { top: 0, bottom: 0 };
              var e = this.$toolbar.get().clientHeight || 0,
                t = this.outer.find(".lg-components .lg-sub-html").get(),
                s =
                  this.settings.defaultCaptionHeight ||
                  (t && t.clientHeight) ||
                  0,
                i = this.outer.find(".lg-thumb-outer").get();
              return { top: e, bottom: (i ? i.clientHeight : 0) + s };
            }),
            (e.prototype.setMediaContainerPosition = function (e, t) {
              void 0 === e && (e = 0),
                void 0 === t && (t = 0),
                this.$content.css("top", e + "px").css("bottom", t + "px");
            }),
            (e.prototype.hideBars = function () {
              var e = this;
              setTimeout(function () {
                e.outer.removeClass("lg-hide-items"),
                  e.settings.hideBarsDelay > 0 &&
                    (e.outer.on(
                      "mousemove.lg click.lg touchstart.lg",
                      function () {
                        e.outer.removeClass("lg-hide-items"),
                          clearTimeout(e.hideBarTimeout),
                          (e.hideBarTimeout = setTimeout(function () {
                            e.outer.addClass("lg-hide-items");
                          }, e.settings.hideBarsDelay));
                      }
                    ),
                    e.outer.trigger("mousemove.lg"));
              }, this.settings.showBarsAfter);
            }),
            (e.prototype.initPictureFill = function (e) {
              if (this.settings.supportLegacyBrowser)
                try {
                  picturefill({ elements: [e.get()] });
                } catch (e) {
                  console.warn(
                    "lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document."
                  );
                }
            }),
            (e.prototype.counter = function () {
              if (this.settings.counter) {
                var e =
                  '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' +
                  this.getIdName("lg-counter-current") +
                  '" class="lg-counter-current">' +
                  (this.index + 1) +
                  ' </span> /\n                <span id="' +
                  this.getIdName("lg-counter-all") +
                  '" class="lg-counter-all">' +
                  this.galleryItems.length +
                  " </span></div>";
                this.outer.find(this.settings.appendCounterTo).append(e);
              }
            }),
            (e.prototype.addHtml = function (e) {
              var t, s;
              if (
                (this.galleryItems[e].subHtmlUrl
                  ? (s = this.galleryItems[e].subHtmlUrl)
                  : (t = this.galleryItems[e].subHtml),
                !s)
              )
                if (t) {
                  var i = t.substring(0, 1);
                  ("." !== i && "#" !== i) ||
                    (t =
                      this.settings.subHtmlSelectorRelative &&
                      !this.settings.dynamic
                        ? j(this.items).eq(e).find(t).first().html()
                        : j(t).first().html());
                } else t = "";
              if (".lg-item" !== this.settings.appendSubHtmlTo)
                s
                  ? this.outer.find(".lg-sub-html").load(s)
                  : this.outer.find(".lg-sub-html").html(t);
              else {
                var n = j(this.getSlideItemId(e));
                s
                  ? n.load(s)
                  : n.append('<div class="lg-sub-html">' + t + "</div>");
              }
              null != t &&
                ("" === t
                  ? this.outer
                      .find(this.settings.appendSubHtmlTo)
                      .addClass("lg-empty-html")
                  : this.outer
                      .find(this.settings.appendSubHtmlTo)
                      .removeClass("lg-empty-html")),
                this.LGel.trigger(E, { index: e });
            }),
            (e.prototype.preload = function (e) {
              for (
                var t = 1;
                t <= this.settings.preload &&
                !(t >= this.galleryItems.length - e);
                t++
              )
                this.loadContent(e + t, !1);
              for (var s = 1; s <= this.settings.preload && !(e - s < 0); s++)
                this.loadContent(e - s, !1);
            }),
            (e.prototype.getDummyImgStyles = function (e) {
              return e
                ? "width:" +
                    e.width +
                    "px;\n                margin-left: -" +
                    e.width / 2 +
                    "px;\n                margin-top: -" +
                    e.height / 2 +
                    "px;\n                height:" +
                    e.height +
                    "px"
                : "";
            }),
            (e.prototype.getVideoContStyle = function (e) {
              return e
                ? "width:" +
                    e.width +
                    "px;\n                height:" +
                    e.height +
                    "px"
                : "";
            }),
            (e.prototype.getDummyImageContent = function (e, t, s) {
              var i;
              if ((this.settings.dynamic || (i = j(this.items).eq(t)), i)) {
                var n = void 0;
                if (
                  !(n = this.settings.exThumbImage
                    ? i.attr(this.settings.exThumbImage)
                    : i.find("img").first().attr("src"))
                )
                  return "";
                var r =
                  "<img " +
                  s +
                  ' style="' +
                  this.getDummyImgStyles(this.currentImageSize) +
                  '" class="lg-dummy-img" src="' +
                  n +
                  '" />';
                return (
                  e.addClass("lg-first-slide"),
                  this.outer.addClass("lg-first-slide-loading"),
                  r
                );
              }
              return "";
            }),
            (e.prototype.setImgMarkup = function (e, t, s) {
              var i = this.galleryItems[s],
                n = i.alt,
                r = i.srcset,
                o = i.sizes,
                a = i.sources,
                l = n ? 'alt="' + n + '"' : "",
                c =
                  '<picture class="lg-img-wrap"> ' +
                  (this.isFirstSlideWithZoomAnimation()
                    ? this.getDummyImageContent(t, s, l)
                    : V(s, e, l, r, o, a)) +
                  "</picture>";
              t.prepend(c);
            }),
            (e.prototype.onSlideObjectLoad = function (e, t, s, i) {
              var n = e.find(".lg-object").first();
              X(n.get()) || t
                ? s()
                : (n.on("load.lg error.lg", function () {
                    s && s();
                  }),
                  n.on("error.lg", function () {
                    i && i();
                  }));
            }),
            (e.prototype.onLgObjectLoad = function (e, t, s, i, n, r) {
              var o = this;
              this.onSlideObjectLoad(
                e,
                r,
                function () {
                  o.triggerSlideItemLoad(e, t, s, i, n);
                },
                function () {
                  e.addClass("lg-complete lg-complete_"),
                    e.html(
                      '<span class="lg-error-msg">Oops... Failed to load content...</span>'
                    );
                }
              );
            }),
            (e.prototype.triggerSlideItemLoad = function (e, t, s, i, n) {
              var r = this,
                o = this.galleryItems[t],
                a = n && "video" === this.getSlideType(o) && !o.poster ? i : 0;
              setTimeout(function () {
                e.addClass("lg-complete lg-complete_"),
                  r.LGel.trigger(O, {
                    index: t,
                    delay: s || 0,
                    isFirstSlide: n,
                  });
              }, a);
            }),
            (e.prototype.isFirstSlideWithZoomAnimation = function () {
              return !(
                this.lGalleryOn ||
                !this.zoomFromOrigin ||
                !this.currentImageSize
              );
            }),
            (e.prototype.addSlideVideoInfo = function (e) {
              var t = this;
              e.forEach(function (e, s) {
                (e.__slideVideoInfo = J(e.src, !!e.video, s)),
                  e.__slideVideoInfo &&
                    t.settings.loadYouTubePoster &&
                    !e.poster &&
                    e.__slideVideoInfo.youtube &&
                    (e.poster =
                      "//img.youtube.com/vi/" +
                      e.__slideVideoInfo.youtube[1] +
                      "/maxresdefault.jpg");
              });
            }),
            (e.prototype.loadContent = function (e, t) {
              var s = this,
                i = this.galleryItems[e],
                n = j(this.getSlideItemId(e)),
                r = i.poster,
                o = i.srcset,
                a = i.sizes,
                l = i.sources,
                c = i.src,
                d = i.video,
                u = d && "string" == typeof d ? JSON.parse(d) : d;
              if (i.responsive) {
                var h = i.responsive.split(",");
                c = q(h) || c;
              }
              var p = i.__slideVideoInfo,
                f = "",
                g = !!i.iframe,
                m = !this.lGalleryOn,
                v = 0;
              if (
                (m &&
                  (v =
                    this.zoomFromOrigin && this.currentImageSize
                      ? this.settings.startAnimationDuration + 10
                      : this.settings.backdropDuration + 10),
                !n.hasClass("lg-loaded"))
              ) {
                if (p) {
                  var b = this.mediaContainerPosition,
                    x = b.top,
                    S = b.bottom,
                    E = G(
                      this.items[e],
                      this.outer,
                      x + S,
                      p && this.settings.videoMaxSize
                    );
                  f = this.getVideoContStyle(E);
                }
                if (g) {
                  var C = F(
                    this.settings.iframeWidth,
                    this.settings.iframeHeight,
                    this.settings.iframeMaxWidth,
                    this.settings.iframeMaxHeight,
                    c,
                    i.iframeTitle
                  );
                  n.prepend(C);
                } else if (r) {
                  var T = "";
                  m &&
                    this.zoomFromOrigin &&
                    this.currentImageSize &&
                    (T = this.getDummyImageContent(n, e, ""));
                  C = Y(r, T || "", f, this.settings.strings.playVideo, p);
                  n.prepend(C);
                } else if (p) {
                  C = '<div class="lg-video-cont " style="' + f + '"></div>';
                  n.prepend(C);
                } else if ((this.setImgMarkup(c, n, e), o || l)) {
                  var O = n.find(".lg-object");
                  this.initPictureFill(O);
                }
                (r || p) &&
                  this.LGel.trigger(w, {
                    index: e,
                    src: c,
                    html5Video: u,
                    hasPoster: !!r,
                  }),
                  this.LGel.trigger(y, { index: e }),
                  this.lGalleryOn &&
                    ".lg-item" === this.settings.appendSubHtmlTo &&
                    this.addHtml(e);
              }
              var L = 0;
              v && !j(document.body).hasClass("lg-from-hash") && (L = v),
                this.isFirstSlideWithZoomAnimation() &&
                  (setTimeout(function () {
                    n.removeClass(
                      "lg-start-end-progress lg-start-progress"
                    ).removeAttr("style");
                  }, this.settings.startAnimationDuration + 100),
                  n.hasClass("lg-loaded") ||
                    setTimeout(function () {
                      if ("image" === s.getSlideType(i)) {
                        var t = i.alt,
                          d = t ? 'alt="' + t + '"' : "";
                        if (
                          (n
                            .find(".lg-img-wrap")
                            .append(V(e, c, d, o, a, i.sources)),
                          o || l)
                        ) {
                          var u = n.find(".lg-object");
                          s.initPictureFill(u);
                        }
                      }
                      ("image" === s.getSlideType(i) ||
                        ("video" === s.getSlideType(i) && r)) &&
                        (s.onLgObjectLoad(n, e, v, L, !0, !1),
                        s.onSlideObjectLoad(
                          n,
                          !(!p || !p.html5 || r),
                          function () {
                            s.loadContentOnFirstSlideLoad(e, n, L);
                          },
                          function () {
                            s.loadContentOnFirstSlideLoad(e, n, L);
                          }
                        ));
                    }, this.settings.startAnimationDuration + 100)),
                n.addClass("lg-loaded"),
                (this.isFirstSlideWithZoomAnimation() &&
                  ("video" !== this.getSlideType(i) || r)) ||
                  this.onLgObjectLoad(n, e, v, L, m, !(!p || !p.html5 || r)),
                (this.zoomFromOrigin && this.currentImageSize) ||
                  !n.hasClass("lg-complete_") ||
                  this.lGalleryOn ||
                  setTimeout(function () {
                    n.addClass("lg-complete");
                  }, this.settings.backdropDuration),
                (this.lGalleryOn = !0),
                !0 === t &&
                  (n.hasClass("lg-complete_")
                    ? this.preload(e)
                    : n
                        .find(".lg-object")
                        .first()
                        .on("load.lg error.lg", function () {
                          s.preload(e);
                        }));
            }),
            (e.prototype.loadContentOnFirstSlideLoad = function (e, t, s) {
              var i = this;
              setTimeout(function () {
                t.find(".lg-dummy-img").remove(),
                  t.removeClass("lg-first-slide"),
                  i.outer.removeClass("lg-first-slide-loading"),
                  (i.isDummyImageRemoved = !0),
                  i.preload(e);
              }, s + 300);
            }),
            (e.prototype.getItemsToBeInsertedToDom = function (e, t, s) {
              var i = this;
              void 0 === s && (s = 0);
              var n = [],
                r = Math.max(s, 3);
              r = Math.min(r, this.galleryItems.length);
              var o = "lg-item-" + this.lgId + "-" + t;
              if (this.galleryItems.length <= 3)
                return (
                  this.galleryItems.forEach(function (e, t) {
                    n.push("lg-item-" + i.lgId + "-" + t);
                  }),
                  n
                );
              if (e < (this.galleryItems.length - 1) / 2) {
                for (var a = e; a > e - r / 2 && a >= 0; a--)
                  n.push("lg-item-" + this.lgId + "-" + a);
                var l = n.length;
                for (a = 0; a < r - l; a++)
                  n.push("lg-item-" + this.lgId + "-" + (e + a + 1));
              } else {
                for (
                  a = e;
                  a <= this.galleryItems.length - 1 && a < e + r / 2;
                  a++
                )
                  n.push("lg-item-" + this.lgId + "-" + a);
                for (l = n.length, a = 0; a < r - l; a++)
                  n.push("lg-item-" + this.lgId + "-" + (e - a - 1));
              }
              return (
                this.settings.loop &&
                  (e === this.galleryItems.length - 1
                    ? n.push("lg-item-" + this.lgId + "-0")
                    : 0 === e &&
                      n.push(
                        "lg-item-" +
                          this.lgId +
                          "-" +
                          (this.galleryItems.length - 1)
                      )),
                -1 === n.indexOf(o) && n.push("lg-item-" + this.lgId + "-" + t),
                n
              );
            }),
            (e.prototype.organizeSlideItems = function (e, t) {
              var s = this,
                i = this.getItemsToBeInsertedToDom(
                  e,
                  t,
                  this.settings.numberOfSlideItemsInDom
                );
              return (
                i.forEach(function (e) {
                  -1 === s.currentItemsInDom.indexOf(e) &&
                    s.$inner.append(
                      '<div id="' + e + '" class="lg-item"></div>'
                    );
                }),
                this.currentItemsInDom.forEach(function (e) {
                  -1 === i.indexOf(e) && j("#" + e).remove();
                }),
                i
              );
            }),
            (e.prototype.getPreviousSlideIndex = function () {
              var e = 0;
              try {
                var t = this.outer.find(".lg-current").first().attr("id");
                e = parseInt(t.split("-")[3]) || 0;
              } catch (t) {
                e = 0;
              }
              return e;
            }),
            (e.prototype.setDownloadValue = function (e) {
              if (this.settings.download) {
                var t = this.galleryItems[e];
                if (!1 === t.downloadUrl || "false" === t.downloadUrl)
                  this.outer.addClass("lg-hide-download");
                else {
                  var s = this.getElementById("lg-download");
                  this.outer.removeClass("lg-hide-download"),
                    s.attr("href", t.downloadUrl || t.src),
                    t.download && s.attr("download", t.download);
                }
              }
            }),
            (e.prototype.makeSlideAnimation = function (e, t, s) {
              var i = this;
              this.lGalleryOn && s.addClass("lg-slide-progress"),
                setTimeout(
                  function () {
                    i.outer.addClass("lg-no-trans"),
                      i.outer
                        .find(".lg-item")
                        .removeClass("lg-prev-slide lg-next-slide"),
                      "prev" === e
                        ? (t.addClass("lg-prev-slide"),
                          s.addClass("lg-next-slide"))
                        : (t.addClass("lg-next-slide"),
                          s.addClass("lg-prev-slide")),
                      setTimeout(function () {
                        i.outer.find(".lg-item").removeClass("lg-current"),
                          t.addClass("lg-current"),
                          i.outer.removeClass("lg-no-trans");
                      }, 50);
                  },
                  this.lGalleryOn ? this.settings.slideDelay : 0
                );
            }),
            (e.prototype.slide = function (e, t, s, i) {
              var n = this,
                r = this.getPreviousSlideIndex();
              if (
                ((this.currentItemsInDom = this.organizeSlideItems(e, r)),
                !this.lGalleryOn || r !== e)
              ) {
                var o = this.galleryItems.length;
                if (!this.lgBusy) {
                  this.settings.counter && this.updateCurrentCounter(e);
                  var a = this.getSlideItem(e),
                    l = this.getSlideItem(r),
                    c = this.galleryItems[e],
                    d = c.__slideVideoInfo;
                  if (
                    (this.outer.attr(
                      "data-lg-slide-type",
                      this.getSlideType(c)
                    ),
                    this.setDownloadValue(e),
                    d)
                  ) {
                    var u = this.mediaContainerPosition,
                      h = u.top,
                      p = u.bottom,
                      f = G(
                        this.items[e],
                        this.outer,
                        h + p,
                        d && this.settings.videoMaxSize
                      );
                    this.resizeVideoSlide(e, f);
                  }
                  if (
                    (this.LGel.trigger(L, {
                      prevIndex: r,
                      index: e,
                      fromTouch: !!t,
                      fromThumb: !!s,
                    }),
                    (this.lgBusy = !0),
                    clearTimeout(this.hideBarTimeout),
                    this.arrowDisable(e),
                    i || (e < r ? (i = "prev") : e > r && (i = "next")),
                    t)
                  ) {
                    this.outer
                      .find(".lg-item")
                      .removeClass("lg-prev-slide lg-current lg-next-slide");
                    var g = void 0,
                      m = void 0;
                    o > 2
                      ? ((g = e - 1),
                        (m = e + 1),
                        ((0 === e && r === o - 1) ||
                          (e === o - 1 && 0 === r)) &&
                          ((m = 0), (g = o - 1)))
                      : ((g = 0), (m = 1)),
                      "prev" === i
                        ? this.getSlideItem(m).addClass("lg-next-slide")
                        : this.getSlideItem(g).addClass("lg-prev-slide"),
                      a.addClass("lg-current");
                  } else this.makeSlideAnimation(i, a, l);
                  this.lGalleryOn
                    ? setTimeout(function () {
                        n.loadContent(e, !0),
                          ".lg-item" !== n.settings.appendSubHtmlTo &&
                            n.addHtml(e);
                      }, this.settings.speed +
                        50 +
                        (t ? 0 : this.settings.slideDelay))
                    : this.loadContent(e, !0),
                    setTimeout(function () {
                      (n.lgBusy = !1),
                        l.removeClass("lg-slide-progress"),
                        n.LGel.trigger(A, {
                          prevIndex: r,
                          index: e,
                          fromTouch: t,
                          fromThumb: s,
                        });
                    }, (this.lGalleryOn ? this.settings.speed + 100 : 100) +
                      (t ? 0 : this.settings.slideDelay));
                }
                this.index = e;
              }
            }),
            (e.prototype.updateCurrentCounter = function (e) {
              this.getElementById("lg-counter-current").html(e + 1 + "");
            }),
            (e.prototype.updateCounterTotal = function () {
              this.getElementById("lg-counter-all").html(
                this.galleryItems.length + ""
              );
            }),
            (e.prototype.getSlideType = function (e) {
              return e.__slideVideoInfo
                ? "video"
                : e.iframe
                ? "iframe"
                : "image";
            }),
            (e.prototype.touchMove = function (e, t, s) {
              var i = t.pageX - e.pageX,
                n = t.pageY - e.pageY,
                r = !1;
              if (
                (this.swipeDirection
                  ? (r = !0)
                  : Math.abs(i) > 15
                  ? ((this.swipeDirection = "horizontal"), (r = !0))
                  : Math.abs(n) > 15 &&
                    ((this.swipeDirection = "vertical"), (r = !0)),
                r)
              ) {
                var o = this.getSlideItem(this.index);
                if ("horizontal" === this.swipeDirection) {
                  null == s || s.preventDefault(),
                    this.outer.addClass("lg-dragging"),
                    this.setTranslate(o, i, 0);
                  var a = o.get().offsetWidth,
                    l = (15 * a) / 100 - Math.abs((10 * i) / 100);
                  this.setTranslate(
                    this.outer.find(".lg-prev-slide").first(),
                    -a + i - l,
                    0
                  ),
                    this.setTranslate(
                      this.outer.find(".lg-next-slide").first(),
                      a + i + l,
                      0
                    );
                } else if (
                  "vertical" === this.swipeDirection &&
                  this.settings.swipeToClose
                ) {
                  null == s || s.preventDefault(),
                    this.$container.addClass("lg-dragging-vertical");
                  var c = 1 - Math.abs(n) / window.innerHeight;
                  this.$backdrop.css("opacity", c);
                  var d = 1 - Math.abs(n) / (2 * window.innerWidth);
                  this.setTranslate(o, 0, n, d, d),
                    Math.abs(n) > 100 &&
                      this.outer
                        .addClass("lg-hide-items")
                        .removeClass("lg-components-open");
                }
              }
            }),
            (e.prototype.touchEnd = function (e, t, s) {
              var i,
                n = this;
              "lg-slide" !== this.settings.mode &&
                this.outer.addClass("lg-slide"),
                setTimeout(function () {
                  n.$container.removeClass("lg-dragging-vertical"),
                    n.outer
                      .removeClass("lg-dragging lg-hide-items")
                      .addClass("lg-components-open");
                  var r = !0;
                  if ("horizontal" === n.swipeDirection) {
                    i = e.pageX - t.pageX;
                    var o = Math.abs(e.pageX - t.pageX);
                    i < 0 && o > n.settings.swipeThreshold
                      ? (n.goToNextSlide(!0), (r = !1))
                      : i > 0 &&
                        o > n.settings.swipeThreshold &&
                        (n.goToPrevSlide(!0), (r = !1));
                  } else if ("vertical" === n.swipeDirection) {
                    if (
                      ((i = Math.abs(e.pageY - t.pageY)),
                      n.settings.closable && n.settings.swipeToClose && i > 100)
                    )
                      return void n.closeGallery();
                    n.$backdrop.css("opacity", 1);
                  }
                  if (
                    (n.outer.find(".lg-item").removeAttr("style"),
                    r && Math.abs(e.pageX - t.pageX) < 5)
                  ) {
                    var a = j(s.target);
                    n.isPosterElement(a) && n.LGel.trigger(I);
                  }
                  n.swipeDirection = void 0;
                }),
                setTimeout(function () {
                  n.outer.hasClass("lg-dragging") ||
                    "lg-slide" === n.settings.mode ||
                    n.outer.removeClass("lg-slide");
                }, this.settings.speed + 100);
            }),
            (e.prototype.enableSwipe = function () {
              var e = this,
                t = {},
                s = {},
                i = !1,
                n = !1;
              this.settings.enableSwipe &&
                (this.$inner.on("touchstart.lg", function (s) {
                  e.dragOrSwipeEnabled = !0;
                  var i = e.getSlideItem(e.index);
                  (!j(s.target).hasClass("lg-item") &&
                    !i.get().contains(s.target)) ||
                    e.outer.hasClass("lg-zoomed") ||
                    e.lgBusy ||
                    1 !== s.targetTouches.length ||
                    ((n = !0),
                    (e.touchAction = "swipe"),
                    e.manageSwipeClass(),
                    (t = {
                      pageX: s.targetTouches[0].pageX,
                      pageY: s.targetTouches[0].pageY,
                    }));
                }),
                this.$inner.on("touchmove.lg", function (r) {
                  n &&
                    "swipe" === e.touchAction &&
                    1 === r.targetTouches.length &&
                    ((s = {
                      pageX: r.targetTouches[0].pageX,
                      pageY: r.targetTouches[0].pageY,
                    }),
                    e.touchMove(t, s, r),
                    (i = !0));
                }),
                this.$inner.on("touchend.lg", function (r) {
                  if ("swipe" === e.touchAction) {
                    if (i) (i = !1), e.touchEnd(s, t, r);
                    else if (n) {
                      var o = j(r.target);
                      e.isPosterElement(o) && e.LGel.trigger(I);
                    }
                    (e.touchAction = void 0), (n = !1);
                  }
                }));
            }),
            (e.prototype.enableDrag = function () {
              var e = this,
                t = {},
                s = {},
                i = !1,
                n = !1;
              this.settings.enableDrag &&
                (this.outer.on("mousedown.lg", function (s) {
                  e.dragOrSwipeEnabled = !0;
                  var n = e.getSlideItem(e.index);
                  (j(s.target).hasClass("lg-item") ||
                    n.get().contains(s.target)) &&
                    (e.outer.hasClass("lg-zoomed") ||
                      e.lgBusy ||
                      (s.preventDefault(),
                      e.lgBusy ||
                        (e.manageSwipeClass(),
                        (t = { pageX: s.pageX, pageY: s.pageY }),
                        (i = !0),
                        (e.outer.get().scrollLeft += 1),
                        (e.outer.get().scrollLeft -= 1),
                        e.outer.removeClass("lg-grab").addClass("lg-grabbing"),
                        e.LGel.trigger(k))));
                }),
                j(window).on("mousemove.lg.global" + this.lgId, function (r) {
                  i &&
                    e.lgOpened &&
                    ((n = !0),
                    (s = { pageX: r.pageX, pageY: r.pageY }),
                    e.touchMove(t, s),
                    e.LGel.trigger(_));
                }),
                j(window).on("mouseup.lg.global" + this.lgId, function (r) {
                  if (e.lgOpened) {
                    var o = j(r.target);
                    n
                      ? ((n = !1), e.touchEnd(s, t, r), e.LGel.trigger(M))
                      : e.isPosterElement(o) && e.LGel.trigger(I),
                      i &&
                        ((i = !1),
                        e.outer.removeClass("lg-grabbing").addClass("lg-grab"));
                  }
                }));
            }),
            (e.prototype.triggerPosterClick = function () {
              var e = this;
              this.$inner.on("click.lg", function (t) {
                !e.dragOrSwipeEnabled &&
                  e.isPosterElement(j(t.target)) &&
                  e.LGel.trigger(I);
              });
            }),
            (e.prototype.manageSwipeClass = function () {
              var e = this.index + 1,
                t = this.index - 1;
              this.settings.loop &&
                this.galleryItems.length > 2 &&
                (0 === this.index
                  ? (t = this.galleryItems.length - 1)
                  : this.index === this.galleryItems.length - 1 && (e = 0)),
                this.outer
                  .find(".lg-item")
                  .removeClass("lg-next-slide lg-prev-slide"),
                t > -1 && this.getSlideItem(t).addClass("lg-prev-slide"),
                this.getSlideItem(e).addClass("lg-next-slide");
            }),
            (e.prototype.goToNextSlide = function (e) {
              var t = this,
                s = this.settings.loop;
              e && this.galleryItems.length < 3 && (s = !1),
                this.lgBusy ||
                  (this.index + 1 < this.galleryItems.length
                    ? (this.index++,
                      this.LGel.trigger(P, { index: this.index }),
                      this.slide(this.index, !!e, !1, "next"))
                    : s
                    ? ((this.index = 0),
                      this.LGel.trigger(P, { index: this.index }),
                      this.slide(this.index, !!e, !1, "next"))
                    : this.settings.slideEndAnimation &&
                      !e &&
                      (this.outer.addClass("lg-right-end"),
                      setTimeout(function () {
                        t.outer.removeClass("lg-right-end");
                      }, 400)));
            }),
            (e.prototype.goToPrevSlide = function (e) {
              var t = this,
                s = this.settings.loop;
              e && this.galleryItems.length < 3 && (s = !1),
                this.lgBusy ||
                  (this.index > 0
                    ? (this.index--,
                      this.LGel.trigger($, { index: this.index, fromTouch: e }),
                      this.slide(this.index, !!e, !1, "prev"))
                    : s
                    ? ((this.index = this.galleryItems.length - 1),
                      this.LGel.trigger($, { index: this.index, fromTouch: e }),
                      this.slide(this.index, !!e, !1, "prev"))
                    : this.settings.slideEndAnimation &&
                      !e &&
                      (this.outer.addClass("lg-left-end"),
                      setTimeout(function () {
                        t.outer.removeClass("lg-left-end");
                      }, 400)));
            }),
            (e.prototype.keyPress = function () {
              var e = this;
              j(window).on("keydown.lg.global" + this.lgId, function (t) {
                e.lgOpened &&
                  !0 === e.settings.escKey &&
                  27 === t.keyCode &&
                  (t.preventDefault(),
                  e.settings.allowMediaOverlap &&
                  e.outer.hasClass("lg-can-toggle") &&
                  e.outer.hasClass("lg-components-open")
                    ? e.outer.removeClass("lg-components-open")
                    : e.closeGallery()),
                  e.lgOpened &&
                    e.galleryItems.length > 1 &&
                    (37 === t.keyCode &&
                      (t.preventDefault(), e.goToPrevSlide()),
                    39 === t.keyCode &&
                      (t.preventDefault(), e.goToNextSlide()));
              });
            }),
            (e.prototype.arrow = function () {
              var e = this;
              this.getElementById("lg-prev").on("click.lg", function () {
                e.goToPrevSlide();
              }),
                this.getElementById("lg-next").on("click.lg", function () {
                  e.goToNextSlide();
                });
            }),
            (e.prototype.arrowDisable = function (e) {
              if (!this.settings.loop && this.settings.hideControlOnEnd) {
                var t = this.getElementById("lg-prev"),
                  s = this.getElementById("lg-next");
                e + 1 === this.galleryItems.length
                  ? s.attr("disabled", "disabled").addClass("disabled")
                  : s.removeAttr("disabled").removeClass("disabled"),
                  0 === e
                    ? t.attr("disabled", "disabled").addClass("disabled")
                    : t.removeAttr("disabled").removeClass("disabled");
              }
            }),
            (e.prototype.setTranslate = function (e, t, s, i, n) {
              void 0 === i && (i = 1),
                void 0 === n && (n = 1),
                e.css(
                  "transform",
                  "translate3d(" +
                    t +
                    "px, " +
                    s +
                    "px, 0px) scale3d(" +
                    i +
                    ", " +
                    n +
                    ", 1)"
                );
            }),
            (e.prototype.mousewheel = function () {
              var e = this,
                t = 0;
              this.outer.on("wheel.lg", function (s) {
                if (s.deltaY && !(e.galleryItems.length < 2)) {
                  s.preventDefault();
                  var i = new Date().getTime();
                  i - t < 1e3 ||
                    ((t = i),
                    s.deltaY > 0
                      ? e.goToNextSlide()
                      : s.deltaY < 0 && e.goToPrevSlide());
                }
              });
            }),
            (e.prototype.isSlideElement = function (e) {
              return (
                e.hasClass("lg-outer") ||
                e.hasClass("lg-item") ||
                e.hasClass("lg-img-wrap")
              );
            }),
            (e.prototype.isPosterElement = function (e) {
              var t = this.getSlideItem(this.index)
                .find(".lg-video-play-button")
                .get();
              return (
                e.hasClass("lg-video-poster") ||
                e.hasClass("lg-video-play-button") ||
                (t && t.contains(e.get()))
              );
            }),
            (e.prototype.toggleMaximize = function () {
              var e = this;
              this.getElementById("lg-maximize").on("click.lg", function () {
                e.$container.toggleClass("lg-inline"), e.refreshOnResize();
              });
            }),
            (e.prototype.invalidateItems = function () {
              for (var e = 0; e < this.items.length; e++) {
                var t = j(this.items[e]);
                t.off("click.lgcustom-item-" + t.attr("data-lg-id"));
              }
            }),
            (e.prototype.trapFocus = function () {
              var e = this;
              this.$container.get().focus({ preventScroll: !0 }),
                j(window).on("keydown.lg.global" + this.lgId, function (t) {
                  if (e.lgOpened && ("Tab" === t.key || 9 === t.keyCode)) {
                    var s = U(e.$container.get()),
                      i = s[0],
                      n = s[s.length - 1];
                    t.shiftKey
                      ? document.activeElement === i &&
                        (n.focus(), t.preventDefault())
                      : document.activeElement === n &&
                        (i.focus(), t.preventDefault());
                  }
                });
            }),
            (e.prototype.manageCloseGallery = function () {
              var e = this;
              if (this.settings.closable) {
                var t = !1;
                this.getElementById("lg-close").on("click.lg", function () {
                  e.closeGallery();
                }),
                  this.settings.closeOnTap &&
                    (this.outer.on("mousedown.lg", function (s) {
                      var i = j(s.target);
                      t = !!e.isSlideElement(i);
                    }),
                    this.outer.on("mousemove.lg", function () {
                      t = !1;
                    }),
                    this.outer.on("mouseup.lg", function (s) {
                      var i = j(s.target);
                      e.isSlideElement(i) &&
                        t &&
                        (e.outer.hasClass("lg-dragging") || e.closeGallery());
                    }));
              }
            }),
            (e.prototype.closeGallery = function (e) {
              var t = this;
              if (!this.lgOpened || (!this.settings.closable && !e)) return 0;
              this.LGel.trigger(z),
                this.settings.resetScrollPosition &&
                  !this.settings.hideScrollbar &&
                  j(window).scrollTop(this.prevScrollTop);
              var s,
                i = this.items[this.index];
              if (this.zoomFromOrigin && i) {
                var n = this.mediaContainerPosition,
                  r = n.top,
                  o = n.bottom,
                  a = this.galleryItems[this.index],
                  l = a.__slideVideoInfo,
                  c = a.poster,
                  d = G(
                    i,
                    this.outer,
                    r + o,
                    l && c && this.settings.videoMaxSize
                  );
                s = H(i, this.outer, r, o, d);
              }
              this.zoomFromOrigin && s
                ? (this.outer.addClass("lg-closing lg-zoom-from-image"),
                  this.getSlideItem(this.index)
                    .addClass("lg-start-end-progress")
                    .css(
                      "transition-duration",
                      this.settings.startAnimationDuration + "ms"
                    )
                    .css("transform", s))
                : (this.outer.addClass("lg-hide-items"),
                  this.outer.removeClass("lg-zoom-from-image")),
                this.destroyModules(),
                (this.lGalleryOn = !1),
                (this.isDummyImageRemoved = !1),
                (this.zoomFromOrigin = this.settings.zoomFromOrigin),
                clearTimeout(this.hideBarTimeout),
                (this.hideBarTimeout = !1),
                j("html").removeClass("lg-on"),
                this.outer.removeClass("lg-visible lg-components-open"),
                this.$backdrop.removeClass("in").css("opacity", 0);
              var u =
                this.zoomFromOrigin && s
                  ? Math.max(
                      this.settings.startAnimationDuration,
                      this.settings.backdropDuration
                    )
                  : this.settings.backdropDuration;
              return (
                this.$container.removeClass("lg-show-in"),
                setTimeout(function () {
                  t.zoomFromOrigin &&
                    s &&
                    t.outer.removeClass("lg-zoom-from-image"),
                    t.$container.removeClass("lg-show"),
                    t.resetScrollBar(),
                    t.$backdrop
                      .removeAttr("style")
                      .css(
                        "transition-duration",
                        t.settings.backdropDuration + "ms"
                      ),
                    t.outer.removeClass("lg-closing " + t.settings.startClass),
                    t
                      .getSlideItem(t.index)
                      .removeClass("lg-start-end-progress"),
                    t.$inner.empty(),
                    t.lgOpened && t.LGel.trigger(D, { instance: t }),
                    t.$container.get() && t.$container.get().blur(),
                    (t.lgOpened = !1);
                }, u + 100),
                u + 100
              );
            }),
            (e.prototype.initModules = function () {
              this.plugins.forEach(function (e) {
                try {
                  e.init();
                } catch (e) {
                  console.warn(
                    "lightGallery:- make sure lightGallery module is properly initiated"
                  );
                }
              });
            }),
            (e.prototype.destroyModules = function (e) {
              this.plugins.forEach(function (t) {
                try {
                  e ? t.destroy() : t.closeGallery && t.closeGallery();
                } catch (e) {
                  console.warn(
                    "lightGallery:- make sure lightGallery module is properly destroyed"
                  );
                }
              });
            }),
            (e.prototype.refresh = function (e) {
              this.settings.dynamic || this.invalidateItems(),
                (this.galleryItems = e || this.getItems()),
                this.updateControls(),
                this.openGalleryOnItemClick(),
                this.LGel.trigger(S);
            }),
            (e.prototype.updateControls = function () {
              this.addSlideVideoInfo(this.galleryItems),
                this.updateCounterTotal(),
                this.manageSingleSlideClassName();
            }),
            (e.prototype.destroy = function () {
              var e = this,
                t = this.closeGallery(!0);
              return (
                setTimeout(function () {
                  e.destroyModules(!0),
                    e.settings.dynamic || e.invalidateItems(),
                    j(window).off(".lg.global" + e.lgId),
                    e.LGel.off(".lg"),
                    e.$container.remove();
                }, t),
                t
              );
            }),
            e
          );
        })();
      const te = function (e, t) {
        return new ee(e, t);
      };
      function se(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function ie(e = {}, t = {}) {
        Object.keys(t).forEach((s) => {
          void 0 === e[s]
            ? (e[s] = t[s])
            : se(t[s]) &&
              se(e[s]) &&
              Object.keys(t[s]).length > 0 &&
              ie(e[s], t[s]);
        });
      }
      const ne = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function re() {
        const e = "undefined" != typeof document ? document : {};
        return ie(e, ne), e;
      }
      const oe = {
        document: ne,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        },
      };
      function ae() {
        const e = "undefined" != typeof window ? window : {};
        return ie(e, oe), e;
      }
      class le extends Array {
        constructor(e) {
          "number" == typeof e
            ? super(e)
            : (super(...(e || [])),
              (function (e) {
                const t = e.__proto__;
                Object.defineProperty(e, "__proto__", {
                  get: () => t,
                  set(e) {
                    t.__proto__ = e;
                  },
                });
              })(this));
        }
      }
      function ce(e = []) {
        const t = [];
        return (
          e.forEach((e) => {
            Array.isArray(e) ? t.push(...ce(e)) : t.push(e);
          }),
          t
        );
      }
      function de(e, t) {
        return Array.prototype.filter.call(e, t);
      }
      function ue(e, t) {
        const s = ae(),
          i = re();
        let n = [];
        if (!t && e instanceof le) return e;
        if (!e) return new le(n);
        if ("string" == typeof e) {
          const s = e.trim();
          if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
            let e = "div";
            0 === s.indexOf("<li") && (e = "ul"),
              0 === s.indexOf("<tr") && (e = "tbody"),
              (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (e = "tr"),
              0 === s.indexOf("<tbody") && (e = "table"),
              0 === s.indexOf("<option") && (e = "select");
            const t = i.createElement(e);
            t.innerHTML = s;
            for (let e = 0; e < t.childNodes.length; e += 1)
              n.push(t.childNodes[e]);
          } else
            n = (function (e, t) {
              if ("string" != typeof e) return [e];
              const s = [],
                i = t.querySelectorAll(e);
              for (let e = 0; e < i.length; e += 1) s.push(i[e]);
              return s;
            })(e.trim(), t || i);
        } else if (e.nodeType || e === s || e === i) n.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof le) return e;
          n = e;
        }
        return new le(
          (function (e) {
            const t = [];
            for (let s = 0; s < e.length; s += 1)
              -1 === t.indexOf(e[s]) && t.push(e[s]);
            return t;
          })(n)
        );
      }
      ue.fn = le.prototype;
      const he = "resize scroll".split(" ");
      function pe(e) {
        return function (...t) {
          if (void 0 === t[0]) {
            for (let t = 0; t < this.length; t += 1)
              he.indexOf(e) < 0 &&
                (e in this[t] ? this[t][e]() : ue(this[t]).trigger(e));
            return this;
          }
          return this.on(e, ...t);
        };
      }
      pe("click"),
        pe("blur"),
        pe("focus"),
        pe("focusin"),
        pe("focusout"),
        pe("keyup"),
        pe("keydown"),
        pe("keypress"),
        pe("submit"),
        pe("change"),
        pe("mousedown"),
        pe("mousemove"),
        pe("mouseup"),
        pe("mouseenter"),
        pe("mouseleave"),
        pe("mouseout"),
        pe("mouseover"),
        pe("touchstart"),
        pe("touchend"),
        pe("touchmove"),
        pe("resize"),
        pe("scroll");
      const fe = {
        addClass: function (...e) {
          const t = ce(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.add(...t);
            }),
            this
          );
        },
        removeClass: function (...e) {
          const t = ce(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.remove(...t);
            }),
            this
          );
        },
        hasClass: function (...e) {
          const t = ce(e.map((e) => e.split(" ")));
          return (
            de(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
              .length > 0
          );
        },
        toggleClass: function (...e) {
          const t = ce(e.map((e) => e.split(" ")));
          this.forEach((e) => {
            t.forEach((t) => {
              e.classList.toggle(t);
            });
          });
        },
        attr: function (e, t) {
          if (1 === arguments.length && "string" == typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (let s = 0; s < this.length; s += 1)
            if (2 === arguments.length) this[s].setAttribute(e, t);
            else
              for (const t in e)
                (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
          return this;
        },
        removeAttr: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        transform: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
          return this;
        },
        transition: function (e) {
          for (let t = 0; t < this.length; t += 1)
            this[t].style.transitionDuration =
              "string" != typeof e ? `${e}ms` : e;
          return this;
        },
        on: function (...e) {
          let [t, s, i, n] = e;
          function r(e) {
            const t = e.target;
            if (!t) return;
            const n = e.target.dom7EventData || [];
            if ((n.indexOf(e) < 0 && n.unshift(e), ue(t).is(s))) i.apply(t, n);
            else {
              const e = ue(t).parents();
              for (let t = 0; t < e.length; t += 1)
                ue(e[t]).is(s) && i.apply(e[t], n);
            }
          }
          function o(e) {
            const t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
          }
          "function" == typeof e[1] && (([t, i, n] = e), (s = void 0)),
            n || (n = !1);
          const a = t.split(" ");
          let l;
          for (let e = 0; e < this.length; e += 1) {
            const t = this[e];
            if (s)
              for (l = 0; l < a.length; l += 1) {
                const e = a[l];
                t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                  t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                  t.dom7LiveListeners[e].push({
                    listener: i,
                    proxyListener: r,
                  }),
                  t.addEventListener(e, r, n);
              }
            else
              for (l = 0; l < a.length; l += 1) {
                const e = a[l];
                t.dom7Listeners || (t.dom7Listeners = {}),
                  t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                  t.dom7Listeners[e].push({ listener: i, proxyListener: o }),
                  t.addEventListener(e, o, n);
              }
          }
          return this;
        },
        off: function (...e) {
          let [t, s, i, n] = e;
          "function" == typeof e[1] && (([t, i, n] = e), (s = void 0)),
            n || (n = !1);
          const r = t.split(" ");
          for (let e = 0; e < r.length; e += 1) {
            const t = r[e];
            for (let e = 0; e < this.length; e += 1) {
              const r = this[e];
              let o;
              if (
                (!s && r.dom7Listeners
                  ? (o = r.dom7Listeners[t])
                  : s && r.dom7LiveListeners && (o = r.dom7LiveListeners[t]),
                o && o.length)
              )
                for (let e = o.length - 1; e >= 0; e -= 1) {
                  const s = o[e];
                  (i && s.listener === i) ||
                  (i &&
                    s.listener &&
                    s.listener.dom7proxy &&
                    s.listener.dom7proxy === i)
                    ? (r.removeEventListener(t, s.proxyListener, n),
                      o.splice(e, 1))
                    : i ||
                      (r.removeEventListener(t, s.proxyListener, n),
                      o.splice(e, 1));
                }
            }
          }
          return this;
        },
        trigger: function (...e) {
          const t = ae(),
            s = e[0].split(" "),
            i = e[1];
          for (let n = 0; n < s.length; n += 1) {
            const r = s[n];
            for (let s = 0; s < this.length; s += 1) {
              const n = this[s];
              if (t.CustomEvent) {
                const s = new t.CustomEvent(r, {
                  detail: i,
                  bubbles: !0,
                  cancelable: !0,
                });
                (n.dom7EventData = e.filter((e, t) => t > 0)),
                  n.dispatchEvent(s),
                  (n.dom7EventData = []),
                  delete n.dom7EventData;
              }
            }
          }
          return this;
        },
        transitionEnd: function (e) {
          const t = this;
          return (
            e &&
              t.on("transitionend", function s(i) {
                i.target === this &&
                  (e.call(this, i), t.off("transitionend", s));
              }),
            this
          );
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(e.getPropertyValue("margin-right")) +
                parseFloat(e.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(e.getPropertyValue("margin-top")) +
                parseFloat(e.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        styles: function () {
          const e = ae();
          return this[0] ? e.getComputedStyle(this[0], null) : {};
        },
        offset: function () {
          if (this.length > 0) {
            const e = ae(),
              t = re(),
              s = this[0],
              i = s.getBoundingClientRect(),
              n = t.body,
              r = s.clientTop || n.clientTop || 0,
              o = s.clientLeft || n.clientLeft || 0,
              a = s === e ? e.scrollY : s.scrollTop,
              l = s === e ? e.scrollX : s.scrollLeft;
            return { top: i.top + a - r, left: i.left + l - o };
          }
          return null;
        },
        css: function (e, t) {
          const s = ae();
          let i;
          if (1 === arguments.length) {
            if ("string" != typeof e) {
              for (i = 0; i < this.length; i += 1)
                for (const t in e) this[i].style[t] = e[t];
              return this;
            }
            if (this[0])
              return s.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" == typeof e) {
            for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
            return this;
          }
          return this;
        },
        each: function (e) {
          return e
            ? (this.forEach((t, s) => {
                e.apply(t, [t, s]);
              }),
              this)
            : this;
        },
        html: function (e) {
          if (void 0 === e) return this[0] ? this[0].innerHTML : null;
          for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
          for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (e) {
          const t = ae(),
            s = re(),
            i = this[0];
          let n, r;
          if (!i || void 0 === e) return !1;
          if ("string" == typeof e) {
            if (i.matches) return i.matches(e);
            if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
            if (i.msMatchesSelector) return i.msMatchesSelector(e);
            for (n = ue(e), r = 0; r < n.length; r += 1)
              if (n[r] === i) return !0;
            return !1;
          }
          if (e === s) return i === s;
          if (e === t) return i === t;
          if (e.nodeType || e instanceof le) {
            for (n = e.nodeType ? [e] : e, r = 0; r < n.length; r += 1)
              if (n[r] === i) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          let e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if (void 0 === e) return this;
          const t = this.length;
          if (e > t - 1) return ue([]);
          if (e < 0) {
            const s = t + e;
            return ue(s < 0 ? [] : [this[s]]);
          }
          return ue([this[e]]);
        },
        append: function (...e) {
          let t;
          const s = re();
          for (let i = 0; i < e.length; i += 1) {
            t = e[i];
            for (let e = 0; e < this.length; e += 1)
              if ("string" == typeof t) {
                const i = s.createElement("div");
                for (i.innerHTML = t; i.firstChild; )
                  this[e].appendChild(i.firstChild);
              } else if (t instanceof le)
                for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
              else this[e].appendChild(t);
          }
          return this;
        },
        prepend: function (e) {
          const t = re();
          let s, i;
          for (s = 0; s < this.length; s += 1)
            if ("string" == typeof e) {
              const n = t.createElement("div");
              for (n.innerHTML = e, i = n.childNodes.length - 1; i >= 0; i -= 1)
                this[s].insertBefore(n.childNodes[i], this[s].childNodes[0]);
            } else if (e instanceof le)
              for (i = 0; i < e.length; i += 1)
                this[s].insertBefore(e[i], this[s].childNodes[0]);
            else this[s].insertBefore(e, this[s].childNodes[0]);
          return this;
        },
        next: function (e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling &&
                ue(this[0].nextElementSibling).is(e)
                ? ue([this[0].nextElementSibling])
                : ue([])
              : this[0].nextElementSibling
              ? ue([this[0].nextElementSibling])
              : ue([])
            : ue([]);
        },
        nextAll: function (e) {
          const t = [];
          let s = this[0];
          if (!s) return ue([]);
          for (; s.nextElementSibling; ) {
            const i = s.nextElementSibling;
            e ? ue(i).is(e) && t.push(i) : t.push(i), (s = i);
          }
          return ue(t);
        },
        prev: function (e) {
          if (this.length > 0) {
            const t = this[0];
            return e
              ? t.previousElementSibling && ue(t.previousElementSibling).is(e)
                ? ue([t.previousElementSibling])
                : ue([])
              : t.previousElementSibling
              ? ue([t.previousElementSibling])
              : ue([]);
          }
          return ue([]);
        },
        prevAll: function (e) {
          const t = [];
          let s = this[0];
          if (!s) return ue([]);
          for (; s.previousElementSibling; ) {
            const i = s.previousElementSibling;
            e ? ue(i).is(e) && t.push(i) : t.push(i), (s = i);
          }
          return ue(t);
        },
        parent: function (e) {
          const t = [];
          for (let s = 0; s < this.length; s += 1)
            null !== this[s].parentNode &&
              (e
                ? ue(this[s].parentNode).is(e) && t.push(this[s].parentNode)
                : t.push(this[s].parentNode));
          return ue(t);
        },
        parents: function (e) {
          const t = [];
          for (let s = 0; s < this.length; s += 1) {
            let i = this[s].parentNode;
            for (; i; )
              e ? ue(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
          }
          return ue(t);
        },
        closest: function (e) {
          let t = this;
          return void 0 === e
            ? ue([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          const t = [];
          for (let s = 0; s < this.length; s += 1) {
            const i = this[s].querySelectorAll(e);
            for (let e = 0; e < i.length; e += 1) t.push(i[e]);
          }
          return ue(t);
        },
        children: function (e) {
          const t = [];
          for (let s = 0; s < this.length; s += 1) {
            const i = this[s].children;
            for (let s = 0; s < i.length; s += 1)
              (e && !ue(i[s]).is(e)) || t.push(i[s]);
          }
          return ue(t);
        },
        filter: function (e) {
          return ue(de(this, e));
        },
        remove: function () {
          for (let e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
      };
      Object.keys(fe).forEach((e) => {
        Object.defineProperty(ue.fn, e, { value: fe[e], writable: !0 });
      });
      const ge = ue;
      function me(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function ve() {
        return Date.now();
      }
      function ye(e, t) {
        void 0 === t && (t = "x");
        const s = ae();
        let i, n, r;
        const o = (function (e) {
          const t = ae();
          let s;
          return (
            t.getComputedStyle && (s = t.getComputedStyle(e, null)),
            !s && e.currentStyle && (s = e.currentStyle),
            s || (s = e.style),
            s
          );
        })(e);
        return (
          s.WebKitCSSMatrix
            ? ((n = o.transform || o.webkitTransform),
              n.split(",").length > 6 &&
                (n = n
                  .split(", ")
                  .map((e) => e.replace(",", "."))
                  .join(", ")),
              (r = new s.WebKitCSSMatrix("none" === n ? "" : n)))
            : ((r =
                o.MozTransform ||
                o.OTransform ||
                o.MsTransform ||
                o.msTransform ||
                o.transform ||
                o
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,")),
              (i = r.toString().split(","))),
          "x" === t &&
            (n = s.WebKitCSSMatrix
              ? r.m41
              : 16 === i.length
              ? parseFloat(i[12])
              : parseFloat(i[4])),
          "y" === t &&
            (n = s.WebKitCSSMatrix
              ? r.m42
              : 16 === i.length
              ? parseFloat(i[13])
              : parseFloat(i[5])),
          n || 0
        );
      }
      function be(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function we(e) {
        return "undefined" != typeof window && void 0 !== window.HTMLElement
          ? e instanceof HTMLElement
          : e && (1 === e.nodeType || 11 === e.nodeType);
      }
      function xe() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let s = 1; s < arguments.length; s += 1) {
          const i = s < 0 || arguments.length <= s ? void 0 : arguments[s];
          if (null != i && !we(i)) {
            const s = Object.keys(Object(i)).filter((e) => t.indexOf(e) < 0);
            for (let t = 0, n = s.length; t < n; t += 1) {
              const n = s[t],
                r = Object.getOwnPropertyDescriptor(i, n);
              void 0 !== r &&
                r.enumerable &&
                (be(e[n]) && be(i[n])
                  ? i[n].__swiper__
                    ? (e[n] = i[n])
                    : xe(e[n], i[n])
                  : !be(e[n]) && be(i[n])
                  ? ((e[n] = {}),
                    i[n].__swiper__ ? (e[n] = i[n]) : xe(e[n], i[n]))
                  : (e[n] = i[n]));
            }
          }
        }
        return e;
      }
      function Se(e, t, s) {
        e.style.setProperty(t, s);
      }
      function Ee(e) {
        let { swiper: t, targetPosition: s, side: i } = e;
        const n = ae(),
          r = -t.translate;
        let o,
          a = null;
        const l = t.params.speed;
        (t.wrapperEl.style.scrollSnapType = "none"),
          n.cancelAnimationFrame(t.cssModeFrameID);
        const c = s > r ? "next" : "prev",
          d = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
          u = () => {
            (o = new Date().getTime()), null === a && (a = o);
            const e = Math.max(Math.min((o - a) / l, 1), 0),
              c = 0.5 - Math.cos(e * Math.PI) / 2;
            let h = r + c * (s - r);
            if ((d(h, s) && (h = s), t.wrapperEl.scrollTo({ [i]: h }), d(h, s)))
              return (
                (t.wrapperEl.style.overflow = "hidden"),
                (t.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (t.wrapperEl.style.overflow = ""),
                    t.wrapperEl.scrollTo({ [i]: h });
                }),
                void n.cancelAnimationFrame(t.cssModeFrameID)
              );
            t.cssModeFrameID = n.requestAnimationFrame(u);
          };
        u();
      }
      let Ce, Te, Oe;
      function Le() {
        return (
          Ce ||
            (Ce = (function () {
              const e = ae(),
                t = re();
              return {
                smoothScroll:
                  t.documentElement &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
                passiveListener: (function () {
                  let t = !1;
                  try {
                    const s = Object.defineProperty({}, "passive", {
                      get() {
                        t = !0;
                      },
                    });
                    e.addEventListener("testPassiveListener", null, s);
                  } catch (e) {}
                  return t;
                })(),
                gestures: "ongesturestart" in e,
              };
            })()),
          Ce
        );
      }
      function Ae(e) {
        return (
          void 0 === e && (e = {}),
          Te ||
            (Te = (function (e) {
              let { userAgent: t } = void 0 === e ? {} : e;
              const s = Le(),
                i = ae(),
                n = i.navigator.platform,
                r = t || i.navigator.userAgent,
                o = { ios: !1, android: !1 },
                a = i.screen.width,
                l = i.screen.height,
                c = r.match(/(Android);?[\s\/]+([\d.]+)?/);
              let d = r.match(/(iPad).*OS\s([\d_]+)/);
              const u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
                h = !d && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                p = "Win32" === n;
              let f = "MacIntel" === n;
              return (
                !d &&
                  f &&
                  s.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf(`${a}x${l}`) >= 0 &&
                  ((d = r.match(/(Version)\/([\d.]+)/)),
                  d || (d = [0, 1, "13_0_0"]),
                  (f = !1)),
                c && !p && ((o.os = "android"), (o.android = !0)),
                (d || h || u) && ((o.os = "ios"), (o.ios = !0)),
                o
              );
            })(e)),
          Te
        );
      }
      function Ie() {
        return (
          Oe ||
            (Oe = (function () {
              const e = ae();
              return {
                isSafari: (function () {
                  const t = e.navigator.userAgent.toLowerCase();
                  return (
                    t.indexOf("safari") >= 0 &&
                    t.indexOf("chrome") < 0 &&
                    t.indexOf("android") < 0
                  );
                })(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  e.navigator.userAgent
                ),
              };
            })()),
          Oe
        );
      }
      const ke = {
        on(e, t, s) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" != typeof t) return i;
          const n = s ? "unshift" : "push";
          return (
            e.split(" ").forEach((e) => {
              i.eventsListeners[e] || (i.eventsListeners[e] = []),
                i.eventsListeners[e][n](t);
            }),
            i
          );
        },
        once(e, t, s) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" != typeof t) return i;
          function n() {
            i.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
            for (var s = arguments.length, r = new Array(s), o = 0; o < s; o++)
              r[o] = arguments[o];
            t.apply(i, r);
          }
          return (n.__emitterProxy = t), i.on(e, n, s);
        },
        onAny(e, t) {
          const s = this;
          if (!s.eventsListeners || s.destroyed) return s;
          if ("function" != typeof e) return s;
          const i = t ? "unshift" : "push";
          return (
            s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
          );
        },
        offAny(e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          const s = t.eventsAnyListeners.indexOf(e);
          return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
        },
        off(e, t) {
          const s = this;
          return !s.eventsListeners || s.destroyed
            ? s
            : s.eventsListeners
            ? (e.split(" ").forEach((e) => {
                void 0 === t
                  ? (s.eventsListeners[e] = [])
                  : s.eventsListeners[e] &&
                    s.eventsListeners[e].forEach((i, n) => {
                      (i === t ||
                        (i.__emitterProxy && i.__emitterProxy === t)) &&
                        s.eventsListeners[e].splice(n, 1);
                    });
              }),
              s)
            : s;
        },
        emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsListeners) return e;
          let t, s, i;
          for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          "string" == typeof r[0] || Array.isArray(r[0])
            ? ((t = r[0]), (s = r.slice(1, r.length)), (i = e))
            : ((t = r[0].events), (s = r[0].data), (i = r[0].context || e)),
            s.unshift(i);
          return (
            (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
              e.eventsAnyListeners &&
                e.eventsAnyListeners.length &&
                e.eventsAnyListeners.forEach((e) => {
                  e.apply(i, [t, ...s]);
                }),
                e.eventsListeners &&
                  e.eventsListeners[t] &&
                  e.eventsListeners[t].forEach((e) => {
                    e.apply(i, s);
                  });
            }),
            e
          );
        },
      };
      const _e = {
        updateSize: function () {
          const e = this;
          let t, s;
          const i = e.$el;
          (t =
            void 0 !== e.params.width && null !== e.params.width
              ? e.params.width
              : i[0].clientWidth),
            (s =
              void 0 !== e.params.height && null !== e.params.height
                ? e.params.height
                : i[0].clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === s && e.isVertical()) ||
              ((t =
                t -
                parseInt(i.css("padding-left") || 0, 10) -
                parseInt(i.css("padding-right") || 0, 10)),
              (s =
                s -
                parseInt(i.css("padding-top") || 0, 10) -
                parseInt(i.css("padding-bottom") || 0, 10)),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(s) && (s = 0),
              Object.assign(e, {
                width: t,
                height: s,
                size: e.isHorizontal() ? t : s,
              }));
        },
        updateSlides: function () {
          const e = this;
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[t];
          }
          function s(e, s) {
            return parseFloat(e.getPropertyValue(t(s)) || 0);
          }
          const i = e.params,
            { $wrapperEl: n, size: r, rtlTranslate: o, wrongRTL: a } = e,
            l = e.virtual && i.virtual.enabled,
            c = l ? e.virtual.slides.length : e.slides.length,
            d = n.children(`.${e.params.slideClass}`),
            u = l ? e.virtual.slides.length : d.length;
          let h = [];
          const p = [],
            f = [];
          let g = i.slidesOffsetBefore;
          "function" == typeof g && (g = i.slidesOffsetBefore.call(e));
          let m = i.slidesOffsetAfter;
          "function" == typeof m && (m = i.slidesOffsetAfter.call(e));
          const v = e.snapGrid.length,
            y = e.slidesGrid.length;
          let b = i.spaceBetween,
            w = -g,
            x = 0,
            S = 0;
          if (void 0 === r) return;
          "string" == typeof b &&
            b.indexOf("%") >= 0 &&
            (b = (parseFloat(b.replace("%", "")) / 100) * r),
            (e.virtualSize = -b),
            o
              ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
              : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
            i.centeredSlides &&
              i.cssMode &&
              (Se(e.wrapperEl, "--swiper-centered-offset-before", ""),
              Se(e.wrapperEl, "--swiper-centered-offset-after", ""));
          const E = i.grid && i.grid.rows > 1 && e.grid;
          let C;
          E && e.grid.initSlides(u);
          const T =
            "auto" === i.slidesPerView &&
            i.breakpoints &&
            Object.keys(i.breakpoints).filter(
              (e) => void 0 !== i.breakpoints[e].slidesPerView
            ).length > 0;
          for (let n = 0; n < u; n += 1) {
            C = 0;
            const o = d.eq(n);
            if (
              (E && e.grid.updateSlide(n, o, u, t), "none" !== o.css("display"))
            ) {
              if ("auto" === i.slidesPerView) {
                T && (d[n].style[t("width")] = "");
                const r = getComputedStyle(o[0]),
                  a = o[0].style.transform,
                  l = o[0].style.webkitTransform;
                if (
                  (a && (o[0].style.transform = "none"),
                  l && (o[0].style.webkitTransform = "none"),
                  i.roundLengths)
                )
                  C = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
                else {
                  const e = s(r, "width"),
                    t = s(r, "padding-left"),
                    i = s(r, "padding-right"),
                    n = s(r, "margin-left"),
                    a = s(r, "margin-right"),
                    l = r.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) C = e + n + a;
                  else {
                    const { clientWidth: s, offsetWidth: r } = o[0];
                    C = e + t + i + n + a + (r - s);
                  }
                }
                a && (o[0].style.transform = a),
                  l && (o[0].style.webkitTransform = l),
                  i.roundLengths && (C = Math.floor(C));
              } else
                (C = (r - (i.slidesPerView - 1) * b) / i.slidesPerView),
                  i.roundLengths && (C = Math.floor(C)),
                  d[n] && (d[n].style[t("width")] = `${C}px`);
              d[n] && (d[n].swiperSlideSize = C),
                f.push(C),
                i.centeredSlides
                  ? ((w = w + C / 2 + x / 2 + b),
                    0 === x && 0 !== n && (w = w - r / 2 - b),
                    0 === n && (w = w - r / 2 - b),
                    Math.abs(w) < 0.001 && (w = 0),
                    i.roundLengths && (w = Math.floor(w)),
                    S % i.slidesPerGroup == 0 && h.push(w),
                    p.push(w))
                  : (i.roundLengths && (w = Math.floor(w)),
                    (S - Math.min(e.params.slidesPerGroupSkip, S)) %
                      e.params.slidesPerGroup ==
                      0 && h.push(w),
                    p.push(w),
                    (w = w + C + b)),
                (e.virtualSize += C + b),
                (x = C),
                (S += 1);
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, r) + m),
            o &&
              a &&
              ("slide" === i.effect || "coverflow" === i.effect) &&
              n.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
            i.setWrapperSize &&
              n.css({ [t("width")]: `${e.virtualSize + i.spaceBetween}px` }),
            E && e.grid.updateWrapperSize(C, h, t),
            !i.centeredSlides)
          ) {
            const t = [];
            for (let s = 0; s < h.length; s += 1) {
              let n = h[s];
              i.roundLengths && (n = Math.floor(n)),
                h[s] <= e.virtualSize - r && t.push(n);
            }
            (h = t),
              Math.floor(e.virtualSize - r) - Math.floor(h[h.length - 1]) > 1 &&
                h.push(e.virtualSize - r);
          }
          if ((0 === h.length && (h = [0]), 0 !== i.spaceBetween)) {
            const s = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
            d.filter((e, t) => !i.cssMode || t !== d.length - 1).css({
              [s]: `${b}px`,
            });
          }
          if (i.centeredSlides && i.centeredSlidesBounds) {
            let e = 0;
            f.forEach((t) => {
              e += t + (i.spaceBetween ? i.spaceBetween : 0);
            }),
              (e -= i.spaceBetween);
            const t = e - r;
            h = h.map((e) => (e < 0 ? -g : e > t ? t + m : e));
          }
          if (i.centerInsufficientSlides) {
            let e = 0;
            if (
              (f.forEach((t) => {
                e += t + (i.spaceBetween ? i.spaceBetween : 0);
              }),
              (e -= i.spaceBetween),
              e < r)
            ) {
              const t = (r - e) / 2;
              h.forEach((e, s) => {
                h[s] = e - t;
              }),
                p.forEach((e, s) => {
                  p[s] = e + t;
                });
            }
          }
          if (
            (Object.assign(e, {
              slides: d,
              snapGrid: h,
              slidesGrid: p,
              slidesSizesGrid: f,
            }),
            i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
          ) {
            Se(e.wrapperEl, "--swiper-centered-offset-before", -h[0] + "px"),
              Se(
                e.wrapperEl,
                "--swiper-centered-offset-after",
                e.size / 2 - f[f.length - 1] / 2 + "px"
              );
            const t = -e.snapGrid[0],
              s = -e.slidesGrid[0];
            (e.snapGrid = e.snapGrid.map((e) => e + t)),
              (e.slidesGrid = e.slidesGrid.map((e) => e + s));
          }
          if (
            (u !== c && e.emit("slidesLengthChange"),
            h.length !== v &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit("snapGridLengthChange")),
            p.length !== y && e.emit("slidesGridLengthChange"),
            i.watchSlidesProgress && e.updateSlidesOffset(),
            !(l || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
          ) {
            const t = `${i.containerModifierClass}backface-hidden`,
              s = e.$el.hasClass(t);
            u <= i.maxBackfaceHiddenSlides
              ? s || e.$el.addClass(t)
              : s && e.$el.removeClass(t);
          }
        },
        updateAutoHeight: function (e) {
          const t = this,
            s = [],
            i = t.virtual && t.params.virtual.enabled;
          let n,
            r = 0;
          "number" == typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed);
          const o = (e) =>
            i
              ? t.slides.filter(
                  (t) =>
                    parseInt(t.getAttribute("data-swiper-slide-index"), 10) ===
                    e
                )[0]
              : t.slides.eq(e)[0];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)
              (t.visibleSlides || ge([])).each((e) => {
                s.push(e);
              });
            else
              for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
                const e = t.activeIndex + n;
                if (e > t.slides.length && !i) break;
                s.push(o(e));
              }
          else s.push(o(t.activeIndex));
          for (n = 0; n < s.length; n += 1)
            if (void 0 !== s[n]) {
              const e = s[n].offsetHeight;
              r = e > r ? e : r;
            }
          (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
        },
        updateSlidesOffset: function () {
          const e = this,
            t = e.slides;
          for (let s = 0; s < t.length; s += 1)
            t[s].swiperSlideOffset = e.isHorizontal()
              ? t[s].offsetLeft
              : t[s].offsetTop;
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          const t = this,
            s = t.params,
            { slides: i, rtlTranslate: n, snapGrid: r } = t;
          if (0 === i.length) return;
          void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
          let o = -e;
          n && (o = e),
            i.removeClass(s.slideVisibleClass),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = []);
          for (let e = 0; e < i.length; e += 1) {
            const a = i[e];
            let l = a.swiperSlideOffset;
            s.cssMode && s.centeredSlides && (l -= i[0].swiperSlideOffset);
            const c =
                (o + (s.centeredSlides ? t.minTranslate() : 0) - l) /
                (a.swiperSlideSize + s.spaceBetween),
              d =
                (o - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - l) /
                (a.swiperSlideSize + s.spaceBetween),
              u = -(o - l),
              h = u + t.slidesSizesGrid[e];
            ((u >= 0 && u < t.size - 1) ||
              (h > 1 && h <= t.size) ||
              (u <= 0 && h >= t.size)) &&
              (t.visibleSlides.push(a),
              t.visibleSlidesIndexes.push(e),
              i.eq(e).addClass(s.slideVisibleClass)),
              (a.progress = n ? -c : c),
              (a.originalProgress = n ? -d : d);
          }
          t.visibleSlides = ge(t.visibleSlides);
        },
        updateProgress: function (e) {
          const t = this;
          if (void 0 === e) {
            const s = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * s) || 0;
          }
          const s = t.params,
            i = t.maxTranslate() - t.minTranslate();
          let { progress: n, isBeginning: r, isEnd: o } = t;
          const a = r,
            l = o;
          0 === i
            ? ((n = 0), (r = !0), (o = !0))
            : ((n = (e - t.minTranslate()) / i), (r = n <= 0), (o = n >= 1)),
            Object.assign(t, { progress: n, isBeginning: r, isEnd: o }),
            (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
              t.updateSlidesProgress(e),
            r && !a && t.emit("reachBeginning toEdge"),
            o && !l && t.emit("reachEnd toEdge"),
            ((a && !r) || (l && !o)) && t.emit("fromEdge"),
            t.emit("progress", n);
        },
        updateSlidesClasses: function () {
          const e = this,
            {
              slides: t,
              params: s,
              $wrapperEl: i,
              activeIndex: n,
              realIndex: r,
            } = e,
            o = e.virtual && s.virtual.enabled;
          let a;
          t.removeClass(
            `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
          ),
            (a = o
              ? e.$wrapperEl.find(
                  `.${s.slideClass}[data-swiper-slide-index="${n}"]`
                )
              : t.eq(n)),
            a.addClass(s.slideActiveClass),
            s.loop &&
              (a.hasClass(s.slideDuplicateClass)
                ? i
                    .children(
                      `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                    )
                    .addClass(s.slideDuplicateActiveClass)
                : i
                    .children(
                      `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                    )
                    .addClass(s.slideDuplicateActiveClass));
          let l = a
            .nextAll(`.${s.slideClass}`)
            .eq(0)
            .addClass(s.slideNextClass);
          s.loop &&
            0 === l.length &&
            ((l = t.eq(0)), l.addClass(s.slideNextClass));
          let c = a
            .prevAll(`.${s.slideClass}`)
            .eq(0)
            .addClass(s.slidePrevClass);
          s.loop &&
            0 === c.length &&
            ((c = t.eq(-1)), c.addClass(s.slidePrevClass)),
            s.loop &&
              (l.hasClass(s.slideDuplicateClass)
                ? i
                    .children(
                      `.${s.slideClass}:not(.${
                        s.slideDuplicateClass
                      })[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(s.slideDuplicateNextClass)
                : i
                    .children(
                      `.${s.slideClass}.${
                        s.slideDuplicateClass
                      }[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(s.slideDuplicateNextClass),
              c.hasClass(s.slideDuplicateClass)
                ? i
                    .children(
                      `.${s.slideClass}:not(.${
                        s.slideDuplicateClass
                      })[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(s.slideDuplicatePrevClass)
                : i
                    .children(
                      `.${s.slideClass}.${
                        s.slideDuplicateClass
                      }[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(s.slideDuplicatePrevClass)),
            e.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          const t = this,
            s = t.rtlTranslate ? t.translate : -t.translate,
            {
              slidesGrid: i,
              snapGrid: n,
              params: r,
              activeIndex: o,
              realIndex: a,
              snapIndex: l,
            } = t;
          let c,
            d = e;
          if (void 0 === d) {
            for (let e = 0; e < i.length; e += 1)
              void 0 !== i[e + 1]
                ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2
                  ? (d = e)
                  : s >= i[e] && s < i[e + 1] && (d = e + 1)
                : s >= i[e] && (d = e);
            r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
          }
          if (n.indexOf(s) >= 0) c = n.indexOf(s);
          else {
            const e = Math.min(r.slidesPerGroupSkip, d);
            c = e + Math.floor((d - e) / r.slidesPerGroup);
          }
          if ((c >= n.length && (c = n.length - 1), d === o))
            return void (
              c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
            );
          const u = parseInt(
            t.slides.eq(d).attr("data-swiper-slide-index") || d,
            10
          );
          Object.assign(t, {
            snapIndex: c,
            realIndex: u,
            previousIndex: o,
            activeIndex: d,
          }),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            a !== u && t.emit("realIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) &&
              t.emit("slideChange");
        },
        updateClickedSlide: function (e) {
          const t = this,
            s = t.params,
            i = ge(e).closest(`.${s.slideClass}`)[0];
          let n,
            r = !1;
          if (i)
            for (let e = 0; e < t.slides.length; e += 1)
              if (t.slides[e] === i) {
                (r = !0), (n = e);
                break;
              }
          if (!i || !r)
            return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
          (t.clickedSlide = i),
            t.virtual && t.params.virtual.enabled
              ? (t.clickedIndex = parseInt(
                  ge(i).attr("data-swiper-slide-index"),
                  10
                ))
              : (t.clickedIndex = n),
            s.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide();
        },
      };
      const Me = {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          const {
            params: t,
            rtlTranslate: s,
            translate: i,
            $wrapperEl: n,
          } = this;
          if (t.virtualTranslate) return s ? -i : i;
          if (t.cssMode) return i;
          let r = ye(n[0], e);
          return s && (r = -r), r || 0;
        },
        setTranslate: function (e, t) {
          const s = this,
            {
              rtlTranslate: i,
              params: n,
              $wrapperEl: r,
              wrapperEl: o,
              progress: a,
            } = s;
          let l,
            c = 0,
            d = 0;
          s.isHorizontal() ? (c = i ? -e : e) : (d = e),
            n.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
            n.cssMode
              ? (o[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  s.isHorizontal() ? -c : -d)
              : n.virtualTranslate ||
                r.transform(`translate3d(${c}px, ${d}px, 0px)`),
            (s.previousTranslate = s.translate),
            (s.translate = s.isHorizontal() ? c : d);
          const u = s.maxTranslate() - s.minTranslate();
          (l = 0 === u ? 0 : (e - s.minTranslate()) / u),
            l !== a && s.updateProgress(e),
            s.emit("setTranslate", s.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, s, i, n) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === s && (s = !0),
            void 0 === i && (i = !0);
          const r = this,
            { params: o, wrapperEl: a } = r;
          if (r.animating && o.preventInteractionOnTransition) return !1;
          const l = r.minTranslate(),
            c = r.maxTranslate();
          let d;
          if (
            ((d = i && e > l ? l : i && e < c ? c : e),
            r.updateProgress(d),
            o.cssMode)
          ) {
            const e = r.isHorizontal();
            if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -d;
            else {
              if (!r.support.smoothScroll)
                return (
                  Ee({
                    swiper: r,
                    targetPosition: -d,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              a.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
            }
            return !0;
          }
          return (
            0 === t
              ? (r.setTransition(0),
                r.setTranslate(d),
                s &&
                  (r.emit("beforeTransitionStart", t, n),
                  r.emit("transitionEnd")))
              : (r.setTransition(t),
                r.setTranslate(d),
                s &&
                  (r.emit("beforeTransitionStart", t, n),
                  r.emit("transitionStart")),
                r.animating ||
                  ((r.animating = !0),
                  r.onTranslateToWrapperTransitionEnd ||
                    (r.onTranslateToWrapperTransitionEnd = function (e) {
                      r &&
                        !r.destroyed &&
                        e.target === this &&
                        (r.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        r.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        (r.onTranslateToWrapperTransitionEnd = null),
                        delete r.onTranslateToWrapperTransitionEnd,
                        s && r.emit("transitionEnd"));
                    }),
                  r.$wrapperEl[0].addEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    r.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
      function Pe(e) {
        let { swiper: t, runCallbacks: s, direction: i, step: n } = e;
        const { activeIndex: r, previousIndex: o } = t;
        let a = i;
        if (
          (a || (a = r > o ? "next" : r < o ? "prev" : "reset"),
          t.emit(`transition${n}`),
          s && r !== o)
        ) {
          if ("reset" === a) return void t.emit(`slideResetTransition${n}`);
          t.emit(`slideChangeTransition${n}`),
            "next" === a
              ? t.emit(`slideNextTransition${n}`)
              : t.emit(`slidePrevTransition${n}`);
        }
      }
      const $e = {
        slideTo: function (e, t, s, i, n) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === s && (s = !0),
            "number" != typeof e && "string" != typeof e)
          )
            throw new Error(
              `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
            );
          if ("string" == typeof e) {
            const t = parseInt(e, 10);
            if (!isFinite(t))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
              );
            e = t;
          }
          const r = this;
          let o = e;
          o < 0 && (o = 0);
          const {
            params: a,
            snapGrid: l,
            slidesGrid: c,
            previousIndex: d,
            activeIndex: u,
            rtlTranslate: h,
            wrapperEl: p,
            enabled: f,
          } = r;
          if (
            (r.animating && a.preventInteractionOnTransition) ||
            (!f && !i && !n)
          )
            return !1;
          const g = Math.min(r.params.slidesPerGroupSkip, o);
          let m = g + Math.floor((o - g) / r.params.slidesPerGroup);
          m >= l.length && (m = l.length - 1),
            (u || a.initialSlide || 0) === (d || 0) &&
              s &&
              r.emit("beforeSlideChangeStart");
          const v = -l[m];
          if ((r.updateProgress(v), a.normalizeSlideIndex))
            for (let e = 0; e < c.length; e += 1) {
              const t = -Math.floor(100 * v),
                s = Math.floor(100 * c[e]),
                i = Math.floor(100 * c[e + 1]);
              void 0 !== c[e + 1]
                ? t >= s && t < i - (i - s) / 2
                  ? (o = e)
                  : t >= s && t < i && (o = e + 1)
                : t >= s && (o = e);
            }
          if (r.initialized && o !== u) {
            if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
              return !1;
            if (
              !r.allowSlidePrev &&
              v > r.translate &&
              v > r.maxTranslate() &&
              (u || 0) !== o
            )
              return !1;
          }
          let y;
          if (
            ((y = o > u ? "next" : o < u ? "prev" : "reset"),
            (h && -v === r.translate) || (!h && v === r.translate))
          )
            return (
              r.updateActiveIndex(o),
              a.autoHeight && r.updateAutoHeight(),
              r.updateSlidesClasses(),
              "slide" !== a.effect && r.setTranslate(v),
              "reset" !== y && (r.transitionStart(s, y), r.transitionEnd(s, y)),
              !1
            );
          if (a.cssMode) {
            const e = r.isHorizontal(),
              s = h ? v : -v;
            if (0 === t) {
              const t = r.virtual && r.params.virtual.enabled;
              t &&
                ((r.wrapperEl.style.scrollSnapType = "none"),
                (r._immediateVirtual = !0)),
                (p[e ? "scrollLeft" : "scrollTop"] = s),
                t &&
                  requestAnimationFrame(() => {
                    (r.wrapperEl.style.scrollSnapType = ""),
                      (r._swiperImmediateVirtual = !1);
                  });
            } else {
              if (!r.support.smoothScroll)
                return (
                  Ee({
                    swiper: r,
                    targetPosition: s,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              p.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
            }
            return !0;
          }
          return (
            r.setTransition(t),
            r.setTranslate(v),
            r.updateActiveIndex(o),
            r.updateSlidesClasses(),
            r.emit("beforeTransitionStart", t, i),
            r.transitionStart(s, y),
            0 === t
              ? r.transitionEnd(s, y)
              : r.animating ||
                ((r.animating = !0),
                r.onSlideToWrapperTransitionEnd ||
                  (r.onSlideToWrapperTransitionEnd = function (e) {
                    r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        r.onSlideToWrapperTransitionEnd
                      ),
                      r.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        r.onSlideToWrapperTransitionEnd
                      ),
                      (r.onSlideToWrapperTransitionEnd = null),
                      delete r.onSlideToWrapperTransitionEnd,
                      r.transitionEnd(s, y));
                  }),
                r.$wrapperEl[0].addEventListener(
                  "transitionend",
                  r.onSlideToWrapperTransitionEnd
                ),
                r.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  r.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function (e, t, s, i) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === s && (s = !0),
            "string" == typeof e)
          ) {
            const t = parseInt(e, 10);
            if (!isFinite(t))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
              );
            e = t;
          }
          const n = this;
          let r = e;
          return n.params.loop && (r += n.loopedSlides), n.slideTo(r, t, s, i);
        },
        slideNext: function (e, t, s) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const i = this,
            { animating: n, enabled: r, params: o } = i;
          if (!r) return i;
          let a = o.slidesPerGroup;
          "auto" === o.slidesPerView &&
            1 === o.slidesPerGroup &&
            o.slidesPerGroupAuto &&
            (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
          const l = i.activeIndex < o.slidesPerGroupSkip ? 1 : a;
          if (o.loop) {
            if (n && o.loopPreventsSlide) return !1;
            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
          }
          return o.rewind && i.isEnd
            ? i.slideTo(0, e, t, s)
            : i.slideTo(i.activeIndex + l, e, t, s);
        },
        slidePrev: function (e, t, s) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const i = this,
            {
              params: n,
              animating: r,
              snapGrid: o,
              slidesGrid: a,
              rtlTranslate: l,
              enabled: c,
            } = i;
          if (!c) return i;
          if (n.loop) {
            if (r && n.loopPreventsSlide) return !1;
            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
          }
          function d(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          const u = d(l ? i.translate : -i.translate),
            h = o.map((e) => d(e));
          let p = o[h.indexOf(u) - 1];
          if (void 0 === p && n.cssMode) {
            let e;
            o.forEach((t, s) => {
              u >= t && (e = s);
            }),
              void 0 !== e && (p = o[e > 0 ? e - 1 : e]);
          }
          let f = 0;
          if (
            (void 0 !== p &&
              ((f = a.indexOf(p)),
              f < 0 && (f = i.activeIndex - 1),
              "auto" === n.slidesPerView &&
                1 === n.slidesPerGroup &&
                n.slidesPerGroupAuto &&
                ((f = f - i.slidesPerViewDynamic("previous", !0) + 1),
                (f = Math.max(f, 0)))),
            n.rewind && i.isBeginning)
          ) {
            const n =
              i.params.virtual && i.params.virtual.enabled && i.virtual
                ? i.virtual.slides.length - 1
                : i.slides.length - 1;
            return i.slideTo(n, e, t, s);
          }
          return i.slideTo(f, e, t, s);
        },
        slideReset: function (e, t, s) {
          return (
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, s)
          );
        },
        slideToClosest: function (e, t, s, i) {
          void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === i && (i = 0.5);
          const n = this;
          let r = n.activeIndex;
          const o = Math.min(n.params.slidesPerGroupSkip, r),
            a = o + Math.floor((r - o) / n.params.slidesPerGroup),
            l = n.rtlTranslate ? n.translate : -n.translate;
          if (l >= n.snapGrid[a]) {
            const e = n.snapGrid[a];
            l - e > (n.snapGrid[a + 1] - e) * i &&
              (r += n.params.slidesPerGroup);
          } else {
            const e = n.snapGrid[a - 1];
            l - e <= (n.snapGrid[a] - e) * i && (r -= n.params.slidesPerGroup);
          }
          return (
            (r = Math.max(r, 0)),
            (r = Math.min(r, n.slidesGrid.length - 1)),
            n.slideTo(r, e, t, s)
          );
        },
        slideToClickedSlide: function () {
          const e = this,
            { params: t, $wrapperEl: s } = e,
            i =
              "auto" === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView;
          let n,
            r = e.clickedIndex;
          if (t.loop) {
            if (e.animating) return;
            (n = parseInt(
              ge(e.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              t.centeredSlides
                ? r < e.loopedSlides - i / 2 ||
                  r > e.slides.length - e.loopedSlides + i / 2
                  ? (e.loopFix(),
                    (r = s
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    me(() => {
                      e.slideTo(r);
                    }))
                  : e.slideTo(r)
                : r > e.slides.length - i
                ? (e.loopFix(),
                  (r = s
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  me(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r);
          } else e.slideTo(r);
        },
      };
      const ze = {
        loopCreate: function () {
          const e = this,
            t = re(),
            { params: s, $wrapperEl: i } = e,
            n = i.children().length > 0 ? ge(i.children()[0].parentNode) : i;
          n.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
          let r = n.children(`.${s.slideClass}`);
          if (s.loopFillGroupWithBlank) {
            const e = s.slidesPerGroup - (r.length % s.slidesPerGroup);
            if (e !== s.slidesPerGroup) {
              for (let i = 0; i < e; i += 1) {
                const e = ge(t.createElement("div")).addClass(
                  `${s.slideClass} ${s.slideBlankClass}`
                );
                n.append(e);
              }
              r = n.children(`.${s.slideClass}`);
            }
          }
          "auto" !== s.slidesPerView ||
            s.loopedSlides ||
            (s.loopedSlides = r.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(s.loopedSlides || s.slidesPerView, 10)
            )),
            (e.loopedSlides += s.loopAdditionalSlides),
            e.loopedSlides > r.length && (e.loopedSlides = r.length);
          const o = [],
            a = [];
          r.each((t, s) => {
            const i = ge(t);
            s < e.loopedSlides && a.push(t),
              s < r.length && s >= r.length - e.loopedSlides && o.push(t),
              i.attr("data-swiper-slide-index", s);
          });
          for (let e = 0; e < a.length; e += 1)
            n.append(ge(a[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
          for (let e = o.length - 1; e >= 0; e -= 1)
            n.prepend(ge(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
        },
        loopFix: function () {
          const e = this;
          e.emit("beforeLoopFix");
          const {
            activeIndex: t,
            slides: s,
            loopedSlides: i,
            allowSlidePrev: n,
            allowSlideNext: r,
            snapGrid: o,
            rtlTranslate: a,
          } = e;
          let l;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          const c = -o[t] - e.getTranslate();
          if (t < i) {
            (l = s.length - 3 * i + t), (l += i);
            e.slideTo(l, 0, !1, !0) &&
              0 !== c &&
              e.setTranslate((a ? -e.translate : e.translate) - c);
          } else if (t >= s.length - i) {
            (l = -s.length + t + i), (l += i);
            e.slideTo(l, 0, !1, !0) &&
              0 !== c &&
              e.setTranslate((a ? -e.translate : e.translate) - c);
          }
          (e.allowSlidePrev = n), (e.allowSlideNext = r), e.emit("loopFix");
        },
        loopDestroy: function () {
          const { $wrapperEl: e, params: t, slides: s } = this;
          e
            .children(
              `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
            )
            .remove(),
            s.removeAttr("data-swiper-slide-index");
        },
      };
      function De(e) {
        const t = this,
          s = re(),
          i = ae(),
          n = t.touchEventsData,
          { params: r, touches: o, enabled: a } = t;
        if (!a) return;
        if (t.animating && r.preventInteractionOnTransition) return;
        !t.animating && r.cssMode && r.loop && t.loopFix();
        let l = e;
        l.originalEvent && (l = l.originalEvent);
        let c = ge(l.target);
        if ("wrapper" === r.touchEventsTarget && !c.closest(t.wrapperEl).length)
          return;
        if (
          ((n.isTouchEvent = "touchstart" === l.type),
          !n.isTouchEvent && "which" in l && 3 === l.which)
        )
          return;
        if (!n.isTouchEvent && "button" in l && l.button > 0) return;
        if (n.isTouched && n.isMoved) return;
        !!r.noSwipingClass &&
          "" !== r.noSwipingClass &&
          l.target &&
          l.target.shadowRoot &&
          e.path &&
          e.path[0] &&
          (c = ge(e.path[0]));
        const d = r.noSwipingSelector
            ? r.noSwipingSelector
            : `.${r.noSwipingClass}`,
          u = !(!l.target || !l.target.shadowRoot);
        if (
          r.noSwiping &&
          (u
            ? (function (e, t) {
                return (
                  void 0 === t && (t = this),
                  (function t(s) {
                    if (!s || s === re() || s === ae()) return null;
                    s.assignedSlot && (s = s.assignedSlot);
                    const i = s.closest(e);
                    return i || s.getRootNode
                      ? i || t(s.getRootNode().host)
                      : null;
                  })(t)
                );
              })(d, c[0])
            : c.closest(d)[0])
        )
          return void (t.allowClick = !0);
        if (r.swipeHandler && !c.closest(r.swipeHandler)[0]) return;
        (o.currentX =
          "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
          (o.currentY =
            "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
        const h = o.currentX,
          p = o.currentY,
          f = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
          g = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
        if (f && (h <= g || h >= i.innerWidth - g)) {
          if ("prevent" !== f) return;
          e.preventDefault();
        }
        if (
          (Object.assign(n, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0,
          }),
          (o.startX = h),
          (o.startY = p),
          (n.touchStartTime = ve()),
          (t.allowClick = !0),
          t.updateSize(),
          (t.swipeDirection = void 0),
          r.threshold > 0 && (n.allowThresholdMove = !1),
          "touchstart" !== l.type)
        ) {
          let e = !0;
          c.is(n.focusableElements) &&
            ((e = !1), "SELECT" === c[0].nodeName && (n.isTouched = !1)),
            s.activeElement &&
              ge(s.activeElement).is(n.focusableElements) &&
              s.activeElement !== c[0] &&
              s.activeElement.blur();
          const i = e && t.allowTouchMove && r.touchStartPreventDefault;
          (!r.touchStartForcePreventDefault && !i) ||
            c[0].isContentEditable ||
            l.preventDefault();
        }
        t.params.freeMode &&
          t.params.freeMode.enabled &&
          t.freeMode &&
          t.animating &&
          !r.cssMode &&
          t.freeMode.onTouchStart(),
          t.emit("touchStart", l);
      }
      function Be(e) {
        const t = re(),
          s = this,
          i = s.touchEventsData,
          { params: n, touches: r, rtlTranslate: o, enabled: a } = s;
        if (!a) return;
        let l = e;
        if ((l.originalEvent && (l = l.originalEvent), !i.isTouched))
          return void (
            i.startMoving &&
            i.isScrolling &&
            s.emit("touchMoveOpposite", l)
          );
        if (i.isTouchEvent && "touchmove" !== l.type) return;
        const c =
            "touchmove" === l.type &&
            l.targetTouches &&
            (l.targetTouches[0] || l.changedTouches[0]),
          d = "touchmove" === l.type ? c.pageX : l.pageX,
          u = "touchmove" === l.type ? c.pageY : l.pageY;
        if (l.preventedByNestedSwiper)
          return (r.startX = d), void (r.startY = u);
        if (!s.allowTouchMove)
          return (
            ge(l.target).is(i.focusableElements) || (s.allowClick = !1),
            void (
              i.isTouched &&
              (Object.assign(r, {
                startX: d,
                startY: u,
                currentX: d,
                currentY: u,
              }),
              (i.touchStartTime = ve()))
            )
          );
        if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
          if (s.isVertical()) {
            if (
              (u < r.startY && s.translate <= s.maxTranslate()) ||
              (u > r.startY && s.translate >= s.minTranslate())
            )
              return (i.isTouched = !1), void (i.isMoved = !1);
          } else if (
            (d < r.startX && s.translate <= s.maxTranslate()) ||
            (d > r.startX && s.translate >= s.minTranslate())
          )
            return;
        if (
          i.isTouchEvent &&
          t.activeElement &&
          l.target === t.activeElement &&
          ge(l.target).is(i.focusableElements)
        )
          return (i.isMoved = !0), void (s.allowClick = !1);
        if (
          (i.allowTouchCallbacks && s.emit("touchMove", l),
          l.targetTouches && l.targetTouches.length > 1)
        )
          return;
        (r.currentX = d), (r.currentY = u);
        const h = r.currentX - r.startX,
          p = r.currentY - r.startY;
        if (
          s.params.threshold &&
          Math.sqrt(h ** 2 + p ** 2) < s.params.threshold
        )
          return;
        if (void 0 === i.isScrolling) {
          let e;
          (s.isHorizontal() && r.currentY === r.startY) ||
          (s.isVertical() && r.currentX === r.startX)
            ? (i.isScrolling = !1)
            : h * h + p * p >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(p), Math.abs(h))) / Math.PI),
              (i.isScrolling = s.isHorizontal()
                ? e > n.touchAngle
                : 90 - e > n.touchAngle));
        }
        if (
          (i.isScrolling && s.emit("touchMoveOpposite", l),
          void 0 === i.startMoving &&
            ((r.currentX === r.startX && r.currentY === r.startY) ||
              (i.startMoving = !0)),
          i.isScrolling)
        )
          return void (i.isTouched = !1);
        if (!i.startMoving) return;
        (s.allowClick = !1),
          !n.cssMode && l.cancelable && l.preventDefault(),
          n.touchMoveStopPropagation && !n.nested && l.stopPropagation(),
          i.isMoved ||
            (n.loop && !n.cssMode && s.loopFix(),
            (i.startTranslate = s.getTranslate()),
            s.setTransition(0),
            s.animating &&
              s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
            (i.allowMomentumBounce = !1),
            !n.grabCursor ||
              (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
              s.setGrabCursor(!0),
            s.emit("sliderFirstMove", l)),
          s.emit("sliderMove", l),
          (i.isMoved = !0);
        let f = s.isHorizontal() ? h : p;
        (r.diff = f),
          (f *= n.touchRatio),
          o && (f = -f),
          (s.swipeDirection = f > 0 ? "prev" : "next"),
          (i.currentTranslate = f + i.startTranslate);
        let g = !0,
          m = n.resistanceRatio;
        if (
          (n.touchReleaseOnEdges && (m = 0),
          f > 0 && i.currentTranslate > s.minTranslate()
            ? ((g = !1),
              n.resistance &&
                (i.currentTranslate =
                  s.minTranslate() -
                  1 +
                  (-s.minTranslate() + i.startTranslate + f) ** m))
            : f < 0 &&
              i.currentTranslate < s.maxTranslate() &&
              ((g = !1),
              n.resistance &&
                (i.currentTranslate =
                  s.maxTranslate() +
                  1 -
                  (s.maxTranslate() - i.startTranslate - f) ** m)),
          g && (l.preventedByNestedSwiper = !0),
          !s.allowSlideNext &&
            "next" === s.swipeDirection &&
            i.currentTranslate < i.startTranslate &&
            (i.currentTranslate = i.startTranslate),
          !s.allowSlidePrev &&
            "prev" === s.swipeDirection &&
            i.currentTranslate > i.startTranslate &&
            (i.currentTranslate = i.startTranslate),
          s.allowSlidePrev ||
            s.allowSlideNext ||
            (i.currentTranslate = i.startTranslate),
          n.threshold > 0)
        ) {
          if (!(Math.abs(f) > n.threshold || i.allowThresholdMove))
            return void (i.currentTranslate = i.startTranslate);
          if (!i.allowThresholdMove)
            return (
              (i.allowThresholdMove = !0),
              (r.startX = r.currentX),
              (r.startY = r.currentY),
              (i.currentTranslate = i.startTranslate),
              void (r.diff = s.isHorizontal()
                ? r.currentX - r.startX
                : r.currentY - r.startY)
            );
        }
        n.followFinger &&
          !n.cssMode &&
          (((n.freeMode && n.freeMode.enabled && s.freeMode) ||
            n.watchSlidesProgress) &&
            (s.updateActiveIndex(), s.updateSlidesClasses()),
          s.params.freeMode &&
            n.freeMode.enabled &&
            s.freeMode &&
            s.freeMode.onTouchMove(),
          s.updateProgress(i.currentTranslate),
          s.setTranslate(i.currentTranslate));
      }
      function Ne(e) {
        const t = this,
          s = t.touchEventsData,
          {
            params: i,
            touches: n,
            rtlTranslate: r,
            slidesGrid: o,
            enabled: a,
          } = t;
        if (!a) return;
        let l = e;
        if (
          (l.originalEvent && (l = l.originalEvent),
          s.allowTouchCallbacks && t.emit("touchEnd", l),
          (s.allowTouchCallbacks = !1),
          !s.isTouched)
        )
          return (
            s.isMoved && i.grabCursor && t.setGrabCursor(!1),
            (s.isMoved = !1),
            void (s.startMoving = !1)
          );
        i.grabCursor &&
          s.isMoved &&
          s.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        const c = ve(),
          d = c - s.touchStartTime;
        if (t.allowClick) {
          const e = l.path || (l.composedPath && l.composedPath());
          t.updateClickedSlide((e && e[0]) || l.target),
            t.emit("tap click", l),
            d < 300 &&
              c - s.lastClickTime < 300 &&
              t.emit("doubleTap doubleClick", l);
        }
        if (
          ((s.lastClickTime = ve()),
          me(() => {
            t.destroyed || (t.allowClick = !0);
          }),
          !s.isTouched ||
            !s.isMoved ||
            !t.swipeDirection ||
            0 === n.diff ||
            s.currentTranslate === s.startTranslate)
        )
          return (
            (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1)
          );
        let u;
        if (
          ((s.isTouched = !1),
          (s.isMoved = !1),
          (s.startMoving = !1),
          (u = i.followFinger
            ? r
              ? t.translate
              : -t.translate
            : -s.currentTranslate),
          i.cssMode)
        )
          return;
        if (t.params.freeMode && i.freeMode.enabled)
          return void t.freeMode.onTouchEnd({ currentPos: u });
        let h = 0,
          p = t.slidesSizesGrid[0];
        for (
          let e = 0;
          e < o.length;
          e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
        ) {
          const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
          void 0 !== o[e + t]
            ? u >= o[e] && u < o[e + t] && ((h = e), (p = o[e + t] - o[e]))
            : u >= o[e] && ((h = e), (p = o[o.length - 1] - o[o.length - 2]));
        }
        let f = null,
          g = null;
        i.rewind &&
          (t.isBeginning
            ? (g =
                t.params.virtual && t.params.virtual.enabled && t.virtual
                  ? t.virtual.slides.length - 1
                  : t.slides.length - 1)
            : t.isEnd && (f = 0));
        const m = (u - o[h]) / p,
          v = h < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        if (d > i.longSwipesMs) {
          if (!i.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection &&
            (m >= i.longSwipesRatio
              ? t.slideTo(i.rewind && t.isEnd ? f : h + v)
              : t.slideTo(h)),
            "prev" === t.swipeDirection &&
              (m > 1 - i.longSwipesRatio
                ? t.slideTo(h + v)
                : null !== g && m < 0 && Math.abs(m) > i.longSwipesRatio
                ? t.slideTo(g)
                : t.slideTo(h));
        } else {
          if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation &&
          (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
            ? l.target === t.navigation.nextEl
              ? t.slideTo(h + v)
              : t.slideTo(h)
            : ("next" === t.swipeDirection && t.slideTo(null !== f ? f : h + v),
              "prev" === t.swipeDirection && t.slideTo(null !== g ? g : h));
        }
      }
      function je() {
        const e = this,
          { params: t, el: s } = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: i, allowSlidePrev: n, snapGrid: r } = e;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses(),
          ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
          e.isEnd &&
          !e.isBeginning &&
          !e.params.centeredSlides
            ? e.slideTo(e.slides.length - 1, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.run(),
          (e.allowSlidePrev = n),
          (e.allowSlideNext = i),
          e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
      }
      function Re(e) {
        const t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function We() {
        const e = this,
          { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
        if (!i) return;
        let n;
        (e.previousTranslate = e.translate),
          e.isHorizontal()
            ? (e.translate = -t.scrollLeft)
            : (e.translate = -t.scrollTop),
          0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        (n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
          n !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
          e.emit("setTranslate", e.translate, !1);
      }
      let Ge = !1;
      function He() {}
      const Fe = (e, t) => {
        const s = re(),
          {
            params: i,
            touchEvents: n,
            el: r,
            wrapperEl: o,
            device: a,
            support: l,
          } = e,
          c = !!i.nested,
          d = "on" === t ? "addEventListener" : "removeEventListener",
          u = t;
        if (l.touch) {
          const t = !(
            "touchstart" !== n.start ||
            !l.passiveListener ||
            !i.passiveListeners
          ) && { passive: !0, capture: !1 };
          r[d](n.start, e.onTouchStart, t),
            r[d](
              n.move,
              e.onTouchMove,
              l.passiveListener ? { passive: !1, capture: c } : c
            ),
            r[d](n.end, e.onTouchEnd, t),
            n.cancel && r[d](n.cancel, e.onTouchEnd, t);
        } else
          r[d](n.start, e.onTouchStart, !1),
            s[d](n.move, e.onTouchMove, c),
            s[d](n.end, e.onTouchEnd, !1);
        (i.preventClicks || i.preventClicksPropagation) &&
          r[d]("click", e.onClick, !0),
          i.cssMode && o[d]("scroll", e.onScroll),
          i.updateOnWindowResize
            ? e[u](
                a.ios || a.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                je,
                !0
              )
            : e[u]("observerUpdate", je, !0);
      };
      const Ve = {
          attachEvents: function () {
            const e = this,
              t = re(),
              { params: s, support: i } = e;
            (e.onTouchStart = De.bind(e)),
              (e.onTouchMove = Be.bind(e)),
              (e.onTouchEnd = Ne.bind(e)),
              s.cssMode && (e.onScroll = We.bind(e)),
              (e.onClick = Re.bind(e)),
              i.touch &&
                !Ge &&
                (t.addEventListener("touchstart", He), (Ge = !0)),
              Fe(e, "on");
          },
          detachEvents: function () {
            Fe(this, "off");
          },
        },
        qe = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      const Xe = {
        setBreakpoint: function () {
          const e = this,
            {
              activeIndex: t,
              initialized: s,
              loopedSlides: i = 0,
              params: n,
              $el: r,
            } = e,
            o = n.breakpoints;
          if (!o || (o && 0 === Object.keys(o).length)) return;
          const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
          if (!a || e.currentBreakpoint === a) return;
          const l = (a in o ? o[a] : void 0) || e.originalParams,
            c = qe(e, n),
            d = qe(e, l),
            u = n.enabled;
          c && !d
            ? (r.removeClass(
                `${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`
              ),
              e.emitContainerClasses())
            : !c &&
              d &&
              (r.addClass(`${n.containerModifierClass}grid`),
              ((l.grid.fill && "column" === l.grid.fill) ||
                (!l.grid.fill && "column" === n.grid.fill)) &&
                r.addClass(`${n.containerModifierClass}grid-column`),
              e.emitContainerClasses()),
            ["navigation", "pagination", "scrollbar"].forEach((t) => {
              const s = n[t] && n[t].enabled,
                i = l[t] && l[t].enabled;
              s && !i && e[t].disable(), !s && i && e[t].enable();
            });
          const h = l.direction && l.direction !== n.direction,
            p = n.loop && (l.slidesPerView !== n.slidesPerView || h);
          h && s && e.changeDirection(), xe(e.params, l);
          const f = e.params.enabled;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev,
          }),
            u && !f ? e.disable() : !u && f && e.enable(),
            (e.currentBreakpoint = a),
            e.emit("_beforeBreakpoint", l),
            p &&
              s &&
              (e.loopDestroy(),
              e.loopCreate(),
              e.updateSlides(),
              e.slideTo(t - i + e.loopedSlides, 0, !1)),
            e.emit("breakpoint", l);
        },
        getBreakpoint: function (e, t, s) {
          if ((void 0 === t && (t = "window"), !e || ("container" === t && !s)))
            return;
          let i = !1;
          const n = ae(),
            r = "window" === t ? n.innerHeight : s.clientHeight,
            o = Object.keys(e).map((e) => {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                const t = parseFloat(e.substr(1));
                return { value: r * t, point: e };
              }
              return { value: e, point: e };
            });
          o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let e = 0; e < o.length; e += 1) {
            const { point: r, value: a } = o[e];
            "window" === t
              ? n.matchMedia(`(min-width: ${a}px)`).matches && (i = r)
              : a <= s.clientWidth && (i = r);
          }
          return i || "max";
        },
      };
      const Ye = {
        addClasses: function () {
          const e = this,
            {
              classNames: t,
              params: s,
              rtl: i,
              $el: n,
              device: r,
              support: o,
            } = e,
            a = (function (e, t) {
              const s = [];
              return (
                e.forEach((e) => {
                  "object" == typeof e
                    ? Object.keys(e).forEach((i) => {
                        e[i] && s.push(t + i);
                      })
                    : "string" == typeof e && s.push(t + e);
                }),
                s
              );
            })(
              [
                "initialized",
                s.direction,
                { "pointer-events": !o.touch },
                { "free-mode": e.params.freeMode && s.freeMode.enabled },
                { autoheight: s.autoHeight },
                { rtl: i },
                { grid: s.grid && s.grid.rows > 1 },
                {
                  "grid-column":
                    s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
                },
                { android: r.android },
                { ios: r.ios },
                { "css-mode": s.cssMode },
                { centered: s.cssMode && s.centeredSlides },
                { "watch-progress": s.watchSlidesProgress },
              ],
              s.containerModifierClass
            );
          t.push(...a), n.addClass([...t].join(" ")), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { $el: e, classNames: t } = this;
          e.removeClass(t.join(" ")), this.emitContainerClasses();
        },
      };
      const Ue = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      function Ke(e, t) {
        return function (s) {
          void 0 === s && (s = {});
          const i = Object.keys(s)[0],
            n = s[i];
          "object" == typeof n && null !== n
            ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
                !0 === e[i] &&
                (e[i] = { auto: !0 }),
              i in e && "enabled" in n
                ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                  "object" != typeof e[i] ||
                    "enabled" in e[i] ||
                    (e[i].enabled = !0),
                  e[i] || (e[i] = { enabled: !1 }),
                  xe(t, s))
                : xe(t, s))
            : xe(t, s);
        };
      }
      const Ze = {
          eventsEmitter: ke,
          update: _e,
          translate: Me,
          transition: {
            setTransition: function (e, t) {
              const s = this;
              s.params.cssMode || s.$wrapperEl.transition(e),
                s.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              const s = this,
                { params: i } = s;
              i.cssMode ||
                (i.autoHeight && s.updateAutoHeight(),
                Pe({
                  swiper: s,
                  runCallbacks: e,
                  direction: t,
                  step: "Start",
                }));
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              const s = this,
                { params: i } = s;
              (s.animating = !1),
                i.cssMode ||
                  (s.setTransition(0),
                  Pe({
                    swiper: s,
                    runCallbacks: e,
                    direction: t,
                    step: "End",
                  }));
            },
          },
          slide: $e,
          loop: ze,
          grabCursor: {
            setGrabCursor: function (e) {
              const t = this;
              if (
                t.support.touch ||
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return;
              const s =
                "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              (s.style.cursor = "move"),
                (s.style.cursor = e ? "grabbing" : "grab");
            },
            unsetGrabCursor: function () {
              const e = this;
              e.support.touch ||
                (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = "");
            },
          },
          events: Ve,
          breakpoints: Xe,
          checkOverflow: {
            checkOverflow: function () {
              const e = this,
                { isLocked: t, params: s } = e,
                { slidesOffsetBefore: i } = s;
              if (i) {
                const t = e.slides.length - 1,
                  s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                e.isLocked = e.size > s;
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            },
          },
          classes: Ye,
          images: {
            loadImage: function (e, t, s, i, n, r) {
              const o = ae();
              let a;
              function l() {
                r && r();
              }
              ge(e).parent("picture")[0] || (e.complete && n)
                ? l()
                : t
                ? ((a = new o.Image()),
                  (a.onload = l),
                  (a.onerror = l),
                  i && (a.sizes = i),
                  s && (a.srcset = s),
                  t && (a.src = t))
                : l();
            },
            preloadImages: function () {
              const e = this;
              function t() {
                null != e &&
                  e &&
                  !e.destroyed &&
                  (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                  e.imagesLoaded === e.imagesToLoad.length &&
                    (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")));
              }
              e.imagesToLoad = e.$el.find("img");
              for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                const i = e.imagesToLoad[s];
                e.loadImage(
                  i,
                  i.currentSrc || i.getAttribute("src"),
                  i.srcset || i.getAttribute("srcset"),
                  i.sizes || i.getAttribute("sizes"),
                  !0,
                  t
                );
              }
            },
          },
        },
        Je = {};
      class Qe {
        constructor() {
          let e, t;
          for (var s = arguments.length, i = new Array(s), n = 0; n < s; n++)
            i[n] = arguments[n];
          if (
            (1 === i.length &&
            i[0].constructor &&
            "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
              ? (t = i[0])
              : ([e, t] = i),
            t || (t = {}),
            (t = xe({}, t)),
            e && !t.el && (t.el = e),
            t.el && ge(t.el).length > 1)
          ) {
            const e = [];
            return (
              ge(t.el).each((s) => {
                const i = xe({}, t, { el: s });
                e.push(new Qe(i));
              }),
              e
            );
          }
          const r = this;
          (r.__swiper__ = !0),
            (r.support = Le()),
            (r.device = Ae({ userAgent: t.userAgent })),
            (r.browser = Ie()),
            (r.eventsListeners = {}),
            (r.eventsAnyListeners = []),
            (r.modules = [...r.__modules__]),
            t.modules &&
              Array.isArray(t.modules) &&
              r.modules.push(...t.modules);
          const o = {};
          r.modules.forEach((e) => {
            e({
              swiper: r,
              extendParams: Ke(t, o),
              on: r.on.bind(r),
              once: r.once.bind(r),
              off: r.off.bind(r),
              emit: r.emit.bind(r),
            });
          });
          const a = xe({}, Ue, o);
          return (
            (r.params = xe({}, a, Je, t)),
            (r.originalParams = xe({}, r.params)),
            (r.passedParams = xe({}, t)),
            r.params &&
              r.params.on &&
              Object.keys(r.params.on).forEach((e) => {
                r.on(e, r.params.on[e]);
              }),
            r.params && r.params.onAny && r.onAny(r.params.onAny),
            (r.$ = ge),
            Object.assign(r, {
              enabled: r.params.enabled,
              el: e,
              classNames: [],
              slides: ge(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === r.params.direction,
              isVertical: () => "vertical" === r.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: r.params.allowSlideNext,
              allowSlidePrev: r.params.allowSlidePrev,
              touchEvents: (function () {
                const e = [
                    "touchstart",
                    "touchmove",
                    "touchend",
                    "touchcancel",
                  ],
                  t = ["pointerdown", "pointermove", "pointerup"];
                return (
                  (r.touchEventsTouch = {
                    start: e[0],
                    move: e[1],
                    end: e[2],
                    cancel: e[3],
                  }),
                  (r.touchEventsDesktop = {
                    start: t[0],
                    move: t[1],
                    end: t[2],
                  }),
                  r.support.touch || !r.params.simulateTouch
                    ? r.touchEventsTouch
                    : r.touchEventsDesktop
                );
              })(),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: r.params.focusableElements,
                lastClickTime: ve(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: r.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            r.emit("_swiper"),
            r.params.init && r.init(),
            r
          );
        }
        enable() {
          const e = this;
          e.enabled ||
            ((e.enabled = !0),
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"));
        }
        disable() {
          const e = this;
          e.enabled &&
            ((e.enabled = !1),
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"));
        }
        setProgress(e, t) {
          const s = this;
          e = Math.min(Math.max(e, 0), 1);
          const i = s.minTranslate(),
            n = (s.maxTranslate() - i) * e + i;
          s.translateTo(n, void 0 === t ? 0 : t),
            s.updateActiveIndex(),
            s.updateSlidesClasses();
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          const t = this;
          return t.destroyed
            ? ""
            : e.className
                .split(" ")
                .filter(
                  (e) =>
                    0 === e.indexOf("swiper-slide") ||
                    0 === e.indexOf(t.params.slideClass)
                )
                .join(" ");
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.each((s) => {
            const i = e.getSlideClasses(s);
            t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          const {
            params: s,
            slides: i,
            slidesGrid: n,
            slidesSizesGrid: r,
            size: o,
            activeIndex: a,
          } = this;
          let l = 1;
          if (s.centeredSlides) {
            let e,
              t = i[a].swiperSlideSize;
            for (let s = a + 1; s < i.length; s += 1)
              i[s] &&
                !e &&
                ((t += i[s].swiperSlideSize), (l += 1), t > o && (e = !0));
            for (let s = a - 1; s >= 0; s -= 1)
              i[s] &&
                !e &&
                ((t += i[s].swiperSlideSize), (l += 1), t > o && (e = !0));
          } else if ("current" === e)
            for (let e = a + 1; e < i.length; e += 1) {
              (t ? n[e] + r[e] - n[a] < o : n[e] - n[a] < o) && (l += 1);
            }
          else
            for (let e = a - 1; e >= 0; e -= 1) {
              n[a] - n[e] < o && (l += 1);
            }
          return l;
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const { snapGrid: t, params: s } = e;
          function i() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          let n;
          s.breakpoints && e.setBreakpoint(),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode && e.params.freeMode.enabled
              ? (i(), e.params.autoHeight && e.updateAutoHeight())
              : ((n =
                  ("auto" === e.params.slidesPerView ||
                    e.params.slidesPerView > 1) &&
                  e.isEnd &&
                  !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0)),
                n || i()),
            s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update");
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const s = this,
            i = s.params.direction;
          return (
            e || (e = "horizontal" === i ? "vertical" : "horizontal"),
            e === i ||
              ("horizontal" !== e && "vertical" !== e) ||
              (s.$el
                .removeClass(`${s.params.containerModifierClass}${i}`)
                .addClass(`${s.params.containerModifierClass}${e}`),
              s.emitContainerClasses(),
              (s.params.direction = e),
              s.slides.each((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              s.emit("changeDirection"),
              t && s.update()),
            s
          );
        }
        changeLanguageDirection(e) {
          const t = this;
          (t.rtl && "rtl" === e) ||
            (!t.rtl && "ltr" === e) ||
            ((t.rtl = "rtl" === e),
            (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
            t.rtl
              ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`),
                (t.el.dir = "rtl"))
              : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`),
                (t.el.dir = "ltr")),
            t.update());
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          const s = ge(e || t.params.el);
          if (!(e = s[0])) return !1;
          e.swiper = t;
          const i = () =>
            `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
          let n = (() => {
            if (e && e.shadowRoot && e.shadowRoot.querySelector) {
              const t = ge(e.shadowRoot.querySelector(i()));
              return (t.children = (e) => s.children(e)), t;
            }
            return s.children ? s.children(i()) : ge(s).children(i());
          })();
          if (0 === n.length && t.params.createElements) {
            const e = re().createElement("div");
            (n = ge(e)),
              (e.className = t.params.wrapperClass),
              s.append(e),
              s.children(`.${t.params.slideClass}`).each((e) => {
                n.append(e);
              });
          }
          return (
            Object.assign(t, {
              $el: s,
              el: e,
              $wrapperEl: n,
              wrapperEl: n[0],
              mounted: !0,
              rtl:
                "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
              wrongRTL: "-webkit-box" === n.css("display"),
            }),
            !0
          );
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          return (
            !1 === t.mount(e) ||
              (t.emit("beforeInit"),
              t.params.breakpoints && t.setBreakpoint(),
              t.addClasses(),
              t.params.loop && t.loopCreate(),
              t.updateSize(),
              t.updateSlides(),
              t.params.watchOverflow && t.checkOverflow(),
              t.params.grabCursor && t.enabled && t.setGrabCursor(),
              t.params.preloadImages && t.preloadImages(),
              t.params.loop
                ? t.slideTo(
                    t.params.initialSlide + t.loopedSlides,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  )
                : t.slideTo(
                    t.params.initialSlide,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  ),
              t.attachEvents(),
              (t.initialized = !0),
              t.emit("init"),
              t.emit("afterInit")),
            t
          );
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const s = this,
            { params: i, $el: n, $wrapperEl: r, slides: o } = s;
          return (
            void 0 === s.params ||
              s.destroyed ||
              (s.emit("beforeDestroy"),
              (s.initialized = !1),
              s.detachEvents(),
              i.loop && s.loopDestroy(),
              t &&
                (s.removeClasses(),
                n.removeAttr("style"),
                r.removeAttr("style"),
                o &&
                  o.length &&
                  o
                    .removeClass(
                      [
                        i.slideVisibleClass,
                        i.slideActiveClass,
                        i.slideNextClass,
                        i.slidePrevClass,
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index")),
              s.emit("destroy"),
              Object.keys(s.eventsListeners).forEach((e) => {
                s.off(e);
              }),
              !1 !== e &&
                ((s.$el[0].swiper = null),
                (function (e) {
                  const t = e;
                  Object.keys(t).forEach((e) => {
                    try {
                      t[e] = null;
                    } catch (e) {}
                    try {
                      delete t[e];
                    } catch (e) {}
                  });
                })(s)),
              (s.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          xe(Je, e);
        }
        static get extendedDefaults() {
          return Je;
        }
        static get defaults() {
          return Ue;
        }
        static installModule(e) {
          Qe.prototype.__modules__ || (Qe.prototype.__modules__ = []);
          const t = Qe.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
        }
        static use(e) {
          return Array.isArray(e)
            ? (e.forEach((e) => Qe.installModule(e)), Qe)
            : (Qe.installModule(e), Qe);
        }
      }
      Object.keys(Ze).forEach((e) => {
        Object.keys(Ze[e]).forEach((t) => {
          Qe.prototype[t] = Ze[e][t];
        });
      }),
        Qe.use([
          function (e) {
            let { swiper: t, on: s, emit: i } = e;
            const n = ae();
            let r = null,
              o = null;
            const a = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (i("beforeResize"), i("resize"));
              },
              l = () => {
                t && !t.destroyed && t.initialized && i("orientationchange");
              };
            s("init", () => {
              t.params.resizeObserver && void 0 !== n.ResizeObserver
                ? t &&
                  !t.destroyed &&
                  t.initialized &&
                  ((r = new ResizeObserver((e) => {
                    o = n.requestAnimationFrame(() => {
                      const { width: s, height: i } = t;
                      let n = s,
                        r = i;
                      e.forEach((e) => {
                        let {
                          contentBoxSize: s,
                          contentRect: i,
                          target: o,
                        } = e;
                        (o && o !== t.el) ||
                          ((n = i ? i.width : (s[0] || s).inlineSize),
                          (r = i ? i.height : (s[0] || s).blockSize));
                      }),
                        (n === s && r === i) || a();
                    });
                  })),
                  r.observe(t.el))
                : (n.addEventListener("resize", a),
                  n.addEventListener("orientationchange", l));
            }),
              s("destroy", () => {
                o && n.cancelAnimationFrame(o),
                  r && r.unobserve && t.el && (r.unobserve(t.el), (r = null)),
                  n.removeEventListener("resize", a),
                  n.removeEventListener("orientationchange", l);
              });
          },
          function (e) {
            let { swiper: t, extendParams: s, on: i, emit: n } = e;
            const r = [],
              o = ae(),
              a = function (e, t) {
                void 0 === t && (t = {});
                const s = new (o.MutationObserver || o.WebkitMutationObserver)(
                  (e) => {
                    if (1 === e.length) return void n("observerUpdate", e[0]);
                    const t = function () {
                      n("observerUpdate", e[0]);
                    };
                    o.requestAnimationFrame
                      ? o.requestAnimationFrame(t)
                      : o.setTimeout(t, 0);
                  }
                );
                s.observe(e, {
                  attributes: void 0 === t.attributes || t.attributes,
                  childList: void 0 === t.childList || t.childList,
                  characterData: void 0 === t.characterData || t.characterData,
                }),
                  r.push(s);
              };
            s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              i("init", () => {
                if (t.params.observer) {
                  if (t.params.observeParents) {
                    const e = t.$el.parents();
                    for (let t = 0; t < e.length; t += 1) a(e[t]);
                  }
                  a(t.$el[0], { childList: t.params.observeSlideChildren }),
                    a(t.$wrapperEl[0], { attributes: !1 });
                }
              }),
              i("destroy", () => {
                r.forEach((e) => {
                  e.disconnect();
                }),
                  r.splice(0, r.length);
              });
          },
        ]);
      const et = Qe;
      function tt(e) {
        return (
          void 0 === e && (e = ""),
          `.${e
            .trim()
            .replace(/([\.:!\/])/g, "\\$1")
            .replace(/ /g, ".")}`
        );
      }
      function st(e) {
        let { swiper: t, extendParams: s, on: i, emit: n } = e;
        const r = "swiper-pagination";
        let o;
        s({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: `${r}-bullet`,
            bulletActiveClass: `${r}-bullet-active`,
            modifierClass: `${r}-`,
            currentClass: `${r}-current`,
            totalClass: `${r}-total`,
            hiddenClass: `${r}-hidden`,
            progressbarFillClass: `${r}-progressbar-fill`,
            progressbarOppositeClass: `${r}-progressbar-opposite`,
            clickableClass: `${r}-clickable`,
            lockClass: `${r}-lock`,
            horizontalClass: `${r}-horizontal`,
            verticalClass: `${r}-vertical`,
            paginationDisabledClass: `${r}-disabled`,
          },
        }),
          (t.pagination = { el: null, $el: null, bullets: [] });
        let a = 0;
        function l() {
          return (
            !t.params.pagination.el ||
            !t.pagination.el ||
            !t.pagination.$el ||
            0 === t.pagination.$el.length
          );
        }
        function c(e, s) {
          const { bulletActiveClass: i } = t.params.pagination;
          e[s]().addClass(`${i}-${s}`)[s]().addClass(`${i}-${s}-${s}`);
        }
        function d() {
          const e = t.rtl,
            s = t.params.pagination;
          if (l()) return;
          const i =
              t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length,
            r = t.pagination.$el;
          let d;
          const u = t.params.loop
            ? Math.ceil((i - 2 * t.loopedSlides) / t.params.slidesPerGroup)
            : t.snapGrid.length;
          if (
            (t.params.loop
              ? ((d = Math.ceil(
                  (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
                )),
                d > i - 1 - 2 * t.loopedSlides && (d -= i - 2 * t.loopedSlides),
                d > u - 1 && (d -= u),
                d < 0 && "bullets" !== t.params.paginationType && (d = u + d))
              : (d = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
            "bullets" === s.type &&
              t.pagination.bullets &&
              t.pagination.bullets.length > 0)
          ) {
            const i = t.pagination.bullets;
            let n, l, u;
            if (
              (s.dynamicBullets &&
                ((o = i
                  .eq(0)
                  [t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                r.css(
                  t.isHorizontal() ? "width" : "height",
                  o * (s.dynamicMainBullets + 4) + "px"
                ),
                s.dynamicMainBullets > 1 &&
                  void 0 !== t.previousIndex &&
                  ((a += d - (t.previousIndex - t.loopedSlides || 0)),
                  a > s.dynamicMainBullets - 1
                    ? (a = s.dynamicMainBullets - 1)
                    : a < 0 && (a = 0)),
                (n = Math.max(d - a, 0)),
                (l = n + (Math.min(i.length, s.dynamicMainBullets) - 1)),
                (u = (l + n) / 2)),
              i.removeClass(
                ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                  .map((e) => `${s.bulletActiveClass}${e}`)
                  .join(" ")
              ),
              r.length > 1)
            )
              i.each((e) => {
                const t = ge(e),
                  i = t.index();
                i === d && t.addClass(s.bulletActiveClass),
                  s.dynamicBullets &&
                    (i >= n &&
                      i <= l &&
                      t.addClass(`${s.bulletActiveClass}-main`),
                    i === n && c(t, "prev"),
                    i === l && c(t, "next"));
              });
            else {
              const e = i.eq(d),
                r = e.index();
              if ((e.addClass(s.bulletActiveClass), s.dynamicBullets)) {
                const e = i.eq(n),
                  o = i.eq(l);
                for (let e = n; e <= l; e += 1)
                  i.eq(e).addClass(`${s.bulletActiveClass}-main`);
                if (t.params.loop)
                  if (r >= i.length) {
                    for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                      i.eq(i.length - e).addClass(
                        `${s.bulletActiveClass}-main`
                      );
                    i.eq(i.length - s.dynamicMainBullets - 1).addClass(
                      `${s.bulletActiveClass}-prev`
                    );
                  } else c(e, "prev"), c(o, "next");
                else c(e, "prev"), c(o, "next");
              }
            }
            if (s.dynamicBullets) {
              const n = Math.min(i.length, s.dynamicMainBullets + 4),
                r = (o * n - o) / 2 - u * o,
                a = e ? "right" : "left";
              i.css(t.isHorizontal() ? a : "top", `${r}px`);
            }
          }
          if (
            ("fraction" === s.type &&
              (r.find(tt(s.currentClass)).text(s.formatFractionCurrent(d + 1)),
              r.find(tt(s.totalClass)).text(s.formatFractionTotal(u))),
            "progressbar" === s.type)
          ) {
            let e;
            e = s.progressbarOpposite
              ? t.isHorizontal()
                ? "vertical"
                : "horizontal"
              : t.isHorizontal()
              ? "horizontal"
              : "vertical";
            const i = (d + 1) / u;
            let n = 1,
              o = 1;
            "horizontal" === e ? (n = i) : (o = i),
              r
                .find(tt(s.progressbarFillClass))
                .transform(`translate3d(0,0,0) scaleX(${n}) scaleY(${o})`)
                .transition(t.params.speed);
          }
          "custom" === s.type && s.renderCustom
            ? (r.html(s.renderCustom(t, d + 1, u)), n("paginationRender", r[0]))
            : n("paginationUpdate", r[0]),
            t.params.watchOverflow &&
              t.enabled &&
              r[t.isLocked ? "addClass" : "removeClass"](s.lockClass);
        }
        function u() {
          const e = t.params.pagination;
          if (l()) return;
          const s =
              t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length,
            i = t.pagination.$el;
          let r = "";
          if ("bullets" === e.type) {
            let n = t.params.loop
              ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup)
              : t.snapGrid.length;
            t.params.freeMode &&
              t.params.freeMode.enabled &&
              !t.params.loop &&
              n > s &&
              (n = s);
            for (let s = 0; s < n; s += 1)
              e.renderBullet
                ? (r += e.renderBullet.call(t, s, e.bulletClass))
                : (r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
            i.html(r), (t.pagination.bullets = i.find(tt(e.bulletClass)));
          }
          "fraction" === e.type &&
            ((r = e.renderFraction
              ? e.renderFraction.call(t, e.currentClass, e.totalClass)
              : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
            i.html(r)),
            "progressbar" === e.type &&
              ((r = e.renderProgressbar
                ? e.renderProgressbar.call(t, e.progressbarFillClass)
                : `<span class="${e.progressbarFillClass}"></span>`),
              i.html(r)),
            "custom" !== e.type && n("paginationRender", t.pagination.$el[0]);
        }
        function h() {
          t.params.pagination = (function (e, t, s, i) {
            const n = re();
            return (
              e.params.createElements &&
                Object.keys(i).forEach((r) => {
                  if (!s[r] && !0 === s.auto) {
                    let o = e.$el.children(`.${i[r]}`)[0];
                    o ||
                      ((o = n.createElement("div")),
                      (o.className = i[r]),
                      e.$el.append(o)),
                      (s[r] = o),
                      (t[r] = o);
                  }
                }),
              s
            );
          })(t, t.originalParams.pagination, t.params.pagination, {
            el: "swiper-pagination",
          });
          const e = t.params.pagination;
          if (!e.el) return;
          let s = ge(e.el);
          0 !== s.length &&
            (t.params.uniqueNavElements &&
              "string" == typeof e.el &&
              s.length > 1 &&
              ((s = t.$el.find(e.el)),
              s.length > 1 &&
                (s = s.filter((e) => ge(e).parents(".swiper")[0] === t.el))),
            "bullets" === e.type && e.clickable && s.addClass(e.clickableClass),
            s.addClass(e.modifierClass + e.type),
            s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
            "bullets" === e.type &&
              e.dynamicBullets &&
              (s.addClass(`${e.modifierClass}${e.type}-dynamic`),
              (a = 0),
              e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
            "progressbar" === e.type &&
              e.progressbarOpposite &&
              s.addClass(e.progressbarOppositeClass),
            e.clickable &&
              s.on("click", tt(e.bulletClass), function (e) {
                e.preventDefault();
                let s = ge(this).index() * t.params.slidesPerGroup;
                t.params.loop && (s += t.loopedSlides), t.slideTo(s);
              }),
            Object.assign(t.pagination, { $el: s, el: s[0] }),
            t.enabled || s.addClass(e.lockClass));
        }
        function p() {
          const e = t.params.pagination;
          if (l()) return;
          const s = t.pagination.$el;
          s.removeClass(e.hiddenClass),
            s.removeClass(e.modifierClass + e.type),
            s.removeClass(
              t.isHorizontal() ? e.horizontalClass : e.verticalClass
            ),
            t.pagination.bullets &&
              t.pagination.bullets.removeClass &&
              t.pagination.bullets.removeClass(e.bulletActiveClass),
            e.clickable && s.off("click", tt(e.bulletClass));
        }
        i("init", () => {
          !1 === t.params.pagination.enabled ? f() : (h(), u(), d());
        }),
          i("activeIndexChange", () => {
            (t.params.loop || void 0 === t.snapIndex) && d();
          }),
          i("snapIndexChange", () => {
            t.params.loop || d();
          }),
          i("slidesLengthChange", () => {
            t.params.loop && (u(), d());
          }),
          i("snapGridLengthChange", () => {
            t.params.loop || (u(), d());
          }),
          i("destroy", () => {
            p();
          }),
          i("enable disable", () => {
            const { $el: e } = t.pagination;
            e &&
              e[t.enabled ? "removeClass" : "addClass"](
                t.params.pagination.lockClass
              );
          }),
          i("lock unlock", () => {
            d();
          }),
          i("click", (e, s) => {
            const i = s.target,
              { $el: r } = t.pagination;
            if (
              t.params.pagination.el &&
              t.params.pagination.hideOnClick &&
              r &&
              r.length > 0 &&
              !ge(i).hasClass(t.params.pagination.bulletClass)
            ) {
              if (
                t.navigation &&
                ((t.navigation.nextEl && i === t.navigation.nextEl) ||
                  (t.navigation.prevEl && i === t.navigation.prevEl))
              )
                return;
              const e = r.hasClass(t.params.pagination.hiddenClass);
              n(!0 === e ? "paginationShow" : "paginationHide"),
                r.toggleClass(t.params.pagination.hiddenClass);
            }
          });
        const f = () => {
          t.$el.addClass(t.params.pagination.paginationDisabledClass),
            t.pagination.$el &&
              t.pagination.$el.addClass(
                t.params.pagination.paginationDisabledClass
              ),
            p();
        };
        Object.assign(t.pagination, {
          enable: () => {
            t.$el.removeClass(t.params.pagination.paginationDisabledClass),
              t.pagination.$el &&
                t.pagination.$el.removeClass(
                  t.params.pagination.paginationDisabledClass
                ),
              h(),
              u(),
              d();
          },
          disable: f,
          render: u,
          update: d,
          init: h,
          destroy: p,
        });
      }
      function it(e) {
        let { swiper: t, extendParams: s, on: i, emit: n } = e;
        s({
          lazy: {
            checkInView: !1,
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            scrollingElement: "",
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader",
          },
        }),
          (t.lazy = {});
        let r = !1,
          o = !1;
        function a(e, s) {
          void 0 === s && (s = !0);
          const i = t.params.lazy;
          if (void 0 === e) return;
          if (0 === t.slides.length) return;
          const r =
              t.virtual && t.params.virtual.enabled
                ? t.$wrapperEl.children(
                    `.${t.params.slideClass}[data-swiper-slide-index="${e}"]`
                  )
                : t.slides.eq(e),
            o = r.find(
              `.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`
            );
          !r.hasClass(i.elementClass) ||
            r.hasClass(i.loadedClass) ||
            r.hasClass(i.loadingClass) ||
            o.push(r[0]),
            0 !== o.length &&
              o.each((e) => {
                const o = ge(e);
                o.addClass(i.loadingClass);
                const l = o.attr("data-background"),
                  c = o.attr("data-src"),
                  d = o.attr("data-srcset"),
                  u = o.attr("data-sizes"),
                  h = o.parent("picture");
                t.loadImage(o[0], c || l, d, u, !1, () => {
                  if (null != t && t && (!t || t.params) && !t.destroyed) {
                    if (
                      (l
                        ? (o.css("background-image", `url("${l}")`),
                          o.removeAttr("data-background"))
                        : (d &&
                            (o.attr("srcset", d), o.removeAttr("data-srcset")),
                          u && (o.attr("sizes", u), o.removeAttr("data-sizes")),
                          h.length &&
                            h.children("source").each((e) => {
                              const t = ge(e);
                              t.attr("data-srcset") &&
                                (t.attr("srcset", t.attr("data-srcset")),
                                t.removeAttr("data-srcset"));
                            }),
                          c && (o.attr("src", c), o.removeAttr("data-src"))),
                      o.addClass(i.loadedClass).removeClass(i.loadingClass),
                      r.find(`.${i.preloaderClass}`).remove(),
                      t.params.loop && s)
                    ) {
                      const e = r.attr("data-swiper-slide-index");
                      if (r.hasClass(t.params.slideDuplicateClass)) {
                        a(
                          t.$wrapperEl
                            .children(
                              `[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`
                            )
                            .index(),
                          !1
                        );
                      } else {
                        a(
                          t.$wrapperEl
                            .children(
                              `.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`
                            )
                            .index(),
                          !1
                        );
                      }
                    }
                    n("lazyImageReady", r[0], o[0]),
                      t.params.autoHeight && t.updateAutoHeight();
                  }
                }),
                  n("lazyImageLoad", r[0], o[0]);
              });
        }
        function l() {
          const { $wrapperEl: e, params: s, slides: i, activeIndex: n } = t,
            r = t.virtual && s.virtual.enabled,
            l = s.lazy;
          let c = s.slidesPerView;
          function d(t) {
            if (r) {
              if (
                e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`)
                  .length
              )
                return !0;
            } else if (i[t]) return !0;
            return !1;
          }
          function u(e) {
            return r ? ge(e).attr("data-swiper-slide-index") : ge(e).index();
          }
          if (
            ("auto" === c && (c = 0),
            o || (o = !0),
            t.params.watchSlidesProgress)
          )
            e.children(`.${s.slideVisibleClass}`).each((e) => {
              a(r ? ge(e).attr("data-swiper-slide-index") : ge(e).index());
            });
          else if (c > 1) for (let e = n; e < n + c; e += 1) d(e) && a(e);
          else a(n);
          if (l.loadPrevNext)
            if (c > 1 || (l.loadPrevNextAmount && l.loadPrevNextAmount > 1)) {
              const e = l.loadPrevNextAmount,
                t = Math.ceil(c),
                s = Math.min(n + t + Math.max(e, t), i.length),
                r = Math.max(n - Math.max(t, e), 0);
              for (let e = n + t; e < s; e += 1) d(e) && a(e);
              for (let e = r; e < n; e += 1) d(e) && a(e);
            } else {
              const t = e.children(`.${s.slideNextClass}`);
              t.length > 0 && a(u(t));
              const i = e.children(`.${s.slidePrevClass}`);
              i.length > 0 && a(u(i));
            }
        }
        function c() {
          const e = ae();
          if (!t || t.destroyed) return;
          const s = t.params.lazy.scrollingElement
              ? ge(t.params.lazy.scrollingElement)
              : ge(e),
            i = s[0] === e,
            n = i ? e.innerWidth : s[0].offsetWidth,
            o = i ? e.innerHeight : s[0].offsetHeight,
            a = t.$el.offset(),
            { rtlTranslate: d } = t;
          let u = !1;
          d && (a.left -= t.$el[0].scrollLeft);
          const h = [
            [a.left, a.top],
            [a.left + t.width, a.top],
            [a.left, a.top + t.height],
            [a.left + t.width, a.top + t.height],
          ];
          for (let e = 0; e < h.length; e += 1) {
            const t = h[e];
            if (t[0] >= 0 && t[0] <= n && t[1] >= 0 && t[1] <= o) {
              if (0 === t[0] && 0 === t[1]) continue;
              u = !0;
            }
          }
          const p = !(
            "touchstart" !== t.touchEvents.start ||
            !t.support.passiveListener ||
            !t.params.passiveListeners
          ) && { passive: !0, capture: !1 };
          u
            ? (l(), s.off("scroll", c, p))
            : r || ((r = !0), s.on("scroll", c, p));
        }
        i("beforeInit", () => {
          t.params.lazy.enabled &&
            t.params.preloadImages &&
            (t.params.preloadImages = !1);
        }),
          i("init", () => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? c() : l());
          }),
          i("scroll", () => {
            t.params.freeMode &&
              t.params.freeMode.enabled &&
              !t.params.freeMode.sticky &&
              l();
          }),
          i("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? c() : l());
          }),
          i("transitionStart", () => {
            t.params.lazy.enabled &&
              (t.params.lazy.loadOnTransitionStart ||
                (!t.params.lazy.loadOnTransitionStart && !o)) &&
              (t.params.lazy.checkInView ? c() : l());
          }),
          i("transitionEnd", () => {
            t.params.lazy.enabled &&
              !t.params.lazy.loadOnTransitionStart &&
              (t.params.lazy.checkInView ? c() : l());
          }),
          i("slideChange", () => {
            const {
              lazy: e,
              cssMode: s,
              watchSlidesProgress: i,
              touchReleaseOnEdges: n,
              resistanceRatio: r,
            } = t.params;
            e.enabled && (s || (i && (n || 0 === r))) && l();
          }),
          i("destroy", () => {
            t.$el &&
              t.$el
                .find(`.${t.params.lazy.loadingClass}`)
                .removeClass(t.params.lazy.loadingClass);
          }),
          Object.assign(t.lazy, { load: l, loadInSlide: a });
      }
      function nt(e) {
        let t,
          { swiper: s, extendParams: i, on: n, emit: r } = e;
        function o() {
          const e = s.slides.eq(s.activeIndex);
          let i = s.params.autoplay.delay;
          e.attr("data-swiper-autoplay") &&
            (i = e.attr("data-swiper-autoplay") || s.params.autoplay.delay),
            clearTimeout(t),
            (t = me(() => {
              let e;
              s.params.autoplay.reverseDirection
                ? s.params.loop
                  ? (s.loopFix(),
                    (e = s.slidePrev(s.params.speed, !0, !0)),
                    r("autoplay"))
                  : s.isBeginning
                  ? s.params.autoplay.stopOnLastSlide
                    ? l()
                    : ((e = s.slideTo(
                        s.slides.length - 1,
                        s.params.speed,
                        !0,
                        !0
                      )),
                      r("autoplay"))
                  : ((e = s.slidePrev(s.params.speed, !0, !0)), r("autoplay"))
                : s.params.loop
                ? (s.loopFix(),
                  (e = s.slideNext(s.params.speed, !0, !0)),
                  r("autoplay"))
                : s.isEnd
                ? s.params.autoplay.stopOnLastSlide
                  ? l()
                  : ((e = s.slideTo(0, s.params.speed, !0, !0)), r("autoplay"))
                : ((e = s.slideNext(s.params.speed, !0, !0)), r("autoplay")),
                ((s.params.cssMode && s.autoplay.running) || !1 === e) && o();
            }, i));
        }
        function a() {
          return (
            void 0 === t &&
            !s.autoplay.running &&
            ((s.autoplay.running = !0), r("autoplayStart"), o(), !0)
          );
        }
        function l() {
          return (
            !!s.autoplay.running &&
            void 0 !== t &&
            (t && (clearTimeout(t), (t = void 0)),
            (s.autoplay.running = !1),
            r("autoplayStop"),
            !0)
          );
        }
        function c(e) {
          s.autoplay.running &&
            (s.autoplay.paused ||
              (t && clearTimeout(t),
              (s.autoplay.paused = !0),
              0 !== e && s.params.autoplay.waitForTransition
                ? ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                    s.$wrapperEl[0].addEventListener(e, u);
                  })
                : ((s.autoplay.paused = !1), o())));
        }
        function d() {
          const e = re();
          "hidden" === e.visibilityState && s.autoplay.running && c(),
            "visible" === e.visibilityState &&
              s.autoplay.paused &&
              (o(), (s.autoplay.paused = !1));
        }
        function u(e) {
          s &&
            !s.destroyed &&
            s.$wrapperEl &&
            e.target === s.$wrapperEl[0] &&
            (["transitionend", "webkitTransitionEnd"].forEach((e) => {
              s.$wrapperEl[0].removeEventListener(e, u);
            }),
            (s.autoplay.paused = !1),
            s.autoplay.running ? o() : l());
        }
        function h() {
          s.params.autoplay.disableOnInteraction
            ? l()
            : (r("autoplayPause"), c()),
            ["transitionend", "webkitTransitionEnd"].forEach((e) => {
              s.$wrapperEl[0].removeEventListener(e, u);
            });
        }
        function p() {
          s.params.autoplay.disableOnInteraction ||
            ((s.autoplay.paused = !1), r("autoplayResume"), o());
        }
        (s.autoplay = { running: !1, paused: !1 }),
          i({
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1,
              pauseOnMouseEnter: !1,
            },
          }),
          n("init", () => {
            if (s.params.autoplay.enabled) {
              a();
              re().addEventListener("visibilitychange", d),
                s.params.autoplay.pauseOnMouseEnter &&
                  (s.$el.on("mouseenter", h), s.$el.on("mouseleave", p));
            }
          }),
          n("beforeTransitionStart", (e, t, i) => {
            s.autoplay.running &&
              (i || !s.params.autoplay.disableOnInteraction
                ? s.autoplay.pause(t)
                : l());
          }),
          n("sliderFirstMove", () => {
            s.autoplay.running &&
              (s.params.autoplay.disableOnInteraction ? l() : c());
          }),
          n("touchEnd", () => {
            s.params.cssMode &&
              s.autoplay.paused &&
              !s.params.autoplay.disableOnInteraction &&
              o();
          }),
          n("destroy", () => {
            s.$el.off("mouseenter", h),
              s.$el.off("mouseleave", p),
              s.autoplay.running && l();
            re().removeEventListener("visibilitychange", d);
          }),
          Object.assign(s.autoplay, { pause: c, run: o, start: a, stop: l });
      }
      function rt(e) {
        let { swiper: t, extendParams: s, emit: i, once: n } = e;
        s({
          freeMode: {
            enabled: !1,
            momentum: !0,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: !1,
            minimumVelocity: 0.02,
          },
        }),
          Object.assign(t, {
            freeMode: {
              onTouchStart: function () {
                const e = t.getTranslate();
                t.setTranslate(e),
                  t.setTransition(0),
                  (t.touchEventsData.velocities.length = 0),
                  t.freeMode.onTouchEnd({
                    currentPos: t.rtl ? t.translate : -t.translate,
                  });
              },
              onTouchMove: function () {
                const { touchEventsData: e, touches: s } = t;
                0 === e.velocities.length &&
                  e.velocities.push({
                    position: s[t.isHorizontal() ? "startX" : "startY"],
                    time: e.touchStartTime,
                  }),
                  e.velocities.push({
                    position: s[t.isHorizontal() ? "currentX" : "currentY"],
                    time: ve(),
                  });
              },
              onTouchEnd: function (e) {
                let { currentPos: s } = e;
                const {
                    params: r,
                    $wrapperEl: o,
                    rtlTranslate: a,
                    snapGrid: l,
                    touchEventsData: c,
                  } = t,
                  d = ve() - c.touchStartTime;
                if (s < -t.minTranslate()) t.slideTo(t.activeIndex);
                else if (s > -t.maxTranslate())
                  t.slides.length < l.length
                    ? t.slideTo(l.length - 1)
                    : t.slideTo(t.slides.length - 1);
                else {
                  if (r.freeMode.momentum) {
                    if (c.velocities.length > 1) {
                      const e = c.velocities.pop(),
                        s = c.velocities.pop(),
                        i = e.position - s.position,
                        n = e.time - s.time;
                      (t.velocity = i / n),
                        (t.velocity /= 2),
                        Math.abs(t.velocity) < r.freeMode.minimumVelocity &&
                          (t.velocity = 0),
                        (n > 150 || ve() - e.time > 300) && (t.velocity = 0);
                    } else t.velocity = 0;
                    (t.velocity *= r.freeMode.momentumVelocityRatio),
                      (c.velocities.length = 0);
                    let e = 1e3 * r.freeMode.momentumRatio;
                    const s = t.velocity * e;
                    let d = t.translate + s;
                    a && (d = -d);
                    let u,
                      h = !1;
                    const p =
                      20 *
                      Math.abs(t.velocity) *
                      r.freeMode.momentumBounceRatio;
                    let f;
                    if (d < t.maxTranslate())
                      r.freeMode.momentumBounce
                        ? (d + t.maxTranslate() < -p &&
                            (d = t.maxTranslate() - p),
                          (u = t.maxTranslate()),
                          (h = !0),
                          (c.allowMomentumBounce = !0))
                        : (d = t.maxTranslate()),
                        r.loop && r.centeredSlides && (f = !0);
                    else if (d > t.minTranslate())
                      r.freeMode.momentumBounce
                        ? (d - t.minTranslate() > p &&
                            (d = t.minTranslate() + p),
                          (u = t.minTranslate()),
                          (h = !0),
                          (c.allowMomentumBounce = !0))
                        : (d = t.minTranslate()),
                        r.loop && r.centeredSlides && (f = !0);
                    else if (r.freeMode.sticky) {
                      let e;
                      for (let t = 0; t < l.length; t += 1)
                        if (l[t] > -d) {
                          e = t;
                          break;
                        }
                      (d =
                        Math.abs(l[e] - d) < Math.abs(l[e - 1] - d) ||
                        "next" === t.swipeDirection
                          ? l[e]
                          : l[e - 1]),
                        (d = -d);
                    }
                    if (
                      (f &&
                        n("transitionEnd", () => {
                          t.loopFix();
                        }),
                      0 !== t.velocity)
                    ) {
                      if (
                        ((e = a
                          ? Math.abs((-d - t.translate) / t.velocity)
                          : Math.abs((d - t.translate) / t.velocity)),
                        r.freeMode.sticky)
                      ) {
                        const s = Math.abs((a ? -d : d) - t.translate),
                          i = t.slidesSizesGrid[t.activeIndex];
                        e =
                          s < i
                            ? r.speed
                            : s < 2 * i
                            ? 1.5 * r.speed
                            : 2.5 * r.speed;
                      }
                    } else if (r.freeMode.sticky)
                      return void t.slideToClosest();
                    r.freeMode.momentumBounce && h
                      ? (t.updateProgress(u),
                        t.setTransition(e),
                        t.setTranslate(d),
                        t.transitionStart(!0, t.swipeDirection),
                        (t.animating = !0),
                        o.transitionEnd(() => {
                          t &&
                            !t.destroyed &&
                            c.allowMomentumBounce &&
                            (i("momentumBounce"),
                            t.setTransition(r.speed),
                            setTimeout(() => {
                              t.setTranslate(u),
                                o.transitionEnd(() => {
                                  t && !t.destroyed && t.transitionEnd();
                                });
                            }, 0));
                        }))
                      : t.velocity
                      ? (i("_freeModeNoMomentumRelease"),
                        t.updateProgress(d),
                        t.setTransition(e),
                        t.setTranslate(d),
                        t.transitionStart(!0, t.swipeDirection),
                        t.animating ||
                          ((t.animating = !0),
                          o.transitionEnd(() => {
                            t && !t.destroyed && t.transitionEnd();
                          })))
                      : t.updateProgress(d),
                      t.updateActiveIndex(),
                      t.updateSlidesClasses();
                  } else {
                    if (r.freeMode.sticky) return void t.slideToClosest();
                    r.freeMode && i("_freeModeNoMomentumRelease");
                  }
                  (!r.freeMode.momentum || d >= r.longSwipesMs) &&
                    (t.updateProgress(),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses());
                }
              },
            },
          });
      }
      function ot(e, t) {
        return e.transformEl
          ? t
              .find(e.transformEl)
              .css({
                "backface-visibility": "hidden",
                "-webkit-backface-visibility": "hidden",
              })
          : t;
      }
      function at(e) {
        let { swiper: t, extendParams: s, on: i } = e;
        s({ fadeEffect: { crossFade: !1, transformEl: null } });
        !(function (e) {
          const {
            effect: t,
            swiper: s,
            on: i,
            setTranslate: n,
            setTransition: r,
            overwriteParams: o,
            perspective: a,
            recreateShadows: l,
            getEffectParams: c,
          } = e;
          let d;
          i("beforeInit", () => {
            if (s.params.effect !== t) return;
            s.classNames.push(`${s.params.containerModifierClass}${t}`),
              a &&
                a() &&
                s.classNames.push(`${s.params.containerModifierClass}3d`);
            const e = o ? o() : {};
            Object.assign(s.params, e), Object.assign(s.originalParams, e);
          }),
            i("setTranslate", () => {
              s.params.effect === t && n();
            }),
            i("setTransition", (e, i) => {
              s.params.effect === t && r(i);
            }),
            i("transitionEnd", () => {
              if (s.params.effect === t && l) {
                if (!c || !c().slideShadows) return;
                s.slides.each((e) => {
                  s.$(e)
                    .find(
                      ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                    )
                    .remove();
                }),
                  l();
              }
            }),
            i("virtualUpdate", () => {
              s.params.effect === t &&
                (s.slides.length || (d = !0),
                requestAnimationFrame(() => {
                  d && s.slides && s.slides.length && (n(), (d = !1));
                }));
            });
        })({
          effect: "fade",
          swiper: t,
          on: i,
          setTranslate: () => {
            const { slides: e } = t,
              s = t.params.fadeEffect;
            for (let i = 0; i < e.length; i += 1) {
              const e = t.slides.eq(i);
              let n = -e[0].swiperSlideOffset;
              t.params.virtualTranslate || (n -= t.translate);
              let r = 0;
              t.isHorizontal() || ((r = n), (n = 0));
              const o = t.params.fadeEffect.crossFade
                ? Math.max(1 - Math.abs(e[0].progress), 0)
                : 1 + Math.min(Math.max(e[0].progress, -1), 0);
              ot(s, e)
                .css({ opacity: o })
                .transform(`translate3d(${n}px, ${r}px, 0px)`);
            }
          },
          setTransition: (e) => {
            const { transformEl: s } = t.params.fadeEffect;
            (s ? t.slides.find(s) : t.slides).transition(e),
              (function (e) {
                let {
                  swiper: t,
                  duration: s,
                  transformEl: i,
                  allSlides: n,
                } = e;
                const { slides: r, activeIndex: o, $wrapperEl: a } = t;
                if (t.params.virtualTranslate && 0 !== s) {
                  let e,
                    s = !1;
                  (e = n ? (i ? r.find(i) : r) : i ? r.eq(o).find(i) : r.eq(o)),
                    e.transitionEnd(() => {
                      if (s) return;
                      if (!t || t.destroyed) return;
                      (s = !0), (t.animating = !1);
                      const e = ["webkitTransitionEnd", "transitionend"];
                      for (let t = 0; t < e.length; t += 1) a.trigger(e[t]);
                    });
                }
              })({ swiper: t, duration: e, transformEl: s, allSlides: !0 });
          },
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !t.params.cssMode,
          }),
        });
      }
      function lt() {
        let e = document.querySelectorAll(
          '[class*="__swiper"]:not(.swiper-wrapper)'
        );
        e &&
          e.forEach((e) => {
            e.parentElement.classList.add("swiper"),
              e.classList.add("swiper-wrapper");
            for (const t of e.children) t.classList.add("swiper-slide");
          });
      }
      window.addEventListener("load", function (e) {
        !(function () {
          if (
            (lt(),
            document.querySelector(".body-main-slider") &&
              new et(".body-main-slider", {
                modules: [st, at, it, nt],
                effect: "fade",
                autoplay: { delay: 3e3, disableOnInteraction: !1 },
                observer: !0,
                observeParents: !0,
                slidesPerView: 1,
                spaceBetween: 0,
                autoHeight: !1,
                speed: 1e3,
                loop: !0,
                preloadImages: !1,
                lazy: { loadPrevNext: !0 },
                pagination: {
                  el: ".body-main-slider__controll",
                  clickable: !0,
                },
                breakpoints: {
                  320: { autoHeight: !0 },
                  992: { autoHeight: !1 },
                },
                on: {
                  init: function () {
                    document
                      .querySelectorAll(
                        ".body-main-slider__controll .swiper-pagination-bullet"
                      )
                      .forEach((e, t) => {
                        let s;
                        t < 10 && (s = "0"), (e.innerHTML = `${s}${t + 1}`);
                      });
                  },
                  breakpoint: function (e, t) {
                    !t.autoHeight &&
                      (document.querySelector(
                        ".body-main-slider__swiper"
                      ).style.height = "auto"),
                      e.updateSize();
                  },
                },
              }),
            document.querySelector(".gallery__slider"))
          ) {
            let e = new et(".gallery__slider", {
              modules: [it, nt, rt],
              autoplay: {
                delay: 3e3,
                stopOnLastSlide: !1,
                disableOnInteraction: !1,
              },
              freeMode: { enabled: !0 },
              observer: !0,
              observeParents: !0,
              slidesPerView: "auto",
              spaceBetween: 32,
              autoHeight: !1,
              speed: 1e3,
              loop: !0,
              preloadImages: !1,
              lazy: { loadPrevNext: !0 },
              breakpoints: {},
              on: { slideChange: function (e) {} },
            });
            function t() {
              const e = document.querySelector(".gallery__container"),
                t = (window.innerWidth - e.offsetWidth) / 2;
              document.querySelector(".gallery__slider").style.width =
                t > 0
                  ? document.querySelector(".gallery__body").offsetWidth +
                    t +
                    15 +
                    "px"
                  : document.querySelector(".gallery__body").offsetWidth +
                    15 +
                    "px";
            }
            window.addEventListener("resize", t), t(), e.update();
          }
        })();
      });
      s(2352), s(3542);
      var ct,
        dt = s(1807),
        ut = s.n(dt),
        ht =
          (s(4249),
          s(7692),
          s(8165),
          s(7543),
          s(3344),
          s(7323),
          s(4079),
          s(3096)),
        pt = s.n(ht),
        ft = s(1296),
        gt = s.n(ft),
        mt = s(773),
        vt = s.n(mt),
        yt = [],
        bt = "ResizeObserver loop completed with undelivered notifications.";
      !(function (e) {
        (e.BORDER_BOX = "border-box"),
          (e.CONTENT_BOX = "content-box"),
          (e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box");
      })(ct || (ct = {}));
      var wt,
        xt = function (e) {
          return Object.freeze(e);
        },
        St = function (e, t) {
          (this.inlineSize = e), (this.blockSize = t), xt(this);
        },
        Et = (function () {
          function e(e, t, s, i) {
            return (
              (this.x = e),
              (this.y = t),
              (this.width = s),
              (this.height = i),
              (this.top = this.y),
              (this.left = this.x),
              (this.bottom = this.top + this.height),
              (this.right = this.left + this.width),
              xt(this)
            );
          }
          return (
            (e.prototype.toJSON = function () {
              var e = this;
              return {
                x: e.x,
                y: e.y,
                top: e.top,
                right: e.right,
                bottom: e.bottom,
                left: e.left,
                width: e.width,
                height: e.height,
              };
            }),
            (e.fromRect = function (t) {
              return new e(t.x, t.y, t.width, t.height);
            }),
            e
          );
        })(),
        Ct = function (e) {
          return e instanceof SVGElement && "getBBox" in e;
        },
        Tt = function (e) {
          if (Ct(e)) {
            var t = e.getBBox(),
              s = t.width,
              i = t.height;
            return !s && !i;
          }
          var n = e,
            r = n.offsetWidth,
            o = n.offsetHeight;
          return !(r || o || e.getClientRects().length);
        },
        Ot = function (e) {
          var t, s;
          if (e instanceof Element) return !0;
          var i =
            null ===
              (s =
                null === (t = e) || void 0 === t ? void 0 : t.ownerDocument) ||
            void 0 === s
              ? void 0
              : s.defaultView;
          return !!(i && e instanceof i.Element);
        },
        Lt = "undefined" != typeof window ? window : {},
        At = new WeakMap(),
        It = /auto|scroll/,
        kt = /^tb|vertical/,
        _t = /msie|trident/i.test(Lt.navigator && Lt.navigator.userAgent),
        Mt = function (e) {
          return parseFloat(e || "0");
        },
        Pt = function (e, t, s) {
          return (
            void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            void 0 === s && (s = !1),
            new St((s ? t : e) || 0, (s ? e : t) || 0)
          );
        },
        $t = xt({
          devicePixelContentBoxSize: Pt(),
          borderBoxSize: Pt(),
          contentBoxSize: Pt(),
          contentRect: new Et(0, 0, 0, 0),
        }),
        zt = function (e, t) {
          if ((void 0 === t && (t = !1), At.has(e) && !t)) return At.get(e);
          if (Tt(e)) return At.set(e, $t), $t;
          var s = getComputedStyle(e),
            i = Ct(e) && e.ownerSVGElement && e.getBBox(),
            n = !_t && "border-box" === s.boxSizing,
            r = kt.test(s.writingMode || ""),
            o = !i && It.test(s.overflowY || ""),
            a = !i && It.test(s.overflowX || ""),
            l = i ? 0 : Mt(s.paddingTop),
            c = i ? 0 : Mt(s.paddingRight),
            d = i ? 0 : Mt(s.paddingBottom),
            u = i ? 0 : Mt(s.paddingLeft),
            h = i ? 0 : Mt(s.borderTopWidth),
            p = i ? 0 : Mt(s.borderRightWidth),
            f = i ? 0 : Mt(s.borderBottomWidth),
            g = u + c,
            m = l + d,
            v = (i ? 0 : Mt(s.borderLeftWidth)) + p,
            y = h + f,
            b = a ? e.offsetHeight - y - e.clientHeight : 0,
            w = o ? e.offsetWidth - v - e.clientWidth : 0,
            x = n ? g + v : 0,
            S = n ? m + y : 0,
            E = i ? i.width : Mt(s.width) - x - w,
            C = i ? i.height : Mt(s.height) - S - b,
            T = E + g + w + v,
            O = C + m + b + y,
            L = xt({
              devicePixelContentBoxSize: Pt(
                Math.round(E * devicePixelRatio),
                Math.round(C * devicePixelRatio),
                r
              ),
              borderBoxSize: Pt(T, O, r),
              contentBoxSize: Pt(E, C, r),
              contentRect: new Et(u, l, E, C),
            });
          return At.set(e, L), L;
        },
        Dt = function (e, t, s) {
          var i = zt(e, s),
            n = i.borderBoxSize,
            r = i.contentBoxSize,
            o = i.devicePixelContentBoxSize;
          switch (t) {
            case ct.DEVICE_PIXEL_CONTENT_BOX:
              return o;
            case ct.BORDER_BOX:
              return n;
            default:
              return r;
          }
        },
        Bt = function (e) {
          var t = zt(e);
          (this.target = e),
            (this.contentRect = t.contentRect),
            (this.borderBoxSize = xt([t.borderBoxSize])),
            (this.contentBoxSize = xt([t.contentBoxSize])),
            (this.devicePixelContentBoxSize = xt([
              t.devicePixelContentBoxSize,
            ]));
        },
        Nt = function (e) {
          if (Tt(e)) return 1 / 0;
          for (var t = 0, s = e.parentNode; s; ) (t += 1), (s = s.parentNode);
          return t;
        },
        jt = function () {
          var e = 1 / 0,
            t = [];
          yt.forEach(function (s) {
            if (0 !== s.activeTargets.length) {
              var i = [];
              s.activeTargets.forEach(function (t) {
                var s = new Bt(t.target),
                  n = Nt(t.target);
                i.push(s),
                  (t.lastReportedSize = Dt(t.target, t.observedBox)),
                  n < e && (e = n);
              }),
                t.push(function () {
                  s.callback.call(s.observer, i, s.observer);
                }),
                s.activeTargets.splice(0, s.activeTargets.length);
            }
          });
          for (var s = 0, i = t; s < i.length; s++) {
            (0, i[s])();
          }
          return e;
        },
        Rt = function (e) {
          yt.forEach(function (t) {
            t.activeTargets.splice(0, t.activeTargets.length),
              t.skippedTargets.splice(0, t.skippedTargets.length),
              t.observationTargets.forEach(function (s) {
                s.isActive() &&
                  (Nt(s.target) > e
                    ? t.activeTargets.push(s)
                    : t.skippedTargets.push(s));
              });
          });
        },
        Wt = function () {
          var e = 0;
          for (
            Rt(e);
            yt.some(function (e) {
              return e.activeTargets.length > 0;
            });

          )
            (e = jt()), Rt(e);
          return (
            yt.some(function (e) {
              return e.skippedTargets.length > 0;
            }) &&
              (function () {
                var e;
                "function" == typeof ErrorEvent
                  ? (e = new ErrorEvent("error", { message: bt }))
                  : ((e = document.createEvent("Event")).initEvent(
                      "error",
                      !1,
                      !1
                    ),
                    (e.message = bt)),
                  window.dispatchEvent(e);
              })(),
            e > 0
          );
        },
        Gt = [],
        Ht = function (e) {
          if (!wt) {
            var t = 0,
              s = document.createTextNode("");
            new MutationObserver(function () {
              return Gt.splice(0).forEach(function (e) {
                return e();
              });
            }).observe(s, { characterData: !0 }),
              (wt = function () {
                s.textContent = "" + (t ? t-- : t++);
              });
          }
          Gt.push(e), wt();
        },
        Ft = 0,
        Vt = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
        qt = [
          "resize",
          "load",
          "transitionend",
          "animationend",
          "animationstart",
          "animationiteration",
          "keyup",
          "keydown",
          "mouseup",
          "mousedown",
          "mouseover",
          "mouseout",
          "blur",
          "focus",
        ],
        Xt = function (e) {
          return void 0 === e && (e = 0), Date.now() + e;
        },
        Yt = !1,
        Ut = new ((function () {
          function e() {
            var e = this;
            (this.stopped = !0),
              (this.listener = function () {
                return e.schedule();
              });
          }
          return (
            (e.prototype.run = function (e) {
              var t = this;
              if ((void 0 === e && (e = 250), !Yt)) {
                Yt = !0;
                var s,
                  i = Xt(e);
                (s = function () {
                  var s = !1;
                  try {
                    s = Wt();
                  } finally {
                    if (((Yt = !1), (e = i - Xt()), !Ft)) return;
                    s ? t.run(1e3) : e > 0 ? t.run(e) : t.start();
                  }
                }),
                  Ht(function () {
                    requestAnimationFrame(s);
                  });
              }
            }),
            (e.prototype.schedule = function () {
              this.stop(), this.run();
            }),
            (e.prototype.observe = function () {
              var e = this,
                t = function () {
                  return e.observer && e.observer.observe(document.body, Vt);
                };
              document.body ? t() : Lt.addEventListener("DOMContentLoaded", t);
            }),
            (e.prototype.start = function () {
              var e = this;
              this.stopped &&
                ((this.stopped = !1),
                (this.observer = new MutationObserver(this.listener)),
                this.observe(),
                qt.forEach(function (t) {
                  return Lt.addEventListener(t, e.listener, !0);
                }));
            }),
            (e.prototype.stop = function () {
              var e = this;
              this.stopped ||
                (this.observer && this.observer.disconnect(),
                qt.forEach(function (t) {
                  return Lt.removeEventListener(t, e.listener, !0);
                }),
                (this.stopped = !0));
            }),
            e
          );
        })())(),
        Kt = function (e) {
          !Ft && e > 0 && Ut.start(), !(Ft += e) && Ut.stop();
        },
        Zt = (function () {
          function e(e, t) {
            (this.target = e),
              (this.observedBox = t || ct.CONTENT_BOX),
              (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
          }
          return (
            (e.prototype.isActive = function () {
              var e,
                t = Dt(this.target, this.observedBox, !0);
              return (
                (e = this.target),
                Ct(e) ||
                  (function (e) {
                    switch (e.tagName) {
                      case "INPUT":
                        if ("image" !== e.type) break;
                      case "VIDEO":
                      case "AUDIO":
                      case "EMBED":
                      case "OBJECT":
                      case "CANVAS":
                      case "IFRAME":
                      case "IMG":
                        return !0;
                    }
                    return !1;
                  })(e) ||
                  "inline" !== getComputedStyle(e).display ||
                  (this.lastReportedSize = t),
                this.lastReportedSize.inlineSize !== t.inlineSize ||
                  this.lastReportedSize.blockSize !== t.blockSize
              );
            }),
            e
          );
        })(),
        Jt = function (e, t) {
          (this.activeTargets = []),
            (this.skippedTargets = []),
            (this.observationTargets = []),
            (this.observer = e),
            (this.callback = t);
        },
        Qt = new WeakMap(),
        es = function (e, t) {
          for (var s = 0; s < e.length; s += 1) if (e[s].target === t) return s;
          return -1;
        },
        ts = (function () {
          function e() {}
          return (
            (e.connect = function (e, t) {
              var s = new Jt(e, t);
              Qt.set(e, s);
            }),
            (e.observe = function (e, t, s) {
              var i = Qt.get(e),
                n = 0 === i.observationTargets.length;
              es(i.observationTargets, t) < 0 &&
                (n && yt.push(i),
                i.observationTargets.push(new Zt(t, s && s.box)),
                Kt(1),
                Ut.schedule());
            }),
            (e.unobserve = function (e, t) {
              var s = Qt.get(e),
                i = es(s.observationTargets, t),
                n = 1 === s.observationTargets.length;
              i >= 0 &&
                (n && yt.splice(yt.indexOf(s), 1),
                s.observationTargets.splice(i, 1),
                Kt(-1));
            }),
            (e.disconnect = function (e) {
              var t = this,
                s = Qt.get(e);
              s.observationTargets.slice().forEach(function (s) {
                return t.unobserve(e, s.target);
              }),
                s.activeTargets.splice(0, s.activeTargets.length);
            }),
            e
          );
        })(),
        ss = (function () {
          function e(e) {
            if (0 === arguments.length)
              throw new TypeError(
                "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present."
              );
            if ("function" != typeof e)
              throw new TypeError(
                "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
              );
            ts.connect(this, e);
          }
          return (
            (e.prototype.observe = function (e, t) {
              if (0 === arguments.length)
                throw new TypeError(
                  "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present."
                );
              if (!Ot(e))
                throw new TypeError(
                  "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element"
                );
              ts.observe(this, e, t);
            }),
            (e.prototype.unobserve = function (e) {
              if (0 === arguments.length)
                throw new TypeError(
                  "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present."
                );
              if (!Ot(e))
                throw new TypeError(
                  "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element"
                );
              ts.unobserve(this, e);
            }),
            (e.prototype.disconnect = function () {
              ts.disconnect(this);
            }),
            (e.toString = function () {
              return "function ResizeObserver () { [polyfill code] }";
            }),
            e
          );
        })(),
        is =
          (s(7985),
          s(9989),
          s(8307),
          s(6618),
          s(4390),
          function (e) {
            return Array.prototype.reduce.call(
              e,
              function (e, t) {
                var s = t.name.match(/data-simplebar-(.+)/);
                if (s) {
                  var i = s[1].replace(/\W+(.)/g, function (e, t) {
                    return t.toUpperCase();
                  });
                  switch (t.value) {
                    case "true":
                      e[i] = !0;
                      break;
                    case "false":
                      e[i] = !1;
                      break;
                    case void 0:
                      e[i] = !0;
                      break;
                    default:
                      e[i] = t.value;
                  }
                }
                return e;
              },
              {}
            );
          });
      function ns(e) {
        return e && e.ownerDocument && e.ownerDocument.defaultView
          ? e.ownerDocument.defaultView
          : window;
      }
      function rs(e) {
        return e && e.ownerDocument ? e.ownerDocument : document;
      }
      var os = null,
        as = null;
      function ls(e) {
        if (null === os) {
          var t = rs(e);
          if (void 0 === t) return (os = 0);
          var s = t.body,
            i = t.createElement("div");
          i.classList.add("simplebar-hide-scrollbar"), s.appendChild(i);
          var n = i.getBoundingClientRect().right;
          s.removeChild(i), (os = n);
        }
        return os;
      }
      ut() &&
        window.addEventListener("resize", function () {
          as !== window.devicePixelRatio &&
            ((as = window.devicePixelRatio), (os = null));
        });
      var cs = (function () {
        function e(t, s) {
          var i = this;
          (this.onScroll = function () {
            var e = ns(i.el);
            i.scrollXTicking ||
              (e.requestAnimationFrame(i.scrollX), (i.scrollXTicking = !0)),
              i.scrollYTicking ||
                (e.requestAnimationFrame(i.scrollY), (i.scrollYTicking = !0));
          }),
            (this.scrollX = function () {
              i.axis.x.isOverflowing &&
                (i.showScrollbar("x"), i.positionScrollbar("x")),
                (i.scrollXTicking = !1);
            }),
            (this.scrollY = function () {
              i.axis.y.isOverflowing &&
                (i.showScrollbar("y"), i.positionScrollbar("y")),
                (i.scrollYTicking = !1);
            }),
            (this.onMouseEnter = function () {
              i.showScrollbar("x"), i.showScrollbar("y");
            }),
            (this.onMouseMove = function (e) {
              (i.mouseX = e.clientX),
                (i.mouseY = e.clientY),
                (i.axis.x.isOverflowing || i.axis.x.forceVisible) &&
                  i.onMouseMoveForAxis("x"),
                (i.axis.y.isOverflowing || i.axis.y.forceVisible) &&
                  i.onMouseMoveForAxis("y");
            }),
            (this.onMouseLeave = function () {
              i.onMouseMove.cancel(),
                (i.axis.x.isOverflowing || i.axis.x.forceVisible) &&
                  i.onMouseLeaveForAxis("x"),
                (i.axis.y.isOverflowing || i.axis.y.forceVisible) &&
                  i.onMouseLeaveForAxis("y"),
                (i.mouseX = -1),
                (i.mouseY = -1);
            }),
            (this.onWindowResize = function () {
              (i.scrollbarWidth = i.getScrollbarWidth()),
                i.hideNativeScrollbar();
            }),
            (this.hideScrollbars = function () {
              (i.axis.x.track.rect = i.axis.x.track.el.getBoundingClientRect()),
                (i.axis.y.track.rect =
                  i.axis.y.track.el.getBoundingClientRect()),
                i.isWithinBounds(i.axis.y.track.rect) ||
                  (i.axis.y.scrollbar.el.classList.remove(i.classNames.visible),
                  (i.axis.y.isVisible = !1)),
                i.isWithinBounds(i.axis.x.track.rect) ||
                  (i.axis.x.scrollbar.el.classList.remove(i.classNames.visible),
                  (i.axis.x.isVisible = !1));
            }),
            (this.onPointerEvent = function (e) {
              var t, s;
              (i.axis.x.track.rect = i.axis.x.track.el.getBoundingClientRect()),
                (i.axis.y.track.rect =
                  i.axis.y.track.el.getBoundingClientRect()),
                (i.axis.x.isOverflowing || i.axis.x.forceVisible) &&
                  (t = i.isWithinBounds(i.axis.x.track.rect)),
                (i.axis.y.isOverflowing || i.axis.y.forceVisible) &&
                  (s = i.isWithinBounds(i.axis.y.track.rect)),
                (t || s) &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  "mousedown" === e.type &&
                    (t &&
                      ((i.axis.x.scrollbar.rect =
                        i.axis.x.scrollbar.el.getBoundingClientRect()),
                      i.isWithinBounds(i.axis.x.scrollbar.rect)
                        ? i.onDragStart(e, "x")
                        : i.onTrackClick(e, "x")),
                    s &&
                      ((i.axis.y.scrollbar.rect =
                        i.axis.y.scrollbar.el.getBoundingClientRect()),
                      i.isWithinBounds(i.axis.y.scrollbar.rect)
                        ? i.onDragStart(e, "y")
                        : i.onTrackClick(e, "y"))));
            }),
            (this.drag = function (t) {
              var s = i.axis[i.draggedAxis].track,
                n = s.rect[i.axis[i.draggedAxis].sizeAttr],
                r = i.axis[i.draggedAxis].scrollbar,
                o = i.contentWrapperEl[i.axis[i.draggedAxis].scrollSizeAttr],
                a = parseInt(i.elStyles[i.axis[i.draggedAxis].sizeAttr], 10);
              t.preventDefault(), t.stopPropagation();
              var l =
                ((("y" === i.draggedAxis ? t.pageY : t.pageX) -
                  s.rect[i.axis[i.draggedAxis].offsetAttr] -
                  i.axis[i.draggedAxis].dragOffset) /
                  (n - r.size)) *
                (o - a);
              "x" === i.draggedAxis &&
                ((l =
                  i.isRtl && e.getRtlHelpers().isRtlScrollbarInverted
                    ? l - (n + r.size)
                    : l),
                (l =
                  i.isRtl && e.getRtlHelpers().isRtlScrollingInverted
                    ? -l
                    : l)),
                (i.contentWrapperEl[i.axis[i.draggedAxis].scrollOffsetAttr] =
                  l);
            }),
            (this.onEndDrag = function (e) {
              var t = rs(i.el),
                s = ns(i.el);
              e.preventDefault(),
                e.stopPropagation(),
                i.el.classList.remove(i.classNames.dragging),
                t.removeEventListener("mousemove", i.drag, !0),
                t.removeEventListener("mouseup", i.onEndDrag, !0),
                (i.removePreventClickId = s.setTimeout(function () {
                  t.removeEventListener("click", i.preventClick, !0),
                    t.removeEventListener("dblclick", i.preventClick, !0),
                    (i.removePreventClickId = null);
                }));
            }),
            (this.preventClick = function (e) {
              e.preventDefault(), e.stopPropagation();
            }),
            (this.el = t),
            (this.minScrollbarWidth = 20),
            (this.options = Object.assign({}, e.defaultOptions, s)),
            (this.classNames = Object.assign(
              {},
              e.defaultOptions.classNames,
              this.options.classNames
            )),
            (this.axis = {
              x: {
                scrollOffsetAttr: "scrollLeft",
                sizeAttr: "width",
                scrollSizeAttr: "scrollWidth",
                offsetSizeAttr: "offsetWidth",
                offsetAttr: "left",
                overflowAttr: "overflowX",
                dragOffset: 0,
                isOverflowing: !0,
                isVisible: !1,
                forceVisible: !1,
                track: {},
                scrollbar: {},
              },
              y: {
                scrollOffsetAttr: "scrollTop",
                sizeAttr: "height",
                scrollSizeAttr: "scrollHeight",
                offsetSizeAttr: "offsetHeight",
                offsetAttr: "top",
                overflowAttr: "overflowY",
                dragOffset: 0,
                isOverflowing: !0,
                isVisible: !1,
                forceVisible: !1,
                track: {},
                scrollbar: {},
              },
            }),
            (this.removePreventClickId = null),
            e.instances.has(this.el) ||
              ((this.recalculate = pt()(this.recalculate.bind(this), 64)),
              (this.onMouseMove = pt()(this.onMouseMove.bind(this), 64)),
              (this.hideScrollbars = gt()(
                this.hideScrollbars.bind(this),
                this.options.timeout
              )),
              (this.onWindowResize = gt()(this.onWindowResize.bind(this), 64, {
                leading: !0,
              })),
              (e.getRtlHelpers = vt()(e.getRtlHelpers)),
              this.init());
        }
        (e.getRtlHelpers = function () {
          var t = document.createElement("div");
          t.innerHTML =
            '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
          var s = t.firstElementChild;
          document.body.appendChild(s);
          var i = s.firstElementChild;
          s.scrollLeft = 0;
          var n = e.getOffset(s),
            r = e.getOffset(i);
          s.scrollLeft = 999;
          var o = e.getOffset(i);
          return {
            isRtlScrollingInverted: n.left !== r.left && r.left - o.left != 0,
            isRtlScrollbarInverted: n.left !== r.left,
          };
        }),
          (e.getOffset = function (e) {
            var t = e.getBoundingClientRect(),
              s = rs(e),
              i = ns(e);
            return {
              top: t.top + (i.pageYOffset || s.documentElement.scrollTop),
              left: t.left + (i.pageXOffset || s.documentElement.scrollLeft),
            };
          });
        var t = e.prototype;
        return (
          (t.init = function () {
            e.instances.set(this.el, this),
              ut() &&
                (this.initDOM(),
                this.setAccessibilityAttributes(),
                (this.scrollbarWidth = this.getScrollbarWidth()),
                this.recalculate(),
                this.initListeners());
          }),
          (t.initDOM = function () {
            var e = this;
            if (
              Array.prototype.filter.call(this.el.children, function (t) {
                return t.classList.contains(e.classNames.wrapper);
              }).length
            )
              (this.wrapperEl = this.el.querySelector(
                "." + this.classNames.wrapper
              )),
                (this.contentWrapperEl =
                  this.options.scrollableNode ||
                  this.el.querySelector("." + this.classNames.contentWrapper)),
                (this.contentEl =
                  this.options.contentNode ||
                  this.el.querySelector("." + this.classNames.contentEl)),
                (this.offsetEl = this.el.querySelector(
                  "." + this.classNames.offset
                )),
                (this.maskEl = this.el.querySelector(
                  "." + this.classNames.mask
                )),
                (this.placeholderEl = this.findChild(
                  this.wrapperEl,
                  "." + this.classNames.placeholder
                )),
                (this.heightAutoObserverWrapperEl = this.el.querySelector(
                  "." + this.classNames.heightAutoObserverWrapperEl
                )),
                (this.heightAutoObserverEl = this.el.querySelector(
                  "." + this.classNames.heightAutoObserverEl
                )),
                (this.axis.x.track.el = this.findChild(
                  this.el,
                  "." + this.classNames.track + "." + this.classNames.horizontal
                )),
                (this.axis.y.track.el = this.findChild(
                  this.el,
                  "." + this.classNames.track + "." + this.classNames.vertical
                ));
            else {
              for (
                this.wrapperEl = document.createElement("div"),
                  this.contentWrapperEl = document.createElement("div"),
                  this.offsetEl = document.createElement("div"),
                  this.maskEl = document.createElement("div"),
                  this.contentEl = document.createElement("div"),
                  this.placeholderEl = document.createElement("div"),
                  this.heightAutoObserverWrapperEl =
                    document.createElement("div"),
                  this.heightAutoObserverEl = document.createElement("div"),
                  this.wrapperEl.classList.add(this.classNames.wrapper),
                  this.contentWrapperEl.classList.add(
                    this.classNames.contentWrapper
                  ),
                  this.offsetEl.classList.add(this.classNames.offset),
                  this.maskEl.classList.add(this.classNames.mask),
                  this.contentEl.classList.add(this.classNames.contentEl),
                  this.placeholderEl.classList.add(this.classNames.placeholder),
                  this.heightAutoObserverWrapperEl.classList.add(
                    this.classNames.heightAutoObserverWrapperEl
                  ),
                  this.heightAutoObserverEl.classList.add(
                    this.classNames.heightAutoObserverEl
                  );
                this.el.firstChild;

              )
                this.contentEl.appendChild(this.el.firstChild);
              this.contentWrapperEl.appendChild(this.contentEl),
                this.offsetEl.appendChild(this.contentWrapperEl),
                this.maskEl.appendChild(this.offsetEl),
                this.heightAutoObserverWrapperEl.appendChild(
                  this.heightAutoObserverEl
                ),
                this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
                this.wrapperEl.appendChild(this.maskEl),
                this.wrapperEl.appendChild(this.placeholderEl),
                this.el.appendChild(this.wrapperEl);
            }
            if (!this.axis.x.track.el || !this.axis.y.track.el) {
              var t = document.createElement("div"),
                s = document.createElement("div");
              t.classList.add(this.classNames.track),
                s.classList.add(this.classNames.scrollbar),
                t.appendChild(s),
                (this.axis.x.track.el = t.cloneNode(!0)),
                this.axis.x.track.el.classList.add(this.classNames.horizontal),
                (this.axis.y.track.el = t.cloneNode(!0)),
                this.axis.y.track.el.classList.add(this.classNames.vertical),
                this.el.appendChild(this.axis.x.track.el),
                this.el.appendChild(this.axis.y.track.el);
            }
            (this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector(
              "." + this.classNames.scrollbar
            )),
              (this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector(
                "." + this.classNames.scrollbar
              )),
              this.options.autoHide ||
                (this.axis.x.scrollbar.el.classList.add(
                  this.classNames.visible
                ),
                this.axis.y.scrollbar.el.classList.add(
                  this.classNames.visible
                )),
              this.el.setAttribute("data-simplebar", "init");
          }),
          (t.setAccessibilityAttributes = function () {
            var e = this.options.ariaLabel || "scrollable content";
            this.contentWrapperEl.setAttribute("tabindex", "0"),
              this.contentWrapperEl.setAttribute("role", "region"),
              this.contentWrapperEl.setAttribute("aria-label", e);
          }),
          (t.initListeners = function () {
            var e = this,
              t = ns(this.el);
            this.options.autoHide &&
              this.el.addEventListener("mouseenter", this.onMouseEnter),
              ["mousedown", "click", "dblclick"].forEach(function (t) {
                e.el.addEventListener(t, e.onPointerEvent, !0);
              }),
              ["touchstart", "touchend", "touchmove"].forEach(function (t) {
                e.el.addEventListener(t, e.onPointerEvent, {
                  capture: !0,
                  passive: !0,
                });
              }),
              this.el.addEventListener("mousemove", this.onMouseMove),
              this.el.addEventListener("mouseleave", this.onMouseLeave),
              this.contentWrapperEl.addEventListener("scroll", this.onScroll),
              t.addEventListener("resize", this.onWindowResize);
            var s = !1,
              i = t.ResizeObserver || ss;
            (this.resizeObserver = new i(function () {
              s && e.recalculate();
            })),
              this.resizeObserver.observe(this.el),
              this.resizeObserver.observe(this.contentEl),
              t.requestAnimationFrame(function () {
                s = !0;
              }),
              (this.mutationObserver = new t.MutationObserver(
                this.recalculate
              )),
              this.mutationObserver.observe(this.contentEl, {
                childList: !0,
                subtree: !0,
                characterData: !0,
              });
          }),
          (t.recalculate = function () {
            var e = ns(this.el);
            (this.elStyles = e.getComputedStyle(this.el)),
              (this.isRtl = "rtl" === this.elStyles.direction);
            var t = this.heightAutoObserverEl.offsetHeight <= 1,
              s = this.heightAutoObserverEl.offsetWidth <= 1,
              i = this.contentEl.offsetWidth,
              n = this.contentWrapperEl.offsetWidth,
              r = this.elStyles.overflowX,
              o = this.elStyles.overflowY;
            (this.contentEl.style.padding =
              this.elStyles.paddingTop +
              " " +
              this.elStyles.paddingRight +
              " " +
              this.elStyles.paddingBottom +
              " " +
              this.elStyles.paddingLeft),
              (this.wrapperEl.style.margin =
                "-" +
                this.elStyles.paddingTop +
                " -" +
                this.elStyles.paddingRight +
                " -" +
                this.elStyles.paddingBottom +
                " -" +
                this.elStyles.paddingLeft);
            var a = this.contentEl.scrollHeight,
              l = this.contentEl.scrollWidth;
            (this.contentWrapperEl.style.height = t ? "auto" : "100%"),
              (this.placeholderEl.style.width = s ? i + "px" : "auto"),
              (this.placeholderEl.style.height = a + "px");
            var c = this.contentWrapperEl.offsetHeight;
            (this.axis.x.isOverflowing = l > i),
              (this.axis.y.isOverflowing = a > c),
              (this.axis.x.isOverflowing =
                "hidden" !== r && this.axis.x.isOverflowing),
              (this.axis.y.isOverflowing =
                "hidden" !== o && this.axis.y.isOverflowing),
              (this.axis.x.forceVisible =
                "x" === this.options.forceVisible ||
                !0 === this.options.forceVisible),
              (this.axis.y.forceVisible =
                "y" === this.options.forceVisible ||
                !0 === this.options.forceVisible),
              this.hideNativeScrollbar();
            var d = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
              u = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
            (this.axis.x.isOverflowing =
              this.axis.x.isOverflowing && l > n - u),
              (this.axis.y.isOverflowing =
                this.axis.y.isOverflowing && a > c - d),
              (this.axis.x.scrollbar.size = this.getScrollbarSize("x")),
              (this.axis.y.scrollbar.size = this.getScrollbarSize("y")),
              (this.axis.x.scrollbar.el.style.width =
                this.axis.x.scrollbar.size + "px"),
              (this.axis.y.scrollbar.el.style.height =
                this.axis.y.scrollbar.size + "px"),
              this.positionScrollbar("x"),
              this.positionScrollbar("y"),
              this.toggleTrackVisibility("x"),
              this.toggleTrackVisibility("y");
          }),
          (t.getScrollbarSize = function (e) {
            if ((void 0 === e && (e = "y"), !this.axis[e].isOverflowing))
              return 0;
            var t,
              s = this.contentEl[this.axis[e].scrollSizeAttr],
              i = this.axis[e].track.el[this.axis[e].offsetSizeAttr],
              n = i / s;
            return (
              (t = Math.max(~~(n * i), this.options.scrollbarMinSize)),
              this.options.scrollbarMaxSize &&
                (t = Math.min(t, this.options.scrollbarMaxSize)),
              t
            );
          }),
          (t.positionScrollbar = function (t) {
            if ((void 0 === t && (t = "y"), this.axis[t].isOverflowing)) {
              var s = this.contentWrapperEl[this.axis[t].scrollSizeAttr],
                i = this.axis[t].track.el[this.axis[t].offsetSizeAttr],
                n = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                r = this.axis[t].scrollbar,
                o = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                a =
                  (o =
                    "x" === t &&
                    this.isRtl &&
                    e.getRtlHelpers().isRtlScrollingInverted
                      ? -o
                      : o) /
                  (s - n),
                l = ~~((i - r.size) * a);
              (l =
                "x" === t &&
                this.isRtl &&
                e.getRtlHelpers().isRtlScrollbarInverted
                  ? l + (i - r.size)
                  : l),
                (r.el.style.transform =
                  "x" === t
                    ? "translate3d(" + l + "px, 0, 0)"
                    : "translate3d(0, " + l + "px, 0)");
            }
          }),
          (t.toggleTrackVisibility = function (e) {
            void 0 === e && (e = "y");
            var t = this.axis[e].track.el,
              s = this.axis[e].scrollbar.el;
            this.axis[e].isOverflowing || this.axis[e].forceVisible
              ? ((t.style.visibility = "visible"),
                (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                  "scroll"))
              : ((t.style.visibility = "hidden"),
                (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                  "hidden")),
              this.axis[e].isOverflowing
                ? (s.style.display = "block")
                : (s.style.display = "none");
          }),
          (t.hideNativeScrollbar = function () {
            (this.offsetEl.style[this.isRtl ? "left" : "right"] =
              this.axis.y.isOverflowing || this.axis.y.forceVisible
                ? "-" + this.scrollbarWidth + "px"
                : 0),
              (this.offsetEl.style.bottom =
                this.axis.x.isOverflowing || this.axis.x.forceVisible
                  ? "-" + this.scrollbarWidth + "px"
                  : 0);
          }),
          (t.onMouseMoveForAxis = function (e) {
            void 0 === e && (e = "y"),
              (this.axis[e].track.rect =
                this.axis[e].track.el.getBoundingClientRect()),
              (this.axis[e].scrollbar.rect =
                this.axis[e].scrollbar.el.getBoundingClientRect()),
              this.isWithinBounds(this.axis[e].scrollbar.rect)
                ? this.axis[e].scrollbar.el.classList.add(this.classNames.hover)
                : this.axis[e].scrollbar.el.classList.remove(
                    this.classNames.hover
                  ),
              this.isWithinBounds(this.axis[e].track.rect)
                ? (this.showScrollbar(e),
                  this.axis[e].track.el.classList.add(this.classNames.hover))
                : this.axis[e].track.el.classList.remove(this.classNames.hover);
          }),
          (t.onMouseLeaveForAxis = function (e) {
            void 0 === e && (e = "y"),
              this.axis[e].track.el.classList.remove(this.classNames.hover),
              this.axis[e].scrollbar.el.classList.remove(this.classNames.hover);
          }),
          (t.showScrollbar = function (e) {
            void 0 === e && (e = "y");
            var t = this.axis[e].scrollbar.el;
            this.axis[e].isVisible ||
              (t.classList.add(this.classNames.visible),
              (this.axis[e].isVisible = !0)),
              this.options.autoHide && this.hideScrollbars();
          }),
          (t.onDragStart = function (e, t) {
            void 0 === t && (t = "y");
            var s = rs(this.el),
              i = ns(this.el),
              n = this.axis[t].scrollbar,
              r = "y" === t ? e.pageY : e.pageX;
            (this.axis[t].dragOffset = r - n.rect[this.axis[t].offsetAttr]),
              (this.draggedAxis = t),
              this.el.classList.add(this.classNames.dragging),
              s.addEventListener("mousemove", this.drag, !0),
              s.addEventListener("mouseup", this.onEndDrag, !0),
              null === this.removePreventClickId
                ? (s.addEventListener("click", this.preventClick, !0),
                  s.addEventListener("dblclick", this.preventClick, !0))
                : (i.clearTimeout(this.removePreventClickId),
                  (this.removePreventClickId = null));
          }),
          (t.onTrackClick = function (e, t) {
            var s = this;
            if ((void 0 === t && (t = "y"), this.options.clickOnTrack)) {
              var i = ns(this.el);
              this.axis[t].scrollbar.rect =
                this.axis[t].scrollbar.el.getBoundingClientRect();
              var n = this.axis[t].scrollbar.rect[this.axis[t].offsetAttr],
                r = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                o = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                a =
                  ("y" === t ? this.mouseY - n : this.mouseX - n) < 0 ? -1 : 1,
                l = -1 === a ? o - r : o + r;
              !(function e() {
                var n, r;
                -1 === a
                  ? o > l &&
                    ((o -= s.options.clickOnTrackSpeed),
                    s.contentWrapperEl.scrollTo(
                      (((n = {})[s.axis[t].offsetAttr] = o), n)
                    ),
                    i.requestAnimationFrame(e))
                  : o < l &&
                    ((o += s.options.clickOnTrackSpeed),
                    s.contentWrapperEl.scrollTo(
                      (((r = {})[s.axis[t].offsetAttr] = o), r)
                    ),
                    i.requestAnimationFrame(e));
              })();
            }
          }),
          (t.getContentElement = function () {
            return this.contentEl;
          }),
          (t.getScrollElement = function () {
            return this.contentWrapperEl;
          }),
          (t.getScrollbarWidth = function () {
            try {
              return "none" ===
                getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar")
                  .display ||
                "scrollbarWidth" in document.documentElement.style ||
                "-ms-overflow-style" in document.documentElement.style
                ? 0
                : ls(this.el);
            } catch (e) {
              return ls(this.el);
            }
          }),
          (t.removeListeners = function () {
            var e = this,
              t = ns(this.el);
            this.options.autoHide &&
              this.el.removeEventListener("mouseenter", this.onMouseEnter),
              ["mousedown", "click", "dblclick"].forEach(function (t) {
                e.el.removeEventListener(t, e.onPointerEvent, !0);
              }),
              ["touchstart", "touchend", "touchmove"].forEach(function (t) {
                e.el.removeEventListener(t, e.onPointerEvent, {
                  capture: !0,
                  passive: !0,
                });
              }),
              this.el.removeEventListener("mousemove", this.onMouseMove),
              this.el.removeEventListener("mouseleave", this.onMouseLeave),
              this.contentWrapperEl &&
                this.contentWrapperEl.removeEventListener(
                  "scroll",
                  this.onScroll
                ),
              t.removeEventListener("resize", this.onWindowResize),
              this.mutationObserver && this.mutationObserver.disconnect(),
              this.resizeObserver && this.resizeObserver.disconnect(),
              this.recalculate.cancel(),
              this.onMouseMove.cancel(),
              this.hideScrollbars.cancel(),
              this.onWindowResize.cancel();
          }),
          (t.unMount = function () {
            this.removeListeners(), e.instances.delete(this.el);
          }),
          (t.isWithinBounds = function (e) {
            return (
              this.mouseX >= e.left &&
              this.mouseX <= e.left + e.width &&
              this.mouseY >= e.top &&
              this.mouseY <= e.top + e.height
            );
          }),
          (t.findChild = function (e, t) {
            var s =
              e.matches ||
              e.webkitMatchesSelector ||
              e.mozMatchesSelector ||
              e.msMatchesSelector;
            return Array.prototype.filter.call(e.children, function (e) {
              return s.call(e, t);
            })[0];
          }),
          e
        );
      })();
      (cs.defaultOptions = {
        autoHide: !0,
        forceVisible: !1,
        clickOnTrack: !0,
        clickOnTrackSpeed: 40,
        classNames: {
          contentEl: "simplebar-content",
          contentWrapper: "simplebar-content-wrapper",
          offset: "simplebar-offset",
          mask: "simplebar-mask",
          wrapper: "simplebar-wrapper",
          placeholder: "simplebar-placeholder",
          scrollbar: "simplebar-scrollbar",
          track: "simplebar-track",
          heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
          heightAutoObserverEl: "simplebar-height-auto-observer",
          visible: "simplebar-visible",
          horizontal: "simplebar-horizontal",
          vertical: "simplebar-vertical",
          hover: "simplebar-hover",
          dragging: "simplebar-dragging",
        },
        scrollbarMinSize: 25,
        scrollbarMaxSize: 0,
        timeout: 1e3,
      }),
        (cs.instances = new WeakMap()),
        (cs.initDOMLoadedElements = function () {
          document.removeEventListener(
            "DOMContentLoaded",
            this.initDOMLoadedElements
          ),
            window.removeEventListener("load", this.initDOMLoadedElements),
            Array.prototype.forEach.call(
              document.querySelectorAll("[data-simplebar]"),
              function (e) {
                "init" === e.getAttribute("data-simplebar") ||
                  cs.instances.has(e) ||
                  new cs(e, is(e.attributes));
              }
            );
        }),
        (cs.removeObserver = function () {
          this.globalObserver.disconnect();
        }),
        (cs.initHtmlApi = function () {
          (this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this)),
            "undefined" != typeof MutationObserver &&
              ((this.globalObserver = new MutationObserver(cs.handleMutations)),
              this.globalObserver.observe(document, {
                childList: !0,
                subtree: !0,
              })),
            "complete" === document.readyState ||
            ("loading" !== document.readyState &&
              !document.documentElement.doScroll)
              ? window.setTimeout(this.initDOMLoadedElements)
              : (document.addEventListener(
                  "DOMContentLoaded",
                  this.initDOMLoadedElements
                ),
                window.addEventListener("load", this.initDOMLoadedElements));
        }),
        (cs.handleMutations = function (e) {
          e.forEach(function (e) {
            Array.prototype.forEach.call(e.addedNodes, function (e) {
              1 === e.nodeType &&
                (e.hasAttribute("data-simplebar")
                  ? !cs.instances.has(e) &&
                    document.documentElement.contains(e) &&
                    new cs(e, is(e.attributes))
                  : Array.prototype.forEach.call(
                      e.querySelectorAll("[data-simplebar]"),
                      function (e) {
                        "init" !== e.getAttribute("data-simplebar") &&
                          !cs.instances.has(e) &&
                          document.documentElement.contains(e) &&
                          new cs(e, is(e.attributes));
                      }
                    ));
            }),
              Array.prototype.forEach.call(e.removedNodes, function (e) {
                1 === e.nodeType &&
                  ("init" === e.getAttribute("data-simplebar")
                    ? cs.instances.has(e) &&
                      !document.documentElement.contains(e) &&
                      cs.instances.get(e).unMount()
                    : Array.prototype.forEach.call(
                        e.querySelectorAll('[data-simplebar="init"]'),
                        function (e) {
                          cs.instances.has(e) &&
                            !document.documentElement.contains(e) &&
                            cs.instances.get(e).unMount();
                        }
                      ));
              });
          });
        }),
        (cs.getOptions = is),
        ut() && cs.initHtmlApi();
      new (s(2732))({
        elements_selector: "[data-src]",
        class_loaded: "_lazy-loaded",
        use_native: !0,
      });
      class ds {
        constructor(e) {
          (this.config = Object.assign({ logging: !1 }, e)),
            this.observer,
            !document.documentElement.classList.contains("watcher") &&
              this.scrollWatcherRun();
        }
        scrollWatcherUpdate() {
          this.scrollWatcherRun();
        }
        scrollWatcherRun() {
          document.documentElement.classList.add("watcher"),
            this.scrollWatcherConstructor(
              document.querySelectorAll("[data-watch]")
            );
        }
        scrollWatcherConstructor(e) {
          if (e.length) {
            this.scrollWatcherLogging(
              `Проснулся, слежу за объектами (${e.length})...`
            );
            let t = Array.from(e)
              .map(function (e) {
                return `${
                  e.dataset.watchRoot ? e.dataset.watchRoot : null
                }|${e.dataset.watchMargin ? e.dataset.watchMargin : "0px"}|${e.dataset.watchThreshold ? e.dataset.watchThreshold : 0}`;
              })
              .filter(function (e, t, s) {
                return s.indexOf(e) === t;
              });
            t.forEach((t) => {
              let s = t.split("|"),
                i = { root: s[0], margin: s[1], threshold: s[2] },
                n = Array.from(e).filter(function (e) {
                  let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                    s = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                    n = e.dataset.watchThreshold ? e.dataset.watchThreshold : 0;
                  if (
                    String(t) === i.root &&
                    String(s) === i.margin &&
                    String(n) === i.threshold
                  )
                    return e;
                }),
                r = this.getScrollWatcherConfig(i);
              this.scrollWatcherInit(n, r);
            });
          } else
            this.scrollWatcherLogging(
              "Сплю, нет объектов для слежения. ZzzZZzz"
            );
        }
        getScrollWatcherConfig(e) {
          let t = {};
          if (
            (document.querySelector(e.root)
              ? (t.root = document.querySelector(e.root))
              : "null" !== e.root &&
                this.scrollWatcherLogging(
                  `Эмм... родительского объекта ${e.root} нет на странице`
                ),
            (t.rootMargin = e.margin),
            !(e.margin.indexOf("px") < 0 && e.margin.indexOf("%") < 0))
          ) {
            if ("prx" === e.threshold) {
              e.threshold = [];
              for (let t = 0; t <= 1; t += 0.005) e.threshold.push(t);
            } else e.threshold = e.threshold.split(",");
            return (t.threshold = e.threshold), t;
          }
          this.scrollWatcherLogging(
            "Ой ой, настройку data-watch-margin нужно задавать в PX или %"
          );
        }
        scrollWatcherCreate(e) {
          this.observer = new IntersectionObserver((e, t) => {
            e.forEach((e) => {
              this.scrollWatcherCallback(e, t);
            });
          }, e);
        }
        scrollWatcherInit(e, t) {
          this.scrollWatcherCreate(t),
            e.forEach((e) => this.observer.observe(e));
        }
        scrollWatcherIntersecting(e, t) {
          e.isIntersecting
            ? (!t.classList.contains("_watcher-view") &&
                t.classList.add("_watcher-view"),
              this.scrollWatcherLogging(
                `Я вижу ${t.classList}, добавил класс _watcher-view`
              ))
            : (t.classList.contains("_watcher-view") &&
                t.classList.remove("_watcher-view"),
              this.scrollWatcherLogging(
                `Я не вижу ${t.classList}, убрал класс _watcher-view`
              ));
        }
        scrollWatcherOff(e, t) {
          t.unobserve(e),
            this.scrollWatcherLogging(`Я перестал следить за ${e.classList}`);
        }
        scrollWatcherLogging(e) {
          this.config.logging && console.log(`[Наблюдатель]: ${e}`);
        }
        scrollWatcherCallback(e, t) {
          const s = e.target;
          this.scrollWatcherIntersecting(e, s),
            s.hasAttribute("data-watch-once") &&
              e.isIntersecting &&
              this.scrollWatcherOff(s, t),
            document.dispatchEvent(
              new CustomEvent("watcherCallback", { detail: { entry: e } })
            );
        }
      }
      let us = !1;
      var hs;
      setTimeout(() => {
        if (us) {
          let e = new Event("windowScroll");
          window.addEventListener("scroll", function (t) {
            document.dispatchEvent(e);
          });
        }
      }, 0),
        window.addEventListener("load", function (e) {
          const t = document.querySelectorAll("[data-bg]");
          t.length &&
            t.forEach((e) => {
              e.insertAdjacentHTML("beforeend", '<div class="bg-item"></div>');
            });
          datepicker("[data-calendar]", {});
          if (document.querySelector(".video-module")) {
            document.addEventListener("watcherCallback", function (e) {
              const t = e.detail.entry,
                s = t.target;
              "video" !== s.dataset.watch ||
                s.classList.contains("_init") ||
                (t.isIntersecting
                  ? s.querySelector("video").play()
                  : s.querySelector("video").pause());
            });
            const e = document.querySelector(".video-module");
            e.addEventListener("click", function (t) {
              e.classList.contains("_init")
                ? (e.querySelector("video").paused
                    ? e.querySelector("video").play()
                    : e.querySelector("video").pause(),
                  e.classList.toggle("_active"))
                : ((e.querySelector("video").src =
                    e.querySelector("video").dataset.full),
                  e.classList.add("_active"),
                  e.classList.add("_init"),
                  e.querySelector("video").play(),
                  (e.querySelector("video").muted = !1));
            });
          }
        }),
        (function (e) {
          let t = new Image();
          (t.onload = t.onerror =
            function () {
              e(2 == t.height);
            }),
            (t.src =
              "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
        })(function (e) {
          let t = !0 === e ? "webp" : "no-webp";
          document.documentElement.classList.add(t);
        }),
        i.any() && document.documentElement.classList.add("touch"),
        (function () {
          let e = document.querySelector(".icon-menu");
          e &&
            e.addEventListener("click", function (e) {
              a &&
                (l(), document.documentElement.classList.toggle("menu-open"));
            });
        })(),
        (function () {
          if (
            document.querySelectorAll("[data-fullscreen]").length &&
            i.any()
          ) {
            function e() {
              let e = 0.01 * window.innerHeight;
              document.documentElement.style.setProperty("--vh", `${e}px`);
            }
            window.addEventListener("resize", e), e();
          }
        })(),
        u(!1),
        (function () {
          const e = document.querySelectorAll(
            "input[placeholder],textarea[placeholder]"
          );
          e.length &&
            e.forEach((e) => {
              e.dataset.placeholder = e.placeholder;
            }),
            document.body.addEventListener("focusin", function (e) {
              const t = e.target;
              ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
                (t.dataset.placeholder && (t.placeholder = ""),
                t.classList.add("_form-focus"),
                t.parentElement.classList.add("_form-focus"),
                m.removeError(t));
            }),
            document.body.addEventListener("focusout", function (e) {
              const t = e.target;
              ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
                (t.dataset.placeholder &&
                  (t.placeholder = t.dataset.placeholder),
                t.classList.remove("_form-focus"),
                t.parentElement.classList.remove("_form-focus"),
                t.hasAttribute("data-validate") && m.validateInput(t));
            });
        })(),
        (function (e) {
          const t = document.forms;
          if (t.length)
            for (const e of t)
              e.addEventListener("submit", function (e) {
                s(e.target, e);
              }),
                e.addEventListener("reset", function (e) {
                  const t = e.target;
                  m.formClean(t);
                });
          async function s(t, s) {
            if (0 === (e ? m.getErrors(t) : 0)) {
              const e = t.dataset.popupMassage;
              if (t.hasAttribute("data-ajax")) {
                s.preventDefault();
                const i = t.getAttribute("action")
                    ? t.getAttribute("action").trim()
                    : "#",
                  n = t.getAttribute("method")
                    ? t.getAttribute("method").trim()
                    : "GET",
                  r = new FormData(t);
                t.classList.add("_sending");
                const o = await fetch(i, { method: n, body: r });
                if (o.ok) {
                  await o.json();
                  t.classList.remove("_sending"),
                    e && f.open(`${e}`),
                    m.formClean(t);
                } else alert("Ошибка"), t.classList.remove("_sending");
              }
              t.hasAttribute("data-dev") &&
                (s.preventDefault(), e && f.open(`${e}`), m.formClean(t));
            } else {
              s.preventDefault();
              const e = t.querySelector("._form-error");
              e && t.hasAttribute("data-goto-error") && h(e, !0, 1e3);
            }
          }
        })(!0),
        (hs = !1),
        (g.selectModule = new p({ logging: hs })),
        (function (e = !1) {
          new ds({ logging: e });
        })(!1),
        (function () {
          function e(e) {
            if ("click" === e.type) {
              const t = e.target;
              if (t.closest("[data-goto]")) {
                const s = t.closest("[data-goto]"),
                  i = !!s.hasAttribute("data-goto-header"),
                  n = s.dataset.gotoSpeed ? s.dataset.gotoSpeed : "500";
                h(`#${s.dataset.goto}`, i, n), e.preventDefault();
              }
            } else if ("watcherCallback" === e.type && e.detail) {
              const t = e.detail.entry,
                s = t.target;
              if ("navigator" === s.dataset.watch) {
                const e = s.id,
                  i =
                    (document.querySelector("[data-goto]._navigator-active"),
                    document.querySelector(`[data-goto="${e}"]`));
                t.isIntersecting
                  ? i && i.classList.add("_navigator-active")
                  : i && i.classList.remove("_navigator-active");
              }
            }
          }
          document.addEventListener("click", e),
            document.addEventListener("watcherCallback", e);
        })(),
        (function () {
          us = !0;
          const e = document.querySelector("header.header"),
            t = e.hasAttribute("data-scroll-show"),
            s = e.dataset.scrollShow ? e.dataset.scrollShow : 500,
            i = e.dataset.scroll ? e.dataset.scroll : 1;
          let n,
            r = 0;
          document.addEventListener("windowScroll", function (o) {
            const a = window.scrollY;
            clearTimeout(n),
              a >= i
                ? (!e.classList.contains("_header-scroll") &&
                    e.classList.add("_header-scroll"),
                  t &&
                    (a > r
                      ? e.classList.contains("_header-show") &&
                        e.classList.remove("_header-show")
                      : !e.classList.contains("_header-show") &&
                        e.classList.add("_header-show"),
                    (n = setTimeout(() => {
                      !e.classList.contains("_header-show") &&
                        e.classList.add("_header-show");
                    }, s))))
                : (e.classList.contains("_header-scroll") &&
                    e.classList.remove("_header-scroll"),
                  t &&
                    e.classList.contains("_header-show") &&
                    e.classList.remove("_header-show")),
              (r = a <= 0 ? 0 : a);
          });
        })(),
        (function () {
          us = !0;
          const e = document.querySelectorAll("[data-bg]");
          e.length &&
            document.addEventListener("windowScroll", function (t) {
              e.forEach((e) => {
                let t = e.getBoundingClientRect().top + scrollY,
                  s = e.offsetHeight,
                  i = e.querySelector(".bg-item"),
                  n =
                    (((s / 100) * 30) / 100) *
                    Math.abs(
                      ((e.getBoundingClientRect().top - window.innerHeight) /
                        (s + window.innerHeight)) *
                        100
                    );
                i &&
                  scrollY > t - window.innerHeight &&
                  scrollY < t + s &&
                  (i.style.cssText = `transform: translate3D(0,${n}px,0);`);
              });
            });
        })(),
        (function () {
          const e = document.querySelectorAll("[data-gallery]");
          e.length &&
            e.forEach((e) => {
              te(e, {
                licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
                speed: 500,
              });
            });
        })();
    })();
})();

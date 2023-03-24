const $t = (s) => (s.install = (r) => {
  const i = s.name || s.__name;
  r.component(i, s);
}, s);
let K = {}, ot = Object.getPrototypeOf, it = K.toString, tt = K.hasOwnProperty, et = tt.toString, at = et.call(Object);
const Mt = (s) => {
  let r, i;
  return !s || it.call(s) !== "[object Object]" ? !1 : (r = ot(s), r ? (i = tt.call(r, "constructor") && r.constructor, typeof i == "function" && et.call(i) === at) : !0);
}, bt = {
  // 设置永久缓存
  set(s, r) {
    window.localStorage.setItem(s, JSON.stringify(r));
  },
  // 获取永久缓存
  get(s) {
    const r = window.localStorage.getItem(s);
    return JSON.parse(r);
  },
  // 移除永久缓存
  remove(s) {
    window.localStorage.removeItem(s);
  },
  // 移除全部永久缓存
  clear() {
    window.localStorage.clear();
  }
}, Dt = {
  // 设置临时缓存
  set(s, r) {
    window.sessionStorage.setItem(s, JSON.stringify(r));
  },
  // 获取临时缓存
  get(s) {
    const r = window.sessionStorage.getItem(s);
    return JSON.parse(r);
  },
  // 移除临时缓存
  remove(s) {
    window.sessionStorage.removeItem(s);
  },
  // 移除全部临时缓存
  clear() {
    window.sessionStorage.clear();
  }
};
function st(s, r = "rgba(17, 17, 17, 0.2)") {
  nt();
  const i = document.createElement("canvas");
  i.id = "watermark-canvas", document.body.appendChild(i), i.width = 165, i.height = 95, i.style.display = "none";
  const f = i.getContext("2d");
  f.rotate(-20 * Math.PI / 180), f.font = "16px Microsoft JhengHei", f.fillStyle = r, f.textAlign = "left", f.textBaseline = "middle", f.fillText(s, 30, 105, 200);
  const u = document.createElement("div");
  u.id = "watermark-div", u.style.backgroundImage = "url(" + i.toDataURL("image/png") + ")", u.style.position = "fixed", u.style.zIndex = "99999999999", u.style.top = "0", u.style.bottom = "0", u.style.left = "0", u.style.right = "0", u.style.pointerEvents = "none", document.body.appendChild(u), document.body.removeChild(i);
}
function nt() {
  document.getElementById("watermark-div") && document.body.removeChild(document.getElementById("watermark-div"));
}
const St = {
  set: st,
  clear: nt
};
function Ot(s, r) {
  const i = new FileReader();
  i.readAsDataURL(s), i.onload = function(f) {
    var D;
    const u = document.createElement("a");
    u.download = r, u.href = (D = f.target) == null ? void 0 : D.result, document.body.appendChild(u), u.click(), document.body.removeChild(u), console.log("123");
  };
}
function _t(s, r) {
  const i = new Image();
  i.setAttribute("crossOrigin", "anonymous"), i.onload = function() {
    const f = document.createElement("canvas");
    f.width = i.width, f.height = i.height, f.getContext("2d").drawImage(i, 0, 0, i.width, i.height);
    const D = f.toDataURL("image/png"), _ = document.createElement("a"), T = new MouseEvent("click");
    _.download = r, _.href = D, _.dispatchEvent(T);
  }, i.src = s;
}
if (!j)
  var j = {
    map: function(r, i) {
      var f = {};
      return i ? r.map(function(u, D) {
        return f.index = D, i.call(f, u);
      }) : r.slice();
    },
    naturalOrder: function(r, i) {
      return r < i ? -1 : r > i ? 1 : 0;
    },
    sum: function(r, i) {
      var f = {};
      return r.reduce(i ? function(u, D, _) {
        return f.index = _, u + i.call(f, D);
      } : function(u, D) {
        return u + D;
      }, 0);
    },
    max: function(r, i) {
      return Math.max.apply(null, i ? j.map(r, i) : r);
    }
  };
var ut = function() {
  var s = 5, r = 8 - s, i = 1e3, f = 0.75;
  function u(M, t, e) {
    return (M << 2 * s) + (t << s) + e;
  }
  function D(M) {
    var t = [], e = !1;
    function p() {
      t.sort(M), e = !0;
    }
    return {
      push: function(m) {
        t.push(m), e = !1;
      },
      peek: function(m) {
        return e || p(), m === void 0 && (m = t.length - 1), t[m];
      },
      pop: function() {
        return e || p(), t.pop();
      },
      size: function() {
        return t.length;
      },
      map: function(m) {
        return t.map(m);
      },
      debug: function() {
        return e || p(), t;
      }
    };
  }
  function _(M, t, e, p, w, m, v) {
    var y = this;
    y.r1 = M, y.r2 = t, y.g1 = e, y.g2 = p, y.b1 = w, y.b2 = m, y.histo = v;
  }
  _.prototype = {
    volume: function(t) {
      var e = this;
      return (!e._volume || t) && (e._volume = (e.r2 - e.r1 + 1) * (e.g2 - e.g1 + 1) * (e.b2 - e.b1 + 1)), e._volume;
    },
    count: function(t) {
      var e = this, p = e.histo;
      if (!e._count_set || t) {
        var w = 0, m, v, y, C;
        for (m = e.r1; m <= e.r2; m++)
          for (v = e.g1; v <= e.g2; v++)
            for (y = e.b1; y <= e.b2; y++)
              C = u(m, v, y), w += p[C] || 0;
        e._count = w, e._count_set = !0;
      }
      return e._count;
    },
    copy: function() {
      var t = this;
      return new _(t.r1, t.r2, t.g1, t.g2, t.b1, t.b2, t.histo);
    },
    avg: function(t) {
      var e = this, p = e.histo;
      if (!e._avg || t) {
        var w = 0, m = 1 << 8 - s, v = 0, y = 0, C = 0, l, $, O, x, S;
        for ($ = e.r1; $ <= e.r2; $++)
          for (O = e.g1; O <= e.g2; O++)
            for (x = e.b1; x <= e.b2; x++)
              S = u($, O, x), l = p[S] || 0, w += l, v += l * ($ + 0.5) * m, y += l * (O + 0.5) * m, C += l * (x + 0.5) * m;
        w ? e._avg = [~~(v / w), ~~(y / w), ~~(C / w)] : e._avg = [~~(m * (e.r1 + e.r2 + 1) / 2), ~~(m * (e.g1 + e.g2 + 1) / 2), ~~(m * (e.b1 + e.b2 + 1) / 2)];
      }
      return e._avg;
    },
    contains: function(t) {
      var e = this, p = t[0] >> r;
      return gval = t[1] >> r, bval = t[2] >> r, p >= e.r1 && p <= e.r2 && gval >= e.g1 && gval <= e.g2 && bval >= e.b1 && bval <= e.b2;
    }
  };
  function T() {
    this.vboxes = new D(function(M, t) {
      return j.naturalOrder(M.vbox.count() * M.vbox.volume(), t.vbox.count() * t.vbox.volume());
    });
  }
  T.prototype = {
    push: function(t) {
      this.vboxes.push({
        vbox: t,
        color: t.avg()
      });
    },
    palette: function() {
      return this.vboxes.map(function(t) {
        return t.color;
      });
    },
    size: function() {
      return this.vboxes.size();
    },
    map: function(t) {
      for (var e = this.vboxes, p = 0; p < e.size(); p++)
        if (e.peek(p).vbox.contains(t))
          return e.peek(p).color;
      return this.nearest(t);
    },
    nearest: function(t) {
      for (var e = this.vboxes, p, w, m, v = 0; v < e.size(); v++)
        w = Math.sqrt(Math.pow(t[0] - e.peek(v).color[0], 2) + Math.pow(t[1] - e.peek(v).color[1], 2) + Math.pow(t[2] - e.peek(v).color[2], 2)), (w < p || p === void 0) && (p = w, m = e.peek(v).color);
      return m;
    },
    forcebw: function() {
      var t = this.vboxes;
      t.sort(function(m, v) {
        return j.naturalOrder(j.sum(m.color), j.sum(v.color));
      });
      var e = t[0].color;
      e[0] < 5 && e[1] < 5 && e[2] < 5 && (t[0].color = [0, 0, 0]);
      var p = t.length - 1, w = t[p].color;
      w[0] > 251 && w[1] > 251 && w[2] > 251 && (t[p].color = [255, 255, 255]);
    }
  };
  function z(M) {
    var t = 1 << 3 * s, e = new Array(t), p, w, m, v;
    return M.forEach(function(y) {
      w = y[0] >> r, m = y[1] >> r, v = y[2] >> r, p = u(w, m, v), e[p] = (e[p] || 0) + 1;
    }), e;
  }
  function A(M, t) {
    var e = 1e6, p = 0, w = 1e6, m = 0, v = 1e6, y = 0, C, l, $;
    return M.forEach(function(O) {
      C = O[0] >> r, l = O[1] >> r, $ = O[2] >> r, C < e ? e = C : C > p && (p = C), l < w ? w = l : l > m && (m = l), $ < v ? v = $ : $ > y && (y = $);
    }), new _(e, p, w, m, v, y, t);
  }
  function q(M, t) {
    if (!t.count())
      return;
    var e = t.r2 - t.r1 + 1, p = t.g2 - t.g1 + 1, w = t.b2 - t.b1 + 1, m = j.max([e, p, w]);
    if (t.count() == 1)
      return [t.copy()];
    var v = 0, y = [], C = [], l, $, O, x, S;
    if (m == e)
      for (l = t.r1; l <= t.r2; l++) {
        for (x = 0, $ = t.g1; $ <= t.g2; $++)
          for (O = t.b1; O <= t.b2; O++)
            S = u(l, $, O), x += M[S] || 0;
        v += x, y[l] = v;
      }
    else if (m == p)
      for (l = t.g1; l <= t.g2; l++) {
        for (x = 0, $ = t.r1; $ <= t.r2; $++)
          for (O = t.b1; O <= t.b2; O++)
            S = u($, l, O), x += M[S] || 0;
        v += x, y[l] = v;
      }
    else
      for (l = t.b1; l <= t.b2; l++) {
        for (x = 0, $ = t.r1; $ <= t.r2; $++)
          for (O = t.g1; O <= t.g2; O++)
            S = u($, O, l), x += M[S] || 0;
        v += x, y[l] = v;
      }
    y.forEach(function(P, F) {
      C[F] = v - P;
    });
    function b(P) {
      var F = P + "1", d = P + "2", a, n, h, o, c, g = 0;
      for (l = t[F]; l <= t[d]; l++)
        if (y[l] > v / 2) {
          for (h = t.copy(), o = t.copy(), a = l - t[F], n = t[d] - l, a <= n ? c = Math.min(t[d] - 1, ~~(l + n / 2)) : c = Math.max(t[F], ~~(l - 1 - a / 2)); !y[c]; )
            c++;
          for (g = C[c]; !g && y[c - 1]; )
            g = C[--c];
          return h[d] = c, o[F] = h[d] + 1, [h, o];
        }
    }
    return m == e ? b("r") : m == p ? b("g") : b("b");
  }
  function L(M, t) {
    if (!M.length || t < 2 || t > 256)
      return !1;
    var e = z(M);
    e.forEach(function() {
    });
    var p = A(M, e), w = new D(function(C, l) {
      return j.naturalOrder(C.count(), l.count());
    });
    w.push(p);
    function m(C, l) {
      for (var $ = C.size(), O = 0, x; O < i; ) {
        if ($ >= l || O++ > i)
          return;
        if (x = C.pop(), !x.count()) {
          C.push(x), O++;
          continue;
        }
        var S = q(e, x), b = S[0], P = S[1];
        if (!b)
          return;
        C.push(b), P && (C.push(P), $++);
      }
    }
    m(w, f * t);
    for (var v = new D(function(C, l) {
      return j.naturalOrder(C.count() * C.volume(), l.count() * l.volume());
    }); w.size(); )
      v.push(w.pop());
    m(v, t);
    for (var y = new T(); v.size(); )
      y.push(v.pop());
    return y;
  }
  return {
    quantize: L
  };
}(), ct = ut.quantize;
function ft(s, r, i) {
  const f = s, u = [];
  for (let D = 0, _, T, z, A, q; D < r; D = D + i)
    _ = D * 4, T = f[_ + 0], z = f[_ + 1], A = f[_ + 2], q = f[_ + 3], (typeof q > "u" || q >= 125) && (T > 250 && z > 250 && A > 250 || u.push([T, z, A]));
  return u;
}
function lt(s) {
  let { colorCount: r, quality: i } = s;
  if (typeof r > "u" || !Number.isInteger(r))
    r = 10;
  else {
    if (r === 1)
      throw new Error("colorCount应该在2到20之间。要获得一种颜色, 调用getColor()而不是getPalette()");
    r = Math.max(r, 2), r = Math.min(r, 20);
  }
  return (typeof i > "u" || !Number.isInteger(i) || i < 1) && (i = 10), {
    colorCount: r,
    quality: i
  };
}
const X = {
  createPixelArray: ft,
  validateOptions: lt
};
function dt(s) {
  s.setAttribute("crossOrigin", "anonymous");
  const r = document.createElement("canvas"), i = r.getContext("2d"), f = r.width = s.width, u = r.height = s.height;
  return i.drawImage(s, 0, 0, f, u), { canvas: r, context: i, width: f, height: u, getImageData: () => i.getImageData(0, 0, f, u) };
}
function ht(s, r = 10) {
  return G(s, 5, r)[0];
}
function G(s, r = 8, i = 10) {
  s.setAttribute("crossOrigin", "anonymous");
  const f = X.validateOptions({
    colorCount: r,
    quality: i
  }), u = dt(s), D = u.getImageData(), _ = u.width * u.height, T = X.createPixelArray(D.data, _, f.quality), z = ct(T, f.colorCount);
  return z ? z.palette() : [];
}
function gt(s, r) {
  return new Promise((i, f) => {
    const u = document.createElement("img");
    u.setAttribute("crossOrigin", "anonymous"), u.addEventListener("load", () => {
      const D = G(u, 5, r), _ = D ? D[0] : [];
      i(_);
    }), u.addEventListener("error", () => {
      f();
    }), u.src = s;
  });
}
function mt(s) {
  return new Promise((r, i) => {
    let f = new XMLHttpRequest();
    f.open("GET", s, !0), f.responseType = "arraybuffer", f.onload = function() {
      if (this.status == 200) {
        let u = new Uint8Array(this.response), D = u.length, _ = new Array(D);
        for (let A = 0; A < u.length; A++)
          _[A] = String.fromCharCode(u[A]);
        let T = _.join(""), z = window.btoa(T);
        r("data:image/png;base64," + z);
      }
    }, f.onerror = i, f.send();
  });
}
const Ct = {
  getPalette: G,
  getColorFromUrl: gt,
  getImageData: mt,
  getColor: ht
};
var pt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Q = {}, vt = {
  get exports() {
    return Q;
  },
  set exports(s) {
    Q = s;
  }
};
(function(s, r) {
  (function(i, f) {
    s.exports = f();
  })(pt, function() {
    var i = 1e3, f = 6e4, u = 36e5, D = "millisecond", _ = "second", T = "minute", z = "hour", A = "day", q = "week", L = "month", M = "quarter", t = "year", e = "date", p = "Invalid Date", w = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, v = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(d) {
      var a = ["th", "st", "nd", "rd"], n = d % 100;
      return "[" + d + (a[(n - 20) % 10] || a[n] || a[0]) + "]";
    } }, y = function(d, a, n) {
      var h = String(d);
      return !h || h.length >= a ? d : "" + Array(a + 1 - h.length).join(n) + d;
    }, C = { s: y, z: function(d) {
      var a = -d.utcOffset(), n = Math.abs(a), h = Math.floor(n / 60), o = n % 60;
      return (a <= 0 ? "+" : "-") + y(h, 2, "0") + ":" + y(o, 2, "0");
    }, m: function d(a, n) {
      if (a.date() < n.date())
        return -d(n, a);
      var h = 12 * (n.year() - a.year()) + (n.month() - a.month()), o = a.clone().add(h, L), c = n - o < 0, g = a.clone().add(h + (c ? -1 : 1), L);
      return +(-(h + (n - o) / (c ? o - g : g - o)) || 0);
    }, a: function(d) {
      return d < 0 ? Math.ceil(d) || 0 : Math.floor(d);
    }, p: function(d) {
      return { M: L, y: t, w: q, d: A, D: e, h: z, m: T, s: _, ms: D, Q: M }[d] || String(d || "").toLowerCase().replace(/s$/, "");
    }, u: function(d) {
      return d === void 0;
    } }, l = "en", $ = {};
    $[l] = v;
    var O = function(d) {
      return d instanceof P;
    }, x = function d(a, n, h) {
      var o;
      if (!a)
        return l;
      if (typeof a == "string") {
        var c = a.toLowerCase();
        $[c] && (o = c), n && ($[c] = n, o = c);
        var g = a.split("-");
        if (!o && g.length > 1)
          return d(g[0]);
      } else {
        var I = a.name;
        $[I] = a, o = I;
      }
      return !h && o && (l = o), o || !h && l;
    }, S = function(d, a) {
      if (O(d))
        return d.clone();
      var n = typeof a == "object" ? a : {};
      return n.date = d, n.args = arguments, new P(n);
    }, b = C;
    b.l = x, b.i = O, b.w = function(d, a) {
      return S(d, { locale: a.$L, utc: a.$u, x: a.$x, $offset: a.$offset });
    };
    var P = function() {
      function d(n) {
        this.$L = x(n.locale, null, !0), this.parse(n);
      }
      var a = d.prototype;
      return a.parse = function(n) {
        this.$d = function(h) {
          var o = h.date, c = h.utc;
          if (o === null)
            return /* @__PURE__ */ new Date(NaN);
          if (b.u(o))
            return /* @__PURE__ */ new Date();
          if (o instanceof Date)
            return new Date(o);
          if (typeof o == "string" && !/Z$/i.test(o)) {
            var g = o.match(w);
            if (g) {
              var I = g[2] - 1 || 0, E = (g[7] || "0").substring(0, 3);
              return c ? new Date(Date.UTC(g[1], I, g[3] || 1, g[4] || 0, g[5] || 0, g[6] || 0, E)) : new Date(g[1], I, g[3] || 1, g[4] || 0, g[5] || 0, g[6] || 0, E);
            }
          }
          return new Date(o);
        }(n), this.$x = n.x || {}, this.init();
      }, a.init = function() {
        var n = this.$d;
        this.$y = n.getFullYear(), this.$M = n.getMonth(), this.$D = n.getDate(), this.$W = n.getDay(), this.$H = n.getHours(), this.$m = n.getMinutes(), this.$s = n.getSeconds(), this.$ms = n.getMilliseconds();
      }, a.$utils = function() {
        return b;
      }, a.isValid = function() {
        return this.$d.toString() !== p;
      }, a.isSame = function(n, h) {
        var o = S(n);
        return this.startOf(h) <= o && o <= this.endOf(h);
      }, a.isAfter = function(n, h) {
        return S(n) < this.startOf(h);
      }, a.isBefore = function(n, h) {
        return this.endOf(h) < S(n);
      }, a.$g = function(n, h, o) {
        return b.u(n) ? this[h] : this.set(o, n);
      }, a.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, a.valueOf = function() {
        return this.$d.getTime();
      }, a.startOf = function(n, h) {
        var o = this, c = !!b.u(h) || h, g = b.p(n), I = function(W, H) {
          var J = b.w(o.$u ? Date.UTC(o.$y, H, W) : new Date(o.$y, H, W), o);
          return c ? J : J.endOf(A);
        }, E = function(W, H) {
          return b.w(o.toDate()[W].apply(o.toDate("s"), (c ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(H)), o);
        }, Y = this.$W, k = this.$M, U = this.$D, N = "set" + (this.$u ? "UTC" : "");
        switch (g) {
          case t:
            return c ? I(1, 0) : I(31, 11);
          case L:
            return c ? I(1, k) : I(0, k + 1);
          case q:
            var B = this.$locale().weekStart || 0, R = (Y < B ? Y + 7 : Y) - B;
            return I(c ? U - R : U + (6 - R), k);
          case A:
          case e:
            return E(N + "Hours", 0);
          case z:
            return E(N + "Minutes", 1);
          case T:
            return E(N + "Seconds", 2);
          case _:
            return E(N + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, a.endOf = function(n) {
        return this.startOf(n, !1);
      }, a.$set = function(n, h) {
        var o, c = b.p(n), g = "set" + (this.$u ? "UTC" : ""), I = (o = {}, o[A] = g + "Date", o[e] = g + "Date", o[L] = g + "Month", o[t] = g + "FullYear", o[z] = g + "Hours", o[T] = g + "Minutes", o[_] = g + "Seconds", o[D] = g + "Milliseconds", o)[c], E = c === A ? this.$D + (h - this.$W) : h;
        if (c === L || c === t) {
          var Y = this.clone().set(e, 1);
          Y.$d[I](E), Y.init(), this.$d = Y.set(e, Math.min(this.$D, Y.daysInMonth())).$d;
        } else
          I && this.$d[I](E);
        return this.init(), this;
      }, a.set = function(n, h) {
        return this.clone().$set(n, h);
      }, a.get = function(n) {
        return this[b.p(n)]();
      }, a.add = function(n, h) {
        var o, c = this;
        n = Number(n);
        var g = b.p(h), I = function(k) {
          var U = S(c);
          return b.w(U.date(U.date() + Math.round(k * n)), c);
        };
        if (g === L)
          return this.set(L, this.$M + n);
        if (g === t)
          return this.set(t, this.$y + n);
        if (g === A)
          return I(1);
        if (g === q)
          return I(7);
        var E = (o = {}, o[T] = f, o[z] = u, o[_] = i, o)[g] || 1, Y = this.$d.getTime() + n * E;
        return b.w(Y, this);
      }, a.subtract = function(n, h) {
        return this.add(-1 * n, h);
      }, a.format = function(n) {
        var h = this, o = this.$locale();
        if (!this.isValid())
          return o.invalidDate || p;
        var c = n || "YYYY-MM-DDTHH:mm:ssZ", g = b.z(this), I = this.$H, E = this.$m, Y = this.$M, k = o.weekdays, U = o.months, N = function(H, J, Z, V) {
          return H && (H[J] || H(h, c)) || Z[J].slice(0, V);
        }, B = function(H) {
          return b.s(I % 12 || 12, H, "0");
        }, R = o.meridiem || function(H, J, Z) {
          var V = H < 12 ? "AM" : "PM";
          return Z ? V.toLowerCase() : V;
        }, W = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: Y + 1, MM: b.s(Y + 1, 2, "0"), MMM: N(o.monthsShort, Y, U, 3), MMMM: N(U, Y), D: this.$D, DD: b.s(this.$D, 2, "0"), d: String(this.$W), dd: N(o.weekdaysMin, this.$W, k, 2), ddd: N(o.weekdaysShort, this.$W, k, 3), dddd: k[this.$W], H: String(I), HH: b.s(I, 2, "0"), h: B(1), hh: B(2), a: R(I, E, !0), A: R(I, E, !1), m: String(E), mm: b.s(E, 2, "0"), s: String(this.$s), ss: b.s(this.$s, 2, "0"), SSS: b.s(this.$ms, 3, "0"), Z: g };
        return c.replace(m, function(H, J) {
          return J || W[H] || g.replace(":", "");
        });
      }, a.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, a.diff = function(n, h, o) {
        var c, g = b.p(h), I = S(n), E = (I.utcOffset() - this.utcOffset()) * f, Y = this - I, k = b.m(this, I);
        return k = (c = {}, c[t] = k / 12, c[L] = k, c[M] = k / 3, c[q] = (Y - E) / 6048e5, c[A] = (Y - E) / 864e5, c[z] = Y / u, c[T] = Y / f, c[_] = Y / i, c)[g] || Y, o ? k : b.a(k);
      }, a.daysInMonth = function() {
        return this.endOf(L).$D;
      }, a.$locale = function() {
        return $[this.$L];
      }, a.locale = function(n, h) {
        if (!n)
          return this.$L;
        var o = this.clone(), c = x(n, h, !0);
        return c && (o.$L = c), o;
      }, a.clone = function() {
        return b.w(this.$d, this);
      }, a.toDate = function() {
        return new Date(this.valueOf());
      }, a.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, a.toISOString = function() {
        return this.$d.toISOString();
      }, a.toString = function() {
        return this.$d.toUTCString();
      }, d;
    }(), F = P.prototype;
    return S.prototype = F, [["$ms", D], ["$s", _], ["$m", T], ["$H", z], ["$W", A], ["$M", L], ["$y", t], ["$D", e]].forEach(function(d) {
      F[d[1]] = function(a) {
        return this.$g(a, d[0], d[1]);
      };
    }), S.extend = function(d, a) {
      return d.$i || (d(a, P, S), d.$i = !0), S;
    }, S.locale = x, S.isDayjs = O, S.unix = function(d) {
      return S(1e3 * d);
    }, S.en = $[l], S.Ls = $, S.p = {}, S;
  });
})(vt);
const rt = Q;
function wt(s, r = "YYYY-MM-DD") {
  const i = new Date(s.getFullYear(), s.getMonth() + 1, 0);
  return rt(i).format(r);
}
function yt(s, r = "YYYY-MM-DD") {
  const i = new Date(s.getFullYear(), s.getMonth(), 1);
  return rt(i).format(r);
}
const It = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  firstDayOfMonth: yt,
  lastDayOfMonth: wt
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ct as ColorThief,
  It as date,
  rt as dayjs,
  Ot as downloadFile,
  _t as downloadImg,
  Mt as isObject,
  bt as localStorage,
  Dt as sessionStorage,
  St as waterMark,
  $t as withInstall
};

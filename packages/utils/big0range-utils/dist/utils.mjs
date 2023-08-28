var rt = Object.defineProperty;
var st = (r, t, n) => t in r ? rt(r, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : r[t] = n;
var U = (r, t, n) => (st(r, typeof t != "symbol" ? t + "" : t, n), n);
const xt = (r) => (r.install = (t) => {
  const n = r.name || r.__name;
  t.component(n, r);
}, r);
let tt = {}, at = Object.getPrototypeOf, ut = tt.toString, et = tt.hasOwnProperty, nt = et.toString, ct = nt.call(Object);
const Ct = (r) => {
  let t, n;
  return !r || ut.call(r) !== "[object Object]" ? !1 : (t = at(r), t ? (n = et.call(t, "constructor") && t.constructor, typeof n == "function" && nt.call(n) === ct) : !0);
}, Ot = {
  // 设置永久缓存
  set(r, t) {
    window.localStorage.setItem(r, JSON.stringify(t));
  },
  // 获取永久缓存
  get(r) {
    const t = window.localStorage.getItem(r);
    return JSON.parse(t);
  },
  // 移除永久缓存
  remove(r) {
    window.localStorage.removeItem(r);
  },
  // 移除全部永久缓存
  clear() {
    window.localStorage.clear();
  }
}, It = {
  // 设置临时缓存
  set(r, t) {
    window.sessionStorage.setItem(r, JSON.stringify(t));
  },
  // 获取临时缓存
  get(r) {
    const t = window.sessionStorage.getItem(r);
    return JSON.parse(t);
  },
  // 移除临时缓存
  remove(r) {
    window.sessionStorage.removeItem(r);
  },
  // 移除全部临时缓存
  clear() {
    window.sessionStorage.clear();
  }
};
function ht(r, t = "rgba(17, 17, 17, 0.2)") {
  it();
  const n = document.createElement("canvas");
  n.id = "watermark-canvas", document.body.appendChild(n), n.width = 165, n.height = 95, n.style.display = "none";
  const c = n.getContext("2d");
  c.rotate(-20 * Math.PI / 180), c.font = "16px Microsoft JhengHei", c.fillStyle = t, c.textAlign = "left", c.textBaseline = "middle", c.fillText(r, 30, 105, 200);
  const u = document.createElement("div");
  u.id = "watermark-div", u.style.backgroundImage = "url(" + n.toDataURL("image/png") + ")", u.style.position = "fixed", u.style.zIndex = "99999999999", u.style.top = "0", u.style.bottom = "0", u.style.left = "0", u.style.right = "0", u.style.pointerEvents = "none", document.body.appendChild(u), document.body.removeChild(n);
}
function it() {
  document.getElementById("watermark-div") && document.body.removeChild(document.getElementById("watermark-div"));
}
const _t = {
  set: ht,
  clear: it
};
function Pt(r, t) {
  const n = new FileReader();
  n.readAsDataURL(r), n.onload = function(c) {
    var S;
    const u = document.createElement("a");
    u.download = t, u.href = (S = c.target) == null ? void 0 : S.result, document.body.appendChild(u), u.click(), document.body.removeChild(u), console.log("123");
  };
}
function Yt(r, t) {
  const n = new Image();
  n.setAttribute("crossOrigin", "anonymous"), n.onload = function() {
    const c = document.createElement("canvas");
    c.width = n.width, c.height = n.height, c.getContext("2d").drawImage(n, 0, 0, n.width, n.height);
    const S = c.toDataURL("image/png"), D = document.createElement("a"), E = new MouseEvent("click");
    D.download = t, D.href = S, D.dispatchEvent(E);
  }, n.src = r;
}
if (!N)
  var N = {
    map: function(t, n) {
      var c = {};
      return n ? t.map(function(u, S) {
        return c.index = S, n.call(c, u);
      }) : t.slice();
    },
    naturalOrder: function(t, n) {
      return t < n ? -1 : t > n ? 1 : 0;
    },
    sum: function(t, n) {
      var c = {};
      return t.reduce(n ? function(u, S, D) {
        return c.index = D, u + n.call(c, S);
      } : function(u, S) {
        return u + S;
      }, 0);
    },
    max: function(t, n) {
      return Math.max.apply(null, n ? N.map(t, n) : t);
    }
  };
var lt = function() {
  var r = 5, t = 8 - r, n = 1e3, c = 0.75;
  function u(M, e, i) {
    return (M << 2 * r) + (e << r) + i;
  }
  function S(M) {
    var e = [], i = !1;
    function m() {
      e.sort(M), i = !0;
    }
    return {
      push: function(p) {
        e.push(p), i = !1;
      },
      peek: function(p) {
        return i || m(), p === void 0 && (p = e.length - 1), e[p];
      },
      pop: function() {
        return i || m(), e.pop();
      },
      size: function() {
        return e.length;
      },
      map: function(p) {
        return e.map(p);
      },
      debug: function() {
        return i || m(), e;
      }
    };
  }
  function D(M, e, i, m, w, p, v) {
    var y = this;
    y.r1 = M, y.r2 = e, y.g1 = i, y.g2 = m, y.b1 = w, y.b2 = p, y.histo = v;
  }
  D.prototype = {
    volume: function(e) {
      var i = this;
      return (!i._volume || e) && (i._volume = (i.r2 - i.r1 + 1) * (i.g2 - i.g1 + 1) * (i.b2 - i.b1 + 1)), i._volume;
    },
    count: function(e) {
      var i = this, m = i.histo;
      if (!i._count_set || e) {
        var w = 0, p, v, y, O;
        for (p = i.r1; p <= i.r2; p++)
          for (v = i.g1; v <= i.g2; v++)
            for (y = i.b1; y <= i.b2; y++)
              O = u(p, v, y), w += m[O] || 0;
        i._count = w, i._count_set = !0;
      }
      return i._count;
    },
    copy: function() {
      var e = this;
      return new D(e.r1, e.r2, e.g1, e.g2, e.b1, e.b2, e.histo);
    },
    avg: function(e) {
      var i = this, m = i.histo;
      if (!i._avg || e) {
        var w = 0, p = 1 << 8 - r, v = 0, y = 0, O = 0, l, $, C, P, x;
        for ($ = i.r1; $ <= i.r2; $++)
          for (C = i.g1; C <= i.g2; C++)
            for (P = i.b1; P <= i.b2; P++)
              x = u($, C, P), l = m[x] || 0, w += l, v += l * ($ + 0.5) * p, y += l * (C + 0.5) * p, O += l * (P + 0.5) * p;
        w ? i._avg = [~~(v / w), ~~(y / w), ~~(O / w)] : i._avg = [~~(p * (i.r1 + i.r2 + 1) / 2), ~~(p * (i.g1 + i.g2 + 1) / 2), ~~(p * (i.b1 + i.b2 + 1) / 2)];
      }
      return i._avg;
    },
    contains: function(e) {
      var i = this, m = e[0] >> t;
      return gval = e[1] >> t, bval = e[2] >> t, m >= i.r1 && m <= i.r2 && gval >= i.g1 && gval <= i.g2 && bval >= i.b1 && bval <= i.b2;
    }
  };
  function E() {
    this.vboxes = new S(function(M, e) {
      return N.naturalOrder(M.vbox.count() * M.vbox.volume(), e.vbox.count() * e.vbox.volume());
    });
  }
  E.prototype = {
    push: function(e) {
      this.vboxes.push({
        vbox: e,
        color: e.avg()
      });
    },
    palette: function() {
      return this.vboxes.map(function(e) {
        return e.color;
      });
    },
    size: function() {
      return this.vboxes.size();
    },
    map: function(e) {
      for (var i = this.vboxes, m = 0; m < i.size(); m++)
        if (i.peek(m).vbox.contains(e))
          return i.peek(m).color;
      return this.nearest(e);
    },
    nearest: function(e) {
      for (var i = this.vboxes, m, w, p, v = 0; v < i.size(); v++)
        w = Math.sqrt(Math.pow(e[0] - i.peek(v).color[0], 2) + Math.pow(e[1] - i.peek(v).color[1], 2) + Math.pow(e[2] - i.peek(v).color[2], 2)), (w < m || m === void 0) && (m = w, p = i.peek(v).color);
      return p;
    },
    forcebw: function() {
      var e = this.vboxes;
      e.sort(function(p, v) {
        return N.naturalOrder(N.sum(p.color), N.sum(v.color));
      });
      var i = e[0].color;
      i[0] < 5 && i[1] < 5 && i[2] < 5 && (e[0].color = [0, 0, 0]);
      var m = e.length - 1, w = e[m].color;
      w[0] > 251 && w[1] > 251 && w[2] > 251 && (e[m].color = [255, 255, 255]);
    }
  };
  function A(M) {
    var e = 1 << 3 * r, i = new Array(e), m, w, p, v;
    return M.forEach(function(y) {
      w = y[0] >> t, p = y[1] >> t, v = y[2] >> t, m = u(w, p, v), i[m] = (i[m] || 0) + 1;
    }), i;
  }
  function _(M, e) {
    var i = 1e6, m = 0, w = 1e6, p = 0, v = 1e6, y = 0, O, l, $;
    return M.forEach(function(C) {
      O = C[0] >> t, l = C[1] >> t, $ = C[2] >> t, O < i ? i = O : O > m && (m = O), l < w ? w = l : l > p && (p = l), $ < v ? v = $ : $ > y && (y = $);
    }), new D(i, m, w, p, v, y, e);
  }
  function W(M, e) {
    if (!e.count())
      return;
    var i = e.r2 - e.r1 + 1, m = e.g2 - e.g1 + 1, w = e.b2 - e.b1 + 1, p = N.max([i, m, w]);
    if (e.count() == 1)
      return [e.copy()];
    var v = 0, y = [], O = [], l, $, C, P, x;
    if (p == i)
      for (l = e.r1; l <= e.r2; l++) {
        for (P = 0, $ = e.g1; $ <= e.g2; $++)
          for (C = e.b1; C <= e.b2; C++)
            x = u(l, $, C), P += M[x] || 0;
        v += P, y[l] = v;
      }
    else if (p == m)
      for (l = e.g1; l <= e.g2; l++) {
        for (P = 0, $ = e.r1; $ <= e.r2; $++)
          for (C = e.b1; C <= e.b2; C++)
            x = u($, l, C), P += M[x] || 0;
        v += P, y[l] = v;
      }
    else
      for (l = e.b1; l <= e.b2; l++) {
        for (P = 0, $ = e.r1; $ <= e.r2; $++)
          for (C = e.g1; C <= e.g2; C++)
            x = u($, C, l), P += M[x] || 0;
        v += P, y[l] = v;
      }
    y.forEach(function(H, q) {
      O[q] = v - H;
    });
    function b(H) {
      var q = H + "1", f = H + "2", a, o, d, s, h, g = 0;
      for (l = e[q]; l <= e[f]; l++)
        if (y[l] > v / 2) {
          for (d = e.copy(), s = e.copy(), a = l - e[q], o = e[f] - l, a <= o ? h = Math.min(e[f] - 1, ~~(l + o / 2)) : h = Math.max(e[q], ~~(l - 1 - a / 2)); !y[h]; )
            h++;
          for (g = O[h]; !g && y[h - 1]; )
            g = O[--h];
          return d[f] = h, s[q] = d[f] + 1, [d, s];
        }
    }
    return p == i ? b("r") : p == m ? b("g") : b("b");
  }
  function L(M, e) {
    if (!M.length || e < 2 || e > 256)
      return !1;
    var i = A(M);
    i.forEach(function() {
    });
    var m = _(M, i), w = new S(function(O, l) {
      return N.naturalOrder(O.count(), l.count());
    });
    w.push(m);
    function p(O, l) {
      for (var $ = O.size(), C = 0, P; C < n; ) {
        if ($ >= l || C++ > n)
          return;
        if (P = O.pop(), !P.count()) {
          O.push(P), C++;
          continue;
        }
        var x = W(i, P), b = x[0], H = x[1];
        if (!b)
          return;
        O.push(b), H && (O.push(H), $++);
      }
    }
    p(w, c * e);
    for (var v = new S(function(O, l) {
      return N.naturalOrder(O.count() * O.volume(), l.count() * l.volume());
    }); w.size(); )
      v.push(w.pop());
    p(v, e);
    for (var y = new E(); v.size(); )
      y.push(v.pop());
    return y;
  }
  return {
    quantize: L
  };
}(), ft = lt.quantize;
function dt(r, t, n) {
  const c = r, u = [];
  for (let S = 0, D, E, A, _, W; S < t; S = S + n)
    D = S * 4, E = c[D + 0], A = c[D + 1], _ = c[D + 2], W = c[D + 3], (typeof W > "u" || W >= 125) && (E > 250 && A > 250 && _ > 250 || u.push([E, A, _]));
  return u;
}
function gt(r) {
  let { colorCount: t, quality: n } = r;
  if (typeof t > "u" || !Number.isInteger(t))
    t = 10;
  else {
    if (t === 1)
      throw new Error("colorCount应该在2到20之间。要获得一种颜色, 调用getColor()而不是getPalette()");
    t = Math.max(t, 2), t = Math.min(t, 20);
  }
  return (typeof n > "u" || !Number.isInteger(n) || n < 1) && (n = 10), {
    colorCount: t,
    quality: n
  };
}
const K = {
  createPixelArray: dt,
  validateOptions: gt
};
function pt(r) {
  r.setAttribute("crossOrigin", "anonymous");
  const t = document.createElement("canvas"), n = t.getContext("2d"), c = t.width = r.width, u = t.height = r.height;
  return n.drawImage(r, 0, 0, c, u), { canvas: t, context: n, width: c, height: u, getImageData: () => n.getImageData(0, 0, c, u) };
}
function mt(r, t = 10) {
  return G(r, 5, t)[0];
}
function G(r, t = 8, n = 10) {
  r.setAttribute("crossOrigin", "anonymous");
  const c = K.validateOptions({
    colorCount: t,
    quality: n
  }), u = pt(r), S = u.getImageData(), D = u.width * u.height, E = K.createPixelArray(S.data, D, c.quality), A = ft(E, c.colorCount);
  return A ? A.palette() : [];
}
function vt(r, t) {
  return new Promise((n, c) => {
    const u = document.createElement("img");
    u.setAttribute("crossOrigin", "anonymous"), u.addEventListener("load", () => {
      const S = G(u, 5, t), D = S ? S[0] : [];
      n(D);
    }), u.addEventListener("error", () => {
      c();
    }), u.src = r;
  });
}
function wt(r) {
  return new Promise((t, n) => {
    let c = new XMLHttpRequest();
    c.open("GET", r, !0), c.responseType = "arraybuffer", c.onload = function() {
      if (this.status == 200) {
        let u = new Uint8Array(this.response), S = u.length, D = new Array(S);
        for (let _ = 0; _ < u.length; _++)
          D[_] = String.fromCharCode(u[_]);
        let E = D.join(""), A = window.btoa(E);
        t("data:image/png;base64," + A);
      }
    }, c.onerror = n, c.send();
  });
}
const Et = {
  getPalette: G,
  getColorFromUrl: vt,
  getImageData: wt,
  getColor: mt
};
var yt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Q = {}, $t = {
  get exports() {
    return Q;
  },
  set exports(r) {
    Q = r;
  }
};
(function(r, t) {
  (function(n, c) {
    r.exports = c();
  })(yt, function() {
    var n = 1e3, c = 6e4, u = 36e5, S = "millisecond", D = "second", E = "minute", A = "hour", _ = "day", W = "week", L = "month", M = "quarter", e = "year", i = "date", m = "Invalid Date", w = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, p = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, v = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(f) {
      var a = ["th", "st", "nd", "rd"], o = f % 100;
      return "[" + f + (a[(o - 20) % 10] || a[o] || a[0]) + "]";
    } }, y = function(f, a, o) {
      var d = String(f);
      return !d || d.length >= a ? f : "" + Array(a + 1 - d.length).join(o) + f;
    }, O = { s: y, z: function(f) {
      var a = -f.utcOffset(), o = Math.abs(a), d = Math.floor(o / 60), s = o % 60;
      return (a <= 0 ? "+" : "-") + y(d, 2, "0") + ":" + y(s, 2, "0");
    }, m: function f(a, o) {
      if (a.date() < o.date())
        return -f(o, a);
      var d = 12 * (o.year() - a.year()) + (o.month() - a.month()), s = a.clone().add(d, L), h = o - s < 0, g = a.clone().add(d + (h ? -1 : 1), L);
      return +(-(d + (o - s) / (h ? s - g : g - s)) || 0);
    }, a: function(f) {
      return f < 0 ? Math.ceil(f) || 0 : Math.floor(f);
    }, p: function(f) {
      return { M: L, y: e, w: W, d: _, D: i, h: A, m: E, s: D, ms: S, Q: M }[f] || String(f || "").toLowerCase().replace(/s$/, "");
    }, u: function(f) {
      return f === void 0;
    } }, l = "en", $ = {};
    $[l] = v;
    var C = function(f) {
      return f instanceof H;
    }, P = function f(a, o, d) {
      var s;
      if (!a)
        return l;
      if (typeof a == "string") {
        var h = a.toLowerCase();
        $[h] && (s = h), o && ($[h] = o, s = h);
        var g = a.split("-");
        if (!s && g.length > 1)
          return f(g[0]);
      } else {
        var I = a.name;
        $[I] = a, s = I;
      }
      return !d && s && (l = s), s || !d && l;
    }, x = function(f, a) {
      if (C(f))
        return f.clone();
      var o = typeof a == "object" ? a : {};
      return o.date = f, o.args = arguments, new H(o);
    }, b = O;
    b.l = P, b.i = C, b.w = function(f, a) {
      return x(f, { locale: a.$L, utc: a.$u, x: a.$x, $offset: a.$offset });
    };
    var H = function() {
      function f(o) {
        this.$L = P(o.locale, null, !0), this.parse(o);
      }
      var a = f.prototype;
      return a.parse = function(o) {
        this.$d = function(d) {
          var s = d.date, h = d.utc;
          if (s === null)
            return /* @__PURE__ */ new Date(NaN);
          if (b.u(s))
            return /* @__PURE__ */ new Date();
          if (s instanceof Date)
            return new Date(s);
          if (typeof s == "string" && !/Z$/i.test(s)) {
            var g = s.match(w);
            if (g) {
              var I = g[2] - 1 || 0, T = (g[7] || "0").substring(0, 3);
              return h ? new Date(Date.UTC(g[1], I, g[3] || 1, g[4] || 0, g[5] || 0, g[6] || 0, T)) : new Date(g[1], I, g[3] || 1, g[4] || 0, g[5] || 0, g[6] || 0, T);
            }
          }
          return new Date(s);
        }(o), this.$x = o.x || {}, this.init();
      }, a.init = function() {
        var o = this.$d;
        this.$y = o.getFullYear(), this.$M = o.getMonth(), this.$D = o.getDate(), this.$W = o.getDay(), this.$H = o.getHours(), this.$m = o.getMinutes(), this.$s = o.getSeconds(), this.$ms = o.getMilliseconds();
      }, a.$utils = function() {
        return b;
      }, a.isValid = function() {
        return this.$d.toString() !== m;
      }, a.isSame = function(o, d) {
        var s = x(o);
        return this.startOf(d) <= s && s <= this.endOf(d);
      }, a.isAfter = function(o, d) {
        return x(o) < this.startOf(d);
      }, a.isBefore = function(o, d) {
        return this.endOf(d) < x(o);
      }, a.$g = function(o, d, s) {
        return b.u(o) ? this[d] : this.set(s, o);
      }, a.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, a.valueOf = function() {
        return this.$d.getTime();
      }, a.startOf = function(o, d) {
        var s = this, h = !!b.u(d) || d, g = b.p(o), I = function(J, z) {
          var X = b.w(s.$u ? Date.UTC(s.$y, z, J) : new Date(s.$y, z, J), s);
          return h ? X : X.endOf(_);
        }, T = function(J, z) {
          return b.w(s.toDate()[J].apply(s.toDate("s"), (h ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(z)), s);
        }, Y = this.$W, k = this.$M, j = this.$D, F = "set" + (this.$u ? "UTC" : "");
        switch (g) {
          case e:
            return h ? I(1, 0) : I(31, 11);
          case L:
            return h ? I(1, k) : I(0, k + 1);
          case W:
            var R = this.$locale().weekStart || 0, B = (Y < R ? Y + 7 : Y) - R;
            return I(h ? j - B : j + (6 - B), k);
          case _:
          case i:
            return T(F + "Hours", 0);
          case A:
            return T(F + "Minutes", 1);
          case E:
            return T(F + "Seconds", 2);
          case D:
            return T(F + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, a.endOf = function(o) {
        return this.startOf(o, !1);
      }, a.$set = function(o, d) {
        var s, h = b.p(o), g = "set" + (this.$u ? "UTC" : ""), I = (s = {}, s[_] = g + "Date", s[i] = g + "Date", s[L] = g + "Month", s[e] = g + "FullYear", s[A] = g + "Hours", s[E] = g + "Minutes", s[D] = g + "Seconds", s[S] = g + "Milliseconds", s)[h], T = h === _ ? this.$D + (d - this.$W) : d;
        if (h === L || h === e) {
          var Y = this.clone().set(i, 1);
          Y.$d[I](T), Y.init(), this.$d = Y.set(i, Math.min(this.$D, Y.daysInMonth())).$d;
        } else
          I && this.$d[I](T);
        return this.init(), this;
      }, a.set = function(o, d) {
        return this.clone().$set(o, d);
      }, a.get = function(o) {
        return this[b.p(o)]();
      }, a.add = function(o, d) {
        var s, h = this;
        o = Number(o);
        var g = b.p(d), I = function(k) {
          var j = x(h);
          return b.w(j.date(j.date() + Math.round(k * o)), h);
        };
        if (g === L)
          return this.set(L, this.$M + o);
        if (g === e)
          return this.set(e, this.$y + o);
        if (g === _)
          return I(1);
        if (g === W)
          return I(7);
        var T = (s = {}, s[E] = c, s[A] = u, s[D] = n, s)[g] || 1, Y = this.$d.getTime() + o * T;
        return b.w(Y, this);
      }, a.subtract = function(o, d) {
        return this.add(-1 * o, d);
      }, a.format = function(o) {
        var d = this, s = this.$locale();
        if (!this.isValid())
          return s.invalidDate || m;
        var h = o || "YYYY-MM-DDTHH:mm:ssZ", g = b.z(this), I = this.$H, T = this.$m, Y = this.$M, k = s.weekdays, j = s.months, F = function(z, X, Z, V) {
          return z && (z[X] || z(d, h)) || Z[X].slice(0, V);
        }, R = function(z) {
          return b.s(I % 12 || 12, z, "0");
        }, B = s.meridiem || function(z, X, Z) {
          var V = z < 12 ? "AM" : "PM";
          return Z ? V.toLowerCase() : V;
        }, J = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: Y + 1, MM: b.s(Y + 1, 2, "0"), MMM: F(s.monthsShort, Y, j, 3), MMMM: F(j, Y), D: this.$D, DD: b.s(this.$D, 2, "0"), d: String(this.$W), dd: F(s.weekdaysMin, this.$W, k, 2), ddd: F(s.weekdaysShort, this.$W, k, 3), dddd: k[this.$W], H: String(I), HH: b.s(I, 2, "0"), h: R(1), hh: R(2), a: B(I, T, !0), A: B(I, T, !1), m: String(T), mm: b.s(T, 2, "0"), s: String(this.$s), ss: b.s(this.$s, 2, "0"), SSS: b.s(this.$ms, 3, "0"), Z: g };
        return h.replace(p, function(z, X) {
          return X || J[z] || g.replace(":", "");
        });
      }, a.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, a.diff = function(o, d, s) {
        var h, g = b.p(d), I = x(o), T = (I.utcOffset() - this.utcOffset()) * c, Y = this - I, k = b.m(this, I);
        return k = (h = {}, h[e] = k / 12, h[L] = k, h[M] = k / 3, h[W] = (Y - T) / 6048e5, h[_] = (Y - T) / 864e5, h[A] = Y / u, h[E] = Y / c, h[D] = Y / n, h)[g] || Y, s ? k : b.a(k);
      }, a.daysInMonth = function() {
        return this.endOf(L).$D;
      }, a.$locale = function() {
        return $[this.$L];
      }, a.locale = function(o, d) {
        if (!o)
          return this.$L;
        var s = this.clone(), h = P(o, d, !0);
        return h && (s.$L = h), s;
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
      }, f;
    }(), q = H.prototype;
    return x.prototype = q, [["$ms", S], ["$s", D], ["$m", E], ["$H", A], ["$W", _], ["$M", L], ["$y", e], ["$D", i]].forEach(function(f) {
      q[f[1]] = function(a) {
        return this.$g(a, f[0], f[1]);
      };
    }), x.extend = function(f, a) {
      return f.$i || (f(a, H, x), f.$i = !0), x;
    }, x.locale = P, x.isDayjs = C, x.unix = function(f) {
      return x(1e3 * f);
    }, x.en = $[l], x.Ls = $, x.p = {}, x;
  });
})($t);
const ot = Q;
function Mt(r, t = "YYYY-MM-DD") {
  const n = new Date(r.getFullYear(), r.getMonth() + 1, 0);
  return ot(n).format(t);
}
function bt(r, t = "YYYY-MM-DD") {
  const n = new Date(r.getFullYear(), r.getMonth(), 1);
  return ot(n).format(t);
}
const Tt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  firstDayOfMonth: bt,
  lastDayOfMonth: Mt
}, Symbol.toStringTag, { value: "Module" })), St = {
  width: 300,
  height: 150,
  lineWidth: 2,
  lineColor: "#fff",
  bgColor: "#000",
  bgImage: ""
};
class At {
  /**
   * 构造函数
   * @param ele HTMLElement
   * @param opt IOptions
   */
  constructor(t, n) {
    /**
     * canvas 元素
     */
    U(this, "canvas");
    /**
     * 配置选项
     */
    U(this, "options", { ...St });
    /**
     * canvas 上下文
     */
    U(this, "ctx");
    U(this, "stop", !0);
    /**
     * 鼠标坐标X
     */
    U(this, "X", 0);
    /**
     * 鼠标坐标Y
     */
    U(this, "Y", 0);
    /**
     * 点坐标总集合
     * 每一个对象代表一个笔画
     */
    U(this, "points", []);
    /**
     * 当前点坐标集合
     * 每一个对象代表一个笔画
     */
    U(this, "currentPoints", []);
    /**
     * 当前笔画
     */
    U(this, "currentPoint", {
      data: [],
      lineWidth: this.options.lineWidth,
      lineColor: this.options.lineColor
    });
    this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), this.options = { ...this.options, ...n }, this.canvas.width = this.options.width, this.canvas.height = this.options.height, this.canvas.style.border = "1px solid #ccc", this.ctx.lineCap = "round", t.appendChild(this.canvas), this.init();
  }
  getThis() {
    return this;
  }
  /**
   * 上一步
   */
  prev() {
    this.points.length > 0 && this.currentPoints.length !== 0 && (this.currentPoints = this.points.slice(0, this.currentPoints.length - 1), this.draw());
  }
  /**
   * 下一步
   */
  next() {
    this.points.length > 0 && this.currentPoints.length !== this.points.length && (this.currentPoints = this.points.slice(0, this.currentPoints.length + 1), this.draw());
  }
  async draw() {
    console.log("重绘"), this.ctx.clearRect(0, 0, this.options.width, this.options.height), await this.init(!0), this.currentPoints.forEach((t) => {
      this.ctx.lineWidth = t.lineWidth, this.ctx.strokeStyle = t.lineColor, this.ctx.beginPath();
      for (let n = 0; n < t.data.length; n++) {
        const c = t.data[n], u = t.data[n - 1];
        n !== 0 && (this.ctx.moveTo(u.x, u.y), this.ctx.lineTo(c.x, c.y));
      }
      this.ctx.stroke();
    });
  }
  /**
   * 初始化
   */
  async init(t) {
    if (this.ctx.fillStyle = this.options.bgColor, this.ctx.fillRect(0, 0, this.options.width, this.options.height), this.options.bgImage) {
      let n;
      typeof this.options.bgImage == "string" ? n = await new Promise((E, A) => {
        const _ = new Image();
        _.src = this.options.bgImage, _.onload = () => {
          console.log(_.width, _.height), E(_);
        }, _.onerror = (W) => {
          A(W);
        };
      }) : n = this.options.bgImage;
      const c = this.options.width / n.width, u = this.options.height / n.height;
      c > u ? (n.width = n.width * c, n.height = n.height * c) : (n.width = n.width * u, n.height = n.height * u);
      const S = n.height - this.options.height, D = n.width - this.options.width;
      console.log(n.width, n.height), this.ctx.drawImage(n, -D / 2, -S / 2, n.width, n.height);
    }
    t || this.bindEvent();
  }
  /**
   * 绑定事件
   */
  bindEvent() {
    console.log("bindEvent"), this.canvas.addEventListener("mousedown", this.handleMouseDown.bind(this)), this.canvas.addEventListener("mousemove", this.handleMouseMove.bind(this)), this.canvas.addEventListener("mouseup", this.handleMouseUp.bind(this));
  }
  // !TODO
  /**
   * 鼠标按下事件
   * @param e MouseEvent
   */
  handleMouseDown(t) {
    this.stop = !1, this.ctx.lineWidth = this.options.lineWidth, this.ctx.strokeStyle = this.options.lineColor, this.X = t.offsetX, this.Y = t.offsetY, this.currentPoint = {
      data: [{ x: t.offsetX, y: t.offsetY }],
      lineWidth: this.options.lineWidth,
      lineColor: this.options.lineColor
    };
  }
  /**
   * 鼠标移动事件 
   * @param e MouseEvent
   */
  handleMouseMove(t) {
    this.stop || (this.ctx.beginPath(), this.ctx.moveTo(this.X, this.Y), this.X = t.offsetX, this.Y = t.offsetY, this.ctx.lineTo(t.offsetX, t.offsetY), this.ctx.stroke(), this.currentPoint.data.push({ x: t.offsetX, y: t.offsetY }));
  }
  /**
   * 鼠标抬起事件
   * @param e MouseEvent
   */
  handleMouseUp(t) {
    console.log("handleMouseUp"), this.stop = !0, this.currentPoints.push(this.currentPoint), this.points = [...this.currentPoints];
  }
  /**
   * 设置画笔颜色
   * @param color string
   */
  setLineColor(t) {
    this.options.lineColor = t;
  }
  /**
   * 设置画笔宽度
   * @param width number
   */
  setLineWidth(t) {
    this.options.lineWidth = t;
  }
  change(t) {
    const n = {
      totalStep: this.points.length,
      totalPoints: this.points,
      currentStep: this.currentPoints.length,
      currentPoints: this.currentPoints[-1]
    };
    t(n);
  }
}
export {
  At as CanvasSign,
  Et as ColorThief,
  Tt as date,
  ot as dayjs,
  Pt as downloadFile,
  Yt as downloadImg,
  Ct as isObject,
  Ot as localStorage,
  It as sessionStorage,
  _t as waterMark,
  xt as withInstall
};

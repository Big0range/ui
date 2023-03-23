const vt = (s) => (s.install = (i) => {
  const a = s.name || s.__name;
  i.component(a, s);
}, s);
let K = {}, rt = Object.getPrototypeOf, ot = K.toString, tt = K.hasOwnProperty, et = tt.toString, it = et.call(Object);
const wt = (s) => {
  let i, a;
  return !s || ot.call(s) !== "[object Object]" ? !1 : (i = rt(s), i ? (a = tt.call(i, "constructor") && i.constructor, typeof a == "function" && et.call(a) === it) : !0);
}, yt = {
  // 设置永久缓存
  set(s, i) {
    window.localStorage.setItem(s, JSON.stringify(i));
  },
  // 获取永久缓存
  get(s) {
    const i = window.localStorage.getItem(s);
    return JSON.parse(i);
  },
  // 移除永久缓存
  remove(s) {
    window.localStorage.removeItem(s);
  },
  // 移除全部永久缓存
  clear() {
    window.localStorage.clear();
  }
}, $t = {
  // 设置临时缓存
  set(s, i) {
    window.sessionStorage.setItem(s, JSON.stringify(i));
  },
  // 获取临时缓存
  get(s) {
    const i = window.sessionStorage.getItem(s);
    return JSON.parse(i);
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
function at(s, i = "rgba(17, 17, 17, 0.2)") {
  nt();
  const a = document.createElement("canvas");
  a.id = "watermark-canvas", document.body.appendChild(a), a.width = 165, a.height = 95, a.style.display = "none";
  const f = a.getContext("2d");
  f.rotate(-20 * Math.PI / 180), f.font = "16px Microsoft JhengHei", f.fillStyle = i, f.textAlign = "left", f.textBaseline = "middle", f.fillText(s, 30, 105, 200);
  const u = document.createElement("div");
  u.id = "watermark-div", u.style.backgroundImage = "url(" + a.toDataURL("image/png") + ")", u.style.position = "fixed", u.style.zIndex = "99999999999", u.style.top = "0", u.style.bottom = "0", u.style.left = "0", u.style.right = "0", u.style.pointerEvents = "none", document.body.appendChild(u), document.body.removeChild(a);
}
function nt() {
  document.getElementById("watermark-div") && document.body.removeChild(document.getElementById("watermark-div"));
}
const Mt = {
  set: at,
  clear: nt
};
function bt(s, i) {
  const a = new FileReader();
  a.readAsDataURL(s), a.onload = function(f) {
    var S;
    const u = document.createElement("a");
    u.download = i, u.href = (S = f.target) == null ? void 0 : S.result, document.body.appendChild(u), u.click(), document.body.removeChild(u), console.log("123");
  };
}
function St(s, i) {
  const a = new Image();
  a.setAttribute("crossOrigin", "anonymous"), a.onload = function() {
    const f = document.createElement("canvas");
    f.width = a.width, f.height = a.height, f.getContext("2d").drawImage(a, 0, 0, a.width, a.height);
    const S = f.toDataURL("image/png"), _ = document.createElement("a"), z = new MouseEvent("click");
    _.download = i, _.href = S, _.dispatchEvent(z);
  }, a.src = s;
}
if (!j)
  var j = {
    map: function(i, a) {
      var f = {};
      return a ? i.map(function(u, S) {
        return f.index = S, a.call(f, u);
      }) : i.slice();
    },
    naturalOrder: function(i, a) {
      return i < a ? -1 : i > a ? 1 : 0;
    },
    sum: function(i, a) {
      var f = {};
      return i.reduce(a ? function(u, S, _) {
        return f.index = _, u + a.call(f, S);
      } : function(u, S) {
        return u + S;
      }, 0);
    },
    max: function(i, a) {
      return Math.max.apply(null, a ? j.map(i, a) : i);
    }
  };
var st = function() {
  var s = 5, i = 8 - s, a = 1e3, f = 0.75;
  function u(M, t, e) {
    return (M << 2 * s) + (t << s) + e;
  }
  function S(M) {
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
        var w = 0, m = 1 << 8 - s, v = 0, y = 0, C = 0, l, $, O, x, D;
        for ($ = e.r1; $ <= e.r2; $++)
          for (O = e.g1; O <= e.g2; O++)
            for (x = e.b1; x <= e.b2; x++)
              D = u($, O, x), l = p[D] || 0, w += l, v += l * ($ + 0.5) * m, y += l * (O + 0.5) * m, C += l * (x + 0.5) * m;
        w ? e._avg = [~~(v / w), ~~(y / w), ~~(C / w)] : e._avg = [~~(m * (e.r1 + e.r2 + 1) / 2), ~~(m * (e.g1 + e.g2 + 1) / 2), ~~(m * (e.b1 + e.b2 + 1) / 2)];
      }
      return e._avg;
    },
    contains: function(t) {
      var e = this, p = t[0] >> i;
      return gval = t[1] >> i, bval = t[2] >> i, p >= e.r1 && p <= e.r2 && gval >= e.g1 && gval <= e.g2 && bval >= e.b1 && bval <= e.b2;
    }
  };
  function z() {
    this.vboxes = new S(function(M, t) {
      return j.naturalOrder(M.vbox.count() * M.vbox.volume(), t.vbox.count() * t.vbox.volume());
    });
  }
  z.prototype = {
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
  function k(M) {
    var t = 1 << 3 * s, e = new Array(t), p, w, m, v;
    return M.forEach(function(y) {
      w = y[0] >> i, m = y[1] >> i, v = y[2] >> i, p = u(w, m, v), e[p] = (e[p] || 0) + 1;
    }), e;
  }
  function E(M, t) {
    var e = 1e6, p = 0, w = 1e6, m = 0, v = 1e6, y = 0, C, l, $;
    return M.forEach(function(O) {
      C = O[0] >> i, l = O[1] >> i, $ = O[2] >> i, C < e ? e = C : C > p && (p = C), l < w ? w = l : l > m && (m = l), $ < v ? v = $ : $ > y && (y = $);
    }), new _(e, p, w, m, v, y, t);
  }
  function q(M, t) {
    if (!t.count())
      return;
    var e = t.r2 - t.r1 + 1, p = t.g2 - t.g1 + 1, w = t.b2 - t.b1 + 1, m = j.max([e, p, w]);
    if (t.count() == 1)
      return [t.copy()];
    var v = 0, y = [], C = [], l, $, O, x, D;
    if (m == e)
      for (l = t.r1; l <= t.r2; l++) {
        for (x = 0, $ = t.g1; $ <= t.g2; $++)
          for (O = t.b1; O <= t.b2; O++)
            D = u(l, $, O), x += M[D] || 0;
        v += x, y[l] = v;
      }
    else if (m == p)
      for (l = t.g1; l <= t.g2; l++) {
        for (x = 0, $ = t.r1; $ <= t.r2; $++)
          for (O = t.b1; O <= t.b2; O++)
            D = u($, l, O), x += M[D] || 0;
        v += x, y[l] = v;
      }
    else
      for (l = t.b1; l <= t.b2; l++) {
        for (x = 0, $ = t.r1; $ <= t.r2; $++)
          for (O = t.g1; O <= t.g2; O++)
            D = u($, O, l), x += M[D] || 0;
        v += x, y[l] = v;
      }
    y.forEach(function(Y, N) {
      C[N] = v - Y;
    });
    function b(Y) {
      var N = Y + "1", d = Y + "2", o, n, h, r, c, g = 0;
      for (l = t[N]; l <= t[d]; l++)
        if (y[l] > v / 2) {
          for (h = t.copy(), r = t.copy(), o = l - t[N], n = t[d] - l, o <= n ? c = Math.min(t[d] - 1, ~~(l + n / 2)) : c = Math.max(t[N], ~~(l - 1 - o / 2)); !y[c]; )
            c++;
          for (g = C[c]; !g && y[c - 1]; )
            g = C[--c];
          return h[d] = c, r[N] = h[d] + 1, [h, r];
        }
    }
    return m == e ? b("r") : m == p ? b("g") : b("b");
  }
  function P(M, t) {
    if (!M.length || t < 2 || t > 256)
      return !1;
    var e = k(M);
    e.forEach(function() {
    });
    var p = E(M, e), w = new S(function(C, l) {
      return j.naturalOrder(C.count(), l.count());
    });
    w.push(p);
    function m(C, l) {
      for (var $ = C.size(), O = 0, x; O < a; ) {
        if ($ >= l || O++ > a)
          return;
        if (x = C.pop(), !x.count()) {
          C.push(x), O++;
          continue;
        }
        var D = q(e, x), b = D[0], Y = D[1];
        if (!b)
          return;
        C.push(b), Y && (C.push(Y), $++);
      }
    }
    m(w, f * t);
    for (var v = new S(function(C, l) {
      return j.naturalOrder(C.count() * C.volume(), l.count() * l.volume());
    }); w.size(); )
      v.push(w.pop());
    m(v, t);
    for (var y = new z(); v.size(); )
      y.push(v.pop());
    return y;
  }
  return {
    quantize: P
  };
}(), ut = st.quantize;
function ct(s, i, a) {
  const f = s, u = [];
  for (let S = 0, _, z, k, E, q; S < i; S = S + a)
    _ = S * 4, z = f[_ + 0], k = f[_ + 1], E = f[_ + 2], q = f[_ + 3], (typeof q > "u" || q >= 125) && (z > 250 && k > 250 && E > 250 || u.push([z, k, E]));
  return u;
}
function ft(s) {
  let { colorCount: i, quality: a } = s;
  if (typeof i > "u" || !Number.isInteger(i))
    i = 10;
  else {
    if (i === 1)
      throw new Error("colorCount应该在2到20之间。要获得一种颜色, 调用getColor()而不是getPalette()");
    i = Math.max(i, 2), i = Math.min(i, 20);
  }
  return (typeof a > "u" || !Number.isInteger(a) || a < 1) && (a = 10), {
    colorCount: i,
    quality: a
  };
}
const X = {
  createPixelArray: ct,
  validateOptions: ft
};
function lt(s) {
  s.setAttribute("crossOrigin", "anonymous");
  const i = document.createElement("canvas"), a = i.getContext("2d"), f = i.width = s.width, u = i.height = s.height;
  return a.drawImage(s, 0, 0, f, u), { canvas: i, context: a, width: f, height: u, getImageData: () => a.getImageData(0, 0, f, u) };
}
function dt(s, i = 10) {
  return G(s, 5, i)[0];
}
function G(s, i = 8, a = 10) {
  s.setAttribute("crossOrigin", "anonymous");
  const f = X.validateOptions({
    colorCount: i,
    quality: a
  }), u = lt(s), S = u.getImageData(), _ = u.width * u.height, z = X.createPixelArray(S.data, _, f.quality), k = ut(z, f.colorCount);
  return k ? k.palette() : [];
}
function ht(s, i) {
  return new Promise((a, f) => {
    const u = document.createElement("img");
    u.setAttribute("crossOrigin", "anonymous"), u.addEventListener("load", () => {
      const S = G(u, 5, i), _ = S ? S[0] : [];
      a(_);
    }), u.addEventListener("error", () => {
      f();
    }), u.src = s;
  });
}
function gt(s) {
  return new Promise((i, a) => {
    let f = new XMLHttpRequest();
    f.open("GET", s, !0), f.responseType = "arraybuffer", f.onload = function() {
      if (this.status == 200) {
        let u = new Uint8Array(this.response), S = u.length, _ = new Array(S);
        for (let E = 0; E < u.length; E++)
          _[E] = String.fromCharCode(u[E]);
        let z = _.join(""), k = window.btoa(z);
        i("data:image/png;base64," + k);
      }
    }, f.onerror = a, f.send();
  });
}
const Dt = {
  getPalette: G,
  getColorFromUrl: ht,
  getImageData: gt,
  getColor: dt
};
var mt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Q = {}, pt = {
  get exports() {
    return Q;
  },
  set exports(s) {
    Q = s;
  }
};
(function(s, i) {
  (function(a, f) {
    s.exports = f();
  })(mt, function() {
    var a = 1e3, f = 6e4, u = 36e5, S = "millisecond", _ = "second", z = "minute", k = "hour", E = "day", q = "week", P = "month", M = "quarter", t = "year", e = "date", p = "Invalid Date", w = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, v = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(d) {
      var o = ["th", "st", "nd", "rd"], n = d % 100;
      return "[" + d + (o[(n - 20) % 10] || o[n] || o[0]) + "]";
    } }, y = function(d, o, n) {
      var h = String(d);
      return !h || h.length >= o ? d : "" + Array(o + 1 - h.length).join(n) + d;
    }, C = { s: y, z: function(d) {
      var o = -d.utcOffset(), n = Math.abs(o), h = Math.floor(n / 60), r = n % 60;
      return (o <= 0 ? "+" : "-") + y(h, 2, "0") + ":" + y(r, 2, "0");
    }, m: function d(o, n) {
      if (o.date() < n.date())
        return -d(n, o);
      var h = 12 * (n.year() - o.year()) + (n.month() - o.month()), r = o.clone().add(h, P), c = n - r < 0, g = o.clone().add(h + (c ? -1 : 1), P);
      return +(-(h + (n - r) / (c ? r - g : g - r)) || 0);
    }, a: function(d) {
      return d < 0 ? Math.ceil(d) || 0 : Math.floor(d);
    }, p: function(d) {
      return { M: P, y: t, w: q, d: E, D: e, h: k, m: z, s: _, ms: S, Q: M }[d] || String(d || "").toLowerCase().replace(/s$/, "");
    }, u: function(d) {
      return d === void 0;
    } }, l = "en", $ = {};
    $[l] = v;
    var O = function(d) {
      return d instanceof Y;
    }, x = function d(o, n, h) {
      var r;
      if (!o)
        return l;
      if (typeof o == "string") {
        var c = o.toLowerCase();
        $[c] && (r = c), n && ($[c] = n, r = c);
        var g = o.split("-");
        if (!r && g.length > 1)
          return d(g[0]);
      } else {
        var I = o.name;
        $[I] = o, r = I;
      }
      return !h && r && (l = r), r || !h && l;
    }, D = function(d, o) {
      if (O(d))
        return d.clone();
      var n = typeof o == "object" ? o : {};
      return n.date = d, n.args = arguments, new Y(n);
    }, b = C;
    b.l = x, b.i = O, b.w = function(d, o) {
      return D(d, { locale: o.$L, utc: o.$u, x: o.$x, $offset: o.$offset });
    };
    var Y = function() {
      function d(n) {
        this.$L = x(n.locale, null, !0), this.parse(n);
      }
      var o = d.prototype;
      return o.parse = function(n) {
        this.$d = function(h) {
          var r = h.date, c = h.utc;
          if (r === null)
            return /* @__PURE__ */ new Date(NaN);
          if (b.u(r))
            return /* @__PURE__ */ new Date();
          if (r instanceof Date)
            return new Date(r);
          if (typeof r == "string" && !/Z$/i.test(r)) {
            var g = r.match(w);
            if (g) {
              var I = g[2] - 1 || 0, T = (g[7] || "0").substring(0, 3);
              return c ? new Date(Date.UTC(g[1], I, g[3] || 1, g[4] || 0, g[5] || 0, g[6] || 0, T)) : new Date(g[1], I, g[3] || 1, g[4] || 0, g[5] || 0, g[6] || 0, T);
            }
          }
          return new Date(r);
        }(n), this.$x = n.x || {}, this.init();
      }, o.init = function() {
        var n = this.$d;
        this.$y = n.getFullYear(), this.$M = n.getMonth(), this.$D = n.getDate(), this.$W = n.getDay(), this.$H = n.getHours(), this.$m = n.getMinutes(), this.$s = n.getSeconds(), this.$ms = n.getMilliseconds();
      }, o.$utils = function() {
        return b;
      }, o.isValid = function() {
        return this.$d.toString() !== p;
      }, o.isSame = function(n, h) {
        var r = D(n);
        return this.startOf(h) <= r && r <= this.endOf(h);
      }, o.isAfter = function(n, h) {
        return D(n) < this.startOf(h);
      }, o.isBefore = function(n, h) {
        return this.endOf(h) < D(n);
      }, o.$g = function(n, h, r) {
        return b.u(n) ? this[h] : this.set(r, n);
      }, o.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, o.valueOf = function() {
        return this.$d.getTime();
      }, o.startOf = function(n, h) {
        var r = this, c = !!b.u(h) || h, g = b.p(n), I = function(W, L) {
          var J = b.w(r.$u ? Date.UTC(r.$y, L, W) : new Date(r.$y, L, W), r);
          return c ? J : J.endOf(E);
        }, T = function(W, L) {
          return b.w(r.toDate()[W].apply(r.toDate("s"), (c ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(L)), r);
        }, A = this.$W, H = this.$M, F = this.$D, U = "set" + (this.$u ? "UTC" : "");
        switch (g) {
          case t:
            return c ? I(1, 0) : I(31, 11);
          case P:
            return c ? I(1, H) : I(0, H + 1);
          case q:
            var B = this.$locale().weekStart || 0, R = (A < B ? A + 7 : A) - B;
            return I(c ? F - R : F + (6 - R), H);
          case E:
          case e:
            return T(U + "Hours", 0);
          case k:
            return T(U + "Minutes", 1);
          case z:
            return T(U + "Seconds", 2);
          case _:
            return T(U + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, o.endOf = function(n) {
        return this.startOf(n, !1);
      }, o.$set = function(n, h) {
        var r, c = b.p(n), g = "set" + (this.$u ? "UTC" : ""), I = (r = {}, r[E] = g + "Date", r[e] = g + "Date", r[P] = g + "Month", r[t] = g + "FullYear", r[k] = g + "Hours", r[z] = g + "Minutes", r[_] = g + "Seconds", r[S] = g + "Milliseconds", r)[c], T = c === E ? this.$D + (h - this.$W) : h;
        if (c === P || c === t) {
          var A = this.clone().set(e, 1);
          A.$d[I](T), A.init(), this.$d = A.set(e, Math.min(this.$D, A.daysInMonth())).$d;
        } else
          I && this.$d[I](T);
        return this.init(), this;
      }, o.set = function(n, h) {
        return this.clone().$set(n, h);
      }, o.get = function(n) {
        return this[b.p(n)]();
      }, o.add = function(n, h) {
        var r, c = this;
        n = Number(n);
        var g = b.p(h), I = function(H) {
          var F = D(c);
          return b.w(F.date(F.date() + Math.round(H * n)), c);
        };
        if (g === P)
          return this.set(P, this.$M + n);
        if (g === t)
          return this.set(t, this.$y + n);
        if (g === E)
          return I(1);
        if (g === q)
          return I(7);
        var T = (r = {}, r[z] = f, r[k] = u, r[_] = a, r)[g] || 1, A = this.$d.getTime() + n * T;
        return b.w(A, this);
      }, o.subtract = function(n, h) {
        return this.add(-1 * n, h);
      }, o.format = function(n) {
        var h = this, r = this.$locale();
        if (!this.isValid())
          return r.invalidDate || p;
        var c = n || "YYYY-MM-DDTHH:mm:ssZ", g = b.z(this), I = this.$H, T = this.$m, A = this.$M, H = r.weekdays, F = r.months, U = function(L, J, Z, V) {
          return L && (L[J] || L(h, c)) || Z[J].slice(0, V);
        }, B = function(L) {
          return b.s(I % 12 || 12, L, "0");
        }, R = r.meridiem || function(L, J, Z) {
          var V = L < 12 ? "AM" : "PM";
          return Z ? V.toLowerCase() : V;
        }, W = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: A + 1, MM: b.s(A + 1, 2, "0"), MMM: U(r.monthsShort, A, F, 3), MMMM: U(F, A), D: this.$D, DD: b.s(this.$D, 2, "0"), d: String(this.$W), dd: U(r.weekdaysMin, this.$W, H, 2), ddd: U(r.weekdaysShort, this.$W, H, 3), dddd: H[this.$W], H: String(I), HH: b.s(I, 2, "0"), h: B(1), hh: B(2), a: R(I, T, !0), A: R(I, T, !1), m: String(T), mm: b.s(T, 2, "0"), s: String(this.$s), ss: b.s(this.$s, 2, "0"), SSS: b.s(this.$ms, 3, "0"), Z: g };
        return c.replace(m, function(L, J) {
          return J || W[L] || g.replace(":", "");
        });
      }, o.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, o.diff = function(n, h, r) {
        var c, g = b.p(h), I = D(n), T = (I.utcOffset() - this.utcOffset()) * f, A = this - I, H = b.m(this, I);
        return H = (c = {}, c[t] = H / 12, c[P] = H, c[M] = H / 3, c[q] = (A - T) / 6048e5, c[E] = (A - T) / 864e5, c[k] = A / u, c[z] = A / f, c[_] = A / a, c)[g] || A, r ? H : b.a(H);
      }, o.daysInMonth = function() {
        return this.endOf(P).$D;
      }, o.$locale = function() {
        return $[this.$L];
      }, o.locale = function(n, h) {
        if (!n)
          return this.$L;
        var r = this.clone(), c = x(n, h, !0);
        return c && (r.$L = c), r;
      }, o.clone = function() {
        return b.w(this.$d, this);
      }, o.toDate = function() {
        return new Date(this.valueOf());
      }, o.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, o.toISOString = function() {
        return this.$d.toISOString();
      }, o.toString = function() {
        return this.$d.toUTCString();
      }, d;
    }(), N = Y.prototype;
    return D.prototype = N, [["$ms", S], ["$s", _], ["$m", z], ["$H", k], ["$W", E], ["$M", P], ["$y", t], ["$D", e]].forEach(function(d) {
      N[d[1]] = function(o) {
        return this.$g(o, d[0], d[1]);
      };
    }), D.extend = function(d, o) {
      return d.$i || (d(o, Y, D), d.$i = !0), D;
    }, D.locale = x, D.isDayjs = O, D.unix = function(d) {
      return D(1e3 * d);
    }, D.en = $[l], D.Ls = $, D.p = {}, D;
  });
})(pt);
const Ot = Q;
export {
  Dt as ColorThief,
  Ot as dayjs,
  bt as downloadFile,
  St as downloadImg,
  wt as isObject,
  yt as localStorage,
  $t as sessionStorage,
  Mt as waterMark,
  vt as withInstall
};

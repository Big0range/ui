const i = (t) => (t.install = (e) => {
  const n = t.name || t.__name;
  e.component(n, t);
}, t);
let r = {}, c = Object.getPrototypeOf, s = r.toString, l = r.hasOwnProperty, o = l.toString, a = o.call(Object);
const u = (t) => {
  let e, n;
  return !t || s.call(t) !== "[object Object]" ? !1 : (e = c(t), e ? (n = l.call(e, "constructor") && e.constructor, typeof n == "function" && o.call(n) === a) : !0);
};
export {
  u as isObject,
  i as withInstall
};

import { openBlock as h, createElementBlock as S, createElementVNode as Q, reactive as kt, computed as F, unref as u, ref as U, watch as wt, onMounted as Fe, nextTick as bt, toRef as qt, defineComponent as Ue, renderSlot as E, createCommentVNode as D, normalizeClass as pe, withKeys as oe, createBlock as ce, withModifiers as xe, normalizeStyle as ut, Fragment as ue, createTextVNode as He, toDisplayString as Te, renderList as we, createVNode as Xe, Transition as ft, withCtx as re, onBeforeUpdate as Gn, onUnmounted as rn, withDirectives as At, vShow as Tt, mergeProps as Ae, createSlots as Oe, normalizeProps as Be, isRef as nt, guardReactiveProps as Ge, resolveDynamicComponent as St, useSlots as on, getCurrentScope as Zn, onScopeDispose as Xn, Teleport as qn } from "vue";
import { isBefore as sn, isEqual as In, isAfter as un, setHours as On, setMinutes as Bn, setSeconds as Yn, setMilliseconds as cn, parse as Jt, isValid as Ct, isDate as Jn, format as ht, getMonth as he, getDay as Qn, getYear as ge, getHours as je, getMinutes as Ke, getSeconds as dt, parseISO as ea, startOfWeek as hn, endOfWeek as ta, setMonth as Pt, setYear as rt, addDays as ct, set as Ne, add as Vn, addMonths as at, subMonths as gt, getISOWeek as na, differenceInCalendarDays as aa, eachDayOfInterval as gn, addYears as la, subYears as ra, sub as oa } from "date-fns";
const ot = (e, n) => {
  const a = e.__vccOpts || e;
  for (const [t, r] of n)
    a[t] = r;
  return a;
}, sa = {}, ia = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, ua = /* @__PURE__ */ Q("path", { d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z" }, null, -1), ca = /* @__PURE__ */ Q("path", { d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }, null, -1), da = /* @__PURE__ */ Q("path", { d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }, null, -1), fa = /* @__PURE__ */ Q("path", { d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z" }, null, -1), va = [
  ua,
  ca,
  da,
  fa
];
function ma(e, n) {
  return h(), S("svg", ia, va);
}
const It = /* @__PURE__ */ ot(sa, [["render", ma]]), ya = {}, ha = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, ga = /* @__PURE__ */ Q("path", { d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z" }, null, -1), pa = /* @__PURE__ */ Q("path", { d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" }, null, -1), ka = [
  ga,
  pa
];
function wa(e, n) {
  return h(), S("svg", ha, ka);
}
const ba = /* @__PURE__ */ ot(ya, [["render", wa]]), $a = {}, Da = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, Ma = /* @__PURE__ */ Q("path", { d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" }, null, -1), _a = [
  Ma
];
function Aa(e, n) {
  return h(), S("svg", Da, _a);
}
const pn = /* @__PURE__ */ ot($a, [["render", Aa]]), Ta = {}, Sa = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, Ca = /* @__PURE__ */ Q("path", { d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z" }, null, -1), Pa = [
  Ca
];
function Na(e, n) {
  return h(), S("svg", Sa, Pa);
}
const kn = /* @__PURE__ */ ot(Ta, [["render", Na]]), Ra = {}, Ia = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, Oa = /* @__PURE__ */ Q("path", { d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z" }, null, -1), Ba = /* @__PURE__ */ Q("path", { d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }, null, -1), Ya = [
  Oa,
  Ba
];
function Va(e, n) {
  return h(), S("svg", Ia, Ya);
}
const Ln = /* @__PURE__ */ ot(Ra, [["render", Va]]), La = {}, Ea = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, Fa = /* @__PURE__ */ Q("path", { d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" }, null, -1), Ua = [
  Fa
];
function Ha(e, n) {
  return h(), S("svg", Ea, Ua);
}
const En = /* @__PURE__ */ ot(La, [["render", Ha]]), Wa = {}, za = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, ja = /* @__PURE__ */ Q("path", { d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" }, null, -1), Ka = [
  ja
];
function xa(e, n) {
  return h(), S("svg", za, Ka);
}
const Fn = /* @__PURE__ */ ot(Wa, [["render", xa]]), wn = (e, n) => {
  const a = Jt(e, n.slice(0, e.length), new Date());
  return Ct(a) && Jn(a) ? a : null;
}, Ga = (e, n) => {
  if (typeof n == "string")
    return wn(e, n);
  if (Array.isArray(n)) {
    let a = null;
    for (const t of n)
      if (a = wn(e, t), a)
        break;
    return a;
  }
  return typeof n == "function" ? n(e) : null;
}, w = (e) => e ? new Date(e) : new Date(), Za = (e, n) => {
  if (n) {
    const t = (e.getMonth() + 1).toString().padStart(2, "0"), r = e.getDate().toString().padStart(2, "0"), c = e.getHours().toString().padStart(2, "0"), p = e.getMinutes().toString().padStart(2, "0");
    return `${e.getFullYear()}-${t}-${r}T${c}:${p}:00.000Z`;
  }
  const a = Date.UTC(
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds()
  );
  return new Date(a).toISOString();
}, We = (e) => {
  let n = w(JSON.parse(JSON.stringify(e)));
  return n = On(n, 0), n = Bn(n, 0), n = Yn(n, 0), n = cn(n, 0), n;
}, Ve = (e, n, a, t) => {
  let r = e ? w(e) : w();
  return (n || n === 0) && (r = On(r, +n)), (a || a === 0) && (r = Bn(r, +a)), (t || t === 0) && (r = Yn(r, +t)), cn(r, 0);
}, Ce = (e, n) => !e || !n ? !1 : sn(We(e), We(n)), me = (e, n) => !e || !n ? !1 : In(We(e), We(n)), Ie = (e, n) => !e || !n ? !1 : un(We(e), We(n)), Un = (e, n, a) => e && e[0] && e[1] ? Ie(a, e[0]) && Ce(a, e[1]) : e && e[0] && n ? Ie(a, e[0]) && Ce(a, n) || Ce(a, e[0]) && Ie(a, n) : !1, yt = kt({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), Hn = () => {
  const e = (t) => {
    yt.menuFocused = t;
  }, n = (t) => {
    yt.shiftKeyInMenu !== t && (yt.shiftKeyInMenu = t);
  };
  return {
    control: F(() => ({ shiftKeyInMenu: yt.shiftKeyInMenu, menuFocused: yt.menuFocused })),
    setMenuFocused: e,
    setShiftKey: n
  };
};
function dn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Qt = { exports: {} };
(function(e, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = a;
  function a(t) {
    if (t === null || t === !0 || t === !1)
      return NaN;
    var r = Number(t);
    return isNaN(r) ? r : r < 0 ? Math.ceil(r) : Math.floor(r);
  }
  e.exports = n.default;
})(Qt, Qt.exports);
const Xa = /* @__PURE__ */ dn(Qt.exports);
var en = { exports: {} };
(function(e, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = a;
  function a(t) {
    var r = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
    return r.setUTCFullYear(t.getFullYear()), t.getTime() - r.getTime();
  }
  e.exports = n.default;
})(en, en.exports);
const bn = /* @__PURE__ */ dn(en.exports);
function qa(e, n) {
  var a = tl(n);
  return a.formatToParts ? Qa(a, e) : el(a, e);
}
var Ja = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function Qa(e, n) {
  try {
    for (var a = e.formatToParts(n), t = [], r = 0; r < a.length; r++) {
      var c = Ja[a[r].type];
      c >= 0 && (t[c] = parseInt(a[r].value, 10));
    }
    return t;
  } catch (p) {
    if (p instanceof RangeError)
      return [NaN];
    throw p;
  }
}
function el(e, n) {
  var a = e.format(n).replace(/\u200E/g, ""), t = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(a);
  return [t[3], t[1], t[2], t[4], t[5], t[6]];
}
var Ut = {};
function tl(e) {
  if (!Ut[e]) {
    var n = new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: "America/New_York",
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(new Date("2014-06-25T04:00:00.123Z")), a = n === "06/25/2014, 00:00:00" || n === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
    Ut[e] = a ? new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }) : new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return Ut[e];
}
function fn(e, n, a, t, r, c, p) {
  var b = new Date(0);
  return b.setUTCFullYear(e, n, a), b.setUTCHours(t, r, c, p), b;
}
var $n = 36e5, nl = 6e4, Ht = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function vn(e, n, a) {
  var t, r;
  if (e === "" || (t = Ht.timezoneZ.exec(e), t))
    return 0;
  var c;
  if (t = Ht.timezoneHH.exec(e), t)
    return c = parseInt(t[1], 10), Dn(c) ? -(c * $n) : NaN;
  if (t = Ht.timezoneHHMM.exec(e), t) {
    c = parseInt(t[1], 10);
    var p = parseInt(t[2], 10);
    return Dn(c, p) ? (r = Math.abs(c) * $n + p * nl, c > 0 ? -r : r) : NaN;
  }
  if (rl(e)) {
    n = new Date(n || Date.now());
    var b = a ? n : al(n), O = tn(b, e), L = a ? O : ll(n, O, e);
    return -L;
  }
  return NaN;
}
function al(e) {
  return fn(
    e.getFullYear(),
    e.getMonth(),
    e.getDate(),
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  );
}
function tn(e, n) {
  var a = qa(e, n), t = fn(
    a[0],
    a[1] - 1,
    a[2],
    a[3] % 24,
    a[4],
    a[5],
    0
  ).getTime(), r = e.getTime(), c = r % 1e3;
  return r -= c >= 0 ? c : 1e3 + c, t - r;
}
function ll(e, n, a) {
  var t = e.getTime(), r = t - n, c = tn(new Date(r), a);
  if (n === c)
    return n;
  r -= c - n;
  var p = tn(new Date(r), a);
  return c === p ? c : Math.max(c, p);
}
function Dn(e, n) {
  return -23 <= e && e <= 23 && (n == null || 0 <= n && n <= 59);
}
var Mn = {};
function rl(e) {
  if (Mn[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), Mn[e] = !0, !0;
  } catch {
    return !1;
  }
}
var Wn = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, Wt = 36e5, _n = 6e4, ol = 2, Re = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
  plainTime: /:/,
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    /^([+-]\d{3})$/,
    /^([+-]\d{4})$/
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    /^([+-]\d{5})/,
    /^([+-]\d{6})/
  ],
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  timeZone: Wn
};
function nn(e, n) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return new Date(NaN);
  var a = n || {}, t = a.additionalDigits == null ? ol : Xa(a.additionalDigits);
  if (t !== 2 && t !== 1 && t !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return new Date(NaN);
  var r = sl(e), c = il(r.date, t), p = c.year, b = c.restDateString, O = ul(b, p);
  if (isNaN(O))
    return new Date(NaN);
  if (O) {
    var L = O.getTime(), Y = 0, i;
    if (r.time && (Y = cl(r.time), isNaN(Y)))
      return new Date(NaN);
    if (r.timeZone || a.timeZone) {
      if (i = vn(r.timeZone || a.timeZone, new Date(L + Y)), isNaN(i))
        return new Date(NaN);
    } else
      i = bn(new Date(L + Y)), i = bn(new Date(L + Y + i));
    return new Date(L + Y + i);
  } else
    return new Date(NaN);
}
function sl(e) {
  var n = {}, a = Re.dateTimePattern.exec(e), t;
  if (a ? (n.date = a[1], t = a[3]) : (a = Re.datePattern.exec(e), a ? (n.date = a[1], t = a[2]) : (n.date = null, t = e)), t) {
    var r = Re.timeZone.exec(t);
    r ? (n.time = t.replace(r[1], ""), n.timeZone = r[1].trim()) : n.time = t;
  }
  return n;
}
function il(e, n) {
  var a = Re.YYY[n], t = Re.YYYYY[n], r;
  if (r = Re.YYYY.exec(e) || t.exec(e), r) {
    var c = r[1];
    return {
      year: parseInt(c, 10),
      restDateString: e.slice(c.length)
    };
  }
  if (r = Re.YY.exec(e) || a.exec(e), r) {
    var p = r[1];
    return {
      year: parseInt(p, 10) * 100,
      restDateString: e.slice(p.length)
    };
  }
  return {
    year: null
  };
}
function ul(e, n) {
  if (n === null)
    return null;
  var a, t, r, c;
  if (e.length === 0)
    return t = new Date(0), t.setUTCFullYear(n), t;
  if (a = Re.MM.exec(e), a)
    return t = new Date(0), r = parseInt(a[1], 10) - 1, Tn(n, r) ? (t.setUTCFullYear(n, r), t) : new Date(NaN);
  if (a = Re.DDD.exec(e), a) {
    t = new Date(0);
    var p = parseInt(a[1], 10);
    return vl(n, p) ? (t.setUTCFullYear(n, 0, p), t) : new Date(NaN);
  }
  if (a = Re.MMDD.exec(e), a) {
    t = new Date(0), r = parseInt(a[1], 10) - 1;
    var b = parseInt(a[2], 10);
    return Tn(n, r, b) ? (t.setUTCFullYear(n, r, b), t) : new Date(NaN);
  }
  if (a = Re.Www.exec(e), a)
    return c = parseInt(a[1], 10) - 1, Sn(n, c) ? An(n, c) : new Date(NaN);
  if (a = Re.WwwD.exec(e), a) {
    c = parseInt(a[1], 10) - 1;
    var O = parseInt(a[2], 10) - 1;
    return Sn(n, c, O) ? An(n, c, O) : new Date(NaN);
  }
  return null;
}
function cl(e) {
  var n, a, t;
  if (n = Re.HH.exec(e), n)
    return a = parseFloat(n[1].replace(",", ".")), zt(a) ? a % 24 * Wt : NaN;
  if (n = Re.HHMM.exec(e), n)
    return a = parseInt(n[1], 10), t = parseFloat(n[2].replace(",", ".")), zt(a, t) ? a % 24 * Wt + t * _n : NaN;
  if (n = Re.HHMMSS.exec(e), n) {
    a = parseInt(n[1], 10), t = parseInt(n[2], 10);
    var r = parseFloat(n[3].replace(",", "."));
    return zt(a, t, r) ? a % 24 * Wt + t * _n + r * 1e3 : NaN;
  }
  return null;
}
function An(e, n, a) {
  n = n || 0, a = a || 0;
  var t = new Date(0);
  t.setUTCFullYear(e, 0, 4);
  var r = t.getUTCDay() || 7, c = n * 7 + a + 1 - r;
  return t.setUTCDate(t.getUTCDate() + c), t;
}
var dl = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], fl = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function zn(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Tn(e, n, a) {
  if (n < 0 || n > 11)
    return !1;
  if (a != null) {
    if (a < 1)
      return !1;
    var t = zn(e);
    if (t && a > fl[n] || !t && a > dl[n])
      return !1;
  }
  return !0;
}
function vl(e, n) {
  if (n < 1)
    return !1;
  var a = zn(e);
  return !(a && n > 366 || !a && n > 365);
}
function Sn(e, n, a) {
  return !(n < 0 || n > 52 || a != null && (a < 0 || a > 6));
}
function zt(e, n, a) {
  return !(e != null && (e < 0 || e >= 25) || n != null && (n < 0 || n >= 60) || a != null && (a < 0 || a >= 60));
}
var an = { exports: {} }, ln = { exports: {} };
(function(e, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = a;
  function a(t, r) {
    if (t == null)
      throw new TypeError("assign requires that input parameter not be null or undefined");
    for (var c in r)
      Object.prototype.hasOwnProperty.call(r, c) && (t[c] = r[c]);
    return t;
  }
  e.exports = n.default;
})(ln, ln.exports);
(function(e, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = r;
  var a = t(ln.exports);
  function t(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function r(c) {
    return (0, a.default)({}, c);
  }
  e.exports = n.default;
})(an, an.exports);
const ml = /* @__PURE__ */ dn(an.exports);
function yl(e, n, a) {
  var t = nn(e, a), r = vn(n, t, !0), c = new Date(t.getTime() - r), p = new Date(0);
  return p.setFullYear(c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()), p.setHours(c.getUTCHours(), c.getUTCMinutes(), c.getUTCSeconds(), c.getUTCMilliseconds()), p;
}
function hl(e, n, a) {
  if (typeof e == "string" && !e.match(Wn)) {
    var t = ml(a);
    return t.timeZone = n, nn(e, t);
  }
  var r = nn(e, a), c = fn(
    r.getFullYear(),
    r.getMonth(),
    r.getDate(),
    r.getHours(),
    r.getMinutes(),
    r.getSeconds(),
    r.getMilliseconds()
  ).getTime(), p = vn(n, new Date(c));
  return new Date(c + p);
}
const gl = (e, n = 3) => {
  const a = [];
  for (let t = 0; t < e.length; t += n)
    a.push([e[t], e[t + 1], e[t + 2]]);
  return a;
}, pl = (e, n) => {
  const a = [1, 2, 3, 4, 5, 6, 7].map((c) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(new Date(`2017-01-0${c}T00:00:00+00:00`)).slice(0, 2)), t = a.slice(0, n), r = a.slice(n + 1, a.length);
  return [a[n]].concat(...r).concat(...t);
}, kl = (e) => {
  const n = [];
  for (let a = +e[0]; a <= +e[1]; a++)
    n.push({ value: +a, text: `${a}` });
  return n;
}, wl = (e, n) => {
  const a = new Intl.DateTimeFormat(e, { month: n, timeZone: "UTC" });
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((r) => {
    const c = r < 10 ? `0${r}` : r;
    return new Date(`2017-${c}-01T00:00:00+00:00`);
  }).map((r, c) => ({
    text: a.format(r),
    value: c
  }));
}, bl = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], Se = (e) => {
  const n = u(e);
  return (n == null ? void 0 : n.$el) ?? n;
}, $l = (e) => Object.assign({ type: "dot" }, e), jn = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, Rt = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, De = (e) => e, Cn = (e) => Object.assign(
  {
    menuAppear: "dp-menu-appear",
    open: "dp-slide-down",
    close: "dp-slide-up",
    next: "calendar-next",
    previous: "calendar-prev",
    vNext: "dp-slide-up",
    vPrevious: "dp-slide-down"
  },
  e
), Dl = (e) => Object.assign(
  {
    toggleOverlay: "Toggle overlay",
    menu: "Datepicker menu",
    input: "Datepicker input",
    calendarWrap: "Calendar wrapper",
    calendarDays: "Calendar days",
    openTimePicker: "Open time picker",
    closeTimePicker: "Close time Picker",
    incrementValue: (n) => `Increment ${n}`,
    decrementValue: (n) => `Decrement ${n}`,
    openTpOverlay: (n) => `Open ${n} overlay`,
    amPmButton: "Switch AM/PM mode",
    openYearsOverlay: "Open years overlay",
    openMonthsOverlay: "Open months overlay",
    nextMonth: "Next month",
    prevMonth: "Previous month",
    day: () => ""
  },
  e
), Ml = (e) => e === null ? 0 : typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2, _l = (e, n, a) => e || (typeof a == "string" ? a : n), Al = (e) => typeof e == "boolean" ? e ? Cn({}) : !1 : Cn(e), Tl = () => ({
  enterSubmit: !0,
  tabSubmit: !0,
  openMenu: !0,
  rangeSeparator: " - "
}), Sl = (e) => Object.assign({ months: [], years: [], times: { hours: [], minutes: [], seconds: [] } }, e), Ye = (e) => {
  const n = () => {
    if (e.partialRange)
      return null;
    throw new Error(Rt.prop("partial-range"));
  }, a = F(() => ({
    ariaLabels: Dl(e.ariaLabels),
    textInputOptions: Object.assign(Tl(), e.textInputOptions),
    multiCalendars: Ml(e.multiCalendars),
    previewFormat: _l(e.previewFormat, e.format, c()),
    filters: Sl(e.filters),
    transitions: Al(e.transitions),
    startTime: _()
  })), t = (l) => {
    if (e.range)
      return l();
    throw new Error(Rt.prop("range"));
  }, r = () => {
    const l = e.enableSeconds ? ":ss" : "";
    return e.is24 ? `HH:mm${l}` : `hh:mm${l} aa`;
  }, c = () => e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? r() : e.weekPicker ? "MM/dd/yyyy" : e.yearPicker ? "yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${r()}` : "MM/dd/yyyy", p = (l, f) => {
    if (typeof e.format == "function")
      return e.format(l);
    const k = f || c(), V = e.formatLocale ? { locale: e.formatLocale } : void 0;
    return Array.isArray(l) ? `${ht(l[0], k, V)} ${e.modelAuto && !l[1] ? "" : a.value.textInputOptions.rangeSeparator || "-"} ${l[1] ? ht(l[1], k, V) : ""}` : ht(l, k, V);
  }, b = (l) => e.timezone ? yl(l, e.timezone) : l, O = (l) => e.timezone ? hl(l, e.timezone) : l, L = F(() => (l) => {
    var f;
    return (f = e.hideNavigation) == null ? void 0 : f.includes(l);
  }), Y = (l) => {
    const f = e.maxDate ? Ie(b(l), b(w(e.maxDate))) : !1, k = e.minDate ? Ce(b(l), b(w(e.minDate))) : !1, V = C(l, e.disabledDates), y = a.value.filters.months.map((be) => +be).includes(he(l)), o = e.disabledWeekDays.length ? e.disabledWeekDays.some((be) => +be === Qn(l)) : !1, G = e.allowedDates.length ? !e.allowedDates.some((be) => me(b(w(be)), b(l))) : !1, ye = ge(l), de = ye < +e.yearRange[0] || ye > +e.yearRange[1];
    return !(f || k || V || y || de || o || G);
  }, i = (l) => {
    const f = {
      hours: je(w()),
      minutes: Ke(w()),
      seconds: dt(w())
    };
    return Object.assign(f, l);
  }, _ = () => e.range ? e.startTime && Array.isArray(e.startTime) ? [i(e.startTime[0]), i(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? i(e.startTime) : null, N = (l) => !Y(l), B = (l) => Array.isArray(l) ? Ct(l[0]) && (l[1] ? Ct(l[1]) : !0) : l ? Ct(l) : !1, Z = (l) => l instanceof Date ? l : ea(l), ee = (l) => {
    const f = hn(b(l), { weekStartsOn: +e.weekStart }), k = ta(b(l), { weekStartsOn: +e.weekStart });
    return [f, k];
  }, C = (l, f) => Array.isArray(f) ? f.some((k) => me(b(w(k)), b(l))) : f(l), M = (l, f, k) => {
    let V = l ? w(l) : w();
    return (f || f === 0) && (V = Pt(V, f)), k && (V = rt(V, k)), V;
  }, x = (l) => Ne(w(), { hours: je(l), minutes: Ke(l), seconds: dt(l) }), q = (l) => Ne(w(), {
    hours: +l.hours || 0,
    minutes: +l.minutes || 0,
    seconds: +l.seconds || 0
  }), te = (l, f, k, V) => {
    if (!l)
      return !0;
    if (V) {
      const se = k === "max" ? sn(l, f) : un(l, f), y = { seconds: 0, milliseconds: 0 };
      return se || In(Ne(l, y), Ne(f, y));
    }
    return k === "max" ? l.getTime() <= f.getTime() : l.getTime() >= f.getTime();
  }, P = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, m = (l) => Array.isArray(l) ? [l[0] ? x(l[0]) : null, l[1] ? x(l[1]) : null] : x(l), R = (l) => {
    const f = e.maxTime ? q(e.maxTime) : w(e.maxDate);
    return Array.isArray(l) ? te(l[0], f, "max", !!e.maxDate) && te(l[1], f, "max", !!e.maxDate) : te(l, f, "max", !!e.maxDate);
  }, j = (l, f) => {
    const k = e.minTime ? q(e.minTime) : w(e.minDate);
    return Array.isArray(l) ? te(l[0], k, "min", !!e.minDate) && te(l[1], k, "min", !!e.minDate) && f : te(l, k, "min", !!e.minDate) && f;
  }, J = (l) => {
    let f = !0;
    if (!l || P())
      return !0;
    const k = !e.minDate && !e.maxDate ? m(l) : l;
    return (e.maxTime || e.maxDate) && (f = R(De(k))), (e.minTime || e.minDate) && (f = j(De(k), f)), f;
  }, I = (l, f) => {
    const k = w(JSON.parse(JSON.stringify(l))), V = [];
    for (let se = 0; se < 7; se++) {
      const y = ct(k, se), o = he(y) !== f;
      V.push({
        text: e.hideOffsetDates && o ? "" : y.getDate(),
        value: y,
        current: !o,
        classData: {}
      });
    }
    return V;
  }, H = (l, f) => {
    const k = [], V = w(b(new Date(f, l))), se = w(b(new Date(f, l + 1, 0))), y = hn(V, { weekStartsOn: e.weekStart }), o = (G) => {
      const ye = I(G, l);
      if (k.push({ days: ye }), !k[k.length - 1].days.some(
        (de) => me(We(de.value), We(se))
      )) {
        const de = ct(G, 7);
        o(de);
      }
    };
    if (o(y), e.sixWeeks && k.length < 6) {
      const G = 6 - k.length;
      for (let ye = 1; ye <= G; ye++) {
        const de = k[k.length - 1], be = de.days[de.days.length - 1], Le = I(ct(be.value, 1), he(V));
        k.push({ days: Le });
      }
    }
    return k;
  }, g = (l, f, k) => [Ne(w(l), { date: 1 }), Ne(w(), { month: f, year: k, date: 1 })], d = (l, f) => Ce(...g(e.minDate, l, f)) || me(...g(e.minDate, l, f)), T = (l, f) => Ie(...g(e.maxDate, l, f)) || me(...g(e.maxDate, l, f)), A = (l, f, k) => {
    let V = !1;
    return e.maxDate && k && T(l, f) && (V = !0), e.minDate && !k && d(l, f) && (V = !0), V;
  };
  return {
    checkPartialRangeValue: n,
    checkRangeEnabled: t,
    getZonedDate: b,
    getZonedToUtc: O,
    formatDate: p,
    getDefaultPattern: c,
    validateDate: Y,
    getDefaultStartTime: _,
    isDisabled: N,
    isValidDate: B,
    sanitizeDate: Z,
    getWeekFromDate: ee,
    matchDate: C,
    setDateMonthOrYear: M,
    isValidTime: J,
    getCalendarDays: H,
    validateMonthYearInRange: (l, f, k, V) => {
      let se = !1;
      return V ? e.minDate && e.maxDate ? se = A(l, f, k) : (e.minDate && d(l, f) || e.maxDate && T(l, f)) && (se = !0) : se = !0, se;
    },
    validateMaxDate: T,
    validateMinDate: d,
    defaults: a,
    hideNavigationButtons: L
  };
}, ve = kt({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
}), jt = U(null), _t = U(!1), Kt = U(!1), xt = U(!1), Gt = U(!1), Pe = U(0), _e = U(0), qe = () => {
  const e = F(() => _t.value ? [...ve.selectionGrid, ve.actionRow].filter((C) => C.length) : Kt.value ? [
    ...ve.timePicker[0],
    ...ve.timePicker[1],
    Gt.value ? [] : [jt.value],
    ve.actionRow
  ].filter((C) => C.length) : xt.value ? [...ve.monthPicker, ve.actionRow] : [ve.monthYear, ...ve.calendar, ve.time, ve.actionRow].filter((C) => C.length)), n = (C) => {
    Pe.value = C ? Pe.value + 1 : Pe.value - 1;
    let M = null;
    e.value[_e.value] && (M = e.value[_e.value][Pe.value]), M || (Pe.value = C ? Pe.value - 1 : Pe.value + 1);
  }, a = (C) => {
    if (_e.value === 0 && !C || _e.value === e.value.length && C)
      return;
    _e.value = C ? _e.value + 1 : _e.value - 1, e.value[_e.value] ? e.value[_e.value] && !e.value[_e.value][Pe.value] && Pe.value !== 0 && (Pe.value = e.value[_e.value].length - 1) : _e.value = C ? _e.value - 1 : _e.value + 1;
  }, t = (C) => {
    let M = null;
    e.value[_e.value] && (M = e.value[_e.value][Pe.value]), M ? M.focus({ preventScroll: !_t.value }) : Pe.value = C ? Pe.value - 1 : Pe.value + 1;
  }, r = () => {
    n(!0), t(!0);
  }, c = () => {
    n(!1), t(!1);
  }, p = () => {
    a(!1), t(!0);
  }, b = () => {
    a(!0), t(!0);
  }, O = (C, M) => {
    ve[M] = C;
  }, L = (C, M) => {
    ve[M] = C;
  }, Y = () => {
    Pe.value = 0, _e.value = 0;
  };
  return {
    buildMatrix: O,
    buildMultiLevelMatrix: L,
    setTimePickerBackRef: (C) => {
      jt.value = C;
    },
    setSelectionGrid: (C) => {
      _t.value = C, Y(), C || (ve.selectionGrid = []);
    },
    setTimePicker: (C, M = !1) => {
      Kt.value = C, Gt.value = M, Y(), C || (ve.timePicker[0] = [], ve.timePicker[1] = []);
    },
    setTimePickerElements: (C, M = 0) => {
      ve.timePicker[M] = C;
    },
    arrowRight: r,
    arrowLeft: c,
    arrowUp: p,
    arrowDown: b,
    clearArrowNav: () => {
      ve.monthYear = [], ve.calendar = [], ve.time = [], ve.actionRow = [], ve.selectionGrid = [], ve.timePicker[0] = [], ve.timePicker[1] = [], _t.value = !1, Kt.value = !1, Gt.value = !1, xt.value = !1, Y(), jt.value = null;
    },
    setMonthPicker: (C) => {
      xt.value = C, Y();
    },
    refSets: ve
  };
}, Pn = (e) => Array.isArray(e), tt = (e) => Array.isArray(e), Nn = (e) => Array.isArray(e) && e.length === 2, Cl = (e, n, a, t) => {
  const {
    getDefaultStartTime: r,
    isDisabled: c,
    sanitizeDate: p,
    getWeekFromDate: b,
    setDateMonthOrYear: O,
    validateMonthYearInRange: L,
    defaults: Y
  } = Ye(e), i = F({
    get: () => e.internalModelValue,
    set: (s) => {
      !e.readonly && !e.disabled && n("update:internal-model-value", s);
    }
  }), _ = U([]);
  wt(i, () => x());
  const N = U([{ month: he(w()), year: ge(w()) }]), B = kt({
    hours: e.range ? [je(w()), je(w())] : je(w()),
    minutes: e.range ? [Ke(w()), Ke(w())] : Ke(w()),
    seconds: e.range ? [0, 0] : 0
  }), Z = F(
    () => (s) => N.value[s] ? N.value[s].month : 0
  ), ee = F(
    () => (s) => N.value[s] ? N.value[s].year : 0
  ), C = (s, $, W) => {
    N.value[s].month = $ === null ? N.value[s].month : $, N.value[s].year = W === null ? N.value[s].year : W;
  }, M = (s, $) => {
    B[s] = $;
  };
  Fe(() => {
    i.value || (e.startDate && (C(0, he(w(e.startDate)), ge(w(e.startDate))), Y.value.multiCalendars && ze(0)), Y.value.startTime && g()), x(!0);
  });
  const x = (s = !1) => {
    if (i.value)
      return Array.isArray(i.value) ? R(s) : te(i.value);
    if (e.timePicker)
      return j();
    if (e.monthPicker && !e.range)
      return J();
    if (e.yearPicker && !e.range)
      return I();
    if (Y.value.multiCalendars)
      return q(w(), s);
  }, q = (s, $ = !1) => {
    if ((!Y.value.multiCalendars || !e.multiStatic || $) && C(0, he(s), ge(s)), Y.value.multiCalendars)
      for (let W = 1; W <= Y.value.multiCalendars; W++) {
        const ae = Ne(w(), { month: Z.value(W - 1), year: ee.value(W - 1) }), v = Vn(ae, { months: 1 });
        N.value[W] = { month: he(v), year: ge(v) };
      }
  }, te = (s) => {
    q(s), M("hours", je(s)), M("minutes", Ke(s)), M("seconds", dt(s));
  }, P = (s, $) => {
    q(s[0], $);
    const W = (ae) => [
      ae(s[0]),
      s[1] ? ae(s[1]) : ae(w())
    ];
    M("hours", W(je)), M("minutes", W(Ke)), M("seconds", W(dt));
  }, m = (s, $) => {
    if (e.range && !e.multiDates)
      return P(s, $);
    if (e.multiDates) {
      const W = s[s.length - 1];
      return te(W);
    }
  }, R = (s) => {
    const $ = i.value;
    m($, s), Y.value.multiCalendars && e.multiCalendarsSolo && T();
  }, j = () => {
    if (g(), !e.range)
      i.value = Ve(w(), B.hours, B.minutes, H());
    else {
      const s = B.hours, $ = B.minutes;
      i.value = [
        Ve(w(), s[0], $[0], H()),
        Ve(w(), s[1], $[1], H(!1))
      ];
    }
  }, J = () => {
    i.value = O(w(), Z.value(0), ee.value(0));
  }, I = () => {
    i.value = w();
  }, H = (s = !0) => e.enableSeconds ? Array.isArray(B.seconds) ? s ? B.seconds[0] : B.seconds[1] : B.seconds : 0, g = () => {
    const s = r();
    if (s) {
      const $ = Array.isArray(s), W = $ ? [+s[0].hours, +s[1].hours] : +s.hours, ae = $ ? [+s[0].minutes, +s[1].minutes] : +s.minutes, v = $ ? [+s[0].seconds, +s[1].seconds] : +s.seconds;
      M("hours", W), M("minutes", ae), e.enableSeconds && M("seconds", v);
    }
  }, d = () => Array.isArray(i.value) && i.value.length ? i.value[i.value.length - 1] : null, T = () => {
    if (Array.isArray(i.value) && i.value.length === 2) {
      const s = w(
        w(i.value[1] ? i.value[1] : at(i.value[0], 1))
      ), [$, W] = [he(i.value[0]), ge(i.value[0])], [ae, v] = [he(i.value[1]), ge(i.value[1])];
      ($ !== ae || $ === ae && W !== v) && e.multiCalendarsSolo && C(1, he(s), ge(s));
    }
  }, A = (s) => {
    const $ = at(s, 1);
    return { month: he($), year: ge($) };
  }, z = (s) => {
    const $ = he(w(s)), W = ge(w(s));
    if (C(0, $, W), Y.value.multiCalendars > 0)
      for (let ae = 1; ae < Y.value.multiCalendars; ae++) {
        const v = A(
          Ne(w(s), { year: Z.value(ae - 1), month: ee.value(ae - 1) })
        );
        C(ae, v.month, v.year);
      }
  }, l = (s) => {
    if (i.value && Array.isArray(i.value))
      if (i.value.some(($) => me(s, $))) {
        const $ = i.value.filter((W) => !me(W, s));
        i.value = $.length ? $ : null;
      } else
        (e.multiDatesLimit && +e.multiDatesLimit > i.value.length || !e.multiDatesLimit) && i.value.push(s);
    else
      i.value = [s];
  }, f = (s, $) => {
    const W = Ie(s, $) ? $ : s, ae = Ie($, s) ? $ : s;
    return gn({ start: W, end: ae });
  }, k = (s) => {
    if (Array.isArray(i.value) && i.value[0]) {
      const $ = aa(s, i.value[0]), W = f(i.value[0], s), ae = W.length === 1 ? 0 : W.filter((K) => c(K)).length, v = Math.abs($) - ae;
      if (e.minRange && e.maxRange)
        return v >= +e.minRange && v <= +e.maxRange;
      if (e.minRange)
        return v >= +e.minRange;
      if (e.maxRange)
        return v <= +e.maxRange;
    }
    return !0;
  }, V = (s) => Array.isArray(i.value) && i.value.length === 2 ? e.fixedStart && (Ie(s, i.value[0]) || me(s, i.value[0])) ? [i.value[0], s] : e.fixedEnd && (Ce(s, i.value[1]) || me(s, i.value[1])) ? [s, i.value[1]] : i.value : [], se = () => {
    e.autoApply && n("auto-apply");
  }, y = () => {
    e.autoApply && n("select-date");
  }, o = (s) => !gn({ start: s[0], end: s[1] }).some((W) => c(W)), G = (s) => (i.value = b(w(s.value)), se()), ye = (s) => {
    const $ = Ve(w(s.value), B.hours, B.minutes, H());
    e.multiDates ? l($) : i.value = $, a(), se();
  }, de = () => {
    _.value = i.value ? i.value.slice() : [], _.value.length === 2 && !(e.fixedStart || e.fixedEnd) && (_.value = []);
  }, be = (s, $) => {
    const W = [w(s.value), ct(w(s.value), +e.autoRange)];
    o(W) && ($ && z(s.value), _.value = W);
  }, Le = (s) => {
    _.value = V(w(s.value));
  }, ne = (s) => e.noDisabledRange ? f(_.value[0], s).some((W) => c(W)) : !1, Ze = (s, $) => {
    if (de(), e.autoRange)
      return be(s, $);
    if (e.fixedStart || e.fixedEnd)
      return Le(s);
    _.value[0] ? k(w(s.value)) && !ne(s.value) && (Ce(w(s.value), w(_.value[0])) ? _.value.unshift(w(s.value)) : _.value[1] = w(s.value)) : _.value[0] = w(s.value);
  }, le = (s) => {
    _.value[s] = Ve(
      _.value[s],
      B.hours[s],
      B.minutes[s],
      H(s !== 1)
    );
  }, fe = () => {
    _.value.length && (_.value[0] && !_.value[1] ? le(0) : (le(0), le(1), a()), i.value = _.value.slice(), _.value[0] && _.value[1] && e.autoApply && n("auto-apply"), _.value[0] && !_.value[1] && e.modelAuto && e.autoApply && n("auto-apply"));
  }, $e = (s, $ = !1) => {
    if (!(c(s.value) || !s.current && e.hideOffsetDates)) {
      if (e.weekPicker)
        return G(s);
      if (!e.range)
        return ye(s);
      tt(B.hours) && tt(B.minutes) && !e.multiDates && (Ze(s, $), fe());
    }
  }, Qe = (s) => {
    const $ = s.find((W) => W.current);
    return $ ? na($.value) : "";
  }, ze = (s) => {
    for (let $ = s - 1; $ >= 0; $--) {
      const W = gt(Ne(w(), { month: Z.value($ + 1), year: ee.value($ + 1) }), 1);
      C($, he(W), ge(W));
    }
    for (let $ = s + 1; $ <= Y.value.multiCalendars - 1; $++) {
      const W = at(Ne(w(), { month: Z.value($ - 1), year: ee.value($ - 1) }), 1);
      C($, he(W), ge(W));
    }
  }, et = (s) => O(w(), Z.value(s), ee.value(s)), vt = (s) => Ve(s, B.hours, B.minutes, H()), Bt = (s, $) => {
    const W = e.monthPicker ? Z.value(s) !== $.month || !$.fromNav : ee.value(s) !== $.year;
    if (C(s, $.month, $.year), Y.value.multiCalendars && !e.multiCalendarsSolo && ze(s), e.monthPicker || e.yearPicker)
      if (e.range) {
        if (W) {
          let ae = i.value ? i.value.slice() : [];
          ae.length === 2 && ae[1] !== null && (ae = []), ae.length ? Ce(et(s), ae[0]) ? ae.unshift(et(s)) : ae[1] = et(s) : ae = [et(s)], i.value = ae;
        }
      } else
        i.value = et(s);
    n("update-month-year", { instance: s, month: $.month, year: $.year }), t(e.multiCalendarsSolo ? s : void 0);
  }, Yt = async (s = !1) => {
    if (e.autoApply && (e.monthPicker || e.yearPicker)) {
      await bt();
      const $ = e.monthPicker ? s : !1;
      e.range ? n("auto-apply", $ || !i.value || i.value.length === 1) : n("auto-apply", $);
    }
    a();
  }, $t = (s, $) => {
    const W = Ne(w(), { month: Z.value($), year: ee.value($) }), ae = s < 0 ? at(W, 1) : gt(W, 1);
    L(he(ae), ge(ae), s < 0, e.preventMinMaxNavigation) && (C($, he(ae), ge(ae)), Y.value.multiCalendars && !e.multiCalendarsSolo && ze($), t());
  }, mt = (s) => {
    Pn(s) && Pn(i.value) && tt(B.hours) && tt(B.minutes) ? (s[0] && i.value[0] && (i.value[0] = Ve(s[0], B.hours[0], B.minutes[0], H())), s[1] && i.value[1] && (i.value[1] = Ve(s[1], B.hours[1], B.minutes[1], H(!1)))) : e.multiDates && Array.isArray(i.value) ? i.value[i.value.length - 1] = vt(s) : !e.range && !Nn(s) && (i.value = vt(s)), n("time-update");
  }, Vt = (s, $ = !0, W = !1) => {
    const ae = $ ? s : B.hours, v = !$ && !W ? s : B.minutes, K = W ? s : B.seconds;
    if (e.range && Nn(i.value) && tt(ae) && tt(v) && tt(K) && !e.disableTimeRangeValidation) {
      const ke = (Ee) => Ve(i.value[Ee], ae[Ee], v[Ee], K[Ee]), Me = (Ee) => cn(i.value[Ee], 0);
      if (me(i.value[0], i.value[1]) && (un(ke(0), Me(1)) || sn(ke(1), Me(0))))
        return;
    }
    if (M("hours", ae), M("minutes", v), M("seconds", K), i.value)
      if (e.multiDates) {
        const ke = d();
        ke && mt(ke);
      } else
        mt(i.value);
    else
      e.timePicker && mt(e.range ? [w(), w()] : w());
    a();
  }, Lt = (s, $) => {
    e.monthChangeOnScroll && $t(e.monthChangeOnScroll !== "inverse" ? -s.deltaY : s.deltaY, $);
  }, Et = (s, $, W = !1) => {
    e.monthChangeOnArrows && e.vertical === W && Dt(s, $);
  }, Dt = (s, $) => {
    $t(s === "right" ? -1 : 1, $);
  };
  return {
    time: B,
    month: Z,
    year: ee,
    modelValue: i,
    monthYearSelect: Yt,
    isDisabled: c,
    updateTime: Vt,
    getWeekNum: Qe,
    selectDate: $e,
    updateMonthYear: Bt,
    handleScroll: Lt,
    getMarker: (s) => e.markers.find(($) => me(p(s.value), p($.date))),
    handleArrow: Et,
    handleSwipe: Dt,
    selectCurrentDate: () => {
      e.range ? i.value && Array.isArray(i.value) && i.value[0] ? i.value = Ce(w(), i.value[0]) ? [w(), i.value[0]] : [i.value[0], w()] : i.value = [w()] : i.value = w(), y();
    },
    presetDateRange: (s, $) => {
      $ || s.length && s.length <= 2 && e.range && (i.value = s.map((W) => w(W)), y());
    }
  };
}, Pl = (e, n, a) => {
  const t = U(), {
    getZonedToUtc: r,
    getZonedDate: c,
    formatDate: p,
    getDefaultPattern: b,
    checkRangeEnabled: O,
    checkPartialRangeValue: L,
    isValidDate: Y,
    setDateMonthOrYear: i,
    defaults: _
  } = Ye(n), N = U("");
  wt(t, () => {
    e("internal-model-change", t.value);
  });
  const B = (o) => {
    const G = o || w();
    return {
      hours: je(G),
      minutes: Ke(G),
      seconds: n.enableSeconds ? dt(G) : 0
    };
  }, Z = (o) => ({ month: he(o), year: ge(o) }), ee = (o) => Array.isArray(o) ? O(() => [
    rt(w(), o[0]),
    o[1] ? rt(w(), o[1]) : L()
  ]) : rt(w(), +o), C = (o) => Array.isArray(o) ? [
    Ve(null, +o[0].hours, +o[0].minutes, o[0].seconds),
    Ve(null, +o[1].hours, +o[1].minutes, o[1].seconds)
  ] : Ve(null, o.hours, o.minutes, o == null ? void 0 : o.seconds), M = (o) => Array.isArray(o) ? O(() => [
    i(null, +o[0].month, +o[0].year),
    o[1] ? i(null, +o[1].month, +o[1].year) : L()
  ]) : i(null, +o.month, +o.year), x = (o) => {
    if (Array.isArray(o))
      return o.map((G) => z(G));
    throw new Error(Rt.dateArr("multi-dates"));
  }, q = (o) => {
    if (Array.isArray(o))
      return [w(o[0]), w(o[1])];
    throw new Error(Rt.dateArr("week-picker"));
  }, te = (o) => n.modelAuto ? Array.isArray(o) ? [z(o[0]), z(o[1])] : n.autoApply ? [z(o)] : [z(o), null] : Array.isArray(o) ? O(() => [
    z(o[0]),
    o[1] ? z(o[1]) : L()
  ]) : z(o), P = () => {
    Array.isArray(t.value) && n.range && t.value.length === 1 && t.value.push(L());
  }, m = () => {
    const o = t.value;
    return [
      l(o[0]),
      o[1] ? l(o[1]) : L()
    ];
  }, R = () => t.value[1] ? m() : l(De(t.value[0])), j = () => t.value.map((o) => l(o)), J = () => (P(), n.modelAuto ? R() : n.multiDates ? j() : Array.isArray(t.value) ? O(() => m()) : l(De(t.value))), I = (o) => o ? n.timePicker ? C(De(o)) : n.monthPicker ? M(De(o)) : n.yearPicker ? ee(De(o)) : n.multiDates ? x(De(o)) : n.weekPicker ? q(De(o)) : te(De(o)) : null, H = (o) => {
    const G = I(o);
    Y(De(G)) ? (t.value = De(G), A()) : (t.value = null, N.value = "");
  }, g = () => {
    var G;
    const o = (ye) => {
      var de;
      return ht(ye, (de = _.value.textInputOptions) == null ? void 0 : de.format);
    };
    return `${o(t.value[0])} ${(G = _.value.textInputOptions) == null ? void 0 : G.rangeSeparator} ${t.value[1] ? o(t.value[1]) : ""}`;
  }, d = () => {
    var o;
    return a.value && t.value ? Array.isArray(t.value) ? g() : ht(t.value, (o = _.value.textInputOptions) == null ? void 0 : o.format) : p(t.value);
  }, T = () => {
    var o;
    return t.value ? n.multiDates ? t.value.map((G) => p(G)).join("; ") : n.textInput && typeof ((o = _.value.textInputOptions) == null ? void 0 : o.format) == "string" ? d() : p(t.value) : "";
  }, A = () => {
    !n.format || typeof n.format == "string" ? N.value = T() : N.value = n.format(t.value);
  }, z = (o) => {
    if (n.utc) {
      const G = new Date(o);
      return n.utc === "preserve" ? new Date(G.getTime() + G.getTimezoneOffset() * 6e4) : G;
    }
    return n.modelType ? n.modelType === "date" || n.modelType === "timestamp" ? c(new Date(o)) : n.modelType === "format" && (typeof n.format == "string" || !n.format) ? Jt(o, b(), new Date()) : c(Jt(o, n.modelType, new Date())) : c(new Date(o));
  }, l = (o) => n.utc ? Za(o, n.utc === "preserve") : n.modelType ? n.modelType === "timestamp" ? +r(o) : n.modelType === "format" && (typeof n.format == "string" || !n.format) ? p(r(o)) : p(r(o), n.modelType) : r(o), f = (o) => {
    e("update:model-value", o);
  }, k = (o) => Array.isArray(t.value) ? [
    o(t.value[0]),
    t.value[1] ? o(t.value[1]) : L()
  ] : o(De(t.value)), V = (o) => f(De(k(o)));
  return {
    inputValue: N,
    internalModelValue: t,
    checkBeforeEmit: () => t.value ? n.range ? n.partialRange ? t.value.length >= 1 : t.value.length === 2 : !!t.value : !1,
    parseExternalModelValue: H,
    formatInputValue: A,
    emitModelValue: () => (A(), n.monthPicker ? V(Z) : n.timePicker ? V(B) : n.yearPicker ? V(ge) : n.weekPicker ? f(t.value) : f(J()))
  };
}, Nl = (e, n) => {
  const { validateMonthYearInRange: a, validateMaxDate: t, validateMinDate: r, defaults: c } = Ye(e), p = (i, _) => {
    let N = i;
    return c.value.filters.months.includes(he(N)) ? (N = _ ? at(i, 1) : gt(i, 1), p(N, _)) : N;
  }, b = (i, _) => {
    let N = i;
    return c.value.filters.years.includes(ge(N)) ? (N = _ ? la(i, 1) : ra(i, 1), b(N, _)) : N;
  }, O = (i) => {
    const _ = Ne(new Date(), { month: e.month, year: e.year });
    let N = i ? at(_, 1) : gt(_, 1), B = he(N), Z = ge(N);
    c.value.filters.months.includes(B) && (N = p(N, i), B = he(N), Z = ge(N)), c.value.filters.years.includes(Z) && (N = b(N, i), Z = ge(N)), a(B, Z, i, e.preventMinMaxNavigation) && L(B, Z);
  }, L = (i, _) => {
    n("update-month-year", { month: i, year: _ });
  }, Y = F(() => (i) => {
    if (!e.preventMinMaxNavigation || i && !e.maxDate || !i && !e.minDate)
      return !1;
    const _ = Ne(new Date(), { month: e.month, year: e.year }), N = i ? at(_, 1) : gt(_, 1), B = [he(N), ge(N)];
    return i ? !t(...B) : !r(...B);
  });
  return { handleMonthYearChange: O, isDisabled: Y, updateMonthYear: L };
};
var Nt = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(Nt || {});
const Rl = (e, n, a, t) => {
  const r = U({
    top: "0",
    left: "0",
    transform: "none"
  }), c = U(!1), p = qt(t, "teleportCenter");
  wt(p, () => {
    ee();
  });
  const b = (P) => {
    const m = P.getBoundingClientRect();
    return {
      left: m.left + window.scrollX,
      top: m.top + window.scrollY
    };
  }, O = (P) => {
    const m = P.getBoundingClientRect();
    let R = 0, j = 0;
    for (; P && !isNaN(P.offsetLeft) && !isNaN(P.offsetTop); )
      R += P.offsetLeft - P.scrollLeft, j = m.top + P.scrollTop, P = P.offsetParent;
    return { top: j, left: R };
  }, L = (P, m) => {
    r.value.left = `${P + m}px`, r.value.transform = "translateX(-100%)";
  }, Y = (P) => {
    r.value.left = `${P}px`, r.value.transform = "translateX(0)";
  }, i = (P, m, R = !1) => {
    t.position === Nt.left && Y(P), t.position === Nt.right && L(P, m), t.position === Nt.center && (r.value.left = `${P + m / 2}px`, r.value.transform = R ? "translate(-50%, -50%)" : "translateX(-50%)");
  }, _ = (P) => {
    const { width: m, height: R } = P.getBoundingClientRect(), { top: j, left: J } = t.altPosition ? O(P) : b(P);
    return { top: j, left: J, width: m, height: R };
  }, N = () => {
    const P = Se(n);
    if (P) {
      const { top: m, left: R, width: j, height: J } = _(P);
      r.value.top = `${m + J / 2}px`, r.value.transform = "translateY(-50%)", i(R, j, !0);
    }
  }, B = () => {
    r.value.left = "50%", r.value.top = "50%", r.value.transform = "translate(-50%, -50%)", r.value.position = "fixed";
  }, Z = () => {
    const P = Se(n);
    r.value = t.altPosition(P);
  }, ee = (P = !0) => {
    if (!t.inline)
      return p.value ? B() : t.altPosition && typeof t.altPosition != "boolean" ? Z() : (P && a("recalculate-position"), te());
  }, C = (P, m) => {
    const { top: R, left: j, height: J, width: I } = _(P);
    r.value.top = `${J + R + +t.offset}px`, i(j, I), x(P, m), c.value = !1;
  }, M = (P, m) => {
    const { top: R, left: j, width: J } = _(P), { height: I } = m.getBoundingClientRect();
    r.value.top = `${R - I - +t.offset}px`, i(j, J), x(P, m), c.value = !0;
  }, x = (P, m) => {
    if (t.autoPosition) {
      const { left: R, width: j } = _(P), { left: J, right: I } = m.getBoundingClientRect();
      if (J < 0)
        return Y(R);
      if (I > document.documentElement.clientWidth)
        return L(R, j);
    }
  }, q = (P, m) => {
    const { height: R } = m.getBoundingClientRect(), { top: j, height: J } = P.getBoundingClientRect(), H = window.innerHeight - j - J, g = j;
    return R <= H ? C(P, m) : R > H && R <= g ? M(P, m) : H >= g ? C(P, m) : M(P, m);
  }, te = () => {
    const P = Se(n), m = Se(e);
    if (P && m)
      return t.autoPosition ? q(P, m) : C(P, m);
  };
  return { openOnTop: c, menuPosition: r, setMenuPosition: ee, setInitialPosition: N };
}, it = [
  { name: "clock-icon", use: ["time", "calendar"] },
  { name: "arrow-left", use: ["month-year", "calendar"] },
  { name: "arrow-right", use: ["month-year", "calendar"] },
  { name: "arrow-up", use: ["time", "calendar"] },
  { name: "arrow-down", use: ["time", "calendar"] },
  { name: "calendar-icon", use: ["month-year", "time", "calendar"] },
  { name: "day", use: ["calendar"] },
  { name: "month-overlay-value", use: ["calendar", "month-year"] },
  { name: "year-overlay-value", use: ["calendar", "month-year"] },
  { name: "year-overlay", use: ["month-year"] },
  { name: "month-overlay", use: ["month-year"] },
  { name: "month-overlay-header", use: ["month-year"] },
  { name: "year-overlay-header", use: ["month-year"] },
  { name: "hours-overlay-value", use: ["calendar", "time"] },
  { name: "minutes-overlay-value", use: ["calendar", "time"] },
  { name: "seconds-overlay-value", use: ["calendar", "time"] },
  { name: "hours", use: ["calendar", "time"] },
  { name: "minutes", use: ["calendar", "time"] },
  { name: "month", use: ["calendar", "month-year"] },
  { name: "year", use: ["calendar", "month-year"] },
  { name: "action-select", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar"] },
  { name: "marker-tooltip", use: ["calendar"] },
  { name: "now-button", use: [] },
  { name: "time-picker-overlay", use: ["calendar", "time"] },
  { name: "am-pm-button", use: ["calendar", "time"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "right-sidebar", use: ["menu"] },
  { name: "month-year", use: ["month-year"] },
  { name: "time-picker", use: ["menu"] },
  { name: "action-row", use: ["menu"] }
], Il = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], Ol = {
  all: () => it,
  monthYear: () => it.filter((e) => e.use.includes("month-year")),
  input: () => Il,
  timePicker: () => it.filter((e) => e.use.includes("time")),
  action: () => it.filter((e) => e.use.includes("action")),
  calendar: () => it.filter((e) => e.use.includes("calendar")),
  menu: () => it.filter((e) => e.use.includes("menu"))
}, lt = (e, n, a) => {
  const t = [];
  return Ol[n]().forEach((r) => {
    e[r.name] && t.push(r.name);
  }), a && a.length && a.forEach((r) => {
    r.slot && t.push(r.slot);
  }), t;
}, Ot = (e) => ({ transitionName: F(() => (a) => e && typeof e != "boolean" ? a ? e.open : e.close : ""), showTransition: !!e }), Je = {
  multiCalendars: { type: [Boolean, Number, String], default: null },
  modelValue: { type: [String, Date, Array, Object, Number], default: null },
  modelType: { type: String, default: null },
  position: { type: String, default: "center" },
  dark: { type: Boolean, default: !1 },
  format: {
    type: [String, Function],
    default: () => null
  },
  closeOnScroll: { type: Boolean, default: !1 },
  autoPosition: { type: Boolean, default: !0 },
  closeOnAutoApply: { type: Boolean, default: !0 },
  teleport: { type: [String, Object], default: "body" },
  altPosition: { type: [Boolean, Function], default: !1 },
  transitions: { type: [Boolean, Object], default: !0 },
  formatLocale: { type: Object, default: null },
  utc: { type: [Boolean, String], default: !1 },
  ariaLabels: { type: Object, default: () => ({}) },
  offset: { type: [Number, String], default: 10 },
  hideNavigation: { type: Array, default: () => [] },
  timezone: { type: String, default: null },
  vertical: { type: Boolean, default: !1 },
  disableMonthYearSelect: { type: Boolean, default: !1 },
  menuClassName: { type: String, default: null },
  dayClass: { type: Function, default: null },
  yearRange: { type: Array, default: () => [1900, 2100] },
  multiCalendarsSolo: { type: Boolean, default: !1 },
  calendarCellClassName: { type: String, default: null },
  enableTimePicker: { type: Boolean, default: !0 },
  autoApply: { type: Boolean, default: !1 },
  disabledDates: { type: [Array, Function], default: () => [] },
  monthNameFormat: { type: String, default: "short" },
  startDate: { type: [Date, String], default: null },
  startTime: { type: [Object, Array], default: null },
  monthYearComponent: { type: Object, default: null },
  timePickerComponent: { type: Object, default: null },
  actionRowComponent: { type: Object, default: null },
  hideOffsetDates: { type: Boolean, default: !1 },
  autoRange: { type: [Number, String], default: null },
  noToday: { type: Boolean, default: !1 },
  disabledWeekDays: { type: Array, default: () => [] },
  allowedDates: { type: Array, default: () => [] },
  showNowButton: { type: Boolean, default: !1 },
  nowButtonLabel: { type: String, default: "Now" },
  markers: { type: Array, default: () => [] },
  modeHeight: { type: [Number, String], default: 255 },
  escClose: { type: Boolean, default: !0 },
  spaceConfirm: { type: Boolean, default: !0 },
  monthChangeOnArrows: { type: Boolean, default: !0 },
  presetRanges: { type: Array, default: () => [] },
  flow: { type: Array, default: () => [] },
  preventMinMaxNavigation: { type: Boolean, default: !1 },
  minRange: { type: [Number, String], default: null },
  maxRange: { type: [Number, String], default: null },
  multiDatesLimit: { type: [Number, String], default: null },
  reverseYears: { type: Boolean, default: !1 },
  keepActionRow: { type: Boolean, default: !1 },
  weekPicker: { type: Boolean, default: !1 },
  filters: { type: Object, default: () => ({}) },
  arrowNavigation: { type: Boolean, default: !1 },
  multiStatic: { type: Boolean, default: !0 },
  disableTimeRangeValidation: { type: Boolean, default: !1 },
  highlight: {
    type: [Array, Function],
    default: null
  },
  highlightWeekDays: {
    type: Array,
    default: null
  },
  highlightDisabledDays: { type: Boolean, default: !1 },
  teleportCenter: { type: Boolean, default: !1 },
  locale: { type: String, default: "en-Us" },
  weekNumName: { type: String, default: "W" },
  weekStart: { type: [Number, String], default: 1 },
  weekNumbers: { type: Boolean, default: !1 },
  calendarClassName: { type: String, default: null },
  noSwipe: { type: Boolean, default: !1 },
  monthChangeOnScroll: { type: [Boolean, String], default: !0 },
  dayNames: {
    type: [Function, Array],
    default: null
  },
  monthPicker: { type: Boolean, default: !1 },
  customProps: { type: Object, default: null },
  yearPicker: { type: Boolean, default: !1 },
  modelAuto: { type: Boolean, default: !1 },
  selectText: { type: String, default: "Select" },
  cancelText: { type: String, default: "Cancel" },
  previewFormat: {
    type: [String, Function],
    default: () => ""
  },
  multiDates: { type: Boolean, default: !1 },
  partialRange: { type: Boolean, default: !0 },
  ignoreTimeValidation: { type: Boolean, default: !1 },
  minDate: { type: [Date, String], default: null },
  maxDate: { type: [Date, String], default: null },
  minTime: { type: Object, default: null },
  maxTime: { type: Object, default: null },
  name: { type: String, default: null },
  placeholder: { type: String, default: "" },
  hideInputIcon: { type: Boolean, default: !1 },
  clearable: { type: Boolean, default: !0 },
  state: { type: Boolean, default: null },
  required: { type: Boolean, default: !1 },
  autocomplete: { type: String, default: "off" },
  inputClassName: { type: String, default: null },
  inlineWithInput: { type: Boolean, default: !1 },
  textInputOptions: { type: Object, default: () => null },
  fixedStart: { type: Boolean, default: !1 },
  fixedEnd: { type: Boolean, default: !1 },
  timePicker: { type: Boolean, default: !1 },
  enableSeconds: { type: Boolean, default: !1 },
  is24: { type: Boolean, default: !0 },
  noHoursOverlay: { type: Boolean, default: !1 },
  noMinutesOverlay: { type: Boolean, default: !1 },
  noSecondsOverlay: { type: Boolean, default: !1 },
  hoursGridIncrement: { type: [String, Number], default: 1 },
  minutesGridIncrement: { type: [String, Number], default: 5 },
  secondsGridIncrement: { type: [String, Number], default: 5 },
  hoursIncrement: { type: [Number, String], default: 1 },
  minutesIncrement: { type: [Number, String], default: 1 },
  secondsIncrement: { type: [Number, String], default: 1 },
  range: { type: Boolean, default: !1 },
  uid: { type: String, default: null },
  disabled: { type: Boolean, default: !1 },
  readonly: { type: Boolean, default: !1 },
  inline: { type: Boolean, default: !1 },
  textInput: { type: Boolean, default: !1 },
  onClickOutside: { type: Function, default: null },
  noDisabledRange: { type: Boolean, default: !1 },
  sixWeeks: { type: Boolean, default: !1 }
}, Bl = ["aria-label", "aria-disabled", "aria-readonly"], Yl = {
  key: 1,
  class: "dp__input_wrap"
}, Vl = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "onKeydown"], Ll = {
  key: 2,
  class: "dp__input_icon"
}, El = {
  key: 4,
  class: "dp__clear_icon"
}, Fl = /* @__PURE__ */ Ue({
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" },
    ...Je
  },
  emits: [
    "clear",
    "open",
    "update:input-value",
    "set-input-date",
    "close",
    "select-date",
    "set-empty-date",
    "toggle",
    "focus-prev",
    "focus",
    "blur"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { getDefaultPattern: r, isValidDate: c, defaults: p } = Ye(t), b = U(), O = U(null), L = U(!1), Y = F(
      () => ({
        dp__pointer: !t.disabled && !t.readonly && !t.textInput,
        dp__disabled: t.disabled,
        dp__input_readonly: !t.textInput,
        dp__input: !0,
        dp__input_icon_pad: !t.hideInputIcon,
        dp__input_valid: t.state,
        dp__input_invalid: t.state === !1,
        dp__input_focus: L.value || t.isMenuOpen,
        dp__input_reg: !t.textInput,
        [t.inputClassName]: !!t.inputClassName
      })
    ), i = () => {
      a("set-input-date", null), t.autoApply && (a("set-empty-date"), b.value = null);
    }, _ = (m) => {
      var R;
      return Ga(m, ((R = p.value.textInputOptions) == null ? void 0 : R.format) || r());
    }, N = (m) => {
      const { rangeSeparator: R } = p.value.textInputOptions;
      if (t.range) {
        const [j, J] = m.split(`${R}`);
        if (j && J) {
          const I = _(j.trim()), H = _(J.trim());
          b.value = I && H ? [I, H] : null;
        }
      } else
        b.value = _(m);
    }, B = (m) => {
      var j;
      const { value: R } = m.target;
      R !== "" ? (((j = p.value.textInputOptions) == null ? void 0 : j.openMenu) && !t.isMenuOpen && a("open"), N(R), a("set-input-date", b.value)) : i(), a("update:input-value", R);
    }, Z = () => {
      var m, R;
      ((m = p.value.textInputOptions) == null ? void 0 : m.enterSubmit) && c(b.value) && t.inputValue !== "" ? (a("set-input-date", b.value, !0), b.value = null) : ((R = p.value.textInputOptions) == null ? void 0 : R.enterSubmit) && t.inputValue === "" && (b.value = null, a("clear"));
    }, ee = () => {
      var m, R;
      ((m = p.value.textInputOptions) == null ? void 0 : m.tabSubmit) && c(b.value) && t.inputValue !== "" ? (a("set-input-date", b.value, !0), b.value = null) : ((R = p.value.textInputOptions) == null ? void 0 : R.tabSubmit) && t.inputValue === "" && (b.value = null, a("clear"));
    }, C = () => {
      L.value = !0, a("focus");
    }, M = (m) => {
      var R;
      m.preventDefault(), m.stopImmediatePropagation(), m.stopPropagation(), t.textInput && ((R = p.value.textInputOptions) == null ? void 0 : R.openMenu) && !t.inlineWithInput ? t.isMenuOpen ? p.value.textInputOptions.enterSubmit && a("select-date") : a("open") : t.textInput || a("toggle");
    }, x = () => {
      L.value = !1, t.isMenuOpen || a("blur"), t.autoApply && t.textInput && b.value && (a("set-input-date", b.value), a("select-date"), b.value = null);
    }, q = () => {
      a("clear");
    }, te = (m) => {
      t.textInput || m.preventDefault();
    };
    return n({
      focusInput: () => {
        O.value && O.value.focus({ preventScroll: !0 });
      }
    }), (m, R) => {
      var j;
      return h(), S("div", {
        onClick: M,
        "aria-label": (j = u(p).ariaLabels) == null ? void 0 : j.input,
        role: "textbox",
        "aria-multiline": "false",
        "aria-disabled": m.disabled,
        "aria-readonly": m.readonly
      }, [
        m.$slots.trigger && !m.$slots["dp-input"] && !m.inline ? E(m.$slots, "trigger", { key: 0 }) : D("", !0),
        !m.$slots.trigger && (!m.inline || m.inlineWithInput) ? (h(), S("div", Yl, [
          m.$slots["dp-input"] && !m.$slots.trigger && !m.inline ? E(m.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            onInput: B,
            onEnter: Z,
            onTab: ee,
            onClear: q
          }) : D("", !0),
          m.$slots["dp-input"] ? D("", !0) : (h(), S("input", {
            key: 1,
            ref_key: "inputRef",
            ref: O,
            id: m.uid ? `dp-input-${m.uid}` : void 0,
            name: m.name,
            class: pe(u(Y)),
            inputmode: m.textInput ? "text" : "none",
            placeholder: m.placeholder,
            disabled: m.disabled,
            readonly: m.readonly,
            required: m.required,
            value: e.inputValue,
            autocomplete: m.autocomplete,
            onInput: B,
            onKeydown: [
              oe(M, ["enter"]),
              oe(ee, ["tab"])
            ],
            onBlur: x,
            onFocus: C,
            onKeypress: te
          }, null, 42, Vl)),
          m.$slots["input-icon"] && !m.hideInputIcon ? (h(), S("span", Ll, [
            E(m.$slots, "input-icon")
          ])) : D("", !0),
          !m.$slots["input-icon"] && !m.hideInputIcon && !m.$slots["dp-input"] ? (h(), ce(u(It), {
            key: 3,
            class: "dp__input_icon dp__input_icons"
          })) : D("", !0),
          m.$slots["clear-icon"] && e.inputValue && m.clearable && !m.disabled && !m.readonly ? (h(), S("span", El, [
            E(m.$slots, "clear-icon", { clear: q })
          ])) : D("", !0),
          m.clearable && !m.$slots["clear-icon"] && e.inputValue && !m.disabled && !m.readonly ? (h(), ce(u(ba), {
            key: 5,
            class: "dp__clear_icon dp__input_icons",
            "data-test": "clear-icon",
            onClick: xe(q, ["stop", "prevent"])
          }, null, 8, ["onClick"])) : D("", !0)
        ])) : D("", !0)
      ], 8, Bl);
    };
  }
}), Ul = { class: "dp__selection_preview" }, Hl = { class: "dp__action_buttons" }, Wl = ["onKeydown"], zl = /* @__PURE__ */ Ue({
  __name: "ActionRow",
  props: {
    calendarWidth: { type: Number, default: 0 },
    menuMount: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    ...Je
  },
  emits: ["close-picker", "select-date", "invalid-select"],
  setup(e, { emit: n }) {
    const a = e, { formatDate: t, isValidTime: r, defaults: c } = Ye(a), { buildMatrix: p } = qe(), b = U(null), O = U(null);
    Fe(() => {
      a.arrowNavigation && p([Se(b), Se(O)], "actionRow");
    });
    const L = F(() => a.range && !a.partialRange && a.internalModelValue ? a.internalModelValue.length === 2 : !0), Y = F(() => ({
      dp__action: !0,
      dp__select: !0,
      dp__action_disabled: !i.value || !_.value || !L.value
    })), i = F(() => !a.enableTimePicker || a.ignoreTimeValidation ? !0 : r(a.internalModelValue)), _ = F(() => a.monthPicker ? ee(a.internalModelValue) : !0), N = () => {
      const M = c.value.previewFormat;
      return a.timePicker || a.monthPicker, M(De(a.internalModelValue));
    }, B = () => {
      const M = a.internalModelValue;
      return c.value.multiCalendars > 0 ? `${t(M[0])} - ${t(M[1])}` : [t(M[0]), t(M[1])];
    }, Z = F(() => !a.internalModelValue || !a.menuMount ? "" : typeof c.value.previewFormat == "string" ? Array.isArray(a.internalModelValue) ? a.internalModelValue.length === 2 && a.internalModelValue[1] ? B() : a.multiDates ? a.internalModelValue.map((M) => `${t(M)}`) : a.modelAuto ? `${t(a.internalModelValue[0])}` : `${t(a.internalModelValue[0])} -` : t(a.internalModelValue) : N()), ee = (M) => {
      if (!a.monthPicker)
        return !0;
      let x = !0;
      return a.minDate && a.maxDate ? Ie(w(M), w(a.minDate)) && Ce(w(M), w(a.maxDate)) : (a.minDate && (x = Ie(w(M), w(a.minDate))), a.maxDate && (x = Ce(w(M), w(a.maxDate))), x);
    }, C = () => {
      i.value && _.value && L.value ? n("select-date") : n("invalid-select");
    };
    return (M, x) => (h(), S("div", {
      class: "dp__action_row",
      style: ut(e.calendarWidth ? { width: `${e.calendarWidth}px` } : {})
    }, [
      Q("div", Ul, [
        M.$slots["action-preview"] ? E(M.$slots, "action-preview", {
          key: 0,
          value: e.internalModelValue
        }) : D("", !0),
        M.$slots["action-preview"] ? D("", !0) : (h(), S(ue, { key: 1 }, [
          Array.isArray(u(Z)) ? D("", !0) : (h(), S(ue, { key: 0 }, [
            He(Te(u(Z)), 1)
          ], 64)),
          Array.isArray(u(Z)) ? (h(!0), S(ue, { key: 1 }, we(u(Z), (q, te) => (h(), S("div", { key: te }, Te(q), 1))), 128)) : D("", !0)
        ], 64))
      ]),
      Q("div", Hl, [
        M.$slots["action-select"] ? E(M.$slots, "action-select", {
          key: 0,
          value: e.internalModelValue
        }) : D("", !0),
        M.$slots["action-select"] ? D("", !0) : (h(), S(ue, { key: 1 }, [
          M.inline ? D("", !0) : (h(), S("span", {
            key: 0,
            class: "dp__action dp__cancel",
            ref_key: "cancelButtonRef",
            ref: b,
            tabindex: "0",
            onClick: x[0] || (x[0] = (q) => M.$emit("close-picker")),
            onKeydown: [
              x[1] || (x[1] = oe((q) => M.$emit("close-picker"), ["enter"])),
              x[2] || (x[2] = oe((q) => M.$emit("close-picker"), ["space"]))
            ]
          }, Te(M.cancelText), 545)),
          Q("span", {
            class: pe(u(Y)),
            tabindex: "0",
            onKeydown: [
              oe(C, ["enter"]),
              oe(C, ["space"])
            ],
            onClick: C,
            "data-test": "select-button",
            ref_key: "selectButtonRef",
            ref: O
          }, Te(M.selectText), 43, Wl)
        ], 64))
      ])
    ], 4));
  }
}), jl = ["aria-label"], Kl = {
  class: "dp__calendar_header",
  role: "row"
}, xl = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, Gl = /* @__PURE__ */ Q("div", { class: "dp__calendar_header_separator" }, null, -1), Zl = ["aria-label"], Xl = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, ql = { class: "dp__cell_inner" }, Jl = ["aria-selected", "aria-disabled", "aria-label", "data-test", "onClick", "onKeydown", "onMouseover"], Ql = /* @__PURE__ */ Q("div", { class: "dp__arrow_bottom_tp" }, null, -1), er = /* @__PURE__ */ Ue({
  __name: "Calendar",
  props: {
    mappedDates: { type: Array, default: () => [] },
    getWeekNum: {
      type: Function,
      default: () => ""
    },
    specificMode: { type: Boolean, default: !1 },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    ...Je
  },
  emits: [
    "select-date",
    "set-hover-date",
    "handle-scroll",
    "mount",
    "handle-swipe",
    "handle-space"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { buildMultiLevelMatrix: r } = qe(), { setDateMonthOrYear: c, defaults: p } = Ye(t), b = U(null), O = U({ bottom: "", left: "", transform: "" }), L = U([]), Y = U(null), i = U(!0), _ = U(""), N = U({ startX: 0, endX: 0, startY: 0, endY: 0 }), B = F(() => t.dayNames ? Array.isArray(t.dayNames) ? t.dayNames : t.dayNames(t.locale, +t.weekStart) : pl(t.locale, +t.weekStart));
    Fe(() => {
      a("mount", { cmp: "calendar", refs: L }), t.noSwipe || Y.value && (Y.value.addEventListener("touchstart", R, { passive: !1 }), Y.value.addEventListener("touchend", j, { passive: !1 }), Y.value.addEventListener("touchmove", J, { passive: !1 })), t.monthChangeOnScroll && Y.value && Y.value.addEventListener("wheel", g, { passive: !1 });
    });
    const Z = (d) => d ? t.vertical ? "vNext" : "next" : t.vertical ? "vPrevious" : "previous", ee = (d, T) => {
      if (t.transitions) {
        const A = We(c(w(), t.month, t.year));
        _.value = Ie(We(c(w(), d, T)), A) ? p.value.transitions[Z(!0)] : p.value.transitions[Z(!1)], i.value = !1, bt(() => {
          i.value = !0;
        });
      }
    }, C = F(
      () => ({
        dp__calendar_wrap: !0,
        [t.calendarClassName]: !!t.calendarClassName
      })
    ), M = F(() => (d) => {
      const T = $l(d);
      return {
        dp__marker_dot: T.type === "dot",
        dp__marker_line: T.type === "line"
      };
    }), x = F(() => (d) => me(d, b.value)), q = F(() => ({
      dp__calendar: !0,
      dp__calendar_next: p.value.multiCalendars > 0 && t.instance !== 0
    })), te = F(() => t.specificMode ? { height: `${t.modeHeight}px` } : void 0), P = (d, T, A) => {
      var z, l;
      if (a("set-hover-date", d), (l = (z = d.marker) == null ? void 0 : z.tooltip) != null && l.length) {
        const f = Se(L.value[T][A]);
        if (f) {
          const { width: k, height: V } = f.getBoundingClientRect();
          O.value = {
            bottom: `${V}px`,
            left: `${k / 2}px`,
            transform: "translateX(-50%)"
          }, b.value = d.value;
        }
      }
    }, m = () => {
      b.value = null;
    }, R = (d) => {
      N.value.startX = d.changedTouches[0].screenX, N.value.startY = d.changedTouches[0].screenY;
    }, j = (d) => {
      N.value.endX = d.changedTouches[0].screenX, N.value.endY = d.changedTouches[0].screenY, I();
    }, J = (d) => {
      t.vertical && !t.inline && d.preventDefault();
    }, I = () => {
      const d = t.vertical ? "Y" : "X";
      Math.abs(N.value[`start${d}`] - N.value[`end${d}`]) > 10 && a("handle-swipe", N.value[`start${d}`] > N.value[`end${d}`] ? "right" : "left");
    }, H = (d, T, A) => {
      d && (Array.isArray(L.value[T]) ? L.value[T][A] = d : L.value[T] = [d]), t.arrowNavigation && r(L.value, "calendar");
    }, g = (d) => {
      t.monthChangeOnScroll && (d.preventDefault(), a("handle-scroll", d));
    };
    return n({ triggerTransition: ee }), (d, T) => {
      var A;
      return h(), S("div", {
        class: pe(u(q))
      }, [
        Q("div", {
          style: ut(u(te))
        }, [
          e.specificMode ? D("", !0) : (h(), S("div", {
            key: 0,
            ref_key: "calendarWrapRef",
            ref: Y,
            class: pe(u(C)),
            role: "grid",
            "aria-label": (A = u(p).ariaLabels) == null ? void 0 : A.calendarWrap
          }, [
            Q("div", Kl, [
              d.weekNumbers ? (h(), S("div", xl, Te(d.weekNumName), 1)) : D("", !0),
              (h(!0), S(ue, null, we(u(B), (z, l) => (h(), S("div", {
                class: "dp__calendar_header_item",
                role: "gridcell",
                key: l,
                "data-test": "calendar-header"
              }, [
                d.$slots["calendar-header"] ? E(d.$slots, "calendar-header", {
                  key: 0,
                  day: z,
                  index: l
                }) : D("", !0),
                d.$slots["calendar-header"] ? D("", !0) : (h(), S(ue, { key: 1 }, [
                  He(Te(z), 1)
                ], 64))
              ]))), 128))
            ]),
            Gl,
            Xe(ft, {
              name: _.value,
              css: !!d.transitions
            }, {
              default: re(() => {
                var z;
                return [
                  i.value ? (h(), S("div", {
                    key: 0,
                    class: "dp__calendar",
                    role: "grid",
                    "aria-label": (z = u(p).ariaLabels) == null ? void 0 : z.calendarDays
                  }, [
                    (h(!0), S(ue, null, we(e.mappedDates, (l, f) => (h(), S("div", {
                      class: "dp__calendar_row",
                      role: "row",
                      key: f
                    }, [
                      d.weekNumbers ? (h(), S("div", Xl, [
                        Q("div", ql, Te(e.getWeekNum(l.days)), 1)
                      ])) : D("", !0),
                      (h(!0), S(ue, null, we(l.days, (k, V) => {
                        var se, y, o;
                        return h(), S("div", {
                          role: "gridcell",
                          class: "dp__calendar_item",
                          ref_for: !0,
                          ref: (G) => H(G, f, V),
                          key: V + f,
                          "aria-selected": k.classData.dp__active_date || k.classData.dp__range_start || k.classData.dp__range_start,
                          "aria-disabled": k.classData.dp__cell_disabled,
                          "aria-label": (y = (se = u(p).ariaLabels) == null ? void 0 : se.day) == null ? void 0 : y.call(se, k),
                          tabindex: "0",
                          "data-test": k.value,
                          onClick: xe((G) => d.$emit("select-date", k), ["stop", "prevent"]),
                          onKeydown: [
                            oe((G) => d.$emit("select-date", k), ["enter"]),
                            oe((G) => d.$emit("handle-space", k), ["space"])
                          ],
                          onMouseover: (G) => P(k, f, V),
                          onMouseleave: m
                        }, [
                          Q("div", {
                            class: pe(["dp__cell_inner", k.classData])
                          }, [
                            d.$slots.day ? E(d.$slots, "day", {
                              key: 0,
                              day: +k.text,
                              date: k.value
                            }) : D("", !0),
                            d.$slots.day ? D("", !0) : (h(), S(ue, { key: 1 }, [
                              He(Te(k.text), 1)
                            ], 64)),
                            k.marker ? (h(), S("div", {
                              key: 2,
                              class: pe(u(M)(k.marker)),
                              style: ut(k.marker.color ? { backgroundColor: k.marker.color } : {})
                            }, null, 6)) : D("", !0),
                            u(x)(k.value) ? (h(), S("div", {
                              key: 3,
                              class: "dp__marker_tooltip",
                              style: ut(O.value)
                            }, [
                              (o = k.marker) != null && o.tooltip ? (h(), S("div", {
                                key: 0,
                                class: "dp__tooltip_content",
                                onClick: T[0] || (T[0] = xe(() => {
                                }, ["stop"]))
                              }, [
                                (h(!0), S(ue, null, we(k.marker.tooltip, (G, ye) => (h(), S("div", {
                                  key: ye,
                                  class: "dp__tooltip_text"
                                }, [
                                  d.$slots["marker-tooltip"] ? E(d.$slots, "marker-tooltip", {
                                    key: 0,
                                    tooltop: G,
                                    day: k.value
                                  }) : D("", !0),
                                  d.$slots["marker-tooltip"] ? D("", !0) : (h(), S(ue, { key: 1 }, [
                                    Q("div", {
                                      class: "dp__tooltip_mark",
                                      style: ut(G.color ? { backgroundColor: G.color } : {})
                                    }, null, 4),
                                    Q("div", null, Te(G.text), 1)
                                  ], 64))
                                ]))), 128)),
                                Ql
                              ])) : D("", !0)
                            ], 4)) : D("", !0)
                          ], 2)
                        ], 40, Jl);
                      }), 128))
                    ]))), 128))
                  ], 8, Zl)) : D("", !0)
                ];
              }),
              _: 3
            }, 8, ["name", "css"])
          ], 10, jl))
        ], 4)
      ], 2);
    };
  }
}), tr = ["aria-label", "aria-disabled"], Zt = /* @__PURE__ */ Ue({
  __name: "ActionIcon",
  props: {
    ariaLabel: { type: String, default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: n }) {
    const a = U(null);
    return Fe(() => n("set-ref", a)), (t, r) => (h(), S("div", {
      class: "dp__month_year_col_nav",
      onClick: r[0] || (r[0] = (c) => t.$emit("activate")),
      onKeydown: [
        r[1] || (r[1] = oe((c) => t.$emit("activate"), ["enter"])),
        r[2] || (r[2] = oe((c) => t.$emit("activate"), ["space"]))
      ],
      tabindex: "0",
      role: "button",
      "aria-label": e.ariaLabel,
      "aria-disabled": e.disabled,
      ref_key: "elRef",
      ref: a
    }, [
      Q("div", {
        class: pe(["dp__inner_nav", { dp__inner_nav_disabled: e.disabled }])
      }, [
        E(t.$slots, "default")
      ], 2)
    ], 40, tr));
  }
}), nr = ["onKeydown"], ar = { class: "dp__selection_grid_header" }, lr = ["aria-selected", "aria-disabled", "data-test", "onClick", "onKeydown", "onMouseover"], rr = ["aria-label", "onKeydown"], pt = /* @__PURE__ */ Ue({
  __name: "SelectionGrid",
  props: {
    items: { type: Array, default: () => [] },
    modelValue: { type: [String, Number], default: null },
    multiModelValue: { type: Array, default: () => [] },
    disabledValues: { type: Array, default: () => [] },
    minValue: { type: [Number, String], default: null },
    maxValue: { type: [Number, String], default: null },
    year: { type: Number, default: 0 },
    skipActive: { type: Boolean, default: !1 },
    headerRefs: { type: Array, default: () => [] },
    skipButtonRef: { type: Boolean, default: !1 },
    monthPicker: { type: Boolean, default: !1 },
    yearPicker: { type: Boolean, default: !1 },
    escClose: { type: Boolean, default: !0 },
    type: { type: String, default: null },
    arrowNavigation: { type: Boolean, default: !1 },
    autoApply: { type: Boolean, default: !1 },
    textInput: { type: Boolean, default: !1 },
    ariaLabels: { type: Object, default: () => ({}) },
    hideNavigation: { type: Array, default: () => [] }
  },
  emits: ["update:model-value", "selected", "toggle", "reset-flow"],
  setup(e, { expose: n, emit: a }) {
    const t = e, { setSelectionGrid: r, buildMultiLevelMatrix: c, setMonthPicker: p } = qe(), { hideNavigationButtons: b } = Ye(t), O = U(!1), L = U(null), Y = U(null), i = U([]), _ = U(), N = U(null);
    Gn(() => {
      L.value = null;
    }), Fe(() => {
      bt().then(() => m()), Z(), B(!0);
    }), rn(() => B(!1));
    const B = (d) => {
      var T;
      t.arrowNavigation && ((T = t.headerRefs) != null && T.length ? p(d) : r(d));
    }, Z = () => {
      const d = Se(Y);
      d && (t.textInput || d.focus({ preventScroll: !0 }), O.value = d.clientHeight < d.scrollHeight);
    }, ee = F(
      () => ({
        dp__overlay: !0
      })
    ), C = F(() => ({
      dp__overlay_col: !0
    })), M = (d) => t.skipActive ? !1 : d.value === t.modelValue, x = F(() => t.items.map((d) => d.filter((T) => T).map((T) => {
      var l, f, k;
      const A = t.disabledValues.some((V) => V === T.value) || P(T.value), z = (l = t.multiModelValue) != null && l.length ? (f = t.multiModelValue) == null ? void 0 : f.some(
        (V) => me(
          V,
          rt(
            t.monthPicker ? Pt(new Date(), T.value) : new Date(),
            t.monthPicker ? t.year : T.value
          )
        )
      ) : M(T);
      return {
        ...T,
        className: {
          dp__overlay_cell_active: z,
          dp__overlay_cell: !z,
          dp__overlay_cell_disabled: A,
          dp__overlay_cell_active_disabled: A && z,
          dp__overlay_cell_pad: !0,
          dp__cell_in_between: (k = t.multiModelValue) != null && k.length ? j(T.value) : !1
        }
      };
    }))), q = F(
      () => ({
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: O.value,
        dp__button_bottom: t.autoApply
      })
    ), te = F(() => {
      var d, T;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((d = t.items) == null ? void 0 : d.length) <= 6,
        dp__container_block: ((T = t.items) == null ? void 0 : T.length) > 6
      };
    }), P = (d) => {
      const T = t.maxValue || t.maxValue === 0, A = t.minValue || t.minValue === 0;
      return !T && !A ? !1 : T && A ? +d > +t.maxValue || +d < +t.minValue : T ? +d > +t.maxValue : A ? +d < +t.minValue : !1;
    }, m = () => {
      const d = Se(L);
      if (d) {
        const T = Se(Y);
        T && (T.scrollTop = d.offsetTop - T.offsetTop - (T.getBoundingClientRect().height / 2 - d.getBoundingClientRect().height));
      }
    }, R = (d) => {
      !t.disabledValues.some((T) => T === d) && !P(d) && (a("update:model-value", d), a("selected"));
    }, j = (d) => {
      const T = t.monthPicker ? t.year : d;
      return Un(
        t.multiModelValue,
        rt(
          t.monthPicker ? Pt(new Date(), _.value || 0) : new Date(),
          t.monthPicker ? T : _.value || T
        ),
        rt(t.monthPicker ? Pt(new Date(), d) : new Date(), T)
      );
    }, J = () => {
      a("toggle"), a("reset-flow");
    }, I = () => {
      t.escClose && J();
    }, H = (d, T, A, z) => {
      d && (T.value === +t.modelValue && !t.disabledValues.includes(T.value) && (L.value = d), t.arrowNavigation && (Array.isArray(i.value[A]) ? i.value[A][z] = d : i.value[A] = [d], g()));
    }, g = () => {
      var T, A;
      const d = (T = t.headerRefs) != null && T.length ? [t.headerRefs].concat(i.value) : i.value.concat([t.skipButtonRef ? [] : [N.value]]);
      c(De(d), (A = t.headerRefs) != null && A.length ? "monthPicker" : "selectionGrid");
    };
    return n({ focusGrid: Z }), (d, T) => {
      var A;
      return h(), S("div", {
        ref_key: "gridWrapRef",
        ref: Y,
        class: pe(u(ee)),
        role: "dialog",
        tabindex: "0",
        onKeydown: oe(I, ["esc"])
      }, [
        Q("div", {
          class: pe(u(te)),
          role: "grid"
        }, [
          Q("div", ar, [
            E(d.$slots, "header")
          ]),
          d.$slots.overlay ? E(d.$slots, "overlay", { key: 0 }) : (h(), S(ue, { key: 1 }, [
            (h(!0), S(ue, null, we(u(x), (z, l) => (h(), S("div", {
              class: "dp__overlay_row",
              key: l,
              role: "row"
            }, [
              (h(!0), S(ue, null, we(z, (f, k) => (h(), S("div", {
                role: "gridcell",
                class: pe(u(C)),
                key: f.value,
                "aria-selected": f.value === e.modelValue && !e.disabledValues.includes(f.value),
                "aria-disabled": f.className.dp__overlay_cell_disabled,
                ref_for: !0,
                ref: (V) => H(V, f, l, k),
                tabindex: "0",
                "data-test": f.text,
                onClick: (V) => R(f.value),
                onKeydown: [
                  oe((V) => R(f.value), ["enter"]),
                  oe((V) => R(f.value), ["space"])
                ],
                onMouseover: (V) => _.value = f.value
              }, [
                Q("div", {
                  class: pe(f.className)
                }, [
                  d.$slots.item ? E(d.$slots, "item", {
                    key: 0,
                    item: f
                  }) : D("", !0),
                  d.$slots.item ? D("", !0) : (h(), S(ue, { key: 1 }, [
                    He(Te(f.text), 1)
                  ], 64))
                ], 2)
              ], 42, lr))), 128))
            ]))), 128)),
            d.$slots["button-icon"] ? At((h(), S("div", {
              key: 0,
              role: "button",
              "aria-label": (A = e.ariaLabels) == null ? void 0 : A.toggleOverlay,
              class: pe(u(q)),
              tabindex: "0",
              ref_key: "toggleButton",
              ref: N,
              onClick: J,
              onKeydown: oe(J, ["enter"])
            }, [
              E(d.$slots, "button-icon")
            ], 42, rr)), [
              [Tt, !u(b)(e.type)]
            ]) : D("", !0)
          ], 64))
        ], 2)
      ], 42, nr);
    };
  }
}), or = ["aria-label"], Rn = /* @__PURE__ */ Ue({
  __name: "RegularPicker",
  props: {
    ariaLabel: { type: String, default: "" },
    showSelectionGrid: { type: Boolean, default: !1 },
    modelValue: { type: Number, default: null },
    items: { type: Array, default: () => [] },
    disabledValues: { type: Array, default: () => [] },
    minValue: { type: Number, default: null },
    maxValue: { type: Number, default: null },
    slotName: { type: String, default: "" },
    overlaySlot: { type: String, default: "" },
    headerRefs: { type: Array, default: () => [] },
    escClose: { type: Boolean, default: !0 },
    type: { type: String, default: null },
    transitions: { type: [Object, Boolean], default: !1 },
    arrowNavigation: { type: Boolean, default: !1 },
    autoApply: { type: Boolean, default: !1 },
    textInput: { type: Boolean, default: !1 },
    ariaLabels: { type: Object, default: () => ({}) },
    hideNavigation: { type: Array, default: () => [] }
  },
  emits: ["update:model-value", "toggle", "set-ref"],
  setup(e, { emit: n }) {
    const a = e, { transitionName: t, showTransition: r } = Ot(a.transitions), c = U(null);
    return Fe(() => n("set-ref", c)), (p, b) => (h(), S(ue, null, [
      Q("div", {
        class: "dp__month_year_select",
        onClick: b[0] || (b[0] = (O) => p.$emit("toggle")),
        onKeydown: [
          b[1] || (b[1] = oe((O) => p.$emit("toggle"), ["enter"])),
          b[2] || (b[2] = oe((O) => p.$emit("toggle"), ["space"]))
        ],
        role: "button",
        "aria-label": e.ariaLabel,
        tabindex: "0",
        ref_key: "elRef",
        ref: c
      }, [
        E(p.$slots, "default")
      ], 40, or),
      Xe(ft, {
        name: u(t)(e.showSelectionGrid),
        css: u(r)
      }, {
        default: re(() => [
          e.showSelectionGrid ? (h(), ce(pt, Ae({ key: 0 }, {
            modelValue: e.modelValue,
            items: e.items,
            disabledValues: e.disabledValues,
            minValue: e.minValue,
            maxValue: e.maxValue,
            escClose: e.escClose,
            type: e.type,
            arrowNavigation: e.arrowNavigation,
            textInput: e.textInput,
            autoApply: e.autoApply,
            ariaLabels: e.ariaLabels,
            hideNavigation: e.hideNavigation
          }, {
            "header-refs": [],
            "onUpdate:modelValue": b[3] || (b[3] = (O) => p.$emit("update:model-value", O)),
            onToggle: b[4] || (b[4] = (O) => p.$emit("toggle"))
          }), Oe({
            "button-icon": re(() => [
              p.$slots["calendar-icon"] ? E(p.$slots, "calendar-icon", { key: 0 }) : D("", !0),
              p.$slots["calendar-icon"] ? D("", !0) : (h(), ce(u(It), { key: 1 }))
            ]),
            _: 2
          }, [
            p.$slots[e.slotName] ? {
              name: "item",
              fn: re(({ item: O }) => [
                E(p.$slots, e.slotName, { item: O })
              ]),
              key: "0"
            } : void 0,
            p.$slots[e.overlaySlot] ? {
              name: "overlay",
              fn: re(() => [
                E(p.$slots, e.overlaySlot)
              ]),
              key: "1"
            } : void 0,
            p.$slots[`${e.overlaySlot}-header`] ? {
              name: "header",
              fn: re(() => [
                E(p.$slots, `${e.overlaySlot}-header`)
              ]),
              key: "2"
            } : void 0
          ]), 1040)) : D("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 64));
  }
}), sr = { class: "dp__month_year_row" }, ir = { class: "dp__month_year_wrap" }, ur = { class: "dp__month_picker_header" }, cr = ["aria-label"], dr = ["aria-label"], fr = ["aria-label"], vr = /* @__PURE__ */ Ue({
  __name: "MonthYearPicker",
  props: {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    internalModelValue: { type: [Date, Array], default: null },
    ...Je
  },
  emits: ["update-month-year", "month-year-select", "mount", "reset-flow", "overlay-closed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, { defaults: r } = Ye(t), { transitionName: c, showTransition: p } = Ot(r.value.transitions), { buildMatrix: b } = qe(), { handleMonthYearChange: O, isDisabled: L, updateMonthYear: Y } = Nl(t, a), i = U(!1), _ = U(!1), N = U([null, null, null, null]), B = U(null), Z = U(null), ee = U(null);
    Fe(() => {
      a("mount");
    });
    const C = (y) => ({
      get: () => t[y],
      set: (o) => {
        const G = y === "month" ? "year" : "month";
        a("update-month-year", { [y]: o, [G]: t[G] }), a("month-year-select", y === "year"), y === "month" ? l(!0) : f(!0);
      }
    }), M = F(C("month")), x = F(C("year")), q = F(() => (y) => {
      const o = y === "month";
      return {
        showSelectionGrid: (o ? i : _).value,
        items: (o ? d : T).value,
        disabledValues: r.value.filters[o ? "months" : "years"],
        minValue: (o ? R : P).value,
        maxValue: (o ? j : m).value,
        headerRefs: o && t.monthPicker ? [B.value, Z.value, ee.value] : [],
        escClose: t.escClose,
        transitions: r.value.transitions,
        ariaLabels: r.value.ariaLabels,
        textInput: t.textInput,
        autoApply: t.autoApply,
        arrowNavigation: t.arrowNavigation,
        hideNavigation: t.hideNavigation
      };
    }), te = F(() => (y) => ({
      month: t.month,
      year: t.year,
      items: y === "month" ? t.months : t.years,
      instance: t.instance,
      updateMonthYear: Y,
      toggle: y === "month" ? l : f
    })), P = F(() => t.minDate ? ge(w(t.minDate)) : null), m = F(() => t.maxDate ? ge(w(t.maxDate)) : null), R = F(() => {
      if (t.minDate && P.value) {
        if (P.value > t.year)
          return 12;
        if (P.value === t.year)
          return he(w(t.minDate));
      }
      return null;
    }), j = F(() => t.maxDate && m.value ? m.value < t.year ? -1 : m.value === t.year ? he(w(t.maxDate)) : null : null), J = F(() => t.range && t.internalModelValue && (t.monthPicker || t.yearPicker) ? t.internalModelValue : []), I = (y) => y.reverse(), H = (y, o = !1) => {
      const G = [], ye = (de) => o ? I(de) : de;
      for (let de = 0; de < y.length; de += 3) {
        const be = [y[de], y[de + 1], y[de + 2]];
        G.push(ye(be));
      }
      return o ? G.reverse() : G;
    }, g = F(() => {
      const y = t.months.find((o) => o.value === t.month);
      return y || { text: "", value: 0 };
    }), d = F(() => H(t.months)), T = F(() => H(t.years, t.reverseYears)), A = F(() => r.value.multiCalendars ? t.multiCalendarsSolo ? !0 : t.instance === 0 : !0), z = F(() => r.value.multiCalendars ? t.multiCalendarsSolo ? !0 : t.instance === r.value.multiCalendars - 1 : !0), l = (y = !1) => {
      k(y), i.value = !i.value, i.value || a("overlay-closed");
    }, f = (y = !1) => {
      k(y), _.value = !_.value, _.value || a("overlay-closed");
    }, k = (y) => {
      y || a("reset-flow");
    }, V = (y = !1) => {
      a("update-month-year", {
        year: y ? t.year + 1 : t.year - 1,
        month: t.month,
        fromNav: !0
      });
    }, se = (y, o) => {
      t.arrowNavigation && (N.value[o] = Se(y), b(N.value, "monthYear"));
    };
    return n({
      toggleMonthPicker: l,
      toggleYearPicker: f
    }), (y, o) => {
      var G, ye, de, be, Le;
      return h(), S("div", sr, [
        y.$slots["month-year"] ? E(y.$slots, "month-year", Be(Ae({ key: 0 }, { month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: u(Y), handleMonthYearChange: u(O), instance: e.instance }))) : (h(), S(ue, { key: 1 }, [
          !y.monthPicker && !y.yearPicker ? (h(), S(ue, { key: 0 }, [
            u(A) && !y.vertical ? (h(), ce(Zt, {
              key: 0,
              "aria-label": (G = u(r).ariaLabels) == null ? void 0 : G.prevMonth,
              disabled: u(L)(!1),
              onActivate: o[0] || (o[0] = (ne) => u(O)(!1)),
              onSetRef: o[1] || (o[1] = (ne) => se(ne, 0))
            }, {
              default: re(() => [
                y.$slots["arrow-left"] ? E(y.$slots, "arrow-left", { key: 0 }) : D("", !0),
                y.$slots["arrow-left"] ? D("", !0) : (h(), ce(u(pn), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : D("", !0),
            Q("div", ir, [
              Xe(Rn, Ae({
                type: "month",
                "slot-name": "month-overlay-val",
                "overlay-slot": "overlay-month",
                "aria-label": (ye = u(r).ariaLabels) == null ? void 0 : ye.openMonthsOverlay,
                modelValue: u(M),
                "onUpdate:modelValue": o[2] || (o[2] = (ne) => nt(M) ? M.value = ne : null)
              }, u(q)("month"), {
                onToggle: l,
                onSetRef: o[3] || (o[3] = (ne) => se(ne, 1))
              }), Oe({
                default: re(() => [
                  y.$slots.month ? E(y.$slots, "month", Be(Ae({ key: 0 }, u(g)))) : D("", !0),
                  y.$slots.month ? D("", !0) : (h(), S(ue, { key: 1 }, [
                    He(Te(u(g).text), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                y.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: re(() => [
                    E(y.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                y.$slots["month-overlay-value"] ? {
                  name: "month-overlay-val",
                  fn: re(({ item: ne }) => [
                    E(y.$slots, "month-overlay-value", {
                      text: ne.text,
                      value: ne.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                y.$slots["month-overlay"] ? {
                  name: "overlay-month",
                  fn: re(() => [
                    E(y.$slots, "month-overlay", Be(Ge(u(te)("month"))))
                  ]),
                  key: "2"
                } : void 0,
                y.$slots["month-overlay-header"] ? {
                  name: "overlay-month-header",
                  fn: re(() => [
                    E(y.$slots, "month-overlay-header", { toggle: l })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"]),
              Xe(Rn, Ae({
                type: "year",
                "slot-name": "year-overlay-val",
                "overlay-slot": "overlay-year",
                "aria-label": (de = u(r).ariaLabels) == null ? void 0 : de.openYearsOverlay,
                modelValue: u(x),
                "onUpdate:modelValue": o[4] || (o[4] = (ne) => nt(x) ? x.value = ne : null)
              }, u(q)("year"), {
                onToggle: f,
                onSetRef: o[5] || (o[5] = (ne) => se(ne, 2))
              }), Oe({
                default: re(() => [
                  y.$slots.year ? E(y.$slots, "year", {
                    key: 0,
                    year: e.year
                  }) : D("", !0),
                  y.$slots.year ? D("", !0) : (h(), S(ue, { key: 1 }, [
                    He(Te(e.year), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                y.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: re(() => [
                    E(y.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                y.$slots["year-overlay-value"] ? {
                  name: "year-overlay-val",
                  fn: re(({ item: ne }) => [
                    E(y.$slots, "year-overlay-value", {
                      text: ne.text,
                      value: ne.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                y.$slots["year-overlay"] ? {
                  name: "overlay-year",
                  fn: re(() => [
                    E(y.$slots, "year-overlay", Be(Ge(u(te)("year"))))
                  ]),
                  key: "2"
                } : void 0,
                y.$slots["year-overlay-header"] ? {
                  name: "overlay-year-header",
                  fn: re(() => [
                    E(y.$slots, "year-overlay-header", { toggle: f })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"])
            ]),
            u(A) && y.vertical ? (h(), ce(Zt, {
              key: 1,
              "aria-label": (be = u(r).ariaLabels) == null ? void 0 : be.prevMonth,
              disabled: u(L)(!1),
              onActivate: o[6] || (o[6] = (ne) => u(O)(!1))
            }, {
              default: re(() => [
                y.$slots["arrow-up"] ? E(y.$slots, "arrow-up", { key: 0 }) : D("", !0),
                y.$slots["arrow-up"] ? D("", !0) : (h(), ce(u(En), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : D("", !0),
            u(z) ? (h(), ce(Zt, {
              key: 2,
              ref: "rightIcon",
              disabled: u(L)(!0),
              "aria-label": (Le = u(r).ariaLabels) == null ? void 0 : Le.nextMonth,
              onActivate: o[7] || (o[7] = (ne) => u(O)(!0)),
              onSetRef: o[8] || (o[8] = (ne) => se(ne, 3))
            }, {
              default: re(() => [
                y.$slots[y.vertical ? "arrow-down" : "arrow-right"] ? E(y.$slots, y.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : D("", !0),
                y.$slots[y.vertical ? "arrow-down" : "arrow-right"] ? D("", !0) : (h(), ce(St(y.vertical ? u(Fn) : u(kn)), { key: 1 }))
              ]),
              _: 3
            }, 8, ["disabled", "aria-label"])) : D("", !0)
          ], 64)) : D("", !0),
          y.monthPicker ? (h(), ce(pt, Ae({ key: 1 }, u(q)("month"), {
            "skip-active": y.range,
            year: e.year,
            "multi-model-value": u(J),
            "month-picker": "",
            modelValue: u(M),
            "onUpdate:modelValue": o[17] || (o[17] = (ne) => nt(M) ? M.value = ne : null),
            onToggle: l,
            onSelected: o[18] || (o[18] = (ne) => y.$emit("overlay-closed"))
          }), Oe({
            header: re(() => {
              var ne, Ze, le;
              return [
                Q("div", ur, [
                  Q("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpPrevIconRef",
                    ref: B,
                    onClick: o[9] || (o[9] = (fe) => V(!1)),
                    onKeydown: o[10] || (o[10] = oe((fe) => V(!1), ["enter"]))
                  }, [
                    Q("div", {
                      class: "dp__inner_nav",
                      role: "button",
                      "aria-label": (ne = u(r).ariaLabels) == null ? void 0 : ne.prevMonth
                    }, [
                      y.$slots["arrow-left"] ? E(y.$slots, "arrow-left", { key: 0 }) : D("", !0),
                      y.$slots["arrow-left"] ? D("", !0) : (h(), ce(u(pn), { key: 1 }))
                    ], 8, cr)
                  ], 544),
                  Q("div", {
                    class: "dp__pointer",
                    role: "button",
                    ref_key: "mpYearButtonRef",
                    ref: Z,
                    "aria-label": (Ze = u(r).ariaLabels) == null ? void 0 : Ze.openYearsOverlay,
                    tabindex: "0",
                    onClick: o[11] || (o[11] = () => f(!1)),
                    onKeydown: o[12] || (o[12] = oe(() => f(!1), ["enter"]))
                  }, [
                    y.$slots.year ? E(y.$slots, "year", {
                      key: 0,
                      year: e.year
                    }) : D("", !0),
                    y.$slots.year ? D("", !0) : (h(), S(ue, { key: 1 }, [
                      He(Te(e.year), 1)
                    ], 64))
                  ], 40, dr),
                  Q("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpNextIconRef",
                    ref: ee,
                    onClick: o[13] || (o[13] = (fe) => V(!0)),
                    onKeydown: o[14] || (o[14] = oe((fe) => V(!0), ["enter"]))
                  }, [
                    Q("div", {
                      class: "dp__inner_nav",
                      role: "button",
                      "aria-label": (le = u(r).ariaLabels) == null ? void 0 : le.nextMonth
                    }, [
                      y.$slots["arrow-right"] ? E(y.$slots, "arrow-right", { key: 0 }) : D("", !0),
                      y.$slots["arrow-right"] ? D("", !0) : (h(), ce(u(kn), { key: 1 }))
                    ], 8, fr)
                  ], 544)
                ]),
                Xe(ft, {
                  name: u(c)(_.value),
                  css: u(p)
                }, {
                  default: re(() => [
                    _.value ? (h(), ce(pt, Ae({ key: 0 }, u(q)("year"), {
                      modelValue: u(x),
                      "onUpdate:modelValue": o[15] || (o[15] = (fe) => nt(x) ? x.value = fe : null),
                      onToggle: f,
                      onSelected: o[16] || (o[16] = (fe) => y.$emit("overlay-closed"))
                    }), Oe({
                      "button-icon": re(() => [
                        y.$slots["calendar-icon"] ? E(y.$slots, "calendar-icon", { key: 0 }) : D("", !0),
                        y.$slots["calendar-icon"] ? D("", !0) : (h(), ce(u(It), { key: 1 }))
                      ]),
                      _: 2
                    }, [
                      y.$slots["year-overlay-value"] ? {
                        name: "item",
                        fn: re(({ item: fe }) => [
                          E(y.$slots, "year-overlay-value", {
                            text: fe.text,
                            value: fe.value
                          })
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["modelValue"])) : D("", !0)
                  ]),
                  _: 3
                }, 8, ["name", "css"])
              ];
            }),
            _: 2
          }, [
            y.$slots["month-overlay-value"] ? {
              name: "item",
              fn: re(({ item: ne }) => [
                E(y.$slots, "month-overlay-value", {
                  text: ne.text,
                  value: ne.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["skip-active", "year", "multi-model-value", "modelValue"])) : D("", !0),
          y.yearPicker ? (h(), ce(pt, Ae({ key: 2 }, u(q)("year"), {
            modelValue: u(x),
            "onUpdate:modelValue": o[19] || (o[19] = (ne) => nt(x) ? x.value = ne : null),
            "multi-model-value": u(J),
            "skip-active": y.range,
            "skip-button-ref": "",
            "year-picker": "",
            onToggle: f,
            onSelected: o[20] || (o[20] = (ne) => y.$emit("overlay-closed"))
          }), Oe({ _: 2 }, [
            y.$slots["year-overlay-value"] ? {
              name: "item",
              fn: re(({ item: ne }) => [
                E(y.$slots, "year-overlay-value", {
                  text: ne.text,
                  value: ne.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["modelValue", "multi-model-value", "skip-active"])) : D("", !0)
        ], 64))
      ]);
    };
  }
}), mr = {
  key: 0,
  class: "dp__time_input"
}, yr = ["aria-label", "onKeydown", "onClick"], hr = ["aria-label", "onKeydown", "onClick"], gr = ["aria-label", "onKeydown", "onClick"], pr = { key: 0 }, kr = ["aria-label", "onKeydown"], wr = /* @__PURE__ */ Ue({
  __name: "TimeInput",
  props: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    ...Je
  },
  emits: [
    "set-hours",
    "set-minutes",
    "update:hours",
    "update:minutes",
    "update:seconds",
    "reset-flow",
    "mounted",
    "overlay-closed"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { setTimePickerElements: r, setTimePickerBackRef: c } = qe(), { defaults: p } = Ye(t), { transitionName: b, showTransition: O } = Ot(p.value.transitions), L = kt({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), Y = U("AM"), i = U(null), _ = U([]);
    Fe(() => {
      a("mounted");
    });
    const N = (g, d) => Vn(Ne(w(), g), d), B = (g, d) => oa(Ne(w(), g), d), Z = F(
      () => ({
        dp__time_col: !0,
        dp__time_col_reg: !t.enableSeconds && t.is24,
        dp__time_col_reg_with_button: !t.enableSeconds && !t.is24,
        dp__time_col_sec: t.enableSeconds && t.is24,
        dp__time_col_sec_with_button: t.enableSeconds && !t.is24
      })
    ), ee = F(() => {
      const g = [{ type: "hours" }, { type: "", separator: !0 }, { type: "minutes" }];
      return t.enableSeconds ? g.concat([{ type: "", separator: !0 }, { type: "seconds" }]) : g;
    }), C = F(() => ee.value.filter((g) => !g.separator)), M = F(() => (g) => {
      if (g === "hours") {
        const d = R(t.hours);
        return { text: d < 10 ? `0${d}` : `${d}`, value: d };
      }
      return { text: t[g] < 10 ? `0${t[g]}` : `${t[g]}`, value: t[g] };
    }), x = (g) => {
      const d = t.is24 ? 24 : 12, T = g === "hours" ? d : 60, A = +t[`${g}GridIncrement`], z = g === "hours" && !t.is24 ? A : 0, l = [];
      for (let f = z; f < T; f += A)
        l.push({ value: f, text: f < 10 ? `0${f}` : `${f}` });
      return g === "hours" && !t.is24 && l.push({ value: 0, text: "12" }), gl(l);
    }, q = (g) => t[`no${g[0].toUpperCase() + g.slice(1)}Overlay`], te = (g) => {
      q(g) || (L[g] = !L[g], L[g] || a("overlay-closed"));
    }, P = (g) => g === "hours" ? je : g === "minutes" ? Ke : dt, m = (g, d = !0) => {
      const T = d ? N : B;
      a(
        `update:${g}`,
        P(g)(T({ [g]: +t[g] }, { [g]: +t[`${g}Increment`] }))
      );
    }, R = (g) => t.is24 ? g : (g >= 12 ? Y.value = "PM" : Y.value = "AM", bl(g)), j = () => {
      Y.value === "PM" ? (Y.value = "AM", a("update:hours", t.hours - 12)) : (Y.value = "PM", a("update:hours", t.hours + 12));
    }, J = (g) => {
      L[g] = !0;
    }, I = (g, d, T) => {
      if (g && t.arrowNavigation) {
        Array.isArray(_.value[d]) ? _.value[d][T] = g : _.value[d] = [g];
        const A = _.value.reduce(
          (z, l) => l.map((f, k) => [...z[k] || [], l[k]]),
          []
        );
        c(t.closeTimePickerBtn), i.value && (A[1] = A[1].concat(i.value)), r(A, t.order);
      }
    }, H = (g, d) => g === "hours" && !t.is24 ? a(`update:${g}`, Y.value === "PM" ? d + 12 : d) : a(`update:${g}`, d);
    return n({ openChildCmp: J }), (g, d) => {
      var T;
      return g.disabled ? D("", !0) : (h(), S("div", mr, [
        (h(!0), S(ue, null, we(u(ee), (A, z) => {
          var l, f, k;
          return h(), S("div", {
            key: z,
            class: pe(u(Z))
          }, [
            A.separator ? (h(), S(ue, { key: 0 }, [
              He(" : ")
            ], 64)) : (h(), S(ue, { key: 1 }, [
              Q("div", {
                class: "dp__inc_dec_button",
                role: "button",
                "aria-label": (l = u(p).ariaLabels) == null ? void 0 : l.incrementValue(A.type),
                tabindex: "0",
                onKeydown: [
                  oe((V) => m(A.type), ["enter"]),
                  oe((V) => m(A.type), ["space"])
                ],
                onClick: (V) => m(A.type),
                ref_for: !0,
                ref: (V) => I(V, z, 0)
              }, [
                g.$slots["arrow-up"] ? E(g.$slots, "arrow-up", { key: 0 }) : D("", !0),
                g.$slots["arrow-up"] ? D("", !0) : (h(), ce(u(En), { key: 1 }))
              ], 40, yr),
              Q("div", {
                role: "button",
                "aria-label": (f = u(p).ariaLabels) == null ? void 0 : f.openTpOverlay(A.type),
                class: pe(q(A.type) ? "" : "dp__time_display"),
                tabindex: "0",
                onKeydown: [
                  oe((V) => te(A.type), ["enter"]),
                  oe((V) => te(A.type), ["space"])
                ],
                onClick: (V) => te(A.type),
                ref_for: !0,
                ref: (V) => I(V, z, 1)
              }, [
                g.$slots[A.type] ? E(g.$slots, A.type, {
                  key: 0,
                  text: u(M)(A.type).text,
                  value: u(M)(A.type).value
                }) : D("", !0),
                g.$slots[A.type] ? D("", !0) : (h(), S(ue, { key: 1 }, [
                  He(Te(u(M)(A.type).text), 1)
                ], 64))
              ], 42, hr),
              Q("div", {
                class: "dp__inc_dec_button",
                role: "button",
                "aria-label": (k = u(p).ariaLabels) == null ? void 0 : k.decrementValue(A.type),
                tabindex: "0",
                onKeydown: [
                  oe((V) => m(A.type, !1), ["enter"]),
                  oe((V) => m(A.type, !1), ["space"])
                ],
                onClick: (V) => m(A.type, !1),
                ref_for: !0,
                ref: (V) => I(V, z, 2)
              }, [
                g.$slots["arrow-down"] ? E(g.$slots, "arrow-down", { key: 0 }) : D("", !0),
                g.$slots["arrow-down"] ? D("", !0) : (h(), ce(u(Fn), { key: 1 }))
              ], 40, gr)
            ], 64))
          ], 2);
        }), 128)),
        g.is24 ? D("", !0) : (h(), S("div", pr, [
          g.$slots["am-pm-button"] ? E(g.$slots, "am-pm-button", {
            key: 0,
            toggle: j,
            value: Y.value
          }) : D("", !0),
          g.$slots["am-pm-button"] ? D("", !0) : (h(), S("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: i,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (T = u(p).ariaLabels) == null ? void 0 : T.amPmButton,
            tabindex: "0",
            onClick: j,
            onKeydown: [
              oe(xe(j, ["prevent"]), ["enter"]),
              oe(xe(j, ["prevent"]), ["space"])
            ]
          }, Te(Y.value), 41, kr))
        ])),
        (h(!0), S(ue, null, we(u(C), (A, z) => (h(), ce(ft, {
          key: z,
          name: u(b)(L[A.type]),
          css: u(O)
        }, {
          default: re(() => [
            L[A.type] ? (h(), ce(pt, {
              key: 0,
              items: x(A.type),
              "disabled-values": u(p).filters.times[A.type],
              "esc-close": g.escClose,
              "aria-labels": u(p).ariaLabels,
              "hide-navigation": g.hideNavigation,
              "onUpdate:modelValue": (l) => H(A.type, l),
              onSelected: (l) => te(A.type),
              onToggle: (l) => te(A.type),
              onResetFlow: d[0] || (d[0] = (l) => g.$emit("reset-flow")),
              type: A.type
            }, Oe({
              "button-icon": re(() => [
                g.$slots["clock-icon"] ? E(g.$slots, "clock-icon", { key: 0 }) : D("", !0),
                g.$slots["clock-icon"] ? D("", !0) : (h(), ce(u(Ln), { key: 1 }))
              ]),
              _: 2
            }, [
              g.$slots[`${A.type}-overlay-value`] ? {
                name: "item",
                fn: re(({ item: l }) => [
                  E(g.$slots, `${A.type}-overlay-value`, {
                    text: l.text,
                    value: l.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "disabled-values", "esc-close", "aria-labels", "hide-navigation", "onUpdate:modelValue", "onSelected", "onToggle", "type"])) : D("", !0)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), br = ["aria-label"], $r = { class: "dp__overlay_container dp__container_flex" }, Dr = {
  key: 1,
  class: "dp__overlay_row"
}, Mr = ["aria-label"], _r = /* @__PURE__ */ Ue({
  __name: "TimePicker",
  props: {
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    internalModelValue: { type: [Date, Array], default: null },
    ...Je
  },
  emits: [
    "update:hours",
    "update:minutes",
    "update:seconds",
    "mount",
    "reset-flow",
    "overlay-closed"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { buildMatrix: r, setTimePicker: c } = qe(), p = on(), { hideNavigationButtons: b, defaults: O } = Ye(t), { transitionName: L, showTransition: Y } = Ot(O.value.transitions), i = U(null), _ = U(null), N = U([]), B = U(null);
    Fe(() => {
      a("mount"), !t.timePicker && t.arrowNavigation ? r([Se(i.value)], "time") : c(!0, t.timePicker);
    });
    const Z = F(() => t.range && t.modelAuto ? jn(t.internalModelValue) : !0), ee = U(!1), C = (I) => ({
      hours: Array.isArray(t.hours) ? t.hours[I] : t.hours,
      minutes: Array.isArray(t.minutes) ? t.minutes[I] : t.minutes,
      seconds: Array.isArray(t.seconds) ? t.seconds[I] : t.seconds
    }), M = F(() => {
      const I = [];
      if (t.range)
        for (let H = 0; H < 2; H++)
          I.push(C(H));
      else
        I.push(C(0));
      return I;
    }), x = (I, H = !1, g = "") => {
      H || a("reset-flow"), ee.value = I, t.arrowNavigation && (c(I), I || a("overlay-closed")), bt(() => {
        g !== "" && N.value[0] && N.value[0].openChildCmp(g);
      });
    }, q = F(() => ({
      dp__button: !0,
      dp__button_bottom: t.autoApply
    })), te = lt(p, "timePicker"), P = (I, H, g) => t.range ? H === 0 ? [I, M.value[1][g]] : [M.value[0][g], I] : I, m = (I) => {
      a("update:hours", I);
    }, R = (I) => {
      a("update:minutes", I);
    }, j = (I) => {
      a("update:seconds", I);
    }, J = () => {
      B.value && t.arrowNavigation && B.value.focus({ preventScroll: !0 });
    };
    return n({ toggleTimePicker: x }), (I, H) => {
      var g;
      return h(), S("div", null, [
        I.timePicker ? D("", !0) : At((h(), S("div", {
          key: 0,
          class: pe(u(q)),
          role: "button",
          "aria-label": (g = u(O).ariaLabels) == null ? void 0 : g.openTimePicker,
          tabindex: "0",
          ref_key: "openTimePickerBtn",
          ref: i,
          onKeydown: [
            H[0] || (H[0] = oe((d) => x(!0), ["enter"])),
            H[1] || (H[1] = oe((d) => x(!0), ["space"]))
          ],
          onClick: H[2] || (H[2] = (d) => x(!0))
        }, [
          I.$slots["clock-icon"] ? E(I.$slots, "clock-icon", { key: 0 }) : D("", !0),
          I.$slots["clock-icon"] ? D("", !0) : (h(), ce(u(Ln), { key: 1 }))
        ], 42, br)), [
          [Tt, !u(b)("time")]
        ]),
        Xe(ft, {
          name: u(L)(ee.value),
          css: u(Y)
        }, {
          default: re(() => {
            var d;
            return [
              ee.value || I.timePicker ? (h(), S("div", {
                key: 0,
                class: "dp__overlay",
                ref_key: "overlayRef",
                ref: B,
                tabindex: "0"
              }, [
                Q("div", $r, [
                  I.$slots["time-picker-overlay"] ? E(I.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: m,
                    setMinutes: R,
                    setSeconds: j
                  }) : D("", !0),
                  I.$slots["time-picker-overlay"] ? D("", !0) : (h(), S("div", Dr, [
                    (h(!0), S(ue, null, we(u(M), (T, A) => At((h(), ce(wr, Ae({ key: A }, {
                      ...I.$props,
                      order: A,
                      hours: T.hours,
                      minutes: T.minutes,
                      seconds: T.seconds,
                      closeTimePickerBtn: _.value,
                      disabled: A === 0 ? I.fixedStart : I.fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: N,
                      "onUpdate:hours": (z) => m(P(z, A, "hours")),
                      "onUpdate:minutes": (z) => R(P(z, A, "minutes")),
                      "onUpdate:seconds": (z) => j(P(z, A, "seconds")),
                      onMounted: J,
                      onOverlayClosed: J
                    }), Oe({ _: 2 }, [
                      we(u(te), (z, l) => ({
                        name: z,
                        fn: re((f) => [
                          E(I.$slots, z, Be(Ge(f)))
                        ])
                      }))
                    ]), 1040, ["onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [Tt, A === 0 ? !0 : u(Z)]
                    ])), 128))
                  ])),
                  I.timePicker ? D("", !0) : At((h(), S("div", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: _,
                    class: pe(u(q)),
                    role: "button",
                    "aria-label": (d = u(O).ariaLabels) == null ? void 0 : d.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      H[3] || (H[3] = oe((T) => x(!1), ["enter"])),
                      H[4] || (H[4] = oe((T) => x(!1), ["space"]))
                    ],
                    onClick: H[5] || (H[5] = (T) => x(!1))
                  }, [
                    I.$slots["calendar-icon"] ? E(I.$slots, "calendar-icon", { key: 0 }) : D("", !0),
                    I.$slots["calendar-icon"] ? D("", !0) : (h(), ce(u(It), { key: 1 }))
                  ], 42, Mr)), [
                    [Tt, !u(b)("time")]
                  ])
                ])
              ], 512)) : D("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), Ar = (e, n) => {
  const { isDisabled: a, matchDate: t, getWeekFromDate: r } = Ye(n), c = U(null), p = U(w()), b = (l) => {
    !l.current && n.hideOffsetDates || (c.value = l.value);
  }, O = () => {
    c.value = null;
  }, L = (l) => Array.isArray(e.value) && n.range && e.value[0] && c.value ? l ? Ie(c.value, e.value[0]) : Ce(c.value, e.value[0]) : !0, Y = (l, f) => {
    const k = () => e.value ? f ? e.value[0] || null : e.value[1] : null, V = e.value && Array.isArray(e.value) ? k() : null;
    return me(w(l.value), V);
  }, i = (l) => {
    const f = Array.isArray(e.value) ? e.value[0] : null;
    return l ? !Ce(c.value || null, f) : !0;
  }, _ = (l, f = !0) => (n.range || n.weekPicker) && Array.isArray(e.value) ? n.hideOffsetDates && !l.current ? !1 : me(w(l.value), e.value[f ? 0 : 1]) : n.range ? Y(l, f) && i(f) || me(l.value, Array.isArray(e.value) ? e.value[0] : null) && L(f) : !1, N = (l, f, k) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? l ? !1 : k ? Ie(e.value[0], f.value) : Ce(e.value[0], f.value) : !1, B = (l) => !e.value || n.hideOffsetDates && !l.current ? !1 : n.range ? n.modelAuto && Array.isArray(e.value) ? me(l.value, e.value[0] ? e.value[0] : p.value) : !1 : n.multiDates && Array.isArray(e.value) ? e.value.some((f) => me(f, l.value)) : me(l.value, e.value ? e.value : p.value), Z = (l) => {
    if (n.autoRange || n.weekPicker) {
      if (c.value) {
        if (n.hideOffsetDates && !l.current)
          return !1;
        const f = ct(c.value, +n.autoRange), k = r(w(c.value));
        return n.weekPicker ? me(k[1], w(l.value)) : me(f, w(l.value));
      }
      return !1;
    }
    return !1;
  }, ee = (l) => {
    if (n.autoRange || n.weekPicker) {
      if (c.value) {
        const f = ct(c.value, +n.autoRange);
        if (n.hideOffsetDates && !l.current)
          return !1;
        const k = r(w(c.value));
        return n.weekPicker ? Ie(l.value, k[0]) && Ce(l.value, k[1]) : Ie(l.value, c.value) && Ce(l.value, f);
      }
      return !1;
    }
    return !1;
  }, C = (l) => {
    if (n.autoRange || n.weekPicker) {
      if (c.value) {
        if (n.hideOffsetDates && !l.current)
          return !1;
        const f = r(w(c.value));
        return n.weekPicker ? me(f[0], l.value) : me(c.value, l.value);
      }
      return !1;
    }
    return !1;
  }, M = (l) => Un(e.value, c.value, l.value), x = () => n.modelAuto && Array.isArray(n.internalModelValue) ? !!n.internalModelValue[0] : !1, q = () => n.modelAuto ? jn(n.internalModelValue) : !0, te = (l) => {
    if (Array.isArray(e.value) && e.value.length || n.weekPicker)
      return !1;
    const f = n.range ? !_(l) && !_(l, !1) : !0;
    return !a(l.value) && !B(l) && !(!l.current && n.hideOffsetDates) && f;
  }, P = (l) => n.range ? n.modelAuto ? x() && B(l) : !1 : B(l), m = (l) => n.highlight ? t(l.value, n.highlight) : !1, R = (l) => a(l.value) && n.highlightDisabledDays === !1, j = (l) => n.highlightWeekDays && n.highlightWeekDays.includes(l.value.getDay()), J = (l) => (n.range || n.weekPicker) && (n.multiCalendars > 0 ? l.current : !0) && q() && !(!l.current && n.hideOffsetDates) && !B(l) ? M(l) : !1, I = (l) => ({
    dp__cell_offset: !l.current,
    dp__pointer: !n.disabled && !(!l.current && n.hideOffsetDates) && !a(l.value),
    dp__cell_disabled: a(l.value),
    dp__cell_highlight: !R(l) && (m(l) || j(l)) && !P(l),
    dp__cell_highlight_active: !R && (m(l) || j(l)) && P(l),
    dp__today: !n.noToday && me(l.value, p.value) && l.current
  }), H = (l) => ({
    dp__active_date: P(l),
    dp__date_hover: te(l)
  }), g = (l) => ({
    ...d(l),
    ...T(l),
    dp__range_between_week: J(l) && n.weekPicker
  }), d = (l) => ({
    dp__range_start: n.multiCalendars > 0 ? l.current && _(l) && q() : _(l) && q(),
    dp__range_end: n.multiCalendars > 0 ? l.current && _(l, !1) && q() : _(l, !1) && q(),
    dp__range_between: J(l) && !n.weekPicker,
    dp__date_hover_start: N(te(l), l, !0),
    dp__date_hover_end: N(te(l), l, !1)
  }), T = (l) => ({
    ...d(l),
    dp__cell_auto_range: ee(l),
    dp__cell_auto_range_start: C(l),
    dp__cell_auto_range_end: Z(l)
  }), A = (l) => n.range ? n.autoRange ? T(l) : n.modelAuto ? { ...H(l), ...d(l) } : d(l) : n.weekPicker ? g(l) : H(l);
  return {
    setHoverDate: b,
    clearHoverDate: O,
    getDayClassData: (l) => ({
      ...I(l),
      ...A(l),
      [n.dayClass ? n.dayClass(l.value) : ""]: !0,
      [n.calendarCellClassName]: !!n.calendarCellClassName
    })
  };
}, Tr = ["id", "onKeydown"], Sr = {
  key: 0,
  class: "dp__sidebar_left"
}, Cr = {
  key: 1,
  class: "dp__preset_ranges"
}, Pr = ["onClick"], Nr = {
  key: 2,
  class: "dp__sidebar_right"
}, Rr = {
  key: 3,
  class: "dp__now_wrap"
}, Ir = /* @__PURE__ */ Ue({
  __name: "DatepickerMenu",
  props: {
    openOnTop: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    ...Je
  },
  emits: [
    "close-picker",
    "select-date",
    "auto-apply",
    "time-update",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "update:internal-model-value"
  ],
  setup(e, { emit: n }) {
    const a = e, { setMenuFocused: t, setShiftKey: r, control: c } = Hn(), { getCalendarDays: p, defaults: b } = Ye(a), O = on(), L = U(null), Y = kt({
      timePicker: !!(!a.enableTimePicker || a.timePicker || a.monthPicker),
      monthYearInput: !!a.timePicker,
      calendar: !1
    }), i = U([]), _ = U([]), N = U(null), B = U(null), Z = U(0), ee = U(!1), C = U(0);
    Fe(() => {
      var K;
      ee.value = !0, !((K = a.presetRanges) != null && K.length) && !O["left-sidebar"] && !O["right-sidebar"] && Qe();
      const v = Se(B);
      if (v && !a.textInput && !a.inline && (t(!0), m()), v) {
        const ke = (Me) => {
          !a.monthYearComponent && !a.timePickerComponent && !Object.keys(O).length && Me.preventDefault(), Me.stopImmediatePropagation(), Me.stopPropagation();
        };
        v.addEventListener("pointerdown", ke), v.addEventListener("mousedown", ke);
      }
      document.addEventListener("resize", Qe);
    }), rn(() => {
      document.removeEventListener("resize", Qe);
    });
    const { arrowRight: M, arrowLeft: x, arrowDown: q, arrowUp: te } = qe(), P = (v) => {
      v || v === 0 ? _.value[v].triggerTransition(
        I.value(v),
        H.value(v)
      ) : _.value.forEach(
        (K, ke) => K.triggerTransition(I.value(ke), H.value(ke))
      );
    }, m = () => {
      const v = Se(B);
      v && v.focus({ preventScroll: !0 });
    }, R = () => {
      var v;
      ((v = a.flow) == null ? void 0 : v.length) && C.value !== -1 && (C.value += 1, n("flow-step", C.value), $());
    }, j = () => {
      C.value = -1;
    }, {
      modelValue: J,
      month: I,
      year: H,
      time: g,
      updateTime: d,
      updateMonthYear: T,
      selectDate: A,
      getWeekNum: z,
      monthYearSelect: l,
      handleScroll: f,
      handleArrow: k,
      handleSwipe: V,
      getMarker: se,
      selectCurrentDate: y,
      presetDateRange: o
    } = Cl(a, n, R, P), { setHoverDate: G, clearHoverDate: ye, getDayClassData: de } = Ar(J, a), be = lt(O, "calendar"), Le = lt(O, "action"), ne = lt(O, "timePicker"), Ze = lt(O, "monthYear"), le = F(() => a.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), fe = F(() => kl(a.yearRange)), $e = F(() => wl(a.locale, a.monthNameFormat)), Qe = () => {
      const v = Se(L);
      v && (Z.value = v.getBoundingClientRect().width);
    }, ze = F(() => (v) => p(I.value(v), H.value(v))), et = F(
      () => b.value.multiCalendars > 0 && a.range ? [...Array(b.value.multiCalendars).keys()] : [0]
    ), vt = F(
      () => (v) => v === 1
    ), Bt = F(() => a.monthPicker || a.timePicker || a.yearPicker), Yt = F(
      () => ({
        dp__flex_display: b.value.multiCalendars > 0
      })
    ), $t = F(() => ({
      dp__instance_calendar: b.value.multiCalendars > 0
    })), mt = F(() => ({
      dp__menu_disabled: a.disabled,
      dp__menu_readonly: a.readonly
    })), Vt = F(
      () => (v) => Et(ze, v)
    ), Lt = F(
      () => ({
        dp__menu: !0,
        dp__menu_index: !a.inline,
        dp__relative: a.inline,
        [a.menuClassName]: !!a.menuClassName
      })
    ), Et = (v, K) => v.value(K).map((ke) => ({
      ...ke,
      days: ke.days.map((Me) => (Me.marker = se(Me), Me.classData = de(Me), Me))
    })), Dt = (v) => {
      v.stopPropagation(), v.preventDefault(), v.stopImmediatePropagation();
    }, mn = () => {
      a.escClose && n("close-picker");
    }, yn = (v, K = !1) => {
      A(v, K), a.spaceConfirm && n("select-date");
    }, Mt = (v) => {
      var K;
      (K = a.flow) != null && K.length && (Y[v] = !0, Object.keys(Y).filter((ke) => !Y[ke]).length || $());
    }, s = (v, K, ke, Me, ...Ee) => {
      if (a.flow[C.value] === v) {
        const X = Me ? K.value[0] : K.value;
        X && X[ke](...Ee);
      }
    }, $ = () => {
      s("month", i, "toggleMonthPicker", !0, !0), s("year", i, "toggleYearPicker", !0, !0), s("calendar", N, "toggleTimePicker", !1, !1, !0), s("time", N, "toggleTimePicker", !1, !0, !0);
      const v = a.flow[C.value];
      (v === "hours" || v === "minutes" || v === "seconds") && s(v, N, "toggleTimePicker", !1, !0, !0, v);
    }, W = (v) => {
      if (a.arrowNavigation) {
        if (v === "up")
          return te();
        if (v === "down")
          return q();
        if (v === "left")
          return x();
        if (v === "right")
          return M();
      } else
        v === "left" || v === "up" ? k("left", 0, v === "up") : k("right", 0, v === "down");
    }, ae = (v) => {
      r(v.shiftKey), !a.disableMonthYearSelect && v.code === "Tab" && v.target.classList.contains("dp__menu") && c.value.shiftKeyInMenu && (v.preventDefault(), v.stopImmediatePropagation(), n("close-picker"));
    };
    return (v, K) => {
      var ke;
      return h(), ce(ft, {
        appear: "",
        name: (ke = u(b).transitions) == null ? void 0 : ke.menuAppear,
        mode: "out-in",
        css: !!v.transitions
      }, {
        default: re(() => {
          var Me, Ee;
          return [
            Q("div", {
              id: v.uid ? `dp-menu-${v.uid}` : void 0,
              tabindex: "0",
              ref_key: "dpMenuRef",
              ref: B,
              role: "dialog",
              class: pe(u(Lt)),
              onMouseleave: K[12] || (K[12] = (...X) => u(ye) && u(ye)(...X)),
              onClick: Dt,
              onKeydown: [
                oe(mn, ["esc"]),
                K[13] || (K[13] = oe(xe((X) => W("left"), ["prevent"]), ["left"])),
                K[14] || (K[14] = oe(xe((X) => W("up"), ["prevent"]), ["up"])),
                K[15] || (K[15] = oe(xe((X) => W("down"), ["prevent"]), ["down"])),
                K[16] || (K[16] = oe(xe((X) => W("right"), ["prevent"]), ["right"])),
                ae
              ]
            }, [
              (v.disabled || v.readonly) && v.inline ? (h(), S("div", {
                key: 0,
                class: pe(u(mt))
              }, null, 2)) : D("", !0),
              !v.inline && !v.teleportCenter ? (h(), S("div", {
                key: 1,
                class: pe(u(le))
              }, null, 2)) : D("", !0),
              Q("div", {
                class: pe({
                  dp__menu_content_wrapper: ((Me = v.presetRanges) == null ? void 0 : Me.length) || !!v.$slots["left-sidebar"] || !!v.$slots["right-sidebar"]
                })
              }, [
                v.$slots["left-sidebar"] ? (h(), S("div", Sr, [
                  E(v.$slots, "left-sidebar")
                ])) : D("", !0),
                (Ee = v.presetRanges) != null && Ee.length ? (h(), S("div", Cr, [
                  (h(!0), S(ue, null, we(v.presetRanges, (X, st) => (h(), S("div", {
                    key: st,
                    style: ut(X.style || {}),
                    class: "dp__preset_range",
                    onClick: (ie) => u(o)(X.range, !!X.slot)
                  }, [
                    X.slot ? E(v.$slots, X.slot, {
                      key: 0,
                      presetDateRange: u(o),
                      label: X.label,
                      range: X.range
                    }) : (h(), S(ue, { key: 1 }, [
                      He(Te(X.label), 1)
                    ], 64))
                  ], 12, Pr))), 128))
                ])) : D("", !0),
                Q("div", {
                  class: "dp__instance_calendar",
                  ref_key: "calendarWrapperRef",
                  ref: L,
                  role: "document"
                }, [
                  Q("div", {
                    class: pe(u(Yt))
                  }, [
                    (h(!0), S(ue, null, we(u(et), (X, st) => (h(), S("div", {
                      key: X,
                      class: pe(u($t))
                    }, [
                      !v.disableMonthYearSelect && !v.timePicker ? (h(), ce(St(v.monthYearComponent ? v.monthYearComponent : vr), Ae({
                        key: 0,
                        ref_for: !0,
                        ref: (ie) => {
                          ie && (i.value[st] = ie);
                        },
                        months: u($e),
                        years: u(fe),
                        month: u(I)(X),
                        year: u(H)(X),
                        instance: X,
                        "internal-model-value": e.internalModelValue
                      }, v.$props, {
                        onMount: K[0] || (K[0] = (ie) => Mt("monthYearInput")),
                        onResetFlow: j,
                        onUpdateMonthYear: (ie) => u(T)(X, ie),
                        onMonthYearSelect: u(l),
                        onOverlayClosed: m
                      }), Oe({ _: 2 }, [
                        we(u(Ze), (ie, xn) => ({
                          name: ie,
                          fn: re((Ft) => [
                            E(v.$slots, ie, Be(Ge(Ft)))
                          ])
                        }))
                      ]), 1040, ["months", "years", "month", "year", "instance", "internal-model-value", "onUpdateMonthYear", "onMonthYearSelect"])) : D("", !0),
                      Xe(er, Ae({
                        ref_for: !0,
                        ref: (ie) => {
                          ie && (_.value[st] = ie);
                        },
                        "specific-mode": u(Bt),
                        "get-week-num": u(z),
                        instance: X,
                        "mapped-dates": u(Vt)(X),
                        month: u(I)(X),
                        year: u(H)(X)
                      }, v.$props, {
                        "flow-step": C.value,
                        "onUpdate:flow-step": K[1] || (K[1] = (ie) => C.value = ie),
                        onSelectDate: (ie) => u(A)(ie, !u(vt)(X)),
                        onHandleSpace: (ie) => yn(ie, !u(vt)(X)),
                        onSetHoverDate: K[2] || (K[2] = (ie) => u(G)(ie)),
                        onHandleScroll: (ie) => u(f)(ie, X),
                        onHandleSwipe: (ie) => u(V)(ie, X),
                        onMount: K[3] || (K[3] = (ie) => Mt("calendar")),
                        onResetFlow: j
                      }), Oe({ _: 2 }, [
                        we(u(be), (ie, xn) => ({
                          name: ie,
                          fn: re((Ft) => [
                            E(v.$slots, ie, Be(Ge({ ...Ft })))
                          ])
                        }))
                      ]), 1040, ["specific-mode", "get-week-num", "instance", "mapped-dates", "month", "year", "flow-step", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
                    ], 2))), 128))
                  ], 2),
                  Q("div", null, [
                    v.$slots["time-picker"] ? E(v.$slots, "time-picker", Be(Ae({ key: 0 }, { time: u(g), updateTime: u(d) }))) : (h(), S(ue, { key: 1 }, [
                      v.enableTimePicker && !v.monthPicker && !v.weekPicker ? (h(), ce(St(v.timePickerComponent ? v.timePickerComponent : _r), Ae({
                        key: 0,
                        ref_key: "timePickerRef",
                        ref: N,
                        hours: u(g).hours,
                        minutes: u(g).minutes,
                        seconds: u(g).seconds,
                        "internal-model-value": e.internalModelValue
                      }, v.$props, {
                        onMount: K[4] || (K[4] = (X) => Mt("timePicker")),
                        "onUpdate:hours": K[5] || (K[5] = (X) => u(d)(X)),
                        "onUpdate:minutes": K[6] || (K[6] = (X) => u(d)(X, !1)),
                        "onUpdate:seconds": K[7] || (K[7] = (X) => u(d)(X, !1, !0)),
                        onResetFlow: j,
                        onOverlayClosed: m
                      }), Oe({ _: 2 }, [
                        we(u(ne), (X, st) => ({
                          name: X,
                          fn: re((ie) => [
                            E(v.$slots, X, Be(Ge(ie)))
                          ])
                        }))
                      ]), 1040, ["hours", "minutes", "seconds", "internal-model-value"])) : D("", !0)
                    ], 64))
                  ])
                ], 512),
                v.$slots["right-sidebar"] ? (h(), S("div", Nr, [
                  E(v.$slots, "right-sidebar")
                ])) : D("", !0),
                v.showNowButton ? (h(), S("div", Rr, [
                  v.$slots["now-button"] ? E(v.$slots, "now-button", {
                    key: 0,
                    selectCurrentDate: u(y)
                  }) : D("", !0),
                  v.$slots["now-button"] ? D("", !0) : (h(), S("button", {
                    key: 1,
                    type: "button",
                    role: "button",
                    class: "dp__now_button",
                    onClick: K[8] || (K[8] = (...X) => u(y) && u(y)(...X))
                  }, Te(v.nowButtonLabel), 1))
                ])) : D("", !0)
              ], 2),
              v.$slots["action-row"] ? E(v.$slots, "action-row", Be(Ae({ key: 2 }, {
                internalModelValue: e.internalModelValue,
                selectDate: () => v.$emit("select-date"),
                closePicker: () => v.$emit("close-picker")
              }))) : (h(), S(ue, { key: 3 }, [
                !v.autoApply || v.keepActionRow ? (h(), ce(St(v.actionRowComponent ? v.actionRowComponent : zl), Ae({
                  key: 0,
                  "menu-mount": ee.value,
                  "calendar-width": Z.value,
                  "internal-model-value": e.internalModelValue
                }, v.$props, {
                  onClosePicker: K[9] || (K[9] = (X) => v.$emit("close-picker")),
                  onSelectDate: K[10] || (K[10] = (X) => v.$emit("select-date")),
                  onInvalidSelect: K[11] || (K[11] = (X) => v.$emit("invalid-select"))
                }), Oe({ _: 2 }, [
                  we(u(Le), (X, st) => ({
                    name: X,
                    fn: re((ie) => [
                      E(v.$slots, X, Be(Ge({ ...ie })))
                    ])
                  }))
                ]), 1040, ["menu-mount", "calendar-width", "internal-model-value"])) : D("", !0)
              ], 64))
            ], 42, Tr)
          ];
        }),
        _: 3
      }, 8, ["name", "css"]);
    };
  }
}), Or = typeof window < "u" ? window : void 0, Xt = () => {
}, Br = (e) => Zn() ? (Xn(e), !0) : !1, Yr = (e, n, a, t) => {
  if (!e)
    return Xt;
  let r = Xt;
  const c = wt(
    () => u(e),
    (b) => {
      r(), b && (b.addEventListener(n, a, t), r = () => {
        b.removeEventListener(n, a, t), r = Xt;
      });
    },
    { immediate: !0, flush: "post" }
  ), p = () => {
    c(), r();
  };
  return Br(p), p;
}, Vr = (e, n, a, t = {}) => {
  const { window: r = Or, event: c = "pointerdown" } = t;
  return r ? Yr(r, c, (b) => {
    const O = Se(e), L = Se(n);
    !O || !L || O === b.target || b.composedPath().includes(O) || b.composedPath().includes(L) || a(b);
  }, { passive: !0 }) : void 0;
}, Lr = /* @__PURE__ */ Ue({
  __name: "VueDatePicker",
  props: {
    ...Je
  },
  emits: [
    "update:model-value",
    "text-submit",
    "closed",
    "cleared",
    "open",
    "focus",
    "blur",
    "internal-model-change",
    "recalculate-position",
    "flow-step",
    "update-month-year",
    "invalid-select"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, r = on(), c = U(!1), p = qt(t, "modelValue"), b = qt(t, "timezone"), O = U(null), L = U(null), Y = U(!1), { setMenuFocused: i, setShiftKey: _ } = Hn(), { clearArrowNav: N } = qe(), { validateDate: B, isValidTime: Z, defaults: ee } = Ye(t);
    Fe(() => {
      j(t.modelValue), t.inline || (window.addEventListener("scroll", T), window.addEventListener("resize", A)), t.inline && (c.value = !0);
    }), rn(() => {
      t.inline || (window.removeEventListener("scroll", T), window.removeEventListener("resize", A));
    });
    const C = lt(r, "all", t.presetRanges), M = lt(r, "input");
    wt(
      [p, b],
      () => {
        j(p.value);
      },
      { deep: !0 }
    );
    const { openOnTop: x, menuPosition: q, setMenuPosition: te, setInitialPosition: P } = Rl(
      O,
      L,
      a,
      t
    ), {
      inputValue: m,
      internalModelValue: R,
      parseExternalModelValue: j,
      emitModelValue: J,
      formatInputValue: I,
      checkBeforeEmit: H
    } = Pl(a, t, Y), g = F(
      () => ({
        dp__main: !0,
        dp__theme_dark: t.dark,
        dp__theme_light: !t.dark,
        dp__flex_display: t.inline,
        dp__flex_display_with_input: t.inlineWithInput
      })
    ), d = F(() => t.dark ? "dp__theme_dark" : "dp__theme_light"), T = () => {
      c.value && (t.closeOnScroll ? o() : t.autoPosition ? te() : window.removeEventListener("scroll", T));
    }, A = () => {
      c.value && te();
    }, z = () => {
      !t.disabled && !t.readonly && (P(), c.value = !0, bt().then(() => {
        te(), c.value && a("open");
      }), c.value || y(), j(t.modelValue));
    }, l = () => {
      m.value = "", y(), a("update:model-value", null), a("cleared"), o();
    }, f = () => {
      const le = R.value;
      return !le || !Array.isArray(le) && B(le) ? !0 : Array.isArray(le) ? le.length === 2 && B(le[0]) && B(le[1]) ? !0 : B(le[0]) : !1;
    }, k = () => {
      H() && f() ? (J(), o()) : a("invalid-select", R.value);
    }, V = (le) => {
      J(), t.closeOnAutoApply && !le && o();
    }, se = (le = !1) => {
      t.autoApply && Z(R.value) && f() && (t.range && Array.isArray(R.value) ? (t.partialRange || R.value.length === 2) && V(le) : V(le));
    }, y = () => {
      t.textInput || (R.value = null);
    }, o = () => {
      t.inline || (c.value && (c.value = !1, i(!1), _(!1), N(), a("closed"), P(), m.value && j(p.value)), y(), L.value && L.value.focusInput());
    }, G = (le, fe) => {
      if (!le) {
        R.value = null;
        return;
      }
      R.value = le, fe && (k(), a("text-submit"));
    }, ye = () => {
      t.autoApply && Z(R.value) && J();
    }, de = () => c.value ? o() : z(), be = (le) => {
      R.value = le;
    }, Le = F(() => t.textInput && ee.value.textInputOptions.format), ne = () => {
      Le.value && (Y.value = !0, I()), a("focus");
    }, Ze = () => {
      Le.value && (Y.value = !1, I()), a("blur");
    };
    return Vr(
      O,
      L,
      t.onClickOutside ? () => t.onClickOutside(f) : o
    ), n({
      closeMenu: o,
      selectDate: k,
      clearValue: l,
      openMenu: z,
      onScroll: T,
      formatInputValue: I,
      updateInternalModelValue: be
    }), (le, fe) => (h(), S("div", {
      class: pe(u(g))
    }, [
      Xe(Fl, Ae({
        ref_key: "inputRef",
        ref: L,
        "is-menu-open": c.value,
        "input-value": u(m),
        "onUpdate:input-value": fe[0] || (fe[0] = ($e) => nt(m) ? m.value = $e : null)
      }, le.$props, {
        onClear: l,
        onOpen: z,
        onSetInputDate: G,
        onSetEmptyDate: u(J),
        onSelectDate: k,
        onToggle: de,
        onClose: o,
        onFocus: ne,
        onBlur: Ze
      }), Oe({ _: 2 }, [
        we(u(M), ($e, Qe) => ({
          name: $e,
          fn: re((ze) => [
            E(le.$slots, $e, Be(Ge(ze)))
          ])
        }))
      ]), 1040, ["is-menu-open", "input-value", "onSetEmptyDate"]),
      c.value ? (h(), ce(qn, {
        key: 0,
        to: le.teleport,
        disabled: le.inline
      }, [
        c.value ? (h(), ce(Ir, Ae({
          key: 0,
          ref_key: "dpMenuRef",
          ref: O,
          class: u(d),
          style: u(q),
          "open-on-top": u(x)
        }, le.$props, {
          "internal-model-value": u(R),
          "onUpdate:internal-model-value": fe[1] || (fe[1] = ($e) => nt(R) ? R.value = $e : null),
          onClosePicker: o,
          onSelectDate: k,
          onAutoApply: se,
          onTimeUpdate: ye,
          onFlowStep: fe[2] || (fe[2] = ($e) => le.$emit("flow-step", $e)),
          onUpdateMonthYear: fe[3] || (fe[3] = ($e) => le.$emit("update-month-year", $e)),
          onInvalidSelect: fe[4] || (fe[4] = ($e) => le.$emit("invalid-select", u(R)))
        }), Oe({ _: 2 }, [
          we(u(C), ($e, Qe) => ({
            name: $e,
            fn: re((ze) => [
              E(le.$slots, $e, Be(Ge({ ...ze })))
            ])
          }))
        ]), 1040, ["class", "style", "open-on-top", "internal-model-value"])) : D("", !0)
      ], 8, ["to", "disabled"])) : D("", !0)
    ], 2));
  }
}), Kn = /* @__PURE__ */ (() => {
  const e = Lr;
  return e.install = (n) => {
    n.component("Vue3DatePicker", e);
  }, e;
})(), Er = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Kn
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(Er).forEach(([e, n]) => {
  e !== "default" && (Kn[e] = n);
});
export {
  Kn as default
};

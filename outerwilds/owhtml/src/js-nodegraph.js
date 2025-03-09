// from: https://w99910.github.io/d3canvas-networkgraph/dist/d3canvas-networkgraph.es.js
class le extends Map {
    constructor(e, n = gn) {
        if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), e != null)
        for (const [r, i] of e)
        this.set(r, i);
    }
    get(e) {
        return super.get(fe(this, e));
    }
    has(e) {
        return super.has(fe(this, e));
    }
    set(e, n) {
        return super.set(cn(this, e), n);
    }
    delete(e) {
        return super.delete(hn(this, e));
    }
}
function fe({ _intern: t, _key: e }, n) {
    const r = e(n);
    return t.has(r) ? t.get(r) : n;
}
function cn({ _intern: t, _key: e }, n) {
    const r = e(n);
    return t.has(r) ? t.get(r) : (t.set(r, n), n);
}
function hn({ _intern: t, _key: e }, n) {
    const r = e(n);
    return t.has(r) && (n = t.get(r), t.delete(r)), n;
}
function gn(t) {
    return t !== null && typeof t == "object" ? t.valueOf() : t;
}
var dn = { value: () => {
} };
function Xt() {
    for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
        if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r))
        throw new Error("illegal type: " + r);
        n[r] = [];
    }
    return new Mt(n);
}
function Mt(t) {
    this._ = t;
}
function yn(t, e) {
    return t.trim().split(/^|\s+/).map(function(n) {
        var r = "", i = n.indexOf(".");
        if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n))
        throw new Error("unknown type: " + n);
        return { type: n, name: r };
    });
}
Mt.prototype = Xt.prototype = {
    constructor: Mt,
    on: function(t, e) {
        var n = this._, r = yn(t + "", n), i, o = -1, u = r.length;
        if (arguments.length < 2) {
            for (; ++o < u; )
            if ((i = (t = r[o]).type) && (i = pn(n[i], t.name)))
            return i;
            return;
        }
        if (e != null && typeof e != "function")
        throw new Error("invalid callback: " + e);
        for (; ++o < u; )
        if (i = (t = r[o]).type)
        n[i] = ce(n[i], t.name, e);
        else if (e == null)
        for (i in n)
        n[i] = ce(n[i], t.name, null);
        return this;
    },
    copy: function() {
        var t = {}, e = this._;
        for (var n in e)
        t[n] = e[n].slice();
        return new Mt(t);
    },
    call: function(t, e) {
        if ((i = arguments.length - 2) > 0)
        for (var n = new Array(i), r = 0, i, o; r < i; ++r)
        n[r] = arguments[r + 2];
        if (!this._.hasOwnProperty(t))
        throw new Error("unknown type: " + t);
        for (o = this._[t], r = 0, i = o.length; r < i; ++r)
        o[r].value.apply(e, n);
    },
    apply: function(t, e, n) {
        if (!this._.hasOwnProperty(t))
        throw new Error("unknown type: " + t);
        for (var r = this._[t], i = 0, o = r.length; i < o; ++i)
        r[i].value.apply(e, n);
    }
};
function pn(t, e) {
    for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
    return i.value;
}
function ce(t, e, n) {
    for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
        t[r] = dn, t = t.slice(0, r).concat(t.slice(r + 1));
        break;
    }
    return n != null && t.push({ name: e, value: n }), t;
}
var Lt = "http://www.w3.org/1999/xhtml";
const he = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: Lt,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ft(t) {
    var e = t += "", n = e.indexOf(":");
    return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), he.hasOwnProperty(e) ? { space: he[e], local: t } : t;
}
function mn(t) {
    return function() {
        var e = this.ownerDocument, n = this.namespaceURI;
        return n === Lt && e.documentElement.namespaceURI === Lt ? e.createElement(t) : e.createElementNS(n, t);
    };
}
function xn(t) {
    return function() {
        return this.ownerDocument.createElementNS(t.space, t.local);
    };
}
function Xe(t) {
    var e = Ft(t);
    return (e.local ? xn : mn)(e);
}
function vn() {
}
function te(t) {
    return t == null ? vn : function() {
        return this.querySelector(t);
    };
}
function _n(t) {
    typeof t != "function" && (t = te(t));
    for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], u = o.length, a = r[i] = new Array(u), l, s, f = 0; f < u; ++f)
    (l = o[f]) && (s = t.call(l, l.__data__, f, o)) && ("__data__" in l && (s.__data__ = l.__data__), a[f] = s);
    return new G(r, this._parents);
}
function wn(t) {
    return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function bn() {
    return [];
}
function Fe(t) {
    return t == null ? bn : function() {
        return this.querySelectorAll(t);
    };
}
function Nn(t) {
    return function() {
        return wn(t.apply(this, arguments));
    };
}
function kn(t) {
    typeof t == "function" ? t = Nn(t) : t = Fe(t);
    for (var e = this._groups, n = e.length, r = [], i = [], o = 0; o < n; ++o)
    for (var u = e[o], a = u.length, l, s = 0; s < a; ++s)
    (l = u[s]) && (r.push(t.call(l, l.__data__, s, u)), i.push(l));
    return new G(r, i);
}
function He(t) {
    return function() {
        return this.matches(t);
    };
}
function Ye(t) {
    return function(e) {
        return e.matches(t);
    };
}
var An = Array.prototype.find;
function zn(t) {
    return function() {
        return An.call(this.children, t);
    };
}
function Mn() {
    return this.firstElementChild;
}
function En(t) {
    return this.select(t == null ? Mn : zn(typeof t == "function" ? t : Ye(t)));
}
var Sn = Array.prototype.filter;
function Tn() {
    return Array.from(this.children);
}
function $n(t) {
    return function() {
        return Sn.call(this.children, t);
    };
}
function Cn(t) {
    return this.selectAll(t == null ? Tn : $n(typeof t == "function" ? t : Ye(t)));
}
function Rn(t) {
    typeof t != "function" && (t = He(t));
    for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], u = o.length, a = r[i] = [], l, s = 0; s < u; ++s)
    (l = o[s]) && t.call(l, l.__data__, s, o) && a.push(l);
    return new G(r, this._parents);
}
function Be(t) {
    return new Array(t.length);
}
function Dn() {
    return new G(this._enter || this._groups.map(Be), this._parents);
}
function $t(t, e) {
    this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
$t.prototype = {
    constructor: $t,
    appendChild: function(t) {
        return this._parent.insertBefore(t, this._next);
    },
    insertBefore: function(t, e) {
        return this._parent.insertBefore(t, e);
    },
    querySelector: function(t) {
        return this._parent.querySelector(t);
    },
    querySelectorAll: function(t) {
        return this._parent.querySelectorAll(t);
    }
};
function In(t) {
    return function() {
        return t;
    };
}
function Pn(t, e, n, r, i, o) {
    for (var u = 0, a, l = e.length, s = o.length; u < s; ++u)
    (a = e[u]) ? (a.__data__ = o[u], r[u] = a) : n[u] = new $t(t, o[u]);
    for (; u < l; ++u)
    (a = e[u]) && (i[u] = a);
}
function Xn(t, e, n, r, i, o, u) {
    var a, l, s = /* @__PURE__ */ new Map(), f = e.length, p = o.length, d = new Array(f), g;
    for (a = 0; a < f; ++a)
    (l = e[a]) && (d[a] = g = u.call(l, l.__data__, a, e) + "", s.has(g) ? i[a] = l : s.set(g, l));
    for (a = 0; a < p; ++a)
    g = u.call(t, o[a], a, o) + "", (l = s.get(g)) ? (r[a] = l, l.__data__ = o[a], s.delete(g)) : n[a] = new $t(t, o[a]);
    for (a = 0; a < f; ++a)
    (l = e[a]) && s.get(d[a]) === l && (i[a] = l);
}
function Fn(t) {
    return t.__data__;
}
function Hn(t, e) {
    if (!arguments.length)
    return Array.from(this, Fn);
    var n = e ? Xn : Pn, r = this._parents, i = this._groups;
    typeof t != "function" && (t = In(t));
    for (var o = i.length, u = new Array(o), a = new Array(o), l = new Array(o), s = 0; s < o; ++s) {
        var f = r[s], p = i[s], d = p.length, g = Yn(t.call(f, f && f.__data__, s, r)), w = g.length, m = a[s] = new Array(w), c = u[s] = new Array(w), y = l[s] = new Array(d);
        n(f, p, m, c, y, g, e);
        for (var v = 0, z = 0, N, D; v < w; ++v)
        if (N = m[v]) {
            for (v >= z && (z = v + 1); !(D = c[z]) && ++z < w; )
            ;
            N._next = D || null;
        }
    }
    return u = new G(u, r), u._enter = a, u._exit = l, u;
}
function Yn(t) {
    return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Bn() {
    return new G(this._exit || this._groups.map(Be), this._parents);
}
function On(t, e, n) {
    var r = this.enter(), i = this, o = this.exit();
    return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? o.remove() : n(o), r && i ? r.merge(i).order() : i;
}
function Vn(t) {
    for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, o = r.length, u = Math.min(i, o), a = new Array(i), l = 0; l < u; ++l)
    for (var s = n[l], f = r[l], p = s.length, d = a[l] = new Array(p), g, w = 0; w < p; ++w)
    (g = s[w] || f[w]) && (d[w] = g);
    for (; l < i; ++l)
    a[l] = n[l];
    return new G(a, this._parents);
}
function qn() {
    for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, o = r[i], u; --i >= 0; )
    (u = r[i]) && (o && u.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(u, o), o = u);
    return this;
}
function Ln(t) {
    t || (t = Wn);
    function e(p, d) {
        return p && d ? t(p.__data__, d.__data__) : !p - !d;
    }
    for (var n = this._groups, r = n.length, i = new Array(r), o = 0; o < r; ++o) {
        for (var u = n[o], a = u.length, l = i[o] = new Array(a), s, f = 0; f < a; ++f)
        (s = u[f]) && (l[f] = s);
        l.sort(e);
    }
    return new G(i, this._parents).order();
}
function Wn(t, e) {
    return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Un() {
    var t = arguments[0];
    return arguments[0] = this, t.apply(null, arguments), this;
}
function Gn() {
    return Array.from(this);
}
function Kn() {
    for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length; i < o; ++i) {
        var u = r[i];
        if (u)
        return u;
    }
    return null;
}
function Zn() {
    let t = 0;
    for (const e of this)
    ++t;
    return t;
}
function Qn() {
    return !this.node();
}
function Jn(t) {
    for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], o = 0, u = i.length, a; o < u; ++o)
    (a = i[o]) && t.call(a, a.__data__, o, i);
    return this;
}
function jn(t) {
    return function() {
        this.removeAttribute(t);
    };
}
function tr(t) {
    return function() {
        this.removeAttributeNS(t.space, t.local);
    };
}
function er(t, e) {
    return function() {
        this.setAttribute(t, e);
    };
}
function nr(t, e) {
    return function() {
        this.setAttributeNS(t.space, t.local, e);
    };
}
function rr(t, e) {
    return function() {
        var n = e.apply(this, arguments);
        n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
    };
}
function ir(t, e) {
    return function() {
        var n = e.apply(this, arguments);
        n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
    };
}
function or(t, e) {
    var n = Ft(t);
    if (arguments.length < 2) {
        var r = this.node();
        return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
    }
    return this.each((e == null ? n.local ? tr : jn : typeof e == "function" ? n.local ? ir : rr : n.local ? nr : er)(n, e));
}
function Oe(t) {
    return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function ur(t) {
    return function() {
        this.style.removeProperty(t);
    };
}
function ar(t, e, n) {
    return function() {
        this.style.setProperty(t, e, n);
    };
}
function sr(t, e, n) {
    return function() {
        var r = e.apply(this, arguments);
        r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
    };
}
function lr(t, e, n) {
    return arguments.length > 1 ? this.each((e == null ? ur : typeof e == "function" ? sr : ar)(t, e, n ?? "")) : ct(this.node(), t);
}
function ct(t, e) {
    return t.style.getPropertyValue(e) || Oe(t).getComputedStyle(t, null).getPropertyValue(e);
}
function fr(t) {
    return function() {
        delete this[t];
    };
}
function cr(t, e) {
    return function() {
        this[t] = e;
    };
}
function hr(t, e) {
    return function() {
        var n = e.apply(this, arguments);
        n == null ? delete this[t] : this[t] = n;
    };
}
function gr(t, e) {
    return arguments.length > 1 ? this.each((e == null ? fr : typeof e == "function" ? hr : cr)(t, e)) : this.node()[t];
}
function Ve(t) {
    return t.trim().split(/^|\s+/);
}
function ee(t) {
    return t.classList || new qe(t);
}
function qe(t) {
    this._node = t, this._names = Ve(t.getAttribute("class") || "");
}
qe.prototype = {
    add: function(t) {
        var e = this._names.indexOf(t);
        e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
    },
    remove: function(t) {
        var e = this._names.indexOf(t);
        e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
    },
    contains: function(t) {
        return this._names.indexOf(t) >= 0;
    }
};
function Le(t, e) {
    for (var n = ee(t), r = -1, i = e.length; ++r < i; )
    n.add(e[r]);
}
function We(t, e) {
    for (var n = ee(t), r = -1, i = e.length; ++r < i; )
    n.remove(e[r]);
}
function dr(t) {
    return function() {
        Le(this, t);
    };
}
function yr(t) {
    return function() {
        We(this, t);
    };
}
function pr(t, e) {
    return function() {
        (e.apply(this, arguments) ? Le : We)(this, t);
    };
}
function mr(t, e) {
    var n = Ve(t + "");
    if (arguments.length < 2) {
        for (var r = ee(this.node()), i = -1, o = n.length; ++i < o; )
        if (!r.contains(n[i]))
        return !1;
        return !0;
    }
    return this.each((typeof e == "function" ? pr : e ? dr : yr)(n, e));
}
function xr() {
    this.textContent = "";
}
function vr(t) {
    return function() {
        this.textContent = t;
    };
}
function _r(t) {
    return function() {
        var e = t.apply(this, arguments);
        this.textContent = e ?? "";
    };
}
function wr(t) {
    return arguments.length ? this.each(t == null ? xr : (typeof t == "function" ? _r : vr)(t)) : this.node().textContent;
}
function br() {
    this.innerHTML = "";
}
function Nr(t) {
    return function() {
        this.innerHTML = t;
    };
}
function kr(t) {
    return function() {
        var e = t.apply(this, arguments);
        this.innerHTML = e ?? "";
    };
}
function Ar(t) {
    return arguments.length ? this.each(t == null ? br : (typeof t == "function" ? kr : Nr)(t)) : this.node().innerHTML;
}
function zr() {
    this.nextSibling && this.parentNode.appendChild(this);
}
function Mr() {
    return this.each(zr);
}
function Er() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Sr() {
    return this.each(Er);
}
function Tr(t) {
    var e = typeof t == "function" ? t : Xe(t);
    return this.select(function() {
        return this.appendChild(e.apply(this, arguments));
    });
}
function $r() {
    return null;
}
function Cr(t, e) {
    var n = typeof t == "function" ? t : Xe(t), r = e == null ? $r : typeof e == "function" ? e : te(e);
    return this.select(function() {
        return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
    });
}
function Rr() {
    var t = this.parentNode;
    t && t.removeChild(this);
}
function Dr() {
    return this.each(Rr);
}
function Ir() {
    var t = this.cloneNode(!1), e = this.parentNode;
    return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Pr() {
    var t = this.cloneNode(!0), e = this.parentNode;
    return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Xr(t) {
    return this.select(t ? Pr : Ir);
}
function Fr(t) {
    return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Hr(t) {
    return function(e) {
        t.call(this, e, this.__data__);
    };
}
function Yr(t) {
    return t.trim().split(/^|\s+/).map(function(e) {
        var n = "", r = e.indexOf(".");
        return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
    });
}
function Br(t) {
    return function() {
        var e = this.__on;
        if (e) {
            for (var n = 0, r = -1, i = e.length, o; n < i; ++n)
            o = e[n], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : e[++r] = o;
            ++r ? e.length = r : delete this.__on;
        }
    };
}
function Or(t, e, n) {
    return function() {
        var r = this.__on, i, o = Hr(e);
        if (r) {
            for (var u = 0, a = r.length; u < a; ++u)
            if ((i = r[u]).type === t.type && i.name === t.name) {
                this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = n), i.value = e;
                return;
            }
        }
        this.addEventListener(t.type, o, n), i = { type: t.type, name: t.name, value: e, listener: o, options: n }, r ? r.push(i) : this.__on = [i];
    };
}
function Vr(t, e, n) {
    var r = Yr(t + ""), i, o = r.length, u;
    if (arguments.length < 2) {
        var a = this.node().__on;
        if (a) {
            for (var l = 0, s = a.length, f; l < s; ++l)
            for (i = 0, f = a[l]; i < o; ++i)
            if ((u = r[i]).type === f.type && u.name === f.name)
            return f.value;
        }
        return;
    }
    for (a = e ? Or : Br, i = 0; i < o; ++i)
    this.each(a(r[i], e, n));
    return this;
}
function Ue(t, e, n) {
    var r = Oe(t), i = r.CustomEvent;
    typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function qr(t, e) {
    return function() {
        return Ue(this, t, e);
    };
}
function Lr(t, e) {
    return function() {
        return Ue(this, t, e.apply(this, arguments));
    };
}
function Wr(t, e) {
    return this.each((typeof e == "function" ? Lr : qr)(t, e));
}
function* Ur() {
    for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length, u; i < o; ++i)
    (u = r[i]) && (yield u);
}
var Ge = [null];
function G(t, e) {
    this._groups = t, this._parents = e;
}
function wt() {
    return new G([[document.documentElement]], Ge);
}
function Gr() {
    return this;
}
G.prototype = wt.prototype = {
    constructor: G,
    select: _n,
    selectAll: kn,
    selectChild: En,
    selectChildren: Cn,
    filter: Rn,
    data: Hn,
    enter: Dn,
    exit: Bn,
    join: On,
    merge: Vn,
    selection: Gr,
    order: qn,
    sort: Ln,
    call: Un,
    nodes: Gn,
    node: Kn,
    size: Zn,
    empty: Qn,
    each: Jn,
    attr: or,
    style: lr,
    property: gr,
    classed: mr,
    text: wr,
    html: Ar,
    raise: Mr,
    lower: Sr,
    append: Tr,
    insert: Cr,
    remove: Dr,
    clone: Xr,
    datum: Fr,
    on: Vr,
    dispatch: Wr,
    [Symbol.iterator]: Ur
};
function et(t) {
    return typeof t == "string" ? new G([[document.querySelector(t)]], [document.documentElement]) : new G([[t]], Ge);
}
function Kr(t) {
    let e;
    for (; e = t.sourceEvent; )
    t = e;
    return t;
}
function ut(t, e) {
    if (t = Kr(t), e === void 0 && (e = t.currentTarget), e) {
        var n = e.ownerSVGElement || e;
        if (n.createSVGPoint) {
            var r = n.createSVGPoint();
            return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(e.getScreenCTM().inverse()), [r.x, r.y];
        }
        if (e.getBoundingClientRect) {
            var i = e.getBoundingClientRect();
            return [t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop];
        }
    }
    return [t.pageX, t.pageY];
}
const Wt = { capture: !0, passive: !1 };
function Ut(t) {
    t.preventDefault(), t.stopImmediatePropagation();
}
function Zr(t) {
    var e = t.document.documentElement, n = et(t).on("dragstart.drag", Ut, Wt);
    "onselectstart" in e ? n.on("selectstart.drag", Ut, Wt) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function Qr(t, e) {
    var n = t.document.documentElement, r = et(t).on("dragstart.drag", null);
    e && (r.on("click.drag", Ut, Wt), setTimeout(function() {
        r.on("click.drag", null);
    }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
function ne(t, e, n) {
    t.prototype = e.prototype = n, n.constructor = t;
}
function Ke(t, e) {
    var n = Object.create(t.prototype);
    for (var r in e)
    n[r] = e[r];
    return n;
}
function bt() {
}
var mt = 0.7, Ct = 1 / mt, ft = "\\s*([+-]?\\d+)\\s*", xt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", J = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Jr = /^#([0-9a-f]{3,8})$/, jr = new RegExp(`^rgb\\(${ft},${ft},${ft}\\)$`), ti = new RegExp(`^rgb\\(${J},${J},${J}\\)$`), ei = new RegExp(`^rgba\\(${ft},${ft},${ft},${xt}\\)$`), ni = new RegExp(`^rgba\\(${J},${J},${J},${xt}\\)$`), ri = new RegExp(`^hsl\\(${xt},${J},${J}\\)$`), ii = new RegExp(`^hsla\\(${xt},${J},${J},${xt}\\)$`), ge = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
};
ne(bt, vt, {
    copy(t) {
        return Object.assign(new this.constructor(), this, t);
    },
    displayable() {
        return this.rgb().displayable();
    },
    hex: de,
    // Deprecated! Use color.formatHex.
    formatHex: de,
    formatHex8: oi,
    formatHsl: ui,
    formatRgb: ye,
    toString: ye
});
function de() {
    return this.rgb().formatHex();
}
function oi() {
    return this.rgb().formatHex8();
}
function ui() {
    return Ze(this).formatHsl();
}
function ye() {
    return this.rgb().formatRgb();
}
function vt(t) {
    var e, n;
    return t = (t + "").trim().toLowerCase(), (e = Jr.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? pe(e) : n === 3 ? new W(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Nt(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Nt(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = jr.exec(t)) ? new W(e[1], e[2], e[3], 1) : (e = ti.exec(t)) ? new W(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = ei.exec(t)) ? Nt(e[1], e[2], e[3], e[4]) : (e = ni.exec(t)) ? Nt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = ri.exec(t)) ? ve(e[1], e[2] / 100, e[3] / 100, 1) : (e = ii.exec(t)) ? ve(e[1], e[2] / 100, e[3] / 100, e[4]) : ge.hasOwnProperty(t) ? pe(ge[t]) : t === "transparent" ? new W(NaN, NaN, NaN, 0) : null;
}
function pe(t) {
    return new W(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Nt(t, e, n, r) {
    return r <= 0 && (t = e = n = NaN), new W(t, e, n, r);
}
function ai(t) {
    return t instanceof bt || (t = vt(t)), t ? (t = t.rgb(), new W(t.r, t.g, t.b, t.opacity)) : new W();
}
function Gt(t, e, n, r) {
    return arguments.length === 1 ? ai(t) : new W(t, e, n, r ?? 1);
}
function W(t, e, n, r) {
    this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
ne(W, Gt, Ke(bt, {
    brighter(t) {
        return t = t == null ? Ct : Math.pow(Ct, t), new W(this.r * t, this.g * t, this.b * t, this.opacity);
    },
    darker(t) {
        return t = t == null ? mt : Math.pow(mt, t), new W(this.r * t, this.g * t, this.b * t, this.opacity);
    },
    rgb() {
        return this;
    },
    clamp() {
        return new W(st(this.r), st(this.g), st(this.b), Rt(this.opacity));
    },
    displayable() {
        return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: me,
    // Deprecated! Use color.formatHex.
    formatHex: me,
    formatHex8: si,
    formatRgb: xe,
    toString: xe
}));
function me() {
    return `#${at(this.r)}${at(this.g)}${at(this.b)}`;
}
function si() {
    return `#${at(this.r)}${at(this.g)}${at(this.b)}${at((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function xe() {
    const t = Rt(this.opacity);
    return `${t === 1 ? "rgb(" : "rgba("}${st(this.r)}, ${st(this.g)}, ${st(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Rt(t) {
    return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function st(t) {
    return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function at(t) {
    return t = st(t), (t < 16 ? "0" : "") + t.toString(16);
}
function ve(t, e, n, r) {
    return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Z(t, e, n, r);
}
function Ze(t) {
    if (t instanceof Z)
    return new Z(t.h, t.s, t.l, t.opacity);
    if (t instanceof bt || (t = vt(t)), !t)
    return new Z();
    if (t instanceof Z)
    return t;
    t = t.rgb();
    var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), o = Math.max(e, n, r), u = NaN, a = o - i, l = (o + i) / 2;
    return a ? (e === o ? u = (n - r) / a + (n < r) * 6 : n === o ? u = (r - e) / a + 2 : u = (e - n) / a + 4, a /= l < 0.5 ? o + i : 2 - o - i, u *= 60) : a = l > 0 && l < 1 ? 0 : u, new Z(u, a, l, t.opacity);
}
function li(t, e, n, r) {
    return arguments.length === 1 ? Ze(t) : new Z(t, e, n, r ?? 1);
}
function Z(t, e, n, r) {
    this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
ne(Z, li, Ke(bt, {
    brighter(t) {
        return t = t == null ? Ct : Math.pow(Ct, t), new Z(this.h, this.s, this.l * t, this.opacity);
    },
    darker(t) {
        return t = t == null ? mt : Math.pow(mt, t), new Z(this.h, this.s, this.l * t, this.opacity);
    },
    rgb() {
        var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
        return new W(
            Ot(t >= 240 ? t - 240 : t + 120, i, r),
            Ot(t, i, r),
            Ot(t < 120 ? t + 240 : t - 120, i, r),
            this.opacity
        );
    },
    clamp() {
        return new Z(_e(this.h), kt(this.s), kt(this.l), Rt(this.opacity));
    },
    displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl() {
        const t = Rt(this.opacity);
        return `${t === 1 ? "hsl(" : "hsla("}${_e(this.h)}, ${kt(this.s) * 100}%, ${kt(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
    }
}));
function _e(t) {
    return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function kt(t) {
    return Math.max(0, Math.min(1, t || 0));
}
function Ot(t, e, n) {
    return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const Qe = (t) => () => t;
function fi(t, e) {
    return function(n) {
        return t + n * e;
    };
}
function ci(t, e, n) {
    return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
        return Math.pow(t + r * e, n);
    };
}
function hi(t) {
    return (t = +t) == 1 ? Je : function(e, n) {
        return n - e ? ci(e, n, t) : Qe(isNaN(e) ? n : e);
    };
}
function Je(t, e) {
    var n = e - t;
    return n ? fi(t, n) : Qe(isNaN(t) ? e : t);
}
const we = function t(e) {
    var n = hi(e);
    function r(i, o) {
        var u = n((i = Gt(i)).r, (o = Gt(o)).r), a = n(i.g, o.g), l = n(i.b, o.b), s = Je(i.opacity, o.opacity);
        return function(f) {
            return i.r = u(f), i.g = a(f), i.b = l(f), i.opacity = s(f), i + "";
        };
    }
    return r.gamma = t, r;
}(1);
function it(t, e) {
    return t = +t, e = +e, function(n) {
        return t * (1 - n) + e * n;
    };
}
var Kt = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Vt = new RegExp(Kt.source, "g");
function gi(t) {
    return function() {
        return t;
    };
}
function di(t) {
    return function(e) {
        return t(e) + "";
    };
}
function yi(t, e) {
    var n = Kt.lastIndex = Vt.lastIndex = 0, r, i, o, u = -1, a = [], l = [];
    for (t = t + "", e = e + ""; (r = Kt.exec(t)) && (i = Vt.exec(e)); )
    (o = i.index) > n && (o = e.slice(n, o), a[u] ? a[u] += o : a[++u] = o), (r = r[0]) === (i = i[0]) ? a[u] ? a[u] += i : a[++u] = i : (a[++u] = null, l.push({ i: u, x: it(r, i) })), n = Vt.lastIndex;
    return n < e.length && (o = e.slice(n), a[u] ? a[u] += o : a[++u] = o), a.length < 2 ? l[0] ? di(l[0].x) : gi(e) : (e = l.length, function(s) {
        for (var f = 0, p; f < e; ++f)
        a[(p = l[f]).i] = p.x(s);
        return a.join("");
    });
}
var be = 180 / Math.PI, Zt = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
};
function je(t, e, n, r, i, o) {
    var u, a, l;
    return (u = Math.sqrt(t * t + e * e)) && (t /= u, e /= u), (l = t * n + e * r) && (n -= t * l, r -= e * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), t * r < e * n && (t = -t, e = -e, l = -l, u = -u), {
        translateX: i,
        translateY: o,
        rotate: Math.atan2(e, t) * be,
        skewX: Math.atan(l) * be,
        scaleX: u,
        scaleY: a
    };
}
var At;
function pi(t) {
    const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
    return e.isIdentity ? Zt : je(e.a, e.b, e.c, e.d, e.e, e.f);
}
function mi(t) {
    return t == null || (At || (At = document.createElementNS("http://www.w3.org/2000/svg", "g")), At.setAttribute("transform", t), !(t = At.transform.baseVal.consolidate())) ? Zt : (t = t.matrix, je(t.a, t.b, t.c, t.d, t.e, t.f));
}
function tn(t, e, n, r) {
    function i(s) {
        return s.length ? s.pop() + " " : "";
    }
    function o(s, f, p, d, g, w) {
        if (s !== p || f !== d) {
            var m = g.push("translate(", null, e, null, n);
            w.push({ i: m - 4, x: it(s, p) }, { i: m - 2, x: it(f, d) });
        } else
        (p || d) && g.push("translate(" + p + e + d + n);
    }
    function u(s, f, p, d) {
        s !== f ? (s - f > 180 ? f += 360 : f - s > 180 && (s += 360), d.push({ i: p.push(i(p) + "rotate(", null, r) - 2, x: it(s, f) })) : f && p.push(i(p) + "rotate(" + f + r);
    }
    function a(s, f, p, d) {
        s !== f ? d.push({ i: p.push(i(p) + "skewX(", null, r) - 2, x: it(s, f) }) : f && p.push(i(p) + "skewX(" + f + r);
    }
    function l(s, f, p, d, g, w) {
        if (s !== p || f !== d) {
            var m = g.push(i(g) + "scale(", null, ",", null, ")");
            w.push({ i: m - 4, x: it(s, p) }, { i: m - 2, x: it(f, d) });
        } else
        (p !== 1 || d !== 1) && g.push(i(g) + "scale(" + p + "," + d + ")");
    }
    return function(s, f) {
        var p = [], d = [];
        return s = t(s), f = t(f), o(s.translateX, s.translateY, f.translateX, f.translateY, p, d), u(s.rotate, f.rotate, p, d), a(s.skewX, f.skewX, p, d), l(s.scaleX, s.scaleY, f.scaleX, f.scaleY, p, d), s = f = null, function(g) {
            for (var w = -1, m = d.length, c; ++w < m; )
            p[(c = d[w]).i] = c.x(g);
            return p.join("");
        };
    };
}
var xi = tn(pi, "px, ", "px)", "deg)"), vi = tn(mi, ", ", ")", ")"), _i = 1e-12;
function Ne(t) {
    return ((t = Math.exp(t)) + 1 / t) / 2;
}
function wi(t) {
    return ((t = Math.exp(t)) - 1 / t) / 2;
}
function bi(t) {
    return ((t = Math.exp(2 * t)) - 1) / (t + 1);
}
const Ni = function t(e, n, r) {
    function i(o, u) {
        var a = o[0], l = o[1], s = o[2], f = u[0], p = u[1], d = u[2], g = f - a, w = p - l, m = g * g + w * w, c, y;
        if (m < _i)
        y = Math.log(d / s) / e, c = function(P) {
            return [
                a + P * g,
                l + P * w,
                s * Math.exp(e * P * y)
            ];
        };
        else {
            var v = Math.sqrt(m), z = (d * d - s * s + r * m) / (2 * s * n * v), N = (d * d - s * s - r * m) / (2 * d * n * v), D = Math.log(Math.sqrt(z * z + 1) - z), I = Math.log(Math.sqrt(N * N + 1) - N);
            y = (I - D) / e, c = function(P) {
                var X = P * y, B = Ne(D), F = s / (n * v) * (B * bi(e * X + D) - wi(D));
                return [
                    a + F * g,
                    l + F * w,
                    s * B / Ne(e * X + D)
                ];
            };
        }
        return c.duration = y * 1e3 * e / Math.SQRT2, c;
    }
    return i.rho = function(o) {
        var u = Math.max(1e-3, +o), a = u * u, l = a * a;
        return t(u, a, l);
    }, i;
}(Math.SQRT2, 2, 4);
var ht = 0, yt = 0, gt = 0, en = 1e3, Dt, pt, It = 0, lt = 0, Ht = 0, _t = typeof performance == "object" && performance.now ? performance : Date, nn = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
    setTimeout(t, 17);
};
function re() {
    return lt || (nn(ki), lt = _t.now() + Ht);
}
function ki() {
    lt = 0;
}
function Pt() {
    this._call = this._time = this._next = null;
}
Pt.prototype = ie.prototype = {
    constructor: Pt,
    restart: function(t, e, n) {
        if (typeof t != "function")
        throw new TypeError("callback is not a function");
        n = (n == null ? re() : +n) + (e == null ? 0 : +e), !this._next && pt !== this && (pt ? pt._next = this : Dt = this, pt = this), this._call = t, this._time = n, Qt();
    },
    stop: function() {
        this._call && (this._call = null, this._time = 1 / 0, Qt());
    }
};
function ie(t, e, n) {
    var r = new Pt();
    return r.restart(t, e, n), r;
}
function Ai() {
    re(), ++ht;
    for (var t = Dt, e; t; )
    (e = lt - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
    --ht;
}
function ke() {
    lt = (It = _t.now()) + Ht, ht = yt = 0;
    try {
        Ai();
    } finally {
        ht = 0, Mi(), lt = 0;
    }
}
function zi() {
    var t = _t.now(), e = t - It;
    e > en && (Ht -= e, It = t);
}
function Mi() {
    for (var t, e = Dt, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Dt = n);
    pt = t, Qt(r);
}
function Qt(t) {
    if (!ht) {
        yt && (yt = clearTimeout(yt));
        var e = t - lt;
        e > 24 ? (t < 1 / 0 && (yt = setTimeout(ke, t - _t.now() - Ht)), gt && (gt = clearInterval(gt))) : (gt || (It = _t.now(), gt = setInterval(zi, en)), ht = 1, nn(ke));
    }
}
function Ae(t, e, n) {
    var r = new Pt();
    return e = e == null ? 0 : +e, r.restart((i) => {
        r.stop(), t(i + e);
    }, e, n), r;
}
var Ei = Xt("start", "end", "cancel", "interrupt"), Si = [], rn = 0, ze = 1, Jt = 2, Et = 3, Me = 4, jt = 5, St = 6;
function Yt(t, e, n, r, i, o) {
    var u = t.__transition;
    if (!u)
    t.__transition = {};
    else if (n in u)
    return;
    Ti(t, n, {
        name: e,
        index: r,
        // For context during callback.
        group: i,
        // For context during callback.
        on: Ei,
        tween: Si,
        time: o.time,
        delay: o.delay,
        duration: o.duration,
        ease: o.ease,
        timer: null,
        state: rn
    });
}
function oe(t, e) {
    var n = Q(t, e);
    if (n.state > rn)
    throw new Error("too late; already scheduled");
    return n;
}
function j(t, e) {
    var n = Q(t, e);
    if (n.state > Et)
    throw new Error("too late; already running");
    return n;
}
function Q(t, e) {
    var n = t.__transition;
    if (!n || !(n = n[e]))
    throw new Error("transition not found");
    return n;
}
function Ti(t, e, n) {
    var r = t.__transition, i;
    r[e] = n, n.timer = ie(o, 0, n.time);
    function o(s) {
        n.state = ze, n.timer.restart(u, n.delay, n.time), n.delay <= s && u(s - n.delay);
    }
    function u(s) {
        var f, p, d, g;
        if (n.state !== ze)
        return l();
        for (f in r)
        if (g = r[f], g.name === n.name) {
            if (g.state === Et)
            return Ae(u);
            g.state === Me ? (g.state = St, g.timer.stop(), g.on.call("interrupt", t, t.__data__, g.index, g.group), delete r[f]) : +f < e && (g.state = St, g.timer.stop(), g.on.call("cancel", t, t.__data__, g.index, g.group), delete r[f]);
        }
        if (Ae(function() {
            n.state === Et && (n.state = Me, n.timer.restart(a, n.delay, n.time), a(s));
        }), n.state = Jt, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Jt) {
            for (n.state = Et, i = new Array(d = n.tween.length), f = 0, p = -1; f < d; ++f)
            (g = n.tween[f].value.call(t, t.__data__, n.index, n.group)) && (i[++p] = g);
            i.length = p + 1;
        }
    }
    function a(s) {
        for (var f = s < n.duration ? n.ease.call(null, s / n.duration) : (n.timer.restart(l), n.state = jt, 1), p = -1, d = i.length; ++p < d; )
        i[p].call(t, f);
        n.state === jt && (n.on.call("end", t, t.__data__, n.index, n.group), l());
    }
    function l() {
        n.state = St, n.timer.stop(), delete r[e];
        for (var s in r)
        return;
        delete t.__transition;
    }
}
function Tt(t, e) {
    var n = t.__transition, r, i, o = !0, u;
    if (n) {
        e = e == null ? null : e + "";
        for (u in n) {
            if ((r = n[u]).name !== e) {
                o = !1;
                continue;
            }
            i = r.state > Jt && r.state < jt, r.state = St, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[u];
        }
        o && delete t.__transition;
    }
}
function $i(t) {
    return this.each(function() {
        Tt(this, t);
    });
}
function Ci(t, e) {
    var n, r;
    return function() {
        var i = j(this, t), o = i.tween;
        if (o !== n) {
            r = n = o;
            for (var u = 0, a = r.length; u < a; ++u)
            if (r[u].name === e) {
                r = r.slice(), r.splice(u, 1);
                break;
            }
        }
        i.tween = r;
    };
}
function Ri(t, e, n) {
    var r, i;
    if (typeof n != "function")
    throw new Error();
    return function() {
        var o = j(this, t), u = o.tween;
        if (u !== r) {
            i = (r = u).slice();
            for (var a = { name: e, value: n }, l = 0, s = i.length; l < s; ++l)
            if (i[l].name === e) {
                i[l] = a;
                break;
            }
            l === s && i.push(a);
        }
        o.tween = i;
    };
}
function Di(t, e) {
    var n = this._id;
    if (t += "", arguments.length < 2) {
        for (var r = Q(this.node(), n).tween, i = 0, o = r.length, u; i < o; ++i)
        if ((u = r[i]).name === t)
        return u.value;
        return null;
    }
    return this.each((e == null ? Ci : Ri)(n, t, e));
}
function ue(t, e, n) {
    var r = t._id;
    return t.each(function() {
        var i = j(this, r);
        (i.value || (i.value = {}))[e] = n.apply(this, arguments);
    }), function(i) {
        return Q(i, r).value[e];
    };
}
function on(t, e) {
    var n;
    return (typeof e == "number" ? it : e instanceof vt ? we : (n = vt(e)) ? (e = n, we) : yi)(t, e);
}
function Ii(t) {
    return function() {
        this.removeAttribute(t);
    };
}
function Pi(t) {
    return function() {
        this.removeAttributeNS(t.space, t.local);
    };
}
function Xi(t, e, n) {
    var r, i = n + "", o;
    return function() {
        var u = this.getAttribute(t);
        return u === i ? null : u === r ? o : o = e(r = u, n);
    };
}
function Fi(t, e, n) {
    var r, i = n + "", o;
    return function() {
        var u = this.getAttributeNS(t.space, t.local);
        return u === i ? null : u === r ? o : o = e(r = u, n);
    };
}
function Hi(t, e, n) {
    var r, i, o;
    return function() {
        var u, a = n(this), l;
        return a == null ? void this.removeAttribute(t) : (u = this.getAttribute(t), l = a + "", u === l ? null : u === r && l === i ? o : (i = l, o = e(r = u, a)));
    };
}
function Yi(t, e, n) {
    var r, i, o;
    return function() {
        var u, a = n(this), l;
        return a == null ? void this.removeAttributeNS(t.space, t.local) : (u = this.getAttributeNS(t.space, t.local), l = a + "", u === l ? null : u === r && l === i ? o : (i = l, o = e(r = u, a)));
    };
}
function Bi(t, e) {
    var n = Ft(t), r = n === "transform" ? vi : on;
    return this.attrTween(t, typeof e == "function" ? (n.local ? Yi : Hi)(n, r, ue(this, "attr." + t, e)) : e == null ? (n.local ? Pi : Ii)(n) : (n.local ? Fi : Xi)(n, r, e));
}
function Oi(t, e) {
    return function(n) {
        this.setAttribute(t, e.call(this, n));
    };
}
function Vi(t, e) {
    return function(n) {
        this.setAttributeNS(t.space, t.local, e.call(this, n));
    };
}
function qi(t, e) {
    var n, r;
    function i() {
        var o = e.apply(this, arguments);
        return o !== r && (n = (r = o) && Vi(t, o)), n;
    }
    return i._value = e, i;
}
function Li(t, e) {
    var n, r;
    function i() {
        var o = e.apply(this, arguments);
        return o !== r && (n = (r = o) && Oi(t, o)), n;
    }
    return i._value = e, i;
}
function Wi(t, e) {
    var n = "attr." + t;
    if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
    if (e == null)
    return this.tween(n, null);
    if (typeof e != "function")
    throw new Error();
    var r = Ft(t);
    return this.tween(n, (r.local ? qi : Li)(r, e));
}
function Ui(t, e) {
    return function() {
        oe(this, t).delay = +e.apply(this, arguments);
    };
}
function Gi(t, e) {
    return e = +e, function() {
        oe(this, t).delay = e;
    };
}
function Ki(t) {
    var e = this._id;
    return arguments.length ? this.each((typeof t == "function" ? Ui : Gi)(e, t)) : Q(this.node(), e).delay;
}
function Zi(t, e) {
    return function() {
        j(this, t).duration = +e.apply(this, arguments);
    };
}
function Qi(t, e) {
    return e = +e, function() {
        j(this, t).duration = e;
    };
}
function Ji(t) {
    var e = this._id;
    return arguments.length ? this.each((typeof t == "function" ? Zi : Qi)(e, t)) : Q(this.node(), e).duration;
}
function ji(t, e) {
    if (typeof e != "function")
    throw new Error();
    return function() {
        j(this, t).ease = e;
    };
}
function to(t) {
    var e = this._id;
    return arguments.length ? this.each(ji(e, t)) : Q(this.node(), e).ease;
}
function eo(t, e) {
    return function() {
        var n = e.apply(this, arguments);
        if (typeof n != "function")
        throw new Error();
        j(this, t).ease = n;
    };
}
function no(t) {
    if (typeof t != "function")
    throw new Error();
    return this.each(eo(this._id, t));
}
function ro(t) {
    typeof t != "function" && (t = He(t));
    for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], u = o.length, a = r[i] = [], l, s = 0; s < u; ++s)
    (l = o[s]) && t.call(l, l.__data__, s, o) && a.push(l);
    return new rt(r, this._parents, this._name, this._id);
}
function io(t) {
    if (t._id !== this._id)
    throw new Error();
    for (var e = this._groups, n = t._groups, r = e.length, i = n.length, o = Math.min(r, i), u = new Array(r), a = 0; a < o; ++a)
    for (var l = e[a], s = n[a], f = l.length, p = u[a] = new Array(f), d, g = 0; g < f; ++g)
    (d = l[g] || s[g]) && (p[g] = d);
    for (; a < r; ++a)
    u[a] = e[a];
    return new rt(u, this._parents, this._name, this._id);
}
function oo(t) {
    return (t + "").trim().split(/^|\s+/).every(function(e) {
        var n = e.indexOf(".");
        return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
    });
}
function uo(t, e, n) {
    var r, i, o = oo(e) ? oe : j;
    return function() {
        var u = o(this, t), a = u.on;
        a !== r && (i = (r = a).copy()).on(e, n), u.on = i;
    };
}
function ao(t, e) {
    var n = this._id;
    return arguments.length < 2 ? Q(this.node(), n).on.on(t) : this.each(uo(n, t, e));
}
function so(t) {
    return function() {
        var e = this.parentNode;
        for (var n in this.__transition)
        if (+n !== t)
        return;
        e && e.removeChild(this);
    };
}
function lo() {
    return this.on("end.remove", so(this._id));
}
function fo(t) {
    var e = this._name, n = this._id;
    typeof t != "function" && (t = te(t));
    for (var r = this._groups, i = r.length, o = new Array(i), u = 0; u < i; ++u)
    for (var a = r[u], l = a.length, s = o[u] = new Array(l), f, p, d = 0; d < l; ++d)
    (f = a[d]) && (p = t.call(f, f.__data__, d, a)) && ("__data__" in f && (p.__data__ = f.__data__), s[d] = p, Yt(s[d], e, n, d, s, Q(f, n)));
    return new rt(o, this._parents, e, n);
}
function co(t) {
    var e = this._name, n = this._id;
    typeof t != "function" && (t = Fe(t));
    for (var r = this._groups, i = r.length, o = [], u = [], a = 0; a < i; ++a)
    for (var l = r[a], s = l.length, f, p = 0; p < s; ++p)
    if (f = l[p]) {
        for (var d = t.call(f, f.__data__, p, l), g, w = Q(f, n), m = 0, c = d.length; m < c; ++m)
        (g = d[m]) && Yt(g, e, n, m, d, w);
        o.push(d), u.push(f);
    }
    return new rt(o, u, e, n);
}
var ho = wt.prototype.constructor;
function go() {
    return new ho(this._groups, this._parents);
}
function yo(t, e) {
    var n, r, i;
    return function() {
        var o = ct(this, t), u = (this.style.removeProperty(t), ct(this, t));
        return o === u ? null : o === n && u === r ? i : i = e(n = o, r = u);
    };
}
function un(t) {
    return function() {
        this.style.removeProperty(t);
    };
}
function po(t, e, n) {
    var r, i = n + "", o;
    return function() {
        var u = ct(this, t);
        return u === i ? null : u === r ? o : o = e(r = u, n);
    };
}
function mo(t, e, n) {
    var r, i, o;
    return function() {
        var u = ct(this, t), a = n(this), l = a + "";
        return a == null && (l = a = (this.style.removeProperty(t), ct(this, t))), u === l ? null : u === r && l === i ? o : (i = l, o = e(r = u, a));
    };
}
function xo(t, e) {
    var n, r, i, o = "style." + e, u = "end." + o, a;
    return function() {
        var l = j(this, t), s = l.on, f = l.value[o] == null ? a || (a = un(e)) : void 0;
        (s !== n || i !== f) && (r = (n = s).copy()).on(u, i = f), l.on = r;
    };
}
function vo(t, e, n) {
    var r = (t += "") == "transform" ? xi : on;
    return e == null ? this.styleTween(t, yo(t, r)).on("end.style." + t, un(t)) : typeof e == "function" ? this.styleTween(t, mo(t, r, ue(this, "style." + t, e))).each(xo(this._id, t)) : this.styleTween(t, po(t, r, e), n).on("end.style." + t, null);
}
function _o(t, e, n) {
    return function(r) {
        this.style.setProperty(t, e.call(this, r), n);
    };
}
function wo(t, e, n) {
    var r, i;
    function o() {
        var u = e.apply(this, arguments);
        return u !== i && (r = (i = u) && _o(t, u, n)), r;
    }
    return o._value = e, o;
}
function bo(t, e, n) {
    var r = "style." + (t += "");
    if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
    if (e == null)
    return this.tween(r, null);
    if (typeof e != "function")
    throw new Error();
    return this.tween(r, wo(t, e, n ?? ""));
}
function No(t) {
    return function() {
        this.textContent = t;
    };
}
function ko(t) {
    return function() {
        var e = t(this);
        this.textContent = e ?? "";
    };
}
function Ao(t) {
    return this.tween("text", typeof t == "function" ? ko(ue(this, "text", t)) : No(t == null ? "" : t + ""));
}
function zo(t) {
    return function(e) {
        this.textContent = t.call(this, e);
    };
}
function Mo(t) {
    var e, n;
    function r() {
        var i = t.apply(this, arguments);
        return i !== n && (e = (n = i) && zo(i)), e;
    }
    return r._value = t, r;
}
function Eo(t) {
    var e = "text";
    if (arguments.length < 1)
    return (e = this.tween(e)) && e._value;
    if (t == null)
    return this.tween(e, null);
    if (typeof t != "function")
    throw new Error();
    return this.tween(e, Mo(t));
}
function So() {
    for (var t = this._name, e = this._id, n = an(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var u = r[o], a = u.length, l, s = 0; s < a; ++s)
    if (l = u[s]) {
        var f = Q(l, e);
        Yt(l, t, n, s, u, {
            time: f.time + f.delay + f.duration,
            delay: 0,
            duration: f.duration,
            ease: f.ease
        });
    }
    return new rt(r, this._parents, t, n);
}
function To() {
    var t, e, n = this, r = n._id, i = n.size();
    return new Promise(function(o, u) {
        var a = { value: u }, l = { value: function() {
            --i === 0 && o();
        } };
        n.each(function() {
            var s = j(this, r), f = s.on;
            f !== t && (e = (t = f).copy(), e._.cancel.push(a), e._.interrupt.push(a), e._.end.push(l)), s.on = e;
        }), i === 0 && o();
    });
}
var $o = 0;
function rt(t, e, n, r) {
    this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function an() {
    return ++$o;
}
var tt = wt.prototype;
rt.prototype = {
    constructor: rt,
    select: fo,
    selectAll: co,
    selectChild: tt.selectChild,
    selectChildren: tt.selectChildren,
    filter: ro,
    merge: io,
    selection: go,
    transition: So,
    call: tt.call,
    nodes: tt.nodes,
    node: tt.node,
    size: tt.size,
    empty: tt.empty,
    each: tt.each,
    on: ao,
    attr: Bi,
    attrTween: Wi,
    style: vo,
    styleTween: bo,
    text: Ao,
    textTween: Eo,
    remove: lo,
    tween: Di,
    delay: Ki,
    duration: Ji,
    ease: to,
    easeVarying: no,
    end: To,
    [Symbol.iterator]: tt[Symbol.iterator]
};
function Co(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Ro = {
    time: null,
    // Set on use.
    delay: 0,
    duration: 250,
    ease: Co
};
function Do(t, e) {
    for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
    throw new Error(`transition ${e} not found`);
    return n;
}
function Io(t) {
    var e, n;
    t instanceof rt ? (e = t._id, t = t._name) : (e = an(), (n = Ro).time = re(), t = t == null ? null : t + "");
    for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var u = r[o], a = u.length, l, s = 0; s < a; ++s)
    (l = u[s]) && Yt(l, t, e, s, u, n || Do(l, e));
    return new rt(r, this._parents, t, e);
}
wt.prototype.interrupt = $i;
wt.prototype.transition = Io;
function Ee(t, e) {
    var n, r = 1;
    t == null && (t = 0), e == null && (e = 0);
    function i() {
        var o, u = n.length, a, l = 0, s = 0;
        for (o = 0; o < u; ++o)
        a = n[o], l += a.x, s += a.y;
        for (l = (l / u - t) * r, s = (s / u - e) * r, o = 0; o < u; ++o)
        a = n[o], a.x -= l, a.y -= s;
    }
    return i.initialize = function(o) {
        n = o;
    }, i.x = function(o) {
        return arguments.length ? (t = +o, i) : t;
    }, i.y = function(o) {
        return arguments.length ? (e = +o, i) : e;
    }, i.strength = function(o) {
        return arguments.length ? (r = +o, i) : r;
    }, i;
}
function Po(t) {
    const e = +this._x.call(null, t), n = +this._y.call(null, t);
    return sn(this.cover(e, n), e, n, t);
}
function sn(t, e, n, r) {
    if (isNaN(e) || isNaN(n))
    return t;
    var i, o = t._root, u = { data: r }, a = t._x0, l = t._y0, s = t._x1, f = t._y1, p, d, g, w, m, c, y, v;
    if (!o)
    return t._root = u, t;
    for (; o.length; )
    if ((m = e >= (p = (a + s) / 2)) ? a = p : s = p, (c = n >= (d = (l + f) / 2)) ? l = d : f = d, i = o, !(o = o[y = c << 1 | m]))
    return i[y] = u, t;
    if (g = +t._x.call(null, o.data), w = +t._y.call(null, o.data), e === g && n === w)
    return u.next = o, i ? i[y] = u : t._root = u, t;
    do
    i = i ? i[y] = new Array(4) : t._root = new Array(4), (m = e >= (p = (a + s) / 2)) ? a = p : s = p, (c = n >= (d = (l + f) / 2)) ? l = d : f = d;
    while ((y = c << 1 | m) === (v = (w >= d) << 1 | g >= p));
    return i[v] = o, i[y] = u, t;
}
function Xo(t) {
    var e, n, r = t.length, i, o, u = new Array(r), a = new Array(r), l = 1 / 0, s = 1 / 0, f = -1 / 0, p = -1 / 0;
    for (n = 0; n < r; ++n)
    isNaN(i = +this._x.call(null, e = t[n])) || isNaN(o = +this._y.call(null, e)) || (u[n] = i, a[n] = o, i < l && (l = i), i > f && (f = i), o < s && (s = o), o > p && (p = o));
    if (l > f || s > p)
    return this;
    for (this.cover(l, s).cover(f, p), n = 0; n < r; ++n)
    sn(this, u[n], a[n], t[n]);
    return this;
}
function Fo(t, e) {
    if (isNaN(t = +t) || isNaN(e = +e))
    return this;
    var n = this._x0, r = this._y0, i = this._x1, o = this._y1;
    if (isNaN(n))
    i = (n = Math.floor(t)) + 1, o = (r = Math.floor(e)) + 1;
    else {
        for (var u = i - n || 1, a = this._root, l, s; n > t || t >= i || r > e || e >= o; )
        switch (s = (e < r) << 1 | t < n, l = new Array(4), l[s] = a, a = l, u *= 2, s) {
            case 0:
            i = n + u, o = r + u;
            break;
            case 1:
            n = i - u, o = r + u;
            break;
            case 2:
            i = n + u, r = o - u;
            break;
            case 3:
            n = i - u, r = o - u;
            break;
        }
        this._root && this._root.length && (this._root = a);
    }
    return this._x0 = n, this._y0 = r, this._x1 = i, this._y1 = o, this;
}
function Ho() {
    var t = [];
    return this.visit(function(e) {
        if (!e.length)
        do
        t.push(e.data);
        while (e = e.next);
    }), t;
}
function Yo(t) {
    return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
function V(t, e, n, r, i) {
    this.node = t, this.x0 = e, this.y0 = n, this.x1 = r, this.y1 = i;
}
function Bo(t, e, n) {
    var r, i = this._x0, o = this._y0, u, a, l, s, f = this._x1, p = this._y1, d = [], g = this._root, w, m;
    for (g && d.push(new V(g, i, o, f, p)), n == null ? n = 1 / 0 : (i = t - n, o = e - n, f = t + n, p = e + n, n *= n); w = d.pop(); )
    if (!(!(g = w.node) || (u = w.x0) > f || (a = w.y0) > p || (l = w.x1) < i || (s = w.y1) < o))
    if (g.length) {
        var c = (u + l) / 2, y = (a + s) / 2;
        d.push(
            new V(g[3], c, y, l, s),
            new V(g[2], u, y, c, s),
            new V(g[1], c, a, l, y),
            new V(g[0], u, a, c, y)
        ), (m = (e >= y) << 1 | t >= c) && (w = d[d.length - 1], d[d.length - 1] = d[d.length - 1 - m], d[d.length - 1 - m] = w);
    } else {
        var v = t - +this._x.call(null, g.data), z = e - +this._y.call(null, g.data), N = v * v + z * z;
        if (N < n) {
            var D = Math.sqrt(n = N);
            i = t - D, o = e - D, f = t + D, p = e + D, r = g.data;
        }
    }
    return r;
}
function Oo(t) {
    if (isNaN(f = +this._x.call(null, t)) || isNaN(p = +this._y.call(null, t)))
    return this;
    var e, n = this._root, r, i, o, u = this._x0, a = this._y0, l = this._x1, s = this._y1, f, p, d, g, w, m, c, y;
    if (!n)
    return this;
    if (n.length)
    for (; ; ) {
        if ((w = f >= (d = (u + l) / 2)) ? u = d : l = d, (m = p >= (g = (a + s) / 2)) ? a = g : s = g, e = n, !(n = n[c = m << 1 | w]))
        return this;
        if (!n.length)
        break;
        (e[c + 1 & 3] || e[c + 2 & 3] || e[c + 3 & 3]) && (r = e, y = c);
    }
    for (; n.data !== t; )
    if (i = n, !(n = n.next))
    return this;
    return (o = n.next) && delete n.next, i ? (o ? i.next = o : delete i.next, this) : e ? (o ? e[c] = o : delete e[c], (n = e[0] || e[1] || e[2] || e[3]) && n === (e[3] || e[2] || e[1] || e[0]) && !n.length && (r ? r[y] = n : this._root = n), this) : (this._root = o, this);
}
function Vo(t) {
    for (var e = 0, n = t.length; e < n; ++e)
    this.remove(t[e]);
    return this;
}
function qo() {
    return this._root;
}
function Lo() {
    var t = 0;
    return this.visit(function(e) {
        if (!e.length)
        do
        ++t;
        while (e = e.next);
    }), t;
}
function Wo(t) {
    var e = [], n, r = this._root, i, o, u, a, l;
    for (r && e.push(new V(r, this._x0, this._y0, this._x1, this._y1)); n = e.pop(); )
    if (!t(r = n.node, o = n.x0, u = n.y0, a = n.x1, l = n.y1) && r.length) {
        var s = (o + a) / 2, f = (u + l) / 2;
        (i = r[3]) && e.push(new V(i, s, f, a, l)), (i = r[2]) && e.push(new V(i, o, f, s, l)), (i = r[1]) && e.push(new V(i, s, u, a, f)), (i = r[0]) && e.push(new V(i, o, u, s, f));
    }
    return this;
}
function Uo(t) {
    var e = [], n = [], r;
    for (this._root && e.push(new V(this._root, this._x0, this._y0, this._x1, this._y1)); r = e.pop(); ) {
        var i = r.node;
        if (i.length) {
            var o, u = r.x0, a = r.y0, l = r.x1, s = r.y1, f = (u + l) / 2, p = (a + s) / 2;
            (o = i[0]) && e.push(new V(o, u, a, f, p)), (o = i[1]) && e.push(new V(o, f, a, l, p)), (o = i[2]) && e.push(new V(o, u, p, f, s)), (o = i[3]) && e.push(new V(o, f, p, l, s));
        }
        n.push(r);
    }
    for (; r = n.pop(); )
    t(r.node, r.x0, r.y0, r.x1, r.y1);
    return this;
}
function Go(t) {
    return t[0];
}
function Ko(t) {
    return arguments.length ? (this._x = t, this) : this._x;
}
function Zo(t) {
    return t[1];
}
function Qo(t) {
    return arguments.length ? (this._y = t, this) : this._y;
}
function ae(t, e, n) {
    var r = new se(e ?? Go, n ?? Zo, NaN, NaN, NaN, NaN);
    return t == null ? r : r.addAll(t);
}
function se(t, e, n, r, i, o) {
    this._x = t, this._y = e, this._x0 = n, this._y0 = r, this._x1 = i, this._y1 = o, this._root = void 0;
}
function Se(t) {
    for (var e = { data: t.data }, n = e; t = t.next; )
    n = n.next = { data: t.data };
    return e;
}
var L = ae.prototype = se.prototype;
L.copy = function() {
    var t = new se(this._x, this._y, this._x0, this._y0, this._x1, this._y1), e = this._root, n, r;
    if (!e)
    return t;
    if (!e.length)
    return t._root = Se(e), t;
    for (n = [{ source: e, target: t._root = new Array(4) }]; e = n.pop(); )
    for (var i = 0; i < 4; ++i)
    (r = e.source[i]) && (r.length ? n.push({ source: r, target: e.target[i] = new Array(4) }) : e.target[i] = Se(r));
    return t;
};
L.add = Po;
L.addAll = Xo;
L.cover = Fo;
L.data = Ho;
L.extent = Yo;
L.find = Bo;
L.remove = Oo;
L.removeAll = Vo;
L.root = qo;
L.size = Lo;
L.visit = Wo;
L.visitAfter = Uo;
L.x = Ko;
L.y = Qo;
function q(t) {
    return function() {
        return t;
    };
}
function ot(t) {
    return (t() - 0.5) * 1e-6;
}
function Jo(t) {
    return t.x + t.vx;
}
function jo(t) {
    return t.y + t.vy;
}
function tu(t) {
    var e, n, r, i = 1, o = 1;
    typeof t != "function" && (t = q(t == null ? 1 : +t));
    function u() {
        for (var s, f = e.length, p, d, g, w, m, c, y = 0; y < o; ++y)
        for (p = ae(e, Jo, jo).visitAfter(a), s = 0; s < f; ++s)
        d = e[s], m = n[d.index], c = m * m, g = d.x + d.vx, w = d.y + d.vy, p.visit(v);
        function v(z, N, D, I, P) {
            var X = z.data, B = z.r, F = m + B;
            if (X) {
                if (X.index > d.index) {
                    var S = g - X.x - X.vx, E = w - X.y - X.vy, T = S * S + E * E;
                    T < F * F && (S === 0 && (S = ot(r), T += S * S), E === 0 && (E = ot(r), T += E * E), T = (F - (T = Math.sqrt(T))) / T * i, d.vx += (S *= T) * (F = (B *= B) / (c + B)), d.vy += (E *= T) * F, X.vx -= S * (F = 1 - F), X.vy -= E * F);
                }
                return;
            }
            return N > g + F || I < g - F || D > w + F || P < w - F;
        }
    }
    function a(s) {
        if (s.data)
        return s.r = n[s.data.index];
        for (var f = s.r = 0; f < 4; ++f)
        s[f] && s[f].r > s.r && (s.r = s[f].r);
    }
    function l() {
        if (e) {
            var s, f = e.length, p;
            for (n = new Array(f), s = 0; s < f; ++s)
            p = e[s], n[p.index] = +t(p, s, e);
        }
    }
    return u.initialize = function(s, f) {
        e = s, r = f, l();
    }, u.iterations = function(s) {
        return arguments.length ? (o = +s, u) : o;
    }, u.strength = function(s) {
        return arguments.length ? (i = +s, u) : i;
    }, u.radius = function(s) {
        return arguments.length ? (t = typeof s == "function" ? s : q(+s), l(), u) : t;
    }, u;
}
function eu(t) {
    return t.index;
}
function Te(t, e) {
    var n = t.get(e);
    if (!n)
    throw new Error("node not found: " + e);
    return n;
}
function nu(t) {
    var e = eu, n = p, r, i = q(30), o, u, a, l, s, f = 1;
    t == null && (t = []);
    function p(c) {
        return 1 / Math.min(a[c.source.index], a[c.target.index]);
    }
    function d(c) {
        for (var y = 0, v = t.length; y < f; ++y)
        for (var z = 0, N, D, I, P, X, B, F; z < v; ++z)
        N = t[z], D = N.source, I = N.target, P = I.x + I.vx - D.x - D.vx || ot(s), X = I.y + I.vy - D.y - D.vy || ot(s), B = Math.sqrt(P * P + X * X), B = (B - o[z]) / B * c * r[z], P *= B, X *= B, I.vx -= P * (F = l[z]), I.vy -= X * F, D.vx += P * (F = 1 - F), D.vy += X * F;
    }
    function g() {
        if (u) {
            var c, y = u.length, v = t.length, z = new Map(u.map((D, I) => [e(D, I, u), D])), N;
            for (c = 0, a = new Array(y); c < v; ++c)
            N = t[c], N.index = c, typeof N.source != "object" && (N.source = Te(z, N.source)), typeof N.target != "object" && (N.target = Te(z, N.target)), a[N.source.index] = (a[N.source.index] || 0) + 1, a[N.target.index] = (a[N.target.index] || 0) + 1;
            for (c = 0, l = new Array(v); c < v; ++c)
            N = t[c], l[c] = a[N.source.index] / (a[N.source.index] + a[N.target.index]);
            r = new Array(v), w(), o = new Array(v), m();
        }
    }
    function w() {
        if (u)
        for (var c = 0, y = t.length; c < y; ++c)
        r[c] = +n(t[c], c, t);
    }
    function m() {
        if (u)
        for (var c = 0, y = t.length; c < y; ++c)
        o[c] = +i(t[c], c, t);
    }
    return d.initialize = function(c, y) {
        u = c, s = y, g();
    }, d.links = function(c) {
        return arguments.length ? (t = c, g(), d) : t;
    }, d.id = function(c) {
        return arguments.length ? (e = c, d) : e;
    }, d.iterations = function(c) {
        return arguments.length ? (f = +c, d) : f;
    }, d.strength = function(c) {
        return arguments.length ? (n = typeof c == "function" ? c : q(+c), w(), d) : n;
    }, d.distance = function(c) {
        return arguments.length ? (i = typeof c == "function" ? c : q(+c), m(), d) : i;
    }, d;
}
const ru = 1664525, iu = 1013904223, $e = 4294967296;
function ou() {
    let t = 1;
    return () => (t = (ru * t + iu) % $e) / $e;
}
function uu(t) {
    return t.x;
}
function au(t) {
    return t.y;
}
var su = 10, lu = Math.PI * (3 - Math.sqrt(5));
function fu(t) {
    var e, n = 1, r = 1e-3, i = 1 - Math.pow(r, 1 / 300), o = 0, u = 0.6, a = /* @__PURE__ */ new Map(), l = ie(p), s = Xt("tick", "end"), f = ou();
    t == null && (t = []);
    function p() {
        d(), s.call("tick", e), n < r && (l.stop(), s.call("end", e));
    }
    function d(m) {
        var c, y = t.length, v;
        m === void 0 && (m = 1);
        for (var z = 0; z < m; ++z)
        for (n += (o - n) * i, a.forEach(function(N) {
            N(n);
        }), c = 0; c < y; ++c)
        v = t[c], v.fx == null ? v.x += v.vx *= u : (v.x = v.fx, v.vx = 0), v.fy == null ? v.y += v.vy *= u : (v.y = v.fy, v.vy = 0);
        return e;
    }
    function g() {
        for (var m = 0, c = t.length, y; m < c; ++m) {
            if (y = t[m], y.index = m, y.fx != null && (y.x = y.fx), y.fy != null && (y.y = y.fy), isNaN(y.x) || isNaN(y.y)) {
                var v = su * Math.sqrt(0.5 + m), z = m * lu;
                y.x = v * Math.cos(z), y.y = v * Math.sin(z);
            }
            (isNaN(y.vx) || isNaN(y.vy)) && (y.vx = y.vy = 0);
        }
    }
    function w(m) {
        return m.initialize && m.initialize(t, f), m;
    }
    return g(), e = {
        tick: d,
        restart: function() {
            return l.restart(p), e;
        },
        stop: function() {
            return l.stop(), e;
        },
        nodes: function(m) {
            return arguments.length ? (t = m, g(), a.forEach(w), e) : t;
        },
        alpha: function(m) {
            return arguments.length ? (n = +m, e) : n;
        },
        alphaMin: function(m) {
            return arguments.length ? (r = +m, e) : r;
        },
        alphaDecay: function(m) {
            return arguments.length ? (i = +m, e) : +i;
        },
        alphaTarget: function(m) {
            return arguments.length ? (o = +m, e) : o;
        },
        velocityDecay: function(m) {
            return arguments.length ? (u = 1 - m, e) : 1 - u;
        },
        randomSource: function(m) {
            return arguments.length ? (f = m, a.forEach(w), e) : f;
        },
        force: function(m, c) {
            return arguments.length > 1 ? (c == null ? a.delete(m) : a.set(m, w(c)), e) : a.get(m);
        },
        find: function(m, c, y) {
            var v = 0, z = t.length, N, D, I, P, X;
            for (y == null ? y = 1 / 0 : y *= y, v = 0; v < z; ++v)
            P = t[v], N = m - P.x, D = c - P.y, I = N * N + D * D, I < y && (X = P, y = I);
            return X;
        },
        on: function(m, c) {
            return arguments.length > 1 ? (s.on(m, c), e) : s.on(m);
        }
    };
}
function cu() {
    var t, e, n, r, i = q(-30), o, u = 1, a = 1 / 0, l = 0.81;
    function s(g) {
        var w, m = t.length, c = ae(t, uu, au).visitAfter(p);
        for (r = g, w = 0; w < m; ++w)
        e = t[w], c.visit(d);
    }
    function f() {
        if (t) {
            var g, w = t.length, m;
            for (o = new Array(w), g = 0; g < w; ++g)
            m = t[g], o[m.index] = +i(m, g, t);
        }
    }
    function p(g) {
        var w = 0, m, c, y = 0, v, z, N;
        if (g.length) {
            for (v = z = N = 0; N < 4; ++N)
            (m = g[N]) && (c = Math.abs(m.value)) && (w += m.value, y += c, v += c * m.x, z += c * m.y);
            g.x = v / y, g.y = z / y;
        } else {
            m = g, m.x = m.data.x, m.y = m.data.y;
            do
            w += o[m.data.index];
            while (m = m.next);
        }
        g.value = w;
    }
    function d(g, w, m, c) {
        if (!g.value)
        return !0;
        var y = g.x - e.x, v = g.y - e.y, z = c - w, N = y * y + v * v;
        if (z * z / l < N)
        return N < a && (y === 0 && (y = ot(n), N += y * y), v === 0 && (v = ot(n), N += v * v), N < u && (N = Math.sqrt(u * N)), e.vx += y * g.value * r / N, e.vy += v * g.value * r / N), !0;
        if (g.length || N >= a)
        return;
        (g.data !== e || g.next) && (y === 0 && (y = ot(n), N += y * y), v === 0 && (v = ot(n), N += v * v), N < u && (N = Math.sqrt(u * N)));
        do
        g.data !== e && (z = o[g.data.index] * r / N, e.vx += y * z, e.vy += v * z);
        while (g = g.next);
    }
    return s.initialize = function(g, w) {
        t = g, n = w, f();
    }, s.strength = function(g) {
        return arguments.length ? (i = typeof g == "function" ? g : q(+g), f(), s) : i;
    }, s.distanceMin = function(g) {
        return arguments.length ? (u = g * g, s) : Math.sqrt(u);
    }, s.distanceMax = function(g) {
        return arguments.length ? (a = g * g, s) : Math.sqrt(a);
    }, s.theta = function(g) {
        return arguments.length ? (l = g * g, s) : Math.sqrt(l);
    }, s;
}
function Ce(t) {
    var e = q(0.1), n, r, i;
    typeof t != "function" && (t = q(t == null ? 0 : +t));
    function o(a) {
        for (var l = 0, s = n.length, f; l < s; ++l)
        f = n[l], f.vx += (i[l] - f.x) * r[l] * a;
    }
    function u() {
        if (n) {
            var a, l = n.length;
            for (r = new Array(l), i = new Array(l), a = 0; a < l; ++a)
            r[a] = isNaN(i[a] = +t(n[a], a, n)) ? 0 : +e(n[a], a, n);
        }
    }
    return o.initialize = function(a) {
        n = a, u();
    }, o.strength = function(a) {
        return arguments.length ? (e = typeof a == "function" ? a : q(+a), u(), o) : e;
    }, o.x = function(a) {
        return arguments.length ? (t = typeof a == "function" ? a : q(+a), u(), o) : t;
    }, o;
}
function Re(t) {
    var e = q(0.1), n, r, i;
    typeof t != "function" && (t = q(t == null ? 0 : +t));
    function o(a) {
        for (var l = 0, s = n.length, f; l < s; ++l)
        f = n[l], f.vy += (i[l] - f.y) * r[l] * a;
    }
    function u() {
        if (n) {
            var a, l = n.length;
            for (r = new Array(l), i = new Array(l), a = 0; a < l; ++a)
            r[a] = isNaN(i[a] = +t(n[a], a, n)) ? 0 : +e(n[a], a, n);
        }
    }
    return o.initialize = function(a) {
        n = a, u();
    }, o.strength = function(a) {
        return arguments.length ? (e = typeof a == "function" ? a : q(+a), u(), o) : e;
    }, o.y = function(a) {
        return arguments.length ? (t = typeof a == "function" ? a : q(+a), u(), o) : t;
    }, o;
}
function hu(t, e) {
    switch (arguments.length) {
        case 0:
        break;
        case 1:
        this.range(t);
        break;
        default:
        this.range(e).domain(t);
        break;
    }
    return this;
}
const De = Symbol("implicit");
function ln() {
    var t = new le(), e = [], n = [], r = De;
    function i(o) {
        let u = t.get(o);
        if (u === void 0) {
            if (r !== De)
            return r;
            t.set(o, u = e.push(o) - 1);
        }
        return n[u % n.length];
    }
    return i.domain = function(o) {
        if (!arguments.length)
        return e.slice();
        e = [], t = new le();
        for (const u of o)
        t.has(u) || t.set(u, e.push(u) - 1);
        return i;
    }, i.range = function(o) {
        return arguments.length ? (n = Array.from(o), i) : n.slice();
    }, i.unknown = function(o) {
        return arguments.length ? (r = o, i) : r;
    }, i.copy = function() {
        return ln(e, n).unknown(r);
    }, hu.apply(i, arguments), i;
}
function gu(t) {
    for (var e = t.length / 6 | 0, n = new Array(e), r = 0; r < e; )
    n[r] = "#" + t.slice(r * 6, ++r * 6);
    return n;
}
const du = gu("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), zt = (t) => () => t;
function yu(t, {
    sourceEvent: e,
    target: n,
    transform: r,
    dispatch: i
}) {
    Object.defineProperties(this, {
        type: { value: t, enumerable: !0, configurable: !0 },
        sourceEvent: { value: e, enumerable: !0, configurable: !0 },
        target: { value: n, enumerable: !0, configurable: !0 },
        transform: { value: r, enumerable: !0, configurable: !0 },
        _: { value: i }
    });
}
function nt(t, e, n) {
    this.k = t, this.x = e, this.y = n;
}
nt.prototype = {
    constructor: nt,
    scale: function(t) {
        return t === 1 ? this : new nt(this.k * t, this.x, this.y);
    },
    translate: function(t, e) {
        return t === 0 & e === 0 ? this : new nt(this.k, this.x + this.k * t, this.y + this.k * e);
    },
    apply: function(t) {
        return [t[0] * this.k + this.x, t[1] * this.k + this.y];
    },
    applyX: function(t) {
        return t * this.k + this.x;
    },
    applyY: function(t) {
        return t * this.k + this.y;
    },
    invert: function(t) {
        return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
    },
    invertX: function(t) {
        return (t - this.x) / this.k;
    },
    invertY: function(t) {
        return (t - this.y) / this.k;
    },
    rescaleX: function(t) {
        return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
    },
    rescaleY: function(t) {
        return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
    },
    toString: function() {
        return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
};
var fn = new nt(1, 0, 0);
nt.prototype;
function qt(t) {
    t.stopImmediatePropagation();
}
function dt(t) {
    t.preventDefault(), t.stopImmediatePropagation();
}
function pu(t) {
    return (!t.ctrlKey || t.type === "wheel") && !t.button;
}
function mu() {
    var t = this;
    return t instanceof SVGElement ? (t = t.ownerSVGElement || t, t.hasAttribute("viewBox") ? (t = t.viewBox.baseVal, [[t.x, t.y], [t.x + t.width, t.y + t.height]]) : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]) : [[0, 0], [t.clientWidth, t.clientHeight]];
}
function Ie() {
    return this.__zoom || fn;
}
function xu(t) {
    return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * (t.ctrlKey ? 10 : 1);
}
function vu() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
}
function _u(t, e, n) {
    var r = t.invertX(e[0][0]) - n[0][0], i = t.invertX(e[1][0]) - n[1][0], o = t.invertY(e[0][1]) - n[0][1], u = t.invertY(e[1][1]) - n[1][1];
    return t.translate(
        i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
        u > o ? (o + u) / 2 : Math.min(0, o) || Math.max(0, u)
    );
}
function Pe() {
    var t = pu, e = mu, n = _u, r = xu, i = vu, o = [0, 1 / 0], u = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Ni, s = Xt("start", "zoom", "end"), f, p, d, g = 500, w = 150, m = 0, c = 10;
    function y(h) {
        h.property("__zoom", Ie).on("wheel.zoom", X, { passive: !1 }).on("mousedown.zoom", B).on("dblclick.zoom", F).filter(i).on("touchstart.zoom", S).on("touchmove.zoom", E).on("touchend.zoom touchcancel.zoom", T).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    y.transform = function(h, _, x, b) {
        var k = h.selection ? h.selection() : h;
        k.property("__zoom", Ie), h !== k ? D(h, _, x, b) : k.interrupt().each(function() {
            I(this, arguments).event(b).start().zoom(null, typeof _ == "function" ? _.apply(this, arguments) : _).end();
        });
    }, y.scaleBy = function(h, _, x, b) {
        y.scaleTo(h, function() {
            var k = this.__zoom.k, A = typeof _ == "function" ? _.apply(this, arguments) : _;
            return k * A;
        }, x, b);
    }, y.scaleTo = function(h, _, x, b) {
        y.transform(h, function() {
            var k = e.apply(this, arguments), A = this.__zoom, M = x == null ? N(k) : typeof x == "function" ? x.apply(this, arguments) : x, $ = A.invert(M), C = typeof _ == "function" ? _.apply(this, arguments) : _;
            return n(z(v(A, C), M, $), k, u);
        }, x, b);
    }, y.translateBy = function(h, _, x, b) {
        y.transform(h, function() {
            return n(this.__zoom.translate(
                typeof _ == "function" ? _.apply(this, arguments) : _,
                typeof x == "function" ? x.apply(this, arguments) : x
            ), e.apply(this, arguments), u);
        }, null, b);
    }, y.translateTo = function(h, _, x, b, k) {
        y.transform(h, function() {
            var A = e.apply(this, arguments), M = this.__zoom, $ = b == null ? N(A) : typeof b == "function" ? b.apply(this, arguments) : b;
            return n(fn.translate($[0], $[1]).scale(M.k).translate(
                typeof _ == "function" ? -_.apply(this, arguments) : -_,
                typeof x == "function" ? -x.apply(this, arguments) : -x
            ), A, u);
        }, b, k);
    };
    function v(h, _) {
        return _ = Math.max(o[0], Math.min(o[1], _)), _ === h.k ? h : new nt(_, h.x, h.y);
    }
    function z(h, _, x) {
        var b = _[0] - x[0] * h.k, k = _[1] - x[1] * h.k;
        return b === h.x && k === h.y ? h : new nt(h.k, b, k);
    }
    function N(h) {
        return [(+h[0][0] + +h[1][0]) / 2, (+h[0][1] + +h[1][1]) / 2];
    }
    function D(h, _, x, b) {
        h.on("start.zoom", function() {
            I(this, arguments).event(b).start();
        }).on("interrupt.zoom end.zoom", function() {
            I(this, arguments).event(b).end();
        }).tween("zoom", function() {
            var k = this, A = arguments, M = I(k, A).event(b), $ = e.apply(k, A), C = x == null ? N($) : typeof x == "function" ? x.apply(k, A) : x, R = Math.max($[1][0] - $[0][0], $[1][1] - $[0][1]), Y = k.__zoom, H = typeof _ == "function" ? _.apply(k, A) : _, U = l(Y.invert(C).concat(R / Y.k), H.invert(C).concat(R / H.k));
            return function(O) {
                if (O === 1)
                O = H;
                else {
                    var K = U(O), Bt = R / K[2];
                    O = new nt(Bt, C[0] - K[0] * Bt, C[1] - K[1] * Bt);
                }
                M.zoom(null, O);
            };
        });
    }
    function I(h, _, x) {
        return !x && h.__zooming || new P(h, _);
    }
    function P(h, _) {
        this.that = h, this.args = _, this.active = 0, this.sourceEvent = null, this.extent = e.apply(h, _), this.taps = 0;
    }
    P.prototype = {
        event: function(h) {
            return h && (this.sourceEvent = h), this;
        },
        start: function() {
            return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
        },
        zoom: function(h, _) {
            return this.mouse && h !== "mouse" && (this.mouse[1] = _.invert(this.mouse[0])), this.touch0 && h !== "touch" && (this.touch0[1] = _.invert(this.touch0[0])), this.touch1 && h !== "touch" && (this.touch1[1] = _.invert(this.touch1[0])), this.that.__zoom = _, this.emit("zoom"), this;
        },
        end: function() {
            return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
        },
        emit: function(h) {
            var _ = et(this.that).datum();
            s.call(
                h,
                this.that,
                new yu(h, {
                    sourceEvent: this.sourceEvent,
                    target: y,
                    type: h,
                    transform: this.that.__zoom,
                    dispatch: s
                }),
                _
            );
        }
    };
    function X(h, ..._) {
        if (!t.apply(this, arguments))
        return;
        var x = I(this, _).event(h), b = this.__zoom, k = Math.max(o[0], Math.min(o[1], b.k * Math.pow(2, r.apply(this, arguments)))), A = ut(h);
        if (x.wheel)
        (x.mouse[0][0] !== A[0] || x.mouse[0][1] !== A[1]) && (x.mouse[1] = b.invert(x.mouse[0] = A)), clearTimeout(x.wheel);
        else {
            if (b.k === k)
            return;
            x.mouse = [A, b.invert(A)], Tt(this), x.start();
        }
        dt(h), x.wheel = setTimeout(M, w), x.zoom("mouse", n(z(v(b, k), x.mouse[0], x.mouse[1]), x.extent, u));
        function M() {
            x.wheel = null, x.end();
        }
    }
    function B(h, ..._) {
        if (d || !t.apply(this, arguments))
        return;
        var x = h.currentTarget, b = I(this, _, !0).event(h), k = et(h.view).on("mousemove.zoom", C, !0).on("mouseup.zoom", R, !0), A = ut(h, x), M = h.clientX, $ = h.clientY;
        Zr(h.view), qt(h), b.mouse = [A, this.__zoom.invert(A)], Tt(this), b.start();
        function C(Y) {
            if (dt(Y), !b.moved) {
                var H = Y.clientX - M, U = Y.clientY - $;
                b.moved = H * H + U * U > m;
            }
            b.event(Y).zoom("mouse", n(z(b.that.__zoom, b.mouse[0] = ut(Y, x), b.mouse[1]), b.extent, u));
        }
        function R(Y) {
            k.on("mousemove.zoom mouseup.zoom", null), Qr(Y.view, b.moved), dt(Y), b.event(Y).end();
        }
    }
    function F(h, ..._) {
        if (t.apply(this, arguments)) {
            var x = this.__zoom, b = ut(h.changedTouches ? h.changedTouches[0] : h, this), k = x.invert(b), A = x.k * (h.shiftKey ? 0.5 : 2), M = n(z(v(x, A), b, k), e.apply(this, _), u);
            dt(h), a > 0 ? et(this).transition().duration(a).call(D, M, b, h) : et(this).call(y.transform, M, b, h);
        }
    }
    function S(h, ..._) {
        if (t.apply(this, arguments)) {
            var x = h.touches, b = x.length, k = I(this, _, h.changedTouches.length === b).event(h), A, M, $, C;
            for (qt(h), M = 0; M < b; ++M)
            $ = x[M], C = ut($, this), C = [C, this.__zoom.invert(C), $.identifier], k.touch0 ? !k.touch1 && k.touch0[2] !== C[2] && (k.touch1 = C, k.taps = 0) : (k.touch0 = C, A = !0, k.taps = 1 + !!f);
            f && (f = clearTimeout(f)), A && (k.taps < 2 && (p = C[0], f = setTimeout(function() {
                f = null;
            }, g)), Tt(this), k.start());
        }
    }
    function E(h, ..._) {
        if (this.__zooming) {
            var x = I(this, _).event(h), b = h.changedTouches, k = b.length, A, M, $, C;
            for (dt(h), A = 0; A < k; ++A)
            M = b[A], $ = ut(M, this), x.touch0 && x.touch0[2] === M.identifier ? x.touch0[0] = $ : x.touch1 && x.touch1[2] === M.identifier && (x.touch1[0] = $);
            if (M = x.that.__zoom, x.touch1) {
                var R = x.touch0[0], Y = x.touch0[1], H = x.touch1[0], U = x.touch1[1], O = (O = H[0] - R[0]) * O + (O = H[1] - R[1]) * O, K = (K = U[0] - Y[0]) * K + (K = U[1] - Y[1]) * K;
                M = v(M, Math.sqrt(O / K)), $ = [(R[0] + H[0]) / 2, (R[1] + H[1]) / 2], C = [(Y[0] + U[0]) / 2, (Y[1] + U[1]) / 2];
            } else if (x.touch0)
            $ = x.touch0[0], C = x.touch0[1];
            else
            return;
            x.zoom("touch", n(z(M, $, C), x.extent, u));
        }
    }
    function T(h, ..._) {
        if (this.__zooming) {
            var x = I(this, _).event(h), b = h.changedTouches, k = b.length, A, M;
            for (qt(h), d && clearTimeout(d), d = setTimeout(function() {
                d = null;
            }, g), A = 0; A < k; ++A)
            M = b[A], x.touch0 && x.touch0[2] === M.identifier ? delete x.touch0 : x.touch1 && x.touch1[2] === M.identifier && delete x.touch1;
            if (x.touch1 && !x.touch0 && (x.touch0 = x.touch1, delete x.touch1), x.touch0)
            x.touch0[1] = this.__zoom.invert(x.touch0[0]);
            else if (x.end(), x.taps === 2 && (M = ut(M, this), Math.hypot(p[0] - M[0], p[1] - M[1]) < c)) {
                var $ = et(this).on("dblclick.zoom");
                $ && $.apply(this, arguments);
            }
        }
    }
    return y.wheelDelta = function(h) {
        return arguments.length ? (r = typeof h == "function" ? h : zt(+h), y) : r;
    }, y.filter = function(h) {
        return arguments.length ? (t = typeof h == "function" ? h : zt(!!h), y) : t;
    }, y.touchable = function(h) {
        return arguments.length ? (i = typeof h == "function" ? h : zt(!!h), y) : i;
    }, y.extent = function(h) {
        return arguments.length ? (e = typeof h == "function" ? h : zt([[+h[0][0], +h[0][1]], [+h[1][0], +h[1][1]]]), y) : e;
    }, y.scaleExtent = function(h) {
        return arguments.length ? (o[0] = +h[0], o[1] = +h[1], y) : [o[0], o[1]];
    }, y.translateExtent = function(h) {
        return arguments.length ? (u[0][0] = +h[0][0], u[1][0] = +h[1][0], u[0][1] = +h[0][1], u[1][1] = +h[1][1], y) : [[u[0][0], u[0][1]], [u[1][0], u[1][1]]];
    }, y.constrain = function(h) {
        return arguments.length ? (n = h, y) : n;
    }, y.duration = function(h) {
        return arguments.length ? (a = +h, y) : a;
    }, y.interpolate = function(h) {
        return arguments.length ? (l = h, y) : l;
    }, y.on = function() {
        var h = s.on.apply(s, arguments);
        return h === s ? y : h;
    }, y.clickDistance = function(h) {
        return arguments.length ? (m = (h = +h) * h, y) : Math.sqrt(m);
    }, y.tapDistance = function(h) {
        return arguments.length ? (c = +h, y) : c;
    }, y;
}
function wu(t, e, n = {
    sticky: !1,
    drag: !0,
    simulation: null,
    zoom: !1,
    events: {
        onZoom: null,
        onResize: null
    },
    node: {
        color: null,
        border: !0,
        radius: 10,
        borderWidth: 1,
        label: null,
        labelFontSize: 14,
        labelColor: null,
        tooltip: null,
        tooltipFontSize: 20,
        onClick: null,
        onHover: null,
        onDrag: null
    },
    link: {
        color: null,
        width: 1
    }
}) {
    var F;
    const r = t.getBoundingClientRect();
    let i = r.width, o = r.height, u = {
        k: 1,
        x: 0,
        y: 0
    }, a = [1, 8], l = [[0, 0], [i, o]];
    n.zoom && (n.zoom.scaleExtent && (a = n.zoom.scaleExtent), n.zoom.translateExtent && (l = n.zoom.translateExtent));
    let s = Pe().scaleExtent(a).translateExtent(l);
    t.setAttribute("width", i), t.setAttribute("height", o);
    let f = n == null ? void 0 : n.simulation;
    const p = ln(du);
    let { links: d, nodes: g } = e, w = ((F = n.node) == null ? void 0 : F.radius) ?? 5;
    const m = () => fu(g).force("link", nu(d).id((S) => S.id)).force("charge", cu()).force("center", Ee(i / 2, o / 2)).force("collide", tu().radius(w)).force("x", Ce(i / 2)).force("y", Re(o / 2));
    f || (f = m());
    const c = t.getContext("2d");
    et(t).call(s);
    const y = (S = null, E = null) => {
        var h;
        E && typeof E == "object" && Object.keys(E).forEach((_) => {
            n[_] = E[_];
        }), w = ((h = n.node) == null ? void 0 : h.radius) ?? 10;
        const T = () => {
            c.clearRect(0, 0, i, o), f.stop(), f = null, f = n.simulation ?? m(), f.on("tick", () => {
                P();
            });
        };
        S ? (d = S.links, g = S.nodes, T()) : E.simulation ? T() : P();
    };
    let v = {
        rect: null,
        text: null,
        arrow: null
    };
    const z = (S) => {
        var R;
        let E = t.getBoundingClientRect(), T = S.tooltip ?? n.node.tooltip;
        if (typeof T == "function" && (T = T(S)), typeof T != "string")
        throw new TypeError("tooltip should be string");
        let h = ((R = n.node) == null ? void 0 : R.tooltipFontSize) ?? 20;
        c.font = `${h / u.k}px Consolas`;
        let _ = c.measureText(T), x = 10 / u.k, b = {
            top: 10 / u.k,
            left: 10 / u.k,
            right: 10 / u.k,
            bottom: 10 / u.k
        }, k = b.left + _.width, A = b.top + _.actualBoundingBoxAscent + _.actualBoundingBoxDescent + b.bottom, M = S.x - k / 2, $ = S.y - x - A - w, C = 1;
        M + k > E.width && (M = E.width - k), M < 0 && (M = 0), $ < 0 && ($ = S.y + x + w, C = 0), v.rect = {
            x: M,
            y: $,
            width: k,
            height: A
        }, v.arrow = {
            x: [S.x - 5 / u.k, $ + C * (A - 1 / u.k)],
            y: [S.x + 5 / u.k, $ + C * (A - 1 / u.k)],
            z: [S.x, S.y - C * w]
        }, v.text = {
            x: M + k / 2 - _.width / 2,
            y: $ + b.top + A / 2 - _.actualBoundingBoxDescent,
            content: T
        }, P();
    }, N = (S, E) => {
        let T = g.map((h) => (h.d = Math.sqrt(Math.pow(S - h.x, 2) + Math.pow(E - h.y, 2)), h)).filter((h, _) => {
            let x = typeof w == "function" ? w(h, _) : w;
            return h.d < x;
        });
        return T.length === 0 ? null : (T.sort((h, _) => h.d >= _.d ? 1 : -1), T[0]);
    }, D = (S) => {
        let E = t.getBoundingClientRect();
        S.touches && (S = S.touches[0]);
        let T = (S.clientX - E.left) / (E.right - E.left) * i, h = (S.clientY - E.top) / (E.bottom - E.top) * o;
        return u && (T = (T - u.x) / u.k, h = (h - u.y) / u.k), [T, h];
    }, I = () => {
        let S = !1, E = null, T = et(t), h = null;
        s.on("start", (_) => {
            var A, M;
            _ = _.sourceEvent, _.preventDefault(), S = !0;
            let [x, b] = D(_), k = N(x, b);
            k && (E = k, E.fx = x, E.fy = b, (A = n.node) != null && A.onClick && ((M = n.node) == null || M.onClick(E, _))), _.touches && z(E);
        }).on("end", (_) => {
            _ = _.sourceEvent, S = !1, _.active || f.alphaTarget(0), !n.sticky && E && (E.fx = null, E.fy = null, E = null);
        }).on("zoom", (_) => {
            var k, A;
            if (!E || !n.drag || _.sourceEvent.type === "wheel") {
                n.zoom && (u = _.transform, (k = n == null ? void 0 : n.events) != null && k.onZoom && n.events.onZoom(_), P());
                return;
            }
            let [x, b] = D(_.sourceEvent);
            h && clearTimeout(h), h = setTimeout(() => {
                f.alphaTarget(0), S = !1, T.style("cursor", "auto");
            }, 3e3), T.style("cursor", "grabbing"), v.arrow = null, v.rect = null, v.text = null, E.fx = x, E.fy = b, f.alphaTarget(0.3).restart(), (A = n == null ? void 0 : n.node) != null && A.onDrag && n.node.onDrag(E, _, { mouseX: x, mouseY: b });
        }), T.on("mousemove touchmove", (_) => {
            var A, M, $;
            if (_.preventDefault(), S && E)
            return;
            let [x, b] = D(_), k = N(x, b);
            T.style("cursor", k ? "grab" : "auto"), k ? ((A = n.node) != null && A.onHover && ((M = n.node) == null || M.onHover(k, _)), (($ = n.node) != null && $.tooltip || k.tooltip) && z(k)) : (v.arrow = null, v.rect = null, v.text = null, P());
        });
    };
    function P() {
        var S, E, T, h, _, x, b, k, A, M, $;
        c.save(), c.clearRect(0, 0, i, o), u && (c.translate(u.x, u.y), c.scale(u.k, u.k));
        for (let C = 0; C <= d.length - 1; C++) {
            let R = d[C];
            (R.width ?? ((S = n == null ? void 0 : n.link) == null ? void 0 : S.width)) && (c.lineWidth = ((E = n.link) == null ? void 0 : E.width) / u.k);
            let H = R.color ?? ((T = n.link) == null ? void 0 : T.color);
            c.strokeStyle = H ? typeof H == "function" ? H(R) : H : "black", c.beginPath(), c.moveTo(R.source.x, R.source.y), c.lineTo(R.target.x, R.target.y), c.stroke();
        }
        c.lineWidth = ((h = n.node) == null ? void 0 : h.borderWidth) ?? 1;
        // Label
        for (let C = 0; C <= g.length - 1; C++) {
            c.strokeStyle = null;
            let R = g[C], Y = R.color ?? ((_ = n.node) == null ? void 0 : _.color), H = R.radius ?? ((x = n.node) == null ? void 0 : x.radius) ?? 10;
            typeof H == "function" && (H = H(R, C)), c.fillStyle = Y ? typeof Y == "function" ? Y(R, C) : Y : p(R.id), c.beginPath(), R.x = Math.max(H, Math.min(i - H, R.x)), R.y = Math.max(H, Math.min(o - H, R.y)), c.arc(R.x, R.y, H, 0, Math.PI * 2), c.fill();
            let U = R.border ?? ((b = n.node) == null ? void 0 : b.border);
            U && (c.strokeStyle = typeof U == "string" ? U : "#ffffff", c.stroke()), c.closePath();
            let O = R.label ?? ((k = n.node) == null ? void 0 : k.label);
            if (O) {
                let K = ((A = n == null ? void 0 : n.node) == null ? void 0 : A.labelFontSize) ?? 14;
                c.font=`${K}px Consolas`,c.fontVariantCaps="small-caps",c.textBaseline='bottom'

                c.strokeStyle="black",c.lineWidth=1,c.lineCap="round",c.lineJoin="round",
                c.strokeText(typeof O=="function"?O(R,C):typeof O=="boolean"?R.id:O,R.x-w/2,R.y+w/2),

                c.fillStyle = "white", c.fillText(typeof O == "function" ? O(R, C) : typeof O == "boolean" ? R.id : O, R.x - w / 2, R.y + w / 2);
            }
        }
        if (v.rect && (c.fillStyle = "white", c.strokeStyle = "black", c.lineWidth = 1 / u.k, c.beginPath(), c.rect(v.rect.x, v.rect.y, v.rect.width, v.rect.height), c.fill(), c.stroke(), c.closePath()), v.arrow && (c.lineWidth = 1 / u.k, c.fillStyle = "white", c.beginPath(), c.moveTo(v.arrow.x[0], v.arrow.x[1]), c.lineTo(v.arrow.y[0], v.arrow.y[1]), c.lineTo(v.arrow.z[0], v.arrow.z[1]), c.fill(), c.closePath(), c.beginPath(), c.moveTo(v.arrow.z[0], v.arrow.z[1]), c.lineTo(v.arrow.x[0], v.arrow.x[1]), c.moveTo(v.arrow.z[0], v.arrow.z[1]), c.lineTo(v.arrow.y[0], v.arrow.y[1]), c.stroke(), c.closePath()), v.text) {
            c.fillStyle = "black";
            let C = (($ = n.node) == null ? void 0 : $.tooltipFontSize) ?? 20;
            c.font = `${C / u.k}px Consolas`,
            c.fontVariantCaps="small-caps"
            c.fillText(v.text.content, v.text.x, v.text.y);
        }
        c.restore();
    }
    f.on("tick", () => {
        P();
    }), I();
    let X = null;
    return window.addEventListener("resize", (S) => {
        const E = t.getBoundingClientRect();
        i = E.width, o = E.height, t.setAttribute("width", i), t.setAttribute("height", o), X && clearTimeout(X), X = setTimeout(() => {
            var T;
            s = Pe().scaleExtent([1, 8]).translateExtent([[0, 0], [i, o]]), n.simulation || f.force("x", Ce(i / 2)).force("y", Re(o / 2)).force("center", Ee(i / 2, o / 2)).alpha(0.3).restart(), (T = n == null ? void 0 : n.events) != null && T.onResize && n.events.onResize(S);
        }, 200);
    }), {
        update: y,
        destroy: () => {
            f = null, c.clearRect(0, 0, i, o), s = null;
        }
    };
}
export {
    wu as default
};
















window.updateTagMap = function() {
// export function updateTagMap(){
    import D3CanvasNetworkgraph from "https://lutiaskokopelli.github.io/stories/outerwilds/owhtml/src/js-nodegraph.js"
    let networkgraph2=D3CanvasNetworkgraph(document.getElementById('cvs_active'),{nodes:acttags,links:actrels},{sticky:true,drag:true,zoom:true,node:{labelFontSize:5}})
}

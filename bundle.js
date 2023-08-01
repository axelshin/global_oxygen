"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

!function (e) {
  var t = {};

  function n(i) {
    if (t[i]) return t[i].exports;
    var l = t[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(l.exports, l, l.exports, n), l.l = !0, l.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, i) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: i
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var l in e) {
      n.d(i, l, function (t) {
        return e[t];
      }.bind(null, l));
    }
    return i;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 0);
}([function (e, t, n) {
  "use strict";

  function i(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
    return +e.toFixed(t);
  }

  function l(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : .1;
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
    e[1] += (e[0] - e[1]) * t, n && (e[1] = i(e[1], n));
  }

  function s() {
    return /Mobi|Android/i.test(navigator.userAgent);
  }

  function r(e, t, n) {
    var i = t.split(" ");
    return i.forEach(function (t) {
      return e.forEach(function (e) {
        return e.addEventListener(t, n);
      });
    }), function () {
      return i.forEach(function (t) {
        return e.forEach(function (e) {
          e.removeEventListener(t, n);
        });
      });
    };
  }

  function o(e) {
    var t = 0;

    do {
      t += e.offsetTop || 0, e = e.offsetParent;
    } while (e);

    return t;
  }

  n.r(t);
  var a = [];
  var c;

  function u() {
    d(), a.forEach(function (e) {
      return e();
    });
  }

  function d() {
    matchMedia("(max-width: 500px)").matches ? c = "mobile" : matchMedia("(max-width: 768px)").matches ? c = "tablet_pt" : matchMedia("(min-width: 2500px)").matches ? c = "desktop_big" : matchMedia("(min-width: 1025px)").matches ? c = "desktop_small" : matchMedia("(min-width: 769px)").matches && (c = "tablet");
  }

  var m = {
    initialize: function initialize() {
      d(), addEventListener("resize", u);
    },
    maintain: function maintain(e) {
      a.push(e);
    },
    getDevice: function getDevice() {
      return c;
    }
  };

  var _ = /*#__PURE__*/function () {
    function _(e, t, n) {
      _classCallCheck(this, _);

      this.element = e, this.sx = 0, this.x = 0, this.max = 0, this.resize_fn = t, this.callback = n, this.grab = this.grab.bind(this), this.move = this.move.bind(this), this.stop = this.stop.bind(this), this.resize = this.resize.bind(this), this.resize(), this.grab_listener = r([this.element], "mousedown touchstart", this.grab), this.resize_listener = r([window], "resize", this.resize);
    }

    _createClass(_, [{
      key: "grab",
      value: function grab(e) {
        var t = "mousedown" === e.type ? e.clientX : e.touches[0].clientX;
        this.sx = t - this.x, this.move_listener = r([window], "mousemove touchmove", this.move), this.stop_listener = r([window], "mouseup touchend", this.stop), this.callback && this.callback();
      }
    }, {
      key: "move",
      value: function move(e) {
        var t = "mousemove" === e.type ? e.clientX : e.touches[0].clientX;
        this.x = t - this.sx, this.x = Math.min(0, Math.max(this.max, this.x)), this.element.style.transform = "translate3d(".concat(this.x, "px, 0, 0)");
      }
    }, {
      key: "stop",
      value: function stop() {
        this.move_listener(), this.stop_listener();
      }
    }, {
      key: "resize",
      value: function resize() {
        this.max = -1 * this.resize_fn();
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.grab_listener && this.grab_listener(), this.resize_listener && this.resize_listener(), this.move_listener && this.move_listener(), this.stop_listener && this.stop_listener(), this.element.style.transform = "";
      }
    }]);

    return _;
  }();

  var p = "Ваша кожа может изредка испытывать кислородное голодание",
      f = "Ваша кожа регулярно испытывает нехватку кислорода",
      h = "Ваша кожа остро нуждается в дополнительном кислороде",
      g = "Используйте кислородный энергетический бустер (5799) со своим уходом или в комплексе с основным уходом – кремом для век (5792), дневным питательным (5797) или увлажняющим (5796) кремами",
      y = "Рекомендуем добавить к основному уходу кислородный энергетический бустер (5799) и кислородную маску (5795)",
      b = "Вам необходимо ввести в регулярный «рацион» кислородный энергетический бустер (5799), кислородный бальзам (5806), а также продукты для глубокого очищения – необходимый этап, который увеличивает эффективность проникновения кислорода",
      v = {
    1: {
      name: "Кислородный энергетический бустер",
      images: null,
      link: "https://new.faberlic.com/ru/p/01080201-004449",
      art: "5799"
    },
    2: {
      name: "Кислородный крем для век",
      images: null,
      link: "https://new.faberlic.com/ru/p/01080203-004442",
      art: "5792"
    },
    3: {
      name: "Кислородный питательный крем для лица",
      images: null,
      link: "https://new.faberlic.com/ru/p/01080201-004447",
      art: "5797"
    },
    4: {
      name: "Кислородный увлажняющий крем для лица",
      images: null,
      link: "https://new.faberlic.com/ru/p/01080201-004446",
      art: "5796"
    },
    5: {
      name: "Кислородная маска для лица",
      images: null,
      link: "https://new.faberlic.com/ru/p/01080204-004445",
      art: "5795"
    },
    6: {
      name: "Кислородный бальзам",
      images: null,
      link: "https://new.faberlic.com/ru/p/01080201-005632",
      art: "5806"
    },
    7: {
      name: "Кислородная пенка для очищения лица",
      images: null,
      link: "https://new.faberlic.com/ru/p/01080202-005633",
      art: "5807"
    },
    8: {
      name: "Кислородный мусс для глубокого очищения лица",
      images: null,
      link: "https://new.faberlic.com/ru/p/01080202-004443",
      art: "5793"
    }
  };
  var x,
      q,
      w,
      z,
      S,
      k,
      E,
      L,
      Y,
      A,
      T,
      D,
      M,
      C,
      O,
      j,
      H,
      P,
      $,
      I,
      X,
      R,
      B = 0,
      F = !1;

  function N(e) {
    e.target.checked ? B += 1 : B -= 1;
  }

  function V() {
    0 !== B && (S.classList.remove(S.dataset.effect), k.classList.add(k.dataset.effect), "mobile" === m.getDevice() && I.scrollIntoView({
      behavior: "smooth"
    }), B <= 2 ? (W(0, v[1]), W(1, v[2]), W(2, v[3]), W(3, v[4]), P.innerText = p, $.innerText = g) : B > 2 && B <= 4 ? (W(0, v[1]), W(1, v[5]), W(2, v[3]), W(3, v[4]), P.innerText = f, $.innerText = y) : B > 4 && (W(0, v[1]), W(1, v[6]), W(2, v[7]), W(3, v[8]), P.innerText = h, $.innerText = b));
  }

  function W(e, t) {
    de.chooseImage(T[e], t.images), M[e].innerText = "Арт. " + t.art, C[e].innerText = t.name, O[e].href = t.link, j[e].classList = "quiz__result__item__image-box  quiz__result__item__image-box_" + t.art;
  }

  function G() {
    !H && F || (F = !0, H.classList.add(H.dataset.effect));
  }

  function U() {
    S.classList.add(S.dataset.effect), k.classList.remove(k.dataset.effect), "mobile" === m.getDevice() && I.scrollIntoView({
      behavior: "smooth"
    });
  }

  function J() {
    var e = m.getDevice();
    z !== e && ("tablet_pt" === e ? (E = document.querySelector(".quiz__result__list"), E.classList.add(E.dataset.effect), D = new _(E, function () {
      var e = document.querySelectorAll(".quiz__result__item"),
          t = e[1].offsetLeft - e[0].offsetLeft - e[0].offsetWidth;
      return E.getBoundingClientRect().right - document.documentElement.clientWidth + t;
    }, G)) : D && (D.destroy(), D = null, E.classList.remove(E.dataset.effect)), "desktop_small" !== e && "desktp_big" !== e ? (X && X(), R && R()) : (X = r(L, "mouseenter", K), R = r(L, "mouseleave", Q)), z = e);
  }

  function K(_ref) {
    var e = _ref.target;
    var t = e.querySelector(".quiz__result__item__image");
    Y = e, Y.classList.add(Y.dataset.effect), A = r([t], "transitionend", function () {
      Y.classList.toggle(Y.dataset.effect);
    });
  }

  function Q(e) {
    A && A(), Y && Y.classList.remove(Y.dataset.effect);
  }

  var Z = {
    initialize: function initialize() {
      I = document.querySelector(".quiz"), S = I.querySelector(".quiz__statements"), k = I.querySelector(".quiz__result"), T = I.querySelectorAll(".quiz__result__item__image"), j = I.querySelectorAll(".quiz__result__item__image-box"), M = I.querySelectorAll(".quiz__result__item__art"), C = I.querySelectorAll(".quiz__result__item__name"), O = I.querySelectorAll(".quiz__result__item__button"), H = I.querySelector(".quiz__result__arrow-box"), P = I.querySelector(".quiz__result__title"), $ = I.querySelector(".quiz__result__answer"), L = I.querySelectorAll(".quiz__result__item"), x = I.querySelectorAll(".quiz__statements__item__real-checkbox"), r(x, "change", N), q = I.querySelector(".quiz__statements__button"), r([q], "click", V), w = I.querySelector(".quiz__result__button"), r([w], "click", U), J(), m.maintain(J);
    },
    getImagesData: function getImagesData(e) {
      for (var _t in e) {
        -1 !== _t.indexOf("item") && (v[_t.split("_")[1]].images = e[_t]);
      }
    }
  };
  var ee, te, ne, ie, le, se;

  function re() {
    for (var _e2 = se.length - 1; _e2 >= 0; _e2--) {
      var _t2 = se[_e2];

      if (scrollY + 2 * innerHeight >= scrollY + _t2.getBoundingClientRect().top && "none" !== getComputedStyle(_t2).display) {
        var _n = _t2.dataset.ll.split(" "),
            _i = ee[_n[0]][_n[1]];

        if (!_i) continue;
        oe(_t2, _i), se.splice(_e2, 1);
      }
    }
  }

  function oe(e, t) {
    "string" == typeof t ? ae(e, t) : te ? "desktop_big" === ne ? ae(e, !!t.d_b_w && t.d_b_w || t.d_b_c) : "desktop_small" === ne ? ae(e, !!t.d_s_w && t.d_s_w || t.d_s_c) : "tablet" === ne || "tablet_pt" === ne ? ae(e, !!t.t_w && t.t_w || !!t.t_c && t.t_c || !!t.d_s_w && t.d_s_w || t.d_s_c) : "mobile" === ne && ae(e, !!t.m_w && t.m_w || t.m_c) : "desktop_big" === ne ? ae(e, t.d_b_c) : "desktop_small" === ne ? ae(e, t.d_s_c) : "tablet" === ne || "tablet_pt" === ne ? ae(e, t.t_c || t.d_s_c) : "mobile" === ne && ae(e, t.m_c);
  }

  function ae(e, t) {
    "IMG" === e.tagName ? (e.src = t, e.onmousedown = function (e) {
      return e.preventDefault();
    }, e.style.userSelect = "none") : e.style.backgroundImage = "url(".concat(t, ")");
  }

  function ce(e) {
    ee = e, ue(), m.maintain(ue), Z.getImagesData(ee[6]), addEventListener("scroll", re);
  }

  function ue() {
    ne = m.getDevice(), ne !== ie && (se = _toConsumableArray(le), re()), ie = ne;
  }

  var de = {
    initialize: function initialize(e) {
      te = function () {
        var e = document.createElement("canvas");
        return !(!e.getContext || !e.getContext("2d")) && 0 == e.toDataURL("image/webp").indexOf("data:image/webp");
      }(), function (e, t) {
        fetch(e).then(function (e) {
          return e.json();
        }).then(function (e) {
          return t(e);
        })["catch"](function (e) {
          return console.error(e);
        });
      }(e, ce), le = _toConsumableArray(document.querySelectorAll("[data-ll]"));
    },
    chooseImage: oe
  };
  var me = [];

  var _e, pe;

  function fe() {
    _e = m.getDevice(), _e !== pe && (me.forEach(function (e) {
      "mobile" !== _e ? (e.drop.style.display = "block", setTimeout(function () {
        var t = e.height = e.drop.offsetHeight;
        e.price.style.transform = "translateY(".concat(-t, "px)"), e.button.style.transform = "translateY(".concat(-t, "px)"), e.drop.style.opacity = 0;
      }, 0)) : e.drop.style.display = "none", e.opened = !1;
    }), pe = _e);
  }

  var he = {
    initialize: function initialize() {
      document.querySelectorAll(".prdct-desc__method__trigger").forEach(function (e) {
        var t = e.nextElementSibling,
            n = e.parentElement.parentElement.querySelector(".js-landing-page-marker"),
            i = e.parentElement.parentElement.querySelector(".prdct-desc__price");
        n.style.transition = "transform 0.5s", i.style.transition = "transform 0.5s", t.style.transition = "transform 0.5s, opacity 0.5s";
        var l = {
          trigger: e,
          drop: t,
          price: i,
          button: n,
          height: 0,
          opened: !1
        };
        me.push(l), e.addEventListener("click", function (e) {
          return function (e, t) {
            t.opened = !t.opened, t.opened ? ("mobile" !== _e ? (t.price.style.transform = "translateY(0px)", t.button.style.transform = "translateY(0px)", t.drop.style.transitionDelay = "0.2s", t.drop.style.transitionDuration = "0.5s", setTimeout(function () {
              t.drop.style.opacity = 1;
            }, 0)) : t.drop.style.display = "block", e.currentTarget.classList.add("prdct-desc__method__trigger_active")) : ("mobile" !== _e ? (t.price.style.transform = "translateY(".concat(-t.height, "px)"), t.button.style.transform = "translateY(".concat(-t.height, "px)"), t.drop.style.transitionDuration = "0.2s", t.drop.style.transitionDelay = "0s", setTimeout(function () {
              return t.drop.style.opacity = 0;
            }, 0)) : t.drop.style.display = "none", e.currentTarget.classList.remove("prdct-desc__method__trigger_active"));
          }(e, l);
        });
      }), fe(), m.maintain(fe);
    }
  };
  var ge,
      ye = {},
      be = 0;

  function ve(e) {
    for (var _t3 in ye) {
      ye[_t3](e);
    }

    be > 0 && (ge = requestAnimationFrame(ve));
  }

  function xe() {
    qe(), ge = requestAnimationFrame(ve);
  }

  function qe() {
    cancelAnimationFrame(ge);
  }

  var we = {
    add: function add(e, t) {
      if (ye[e] = t, 0 === be) return be++, void xe();
      be++;
    },
    remove: function remove(e) {
      ye[e] && (delete ye[e], be = Math.max(0, be - 1), 0 === be && qe());
    },
    run: xe,
    stop: qe
  };
  var ze = 0;
  var Se = {
    container_element: null,
    placeholder: null,
    mobile: !1,
    ease_value: 0,
    disable_conditions: [],
    created: !1,
    disable: ["prev", "curr"],
    scroll_value: [0, 0],
    stops: [],
    elements: [],
    stops_acc: 0,
    update_queue: {}
  };

  function ke() {
    l(Se.scroll_value, Se.ease_value, 4), Se.container_element.style.transform = "translate3d(0, -".concat(Se.scroll_value[1], "px, 0)");

    for (var _e3 in Se.update_queue) {
      var _t4 = Se.update_queue[_e3];
      l(_t4.value, _t4.ease_value, !1);

      var _n2 = _t4.value[1] * _t4.step;

      _t4.parent.style.setProperty(_t4.var_name, i(_n2, 6));
    }
  }

  function Ee() {
    Date.now() - ze < 15 || (ze = Date.now(), 0 === scrollY && Ye(), Se.stops.length ? function () {
      var e = !1;

      for (var _t5 = 0; _t5 < Se.stops.length; _t5++) {
        var _n3 = Se.stops[_t5];

        if (scrollY > _n3.acc_start && scrollY < _n3.end) {
          Se.scroll_value[0] = _n3.start, e = !0;
          break;
        }
      }

      e || (Se.stops_acc = Se.stops.reduce(function (e, t) {
        return e + (scrollY > t.end ? t.length : 0);
      }, 0), Se.scroll_value[0] = scrollY - Se.stops_acc);
    }() : Se.scroll_value[0] = scrollY, function () {
      var e = 1.5 * innerHeight;
      Se.elements.forEach(function (t) {
        scrollY + e >= t.start && scrollY <= t.end + e ? (Se.update_queue[t.id] = t, t.value[0] = function (e, t) {
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          return Math.max(n, Math.min(e, t));
        }(scrollY - t.start, t.length)) : Se.update_queue[t.id] && delete Se.update_queue[t.id];
      });
    }());
  }

  function Le() {
    Se.placeholder && Ae();
    var e = !1;

    if (Se.disable_conditions.forEach(function (t) {
      e || ("mobile" === t && s() || "mobile" !== t && matchMedia(t).matches) && (Se.disable[1] = "disabled", e = !0);
    }), e || (Se.disable[1] = "allowed"), Se.disable[0] !== Se.disable[1]) {
      if ("allowed" === Se.disable[1]) {
        if (Se.created) return;
        Se.created = !0, addEventListener("scroll", Ee), Se.container_element.style.position = "fixed", Se.container_element.style.width = "100%", Se.container_element.style.height = "auto", Se.container_element.style.overflow = "hidden", function () {
          var e = document.createElement("div");
          e.innerHTML = "&nbsp;", document.body.appendChild(e), Se.placeholder = e;
        }(), Ae(), we.add("scroll", ke);
      } else Se.container_element.style.position = "", Se.container_element.style.height = "auto", Se.container_element.style.overflow = "", Se.container_element.style.transform = "", Se.container_element.style.width = "", Se.placeholder && document.body.removeChild(Se.placeholder), Ye(), removeEventListener("scroll", Ee), we.remove("scroll"), Se.created = !1;

      Se.disable[0] = Se.disable[1];
    }
  }

  function Ye() {
    Se.elements.forEach(function (e) {
      e.parent.style.setProperty(e.var_name, 0), e.value[0] = 0, e.value[1] = 0;
    });
  }

  function Ae() {
    var e = 0;
    Se.stops.forEach(function (t) {
      t.length = t.length_multiplier * innerHeight, t.acc_start = o(t.element) + e, t.start = o(t.element), t.end = t.acc_start + t.length, e += t.length;
    }), Se.elements.forEach(function (e) {
      e.start = o(e.element) + e.start_multiplier * innerHeight, e.end = e.start + e.end_multiplier * innerHeight, e.length = e.end - e.start, e.step = 1 / (e.end - e.start), setTimeout(function () {
        scrollY > e.start && (e.parent.style.setProperty(e.var_name, 1), e.value[0] = e.length, e.value[1] = e.length);
      }, 50);
    }), Se.placeholder.style.height = Se.container_element.offsetHeight + e + "px";
  }

  var Te = function Te() {
    var e = document.querySelector("[data-plx-scroll]"),
        t = document.querySelectorAll("[data-plx-stop]"),
        n = document.querySelectorAll("[data-plx-element]");
    if (!e) return console.error("no container with data attribute plx-scroll was found");
    var i = e.dataset.plxScroll.split(" ")[0] || .1,
        l = e.dataset.plxDisable.split(",").map(function (e) {
      return e.trim();
    });

    if (Se.container_element = e, Se.ease_value = i, Se.disable_conditions = l.length ? l : [], t.length) {
      var _e4 = 0;
      Se.stops = _toConsumableArray(t).map(function (t) {
        var n = +t.dataset.plxStop;
        return {
          id: ++_e4,
          length_multiplier: n,
          length: 0,
          element: t,
          done: !0
        };
      });
    }

    if (n.length) {
      var _e5 = 0;
      Se.elements = _toConsumableArray(n).map(function (t) {
        _e5++;
        var n = t.dataset.plxElement.split(" "),
            l = +n[0] || 0,
            s = +n[1] || 0,
            r = n[2] ? +n[2] : i,
            o = n[3] ? document.querySelector(n[3]) : t,
            a = t.dataset.plxName ? "--plx-" + t.dataset.plxName : "--plx" + _e5;
        return {
          id: _e5,
          element: t,
          parent: o,
          var_name: a,
          active: !1,
          start_multiplier: l,
          end_multiplier: s,
          start: 0,
          end: 0,
          step: 0,
          value: [0, 0],
          ease_value: r
        };
      });
    }

    Le(), addEventListener("resize", Le);
  };

  var De, Me, Ce, Oe, je, He, Pe, $e, Ie, Xe, Re;

  function Be(_ref2) {
    var e = _ref2.currentTarget;
    Fe();
    var t = e.dataset.callCard,
        n = Me.find(function (e) {
      return e.dataset.card == t;
    });
    n.classList.toggle(n.dataset.effect), setTimeout(function () {
      je = r([window], "click", function (e) {
        n.contains(e.target) || Fe();
      });
    }, 0), He = n;
  }

  function Fe() {
    je && je(), He && He.classList.remove(He.dataset.effect);
  }

  function Ne(e) {
    var t = e.currentTarget,
        n = "touchstart" === e.type,
        i = n ? e.touches[0].clientX : e.clientX;
    var l = 0;
    var s = r([window], n ? "touchmove" : "mousemove", function (e) {
      l = n ? e.touches[0].clientX : e.clientX;
    }),
        o = r([window], n ? "touchend" : "mouseup", function (e) {
      s(), o(), Math.abs(i - l) < 50 || 0 === l || (l - 50 > i && t.classList.remove(t.dataset.effectOpened), l + 50 < i && t.classList.add(t.dataset.effectOpened));
    });
  }

  function Ve(e) {
    var t = e.currentTarget.parentElement;
    t.classList.toggle(t.dataset.effectOpened);
  }

  function We() {
    Pe = m.getDevice(), $e !== Pe && ("mobile" === Pe ? (Ie = r(Ce, "mousedown touchstart", Ne), Xe = r(Re, "click", Ve)) : (Ie && Ie(), Xe && Xe()), $e = Pe);
  }

  var Ge = {
    initialize: function initialize() {
      De = document.querySelectorAll("[data-call-card]"), Me = _toConsumableArray(document.querySelectorAll("[data-card]")), Ce = document.querySelectorAll(".products__special-card"), Oe = document.querySelectorAll("[data-card-closer]"), Re = document.querySelectorAll(".products__special-card__arrows"), r(De, "click", Be), r(Oe, "click", Fe), We(), m.maintain(We);
    }
  };
  var Ue,
      Je,
      Ke = !1;

  function Qe(e) {
    e /= 3500, Ue.forEach(function (t, n) {
      n += 1;
      var i = Math.cos(e - 400 * n);
      t.style.transform = "translateY(".concat(10 * i, "px) rotate(").concat(3 * i, "deg)");
    });
  }

  function Ze() {
    !Ke && scrollY + innerHeight > scrollY + Je.getBoundingClientRect().top && scrollY < scrollY + Je.getBoundingClientRect().bottom ? (we.add("s5", Qe), Ke = !0) : (scrollY + innerHeight < scrollY + Je.getBoundingClientRect().top || scrollY > scrollY + Je.getBoundingClientRect().bottom) && Ke && (we.remove("s5"), Ke = !1);
  }

  function et() {
    "desktop_small" !== m.getDevice() && "desktop_big" !== m.getDevice() || s() ? (removeEventListener("scroll", Ze), we.remove("s5"), Ke = !1) : (Ze(), addEventListener("scroll", Ze));
  }

  var tt = {
    initialize: function initialize() {
      Je = document.querySelector(".products"), Ue = document.querySelectorAll(".products__item__wrapper_spin"), et(), m.maintain(et);
    }
  };
  m.initialize(), de.initialize("data/images_data.json");
  var nt = document.querySelector(".oxygen");
  nt.dataset.plxScroll = "0.07", nt.dataset.plxDisable = "(max-width: 1024px), mobile", addEventListener("load", function () {
    he.initialize(), Ge.initialize(), Z.initialize(), tt.initialize(), Te();
  });
}]);
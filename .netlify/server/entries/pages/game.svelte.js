var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Game,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1d801ba1 = require("../../chunks/index-1d801ba1.js");
var import_Invitation_d74634b8 = require("../../chunks/Invitation-d74634b8.js");
var import_tslib = require("tslib");
var import_axios = require("axios");
var __defProp2 = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const subscriber_queue = [];
function writable(value, start = import_index_1d801ba1.n) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if ((0, import_index_1d801ba1.a)(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = import_index_1d801ba1.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_1d801ba1.n;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
const initStore = () => ({
  api: { url: "https://api.airtable.com/v0/appSlVZRstmNGka1f/Questions", key: "key6cd96uiyWqIsVL" },
  displayInvitation: false,
  displayGameTitle: true,
  displayWhoAreYou: false,
  displayAgreement: false,
  displayWheel: false,
  displayQuestion: false,
  displayScore: false,
  users: [
    { id: "USER 01", name: "Baptiste", score: 0 },
    { id: "USER 02", name: "Charles", score: 0 },
    { id: "USER 03", name: "Hugo", score: 0 },
    { id: "USER 04", name: "Paul", score: 0 },
    { id: "USER 05", name: "Vidal", score: 0 }
  ],
  isCounterLaunched: false,
  isCounterDone: false,
  questionIdsAsked: []
});
const createStore = () => {
  const { subscribe: subscribe2, set, update } = writable(initStore());
  return {
    subscribe: subscribe2,
    update,
    set,
    reset: () => set(initStore())
  };
};
const store = createStore();
function classMap(classObj) {
  return Object.entries(classObj).filter(([name, value]) => name !== "" && value).map(([name]) => name).join(" ");
}
function exclude(obj, keys) {
  let names = Object.getOwnPropertyNames(obj);
  const newObj = {};
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const cashIndex = name.indexOf("$");
    if (cashIndex !== -1 && keys.indexOf(name.substring(0, cashIndex + 1)) !== -1) {
      continue;
    }
    if (keys.indexOf(name) !== -1) {
      continue;
    }
    newObj[name] = obj[name];
  }
  return newObj;
}
const oldModifierRegex = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
const newModifierRegex = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function forwardEventsBuilder(component) {
  let $on;
  let events2 = [];
  component.$on = (fullEventType, callback) => {
    let eventType = fullEventType;
    let destructor = () => {
    };
    if ($on) {
      destructor = $on(eventType, callback);
    } else {
      events2.push([eventType, callback]);
    }
    const oldModifierMatch = eventType.match(oldModifierRegex);
    if (oldModifierMatch && console) {
      console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', eventType);
    }
    return () => {
      destructor();
    };
  };
  function forward(e) {
    (0, import_index_1d801ba1.b)(component, e);
  }
  return (node) => {
    const destructors = [];
    const forwardDestructors = {};
    $on = (fullEventType, callback) => {
      let eventType = fullEventType;
      let handler = callback;
      let options = false;
      const oldModifierMatch = eventType.match(oldModifierRegex);
      const newModifierMatch = eventType.match(newModifierRegex);
      const modifierMatch = oldModifierMatch || newModifierMatch;
      if (eventType.match(/^SMUI:\w+:/)) {
        const newEventTypeParts = eventType.split(":");
        let newEventType = "";
        for (let i = 0; i < newEventTypeParts.length; i++) {
          newEventType += i === newEventTypeParts.length - 1 ? ":" + newEventTypeParts[i] : newEventTypeParts[i].split("-").map((value) => value.slice(0, 1).toUpperCase() + value.slice(1)).join("");
        }
        console.warn(`The event ${eventType.split("$")[0]} has been renamed to ${newEventType.split("$")[0]}.`);
        eventType = newEventType;
      }
      if (modifierMatch) {
        const parts = eventType.split(oldModifierMatch ? ":" : "$");
        eventType = parts[0];
        const eventOptions = Object.fromEntries(parts.slice(1).map((mod) => [mod, true]));
        if (eventOptions.passive) {
          options = options || {};
          options.passive = true;
        }
        if (eventOptions.nonpassive) {
          options = options || {};
          options.passive = false;
        }
        if (eventOptions.capture) {
          options = options || {};
          options.capture = true;
        }
        if (eventOptions.once) {
          options = options || {};
          options.once = true;
        }
        if (eventOptions.preventDefault) {
          handler = (0, import_index_1d801ba1.p)(handler);
        }
        if (eventOptions.stopPropagation) {
          handler = (0, import_index_1d801ba1.d)(handler);
        }
      }
      const off = (0, import_index_1d801ba1.l)(node, eventType, handler, options);
      const destructor = () => {
        off();
        const idx = destructors.indexOf(destructor);
        if (idx > -1) {
          destructors.splice(idx, 1);
        }
      };
      destructors.push(destructor);
      if (!(eventType in forwardDestructors)) {
        forwardDestructors[eventType] = (0, import_index_1d801ba1.l)(node, eventType, forward);
      }
      return destructor;
    };
    for (let i = 0; i < events2.length; i++) {
      $on(events2[i][0], events2[i][1]);
    }
    return {
      destroy: () => {
        for (let i = 0; i < destructors.length; i++) {
          destructors[i]();
        }
        for (let entry of Object.entries(forwardDestructors)) {
          entry[1]();
        }
      }
    };
  };
}
function prefixFilter(obj, prefix) {
  let names = Object.getOwnPropertyNames(obj);
  const newObj = {};
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (name.substring(0, prefix.length) === prefix) {
      newObj[name.substring(prefix.length)] = obj[name];
    }
  }
  return newObj;
}
var supportsCssVariables_;
function supportsCssVariables(windowObj, forceRefresh) {
  if (forceRefresh === void 0) {
    forceRefresh = false;
  }
  var CSS = windowObj.CSS;
  var supportsCssVars = supportsCssVariables_;
  if (typeof supportsCssVariables_ === "boolean" && !forceRefresh) {
    return supportsCssVariables_;
  }
  var supportsFunctionPresent = CSS && typeof CSS.supports === "function";
  if (!supportsFunctionPresent) {
    return false;
  }
  var explicitlySupportsCssVars = CSS.supports("--css-vars", "yes");
  var weAreFeatureDetectingSafari10plus = CSS.supports("(--css-vars: yes)") && CSS.supports("color", "#00000000");
  supportsCssVars = explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
  if (!forceRefresh) {
    supportsCssVariables_ = supportsCssVars;
  }
  return supportsCssVars;
}
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
  if (!evt) {
    return { x: 0, y: 0 };
  }
  var x = pageOffset.x, y = pageOffset.y;
  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;
  var normalizedX;
  var normalizedY;
  if (evt.type === "touchstart") {
    var touchEvent = evt;
    normalizedX = touchEvent.changedTouches[0].pageX - documentX;
    normalizedY = touchEvent.changedTouches[0].pageY - documentY;
  } else {
    var mouseEvent = evt;
    normalizedX = mouseEvent.pageX - documentX;
    normalizedY = mouseEvent.pageY - documentY;
  }
  return { x: normalizedX, y: normalizedY };
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation = function() {
  function MDCFoundation2(adapter) {
    if (adapter === void 0) {
      adapter = {};
    }
    this.adapter = adapter;
  }
  Object.defineProperty(MDCFoundation2, "cssClasses", {
    get: function() {
      return {};
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFoundation2, "strings", {
    get: function() {
      return {};
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFoundation2, "numbers", {
    get: function() {
      return {};
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFoundation2, "defaultAdapter", {
    get: function() {
      return {};
    },
    enumerable: false,
    configurable: true
  });
  MDCFoundation2.prototype.init = function() {
  };
  MDCFoundation2.prototype.destroy = function() {
  };
  return MDCFoundation2;
}();
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function applyPassive$1(globalObj) {
  if (globalObj === void 0) {
    globalObj = window;
  }
  return supportsPassiveOption(globalObj) ? { passive: true } : false;
}
function supportsPassiveOption(globalObj) {
  if (globalObj === void 0) {
    globalObj = window;
  }
  var passiveSupported = false;
  try {
    var options = {
      get passive() {
        passiveSupported = true;
        return false;
      }
    };
    var handler = function() {
    };
    globalObj.document.addEventListener("test", handler, options);
    globalObj.document.removeEventListener("test", handler, options);
  } catch (err) {
    passiveSupported = false;
  }
  return passiveSupported;
}
var events = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: applyPassive$1
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function closest(element, selector) {
  if (element.closest) {
    return element.closest(selector);
  }
  var el = element;
  while (el) {
    if (matches$1(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}
function matches$1(element, selector) {
  var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
  return nativeMatches.call(element, selector);
}
function estimateScrollWidth(element) {
  var htmlEl = element;
  if (htmlEl.offsetParent !== null) {
    return htmlEl.scrollWidth;
  }
  var clone = htmlEl.cloneNode(true);
  clone.style.setProperty("position", "absolute");
  clone.style.setProperty("transform", "translate(-9999px, -9999px)");
  document.documentElement.appendChild(clone);
  var scrollWidth = clone.scrollWidth;
  document.documentElement.removeChild(clone);
  return scrollWidth;
}
var ponyfill = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest,
  matches: matches$1,
  estimateScrollWidth
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
};
var strings = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
};
var numbers = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ACTIVATION_EVENT_TYPES = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
];
var POINTER_DEACTIVATION_EVENT_TYPES = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
];
var activatedTargets = [];
var MDCRippleFoundation = function(_super) {
  (0, import_tslib.__extends)(MDCRippleFoundation2, _super);
  function MDCRippleFoundation2(adapter) {
    var _this = _super.call(this, (0, import_tslib.__assign)((0, import_tslib.__assign)({}, MDCRippleFoundation2.defaultAdapter), adapter)) || this;
    _this.activationAnimationHasEnded = false;
    _this.activationTimer = 0;
    _this.fgDeactivationRemovalTimer = 0;
    _this.fgScale = "0";
    _this.frame = { width: 0, height: 0 };
    _this.initialSize = 0;
    _this.layoutFrame = 0;
    _this.maxRadius = 0;
    _this.unboundedCoords = { left: 0, top: 0 };
    _this.activationState = _this.defaultActivationState();
    _this.activationTimerCallback = function() {
      _this.activationAnimationHasEnded = true;
      _this.runDeactivationUXLogicIfReady();
    };
    _this.activateHandler = function(e) {
      _this.activateImpl(e);
    };
    _this.deactivateHandler = function() {
      _this.deactivateImpl();
    };
    _this.focusHandler = function() {
      _this.handleFocus();
    };
    _this.blurHandler = function() {
      _this.handleBlur();
    };
    _this.resizeHandler = function() {
      _this.layout();
    };
    return _this;
  }
  Object.defineProperty(MDCRippleFoundation2, "cssClasses", {
    get: function() {
      return cssClasses;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation2, "strings", {
    get: function() {
      return strings;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation2, "numbers", {
    get: function() {
      return numbers;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
          return void 0;
        },
        browserSupportsCssVars: function() {
          return true;
        },
        computeBoundingRect: function() {
          return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
        },
        containsEventTarget: function() {
          return true;
        },
        deregisterDocumentInteractionHandler: function() {
          return void 0;
        },
        deregisterInteractionHandler: function() {
          return void 0;
        },
        deregisterResizeHandler: function() {
          return void 0;
        },
        getWindowPageOffset: function() {
          return { x: 0, y: 0 };
        },
        isSurfaceActive: function() {
          return true;
        },
        isSurfaceDisabled: function() {
          return true;
        },
        isUnbounded: function() {
          return true;
        },
        registerDocumentInteractionHandler: function() {
          return void 0;
        },
        registerInteractionHandler: function() {
          return void 0;
        },
        registerResizeHandler: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        },
        updateCssVariable: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCRippleFoundation2.prototype.init = function() {
    var _this = this;
    var supportsPressRipple = this.supportsPressRipple();
    this.registerRootHandlers(supportsPressRipple);
    if (supportsPressRipple) {
      var _a = MDCRippleFoundation2.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
      requestAnimationFrame(function() {
        _this.adapter.addClass(ROOT_1);
        if (_this.adapter.isUnbounded()) {
          _this.adapter.addClass(UNBOUNDED_1);
          _this.layoutInternal();
        }
      });
    }
  };
  MDCRippleFoundation2.prototype.destroy = function() {
    var _this = this;
    if (this.supportsPressRipple()) {
      if (this.activationTimer) {
        clearTimeout(this.activationTimer);
        this.activationTimer = 0;
        this.adapter.removeClass(MDCRippleFoundation2.cssClasses.FG_ACTIVATION);
      }
      if (this.fgDeactivationRemovalTimer) {
        clearTimeout(this.fgDeactivationRemovalTimer);
        this.fgDeactivationRemovalTimer = 0;
        this.adapter.removeClass(MDCRippleFoundation2.cssClasses.FG_DEACTIVATION);
      }
      var _a = MDCRippleFoundation2.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
      requestAnimationFrame(function() {
        _this.adapter.removeClass(ROOT_2);
        _this.adapter.removeClass(UNBOUNDED_2);
        _this.removeCssVars();
      });
    }
    this.deregisterRootHandlers();
    this.deregisterDeactivationHandlers();
  };
  MDCRippleFoundation2.prototype.activate = function(evt) {
    this.activateImpl(evt);
  };
  MDCRippleFoundation2.prototype.deactivate = function() {
    this.deactivateImpl();
  };
  MDCRippleFoundation2.prototype.layout = function() {
    var _this = this;
    if (this.layoutFrame) {
      cancelAnimationFrame(this.layoutFrame);
    }
    this.layoutFrame = requestAnimationFrame(function() {
      _this.layoutInternal();
      _this.layoutFrame = 0;
    });
  };
  MDCRippleFoundation2.prototype.setUnbounded = function(unbounded) {
    var UNBOUNDED = MDCRippleFoundation2.cssClasses.UNBOUNDED;
    if (unbounded) {
      this.adapter.addClass(UNBOUNDED);
    } else {
      this.adapter.removeClass(UNBOUNDED);
    }
  };
  MDCRippleFoundation2.prototype.handleFocus = function() {
    var _this = this;
    requestAnimationFrame(function() {
      return _this.adapter.addClass(MDCRippleFoundation2.cssClasses.BG_FOCUSED);
    });
  };
  MDCRippleFoundation2.prototype.handleBlur = function() {
    var _this = this;
    requestAnimationFrame(function() {
      return _this.adapter.removeClass(MDCRippleFoundation2.cssClasses.BG_FOCUSED);
    });
  };
  MDCRippleFoundation2.prototype.supportsPressRipple = function() {
    return this.adapter.browserSupportsCssVars();
  };
  MDCRippleFoundation2.prototype.defaultActivationState = function() {
    return {
      activationEvent: void 0,
      hasDeactivationUXRun: false,
      isActivated: false,
      isProgrammatic: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false
    };
  };
  MDCRippleFoundation2.prototype.registerRootHandlers = function(supportsPressRipple) {
    var e_1, _a;
    if (supportsPressRipple) {
      try {
        for (var ACTIVATION_EVENT_TYPES_1 = (0, import_tslib.__values)(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next(); !ACTIVATION_EVENT_TYPES_1_1.done; ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next()) {
          var evtType = ACTIVATION_EVENT_TYPES_1_1.value;
          this.adapter.registerInteractionHandler(evtType, this.activateHandler);
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (ACTIVATION_EVENT_TYPES_1_1 && !ACTIVATION_EVENT_TYPES_1_1.done && (_a = ACTIVATION_EVENT_TYPES_1.return))
            _a.call(ACTIVATION_EVENT_TYPES_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      if (this.adapter.isUnbounded()) {
        this.adapter.registerResizeHandler(this.resizeHandler);
      }
    }
    this.adapter.registerInteractionHandler("focus", this.focusHandler);
    this.adapter.registerInteractionHandler("blur", this.blurHandler);
  };
  MDCRippleFoundation2.prototype.registerDeactivationHandlers = function(evt) {
    var e_2, _a;
    if (evt.type === "keydown") {
      this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
    } else {
      try {
        for (var POINTER_DEACTIVATION_EVENT_TYPES_1 = (0, import_tslib.__values)(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next(); !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done; POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next()) {
          var evtType = POINTER_DEACTIVATION_EVENT_TYPES_1_1.value;
          this.adapter.registerDocumentInteractionHandler(evtType, this.deactivateHandler);
        }
      } catch (e_2_1) {
        e_2 = { error: e_2_1 };
      } finally {
        try {
          if (POINTER_DEACTIVATION_EVENT_TYPES_1_1 && !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_1.return))
            _a.call(POINTER_DEACTIVATION_EVENT_TYPES_1);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
    }
  };
  MDCRippleFoundation2.prototype.deregisterRootHandlers = function() {
    var e_3, _a;
    try {
      for (var ACTIVATION_EVENT_TYPES_2 = (0, import_tslib.__values)(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next(); !ACTIVATION_EVENT_TYPES_2_1.done; ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next()) {
        var evtType = ACTIVATION_EVENT_TYPES_2_1.value;
        this.adapter.deregisterInteractionHandler(evtType, this.activateHandler);
      }
    } catch (e_3_1) {
      e_3 = { error: e_3_1 };
    } finally {
      try {
        if (ACTIVATION_EVENT_TYPES_2_1 && !ACTIVATION_EVENT_TYPES_2_1.done && (_a = ACTIVATION_EVENT_TYPES_2.return))
          _a.call(ACTIVATION_EVENT_TYPES_2);
      } finally {
        if (e_3)
          throw e_3.error;
      }
    }
    this.adapter.deregisterInteractionHandler("focus", this.focusHandler);
    this.adapter.deregisterInteractionHandler("blur", this.blurHandler);
    if (this.adapter.isUnbounded()) {
      this.adapter.deregisterResizeHandler(this.resizeHandler);
    }
  };
  MDCRippleFoundation2.prototype.deregisterDeactivationHandlers = function() {
    var e_4, _a;
    this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
    try {
      for (var POINTER_DEACTIVATION_EVENT_TYPES_2 = (0, import_tslib.__values)(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next(); !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done; POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next()) {
        var evtType = POINTER_DEACTIVATION_EVENT_TYPES_2_1.value;
        this.adapter.deregisterDocumentInteractionHandler(evtType, this.deactivateHandler);
      }
    } catch (e_4_1) {
      e_4 = { error: e_4_1 };
    } finally {
      try {
        if (POINTER_DEACTIVATION_EVENT_TYPES_2_1 && !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_2.return))
          _a.call(POINTER_DEACTIVATION_EVENT_TYPES_2);
      } finally {
        if (e_4)
          throw e_4.error;
      }
    }
  };
  MDCRippleFoundation2.prototype.removeCssVars = function() {
    var _this = this;
    var rippleStrings = MDCRippleFoundation2.strings;
    var keys = Object.keys(rippleStrings);
    keys.forEach(function(key) {
      if (key.indexOf("VAR_") === 0) {
        _this.adapter.updateCssVariable(rippleStrings[key], null);
      }
    });
  };
  MDCRippleFoundation2.prototype.activateImpl = function(evt) {
    var _this = this;
    if (this.adapter.isSurfaceDisabled()) {
      return;
    }
    var activationState = this.activationState;
    if (activationState.isActivated) {
      return;
    }
    var previousActivationEvent = this.previousActivationEvent;
    var isSameInteraction = previousActivationEvent && evt !== void 0 && previousActivationEvent.type !== evt.type;
    if (isSameInteraction) {
      return;
    }
    activationState.isActivated = true;
    activationState.isProgrammatic = evt === void 0;
    activationState.activationEvent = evt;
    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== void 0 && (evt.type === "mousedown" || evt.type === "touchstart" || evt.type === "pointerdown");
    var hasActivatedChild = evt !== void 0 && activatedTargets.length > 0 && activatedTargets.some(function(target) {
      return _this.adapter.containsEventTarget(target);
    });
    if (hasActivatedChild) {
      this.resetActivationState();
      return;
    }
    if (evt !== void 0) {
      activatedTargets.push(evt.target);
      this.registerDeactivationHandlers(evt);
    }
    activationState.wasElementMadeActive = this.checkElementMadeActive(evt);
    if (activationState.wasElementMadeActive) {
      this.animateActivation();
    }
    requestAnimationFrame(function() {
      activatedTargets = [];
      if (!activationState.wasElementMadeActive && evt !== void 0 && (evt.key === " " || evt.keyCode === 32)) {
        activationState.wasElementMadeActive = _this.checkElementMadeActive(evt);
        if (activationState.wasElementMadeActive) {
          _this.animateActivation();
        }
      }
      if (!activationState.wasElementMadeActive) {
        _this.activationState = _this.defaultActivationState();
      }
    });
  };
  MDCRippleFoundation2.prototype.checkElementMadeActive = function(evt) {
    return evt !== void 0 && evt.type === "keydown" ? this.adapter.isSurfaceActive() : true;
  };
  MDCRippleFoundation2.prototype.animateActivation = function() {
    var _this = this;
    var _a = MDCRippleFoundation2.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
    var _b = MDCRippleFoundation2.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
    var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation2.numbers.DEACTIVATION_TIMEOUT_MS;
    this.layoutInternal();
    var translateStart = "";
    var translateEnd = "";
    if (!this.adapter.isUnbounded()) {
      var _c = this.getFgTranslationCoordinates(), startPoint = _c.startPoint, endPoint = _c.endPoint;
      translateStart = startPoint.x + "px, " + startPoint.y + "px";
      translateEnd = endPoint.x + "px, " + endPoint.y + "px";
    }
    this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
    this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
    clearTimeout(this.activationTimer);
    clearTimeout(this.fgDeactivationRemovalTimer);
    this.rmBoundedActivationClasses();
    this.adapter.removeClass(FG_DEACTIVATION);
    this.adapter.computeBoundingRect();
    this.adapter.addClass(FG_ACTIVATION);
    this.activationTimer = setTimeout(function() {
      _this.activationTimerCallback();
    }, DEACTIVATION_TIMEOUT_MS);
  };
  MDCRippleFoundation2.prototype.getFgTranslationCoordinates = function() {
    var _a = this.activationState, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
    var startPoint;
    if (wasActivatedByPointer) {
      startPoint = getNormalizedEventCoords(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
    } else {
      startPoint = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      };
    }
    startPoint = {
      x: startPoint.x - this.initialSize / 2,
      y: startPoint.y - this.initialSize / 2
    };
    var endPoint = {
      x: this.frame.width / 2 - this.initialSize / 2,
      y: this.frame.height / 2 - this.initialSize / 2
    };
    return { startPoint, endPoint };
  };
  MDCRippleFoundation2.prototype.runDeactivationUXLogicIfReady = function() {
    var _this = this;
    var FG_DEACTIVATION = MDCRippleFoundation2.cssClasses.FG_DEACTIVATION;
    var _a = this.activationState, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
    var activationHasEnded = hasDeactivationUXRun || !isActivated;
    if (activationHasEnded && this.activationAnimationHasEnded) {
      this.rmBoundedActivationClasses();
      this.adapter.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer = setTimeout(function() {
        _this.adapter.removeClass(FG_DEACTIVATION);
      }, numbers.FG_DEACTIVATION_MS);
    }
  };
  MDCRippleFoundation2.prototype.rmBoundedActivationClasses = function() {
    var FG_ACTIVATION = MDCRippleFoundation2.cssClasses.FG_ACTIVATION;
    this.adapter.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded = false;
    this.adapter.computeBoundingRect();
  };
  MDCRippleFoundation2.prototype.resetActivationState = function() {
    var _this = this;
    this.previousActivationEvent = this.activationState.activationEvent;
    this.activationState = this.defaultActivationState();
    setTimeout(function() {
      return _this.previousActivationEvent = void 0;
    }, MDCRippleFoundation2.numbers.TAP_DELAY_MS);
  };
  MDCRippleFoundation2.prototype.deactivateImpl = function() {
    var _this = this;
    var activationState = this.activationState;
    if (!activationState.isActivated) {
      return;
    }
    var state = (0, import_tslib.__assign)({}, activationState);
    if (activationState.isProgrammatic) {
      requestAnimationFrame(function() {
        _this.animateDeactivation(state);
      });
      this.resetActivationState();
    } else {
      this.deregisterDeactivationHandlers();
      requestAnimationFrame(function() {
        _this.activationState.hasDeactivationUXRun = true;
        _this.animateDeactivation(state);
        _this.resetActivationState();
      });
    }
  };
  MDCRippleFoundation2.prototype.animateDeactivation = function(_a) {
    var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
    if (wasActivatedByPointer || wasElementMadeActive) {
      this.runDeactivationUXLogicIfReady();
    }
  };
  MDCRippleFoundation2.prototype.layoutInternal = function() {
    var _this = this;
    this.frame = this.adapter.computeBoundingRect();
    var maxDim = Math.max(this.frame.height, this.frame.width);
    var getBoundedRadius = function() {
      var hypotenuse = Math.sqrt(Math.pow(_this.frame.width, 2) + Math.pow(_this.frame.height, 2));
      return hypotenuse + MDCRippleFoundation2.numbers.PADDING;
    };
    this.maxRadius = this.adapter.isUnbounded() ? maxDim : getBoundedRadius();
    var initialSize = Math.floor(maxDim * MDCRippleFoundation2.numbers.INITIAL_ORIGIN_SCALE);
    if (this.adapter.isUnbounded() && initialSize % 2 !== 0) {
      this.initialSize = initialSize - 1;
    } else {
      this.initialSize = initialSize;
    }
    this.fgScale = "" + this.maxRadius / this.initialSize;
    this.updateLayoutCssVars();
  };
  MDCRippleFoundation2.prototype.updateLayoutCssVars = function() {
    var _a = MDCRippleFoundation2.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
    this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize + "px");
    this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale);
    if (this.adapter.isUnbounded()) {
      this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      };
      this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords.left + "px");
      this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords.top + "px");
    }
  };
  return MDCRippleFoundation2;
}(MDCFoundation);
const { applyPassive } = events;
const { matches } = ponyfill;
function Ripple(node, { ripple = true, surface = false, unbounded = false, disabled = false, color, active, rippleElement, eventTarget, activeTarget, addClass = (className) => node.classList.add(className), removeClass = (className) => node.classList.remove(className), addStyle = (name, value) => node.style.setProperty(name, value), initPromise = Promise.resolve() } = {}) {
  let instance;
  let addLayoutListener = (0, import_index_1d801ba1.g)("SMUI:addLayoutListener");
  let removeLayoutListener;
  let oldActive = active;
  let oldEventTarget = eventTarget;
  let oldActiveTarget = activeTarget;
  function handleProps() {
    if (surface) {
      addClass("mdc-ripple-surface");
      if (color === "primary") {
        addClass("smui-ripple-surface--primary");
        removeClass("smui-ripple-surface--secondary");
      } else if (color === "secondary") {
        removeClass("smui-ripple-surface--primary");
        addClass("smui-ripple-surface--secondary");
      } else {
        removeClass("smui-ripple-surface--primary");
        removeClass("smui-ripple-surface--secondary");
      }
    } else {
      removeClass("mdc-ripple-surface");
      removeClass("smui-ripple-surface--primary");
      removeClass("smui-ripple-surface--secondary");
    }
    if (instance && oldActive !== active) {
      oldActive = active;
      if (active) {
        instance.activate();
      } else if (active === false) {
        instance.deactivate();
      }
    }
    if (ripple && !instance) {
      instance = new MDCRippleFoundation({
        addClass,
        browserSupportsCssVars: () => supportsCssVariables(window),
        computeBoundingRect: () => (rippleElement || node).getBoundingClientRect(),
        containsEventTarget: (target) => node.contains(target),
        deregisterDocumentInteractionHandler: (evtType, handler) => document.documentElement.removeEventListener(evtType, handler, applyPassive()),
        deregisterInteractionHandler: (evtType, handler) => (eventTarget || node).removeEventListener(evtType, handler, applyPassive()),
        deregisterResizeHandler: (handler) => window.removeEventListener("resize", handler),
        getWindowPageOffset: () => ({
          x: window.pageXOffset,
          y: window.pageYOffset
        }),
        isSurfaceActive: () => active == null ? matches(activeTarget || node, ":active") : active,
        isSurfaceDisabled: () => !!disabled,
        isUnbounded: () => !!unbounded,
        registerDocumentInteractionHandler: (evtType, handler) => document.documentElement.addEventListener(evtType, handler, applyPassive()),
        registerInteractionHandler: (evtType, handler) => (eventTarget || node).addEventListener(evtType, handler, applyPassive()),
        registerResizeHandler: (handler) => window.addEventListener("resize", handler),
        removeClass,
        updateCssVariable: addStyle
      });
      initPromise.then(() => {
        if (instance) {
          instance.init();
          instance.setUnbounded(unbounded);
        }
      });
    } else if (instance && !ripple) {
      initPromise.then(() => {
        if (instance) {
          instance.destroy();
          instance = void 0;
        }
      });
    }
    if (instance && (oldEventTarget !== eventTarget || oldActiveTarget !== activeTarget)) {
      oldEventTarget = eventTarget;
      oldActiveTarget = activeTarget;
      instance.destroy();
      requestAnimationFrame(() => {
        if (instance) {
          instance.init();
          instance.setUnbounded(unbounded);
        }
      });
    }
    if (!ripple && unbounded) {
      addClass("mdc-ripple-upgraded--unbounded");
    }
  }
  handleProps();
  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }
  function layout() {
    if (instance) {
      instance.layout();
    }
  }
  return {
    update(props) {
      ({
        ripple,
        surface,
        unbounded,
        disabled,
        color,
        active,
        rippleElement,
        eventTarget,
        activeTarget,
        addClass,
        removeClass,
        addStyle,
        initPromise
      } = Object.assign({ ripple: true, surface: false, unbounded: false, disabled: false, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (className) => node.classList.add(className), removeClass: (className) => node.classList.remove(className), addStyle: (name, value) => node.style.setProperty(name, value), initPromise: Promise.resolve() }, props));
      handleProps();
    },
    destroy() {
      if (instance) {
        instance.destroy();
        instance = void 0;
        removeClass("mdc-ripple-surface");
        removeClass("smui-ripple-surface--primary");
        removeClass("smui-ripple-surface--secondary");
      }
      if (removeLayoutListener) {
        removeLayoutListener();
      }
    }
  };
}
const A$1 = (0, import_index_1d801ba1.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_1d801ba1.f)($$props, ["use", "href", "getElement"]);
  let { use = [] } = $$props;
  let { href = "javascript:void(0);" } = $$props;
  forwardEventsBuilder((0, import_index_1d801ba1.h)());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<a${(0, import_index_1d801ba1.i)([{ href: (0, import_index_1d801ba1.j)(href) }, (0, import_index_1d801ba1.k)($$restProps)], {})}${(0, import_index_1d801ba1.o)("this", element, 0)}>${slots.default ? slots.default({}) : ``}</a>`;
});
const Button$1 = (0, import_index_1d801ba1.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_1d801ba1.f)($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder((0, import_index_1d801ba1.h)());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<button${(0, import_index_1d801ba1.i)([(0, import_index_1d801ba1.k)($$restProps)], {})}${(0, import_index_1d801ba1.o)("this", element, 0)}>${slots.default ? slots.default({}) : ``}</button>`;
});
const Div$1 = (0, import_index_1d801ba1.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_1d801ba1.f)($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder((0, import_index_1d801ba1.h)());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${(0, import_index_1d801ba1.i)([(0, import_index_1d801ba1.k)($$restProps)], {})}${(0, import_index_1d801ba1.o)("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const I = (0, import_index_1d801ba1.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_1d801ba1.f)($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder((0, import_index_1d801ba1.h)());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<i${(0, import_index_1d801ba1.i)([(0, import_index_1d801ba1.k)($$restProps)], {})}${(0, import_index_1d801ba1.o)("this", element, 0)}>${slots.default ? slots.default({}) : ``}</i>`;
});
const Span = (0, import_index_1d801ba1.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_1d801ba1.f)($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder((0, import_index_1d801ba1.h)());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<span${(0, import_index_1d801ba1.i)([(0, import_index_1d801ba1.k)($$restProps)], {})}${(0, import_index_1d801ba1.o)("this", element, 0)}>${slots.default ? slots.default({}) : ``}</span>`;
});
const Svg = (0, import_index_1d801ba1.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_1d801ba1.f)($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder((0, import_index_1d801ba1.h)());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<svg${(0, import_index_1d801ba1.i)([(0, import_index_1d801ba1.k)($$restProps)], {})}${(0, import_index_1d801ba1.o)("this", element, 0)}>${slots.default ? slots.default({}) : ``}</svg>`;
});
const A = A$1;
const Button = Button$1;
const Div = Div$1;
const { Object: Object_1$1 } = import_index_1d801ba1.q;
const Button_1 = (0, import_index_1d801ba1.c)(($$result, $$props, $$bindings, slots) => {
  let actionProp;
  let defaultProp;
  let secondaryProp;
  let $$restProps = (0, import_index_1d801ba1.f)($$props, [
    "use",
    "class",
    "style",
    "ripple",
    "color",
    "variant",
    "touch",
    "href",
    "action",
    "defaultAction",
    "secondary",
    "component",
    "getElement"
  ]);
  const forwardEvents = forwardEventsBuilder((0, import_index_1d801ba1.h)());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { ripple = true } = $$props;
  let { color = "primary" } = $$props;
  let { variant = "text" } = $$props;
  let { touch = false } = $$props;
  let { href = void 0 } = $$props;
  let { action = "close" } = $$props;
  let { defaultAction = false } = $$props;
  let { secondary = false } = $$props;
  let element;
  let internalClasses = {};
  let internalStyles = {};
  let context = (0, import_index_1d801ba1.g)("SMUI:button:context");
  let { component = href == null ? Button : A } = $$props;
  let previousDisabled = $$restProps.disabled;
  (0, import_index_1d801ba1.s)("SMUI:label:context", "button");
  (0, import_index_1d801ba1.s)("SMUI:icon:context", "button");
  function addClass(className2) {
    if (!internalClasses[className2]) {
      internalClasses[className2] = true;
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      internalClasses[className2] = false;
    }
  }
  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === "" || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.touch === void 0 && $$bindings.touch && touch !== void 0)
    $$bindings.touch(touch);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.defaultAction === void 0 && $$bindings.defaultAction && defaultAction !== void 0)
    $$bindings.defaultAction(defaultAction);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0)
    $$bindings.secondary(secondary);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    actionProp = context === "dialog:action" && action != null ? { "data-mdc-dialog-action": action } : { action: $$props.action };
    defaultProp = context === "dialog:action" && defaultAction ? { "data-mdc-dialog-button-default": "" } : { default: $$props.default };
    secondaryProp = context === "banner" ? {} : { secondary: $$props.secondary };
    {
      if (previousDisabled !== $$restProps.disabled) {
        getElement().blur();
        previousDisabled = $$restProps.disabled;
      }
    }
    $$rendered = `${(0, import_index_1d801ba1.v)(component || import_index_1d801ba1.m, "svelte:component").$$render($$result, Object_1$1.assign({
      use: [
        [
          Ripple,
          {
            ripple,
            unbounded: false,
            color,
            disabled: !!$$restProps.disabled,
            addClass,
            removeClass,
            addStyle
          }
        ],
        forwardEvents,
        ...use
      ]
    }, {
      class: classMap(__spreadValues({
        [className]: true,
        "mdc-button": true,
        "mdc-button--raised": variant === "raised",
        "mdc-button--unelevated": variant === "unelevated",
        "mdc-button--outlined": variant === "outlined",
        "smui-button--color-secondary": color === "secondary",
        "mdc-button--touch": touch,
        "mdc-card__action": context === "card:action",
        "mdc-card__action--button": context === "card:action",
        "mdc-dialog__button": context === "dialog:action",
        "mdc-top-app-bar__navigation-icon": context === "top-app-bar:navigation",
        "mdc-top-app-bar__action-item": context === "top-app-bar:action",
        "mdc-snackbar__action": context === "snackbar:actions",
        "mdc-banner__secondary-action": context === "banner" && secondary,
        "mdc-banner__primary-action": context === "banner" && !secondary,
        "mdc-tooltip__action": context === "tooltip:rich-actions"
      }, internalClasses))
    }, {
      style: Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" ")
    }, actionProp, defaultProp, secondaryProp, { href }, $$restProps, { this: element }), {
      this: ($$value) => {
        element = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `<div class="${"mdc-button__ripple"}"></div>
  ${slots.default ? slots.default({}) : ``}${touch ? `<div class="${"mdc-button__touch"}"></div>` : ``}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const CommonLabel = (0, import_index_1d801ba1.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_1d801ba1.f)($$props, ["use", "class", "component", "getElement"]);
  const forwardEvents = forwardEventsBuilder((0, import_index_1d801ba1.h)());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let element;
  let { component = Span } = $$props;
  const context = (0, import_index_1d801ba1.g)("SMUI:label:context");
  const tabindex = (0, import_index_1d801ba1.g)("SMUI:label:tabindex");
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${(0, import_index_1d801ba1.v)(component || import_index_1d801ba1.m, "svelte:component").$$render($$result, Object.assign({ use: [forwardEvents, ...use] }, {
      class: classMap({
        [className]: true,
        "mdc-button__label": context === "button",
        "mdc-fab__label": context === "fab",
        "mdc-tab__text-label": context === "tab",
        "mdc-image-list__label": context === "image-list",
        "mdc-snackbar__label": context === "snackbar",
        "mdc-banner__text": context === "banner",
        "mdc-segmented-button__label": context === "segmented-button",
        "mdc-data-table__pagination-rows-per-page-label": context === "data-table:pagination",
        "mdc-data-table__header-cell-label": context === "data-table:sortable-header-cell"
      })
    }, context === "snackbar" ? { "aria-atomic": "false" } : {}, { tabindex }, $$restProps, { this: element }), {
      this: ($$value) => {
        element = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const CommonIcon = (0, import_index_1d801ba1.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_1d801ba1.f)($$props, ["use", "class", "on", "component", "getElement"]);
  const forwardEvents = forwardEventsBuilder((0, import_index_1d801ba1.h)());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { on = false } = $$props;
  let element;
  let { component = I } = $$props;
  const context = (0, import_index_1d801ba1.g)("SMUI:icon:context");
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.on === void 0 && $$bindings.on && on !== void 0)
    $$bindings.on(on);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${(0, import_index_1d801ba1.v)(component || import_index_1d801ba1.m, "svelte:component").$$render($$result, Object.assign({ use: [forwardEvents, ...use] }, {
      class: classMap({
        [className]: true,
        "mdc-button__icon": context === "button",
        "mdc-fab__icon": context === "fab",
        "mdc-icon-button__icon": context === "icon-button",
        "mdc-icon-button__icon--on": context === "icon-button" && on,
        "mdc-tab__icon": context === "tab",
        "mdc-banner__icon": context === "banner",
        "mdc-segmented-button__icon": context === "segmented-button"
      })
    }, { "aria-hidden": "true" }, component === Svg ? { focusable: "false", tabindex: "-1" } : {}, $$restProps, { this: element }), {
      this: ($$value) => {
        element = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const Label = CommonLabel;
const Icon = CommonIcon;
var GameTitle_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: "section.svelte-10patav{width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;flex-direction:column}h1.svelte-10patav{margin:0;margin-left:20px;font-size:14em;color:var(--mdc-theme-primary);width:100%}@media(max-width: 1100px){h1.svelte-10patav{font-size:8em}}@media(max-width: 600px){h1.svelte-10patav{font-size:5em}}@media(max-width: 400px){h1.svelte-10patav{font-size:4em}}",
  map: null
};
const GameTitle = (0, import_index_1d801ba1.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_store;
  $$unsubscribe_store = (0, import_index_1d801ba1.r)(store, (value) => value);
  $$result.css.add(css$7);
  $$unsubscribe_store();
  return `<section style="${"cursor: pointer;"}" class="${"svelte-10patav"}"><h1 class="${"svelte-10patav"}">Qui sera mon</h1>
	<h1 style="${"display: flex; align-items: center; justify-content: space-between;"}" class="${"svelte-10patav"}">t\xE9moin ? <span>${(0, import_index_1d801ba1.v)(Icon, "Icon").$$render($$result, {
    style: "vertical-align: middle; font-size: 1em;",
    class: "material-icons"
  }, {}, {
    default: () => {
      return `double_arrow`;
    }
  })}</span></h1>
</section>`;
});
const Card = (0, import_index_1d801ba1.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_1d801ba1.f)($$props, ["use", "class", "variant", "padded", "getElement"]);
  forwardEventsBuilder((0, import_index_1d801ba1.h)());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { variant = "raised" } = $$props;
  let { padded = false } = $$props;
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.padded === void 0 && $$bindings.padded && padded !== void 0)
    $$bindings.padded(padded);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${(0, import_index_1d801ba1.i)([
    {
      class: (0, import_index_1d801ba1.j)(classMap({
        [className]: true,
        "mdc-card": true,
        "mdc-card--outlined": variant === "outlined",
        "smui-card--padded": padded
      }))
    },
    (0, import_index_1d801ba1.k)($$restProps)
  ], {})}${(0, import_index_1d801ba1.o)("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const { Object: Object_1 } = import_index_1d801ba1.q;
const internals = {
  component: Div$1,
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
const ClassAdder = (0, import_index_1d801ba1.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_1d801ba1.f)($$props, ["use", "class", "component", "getElement"]);
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let element;
  const smuiClass = internals.class;
  const smuiClassMap = {};
  const smuiClassUnsubscribes = [];
  const contexts = internals.contexts;
  const props = internals.props;
  let { component = internals.component } = $$props;
  Object.entries(internals.classMap).forEach(([name, context]) => {
    const store2 = (0, import_index_1d801ba1.g)(context);
    if (store2 && "subscribe" in store2) {
      smuiClassUnsubscribes.push(store2.subscribe((value) => {
        smuiClassMap[name] = value;
      }));
    }
  });
  const forwardEvents = forwardEventsBuilder((0, import_index_1d801ba1.h)());
  for (let context in contexts) {
    if (contexts.hasOwnProperty(context)) {
      (0, import_index_1d801ba1.s)(context, contexts[context]);
    }
  }
  (0, import_index_1d801ba1.t)(() => {
    for (const unsubscribe of smuiClassUnsubscribes) {
      unsubscribe();
    }
  });
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${(0, import_index_1d801ba1.v)(component || import_index_1d801ba1.m, "svelte:component").$$render($$result, Object_1.assign({ use: [forwardEvents, ...use] }, {
      class: classMap(__spreadValues({
        [className]: true,
        [smuiClass]: true
      }, smuiClassMap))
    }, props, $$restProps, { this: element }), {
      this: ($$value) => {
        element = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const defaults = Object.assign({}, internals);
function classAdderBuilder(props) {
  return new Proxy(ClassAdder, {
    construct: function(target, args) {
      Object.assign(internals, defaults, props);
      return new target(...args);
    },
    get: function(target, prop) {
      Object.assign(internals, defaults, props);
      return target[prop];
    }
  });
}
var Content = classAdderBuilder({
  class: "smui-card__content",
  component: Div
});
classAdderBuilder({
  class: "mdc-card__media-content",
  component: Div
});
const Actions$1 = (0, import_index_1d801ba1.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_1d801ba1.f)($$props, ["use", "class", "fullBleed", "getElement"]);
  forwardEventsBuilder((0, import_index_1d801ba1.h)());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { fullBleed = false } = $$props;
  let element;
  (0, import_index_1d801ba1.s)("SMUI:button:context", "card:action");
  (0, import_index_1d801ba1.s)("SMUI:icon-button:context", "card:action");
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.fullBleed === void 0 && $$bindings.fullBleed && fullBleed !== void 0)
    $$bindings.fullBleed(fullBleed);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${(0, import_index_1d801ba1.i)([
    {
      class: (0, import_index_1d801ba1.j)(classMap({
        [className]: true,
        "mdc-card__actions": true,
        "mdc-card__actions--full-bleed": fullBleed
      }))
    },
    (0, import_index_1d801ba1.k)($$restProps)
  ], {})}${(0, import_index_1d801ba1.o)("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});
classAdderBuilder({
  class: "mdc-card__action-buttons",
  component: Div
});
classAdderBuilder({
  class: "mdc-card__action-icons",
  component: Div
});
const Actions = Actions$1;
var Countdown_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "p.svelte-12v48r7{color:var(--mdc-theme-primary);background-color:white;font-size:50px;font-weight:bold;margin:0;margin-bottom:20px;padding:10px 20px;border:5px solid var(--mdc-theme-primary);border-radius:10px}",
  map: null
};
const Countdown = (0, import_index_1d801ba1.c)(($$result, $$props, $$bindings, slots) => {
  let { countdown = 0 } = $$props;
  const dispatch = (0, import_index_1d801ba1.u)();
  let timer = null;
  (0, import_index_1d801ba1.t)(() => {
    if (timer) {
      clearInterval(timer);
    }
  });
  if ($$props.countdown === void 0 && $$bindings.countdown && countdown !== void 0)
    $$bindings.countdown(countdown);
  $$result.css.add(css$6);
  {
    {
      if (countdown === 0) {
        clearInterval(timer);
        timer = null;
        dispatch("completed");
      }
    }
  }
  return `<p class="${"svelte-12v48r7"}">${(0, import_index_1d801ba1.e)(countdown)}
</p>`;
});
var Question_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "section.svelte-f6papb.svelte-f6papb{position:absolute;width:100%;height:100%;z-index:999;display:flex;flex-direction:column;align-items:center;justify-content:center}section.svelte-f6papb>div.svelte-f6papb{padding:10px}h1.svelte-f6papb.svelte-f6papb{margin:0;font-size:3em;color:var(--mdc-theme-primary)}p.svelte-f6papb.svelte-f6papb{font-size:20px;color:var(--mdc-theme-primary)}",
  map: null
};
const Question = (0, import_index_1d801ba1.c)(($$result, $$props, $$bindings, slots) => {
  let getBackgroundColor;
  let getColor;
  let $store, $$unsubscribe_store;
  $$unsubscribe_store = (0, import_index_1d801ba1.r)(store, (value) => $store = value);
  $$result.css.add(css$5);
  getBackgroundColor = (response) => {
    if ($store.isCounterDone) {
      return `background-color: ${response.isCorrect ? "var(--mdc-theme-success)" : "var(--mdc-theme-error)"}; color: white;`;
    }
  };
  getColor = () => {
    if ($store.isCounterDone) {
      return `color: white;`;
    }
  };
  $$unsubscribe_store();
  return `<section class="${"svelte-f6papb"}">${$store.isCounterLaunched && !$store.isCounterDone && !$store.user ? `<div class="${"svelte-f6papb"}">${(0, import_index_1d801ba1.v)(Countdown, "Countdown").$$render($$result, { countdown: 30 }, {}, {})}</div>` : ``}
	${(0, import_index_1d801ba1.v)(Card, "Card").$$render($$result, { style: "width: 90%;" }, {}, {
    default: () => {
      return `${(0, import_index_1d801ba1.v)(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h1 class="${"svelte-f6papb"}">Question
				${!$store.user ? `${(0, import_index_1d801ba1.v)(Icon, "Icon").$$render($$result, {
            style: "cursor: pointer; float: right; font-weight: bold;",
            class: "material-icons"
          }, {}, {
            default: () => {
              return `close`;
            }
          })}` : ``}</h1>`;
        }
      })}
		${(0, import_index_1d801ba1.v)(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          var _a;
          return `<p class="${"svelte-f6papb"}">${(0, import_index_1d801ba1.e)(((_a = $store == null ? void 0 : $store.question) == null ? void 0 : _a.label) || "En attente d'une question ...")}</p>`;
        }
      })}
		${!!$store.question ? `${!$store.isCounterLaunched && $store.question && !$store.user && $store.question.responses.length ? `${(0, import_index_1d801ba1.v)(Actions, "Actions").$$render($$result, { fullBleed: true }, {}, {
        default: () => {
          return `${(0, import_index_1d801ba1.v)(Button_1, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `${(0, import_index_1d801ba1.v)(Label, "Label").$$render($$result, {}, {}, {
                default: () => {
                  return `Voir les propositions de r\xE9ponses`;
                }
              })}
						<i class="${"material-icons"}" aria-hidden="${"true"}">arrow_forward</i>`;
            }
          })}`;
        }
      })}` : `${$store.isCounterLaunched || !!$store.user ? `<div class="${"svelte-f6papb"}">${(0, import_index_1d801ba1.w)($store.question.responses, (response, index) => {
        return `${(0, import_index_1d801ba1.v)(Actions, "Actions").$$render($$result, {
          fullBleed: true,
          style: getBackgroundColor(response)
        }, {}, {
          default: () => {
            return `${(0, import_index_1d801ba1.v)(Button_1, "Button").$$render($$result, { disabled: $store.isCounterDone }, {}, {
              default: () => {
                return `${(0, import_index_1d801ba1.v)(Label, "Label").$$render($$result, { style: getColor() }, {}, {
                  default: () => {
                    return `${(0, import_index_1d801ba1.e)(index)}. ${(0, import_index_1d801ba1.e)(response.label)}`;
                  }
                })}
								<i${(0, import_index_1d801ba1.o)("style", getColor(), 0)} class="${"material-icons"}" aria-hidden="${"true"}">arrow_forward</i>
							`;
              }
            })}
						`;
          }
        })}`;
      })}</div>` : ``}`}` : ``}`;
    }
  })}
</section>`;
});
var Scores_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "section.svelte-f1xu38{position:absolute;background-color:rgba(50, 50, 50, 0.5);width:100%;height:100%;z-index:999;display:flex;align-items:center;justify-content:center}h1.svelte-f1xu38{margin:0;font-size:4em;color:var(--mdc-theme-primary)}p.svelte-f1xu38{font-size:1.5em;margin:0;display:flex;justify-content:space-between;color:var(--mdc-theme-primary)}.username.svelte-f1xu38{padding-right:50px}",
  map: null
};
const Scores = (0, import_index_1d801ba1.c)(($$result, $$props, $$bindings, slots) => {
  let usersSortedByScore;
  let $store, $$unsubscribe_store;
  $$unsubscribe_store = (0, import_index_1d801ba1.r)(store, (value) => $store = value);
  $$result.css.add(css$4);
  usersSortedByScore = $store.users.sort((userA, userB) => userB.score - userA.score);
  $$unsubscribe_store();
  return `<section class="${"svelte-f1xu38"}"><div>${(0, import_index_1d801ba1.v)(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${(0, import_index_1d801ba1.v)(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h1 class="${"svelte-f1xu38"}">${(0, import_index_1d801ba1.v)(Label, "Label").$$render($$result, {}, {}, {
            default: () => {
              return `Tableau des scores`;
            }
          })}</h1>`;
        }
      })}
			${(0, import_index_1d801ba1.w)(usersSortedByScore, (user, i) => {
        return `${(0, import_index_1d801ba1.v)(Content, "Content").$$render($$result, {
          style: "padding-top: 0; padding-bottom: 0;"
        }, {}, {
          default: () => {
            return `<p style="${"font-size: " + (0, import_index_1d801ba1.e)(30 - 2 * i) + "px; font-weight: " + (0, import_index_1d801ba1.e)(800 - 150 * i) + ";"}" class="${"svelte-f1xu38"}"><span class="${"username svelte-f1xu38"}">${(0, import_index_1d801ba1.e)(i + 1)}. ${(0, import_index_1d801ba1.e)(user.name)}</span>
						${(0, import_index_1d801ba1.e)(user.score)} pts
					</p>`;
          }
        })}`;
      })}
			${(0, import_index_1d801ba1.v)(Actions, "Actions").$$render($$result, {
        fullBleed: true,
        style: "margin: 20px 10px 5px 10px;"
      }, {}, {
        default: () => {
          return `${(0, import_index_1d801ba1.v)(Button_1, "Button").$$render($$result, { variant: "unelevated" }, {}, {
            default: () => {
              return `${(0, import_index_1d801ba1.v)(Label, "Label").$$render($$result, {}, {}, {
                default: () => {
                  return `Fermer le tableau des scores`;
                }
              })}
					<i class="${"material-icons"}" aria-hidden="${"true"}">close</i>`;
            }
          })}`;
        }
      })}`;
    }
  })}</div>
</section>`;
});
var Wheel_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".score-container.svelte-65osd9.svelte-65osd9{top:10px;left:10px;position:absolute;color:var(--mdc-theme-primary);background-color:rgba(255, 255, 255, 0.4);border-radius:6px;padding:5px 3px}.score-container.svelte-65osd9 p.svelte-65osd9{display:flex;justify-content:space-between;margin:5px}.username.svelte-65osd9.svelte-65osd9{width:100px;padding-right:20px}.svelte-65osd9.svelte-65osd9{box-sizing:border-box}.container.svelte-65osd9.svelte-65osd9{width:500px;height:500px;background-color:white;border-radius:50%;border:15px solid white;position:relative;overflow:hidden;transition:5s;box-shadow:rgba(0, 0, 0, 0.35) 0px 5px 15px}.container.svelte-65osd9 div.svelte-65osd9{height:50%;width:200px;position:absolute;clip-path:polygon(100% 0, 50% 100%, 0 0);transform:translateX(-50%);transform-origin:bottom;text-align:center;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:bold;font-family:sans-serif;color:#fff;left:135px}.container.svelte-65osd9 .one.svelte-65osd9{background-color:var(--mdc-theme-primary);left:50%}.container.svelte-65osd9 .two.svelte-65osd9{background-color:var(--mdc-theme-secondary);transform:rotate(45deg)}.container.svelte-65osd9 .three.svelte-65osd9{background-color:var(--mdc-theme-primary);transform:rotate(90deg)}.container.svelte-65osd9 .four.svelte-65osd9{background-color:var(--mdc-theme-secondary);transform:rotate(135deg)}.container.svelte-65osd9 .five.svelte-65osd9{background-color:var(--mdc-theme-primary);transform:rotate(180deg)}.container.svelte-65osd9 .six.svelte-65osd9{background-color:var(--mdc-theme-secondary);transform:rotate(225deg)}.container.svelte-65osd9 .seven.svelte-65osd9{background-color:var(--mdc-theme-primary);transform:rotate(270deg)}.container.svelte-65osd9 .eight.svelte-65osd9{background-color:var(--mdc-theme-secondary);transform:rotate(315deg)}#spin.svelte-65osd9.svelte-65osd9{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);z-index:10;background-color:white;text-transform:uppercase;border:8px solid #fff;font-weight:bold;font-size:20px;color:var(--mdc-theme-primary);width:80px;height:80px;font-family:sans-serif;border-radius:50%;cursor:pointer;outline:none;letter-spacing:1px}#spin.svelte-65osd9.svelte-65osd9:hover{width:90px;height:90px;font-size:24px}",
  map: null
};
const Wheel = (0, import_index_1d801ba1.c)(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store;
  $$unsubscribe_store = (0, import_index_1d801ba1.r)(store, (value) => $store = value);
  $$result.css.add(css$3);
  $$unsubscribe_store();
  return `<section class="${"svelte-65osd9"}"><div class="${"score-container svelte-65osd9"}"><h1 style="${"display: flex; justify-content: space-between; align-items: center; padding: 5px; margin: 0;"}" class="${"svelte-65osd9"}">${(0, import_index_1d801ba1.v)(Label, "Label").$$render($$result, {}, {}, {
    default: () => {
      return `SCORES`;
    }
  })}
			${(0, import_index_1d801ba1.v)(Button_1, "Button").$$render($$result, {
    variant: "raised",
    style: "min-width: unset;"
  }, {}, {
    default: () => {
      return `${(0, import_index_1d801ba1.v)(Icon, "Icon").$$render($$result, {
        class: "material-icons",
        style: "margin: 0;"
      }, {}, {
        default: () => {
          return `visibility`;
        }
      })}`;
    }
  })}</h1>

		${(0, import_index_1d801ba1.w)($store.users, (user) => {
    return `<p style="${"display: flex; align-items: center;"}" class="${"svelte-65osd9"}"><span class="${"username svelte-65osd9"}">${(0, import_index_1d801ba1.e)(user.name)}</span>
				<span style="${"width: 60px;"}" class="${"svelte-65osd9"}">${(0, import_index_1d801ba1.e)(user.score)} pts </span>
				${(0, import_index_1d801ba1.v)(Button_1, "Button").$$render($$result, {
      variant: "raised",
      style: "margin-right: 5px; min-width: unset;"
    }, {}, {
      default: () => {
        return `${(0, import_index_1d801ba1.v)(Icon, "Icon").$$render($$result, {
          class: "material-icons",
          style: "margin: 0;"
        }, {}, {
          default: () => {
            return `add`;
          }
        })}
				`;
      }
    })}
				${(0, import_index_1d801ba1.v)(Button_1, "Button").$$render($$result, {
      variant: "raised",
      style: "min-width: unset;"
    }, {}, {
      default: () => {
        return `${(0, import_index_1d801ba1.v)(Icon, "Icon").$$render($$result, {
          class: "material-icons",
          style: "margin: 0;"
        }, {}, {
          default: () => {
            return `remove`;
          }
        })}
				`;
      }
    })}
			</p>`;
  })}</div>

	<button id="${"spin"}" class="${"svelte-65osd9"}">Spin</button>
	${(0, import_index_1d801ba1.v)(Icon, "Icon").$$render($$result, {
    class: "material-icons arrow",
    style: "margin: 0; color: rgba(0,0,0,.6); position: absolute; top: 97px; left: calc(50% - 42px); font-size: 84px; z-index: 98; filter: blur(1.5px); transform: rotate(90deg);"
  }, {}, {
    default: () => {
      return `play_arrow`;
    }
  })}

	${(0, import_index_1d801ba1.v)(Icon, "Icon").$$render($$result, {
    class: "material-icons arrow",
    style: "margin: 0; color: var(--mdc-theme-error); position: absolute;top: 95px; left: calc(50% - 40px); font-size: 80px; z-index: 99; transform: rotate(90deg);"
  }, {}, {
    default: () => {
      return `play_arrow`;
    }
  })}
	<div class="${"container svelte-65osd9"}"><div class="${"one svelte-65osd9"}"><span class="${"svelte-65osd9"}"><br class="${"svelte-65osd9"}">Question<br class="${"svelte-65osd9"}">sur<br class="${"svelte-65osd9"}">Maxime<br class="${"svelte-65osd9"}"><br class="${"svelte-65osd9"}"><br class="${"svelte-65osd9"}"><br class="${"svelte-65osd9"}"></span></div>
		<div class="${"two svelte-65osd9"}"><span class="${"svelte-65osd9"}">Question<br class="${"svelte-65osd9"}">sur<br class="${"svelte-65osd9"}">notre<br class="${"svelte-65osd9"}">couple<br class="${"svelte-65osd9"}"><br class="${"svelte-65osd9"}"><br class="${"svelte-65osd9"}"><br class="${"svelte-65osd9"}"></span></div>
		<div class="${"three svelte-65osd9"}"><span class="${"svelte-65osd9"}"><br class="${"svelte-65osd9"}">Elle<br class="${"svelte-65osd9"}">ou<br class="${"svelte-65osd9"}">lui<br class="${"svelte-65osd9"}"><br class="${"svelte-65osd9"}"><br class="${"svelte-65osd9"}"><br class="${"svelte-65osd9"}"></span></div>
		<div class="${"four svelte-65osd9"}"><span class="${"svelte-65osd9"}"><br class="${"svelte-65osd9"}"><br class="${"svelte-65osd9"}">Mise en<br class="${"svelte-65osd9"}">situation<br class="${"svelte-65osd9"}"><br class="${"svelte-65osd9"}"><br class="${"svelte-65osd9"}"><br class="${"svelte-65osd9"}"></span></div>
		<div class="${"five svelte-65osd9"}"><span class="${"svelte-65osd9"}"><br class="${"svelte-65osd9"}">Question<br class="${"svelte-65osd9"}">sur<br class="${"svelte-65osd9"}">Maxime<br class="${"svelte-65osd9"}"><br class="${"svelte-65osd9"}"><br class="${"svelte-65osd9"}"><br class="${"svelte-65osd9"}"></span></div>
		<div class="${"six svelte-65osd9"}"><span class="${"svelte-65osd9"}">Question<br class="${"svelte-65osd9"}">sur<br class="${"svelte-65osd9"}">notre<br class="${"svelte-65osd9"}">couple<br class="${"svelte-65osd9"}"><br class="${"svelte-65osd9"}"><br class="${"svelte-65osd9"}"><br class="${"svelte-65osd9"}"></span></div>
		<div class="${"seven svelte-65osd9"}"><span class="${"svelte-65osd9"}"><br class="${"svelte-65osd9"}">Elle<br class="${"svelte-65osd9"}">ou<br class="${"svelte-65osd9"}">lui<br class="${"svelte-65osd9"}"><br class="${"svelte-65osd9"}"><br class="${"svelte-65osd9"}"><br class="${"svelte-65osd9"}"></span></div>
		<div class="${"eight svelte-65osd9"}"><span class="${"svelte-65osd9"}"><br class="${"svelte-65osd9"}"><br class="${"svelte-65osd9"}"><br class="${"svelte-65osd9"}">Duel<br class="${"svelte-65osd9"}"><br class="${"svelte-65osd9"}"><br class="${"svelte-65osd9"}"><br class="${"svelte-65osd9"}"></span></div></div>
</section>`;
});
const Checkbox = (0, import_index_1d801ba1.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_1d801ba1.f)($$props, [
    "use",
    "class",
    "style",
    "disabled",
    "touch",
    "indeterminate",
    "group",
    "checked",
    "value",
    "valueKey",
    "input$use",
    "input$class",
    "getId",
    "getElement"
  ]);
  var _a;
  forwardEventsBuilder((0, import_index_1d801ba1.h)());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value2) {
    return value2 === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { disabled = false } = $$props;
  let { touch = false } = $$props;
  let { indeterminate = uninitializedValue } = $$props;
  let { group = uninitializedValue } = $$props;
  let { checked = uninitializedValue } = $$props;
  let { value = null } = $$props;
  let { valueKey = uninitializedValue } = $$props;
  let { input$use = [] } = $$props;
  let { input$class = "" } = $$props;
  let element;
  let instance;
  let checkbox;
  let internalClasses = {};
  let internalStyles = {};
  let nativeControlAttrs = {};
  let inputProps = (_a = (0, import_index_1d801ba1.g)("SMUI:generic:input:props")) !== null && _a !== void 0 ? _a : {};
  let nativeChecked = isUninitializedValue(group) ? isUninitializedValue(checked) ? false : checked !== null && checked !== void 0 ? checked : void 0 : group.indexOf(value) !== -1;
  let context = (0, import_index_1d801ba1.g)("SMUI:checkbox:context");
  let dataTableHeader = (0, import_index_1d801ba1.g)("SMUI:data-table:row:header");
  let previousChecked = checked;
  let previousGroup = isUninitializedValue(group) ? [] : [...group];
  let previousNativeChecked = nativeChecked;
  function getId() {
    return inputProps && inputProps.id;
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.touch === void 0 && $$bindings.touch && touch !== void 0)
    $$bindings.touch(touch);
  if ($$props.indeterminate === void 0 && $$bindings.indeterminate && indeterminate !== void 0)
    $$bindings.indeterminate(indeterminate);
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.valueKey === void 0 && $$bindings.valueKey && valueKey !== void 0)
    $$bindings.valueKey(valueKey);
  if ($$props.input$use === void 0 && $$bindings.input$use && input$use !== void 0)
    $$bindings.input$use(input$use);
  if ($$props.input$class === void 0 && $$bindings.input$class && input$class !== void 0)
    $$bindings.input$class(input$class);
  if ($$props.getId === void 0 && $$bindings.getId && getId !== void 0)
    $$bindings.getId(getId);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  {
    {
      let callHandleChange = false;
      if (!isUninitializedValue(group)) {
        if (previousNativeChecked !== nativeChecked) {
          const idx = group.indexOf(value);
          if (nativeChecked && idx === -1) {
            group.push(value);
            group = group;
          } else if (!nativeChecked && idx !== -1) {
            group.splice(idx, 1);
            group = group;
          }
          callHandleChange = true;
        } else {
          const idxPrev = previousGroup.indexOf(value);
          const idx = group.indexOf(value);
          if (idxPrev > -1 && idx === -1) {
            nativeChecked = false;
            callHandleChange = true;
          } else if (idx > -1 && idxPrev === -1) {
            nativeChecked = true;
            callHandleChange = true;
          }
        }
      }
      if (isUninitializedValue(checked)) {
        if (!!previousNativeChecked !== !!nativeChecked) {
          callHandleChange = true;
        }
      } else if (checked !== (nativeChecked !== null && nativeChecked !== void 0 ? nativeChecked : null)) {
        if (checked === previousChecked) {
          checked = nativeChecked !== null && nativeChecked !== void 0 ? nativeChecked : null;
          if (!isUninitializedValue(indeterminate)) {
            indeterminate = false;
          }
        } else {
          nativeChecked = checked !== null && checked !== void 0 ? checked : void 0;
        }
        callHandleChange = true;
      }
      previousChecked = checked;
      previousGroup = isUninitializedValue(group) ? [] : [...group];
      previousNativeChecked = nativeChecked;
      if (callHandleChange && instance) {
        instance.handleChange();
      }
    }
  }
  return `<div${(0, import_index_1d801ba1.i)([
    {
      class: (0, import_index_1d801ba1.j)(classMap(__spreadValues({
        [className]: true,
        "mdc-checkbox": true,
        "mdc-checkbox--disabled": disabled,
        "mdc-checkbox--touch": touch,
        "mdc-data-table__header-row-checkbox": context === "data-table" && dataTableHeader,
        "mdc-data-table__row-checkbox": context === "data-table" && !dataTableHeader
      }, internalClasses)))
    },
    {
      style: (0, import_index_1d801ba1.j)(Object.entries(internalStyles).map(([name, value2]) => `${name}: ${value2};`).concat([style]).join(" "))
    },
    (0, import_index_1d801ba1.k)(exclude($$restProps, ["input$"]))
  ], {})}${(0, import_index_1d801ba1.o)("this", element, 0)}><input${(0, import_index_1d801ba1.i)([
    {
      class: (0, import_index_1d801ba1.j)(classMap({
        [input$class]: true,
        "mdc-checkbox__native-control": true
      }))
    },
    { type: "checkbox" },
    (0, import_index_1d801ba1.k)(inputProps),
    { disabled: disabled || null },
    {
      value: (0, import_index_1d801ba1.j)(isUninitializedValue(valueKey) ? value : valueKey)
    },
    {
      "data-indeterminate": (0, import_index_1d801ba1.j)(!isUninitializedValue(indeterminate) && indeterminate ? "true" : void 0)
    },
    (0, import_index_1d801ba1.k)(nativeControlAttrs),
    (0, import_index_1d801ba1.k)(prefixFilter($$restProps, "input$"))
  ], {})}${(0, import_index_1d801ba1.o)("this", checkbox, 0)}${(0, import_index_1d801ba1.o)("checked", nativeChecked, 1)}>
  <div class="${"mdc-checkbox__background"}"><svg class="${"mdc-checkbox__checkmark"}" viewBox="${"0 0 24 24"}"><path class="${"mdc-checkbox__checkmark-path"}" fill="${"none"}" d="${"M1.73,12.91 8.1,19.28 22.79,4.59"}"></path></svg>
    <div class="${"mdc-checkbox__mixedmark"}"></div></div>
  <div class="${"mdc-checkbox__ripple"}"></div>
</div>`;
});
let counter = 0;
const FormField = (0, import_index_1d801ba1.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_1d801ba1.f)($$props, ["use", "class", "align", "noWrap", "inputId", "label$use", "getElement"]);
  forwardEventsBuilder((0, import_index_1d801ba1.h)());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { align = "start" } = $$props;
  let { noWrap = false } = $$props;
  let { inputId = "SMUI-form-field-" + counter++ } = $$props;
  let { label$use = [] } = $$props;
  let element;
  let label;
  (0, import_index_1d801ba1.s)("SMUI:generic:input:props", { id: inputId });
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.noWrap === void 0 && $$bindings.noWrap && noWrap !== void 0)
    $$bindings.noWrap(noWrap);
  if ($$props.inputId === void 0 && $$bindings.inputId && inputId !== void 0)
    $$bindings.inputId(inputId);
  if ($$props.label$use === void 0 && $$bindings.label$use && label$use !== void 0)
    $$bindings.label$use(label$use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${(0, import_index_1d801ba1.i)([
    {
      class: (0, import_index_1d801ba1.j)(classMap({
        [className]: true,
        "mdc-form-field": true,
        "mdc-form-field--align-end": align === "end",
        "mdc-form-field--nowrap": noWrap
      }))
    },
    (0, import_index_1d801ba1.k)(exclude($$restProps, ["label$"]))
  ], {})}${(0, import_index_1d801ba1.o)("this", element, 0)}>${slots.default ? slots.default({}) : ``}
  <label${(0, import_index_1d801ba1.i)([
    { for: (0, import_index_1d801ba1.j)(inputId) },
    (0, import_index_1d801ba1.k)(prefixFilter($$restProps, "label$"))
  ], {})}${(0, import_index_1d801ba1.o)("this", label, 0)}>${slots.label ? slots.label({}) : ``}</label>
</div>`;
});
var Agreement_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "section.svelte-1o6gyuy{position:absolute;width:100%;height:100%;z-index:999;display:flex;align-items:center;justify-content:center}h1.svelte-1o6gyuy{margin:0;font-size:3em;color:var(--mdc-theme-primary)}p.svelte-1o6gyuy{font-size:14px;margin:0;display:flex;justify-content:space-between;color:var(--mdc-theme-primary);margin-bottom:5px;margin-left:13px}.no-margin.svelte-1o6gyuy{margin-left:0}",
  map: null
};
const Agreement = (0, import_index_1d801ba1.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_store;
  $$unsubscribe_store = (0, import_index_1d801ba1.r)(store, (value) => value);
  let checked = false;
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<section class="${"svelte-1o6gyuy"}">${(0, import_index_1d801ba1.v)(Card, "Card").$$render($$result, { style: "width: 90%;" }, {}, {
      default: () => {
        return `${(0, import_index_1d801ba1.v)(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h1 class="${"svelte-1o6gyuy"}">${(0, import_index_1d801ba1.v)(Label, "Label").$$render($$result, {}, {}, {
              default: () => {
                return `Droits et devoir du t\xE9moin`;
              }
            })}</h1>`;
          }
        })}
		${(0, import_index_1d801ba1.v)(Content, "Content").$$render($$result, {
          style: "padding-top: 0; padding-bottom: 0;"
        }, {}, {
          default: () => {
            return `<p class="${"no-margin svelte-1o6gyuy"}">En tant que t\xE9moin, je m&#39;engage \xE0 :</p>
			<br>
			<p class="${"svelte-1o6gyuy"}">- Signer un papier \xE0 la mairie qui atteste de notre mariage.</p>
			<p class="${"svelte-1o6gyuy"}">- Me voir confier la garde des alliances.</p>
			<p class="${"svelte-1o6gyuy"}">- Aider \xE0 l&#39;organisation du mariage :</p>
			<p style="${"margin-left: 20px;"}" class="${"svelte-1o6gyuy"}">- Faire de la Cricut\xAE avec Chlo\xE9.</p>
			<p style="${"margin-left: 20px;"}" class="${"svelte-1o6gyuy"}">- G\xE9rer les invit\xE9s.</p>
			<p style="${"margin-left: 20px;"}" class="${"svelte-1o6gyuy"}">- G\xE9rer les prestataires.</p>
			<p style="${"margin-left: 20px;"}" class="${"svelte-1o6gyuy"}">- Intervenir le jour J pour \xE9viter tout probl\xE8me.</p>
			<p class="${"svelte-1o6gyuy"}">- Aider le mari\xE9 dans le choix de son costume et dans le choix de la tenue des t\xE9moins.</p>
			<p class="${"svelte-1o6gyuy"}">- Conduire la voiture des mari\xE9 le jour J.</p>
			<p class="${"svelte-1o6gyuy"}">- Organiser un enterement de vie de gar\xE7on pleine de d\xE9cadences et d&#39;humiliations.</p>
			<p class="${"svelte-1o6gyuy"}">- Organiser un event le jour J.</p>
			<p class="${"svelte-1o6gyuy"}">- Faire un discours le jour J sur comment nous sommes un couple incroyable.</p>
			<p class="${"svelte-1o6gyuy"}">- M&#39;empecher de m&#39;enfuir.</p>
			<p class="${"svelte-1o6gyuy"}">- Nous conseiller sur les sons \xE0 valider avec le DJ.</p>
			<p class="${"svelte-1o6gyuy"}">- A ne draguer personne de nos familles.</p>`;
          }
        })}
		${(0, import_index_1d801ba1.v)(Actions, "Actions").$$render($$result, {
          fullBleed: true,
          style: "margin: 10px; display:flex; flex-direction: column; align-items: flex-start;"
        }, {}, {
          default: () => {
            return `${(0, import_index_1d801ba1.v)(FormField, "FormField").$$render($$result, { style: "margin-left: -13px;" }, {}, {
              label: () => {
                return `<span slot="${"label"}" style="${"color: var(--mdc-theme-primary);"}">J&#39;accepte cet engagement.</span>`;
              },
              default: () => {
                return `${(0, import_index_1d801ba1.v)(Checkbox, "Checkbox").$$render($$result, { touch: true, checked }, {
                  checked: ($$value) => {
                    checked = $$value;
                    $$settled = false;
                  }
                }, {})}`;
              }
            })}
			${(0, import_index_1d801ba1.v)(Button_1, "Button").$$render($$result, {
              variant: "unelevated",
              disabled: !checked
            }, {}, {
              default: () => {
                return `${(0, import_index_1d801ba1.v)(Label, "Label").$$render($$result, {}, {}, {
                  default: () => {
                    return `Validation`;
                  }
                })}
				<i class="${"material-icons"}" aria-hidden="${"true"}">done</i>`;
              }
            })}`;
          }
        })}`;
      }
    })}
</section>`;
  } while (!$$settled);
  $$unsubscribe_store();
  return $$rendered;
});
var WhoAreYou_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "section.svelte-it2i15{position:absolute;width:100%;height:100%;z-index:999;display:flex;align-items:center;justify-content:center}h1.svelte-it2i15{margin:0;font-size:3em;color:var(--mdc-theme-primary)}",
  map: null
};
const WhoAreYou = (0, import_index_1d801ba1.c)(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store;
  $$unsubscribe_store = (0, import_index_1d801ba1.r)(store, (value) => $store = value);
  $$result.css.add(css$1);
  $$unsubscribe_store();
  return `<section class="${"svelte-it2i15"}">${(0, import_index_1d801ba1.v)(Card, "Card").$$render($$result, { style: "width: 90%;" }, {}, {
    default: () => {
      return `${(0, import_index_1d801ba1.v)(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h1 class="${"svelte-it2i15"}">T&#39;es qui au fait ?</h1>`;
        }
      })}
		${(0, import_index_1d801ba1.w)($store.users, (user) => {
        return `${(0, import_index_1d801ba1.v)(Actions, "Actions").$$render($$result, { fullBleed: true }, {}, {
          default: () => {
            return `${(0, import_index_1d801ba1.v)(Button_1, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `${(0, import_index_1d801ba1.v)(Label, "Label").$$render($$result, {}, {}, {
                  default: () => {
                    return `${(0, import_index_1d801ba1.e)(user.name)}`;
                  }
                })}
					<i class="${"material-icons"}" aria-hidden="${"true"}">double_arrow</i>
				`;
              }
            })}
			`;
          }
        })}`;
      })}
		${(0, import_index_1d801ba1.v)(Actions, "Actions").$$render($$result, { fullBleed: true }, {}, {
        default: () => {
          return `${(0, import_index_1d801ba1.v)(Button_1, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `${(0, import_index_1d801ba1.v)(Label, "Label").$$render($$result, {}, {}, {
                default: () => {
                  return `Le mari\xE9`;
                }
              })}
				<i class="${"material-icons"}" aria-hidden="${"true"}">double_arrow</i>`;
            }
          })}`;
        }
      })}`;
    }
  })}
</section>`;
});
var game_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-18ss6oi{width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;background-color:var(--mdc-theme-secondary)}",
  map: null
};
const prerender = true;
const Game = (0, import_index_1d801ba1.c)(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store;
  $$unsubscribe_store = (0, import_index_1d801ba1.r)(store, (value) => $store = value);
  $$result.css.add(css);
  $$unsubscribe_store();
  return `${$$result.head += `${$$result.title = `<title>Witnesses Game</title>`, ""}`, ""}

<section class="${"svelte-18ss6oi"}">${$store.displayInvitation ? `${(0, import_index_1d801ba1.v)(import_Invitation_d74634b8.I, "Invitation").$$render($$result, {}, {}, {})}` : ``}
	${$store.displayGameTitle ? `${(0, import_index_1d801ba1.v)(GameTitle, "GameTitle").$$render($$result, {}, {}, {})}` : ``}
	${$store.displayWhoAreYou ? `${(0, import_index_1d801ba1.v)(WhoAreYou, "WhoAreYou").$$render($$result, {}, {}, {})}` : ``}
	${$store.displayAgreement ? `${(0, import_index_1d801ba1.v)(Agreement, "Agreement").$$render($$result, {}, {}, {})}` : ``}
	${$store.displayWheel ? `${(0, import_index_1d801ba1.v)(Wheel, "Wheel").$$render($$result, {}, {}, {})}` : ``}
	${$store.displayQuestion ? `${(0, import_index_1d801ba1.v)(Question, "Question").$$render($$result, {}, {}, {})}` : ``}
	${$store.displayScore ? `${(0, import_index_1d801ba1.v)(Scores, "Scores").$$render($$result, {}, {}, {})}` : ``}
</section>`;
});

'use strict';

var require$$0 = require('react');
require('./assets/src/components/Button/Button.css.ts.vanilla-D2hYQCRM.css');
require('./assets/src/components/CalendarPicker/CalendarPicker.css.ts.vanilla-CYxmzwph.css');

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production;

function requireReactJsxRuntime_production () {
	if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
	hasRequiredReactJsxRuntime_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
	  var key = null;
	  void 0 !== maybeKey && (key = "" + maybeKey);
	  void 0 !== config.key && (key = "" + config.key);
	  if ("key" in config) {
	    maybeKey = {};
	    for (var propName in config)
	      "key" !== propName && (maybeKey[propName] = config[propName]);
	  } else maybeKey = config;
	  config = maybeKey.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== config ? config : null,
	    props: maybeKey
	  };
	}
	reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_production.jsx = jsxProd;
	reactJsxRuntime_production.jsxs = jsxProd;
	return reactJsxRuntime_production;
}

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development () {
	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
	hasRequiredReactJsxRuntime_development = 1;
	"production" !== process.env.NODE_ENV &&
	  (function () {
	    function getComponentNameFromType(type) {
	      if (null == type) return null;
	      if ("function" === typeof type)
	        return type.$$typeof === REACT_CLIENT_REFERENCE
	          ? null
	          : type.displayName || type.name || null;
	      if ("string" === typeof type) return type;
	      switch (type) {
	        case REACT_FRAGMENT_TYPE:
	          return "Fragment";
	        case REACT_PROFILER_TYPE:
	          return "Profiler";
	        case REACT_STRICT_MODE_TYPE:
	          return "StrictMode";
	        case REACT_SUSPENSE_TYPE:
	          return "Suspense";
	        case REACT_SUSPENSE_LIST_TYPE:
	          return "SuspenseList";
	        case REACT_ACTIVITY_TYPE:
	          return "Activity";
	      }
	      if ("object" === typeof type)
	        switch (
	          ("number" === typeof type.tag &&
	            console.error(
	              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
	            ),
	          type.$$typeof)
	        ) {
	          case REACT_PORTAL_TYPE:
	            return "Portal";
	          case REACT_CONTEXT_TYPE:
	            return (type.displayName || "Context") + ".Provider";
	          case REACT_CONSUMER_TYPE:
	            return (type._context.displayName || "Context") + ".Consumer";
	          case REACT_FORWARD_REF_TYPE:
	            var innerType = type.render;
	            type = type.displayName;
	            type ||
	              ((type = innerType.displayName || innerType.name || ""),
	              (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
	            return type;
	          case REACT_MEMO_TYPE:
	            return (
	              (innerType = type.displayName || null),
	              null !== innerType
	                ? innerType
	                : getComponentNameFromType(type.type) || "Memo"
	            );
	          case REACT_LAZY_TYPE:
	            innerType = type._payload;
	            type = type._init;
	            try {
	              return getComponentNameFromType(type(innerType));
	            } catch (x) {}
	        }
	      return null;
	    }
	    function testStringCoercion(value) {
	      return "" + value;
	    }
	    function checkKeyStringCoercion(value) {
	      try {
	        testStringCoercion(value);
	        var JSCompiler_inline_result = !1;
	      } catch (e) {
	        JSCompiler_inline_result = true;
	      }
	      if (JSCompiler_inline_result) {
	        JSCompiler_inline_result = console;
	        var JSCompiler_temp_const = JSCompiler_inline_result.error;
	        var JSCompiler_inline_result$jscomp$0 =
	          ("function" === typeof Symbol &&
	            Symbol.toStringTag &&
	            value[Symbol.toStringTag]) ||
	          value.constructor.name ||
	          "Object";
	        JSCompiler_temp_const.call(
	          JSCompiler_inline_result,
	          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
	          JSCompiler_inline_result$jscomp$0
	        );
	        return testStringCoercion(value);
	      }
	    }
	    function getTaskName(type) {
	      if (type === REACT_FRAGMENT_TYPE) return "<>";
	      if (
	        "object" === typeof type &&
	        null !== type &&
	        type.$$typeof === REACT_LAZY_TYPE
	      )
	        return "<...>";
	      try {
	        var name = getComponentNameFromType(type);
	        return name ? "<" + name + ">" : "<...>";
	      } catch (x) {
	        return "<...>";
	      }
	    }
	    function getOwner() {
	      var dispatcher = ReactSharedInternals.A;
	      return null === dispatcher ? null : dispatcher.getOwner();
	    }
	    function UnknownOwner() {
	      return Error("react-stack-top-frame");
	    }
	    function hasValidKey(config) {
	      if (hasOwnProperty.call(config, "key")) {
	        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
	        if (getter && getter.isReactWarning) return false;
	      }
	      return void 0 !== config.key;
	    }
	    function defineKeyPropWarningGetter(props, displayName) {
	      function warnAboutAccessingKey() {
	        specialPropKeyWarningShown ||
	          ((specialPropKeyWarningShown = true),
	          console.error(
	            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
	            displayName
	          ));
	      }
	      warnAboutAccessingKey.isReactWarning = true;
	      Object.defineProperty(props, "key", {
	        get: warnAboutAccessingKey,
	        configurable: true
	      });
	    }
	    function elementRefGetterWithDeprecationWarning() {
	      var componentName = getComponentNameFromType(this.type);
	      didWarnAboutElementRef[componentName] ||
	        ((didWarnAboutElementRef[componentName] = true),
	        console.error(
	          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
	        ));
	      componentName = this.props.ref;
	      return void 0 !== componentName ? componentName : null;
	    }
	    function ReactElement(
	      type,
	      key,
	      self,
	      source,
	      owner,
	      props,
	      debugStack,
	      debugTask
	    ) {
	      self = props.ref;
	      type = {
	        $$typeof: REACT_ELEMENT_TYPE,
	        type: type,
	        key: key,
	        props: props,
	        _owner: owner
	      };
	      null !== (void 0 !== self ? self : null)
	        ? Object.defineProperty(type, "ref", {
	            enumerable: false,
	            get: elementRefGetterWithDeprecationWarning
	          })
	        : Object.defineProperty(type, "ref", { enumerable: false, value: null });
	      type._store = {};
	      Object.defineProperty(type._store, "validated", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: 0
	      });
	      Object.defineProperty(type, "_debugInfo", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: null
	      });
	      Object.defineProperty(type, "_debugStack", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: debugStack
	      });
	      Object.defineProperty(type, "_debugTask", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: debugTask
	      });
	      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
	      return type;
	    }
	    function jsxDEVImpl(
	      type,
	      config,
	      maybeKey,
	      isStaticChildren,
	      source,
	      self,
	      debugStack,
	      debugTask
	    ) {
	      var children = config.children;
	      if (void 0 !== children)
	        if (isStaticChildren)
	          if (isArrayImpl(children)) {
	            for (
	              isStaticChildren = 0;
	              isStaticChildren < children.length;
	              isStaticChildren++
	            )
	              validateChildKeys(children[isStaticChildren]);
	            Object.freeze && Object.freeze(children);
	          } else
	            console.error(
	              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
	            );
	        else validateChildKeys(children);
	      if (hasOwnProperty.call(config, "key")) {
	        children = getComponentNameFromType(type);
	        var keys = Object.keys(config).filter(function (k) {
	          return "key" !== k;
	        });
	        isStaticChildren =
	          0 < keys.length
	            ? "{key: someKey, " + keys.join(": ..., ") + ": ...}"
	            : "{key: someKey}";
	        didWarnAboutKeySpread[children + isStaticChildren] ||
	          ((keys =
	            0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}"),
	          console.error(
	            'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
	            isStaticChildren,
	            children,
	            keys,
	            children
	          ),
	          (didWarnAboutKeySpread[children + isStaticChildren] = true));
	      }
	      children = null;
	      void 0 !== maybeKey &&
	        (checkKeyStringCoercion(maybeKey), (children = "" + maybeKey));
	      hasValidKey(config) &&
	        (checkKeyStringCoercion(config.key), (children = "" + config.key));
	      if ("key" in config) {
	        maybeKey = {};
	        for (var propName in config)
	          "key" !== propName && (maybeKey[propName] = config[propName]);
	      } else maybeKey = config;
	      children &&
	        defineKeyPropWarningGetter(
	          maybeKey,
	          "function" === typeof type
	            ? type.displayName || type.name || "Unknown"
	            : type
	        );
	      return ReactElement(
	        type,
	        children,
	        self,
	        source,
	        getOwner(),
	        maybeKey,
	        debugStack,
	        debugTask
	      );
	    }
	    function validateChildKeys(node) {
	      "object" === typeof node &&
	        null !== node &&
	        node.$$typeof === REACT_ELEMENT_TYPE &&
	        node._store &&
	        (node._store.validated = 1);
	    }
	    var React = require$$0,
	      REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	      REACT_PORTAL_TYPE = Symbol.for("react.portal"),
	      REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
	      REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
	      REACT_PROFILER_TYPE = Symbol.for("react.profiler");
	    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
	      REACT_CONTEXT_TYPE = Symbol.for("react.context"),
	      REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
	      REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
	      REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
	      REACT_MEMO_TYPE = Symbol.for("react.memo"),
	      REACT_LAZY_TYPE = Symbol.for("react.lazy"),
	      REACT_ACTIVITY_TYPE = Symbol.for("react.activity"),
	      REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"),
	      ReactSharedInternals =
	        React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
	      hasOwnProperty = Object.prototype.hasOwnProperty,
	      isArrayImpl = Array.isArray,
	      createTask = console.createTask
	        ? console.createTask
	        : function () {
	            return null;
	          };
	    React = {
	      "react-stack-bottom-frame": function (callStackForError) {
	        return callStackForError();
	      }
	    };
	    var specialPropKeyWarningShown;
	    var didWarnAboutElementRef = {};
	    var unknownOwnerDebugStack = React["react-stack-bottom-frame"].bind(
	      React,
	      UnknownOwner
	    )();
	    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
	    var didWarnAboutKeySpread = {};
	    reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
	    reactJsxRuntime_development.jsx = function (type, config, maybeKey, source, self) {
	      var trackActualOwner =
	        1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
	      return jsxDEVImpl(
	        type,
	        config,
	        maybeKey,
	        false,
	        source,
	        self,
	        trackActualOwner
	          ? Error("react-stack-top-frame")
	          : unknownOwnerDebugStack,
	        trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
	      );
	    };
	    reactJsxRuntime_development.jsxs = function (type, config, maybeKey, source, self) {
	      var trackActualOwner =
	        1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
	      return jsxDEVImpl(
	        type,
	        config,
	        maybeKey,
	        true,
	        source,
	        self,
	        trackActualOwner
	          ? Error("react-stack-top-frame")
	          : unknownOwnerDebugStack,
	        trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
	      );
	    };
	  })();
	return reactJsxRuntime_development;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;

	if (process.env.NODE_ENV === 'production') {
	  jsxRuntime.exports = requireReactJsxRuntime_production();
	} else {
	  jsxRuntime.exports = requireReactJsxRuntime_development();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

var baseButton = 'Button_baseButton__1f9eq5p0';
var colorStyles = {primary:'Button_colorStyles_primary__1f9eq5p7',secondary:'Button_colorStyles_secondary__1f9eq5p8','default':'Button_colorStyles_default__1f9eq5p9'};
var disabledStyle = 'Button_disabledStyle__1f9eq5pa';
var sizeStyles = {small:'Button_sizeStyles_small__1f9eq5p4',medium:'Button_sizeStyles_medium__1f9eq5p5',large:'Button_sizeStyles_large__1f9eq5p6'};
var variantStyles = {contained:'Button_variantStyles_contained__1f9eq5p1',outlined:'Button_variantStyles_outlined__1f9eq5p2',text:'Button_variantStyles_text__1f9eq5p3'};

function Button(_a) {
    var children = _a.children, onClick = _a.onClick, _b = _a.variant, variant = _b === void 0 ? "contained" : _b, _c = _a.size, size = _c === void 0 ? "medium" : _c, _d = _a.color, color = _d === void 0 ? "default" : _d, _e = _a.className, className = _e === void 0 ? "" : _e, style = _a.style, _f = _a.disabled, disabled = _f === void 0 ? false : _f;
    return (jsxRuntimeExports.jsx("button", { className: "".concat(baseButton, " ").concat(variantStyles[variant], " ").concat(sizeStyles[size], " ").concat(colorStyles[color], " ").concat(disabled ? disabledStyle : "", " ").concat(className), onClick: disabled ? undefined : onClick, style: style, disabled: disabled, children: children }));
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var dayjs_min$1 = {exports: {}};

var dayjs_min = dayjs_min$1.exports;

var hasRequiredDayjs_min;

function requireDayjs_min () {
	if (hasRequiredDayjs_min) return dayjs_min$1.exports;
	hasRequiredDayjs_min = 1;
	(function (module, exports) {
		!function(t,e){module.exports=e();}(dayjs_min,(function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return "["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return +(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return {M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p="$isDayjsObject",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else {var a=e.name;D[a]=e,i=a;}return !r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,true),this.parse(t),this.$x=this.$x||t.x||{},this[p]=true;}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init();},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},m.$utils=function(){return b},m.isValid=function(){return !(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,false)},m.$set=function(t,e){var n,o=b.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d;}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case "YY":return String(e.$y).slice(-2);case "YYYY":return b.s(e.$y,4,"0");case "M":return a+1;case "MM":return b.s(a+1,2,"0");case "MMM":return h(n.monthsShort,a,c,3);case "MMMM":return h(c,a);case "D":return e.$D;case "DD":return b.s(e.$D,2,"0");case "d":return String(e.$W);case "dd":return h(n.weekdaysMin,e.$W,o,2);case "ddd":return h(n.weekdaysShort,e.$W,o,3);case "dddd":return o[e.$W];case "H":return String(s);case "HH":return b.s(s,2,"0");case "h":return d(1);case "hh":return d(2);case "a":return $(s,u,true);case "A":return $(s,u,false);case "m":return String(u);case "mm":return b.s(u,2,"0");case "s":return String(e.$s);case "ss":return b.s(e.$s,2,"0");case "SSS":return b.s(e.$ms,3,"0");case "Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g;}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,true);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])};})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=true),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O})); 
	} (dayjs_min$1));
	return dayjs_min$1.exports;
}

var dayjs_minExports = requireDayjs_min();
var dayjs = /*@__PURE__*/getDefaultExportFromCjs(dayjs_minExports);

var calTitleWrap = 'CalendarPicker_calTitleWrap__1uzbqtp3';
var calendarWrap = 'CalendarPicker_calendarWrap__1uzbqtp2';
var container = 'CalendarPicker_container__1uzbqtp0';
var dateLabel = {today:'CalendarPicker_dateLabel_today__1uzbqtpj',other:'CalendarPicker_dateLabel_other__1uzbqtpk','this':'CalendarPicker_dateLabel_this__1uzbqtpl'};
var dateWrap = {startDate:'CalendarPicker_dateWrap_startDate__1uzbqtpd',endDate:'CalendarPicker_dateWrap_endDate__1uzbqtpe',betweenDate:'CalendarPicker_dateWrap_betweenDate__1uzbqtpf',today:'CalendarPicker_dateWrap_today__1uzbqtpg',other:'CalendarPicker_dateWrap_other__1uzbqtph'};
var datesWrap = 'CalendarPicker_datesWrap__1uzbqtpc';
var dayLabelBase = 'CalendarPicker_dayLabelBase__1uzbqtp9';
var dayLabelVariants = {sunday:'CalendarPicker_dayLabelVariants_sunday__1uzbqtpa',saturday:'CalendarPicker_dayLabelVariants_saturday__1uzbqtpb'};
var dayWrap = 'CalendarPicker_dayWrap__1uzbqtp8';
var daysWrap = 'CalendarPicker_daysWrap__1uzbqtp7';
var modalWrap = 'CalendarPicker_modalWrap__1uzbqtp1';
var monthWrap = 'CalendarPicker_monthWrap__1uzbqtpn';
var navBtn = 'CalendarPicker_navBtn__1uzbqtp6';
var pastWrap = 'CalendarPicker_pastWrap__1uzbqtpi';
var pickWrap = 'CalendarPicker_pickWrap__1uzbqtpm';
var yearMonth = 'CalendarPicker_yearMonth__1uzbqtp5';
var yearWrap = 'CalendarPicker_yearWrap__1uzbqtp4';

var RightIcon = function () { return (jsxRuntimeExports.jsx("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntimeExports.jsx("path", { d: "M9 5L14.15 10C14.4237 10.2563 14.6419 10.5659 14.791 10.9099C14.9402 11.2539 15.0171 11.625 15.0171 12C15.0171 12.375 14.9402 12.7458 14.791 13.0898C14.6419 13.4339 14.4237 13.7437 14.15 14L9 19", stroke: "#000000", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })); };
var LeftIcon = function () { return (jsxRuntimeExports.jsx("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntimeExports.jsx("path", { d: "M14.9991 19L9.83911 14C9.56672 13.7429 9.34974 13.433 9.20142 13.0891C9.0531 12.7452 8.97656 12.3745 8.97656 12C8.97656 11.6255 9.0531 11.2548 9.20142 10.9109C9.34974 10.567 9.56672 10.2571 9.83911 10L14.9991 5", stroke: "#000000", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })); };
function CalendarPicker(_a) {
    var startDate = _a.startDate, endDate = _a.endDate, onDateValueChange = _a.onDateValueChange, _b = _a.lang, lang = _b === void 0 ? "en" : _b, _c = _a.maxMonth, maxMonth = _c === void 0 ? 3 : _c;
    var _d = require$$0.useState(dayjs()), date = _d[0], setDate = _d[1];
    var _e = require$$0.useState({
        startDate: startDate || dayjs().format("YYYY-MM-DD"),
        endDate: endDate || dayjs().add(1, "day").format("YYYY-MM-DD"),
    }), dateValue = _e[0], setDateValue = _e[1];
    var selectDate = function (selectedDate) {
        var isBothDatesSet = dateValue.startDate !== "" && dateValue.endDate !== "";
        if (isBothDatesSet) {
            var newDateValue = { startDate: selectedDate, endDate: "" };
            setDateValue(newDateValue);
        }
        else {
            var isAfterStartDate = dayjs(selectedDate).isAfter(dateValue.startDate, "day");
            var dateDiff = dayjs(selectedDate).diff(dayjs(dateValue.startDate), "day");
            if (isAfterStartDate && dateDiff <= 8) {
                var newDateValue = __assign(__assign({}, dateValue), { endDate: selectedDate });
                setDateValue(newDateValue);
                if (newDateValue.endDate) {
                    onDateValueChange(newDateValue);
                }
            }
            else if (!isAfterStartDate) {
                var newDateValue = __assign(__assign({}, dateValue), { startDate: selectedDate });
                setDateValue(newDateValue);
                onDateValueChange(newDateValue);
            }
        }
    };
    var viewYear = date.year();
    var viewMonth = date.month();
    date.add(1, "month").year();
    date.add(1, "month").month();
    var prevLast = date.subtract(1, "month").endOf("month");
    var thisLast = date.endOf("month");
    var PLDate = prevLast.date();
    var PLDay = prevLast.day();
    var TLDate = thisLast.date();
    var TLDay = thisLast.day();
    var prevDates = [];
    var thisDates = Array.from({ length: TLDate }, function (_, i) { return i + 1; });
    var nextDates = Array.from({ length: 6 - TLDay }, function (_, i) { return i + 1; });
    if (PLDay !== 6) {
        for (var i = 0; i < PLDay + 1; i++) {
            prevDates.unshift(PLDate - i);
        }
    }
    var dates = prevDates.concat(thisDates, nextDates);
    var firstDateIndex = dates.indexOf(1);
    var lastDateIndex = dates.lastIndexOf(TLDate);
    var nextMonth = date.endOf("month");
    var nextLast = nextMonth.add(1, "month").endOf("month");
    var NPLDate = nextMonth.date();
    var NPLDay = nextMonth.day();
    var NLDate = nextLast.date();
    var NLDay = nextLast.day();
    var nextPrevDates = [];
    var nextThisDates = Array.from({ length: NLDate }, function (_, i) { return i + 1; });
    var nextNextDates = Array.from({ length: 6 - NLDay }, function (_, i) { return i + 1; });
    if (NPLDay !== 6) {
        for (var i = 0; i < NPLDay + 1; i++) {
            nextPrevDates.unshift(NPLDate - i);
        }
    }
    var nextMonthDates = nextPrevDates.concat(nextThisDates, nextNextDates);
    var nextFirstDateIndex = nextMonthDates.indexOf(1);
    var nextLastDateIndex = nextMonthDates.lastIndexOf(NLDate);
    var prevMonthClick = function () {
        if (date.isAfter(dayjs(), "month")) {
            setDate(date.subtract(1, "month"));
        }
    };
    var safeMaxMonth = Math.max(2, maxMonth !== null && maxMonth !== void 0 ? maxMonth : 2);
    var nextMonthClick = function () {
        var nextThreeMonths = dayjs().add(safeMaxMonth - 1, "month");
        if (date.isBefore(nextThreeMonths, "month")) {
            setDate(date.add(1, "month"));
        }
    };
    var langMap = {
        en: ["S", "M", "T", "W", "T", "F", "S"],
        "en-long": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        ko: ["일", "월", "화", "수", "목", "금", "토"],
    };
    var getWeekdays = function (lang) { return langMap[lang]; };
    var weekdays = getWeekdays(lang);
    return (jsxRuntimeExports.jsx("div", { className: container, children: jsxRuntimeExports.jsx("div", { className: modalWrap, children: jsxRuntimeExports.jsxs("div", { className: calendarWrap, children: [jsxRuntimeExports.jsxs("div", { className: calTitleWrap, children: [jsxRuntimeExports.jsxs("div", { className: yearWrap, children: [jsxRuntimeExports.jsx("button", { className: navBtn, onClick: prevMonthClick, children: jsxRuntimeExports.jsx(LeftIcon, {}) }), jsxRuntimeExports.jsxs("h2", { className: yearMonth, children: [date.year(), ". ", date.month() + 1] })] }), jsxRuntimeExports.jsxs("div", { className: yearWrap, children: [jsxRuntimeExports.jsxs("h2", { className: yearMonth, children: [date.add(1, "month").year(), ". ", date.add(1, "month").month() + 1] }), jsxRuntimeExports.jsx("button", { className: navBtn, onClick: nextMonthClick, children: jsxRuntimeExports.jsx(RightIcon, {}) })] })] }), jsxRuntimeExports.jsxs("div", { className: pickWrap, children: [jsxRuntimeExports.jsxs("div", { className: monthWrap, children: [jsxRuntimeExports.jsx("div", { className: daysWrap, children: weekdays.map(function (day, index) {
                                            var variantClass = index === 0 ? dayLabelVariants.sunday : index === 6 ? dayLabelVariants.saturday : "";
                                            return (jsxRuntimeExports.jsx("div", { className: dayWrap, children: jsxRuntimeExports.jsx("p", { className: "".concat(dayLabelBase, " ").concat(variantClass), children: day }) }, index));
                                        }) }), jsxRuntimeExports.jsx("div", { className: datesWrap, children: dates.map(function (date, i) {
                                            var condition = i >= firstDateIndex && i < lastDateIndex + 1 ? "this" : "other";
                                            var formattedDate = dayjs("".concat(viewYear, "-").concat(viewMonth + 1, "-").concat(date)).format("YYYY-MM-DD");
                                            var today = dayjs().format("YYYY-MM-DD");
                                            var isPastDate = dayjs(formattedDate).isBefore(today, "day");
                                            var getDateStyle = function () {
                                                if (formattedDate === dateValue.startDate)
                                                    return dateWrap.startDate;
                                                if (formattedDate === dateValue.endDate)
                                                    return dateWrap.endDate;
                                                if (dayjs(dateValue.startDate) &&
                                                    dayjs(dateValue.endDate) &&
                                                    dayjs(formattedDate).isAfter(dayjs(dateValue.startDate)) &&
                                                    dayjs(formattedDate).isBefore(dayjs(dateValue.endDate)))
                                                    return dateWrap.betweenDate;
                                                if (formattedDate === today)
                                                    return dateWrap.today;
                                                return dateWrap.other;
                                            };
                                            var isDisabled = dateValue.startDate && dayjs(formattedDate).diff(dayjs(dateValue.startDate), "day") > 8;
                                            if (condition === "other") {
                                                return (jsxRuntimeExports.jsx("div", { className: dateWrap.other, children: jsxRuntimeExports.jsx("p", { className: dateLabel.other, children: date }) }, i));
                                            }
                                            else if (isPastDate) {
                                                return (jsxRuntimeExports.jsx("div", { className: pastWrap, children: jsxRuntimeExports.jsx("p", { className: dateLabel[condition], children: date }) }, i));
                                            }
                                            else {
                                                return (jsxRuntimeExports.jsx("div", { className: getDateStyle(), onClick: function () {
                                                        if (!isDisabled || dateValue.endDate)
                                                            selectDate(formattedDate);
                                                    }, style: isDisabled && !dateValue.endDate ? { pointerEvents: "none", opacity: 0.1 } : {}, children: jsxRuntimeExports.jsx("p", { className: dateLabel[condition], children: date }) }, i));
                                            }
                                        }) })] }), jsxRuntimeExports.jsxs("div", { className: monthWrap, children: [jsxRuntimeExports.jsx("div", { className: daysWrap, children: weekdays.map(function (day, index) {
                                            var variantClass = index === 0 ? dayLabelVariants.sunday : index === 6 ? dayLabelVariants.saturday : "";
                                            return (jsxRuntimeExports.jsx("div", { className: dayWrap, children: jsxRuntimeExports.jsx("p", { className: "".concat(dayLabelBase, " ").concat(variantClass), children: day }) }, index));
                                        }) }), jsxRuntimeExports.jsx("div", { className: datesWrap, children: nextMonthDates.map(function (date, i) {
                                            var condition = i >= nextFirstDateIndex && i < nextLastDateIndex + 1 ? "this" : "other";
                                            var formattedDate = dayjs("".concat(viewYear, "-").concat(viewMonth + 2, "-").concat(date)).format("YYYY-MM-DD");
                                            var today = dayjs().format("YYYY-MM-DD");
                                            var isPastDate = dayjs(formattedDate).isBefore(today, "day");
                                            var getDateStyle = function () {
                                                if (formattedDate === dateValue.startDate)
                                                    return dateWrap.startDate;
                                                if (formattedDate === dateValue.endDate)
                                                    return dateWrap.endDate;
                                                if (dayjs(dateValue.startDate) &&
                                                    dayjs(dateValue.endDate) &&
                                                    dayjs(formattedDate).isAfter(dayjs(dateValue.startDate)) &&
                                                    dayjs(formattedDate).isBefore(dayjs(dateValue.endDate)))
                                                    return dateWrap.betweenDate;
                                                if (formattedDate === today)
                                                    return dateWrap.today;
                                                return dateWrap.other;
                                            };
                                            var isDisabled = dateValue.startDate && dayjs(formattedDate).diff(dayjs(dateValue.startDate), "day") > 8;
                                            if (condition === "other") {
                                                return (jsxRuntimeExports.jsx("div", { className: dateWrap.other, children: jsxRuntimeExports.jsx("p", { className: dateLabel.other, children: date }) }, i));
                                            }
                                            else if (isPastDate) {
                                                return (jsxRuntimeExports.jsx("div", { className: pastWrap, children: jsxRuntimeExports.jsx("p", { className: dateLabel[condition], children: date }) }, i));
                                            }
                                            else {
                                                return (jsxRuntimeExports.jsx("div", { className: getDateStyle(), onClick: function () {
                                                        if (!isDisabled || dateValue.endDate)
                                                            selectDate(formattedDate);
                                                    }, style: isDisabled && !dateValue.endDate ? { pointerEvents: "none", opacity: 0.1 } : {}, children: jsxRuntimeExports.jsx("p", { className: dateLabel[condition], children: date }) }, i));
                                            }
                                        }) })] })] })] }) }) }));
}

exports.Button = Button;
exports.CalendarPicker = CalendarPicker;
//# sourceMappingURL=index.js.map

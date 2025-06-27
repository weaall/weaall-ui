'use strict';

var require$$0 = require('react');
var reactDom = require('react-dom');
require('./assets/src/components/bar-chart/BarChart.css.ts.vanilla-Bti4jkdK.css');
require('./assets/src/components/multi-bar-chart/MultiBarChart.css.ts.vanilla-D2lHce_R.css');
require('./assets/src/components/single-line-chart/SingleLineChart.css.ts.vanilla-HJfAGGt5.css');

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


function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production_min;

function requireReactJsxRuntime_production_min () {
	if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
	hasRequiredReactJsxRuntime_production_min = 1;
var f=require$$0,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:true,ref:true,__self:true,__source:true};
	function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a) void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
	return reactJsxRuntime_production_min;
}

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development () {
	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
	hasRequiredReactJsxRuntime_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	var React = require$$0;

	// ATTENTION
	// When adding new symbols to this file,
	// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	// The Symbol used to tag the ReactElement-like types.
	var REACT_ELEMENT_TYPE = Symbol.for('react.element');
	var REACT_PORTAL_TYPE = Symbol.for('react.portal');
	var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
	var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
	var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
	var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
	var REACT_CONTEXT_TYPE = Symbol.for('react.context');
	var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
	var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
	var REACT_MEMO_TYPE = Symbol.for('react.memo');
	var REACT_LAZY_TYPE = Symbol.for('react.lazy');
	var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator';
	function getIteratorFn(maybeIterable) {
	  if (maybeIterable === null || typeof maybeIterable !== 'object') {
	    return null;
	  }

	  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

	  if (typeof maybeIterator === 'function') {
	    return maybeIterator;
	  }

	  return null;
	}

	var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

	function error(format) {
	  {
	    {
	      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	      }

	      printWarning('error', format, args);
	    }
	  }
	}

	function printWarning(level, format, args) {
	  // When changing this logic, you might want to also
	  // update consoleWithStackDev.www.js as well.
	  {
	    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	    var stack = ReactDebugCurrentFrame.getStackAddendum();

	    if (stack !== '') {
	      format += '%s';
	      args = args.concat([stack]);
	    } // eslint-disable-next-line react-internal/safe-string-coercion


	    var argsWithFormat = args.map(function (item) {
	      return String(item);
	    }); // Careful: RN currently depends on this prefix

	    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
	    // breaks IE9: https://github.com/facebook/react/issues/13610
	    // eslint-disable-next-line react-internal/no-production-logging

	    Function.prototype.apply.call(console[level], console, argsWithFormat);
	  }
	}

	// -----------------------------------------------------------------------------

	var enableScopeAPI = false; // Experimental Create Event Handle API.
	var enableCacheElement = false;
	var enableTransitionTracing = false; // No known bugs, but needs performance testing

	var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	// stuff. Intended to enable React core members to more easily debug scheduling
	// issues in DEV builds.

	var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	var REACT_MODULE_REFERENCE;

	{
	  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	}

	function isValidElementType(type) {
	  if (typeof type === 'string' || typeof type === 'function') {
	    return true;
	  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


	  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
	    return true;
	  }

	  if (typeof type === 'object' && type !== null) {
	    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
	    // types supported by any Flight configuration anywhere since
	    // we don't know which Flight build this will end up being used
	    // with.
	    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	      return true;
	    }
	  }

	  return false;
	}

	function getWrappedName(outerType, innerType, wrapperName) {
	  var displayName = outerType.displayName;

	  if (displayName) {
	    return displayName;
	  }

	  var functionName = innerType.displayName || innerType.name || '';
	  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
	} // Keep in sync with react-reconciler/getComponentNameFromFiber


	function getContextName(type) {
	  return type.displayName || 'Context';
	} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


	function getComponentNameFromType(type) {
	  if (type == null) {
	    // Host root, text node or just invalid type.
	    return null;
	  }

	  {
	    if (typeof type.tag === 'number') {
	      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
	    }
	  }

	  if (typeof type === 'function') {
	    return type.displayName || type.name || null;
	  }

	  if (typeof type === 'string') {
	    return type;
	  }

	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return 'Fragment';

	    case REACT_PORTAL_TYPE:
	      return 'Portal';

	    case REACT_PROFILER_TYPE:
	      return 'Profiler';

	    case REACT_STRICT_MODE_TYPE:
	      return 'StrictMode';

	    case REACT_SUSPENSE_TYPE:
	      return 'Suspense';

	    case REACT_SUSPENSE_LIST_TYPE:
	      return 'SuspenseList';

	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_CONTEXT_TYPE:
	        var context = type;
	        return getContextName(context) + '.Consumer';

	      case REACT_PROVIDER_TYPE:
	        var provider = type;
	        return getContextName(provider._context) + '.Provider';

	      case REACT_FORWARD_REF_TYPE:
	        return getWrappedName(type, type.render, 'ForwardRef');

	      case REACT_MEMO_TYPE:
	        var outerName = type.displayName || null;

	        if (outerName !== null) {
	          return outerName;
	        }

	        return getComponentNameFromType(type.type) || 'Memo';

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            return getComponentNameFromType(init(payload));
	          } catch (x) {
	            return null;
	          }
	        }

	      // eslint-disable-next-line no-fallthrough
	    }
	  }

	  return null;
	}

	var assign = Object.assign;

	// Helpers to patch console.logs to avoid logging during side-effect free
	// replaying on render function. This currently only patches the object
	// lazily which won't cover if the log function was extracted eagerly.
	// We could also eagerly patch the method.
	var disabledDepth = 0;
	var prevLog;
	var prevInfo;
	var prevWarn;
	var prevError;
	var prevGroup;
	var prevGroupCollapsed;
	var prevGroupEnd;

	function disabledLog() {}

	disabledLog.__reactDisabledLog = true;
	function disableLogs() {
	  {
	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      prevLog = console.log;
	      prevInfo = console.info;
	      prevWarn = console.warn;
	      prevError = console.error;
	      prevGroup = console.group;
	      prevGroupCollapsed = console.groupCollapsed;
	      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

	      var props = {
	        configurable: true,
	        enumerable: true,
	        value: disabledLog,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        info: props,
	        log: props,
	        warn: props,
	        error: props,
	        group: props,
	        groupCollapsed: props,
	        groupEnd: props
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    disabledDepth++;
	  }
	}
	function reenableLogs() {
	  {
	    disabledDepth--;

	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      var props = {
	        configurable: true,
	        enumerable: true,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        log: assign({}, props, {
	          value: prevLog
	        }),
	        info: assign({}, props, {
	          value: prevInfo
	        }),
	        warn: assign({}, props, {
	          value: prevWarn
	        }),
	        error: assign({}, props, {
	          value: prevError
	        }),
	        group: assign({}, props, {
	          value: prevGroup
	        }),
	        groupCollapsed: assign({}, props, {
	          value: prevGroupCollapsed
	        }),
	        groupEnd: assign({}, props, {
	          value: prevGroupEnd
	        })
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    if (disabledDepth < 0) {
	      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
	    }
	  }
	}

	var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
	var prefix;
	function describeBuiltInComponentFrame(name, source, ownerFn) {
	  {
	    if (prefix === undefined) {
	      // Extract the VM specific prefix used by each line.
	      try {
	        throw Error();
	      } catch (x) {
	        var match = x.stack.trim().match(/\n( *(at )?)/);
	        prefix = match && match[1] || '';
	      }
	    } // We use the prefix to ensure our stacks line up with native stack frames.


	    return '\n' + prefix + name;
	  }
	}
	var reentry = false;
	var componentFrameCache;

	{
	  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
	  componentFrameCache = new PossiblyWeakMap();
	}

	function describeNativeComponentFrame(fn, construct) {
	  // If something asked for a stack inside a fake render, it should get ignored.
	  if ( !fn || reentry) {
	    return '';
	  }

	  {
	    var frame = componentFrameCache.get(fn);

	    if (frame !== undefined) {
	      return frame;
	    }
	  }

	  var control;
	  reentry = true;
	  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

	  Error.prepareStackTrace = undefined;
	  var previousDispatcher;

	  {
	    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
	    // for warnings.

	    ReactCurrentDispatcher.current = null;
	    disableLogs();
	  }

	  try {
	    // This should throw.
	    if (construct) {
	      // Something should be setting the props in the constructor.
	      var Fake = function () {
	        throw Error();
	      }; // $FlowFixMe


	      Object.defineProperty(Fake.prototype, 'props', {
	        set: function () {
	          // We use a throwing setter instead of frozen or non-writable props
	          // because that won't throw in a non-strict mode function.
	          throw Error();
	        }
	      });

	      if (typeof Reflect === 'object' && Reflect.construct) {
	        // We construct a different control for this case to include any extra
	        // frames added by the construct call.
	        try {
	          Reflect.construct(Fake, []);
	        } catch (x) {
	          control = x;
	        }

	        Reflect.construct(fn, [], Fake);
	      } else {
	        try {
	          Fake.call();
	        } catch (x) {
	          control = x;
	        }

	        fn.call(Fake.prototype);
	      }
	    } else {
	      try {
	        throw Error();
	      } catch (x) {
	        control = x;
	      }

	      fn();
	    }
	  } catch (sample) {
	    // This is inlined manually because closure doesn't do it for us.
	    if (sample && control && typeof sample.stack === 'string') {
	      // This extracts the first frame from the sample that isn't also in the control.
	      // Skipping one frame that we assume is the frame that calls the two.
	      var sampleLines = sample.stack.split('\n');
	      var controlLines = control.stack.split('\n');
	      var s = sampleLines.length - 1;
	      var c = controlLines.length - 1;

	      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
	        // We expect at least one stack frame to be shared.
	        // Typically this will be the root most one. However, stack frames may be
	        // cut off due to maximum stack limits. In this case, one maybe cut off
	        // earlier than the other. We assume that the sample is longer or the same
	        // and there for cut off earlier. So we should find the root most frame in
	        // the sample somewhere in the control.
	        c--;
	      }

	      for (; s >= 1 && c >= 0; s--, c--) {
	        // Next we find the first one that isn't the same which should be the
	        // frame that called our sample function and the control.
	        if (sampleLines[s] !== controlLines[c]) {
	          // In V8, the first line is describing the message but other VMs don't.
	          // If we're about to return the first line, and the control is also on the same
	          // line, that's a pretty good indicator that our sample threw at same line as
	          // the control. I.e. before we entered the sample frame. So we ignore this result.
	          // This can happen if you passed a class to function component, or non-function.
	          if (s !== 1 || c !== 1) {
	            do {
	              s--;
	              c--; // We may still have similar intermediate frames from the construct call.
	              // The next one that isn't the same should be our match though.

	              if (c < 0 || sampleLines[s] !== controlLines[c]) {
	                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
	                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
	                // but we have a user-provided "displayName"
	                // splice it in to make the stack more readable.


	                if (fn.displayName && _frame.includes('<anonymous>')) {
	                  _frame = _frame.replace('<anonymous>', fn.displayName);
	                }

	                {
	                  if (typeof fn === 'function') {
	                    componentFrameCache.set(fn, _frame);
	                  }
	                } // Return the line we found.


	                return _frame;
	              }
	            } while (s >= 1 && c >= 0);
	          }

	          break;
	        }
	      }
	    }
	  } finally {
	    reentry = false;

	    {
	      ReactCurrentDispatcher.current = previousDispatcher;
	      reenableLogs();
	    }

	    Error.prepareStackTrace = previousPrepareStackTrace;
	  } // Fallback to just using the name if we couldn't make it throw.


	  var name = fn ? fn.displayName || fn.name : '';
	  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

	  {
	    if (typeof fn === 'function') {
	      componentFrameCache.set(fn, syntheticFrame);
	    }
	  }

	  return syntheticFrame;
	}
	function describeFunctionComponentFrame(fn, source, ownerFn) {
	  {
	    return describeNativeComponentFrame(fn, false);
	  }
	}

	function shouldConstruct(Component) {
	  var prototype = Component.prototype;
	  return !!(prototype && prototype.isReactComponent);
	}

	function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

	  if (type == null) {
	    return '';
	  }

	  if (typeof type === 'function') {
	    {
	      return describeNativeComponentFrame(type, shouldConstruct(type));
	    }
	  }

	  if (typeof type === 'string') {
	    return describeBuiltInComponentFrame(type);
	  }

	  switch (type) {
	    case REACT_SUSPENSE_TYPE:
	      return describeBuiltInComponentFrame('Suspense');

	    case REACT_SUSPENSE_LIST_TYPE:
	      return describeBuiltInComponentFrame('SuspenseList');
	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_FORWARD_REF_TYPE:
	        return describeFunctionComponentFrame(type.render);

	      case REACT_MEMO_TYPE:
	        // Memo may contain any component type so we recursively resolve it.
	        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            // Lazy may contain any component type so we recursively resolve it.
	            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
	          } catch (x) {}
	        }
	    }
	  }

	  return '';
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var loggedTypeFailures = {};
	var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame.setExtraStackFrame(null);
	    }
	  }
	}

	function checkPropTypes(typeSpecs, values, location, componentName, element) {
	  {
	    // $FlowFixMe This is okay but Flow doesn't know it.
	    var has = Function.call.bind(hasOwnProperty);

	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.

	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            // eslint-disable-next-line react-internal/prod-error-codes
	            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
	            err.name = 'Invariant Violation';
	            throw err;
	          }

	          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
	        } catch (ex) {
	          error$1 = ex;
	        }

	        if (error$1 && !(error$1 instanceof Error)) {
	          setCurrentlyValidatingElement(element);

	          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

	          setCurrentlyValidatingElement(null);
	        }

	        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error$1.message] = true;
	          setCurrentlyValidatingElement(element);

	          error('Failed %s type: %s', location, error$1.message);

	          setCurrentlyValidatingElement(null);
	        }
	      }
	    }
	  }
	}

	var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

	function isArray(a) {
	  return isArrayImpl(a);
	}

	/*
	 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
	 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
	 *
	 * The functions in this module will throw an easier-to-understand,
	 * easier-to-debug exception with a clear errors message message explaining the
	 * problem. (Instead of a confusing exception thrown inside the implementation
	 * of the `value` object).
	 */
	// $FlowFixMe only called in DEV, so void return is not possible.
	function typeName(value) {
	  {
	    // toStringTag is needed for namespaced types like Temporal.Instant
	    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
	    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
	    return type;
	  }
	} // $FlowFixMe only called in DEV, so void return is not possible.


	function willCoercionThrow(value) {
	  {
	    try {
	      testStringCoercion(value);
	      return false;
	    } catch (e) {
	      return true;
	    }
	  }
	}

	function testStringCoercion(value) {
	  // If you ended up here by following an exception call stack, here's what's
	  // happened: you supplied an object or symbol value to React (as a prop, key,
	  // DOM attribute, CSS property, string ref, etc.) and when React tried to
	  // coerce it to a string using `'' + value`, an exception was thrown.
	  //
	  // The most common types that will cause this exception are `Symbol` instances
	  // and Temporal objects like `Temporal.Instant`. But any object that has a
	  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
	  // exception. (Library authors do this to prevent users from using built-in
	  // numeric operators like `+` or comparison operators like `>=` because custom
	  // methods are needed to perform accurate arithmetic or comparison.)
	  //
	  // To fix the problem, coerce this object or symbol value to a string before
	  // passing it to React. The most reliable way is usually `String(value)`.
	  //
	  // To find which value is throwing, check the browser or debugger console.
	  // Before this exception was thrown, there should be `console.error` output
	  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
	  // problem and how that type was used: key, atrribute, input value prop, etc.
	  // In most cases, this console output also shows the component and its
	  // ancestor components where the exception happened.
	  //
	  // eslint-disable-next-line react-internal/safe-string-coercion
	  return '' + value;
	}
	function checkKeyStringCoercion(value) {
	  {
	    if (willCoercionThrow(value)) {
	      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

	      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
	    }
	  }
	}

	var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	var specialPropKeyWarningShown;
	var specialPropRefWarningShown;

	function hasValidRef(config) {
	  {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.key !== undefined;
	}

	function warnIfStringRefCannotBeAutoConverted(config, self) {
	  {
	    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self) ;
	  }
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingKey = function () {
	      if (!specialPropKeyWarningShown) {
	        specialPropKeyWarningShown = true;

	        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingKey.isReactWarning = true;
	    Object.defineProperty(props, 'key', {
	      get: warnAboutAccessingKey,
	      configurable: true
	    });
	  }
	}

	function defineRefPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingRef = function () {
	      if (!specialPropRefWarningShown) {
	        specialPropRefWarningShown = true;

	        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingRef.isReactWarning = true;
	    Object.defineProperty(props, 'ref', {
	      get: warnAboutAccessingRef,
	      configurable: true
	    });
	  }
	}
	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, instanceof check
	 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} props
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} owner
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @internal
	 */


	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allows us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.

	    Object.defineProperty(element._store, 'validated', {
	      configurable: false,
	      enumerable: false,
	      writable: true,
	      value: false
	    }); // self and source are DEV only properties.

	    Object.defineProperty(element, '_self', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: self
	    }); // Two elements created in two different places should be considered
	    // equal for testing purposes and therefore we hide it from enumeration.

	    Object.defineProperty(element, '_source', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: source
	    });

	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};
	/**
	 * https://github.com/reactjs/rfcs/pull/107
	 * @param {*} type
	 * @param {object} props
	 * @param {string} key
	 */

	function jsxDEV(type, config, maybeKey, source, self) {
	  {
	    var propName; // Reserved names are extracted

	    var props = {};
	    var key = null;
	    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
	    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
	    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
	    // but as an intermediary step, we will use jsxDEV for everything except
	    // <div {...props} key="Hi" />, because we aren't currently able to tell if
	    // key is explicitly declared to be undefined or not.

	    if (maybeKey !== undefined) {
	      {
	        checkKeyStringCoercion(maybeKey);
	      }

	      key = '' + maybeKey;
	    }

	    if (hasValidKey(config)) {
	      {
	        checkKeyStringCoercion(config.key);
	      }

	      key = '' + config.key;
	    }

	    if (hasValidRef(config)) {
	      ref = config.ref;
	      warnIfStringRefCannotBeAutoConverted(config, self);
	    } // Remaining properties are added to a new props object


	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    } // Resolve default props


	    if (type && type.defaultProps) {
	      var defaultProps = type.defaultProps;

	      for (propName in defaultProps) {
	        if (props[propName] === undefined) {
	          props[propName] = defaultProps[propName];
	        }
	      }
	    }

	    if (key || ref) {
	      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

	      if (key) {
	        defineKeyPropWarningGetter(props, displayName);
	      }

	      if (ref) {
	        defineRefPropWarningGetter(props, displayName);
	      }
	    }

	    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	  }
	}

	var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
	var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement$1(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
	    }
	  }
	}

	var propTypesMisspellWarningShown;

	{
	  propTypesMisspellWarningShown = false;
	}
	/**
	 * Verifies the object is a ReactElement.
	 * See https://reactjs.org/docs/react-api.html#isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a ReactElement.
	 * @final
	 */


	function isValidElement(object) {
	  {
	    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	  }
	}

	function getDeclarationErrorAddendum() {
	  {
	    if (ReactCurrentOwner$1.current) {
	      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

	      if (name) {
	        return '\n\nCheck the render method of `' + name + '`.';
	      }
	    }

	    return '';
	  }
	}

	function getSourceInfoErrorAddendum(source) {
	  {

	    return '';
	  }
	}
	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */


	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  {
	    var info = getDeclarationErrorAddendum();

	    if (!info) {
	      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

	      if (parentName) {
	        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
	      }
	    }

	    return info;
	  }
	}
	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */


	function validateExplicitKey(element, parentType) {
	  {
	    if (!element._store || element._store.validated || element.key != null) {
	      return;
	    }

	    element._store.validated = true;
	    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

	    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	      return;
	    }

	    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
	    // property, it may be the creator of the child that's responsible for
	    // assigning it a key.

	    var childOwner = '';

	    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
	      // Give the component that originally created this child.
	      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
	    }

	    setCurrentlyValidatingElement$1(element);

	    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

	    setCurrentlyValidatingElement$1(null);
	  }
	}
	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */


	function validateChildKeys(node, parentType) {
	  {
	    if (typeof node !== 'object') {
	      return;
	    }

	    if (isArray(node)) {
	      for (var i = 0; i < node.length; i++) {
	        var child = node[i];

	        if (isValidElement(child)) {
	          validateExplicitKey(child, parentType);
	        }
	      }
	    } else if (isValidElement(node)) {
	      // This element was passed in a valid location.
	      if (node._store) {
	        node._store.validated = true;
	      }
	    } else if (node) {
	      var iteratorFn = getIteratorFn(node);

	      if (typeof iteratorFn === 'function') {
	        // Entry iterators used to provide implicit keys,
	        // but now we print a separate warning for them later.
	        if (iteratorFn !== node.entries) {
	          var iterator = iteratorFn.call(node);
	          var step;

	          while (!(step = iterator.next()).done) {
	            if (isValidElement(step.value)) {
	              validateExplicitKey(step.value, parentType);
	            }
	          }
	        }
	      }
	    }
	  }
	}
	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */


	function validatePropTypes(element) {
	  {
	    var type = element.type;

	    if (type === null || type === undefined || typeof type === 'string') {
	      return;
	    }

	    var propTypes;

	    if (typeof type === 'function') {
	      propTypes = type.propTypes;
	    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
	    // Inner props are checked in the reconciler.
	    type.$$typeof === REACT_MEMO_TYPE)) {
	      propTypes = type.propTypes;
	    } else {
	      return;
	    }

	    if (propTypes) {
	      // Intentionally inside to avoid triggering lazy initializers:
	      var name = getComponentNameFromType(type);
	      checkPropTypes(propTypes, element.props, 'prop', name, element);
	    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
	      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

	      var _name = getComponentNameFromType(type);

	      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
	    }

	    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
	      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
	    }
	  }
	}
	/**
	 * Given a fragment, validate that it can only be provided with fragment props
	 * @param {ReactElement} fragment
	 */


	function validateFragmentProps(fragment) {
	  {
	    var keys = Object.keys(fragment.props);

	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];

	      if (key !== 'children' && key !== 'key') {
	        setCurrentlyValidatingElement$1(fragment);

	        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

	        setCurrentlyValidatingElement$1(null);
	        break;
	      }
	    }

	    if (fragment.ref !== null) {
	      setCurrentlyValidatingElement$1(fragment);

	      error('Invalid attribute `ref` supplied to `React.Fragment`.');

	      setCurrentlyValidatingElement$1(null);
	    }
	  }
	}

	var didWarnAboutKeySpread = {};
	function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
	  {
	    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.

	    if (!validType) {
	      var info = '';

	      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
	      }

	      var sourceInfo = getSourceInfoErrorAddendum();

	      if (sourceInfo) {
	        info += sourceInfo;
	      } else {
	        info += getDeclarationErrorAddendum();
	      }

	      var typeString;

	      if (type === null) {
	        typeString = 'null';
	      } else if (isArray(type)) {
	        typeString = 'array';
	      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
	        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
	        info = ' Did you accidentally export a JSX literal instead of a component?';
	      } else {
	        typeString = typeof type;
	      }

	      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
	    }

	    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.

	    if (element == null) {
	      return element;
	    } // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)


	    if (validType) {
	      var children = props.children;

	      if (children !== undefined) {
	        if (isStaticChildren) {
	          if (isArray(children)) {
	            for (var i = 0; i < children.length; i++) {
	              validateChildKeys(children[i], type);
	            }

	            if (Object.freeze) {
	              Object.freeze(children);
	            }
	          } else {
	            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
	          }
	        } else {
	          validateChildKeys(children, type);
	        }
	      }
	    }

	    {
	      if (hasOwnProperty.call(props, 'key')) {
	        var componentName = getComponentNameFromType(type);
	        var keys = Object.keys(props).filter(function (k) {
	          return k !== 'key';
	        });
	        var beforeExample = keys.length > 0 ? '{key: someKey, ' + keys.join(': ..., ') + ': ...}' : '{key: someKey}';

	        if (!didWarnAboutKeySpread[componentName + beforeExample]) {
	          var afterExample = keys.length > 0 ? '{' + keys.join(': ..., ') + ': ...}' : '{}';

	          error('A props object containing a "key" prop is being spread into JSX:\n' + '  let props = %s;\n' + '  <%s {...props} />\n' + 'React keys must be passed directly to JSX without using spread:\n' + '  let props = %s;\n' + '  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);

	          didWarnAboutKeySpread[componentName + beforeExample] = true;
	        }
	      }
	    }

	    if (type === REACT_FRAGMENT_TYPE) {
	      validateFragmentProps(element);
	    } else {
	      validatePropTypes(element);
	    }

	    return element;
	  }
	} // These two functions exist to still get child warnings in dev
	// even with the prod transform. This means that jsxDEV is purely
	// opt-in behavior for better messages but that we won't stop
	// giving you warnings if you use production apis.

	function jsxWithValidationStatic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, true);
	  }
	}
	function jsxWithValidationDynamic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, false);
	  }
	}

	var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
	// for now we can ship identical prod functions

	var jsxs =  jsxWithValidationStatic ;

	reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_development.jsx = jsx;
	reactJsxRuntime_development.jsxs = jsxs;
	  })();
	}
	return reactJsxRuntime_development;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;

	if (process.env.NODE_ENV === 'production') {
	  jsxRuntime.exports = requireReactJsxRuntime_production_min();
	} else {
	  jsxRuntime.exports = requireReactJsxRuntime_development();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

var barColorVariants$1 = {color1:'BarChart_barColorVariants_color1__q3fmm09',color2:'BarChart_barColorVariants_color2__q3fmm0a',color3:'BarChart_barColorVariants_color3__q3fmm0b',color4:'BarChart_barColorVariants_color4__q3fmm0c',color5:'BarChart_barColorVariants_color5__q3fmm0d',color6:'BarChart_barColorVariants_color6__q3fmm0e',color7:'BarChart_barColorVariants_color7__q3fmm0f',color8:'BarChart_barColorVariants_color8__q3fmm0g',color9:'BarChart_barColorVariants_color9__q3fmm0h',color10:'BarChart_barColorVariants_color10__q3fmm0i'};
var barContainer$1 = 'BarChart_barContainer__q3fmm07';
var barLabel$1 = 'BarChart_barLabel__q3fmm08';
var barLabelItem$2 = 'BarChart_barLabelItem__q3fmm0l';
var barLabels$2 = 'BarChart_barLabels__q3fmm0k';
var bottomAxis$2 = 'BarChart_bottomAxis__q3fmm0j';
var chartBars$2 = 'BarChart_chartBars__q3fmm05';
var chartContainer$2 = 'BarChart_chartContainer__q3fmm01';
var chartContent$2 = 'BarChart_chartContent__q3fmm04';
var chartNote$2 = 'BarChart_chartNote__q3fmm0m';
var content$2 = 'BarChart_content__q3fmm00';
var gridLine$2 = 'BarChart_gridLine__q3fmm06';
var yAxis$2 = 'BarChart_yAxis__q3fmm02';
var yAxisTick$2 = 'BarChart_yAxisTick__q3fmm03';

var barColorHex$1 = {
    color1: "#f43f5e",
    color2: "#38bdf8",
    color3: "#34d399",
    color4: "#a78bfa",
    color5: "#facc15",
    color6: "#fb923c",
    color7: "#818cf8",
    color8: "#f472b6",
    color9: "#4ade80",
    color10: "#f87171",
};

var colorKeys$1 = [
    "color1",
    "color2",
    "color3",
    "color4",
    "color5",
    "color6",
    "color7",
    "color8",
    "color9",
    "color10",
];
function BarChart(_a) {
    var date = _a.date, _b = _a.height, height = _b === void 0 ? 300 : _b, hover = _a.hover, unit = _a.unit;
    var _c = require$$0.useState(null), hoveredIdx = _c[0], setHoveredIdx = _c[1];
    var _d = require$$0.useState(null), mousePos = _d[0], setMousePos = _d[1];
    var figures = date.map(function (d) { return d.figures; });
    var labels = date.map(function (d) { return d.title; });
    var bottomFixedHeight = 100;
    var totalChartContainerHeight = height;
    var chartBarsAndAxisHeight = totalChartContainerHeight - bottomFixedHeight;
    var maxBarValue = Math.max.apply(Math, __spreadArray(__spreadArray([], figures, false), [1], false));
    var numberOfTicks = 5;
    var yAxisTicks = Array.from({ length: numberOfTicks }, function (_, i) {
        var value = (maxBarValue / (numberOfTicks - 1)) * (numberOfTicks - 1 - i);
        return Math.round(value);
    });
    return (jsxRuntimeExports.jsxs("div", { className: content$2, style: { height: height }, children: [jsxRuntimeExports.jsxs("div", { className: chartContainer$2, children: [jsxRuntimeExports.jsx("div", { className: yAxis$2, children: yAxisTicks.map(function (tick, index) { return (jsxRuntimeExports.jsx("div", { className: yAxisTick$2, children: jsxRuntimeExports.jsx("span", { children: tick }) }, index)); }) }), jsxRuntimeExports.jsxs("div", { className: chartContent$2, children: [jsxRuntimeExports.jsxs("div", { className: chartBars$2, children: [yAxisTicks.map(function (tick, index) { return (jsxRuntimeExports.jsx("div", { className: gridLine$2, style: {
                                            bottom: "".concat((index / (yAxisTicks.length - 1)) * 100, "%"),
                                        } }, "grid-line-".concat(index))); }), figures.map(function (value, index) { return (jsxRuntimeExports.jsxs("div", { className: barContainer$1, style: { position: "relative" }, onMouseEnter: function (e) {
                                            setHoveredIdx(index);
                                            setMousePos({ x: e.clientX, y: e.clientY });
                                        }, onMouseMove: function (e) { return setMousePos({ x: e.clientX, y: e.clientY }); }, onMouseLeave: function () {
                                            setHoveredIdx(null);
                                            setMousePos(null);
                                        }, children: [jsxRuntimeExports.jsx("span", { className: barLabel$1, children: hover ? "" : value }), jsxRuntimeExports.jsx("div", { className: barColorVariants$1[colorKeys$1[index % colorKeys$1.length]], style: {
                                                    height: "".concat((value / maxBarValue) * chartBarsAndAxisHeight, "px"),
                                                    width: "calc(100% / ".concat(figures.length, " - 16px)"),
                                                    minWidth: "40px",
                                                    borderRadius: "10px",
                                                    transition: "all 0.2s ease-out",
                                                    margin: "0 8px",
                                                } }), hoveredIdx === index &&
                                                hover &&
                                                mousePos &&
                                                reactDom.createPortal(jsxRuntimeExports.jsxs("div", { style: {
                                                        position: "fixed",
                                                        top: mousePos.y + 12,
                                                        left: mousePos.x + 12,
                                                        background: "#fff",
                                                        color: "#222",
                                                        border: "1px solid #e5e7eb",
                                                        borderRadius: 8,
                                                        padding: "8px 12px",
                                                        fontSize: 13,
                                                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                                                        whiteSpace: "pre-line",
                                                        pointerEvents: "none",
                                                        maxWidth: 260,
                                                        alignItems: "center",
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        zIndex: 2147483647,
                                                    }, children: [jsxRuntimeExports.jsxs("div", { style: {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: 8,
                                                            }, children: [jsxRuntimeExports.jsx("div", { style: {
                                                                        width: 12,
                                                                        height: 12,
                                                                        borderRadius: '100%',
                                                                        background: barColorHex$1[colorKeys$1[index % colorKeys$1.length]],
                                                                        border: "1px solid #e5e7eb",
                                                                        display: "inline-block",
                                                                    } }), jsxRuntimeExports.jsx("span", { style: { fontSize: 16, fontWeight: 500, color: "#666" }, children: labels[index] })] }), jsxRuntimeExports.jsxs("div", { children: [figures[index], " ", unit !== null && unit !== void 0 ? unit : "개"] })] }), document.body)] }, index)); }), jsxRuntimeExports.jsx("div", { className: bottomAxis$2 })] }), jsxRuntimeExports.jsx("div", { className: barLabels$2, children: labels.map(function (label, i) { return (jsxRuntimeExports.jsx("span", { className: barLabelItem$2, style: { width: "".concat(100 / labels.length, "%") }, children: label }, i)); }) })] })] }), jsxRuntimeExports.jsx("div", { className: chartNote$2, children: "\uAC12\uC740 \uCD5C\uB300\uAC12\uC5D0 \uBE44\uB840\uD558\uC5EC \uD45C\uC2DC\uB429\uB2C8\uB2E4." })] }));
}

var barColorVariants = {color1:'MultiBarChart_barColorVariants_color1__cfnqj79',color2:'MultiBarChart_barColorVariants_color2__cfnqj7a',color3:'MultiBarChart_barColorVariants_color3__cfnqj7b',color4:'MultiBarChart_barColorVariants_color4__cfnqj7c',color5:'MultiBarChart_barColorVariants_color5__cfnqj7d',color6:'MultiBarChart_barColorVariants_color6__cfnqj7e',color7:'MultiBarChart_barColorVariants_color7__cfnqj7f',color8:'MultiBarChart_barColorVariants_color8__cfnqj7g',color9:'MultiBarChart_barColorVariants_color9__cfnqj7h',color10:'MultiBarChart_barColorVariants_color10__cfnqj7i'};
var barContainer = 'MultiBarChart_barContainer__cfnqj77';
var barLabel = 'MultiBarChart_barLabel__cfnqj78';
var barLabelItem$1 = 'MultiBarChart_barLabelItem__cfnqj7l';
var barLabels$1 = 'MultiBarChart_barLabels__cfnqj7k';
var bottomAxis$1 = 'MultiBarChart_bottomAxis__cfnqj7j';
var chartBars$1 = 'MultiBarChart_chartBars__cfnqj75';
var chartContainer$1 = 'MultiBarChart_chartContainer__cfnqj71';
var chartContent$1 = 'MultiBarChart_chartContent__cfnqj74';
var chartNote$1 = 'MultiBarChart_chartNote__cfnqj7m';
var content$1 = 'MultiBarChart_content__cfnqj70';
var gridLine$1 = 'MultiBarChart_gridLine__cfnqj76';
var yAxis$1 = 'MultiBarChart_yAxis__cfnqj72';
var yAxisTick$1 = 'MultiBarChart_yAxisTick__cfnqj73';

var barColorHex = {
    color1: "#f43f5e",
    color2: "#38bdf8",
    color3: "#34d399",
    color4: "#a78bfa",
    color5: "#facc15",
    color6: "#fb923c",
    color7: "#818cf8",
    color8: "#f472b6",
    color9: "#4ade80",
    color10: "#f87171",
};

var colorKeys = [
    "color1",
    "color2",
    "color3",
    "color4",
    "color5",
    "color6",
    "color7",
    "color8",
    "color9",
    "color10",
];
function MultiBarChart(_a) {
    var data = _a.data, seriesLabels = _a.seriesLabels, _b = _a.height, height = _b === void 0 ? 300 : _b, hover = _a.hover, unit = _a.unit;
    var _c = require$$0.useState(null), hoveredGroupIdx = _c[0], setHoveredGroupIdx = _c[1];
    var _d = require$$0.useState(null), mousePos = _d[0], setMousePos = _d[1];
    var allValues = data.flatMap(function (d) { return d.values; });
    var maxBarValue = Math.max.apply(Math, __spreadArray(__spreadArray([], allValues, false), [1], false));
    var bottomFixedHeight = 100;
    var totalChartContainerHeight = height;
    var chartBarsAndAxisHeight = totalChartContainerHeight - bottomFixedHeight;
    var numberOfTicks = 5;
    var yAxisTicks = Array.from({ length: numberOfTicks }, function (_, i) {
        var value = (maxBarValue / (numberOfTicks - 1)) * (numberOfTicks - 1 - i);
        return Math.round(value);
    });
    return (jsxRuntimeExports.jsxs("div", { className: content$1, style: { height: height }, children: [jsxRuntimeExports.jsxs("div", { className: chartContainer$1, children: [jsxRuntimeExports.jsx("div", { className: yAxis$1, children: yAxisTicks.map(function (tick, i) { return (jsxRuntimeExports.jsx("div", { className: yAxisTick$1, children: jsxRuntimeExports.jsx("span", { children: tick }) }, i)); }) }), jsxRuntimeExports.jsxs("div", { className: chartContent$1, children: [jsxRuntimeExports.jsxs("div", { className: chartBars$1, children: [yAxisTicks.map(function (tick, i) { return (jsxRuntimeExports.jsx("div", { className: gridLine$1, style: { bottom: "".concat((i / (yAxisTicks.length - 1)) * 100, "%") } }, "grid-line-".concat(i))); }), data.map(function (group, groupIdx) { return (jsxRuntimeExports.jsx("div", { style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            flex: 1,
                                            cursor: hover ? "pointer" : undefined,
                                            background: hover && hoveredGroupIdx === groupIdx ? "rgba(0,0,0,0.03)" : undefined,
                                            borderRadius: 12,
                                            transition: "background 0.15s",
                                            padding: "0 2px"
                                        }, onMouseEnter: function (e) {
                                            setHoveredGroupIdx(groupIdx);
                                            setMousePos({ x: e.clientX, y: e.clientY });
                                        }, onMouseMove: function (e) { return setMousePos({ x: e.clientX, y: e.clientY }); }, onMouseLeave: function () {
                                            setHoveredGroupIdx(null);
                                            setMousePos(null);
                                        }, children: jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "flex-end", height: "100%", gap: 2 }, children: [group.values.map(function (value, barIdx) { return (jsxRuntimeExports.jsxs("div", { className: barContainer, style: {
                                                        position: "relative",
                                                        margin: 0,
                                                        padding: 0,
                                                        background: "none"
                                                    }, children: [!hover && (jsxRuntimeExports.jsx("span", { className: barLabel, children: value })), jsxRuntimeExports.jsx("div", { className: barColorVariants[colorKeys[barIdx % colorKeys.length]], style: {
                                                                height: "".concat((value / maxBarValue) * chartBarsAndAxisHeight, "px"),
                                                                width: 20,
                                                                minWidth: 6,
                                                                borderRadius: "8px",
                                                                transition: "all 0.2s ease-out",
                                                                margin: 0,
                                                            } })] }, barIdx)); }), hover && hoveredGroupIdx === groupIdx && mousePos &&
                                                    reactDom.createPortal(jsxRuntimeExports.jsxs("div", { style: {
                                                            position: "fixed",
                                                            top: mousePos.y + 12,
                                                            left: mousePos.x + 12,
                                                            background: "#fff",
                                                            color: "#222",
                                                            border: "1px solid #e5e7eb",
                                                            borderRadius: 8,
                                                            padding: "8px 12px",
                                                            fontSize: 13,
                                                            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                                                            whiteSpace: "pre-line",
                                                            pointerEvents: "none",
                                                            maxWidth: 260,
                                                            alignItems: "center",
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            zIndex: 2147483647,
                                                        }, children: [jsxRuntimeExports.jsx("div", { style: { fontSize: 16, fontWeight: 500, color: "#666", marginBottom: 8 }, children: group.title }), jsxRuntimeExports.jsx("div", { style: { display: "flex", flexDirection: "column", gap: 4 }, children: group.values.map(function (value, barIdx) { return (jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [jsxRuntimeExports.jsx("div", { style: {
                                                                                width: 12,
                                                                                height: 12,
                                                                                borderRadius: "100%",
                                                                                background: barColorHex[colorKeys[barIdx % colorKeys.length]],
                                                                                border: "1px solid #e5e7eb",
                                                                                display: "inline-block",
                                                                            } }), jsxRuntimeExports.jsx("span", { style: { color: "#888" }, children: seriesLabels[barIdx] }), jsxRuntimeExports.jsxs("span", { style: { fontWeight: 500 }, children: [value, " ", unit !== null && unit !== void 0 ? unit : "개"] })] }, barIdx)); }) })] }), document.body)] }) }, groupIdx)); }), jsxRuntimeExports.jsx("div", { className: bottomAxis$1 })] }), jsxRuntimeExports.jsx("div", { className: barLabels$1, children: data.map(function (group, groupIdx) { return (jsxRuntimeExports.jsx("span", { className: barLabelItem$1, style: { width: "".concat(100 / data.length, "%") }, children: group.title }, groupIdx)); }) })] })] }), jsxRuntimeExports.jsx("div", { className: chartNote$1, children: "\uAC12\uC740 \uCD5C\uB300\uAC12\uC5D0 \uBE44\uB840\uD558\uC5EC \uD45C\uC2DC\uB429\uB2C8\uB2E4." })] }));
}

var barLabelItem = 'SingleLineChart_barLabelItem__b9e04yl';
var barLabels = 'SingleLineChart_barLabels__b9e04yk';
var bottomAxis = 'SingleLineChart_bottomAxis__b9e04yj';
var chartBars = 'SingleLineChart_chartBars__b9e04y5';
var chartContainer = 'SingleLineChart_chartContainer__b9e04y1';
var chartContent = 'SingleLineChart_chartContent__b9e04y4';
var chartNote = 'SingleLineChart_chartNote__b9e04ym';
var content = 'SingleLineChart_content__b9e04y0';
var gridLine = 'SingleLineChart_gridLine__b9e04y6';
var yAxis = 'SingleLineChart_yAxis__b9e04y2';
var yAxisTick = 'SingleLineChart_yAxisTick__b9e04y3';

function SingleLineChart(_a) {
    var data = _a.data, _b = _a.height, height = _b === void 0 ? 300 : _b, unit = _a.unit;
    var values = data.map(function (d) { return d.value; });
    var labels = data.map(function (d) { return d.title; });
    var maxValue = Math.max.apply(Math, __spreadArray(__spreadArray([], values, false), [1], false));
    var bottomFixedHeight = 100;
    var totalChartContainerHeight = height;
    var chartBarsAndAxisHeight = totalChartContainerHeight - bottomFixedHeight;
    var numberOfTicks = 5;
    var yAxisTicks = Array.from({ length: numberOfTicks }, function (_, i) {
        var value = (maxValue / (numberOfTicks - 1)) * (numberOfTicks - 1 - i);
        return Math.round(value);
    });
    var canvasRef = require$$0.useRef(null);
    var _c = require$$0.useState(null), hoverIdx = _c[0], setHoverIdx = _c[1];
    var _d = require$$0.useState(null), mousePos = _d[0], setMousePos = _d[1];
    var _e = require$$0.useState(null); _e[0]; _e[1];
    var _f = require$$0.useState(null), startIdx = _f[0], setStartIdx = _f[1];
    var _g = require$$0.useState(null), endIdx = _g[0], setEndIdx = _g[1];
    require$$0.useEffect(function () {
        var canvas = canvasRef.current;
        if (!canvas)
            return;
        var dpr = window.devicePixelRatio || 1;
        var cssWidth = canvas.offsetWidth || 400;
        var cssHeight = chartBarsAndAxisHeight;
        canvas.width = cssWidth * dpr;
        canvas.height = cssHeight * dpr;
        var ctx = canvas.getContext("2d");
        if (!ctx)
            return;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.scale(dpr, dpr);
        // 선택된 구간 배경 (startIdx, endIdx)
        if (startIdx !== null &&
            endIdx !== null &&
            startIdx >= 0 &&
            endIdx >= 0 &&
            startIdx < values.length &&
            endIdx < values.length) {
            var s = Math.min(startIdx, endIdx);
            var e = Math.max(startIdx, endIdx);
            // 기본 구간 배경
            ctx.save();
            ctx.fillStyle = "rgba(37,99,235,0.08)";
            ctx.beginPath();
            for (var i = s; i <= e; i++) {
                var x = ((i + 0.5) / labels.length) * cssWidth;
                var y = cssHeight - (values[i] / maxValue) * cssHeight;
                if (i === s)
                    ctx.moveTo(x, y);
                else
                    ctx.lineTo(x, y);
            }
            for (var i = e; i >= s; i--) {
                var x = ((i + 0.5) / labels.length) * cssWidth;
                ctx.lineTo(x, cssHeight);
            }
            ctx.closePath();
            ctx.fill();
            ctx.restore();
            // hoverIdx가 구간 내에 있으면 진한 색으로 덮어씌움
            if (hoverIdx !== null && hoverIdx >= s && hoverIdx <= e) {
                ctx.save();
                ctx.fillStyle = "rgba(37,99,235,0.18)";
                ctx.beginPath();
                for (var i = s; i <= e; i++) {
                    var x = ((i + 0.5) / labels.length) * cssWidth;
                    var y = cssHeight - (values[i] / maxValue) * cssHeight;
                    if (i === s)
                        ctx.moveTo(x, y);
                    else
                        ctx.lineTo(x, y);
                }
                for (var i = e; i >= s; i--) {
                    var x = ((i + 0.5) / labels.length) * cssWidth;
                    ctx.lineTo(x, cssHeight);
                }
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            }
        }
        else if (startIdx !== null &&
            endIdx === null &&
            hoverIdx !== null &&
            startIdx >= 0 &&
            hoverIdx >= 0 &&
            startIdx < values.length &&
            hoverIdx < values.length) {
            var s = Math.min(startIdx, hoverIdx);
            var e = Math.max(startIdx, hoverIdx);
            ctx.save();
            ctx.fillStyle = "rgba(37,99,235,0.08)";
            ctx.beginPath();
            for (var i = s; i <= e; i++) {
                var x = ((i + 0.5) / labels.length) * cssWidth;
                var y = cssHeight - (values[i] / maxValue) * cssHeight;
                if (i === s)
                    ctx.moveTo(x, y);
                else
                    ctx.lineTo(x, y);
            }
            for (var i = e; i >= s; i--) {
                var x = ((i + 0.5) / labels.length) * cssWidth;
                ctx.lineTo(x, cssHeight);
            }
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
        ctx.save();
        ctx.strokeStyle = "#2563eb";
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.beginPath();
        values.forEach(function (v, i) {
            var x = ((i + 0.5) / labels.length) * cssWidth;
            var y = cssHeight - (v / maxValue) * cssHeight;
            if (i === 0)
                ctx.moveTo(x, y);
            else
                ctx.lineTo(x, y);
        });
        ctx.stroke();
        ctx.restore();
        ctx.save();
        ctx.fillStyle = "#2563eb";
        values.forEach(function (v, i) {
            var x = ((i + 0.5) / labels.length) * cssWidth;
            var y = cssHeight - (v / maxValue) * cssHeight;
            ctx.beginPath();
            ctx.arc(x, y, 1, 0, 2 * Math.PI);
            ctx.fill();
        });
        ctx.restore();
        // 1. 아무것도 클릭되지 않았을 때: hoverIdx가 있으면 해당 구간만 회색
        if (startIdx === null && endIdx === null && hoverIdx !== null && hoverIdx >= 0 && hoverIdx < values.length) {
            ctx.save();
            ctx.fillStyle = "rgba(180,180,180,0.18)";
            ctx.beginPath();
            // 곡선 위쪽: hoverIdx만
            var x = ((hoverIdx + 0.5) / labels.length) * cssWidth;
            var y = cssHeight - (values[hoverIdx] / maxValue) * cssHeight;
            ctx.moveTo(x, y);
            ctx.lineTo(x, cssHeight);
            ctx.lineTo(x, cssHeight);
            ctx.closePath();
            ctx.arc(x, y, 12, Math.PI, 0, true);
            ctx.fill();
            ctx.restore();
        }
        // 2. 두 인덱스가 모두 차있을 때: hoverIdx가 있으면 해당 구간만 회색
        else if (startIdx !== null && endIdx !== null && hoverIdx !== null && hoverIdx >= 0 && hoverIdx < values.length) {
            // 기존 선택 구간 배경
            var s = Math.min(startIdx, endIdx);
            var e = Math.max(startIdx, endIdx);
            ctx.save();
            ctx.fillStyle = "rgba(37,99,235,0.08)";
            ctx.beginPath();
            for (var i = s; i <= e; i++) {
                var x_1 = ((i + 0.5) / labels.length) * cssWidth;
                var y_1 = cssHeight - (values[i] / maxValue) * cssHeight;
                if (i === s)
                    ctx.moveTo(x_1, y_1);
                else
                    ctx.lineTo(x_1, y_1);
            }
            for (var i = e; i >= s; i--) {
                var x_2 = ((i + 0.5) / labels.length) * cssWidth;
                ctx.lineTo(x_2, cssHeight);
            }
            ctx.closePath();
            ctx.fill();
            ctx.restore();
            // hoverIdx가 있으면 해당 구간만 회색으로 덮어씌움
            ctx.save();
            ctx.fillStyle = "rgba(180,180,180,0.18)";
            ctx.beginPath();
            var x = ((hoverIdx + 0.5) / labels.length) * cssWidth;
            var y = cssHeight - (values[hoverIdx] / maxValue) * cssHeight;
            ctx.moveTo(x, y);
            ctx.lineTo(x, cssHeight);
            ctx.lineTo(x, cssHeight);
            ctx.closePath();
            ctx.arc(x, y, 12, Math.PI, 0, true);
            ctx.fill();
            ctx.restore();
        }
        // 3. 구간 드래그 중일 때(기존 로직)
        else if (startIdx !== null && endIdx === null && hoverIdx !== null &&
            startIdx >= 0 && hoverIdx >= 0 &&
            startIdx < values.length && hoverIdx < values.length) {
            var s = Math.min(startIdx, hoverIdx);
            var e = Math.max(startIdx, hoverIdx);
            ctx.save();
            ctx.fillStyle = "rgba(37,99,235,0.08)";
            ctx.beginPath();
            for (var i = s; i <= e; i++) {
                var x = ((i + 0.5) / labels.length) * cssWidth;
                var y = cssHeight - (values[i] / maxValue) * cssHeight;
                if (i === s)
                    ctx.moveTo(x, y);
                else
                    ctx.lineTo(x, y);
            }
            for (var i = e; i >= s; i--) {
                var x = ((i + 0.5) / labels.length) * cssWidth;
                ctx.lineTo(x, cssHeight);
            }
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
    }, [values, labels, maxValue, height, chartBarsAndAxisHeight, hoverIdx, startIdx, endIdx]);
    // 마우스 호버 핸들러
    function handleMouseMove(e) {
        var rect = e.currentTarget.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var width = rect.width;
        var idx = Math.floor((x / width) * labels.length);
        setHoverIdx(idx);
        setMousePos({ x: e.clientX, y: e.clientY });
    }
    function handleMouseLeave() {
        setHoverIdx(null);
        setMousePos(null);
    }
    function handleClick(e) {
        var rect = e.currentTarget.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var width = rect.width;
        var idx = Math.floor((x / width) * labels.length);
        if (startIdx === null || (startIdx !== null && endIdx !== null)) {
            setStartIdx(idx);
            setEndIdx(null);
        }
        else if (startIdx !== null && endIdx === null) {
            setEndIdx(idx);
        }
    }
    return (jsxRuntimeExports.jsxs("div", { className: content, style: { height: height }, children: [jsxRuntimeExports.jsxs("div", { className: chartContainer, children: [jsxRuntimeExports.jsx("div", { className: yAxis, children: yAxisTicks.map(function (tick, i) { return (jsxRuntimeExports.jsx("div", { className: yAxisTick, children: jsxRuntimeExports.jsx("span", { children: tick }) }, i)); }) }), jsxRuntimeExports.jsxs("div", { className: chartContent, children: [jsxRuntimeExports.jsxs("div", { className: chartBars, style: { position: "relative" }, children: [yAxisTicks.map(function (tick, i) { return (jsxRuntimeExports.jsx("div", { className: gridLine, style: { bottom: "".concat((i / (yAxisTicks.length - 1)) * 100, "%") } }, "grid-line-".concat(i))); }), jsxRuntimeExports.jsx("canvas", { ref: canvasRef, width: 400, height: chartBarsAndAxisHeight, style: {
                                            width: "100%",
                                            height: chartBarsAndAxisHeight,
                                            position: "absolute",
                                            left: 0,
                                            bottom: 0,
                                            pointerEvents: "auto",
                                            zIndex: 1,
                                        }, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave, onClick: handleClick }), (hoverIdx !== null && mousePos && startIdx !== null && endIdx !== null && hoverIdx >= Math.min(startIdx, endIdx) && hoverIdx <= Math.max(startIdx, endIdx)) && (jsxRuntimeExports.jsxs("div", { style: {
                                            position: "fixed",
                                            top: mousePos.y + 12,
                                            left: mousePos.x + 12,
                                            background: "#fff",
                                            color: "#222",
                                            border: "1px solid #e5e7eb",
                                            borderRadius: 8,
                                            padding: "8px 12px",
                                            fontSize: 13,
                                            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                                            whiteSpace: "pre-line",
                                            pointerEvents: "none",
                                            maxWidth: 260,
                                            alignItems: "center",
                                            display: "flex",
                                            flexDirection: "column",
                                            zIndex: 2147483647,
                                        }, children: [jsxRuntimeExports.jsx("div", { style: {
                                                    fontSize: 16,
                                                    fontWeight: 500,
                                                    color: "#666",
                                                    marginBottom: 8,
                                                }, children: labels[hoverIdx] }), jsxRuntimeExports.jsxs("div", { style: { fontWeight: 500 }, children: [values[hoverIdx], " ", unit !== null && unit !== void 0 ? unit : ""] }), jsxRuntimeExports.jsxs("div", { style: { marginTop: 4, fontSize: 12, color: "#666" }, children: ["\uD569\uACC4: ", values.slice(Math.min(startIdx, endIdx), Math.max(startIdx, endIdx) + 1).reduce(function (a, b) { return a + b; }, 0), " ", unit !== null && unit !== void 0 ? unit : "", jsxRuntimeExports.jsx("br", {}), "\uD3C9\uADE0: ", (values.slice(Math.min(startIdx, endIdx), Math.max(startIdx, endIdx) + 1).reduce(function (a, b) { return a + b; }, 0) /
                                                        (Math.abs(endIdx - startIdx) + 1)).toFixed(2), " ", unit !== null && unit !== void 0 ? unit : ""] })] })), jsxRuntimeExports.jsx("div", { className: bottomAxis })] }), jsxRuntimeExports.jsx("div", { className: barLabels, children: labels.map(function (label, i) { return (jsxRuntimeExports.jsx("span", { className: barLabelItem, style: { width: "".concat(100 / labels.length, "%") }, children: label }, i)); }) })] })] }), jsxRuntimeExports.jsx("div", { className: chartNote, children: "\uAC12\uC740 \uCD5C\uB300\uAC12\uC5D0 \uBE44\uB840\uD558\uC5EC \uD45C\uC2DC\uB429\uB2C8\uB2E4." })] }));
}

exports.Chart = BarChart;
exports.MultiBarChart = MultiBarChart;
exports.SingleLineChart = SingleLineChart;
//# sourceMappingURL=index.js.map

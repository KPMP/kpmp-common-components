/*! For license information please see index.js.LICENSE.txt */
(()=>{var e={318:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},184:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&e.push(i)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var s in n)r.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},141:(e,t,n)=>{"use strict";var r=n(318);t.__esModule=!0,t.default=function(e,t){e.classList?e.classList.add(t):(0,o.default)(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))};var o=r(n(404));e.exports=t.default},404:(e,t)=>{"use strict";t.__esModule=!0,t.default=function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")},e.exports=t.default},602:e=>{"use strict";function t(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}e.exports=function(e,n){e.classList?e.classList.remove(n):"string"==typeof e.className?e.className=t(e.className,n):e.setAttribute("class",t(e.className&&e.className.baseVal||"",n))}},703:(e,t,n)=>{"use strict";var r=n(414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},697:(e,t,n)=>{e.exports=n(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},871:(e,t,n)=>{"use strict";function r(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function o(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}.bind(this))}function a(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}function i(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var n=null,i=null,s=null;if("function"==typeof t.componentWillMount?n="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?i="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(i="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?s="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(s="UNSAFE_componentWillUpdate"),null!==n||null!==i||null!==s){var l=e.displayName||e.name,c="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+l+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==i?"\n  "+i:"")+(null!==s?"\n  "+s:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=r,t.componentWillReceiveProps=o),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=a;var p=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var r=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;p.call(this,e,t,r)}}return e}n.r(t),n.d(t,{polyfill:()=>i}),r.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,a.__suppressDeprecationWarning=!0},129:(e,t,n)=>{"use strict";t.__esModule=!0,t.default=void 0,function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}t.default=e}(n(697));var r=s(n(141)),o=s(n(602)),a=s(n(258)),i=s(n(644));function s(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}n(726);var c=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,r.default)(e,t)}))},p=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,o.default)(e,t)}))},u=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).onEnter=function(e,n){var r=t.getClassNames(n?"appear":"enter").className;t.removeClasses(e,"exit"),c(e,r),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var r=t.getClassNames(n?"appear":"enter").activeClassName;t.reflowAndAddClass(e,r),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var r=t.getClassNames("appear").doneClassName,o=t.getClassNames("enter").doneClassName,a=n?r+" "+o:o;t.removeClasses(e,n?"appear":"enter"),c(e,a),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.getClassNames("exit").className;t.removeClasses(e,"appear"),t.removeClasses(e,"enter"),c(e,n),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.getClassNames("exit").activeClassName;t.reflowAndAddClass(e,n),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.getClassNames("exit").doneClassName;t.removeClasses(e,"exit"),c(e,n),t.props.onExited&&t.props.onExited(e)},t.getClassNames=function(e){var n=t.props.classNames,r="string"==typeof n,o=r?(r&&n?n+"-":"")+e:n[e];return{className:o,activeClassName:r?o+"-active":n[e+"Active"],doneClassName:r?o+"-done":n[e+"Done"]}},t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.removeClasses=function(e,t){var n=this.getClassNames(t),r=n.className,o=n.activeClassName,a=n.doneClassName;r&&p(e,r),o&&p(e,o),a&&p(e,a)},o.reflowAndAddClass=function(e,t){t&&(e&&e.scrollTop,c(e,t))},o.render=function(){var e=l({},this.props);return delete e.classNames,a.default.createElement(i.default,l({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},r}(a.default.Component);u.defaultProps={classNames:""},u.propTypes={};var d=u;t.default=d,e.exports=t.default},93:(e,t,n)=>{"use strict";t.__esModule=!0,t.default=void 0,i(n(697));var r=i(n(258)),o=n(235),a=i(n(381));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var t,n;function i(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).handleEnter=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onEnter",0,n)},t.handleEntering=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onEntering",0,n)},t.handleEntered=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onEntered",0,n)},t.handleExit=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onExit",1,n)},t.handleExiting=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onExiting",1,n)},t.handleExited=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onExited",1,n)},t}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=i.prototype;return s.handleLifecycle=function(e,t,n){var a,i=this.props.children,s=r.default.Children.toArray(i)[t];s.props[e]&&(a=s.props)[e].apply(a,n),this.props[e]&&this.props[e]((0,o.findDOMNode)(this))},s.render=function(){var e=this.props,t=e.children,n=e.in,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["children","in"]),i=r.default.Children.toArray(t),s=i[0],l=i[1];return delete o.onEnter,delete o.onEntering,delete o.onEntered,delete o.onExit,delete o.onExiting,delete o.onExited,r.default.createElement(a.default,o,n?r.default.cloneElement(s,{key:"first",onEnter:this.handleEnter,onEntering:this.handleEntering,onEntered:this.handleEntered}):r.default.cloneElement(l,{key:"second",onEnter:this.handleExit,onEntering:this.handleExiting,onEntered:this.handleExited}))},i}(r.default.Component);s.propTypes={};var l=s;t.default=l,e.exports=t.default},644:(e,t,n)=>{"use strict";t.__esModule=!0,t.default=t.EXITING=t.ENTERED=t.ENTERING=t.EXITED=t.UNMOUNTED=void 0,function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}t.default=e}(n(697));var r=s(n(258)),o=s(n(235)),a=n(871),i=(n(726),s(n(882)));function s(e){return e&&e.__esModule?e:{default:e}}var l="unmounted";t.UNMOUNTED=l;var c="exited";t.EXITED=c;var p="entering";t.ENTERING=p;var u="entered";t.ENTERED=u;var d="exiting";t.EXITING=d;var f=function(e){var t,n;function a(t,n){var r;r=e.call(this,t,n)||this;var o,a=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?a?(o=c,r.appearStatus=p):o=u:o=t.unmountOnExit||t.mountOnEnter?l:c,r.state={status:o},r.nextCallback=null,r}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.getDerivedStateFromProps=function(e,t){return e.in&&t.status===l?{status:c}:null};var s=a.prototype;return s.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},s.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==p&&n!==u&&(t=p):n!==p&&n!==u||(t=d)}this.updateStatus(!1,t)},s.componentWillUnmount=function(){this.cancelNextCallback()},s.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},s.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=o.default.findDOMNode(this);t===p?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===c&&this.setState({status:l})},s.performEnter=function(e,t){var n=this,r=this.props.enter,o=this.context?this.context.isMounting:t,a=this.getTimeouts(),i=o?a.appear:a.enter;t||r?(this.props.onEnter(e,o),this.safeSetState({status:p},(function(){n.props.onEntering(e,o),n.onTransitionEnd(e,i,(function(){n.safeSetState({status:u},(function(){n.props.onEntered(e,o)}))}))}))):this.safeSetState({status:u},(function(){n.props.onEntered(e)}))},s.performExit=function(e){var t=this,n=this.props.exit,r=this.getTimeouts();n?(this.props.onExit(e),this.safeSetState({status:d},(function(){t.props.onExiting(e),t.onTransitionEnd(e,r.exit,(function(){t.safeSetState({status:c},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:c},(function(){t.props.onExited(e)}))},s.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},s.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},s.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},s.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var r=null==t&&!this.props.addEndListener;e&&!r?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},s.render=function(){var e=this.state.status;if(e===l)return null;var t=this.props,n=t.children,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["children"]);if(delete o.in,delete o.mountOnEnter,delete o.unmountOnExit,delete o.appear,delete o.enter,delete o.exit,delete o.timeout,delete o.addEndListener,delete o.onEnter,delete o.onEntering,delete o.onEntered,delete o.onExit,delete o.onExiting,delete o.onExited,"function"==typeof n)return r.default.createElement(i.default.Provider,{value:null},n(e,o));var a=r.default.Children.only(n);return r.default.createElement(i.default.Provider,{value:null},r.default.cloneElement(a,o))},a}(r.default.Component);function h(){}f.contextType=i.default,f.propTypes={},f.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:h,onEntering:h,onEntered:h,onExit:h,onExiting:h,onExited:h},f.UNMOUNTED=0,f.EXITED=1,f.ENTERING=2,f.ENTERED=3,f.EXITING=4;var m=(0,a.polyfill)(f);t.default=m},381:(e,t,n)=>{"use strict";t.__esModule=!0,t.default=void 0,s(n(697));var r=s(n(258)),o=n(871),a=s(n(882)),i=n(537);function s(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},u=function(e){var t,n;function o(t,n){var r,o=(r=e.call(this,t,n)||this).handleExited.bind(c(c(r)));return r.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},r}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=o.prototype;return s.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},s.componentWillUnmount=function(){this.mounted=!1},o.getDerivedStateFromProps=function(e,t){var n=t.children,r=t.handleExited;return{children:t.firstRender?(0,i.getInitialChildMapping)(e,r):(0,i.getNextChildMapping)(e,n,r),firstRender:!1}},s.handleExited=function(e,t){var n=(0,i.getChildMapping)(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=l({},t.children);return delete n[e.key],{children:n}})))},s.render=function(){var e=this.props,t=e.component,n=e.childFactory,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["component","childFactory"]),i=this.state.contextValue,s=p(this.state.children).map(n);return delete o.appear,delete o.enter,delete o.exit,null===t?r.default.createElement(a.default.Provider,{value:i},s):r.default.createElement(a.default.Provider,{value:i},r.default.createElement(t,o,s))},o}(r.default.Component);u.propTypes={},u.defaultProps={component:"div",childFactory:function(e){return e}};var d=(0,o.polyfill)(u);t.default=d,e.exports=t.default},882:(e,t,n)=>{"use strict";var r;t.__esModule=!0,t.default=void 0;var o=((r=n(258))&&r.__esModule?r:{default:r}).default.createContext(null);t.default=o,e.exports=t.default},317:(e,t,n)=>{"use strict";var r=s(n(129)),o=s(n(93)),a=s(n(381)),i=s(n(644));function s(e){return e&&e.__esModule?e:{default:e}}e.exports={Transition:i.default,TransitionGroup:a.default,ReplaceTransition:o.default,CSSTransition:r.default}},537:(e,t,n)=>{"use strict";t.__esModule=!0,t.getChildMapping=o,t.mergeChildMappings=a,t.getInitialChildMapping=function(e,t){return o(e.children,(function(n){return(0,r.cloneElement)(n,{onExited:t.bind(null,n),in:!0,appear:i(n,"appear",e),enter:i(n,"enter",e),exit:i(n,"exit",e)})}))},t.getNextChildMapping=function(e,t,n){var s=o(e.children),l=a(t,s);return Object.keys(l).forEach((function(o){var a=l[o];if((0,r.isValidElement)(a)){var c=o in t,p=o in s,u=t[o],d=(0,r.isValidElement)(u)&&!u.props.in;!p||c&&!d?p||!c||d?p&&c&&(0,r.isValidElement)(u)&&(l[o]=(0,r.cloneElement)(a,{onExited:n.bind(null,a),in:u.props.in,exit:i(a,"exit",e),enter:i(a,"enter",e)})):l[o]=(0,r.cloneElement)(a,{in:!1}):l[o]=(0,r.cloneElement)(a,{onExited:n.bind(null,a),in:!0,exit:i(a,"exit",e),enter:i(a,"enter",e)})}})),l};var r=n(258);function o(e,t){var n=Object.create(null);return e&&r.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,r.isValidElement)(e)?t(e):e}(e)})),n}function a(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,o=Object.create(null),a=[];for(var i in e)i in t?a.length&&(o[i]=a,a=[]):a.push(i);var s={};for(var l in t){if(o[l])for(r=0;r<o[l].length;r++){var c=o[l][r];s[o[l][r]]=n(c)}s[l]=n(l)}for(r=0;r<a.length;r++)s[a[r]]=n(a[r]);return s}function i(e,t,n){return null!=n[t]?n[t]:e.props[t]}},726:(e,t,n)=>{"use strict";var r;t.__esModule=!0,t.classNamesShape=t.timeoutsShape=void 0,(r=n(697))&&r.__esModule,t.timeoutsShape=null,t.classNamesShape=null},258:e=>{"use strict";e.exports=require("react")},235:e=>{"use strict";e.exports=require("react-dom")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{"use strict";n.r(r),n.d(r,{NavBar:()=>oe,NavFooter:()=>se,isExpectedPath:()=>le});var e=n(258),t=n.n(e);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var i=n(697),s=n.n(i),l=n(184),c=n.n(l);function p(e,t){return void 0===e&&(e=""),void 0===t&&(t=undefined),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}var u="object"==typeof window&&window.Element||function(){};s().oneOfType([s().string,s().func,function(e,t,n){if(!(e[t]instanceof u))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},s().shape({current:s().any})]);var d=s().oneOfType([s().func,s().string,s().shape({$$typeof:s().symbol,render:s().func}),s().arrayOf(s().oneOfType([s().func,s().string,s().shape({$$typeof:s().symbol,render:s().func})]))]),f=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"];"undefined"==typeof window||!window.document||window.document.createElement;var h=["className","cssModule","fluid","tag"],m={tag:d,fluid:s().oneOfType([s().bool,s().string]),className:s().string,cssModule:s().object},v=function(e){var n=e.className,r=e.cssModule,i=e.fluid,s=e.tag,l=a(e,h),u="container";!0===i?u="container-fluid":i&&(u="container-"+i);var d=p(c()(n,u),r);return t().createElement(s,o({},l,{className:d}))};v.propTypes=m,v.defaultProps={tag:"div"};const E=v;var g=["expand","className","cssModule","light","dark","fixed","sticky","color","tag"],y={light:s().bool,dark:s().bool,full:s().bool,fixed:s().string,sticky:s().string,color:s().string,role:s().string,tag:d,className:s().string,cssModule:s().object,expand:s().oneOfType([s().bool,s().string])},x=function(e){var n,r=e.expand,i=e.className,s=e.cssModule,l=e.light,u=e.dark,d=e.fixed,f=e.sticky,h=e.color,m=e.tag,v=a(e,g),E=p(c()(i,"navbar",function(e){return!1!==e&&(!0===e||"xs"===e?"navbar-expand":"navbar-expand-"+e)}(r),((n={"navbar-light":l,"navbar-dark":u})["bg-"+h]=h,n["fixed-"+d]=d,n["sticky-"+f]=f,n)),s);return t().createElement(m,o({},v,{className:E}))};x.propTypes=y,x.defaultProps={tag:"nav",expand:!1};const b=x;var N=["className","cssModule","tag"],O={tag:d,className:s().string,cssModule:s().object},_=function(e){var n=e.className,r=e.cssModule,i=e.tag,s=a(e,N),l=p(c()(n,"navbar-brand"),r);return t().createElement(i,o({},s,{className:l}))};_.propTypes=O,_.defaultProps={tag:"a"};const C=_;var S=["className","cssModule","children","tag"],j={tag:d,type:s().string,className:s().string,cssModule:s().object,children:s().node},M=function(e){var n=e.className,r=e.cssModule,i=e.children,s=e.tag,l=a(e,S),u=p(c()(n,"navbar-toggler"),r);return t().createElement(s,o({"aria-label":"Toggle navigation"},l,{className:u}),i||t().createElement("span",{className:p("navbar-toggler-icon",r)}))};M.propTypes=j,M.defaultProps={tag:"button",type:"button"};const T=M;function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}function k(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,w(e,t)}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A,R=n(317),U=["tag","isOpen","className","navbar","cssModule","children","innerRef"];function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){D(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F=W(W({},R.Transition.propTypes),{},{isOpen:s().bool,children:s().oneOfType([s().arrayOf(s().node),s().node]),tag:d,className:s().node,navbar:s().bool,cssModule:s().object,innerRef:s().oneOfType([s().func,s().string,s().object])}),L=W(W({},R.Transition.defaultProps),{},{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:350}),V=((A={}).entering="collapsing",A.entered="collapse show",A.exiting="collapsing",A.exited="collapse",A);function B(e){return e.scrollHeight}var G=function(e){function n(t){var n;return(n=e.call(this,t)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(e){n[e]=n[e].bind(P(n))})),n}k(n,e);var r=n.prototype;return r.onEntering=function(e,t){this.setState({height:B(e)}),this.props.onEntering(e,t)},r.onEntered=function(e,t){this.setState({height:null}),this.props.onEntered(e,t)},r.onExit=function(e){this.setState({height:B(e)}),this.props.onExit(e)},r.onExiting=function(e){e.offsetHeight,this.setState({height:0}),this.props.onExiting(e)},r.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},r.render=function(){var e,n,r,i=this,s=this.props,l=s.tag,u=s.isOpen,d=s.className,h=s.navbar,m=s.cssModule,v=s.children,E=(s.innerRef,a(s,U)),g=this.state.height,y=function(e,t){for(var n,r=Array.isArray(t)?t:[t],o=r.length,a={};o>0;)a[n=r[o-=1]]=e[n];return a}(E,f),x=(e=E,n=f,r={},Object.keys(e).forEach((function(t){-1===n.indexOf(t)&&(r[t]=e[t])})),r);return t().createElement(R.Transition,o({},y,{in:u,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(e){var n=function(e){return V[e]||"collapse"}(e),r=p(c()(d,n,h&&"navbar-collapse"),m),a=null===g?null:{height:g};return t().createElement(l,o({},x,{style:W(W({},x.style),a),className:r,ref:i.props.innerRef}),v)}))},n}(e.Component);G.propTypes=F,G.defaultProps=L;const $=G;var X=["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"],H={tabs:s().bool,pills:s().bool,vertical:s().oneOfType([s().bool,s().string]),horizontal:s().string,justified:s().bool,fill:s().bool,navbar:s().bool,card:s().bool,tag:d,className:s().string,cssModule:s().object},q=function(e){var n=e.className,r=e.cssModule,i=e.tabs,s=e.pills,l=e.vertical,u=e.horizontal,d=e.justified,f=e.fill,h=e.navbar,m=e.card,v=e.tag,E=a(e,X),g=p(c()(n,h?"navbar-nav":"nav",!!u&&"justify-content-"+u,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(l),{"nav-tabs":i,"card-header-tabs":m&&i,"nav-pills":s,"card-header-pills":m&&s,"nav-justified":d,"nav-fill":f}),r);return t().createElement(v,o({},E,{className:g}))};q.propTypes=H,q.defaultProps={tag:"ul",vertical:!1};const z=q;var K=["className","cssModule","active","tag"],Y={tag:d,active:s().bool,className:s().string,cssModule:s().object},J=function(e){var n=e.className,r=e.cssModule,i=e.active,s=e.tag,l=a(e,K),u=p(c()(n,"nav-item",!!i&&"active"),r);return t().createElement(s,o({},l,{className:u}))};J.propTypes=Y,J.defaultProps={tag:"li"};const Q=J;var Z=["className","cssModule","active","tag","innerRef"],ee={tag:d,innerRef:s().oneOfType([s().object,s().func,s().string]),disabled:s().bool,active:s().bool,className:s().string,cssModule:s().object,onClick:s().func,href:s().any},te=function(e){function n(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(P(n)),n}k(n,e);var r=n.prototype;return r.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},r.render=function(){var e=this.props,n=e.className,r=e.cssModule,i=e.active,s=e.tag,l=e.innerRef,u=a(e,Z),d=p(c()(n,"nav-link",{disabled:u.disabled,active:i}),r);return t().createElement(s,o({},u,{ref:l,onClick:this.onClick,className:d}))},n}(t().Component);te.propTypes=ee,te.defaultProps={tag:"a"};const ne=te,re=n=>{const[r,o]=(0,e.useState)(!1);return t().createElement(E,null,t().createElement(b,{id:"navbar",className:"fixed-top px-1 py-1 mb-3 container-fluid",expand:"md",light:!0},t().createElement(C,{href:"/",className:"ml-2 text-dark d-flex align-items-center"},t().createElement("img",{src:"/img/logo.png",alt:"Kidney Tissue Atlas",className:"logo"}),t().createElement("span",{id:"title-text",className:"ml-2"},"Kidney Tissue Atlas")),t().createElement(T,{onClick:()=>o(!r)}),t().createElement($,{isOpen:r,navbar:!0},t().createElement(z,{className:"mr-auto",navbar:!0},t().createElement(Q,{className:("/"===window.location.pathname?"active":"")+" px-1"},t().createElement(ne,{href:"/"},t().createElement("span",{className:"nav-text px-1"},"Dashboard (Home)"))),t().createElement(Q,{className:("explorer"===window.location.pathname.replaceAll("/","")?"active":"")+" px-1"},t().createElement(ne,{href:"/explorer"},t().createElement("span",{className:"nav-text px-1"},"Explorer"))),t().createElement(Q,{className:("repository"===window.location.pathname.replaceAll("/","")?"active":"")+" px-1"},t().createElement(ne,{href:"/repository"},t().createElement("span",{className:"nav-text px-1"},"Repository")))),t().createElement(z,null,t().createElement(Q,{className:"test px-1"},t().createElement(ne,{rel:"noreferrer",target:"_blank",href:"https://www.kpmp.org/help-docs/data"},"Help"))))))},oe=e=>t().createElement("div",null,"atlas"==e.app&&t().createElement(re,null));class ae extends e.Component{render(){return t().createElement("div",{id:"footer",className:"fixed-bottom px-3 py-1"},t().createElement("a",{className:"text-light small",href:"https://kpmp.org",target:"_blank",rel:"noopener noreferrer"},"© Kidney Precision Medicine Project"))}}const ie=ae,se=e=>t().createElement("div",null,"atlas"==e.app&&t().createElement(ie,null));function le(e,t){return e===t||""!=t.replace(/\//g,"")&&e.split("/")[1].indexOf(t.replace(/\//g,""))>=0}})(),module.exports=r})();
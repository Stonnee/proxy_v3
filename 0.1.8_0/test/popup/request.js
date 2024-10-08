/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /npm/request-promise@4.2.6/lib/rp.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
"use strict";var Bluebird=require("bluebird").getNewLibraryCopy(),configure=require("request-promise-core/configure/request2"),stealthyRequire=require("stealthy-require");try{var request=stealthyRequire(require.cache,function(){return require("request")},function(){require("tough-cookie")},module)}catch(e){var EOL=require("os").EOL;throw console.error(EOL+"###"+EOL+'### The "request" library is not installed automatically anymore.'+EOL+'### But is a dependency of "request-promise".'+EOL+"### Please install it with:"+EOL+"### npm install request --save"+EOL+"###"+EOL),e}Bluebird.config({cancellation:!0}),configure({request:request,PromiseImpl:Bluebird,expose:["then","catch","finally","cancel","promise"],constructorMixin:function(e,r,t){var i=this;t(function(){i.abort()})}}),request.bindCLS=function(){throw new Error("CLS support was dropped. To get it back read: https://github.com/request/request-promise/wiki/Getting-Back-Support-for-Continuation-Local-Storage")},module.exports=request;
//# sourceMappingURL=/sm/6628d05bd7098bcb25760651c9f8622975ac16bc1d8b44fe433e2dce198bd3b8.map
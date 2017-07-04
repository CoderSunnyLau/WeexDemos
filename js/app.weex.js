// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _login = __webpack_require__(4);

	var _login2 = _interopRequireDefault(_login);

	var _foo = __webpack_require__(9);

	var _foo2 = _interopRequireDefault(_foo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_login2.default.el = '#root';
	exports.default = new Vue(_login2.default);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(5)
	)

	/* script */
	__vue_exports__ = __webpack_require__(6)

	/* template */
	var __vue_template__ = __webpack_require__(8)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\weex\\weex-demo\\src\\login.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-549658b1"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "flexDirection": "column",
	    "alignItems": "center"
	  },
	  "mainPic": {
	    "width": 750,
	    "height": 220
	  },
	  "login-wrapper": {
	    "marginTop": 100,
	    "flexDirection": "column",
	    "alignItems": "center"
	  },
	  "warning-msg": {
	    "fontSize": 35,
	    "height": 80,
	    "marginBottom": 20,
	    "color": "#FF0000",
	    "lineHeight": 80
	  },
	  "login-row": {
	    "width": 750,
	    "height": 100,
	    "marginBottom": 10,
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "input": {
	    "width": 550,
	    "height": 100,
	    "borderWidth": 1,
	    "borderColor": "#CCCCCC",
	    "borderRadius": 10,
	    "paddingLeft": 20,
	    "fontSize": 35
	  },
	  "login-btn": {
	    "width": 550,
	    "height": 100,
	    "marginTop": 50,
	    "backgroundColor": "#FF5500",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "borderRadius": 10
	  },
	  "login-text": {
	    "color": "#FFFFFF",
	    "fontSize": 40
	  }
	}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _md = __webpack_require__(7);

	var _md2 = _interopRequireDefault(_md);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var stream = weex.requireModule('stream'); //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var storage = weex.requireModule('storage');
	var navigator = weex.requireModule('navigator');

	exports.default = {
	  data: function data() {
	    return {
	      mainSrc: 'http://m.ry600.com/snapshot/vms/site/di/di70684438lrfavs/82ojywir5vqogktm/image/login_ad.jpg',
	      userName: '',
	      password: '',
	      warningMsg: ''
	    };
	  },

	  methods: {
	    login: function login() {
	      var vm = this;

	      // 登录校验
	      if (vm.userName == '') {
	        vm.warningMsg = '请输入用戶名';
	        return false;
	      } else if (vm.password == '') {
	        vm.warningMsg = '请输入密码';
	        return false;
	      } else {
	        vm.warningMsg = '';
	      }

	      var psd = (0, _md2.default)(vm.password);
	      // console.log(psd);
	      // 登录
	      stream.fetch({
	        method: 'GET',
	        type: 'json',
	        url: 'https://www.yr600.com/fish/login?userName=' + vm.userName + '&password=' + psd + '&_=' + new Date().getTime()
	      }, function (res) {
	        if (res.ok) {
	          if (res.data.success) {
	            // 登录成功
	            vm.warningMsg = '登录成功';
	            storage.setItem('serviceId', res.data._serviceId, function (event) {
	              storage.getItem('serviceId', function (event) {
	                console.log('get value:', event.data);
	              });
	            });

	            // 页面跳转
	            var url = vm.$getConfig().bundleUrl;
	            url = url.split('/').slice(0, -1).join('/') + '/account.weex.js';
	            var params = {
	              'url': 'https://codersunnylau.github.io/WeexDemos/js/myAccount.weex.js',
	              'animated': 'true'
	            };
	            navigator.push(params, function () {});
	          } else {
	            // 登录失败
	            vm.warningMsg = res.data.message;
	          }
	        } else {
	          vm.warningMsg = '网络错误';
	        }
	      });
	    }
	  },
	  created: function created() {
	    console.log("start");
	  }
	};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	/*
	 * JavaScript MD5 1.0.1
	 * https://github.com/blueimp/JavaScript-MD5
	 *
	 * Copyright 2011, Sebastian Tschan
	 * https://blueimp.net
	 *
	 * Licensed under the MIT license:
	 * http://www.opensource.org/licenses/MIT
	 * 
	 * Based on
	 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
	 * Digest Algorithm, as defined in RFC 1321.
	 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 * Distributed under the BSD License
	 * See http://pajhome.org.uk/crypt/md5 for more info.
	 */

	/*jslint bitwise: true */
	/*global unescape, define */

	(function ($) {
	    'use strict';

	    /*
	    * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	    * to work around bugs in some JS interpreters.
	    */

	    function safe_add(x, y) {
	        var lsw = (x & 0xFFFF) + (y & 0xFFFF),
	            msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	        return msw << 16 | lsw & 0xFFFF;
	    }

	    /*
	    * Bitwise rotate a 32-bit number to the left.
	    */
	    function bit_rol(num, cnt) {
	        return num << cnt | num >>> 32 - cnt;
	    }

	    /*
	    * These functions implement the four basic operations the algorithm uses.
	    */
	    function md5_cmn(q, a, b, x, s, t) {
	        return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
	    }
	    function md5_ff(a, b, c, d, x, s, t) {
	        return md5_cmn(b & c | ~b & d, a, b, x, s, t);
	    }
	    function md5_gg(a, b, c, d, x, s, t) {
	        return md5_cmn(b & d | c & ~d, a, b, x, s, t);
	    }
	    function md5_hh(a, b, c, d, x, s, t) {
	        return md5_cmn(b ^ c ^ d, a, b, x, s, t);
	    }
	    function md5_ii(a, b, c, d, x, s, t) {
	        return md5_cmn(c ^ (b | ~d), a, b, x, s, t);
	    }

	    /*
	    * Calculate the MD5 of an array of little-endian words, and a bit length.
	    */
	    function binl_md5(x, len) {
	        /* append padding */
	        x[len >> 5] |= 0x80 << len % 32;
	        x[(len + 64 >>> 9 << 4) + 14] = len;

	        var i,
	            olda,
	            oldb,
	            oldc,
	            oldd,
	            a = 1732584193,
	            b = -271733879,
	            c = -1732584194,
	            d = 271733878;

	        for (i = 0; i < x.length; i += 16) {
	            olda = a;
	            oldb = b;
	            oldc = c;
	            oldd = d;

	            a = md5_ff(a, b, c, d, x[i], 7, -680876936);
	            d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
	            c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
	            b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
	            a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
	            d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
	            c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
	            b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
	            a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
	            d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
	            c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
	            b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
	            a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
	            d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
	            c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
	            b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

	            a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
	            d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
	            c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
	            b = md5_gg(b, c, d, a, x[i], 20, -373897302);
	            a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
	            d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
	            c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
	            b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
	            a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
	            d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
	            c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
	            b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
	            a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
	            d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
	            c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
	            b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

	            a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
	            d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
	            c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
	            b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
	            a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
	            d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
	            c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
	            b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
	            a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
	            d = md5_hh(d, a, b, c, x[i], 11, -358537222);
	            c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
	            b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
	            a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
	            d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
	            c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
	            b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

	            a = md5_ii(a, b, c, d, x[i], 6, -198630844);
	            d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
	            c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
	            b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
	            a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
	            d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
	            c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
	            b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
	            a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
	            d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
	            c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
	            b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
	            a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
	            d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
	            c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
	            b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

	            a = safe_add(a, olda);
	            b = safe_add(b, oldb);
	            c = safe_add(c, oldc);
	            d = safe_add(d, oldd);
	        }
	        return [a, b, c, d];
	    }

	    /*
	    * Convert an array of little-endian words to a string
	    */
	    function binl2rstr(input) {
	        var i,
	            output = '';
	        for (i = 0; i < input.length * 32; i += 8) {
	            output += String.fromCharCode(input[i >> 5] >>> i % 32 & 0xFF);
	        }
	        return output;
	    }

	    /*
	    * Convert a raw string to an array of little-endian words
	    * Characters >255 have their high-byte silently ignored.
	    */
	    function rstr2binl(input) {
	        var i,
	            output = [];
	        output[(input.length >> 2) - 1] = undefined;
	        for (i = 0; i < output.length; i += 1) {
	            output[i] = 0;
	        }
	        for (i = 0; i < input.length * 8; i += 8) {
	            output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << i % 32;
	        }
	        return output;
	    }

	    /*
	    * Calculate the MD5 of a raw string
	    */
	    function rstr_md5(s) {
	        return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));
	    }

	    /*
	    * Calculate the HMAC-MD5, of a key and some data (raw strings)
	    */
	    function rstr_hmac_md5(key, data) {
	        var i,
	            bkey = rstr2binl(key),
	            ipad = [],
	            opad = [],
	            hash;
	        ipad[15] = opad[15] = undefined;
	        if (bkey.length > 16) {
	            bkey = binl_md5(bkey, key.length * 8);
	        }
	        for (i = 0; i < 16; i += 1) {
	            ipad[i] = bkey[i] ^ 0x36363636;
	            opad[i] = bkey[i] ^ 0x5C5C5C5C;
	        }
	        hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
	        return binl2rstr(binl_md5(opad.concat(hash), 512 + 128));
	    }

	    /*
	    * Convert a raw string to a hex string
	    */
	    function rstr2hex(input) {
	        var hex_tab = '0123456789abcdef',
	            output = '',
	            x,
	            i;
	        for (i = 0; i < input.length; i += 1) {
	            x = input.charCodeAt(i);
	            output += hex_tab.charAt(x >>> 4 & 0x0F) + hex_tab.charAt(x & 0x0F);
	        }
	        return output;
	    }

	    /*
	    * Encode a string as utf-8
	    */
	    function str2rstr_utf8(input) {
	        return unescape(encodeURIComponent(input));
	    }

	    /*
	    * Take string arguments and return either raw or hex encoded strings
	    */
	    function raw_md5(s) {
	        return rstr_md5(str2rstr_utf8(s));
	    }
	    function hex_md5(s) {
	        return rstr2hex(raw_md5(s));
	    }
	    function raw_hmac_md5(k, d) {
	        return rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d));
	    }
	    function hex_hmac_md5(k, d) {
	        return rstr2hex(raw_hmac_md5(k, d));
	    }

	    function md5(string, key, raw) {
	        if (!key) {
	            if (!raw) {
	                return hex_md5(string);
	            }
	            return raw_md5(string);
	        }
	        if (!raw) {
	            return hex_hmac_md5(key, string);
	        }
	        return raw_hmac_md5(key, string);
	    }

	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return md5;
	        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        $.md5 = md5;
	    }
	})(undefined);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('image', {
	    staticClass: ["mainPic"],
	    attrs: {
	      "src": _vm.mainSrc
	    }
	  }), _c('div', {
	    staticClass: ["login-wrapper"]
	  }, [_c('div', [_c('text', {
	    staticClass: ["warning-msg"]
	  }, [_vm._v(_vm._s(_vm.warningMsg))])]), _c('div', {
	    staticClass: ["login-row"]
	  }, [_c('input', {
	    staticClass: ["input"],
	    attrs: {
	      "type": "text",
	      "placeholder": "用戶名",
	      "value": (_vm.userName)
	    },
	    on: {
	      "input": function($event) {
	        _vm.userName = $event.target.attr.value
	      }
	    }
	  })]), _c('div', {
	    staticClass: ["login-row"]
	  }, [_c('input', {
	    staticClass: ["input"],
	    attrs: {
	      "type": "password",
	      "placeholder": "密碼",
	      "value": (_vm.password)
	    },
	    on: {
	      "input": function($event) {
	        _vm.password = $event.target.attr.value
	      }
	    }
	  })])]), _c('div', {
	    staticClass: ["login-btn"],
	    on: {
	      "click": _vm.login
	    }
	  }, [_c('text', {
	    staticClass: ["login-text"]
	  }, [_vm._v("立即登录")])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(10)
	)

	/* script */
	__vue_exports__ = __webpack_require__(11)

	/* template */
	var __vue_template__ = __webpack_require__(12)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\weex\\weex-demo\\src\\foo.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-53250b8e"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "alignItems": "center",
	    "marginTop": 120
	  },
	  "title": {
	    "fontSize": 48
	  },
	  "logo": {
	    "width": 360,
	    "height": 82
	  }
	}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  data: {
	    logoUrl: 'https://alibaba.github.io/weex/img/weex_logo_blue@3x.png',
	    target: 'World'
	  },
	  methods: {
	    update: function update(e) {
	      this.target = 'Weex';
	      console.log('target:', this.target);
	    }
	  }
	};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"],
	    on: {
	      "click": _vm.update
	    }
	  }, [_c('image', {
	    staticClass: ["logo"],
	    attrs: {
	      "src": _vm.logoUrl
	    }
	  }), _c('text', {
	    staticClass: ["title"]
	  }, [_vm._v("Hello " + _vm._s(_vm.target))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);

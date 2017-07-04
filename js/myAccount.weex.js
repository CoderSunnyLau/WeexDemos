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

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(1)
	)

	/* script */
	__vue_exports__ = __webpack_require__(2)

	/* template */
	var __vue_template__ = __webpack_require__(3)
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
	__vue_options__.__file = "D:\\weex\\weex-demo\\src\\myAccount.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-247e7029"
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
/* 1 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "backgroundColor": "#EEEEEE"
	  },
	  "title": {
	    "width": 750,
	    "height": 100,
	    "backgroundColor": "#FF5500",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "text_title": {
	    "color": "#FFFFFF",
	    "fontSize": 40
	  },
	  "info": {
	    "width": 750,
	    "height": 200,
	    "backgroundColor": "#FFFFFF",
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "avatar": {
	    "marginRight": 20,
	    "marginLeft": 20
	  },
	  "user_img": {
	    "width": 150,
	    "height": 150,
	    "borderRadius": 75
	  },
	  "text_detail": {
	    "lineHeight": 50
	  },
	  "menu": {
	    "width": 750,
	    "backgroundColor": "#FFFFFF",
	    "marginTop": 20
	  },
	  "menu_item": {
	    "height": 100,
	    "borderWidth": 2,
	    "borderColor": "#EEEEEE",
	    "flexDirection": "row",
	    "alignItems": "center",
	    "paddingLeft": 20,
	    "paddingRight": 20
	  }
	}

/***/ }),
/* 2 */
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

	var stream = weex.requireModule('stream');
	var storage = weex.requireModule('storage');

	exports.default = {
	  data: function data() {
	    return {
	      user_serviceId: '',
	      user_img: 'http://m.ry600.com/files/User/2j/2jf5qju123movd7q/photo.jpg',
	      user_givenName: 'null',
	      user_fullName: 'null',
	      userName: 'null',
	      warningMsg: '',
	      resData: 'resData',
	      postResult: 'aaa',
	      serviceId: '',
	      menuList: [{ 'name': '我的订单' }, { 'name': '我的退换货' }, { 'name': '订购申请' }, { 'name': '我的账簿' }, { 'name': '收货地址' }, { 'name': '我的评价' }, { 'name': '我的留言' }, { 'name': '我的收藏' }]
	    };
	  },
	  created: function created() {
	    var vm = this;
	    storage.getItem('serviceId', function (event) {
	      vm.user_serviceId = event.data;
	    });
	    stream.fetch({
	      headers: { 'Cookie': '_serviceId=' + vm.serviceId },
	      method: 'POST',
	      type: 'json',
	      url: 'https://www.yr600.com/jsonaction/websiteaction.action',
	      body: 'action=VSUser.getBasicInfo'
	    }, function (res) {
	      if (!res.ok) {
	        vm.postResult = "request failed";
	      } else {
	        // console.log(res);
	        var info = res.data.results[0];
	        vm.user_img = "http://m.ry600.com/" + info.photoUrl;
	        vm.userName = info.userName;
	        vm.user_fullName = info.fullName;
	        vm.user_givenName = info.givenName;
	      }
	    }, function (err) {});
	  }
	};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper", "account"]
	  }, [_vm._m(0), _c('div', {
	    staticClass: ["info"]
	  }, [_c('div', {
	    staticClass: ["avatar"]
	  }, [_c('image', {
	    staticClass: ["user_img"],
	    attrs: {
	      "src": _vm.user_img
	    }
	  })]), _c('div', {
	    staticClass: ["detail"]
	  }, [_c('div', [_c('text', {
	    staticClass: ["text_detail"]
	  }, [_vm._v("账号：" + _vm._s(_vm.userName))])]), _c('div', [_c('text', {
	    staticClass: ["text_detail"]
	  }, [_vm._v("姓名：" + _vm._s(_vm.user_fullName))])]), _c('div', [_c('text', {
	    staticClass: ["text_detail"]
	  }, [_vm._v("昵称：" + _vm._s(_vm.user_givenName))])])])]), _c('div', {
	    staticClass: ["menu"]
	  }, _vm._l((_vm.menuList), function(item) {
	    return _c('div', {
	      staticClass: ["menu_item"]
	    }, [_c('text', [_vm._v(_vm._s(item.name))])])
	  }))])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["title"]
	  }, [_c('text', {
	    staticClass: ["text_title"]
	  }, [_vm._v("我的账户")])])
	}]}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);

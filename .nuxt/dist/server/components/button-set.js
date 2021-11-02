exports.ids = [4,5];
exports.modules = {

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/organisms/ButtonSet.vue?vue&type=template&id=c65cf9ea&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"delete-button"},[_c('DeleteButton',{on:{"delete":function($event){return _vm.deletar($event)}}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/organisms/ButtonSet.vue?vue&type=template&id=c65cf9ea&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./components/molecules/DeleteButton.vue + 4 modules
var DeleteButton = __webpack_require__(69);

// EXTERNAL MODULE: ./store/index.ts + 1 modules
var store = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/organisms/ButtonSet.vue?vue&type=script&lang=ts&



/* harmony default export */ var ButtonSetvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  components: {
    DeleteButton: DeleteButton["default"]
  },
  computed: {
    $patient() {
      return store["patients"].$single;
    }

  },
  methods: {
    async deletar() {
      await store["patients"].delete;
    }

  }
}));
// CONCATENATED MODULE: ./components/organisms/ButtonSet.vue?vue&type=script&lang=ts&
 /* harmony default export */ var organisms_ButtonSetvue_type_script_lang_ts_ = (ButtonSetvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/organisms/ButtonSet.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  organisms_ButtonSetvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "15f48d35"
  
)

/* harmony default export */ var ButtonSet = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {DeleteButton: __webpack_require__(69).default})


/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("4cb45a86", content, true, context)
};

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/molecules/DeleteButton.vue?vue&type=template&id=4bd5982a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"delete-button"},[_c('fa',{staticClass:"icon",attrs:{"icon":"trash"}}),_vm._ssrNode(" <button type=\"submit\" formmethod=\"post\" class=\"button\" data-v-4bd5982a>\n    Deletar\n  </button>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/molecules/DeleteButton.vue?vue&type=template&id=4bd5982a&scoped=true&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./store/index.ts + 1 modules
var store = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/molecules/DeleteButton.vue?vue&type=script&lang=ts&


/* harmony default export */ var DeleteButtonvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  computed: {
    $patient() {
      return store["patients"].$single;
    }

  },
  methods: {
    del() {
      store["patients"].delete({
        id: this.$patient.id
      });
    }

  }
}));
// CONCATENATED MODULE: ./components/molecules/DeleteButton.vue?vue&type=script&lang=ts&
 /* harmony default export */ var molecules_DeleteButtonvue_type_script_lang_ts_ = (DeleteButtonvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/molecules/DeleteButton.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(82)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  molecules_DeleteButtonvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4bd5982a",
  "0421d39c"
  
)

/* harmony default export */ var DeleteButton = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteButton_vue_vue_type_style_index_0_id_4bd5982a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteButton_vue_vue_type_style_index_0_id_4bd5982a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteButton_vue_vue_type_style_index_0_id_4bd5982a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteButton_vue_vue_type_style_index_0_id_4bd5982a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteButton_vue_vue_type_style_index_0_id_4bd5982a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".delete-button[data-v-4bd5982a]{display:grid;color:#fff}.delete-button[data-v-4bd5982a],.icon[data-v-4bd5982a]{height:30px;width:60px;align-content:center}.icon[data-v-4bd5982a]{position:absolute}.button[data-v-4bd5982a],.icon[data-v-4bd5982a]{cursor:pointer}.button[data-v-4bd5982a]{width:170px;height:50px;background-color:#3a3a3a;color:#fff;padding-left:20px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=button-set.js.map
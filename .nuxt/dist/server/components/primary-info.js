exports.ids = [10];
exports.modules = {

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/organisms/PrimaryInfo.vue?vue&type=template&id=1f95f5c6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"primary-info"},[_vm._ssrNode("<p data-v-1f95f5c6>"+_vm._ssrEscape("Nome: "+_vm._s(_vm.$patient.name))+"</p> <p data-v-1f95f5c6>"+_vm._ssrEscape("Data e hora - Entrada: "+_vm._s(_vm.$patient.date)+" às "+_vm._s(_vm.$patient.hour))+"</p> "+((_vm.$patient.transference === 'not_transfered_yet')?("<p"+(_vm._ssrClass(null,{ transfered: _vm.$patient.transference === 'not_transfered_yet' }))+" data-v-1f95f5c6>Transferência: Ainda não transferido</p>"):"<!---->")+" "+((_vm.$patient.transference === 'transfered')?("<p"+(_vm._ssrClass(null,{ notTransfered: _vm.$patient.transference === 'transfered' }))+" data-v-1f95f5c6>Transferência: Transferido</p>"):"<!---->")+" "+((_vm.$patient.diagnostic === 'symptomatic')?("<div"+(_vm._ssrClass(null,{ coviddiv: _vm.$patient.diagnostic === 'symptomatic' }))+" data-v-1f95f5c6><div class=\"covid\" data-v-1f95f5c6></div> <div class=\"symptom-text\" data-v-1f95f5c6>Pacientes com sintomas de Covid-19</div></div>"):"<!---->")+" "+((_vm.$patient.diagnostic === 'asymptomatic')?("<div"+(_vm._ssrClass(null,{ notCoviddiv: _vm.$patient.diagnostic === 'asymptomatic' }))+" data-v-1f95f5c6><div class=\"notCovid\" data-v-1f95f5c6></div> <div class=\"symptom-text\" data-v-1f95f5c6>Pacientes sem sintomas de Covid-19</div></div>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/organisms/PrimaryInfo.vue?vue&type=template&id=1f95f5c6&scoped=true&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./store/index.ts + 1 modules
var store = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/organisms/PrimaryInfo.vue?vue&type=script&lang=ts&


/* harmony default export */ var PrimaryInfovue_type_script_lang_ts_ = (external_vue_default.a.extend({
  computed: {
    $patient() {
      return store["patients"].$single;
    }

  }
}));
// CONCATENATED MODULE: ./components/organisms/PrimaryInfo.vue?vue&type=script&lang=ts&
 /* harmony default export */ var organisms_PrimaryInfovue_type_script_lang_ts_ = (PrimaryInfovue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/organisms/PrimaryInfo.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(90)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  organisms_PrimaryInfovue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1f95f5c6",
  "a47aa816"
  
)

/* harmony default export */ var PrimaryInfo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(91);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("99438816", content, true, context)
};

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrimaryInfo_vue_vue_type_style_index_0_id_1f95f5c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrimaryInfo_vue_vue_type_style_index_0_id_1f95f5c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrimaryInfo_vue_vue_type_style_index_0_id_1f95f5c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrimaryInfo_vue_vue_type_style_index_0_id_1f95f5c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrimaryInfo_vue_vue_type_style_index_0_id_1f95f5c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary-info[data-v-1f95f5c6]{display:grid;justify-content:left;grid-row-gap:7px}.coviddiv[data-v-1f95f5c6],.notCoviddiv[data-v-1f95f5c6]{display:grid;grid-auto-columns:15px 1fr;grid-gap:10px;grid-auto-flow:column}.notTransfered[data-v-1f95f5c6],.transfered[data-v-1f95f5c6]{color:#a0a0a0}.covid[data-v-1f95f5c6]{background-color:#ff9494}.covid[data-v-1f95f5c6],.notCovid[data-v-1f95f5c6]{width:15px;height:15px;border-radius:7.5px}.notCovid[data-v-1f95f5c6]{background-color:#9fede4}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=primary-info.js.map
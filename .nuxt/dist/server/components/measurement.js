exports.ids = [7];
exports.modules = {

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/organisms/Measurement.vue?vue&type=template&id=36a7b0f6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"measurement"},[_vm._ssrNode("<p class=\"list-name\" data-v-36a7b0f6>Medições</p> <div class=\"temperature\" data-v-36a7b0f6><div"+(_vm._ssrClass(null,{
        statusOK:
          _vm.$patient.temperature >= '36.1' && _vm.$patient.temperature < '37.2',
        statusNOK:
          _vm.$patient.temperature < '36.1' || _vm.$patient.temperature >= '37.2'
      }))+" data-v-36a7b0f6></div> <div class=\"temperature-indication\" data-v-36a7b0f6>"+_vm._ssrEscape("\n      Temperatura: "+_vm._s(_vm.$patient.temperature)+" °C\n    ")+"</div></div> <div class=\"oxygen\" data-v-36a7b0f6><div"+(_vm._ssrClass(null,{
        statusOK: _vm.$patient.blood_oxygen >= '93',
        statusNOK: _vm.$patient.blood_oxygen < '93'
      }))+" data-v-36a7b0f6></div> <div class=\"oxygen-indication\" data-v-36a7b0f6>"+_vm._ssrEscape("\n      Oxigenação no sangue: "+_vm._s(_vm.$patient.blood_oxygen)+" %\n    ")+"</div></div> <div class=\"heart-rate\" data-v-36a7b0f6><div"+(_vm._ssrClass(null,{
        statusOK: _vm.$patient.heart_rate < '100' && _vm.$patient.heart_rate > '60',
        statusNOK: _vm.$patient.heart_rate >= '100' || _vm.$patient.heart_rate <= '60'
      }))+" data-v-36a7b0f6></div> <div class=\"frequency-indication\" data-v-36a7b0f6>"+_vm._ssrEscape("\n      Frequência cardíaca: "+_vm._s(_vm.$patient.heart_rate)+" bpm\n    ")+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/organisms/Measurement.vue?vue&type=template&id=36a7b0f6&scoped=true&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./store/index.ts + 1 modules
var store = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/organisms/Measurement.vue?vue&type=script&lang=ts&


/* harmony default export */ var Measurementvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  computed: {
    $patient() {
      return store["patients"].$single;
    }

  }
}));
// CONCATENATED MODULE: ./components/organisms/Measurement.vue?vue&type=script&lang=ts&
 /* harmony default export */ var organisms_Measurementvue_type_script_lang_ts_ = (Measurementvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/organisms/Measurement.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(95)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  organisms_Measurementvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "36a7b0f6",
  "87f8c83e"
  
)

/* harmony default export */ var Measurement = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(96);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("76344ff9", content, true, context)
};

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Measurement_vue_vue_type_style_index_0_id_36a7b0f6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Measurement_vue_vue_type_style_index_0_id_36a7b0f6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Measurement_vue_vue_type_style_index_0_id_36a7b0f6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Measurement_vue_vue_type_style_index_0_id_36a7b0f6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Measurement_vue_vue_type_style_index_0_id_36a7b0f6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".measurement[data-v-36a7b0f6]{display:grid;justify-content:left;grid-row-gap:7px}.heart-rate[data-v-36a7b0f6],.oxygen[data-v-36a7b0f6],.temperature[data-v-36a7b0f6]{display:grid;grid-auto-columns:15px 1fr;grid-gap:10px;grid-auto-flow:column}p.list-name[data-v-36a7b0f6]{font-weight:700;margin-bottom:10px}.statusNOK[data-v-36a7b0f6],.statusOK[data-v-36a7b0f6]{width:15px;height:15px;border-radius:7.5px}.statusNOK[data-v-36a7b0f6]{background-color:#ff9494}.statusOK[data-v-36a7b0f6]{background-color:#9fede4}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=measurement.js.map
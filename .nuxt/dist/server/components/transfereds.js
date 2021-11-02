exports.ids = [16];
exports.modules = {

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(81);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("6549f618", content, true, context)
};

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transfereds_vue_vue_type_style_index_0_id_e6a8069a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transfereds_vue_vue_type_style_index_0_id_e6a8069a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transfereds_vue_vue_type_style_index_0_id_e6a8069a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transfereds_vue_vue_type_style_index_0_id_e6a8069a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transfereds_vue_vue_type_style_index_0_id_e6a8069a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".list-indication[data-v-e6a8069a]{display:grid;color:#a0a0a0;font-size:12pt;margin-bottom:10px}.covid[data-v-e6a8069a]{background-color:#ff9494}.covid[data-v-e6a8069a],.notCovid[data-v-e6a8069a]{width:15px;height:15px;border-radius:7.5px}.notCovid[data-v-e6a8069a]{background-color:#9fede4}.transfereds[data-v-e6a8069a]{margin-top:50px}.container[data-v-e6a8069a]{display:grid;grid-template-columns:1fr 120px 120px 15px;grid-gap:10px;align-items:center;margin-bottom:10px}@media(max-width:650px){.container[data-v-e6a8069a]{display:flex;justify-content:center}}@media(max-width:1085px){.container[data-v-e6a8069a]{display:flex;justify-content:center}}.patient-name[data-v-e6a8069a]{display:grid;background-color:#2a9d8f;color:#3a3a3a;height:20px;align-content:center;width:auto;padding:10px;border-radius:5px;cursor:pointer}@media(max-width:650px){.patient-name[data-v-e6a8069a]{display:grid;width:15rem;height:40px;justify-self:center}}@media(max-width:1085px){.patient-name[data-v-e6a8069a]{display:grid;width:15rem;height:40px;justify-self:center}}.date[data-v-e6a8069a]{display:grid;background-color:#9fede4;height:20px;justify-items:center;align-content:center;width:7rem;padding:10px;border-radius:5px}@media(max-width:650px){.date[data-v-e6a8069a]{display:none}}@media(max-width:1085px){.date[data-v-e6a8069a]{display:none}}.hour[data-v-e6a8069a]{display:grid;background-color:#9fede4;height:20px;justify-items:center;align-content:center;width:7rem;padding:10px;border-radius:5px}@media(max-width:650px){.hour[data-v-e6a8069a]{display:none}}@media(max-width:1085px){.hour[data-v-e6a8069a]{display:none}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/organisms/Transfereds.vue?vue&type=template&id=e6a8069a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"transfereds"},[_vm._ssrNode("<span class=\"list-indication\" data-v-e6a8069a>Pacientes transferidos</span> "),_vm._l((_vm.$patients),function(patient){return _vm._ssrNode("<label"+(_vm._ssrAttr("patient",patient))+" class=\"container\" data-v-e6a8069a>","</label>",[_c('NuxtLink',{attrs:{"to":("/patient/" + (patient.id))}},[_c('span',{staticClass:"patient-name"},[_vm._v("\n        "+_vm._s(patient.name)+"\n      ")])]),_vm._ssrNode(" <span class=\"date\" data-v-e6a8069a>"+_vm._ssrEscape(_vm._s(patient.date))+"</span> <span class=\"hour\" data-v-e6a8069a>"+_vm._ssrEscape(_vm._s(patient.hour))+"</span> "+((patient.diagnostic === 'symptomatic')?("<div"+(_vm._ssrClass(null,{ covid: patient.diagnostic === 'symptomatic' }))+" data-v-e6a8069a></div>"):"<!---->")+" "+((patient.diagnostic === 'asymptomatic')?("<div"+(_vm._ssrClass(null,{ notCovid: patient.diagnostic === 'asymptomatic' }))+" data-v-e6a8069a></div>"):"<!---->"))],2)})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/organisms/Transfereds.vue?vue&type=template&id=e6a8069a&scoped=true&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./store/index.ts + 1 modules
var store = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/organisms/Transfereds.vue?vue&type=script&lang=ts&


/* harmony default export */ var Transferedsvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  props: {
    patient: {
      type: Object,
      required: true
    },
    checkedIDs: {
      type: Object,
      required: true
    }
  },
  computed: {
    $patients() {
      const patientarray = store["patients"].$all;
      return patientarray.filter(symptom => {
        return symptom.transference === 'transfered';
      });
    }

  }
}));
// CONCATENATED MODULE: ./components/organisms/Transfereds.vue?vue&type=script&lang=ts&
 /* harmony default export */ var organisms_Transferedsvue_type_script_lang_ts_ = (Transferedsvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/organisms/Transfereds.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(80)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  organisms_Transferedsvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e6a8069a",
  "4849b4e4"
  
)

/* harmony default export */ var Transfereds = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=transfereds.js.map
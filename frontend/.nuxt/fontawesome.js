import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeLayers,
  FontAwesomeLayersText,
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import {
  faSearch as freeFasFaSearch,
  faCheckDouble as freeFasFaCheckDouble,
  faBook as freeFasFaBook
} from '@fortawesome/free-solid-svg-icons'

library.add(
  freeFasFaSearch,
  freeFasFaCheckDouble,
  freeFasFaBook
)

config.autoAddCss = false

Vue.component('fa', FontAwesomeIcon)
Vue.component('faLayers', FontAwesomeLayers)
Vue.component('faLayersText', FontAwesomeLayersText)

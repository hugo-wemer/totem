export { default as TransferButton } from '../../components/molecules/TransferButton.vue'
export { default as HomeTemplate } from '../../components/templates/HomeTemplate.vue'
export { default as Container } from '../../components/bosons/Container.vue'
export { default as BaseButton } from '../../components/atoms/BaseButton.vue'
export { default as BaseInput } from '../../components/atoms/BaseInput.vue'
export { default as Logo } from '../../components/atoms/Logo.vue'
export { default as SearchIcon } from '../../components/atoms/SearchIcon.vue'
export { default as AsymptomaticList } from '../../components/organisms/AsymptomaticList.vue'
export { default as Footer } from '../../components/organisms/Footer.vue'
export { default as Header } from '../../components/organisms/Header.vue'
export { default as Search } from '../../components/organisms/Search.vue'
export { default as SymptomaticList } from '../../components/organisms/SymptomaticList.vue'
export { default as Transfereds } from '../../components/organisms/Transfereds.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}

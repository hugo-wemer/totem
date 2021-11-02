export const BaseButton = () => import('../../components/atoms/BaseButton.vue' /* webpackChunkName: "components/base-button" */).then(c => wrapFunctional(c.default || c))
export const BaseInput = () => import('../../components/atoms/BaseInput.vue' /* webpackChunkName: "components/base-input" */).then(c => wrapFunctional(c.default || c))
export const Logo = () => import('../../components/atoms/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const SearchIcon = () => import('../../components/atoms/SearchIcon.vue' /* webpackChunkName: "components/search-icon" */).then(c => wrapFunctional(c.default || c))
export const DeleteButton = () => import('../../components/molecules/DeleteButton.vue' /* webpackChunkName: "components/delete-button" */).then(c => wrapFunctional(c.default || c))
export const PatientImage = () => import('../../components/molecules/PatientImage.vue' /* webpackChunkName: "components/patient-image" */).then(c => wrapFunctional(c.default || c))
export const TransferButton = () => import('../../components/molecules/TransferButton.vue' /* webpackChunkName: "components/transfer-button" */).then(c => wrapFunctional(c.default || c))
export const UntransferButton = () => import('../../components/molecules/UntransferButton.vue' /* webpackChunkName: "components/untransfer-button" */).then(c => wrapFunctional(c.default || c))
export const AsymptomaticList = () => import('../../components/organisms/AsymptomaticList.vue' /* webpackChunkName: "components/asymptomatic-list" */).then(c => wrapFunctional(c.default || c))
export const ButtonSet = () => import('../../components/organisms/ButtonSet.vue' /* webpackChunkName: "components/button-set" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../../components/organisms/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../../components/organisms/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const Measurement = () => import('../../components/organisms/Measurement.vue' /* webpackChunkName: "components/measurement" */).then(c => wrapFunctional(c.default || c))
export const PrimaryInfo = () => import('../../components/organisms/PrimaryInfo.vue' /* webpackChunkName: "components/primary-info" */).then(c => wrapFunctional(c.default || c))
export const Quiz = () => import('../../components/organisms/Quiz.vue' /* webpackChunkName: "components/quiz" */).then(c => wrapFunctional(c.default || c))
export const Search = () => import('../../components/organisms/Search.vue' /* webpackChunkName: "components/search" */).then(c => wrapFunctional(c.default || c))
export const SymptomaticList = () => import('../../components/organisms/SymptomaticList.vue' /* webpackChunkName: "components/symptomatic-list" */).then(c => wrapFunctional(c.default || c))
export const Transfereds = () => import('../../components/organisms/Transfereds.vue' /* webpackChunkName: "components/transfereds" */).then(c => wrapFunctional(c.default || c))
export const Container = () => import('../../components/bosons/Container.vue' /* webpackChunkName: "components/container" */).then(c => wrapFunctional(c.default || c))
export const HomeTemplate = () => import('../../components/templates/HomeTemplate.vue' /* webpackChunkName: "components/home-template" */).then(c => wrapFunctional(c.default || c))
export const PatientDetailsTemplate = () => import('../../components/templates/PatientDetailsTemplate.vue' /* webpackChunkName: "components/patient-details-template" */).then(c => wrapFunctional(c.default || c))

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

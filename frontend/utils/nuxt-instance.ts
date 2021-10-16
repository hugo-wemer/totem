import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { NuxtCookies } from 'cookie-universal-nuxt'

// eslint-disable-next-line import/no-mutable-exports
let $axios: NuxtAxiosInstance
// eslint-disable-next-line import/no-mutable-exports
let $cookies: NuxtCookies

export const initializeAxios = (axiosInstance: NuxtAxiosInstance) => {
  $axios = axiosInstance

}
export const initializeCookies = (cookieInstance: NuxtCookies) => {
  $cookies = cookieInstance
}
   
export { $axios, $cookies }

import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import Patients from '@/store/patients'
import Auth from '@/store/auth'


// eslint-disable-next-line import/no-mutable-exports
let patients: Patients
// eslint-disable-next-line import/no-mutable-exports
let auth: Auth

/* function initializeStores(store: Store<any>): void {
  patients = getModule(Patients, store)
  auth = getModule(Auth, store)
} */
const initializeStores = (store: Store<any>): void => {
  patients = getModule(Patients, store)
  auth = getModule(Auth, store)
}

export { initializeStores, patients, auth }
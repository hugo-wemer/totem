/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import Patients from '@/store/patients'
import Auth from '@/store/auth'
import Transfer from '@/store/transfer'

let patients: Patients
let auth: Auth
let transfer: Transfer

const initializeStores = (store: Store<any>): void => {
  patients = getModule(Patients, store)
  auth = getModule(Auth, store)
  transfer = getModule(Transfer, store)
}

export { initializeStores, patients, auth, transfer }
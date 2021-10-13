import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Patients from '@/store/patients'

// eslint-disable-next-line import/no-mutable-exports
let patients: Patients

function initializeStores(store: Store<any>): void {
  patients = getModule(Patients, store)
}

export { initializeStores, patients }
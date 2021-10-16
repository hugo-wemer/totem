import { Module, Mutation, VuexModule, Action } from 'vuex-module-decorators'
import { Patient } from '@/models'
import { $axios } from '@/utils/nuxt-instance'

interface Show {
  id: Patient['id']
}

@Module({ name: 'patients', stateFactory: true, namespaced: true })
export default class Patients extends VuexModule {
  private patients = [] as Patient[]
  private patient = {} as Patient

  public get $all() {
    return this.patients
  }

  public get $single() {
    return this.patient
  }

  @Mutation
  private SET_ALL(patients: Patient[]) {
    this.patients = patients
  }

  @Mutation
  private SET_SINGLE(patient: Patient) {
    this.patient = patient
  }

  @Action
  public async index() {
    const patients = await $axios.$get('/posts')
    this.context.commit('SET_ALL', patients)
  }

  @Action
  public async show({id}: Show) {
    const patient = await $axios.$get(`/posts/${id}`)
    this.context.commit('SET_SINGLE', patient)
  }
}

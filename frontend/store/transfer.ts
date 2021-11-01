import { Module, VuexModule, Action } from 'vuex-module-decorators'
import { Patient } from '@/models'
import { $axios, $cookies } from '@/utils/nuxt-instance'

interface UpdatePayload {
  transference: string
  idsSym: any
  idsAsym: any
}
interface Show {
  id: number
}


@Module({ name: 'transfer', stateFactory: true, namespaced: true })
export default class Transfer extends VuexModule {
  @Action({ rawError: true })
  public async update(payload: UpdatePayload) {
    const token = $cookies.get('token')
    await $axios.setToken(token, 'Bearer')
    const arraySym = payload.idsSym
    for (let i = 0; i < arraySym.length; i++) {
      const id = payload.idsSym[i]
      const route = `/posts/${id}`
      await $axios.$put(route, payload)
    }
    const arrayAsym = payload.idsAsym
    for (let i = 0; i < arrayAsym.length; i++) {
      const id = payload.idsAsym[i]
      const route = `/posts/${id}`
      await $axios.$put(route, payload)
    }
    location.reload()
  }

  @Action
  public async reupdate({id}: Show) {
    const token = $cookies.get('token')
    await $axios.setToken(token, 'Bearer')
    await $axios.$put(`/posts/${id}`, { transference: 'not_transfered_yet' })
  }
}

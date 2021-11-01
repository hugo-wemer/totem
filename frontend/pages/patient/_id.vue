<template>
  <div>
    <PatientDetailsTemplate />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { patients } from '@/store'

export default Vue.extend({
  layout: 'h_f',
  middleware: 'auth',
  async asyncData({ params }) {
    await patients.show({ id: params.id as any })
    console.log(patients.$single)
  }
})
</script>

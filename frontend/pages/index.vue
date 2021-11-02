<template>
  <HomeTemplate/>
</template>

<script lang="ts">
import Vue from 'vue'
import { patients } from '@/store'

export default Vue.extend({
  layout: 'h_f',
  middleware: 'auth',
  async asyncData() {
    await patients.index()
  },
})
</script>

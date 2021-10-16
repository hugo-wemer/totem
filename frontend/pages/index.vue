<template>
    <HomeTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import checkedIDs from '@/components/organisms/SymptomaticList.vue'
import { patients } from '@/store'


export default Vue.extend({
  
  layout: 'h_f',
  async asyncData() {
    await patients.index()
  },


})

</script>

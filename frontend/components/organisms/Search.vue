<template>
  <div class="search">
    <div action="/patient/">
      <input
        v-model="search"
        class="input"
        placeholder="Busque por um paciente"
      />
      <fa class="icon" icon="search" />
      <button class="button" @click="onSubmit">Procurar</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { patients } from '@/store'
export default Vue.extend({
  data() {
    return {
      search: '',
      patientID: '' as any
    }
  },
  computed: {
    $patient() {
      return patients.$all
    }
  },
  methods: {
    onSubmit() {

      for (let i = 0; i< patients.$all.length; i++){
        const search = this.search[0].toUpperCase() + this.search.substr(1)
        console.log(search)
        if(patients.$all[i].name === search){
          this.patientID = patients.$all[i].id
        }
      }
      this.$router.push(`/patient/${this.patientID}`)
    }
  }
})
</script>

<style lang="scss" scoped>
.search {
  padding: 0.3rem;
  background: color(primary, darkest);
  height: 50px;
  width: 350px;
  top: 0;
  display: grid;
  align-items: center;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.16);
  border-radius: 30px;
}
.input {
  height: 40px;
  padding: 10px;
  width: 230px;
  border-radius: 20px 0px 0px 20px;
}
.button {
  height: 30px;
  background: color(primary, darkest);
  color: color(primary, lightest);
  margin-left: 2px;
  cursor: pointer;
}
.icon {
  color: color(primary, lightest);
  margin-left: 4px;
}
</style>

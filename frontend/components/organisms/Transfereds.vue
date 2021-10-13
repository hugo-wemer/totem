<template>
  <div class="transfereds">
    <span class="list-indication">Pacientes transferidos</span>
    <label
      v-for="patient in $patients"
      :key="patient.id"
      :patient="patient"
      class="container"
    >
      <NuxtLink :to="`/posts/${patient.id}`">
        <span class="patient-name">
          {{ patient.name }}
        </span>
      </NuxtLink>
      <span class="date">{{ patient.date }}</span>
      <span class="hour">{{ patient.hour }}</span>
      <div v-if="patient.diagnostic === 'symptomatic'" :class="{ covid: patient.diagnostic === 'symptomatic' }"></div>
      <div v-if="patient.diagnostic === 'asymptomatic'"  :class="{ notCovid: patient.diagnostic === 'asymptomatic' }"></div>
    </label>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { patients } from '@/store'
import { Patient } from '@/models'

export default Vue.extend({
  props: {
    patient: {
      type: Object,
      required: true
    } as PropOptions<Patient>
  },

  computed: {
    $patients() {
      const patientarray = patients.$all
      return patientarray.filter((symptom) => {
        return symptom.transference === 'transfered'
      })
    }
  }
})
</script>

<style lang="scss" scoped>
.list-indication{
  display: grid;
  color: color(primary);
  font-size: 12pt;
  margin-bottom: 10px;
}
.covid {
  background-color: color(danger, lighest);
  width: 15px;
  height: 15px;
  border-radius: 7.5px;
}
.notCovid {
  background-color: color(success, lightest);
  width: 15px;
  height: 15px;
  border-radius: 7.5px;
}
.transfereds {
  margin-top: 50px;
  
  
}
.container {
  display: grid;
  grid-template-columns: 1fr 120px 120px 15px;
  grid-gap: 10px;
  align-items: center;
  margin-bottom: 10px;
  @include screen('small', 'medium') {
    display: flex;
    justify-content: center;
  }
}
.patient-name {
  display: grid;
  background-color: color(success);
  color: color(primary, darkest);
  height: 20px;
  align-content: center;
  width: 38rem;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  @include screen('small', 'medium') {
    display: grid;
    width: 15rem;
    //width: 230px;
    //margin-right: 15px;
    height: 40px;
    justify-self: center;
  }
}
.date {
  display: grid;
  background-color: color(success, lightest);
  height: 20px;
  justify-items: center;
  align-content: center;
  width: 7rem;
  padding: 10px;
  border-radius: 5px;
  @include screen('small', 'medium') {
    display: none;
  }
}
.hour {
  display: grid;
  background-color: color(success, lightest);
  height: 20px;
  justify-items: center;
  align-content: center;
  width: 7rem;
  padding: 10px;
  border-radius: 5px;
  @include screen('small', 'medium') {
    display: none;
    
  }
}
</style>

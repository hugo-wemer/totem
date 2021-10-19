<template>
  <div class="symptomatic-list">
    <span class="list-indication">Pacientes com sintomas de Covid-19</span>
    <label
      v-for="patient in $patients"
      :key="patient.id"
      :patient="patient"
      class="container"
    >
      <input
        :id="`${patient.id}`"
        v-model="checkedIDs"
        :value="`${patient.id}`"
        type="checkbox"
      />
      <span class="patient-name">
        {{ patient.name }}
      </span>
      <NuxtLink :to="`/posts/${patient.id}`">
        <fa class="icon" icon="book" />
      </NuxtLink>
    </label>

    <!-- <h1>{{checkedIDs}}</h1> -->
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
    } as PropOptions<Patient>,
    
  },

  data() {
    return {
      checkedIDs: []
    }
  },
  

  computed: {
    $patients() {
      const patientarray = patients.$all
      const diagnostic = patientarray.filter((symptom) => {
        return symptom.diagnostic === 'symptomatic'
      })
      return diagnostic.filter((symptom) => {
        return symptom.transference === 'not_transfered_yet'
      })
    }
  },
})
</script>

<style lang="scss" scoped>
.icon {
  color: color(primary, darkest);
}
.list-indication {
  display: grid;
  color: color(primary);
  font-size: 12pt;
  margin-bottom: 10px;
}

.symptomatic-list {
  margin-top: 40px;
}
.container {
  display: grid;
  grid-template-columns: 20px 400px 30px;
  grid-gap: 10px;
  display: grid;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  @include screen('small', 'medium') {
    grid-template-columns: 20px 250px 30px;
    justify-content: center;
  }
}
.patient-name {
  display: grid;
  background-color: color(danger);
  height: 20px;
  align-content: center;
  width: 25rem;
  padding: 10px;
  border-radius: 5px;
  @include screen('small', 'medium') {
    width: 15rem;
    height: 40px;
  }
}
input {
  cursor: pointer;
}
</style>

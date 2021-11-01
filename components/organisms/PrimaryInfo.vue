<template>
  <div class="primary-info">
    <p>Nome: {{ $patient.name }}</p>
    <p>Data e hora - Entrada: {{ $patient.date }} às {{ $patient.hour }}</p>
    <p
      v-if="$patient.transference === 'not_transfered_yet'"
      :class="{ transfered: $patient.transference === 'not_transfered_yet' }"
    >Transferência: Ainda não transferido</p>
    <p
      v-if="$patient.transference === 'transfered'"
      :class="{ notTransfered: $patient.transference === 'transfered' }"
    >Transferência: Transferido</p>
    <div
      v-if="$patient.diagnostic === 'symptomatic'"
      :class="{ coviddiv: $patient.diagnostic === 'symptomatic' }"
    >
      <div class="covid"></div>
      <div class="symptom-text">Pacientes com sintomas de Covid-19</div>
    </div>

    <div
      v-if="$patient.diagnostic === 'asymptomatic'"
      :class="{ notCoviddiv: $patient.diagnostic === 'asymptomatic' }"
    >
      <div class="notCovid"></div>
      <div class="symptom-text">Pacientes sem sintomas de Covid-19</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { patients } from '@/store'
export default Vue.extend({
  computed: {
    $patient() {
      return patients.$single
    }
  }
})
</script>

<style lang="scss" scoped>
.primary-info{
  display: grid;
  justify-content:left;
  grid-row-gap: 7px;
  
}

.coviddiv,  .notCoviddiv{
  display: grid;
  grid-auto-columns: 15px 1fr;
  grid-gap: 10px;
  grid-auto-flow: column;
}

.notTransfered, .transfered{
  color: color(primary);
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
</style>

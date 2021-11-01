<template>
  <div class="measurement">
    <p class="list-name">Medições</p>

    <div class="temperature">
      <div
        :class="{
          statusOK:
            $patient.temperature >= '36.1' && $patient.temperature < '37.2',
          statusNOK:
            $patient.temperature < '36.1' || $patient.temperature >= '37.2'
        }"
      ></div>
      <div class="temperature-indication">
        Temperatura: {{ $patient.temperature }} °C
      </div>
    </div>

    <div class="oxygen">
      <div
        :class="{
          statusOK: $patient.blood_oxygen >= '93',
          statusNOK: $patient.blood_oxygen < '93'
        }"
      ></div>
      <div class="oxygen-indication">
        Oxigenação no sangue: {{ $patient.blood_oxygen }} %
      </div>
    </div>

    <div class="heart-rate">
      <div
        :class="{
          statusOK: $patient.heart_rate < '100' && $patient.heart_rate > '60',
          statusNOK: $patient.heart_rate >= '100' || $patient.heart_rate <= '60'
        }"
      ></div>
      <div class="frequency-indication">
        Frequência cardíaca: {{ $patient.heart_rate }} bpm
      </div>
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
.measurement {
  display: grid;
  justify-content: left;
  grid-row-gap: 7px;
}

.temperature,
.oxygen,
.heart-rate {
  display: grid;
  grid-auto-columns: 15px 1fr;
  grid-gap: 10px;
  grid-auto-flow: column;
}

p.list-name {
  font-weight: bold;
  margin-bottom: 10px;
}

.statusNOK,
.statusOK {
  width: 15px;
  height: 15px;
  border-radius: 7.5px;
}
.statusNOK {
  background-color: color(danger, lighest);
}
.statusOK {
  background-color: color(success, lightest);
}
</style>

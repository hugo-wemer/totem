<template>
  <div class="quiz">
    <p class="list-name">Questionário</p>

    <div class="fever">
      <div
        :class="{
          statusOK: $patient.fever == false,
          statusNOK: $patient.fever == true
        }"
      ></div>
      <div v-if="$patient.fever == true" class="fever-indication">Teve febre: Sim</div>
      <div v-else>Teve febre: Não</div>
    </div>
    <div class="headache">
      <div
        :class="{
          statusOK: $patient.headache == false,
          statusNOK: $patient.headache == true
        }"
      ></div>
      <div v-if="$patient.headache == true" class="headache-indication">Teve dor de cabeça: Sim</div>
      <div v-else>Teve dor de cabeça: Não</div>
    </div>
    <div class="runny-nose">
      <div
        :class="{
          statusOK: $patient.runny_nose == false,
          statusNOK: $patient.runny_nose == true
        }"
      ></div>
      <div v-if="$patient.runny_nose == true" class="runny-nose-indication">Teve coriza: Sim</div>
      <div v-else>Teve coriza: Não</div>
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
.headache-indication{
  content:'Sim';
}

.quiz {
  display: grid;
  justify-content: left;
  grid-row-gap: 7px;
}

.fever,
.headache,
.runny-nose {
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

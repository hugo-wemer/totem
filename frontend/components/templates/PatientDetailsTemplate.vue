<template>
  <div class="patient-details-template">
    <div class="primaryInfos">
      <PrimaryInfo />
      <PatientImage />
    </div>
    <div class="mea-quiz">
      <Measurement />
      <Quiz />
    </div>
    <div class="buttons">
      <ButtonSet />
      <UntransferButton />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
.buttons{
  display: grid;
  grid-gap: 30px;
  grid-auto-columns: 170px 170px;
  grid-auto-flow: column;
  margin-top: 30px;
  @include screen('small', 'medium') {
    grid-auto-columns: 1fr;
    grid-auto-flow: row;
    height: 100px;
    justify-items: center;
    margin-top: 30px;
    margin-left: -5.2rem;
  }
}

.patient-details-template {
  display: grid;
  justify-content: center;
  grid-gap: 30px;
  height: 200px;
  @include screen('small', 'medium') {
    height: 400px;
  }
}
.PatientImage {
  display: grid;
  justify-items: space-between;
  @include screen('small', 'medium') {
    display: none;
  }
}
.primaryInfos {
  display: grid;
  grid-auto-columns: 1fr 120px;
  grid-gap: 150px;
  grid-auto-flow: column;
  margin-bottom: 30px;
}
.mea-quiz {
  display: grid;
  grid-auto-columns: 1fr 1fr;
  grid-gap: 25px;
  grid-auto-flow: column;
  @include screen('small', 'medium') {
    grid-auto-columns: 1fr;
    grid-auto-flow: row;
    height: 250px;
  }
}
</style>

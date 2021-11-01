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
    <ButtonSet />
  </div>
</template>

<style lang="scss" scoped>
.patient-details-template{
  display: grid;
  justify-content: center;
  grid-gap: 30px;
}
.PatientImage{
  display: grid;
  justify-items: space-between;
  @include screen('small', 'medium') {
    display: none;
  }
}
  .primaryInfos{
    display: grid;
    grid-auto-columns: 1fr 120px;
    grid-gap: 150px;
    grid-auto-flow: column;
    margin-bottom: 30px;
  }
  .mea-quiz{
    display: grid;
    grid-auto-columns: 1fr 1fr;
    grid-gap: 50px;
    grid-auto-flow: column;
    @include screen('small', 'medium') {
      grid-auto-columns: 1fr;
      grid-auto-flow:row;
      height: 150px;
    }
  }
</style>
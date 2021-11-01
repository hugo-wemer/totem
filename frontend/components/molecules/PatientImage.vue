<template>
  <img src="@/assets/img/patient-image.svg" alt="PatientImage">
</template>

<style lang="scss" scoped>
  img{
    height: 120px;
    @include screen('small', 'medium') {
    display: none;
  }
  }
</style>
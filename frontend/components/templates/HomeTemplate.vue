<template>
  <div class="content">
    <div class="wrapper">
      <div class="search">
        <Search />
      </div>
      <div class="transfer">
        <TransferButton @transfer="transfer($event)"/>
      </div>
    </div>
    <div class="undone-lists">
      <SymptomaticList @transferedSymp="transferedSymp($event)"/>
      <AsymptomaticList />
    </div>
    <div class="done-list">
      <Transfereds />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TransferButton from '@/components/molecules/TransferButton.vue'

export default Vue.extend({
  components: { TransferButton },

  data(){
    return {
      transferedUsersVal: []
    }
  },
  methods:{
    transferedSymp(event: []){
      const transferUsers = event
      /* console.log(transferUsers) */
      this.transferedUsersVal = transferUsers
    },
    transfer(event: boolean){
      /* const teste = this.transferedSymp(transferUsers) */
      const transference = event
      console.log(this.transferedUsersVal)
      return transference
    },
  },

})
</script>

<style lang="scss" scoped>
.list {
  background-color: red;
}
.wrapper {
  display: grid;
  justify-content: space-between;
  align-items: center;
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    justify-content: center;
  }
}
.transfer {
  position: absolute;
  left: 68.9vw;
  @include screen('small', 'medium') {
    display: grid;
    position: relative;
    left: -50px;
    align-items: center;
    margin-top: 20px;
  }
  justify-content: center;
}
.undone-lists {
  display: grid;
  //grid-gap: 140px;
  grid-template-columns: 1fr 1fr;
  @include screen('small', 'medium') {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>

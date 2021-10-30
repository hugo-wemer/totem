<template>
  <div class="content">
    <div class="wrapper">
      <div class="search">
        <Search />
      </div>
      <div class="transfer">
        <TransferButton @transfer="transfer($event)" />
      </div>
    </div>
    <div class="undone-lists">
      <SymptomaticList @transferedSymp="transferedSymp($event)" />
      <AsymptomaticList @transferedAsymp="transferedAsymp($event)"/>
    </div>
    <div class="done-list">
      <Transfereds />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TransferButton from '@/components/molecules/TransferButton.vue'
import { transfer } from '@/store'

export default Vue.extend({
  components: { TransferButton },

  data() {
    return {
      transferedUsersValSym: [],
      transferedUsersValAsym: []
    }
  },
  methods: {
    transferedSymp(event: []) {
      const transferUsersSym = event
      this.transferedUsersValSym = transferUsersSym
    },
    transferedAsymp(event: []) {
      const transferUsersAsym = event
      this.transferedUsersValAsym = transferUsersAsym
    },
    async transfer(event: boolean) {
      const transferenceST = event
      await transfer.update({
        transference: 'transfered',
        idsSym: this.transferedUsersValSym,
        idsAsym: this.transferedUsersValAsym
      })
      return transferenceST
    }
  }
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

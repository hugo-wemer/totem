<template>
  <div class="transfer-button">
    <fa class="icon" icon="check-double" />
    <button class="button" type="submit" formmethod="post" @click="untransfer">
      Remover transferencia
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {transfer, patients} from '@/store'
export default Vue.extend({
    computed: {
    $patient() {
      return patients.$single
    }
  },
  methods:{
    untransfer(){
      transfer.reupdate({id: this.$patient.id})
    }
  }
})
</script>

<style lang="scss" scoped>
.transfer-button {
  display: grid;
  height: 30px;
  width: 60px;
  align-content: center;
  color: color(primary, lightest);
}
.icon {
  height: 30px;
  width: 60px;
  position: absolute;
  align-content: center;
  cursor: pointer;
}
.button {
  width: 170px;
  height: 50px;
  background-color: color(primary, darkest);
  color: color(primary, lightest);
  padding-left: 20px;
  cursor: pointer;
  text-align: left;
  padding-left: 50px;
}
</style>

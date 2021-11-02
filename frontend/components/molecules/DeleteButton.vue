<template>
  <div class="delete-button">
    <fa class="icon" icon="trash" />
    <button
      class="button"
      type="submit"
      formmethod="post"
      @click="del"
    >
      Deletar
    </button>
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
  },

  methods: {
    del(){
        patients.delete({id: this.$patient.id})
    }
  }
})
</script>

<style lang="scss" scoped>
.delete-button {
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
}
</style>

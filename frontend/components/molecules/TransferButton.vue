<template>
  <div class="transfer-button">
    <fa class="icon" icon="check-double" />
    <button
      class="button"
      type="submit"
      formmethod="post"
      @click="$emit('transfer', 1)"
    >
      Transferir
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
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
}
</style>

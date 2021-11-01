<template>
  <div class="delete-button">
    <DeleteButton @delete="deletar($event)" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DeleteButton from '@/components/molecules/DeleteButton.vue'
import { patients } from '@/store'

export default Vue.extend({
  components: { DeleteButton },
  computed: {
    $patient() {
      return patients.$single
    }
  },
  methods: {
    async deletar() {
      await patients.delete
    }
  }
})
</script>

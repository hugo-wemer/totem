<template>
  <footer class="footer">
    <Container>
      <Logo />
      <p>Copyright &copy; {{ currentYear }} Screening</p>
    </Container>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
})
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 70px;
  background: color('primary', 'darkest');
  .container {
    display: grid;
    height: 100%;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    p {
      color: color('primary');
    }
  }
}
</style>

<template>
  <form @submit.prevent="onSubmit">
    <div class="fom-field">
      <BaseInput
        v-model="username"
        type="username"
        placeholder="Digite seu usuário"
      />
    </div>
    <div class="fom-field">
      <BaseInput
        v-model="password"
        type="password"
        placeholder="Digite sua senha"
      />
    </div>
    <BaseButton text="Entrar"></BaseButton>
    <p>{{teste}}</p>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { auth } from '@/store'

export default Vue.extend({
  middleware: 'guest',
  data() {
    return {
      username: '',
      password: '',
      teste: ''
    }
  },
  methods: {
    async onSubmit() {
      try {
        await auth.create({
          username: this.username,
          password: this.password
        })
        this.$router.push('/')
      } catch {
        this.teste = "CatchError"
      }
    }
  }
})
</script>

<style lang="scss" scoped>
form {
  input {
    width: 100% !important;
    padding: 0.7rem 1.2rem;
  }
  display: grid;
  grid-gap: 0.8rem;
  button {
    width: 100%;
  }
  a {
    justify-self: end;
    font-size: 14px;
    color: white;
  }
}
</style>

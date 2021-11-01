<template>
<div class="form">
    <form @submit.prevent="onSubmit">
      <div class="fom-field">
        <BaseInput
          v-model="username"
          class="inputs"
          type="username"
          placeholder="Digite seu usuário"
        />
      </div>
      <div class="fom-field">
        <BaseInput
          v-model="password"
          class="inputs"
          type="password"
          placeholder="Digite sua senha"
        />
      </div>
      <BaseButton class="button" text="Entrar"></BaseButton>
     <clientOnly>
        <notifications position="bottom center" classes="notifications" :max="1" />
    </clientOnly>
    </form>
  </div>
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
        this.$notify({
          type: 'success',
          text: 'Sucesso! Você será redirecionado.'
        })
        setTimeout(() => this.$router.push('/'), 2000)
      } catch {
        this.$notify({
          type: 'error',
          text: 'Login Incorreto'
        })
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
.form{
  background-color: color(primary, darkest);
  height: 100vh;
  display: grid;
  justify-content: center;
  align-content: center;
  margin-bottom: -174.400px;
  position: fixed;
  width: 100vw;

}
.inputs{
  border-radius: 10px;
}
.button{
  border-radius: 10px;
  height: 30px;
  cursor: pointer;
  background-color: color(primary, lightest);
}
.button:hover{
  background-color: color(success);
}

</style>

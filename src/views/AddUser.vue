<template>
  <div class="add-user">
    <h3>Adicionar Usuário</h3>
    <b-container fluid>
      <b-card class="conteiner">
        <b-row class="my-3">
          <b-col>
            <b-form-input id="name" v-model="user.name" 
                size="lg" placeholder="*Nome"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="my-3">
          <b-col>
            <b-form-input id="email" v-model="user.email" 
                size="lg" placeholder="*Email"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="my-3">
          <b-col>
            <b-form-input id="phone" size="lg" v-model="user.phone" 
                placeholder="*Telefone"></b-form-input>
          </b-col>
        </b-row>
        <div class="controls d-flex">
          <b-button @click="addUser" variant="success" class="mr-2">Adicionar</b-button>
          <b-button @click="goHome">Voltar</b-button>
        </div>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import { showSuccess, showError } from '../global.js'

export default {
    computed: {
      user: {
        get(){
          return this.$store.state.user
        },
        set(user){
          this.$store.commit("changeUser", user)
        }
      }
    },
    methods: {
        addUser(){
            this.$http.post('/users', this.user).then(() => {
                showSuccess('Added User!')
                this.$store.commit('cleanUser')
            }).catch(showError)
        },
        goHome(){
            this.$router.push('/')
            this.$store.commit('cleanUser')
        }
    }
};
</script>

<style>
.add-user h3 {
  text-align: center;
  margin-bottom: 2rem;
}

.conteiner {
  width: 700px;
  margin: 0px auto
}
</style>
<template>
  <div class="edit-user">
    <h3>Editar Usuário</h3>
    <b-container fluid>
      <b-card class="conteiner">
        <b-row class="my-3">
          <b-col>
            <b-form-input id="name" v-model="user.name" 
                size="lg"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="my-3">
          <b-col>
            <b-form-input id="email" v-model="user.email" 
                size="lg"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="my-3">
          <b-col>
            <b-form-input id="phone" v-model="user.phone" 
              size="lg"></b-form-input>
          </b-col>
        </b-row>
        <div class="controls d-flex">
          <b-button @click="editUser" variant="primary" class="mr-2">Salvar</b-button>
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
      user(){
        return this.$store.getters.user
      }
    },
    methods: {
        editUser(){
            this.$http.put(`/users/${this.user._id}`, this.user).then(() => {
                this.$store.commit('cleanUser')
                this.$router.push('/')
                showSuccess('Edited User!')
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
.edit-user h3 {
  text-align: center;
  margin-bottom: 2rem;
}

.conteiner {
  width: 700px;
  margin: 0px auto
}
</style>
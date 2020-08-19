<template>
  <div class="modal-del">
    <b-modal
      ref="modalDel"
      id="modalDel"
      title="BootstrapVue"
      hide-footer
      no-close-on-esc
      hide-header-close
    >
      <template v-slot:modal-title>
        <h3>Deletar o Usuário</h3>
      </template>
      <p>
        Deseja deletar o registro de
        <strong>{{ user.name }}</strong>?
      </p>
      <p class="text-danger">Essa ação não poderá ser desfeita!</p>
      <b-button class="mr-2" variant="danger" @click="delUser()">Deletar</b-button>
      <b-button class="mr-2" @click="cancelDel()">Cancelar</b-button>
    </b-modal>
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
    delUser() {
      this.$http.delete(`/users/${this.user._id}`, this.user)
        .then(() => {
          showSuccess("Deleted user!")
          this.$refs["modalDel"].hide()
          this.$store.commit('cleanUser')
          this.$store.dispatch("getUsers", this.$store.state.params)
        })
        .catch(showError)
    },
    cancelDel() {
      this.$refs["modalDel"].hide()
      this.$store.commit("cleanUser")
    }
  }
}
</script>

<style>
</style>
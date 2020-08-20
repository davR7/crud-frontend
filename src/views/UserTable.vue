<template>
  <div class="user-table">
    <div class="table-title d-flex justify-content-between">
        <div class="d-flex justify-content-between">
          <img src="../assets/logo.png" width="50px" alt="logo">
          <h3>Lista de Contatos</h3>
        </div>
        <b-button pill variant="success" @click="goAddUser">
          <b-icon icon="person-plus-fill"></b-icon>Adicionar</b-button>
    </div>
    <div class="table-wrapper">
      <b-table striped :items="items.users" :fields="fields" id="crud-table">
        <template v-slot:cell(actions)="row">
          <b-button size="sm" class="mr-2" variant="primary" 
            @click="goEditUser(row.item)">
            <b-icon icon="pencil"></b-icon>
          </b-button>
          <b-button size="sm" class="mr-2" variant="danger" v-b-modal.modalDel
            @click="captureUser(row.item)">
            <b-icon icon="trash"></b-icon>
          </b-button>
        </template>
      </b-table>
      <div class="table-control d-flex justify-content-between">
        <div v-show="!!items.totalcount">
          <b-pagination
            v-model="currentPage"
            :total-rows="items.totalcount"
            :per-page="limit"
            aria-controls="crud-table"
            @click.native="pageChanged()"
          ></b-pagination>
        </div>
        <p>Exibindo {{ items.users ? items.users.length : 0 }} 
            de {{ items.totalcount || 0 }} registros.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      limit: 8,
      currentPage: 1,
      fields: [
        {
          key: "_id",
          label: "ID",
        },
        {
          key: "name",
          label: "Nome",
        },
        {
          key: "email",
          label: "Email",
        },
        {
          key: "phone",
          label: "Telefone",
        },
        {
          key: "actions",
          label: "Ações",
        },
      ],
    };
  },
  computed: {
    items() {
      return this.$store.getters.users;
    },
  },
  methods: {
    pageChanged() {
      this.$store.dispatch("getUsers", {
        page: this.currentPage,
        limit: this.limit,
      })
    },
    goAddUser(){
      this.$router.push('/adduser')
    },
    captureUser(user){
      this.$store.commit('updateUser', user)
    },
    goEditUser(user){
      this.captureUser(user)
      this.$router.push('/edituser')
    },
  },
  watch: {
    currentPage(){
      localStorage.setItem('page', this.currentPage)
    }
  },
  created(){
    const newPage = localStorage.getItem('page')
    newPage ? this.currentPage = newPage : 1
  },
  mounted() {
    this.$store.dispatch("getUsers", {
      page: this.currentPage,
      limit: this.limit,
    })
  }
}
</script>

<style>
.user-table .table-title {
  background-color: #000;
  color: #fff;
  padding: 1.2rem 1.5rem;
  border-radius: 5px 5px 0 0;
}

.user-table .table-title h3 {
  margin: 0;
  padding: 0.5rem 0 0 0.2rem;
  font-size: 1.7rem;
}

.user-table .table-wrapper {
  border: 1px solid #ddd;
  padding: 1rem 1.5rem;
  border-radius: 0 0 5px 5px;  
}
</style>
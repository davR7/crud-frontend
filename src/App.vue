<template>
  <div id="app">
    <h2>Crud com VueJS</h2>
    <b-container>
      <router-view />
    </b-container>
    <ModalDel />
  </div>
</template>

<script>
import ModalDel from './components/ModalDel'

export default {
  name: 'App',
  components: { ModalDel }
}

</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Varela Round', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

#app h2 {
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 30px;
}
</style>

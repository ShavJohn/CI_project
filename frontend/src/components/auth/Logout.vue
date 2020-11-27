<template>
  <div>
    <b-button @click="logout">Logout</b-button>
  </div>
</template>

<script>
  export default {
      computed: {
        logedIn(){
          return this.$store.getters.authenticate
        }
      },
      methods: {
        logout(){
          this.$store.dispatch('logout', this.logedIn).then(() => {
            this.$store.commit('auth', null)
            this.$router.push({name: 'Home'})
          })
        }
      },
      mounted() {

      },
  }
</script>

<style>

</style>

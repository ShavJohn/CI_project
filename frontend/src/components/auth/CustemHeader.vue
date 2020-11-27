<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand>MyProject</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto" right>
            <logout v-if="logedIn"/>
            <login v-else/>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import Login from './Login.vue'
import Logout from './Logout.vue'
  export default {
    computed: {
        logedIn(){
          return this.$store.getters.authenticate
        }
      },
    data() {
      return {

      }
    },
    components: { Logout, Login },
  }
</script>

<style>

</style>

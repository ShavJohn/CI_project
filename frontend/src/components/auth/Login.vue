<template>
  <div>
    <b-navbar-nav>
      <b-form inline @submit.prevent="login">
        <b-input
          class="mb-2 mr-sm-2 mb=sm-0"
          placeholder="Username"
          v-model="user_credentials.email"
        ></b-input>
        <b-input
          type="password"
          class="mb-2 mr-sm-2 mb=sm-0"
          v-model="user_credentials.password"
          placeholder="Password"
        ></b-input>
        <b-button variant="primary" type="submite" class="mb-2 mr-sm-2 mb=sm-0">
           <b-spinner v-if="loader" variant="white"></b-spinner>
          <span v-else>Login</span>
        </b-button>
      </b-form>
    </b-navbar-nav>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loader: false,
        user_credentials: {}
      }
    },
    computed: {
      role(){
        return this.$store.getters.role_getter
      }
    },
    methods: {
      login(){
        if(this.loader) return;
        this.loader = true
        this.$store.dispatch('login', this.user_credentials).then(() => {
          this.$store.dispatch('roleCheck').then(() =>{
            if(this.role == 'admin'){
              this.$router.push({name: 'Admin_Profile'})
            }
            else{
              this.$router.push({name: 'User_Profile'})
            }
          })
        }).finally(() => {
          this.loader = false
        })
      }
    }

  }
</script>

<style>

</style>

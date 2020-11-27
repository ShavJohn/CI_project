<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="3" ref="register">
          <b-alert v-if="registerd"  show variant="success">Registerd Successfully</b-alert>
          <div v-else>
            <h2 py-3>Register</h2>
            <form autocomplete="off" @submit.prevent="registration">

                <b-form-group>
                  <b-form-input
                    v-model="user_credantials.name"
                    type="text"
                    required
                    placeholder="Username"
                  >
                  </b-form-input>
                </b-form-group>

                <b-form-group>
                  <b-form-input autocomplete="off" autofill="off"
                    v-model="user_credantials.email"
                    type="email"
                    required
                    placeholder="E-mail"
                  >
                  </b-form-input>
                </b-form-group>

                <b-form-group>
                  <b-form-input
                    v-model="user_credantials.password"
                    type="password"
                    required
                    placeholder="Password"
                  >
                  </b-form-input>
                </b-form-group>

                <b-form-group>
                  <b-form-input
                    v-model="user_credantials.password_confirm"
                    type="password"
                    required
                    placeholder="Password Confirm"
                  >
                  </b-form-input>
                </b-form-group>

                <button class="btn btn-primary btn-block">
                  <b-spinner v-if="loader" variant="white"></b-spinner>
                  <span v-else>Register</span>
                </button>

            </form>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loader: false,
        registerd: false,
        user_credantials: {}
      }
    },
    methods: {
      registration(){
        if(this.loader) return;
        this.loader = true
        this.$store.dispatch('register', this.user_credantials).then((res) => {
          this.$store.dispatch('login', this.user_credantials).then((res) => {
            this.$router.push({name: 'User_Profile'})
          })
          console.log(res.data.message)
        }).finally(() => {
          this.loader = false
          this.registerd = true
        })
      }
    },

  }
</script>

<style>

</style>

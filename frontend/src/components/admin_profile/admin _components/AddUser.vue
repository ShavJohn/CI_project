<template>
  <div>
    <b-button @click="show=true" >Add User</b-button>
    <b-modal v-model="show">
      <b-container>
      <b-row>
        <b-col cols="7" ref="register">
          <div>
            <h2 py-3>Register</h2>
            <form>
                <b-form-group>
                  <b-form-input
                    v-model="client_credantials.name"
                    type="text"
                    required
                    placeholder="Username"
                  >
                  </b-form-input>
                </b-form-group>

                <b-form-group>
                  <b-form-input
                    v-model="client_credantials.email"
                    type="text"
                    required
                    placeholder="E-mail"
                  >
                  </b-form-input>
                </b-form-group>

                <b-form-group>
                  <b-form-input
                    v-model="client_credantials.password"
                    type="password"
                    required
                    placeholder="Password"
                  >
                  </b-form-input>
                </b-form-group>

                <b-form-group>
                  <b-form-input
                    v-model="client_credantials.password_confirm"
                    type="password"
                    required
                    placeholder="Password Confirm"
                  >
                  </b-form-input>
                </b-form-group>

              </form>
            </div>
          </b-col>
        </b-row>
      </b-container>

      <template #modal-footer>
        <div class="w-100">

          <button @click.prevent="registration" class="btn btn-primary float-left" size="sm">
            <b-spinner v-if="loader" variant="white"></b-spinner>
            <span v-else>Add User</span>
          </button>

          <b-button
            variant="primary"
            size="md"
            class="float-right"
            @click="show=false"
          >
            Close
          </b-button>
        </div>
      </template>

    </b-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        loader: false,
        client_credantials: {}
      }
    },
    methods: {
      registration(){
        if(this.loader) return;
        this.loader = true
        this.$store.dispatch('register', this.client_credantials).then((res) => {
            console.log(res.data.message)
            this.show = false;
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

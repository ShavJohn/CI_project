<template>
  <div>
    <b-modal v-model="show">
      <b-container>
        <b-row>
          <b-col cols="7" ref="register">
            <div>
              <h2 py-3>Update User</h2>
              <form>
                <b-form-group>
                  <span v-if="new_client_credantials">Name {{ new_client_credantials.name }}</span>
                  <b-form-input
                    v-model="new_client_credantials.name"
                    type="text"
                    required
                    placeholder="Username"
                  >
                  </b-form-input>
                </b-form-group>

                <b-form-group>
                  <span v-if="new_client_credantials">Email {{ new_client_credantials.email }}</span>
                  <b-form-input
                    v-model="new_client_credantials.email"
                    type="text"
                    required
                    placeholder="E-mail"
                  >
                  </b-form-input>
                </b-form-group>

                <b-form-group>
                  <b-form-input
                    v-model="new_client_credantials.password"
                    type="password"
                    required
                    placeholder="Password"
                  >
                  </b-form-input>
                </b-form-group>

                <b-form-group>
                  <b-form-input
                    v-model="new_client_credantials.password_confirm"
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

          <button @click="update_user" class="btn btn-primary float-left" size="sm">
            <b-spinner v-if="loader" variant="white"></b-spinner>
            <span v-else>Update User</span>
          </button>

          <b-button
            variant="primary"
            size="md"
            class="float-right"
            @click="closeModal()">
            Close
          </b-button>
        </div>
      </template>

    </b-modal>
  </div>
</template>

<script>
  export default {
    props: {
      show: {
        required: true
      }
    },
    data() {
      return {
        loader: false,
        client_credantials: {}
      }
    },
    computed: {
      new_client_credantials(){
        return this.$store.getters.user_getter
      }
    },
    methods: {
      closeModal() {
        this.$root.$emit('close_modal')
      },
      update_user(){
        if(this.loader) return;
        this.loader = true
        this.$store.dispatch('updateUser', this.new_client_credantials).then((res) => {
            this.show = false;
        }).finally(() => {
          this.loader = false
          this.registerd = true
          this.$root.$emit('close_modal')
        })
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>

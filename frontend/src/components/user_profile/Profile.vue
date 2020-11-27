<template>
  <div>
    User Profile
    <b-button @click.prevent="roleCheck">Get Role</b-button>
    Youre role is {{ role }}
  </div>
</template>

<script>
  export default {
    computed: {
      role(){
        return this.$store.getters.role_getter
      }
    },
    beforeMount() {

    },
    methods: {
      roleCheck(){
        this.$store.dispatch('roleCheck')
      }
    },
  }
</script>

<style>

</style>

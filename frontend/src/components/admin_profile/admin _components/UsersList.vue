<template>
  <div>
    <b-table
      id="my-table"
      :items="usersList.users"
      small
    ></b-table>
    <b-pagination
      v-model="current"
      :total-rows="usersList.count"
      :per-page="perPage"
      aria-controls="my-table"
      align="center"
      first-text="⏮"
      prev-text="⏪"
      next-text="⏩"
      last-text="⏭"
    ></b-pagination>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        current: 0,
        perPage: 3
      }
    },
    watch: {
      'current': function(val) {
          this.$store.dispatch('getusersList', val-1)
      }
    },
    computed: {
      usersList(){
        return this.$store.getters.users_list_getter
      }
    },
    beforeMount() {
      this.$store.dispatch('getusersList', this.current)
    },
  }
</script>

<style>

</style>

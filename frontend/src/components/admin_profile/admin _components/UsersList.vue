<template>
  <div>
    <update-user :show="show"/>
    <b-table
      id="my-table"
      :items="usersList.users"
      small
      :fields="tabe_params.field">
        <template v-slot:cell(actions)="data">
          <b-button @click="show_user(data.item.id)">Update</b-button>

          <b-button @click="del_user(data.item.id)">Delete</b-button>
        </template>
      </b-table>
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
import UpdateUser from './UpdateUser.vue'
  export default {
  components: { UpdateUser },
    data() {
      return {
        current: 1,
        perPage: 5,
        tabe_params: {
            field: [
              {key: 'id'},
              {key: 'name'},
              {key: 'email'},
              {key: 'actions'},
            ]
        },
        show: false,
        skip: 0,
        take: 5,
      }
    },
    watch: {
      'current': function(val) {

        this.skip =  (val - 1) * 5;

        let data = {
        skip: this.skip,
        take: this.take,
      }
          this.$store.dispatch('getusersList', data)
      }
    },
    computed: {
      usersList(){
        return this.$store.getters.users_list_getter
      }
    },
    beforeMount() {
        let data = {
        skip: this.skip,
        take: this.take
      }
      this.$store.dispatch('getusersList', data)
    },
    created() {
        this.$root.$on('close_modal', () => {
            this.show = false
      })
    },
    methods: {
      show_user(id){
         this.show = true
        this.$store.dispatch('showUser', id).then((res) => {

        })
      },
      del_user(id){
        this.$store.dispatch('delUser', id)
      }
    },
  }
</script>

<style>

</style>

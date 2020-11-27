<template>
  <div>
    <b-container>
      Admin Profile
      <add-user/>
      <users-list/>
    </b-container>
  </div>
</template>

<script>
import AddUser from './admin _components/AddUser.vue'
import UsersList from './admin _components/UsersList.vue'
  export default {
  components: { AddUser, UsersList },

  }
</script>

<style>

</style>

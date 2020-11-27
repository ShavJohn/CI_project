
export default {
  state: {
    usersList: {
      count: 0,
      users: []

    }
  },
  getters: {
    users_list_getter(state){
      return state.usersList
    }
  },
  mutations: {
    users_list_setter(state, data){
      state.usersList = data
    }
  },
  actions: {
    getusersList(context, data){
      return new Promise((resolve, reject) => {
        axios.get(`/get-users/${data}`).then((res) => {
          console.log(res)
          context.commit('users_list_setter', res.data)
        })
      })
    }
  }

}

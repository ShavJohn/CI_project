
export default {
  state: {
    user: [],
    usersList: {
      count: 0,
      users: [],
    }
  },
  getters: {
    user_getter(state){
      return state.user
    },
    users_list_getter(state){
      return state.usersList
    },
  },
  mutations: {
    users_list_setter(state, data){
      state.usersList = data
    },
    user_setter(state, data){
      state.user = data
    }
  },
  actions: {
    getusersList(context, data){
      return new Promise((resolve, reject) => {
        axios.get('/users', {params: data}).then((res) => {
          context.commit('users_list_setter', res.data)
          resolve(res)
        }).catch(() => {
          reject()
        })
      })
    },
    showUser(context, user){
      return new Promise((resolve, reject) => {
        axios.get(`/user/${user}`).then((res) => {
          context.commit('user_setter', res.data);
          resolve(res)
        }).catch(() => {
          reject()
        })
      })
    },
    storeUser(context, data){
      return new Promise((resolve, reject) => {
        axios.post('/users', data).then((res) => {
          resolve(res)
        }).catch(() => {
          reject()
        })
      })
    },
    updateUser(context, user){
      return new Promise((resolve, reject) => {
        axios.put(`/user/${user.id}`, user).then((res) => {
          resolve(res)
        }).catch(() => {
          reject()
        })
      })
    },
    delUser(context, user){
      return new Promise((resolve, reject) =>  {
        axios.delete(`/user/${user}`).then((res) => {
          resolve(res)
        }).catch(() => {
          reject()
        })
      })
    }
  }

}

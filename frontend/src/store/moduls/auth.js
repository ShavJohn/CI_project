
export default {
  state: {
    authUser: localStorage.getItem('access_token'),
    role: null
  },
  getters: {
    authenticate(state){
      return state.authUser
    },
    role_getter(state){
      return state.role
    }
  },
  mutations: {
    auth(state, data){
      state.authUser = data
    },
    role_setter(state, data){
      state.role = data
    }
  },
  actions: {
    register(context, data){
      return new Promise((resolve, reject) => {
        axios.post('/register', data).then(res => {

          resolve(res)
        }).catch(() => {
          reject()
        })
      })
    },
    login(context, data){
      return new Promise((resolve, reject) => {
        axios.post('/login', data).then(res => {
          localStorage.setItem('access_token', res.data.token);
          axios.defaults.headers.Authorization = `Bearer ${res.data.token}`;
          context.commit('auth', res.data.logged_in_user)
          resolve(res)
        }).catch(() => {
          reject()
        })
      })
    },
    logout(context, data){
        return new Promise((resolve, reject) => {
        axios.get('/logout').then((res) => {
            localStorage.removeItem('access_token');
            resolve(res)
        }).catch(() => {
          reject()
        })
      })
    },
    roleCheck(context, data){
      return new Promise((resolve, reject) => {
        axios.get('/role-check').then(res => {
          if (res && res.status >= 200 && res.status <= 399) {
            context.commit('role_setter', res.data.role)
            resolve(res)
          } else {
            reject(res)
          }
        }).catch(err =>  {
          reject(err)
        })
      })
    }
  }
}

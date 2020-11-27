import Vue from 'vue';
import Vuex from 'vuex';

import auth from './moduls/auth'
import users from './moduls/users'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      auth: auth,
      users: users
    }
})

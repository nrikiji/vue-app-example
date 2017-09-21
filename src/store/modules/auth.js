import api from '@/api'

export default {
  namespaced: true,
  state: {
    loggedIn: false
  },

  mutations: {
    login (state) {
      state.loggedIn = true
    },
    logout (state) {
      state.loggedIn = false
    }
  },

  actions: {
    login ({ commit }, payload) {
      api.get('/login.php', {
        mail: payload.mail,
        pass: payload.pass
      }).then(function (response) {
        commit('login')
        payload.router.push('/member')
      })
    }
  }
}

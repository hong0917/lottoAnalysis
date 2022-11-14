import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls'

Vue.use(Vuex)

const ls = new SecureLS({ isCompression: false })

const store = new Vuex.Store({
  plugins: [createPersistedState({
    storage: {
      getItem: key => ls.get(key),
      setItem: (key, value) => ls.set(key, value),
      removeItem: key => ls.remove(key)
    }
  })]
})

export default store

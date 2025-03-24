import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    loggedIn: false,
    user: null
  }),
  actions: {
    login(user: null) {
      this.loggedIn = true
      this.user = user
    },
    logout() {
      this.loggedIn = false
      this.user = null
    }
  },
  getters: {
    isLoggedIn: (state) => state.loggedIn,
    currentUser: (state) => state.user
  }
})
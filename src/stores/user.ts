import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: localStorage.getItem('name') || '',
    logged: false,
    locale: localStorage.getItem('locale') || 'pt'
  }),
  actions: {
    login() {
      this.logged = true
    },

    logout() {
      this.logged = false
    },

    setName(name: string) {
      this.name = name
      localStorage.setItem('name', name)
    },

    setLocale(locale: string) {
      this.locale = locale
      localStorage.setItem('locale', locale)
    }
  }
})

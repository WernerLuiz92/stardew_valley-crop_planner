import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    nome: 'Werner',
    logado: false
  }),
  actions: {
    login() {
      this.logado = true
    }
  }
})

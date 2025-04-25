import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    home: { title: 'Welcome to the Crop Planner!' }
  },
  pt: {
    home: { title: 'Bem-vindo ao Planejador de Colheitas!' }
  }
}

export const i18n = createI18n({
  locale: 'pt',
  fallbackLocale: 'en',
  legacy: false,
  globalInjection: true,
  messages
})

import { createI18n } from 'vue-i18n'
import pt from './pt'
import en from './en'

// Recupera do localStorage ou padrão 'pt'
const savedLocale = localStorage.getItem('idioma') || 'pt'

export const i18n = createI18n({
  locale: savedLocale,
  fallbackLocale: 'en',
  legacy: false,
  globalInjection: true,
  messages: {
    pt,
    en
  }
})

<template>
      <header class="py-10">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold tracking-tight text-white">{{ t("home.title") }}</h1>
        </div>
      </header>
    <main class="-mt-32">
      <div class="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div class="rounded-lg bg-white px-5 py-6 shadow-sm sm:px-6">
          <div>
            <h1>{{ t("home.subtitle") }}</h1>
            <button @click="switchLang" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
              {{ user.locale === "pt" ? "Switch to English" : "Mudar para Portugês" }}
            </button>
          </div>
        </div>
      </div>
    </main>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useUserStore } from "@/stores/user";
const { t, locale } = useI18n();
const user = useUserStore();

function switchLang() {
  locale.value = locale.value === "pt" ? "en" : "pt";
  user.setLocale(locale.value);
}
</script>

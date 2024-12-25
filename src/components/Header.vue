<script setup lang="ts">
import { useTranslation } from "i18next-vue";
import { Bean } from "lucide-vue-next";
import { onMounted } from "vue";
// import { computed, watch } from "vue";

const { t, i18next } = useTranslation("header");

// watch(
//   () => i18next.language,
//   (newVal, oldVal) => {
//     console.log({ newVal, oldVal });
//   },
// );

// const currentLang = computed(() => i18next.language);

async function langChange(lang: string) {
  try {
    await i18next.changeLanguage(lang);
    // По стратегии i18next кэш сохраняется в cookie
    // localStorage.setItem("i18nextLng", lang);
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {});
</script>

<template>
  <header class="app-header">
    <div class="container">
      <div class="header-layout">
        <nav class="nav-bar">
          <div class="nav-logo">
            <router-link to="/">
              <Bean :size="32" />
            </router-link>
          </div>
          <ul class="nav-list">
            <li>
              <router-link to="/register">{{ t("nav.create-account") }}</router-link>
            </li>
            <li>
              <router-link to="/about">{{ t("nav.about") }}</router-link>
            </li>
          </ul>
        </nav>
        <div class="right-bar">
          <div class="btn-group">
            <button @click="langChange('ru')">Рус</button>/
            <button @click="langChange('en')">En</button>
          </div>
          <!-- TODO: add switch theme mode -->
          <!-- <button>
            <SunMoon :size="24" />
          </button> -->
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  padding: 1rem 0;
  background-color: var(--nav-bg);
}

.header-layout {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-bar {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-list {
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
}

.right-bar {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>

<script setup lang="ts">
import { useTranslation } from "i18next-vue";

const { t } = useTranslation("about");
</script>

<template>
  <div class="container">
    <h1>{{ t("title") }}</h1>
    <p class="about-description">
      {{ t("description") }}
    </p>
  </div>
</template>

<style scoped>
.about-description {
  max-width: 500px;
}
</style>

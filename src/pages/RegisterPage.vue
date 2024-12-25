<script setup lang="ts">
import { useTranslation } from "i18next-vue";

const { t } = useTranslation("register");
</script>

<template>
  <div class="container">
    <h1>{{ t("base.title") }}</h1>
    <div class="form-container">
      <form class="register-form">
        <div class="form-group">
          <label for="name">{{ t("form.name") }}</label>
          <input type="text" id="name" name="name" />
        </div>
        <div class="form-group">
          <label for="email">{{ t("form.email") }}</label>
          <input type="text" id="email" name="email" />
        </div>
        <div class="form-group">
          <label for="password">{{ t("form.password") }}</label>
          <input type="password" id="password" name="password" />
        </div>
        <div class="form-group">
          <label for="confirm-password">{{ t("form.confirm-password") }}</label>
          <input type="password" id="confirm-password" name="confirm-password" />
        </div>
        <button class="btn" type="submit">{{ t("form.submit") }}</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.register-form {
  max-width: 500px;
}
</style>

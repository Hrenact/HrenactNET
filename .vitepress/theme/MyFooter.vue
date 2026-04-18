<!-- .vitepress/theme/MyFooter.vue -->
<template>
  <footer class="vp-footer">
    <p class="license">
      Released under the
      <a
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        target="_blank"
        rel="noopener noreferrer"
      >
        CC BY-NC-SA 4.0 License
      </a>.
    </p>
    <p class="copyright">
      Copyright © {{ startYear }}–{{ currentYear }} Hrenact
    </p>
  </footer>
</template>

<script setup>
const startYear = 2024
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.vp-footer {
  margin-top: 24px;
  padding-top: 10px;
  border-top: 1px solid var(--vp-c-divider);
  text-align: center;
  font-size: 14px;
  color: var(--vp-c-text-2);
}

/* 段落间距 */
.vp-footer p {
  margin: 6px 0;
}

/* 链接样式 */
.vp-footer a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
}

.vp-footer a:hover {
  text-decoration: underline;
}
</style>
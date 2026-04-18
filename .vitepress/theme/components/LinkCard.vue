<script setup>
defineProps({
  title: String,
  desc: String,
  link: String,
  avatar: String
})
</script>

<template>
  <a class="link-card" :href="link" target="_blank" rel="noreferrer">
    <img class="link-avatar" :src="avatar" alt="" />

    <div class="link-content">
      <div class="link-title">{{ title }}</div>
      <div class="link-desc">{{ desc }}</div>
    </div>
  </a>
</template>

<style scoped>
.link-card {
  display: flex;
  align-items: center;
  gap: 14px;

  padding: 14px;
  border-radius: 14px;

  text-decoration: none;

  background: var(--vp-c-bg-soft);
  border: 1px solid transparent; /* 关键 */

  transition: all 0.25s ease;

  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

.link-card:hover {
  /* transform: translateY(-3px); */
  /* background: var(--vp-c-bg); */
  border-color: var(--vp-c-brand-1);
  box-shadow: var(--vp-shadow-1);
}

/* 头像 */
.link-avatar {
  width: 48px;
  height: 48px;
  border-radius: 5%;
  object-fit: cover;
  flex-shrink: 0;

  /* border: 1px solid var(--vp-c-divider); */
}

/* 内容 */
.link-content {
  display: flex;
  flex-direction: column;

  flex: 1;
  min-width: 0;
}

/* 标题 */
.link-title {
  font-size: 15px;
  font-weight: 600;
  color: var(--vp-c-text-1);

  overflow: hidden;

  /* ✅ 强制允许断行 */
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;

  /* 防止撑爆一行 */
  display: block;
}

/* 描述 */
.link-desc {
  font-size: 13px;
  margin-top: 2px;
  color: var(--vp-c-text-2);

  /* ✅ 允许换行 */
  white-space: normal;
  overflow-wrap: break-word;
  word-break: break-word;

  display: block;
}
</style>
<script setup>
const props = defineProps({
  links: Array,
  columns: {
    type: Number,
    default: 2
  },
  minWidth: {
    type: Number,
    default: 220
  }
})
</script>

<template>
  <div class="link-grid" :style="gridStyle">
    <LinkCard
      v-for="item in links"
      :key="item.link"
      v-bind="item"
    />
  </div>
</template>

<script>
export default {
  computed: {
    gridStyle() {
      return {
        '--cols': this.columns,
        '--min': `${this.minWidth}px`
      }
    }
  }
}
</script>

<style scoped>
.link-grid {
  display: grid;
  gap: 16px;

  /* 与上方内容保持距离 */
  margin-top: 24px;

  /* 默认：安全模式（不会溢出） */
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
}

/* 📱 手机：强制 1 列 */
@media (max-width: 767px) {
  .link-grid {
    grid-template-columns: 1fr !important;
  }
}

/* 💻 桌面：限制最大列数 + minWidth */
@media (min-width: 768px) {
  .link-grid {
    grid-template-columns: repeat(var(--cols), minmax(0, 1fr));
  }
}
</style>
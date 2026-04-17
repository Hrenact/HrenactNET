<script setup>
import DefaultTheme from 'vitepress/theme'
import NotFound from './NotFound.vue'

const DefaultLayout = DefaultTheme.Layout
</script>

<template>
  <DefaultLayout>
    <template #not-found>
      <NotFound />
    </template>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import AppearanceSwitch from './AppearanceSwitch.vue'

const { Layout: DefaultLayout } = DefaultTheme
</script>

<template>
  <DefaultLayout>
    <!-- 桌面导航栏 -->
    <template #nav-bar-content-after>
      <AppearanceSwitch />
    </template>
    <!-- 移动端抽屉 -->
    <template #nav-screen-content-after>
      <AppearanceSwitch variant="screen" />
    </template>
  </DefaultLayout>
</template>

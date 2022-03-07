<template>
  <h1>登陆</h1>
  <p>{{ mainStore.name }}</p>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store/main'

const mainStore = useMainStore()
</script>

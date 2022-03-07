<template>
  <h1>登陆</h1>
  <p>
    用户名：{{ mainStore.name }}
    <br />
    长度: {{ mainStore.nameLength }}
  </p>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store/main'

const mainStore = useMainStore()
</script>

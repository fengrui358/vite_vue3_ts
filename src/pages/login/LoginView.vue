<template>
  <h1>登陆</h1>
  <p>
    用户名：{{ mainStore.name }}
    <br />
    长度: {{ mainStore.nameLength }}
    <br />
    <button @click="updateName">直接修改store中的name</button>
  </p>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store/main'

const mainStore = useMainStore()

const updateName = () => {
  // $patch 修改 store 中的数据
  mainStore.$patch({
    name: '名称被修改了,nameLength也随之改变了',
  })
}
</script>

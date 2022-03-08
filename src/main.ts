import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { createPinia } from 'pinia'

const app = createApp(App)

// // 组件全局引入
// import {
//   // create naive ui
//   create,
//   // component
//   NButton,
// } from 'naive-ui'
// const naive = create({
//   components: [NButton],
// })
// app.use(naive)

// 路由
app.use(router)
// 创建根存储库并将其传递给应用程序
app.use(createPinia())

app.mount('#app')

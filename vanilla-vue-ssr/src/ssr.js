import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'

import App from './App.js'
import router from './router/index.js'
import process from 'process'

const rootPath = process.argv[2] || '/'

const app = createSSRApp(App)
app.use(router)
await router.push(rootPath)
await router.isReady()

renderToString(app).then((html) => {
  console.log(html)
})

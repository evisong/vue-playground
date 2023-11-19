// this runs in Node.js on the server.
import { createSSRApp } from 'vue'
// Vue's server-rendering API is exposed under `vue/server-renderer`.
import { renderToString } from 'vue/server-renderer'

import App from './App.js'
import router from './router/index.js'

const app = createSSRApp(App)
app.use(router)

renderToString(app).then((html) => {
  console.log(html)
})

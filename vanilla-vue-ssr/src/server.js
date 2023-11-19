import express from 'express'
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import App from './App.js'
import router from './router/index.js'

const server = express()

server.get(['/', '/about'], async (req, res) => {
  const app = createSSRApp(App)
  app.use(router)

  try {
    await router.push(req.path)
    await router.isReady()
    const html = await renderToString(app)
    res.send(`<!DOCTYPE html>
<html>
  <head>
    <title>Vue SSR Example</title>
    <link rel="stylesheet" href="/assets/index-84a34640.css">
  </head>
  <body>
    <div id="app">${html}</div>
    <script type="module" src="/assets/client-a4b8ee51.js"></script>
  </body>
</html>
    `)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }
})

server.use(express.static('./dist'))
server.listen(3000, () => {
  console.log(`Server started at http://localhost:3000`)
})

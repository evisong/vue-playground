import express from 'express';
import { createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';

import App from './App.js'
import router from './router/index.js'

const server = express();

// Set up the route to render the Vue.js application
server.get(['/', '/about'], async (req, res) => {
  const app = createSSRApp(App)
  app.use(router)

  try {
    await router.push(req.path)
    await router.isReady()
    renderToString(app).then((html) => {
      res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Vue SSR Example</title>
          <link rel="stylesheet" href="/assets/index-84a34640.css">
        </head>
        <body>
          <div id="app">${html}</div>
          <script type="module" src="./assets/client-ccc10797.js"></script>
        </body>
      </html>
      `)
    })
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }
});

server.use(express.static('./dist'))

// Start the Express.js server
const port = 3000;
server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

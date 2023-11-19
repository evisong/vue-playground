import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.js'

export default {
  components: {
    HelloWorld,
    RouterLink,
    RouterView
  },
  data() {
    return {
      count: 1
    }
  },
  template: `
    <header style="line-height: 1.5; max-height: 100vh;">
      <img alt="Vue logo" class="logo" style="display: block; margin: 0 auto 2rem;"
        src="./assets/logo.svg" width="125" height="125" />

      <div class="wrapper" style="display: flex; place-items: flex-start; flex-wrap: wrap;">
        <HelloWorld msg="You did it!" />

        <nav style="width: 100%; font-size: 12px; text-align: center; margin-top: 2rem;">
          <RouterLink to="/" style="display: inline-block; padding: 0 1rem; border-left: 1px solid var(--color-border);">Home</RouterLink>
          <RouterLink to="/about" style="display: inline-block; padding: 0 1rem; border-left: 1px solid var(--color-border);">About</RouterLink>
        </nav>

        <div>{{count}} <button @click="count++">++</button></div>
      </div>
    </header>

    <RouterView />
  `,
  style: `
    header {
      line-height: 1.5;
      max-height: 100vh;
    }

    .logo {
      display: block;
      margin: 0 auto 2rem;
    }

    nav {
      width: 100%;
      font-size: 12px;
      text-align: center;
      margin-top: 2rem;
    }

    nav a.router-link-exact-active {
      color: var(--color-text);
    }

    nav a.router-link-exact-active:hover {
      background-color: transparent;
    }

    nav a {
      display: inline-block;
      padding: 0 1rem;
      border-left: 1px solid var(--color-border);
    }

    nav a:first-of-type {
      border: 0;
    }

    @media (min-width: 1024px) {
      header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
      }

      .logo {
        margin: 0 2rem 0 0;
      }

      header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
      }

      nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;

        padding: 1rem 0;
        margin-top: 1rem;
      }
    }
  `
}

export default {
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  template: `
    <div class="greetings">
      <h1 class="green" style="font-weight: 500; font-size: 2.6rem; position: relative; top: -10px;">{{ msg }}</h1>
      <h3 style="font-size: 1.2rem;">
        You’ve successfully created a project with
        <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
        <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
      </h3>
    </div>
  `
};

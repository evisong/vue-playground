export default {
  template: `
  <div class="item" style="margin-top: 2rem; display: flex; position: relative;">
    <i style="display: flex; place-items: center; place-content: center; width: 32px; height: 32px; color: var(--color-text);">
      <slot name="icon"></slot>
    </i>
    <div class="details" style="flex: 1; margin-left: 1rem;">
    <h3 style="font-size: 1.2rem; font-weight: 500; margin-bottom: 0.4rem; color: var(--color-heading);">
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
  `
}

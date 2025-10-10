import { createElement } from '../framework/render.js';

function createClearBasketButtonTemplate() {
  return `
    <button class="clear_button">
      × Clear list
    </button>
  `;
}

export default class ClearBasketButton {
  getTemplate() {
    return createClearBasketButtonTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
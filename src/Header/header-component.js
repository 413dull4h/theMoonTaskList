// src/view/header-component.js
import { createElement } from '../framework/render.js';

function createHeaderTemplate() {
    return `
    <header>
      <div class="moon-container">
        <div class="crescent-moon"></div>
        <div class="star star1"></div>
        <div class="star star2"></div>
        <div class="star star3"></div>
      </div>
      Task Board
    </header>
  `;
}

export default class HeaderComponent {
    getTemplate() { return createHeaderTemplate(); }

    getElement() {
        if (!this.element) this.element = createElement(this.getTemplate());
        return this.element;
    }

    removeElement() { this.element = null; }
}

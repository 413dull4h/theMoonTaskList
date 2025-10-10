import {createElement} from '../framework/render.js'; 


function createHeaderComponentTemplate() {
    return (
        `<div class="tasks"></div>`
    );
}

export default class Tasks {
  getTemplate() {
    return createHeaderComponentTemplate();
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

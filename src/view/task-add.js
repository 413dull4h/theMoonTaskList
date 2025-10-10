import { createElement } from '../framework/render.js';

function createHeaderComponentTemplate() {
  return (
    `<form>
            <h2>New task</h2> 
            <input type="text" placeholder="Task name...">
            <button type="submit" class="add_button">+ Add</button>
        </form>`
  );
}

export default class TaskAdd {
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

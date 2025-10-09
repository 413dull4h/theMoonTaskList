// src/view/form-add-task-component.js
import { createElement } from '../framework/render.js';

function createFormTemplate() {
    return `
    <div class="create-task-panel">
      <h2>New Task</h2>
      <div class="input-container">
        <input type="text" class="task-field" placeholder="Task name..." />
        <button class="create-btn">Add</button>
      </div>
    </div>
  `;
}

export default class FormAddTaskComponent {
    getTemplate() { return createFormTemplate(); }

    getElement() {
        if (!this.element) this.element = createElement(this.getTemplate());
        return this.element;
    }

    removeElement() { this.element = null; }
}

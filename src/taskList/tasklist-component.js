// src/view/tasklist-component.js
import { createElement } from '../framework/render.js';
import TaskComponent from '../TaskComponent/task-component.js';

function createTaskListTemplate(title, type) {
    return `
    <div class="column">
      <div class="column-title ${type}">${title}</div>
      <ul class="items-list"></ul>
      ${type === 'deleted' ? '<button class="empty-btn">Empty</button>' : ''}
    </div>
  `;
}

export default class TaskListComponent {
    constructor(title, type, tasks = []) {
        this.title = title;
        this.type = type;
        this.tasks = tasks; // array of task names
    }

    getTemplate() { return createTaskListTemplate(this.title, this.type); }

    getElement() {
        if (!this.element) {
            this.element = createElement(this.getTemplate());
            const ul = this.element.querySelector('.items-list');
            this.tasks.forEach(taskName => {
                ul.appendChild(new TaskComponent(taskName).getElement());
            });
        }
        return this.element;
    }

    removeElement() { this.element = null; }
}

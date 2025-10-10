import {createElement} from '../framework/render.js';
import {StatusTitle} from '../const.js';

function createTaskListComponentTemplate(status) {
  const title = StatusTitle[status];
  
  const columnClass = getColumnClass(status);
  
  return `
    <div class="column ${columnClass}">
      <div class="task_type">${title}</div>
      <ul class="task_list"></ul>
    </div>
  `;
}

function getColumnClass(status) {
  const statusToClass = {
    'backlog': 'backlog-column',
    'processing': 'processing-column', 
    'done': 'ready-column',
    'basket': 'basket-column'
  };
  return statusToClass[status] || '';
}

export default class TaskList {
  constructor(status) {
    this.status = status;
  }

  getTemplate() {
    return createTaskListComponentTemplate(this.status);
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
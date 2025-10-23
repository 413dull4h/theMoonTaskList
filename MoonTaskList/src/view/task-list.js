import { AbstractComponent } from '../framework/view/abstract-component.js';
import { StatusTitle } from '../const.js';

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

export default class TaskList extends AbstractComponent {
  constructor(status) {
    super(); 
    this.status = status;
  }

  get template() {
    return createTaskListComponentTemplate(this.status);
  }
 
}
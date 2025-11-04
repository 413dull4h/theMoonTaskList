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
  constructor(status, label, onTaskDrop) {
    super(); 
    this.status = status;
    this.label = label;
    this.#setDropHandler(onTaskDrop)
  }

  get template() {
    return createTaskListComponentTemplate(this.status, this.label);
  }
  
  #setDropHandler(onTaskDrop) {
  const container = this.element;
  const list = container.querySelector('.task_list');

  container.addEventListener('dragover', (event) => {
    event.preventDefault();
  });

  container.addEventListener('drop', (event) => {
    event.preventDefault();
    const taskId = event.dataTransfer.getData('text/plain');
    const insertPosition = this.#getInsertPosition(event, list);
    onTaskDrop(taskId, this.status, insertPosition);
  });
}

#getInsertPosition(event, list) {
  const afterElement = this.#getDragAfterElement(list, event.clientY);

  if (afterElement) {
    return {
      type: 'before',
      elementId: afterElement.dataset.taskId 
    };
  } else {
    return {
      type: 'end'
    };
  }
}

#getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('li:not(.empty-list):not(.dragging)')];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;

      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}

}
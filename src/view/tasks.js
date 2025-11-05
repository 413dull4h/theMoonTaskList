import { AbstractComponent } from '../framework/view/abstract-component.js';

function createTasksTemplate() {
  return `<div class="tasks"></div>`;
}

export default class Tasks extends AbstractComponent {
  get template() {
    return createTasksTemplate();
  }

}



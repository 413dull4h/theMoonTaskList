import { AbstractComponent } from '../framework/view/abstract-component.js';

function createTaskAddTemplate() {
  return `
    <form>
      <h2>New Task</h2> 
      <input type="text" placeholder="Name of the Task...">
      <button type="submit" class="add_button">+ Add</button>
    </form>
  `;
}

export default class TaskAdd extends AbstractComponent {
  get template() {
    return createTaskAddTemplate();
  }

}
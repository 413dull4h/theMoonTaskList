import { AbstractComponent } from '../framework/view/abstract-component.js';

function createTaskAddTemplate() {
  return `
    <form>
      <h2>New task</h2> 
      <input type="text" id="add-task" placeholder="Task name..." required>
      <button type="submit" class="add_button">Add</button>
    </form>
  `;
}

export default class TaskAdd extends AbstractComponent {
  #handleClick = null;

  constructor({ onClick }) {
    super();
    this.#handleClick = onClick;
    this.element.addEventListener('submit', this.#clickHandler);
  }

  get template() {
    return createTaskAddTemplate();
  }

  #clickHandler = (evt) => {
    evt.preventDefault();
    this.#handleClick();
  };
}
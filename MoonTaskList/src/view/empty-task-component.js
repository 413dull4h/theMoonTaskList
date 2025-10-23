import { AbstractComponent } from '../framework/view/abstract-component.js';

function createEmptyTaskComponentTemplate() {
  return `
    <div class="empty-task">
      <p class="empty-task__text">Перетащите карточку</p>
    </div>
  `;
}

export default class EmptyTaskComponent extends AbstractComponent {
  get template() {
    return createEmptyTaskComponentTemplate();
  }
}
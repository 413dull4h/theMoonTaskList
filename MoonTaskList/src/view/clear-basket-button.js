import { AbstractComponent } from '../framework/view/abstract-component.js';

function createClearBasketButtonTemplate() {
  return `
    <button class="clear_button">
     Clear
    </button>
  `;
}

export default class ClearBasketButton extends AbstractComponent {
  get template() {
    return createClearBasketButtonTemplate();
  }

}
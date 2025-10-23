import { AbstractComponent } from '../framework/view/abstract-component.js';

function createClearBasketButtonTemplate(isDisabled) {
  return `
    <button class="clear_button" ${isDisabled ? 'disabled' : ''}>
      Clear List
    </button>
  `;
}

export default class ClearBasketButton extends AbstractComponent {
  #handleClick = null;
  #isDisabled = false;

  constructor({ onClick, isDisabled = false }) {
    super();
    this.#handleClick = onClick;
    this.#isDisabled = isDisabled;
    this.element.addEventListener('click', this.#clickHandler);
  }

  get template() {
    return createClearBasketButtonTemplate(this.#isDisabled);
  }

  #clickHandler = (evt) => {
    evt.preventDefault();
    if (!this.#isDisabled) {
      this.#handleClick();
    }
  };
}
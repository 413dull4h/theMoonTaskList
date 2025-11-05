import { AbstractComponent } from '../framework/view/abstract-component.js';

function createLoadingTemplate() {
  return `
    <section class="loading">
      <p>Загрузка данных...</p>
    </section>
  `;
}

export default class LoadingView extends AbstractComponent {
  get template() {
    return createLoadingTemplate();
  }
}

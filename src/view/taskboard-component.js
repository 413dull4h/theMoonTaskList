// src/view/taskboard-component.js
import { createElement } from '../framework/render.js';
import TaskListComponent from '../taskList/tasklist-component.js';

function createBoardTemplate() {
    return `<div class="board-columns"></div>`;
}

export default class TaskBoardComponent {
    constructor(taskLists = []) {
        this.taskLists = taskLists; // array of TaskListComponent
    }

    getTemplate() { return createBoardTemplate(); }

    getElement() {
        if (!this.element) {
            this.element = createElement(this.getTemplate());
            const container = this.element;
            this.taskLists.forEach(list => {
                container.appendChild(list.getElement());
            });
        }
        return this.element;
    }

    removeElement() { this.element = null; }
}

import { AbstractComponent } from '../framework/view/abstract-component.js';
import TaskList from '../view/task-list.js';
import Task from '../view/task.js';
import EmptyTaskComponent from '../view/empty-task-component.js';
import ClearBasketButton from '../view/clear-basket-button.js';
import { render } from '../framework/render.js';
import { Status } from '../const.js';

export default class TasksBoardPresenter {
  #boardContainer = null;
  #taskModel = null;
  #boardTasks = [];

  constructor({ boardContainer, taskModel }) {
    this.#boardContainer = boardContainer;
    this.#taskModel = taskModel;
  }

  init() {
    this.#boardTasks = [...this.#taskModel.tasks];
    this.#renderBoard();
  }

  #renderBoard() {
    Object.values(Status).forEach((status) => {
      this.#renderTasksList(status);
    });
  }

  #renderTasksList(status) {
    const taskList = new TaskList(status);
    render(taskList, this.#boardContainer);
    
    const tasks = this.#taskModel.getTasksByStatus(status);
    const taskListContainer = taskList.element.querySelector('.task_list');
    
    if (tasks.length === 0) {
      this.#renderEmptyTask(taskListContainer);
    } else {
      tasks.forEach((task) => {
        this.#renderTask(task, taskListContainer);
      });
    }

    if (status === Status.BASKET) {
      this.#renderClearButton(taskList.element);
    }
  }

  #renderTask(task, container) {
    const taskComponent = new Task(task);
    render(taskComponent, container);
  }

  #renderEmptyTask(container) {
    const emptyTaskComponent = new EmptyTaskComponent();
    render(emptyTaskComponent, container);
  }

  #renderClearButton(container) {
    const clearButton = new ClearBasketButton();
    render(clearButton, container);
  }
}
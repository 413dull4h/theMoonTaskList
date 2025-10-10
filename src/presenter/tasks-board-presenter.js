import TaskList from '../view/task-list.js';
import Task from '../view/task.js';
import ClearBasketButton from '../view/clear-basket-button.js';
import {render} from '../framework/render.js';
import {Status} from '../const.js';

export default class TasksBoardPresenter {
  #boardContainer = null;
  #taskModel = null;
  #boardTasks = [];

  constructor({boardContainer, taskModel}) {
    this.#boardContainer = boardContainer;
    this.#taskModel = taskModel;
  }

  init() {
    this.#boardTasks = this.#taskModel.getTasks();
    this.#renderBoard();
  }

  #renderBoard() {
    Object.values(Status).forEach((status) => {
      const taskList = new TaskList(status);
      render(taskList, this.#boardContainer);
      
      const tasks = this.#taskModel.getTasksByStatus(status);
      const taskListContainer = taskList.getElement().querySelector('.task_list');
      
      tasks.forEach((task) => {
        const taskComponent = new Task(task);
        render(taskComponent, taskListContainer);
      });

      if (status === Status.BASKET) {
        const clearButton = new ClearBasketButton();
        render(clearButton, taskList.getElement());
      }
    });
  }
}
import Observable from '../framework/observable.js';
import { generateID } from '../utils.js';
import { UserAction, UpdateType } from '../const.js';

export default class TaskModel extends Observable {
  #tasksApiService = null;
  #boardTasks = [];

  constructor({ tasksApiService }) {
    super();
    this.#tasksApiService = tasksApiService;
  }

  get tasks() {
    return this.#boardTasks;
  }

  getTasksByStatus(status) {
    return this.#boardTasks.filter(task => task.status === status);
  }

  async init() {
    try {
      const tasks = await this.#tasksApiService.tasks;
      this.#boardTasks = tasks;
    } catch {
      this.#boardTasks = [];
    }
    this._notify(UpdateType.INIT);
  }

  async addTask(title) {
    const newTask = {
      title,
      status: 'backlog',
      id: generateID()
    };
    try {
      const createdTask = await this.#tasksApiService.addTask(newTask);
      this.#boardTasks.push(createdTask);
      this._notify(UserAction.ADD_TASK, createdTask);
      return createdTask;
    } catch (err) {
      console.error('Ошибка при добавлении задачи:', err);
      throw err;
    }
  }

  async updateTaskStatus(taskId, newStatus, insertPosition = null) {
    const task = this.#boardTasks.find(t => t.id === taskId);
    if (!task) return;

    this.#boardTasks = this.#boardTasks.filter(t => t.id !== taskId);
    task.status = newStatus;

    if (insertPosition && insertPosition.type === 'before') {
      const targetIndex = this.#boardTasks.findIndex(t => t.id === insertPosition.elementId);
      if (targetIndex !== -1) {
        this.#boardTasks.splice(targetIndex, 0, task);
      } else {
        this.#boardTasks.push(task);
      }
    } else {
      this.#boardTasks.push(task);
    }

    try {
      await this.#tasksApiService.updateTask(task);
      this._notify(UserAction.UPDATE_TASK, task);
    } catch (err) {
      console.error('Ошибка при обновлении задачи:', err);
    }
  }

  async clearBasket() {
    const basketTasks = this.#boardTasks.filter(t => t.status === 'basket');
    try {
      await Promise.all(basketTasks.map(t => this.#tasksApiService.deleteTask(t.id)));
      this.#boardTasks = this.#boardTasks.filter(t => t.status !== 'basket');
      this._notify(UserAction.DELETE_TASK);
    } catch (err) {
      console.error('Ошибка при удалении задач:', err);
    }
  }
}

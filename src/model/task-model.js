import tasks from '../mock/task.js';
import { generateID } from '../utils.js';

export default class TaskModel {
  #boardTasks = [];
  #observers = [];

  constructor() {
    this.#boardTasks = tasks;
  }

  get tasks() {
    return this.#boardTasks;
  }

  getTasksByStatus(status) {
    return this.#boardTasks.filter(task => task.status === status);
  }

  addTask(title) {
    const newTask = {
      title,
      status: 'backlog',
      id: generateID(),
    };
    this.#boardTasks.push(newTask);
    this._notifyObservers();
    return newTask;
  }

  clearBasket() {
    this.#boardTasks = this.#boardTasks.filter(task => task.status !== 'basket');
    this._notifyObservers();
  }

  addObserver(observer) {
    this.#observers.push(observer);
  }

  removeObserver(observer) {
    this.#observers = this.#observers.filter((obs) => obs !== observer);
  }

  _notifyObservers() {
    this.#observers.forEach((observer) => observer());
  }

  updateTaskStatus(taskId, newStatus, insertPosition = null) {
  const task = this.#boardTasks.find(task => task.id === taskId);
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

  this._notifyObservers();
}

}
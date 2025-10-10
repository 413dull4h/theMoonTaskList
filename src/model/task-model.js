import tasks from '../mock/task.js';

export default class TaskModel {
  #tasks = [];

  constructor() {
    this.#tasks = tasks;
  }

  getTasks() {
    return this.#tasks;
  }

  getTasksByStatus(status) {
    return this.#tasks.filter(task => task.status === status);
  }
}
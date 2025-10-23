import tasks from '../mock/task.js';

export default class TaskModel {
  #boardTasks = [];

  constructor() {
    this.#boardTasks = tasks;
  }

  get tasks() {
    return this.#boardTasks;
  }

  getTasksByStatus(status) {
    return this.#boardTasks.filter(task => task.status === status);
  }
}
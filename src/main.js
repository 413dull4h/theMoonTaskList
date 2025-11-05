import HeaderComponent from './view/header-component.js';
import TaskAdd from './view/task-add.js';
import Tasks from './view/tasks.js';
import { render, RenderPosition } from './framework/render.js';
import TaskModel from './model/task-model.js';
import TasksBoardPresenter from './presenter/tasks-board-presenter.js';
import TasksApiService from './tasks-api-service.js';
import LoadingView from './view/loading-view.js';
import { UpdateType } from './const.js';

const END_POINT = 'https://690b93c36ad3beba00f58969.mockapi.io/';
const tasksApiService = new TasksApiService(END_POINT);

const taskModel = new TaskModel({ tasksApiService });
const bodyContainer = document.querySelector('.app');
const formContainer = document.querySelector('.add-task');
const boardContainer = document.querySelector('.taskboard');

const tasksBoardPresenter = new TasksBoardPresenter({
  boardContainer: boardContainer,
  taskModel: taskModel
});

const taskAddComponent = new TaskAdd({
  onClick: async () => {
    const title = document.querySelector('#add-task').value.trim();
    if (title) {
      await taskModel.addTask(title);
      document.querySelector('#add-task').value = '';
    }
  }
});

render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);
render(taskAddComponent, formContainer);

const loadingComponent = new LoadingView();
render(loadingComponent, boardContainer);

(async () => {
  await taskModel.init();
  loadingComponent.element.remove();
  tasksBoardPresenter.init();
})();

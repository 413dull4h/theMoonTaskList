import HeaderComponent from './view/header-component.js';
import TaskAdd from './view/task-add.js';
import Tasks from './view/tasks.js';
import { render, RenderPosition } from './framework/render.js';
import TaskModel from './model/task-model.js';
import TasksBoardPresenter from './presenter/tasks-board-presenter.js';

const taskModel = new TaskModel();

const bodyContainer = document.querySelector('.app');
const formContainer = document.querySelector('.add-task');
const boardContainer = document.querySelector('.taskboard');
const tasksComponent = new Tasks();

const tasksBoardPresenter = new TasksBoardPresenter({
  boardContainer: tasksComponent.element,
  taskModel: taskModel
});

const taskAddComponent = new TaskAdd({
  onClick: () => tasksBoardPresenter.createTask()
});

render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);
render(taskAddComponent, formContainer);
render(tasksComponent, boardContainer);

tasksBoardPresenter.init();
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

render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);
render(new TaskAdd(), formContainer);
render(tasksComponent, boardContainer);

const tasksBoardPresenter = new TasksBoardPresenter({
  boardContainer: tasksComponent.element,
  taskModel: taskModel
});

tasksBoardPresenter.init();
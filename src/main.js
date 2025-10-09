// src/main.js
import HeaderComponent from './Header/header-component.js';
import FormAddTaskComponent from './addTaskComponent/form-add-task-component.js';
import TaskBoardComponent from './view/taskboard-component.js';
import TaskListComponent from './taskList/tasklist-component.js';
import { render, RenderPosition } from './framework/render.js';

const bodyContainer = document.querySelector('body');

// Render header
render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);

// Render new task form
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
bodyContainer.appendChild(wrapper);

render(new FormAddTaskComponent(), wrapper);

// Prepare task lists
const backlog = new TaskListComponent('Backlog', 'pending', ['Learn HTML', 'Practice CSS', 'Understand Git']);
const inProgress = new TaskListComponent('In Progress', 'active', ['Read JavaScript docs', 'Build mini project']);
const completed = new TaskListComponent('Completed', 'completed', ['Install VS Code', 'Set up GitHub']);
const trash = new TaskListComponent('Trash', 'deleted', ['Watch Netflix', 'Scroll Instagram']);

// Render task board
const board = new TaskBoardComponent([backlog, inProgress, completed, trash]);
render(board, wrapper);

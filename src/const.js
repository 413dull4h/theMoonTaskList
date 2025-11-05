export const Status = {
  BACKLOG: 'backlog',
  PROCESSING: 'processing',
  DONE: 'done',
  BASKET: 'basket'
};

export const StatusTitle = {
  [Status.BACKLOG]: 'Backlog',
  [Status.PROCESSING]: 'Processing',
  [Status.DONE]: 'Done',
  [Status.BASKET]: 'Basket'
};

export const UserAction = {
  UPDATE_TASK: 'UPDATE_TASK',
  ADD_TASK: 'ADD_TASK',
  DELETE_TASK: 'DELETE_TASK'
};

export const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT'
};

/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-extraneous-dependencies
import './style.css';

const {
  addDays, format, addYears, compareAsc, parse, getYear,
// eslint-disable-next-line import/no-extraneous-dependencies
} = require('date-fns');

Storage.prototype.setObj = function (key, obj) {
  return this.setItem(key, JSON.stringify(obj));
};
Storage.prototype.getObj = function (key) {
  return JSON.parse(this.getItem(key));
};

const taskArray = [];
const completeTaskArray = [];
const overdueArray = [];
const proto = {
  setProperty(property, input) {
    switch (property) {
      case 'name':
        this.name = input;
        break;
      case 'priority':
        this.priority = !this.priority;
        break;
      case 'type':
        if (input === 'personal' || input === 'work' || input === 'social') { this.type = input; }
        break;
      case 'date':
        this.date = input;
        break;
      case 'time':
        this.time = input;
        break;
      case 'notes':
        this.notes = input;
        break;
      case 'status':
        this.status = input;
        break;
      default:
        break;
    }
  },

  getHourMinute() {
    const [hourString, minuteString] = this.time.split(':');
    return { hourString, minuteString };
  },

  getDateTime() {
    const { hourString } = this.getHourMinute(this.time);
    const { minuteString } = this.getHourMinute(this.time);
    const dateTimeCombined = new Date(this.date);
    dateTimeCombined.setHours(hourString, minuteString, 0);
    return dateTimeCombined;
  },
};

const updateItems = () => {
  for (let i = 0; i < taskArray.length; i += 1) {
    if (taskArray[i].getDateTime() <= new Date()) {
      overdueArray.push(taskArray[i]);
      taskArray.splice(i, 1);
    }
  }
};

const clearArray = (array) => {
  while (array.length > 0) {
    array.pop();
  }
};

window.onload = function () {
  let StorageTaskArray = localStorage.getObj('taskArray');
  let StorageCompleteTaskArray = localStorage.getObj('completeTaskArray');
  let StorageOverdueTaskArray = localStorage.getObj('overdueArray');

  if (!StorageTaskArray) {
    StorageTaskArray = [];
  }

  if (!StorageCompleteTaskArray) {
    StorageCompleteTaskArray = [];
  }

  if (!StorageOverdueTaskArray) {
    StorageOverdueTaskArray = [];
  }

  if (StorageTaskArray.length > 0) {
    clearArray(taskArray);
    for (let i = 0; i < StorageTaskArray.length; i += 1) {
      const date = new Date(StorageTaskArray[i].date);
      StorageTaskArray[i].date = date;
      Object.setPrototypeOf(StorageTaskArray[i], proto);
      taskArray[i] = StorageTaskArray[i];
    }
  }

  if (StorageCompleteTaskArray.length > 0) {
    clearArray(completeTaskArray);
    for (let i = 0; i < StorageCompleteTaskArray.length; i += 1) {
      const date = new Date(StorageCompleteTaskArray[i].date);
      StorageCompleteTaskArray[i].date = date;
      Object.setPrototypeOf(StorageCompleteTaskArray[i], proto);
      completeTaskArray[i] = StorageCompleteTaskArray[i];
    }
  }

  if (StorageOverdueTaskArray.length > 0) {
    clearArray(overdueArray);
    for (let i = 0; i < StorageOverdueTaskArray.length; i += 1) {
      const date = new Date(StorageOverdueTaskArray[i].date);
      StorageOverdueTaskArray[i].date = date;
      Object.setPrototypeOf(StorageOverdueTaskArray[i], proto);
      overdueArray[i] = StorageOverdueTaskArray[i];
    }
  }
  updateItems();
};

window.onbeforeunload = function () {
  localStorage.setObj('taskArray', taskArray);
  localStorage.setObj('completeTaskArray', completeTaskArray);
  localStorage.setObj('overdueArray', overdueArray);
};

setInterval(() => {
  updateItems();
}, 1);

const Task = (name, type, date, time, notes, status) => ({
  name, priority: false, type, date, time, notes, status,
});

const createTask = (name, type, date, time, notes) => {
  let task;
  if (!date && !time) {
    task = Task(name, type, new Date(), '24:00', notes);
  } else if (date && !time) {
    task = Task(name, type, date, '12:00', notes);
  } else if (!date && time) {
    task = Task(name, type, new Date(), time, notes);
  } else {
    task = Task(name, type, date, time, notes);
  }

  Object.setPrototypeOf(task, proto);
  task.date.setHours(0, 0, 0);
  taskArray.push(task);
};

const taskComplete = (index) => {
  const arrayItem = taskArray[index];
  taskArray[index].setProperty('status', true);
  taskArray.splice(index, 1);
  completeTaskArray.push(arrayItem);
};

const taskUncomplete = (index) => {
  const arrayItem = completeTaskArray[index];
  completeTaskArray[index].setProperty('status', false);
  completeTaskArray.splice(index, 1);
  taskArray.push(arrayItem);
};

const getCompleteTasks = () => completeTaskArray;

const getAllTasks = () => taskArray;

const getTodayTasks = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0);

  const todayTasks = taskArray.filter((task) => {
    const taskDateTime = task.getDateTime();
    if (taskDateTime >= today && taskDateTime < tomorrow) {
      return true;
    }
    return false;
  });

  return todayTasks;
};

const getTomorrowTasks = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const tomorrowTasks = taskArray.filter((task) => {
    const taskDateTime = task.getDateTime();
    if (taskDateTime.getFullYear() === tomorrow.getFullYear()
    && taskDateTime.getMonth() === tomorrow.getMonth()
    && taskDateTime.getDate() === tomorrow.getDate()) {
      return true;
    }
    return false;
  });

  return tomorrowTasks;
};

const getLaterTasks = () => {
  const today = new Date();
  const tomorrowDate = new Date(today);
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  tomorrowDate.setHours(0, 0, 0);

  const laterTasks = taskArray.filter((task) => task.getDateTime() > tomorrowDate);

  return laterTasks;
};

const compareDate = (a, b) => {
  if (a.getDateTime() > b.getDateTime()) {
    return 1;
  } if (a.getDateTime() < b.getDateTime()) {
    return -1;
  }
  return 0;
};

const getDueTasks = () => {
  const today = new Date();
  const dueTasks = taskArray.filter((task) => {
    if (task.getDateTime() > today) {
      return true;
    }
    return false;
  });
  const result = dueTasks.sort(compareDate);
  return result;
};

const getTypeTasks = (string) => {
  let result;
  switch (string) {
    case 'personal':
      result = taskArray.filter((task) => task.type === 'personal');
      break;
    case 'work':
      result = taskArray.filter((task) => task.type === 'work');
      break;
    case 'social':
      result = taskArray.filter((task) => task.type === 'social');
      break;
    default:
      result = taskArray;
      break;
  }
  console.log(result);
  return result;
};

const debug = () => {
  console.log(taskArray);
  console.log(completeTaskArray);
  console.log(overdueArray);
};

window.debug = debug;

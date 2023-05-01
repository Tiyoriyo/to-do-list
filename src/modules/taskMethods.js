/* eslint-disable no-unused-vars */

// eslint-disable-next-line import/no-extraneous-dependencies
import { addDays, format } from 'date-fns';

/* eslint-disable func-names */
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

  getFormattedDate() {
    return format(this.getDateTime(), 'P');
  },

  getFormattedTime() {
    return format(this.getDateTime(), 'p');
  },

  getTime() {
    if (this.time === '24:00') {
      return '00:00';
    }
    return this.time;
  },

  getType() {
    let result;
    switch (this.type) {
      case 'social':
        result = 'Social';
        break;
      case 'work':
        result = 'Work';
        break;
      case 'personal':
        result = 'Personal';
        break;
      default:
        result = 'General';
        break;
    }
    return result;
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

const loadTaskArrays = (() => {
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
})();

window.onbeforeunload = function () {
  localStorage.setObj('taskArray', taskArray);
  localStorage.setObj('completeTaskArray', completeTaskArray);
  localStorage.setObj('overdueArray', overdueArray);
};

const Task = (name, type, date, time, notes, status) => ({
  name, priority: false, type, date, time, notes, status,
});

export function createTask(inputName, inputType, inputDate, inputTime) {
  const name = inputName;
  const type = inputType || 'General';
  const date = inputDate || addDays(new Date(), 1);
  let time;

  if (inputTime) {
    time = inputTime;
  } else if (!inputTime && !inputDate) {
    time = '00:00';
  } else if (!inputTime && inputDate) {
    time = '12:00';
  }

  //   if (!date && !time) {
  //     task = Task(name, type, new Date(), '24:00');
  //   } else if (date && !time) {
  //     task = Task(name, type, date, '12:00');
  //   } else if (!date && time) {
  //     task = Task(name, type, new Date(), time);
  //   } else {
  //     task = Task(name, type, date, time);
  //   }

  const task = Task(name, type, date, time);

  Object.setPrototypeOf(task, proto);
  task.date.setHours(0, 0, 0);
  taskArray.push(task);
}

export function taskComplete(index) {
  const arrayItem = taskArray[index];
  taskArray[index].setProperty('status', true);
  taskArray.splice(index, 1);
  completeTaskArray.push(arrayItem);
}

export function taskUncomplete(index) {
  const arrayItem = completeTaskArray[index];
  completeTaskArray[index].setProperty('status', false);
  completeTaskArray.splice(index, 1);
  taskArray.push(arrayItem);
}

export function getCompleteTasks() { return completeTaskArray; }

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

export default function getTaskArray() { return taskArray; }

export function getOverdueArray() { return overdueArray; }

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
  return result;
};

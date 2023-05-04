/* eslint-disable no-unused-vars */

// eslint-disable-next-line import/no-extraneous-dependencies
import { addDays, compareAsc, format } from 'date-fns';

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
        if (input === 'personal' || input === 'work' || input === 'social' || input === 'general') { this.type = input; }
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
    dateTimeCombined.setHours(hourString, minuteString, 0, 0);
    return dateTimeCombined;
  },

  getFormattedDate() {
    return format(this.getDateTime(), 'P');
  },

  getFormattedTime() {
    return format(this.getDateTime(), 'p');
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

  getIndex() {
    return taskArray.indexOf(this);
  },
};

window.onbeforeunload = function () {
  localStorage.setObj('taskArray', taskArray);
  localStorage.setObj('completeTaskArray', completeTaskArray);
  localStorage.setObj('overdueArray', overdueArray);
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

const Task = (name, type, date, time, notes, status) => ({
  name, priority: false, type, date, time, notes, status,
});

export function createTask(inputName, inputType, inputDate, inputTime, inputNotes) {
  const name = inputName;
  const type = inputType || 'general';
  const notes = (inputNotes === undefined) ? '' : inputNotes;

  let date;
  let time;
  if (!inputDate && !inputTime) {
    date = addDays(new Date(), 1);
  } else if (!inputDate && inputTime) {
    date = new Date();
  } else {
    date = inputDate;
  }

  if (inputTime) {
    time = inputTime;
  } else if (!inputTime && !inputDate) {
    time = '00:00';
  } else if (!inputTime && inputDate) {
    time = '12:00';
  }

  const task = Task(name, type, date, time, notes);
  Object.setPrototypeOf(task, proto);
  task.date.setHours(0, 0, 0);
  taskArray.push(task);
}

export function remakeOverdueTask(task) {
  const { name } = task;
  const { type } = task;
  const { priority } = task;
  const { notes } = task;

  console.log(name, type, priority, notes);

  const newTask = createTask(name, type, undefined, undefined, notes);
  if (priority) { task.setProperty('priority'); }
}

const compareDate = (a, b) => {
  if (a.getDateTime() > b.getDateTime()) {
    return 1;
  } if (a.getDateTime() < b.getDateTime()) {
    return -1;
  }
  return 0;
};

export function taskComplete(array, index) {
  const arrayItem = array[index];
  array[index].setProperty('status', true);
  taskArray.splice(arrayItem.getIndex(), 1);
  completeTaskArray.push(arrayItem);
}

export function taskUncomplete(index) {
  const arrayItem = completeTaskArray[index];
  completeTaskArray[index].setProperty('status', false);
  completeTaskArray.splice(index, 1);
  taskArray.push(arrayItem);
}

export function getCompleteTasks() { return completeTaskArray.sort(compareDate); }

export function getTodayTasks() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  const todayTasks = taskArray.filter((task) => {
    const taskDateTime = task.getDateTime();
    if (taskDateTime >= today && taskDateTime < tomorrow) {
      return true;
    }
    return false;
  });

  return todayTasks.sort(compareDate);
}

export default function getTaskArray() { return taskArray; }

export function getOverdueArray() { return overdueArray; }

export function getTomorrowTasks() {
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

  return tomorrowTasks.sort(compareDate);
}

export function getLaterTasks() {
  const today = new Date();
  const tomorrowDate = new Date(today);
  tomorrowDate.setDate(tomorrowDate.getDate() + 2);
  tomorrowDate.setHours(0, 0, 0);

  const laterTasks = taskArray.filter((task) => task.getDateTime() > tomorrowDate);

  return laterTasks.sort(compareDate);
}

export function getTypeTasks(string) {
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
    case 'today':
      result = getTodayTasks();
      break;
    case 'tomorrow':
      result = getTomorrowTasks();
      break;
    case 'later':
      result = getLaterTasks();
      break;
    default:
      result = taskArray;
      break;
  }
  return result.sort(compareDate);
}

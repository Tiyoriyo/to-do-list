/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-extraneous-dependencies
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

const populateTaskArray = (() => {
  const getArray = localStorage.getObj('taskArray');
  console.log(getArray);
  for (let i = 0; i < getArray.length; i += 1) {
    const date = new Date(getArray[i].date);
    getArray[i].date = date;
    taskArray.push(getArray[i]);
  }
});

const completeTaskArray = [];
const overdueArray = [];

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

  Object.setPrototypeOf(task, proto);
  task.date.setHours(0, 0, 0);
  taskArray.push(task);
  // localStorage.setObj('taskArray', taskArray);
  // console.log(localStorage);
};

const removeTask = (index) => {
  taskArray.splice(index, 1);
};

const taskComplete = (index) => {
  const arrayItem = taskArray[index];
  taskArray[index].status = true;
  taskArray.splice(index, 1);
  completeTaskArray.push(arrayItem);
};

const getCompleteTasks = () => {
  console.log(completeTaskArray);
  return completeTaskArray;
};

const getAllTasks = () => {
  console.log(taskArray);
  return taskArray;
};

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
  console.log(todayTasks);
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
  console.log(tomorrowTasks);
  return tomorrowTasks;
};

const getLaterTasks = () => {
  const today = new Date();
  const tomorrowDate = new Date(today);
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  tomorrowDate.setHours(0, 0, 0);

  const laterTasks = taskArray.filter((task) => task.getDateTime() > tomorrowDate);
  console.log(laterTasks);
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
  console.log(result);
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

const task1 = createTask('1', 'personal', new Date(2023, 3, 29));
const task2 = createTask('2', 'social', new Date(2023, 3, 25), '12:20');
const task3 = createTask('3', 'work', new Date(2024, 3, 2));
const task4 = createTask('4', 'social', new Date(2023, 3, 24));
const task5 = createTask('5', 'work', new Date(2033, 3, 2));
const task6 = createTask('6', 'work', new Date(2013, 3, 2));
const task7 = createTask('7', 'work', new Date(2023, 3, 22), '22:42');
const task8 = createTask('8', 'work', new Date(2023, 3, 22));
const task9 = createTask('9', 'social');
console.log(taskArray[8]);

const updateItems = () => {
  for (let i = 0; i < taskArray.length; i += 1) {
    if (taskArray[i].getDateTime() <= new Date()) {
      overdueArray.push(taskArray[i]);
      removeTask(i);
    }
  }
};

getDueTasks();
getLaterTasks();
getTodayTasks();
getTomorrowTasks();
updateItems();

setInterval(() => {
  updateItems();
}, 1000);

// const timeInput = document.querySelector('#timeInput');
// const button = document.querySelector('#submit');

// button.addEventListener('click', () => {
//   console.log(timeInput.value);
// });

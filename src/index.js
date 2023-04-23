/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-extraneous-dependencies
const {
  addDays, format, addYears, compareAsc, parse, getYear,
// eslint-disable-next-line import/no-extraneous-dependencies
} = require('date-fns');

const taskArray = [];
const completeTaskArray = [];
const overdueArray = [];

const Task = (name, type, date, time, notes, status) => {
  const task = {
    name,
    priority: false,
    type,
    date,
    time,
    notes,
    status,
  };

  task.setProperty = (property, input) => {
    switch (property) {
      case 'name':
        task.name = input;
        break;
      case 'priority':
        task.priority = !task.priority;
        break;
      case 'type':
        if (input === 'personal' || input === 'work' || input === 'social') { task.type = input; }
        break;
      case 'date':
        task.date = input;
        break;
      case 'time':
        task.time = input;
        break;
      case 'notes':
        task.notes = input;
        break;
      case 'status':
        task.status = input;
        break;
      default:
        break;
    }
  };

  task.getDateTime = () => {
    const { hourString } = getHourMinute(time);
    const { minuteString } = getHourMinute(time);
    const dateTimeCombined = new Date(task.date.valueOf());
    dateTimeCombined.setHours(hourString, minuteString, 0);
    return dateTimeCombined;
  };

  return task;
};

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
  task.date.setHours(0, 0, 0);
  taskArray.push(task);
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
};

const getAllTasks = () => {
  console.log(taskArray);
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
};

function getHourMinute(inputString) {
  const [hourString, minuteString] = inputString.split(':');
  return { hourString, minuteString };
}

const task1 = createTask('1', 'personal', new Date(2023, 3, 29));
const task2 = createTask('2', 'social', new Date(2023, 3, 21), '12:20');
const task3 = createTask('3', 'work', new Date(2024, 3, 2));
const task4 = createTask('4', 'social', new Date(2023, 3, 24));
const task5 = createTask('5', 'work', new Date(2033, 3, 2));
const task6 = createTask('6', 'work', new Date(2013, 3, 2));
const task7 = createTask('7', 'work', new Date(2023, 3, 22), '22:42');
const task8 = createTask('8', 'work', new Date(2023, 3, 22));

const updateItems = () => {
  for (let i = 0; i < taskArray.length; i += 1) {
    if (taskArray[i].getDateTime() <= new Date()) {
      overdueArray.push(taskArray[i]);
      removeTask(i);
    }
  }
};

updateItems();

setInterval(() => {
  updateItems();
}, 1000);

console.log(taskArray);

// const timeInput = document.querySelector('#timeInput');
// const button = document.querySelector('#submit');

// button.addEventListener('click', () => {
//   console.log(timeInput.value);
// });

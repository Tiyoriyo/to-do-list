/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-extraneous-dependencies
const {
  addDays, format, addYears, compareAsc, parse, getYear,
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
    const dateTimeCombined = new Date(date.setHours(hourString, minuteString, 0));
    return dateTimeCombined;
  };

  return task;
};

const createTask = (name, type, date, time, notes) => {
  if (!date && !time) {
    const task = Task(name, type, new Date(), '24:00', notes);
    taskArray.push(task);
  } else if (date && !time) {
    const task = Task(name, type, date, '12:00', notes);
    taskArray.push(task);
  } else if (!date && time) {
    const task = Task(name, type, new Date(), time, notes);
    taskArray.push(task);
  } else {
    const task = Task(name, type, date, time, notes);
    taskArray.push(task);
  }
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
  const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
  const todayTasks = taskArray.filter((task) => {
    const taskDateTime = task.getDateTime();
    if (taskDateTime >= today && taskDateTime < tomorrow) {
      return true;
    }
    return false;
  });

  console.log(todayTasks);
};

const getTomorrowTasks = () => {
  const tomorrowDate = addDays(new Date(), 1);
  const tomorrowTasks = taskArray.filter((task) => task.date === tomorrowDate);
  console.log(tomorrowTasks);
};

const getLaterTasks = () => {
  const tomorrowDate = addDays(new Date(), 1);
  const laterTasks = taskArray.filter((task) => task.date > tomorrowDate);
  console.log(laterTasks);
};

const compareDate = (a, b) => {
  if (a.date < b.date) {
    return -1;
  } if (a.date > b.date) {
    return 1;
  }
  return 0;
};

const getDueTasks = () => {
  const dueTasks = taskArray.filter((task) => task.date);
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

// const task1 = createTask('1', 'personal', new Date(2023, 3, 29));
// const task2 = createTask('2', 'social', new Date(2023, 3, 21), '12:20');
// const task3 = createTask('3', 'work', new Date(2024, 3, 2));
// const task4 = createTask('4', 'social', new Date(2023, 3, 22));
// const task5 = createTask('5', 'work', new Date(2033, 3, 2));
// const task6 = createTask('6', 'work', new Date(2013, 3, 2));
// const task7 = createTask('7', 'work', new Date(2023, 3, 22), '22:42');
// const task8 = createTask('8', 'work', new Date(2023, 3, 22));

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

// const timeInput = document.querySelector('#timeInput');
// const button = document.querySelector('#submit');

// button.addEventListener('click', () => {
//   console.log(timeInput.value);
// });

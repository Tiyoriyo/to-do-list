const { addDays, format, compareAsc } = require('date-fns');

const taskArray = [];
const completeTaskArray = [];

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

  return task;
};

const createTask = (name, type, date, time, notes) => {
  const task = Task(name, type, date, time, notes);
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

const getTomorrowTasks = () => {
  const tomorrowDate = format(addDays(new Date(), 1), 'P');
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

const task1 = createTask('1', 'personal', new Date(2023, 3, 29));
const task2 = createTask('2', 'social', new Date(2023, 3, 23));
const task3 = createTask('3', 'work', new Date(2024, 3, 2));
const task4 = createTask('4', 'social', new Date(1999, 1, 1));
const task5 = createTask('5', 'work', new Date(2033, 3, 2));
const task6 = createTask('6', 'work', new Date(2013, 3, 2));
const task7 = createTask('7', 'work', new Date(2023, 5, 2));

getLaterTasks();

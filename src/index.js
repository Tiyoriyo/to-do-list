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

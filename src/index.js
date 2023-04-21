const taskArray = [];

const Task = (name, type, date, time, notes) => {
  const task = {
    name,
    priority: false,
    type,
    date,
    time,
    notes,
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

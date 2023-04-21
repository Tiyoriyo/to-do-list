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

  task.setPriority = () => {
    task.priority = !task.priority;
  };

  task.setName = (string) => {
    task.name = string;
  };

  task.setType = (string) => {
    switch (string) {
      case 'personal' || 'work' || 'social':
        console.log('win');
        task.type = string;
        break;
      default:
        console.log('fail');
        break;
    }
  };

  task.setDate = (newDate) => {
    task.date = newDate;
  };

  return task;
};

const createTask = (name, type, date, time, notes) => {
  const task = Task(name, type, date, time, notes);
  taskArray.push(task);
};

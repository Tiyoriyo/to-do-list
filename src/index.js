const taskArray = [];

const Task = (name, priority, type, date, time, notes) => {
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

  return task;
};

const createTask = (name) => {
  const task = Task(name);
  taskArray.push(task);
};

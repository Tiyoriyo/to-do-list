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

  task.setType = (string) => { if (string === 'personal' || string === 'work' || string === 'social') { task.type = string; } };

  task.setDate = (newDate) => {
    task.date = newDate;
  };

  task.setTime = (newTime) => {
    task.time = newTime;
  };

  return task;
};

const createTask = (name, type, date, time, notes) => {
  const task = Task(name, type, date, time, notes);
  taskArray.push(task);
};

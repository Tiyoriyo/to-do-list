const taskArray = [];

const Task = (name, priority, type, date, time, notes) => {
  const task = {};
  task.name = name;
  task.priority = false;
  task.type = type;
  task.date = date;
  task.time = time;
  task.notes = notes;
  task.setPriority = () => {
    task.priority = !priority;
    console.log(task);
  };

  return task;
};

const createTask = (name) => {
  const task = Task(name);
  taskArray.push(task);
};

createTask('Run the Errands');
console.log(taskArray);

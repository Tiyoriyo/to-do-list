const taskArray = [];

const Task = (name, priority) => {
  const task = {};
  task.name = name;
  task.priority = false;
  task.setPriority = () => {
    task.priority = !priority;
    console.log(task);
  };

  return task;
};

const createTask = (name, priority) => {
  const task = Task(name, priority);
  taskArray.push(task);
};

createTask('Run the Erands', false);
console.log(taskArray);
taskArray[0].setPriority();

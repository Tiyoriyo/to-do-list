export default function ToDo(name, priority, date, time, type) { // Create to Do Object
  return {
    name,
    priority,
    date,
    time,
    type,
  };
}

export const toDoList = [{
  name: 'xzvf', priority: false, date: undefined, time: undefined, type: undefined,
}]; // List of active To Do items

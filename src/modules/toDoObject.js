export default function ToDo(name, priority, date, time, type) { // Create to Do Object
  return {
    name,
    priority,
    date,
    time,
    type,
  };
}

export const toDoList = []; // List of active To Do items

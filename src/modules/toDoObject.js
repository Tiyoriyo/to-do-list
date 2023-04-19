export default function ToDo(name, priority, date, time, type) {
  return {
    name,
    priority,
    date,
    time,
    type,
  };
}

export const toDoList = []; // List of active To Do items

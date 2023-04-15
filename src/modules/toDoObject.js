export default function ToDo(name, priority, dueDate, type) {
  const getProperties = (...args) => {
    const Arr = [];
    console.log(...args);
    // Loop through all Arguments Except name
    for (let i = 0; i < args.length; i += 1) {
      switch (args[i]) {
        case 'name':
          Arr.push(name);
          break;
        case 'priority':
          Arr.push(priority);
          break;
        case 'dueDate':
          Arr.push(dueDate);
          break;
        case 'type':
          Arr.push(type);
          break;
        default:
          break;
      }
    }
    return Arr;
  };

  return {
    name,
    priority,
    dueDate,
    type,
    getProperties,
  };
}

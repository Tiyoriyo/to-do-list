export default function ToDo(name, priority, dueDate, type) {
  const getProperty = (property) => `${property}`;
  const getProperties = () => {
    const Arr = [];
    for (let i = 0; i < arguments.length; i += 1) { Arr.push(arguments[i]); }
    return Arr;
  };

  return {
    name,
    priority,
    dueDate,
    type,
    getProperty,
    getProperties,
  };
}

import ToDo from './toDoObject';

const toDoList = [];

const getInputs = () => {
  const name = document.querySelector('#nameInput').value;
  const date = document.querySelector('#dateInput').value;
  const time = document.querySelector('#timeInput').value;
  const type = document.querySelector('#typeInput').value;

  return {
    name, date, time, type,
  };
};

export default function createToDo() {
  const inputs = getInputs();
  const { name } = inputs;
  const { date } = inputs;
  const { time } = inputs;
  const { type } = inputs;

  if (!name) {
    return;
  }

  const newToDo = ToDo(name, false, date, time, type);
  toDoList.push(newToDo);
}

function renderBottomItems(toDo, node) {
  const properties = [toDo.date, toDo.time, toDo.type];
  for (let i = 0; i < properties.length; i += 1) {
    if (properties[i]) {
      const item = document.createElement('p');
      item.innerHTML = properties[i];
      node.appendChild(item);
    }
  }
}

export function renderToDo() {
  const content = document.createElement('div');
  content.classList.add('toDoContainer');

  for (let i = 0; i < toDoList.length; i += 1) {
    const container = document.createElement('div');
    container.classList.add('itemContainer');

    const containerLeft = document.createElement('div');
    const containerMiddle = document.createElement('div');
    const containerRight = document.createElement('div');
    containerLeft.classList.add('containerLeft');
    containerMiddle.classList.add('containerMiddle');
    containerRight.classList.add('containerRight');

    const checkBox = document.createElement('input');
    checkBox.classList.add('checkbox');
    checkBox.type = 'radio';

    const name = document.createElement('p');
    const bottom = document.createElement('div');
    name.classList.add('itemName');
    bottom.classList.add('middleBottom');
    name.innerHTML = toDoList[i].name;
    renderBottomItems(toDoList[i], bottom, i);

    containerLeft.append(checkBox);
    containerMiddle.append(name, bottom);
    container.append(containerLeft, containerMiddle, containerRight);
    content.append(container);
  }

  return content;
}

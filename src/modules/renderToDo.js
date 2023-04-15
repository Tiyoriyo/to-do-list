import ToDo from './toDoObject';

const toDoList = [];

const getInputs = () => {
  const name = document.querySelector('#nameInput').value;
  const date = document.querySelector('#dateInput').value;
  const type = document.querySelector('#typeInput').value;

  return { name, date, type };
};

export default function createToDo() {
  const inputs = getInputs();
  const { name } = inputs;
  const { date } = inputs;
  const { type } = inputs;

  if (!name) {
    return;
  }

  const newToDo = ToDo(name, false, date, type);
  toDoList.push(newToDo);
}

export function renderToDo() {
  const content = document.createElement('div');
  content.classList.add('toDoContainer');

  for (let i = 0; i < toDoList.length; i += 1) {
    const container = document.createElement('div');
    container.classList.add('itemContainer');

    const containerLeft = document.createElement('div');
    containerLeft.classList.add('containerLeft');
    const checkBox = document.createElement('input');
    checkBox.type = 'radio';
    checkBox.classList.add('checkbox');
    containerLeft.append(checkBox);

    const containerMiddle = document.createElement('div');
    containerMiddle.classList.add('containerMiddle');
    const name = document.createElement('p');
    name.classList.add('itemName');
    const bottom = document.createElement('div');
    bottom.classList.add('middleBottom');
    name.innerHTML = toDoList[i].name;
    containerMiddle.append(name, bottom);

    const containerRight = document.createElement('div');
    containerRight.classList.add('containerRight');

    container.append(containerLeft, containerMiddle, containerRight);
    content.append(container);
  }

  return content;
}

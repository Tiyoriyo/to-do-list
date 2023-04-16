import ToDo from './toDoObject';
import starNoFill from '../images/starNoFill.png';
import starFill from '../images/star.png';

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

function changeImage(e) {
  if (e.target.id === 'NoFill') {
    e.target.id = 'Fill';
    e.target.src = starFill;
  } else {
    e.target.id = 'NoFill';
    e.target.src = starNoFill;
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

    const checkContainer = document.createElement('div');
    checkContainer.classList = 'pretty p-default p-curve p-pulse';
    const checkInput = document.createElement('input');
    checkInput.type = 'checkbox';
    checkInput.classList.add('checkbox');
    const labelDiv = document.createElement('div');
    labelDiv.classList.add('state');
    const labelItem = document.createElement('label');
    labelDiv.append(labelItem);
    checkContainer.append(checkInput, labelDiv);

    containerLeft.append(checkContainer);

    const starNoFillImg = new Image();
    starNoFillImg.src = starNoFill;
    starNoFillImg.classList.add('star');
    starNoFillImg.id = 'NoFill';

    starNoFillImg.addEventListener('click', (e) => {
      changeImage(e);
    });

    const cancel = document.createElement('p');
    cancel.classList.add('cancelButton');
    cancel.innerHTML = '&#10006;';

    cancel.addEventListener('click', (e) => {
      const toDoListDom = document.querySelector('.toDoContainer');
      toDoListDom.removeChild(e.target.parentNode.parentNode);
      toDoList.splice(i, 1);
    });

    containerRight.append(starNoFillImg, cancel);

    const name = document.createElement('p');
    const bottom = document.createElement('div');
    name.classList.add('itemName');
    bottom.classList.add('middleBottom');
    name.innerHTML = toDoList[i].name;
    renderBottomItems(toDoList[i], bottom, i);

    checkInput.addEventListener('change', (e) => {
      if (e.target.checked) {
        name.style.textDecoration = 'line-through';
      } else {
        name.style.textDecoration = '';
      }
    });

    containerMiddle.append(name, bottom);
    container.append(containerLeft, containerMiddle, containerRight);
    content.append(container);
  }

  return content;
}

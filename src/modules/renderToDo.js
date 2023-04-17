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

// function removeNodeItem(e) {
//   const node = document.querySelector('.toDoContainer');
//   const nodeList = node.childNodes;
//   const thisNode = getItemContainer(e.target);
//   const thisNodeIndex = [...nodeList].indexOf(thisNode);
//   node.removeChild(nodeList[thisNodeIndex]);
// }

const nodeMethods = (() => {
  function getNodeChildren(node) {
    return node.childNodes;
  }

  function getItemContainer(node) { return node.parentNode.parentNode; }

  function getItemContainerIndex(input) {
    const node = document.querySelector('.toDoContainer');
    const nodeChildren = getNodeChildren(node);
    const itemContainer = getItemContainer(input);

    return [...nodeChildren].indexOf(itemContainer);
  }

  function removeNodeItem(e) {
    const node = document.querySelector('.toDoContainer');
    const nodeChildren = getNodeChildren(node);
    const thisNodeIndex = getItemContainerIndex(e.target);
    node.removeChild(nodeChildren[thisNodeIndex]);
  }

  return { removeNodeItem, getItemContainerIndex };
})();

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
      toDoList.splice(nodeMethods.getItemContainerIndex(e.target), 1);
      nodeMethods.removeNodeItem(e);
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

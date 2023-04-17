import ToDo from './toDoObject';
import starNoFill from '../images/starNoFill.png';
import starFill from '../images/star.png';

const toDoList = []; // List of active To Do items

const getInputs = () => { // Retrieves inputs for To Do
  const name = document.querySelector('#nameInput').value;
  const date = document.querySelector('#dateInput').value;
  const time = document.querySelector('#timeInput').value;
  const type = document.querySelector('#typeInput').value;

  return {
    name, date, time, type,
  };
};

export default function createToDo() { // Creates a to do item and pushes it into Array List
  const { name } = getInputs();
  const { date } = getInputs();
  const { time } = getInputs();
  const { type } = getInputs();

  if (!name) { return; }

  const newToDo = ToDo(name, false, date, time, type);
  toDoList.push(newToDo);
}

const renderBottomItems = (toDo, node) => { // Render ToDo Details
  const properties = [toDo.date, toDo.time, toDo.type];
  for (let i = 0; i < properties.length; i += 1) {
    if (properties[i]) {
      const item = document.createElement('p');
      item.innerHTML = properties[i];
      node.appendChild(item);
    }
  }
};

const changeImage = (e) => { // Changes priority star image
  switch (e.target.id) {
    case 'NoFill':
      e.target.id = 'Fill';
      e.target.src = starFill;
      break;
    default:
      e.target.id = 'NoFill';
      e.target.src = starNoFill;
      break;
  }
};

const nodeMethods = (() => { // Node Methods for removing to Do from list & screen
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

const removeToDo = (e) => { // Barrel function for removing to Do from list & screen
  toDoList.splice(nodeMethods.getItemContainerIndex(e.target), 1);
  nodeMethods.removeNodeItem(e);
};

export function renderToDo() { // Rendering function to put To Dos on the screen
  function renderCheckContainer() {
    const checkContainer = document.createElement('div');
    checkContainer.classList = 'pretty p-default p-curve p-pulse';

    const checkInput = document.createElement('input');
    const labelDiv = document.createElement('div');
    const labelItem = document.createElement('label');
    checkInput.type = 'checkbox';
    checkInput.classList.add('checkbox');
    labelDiv.classList.add('state');

    labelDiv.append(labelItem);
    checkContainer.append(checkInput, labelDiv);

    return checkContainer;
  }

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

    const checkContainer = renderCheckContainer();

    containerLeft.append(checkContainer);

    const starNoFillImg = new Image();
    starNoFillImg.src = starNoFill;
    starNoFillImg.classList.add('star');
    starNoFillImg.id = 'NoFill';

    const cancel = document.createElement('p');
    cancel.classList.add('cancelButton');
    cancel.innerHTML = '&#10006;';

    containerRight.append(starNoFillImg, cancel);

    const name = document.createElement('p');
    const bottom = document.createElement('div');
    name.classList.add('itemName');
    bottom.classList.add('middleBottom');
    name.innerHTML = toDoList[i].name;
    renderBottomItems(toDoList[i], bottom, i);

    containerMiddle.append(name, bottom);
    container.append(containerLeft, containerMiddle, containerRight);
    content.append(container);
  }

  return content;
}

export const addEventListeners = () => {
  for (let i = 0; i < toDoList.length; i += 1) {
    const checkbox = document.querySelectorAll('.checkbox');
    const name = document.querySelectorAll('.itemName');
    const starButton = document.querySelectorAll('.star');
    const cancelButton = document.querySelectorAll('.cancelButton');

    starButton[i].addEventListener('click', (e) => {
      changeImage(e);
    });

    checkbox[i].addEventListener('change', (e) => {
      if (e.target.checked) {
        name[i].style.textDecoration = 'line-through';
      } else {
        name[i].style.textDecoration = '';
      }
    });

    cancelButton[i].addEventListener('click', removeToDo);
  }
};

import ToDo from './toDoObject';
import starNoFill from '../images/starNoFill.png';
import starFill from '../images/star.png';

export const toDoList = []; // List of active To Do items

const getInputs = () => { // Retrieves inputs for To Do
  const name = document.querySelector('#nameInput').value;
  //   const date = document.querySelector('#dateInput').value;
  //   const time = document.querySelector('#timeInput').value;
  //   const type = document.querySelector('#typeInput').value;

  return {
    name,
    // date, time, type,
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
  function renderLeftContainerItem(containerLeft) {
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
    containerLeft.append(checkContainer);
  }

  function renderBottomItems(toDo, node) { // Render ToDo Details
    const properties = [toDo.date, toDo.time, toDo.type];
    for (let i = 0; i < properties.length; i += 1) {
      if (properties[i]) {
        const item = document.createElement('p');
        item.innerHTML = properties[i];
        node.appendChild(item);
      }
    }
  }

  function renderMiddleContainerItems(containerMiddle, i) {
    const name = document.createElement('p');
    const bottom = document.createElement('div');

    name.classList.add('itemName');
    bottom.classList.add('middleBottom');
    name.innerHTML = toDoList[i].name;

    renderBottomItems(toDoList[i], bottom, i);
    containerMiddle.append(name, bottom);
  }

  function renderRightContainerItems(containerRight, i) {
    function renderStar() {
      const priorityStar = new Image();

      switch (toDoList[i].priority) {
        case false:
          priorityStar.src = starNoFill;
          priorityStar.id = 'noFill';
          break;
        case true:
          priorityStar.src = starFill;
          priorityStar.id = 'fill';
          break;
        default:
          break;
      }

      priorityStar.classList.add('star');
      containerRight.append(priorityStar);
    }

    renderStar();

    const cancel = document.createElement('p');
    cancel.classList.add('cancelButton');
    cancel.innerHTML = '&#10006;';

    containerRight.append(cancel);
  }

  function renderContainerItems(container, i) {
    const containerLeft = document.createElement('div');
    const containerMiddle = document.createElement('div');
    const containerRight = document.createElement('div');
    containerLeft.classList.add('containerLeft');
    containerMiddle.classList.add('containerMiddle');
    containerRight.classList.add('containerRight');
    container.append(containerLeft, containerMiddle, containerRight);

    renderLeftContainerItem(containerLeft);
    renderMiddleContainerItems(containerMiddle, i);
    renderRightContainerItems(containerRight, i);
  }

  const content = document.createElement('div');
  content.classList.add('toDoContainer');

  for (let i = 0; i < toDoList.length; i += 1) {
    const container = document.createElement('div');
    container.classList.add('itemContainer');

    renderContainerItems(container, i);
    content.append(container);
  }

  return content;
}

export const addEventListeners = () => {
  function changeImage(e) { // Changes priority star image
    const i = nodeMethods.getItemContainerIndex(e.target);
    switch (e.target.id) {
      case 'noFill':
        e.target.id = 'fill';
        e.target.src = starFill;
        toDoList[i].priority = true;
        break;
      default:
        e.target.id = 'noFill';
        e.target.src = starNoFill;
        toDoList[i].priority = false;
        break;
    }
  }

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

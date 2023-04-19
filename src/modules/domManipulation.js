/* eslint-disable no-underscore-dangle */
import ToDo, { toDoList } from './toDoObject';
import starNoFill from '../images/starNoFill.png';
import starFill from '../images/star.png';

// eslint-disable-next-line import/no-extraneous-dependencies
const popupS = require('popups');

const mainContainer = document.querySelector('.mainContainer');
const body = document.querySelector('body');

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

const containerMethods = (() => {
  function renderLeftContainerItem(containerLeft) {
    const checkContainer = document.createElement('div');
    checkContainer.classList = 'pretty p-default p-curve p-pulse';

    const checkInput = document.createElement('input');
    const labelDiv = document.createElement('div');
    const labelItem = document.createElement('label');
    checkInput.type = 'checkbox';
    checkInput.classList.add('checkbox');
    labelDiv.classList = 'state p-warning';

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

  return {
    renderLeftContainerItem,
    renderBottomItems,
    renderMiddleContainerItems,
    renderRightContainerItems,
    renderContainerItems,
  };
})();

const eventListeners = (() => {
  const stopBubbling = (e) => {
    e.stopImmediatePropagation();
    e.stopPropagation();
  };

  const changeImage = (e) => { // Changes priority star image
    stopBubbling(e);
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
  };

  const addNameCompleteEffect = (e, i, name) => {
    stopBubbling(e);
    if (e.target.checked) {
      name[i].classList.add('complete');
    } else {
      name[i].classList.remove('complete');
    }
  };

  return { changeImage, addNameCompleteEffect, stopBubbling };
})();

function addSettingsScreen() {
  mainContainer.classList.add('blur');
  const settingsContainer = document.createElement('div');
  settingsContainer.classList.add('settingsContainer');

  const settingsDiv = document.createElement('div');
  settingsDiv.classList.add('settingsDiv');

  settingsContainer.append(settingsDiv);
  body.appendChild(settingsContainer);
}

function renderSettings(e, i) {
  // addSettingsScreen();
  // const settingsDiv = document.querySelector('.settingsDiv');

  // const nameLabel = document.createElement('label');
  // nameLabel.textContent = 'name';
  // const nameInput = document.createElement('input');
  // nameInput.value = toDoList[i].name;
  // const dateLabel = document.createElement('label');
  // dateLabel.textContent = 'Date';
  // const dateInput = document.createElement('input');
  // dateInput.type = 'date';
  // dateInput.value = toDoList[i].date;

  // settingsDiv.append(nameLabel, nameInput, dateLabel, dateInput);

  popupS.window({
    mode: 'alert',
    content: 'aye',

  });
}

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

const removeToDo = (e) => { // Barrel function for removing to Do from list & screen
  e.stopPropagation();
  toDoList.splice(nodeMethods.getItemContainerIndex(e.target), 1);
  nodeMethods.removeNodeItem(e);
};

export function renderToDoContainers() { // Rendering function to put To Dos on the screen
  const content = document.createElement('div');
  content.classList.add('toDoContainer');

  for (let i = 0; i < toDoList.length; i += 1) {
    const container = document.createElement('div');
    container.classList.add('itemContainer');

    containerMethods.renderContainerItems(container, i);
    content.append(container);
  }

  return content;
}

export const addEventListeners = () => {
  for (let i = 0; i < toDoList.length; i += 1) {
    const itemContainer = document.querySelectorAll('.itemContainer');
    const checkbox = document.querySelectorAll('.checkbox');
    const name = document.querySelectorAll('.itemName');
    const starButton = document.querySelectorAll('.star');
    const cancelButton = document.querySelectorAll('.cancelButton');

    itemContainer[i].addEventListener('click', (e) => { renderSettings(e, i); });

    starButton[i].addEventListener('click', (e) => { eventListeners.changeImage(e); });

    name[i].addEventListener('click', (e) => { eventListeners.stopBubbling(e); });

    checkbox[i].addEventListener('click', (e) => { eventListeners.addNameCompleteEffect(e, i, name); });

    cancelButton[i].addEventListener('click', removeToDo);
  }
};

/* eslint-disable no-underscore-dangle */
import ToDo, { toDoList } from './toDoObject';
import starNoFill from '../images/starNoFill.png';
import starFill from '../images/star.png';

// eslint-disable-next-line import/no-extraneous-dependencies
const popupS = require('popups');

const currentInput = {
  date: undefined,
  time: undefined,
};

const containerMethods = (() => {
  function clearContent() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
  }

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
    const properties = [toDo.type, toDo.date, toDo.time];
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
    clearContent,
    renderLeftContainerItem,
    renderBottomItems,
    renderMiddleContainerItems,
    renderRightContainerItems,
    renderContainerItems,
  };
})();

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

  const removeToDo = (e) => { // Barrel function for removing to Do from list & screen
    e.stopPropagation();
    toDoList.splice(nodeMethods.getItemContainerIndex(e.target), 1);
    containerMethods.clearContent();
    document.querySelector('#content').appendChild(renderToDoContainers());
    // eslint-disable-next-line no-use-before-define
    addEventListeners();
  };

  function renderSettings(i) {
    popupS.confirm({
      mode: 'alert',
      content: `
      <div class="settingsDiv">
        <h2>Settings</h2>
        <div class="inputField">
          <label class="nameLabel">Name</label>
          <input class="settingsInput nameInput" value="${toDoList[i].name}">
        </div>
        <div class="inputField">
          <label class="dateLabel">Date</label>
          <input class="settingsInput dateInput" type="date" value="${toDoList[i].date}">
          <label class="timeLabel">Time</label>
          <input class="settingsInput timeInput" type="time" value="${toDoList[i].time}">
        </div>
        <div class="notesInputField inputField">
          <label class="notesLabel">Notes</label>
          <textarea class="settingsInput inputTextArea">${toDoList[i].notes}</textarea>
        </div>
        <div class="inputField">
          <label class="nameLabel">Type</label>
          <select class="settingsInput typeInput">
            <option value="None">None</option>
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="Social">Social</option>
          </select>
        </div>
      </div>`,
      onOpen: () => {
        const options = document.querySelectorAll('option');
        for (let j = 0; j < options.length; j += 1) {
          if (options[j].value === toDoList[i].type) { options[j].selected = true; }
        }
      },
      onSubmit: () => {
        const content = document.querySelector('#content');
        const nameValue = document.querySelector('.nameInput').value;
        const dateValue = document.querySelector('.dateInput').value;
        const timeValue = document.querySelector('.timeInput').value;
        const notesValue = document.querySelector('.inputTextArea').value;
        let typeValue = document.querySelector('.typeInput').value;

        if (typeValue === 'None') { typeValue = undefined; }

        toDoList[i].name = nameValue;
        toDoList[i].type = typeValue;
        toDoList[i].date = dateValue;
        toDoList[i].time = timeValue;
        toDoList[i].notes = notesValue;
        content.innerHTML = '';
        content.appendChild(renderToDoContainers());
        // eslint-disable-next-line no-use-before-define
        addEventListeners();
      },
      additionalButtonHolderClass: 'popupButtonSet',
      additionalButtonOkClass: 'popupOkButton', // classNames, that gets appended to the ok button
      additionalButtonCancelClass: 'popupCancelButton',
    });
  }

  return {
    changeImage, addNameCompleteEffect, stopBubbling, removeToDo, renderSettings,
  };
})();

export const inputEventListeners = (() => {
  function renderDateInput() {
    popupS.confirm({
      content: `
    <div class="inputField">
      <label class="dateLabel">Date</label>
      <input class="settingsInput dateInput" type="date">
    </div>`,
    });
  }

  return { renderDateInput };
})();

export const addEventListeners = () => {
  for (let i = 0; i < toDoList.length; i += 1) {
    const itemContainer = document.querySelectorAll('.itemContainer');
    const checkbox = document.querySelectorAll('.checkbox');
    const name = document.querySelectorAll('.itemName');
    const starButton = document.querySelectorAll('.star');
    const cancelButton = document.querySelectorAll('.cancelButton');

    itemContainer[i].addEventListener('click', (e) => { eventListeners.renderSettings(i); });

    starButton[i].addEventListener('click', (e) => { eventListeners.changeImage(e); });

    name[i].addEventListener('click', (e) => { eventListeners.stopBubbling(e); });

    checkbox[i].addEventListener('click', (e) => { eventListeners.addNameCompleteEffect(e, i, name); });

    cancelButton[i].addEventListener('click', (e) => { eventListeners.removeToDo(e); });
  }
};

const getInputs = () => { // Retrieves inputs for To Do
  const name = document.querySelector('#nameInput').value;
  const { date } = currentInput;
  const { time } = currentInput;
  //   const type = document.querySelector('#typeInput').value;

  return {
    name,
    date,
    time,
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

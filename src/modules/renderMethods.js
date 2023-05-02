/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-use-before-define */
import popupS from 'popups';
import { format } from 'date-fns';
import starFill from '../images/starFill.png';
import starNoFill from '../images/starNoFill.png';
import getTaskArray, {
  getCompleteTasks, getOverdueArray, getTypeTasks, taskComplete, taskUncomplete,
} from './taskMethods';

let mode = 'all';
const taskArray = getTaskArray();
const completeTaskArray = getCompleteTasks();
const overdueArray = getOverdueArray();

const taskContainer = document.querySelector('.taskContainer');

export function getMode() { return mode; }

export function setMode(string) {
  switch (string) {
    case 'all':
      mode = 'all';
      break;
    case 'personal':
      mode = 'personal';
      break;
    case 'work':
      mode = 'work';
      break;
    case 'social':
      mode = 'social';
      break;
    default:
      break;
  }
}

const addCheckbox = (array, i) => {
  const mainDiv = document.createElement('div');
  const input = document.createElement('input');
  const subDiv = document.createElement('div');
  const label = document.createElement('label');
  mainDiv.append(input, subDiv);
  subDiv.append(label);

  mainDiv.className = 'pretty p-default p-curve p-bigger';
  input.type = 'checkbox';
  subDiv.classList.add('state');

  if (array === completeTaskArray) {
    input.checked = true;
  }

  input.addEventListener('change', (e) => {
    if (e.target.checked) {
      taskComplete(array, i);
      setTimeout(() => { render(mode); }, 250);
    } else if (!e.target.checked) {
      taskUncomplete(i);
      setTimeout(() => { render(mode); }, 250);
    }
  });
  mainDiv.addEventListener('click', (e) => { e.stopPropagation(); });

  return mainDiv;
};

const addItemContent = (array, i) => {
  const upperContent = document.createElement('div');
  const lowerContent = document.createElement('div');
  upperContent.classList.add('upperContent', 'whiteFont');
  lowerContent.classList.add('lowerContent', 'whiteFont');

  upperContent.innerHTML = `${array[i].name}`;
  lowerContent.innerHTML = `${array[i].getType()} - ${array[i].getFormattedDate()} - ${array[i].getFormattedTime()}`;

  if (array === completeTaskArray) {
    upperContent.classList.add('completed');
    lowerContent.classList.add('completed');
  }

  return upperContent.outerHTML + lowerContent.outerHTML;
};

const addPriorityImg = (array, i) => {
  const star = new Image();
  star.src = array[i].priority ? starFill : starNoFill;
  star.classList.add('star');

  star.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!array[i].priority) {
      array[i].setProperty('priority');
      star.src = starFill;
    } else if (array[i].priority) {
      array[i].setProperty('priority');
      e.target.src = starNoFill;
    }
  });

  return star;
};

const renderTask = (array, i) => {
  const mainContainer = document.createElement('div');
  const checkboxContainer = document.createElement('div');
  const contentContainer = document.createElement('div');
  const priorityContainer = document.createElement('div');
  const cancelContainer = document.createElement('div');
  mainContainer.append(checkboxContainer, contentContainer, priorityContainer, cancelContainer);

  mainContainer.classList.add('itemContainer');
  checkboxContainer.classList.add('checkboxContainer');
  contentContainer.classList.add('contentContainer');
  priorityContainer.classList.add('priorityContainer', 'preventSelect');
  cancelContainer.classList.add('cancelContainer', 'preventSelect');

  checkboxContainer.appendChild(addCheckbox(array, i));
  contentContainer.innerHTML = addItemContent(array, i);
  priorityContainer.appendChild(addPriorityImg(array, i));
  cancelContainer.innerHTML = '&#10005;';

  mainContainer.addEventListener('click', () => {
    popupS.window({
      mode: 'confirm',
      content: `
        <div class="mainPopupContainer">
          <div class="popupInputfield">
            <label class="popupLabel">Name</label>
            <input type="text" class="popupName" autocomplete="__away">
          </div>
          <div class="popupInputfield">
            <label class="popupLabel">Type</label>
            <select class="popupSelect">
              <option value='general'>None</option>
              <option value='personal'>Personal</option>
              <option value='work'>Work</option>
              <option value='social'>Social</option>
            </select>
          </div>
          <div class="popupInputfield">
            <label class="popupLabel">Date</label>
            <input type="date" class="popupDate">
          </div>
          <div class="popupInputfield">
            <label class="popupLabel">Time</label>
            <input type="time" class="popupTime">
          </div>
          <div class="popupInputfield">
            <label class="popupLabel">Notes</label>
            <textarea class="popupTextArea"></textarea>
          </div>
        </div>
        `,
      labelOk: 'Confirm',
      additionalButtonCancelClass: 'cancelBtn',
      additionalButtonOkClass: 'confirmBtn',
      additionalButtonHolderClass: 'popupButtons',
      onOpen: () => {
        const name = document.querySelector('.popupName');
        const type = document.querySelector('.popupSelect');
        const date = document.querySelector('.popupDate');
        const time = document.querySelector('.popupTime');
        const notes = document.querySelector('.popupTextArea');

        name.value = array[i].name;
        type.value = array[i].getType().toLowerCase();
        date.value = format(array[i].getDateTime(), 'yyyy-MM-dd');
        time.value = array[i].getTime();
        notes.value = array[i].notes;
      },
      onSubmit: () => {
        const name = document.querySelector('.popupName');
        const type = document.querySelector('.popupSelect');
        const date = document.querySelector('.popupDate');
        const time = document.querySelector('.popupTime');
        const notes = document.querySelector('.popupTextArea');

        array[i].setProperty('name', name.value);
        array[i].setProperty('type', type.value);
        array[i].setProperty('date', new Date(date.value));
        array[i].setProperty('time', time.value);
        array[i].setProperty('notes', notes.value);
        render();
      },
    });
  });

  cancelContainer.addEventListener('click', (e) => {
    e.stopPropagation();
    taskArray.splice(array[i].getIndex(), 1);
    render(mode);
  });

  return mainContainer;
};

const renderAll = () => {
  if (taskArray.length) {
    const title = document.createElement('h2');
    taskContainer.append(title);
    title.classList.add('taskContainerTitle');
    title.textContent = 'Tasks Due';
    for (let i = 0; i < taskArray.length; i += 1) {
      taskContainer.append(renderTask(taskArray, i));
    }
  } else {
    const title = document.createElement('h2');
    taskContainer.append(title);
    title.classList.add('taskContainerTitle');
    title.textContent = 'Tasks Due';
    const subTitle = document.createElement('h2');
    taskContainer.append(subTitle);
    subTitle.classList.add('taskContainerSubTitle');
    subTitle.textContent = 'None';
  }

  if (completeTaskArray.length) {
    const title = document.createElement('h2');
    taskContainer.append(title);
    title.classList.add('taskContainerTitle');
    title.textContent = 'Completed Tasks';
    for (let i = 0; i < completeTaskArray.length; i += 1) {
      taskContainer.append(renderTask(completeTaskArray, i));
    }
  }
};

const renderType = (string) => {
  const array = getTypeTasks(string);

  if (array.length) {
    const title = document.createElement('h2');
    taskContainer.append(title);
    title.classList.add('taskContainerTitle');
    title.textContent = 'Tasks Due';
    for (let i = 0; i < array.length; i += 1) {
      taskContainer.append(renderTask(array, i));
    }
  } else {
    const title = document.createElement('h2');
    taskContainer.append(title);
    title.classList.add('taskContainerTitle');
    title.textContent = 'Tasks Due';
    const subTitle = document.createElement('h2');
    taskContainer.append(subTitle);
    subTitle.classList.add('taskContainerSubTitle');
    subTitle.textContent = 'None';
  }
};

export default function render() {
  taskContainer.innerHTML = '';
  switch (mode) {
    case 'all':
      renderAll();
      break;
    case 'personal':
      renderType('personal');
      break;
    case 'work':
      renderType('work');
      break;
    case 'social':
      renderType('social');
      break;
    default:
      break;
  }
}

const updateItems = () => {
  for (let i = 0; i < taskArray.length; i += 1) {
    if (taskArray[i].getDateTime() <= new Date()) {
      overdueArray.push(taskArray[i]);
      taskArray.splice(i, 1);
      render(mode);
    }
  }
};

setInterval(() => {
  updateItems();
}, 1);

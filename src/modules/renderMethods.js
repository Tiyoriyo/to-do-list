/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-use-before-define */
import popupS from 'popups';
import { format } from 'date-fns';
import starFill from '../images/starFill.png';
import starNoFill from '../images/starNoFill.png';
import getTaskArray, {
  getCompleteTasks, getOverdueArray, getTypeTasks, taskComplete, taskUncomplete, remakeOverdueTask,
} from './taskMethods';

// mode & array lists
let mode = 'all';
const taskArray = getTaskArray();
const completeTaskArray = getCompleteTasks();
const overdueArray = getOverdueArray();

// mode getter & setter
export function getMode() { return mode; }
export function setMode(string) { mode = string; }

// main container that houses tasks
const taskContainer = document.querySelector('.taskContainer');

const addTaskCheckbox = (array, i) => { // Checkbox render
  // DOM Elements
  const mainDiv = document.createElement('div');
  const input = document.createElement('input');
  const subDiv = document.createElement('div');
  const label = document.createElement('label');
  mainDiv.className = 'pretty p-default p-curve p-bigger';
  input.type = 'checkbox';
  subDiv.classList.add('state');
  mainDiv.append(input, subDiv);
  subDiv.append(label);

  // EventListenerSetup
  if (array === taskArray || array === completeTaskArray) {
    if (array === completeTaskArray) { input.checked = true; }
    input.addEventListener('change', (e) => {
      if (e.target.checked) {
        taskComplete(array, i);
        render(mode);
      } else if (!e.target.checked) {
        taskUncomplete(i);
        render(mode);
      }
    });
  } else if (array === overdueArray) {
    input.addEventListener('change', (e) => {
      if (e.target.checked) {
        remakeOverdueTask(array[i]);
        array.splice(i, 1);
        render(mode);
      }
    });
  }

  // Stop checkbox opening property edit popup
  mainDiv.addEventListener('click', (e) => { e.stopPropagation(); });
  return mainDiv;
};

const addTaskContent = (array, i) => { // Task Information Render
  // DOM Elements
  const upperContent = document.createElement('div');
  const lowerContent = document.createElement('div');
  upperContent.classList.add('upperContent', 'whiteFont');
  lowerContent.classList.add('lowerContent', 'whiteFont');

  // Insert Content
  upperContent.innerHTML = `${array[i].name}`;
  lowerContent.innerHTML = `${array[i].getType()} - ${array[i].getFormattedDate()} - ${array[i].getFormattedTime()}`;
  if (array[i].notes) { lowerContent.innerHTML += ' - Note'; }

  // If task is completed, add completed styling
  if (array === completeTaskArray) {
    upperContent.classList.add('completed');
    lowerContent.classList.add('completed');
  }

  return upperContent.outerHTML + lowerContent.outerHTML;
};

const addTaskPriorityStar = (array, i) => { // Priority Star Render
  // DOM Elements
  const image = new Image();
  image.src = array[i].priority ? starFill : starNoFill;
  image.classList.add('star');

  image.addEventListener('click', (e) => {
    e.stopPropagation();
    array[i].setProperty('priority');
    e.target.src = (array[i].priority) ? starFill : starNoFill;
  });

  return image;
};

const renderTask = (array, i) => { // Task Item Render
  // DOM Elements
  const mainContainer = document.createElement('div');
  const checkboxContainer = document.createElement('div');
  const contentContainer = document.createElement('div');
  const priorityContainer = document.createElement('div');
  const cancelContainer = document.createElement('div');
  mainContainer.classList.add('itemContainer');
  checkboxContainer.classList.add('checkboxContainer');
  contentContainer.classList.add('contentContainer');
  priorityContainer.classList.add('priorityContainer', 'preventSelect');
  cancelContainer.classList.add('cancelContainer', 'preventSelect');
  mainContainer.append(checkboxContainer, contentContainer, priorityContainer, cancelContainer);

  // Add content to DOM elements
  checkboxContainer.appendChild(addTaskCheckbox(array, i));
  contentContainer.innerHTML = addTaskContent(array, i);
  priorityContainer.appendChild(addTaskPriorityStar(array, i));
  cancelContainer.innerHTML = '&#10005;';

  // Task Properties Popup
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
              <option value='general'>General</option>
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
        type.value = array[i].type;
        date.value = format(array[i].getDateTime(), 'yyyy-MM-dd'); // Set Compatible Date Value
        time.value = array[i].time;
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

  // Remove Task Button
  cancelContainer.addEventListener('click', (e) => {
    e.stopPropagation();
    if (array === taskArray || array === completeTaskArray || array === overdueArray) {
      array.splice(i, 1);
    } else {
      taskArray.splice(array[i].getIndex(), 1);
    }
    render();
  });

  return mainContainer;
};

const renderArray = (string) => { // Render Array Type
  let array;
  let textContent;

  // Get Array Based on Input String
  if (string === 'all') {
    array = taskArray;
  } else if (string === 'completed') {
    array = completeTaskArray;
  } else if (string === 'overdue') {
    array = overdueArray;
  } else {
    array = getTypeTasks(string);
  }

  // Set Text Content based on Input String Type
  switch (string) {
    case 'completed':
      textContent = 'Tasks Completed';
      break;
    case 'overdue':
      textContent = 'Tasks Overdue';
      break;
    default:
      textContent = 'Tasks Due';
      break;
  }

  // Add Task Container Contents
  if (array.length) {
    const title = document.createElement('h2');
    title.classList.add('taskContainerTitle');
    title.textContent = textContent;
    taskContainer.append(title);
    for (let i = 0; i < array.length; i += 1) {
      taskContainer.append(renderTask(array, i));
    }
  } else {
    const title = document.createElement('h2');
    const subTitle = document.createElement('h2');
    title.classList.add('taskContainerTitle');
    title.textContent = textContent;
    subTitle.classList.add('taskContainerSubTitle');
    subTitle.textContent = 'None';
    taskContainer.append(title, subTitle);
  }

  // If All Filter Render Completed Task Array Underneath
  if (string === 'all') {
    if (completeTaskArray.length) {
      const title = document.createElement('h2');
      taskContainer.append(title);
      title.classList.add('taskContainerTitle');
      title.textContent = 'Completed Tasks';
      for (let i = 0; i < completeTaskArray.length; i += 1) {
        taskContainer.append(renderTask(completeTaskArray, i));
      }
    }
  }
};

export default function render() {
  taskContainer.innerHTML = '';
  renderArray(mode);
}

const updateItems = () => {
  for (let i = 0; i < taskArray.length; i += 1) {
    if (taskArray[i].getDateTime() <= new Date()) {
      overdueArray.push(taskArray[i]);
      taskArray.splice(i, 1);
      render();
    }
  }
};

setInterval(() => {
  updateItems();
}, 1);

/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import './style.css';
import popupS from 'popups';
import logo from './images/logo.png';
import starFill from './images/starFill.png';
import starNoFill from './images/starNoFill.png';
import typeImg from './images/edit.png';
import dateImg from './images/date.png';
import timeImg from './images/time.png';
import getTaskArray, {
  getOverdueArray, getCompleteTasks, taskComplete, taskUncomplete, createTask,
} from './modules/taskMethods';

const logoImg = document.querySelector('.logoImg');
const typeIcon = document.querySelector('.typeIcon');
const dateIcon = document.querySelector('.dateIcon');
const timeIcon = document.querySelector('.timeIcon');
logoImg.src = logo;
typeIcon.src = typeImg;
dateIcon.src = dateImg;
timeIcon.src = timeImg;

const updateItems = () => {
  for (let i = 0; i < taskArray.length; i += 1) {
    if (taskArray[i].getDateTime() <= new Date()) {
      overdueArray.push(taskArray[i]);
      taskArray.splice(i, 1);
      render(mode);
    }
  }
};

const taskArray = getTaskArray();
const completeTaskArray = getCompleteTasks();
const overdueArray = getOverdueArray();
const mode = 'all';

const taskContainer = document.querySelector('.taskContainer');

const addCheckbox = (arrayType, i) => {
  const mainDiv = document.createElement('div');
  const input = document.createElement('input');
  const subDiv = document.createElement('div');
  const label = document.createElement('label');
  mainDiv.append(input, subDiv);
  subDiv.append(label);

  mainDiv.className = 'pretty p-default p-curve p-bigger';
  input.type = 'checkbox';
  subDiv.classList.add('state');

  if (arrayType === completeTaskArray) {
    input.checked = true;
  }

  input.addEventListener('change', (e) => {
    if (e.target.checked) {
      taskComplete(i);
      setTimeout(() => { render(mode); }, 250);
    } else if (!e.target.checked) {
      taskUncomplete(i);
      setTimeout(() => { render(mode); }, 250);
    }
  });

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
  cancelContainer.addEventListener('click', () => {
    array.splice(i, 1);
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

const render = (filter) => {
  taskContainer.innerHTML = '';
  switch (filter) {
    case 'all':
      renderAll();
      break;
    default:
      break;
  }
};

setInterval(() => {
  updateItems();
}, 1);

// InputContainer Script
let type;
let date;
let time;

const addButton = document.querySelector('.addButton');
addButton.addEventListener('click', () => {
  if (inputTextField.value.length > 0) {
    createTask(inputTextField.value);
    inputTextField.value = '';
    render(mode);
  }
});

const inputTextField = document.querySelector('.inputText');
inputTextField.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    createTask(inputTextField.value, type, date, time);
    inputTextField.value = '';
    type = undefined;
    date = undefined;
    time = undefined;
    render(mode);
  }
});

inputTextField.addEventListener('focus', () => { inputTextField.placeholder = 'Try adding a task'; });
inputTextField.addEventListener('focusout', () => { inputTextField.placeholder = 'Add a task'; });

const typeInput = document.querySelector('.typeIcon');
typeInput.addEventListener('click', () => {
  popupS.window({
    mode: 'confirm',
    content: `
    <select class="popupSelect">
      <option value='none'>None</option>
      <option value='personal'>Personal</option>
      <option value='work'>Work</option>
      <option value='social'>Social</option>
    </select>
    `,
    labelOk: 'Confirm',
    onOpen: () => {
      const select = document.querySelector('.popupSelect');
      if (!type) {
        select.value = 'none';
      } else {
        select.value = type;
      }
    },
    onSubmit: () => {
      const select = document.querySelector('.popupSelect');
      type = select.value;
    },
    additionalButtonHolderClass: 'popupButtons',
    additionalButtonCancelClass: 'cancelBtn',
    additionalButtonOkClass: 'confirmBtn',

  });
});

const dateInput = document.querySelector('.dateIcon');
dateInput.addEventListener('click', () => {
  popupS.window({
    mode: 'confirm',
    content: `<input type="date" class="popupDate">
    <button class="clearBtn">Clear</button>`,
    labelOk: 'Confirm',
    onOpen: () => {
      const datePicker = document.querySelector('.popupDate');
      const clearBtn = document.querySelector('.clearBtn');
      datePicker.value = date;
      clearBtn.addEventListener('click', () => { datePicker.value = ''; });
    },
    onSubmit: () => {
      const input = document.querySelector('.popupDate');
      if (!input.value) {
        date = undefined;
      } else {
        date = new Date(input.value);
      }
    },
    additionalButtonHolderClass: 'popupButtons',
    additionalButtonCancelClass: 'cancelBtn',
    additionalButtonOkClass: 'confirmBtn',

  });
});

window.onload = render(mode);

const debug = () => {
  console.log(taskArray);
  console.log(completeTaskArray);
};

window.debug = debug;

/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import './style.css';
import popupS from 'popups';
// eslint-disable-next-line import/no-extraneous-dependencies
import { format } from 'date-fns';
import logo from './images/logo.png';
import starFill from './images/starFill.png';
import starNoFill from './images/starNoFill.png';
import typeImg from './images/edit.png';
import dateImg from './images/date.png';
import timeImg from './images/time.png';
import getTaskArray, {
  getOverdueArray, getCompleteTasks, taskComplete, taskUncomplete, createTask, getTypeTasks,
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
let mode = 'all';

const taskContainer = document.querySelector('.taskContainer');

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

const render = () => {
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
};

setInterval(() => {
  updateItems();
}, 1);

// --------------------- Sidebar Script -------------------------

const allBtn = document.querySelector('#allLi');
const personalBtn = document.querySelector('#personalLi');
const workBtn = document.querySelector('#workLi');
const socialBtn = document.querySelector('#socialLi');
const todayBtn = document.querySelector('#todayLi');
const tomorrowBtn = document.querySelector('#tomorrowLi');
const laterBtn = document.querySelector('#laterLi');

const removeSelectedClass = () => {
  const categoryLists = document.querySelectorAll('.categoryList');
  const combinedCategoryList = [...categoryLists[0].children]
    .concat([...categoryLists[1].children]);
  combinedCategoryList.forEach((item) => { item.classList.remove('selected'); });
};

allBtn.addEventListener('click', (e) => {
  removeSelectedClass();
  e.target.classList.add('selected');
  mode = 'all';
  render(mode);
});

personalBtn.addEventListener('click', (e) => {
  removeSelectedClass();
  e.target.classList.add('selected');
  mode = 'personal';
  render(mode);
});

workBtn.addEventListener('click', (e) => {
  removeSelectedClass();
  e.target.classList.add('selected');
  mode = 'work';
  render(mode);
});

socialBtn.addEventListener('click', (e) => {
  removeSelectedClass();
  e.target.classList.add('selected');
  mode = 'social';
  render(mode);
});

// --------------------- Sidebar Script -------------------------
// ------------------ InputContainer Script ------------------
let type;
let date;
let time;

const resetInputs = () => {
  inputTextField.value = '';
  type = undefined;
  date = undefined;
  time = undefined;
};

const addButton = document.querySelector('.addButton');
addButton.addEventListener('click', () => {
  if (inputTextField.value.length > 0) {
    createTask(inputTextField.value, type, date, time);
    resetInputs();
    removeSelectedClass();
    allBtn.classList.add('selected');
    mode = 'all';
    render(mode);
  }
});

const inputTextField = document.querySelector('.inputText');
inputTextField.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && inputTextField.value.length > 0) {
    createTask(inputTextField.value, type, date, time);
    resetInputs();
    removeSelectedClass();
    allBtn.classList.add('selected');
    mode = 'all';
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
    <div class="popupContainer">
      <select class="popupSelect">
        <option value='none'>None</option>
        <option value='personal'>Personal</option>
        <option value='work'>Work</option>
        <option value='social'>Social</option>
      </select>
    </div>
    `,
    labelOk: 'Confirm',
    onOpen: () => {
      const input = document.querySelector('.popupSelect');
      if (type) { input.value = type; }
    },
    onSubmit: () => {
      const input = document.querySelector('.popupSelect');
      type = input.value;
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
      const input = document.querySelector('.popupDate');
      const clearBtn = document.querySelector('.clearBtn');
      if (date) { input.value = format(date, 'yyyy-MM-dd'); } // Formats date to be compatible as date input Value
      clearBtn.addEventListener('click', () => { input.value = ''; });
    },
    onSubmit: () => {
      const input = document.querySelector('.popupDate');
      if (input.value) { date = new Date(input.value); }
    },
    additionalButtonHolderClass: 'popupButtons',
    additionalButtonCancelClass: 'cancelBtn',
    additionalButtonOkClass: 'confirmBtn',
  });
});

const timeInput = document.querySelector('.timeIcon');
timeInput.addEventListener('click', () => {
  popupS.window({
    mode: 'confirm',
    content: `<input type="time" class="popupTime">
    <button class="clearBtn">Clear</button>`,
    labelOk: 'Confirm',
    onOpen: () => {
      const input = document.querySelector('.popupTime');
      input.value = time;
    },
    onSubmit: () => {
      const input = document.querySelector('.popupTime');
      time = input.value;
    },
    additionalButtonHolderClass: 'popupButtons',
    additionalButtonCancelClass: 'cancelBtn',
    additionalButtonOkClass: 'confirmBtn',
  });
});

// ------------------ InputField Scripts ------------------

window.onload = render();

const debug = () => {
  console.log(taskArray);
  console.log(completeTaskArray);
};

window.debug = debug;

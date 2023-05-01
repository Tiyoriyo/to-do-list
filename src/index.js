/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import './style.css';
import logo from './images/logo.png';
import starFill from './images/starFill.png';
import starNoFill from './images/starNoFill.png';
import typeImg from './images/edit.png';
import dateImg from './images/date.png';
import timeImg from './images/time.png';
import getTaskArray, {
  getOverdueArray, getCompleteTasks, taskComplete, taskUncomplete,
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
      renderAllTasks();
    }
  }
};

const taskArray = getTaskArray();
const completeTaskArray = getCompleteTasks();
const overdueArray = getOverdueArray();

const taskContainer = document.querySelector('.taskContainer');

const addCheckbox = (arrayType, i) => {
  const mainDiv = document.createElement('div');
  const input = document.createElement('input');
  const subDiv = document.createElement('div');
  const label = document.createElement('label');

  mainDiv.className = 'pretty p-default p-curve p-bigger';
  input.type = 'checkbox';
  subDiv.classList.add('state');

  mainDiv.append(input, subDiv);
  subDiv.append(label);

  if (arrayType === completeTaskArray) {
    input.checked = true;
  }

  input.addEventListener('change', (e) => {
    if (e.target.checked) {
      taskComplete(i);
      setTimeout(() => {
        renderAllTasks();
      }, 250);
    } else if (!e.target.checked) {
      taskUncomplete(i);
      setTimeout(() => {
        renderAllTasks();
      }, 250);
    }
  });

  return mainDiv;
};

const addItemContent = (arrayType, i) => {
  const upperContent = document.createElement('div');
  const lowerContent = document.createElement('div');
  upperContent.classList.add('whiteFont');
  lowerContent.classList.add('lowerContent', 'whiteFont');

  upperContent.innerHTML = `${arrayType[i].name}`;
  lowerContent.innerHTML = `${arrayType[i].getType()} - ${arrayType[i].getFormattedDate()} - ${arrayType[i].getFormattedTime()}`;

  if (arrayType === completeTaskArray) {
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

window.onload = render('all');

setInterval(() => {
  updateItems();
}, 1);

const debug = () => {
  console.log(taskArray);
  console.log(completeTaskArray);
};

window.debug = debug;

/* eslint-disable no-unused-vars */
import './style.css';
import logo from './images/logo.png';
import starFill from './images/starFill.png';
import starNoFill from './images/starNoFill.png';
import typeImg from './images/edit.png';
import dateImg from './images/date.png';
import timeImg from './images/time.png';
import getTaskArray, { getOverdueArray } from './modules/taskMethods';

const logoImg = document.querySelector('.logoImg');
const typeIcon = document.querySelector('.typeIcon');
const dateIcon = document.querySelector('.dateIcon');
const timeIcon = document.querySelector('.timeIcon');
logoImg.src = logo;
typeIcon.src = typeImg;
dateIcon.src = dateImg;
timeIcon.src = timeImg;

const taskArray = getTaskArray();
const overdueArray = getOverdueArray();
const taskContainer = document.querySelector('.taskContainer');

const updateItems = () => {
  for (let i = 0; i < taskArray.length; i += 1) {
    if (taskArray[i].getDateTime() <= new Date()) {
      overdueArray.push(taskArray[i]);
      taskArray.splice(i, 1);
      renderAllTasks();
    }
  }
};

const addCheckbox = () => {
  const htmlString = `
  <div class="pretty p-default p-curve p-pulse p-bigger">
    <input type="checkbox" />
    <div class="state">
      <label></label>
    </div>
  </div> 
  `;

  return htmlString;
};

const addItemContent = (i) => {
  const upperContent = document.createElement('div');
  const lowerContent = document.createElement('div');
  upperContent.classList.add('upperContent');
  lowerContent.classList.add('lowerContent');

  upperContent.innerHTML = `${taskArray[i].name}`;
  lowerContent.innerHTML = `${taskArray[i].getType()} - ${taskArray[i].getFormattedDate()} - ${taskArray[i].getFormattedTime()}`;

  return upperContent.outerHTML + lowerContent.outerHTML;
};

const renderTask = (i) => {
  const mainContainer = document.createElement('div');
  const checkboxContainer = document.createElement('div');
  const contentContainer = document.createElement('div');
  const priorityContainer = document.createElement('div');
  const cancelContainer = document.createElement('div');

  mainContainer.classList.add('itemContainer');
  checkboxContainer.classList.add('checkboxContainer');
  contentContainer.classList.add('contentContainer');
  priorityContainer.classList.add('priorityContainer');
  cancelContainer.classList.add('cancelContainer');

  checkboxContainer.innerHTML = addCheckbox();
  contentContainer.innerHTML = addItemContent(i);

  mainContainer.append(checkboxContainer, contentContainer, priorityContainer, cancelContainer);
  return mainContainer;
};

const renderAllTasks = () => {
  taskContainer.innerHTML = '';
  for (let i = 0; i < taskArray.length; i += 1) {
    taskContainer.append(renderTask(i));
  }
};

renderAllTasks();

setInterval(() => {
  updateItems();
}, 1);

const debug = () => {
  console.log(taskArray);
};

window.debug = debug;

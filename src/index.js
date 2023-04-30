import './style.css';
import logo from './images/logo.png';

import starFill from './images/starFill.png';
import starNoFill from './images/starNoFill.png';

import typeImg from './images/edit.png';
import dateImg from './images/date.png';
import timeImg from './images/time.png';

const logoImg = document.querySelector('.logoImg');
const typeIcon = document.querySelector('.typeIcon');
const dateIcon = document.querySelector('.dateIcon');
const timeIcon = document.querySelector('.timeIcon');
logoImg.src = logo;
typeIcon.src = typeImg;
dateIcon.src = dateImg;
timeIcon.src = timeImg;

const taskContainer = document.querySelector('.taskContainer');

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

  const name = document.createElement('p');
  const type = document.createElement('p');
  const date = document.createElement('p');
  const time = document.createElement('p');
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
  contentContainer.innerHTML = addItemContent();

  mainContainer.append(checkboxContainer, contentContainer, priorityContainer, cancelContainer);
  return mainContainer;
};

taskContainer.append(renderTask(), renderTask());

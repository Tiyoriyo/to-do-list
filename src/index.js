// eslint-disable-next-line import/no-extraneous-dependencies
import { format, addDays } from 'date-fns';
import createToDo, { renderToDoContainers, addEventListeners, inputEventListeners } from './modules/domManipulation';
import { toDoList } from './modules/toDoObject';

import './style.css';
import './popupS.css';

const debug = (() => {
  function returnList() {
    console.log(toDoList);
  }

  function returnListItem(i) {
    console.log(toDoList[i - 1]);
  }

  return { returnList, returnListItem };
})();

window.debug = debug;

const content = document.querySelector('#content');

function addNewToDo() {
  createToDo();
  content.innerHTML = '';
  content.appendChild(renderToDoContainers());
  addEventListeners();
}

content.appendChild(renderToDoContainers());
addEventListeners();

const inputName = document.querySelector('#nameInput');

// dateTooltip methods
const dateIcon = document.querySelector('#dateInputIcon');
const dateTooltip = document.querySelector('.dateTooltip');
const tomorrowBtn = document.querySelector('.tomorrowBtn');
const datePicker = document.querySelector('.datePicker');

dateIcon.addEventListener('click', () => {
  const classString = dateTooltip.classList.value;
  if (classString.includes('hide')) { dateTooltip.classList.remove('hide'); }
});

tomorrowBtn.addEventListener('click', () => {
  const today = new Date();
  let tomorrow = addDays(today, 1);
  tomorrow = format(tomorrow, 'yyyy-MM-dd');
  datePicker.value = tomorrow;
});

const timeInput = document.querySelector('.timePicker');
const timeIcon = document.querySelector('#timeInputIcon');

timeIcon.addEventListener('click', () => { timeInput.showPicker(); });

inputName.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addNewToDo();
    inputName.focus();
    inputName.value = '';
  }
});
inputName.addEventListener('focus', () => {
  inputName.placeholder = 'Try adding something';
});

inputName.addEventListener('focusout', () => {
  inputName.placeholder = 'Add a task';
});

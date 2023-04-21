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
const dateInput = document.querySelector('#dateInputIcon');

dateInput.addEventListener('click', () => {
  inputEventListeners.renderDateInput();
});

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

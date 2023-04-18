import createToDo, { toDoList, renderToDo, addEventListeners } from './modules/renderToDo';
import './style.css';

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
  content.appendChild(renderToDo());
  addEventListeners();
}

const inputName = document.querySelector('#nameInput');
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

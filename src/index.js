import createToDo, { renderToDo, addEventListeners } from './modules/renderToDo';
import './style.css';

const content = document.querySelector('#content');

function addNewToDo() {
  createToDo();
  content.innerHTML = '';
  content.appendChild(renderToDo());
  addEventListeners();
  document.querySelector('#nameInput').focus();
}

const button = document.querySelector('button');
button.addEventListener('click', addNewToDo);

const inputName = document.querySelector('#nameInput');
inputName.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addNewToDo();
  }
});

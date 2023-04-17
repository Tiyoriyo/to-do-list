import createToDo, { renderToDo, addEventListeners } from './modules/renderToDo';
import './style.css';

const content = document.querySelector('#content');

function addNewToDo() {
  createToDo();
  content.innerHTML = '';
  content.appendChild(renderToDo());
  addEventListeners();
}

const button = document.querySelector('button');
button.addEventListener('click', addNewToDo);

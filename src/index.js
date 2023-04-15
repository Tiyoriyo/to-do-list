import createToDo, { renderToDo } from './modules/renderToDo';
import './style.css';

const content = document.querySelector('#content');

function addNewToDo() {
  createToDo();
  content.innerHTML = '';
  content.appendChild(renderToDo());
}

const button = document.querySelector('button');
button.addEventListener('click', addNewToDo);

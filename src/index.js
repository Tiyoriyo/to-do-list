import ToDo from './modules/toDoObject';
import './style.css';

const ToDoList = [];

const getInputs = () => {
  const name = document.querySelector('#nameInput').value;
  const date = document.querySelector('#dateInput').value;
  const type = document.querySelector('#typeInput').value;

  return { name, date, type };
};

function createToDo() {
  const inputs = getInputs();
  const { name } = inputs;
  const { date } = inputs;
  const { type } = inputs;

  if (!name) {
    alert('You need to pixk name');
    return;
  }

  const newToDo = ToDo(name, false, date, type);
  ToDoList.push(newToDo);
  console.log(ToDoList);
}

const button = document.querySelector('button');
button.addEventListener('click', createToDo);

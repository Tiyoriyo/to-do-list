import './style.css';
import logo from './images/logo.png';
import typeImg from './images/edit.png';
import dateImg from './images/date.png';
import timeImg from './images/time.png';

import render from './modules/renderMethods';
import { insertNewTask, popupHolder } from './modules/inputFieldMethods';
import { selectFilter } from './modules/sidebarMethods';

const logoImg = document.querySelector('.logoImg');
const typeIcon = document.querySelector('.typeIcon');
const dateIcon = document.querySelector('.dateIcon');
const timeIcon = document.querySelector('.timeIcon');
logoImg.src = logo;
typeIcon.src = typeImg;
dateIcon.src = dateImg;
timeIcon.src = timeImg;

window.onload = render();

// --------------------- Sidebar Script -------------------------

const allBtn = document.querySelector('#allLi');
const personalBtn = document.querySelector('#personalLi');
const workBtn = document.querySelector('#workLi');
const socialBtn = document.querySelector('#socialLi');
const todayBtn = document.querySelector('#todayLi');
const tomorrowBtn = document.querySelector('#tomorrowLi');
const laterBtn = document.querySelector('#laterLi');
const completedBtn = document.querySelector('#completedLi');
const overdueBtn = document.querySelector('#overdueLi');

// Add event listeners that filter tasks
allBtn.addEventListener('click', (e) => { selectFilter(e, 'all'); });
personalBtn.addEventListener('click', (e) => { selectFilter(e, 'personal'); });
workBtn.addEventListener('click', (e) => { selectFilter(e, 'work'); });
socialBtn.addEventListener('click', (e) => { selectFilter(e, 'social'); });
todayBtn.addEventListener('click', (e) => { selectFilter(e, 'today'); });
tomorrowBtn.addEventListener('click', (e) => { selectFilter(e, 'tomorrow'); });
laterBtn.addEventListener('click', (e) => { selectFilter(e, 'later'); });
completedBtn.addEventListener('click', (e) => { selectFilter(e, 'completed'); });
overdueBtn.addEventListener('click', (e) => { selectFilter(e, 'overdue'); });

// ------------------ InputContainer Script ------------------

// Add inputField task creating event listeners
const addButton = document.querySelector('.addButton');
const inputTextField = document.querySelector('.inputText');
addButton.addEventListener('click', () => { if (inputTextField.value.length > 0) { insertNewTask(); } });
inputTextField.addEventListener('keypress', (e) => { if (e.key === 'Enter' && inputTextField.value.length > 0) { insertNewTask(); } });

// Add inputField text placeholder event listeners that change text
inputTextField.addEventListener('focus', () => { inputTextField.placeholder = 'Try adding a task'; });
inputTextField.addEventListener('focusout', () => { inputTextField.placeholder = 'Add a task'; });

// Add Popup Event Listeners
const typeInput = document.querySelector('.typeIcon');
const dateInput = document.querySelector('.dateIcon');
const timeInput = document.querySelector('.timeIcon');
typeInput.addEventListener('click', popupHolder.type);
dateInput.addEventListener('click', popupHolder.date);
timeInput.addEventListener('click', popupHolder.time);

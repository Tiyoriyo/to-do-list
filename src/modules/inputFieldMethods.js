import popupS from 'popups';
import format from 'date-fns/format';
import { createTask } from './taskMethods';
import removeSelectedClass from './sidebarMethods';
import render, { getMode } from './renderMethods';

const inputTextField = document.querySelector('.inputText');
const allBtn = document.querySelector('#allLi');

let mode = getMode();
let type;
let date;
let time;

// Reset inputField inputs
export function resetInputs() {
  inputTextField.value = '';
  type = undefined;
  date = undefined;
  time = undefined;
}

// Task Creating Dom Update Function
export function insertNewTask() {
  console.log(inputTextField.value);
  createTask(inputTextField.value, type, date, time);
  resetInputs();
  removeSelectedClass();
  allBtn.classList.add('selected');
  mode = 'all';
  render(mode);
}

// Object Container for Popup Modules
export const popupHolder = {
  type: () => {
    popupS.window({
      mode: 'confirm',
      content: `
    <div class="popupContainer">
      <select class="popupSelect">
        <option value='none'>None</option>
        <option value='personal'>Personal</option>
        <option value='work'>Work</option>
        <option value='social'>Social</option>
      </select>
    </div>
    `,
      labelOk: 'Confirm',
      onOpen: () => {
        const input = document.querySelector('.popupSelect');
        if (type) { input.value = type; }
      },
      onSubmit: () => {
        const input = document.querySelector('.popupSelect');
        type = input.value;
      },
      additionalButtonHolderClass: 'popupButtons',
      additionalButtonCancelClass: 'cancelBtn',
      additionalButtonOkClass: 'confirmBtn',
    });
  },
  date: () => {
    popupS.window({
      mode: 'confirm',
      content: `<input type="date" class="popupDate">
    <button class="clearBtn">Clear</button>`,
      labelOk: 'Confirm',
      onOpen: () => {
        const input = document.querySelector('.popupDate');
        const clearBtn = document.querySelector('.clearBtn');
        if (date) { input.value = format(date, 'yyyy-MM-dd'); } // Formats date to be compatible as date input Value
        clearBtn.addEventListener('click', () => { input.value = ''; });
      },
      onSubmit: () => {
        const input = document.querySelector('.popupDate');
        if (input.value) { date = new Date(input.value); }
      },
      additionalButtonHolderClass: 'popupButtons',
      additionalButtonCancelClass: 'cancelBtn',
      additionalButtonOkClass: 'confirmBtn',
    });
  },
  time: () => {
    popupS.window({
      mode: 'confirm',
      content: `<input type="time" class="popupTime">
    <button class="clearBtn">Clear</button>`,
      labelOk: 'Confirm',
      onOpen: () => {
        const input = document.querySelector('.popupTime');
        input.value = time;
      },
      onSubmit: () => {
        const input = document.querySelector('.popupTime');
        time = input.value;
      },
      additionalButtonHolderClass: 'popupButtons',
      additionalButtonCancelClass: 'cancelBtn',
      additionalButtonOkClass: 'confirmBtn',
    });
  },
};

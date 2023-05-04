/* eslint-disable import/no-extraneous-dependencies */
import popupS from 'popups';
import format from 'date-fns/format';
import { createTask } from './taskMethods';
import removeSelectedClass from './sidebarMethods';
import render, { setMode } from './renderMethods';

const inputTextField = document.querySelector('.inputText');
const allBtn = document.querySelector('#allLi');

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

function checkInvalidInput(string) {
  const trimmedString = string.trim();
  const check = /^[a-zA-Z0-9 ."'!#$%&]*$/.test(string);

  if (!trimmedString || !check) {
    return false;
  }
  return true;
}

// Task Creating Dom Update Function
export function insertNewTask() {
  const inputName = String(inputTextField.value);
  const check = checkInvalidInput(inputName);

  if (!check) {
    alert('Check if there are non letters/numbers, or if the textfield is empty');
    return;
  }

  createTask(inputName, type, date, time);
  resetInputs();
  removeSelectedClass();
  allBtn.classList.add('selected');
  setMode('all');
  render();
}

// Object Container for Popup Modules
export const popupHolder = {
  type: () => {
    popupS.window({
      mode: 'confirm',
      content: `
    <div class="popupContainer">
      <label>Type</label>
      <select class="popupSelect">
        <option value='general'>General</option>
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
      content: `
      <div class="popupContainer">
        <label>Date</label>
        <input type="date" class="popupDate">
        <button class="clearBtn">Clear</button>
      </div>
    `,
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
      content: `
      <div class="popupContainer">
        <label>Time</label>
        <input type="time" class="popupTime">
        <button class="clearBtn">Clear</button>
      </div>
      `,
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

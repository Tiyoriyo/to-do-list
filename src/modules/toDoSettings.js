import ToDo, { toDoList } from './toDoObject';

const mainContainer = document.querySelector('.mainContainer');
const body = document.querySelector('body');

export default function renderSettings(e, i) {
  function addSettingsScreen() {
    mainContainer.classList.add('blur');
    const settingsContainer = document.createElement('div');
    settingsContainer.classList.add('settingsContainer');

    const settingsDiv = document.createElement('div');
    settingsDiv.classList.add('settingsDiv');

    settingsContainer.append(settingsDiv);
    body.appendChild(settingsContainer);
  }

  addSettingsScreen();

  const settingsDiv = document.querySelector('.settingsDiv');
  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'name';
  const nameInput = document.createElement('input');
  nameInput.value = toDoList[i].name;

  settingsDiv.append(nameLabel, nameInput);
}

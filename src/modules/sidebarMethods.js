import clickAudio from '../sound/click.mp3';
import render, { setMode } from './renderMethods';

export default function removeSelectedClass() {
  const categoryLists = document.querySelectorAll('.categoryList');
  const combinedCategoryList = [...categoryLists[0].children]
    .concat([...categoryLists[1].children]);
  combinedCategoryList.forEach((item) => { item.classList.remove('selected'); });
}

export function selectFilter(e, string) {
  const audio = new Audio(clickAudio);
  audio.play();
  removeSelectedClass();
  e.target.classList.add('selected');
  setMode(string);
  render();
}

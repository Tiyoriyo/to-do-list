import render, { setMode } from './renderMethods';

export default function removeSelectedClass() {
  const categoryLists = document.querySelectorAll('.categoryList');
  const combinedCategoryList = [...categoryLists[0].children]
    .concat([...categoryLists[1].children]);
  combinedCategoryList.forEach((item) => { item.classList.remove('selected'); });
}

export function selectFilter(e, string) {
  removeSelectedClass();
  e.target.classList.add('selected');
  setMode(string);
  render();
}

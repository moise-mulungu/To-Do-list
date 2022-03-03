// import _ from 'lodash';
import './style.css';

const toDoContainer = document.querySelector('.container');

const topSection = document.querySelector('.title-list');
const heading = document.createElement('h1');
heading.classList.add('head');
heading.textContent = 'To-Do list';
topSection.appendChild(heading);

const divList = document.createElement('div');
divList.id = 'div-list';
toDoContainer.appendChild(divList);

const listItems = document.createElement('ul');
listItems.classList.add('list-section');
divList.appendChild(listItems);

const clearButton = document.createElement('button');
clearButton.classList.add('clear-all');
clearButton.type = 'button';
clearButton.textContent = 'clear all completed';
toDoContainer.appendChild(clearButton);

const todo = [
  {
    description: 'walk',
    completed: false,
    index: 1,
  },
  {
    description: 'work-out',
    completed: false,
    index: 2,
  },
];
for (let i = 0; i < 2; i += 1) {
  const addTodo = todo[i];
  listItems.innerHTML += `
     <li class="item">
     <div class= "checkbox">
     <input type="checkbox" class="ch"></input>
     <p class="text">${addTodo.description}</p>
     </div>
     <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
     </li>
     `;
}

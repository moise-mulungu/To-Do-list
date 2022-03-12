import './style.css';
import completeTask from './modules/complete.js';
import { addTodo, removeIcon } from './modules/functions.js';

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
clearButton.id = 'clear';
clearButton.style.cursor = 'pointer';
clearButton.type = 'button';
clearButton.textContent = 'Clear all completed';
toDoContainer.appendChild(clearButton);

let todo = [];

const addToLocalStorage = () => {
  localStorage.setItem('newTasks', JSON.stringify(todo));
};

const getFromLocalStorage = () => {
  if (localStorage.getItem('newTasks')) {
    todo = JSON.parse(localStorage.getItem('newTasks'));
  }
  return todo;
};

const updateIndex = () => {
  todo.map((a) => {
    const index = todo.indexOf(a);
    a.index = index + 1;
    return a;
  });
};

const addButton = document.querySelector('.button-list');
const inputField = document.querySelector('.input');

const displayTasks = () => {
  listItems.replaceChildren();
  const mylocal = getFromLocalStorage();
  for (let i = 0; i < mylocal.length; i += 1) {
    const addTodo = todo[i];
    listItems.innerHTML += `
        <li class="item" >
          <div class= "checkbox">
            <input type="checkbox" id="checkbox"></input>
            <p class="text" id="textId">${addTodo.description}</p>
          </div>
          <span><i  id="${i}" class="fa-solid fa-trash delete"></i></span>
        </li>
        `;
  }
  // edit function
  const editContent = (para, value) => {
    const itemId = Number(para.parentNode.parentNode.id);
    todo[itemId].description = value;
    addToLocalStorage();
  };
  toDoContainer.addEventListener('click', () => {
    document.addEventListener('keydown', (e) => {
      e.target.contentEditable = true;
      if (e.target.id === 'textId') {
        if (e.key === 'Enter') {
          editContent(e.target, e.target.innerHTML);
        }
      }
    });
  });
};

toDoContainer.addEventListener('click', (e) => {
  const icon = e.target.classList;
  if (icon.contains('delete')) {
    removeIcon(todo, e.target.id);
    addToLocalStorage();
    displayTasks();
  }
});

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  addTodo(todo, inputField.value);
  addToLocalStorage();
  displayTasks();
  inputField.value = '';
});
// loading section
document.addEventListener('DOMContentLoaded', () => {
  getFromLocalStorage();
  displayTasks();
});
// complete button section
const completeStatus = () => {
  document.addEventListener('click', (event) => {
    if (event.target.id === 'checkbox') {
      completeTask(event.target.checked, event.target, todo);
      addToLocalStorage();
    }
  });
};

const clearCompletedTask = () => {
  todo = todo.filter((t) => t.completed !== true);
  addToLocalStorage();
  updateIndex();
  displayTasks();
};
completeStatus();

document.addEventListener('click', (e) => {
  if (e.target.id === 'clear') {
    clearCompletedTask();
  }
});

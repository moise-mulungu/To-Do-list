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
        <li class="item" id="${i}">
          <div class= "checkbox">
            <input type="checkbox" id="checkbox"></input>
            <p class="text" id="textId">${addTodo.description}</p>
          </div>
          <span><i id="delete"class="fa-solid fa-trash"></i></span>
        </li>
        `;
  }

  const editContent = (para, value) => {
    const itemId = Number(para.parentNode.parentNode.id);
    todo[itemId].description = value;
    addToLocalStorage();
  };

  toDoContainer.addEventListener('click', (e) => {
    e.target.contentEditable = true;
    document.addEventListener('keydown', (e) => {
      if (e.target.id === 'textId') {
        if (e.key === 'Enter') {
          editContent(e.target, e.target.innerHTML);
        }
      }
    });
  });
};

const removeIcon = (item) => {
  const itemId = Number(item.parentNode.parentNode.id);
  const newId = itemId + 1;

  todo = todo.filter((a) => a.index !== newId);
  updateIndex();
  addToLocalStorage();
};

toDoContainer.addEventListener('click', (e) => {
  const icon = e.target.id;
  if (icon === 'delete') {
    removeIcon(e.target);
    displayTasks();
  }
});
const addTodo = () => {
  const lengt = todo.length;
  todo.push({
    index: lengt + 1,
    description: inputField.value,
    completed: false,
  });
  addToLocalStorage();
  inputField.value = '';
};

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  addTodo();
  displayTasks();
});

document.addEventListener('DOMContentLoaded', () => {
  getFromLocalStorage();
  displayTasks();
});
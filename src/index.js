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
clearButton.textContent = 'Clear all completed';
toDoContainer.appendChild(clearButton);

const todo = [
  {
    description: 'work',
    completed: false,
    index: 1,
  },
  {
    description: 'work-out',
    completed: false,
    index: 2,
  },
];

const addToLocalStorage = () => {
  localStorage.setItem('newTasks', JSON.stringify(todo));
};

const getFromLocalStorage = () => {
  if (localStorage.getItem('newTasks')) {
    todo = JSON.parse(localStorage.getItem('newTasks'));
  }
  return todo;
};
const displayTasks = () => {
  toDoContainer.innerHTML = '';
  const mylocal = getFromLocalStorage();

  mylocal.forEach((tsk) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    if (tsk.checked === true) {
      checkbox.setAttribute('checked', 'checked');
    }
    checkbox.addEventListener('change', (e) => {
      e.preventDefault();
      setState(tasks, e.target, tsk.index);
      addToLocalStorage();
    });

    const taskDesc = document.createElement('input');
    taskDesc.classList.add('todotask');
    taskDesc.value = tsk.description;
    const deleteTask = document.createElement('i');
    taskDesc.addEventListener('change', (e) => {
      e.preventDefault();
      editTask(e.target.value, tsk.index);
      taskDesc.blur();
    });
    deleteTask.classList.add('fas', 'fa-ellipsis-v');
    deleteTask.addEventListener('click', () => {
      // rmvTask(tsk.index);
      // resetIndex(mylocal);
      addToLocalStorage();
      displayTasks();
    });

    li.append(checkbox, taskDesc, deleteTask);
    toDoContainer.appendChild(li);
  });
};

const addButton = document.querySelector('.button-list');
const inputField = document.querySelector('.input');

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

for (let i = 0; i < todo.length; i += 1) {
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

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  addTodo();
});

document.addEventListener('DOMContentLoaded', () => {
  getFromLocalStorage();
  displayTasks();
});

/**
 * @jest-environment jsdom
 */
// import { addTodo, removeIcon } from './index.js';

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

// document.body.innerHTML = '<div>'
//   + '<ul id="list"></ul>'
//   + '<input id="idList"/>'
//   + '</div>';
// const itemsList = document.querySelector('#list');
// const inputField = document.querySelector('#idList');
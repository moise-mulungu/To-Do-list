import { addTodo, removeIcon, editContent, completeStatus, clearCompletedTask } from './functions.js';

let todo = [];

describe('Testing addTodo function', () => {
  test('check if the first value is added', () => {
    addTodo(todo, 'microverse');
    expect(todo.length).toBe(1);
  });
  test('check if the description of the added item matches the input', () => {
    addTodo(todo, 'micronaut');
    expect(todo[1].description).toMatch('micronaut');
  });
  test('check if third value is added', () => {
    addTodo(todo, 'microscope');
    expect(todo.length).toBe(3);
  });
});
describe('test the removeIcon function', () => {
  test('check if an added item is removed', () => {
    removeIcon(todo, 0);
    expect(todo.length).toBe(2);
  });
  test('check if an added item is removed', () => {
    removeIcon(todo, 0);
    expect(todo.length).toBe(1);
  });
  test('check if an added item is removed', () => {
    removeIcon(todo, 0);
    expect(todo.length).toBe(0);
  });
});


describe('test editContent function', ()=> {
  test('check if the description is edited', () => {
    addTodo(todo, 'micronaut');
    addTodo(todo, 'microsoft');
    addTodo(todo, 'micrometa');
    editContent(todo, 'myself', 2);
    expect(todo[2].description).toBe('myself')
  })
})

describe('test completeStatus function', () => {
  test('check if the tas is marked as complete', () => {
    completeStatus(todo, 2, true);
    expect(todo[2].completed).toBe(true);
  })
})

describe('test the clearCompletedTask function', () => {
  test('check if the clear all completed task works', () => {
    todo = clearCompletedTask(todo);
    expect(todo.length).toBe(2);
  })
})
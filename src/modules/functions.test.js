import { addTodo, removeIcon } from './functions.js';

const todo = [];

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

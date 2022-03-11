const addTodo = (todo, value) => {
  const lengt = todo.length;
  todo.push({
    index: lengt + 1,
    description: value,
    completed: false,
  });
};

const todo = [];

describe('testing the addTodo function', () => {
  test('check if items have been added to the list', () => {
    addTodo(todo, 'string');

    expect(todo.length).toBe(1);
  });
  test('check if items have been added to the list', () => {
    addTodo(todo, 'value');

    expect(todo[1].description).toEqual('value');
  });
  test('check if items have been added to the list', () => {
    addTodo(todo, 'hello');

    expect(todo[2].description).toEqual('hello');
  });
});

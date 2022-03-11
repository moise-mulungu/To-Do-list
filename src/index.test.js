const addTodo = (todo, value) => {
  const lengt = todo.length;
  todo.push({
    index: lengt + 1,
    description: value,
    completed: false,
  });
};

const todo = [];

const removeIcon = (newId, todo) => {
  todo = todo.filter((a) => a.index !== newId);
  return todo;
};

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

describe('remove the removeIcon function', () => {
  test('check if the selected items have been removed', () => {
    removeIcon(2, todo);

    expect(todo[0].index).toEqual(1);
  });

  test('check if the selected items have been removed', () => {
    removeIcon(1, todo);

    expect(todo[2].description).toEqual('hello');
  });
});
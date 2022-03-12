const addTodo = (todo, input) => {
  const lengt = todo.length;
  todo.push({
    index: lengt + 1,
    description: input,
    completed: false,
  });
};

const removeIcon = (todo, id) => {
  const spliceItems = todo.splice(id, 1);
  return spliceItems;
};
export { addTodo, removeIcon };
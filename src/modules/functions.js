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
const editContent = (todo, input, index) => {
  todo[index].description = input;
  return todo;
};
const completeStatus = (todo, index, input) => {
  todo[index].completed = input;
  return todo;
};

const clearCompletedTask = (todo) => {
  todo = todo.filter((task) => task.completed === false);
  return todo;
};

export {
  addTodo, removeIcon, editContent, completeStatus, clearCompletedTask,
};
export default (status, item, todo) => {
  const itemId = Number(item.parentNode.parentNode.id);
  todo[itemId].completed = status;
};

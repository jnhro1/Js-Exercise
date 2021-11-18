const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

const countCompletedTodos = todos => todos.reduce((cnt, todo) => (todo.completed ? ++cnt : cnt), 0);

console.log(countCompletedTodos(todos)); // 1

const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

// const getMaxId = todos => todos.reduce((max, todo) => (max > todo.id ? max : todo.id), 0);

const getMaxId = todos => Math.max(0, ...todos.map(todo => todo.id));

console.log(getMaxId(todos)); // 3
console.log(getMaxId([])); // 0

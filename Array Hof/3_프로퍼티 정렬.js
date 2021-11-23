let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

// const sortBy = (todos, key) => todos.sort((x, y) => (x[key] > y[key] ? 1 : -1));
// 부수효과 일으킨다.

const sortBy = (todos, key) => [...todos].sort((x, y) => (x[key] > y[key] ? 1 : x[key] < y[key] ? -1 : 0));


console.log(sortBy(todos, 'id'));
// [
//     { id: 1, content: 'Javascript', completed: false },
//     { id: 2, content: 'CSS', completed: true },
//     { id: 3, content: 'HTML', completed: false }
//   ]

console.log(sortBy(todos, 'content'));
// [
//     { id: 2, content: 'CSS', completed: true },
//     { id: 3, content: 'HTML', completed: false },
//     { id: 1, content: 'Javascript', completed: false }
//   ]

console.log(sortBy(todos, 'completed'));
// [
//     { id: 1, content: 'Javascript', completed: false },
//     { id: 3, content: 'HTML', completed: false },
//     { id: 2, content: 'CSS', completed: true }
//   ]

const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

// const render = todos =>
//   todos.reduce(
//     (src, todo) =>
//       (src += `<li id="${todo.id}">
//         <label><input type="checkbox"${todo.completed ? ' checked' : ''}>${todo.content}</label>
//     </li>`),
//     ''
//   );

const render = todos =>
  todos
    .map(
      ({ id, completed, content }) => `<li id="${id}">
      <label><input type="checkbox"${completed ? ' checked' : ''}>${content}</label>
     </li>`
    )
    .join('');

console.log(render(todos));

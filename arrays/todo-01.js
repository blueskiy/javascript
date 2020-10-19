const todos = [
  {
    title: 'Estudar Javascript',
    completed: false,
  },
  {
    title: 'Estudar Advanced CSS',
    completed: false,
  },
  {
    title: 'Jornada Rocketseat',
    completed: false,
  },
  {
    title: 'Tocar Violão',
    completed: true,
  },
  {
    title: 'Ficar Suave',
    completed: false,
  },
];

const deleteTodo = function (todos, todoTitle) {
  const index = todos.findIndex(function (todo) {
    return todo.title.toLowerCase() === todoTitle.toLowerCase()
  })

  if (index > -1) {
    todos.splice(index, 1)
  }
};

const todo = deleteTodo(todos, 'ficar suave');
console.table(todos);

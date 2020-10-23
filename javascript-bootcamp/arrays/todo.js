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
    completed: true,
  },
];

//sortTodos em ordem alfabética e depois por status

const sortTodos = function (todos) {
  todos.sort(function (a, b) {
    if(!a.completed && a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1

      //RESOLVE ISSO CARA
    } else if(a.completed && a.title.toLowerCase() < b.title.toLowerCase()) {
      return 1
    }
  })
}

const deleteTodo = function (todos, todoTitle) {
  const index = todos.findIndex(function (todo) {
    return todo.title.toLowerCase() === todoTitle.toLowerCase();
  })

  if (index > -1) {
    todos.splice(index, 1);
  }
};

const getThingsToDo = function (todos) {
  return todos.filter(function (todo) {
    return !todo.completed;
  });
};

sortTodos(todos);
console.table(todos);

// console.table(getThingsToDo(todos));
// const todo = deleteTodo(todos, 'ficar suave');
// console.table(todos);

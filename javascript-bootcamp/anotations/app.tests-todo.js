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

//you have n todos left (p element)
// function todosLeft () {
//   let incompleteTodos = 0;

//   todos.forEach(function(todo) {
//     todo.completed ? 'good job' : incompleteTodos++;
//   });

//   const summary = document.createElement('h3');
//   summary.textContent = `Você tem ${incompleteTodos} coisas pra fazer, amigão`;
//   document.querySelector('body').appendChild(summary);
// };

function todosLeft () {
  const incompleteTodos = todos.filter(function(todo) {
    return !todo.completed
  });

  const summary = document.createElement('h3');
  summary.textContent = `Você tem ${incompleteTodos.length} coisas pra fazer, amigão`;
  document.querySelector('body').appendChild(summary);
};

todosLeft();

//add a p for each todo above (use text value)
todos.forEach(function(todo) {
  const renderTodo = document.createElement('p');
  renderTodo.textContent = todo.title;
  document.querySelector('body').appendChild(renderTodo);
});

document.querySelector('#hide-completed').addEventListener('change', function(e) {

  if(!e.target.checked) {
    renderTodos(todos, filters)
    
    return
  }

  const hideCompleteTodos = todos.filter(function(todo) {
   return !todo.completed
  })

  renderTodos(hideCompleteTodos, filters)
});

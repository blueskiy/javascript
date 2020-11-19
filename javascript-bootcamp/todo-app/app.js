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

//botão que cria troços
document.querySelector('button').addEventListener('click', function(e) {
  console.log('Novo troço criado');
});

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
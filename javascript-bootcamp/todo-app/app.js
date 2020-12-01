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

const filters = {
  searchText: '',
  hideCompleted: false
}

const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    return todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
  });

  const incompleteTodos = filteredTodos.filter(function(todo) {
    return !todo.completed
  });

  document.querySelector('#todos').innerHTML = ''

  const summary = document.createElement('h3');
  summary.textContent = `Você tem ${incompleteTodos.length} coisas pra fazer, amigão`;
  document.querySelector('#todos').appendChild(summary);

  filteredTodos.forEach(function (todo) {
    const todoEl = document.createElement('p');
    todoEl.className = 'todo';
    todoEl.textContent = todo.title
    document.querySelector('#todos').appendChild(todoEl);
  });
};
renderTodos(todos, filters);

//listen for todo text change
document.querySelector('#search-todo').addEventListener('input', function(e) {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

//adding new todo
document.querySelector('#new-todo').addEventListener('submit', function(e) {

  e.preventDefault();
  //pq não funciona com let?
  const inputVal = e.target.elements.newTodo.value;

  const newTodo = {
    title: inputVal,
    completed: false
  }

  todos.push(newTodo);
  renderTodos(todos, filters);
  //pq não funciona com let?
  e.target.elements.newTodo.value = '';
});

document.querySelector('#hide-completed').addEventListener('change', function(e) {
  const hideCompleteTodos = todos.filter(function(todo) {
   return !todo.completed
  });
});
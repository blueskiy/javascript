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

//sortTodos por status e depois em ordem alfabética
const sortTodos = function (todos) {
  todos.sort(function (a, b) {
    if(!a.completed && a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1
    } else if(!b.completed) {
      return 1
    } else if(a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1
    } else if(b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1
    }
  })
}

//deleteTodo => função que tem como argumentos o array e a propriedade title
//de cada todo. A variável index aplica o método .findIndex() no array,
//executando uma função para cada elemento (todo) do array, que retorna
//o resultado booleano da comparação entre o título de cada elemento (todo) e o
//segundo argumento passado na função deleteTodo (todoTitle). Ambos convertidos
//para lowercase a fim de evitar retornos falsos devido a diferença entre letras
//maiúsculas e minúsculas.
const deleteTodo = function (todos, todoTitle) {
  const index = todos.findIndex(function (todo) {
    return todo.title.toLowerCase() === todoTitle.toLowerCase();
  });

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

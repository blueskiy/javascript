const todoList = document.querySelector('#app ul');
const input = document.querySelector('#app input');
const addButton = document.querySelector('#app button');

const todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
  todoList.innerHTML = '';

  for(todo of todos) {
    const todoElement = document.createElement('li'),
          todoText = document.createTextNode(todo),
          linkElement = document.createElement('a'),
          linkText = document.createTextNode('Excluir'),
          pos = todos.indexOf(todo);

    linkElement.setAttribute('href', '#');
    linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');
    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    todoList.appendChild(todoElement);
  }
}

renderTodos()

function addTodo() {
  const todoText = input.value;
  
  todos.push(todoText);
  input.value = '';
  renderTodos();
  saveToStorage();
}

addButton.onclick = addTodo;

function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('list_todos', JSON.stringify(todos));
}

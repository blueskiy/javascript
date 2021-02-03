'use strict'

const newTodo = document.querySelector('#new-todo')
const todosContainer = document.querySelector('#todos')
const searchTodo = document.querySelector('#search-todo')
const hideCompleted = document.querySelector('#hide-completed')

let todos = getSavedTodos()

const filters = {
  searchText: '',
  hideCompleted: false
}

renderTodos(todos, filters);

// Listen for text change
searchTodo.addEventListener('input', (e) => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

newTodo.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const inputVal = e.target.elements.newTodo.value;

  const newTodo = {
    id: uuidv4(),
    title: inputVal,
    completed: false
  }

  todos.push(newTodo);
  saveTodos(todos)
  renderTodos(todos, filters);

  e.target.elements.newTodo.value = '';
});

hideCompleted.addEventListener('change', (e) => {
  filters.hideCompleted = e.target.checked
  renderTodos(todos, filters)
});

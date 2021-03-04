import { createTodo, loadTodos } from './todos'
import { setFilters } from './filters'
import { renderTodos } from './views'

const newTodo = document.querySelector('#new-todo')
const searchTodo = document.querySelector('#search-todo')
const hideCompleted = document.querySelector('#hide-completed')

renderTodos();

searchTodo.addEventListener('input', (event) => {
  setFilters({
    searchText: event.target.value
  })

  renderTodos();
});

newTodo.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const title = event.target.elements.newTodo.value.trim();

  if(title === '') {
    return
  }

  createTodo(title)
  renderTodos();

  event.target.elements.newTodo.value = '';
});

hideCompleted.addEventListener('change', (event) => {
  setFilters({
    hideCompleted: event.target.checked
  })

  renderTodos()
});

window.addEventListener('storage', (event) => {
    if(event.key === 'todos') {
        loadTodos()
        renderTodos()
    } 
})
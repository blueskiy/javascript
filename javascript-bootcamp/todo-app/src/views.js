import { getTodos, toggleTodo, removeTodo } from './todos'
import { getFilters } from './filters'

const todos = getTodos()
const filters = getFilters()

const handlers = {
    checkboxHandler: (checkbox, todo) => {
        checkbox.addEventListener('change', () => {
            toggleTodo(todo.id)
            renderTodos()
        })
    },

    deleteButtonHandler: (deleteTodoButton, todo) => {
        deleteTodoButton.addEventListener('click', () => {
            removeTodo(todo.id)
            renderTodos()
        })
    }
}

const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const textEl = document.createElement('span')
    const deleteTodoButton = document.createElement('button')

    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')

    checkbox.setAttribute('type', 'checkbox')
    handlers.checkboxHandler(checkbox, todo)
    checkbox.checked = todo.completed

    textEl.textContent = todo.title

    deleteTodoButton.textContent = 'Remover'
    deleteTodoButton.classList.add('button', 'button--text')
    handlers.deleteButtonHandler(deleteTodoButton, todo)

    containerEl.appendChild(checkbox)
    containerEl.appendChild(textEl)
    todoEl.appendChild(containerEl)
    todoEl.appendChild(deleteTodoButton)

    return todoEl
}

export const renderTodos = () => {
    const todosContainer = document.querySelector('#todos')
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    });
  
    todosContainer.innerHTML = ''
    todosContainer.appendChild(generateSummaryDOM(filteredTodos));
  
    filteredTodos.forEach(function (todo) {
      todosContainer.appendChild(generateTodoDOM(todo));
    });
}

const generateSummaryDOM = (filteredTodos) => {
    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    if(incompleteTodos.length === 0) {
        const emptyMessage = document.createElement('p')
        emptyMessage.classList.add('empty-message')
        emptyMessage.textContent = 'Nenhum to-do encontrado'

        return emptyMessage
    }

    const summary = document.createElement('h3');
    summary.classList.add('list-title')
    const isPlural = incompleteTodos.length === 1 ? 'coisa' : 'coisas'
    summary.textContent = `Você tem ${incompleteTodos.length} ${isPlural} pra fazer, amigão`;
    
    return summary
}
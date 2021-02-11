'use strict'

const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    
    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (error) {
        return []
    }
}

const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
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

    deleteTodoButton.textContent = 'Remove'
    deleteTodoButton.classList.add('button', 'button--text')
    handlers.deleteButtonHandler(deleteTodoButton, todo)

    containerEl.appendChild(checkbox)
    containerEl.appendChild(textEl)
    todoEl.appendChild(containerEl)
    todoEl.appendChild(deleteTodoButton)

    return todoEl
}

const renderTodos = (todos, filters) => {
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

const toggleTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if(todoIndex > -1) {
        todos[todoIndex].completed ? 
        todos[todoIndex].completed = false : 
        todos[todoIndex].completed = true
    }
}

const removeTodo = function(id) {
    const todoIndex = todos.findIndex((todo) =>todo.id === id)

    if(todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

const generateSummaryDOM = (filteredTodos) => {
    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    if(incompleteTodos.length === 0) {
        const emptyMessage = document.createElement('p')
        emptyMessage.classList.add('empty-message')
        emptyMessage.textContent = 'No to-dos to show'

        return emptyMessage
    }

    const summary = document.createElement('h3');
    summary.classList.add('list-title')
    const isPlural = incompleteTodos.length === 1 ? 'coisa' : 'coisas'
    summary.textContent = `Você tem ${incompleteTodos.length} ${isPlural} pra fazer, amigão`;
    
    return summary
}

const handlers = {
    checkboxHandler: (checkbox, todo) => {
        checkbox.addEventListener('change', () => {
            toggleTodo(todo.id)
            saveTodos(todos)
            renderTodos(todos, filters)
        })
    },

    deleteButtonHandler: (deleteTodoButton, todo) => {
        deleteTodoButton.addEventListener('click', () => {
            removeTodo(todo.id)
            saveTodos(todos)
            renderTodos(todos, filters)
        })
    }
}
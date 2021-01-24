const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')

    if(todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const textEl = document.createElement('span')
    const deleteTodoButton = document.createElement('button')

    todoEl.className = 'todo';

    checkbox.setAttribute('type', 'checkbox')
    handlers.checkboxHandler(checkbox, todo)
    checkbox.checked = todo.completed

    textEl.textContent = todo.title

    deleteTodoButton.textContent = 'x'
    handlers.deleteButtonHandler(deleteTodoButton, todo)

    todoEl.appendChild(checkbox)
    todoEl.appendChild(textEl)
    todoEl.appendChild(deleteTodoButton)

    return todoEl
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
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

const toggleTodo = function(id) {
    const todoIndex = todos.findIndex(function(todo) {
        return todo.id === id
    })

    if(todoIndex > -1) {
        todos[todoIndex].completed ? 
        todos[todoIndex].completed = false : 
        todos[todoIndex].completed = true
    }
}

const removeTodo = function(id) {
    const todoIndex = todos.findIndex(function(todo) {
        return todo.id === id
    })

    if(todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

const generateSummaryDOM = (filteredTodos) => {
    const incompleteTodos = filteredTodos.filter(function(todo) {
        return !todo.completed
    });

    const summary = document.createElement('h3');
    summary.textContent = `Você tem ${incompleteTodos.length} coisas pra fazer, amigão`;
    
    return summary
}

const handlers = {
    checkboxHandler: (checkbox, todo) => {
        checkbox.addEventListener('change', function() {
            toggleTodo(todo.id)
            saveTodos(todos)
            renderTodos(todos, filters)
        })
    },

    deleteButtonHandler: (deleteTodoButton, todo) => {
        deleteTodoButton.addEventListener('click', function() {
            removeTodo(todo.id)
            saveTodos(todos)
            renderTodos(todos, filters)
        })
    }
}
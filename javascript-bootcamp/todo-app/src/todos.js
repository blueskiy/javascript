import uuidv4 from 'uuid/v4'

let todos = []

export const loadTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    
    try {
        todos = todosJSON ? JSON.parse(todosJSON) : []
    } catch (error) {
        todos = []
    }
}

const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

export const getTodos = () => todos

export const createTodo = (title) => {
    todos.push({
        id: uuidv4(),
        title,
        completed: false
    })

    saveTodos()
}

export const toggleTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if(todoIndex > -1) {
        todos[todoIndex].completed ? 
        todos[todoIndex].completed = false : 
        todos[todoIndex].completed = true

        saveTodos()
    }
}

export const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) =>todo.id === id)

    if(todoIndex > -1) {
        todos.splice(todoIndex, 1)
        saveTodos()
    }
}

loadTodos()
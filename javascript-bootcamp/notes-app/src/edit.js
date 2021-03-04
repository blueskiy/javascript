import { initializeEditPage, generateLastEdited } from './views'
import { updateNote, handlers } from './notes'

const noteBody = document.querySelector('#note-body')
const noteTitle = document.querySelector('#note-title')
const dateElement = document.querySelector('#last-edited')
const removeNoteButton = document.querySelector('#remove-note')
const backToHome = document.querySelector('#back-to-home')
const noteId = location.hash.substring(1)

initializeEditPage(noteId)

noteTitle.addEventListener('input', (event) => {
    const note = updateNote(noteId, {
        title: event.target.value
    })

    dateElement.textContent = generateLastEdited(note.updatedAt)
})

noteBody.addEventListener('input', (event) => {
    const note = updateNote(noteId, {
        body: event.target.value
    })

    dateElement.textContent = generateLastEdited(note.updatedAt)
})

removeNoteButton.addEventListener('click', () => {
    handlers.removeNote(noteId)
    location.assign('/')
})

backToHome.addEventListener('click', () => {
    location.assign('/')
})

window.addEventListener('storage', (event) => {
    if (event.key === 'notes') {
        initializeEditPage(noteId)
    }
})

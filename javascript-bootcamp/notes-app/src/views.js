import moment from 'moment'
import { getFilters } from './filters'
import { sortNotes, getNotes } from './notes'

export const generateNoteDOM =  (note) => {
    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')
    const statusEl = document.createElement('p')

    noteEl.classList.add('list-item')
    textEl.classList.add('list-item__title')
    statusEl.classList.add('list-item__subtitle')

    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Nota não nomeada'
    }

    noteEl.appendChild(textEl)

    noteEl.setAttribute('href', `/edit#${note.id}`)

    statusEl.textContent = generateLastEdited(note.updatedAt)
    noteEl.appendChild(statusEl)

    return noteEl
}

export const renderNotes = () => {
    const notesEl = document.querySelector('#notes')
    const filters = getFilters()
    const notes = sortNotes(filters.sortBy)
    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    notesEl.innerHTML = ''

    if(filteredNotes.length > 0) {
        filteredNotes.forEach((note) => {
            const noteEl = generateNoteDOM(note)
            notesEl.appendChild(noteEl);
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'Nenhuma nota encontrada'
        emptyMessage.classList.add('empty-message')
        notesEl.appendChild(emptyMessage);
    }
}

export const initializeEditPage = (noteId) => {
    const noteBody = document.querySelector('#note-body')
    const noteTitle = document.querySelector('#note-title')
    const dateElement = document.querySelector('#last-edited')

    const notes = getNotes()
    const note = notes.find((note) => note.id === noteId)

    if (!note) {
        location.assign('/')
    }

    noteTitle.value = note.title
    noteBody.value = note.body
    dateElement.textContent = generateLastEdited(note.updatedAt)
}

export const generateLastEdited = (timestamp) => `Última edição ${moment(timestamp).locale('pt-br').fromNow()}`
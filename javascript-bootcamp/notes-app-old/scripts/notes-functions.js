'use strict'

const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')

    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (error) {
        return []
    }
}

const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Generate the DOM structure for a note
const generateNoteDOM =  (note) => {
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

const sortNotes = (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort(function (a, b) {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort(function (a, b) {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'alphabetical') {
        return notes.sort(function (a, b) {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return notes
    }
}

const renderNotes = (notes, filters) => {
    const notesEl = document.querySelector('#notes')

    notes = sortNotes(notes, filters.sortBy)
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

const handlers = {
    removeNote: (id) => {
        const noteIndex = notes.findIndex((note) => note.id === id)

        if (noteIndex > -1) {
            notes.splice(noteIndex, 1)
        }
    }
}


const generateLastEdited = (timestamp) => `Última edição ${moment(timestamp).locale('pt-br').fromNow()}`

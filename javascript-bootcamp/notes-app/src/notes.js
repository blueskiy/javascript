import uuidv4 from 'uuid/v4'
import moment from 'moment'

let notes = []

const loadNotes = () => {
    const notesJSON = localStorage.getItem('notes')

    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (error) {
        return []
    }
}

const saveNotes = () => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

const getNotes = () => notes

const createNote = () => {
    const id = uuidv4()
    const timestamp = moment().valueOf()

    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })

    saveNotes()

    return id
}

const handlers = {
    removeNote: (id) => {
        const noteIndex = notes.findIndex((note) => note.id === id)

        if (noteIndex > -1) {
            notes.splice(noteIndex, 1)
            saveNotes()
        }
    }
}

const sortNotes = (sortBy) => {
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

const updateNote = (id, updates) => {
    const note = notes.find((note) => note.id === id)

    if(!note) {
        return
    }

    if(typeof updates.title === 'string') {
        note.title = updates.title
        note.updatedAt = moment().valueOf()
    }

    if(typeof updates.body === 'string') {
        note.body = updates.body
        note.updatedAt = moment().valueOf()
    }

    saveNotes()
    return note
}

notes = loadNotes()

export { 
    getNotes,
    createNote,
    handlers,
    sortNotes,
    updateNote
}
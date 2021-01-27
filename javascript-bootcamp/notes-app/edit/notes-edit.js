const removeNoteButton = document.querySelector('#remove-note')
const dateElement = document.querySelector('#last-edited')
const noteTitle = document.querySelector('#note-title')
const noteBody = document.querySelector('#note-body')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(function (note) {
    return note.id === noteId
})

if (note === undefined) {
    location.assign('/')
}

noteTitle.value = note.title
noteBody.value = note.body
dateElement.textContent = generateLastEdited(note.updatedAt)

noteTitle.addEventListener('input', function (event) {
    note.title = event.target.value
    note.updatedAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

noteBody.addEventListener('input', function (event) {
    note.body = event.target.value
    note.updatedAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

removeNoteButton.addEventListener('click', function () {
    handlers.removeNote(note.id)
    saveNotes(notes)
    location.assign('/')
})

window.addEventListener('storage', function (event) {
    if (event.key === 'notes') {
        notes = JSON.parse(event.newValue)

        note = notes.find(function (note) {
            return note.id === noteId
        })

        if (note === undefined) {
            location.assign('/')
        }

        noteTitle.value = note.title
        noteBody.value = note.body
        dateElement.textContent = generateLastEdited(note.updatedAt)
    }
})

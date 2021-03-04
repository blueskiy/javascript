'use strict'

const filterBy = document.querySelector('#filter-by')
const searchNote = document.querySelector('#search-note')
const createNoteButton = document.querySelector('#create-note')

let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters);

//listen for new note creation
createNoteButton.addEventListener('click', () => {
    const id = uuidv4()
    const timestamp = moment().valueOf()

    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })

    saveNotes(notes)
    location.assign(`/edit#${id}`)
});

//listen for note text change
searchNote.addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters);
});

filterBy.addEventListener('change', (event) => {
    filters.sortBy = event.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})


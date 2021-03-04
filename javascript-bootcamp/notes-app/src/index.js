import { createNote } from './notes'
import { setFilters } from './filters'
import { renderNotes } from './views'

const filterBy = document.querySelector('#filter-by')
const searchNote = document.querySelector('#search-note')
const createNoteButton = document.querySelector('#create-note')

renderNotes();

//listen for new note creation
createNoteButton.addEventListener('click', () => {
    const id = createNote()
    location.assign(`/edit#${id}`)
});

//listen for note text change
searchNote.addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderNotes();
});

filterBy.addEventListener('change', (event) => {
    setFilters({
        sortBy: e.target.value
    })
    renderNotes()
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        renderNotes()
    }
})
const filterBy = document.querySelector('#filter-by')
const searchNote = document.querySelector('#search-note')
const createNoteButton = document.querySelector('#create-note')

const notes = getSavedNotes()

const filters = {
  searchText: ''
}

renderNotes(notes, filters);

//listen for new note creation
createNoteButton.addEventListener('click', function() {
  notes.push({
    id: uuidv4(),
    title: '',
    body: ''
  })

  saveNotes(notes)
  renderNotes(notes, filters)
});

//listen for note text change
searchNote.addEventListener('input', function(e) {
  filters.searchText = e.target.value
  renderNotes(notes, filters);
});

filterBy.addEventListener('change', (e) => {
  console.log(e.target.value);
})

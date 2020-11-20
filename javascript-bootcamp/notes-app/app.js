const notes = [
  {
    title: 'My next trip',
    body: 'I would like to go to Spain',
  },
  {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better',
  },
  {
    title: 'Office modification',
    body: 'Get a new seat',
  },
];

const filters = {
  searchText: ''
}

const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  });

  document.querySelector('#notes').innerHTML = ''

  filteredNotes.forEach(function (note) {
    const noteEl = document.createElement('p');
    // noteEl.classList.add('note')
    noteEl.className = 'note'
    noteEl.textContent = note.title;
    document.querySelector('#notes').appendChild(noteEl);
  });
};
renderNotes(notes, filters);

//listen for new note creation
document.querySelector('#create-note').addEventListener('click', function() {
  console.log('Add new note');
});

//liste for note text change
document.querySelector('#search-note').addEventListener('input', function(e) {
  filters.searchText = e.target.value
  renderNotes(notes, filters);
});

document.querySelector('#name-form').addEventListener('submit', function(e) {
  e.preventDefault();

  console.log(e.target.elements.firstName.value)
  e.target.elements.firstName.value = ''
});
//DOM - Document Object Model
//querySelector() -> matches the first match it finds

/*===query and remove the first <p> element===*/
// const p = document.querySelector('p');
// p.remove();

/*===query all and remove===*/
// const ps = document.querySelectorAll('p');
// ps.forEach(function(p) {
//   p.textContent = 'otário kkkk'

// p.remove()
// console.log(p.textContent);
// });

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

  filteredNotes.forEach(function (note) {
    const noteEl = document.createElement('p');
    // noteEl.classList.add('note')
    noteEl.className = 'note'
    noteEl.textContent = note.title;
    document.querySelector('body').appendChild(noteEl);
  });
};

renderNotes(notes, filters);

//listen for new note creation
document.querySelector('#create-note').addEventListener('click', function() {
  console.log('Add new note');
});

// const deleteNotes = function () {
//   document.querySelectorAll('.note').forEach((note) => {
//     note.remove()
//   });
// };

//listen for delete all notes
document.querySelector('#remove-all').addEventListener('click', function() {
  document.querySelectorAll('.note').forEach((note) => {
    note.remove()
  });
});

//liste for note text change
document.querySelector('#search-text').addEventListener('input', function(e) {
  filters.searchText = e.target.value
  renderNotes(notes, filters);
});
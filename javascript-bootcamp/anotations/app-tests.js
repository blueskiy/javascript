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

const filterBy = document.querySelector('#filter-by')
const searchNote = document.querySelector('#search-note')
const createNoteButton = document.querySelector('#create-note')

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

//CREATE, UPDATE
localStorage.setItem('location', 'Rio de Janeiro')
//READ
console.log(localStorage.getItem('location'));
//DELETE
localStorage.removeItem('location')

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
createNoteButton.addEventListener('click', function () {
  notes.push({
    id: uuidv4(),
    title: '',
    body: ''
  })

  saveNotes(notes)
  location.assign(`/edit.html#${notes[notes.length - 1].id}`)
});

// const deleteNotes = function () {
//   document.querySelectorAll('.note').forEach((note) => {
//     note.remove()
//   });
// };

//listen for delete all notes
document.querySelector('#remove-all').addEventListener('click', function () {
  document.querySelectorAll('.note').forEach((note) => {
    note.remove()
  });
});

//liste for note text change
document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderNotes(notes, filters);
});

document.querySelector('#name-form').addEventListener('submit', function (e) {
  e.preventDefault();

  console.log(e.target.elements.firstName.value)
  e.target.elements.firstName.value = ''
});

const handlers = {
  editNote: (id) => {
    const noteIndex = notes.findIndex(function (note) {
      return note.id === id
    })

    location.assign(`/edit.html#${notes[noteIndex].id}`)
  }
}
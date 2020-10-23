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

const findNote = function (notes, noteTitle) {
  return notes.find(function (note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
};

const sortNotes = function (notes) {
  notes.sort(function (a, b) {
    if(a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1
    } else if(b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1
    } else {
      return 0
    }
  })
}

//=====* const filteredNotes e return filteredNotes se tornam redundantes *====
// const findNotes = function (notes, query) {
//   const filteredNotes = notes.filter(function (note, index) {
//     const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
//     const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
  
//     return isTitleMatch || isBodyMatch;
//   });
//   return filteredNotes;
// }

//código mais limpo sem redundância com apenas um return
const findNotes = function (notes, query) {
  return notes.filter(function (note, index) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
  
    return isTitleMatch || isBodyMatch;
  });
}

sortNotes(notes);
console.table(notes);

// console.table(findNotes(notes, 'work'));

// const findNote = function (notes, noteTitle) {
//   const index = notes.findIndex(function (note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
//   return notes[index];
// };

const note = findNote(notes, 'office modification');
// console.table(note);

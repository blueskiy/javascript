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

const ps = document.querySelectorAll('p');

ps.forEach(function(p) {
  p.textContent = 'otário kkkk'
});

//add a new element
const newNote = document.createElement('p');
newNote.textContent = 'This is a new element from JavaScript';
document.querySelector('body').appendChild(newNote);
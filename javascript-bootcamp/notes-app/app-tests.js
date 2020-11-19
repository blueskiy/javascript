//DOM - Document Object Model
//querySelector() -> matches the first match it finds

/*===query and remove the first <p> element===*/
// const p = document.querySelector('p');
// p.remove();

/*===query all and remove===*/
const ps = document.querySelectorAll('p');
ps.forEach(function(p) {
  p.textContent = 'otário kkkk'

  // p.remove()
  // console.log(p.textContent);
});

//add a new element
const newNote = document.createElement('p');
newNote.textContent = 'This is a new element from JavaScript';
document.querySelector('body').appendChild(newNote);

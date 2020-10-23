// manipulating end arary methods
console.log(notes.pop()); //REMOVE O ÚLTIMO ITEM DO ARRAY
notes.push('My new note'); //ADICIONA UM NOVO ITEM AO FINAL DO ARRAY

// manipulating start array methods
console.log(notes.shift()); //REMOVE O PRIMEIRO ITEM DO ARRAY
notes.unshift('My First Note'); //ADICIONA UM ITEM AO INÍCIO DO ARRAY

// manipulating middle of array
notes.splice(1, 1, 'This is the new second item');

// this way is better to replace an item than splice method
notes[0] = 'My new first note';

notes.forEach(function (item, index) {
  console.log(index);
  console.log(item);
});

// let myBook = [
//   {
//     title: '1984',
//     author: 'George Orwell',
//     pageCount: 326,
//   },
// ];

// console.table(myBook);

let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326,
};

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm';

console.log(`${myBook.title} by ${myBook.author}`);

// Challenge area

// name, age, location

let filipe = {
  name: 'Filipe',
  age: 26,
  location: 'Rio de Janeiro',
};

console.log(`${filipe.name} is ${filipe.age} and lives in ${filipe.location}`);

filipe.age += 1;

console.log(`${filipe.name} is ${filipe.age} and lives in ${filipe.location}`);

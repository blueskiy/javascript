// Create an array with five todos
// You have x todos
// Print the first and second to last items -> Todo: algum todo

const todo = [
  'Estudar Javascript',
  'Estudar Advanced CSS',
  'Jornada Rockeseat',
  'Tocar Violão',
  'Ficar suave',
];

// Delete the 3rd item
todo.splice(2, 1);
// Add a new item onto the end
todo.push('My new last item');
// Remove the first item from the list
console.log(`Todo ${todo.shift()} was removed`);

console.log(`You have ${todo.length} todos`);

// 1. The first item
// 2. The second item
todo.forEach((todo, index) => {
  const listNumber = index + 1;
  console.log(`${listNumber}. ${todo}`);
});

// If I dont have an array or im trying to count in a different order, i'll user the FOR statement

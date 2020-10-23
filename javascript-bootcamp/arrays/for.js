// If I dont have an array or im trying to count in a different order, i'll user the FOR statement

// Counting... 1
// fot ( initializer, condition, final expression )

for (let todoList = 0; todoList < todo.length; todoList++) {
  const listNumber = todoList + 1;
  console.log(`${listNumber}. ${todo[todoList]}`);

  // or
  // const listNumber = todoList + 1;
  // const singleTodo = todo[todoList];

  // console.log(`${listNumber}. ${singleTodo}`);
}

for (let todoList = todo.length - 1; todoList >= 0; todoList--) {
  console.log(`Reverse ${todo[todoList]}`);
}

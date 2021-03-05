const todo = {
    id: 'v4nm4m-133mgm-23423dsdma',
    title: 'kkkkk troxa',
    completed: true,
    country: 'Brazil',
    adress: 'RJ'
}

const printTodo = ({ title, completed }) => {
    console.log(`${title}: ${completed}`);
}

printTodo(todo)

const { title:todoTitle, completed, details = ['detail 1', 'detail 2'], ...others } = todo

console.log(todoTitle, completed, details, others);
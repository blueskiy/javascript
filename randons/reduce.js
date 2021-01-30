const numbers = [1, 2, 3, 4, 5, 6]

// 0 -> initial value
// can be initial value any data type?
const total = numbers.reduce(sum, 0)

function sum(accumulator, value) {
    return accumulator + value
}

console.log(total);

let realState = [
    {
        id: 'aifau89wf6aw7faw7f',
        name: 'King Size',
        price: 90000
    },
    {
        id: 'jawidfaw8adwg67f89',
        name: 'Queen Size',
        price: 889126731
    },
    {
        id: 'nf89fhu389fq3afhni',
        name: 'Princess Size',
        price: 92384789
    }
]

function reducer(acc, cur, index) {
    return {...acc, [index]: cur}
}

const newRealState = realState.reduce(reducer, {})
console.table(newRealState);
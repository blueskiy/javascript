const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}

console.log(square(23));

const people = [
    {
        name: 'Filipe André',
        age: 26
    },
    {
        name: 'Lumm',
        age: 22
    },
    {
        name: 'Derieli',
        age: 32
    }
]

const underThirty = people.filter((person) => person.age < 30)

const findTwentyTwo = people.find((person) => person.age === 22)

console.log(findTwentyTwo);

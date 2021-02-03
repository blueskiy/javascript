'use strict'

const Person = function(firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function() {
    let bio = `${this.firstName} is ${this.age}`

    // Arrow function to access the this of his parent
    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
    })

    return bio
}

Person.prototype.setName = function(fullname) {
    const names = fullname.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

const me = new Person('Filipe André', 'Machado', 26, ['Teaching', 'Singing'])
const personTwo = new Person('Artêmis', 'Lumm', 23, ['Hunting'])

console.log(me.getBio());
console.log(personTwo.getBio());
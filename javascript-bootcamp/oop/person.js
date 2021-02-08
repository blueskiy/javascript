'use strict'

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        // Arrow function to access the this of his parent
        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })
    
        return bio
    }
    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.fullName} is a ${this.position}.`
    }
    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, likes, grade) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    getBio() {
        const status = this.grade >= 70 ? 'passing' : 'failing'

        return `${this.firstName} is ${status} the class.`
    }
    updateGrade(grade) {
        return this.grade += grade
    }
}

const personOne = new Employee('Artêmis', 'Azirum', 23, 'Hunter', 'Hunting')
console.log(personOne.getBio());

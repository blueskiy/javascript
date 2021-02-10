// Counter
const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
// console.log(counter.get());

// Adder
const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const add10 = createAdder(10)
// console.log(add10(-2));
// console.log(add10(20));

// Tipper

const createTipper = (baseTip) => {
    return (amount) => {
        return baseTip * amount
    }
}

const tipperTen = createTipper(.1)
console.log(tipperTen(20));

console.log(createTipper(.3)(100))
const calculateAverage = (title, ...numbers) => {
    const result = numbers.reduce((accumulator, currentValue) => (accumulator + currentValue) / numbers.length)

    return `${title} ${result}`
}

console.log(calculateAverage('A média é', 100, 50));

const printTeam = (team, coach, ...players) => {
    console.log(`Team: ${team}`);
    console.log(`Coach: ${coach}`);
    console.log(`Players: ${players.join(', ')}`);
}

printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry')

let cities = ['Barcelona', 'Cape Town', 'Bordeaux']
cities = [...cities, 'Santiago']
console.log(cities);

let house = {
    bedrooms: 2,
    bathrooms: 1.5,
    yearBuilt: 2017
}

let newHouse = {
    basement: true,
    ...house,
    bedrooms: 3
}

console.log(house);
console.log(newHouse);
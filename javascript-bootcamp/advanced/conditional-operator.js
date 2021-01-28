const myAge = 26
const message = myAge >= 17 ? 'You can vote!' : 'You cannot vote.'

console.log(message);

const anotherAge = 27
const showPage = () => {
    return 'Showing page'
}
const showErrorPage = () => {
    return 'Showing error page'
}

// guardar o return de uma função numa variável p/ usá-la posteriormente

const pageMessage = anotherAge >= 21 ? showPage() : showErrorPage()
console.log(pageMessage);

const team = ['Tyler', 'Porter', 'Potter', 'Hermione', 'Cho']
const teamSize = team.length

const teamConfirmation = () => {
    return `Team size: ${teamSize}`
}
const invalidTeam = () => {
    return `Too many people on your team`
}


const teamMessage = teamSize <= 4 ? teamConfirmation() : invalidTeam()
console.log(teamMessage); 
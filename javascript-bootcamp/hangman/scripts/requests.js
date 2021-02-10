'use strict'

const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if(response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to fetch the puzzle')
    }
}

// const getCurrentCountry = async () => {
//     const location = await getLocation()
//     return getCountry(location.country)
// }

// const getLocation = async () => {
//     const response = await fetch('http://ipinfo.io/json?token=074b1970efffbb')

//     if(response.status === 200) {
//         return response.json()
//     } else {
//         throw new Error('Unable to fetch location')
//     }
// }

// const getCountry = async (countryCode) => {
//     const response = await fetch('http://restcountries.eu/rest/v2/all')

//     if(response.status === 200) {
//         const data = await response.json()
//         return data.find(country => country.alpha2Code === countryCode)
//     } else {
//         throw new Error('Unable to fetch data')
//     }
// }

// FUNCIONA MAS TÁ ESTRANHO
const getCurrentCountry = async () => {
    const locationResponse = await fetch('http://ipinfo.io/json?token=074b1970efffbb')

    if(locationResponse.status === 200) {
        const locationData = await locationResponse.json()
        const countryResponse = await fetch('http://restcountries.eu/rest/v2/all')
        const countryData = await countryResponse.json()

        return countryData.find(country => country.alpha2Code === locationData.country)
    } else {
        throw new Error('Unable to fetch location')
    }
}
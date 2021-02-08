'use strict'

const getPuzzle = (wordCount, callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (event) => {
        if (event.target.readyState === 4 && event.target.status === 200) {
            const data = JSON.parse(event.target.responseText)
            callback(undefined, data.puzzle);
        } else if(event.target.readyState === 4) {
            callback('An error has taken place', undefined)
        }
    })

    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
}

const getCountry = (countryCode, callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (event) => {

        if (event.target.readyState === 4 && event.target.status === 200) {

            const data = JSON.parse(event.target.responseText)
            const country = data.find(country => country.alpha2Code === countryCode)
            callback(undefined, country)

        } else if(event.target.readyState === 4) {
            callback('Unable to fetch data', undefined)
        }
    })

    request.open('GET', 'http://restcountries.eu/rest/v2/all')
    request.send()
}

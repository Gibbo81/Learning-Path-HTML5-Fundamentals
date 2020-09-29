const fs = require('fs');

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)
console.log(bookJSON)

const parsedBook = JSON.parse(bookJSON)
console.log(parsedBook.author)

fs.writeFileSync('1-json.json', bookJSON)
const dataBuffer = fs.readFileSync('1-json.json') //binary data
const dataJson = dataBuffer.toString()
console.log(dataJson)

const data = JSON.parse(dataJson)
console.log(data.title)

////////////////////////////////////////////////////////////////////////////////////////////////////////
//Challenge chapter 4 Storing Data with JSON
const dataChallenge = fs.readFileSync('2-json.json').toString()
const object = JSON.parse(dataChallenge)
object.name = 'Giuliano'
object.age = 38
fs.writeFileSync('3-json.json', JSON.stringify(object))


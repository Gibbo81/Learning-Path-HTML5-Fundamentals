// users.js
const axios = require('axios')

const user ={}

user.get = async () => {
    let r = await axios.get('/users.json')
    return r.data
}

module.exports = user
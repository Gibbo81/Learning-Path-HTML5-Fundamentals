// To start:
// node playground/chain_users.js

require('../src/db/mongoose')
const User = require('../src/models/user')

const updateAgeAndCount = async (id, age) =>{
    const user = await User.findByIdAndUpdate(id, {age : age})
    console.log(user)
    const number = await User.countDocuments({ age : 10 })
    return number
}

updateAgeAndCount('5ea3117c817f2e0c94fae65f',10)
.then( number => console.log(number))
.catch(e => console.log(e.message))
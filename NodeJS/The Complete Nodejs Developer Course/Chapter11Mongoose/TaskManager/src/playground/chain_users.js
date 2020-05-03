require('../db/mongoose')
const User = require('../models/user')

async function pippo(){
    const user = await User.findByIdAndUpdate('5ea3117c817f2e0c94fae65f', {age : 10})
    console.log(user)
    const number = await User.countDocuments({ age : 10 })
    return number
}

try{
    pippo().then( number => console.log(number))
}
catch (e){
    console.log(e.message)
}
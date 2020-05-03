// To start:
// node src/playground/chain_tasks.js

require('../db/mongoose')
const Tasko = require('../models/task')

async function pippo2(){
    const x = await Tasko.findByIdAndDelete('5ea0964b097cb618809dcf13')
    console.log(x)
    return await Tasko.countDocuments({ completed : true})    
}

try{
    pippo2().then( result => console.log(result))
}
catch(e){
    console.log('error: ', e)
}

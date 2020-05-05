// To start:
// node playground/chain_tasks.js

require('../src/db/mongoose')
const Tasko = require('../src/models/task')

async function deleteTaskAndCount(id){
    const x = await Tasko.findByIdAndDelete(id)
    console.log(x)
    return await Tasko.countDocuments({ completed : true})    
}

deleteTaskAndCount('5ea0964b097cb618809dcf13').then( result => console.log(result))
        .catch(e => console.log(e.message))

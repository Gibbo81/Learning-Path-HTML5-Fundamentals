console.log('util.js')

const name='Giuliano'

//we need to make 'name' visible to outside the scope of file util.js 
module.exports = name
//what you assign to module.exports will be available as the return value of the call "require('./util.js')"
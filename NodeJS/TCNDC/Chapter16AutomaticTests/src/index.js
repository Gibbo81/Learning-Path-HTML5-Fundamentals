/*
jest test framework, it's installed only locally : npm i jest --save-dev
add a new script in package.json --> "test":"jest"
To run the test simple 'npm test' inside the terminal
*/

const app = require ('./expressApplication')
const port = 555
app.listen(port, () => { 
    console.log('server is up on port '+ port)
})
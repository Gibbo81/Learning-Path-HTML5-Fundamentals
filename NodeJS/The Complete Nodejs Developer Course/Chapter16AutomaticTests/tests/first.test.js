/*the file name is important:
Jester looks for file with the followinf format: *.test.js
this file math the convention
*/

const math = require ('../src/math')

//passing tests
test('test name here', () => {

})

//If you need a test to fail you can throw an error
/*test('this should fail', () =>{
    throw new Error('Test Failure!')
})*/

test('calculateTip_percentualPassed_ReturnCorrrectTip', () => {
    const total = math.calculateTip(100, 0.1)
    expect(total).toBe(110)     //jester can check and throw the error for you :-)
})

test('calculateTip_defaultPercentual_ReturnCorrrectTip', () => {
    const total = math.calculateTip(10)
    expect(total).toBe(12.5)
})


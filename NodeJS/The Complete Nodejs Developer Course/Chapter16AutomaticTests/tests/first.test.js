/*the file name is important:
Jester looks for file with the followinf format: *.test.js
this file math the convention

To run the test simple 'npm test' inside the terminal
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

test('Convert 32 F to 0 C', () => {
    const celsius = math.fahrenheitToCelsius(32) 
    expect(celsius).toBe(0)
})

test('Convert 0 C to 32 F', () => {
    const fahrenheit = math.celsiusToFahrenheit(0)
    expect(fahrenheit).toBe(32)
})

/*asynchronous test
//done is used to tell to the test that all the asynchronous code had executed 
and so the test is really finisheds
OLD WAY*/
test('Async test demo', (done) => {
    setTimeout(() => {
        expect(1).toBe(1)
        done()  //our test is really finished
    })
})

test('should add two numbers', (done) => {
    math.addAsync(2,3).then((sum) => {
        expect(sum).toBe(5)
        done()  //our test is really finished
    })
})

//BETTER NEW WAY: using async await. we simple need to mark the test as async
test('should add two numbers async/await', async () => {
    var sum = await math.addAsync(2,3)
    expect(sum).toBe(5)    
})




const Car = require('../src/classToMock')




test('Simple car test', () =>{
    let panda = new Car('yellow', 1998)

    expect(panda.rumor()).toBe('MOCK-broom')

})

 
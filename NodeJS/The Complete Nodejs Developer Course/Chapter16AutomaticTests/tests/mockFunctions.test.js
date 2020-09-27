//To run the test simple 'npm test' inside the terminal

const math = require ('../src/math')


test('test forEach function with mock', () => {
    let mockCallback = jest.fn(x => 10 + x)
    //create a mock function

    math.forEach([0, 1], mockCallback)

    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2)
    //to check the mock has beeen called
    expect(mockCallback).toHaveBeenCalled();
    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0)
    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1)
    // The return value of the first call to the function was 10 the second 11
    expect(mockCallback.mock.results[0].value).toBe(10)
    expect(mockCallback.mock.results[1].value).toBe(11)
})

//it's possible to configure a mock to return a certain value when it's called
//Mock functions can also be used to inject test values into your code during a test:
test('mock configuration', () => {
    let mockFunction = jest.fn()
    mockFunction.mockReturnValueOnce(true).mockReturnValueOnce(false)

    const result = [11,20].filter(nume => mockFunction(nume))

    expect(result.length).toBe(1)
    expect(result[0]).toBe(11)
    expect(mockFunction.mock.calls.length).toBe(2)
    expect(mockFunction.mock.calls[0][0]).toBe(11)
    expect(mockFunction.mock.calls[1][0]).toBe(20)
})

const axios = require('axios')
const e = require ('../src/user')
jest.mock('axios'); //with this command i say i want to mock axios library while running this test

//Mocking Modules
test('Mock a full Module', async () => {
    const users = [{name: 'Bob'}];
    const resp = {data: users};
    axios.get.mockResolvedValue(resp);  //when calling get() return respe Mock configuration       
    //function used inside users
    
    let result = await e.get()  

    console.log(result);
    expect(result).toEqual(users)
});

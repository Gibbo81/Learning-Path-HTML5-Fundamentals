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
    mockFunction.mockReturnValueOnce(true).mockReturnValueOnce(false) //first time returns true second false

    const result = [11,20].filter(nume => mockFunction(nume))

    expect(result.length).toBe(1)
    expect(result[0]).toBe(11)
    expect(mockFunction.mock.calls.length).toBe(2)
    expect(mockFunction.mock.calls[0][0]).toBe(11)
    expect(mockFunction.mock.calls[1][0]).toBe(20)
})

//Mocking Modules
const axios = require('axios')
const e = require ('../src/user')
jest.mock('axios'); //with this command i say i want to mock axios library while running this test

//In this case we are mocking a single method of axios
test("Mock a module's function", async () => {
    const users = [{name: 'Bob'}];
    const resp = {data: users};
    axios.get.mockResolvedValue(resp);  //when calling get() return respe Mock configuration       
    //function used inside users
    
    let result = await e.get()  

    console.log(result);
    expect(result).toEqual(users)
});

//There are cases where it's useful to go beyond the ability to specify return values and full-on replace the implementation of a mock function
jest.mock('../src/toMock');
const m = require('../src/toMock')

test('Mock a full module', () =>{
    m.molt.mockImplementation((x ,y) => 10) //simple mock implementation with standard result
    m.sum                                    //different results for each call
     .mockImplementationOnce((x,y) => x+y+ 10)
     .mockImplementationOnce((x,y) => x+y-10)


    let moltResult  = m.molt(1,4);
    let sumResult1 = m.sum(50, 40)
    let sumResult2 = m.sum(45, 45)

    expect(moltResult).toBe(10)
    expect(sumResult1).toBe(100)
    expect(sumResult2).toBe(80)
    expect(m.molt).toHaveBeenCalled(); //mock fuction has been called at least once
    expect(m.molt).toHaveBeenCalledWith(1, 4);
    expect(m.sum).toHaveBeenLastCalledWith(45, 45);
    expect(m.sum.mock.calls.length).toBe(2); //it's only syntactic sugar, we can always use standard mock checks

})

/*
To run the test simple 'npm test' inside the terminal

INTEGRATION TESTS
We do not need the application up and running (app.listen is not necessary)
We need its express configuration and a new package 'supertest'
*/

//run before each test
const request = require('supertest')
const app = require ('../src/expressApplication')

//All this method can be made async using: async () => {... 
//run after each test
beforeEach(async () => {
  console.log('Before Each')
})

afterEach(() => {
  console.log('After Each')
})

beforeAll(() => {
  console.log('Before all')
})

afterAll(() => {
  console.log('After all')
})

test('Get Try', async () => {
    const response = await request(app).get('/try')
      .send()   //here we can add the body
      .expect(200)
    expect(response.body.name).toBe('pippo')
    //to check a full object without checking all the fields one a time
    expect(response.body).toMatchObject({
      name : 'pippo',
      //age:66  //I do not need yto test all the object's fields. A subset will make the test green if the field are correct
    })
})

test('Post Try', async () => {
    await request(app).post('/try')
      .send({
        name :'Pippus',
        age : 224

      }).expect(201)      
})



test('Post whith missing name is bad request', async () => {
  const response = await request(app).post('/try')
                    .send({
                      age : 224
                    })  
                    .expect(400)
  expect(response.body.reason).toBe('missing part')
  expect(response.statusCode).toBe(400) 
  expect(response.statusCode).not.toBe(200)  //test different from
})
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
    await request(app).get('/try')
                      .send()   //here we can add the body
                      .expect(200)
})

test('Post Try', async () => {
    await request(app).post('/try')
                      .send({
                        name :'Pippus',
                        age : 224
                      })  
                      .expect(201)
})

test('Post whith missing name is bad request', async () => {
  await request(app).post('/try')
                    .send({
                      age : 224
                    })  
                    .expect(400)
})
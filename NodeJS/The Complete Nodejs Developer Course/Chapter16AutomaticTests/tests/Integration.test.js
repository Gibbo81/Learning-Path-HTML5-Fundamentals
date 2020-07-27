/*
To run the test simple 'npm test' inside the terminal

INTEGRATION TESTS
We do not need the application up and running (app.listen is not necessary)
We need its express configuration and a new package 'supertest'

*/
const request = require('supertest')
const app = require ('../src/expressApplication')

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


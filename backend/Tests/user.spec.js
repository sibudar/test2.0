const supertest = require('supertest'); //requires supertest
const app = require('../app'); //requires app

describe('Testing user endpoints',() => {

    // register
    it('tests register endpoints', async() => {
        const response = await supertest(app).post('/users').send({
            first_name:'sam',
            last_name:'mcholo',
            email:'sam@gmail.com',
            user_password:'123'
        });
        expect(response.status).toBe(200)
    })
})
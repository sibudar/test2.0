const supertest = require('supertest'); //requires supertest
const app = require('../app'); //requires app

describe('Testing user endpoints',() => {

    // register
    it('tests register endpoint and returns a success message', async() => {
        const response = await supertest(app).post('/users').send({
            first_name:'sam',
            last_name:'mcholo',
            email:'sam@gmail.com',
            user_password:'123'
        });
        expect(response.status).toBe(200)
    });


    // login
    it('tests the login endpoint and returns a success message', async() => {
        const response = await supertest(app).post('/users/login').send({
            email:'sam@gmail.com',
            user_password:'123'
        });
        expect(response.status).toBe(200);
    })

    //forgot password
    it('tests the forgot password endpoint and returns a success message', async() => {
        const response = await supertest(app).post('/users/forgotPassword').send({
            first_name:'sam',
            email:'sam@gmail.com'
        });
        expect(response.status).toBe(200);
    })

    //reset password
    it('tests the reset password endpoint and returns a success message', async() => {
        const response = await supertest(app).post('/users/reset').send({
            user_password:'sam'
        });
        expect(response.status).toBe(200);
    })
})
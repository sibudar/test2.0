const supertest = require('supertest'); //requires supertest
const app = require('../app') //requires app

describe("Testing content endpoints", () => {
    it('tests the get content and returns a success message', async() => {
        const response = await supertest(app).get('/content').send({
            id_cat:'1'
    })
    expect(response.status).toBe(200)
    });
    
})
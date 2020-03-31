const supertest = require('supertest'); //requires supertest
const app = require('../app');

describe("Testing ideas endpoints", () => {
    
    //add business idea
    it('tests add business idea endpoint and returns a success message', async() => {
        const response = await supertest(app).post('/ideas').send({
            busin_idea:'the nail guru',
            descript:'the nail technication',
            id_user:'1'

        });
        expect(response.status).toBe(200);
    })

    //gets business idea
    it('tests get business idea endpoint and returns a success message', async() => {
        const response = await supertest(app).get('/ideas/:id').send({
            id_user:'1'
        });
        expect(response.status).toBe(200);
    })

    //updates a business idea
    it('tests update business idea endpoint and returns a success message', async() => {
        const response = await supertest(app).patch('/ideas').send({
            b_id:'1',
            u_id:'1'
        })
        expect(response.status).toBe(200)
    })
})
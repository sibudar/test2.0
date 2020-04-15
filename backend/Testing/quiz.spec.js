const request = require('supertest');
const app = require('../app')
const url = '/api/v1/questions';

describe("should pass an id then will return questions", () => {
  it("Consuming API endpoint", async () => {
    const id = { id_cat: 1 };
    const response = await request(app)
    .get(`${url}/` + id.id_cat)
    .set('accept', 'application/json');

    expect(response.body.status).toBe(200);
    expect(response.body.message).toBe("Here are your questions.");
    expect(response.body.data).toHaveLength(5);
  });
});
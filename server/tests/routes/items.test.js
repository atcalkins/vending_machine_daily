const app = require("../../index");
const request = require("supertest");

describe('Item Router', () => {
  describe('GET /api/customer/items - get a list of items', () => {
    it('has a successful status code', () => {
      return request(app)
        .get("/api/customer/items")
        .expect(200);
    });
    fit('has a status key in json payload', () => {
      return request(app)
        .get("/api/customer/items")
        .then((res) => {
          expect(res.body.status).toEqual("success");
        })
    })
  });
});
// written a failing test (got 404), refactor make it green

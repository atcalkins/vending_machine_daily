const app = require("../../index");
const request = require("supertest");
const db = require('../../models');

describe('Item Router', () => {
  describe('GET /api/customer/items - get a list of items', () => {
    it('has a successful status code', () => {
      return request(app)
        .get("/api/customer/items")
        .expect(200);
    });
    it('has a status key in json body', () => {
      return request(app)
        .get("/api/customer/items")
        .then((res) => {
          expect(res.body.status).toEqual("success");
        })
    });
    it('has items from database', () => {
      return Item.create({ description: "Skittles", cost: 75, quantity: 20}).then((item) => {
        return request(app)
          .get("/api/customer/items")
          .then((res) => {
            expect(res.body.data[0].description).toEqual("Skittles")
          })
      })
    });
  });
});
// written a failing test (got 404), refactor make it green

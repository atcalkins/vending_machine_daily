const app = require("../../index");
const request = require("supertest");
const db = require('../../models');

describe("POST /api/customer/item/:itemId/purchases", () => {
  it("has a successful status code", () => {
    return request(app)
      .post("/customer/item/:itemId/purchases")
      .expect(200);
    });
  });

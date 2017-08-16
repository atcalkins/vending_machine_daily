const app = require("../../index");
const request = require("supertest");
const db = require('../../models');
const Item = db.item;
const Customer = db.customer;

describe("POST /api/customer/item/:itemId/purchases", () => {
  it("has a successful status code", () => {
    return Item.create({ description: "Skittles", cost: 75, quantity: 20}).then((item) => {
      Customer.create ({ money: 100 })
        .then(customer => {
        request(app)
        .post(`/customer/item/${item.id}/purchases`, { })
        .then(res => {
          expect(res.body.status).toEqual("success");
        });
      })
    });
  });
});

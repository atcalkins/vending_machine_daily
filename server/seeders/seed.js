'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "item",
      [{
        description: "Chips",
        cost: 50,
        quantity: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Soda",
        cost: 100,
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("item", null, {});
  }
};

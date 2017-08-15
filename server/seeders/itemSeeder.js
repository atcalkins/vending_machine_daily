"use strict"

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "items",
      [{
        description: "Sunchips",
        cost: 50,
        quantity: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Gum",
        cost: 25,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Granola Bar",
        cost: 90,
        quantity: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Soda",
        cost: 100,
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("items", null, {});
  }
};

"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("users", "age", {
      type: Sequelize.INTEGER,
      allowNull: true, // Ajuste conforme necessário
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("users", "age");
  },
};

// esse arquivo serve para treinar as migrations

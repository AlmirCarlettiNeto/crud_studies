"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down(queryInterface, Sequelize) {
    return queryInterface.dropTable("users");
  },
};

/* 
Método up
Objetivo: Define o que deve ser feito quando você aplica a migração (por exemplo, adicionar uma nova tabela, adicionar ou modificar colunas, etc.).
Quando Usar: Use este método para implementar alterações que você deseja aplicar ao banco de dados.

Método down
Objetivo: Define o que deve ser feito quando você reverte a migração (por exemplo, remover uma tabela, excluir ou modificar colunas, etc.).
Quando Usar: Use este método para reverter alterações feitas no método up, se você precisar desfazer as alterações.
*/

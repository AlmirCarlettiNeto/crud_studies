module.exports = {
  dialect: "postgres",
  host: "localhost",
  port: "5433", // para rodar na versão 16 em minha máquina
  username: "postgres",
  password: "admin",
  database: "crud-studies",
  define: {
    timestamp: true,
    underscored: true,
  },
};

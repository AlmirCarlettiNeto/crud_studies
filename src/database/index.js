import Sequelize from "sequelize";
import configDB from "../config/database.cjs";
import { User } from "../models/User.js";
const connection = new Sequelize(configDB); // lembrando que configDB é um objeto que contém informações sobre o banco

User.init(connection);

export { connection };

/* 
O sequelize é ORM(Object-Relational Mapping) que permite a manipulação de banco de dados diretamente pelo javascript ou typescript 

- Instância do Sequelize: new Sequelize(configDB) cria uma instância que gerencia a conexão com o banco de dados.
- Configuração: configDB fornece todas as informações necessárias para que o Sequelize se conecte ao banco de dados.
- Conexão: O Sequelize usa essas configurações para estabelecer e gerenciar a conexão com o banco de dados, permitindo que você trabalhe com o banco de dados de forma mais fácil e estruturada.
*/

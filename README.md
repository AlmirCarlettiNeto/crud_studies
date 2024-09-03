# Projeto de CRUD em Node.js com Arquitetura MVC

Este projeto é uma aplicação CRUD simples utilizando Node.js com arquitetura MVC (Model-View-Controller). Na realidade, eu aproveitei este tempo realmente entender como as coisas funcionam e detalhei suficientemente bem para compartilhar esse conhecimento com outros programadores (e também como uma espécie de diário para mim mesmo).

## Estrutura de Diretórios

```plaintext
└───src
    │   index.js [Ponto de entrada da aplicação. Inicializa e configura o servidor e outras dependências principais]
    │   routes.js [Define as rotas da aplicação. Encaminha as requisições para os controladores apropriados]
    │
    ├───config
    │       database.cjs [Contém a configuração de conexão com o banco de dados. Assegure-se de não armazenar credenciais diretamente aqui]
    │
    ├───controller
    │       UserController.js [Controlador responsável pela lógica de negócios para usuários. Interage com o modelo para realizar operações CRUD]
    │
    ├───database
    │   │   index.js [Configura e conecta ao banco de dados. Geralmente, é o ponto onde a conexão com o banco de dados é estabelecida]
    │   │
    │   └───migrations [Contém arquivos de migração para gerenciar alterações no esquema do banco de dados. Cada arquivo representa uma mudança específica]
    │           20240828222722-create-user.cjs
    │           20240831182047-add-user-age.cjs
    │
    └───models
            User.js [Define o modelo de dados para o usuário. Define a estrutura dos dados e as operações relacionadas ao banco de dados]
```

## Descrição Mais Detalha do Funcionamento de Cada Seção

- **`src/index.js`**:

- **`src/routes.js`**:

- **`src/config/database.cjs`**:

- **`src/controller/UserController.js`**:

- **`src/database/index.js`**:

- **`src/database/migrations/`**:

- **`src/models/User.js`**:

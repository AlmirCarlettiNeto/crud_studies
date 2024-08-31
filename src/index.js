import express, { json } from "express";
import routes from "./routes.js";
const app = express();

import "./database"; // isso serve para garantir que o código dentro de database seja executado (ao chamar a pasta o node automaticamente busca pelo arquivo index.js)

app.use(json());
app.use(routes);

app.listen(3030, () => {
  console.log('Server is running on port 3030')
});

/* 
O método app.use(express.json()) no Express.js é utilizado para adicionar um middleware que faz o parsing do corpo das requisições HTTP com conteúdo em JSON (Middleware são como "filtros" ou "etapas" que uma requisição passa antes de chegar à resposta final. Eles são úteis para tarefas como autenticação, logging, tratamento de erros, entre outras).

Aqui está o que ele faz:

Parsing JSON: Quando uma requisição é enviada para o servidor com um corpo JSON (normalmente em requisições POST, PUT, ou PATCH), o middleware express.json() interpreta o conteúdo JSON e o transforma em um objeto JavaScript acessível pela propriedade req.body.

Por exemplo:

// Suponha que uma requisição POST com o corpo JSON:
{
    "nome": "João",
    "idade": 25
}
// será convertida em um objeto JavaScript:
req.body = {
    nome: "João",
    idade: 25
};

Facilita o Acesso ao Corpo da Requisição: Com o corpo da requisição já transformado em um objeto JavaScript, você pode facilmente acessar os dados enviados pelo cliente no servidor, facilitando o processamento (Sem app.use(express.json()), o req.body ficaria undefined para requisições JSON, pois o Express não faria o parsing automaticamente.)

Obs1 (o que é parsing).: Parsing é o processo de analisar uma sequência de símbolos, geralmente em forma de texto ou dados, para converter esses símbolos em uma estrutura compreensível e manipulável por um programa

Obs2 (o que é middleware).: 
Middleware é uma função no Express (e em outros frameworks de servidor) que fica "no meio" do processo de requisição e resposta. Ele pode alterar a requisição (req), a resposta (res), ou até mesmo terminar a resposta antes que ela chegue ao cliente.

Como funciona:
Requisição do Cliente: O cliente (navegador, por exemplo) faz uma requisição para o servidor.

Passa pelo Middleware: Antes de chegar à rota final que responde ao cliente, a requisição passa por uma ou várias funções middleware.

Manipulação: Cada middleware pode:

Modificar os dados da requisição (adicionar informações, validar, autenticar, etc.).
Processar a resposta.
Encaminhar a requisição para o próximo middleware ou rota.
Terminar a resposta (como enviar uma mensagem de erro).
Resposta: Após passar por todos os middlewares, a resposta é enviada de volta ao cliente
*/

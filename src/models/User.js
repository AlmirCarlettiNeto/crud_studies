// Model é uma classe base que o Sequelize fornece para criar modelos que represntam tabelas no banco de dados. DataTypes é um objeto que contém os tipos de dados que você pode usar para definir os campos/colunas da sua tabela, como "STRING", "INTEGER", "DATE", etc.

const { Model, DataTypes } = require("sequelize");

class User extends Model {
  /* extends Model: Significa que User está herdando de Model; portanto, User é uma subclasse da classe Model. O Model é uma classe fornecida pelo Sequelize que contém métodos e propriedades úteis para interagir com a tabela do banco de dados. Isso significa que a classe User terá todos os métodos e funcionalidades da classe Model do Sequelize. Isso inclui coisas como criar, ler, atualizar e deletar registros na tabela do banco de dados */
  static init(sequelize) {
    /*  Ao usar o método init em um modelo do Sequelize, você precisa passar dois parâmetros principais:
  attributes: Um objeto que define as colunas da tabela e seus tipos de dados.
  options: Um objeto de configuração adicional que pode incluir várias opções, como a conexão com o banco de dados e o nome do modelo. */
    super.init(
      /* super refere-se à classe pai (Model). Ao usar super.init chamamos o método .init do Model (e não um init da subclasse User que poderia ser sla, qq coisa tipo um console.log) que já sabe lidar com a configuração do Modelo. Se usássemos apenas init, esse seria um método específico da subclasse, e não aquele herdado da classe pai.
      Note o método init(<parameter>)... sequelize é um parâmetro, que é passado no '../database/index.js' e vai trazer justamentes as informações da conexão com o banco de dados, observe lá para entender melhor... */
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
      }, // objeto que define as colunas da tabela no banco de dados e seus tipos
      {
        sequelize,
      } // um segundo objeto de configuração que inclui o sequelize, que traz informações da conexão ao banco de dados
    );
  }
}

module.exports = User;

/* 
- A classe User representa a tabela User no banco de dados

- Para realmente o que acontesse dentro da declaração da classe, antes precisamos compreender o que exatamente é um método estático. Em JavaScript, é uma função que pertence à classe, e não a uma instância específica da classe. Isso significa que você pode chamar o método diretamente na classe, sem precisar criar um objeto a partir dela. Por exemplo:

class Exemplo {
  static metodoEstatico() {
    console.log('Este é um método estático.');
  }
}

// Você pode chamar o método assim:
Exemplo.metodoEstatico(); // Saída: Este é um método estático.

Como init é estático (é só consultar os arquivos do sequelize se quiser conferir), ele pode ser chamado diretamente na classe User sem precisar de uma instância dela. Isso é útil porque init serve para configurar a classe como um todo, definindo sua estrutura no banco de dados, o que faz sentido ser feito uma vez, de maneira centralizada. Além disso, o Sequelize espera que você defina um método estático init em cada modelo que você cria. Este método é chamado pelo Sequelize para configurar o modelo, associando-o ao banco de dados e definindo suas colunas e tipos de dados

Mas como seria a utilização caso não fosse um método estático então? Criar um objeto a partir de uma calsse em JS envolve usar a palavra-chave 'new', que cria uma nova instância da classe. Quando se cria uma instância, você está essencialmente criando um objeto que possui todas as propriedades e métodos definidos na classe. Falando groesseiramente, podemos pensar nisso como se fosse um clone daquela classe em um novo objeto e que são independentes da classe e de outras instâncias e com valores próprios. Chamamos isso de Método de Instância (que pertencem a objetos criados a partir da classe. Você chama esses métodos em uma instância específica da classe).

Observe no seguinte exemplo simples de Instância:

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  dizerOla() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`); // usamos this para acessar propriedades do objeto
  }
}

// Criando uma instância da classe Pessoa
const pessoa1 = new Pessoa("Maria", 30);

// Usando o método da instância
pessoa1.dizerOla(); // Saída: Olá, meu nome é Maria e tenho 30 anos.

O Que Acontece no Exemplo?
Classe Pessoa: Aqui, temos uma classe chamada Pessoa que define um constructor com dois parâmetros: nome e idade.

this.nome e this.idade: Dentro do constructor, this.nome e this.idade são propriedades da instância que está sendo criada. Elas são inicializadas com os valores passados quando a nova instância é criada.

Criando uma Instância: Quando você faz const maria = new Pessoa('Maria', 30);, o constructor é automaticamente chamado. maria.nome é definido como 'Maria' e maria.idade é definido como 30.

Método dizerOla: Esse método acessa as propriedades da instância usando this e imprime uma mensagem.



Finalmente, apenas um pouco mais sobre a palavra-chave 'super':
Exemplo com Métodos de Instância

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} faz um som.`);
  }
}

class Dog extends Animal {
  speak() {
    super.speak(); // Chama o método speak da classe base (Animal)
    console.log(`${this.name} late.`);
  }
}

const dog = new Dog('Rex');
dog.speak();
// Saída:
// Rex faz um som.
// Rex late.

super.speak(): Aqui, super.speak() chama o método speak da classe Animal, garantindo que o comportamento da classe base seja mantido antes de adicionar o comportamento específico da classe derivada (Dog).

Exemplo com Métodos Estáticos

class Base {
  static greet() {
    console.log('Olá da classe base!');
  }
}

class Derived extends Base {
  static greet() {
    super.greet(); // Chama o método greet da classe base (Base)
    console.log('Olá da classe derivada!');
  }
}

Derived.greet();
// Saída:
// Olá da classe base!
// Olá da classe derivada!

super.greet(): Aqui, super.greet() chama o método estático greet da classe Base, garantindo que a lógica da classe base seja executada antes de adicionar a lógica específica da classe derivada (Derived).

*/

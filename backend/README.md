# Arquitetura do Projeto

- O backend foi criado com a ideia de ser uma api rest, para exportar os dados para o front-end.
- No Backend foi utilizado node.js, sequelize, express, PostGres.
- O projeto foi dividido em controllers, models, routes, migrations.
- Os controllers são os responsáveis por fazer as requisição da api e enviar as respostas, isso é: Lidar com os protocolos http.
- Os Models são os responsáveis por criar a estrutura das tabelas no banco de dados.
- Os Migrations são responsáveis para o backend enviar a estrutura das tabelas, para o banco.
- As Routes são os responsáveis por criarem as rotas para cada controller, assim deixando o código mais fácil de ler, em vez de ter uma rota única pra todos os controllers.

# Requisitos para rodar o projeto

- Node.JS, Sequelize, PostGres, JavaScript.

# Como rodar o projeto localmente

## Configurando o Banco

- Você vai clonar o projeto para um local do seu computador com o comando =>  git clone https://github.com/JocimarRodrigues/Livraria-Vue.git
- Você tem que entrar na pasta "backend" e abrir o terminal lá, essa etapa é importante porque caso você abra o terminal na pasta principal não irá funcionar.
- Você precisar ter um banco de dados PostGres configurado e rodando.
- Caso você cumpra esse requisito você precisar ir na pasta config, no arquivo config.json e colocar as informações de conexão dele lá.

### Exemplo
```json
{
  "development": {
    "username": "root",
    "password": "senhaDoBanco",
    "database": "livraria",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
- No pojeto eu estou usando a chave de developoment para informar os dados do meu banco, eles precisam estar exatos.

## Configurando o back-end

- Feito os passos acima, você vai usar o comando npm install, para instalar as dependências do projeto. (Importante lembrar que o terminal precisa estar aberto na pasta backend).
- Você vai usar o comando npx-sequelize cli db:migrate; para rodar as migrações e criar as tabelas no banco de dados.
- Você vai usar o comando npm start para iniciar o projeto.

# Concluindo todas as etapas acima, seu backend estará funcionando localmente.


## Caso você queira testar o backend localmente com o postman, siga os passos abaixo.

### Rotas da API

## GET

### http://localhost:3000/livros

- Vai pegar todos os livros registrados no banco

```json
[
    {
        "id": 1,
        "titulo": "Senhor dos Aneis",
        "autor": "Tolkien",
        "classificacao": 5,
        "resenha": "\"Em 'O Senhor dos Anéis: O Retorno do Rei', a obra épica de J.R.R. ....",
        "imagem": "uploads\\1704364491526.jpg",
        "createdAt": "2024-01-04T10:34:51.530Z",
        "updatedAt": "2024-01-04T10:34:51.530Z"
    },
    {
        "id": 2,
        "titulo": "JavaScript",
        "autor": "David Flanagan",
        "classificacao": 5,
        "resenha": "JavaScript é a linguagem de programação da Web. A maioria dos sites modernos usa JavaScript, e todos os navegadores...",
        "imagem": "uploads\\1704364527649.jpg",
        "createdAt": "2024-01-04T10:35:27.652Z",
        "updatedAt": "2024-01-04T10:35:27.652Z"
    }
]

```

### http://localhost:3000/livros:id

- Vai todos os dados de um livro pelo id, informar o id como parametro.

### Exemplo

```json
{
    "id": 2,
    "titulo": "JavaScript",
    "autor": "David Flanagan",
    "classificacao": 5,
    "resenha": "JavaScript é a linguagem de programação da Web. A maioria dos sites modernos usa JavaScript, e todos os navegadores – em computadores de mesa, consoles de jogos, tablets e smartphones – incluem interpretadores JavaScript. Isso a torna uma das linguagens de programação mais importantes atualmente e uma das tecnologias que todo desenvolvedor Web deve conhecer. Referência completa para programadores, JavaScript: O guia de?nitivo fornece uma ampla descrição da linguagem JavaScript básica e das APIs JavaScript do lado do cliente de?nidas pelos navegadores Web. Em sua 6ª edição, cuidadosamente reescrita para estar de acordo com as melhores práticas de desenvolvimento Web atuais, abrange ECMAScript 5 e HTML5 e traz novos capítulos que documentam jQuery e JavaScript do lado do servidor.Recomendado para programadores experientes que desejam aprender a linguagem de programação da Web e para programadores JavaScript que desejam ampliar seus conhecimentos e dominar a linguagem, este é o guia do programador e manual de referência de JavaScript completo e definitivo.",
    "imagem": "uploads\\1704364527649.jpg",
    "createdAt": "2024-01-04T10:35:27.652Z",
    "updatedAt": "2024-01-04T10:35:27.652Z"
}
```

## POST

### http://localhost:3000/livros

- Protocolo para enviar os dados do livro, para o banco.

#### Exemplo

- Estou usando formData para poder enviar os dados para o banco, então caso decida utilizar postman, o body dele ficará assim:
![Screenshot 2024-01-04 074300](https://github.com/JocimarRodrigues/Livraria-Vue/assets/116130103/9ee399cb-5b14-4393-8c2f-d9f487434b94)
- Key vai ser o nome da coluna
- Value o valor a ser enviado para a coluna
- Note também que você precisa escolher o tipo de arquivo, lembrar de escolher o tipo file, para a imagem.


## PUT

### http://localhost:3000/livros:id

- Protocolo para editar um livro do banco, necessário enviar ID do livro por parametro.

#### Exemplo

![Screenshot 2024-01-04 074706](https://github.com/JocimarRodrigues/Livraria-Vue/assets/116130103/860fa213-4217-4b65-b415-8a0beb20aa6c)

- Mesma lógica do Post, basta informar o id como parametro na rota, e modificar os value do formData

## DELETE

### http://localhost:3000/livros:id

- Protocolo para excluir um livro do banco, necessário enviar ID do livro por parametro.
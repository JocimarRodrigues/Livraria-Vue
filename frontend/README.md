#### Importante

- Para o projeto funcionar é necessário que o servidor do back-end esteja ligado e funcionando, se não for o caso, leia o readme do back-end para realizar esta etapa.

# Arquitetura do Projeto

- O front-end vai consumir a api do back-end para realizar a lógica do projeto e mostrar os dados no navegador.
- No front-end foi utilizado as seguintes tecnologias => TypeScript, Vue, Sass, Vuex, Axios.
- No projeto foi usado o Axios, para se conectar com a API.
- Na pasta services, é onde foi realizada a lógica para obter e enviar os dados para a API.
- O componente formulário é o responsável por enviar e editar os dados da API.
- No projeto foi utilizado SASS para estilização.

# Requisitos para rodar o projeto

- Vue, TypeScript, SASS, Axios

# Como rodar o projeto localmente

- Na pasta frontend, abra o terminal e rode o comando npm install
- Rode o comando npm run serve
- Caso você queira mudar a url base da api, você vai fazer isso na pasta config/index.ts
```js
import axios from "axios"

export default axios.create({
    baseURL: "http://localhost:3000" // Aqui é onde você vai informar a rota base da sua api
})

```

# Vídeo de Demonstração

https://github.com/JocimarRodrigues/Livraria-Vue/assets/116130103/c7167b5b-fc0f-4c34-aacd-c1d1a4513058
<h3 align="center">{ Universe Poke API }</h1>

<p align="center">
  <a href="#techs">Techs</a>&nbsp;|&nbsp;
  <a href="#estrutura">Estrutura do Projeto</a>&nbsp;|&nbsp;
  <a href="#funcionalidades">Funcionalidades</a>&nbsp;|&nbsp;
  <a href="#dependencias">Dependencias</a>&nbsp;|&nbsp;
  <a href="#execucao">Execução</a>&nbsp;|&nbsp;
  <a href="#testes">Testes</a>&nbsp;|&nbsp;
  <a href="#prompts">Prompts</a>&nbsp;|&nbsp;
  <a href="#license">Licença</a>
</p>
<br>

## 🎮 Techs <a name="techs"></a>
Este projeto foi desenvolvido utilizando as seguintes tecnologias:
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/pt-br)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [Postgres](https://www.postgresql.org/)
- [Git](https://git-scm.com/)

## 🧱 Estrutura do Projeto <a name="estrutura"></a>
```
src      
└───controllers
      └───Pokemon
            └───Pokemon.controller.ts
└───database
      └───index.ts
└───modules
      └───Pokemon      
            └───Pokemon.model.ts         
└───routes.ts
└───server.ts
.env
.eslintrc.json
.gitignore
package.json
README.md
tsconfig.json
yarn.lock
```

## 🚩 Funcionalidades <a name="funcionalidades"></a>
- [X] Adicionar Pokémon
- [X] Remover Pokémon
- [X] Atualizar dados do Pokémon
- [X] Pesquisar todos os Pokémon's
- [X] Pesquisar Pokémon por número de Pokédex

## 🕹️ Execução do Projeto <a name="execucao"></a>
``` 
git clone https://github.com/devcodecampos/universe-poke-api

cd universe-poke-api

yarn install

yarn dev
```

  Criar arquivo .env na raiz do projeto com o seguinte conteúdo:
```ts
DB_DRIVER= O driver do banco de dados que você está usando
DB_HOST= O endereço do host do seu banco de dados
DB_PORT= A porta na qual o seu banco está configurado 
DB_NAME= O nome do banco de dados que você deseja usar ou ao qual deseja se conectar
DB_USER= O nome de usuário usado para autenticar no banco de dados
DB_PASSWORD= A senha associada ao usuário do banco de dados
SERVER_PORT= A porta na qual o servidor do seu aplicativo será executado
```

## 📚 Dependencias <a name="dependencias"></a>
[Typescript](https://www.typescriptlang.org/download)
```
yarn add -D typescript
```
[ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
```
yarn add -D ts-node-dev
```
[ESLint](https://eslint.org/docs/latest/use/getting-started)
```
yarn add -D eslint
yarn run eslint --init
```
[Express](https://expressjs.com/)
```
yarn add express
```
[Sequelize](https://sequelize.org/)
```
yarn add sequelize pg pg-hstore
```

## 📝 Licença <a name="license"></a>
MIT License

## 🤖Autor 
Feito por Matheus Campos

[![Linkedin Badge](https://img.shields.io/badge/-devcodecampos-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/devcodecampos/)](https://www.linkedin.com/in/devcodecampos/) 
[![Gmail Badge](https://img.shields.io/badge/-devcodecampos-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:devcodecampos@gmail.com)](mailto:devcodecampos@gmail.com)
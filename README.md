<h3 align="center">{ Universe Poke API }</h1>

<p align="center">
  <a href="#techs">Techs</a>&nbsp;|&nbsp;
  <a href="#estrutura">Estrutura do Projeto</a>&nbsp;|&nbsp;
  <a href="#funcionalidades">Funcionalidades</a>&nbsp;|&nbsp;
  <a href="#execucao">Execução</a>&nbsp;|&nbsp;
  <a href="#dependencias">Dependencias</a>&nbsp;|&nbsp;
  <a href="#license">Licença</a>
</p>
<br>

## 🎮 Techs <a name="techs"></a>
Este projeto foi desenvolvido utilizando as seguintes tecnologias:
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/pt-br)
- [Express](https://expressjs.com/)
- [TypeORM](https://typeorm.io/)
- [Postgres](https://www.postgresql.org/)
- [Git](https://git-scm.com/)

## 🧱 Estrutura do Projeto <a name="estrutura"></a>
```
src      
└───controllers
      └───Pokemon
            └───Pokemon.ts
└───database
      └───data-source.ts
└───entities
      └───Pokemon      
            └───Pokemon.ts         
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

Criar arquivo .env na raiz do projeto com as seguintes variáveis de ambiente, lembrando que são apenas exemplos, configure de acordo com seu ambiente
```ts
TYPEORM_CONNECTION = postgres "O driver do banco de dados que você está usando"
TYPEORM_HOST = localhost "O endereço do host do seu banco"
TYPEORM_USERNAME = postgres "O nome de usuário usado para autenticar no banco"
TYPEORM_PASSWORD = 123456 "A senha associada ao usuário do banco"
TYPEORM_DATABASE = universe-poke "O nome do banco ao qual deseja se conectar"
TYPEORM_PORT = 5432 "A porta na qual o seu banco está configurado"
SERVER_PORT=3333 "A porta na qual o servidor do seu aplicativo será executado"
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
[TypeORM](https://typeorm.io/)
```
yarn add typeorm 
yarn add reflect-metadata
```
[Postgres](https://www.postgresql.org/)
```
yarn add pg pg-hstore
```
[Dotenv](https://www.npmjs.com/package/dotenv)
```
yarn add -D dotenv
```

## 📝 Licença <a name="license"></a>
MIT License

## 🤖Autor 
Feito por Matheus Campos

[![Linkedin Badge](https://img.shields.io/badge/-devcodecampos-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/devcodecampos/)](https://www.linkedin.com/in/devcodecampos/) 
[![Gmail Badge](https://img.shields.io/badge/-devcodecampos-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:devcodecampos@gmail.com)](mailto:devcodecampos@gmail.com)
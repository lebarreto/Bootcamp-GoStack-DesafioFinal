<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src="https://user-images.githubusercontent.com/35263018/76992683-fd232e80-6921-11ea-86b3-8eefd23cf60f.png" width="300px" />
</h1>

<h3 align="center">
  Desafio Final: FastFeet
</h3>

<h3 align="center">
  Aplicação de Delivery, utilizando NodeJS, ReactJS e React Native.
</h3>

<p>Desafio Final, que é uma aplicação completa (Back-end, Front-end e Mobile)</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-entrega">Entrega</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido utilizando as seguintes tecnologias: 

<ul>
  <li>
    <a href="https://nodejs.org/en/"> Node.js </a>
  </li>
  <li>
    <a href="https://expressjs.com/">Express</a>
  </li>
  <li>
    <a href="https://reactjs.org/">React</a>
  </li>
  <li>
    <a href="https://github.com/expressjs/multer">Multer</a>
  </li><li>
    <a href="https://github.com/remy/nodemon">Nodemon</a>
  </li>
  <li>
    <a href="https://www.docker.com/">Docker</a>
  </li>
  <li>
    <a href="https://docs.docker.com/compose/">Docker Compose</a>
  </li>
  <li>
    <a href="https://www.postgresql.org/">PostgreSQL</a>
  </li>
  <li>
    <a href="https://www.mongodb.com/">MongoDB</a>
  </li>
  <li>
    <a href="https://redis.io/">Redis</a>
  </li>
  <li>
    <a href="https://redux.js.org/">Redux</a>
  </li>
  <li>
    <a href="https://redux-saga.js.org/">Redux Saga</a>
  </li>
  <li>
    <a href="https://github.com/ReactTraining/react-router">React Router</a>
  </li>
  <li>
    <a href="https://github.com/axios/axios">Axios</a>
  </li>
  <li>
    <a href="https://www.npmjs.com/package/history">History</a>
  </li>
  <li>
    <a href="https://reactnavigation.org/">React Navigation</a>
  </li>
  <li>
    <a href="https://infinite.red/reactotron">Reactotron</a>
  </li>
  <li>
    <a href="https://react-icons.netlify.com/#/">React Icons</a>
  </li>
  <li>
    <a href="https://fkhadra.github.io/react-toastify/">React Toastify</a>
  </li>
  <li>
    <a href="https://polished.js.org/">Polished</a>
  </li>
  <li>
    <a href="https://github.com/immerjs/immer">Immer</a>
  </li>
  <li>
    <a href="https://www.npmjs.com/package/history">History</a>
  </li>
  <li>
    <a href="https://styled-components.com/">Styled Components</a>
  </li>
  <li>
    <a href="https://github.com/bee-queue/bee-queue">Bee-Queue</a>
  </li>
  <li>
    <a href="https://www.npmjs.com/package/bcryptjs">Bcryptjs</a>
  </li>
  <li>
    <a href="https://github.com/date-fns/date-fns">Date-fns</a>
  </li>
</ul>

## 💻 Instalação e execução do Backend

1. Faça um clone desse projeto.
2. Entre na pasta do backend: ```cd api```
3. Rode ```yarn``` para instalar as dependências
4. Crie um banco de dados no postgres com o nome de ```fastfeet```
5. Preencha o arquivo ```.env``` com as suas variáveis de ambiente
6. Rode ```docker-compose up -d``` para montar o ambiente;
7. Rode ```yarn sequelize db:migrate``` para executar as migrations
8. Rode ```yarn sequelize db:seed:all``` para executar a seed
9. Rode ```yarn dev``` para iniciar o servidor.
10. Rode ```yarn queue``` para iniciar as filas (opcional)

## 💻 Instalação e execução do Frontend

Antes de executar esse projeto, inicie o backend que pode ser encontrado na pasta ```api``` e siga as instruções acima.

1. Entre na pasta do frontend: ```cd fastfeetweb```
2. Rode ```yarn``` para instalar as dependências
3. Altere a url da api para o seu IP (deve ser o mesmo colocado no arquivo .env do backend), acessando ```cd services``` ``` api.js```
4. Rode ```yarn start``` para iniciar o cliente
5. Logue na aplicação usando as credenciais usadas para a criação do usuário admin (usuário: ```admin@fastfeet.com``` e senha: ```123456```)

## 💻 Instalação e execução do Mobile

Antes de executar esse projeto, inicie o backend que pode ser encontrado na pasta ```api``` e siga as instruções acima. Além disso, é necessário que seja criado um entregador no frontend.

1. Entre na pasta do mobile: ```cd app```
2. Rode ```yarn``` para instalar as dependências
3. Rode ```react-native run-android``` ou ```react-native run-ios``` dependendo do SO para iniciar o cliente (funciona nos dois).
4. Logue na aplicação usando o ID do entregador

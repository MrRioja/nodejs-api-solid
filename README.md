# NodeJS - API SOLID 💻

<p align="center">
  <img src="https://img.shields.io/static/v1?label=api&message=solid&color=blueviolet&style=for-the-badge"/>
  <img src="https://img.shields.io/github/license/MrRioja/nodejs-api-solid?color=blueviolet&logo=License&style=for-the-badge"/>
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/MrRioja/nodejs-api-solid?color=blueviolet&logo=Typescript&logoColor=white&style=for-the-badge">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/MrRioja/nodejs-api-solid?color=blueviolet&style=for-the-badge">
</p>

<p align="center">
  <a href="#sobre">Sobre</a> •
  <a href="#api-solid">API SOLID</a> •
  <a href="#instalação">Instalação</a> •
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#autor">Autor</a>  
</p>

## Sobre

Projeto desenvolvido durante o módulo III do bootcamp Ignite da Rocketseat cujo objetivo foi utilizar na pratica conceitos do SOLID, design patterns, Docker, JWT, Refresh Token, RBAC e outros conceitos da programação.

## API SOLID

Para utilizar conceitos do SOLID, Design Patterns, Docker, JWT e Refresh Token, RBAC e diversos outros conceitos, surgiu esse projeto que é uma aplicação para check-ins em academias.

### Capitulo 1 - Estrutura do projeto

Nesse capitulo foi definida a estrutura inicial do projeto e foram realizadas algumas configurações iniciais. As tarefas realizadas foram:

- [x] Definição dos requisitos e das regras da aplicação.
- [x] Criação do projeto com NodeJS.
- [x] Adição de arquivo de configuração para salvar versões exatas do NPM.
- [x] Configuração das variáveis ambiente.
- [x] Configuração do ESLint.
- [x] Criação de aliases de importação.

### Capitulo 2 - Integração com Prisma ORM

O objetivo desse capitulo foi integrar o Prisma no nosso projeto recém criado, lidando com todos os detalhes de configuração, definição dos modelos do nosso banco de dados e a conexão com o PostgresSQL, além do uso de Docker e Docker compose para criação de toda infraestrutura necessária. Abaixo as tarefas realizadas:

- [x] Conceitos básicos do Prisma ORM.
- [x] Conceitos básicos do Docker.
- [x] Como utilizar Postgres com Docker.
- [x] Como utilizar o Docker Compose.
- [x] Criação do schema do Prisma.
- [x] Definição dos relacionamentos entre os modelos do banco.

### Capitulo 3 - Caso de uso e design patterns

Aqui iniciamos a criação dos casos de uso da aplicação e a aplicação de alguns patterns para facilitar a implementação da API proposta e torna-la mais manutenível. As etapas desse capitulo foram:

- [x] Criação do caso de uso para criar usuários.
- [x] Implementação do controller de criação de usuários.
- [x] Como criar hash e validar a senha do usuário.
- [x] Criação do caso de uso de registro.
- [x] Aplicação do Repository Pattern.
- [x] Aplicação de inversão de dependências.
- [x] Definição da interface do repositório.
- [x] Tratamento de erros provenientes do caso de uso.
- [x] Implementação de handler de erros global.

### Capitulo 4 - Design Patterns & Testes

Durante essa etapa outros design patterns foram aplicados e testes unitários foram adicionados na aplicação. Além da escrita de testes também foram adicionadas e configuradas algumas ferramentas para criação e visualização de coverage de testes. A seguir a sequencia seguida nesse capitulo:

- [x] Configuração do Vitest.
- [x] Implementação de testes unitários.
- [x] Criação de In-Memory databases.
- [x] Configuração para gerar coverage de testes.
- [x] Configuração para utilizar a UI do Vitest.

### Capitulo 5 - Implementando casos de uso

Nesse capitulo os demais casos de uso da API foram implementados para finalizar essa etapa do desenvolvimento da aplicação. Abaixo uma lista de tarefas realizadas:

- [x] Criação do caso de uso de autenticação.
- [x] Implementação de testes e do controller de autenticação.
- [x] Refatoração de criação de instâncias nos testes.
- [x] Aplicação do Factory Pattern.
- [x] Criação do caso de uso de perfil.
- [x] Criação do caso de uso de check-in.
- [x] Apresentação e prática do conceito de TDD e Mocking.
- [x] Adição da validação da data do check-in.
- [x] Validação da distância do check-in.
- [x] Criação do caso de uso de criação de academia.
- [x] Criação do caso de uso de histórico de check-ins.
- [x] Criação do caso de uso de métricas do usuário.
- [x] Criação do caso de uso de busca de academias.
- [x] Criação do caso de uso de academias próximas.
- [x] Criação do caso de uso de validação de check-in.
- [x] Validação de horário do check-in.

### Capitulo 6 - Controllers & Testes E2E

Durante esse capitulo o foco foi criar os controllers restantes da aplicação e criar testes E2E para os endpoints. Para executar os testes foram realizadas algumas configurações adicionais para assegurar o funcionamento adequado da bateria de testes. Mais detalhes das tarefas realizas podem ser vistos na lista abaixo:

- [x] Implementação dos repositórios do Prisma.
- [x] Criação do repositório de academias.
- [x] Criação das factories dos casos de uso.
- [x] Apresentação de conceitos de autenticação com JWT.
- [x] Implementação de JWT no Fastify.
- [x] Implementação do controller de perfil.
- [x] Criação do teste environment.
- [x] Organização dos scripts do NPM.
- [x] Test Environment do Prisma.
- [x] Criação dos testes E2E do registro.
- [x] Criação dos testes E2E da autenticação.
- [x] Criação dos testes E2E do perfil.
- [x] Implementação do controller de criação de academia.
- [x] Criação dos controllers restantes de academia.
- [x] Implementação dos controllers de check-ins.
- [x] Criação dos testes E2E das rotas de academias.
- [x] Criação dos testes E2E das rotas de check-ins.

### Capitulo 7 - Refresh Token & RBAC

O assunto abordado aqui foram os conceitos de refresh token e RBAC. O intuito foi entender o funcionamento de cada um deles e como implementa-los. Abaixo a lista de tarefas realizadas ao decorrer do capitulo:

- [x] Entendimento do fluxo de refresh token.
- [x] Implementação do refresh token.
- [x] Autorização por cargos aplicando o RBAC.
- [x] Criação de testes do RBAC.

### Capitulo 8 - CI/CD da aplicação

Por fim, o ultimo capitulo teve como objetivo a criação de esteiras de CI e CD da nossa API. Mais especificamente foram criadas esteiras para execução dos testes unitários e E2E utilizando Github Actions. Abaixo as tarefas realizadas nessa etapa:

- [x] Execução de testes unitários no CI.
- [x] Execução de testes E2E no CI.

## Instalação

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Docker](https://www.docker.com/).
Além disso é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone git@github.com:MrRioja/nodejs-api-solid.git

# Acesse a pasta do projeto no terminal/cmd
$ cd nodejs-api-solid

# Instale as dependências
$ npm install
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ npm run start:dev
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn start:dev

# Execute os testes unitários da aplicação
$ npm run test
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn test

# Execute os testes E2E da aplicação
$ npm run test:e2e
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn test:e2e

# O servidor iniciará na porta 3333 ou na porta definida no arquivo .env na variável PORT - acesse <http://localhost:3333>
```

## Tecnologias

![Techs](https://skillicons.dev/icons?i=nodejs,express,js,docker,jest,postgres,ts)

## Autor

<div align="center">
<img src="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/55336456?v=4&h=100&w=100&fit=cover&mask=circle&maxage=7d" />
<h1>Luiz Rioja</h1>
<strong>Backend Developer</strong>
<br/>
<br/>

<a href="https://linkedin.com/in/luizrioja" target="_blank">
<img alt="LinkedIn" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>

<a href="https://github.com/mrrioja" target="_blank">
<img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/>
</a>

<a href="mailto:lulyrioja@gmail.com?subject=Fala%20Dev" target="_blank">
<img alt="Gmail" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
</a>

<a href="https://api.whatsapp.com/send?phone=5511933572652" target="_blank">
<img alt="WhatsApp" src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/>
</a>

<a href="https://join.skype.com/invite/tvBbOq03j5Uu" target="_blank">
<img alt="Skype" src="https://img.shields.io/badge/SKYPE-%2300AFF0.svg?style=for-the-badge&logo=Skype&logoColor=white"/>
</a>

<br/>
<br/>
</div>

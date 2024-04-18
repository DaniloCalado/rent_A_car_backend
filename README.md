# Rent a Car Backend

Este é um projeto de backend para uma aplicação de aluguel de carros. Ele inclui um sistema de gerenciamento de clientes, carros e aluguéis.

## ORM Sequelize

O Sequelize é um ORM para Node.js que suporta os bancos de dados MySQL, PostgreSQL, SQLite e MSSQL. Ele simplifica o acesso e a manipulação de dados do banco de dados, permitindo que os desenvolvedores usem modelos de dados JavaScript em vez de consultas SQL diretas.

No contexto deste projeto, o Sequelize é usado para definir modelos de dados para clientes, carros e aluguéis, facilitando a criação, recuperação, atualização e exclusão de registros no banco de dados.

## Funcionalidades

- CRUD (Create, Read, Update, Delete) para clientes
- CRUD para carros
- Criação de aluguéis associando clientes e carros
- Controle de disponibilidade de carros durante os aluguéis

## Instalação

1. Clone este repositório:

```bash
git clone https://github.com/DaniloCalado/rent_A_car_backend.git


Navegue até o diretório do projeto:
cd rent-a-car
cd backend

Instale as dependências:
npm install

Configure as variáveis de ambiente:
Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:
DB_HOST=seu-host-do-banco-de-dados
DB_USER=seu-usuario-do-banco-de-dados
DB_PASSWORD=sua-senha-do-banco-de-dados
DB_NAME=nome-do-banco-de-dados

Execute o servidor:
node server.js

O servidor estará disponível em http://localhost:3000.

Uso
Faça chamadas HTTP para as rotas especificadas na documentação da API para gerenciar clientes, carros e aluguéis.

Contribuição
Contribuições são bem-vindas! Se você encontrar um bug ou quiser adicionar uma nova funcionalidade, sinta-se à vontade para abrir uma issue ou enviar um pull request.

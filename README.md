[Captura de tela de 2024-04-17 07-08-47](https://github.com/DaniloCalado/rent_A_car_backend/assets/83645426/850f30e6-bb65-450a-b42a-d04b56883465)
![Captura de tela de 2024-04-17 07-09-01](https://github.com/DaniloCalado/rent_A_car_backend/assets/83645426/edac07a2-5d54-4c4f-a7f5-50ef7d11e11f)
![Captura de tela de 2024-04-17 07-09-14](https://github.com/DaniloCalado/rent_A_car_backend/assets/83645426/ee29dc17-ec16-40fb-86af-9fc44556e63e)
![Captura de tela de 2024-04-17 07-09-28](https://github.com/DaniloCalado/rent_A_car_backend/assets/83645426/5e6967d9-e109-48ff-b44a-02995a26dc54)

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

dica: crie seu BD e como ele estara vazio sugiro usar as rotas post para adicionar clientes e carros no insomia por exemplo ou direto no CLI do MySql.


Execute o servidor:
node server.js

O servidor estará disponível em http://localhost:3000.

Uso
Faça chamadas HTTP para as rotas especificadas na documentação da API para gerenciar clientes, carros e aluguéis.

Contribuição
Contribuições são bem-vindas! Se você encontrar um bug ou quiser adicionar uma nova funcionalidade, sinta-se à vontade para abrir uma issue ou enviar um pull request.

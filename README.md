# Node, Express, PostgreSQL, Sequelize, Jest, Supertest

The code in this repository is based on the following tutorials.

- [Getting Started with Sequelize and Postgres](https://www.oriechinedu.com/posts/getting-started-with-sequelize-and-postgres)
- [Performing CRUD with Sequelize](https://www.oriechinedu.com/posts/performing-crud-with-sequelize)
- [Testing NodeJs/Express API with Jest and Supertest](https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6)

# Docker

- `npm run postgres:up` - to bring the servers up
- `docker exec -it 39a90287bf6d psql -U postgres` 39a.. is the container id
- `docker stack rm postgres`

# Setup

- create `.sequelizerc` then run `npx sequelize init`
- use the web ui at 127.0.0.1:8080 to manage db

## DB create

```bash
npx sequelize model:generate --name User --attributes name:string,email:string
npx sequelize model:generate --name Post --attributes title:string,content:text,userId:integer
npx sequelize model:generate --name Comment --attributes postId:integer,comment:text,userId:integer
```

- add the associations for each model in the files in models directory
- create the dev_db in postgres via the cli or the admin ui
- run the following to create the databases.

```bash
npx sequelize db:migrate
```

Create seed files via commands below, populate data and then seed data.

```bash
npx sequelize seed:generate --name User
npx sequelize seed:generate --name Post
npx sequelize seed:generate --name Comment
# populate data in files generated above, before running command below
npx sequelize db:seed:all
```

# Dicoding Bookshelf API
An API application to manage books. The main purpose is for Dicoding Submission.

## Framework and Libraries

### Production

- Hapi Framework
- Dotenv (Read .env file)
- Nanoid (Generate random ID)
- Sequelize (ORM Helper)
- Knex (Table Migration)

### Development

- ESLint (AirBnB JavaScript Code Style Helper)

## Development Build and Run

- Clone repository from https://github.com/christ0208/dicoding-backend-pemula-bookshelf-api.git
- Duplicate ```.env.example``` and rename the file to be ```.env```. Adjust the contents with your need
- Run ```npm install --production=false``` command in project directory with terminal or command prompt
- Run ```knex migrate:latest --esm``` command to migrate table structures in specific database
- Run ```npm run serve``` command to run Hapi server in application
- Access link specified in console output

## Production Build and Run

- Clone repository from https://github.com/christ0208/dicoding-backend-pemula-bookshelf-api.git
- Duplicate ```.env.example``` and rename the file to be ```.env```. Adjust the contents with your need
- Run ```npm install --production``` command in project directory with terminal or command prompt
- Run ```knex migrate:latest --esm``` command to migrate table structures in specific database
- Run ```npm install -g pm2``` command to install pm2
- Run ```pm2 start app.js``` command to run Hapi server in background application with help of pm2
- Access the web link

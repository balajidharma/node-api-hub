# Node Api Hub

## Build With
- [Node.js](https://nodejs.org/)
- [npm](https://docs.npmjs.com/cli/install)
- [nx](https://nx.dev/)
- [React.js](https://reactjs.org/)
- [Express.js](https://expressjs.com/)
- [Better Auth](https://betterauth.dev/)
- [PostgreSQL](https://www.postgresql.org/)

## Installation

### With Docker Desktop
- Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- Clone this repository
- You may run the following command in your terminal
- Windows open WSL2 Linux terminal. [Docker Desktop WSL 2 backend](https://docs.docker.com/desktop/windows/wsl/)
- Create `.env` file by using `.env.example`
- ./boat.sh build
- ./boat.sh up -d
- ./boat.sh npm install
- ./boat.sh npm run database:auth:migrate
- ./boat.sh nx serve api-auth
- ./boat.sh nx serve web-react

### Without Docker Desktop
- Install [Node.js](https://nodejs.org/en/download/)
- Install [npm](https://docs.npmjs.com/cli/install)
- Clone this repository
- Create `.env` file by using `.env.example`
- You may run the following command in your terminal
- npm install
- npm run database:auth:migrate
- nx serve api-auth
- nx serve web-react


### Start the auth api server

```
nx serve api-auth
```

### Start the web react server

```
nx serve web-react
```

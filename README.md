# Node Api Hub

## Installation

### With Docker Desktop
- Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- Clone this repository
- You may run the following command in your terminal
- Windows open WSL2 Linux terminal. [Docker Desktop WSL 2 backend](https://docs.docker.com/desktop/windows/wsl/)
- Set Environment Variables
- ./boat.sh build
- ./boat.sh up -d
- ./boat.sh npm install
- ./boat.sh nx run prisma-mongodb-app:generate-types
- ./boat.sh nx serve api-auth
- ./boat.sh nx serve web-react

### Without Docker Desktop
- Install [Node.js](https://nodejs.org/en/download/)
- Install [npm](https://docs.npmjs.com/cli/install)
- Clone this repository
- Set Environment Variables
- You may run the following command in your terminal
- npm install
- nx run prisma-mongodb-app:generate-types
- nx serve api-auth
- nx serve web-react


### Set Environment Variables

Add MongoDB `MONGODB_APP_DATABASE_URL` on .env file

```
MONGODB_APP_DATABASE_URL="mongodb+srv://......"
JWT_SECRET = "your_jwt_secret"
JWT_REFRESH_SECRET="your_jwt_refresh_secret"
JWT_TTL="1h"
JWT_REFRESH_TTL="30d"
API_AUTH_PORT=3333
```

### Generate the prisma types

```
nx run prisma-mongodb-app:generate-types
```

### Start the auth api server

```
nx serve api-auth
```

### Start the web react server

```
nx serve web-react
```

## Nest API

In this project,Implemented GraphQL in Nest.js for below modules  
Signup  
Login  
and getAllUser

## Project Structure

Folder structure :

    .
    └── src
        ├── auth
            └── dto
        ├── config
        ├── database
        ├── entities
        ├── guard
        ├── users

<details>
<summary>Project structure is explained as below</summary>

| Name                      | Description                                       |
| ------------------------- | ------------------------------------------------- |
| **src**                   | Contains source code that will be compiled        |
| **src/auth**              | Authontications with JWT                          |
| **src/config**            | Application configuration                         |
| **src/database**          | Database connection                               |
| **src/entities**          | All entities file which define data column        |
| **src/guard**             | local and jwt guard                               |
| **src/users**             | Fetch user data from DB                           |
| **src/app.controller.ts** | Just for test to run project                      |
| **src/app.module.ts**     | contain connection and other service/module files |
| **src/app.service.ts**    | just get message                                  |
| **src/main.ts**           | Entry to run project                              |
| **package.json**          | Contains all important metadata about project     |
| **pnpm-lock.yaml**        | Contains all important metadata about project     |

</details>

## Dependencies

<details>
<summary>Global</summary>

| Name                       | Version        | Description                                                                               |
| -------------------------- | -------------- | ----------------------------------------------------------------------------------------- |
| "@apollo/server"           | "^4.10.0"      | A stand-alone GraphQL server, including in a serverless environment                       |
| "@nestjs/apollo"           | "^12.0.11"     | server-side framework                                                                     |
| "@nestjs/common"           | "^10.0.0"      | build Rest APIs, MVC applications, GraphQL applications, Web Sockets                      |
| "@nestjs/config"           | "^3.1.1"       | for set configurations                                                                    |
| "@nestjs/graphql"          | "^12.0.11"     | data catching                                                                             |
| "@nestjs/jwt"              | "^10.2.0"      | generate auth token                                                                       |
| "@nestjs/passport"         | "^10.0.3"      | modular authentication middleware                                                         |
| "@nestjs/platform-express" | "^10.0.0"      | build applications                                                                        |
| "@nestjs/typeorm"          | "^10.0.1"      | TypeORM supports the repository design pattern, thus each entity has its own Repository   |
| "apollo-server-express"    | "^3.13.0"      | ApolloServer class to create an instance of Apollo Server                                 |
| "bcrypt"                   | "^5.1.1"       | password hashing and safe storing in the backend of applications                          |
| "dotenv"                   | "^16.4.1"      | dotenv set variables outside of the code and can be accessed using the process.env object |
| "graphql"                  | "^16.6.0"      | API aggregation & data catching                                                           |
| "mysql2"                   | "^3.9.1"       | connect mysql database                                                                    |
| "passport"                 | "^0.7.0"       | Passport's sole purpose is to authenticate requests                                       |
| "passport-jwt"             | "^4.0.1"       | jwt authentication                                                                        |
| "passport-local"           | "^1.0.0"       | local authentication                                                                      |
| "reflect-metadata"         | "^0.1.13"      | Reflect API includes methods for accessing and modifying metadata                         |
| "type-graphql"             | "2.0.0-beta.1" | Create GraphQL schema definitions from TypeScript classes                                 |
| "typeorm"                  | "^0.3.20       | ORM maps tables to model classes                                                          |

</details>

## Pre-requisites

For development, you will only need Node.js and a Node global package, installed in your environment.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install node js and npm easily with apt install, just run the following commands.

      sudo apt install nodejs
      sudo apt install npm

- #### Other Operating Systems

  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

- ### Verify Installation

  node --version
  v21.2.0

  npm --version
  10.2.3

  pnpm --version
  8.15.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    npm install npm -g

## Getting started

install nest cli

```bash
$ npm i -g @nestjs/cli
```

### Clone the repository

```
git clone  https://github.com/medeloop/medeloop-features-api/branches
```

### Install dependencies

```
cd nest-graphql-auth
pnpm install
```

### Configure app

```
replace `env.example` to .env then edit it with your settings.
```

### Build and run Api Server

```
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev
```

### Unit Tests

```
Currently there are none
```

## Run graphQL on the browser

http://localhost:3000/graphql

example for signUp and login API (Username should be unique):

## SigUp API

    mutation signUp($input: CreateUserInput!) {
    signUp(createUserInput: $input) {
        id
        username
        firstname
        lastname
      }
    }

Query variables for signup:

    {
        "input": {
        "username": "test1",
        "password": "test123",
        "firstname":"test",
        "lastname":"test"
        }
    }

## login API:

    mutation login($input: LoginUserInput!) {
    login(loginUserInput: $input) {
        user {
        username
    }
        access_token
    }
        
    }

Query variable for login:
     
    {
    "input": {
    "username": "test1",
    "password": "test123"
      }
    }

## Get All User API:

        {
        users {
        username
        id
        firstname
        lastname
        }
        }

HTTP Headers for User

        {
        "Authorization": "Bearer <token whitch got you on login API response>"
        }

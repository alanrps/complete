## how add typescript

- $ npm install -D typescript

### create configuration file of typescript

- $ npx tsc --init

### add path of files in configuration file

- "outDir": "./build"
- "rootDir": "./src"

### compile file

- npm tsc

### add scripts in package.json para compilar e iniciar (produção)

```json
    {
        "build": "tsc",
        "start": "node build/index.js"
    }
```

### add scripts in package.json para compilar e iniciar (dev)

- $ npm install -D ts-node-dev

```json
    {
        "build": "tsc",
        "start": "node build/index.js",
        "dev": "ts-node-dev --ignore-watch node_modules src/index.ts"
    }
```

## GraphQL

- Usa o HTTP 

```json

# API REST
    GET /users
    POST/users
    PUT /users/:id
    DELETE /users/:id

# GraphQL
    
    POST /graphql


    {
      - Possibilita fazer mais de uma operação de uma só ver, como uma 
      alteração e uma consulta (pode ser mais performática)

      - Passa mais responsabilidade para o front-end
    
      - Cria a documentação de forma automática (schema)

       mutation updateUser {
            updateUser(id: 1){
                nome: "Alan Patriarca"
            }
       } 

       query users{
        users({
            per_page: 20,
            page: 2
        }){
            id
            name
            groups: {
                id
                title
            }
        }
       }
    }

```


- methods: query (não altero nada no back-end), mutation (alteração, criação ou deletar, quando se faz alteração) e subscription(ouvir infomação em tempo real (real-time))


- link: https://github.com/xcanchal/apollo-server-typescript
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

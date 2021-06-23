# Criando um projeto :sunglasses:

- Criando diretório onde vai ficar nossa API que vou chamar de sample
- Dentro dessa pasta vamos rodar alguns comandos no terminal

```sh
npm init -y
npm i express
npm i joi
npm i uuidv4
npm i typescript ts-node-dev -D
npm i @types/express -D
npm i @types/uuidv4 -D
npm i @types/joi -D
npm i tsconfig-paths -D
npm i eslint -D
./node_modules/eslint/bin/eslint.js --init
npm i @babel/cli @babel/core @babel/node @babel/preset-env @babel/preset-typescript babel-plugin-module-resolver -D
```

## Configurando o tsconfig :heavy_check_mark:

```json
 - shortcuts: ctrl + shift + l
{
  "compilerOptions": {
    "target": "ES2020",                                
    "module": "commonjs",                           
    "esModuleInterop": true,                        
    "skipLibCheck": true,
    "allowJs": true,
    "sourceMap": false,
    "removeComments": true,
    "strict": false,
    "outDir": "./dist",
    "rootDir": "./src",
    "typeRoots": ["./node_modules/@types", "./src/@types"],
    "resolveJsonModule": true,  
    "forceConsistentCasingInFileNames": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "baseUrl": ".",
    "paths": {
      "@useCases/*": ["./src/useCases/*"],
      "@entities/*": ["./src/entities/*"],
      "@repositories/*": ["./src/repositories/*"]
    }        
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

## Configurando debbuger :heavy_check_mark:

- launch.json

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Attach to npm run start:debug",
      "protocol": "inspector",
      "port": 9229,
      "restart": true,
      "cwd": "${workspaceRoot}"
    }
  ]
}

```

- package.json :heavy_check_mark:

```json
{
  "name": "sample",
  "version": "1.0.0",
  "description": "Sample node api in typescript",
  "main": "src/server.js",
  "scripts": {
    "start": "tsnd --transpile-only --respawn --ignore node_modules src/server.ts",
    "start:debug": "tsnd --inspect --transpile-only --respawn src/server.ts",
    "build": "rm -rf dist && tsc"
  },
  "keywords": ["API", "TSC", "TSND"],
  "author": "Jean Carlos Moreira da Silva",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "joi": "^17.4.0"
  },
  "devDependencies": {
    "@types/express": "^4.17.11",
    "@types/joi": "^17.2.3",
    "@types/uuidv4": "^5.0.0",
    "ts-node-dev": "^1.1.6",
    "typescript": "^4.2.4"
  }
}

```

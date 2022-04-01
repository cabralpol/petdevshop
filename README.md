# petdevshop

### Se o projeto já estiver sido pego pronto basta rodar o comanto:
npm install (Isso instala todas as dependencias do packege.json)
npm run start-dev (Para rodar o projeto)

Criando tudo do zero

1 - npm init (para criar o packege.json)
2 - tsc --init (arquivo de configuração do typescript)

* Configurar o arquivo typescript:
- target: (mudar para es6)
- outDir: (descomentar e mudar para ./dist)
- rootDir: (descomentar e mudar para ./src)
- modeleResolution: (descomentar e mudar para o node)

3 - Instalar as dependêcias:
a. npm install express
b. npm install mustache-express
c. npm install dotenv (para as váriáveis de ambiente. Obs.: já vem com types)

4 - Instalar as dependêcias de desenvolvimento:
a. npm install --save-dev @types/express
b. npm install --save-dev @types/mustache-express
c. npm install --save-dev @types/node

5 - Pré-requisitos globais que devem estar instalados:
a - npm install -g nodemon
b - npm install -g typescript
c - npm install -g ts-node

4 - Criar pasta src
5 - Criar arquivo server.ts em src
6 - Criar atalho no packege.json para rodar o projeto:
- Em script colocar o comando: "start-dev": "nodemon -e ts,json,mustache src/server.ts"
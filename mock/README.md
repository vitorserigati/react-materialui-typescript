# jsonServer

## Inicialização:
1. Abra o terminal
2. Executar o comando:

    ```yarn run json-server -w -p 3333 ./mock/database.json```

    ou

    ```npm run json-server -w -p 3333 .mock/database.json```

3. Configurar o ```package.json``` para rodar o json-server: 
    
    * Abrir o package.json
    * Criar o Script ```"mock"``` dentro de scripts
    * Adicionar o comando ```"json-server -w -p 3333 ./mock/database.json"```
    * Rodar no terminal o comando ```yarn mock```
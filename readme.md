# SimpleBackEnd for WSL

Esse servidor tenta oferecer uma forma mais "real" de desenvolver um site que recebe informações de uma API.

O servidor foi pensado para uso em instancias WSL e não foi testado em um ambiente linux "puro".

Os dados podem ser modificados no arquivo `data.js`

## Instalação

Após clonar o repositório, vá até o diretório e digite `npm install` e inicie o servidor com `npm start`

`Ctrl+C` fecha o servidor

## Acessando na mesma maquina

Ao iniciar, o servidor loga o endereço onde pode ser acessado.


## Acessando o servidor através de outra maquina na mesma rede:

Para que seja possível acessar o site através da local network, é preciso abrir o powershell como admin e utilizar o seguinte comando:
 - O IP é o mesmo que aparece no console ao abrir o servidor


        netsh interface portproxy add v4tov4 listenport=4040 listenaddress=0.0.0.0 connectport=4040 connectaddress=<ip>

Para conectar no servidor de outra maquina, utilize o IPv4 do _**Windows**_ e não o que aparece no servidor, seguido pela porta 4040.

    xxx.xxx.xx.xx:4040

## Obtendo o ip do "host" (Windows)

O metodo mais fácil de obter o ip do Windows é através do comando ipconfig no shell do Windows:

    ipconfig | findstr /i "ipv4"



# Erro de porta em uso

O servidor tenta fechar todas as portas em diversas situações, se isso não ocorrer, utilize os seguintes comandos para fechá-las (no linux)

    lsof -i tcp:4040

A resposta tera uma serie de informações como abaixo.

    COMMAND  PID   USER ...
    node     5456  user ...
Atenção ao PID, ele é o identificador daquele processo

Use o kill para fechá-lo

    kill -9 5456

Note que o PID (5456) não será o mesmo.


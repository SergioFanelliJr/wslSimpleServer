# SimpleBackEnd for WSL

Simula uma API. Retorna um JSON com dados contidos no arquivo `data.js`

O servidor foi pensado para uso em instancias WSL e não foi testado em um ambiente linux "puro".

Os dados podem ser modificados no arquivo `data.js`

---

## Instalação

Clone o repositório

    git clone https://github.com/SergioFanelliJr/wslSimpleServer.git

Após, vá até o diretório com
    
    cd wslSimpleServer


 e digite 

    `npm install` 

---
## Utilização

Inicie o servidor com 
    
    npm start

Feche o servidor com

    Ctrl+C 

---
## Acessando na mesma maquina

Ao iniciar, o servidor mostra no terminal o endereço onde pode ser acessado.

---

## Acessando o servidor através de outra maquina na mesma rede:

Para que seja possível acessar o site através da local network, é preciso abrir o powershell como administrador e utilizar o seguinte comando:

- O `<IP>` deve ser substituído pelo IP que aparece no terminal ao iniciar o servidor.

```powershell	
netsh interface portproxy add v4tov4 listenport=4040 listenaddress=0.0.0.0 connectport=4040 connectaddress=<ip>
```

### **Obtendo o ip do "host" (Windows)**

O metodo mais fácil de obter o ip do Windows é através do comando ipconfig no shell do Windows:

    ipconfig | findstr /i "ipv4"

Para conectar no servidor de outra maquina, precisamos do IPv4 do _**Windows**_ e ***não o que aparece no servidor***, seguido pela porta 4040.

    xxx.xxx.xx.xx:4040

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


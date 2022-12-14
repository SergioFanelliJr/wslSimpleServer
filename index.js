import http from 'http';
import express from 'express';

import { getIpNumber } from './ip.js';

const app = express();
const server = http.createServer(app);

app.use('/', (req, res, next) => {
    console.log(`Requisição recebida: ${req.url}`)
    res.send('Esse é um simples servidor para enviar dados, simulando uma API')
});

server.listen(4040, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://${getIpNumber()}:4040`);
});

process.on('SIGTERM', shutDown);
process.on('SIGINT', shutDown);

function shutDown() {
    console.log('Recebido SIGTERM/SIGINT. Encerrando...');
    server.close(() => {
        console.log('Servidor encerrado');
        process.exit(0);
    });
}

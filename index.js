import http from "http";
import express from "express";
import cors from "cors";

import { getIpNumber } from "./ip.js";
import { data } from "./data.js";

const app = express();
const server = http.createServer(app);
app.use(cors());


app.get("/api", (req, res) => {
  res.json(data);
});

app.use("/", (req, res, next) => {
  console.log(`Requisição recebida: ${req.url}`);
  res.send("Esse é um simples servidor para enviar dados, simulando uma API");
});

server.listen(4040, "0.0.0.0", () => {
  console.log(`Servidor rodando em http://${getIpNumber()}:4040`);
});

process.on("SIGTERM", shutDown);
process.on("SIGINT", shutDown);
process.on("exit", shutDown);
process.on("uncaughtException", (err, origin) =>{
    console.log("Erro não tratado: ", err, origin);
    server.close(() => {
        console.log("Servidor encerrado");
        process.exit(0);
    });
});

function shutDown() {
  console.log("Encerrando...");
  server.close(() => {
    console.log("Servidor encerrado");
    process.exit(0);
  });
};

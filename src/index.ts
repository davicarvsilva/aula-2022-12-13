import express, { Router } from "express";

import dadosController from './controller/dado_Controller';

const app = express();

const route = Router();
route.get("/dados", dadosController.listar_dados);

app.use(express.json());
app.use(route);

app.listen(3000, () => {
    console.log('conectado em 3000');
})



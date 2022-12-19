import express, { Router } from "express";

import { criaControllerFactory } from "./infra/factories";

const app = express();

const route = Router();
const cilindrosController = criaControllerFactory();

route.get("/cilindros", cilindrosController.listar_cilindro);

app.use(express.json());
app.use(route);

app.listen(3000, () => {
    console.log('conectado em 3000');
})



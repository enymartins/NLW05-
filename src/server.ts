import express from "express";

import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.json()); //pra aceitar requisições em json

app.use(routes);

app.listen(3333, () => console.log('Server is running'));
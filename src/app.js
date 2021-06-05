import express from "express";
import simulaController from "./controllers/simulaController";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/simula", simulaController);

export default app;

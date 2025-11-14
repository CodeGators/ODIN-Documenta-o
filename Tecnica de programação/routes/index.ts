import { Router, Request, Response } from "express";
import satellite from "./satellite";
import pointOfInterest from "./pointOfInterest";
import queryResult from "./queryResult";
import dataComparison from "./dataComparison";

const routes = Router();

// Define as rotas principais
routes.use("/satellite", satellite);
routes.use("/point-of-interest", pointOfInterest);
routes.use("/query-result", queryResult);
routes.use("/data-comparison", dataComparison);

// Rota para qualquer requisição desconhecida
routes.use((_: Request, res: Response) => {
  res.json({ error: "Requisição desconhecida" });
});

export default routes;

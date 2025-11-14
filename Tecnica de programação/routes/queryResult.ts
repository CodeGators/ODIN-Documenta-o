import { Router } from "express";
import QueryResultController from "../controllers/QueryResultController";

const routes = Router();

// Salvar resultado de consulta
routes.post("/", QueryResultController.create);

// Listar todos os resultados
routes.get("/", QueryResultController.list);

// Buscar resultado por ID
routes.get("/:id", QueryResultController.findById);

// Buscar resultados por satélite
routes.get("/satellite/:satellite", QueryResultController.findBySatellite);

// Buscar resultados por intervalo de datas
routes.post("/date-range", QueryResultController.findByDateRange);

// Remover resultado
routes.delete("/:id", QueryResultController.delete);

export default routes;

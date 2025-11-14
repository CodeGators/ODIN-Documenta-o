import { Router } from "express";
import PointOfInterestController from "../controllers/PointOfInterestController";

const routes = Router();

// Criar nova consulta (ponto de interesse)
routes.post("/", PointOfInterestController.create);

// Listar todas as consultas
routes.get("/", PointOfInterestController.list);

// Buscar consulta por ID
routes.get("/:id", PointOfInterestController.findById);

// Buscar consultas por localização aproximada
routes.get("/location/search", PointOfInterestController.findByLocation);

// Remover consulta
routes.delete("/:id", PointOfInterestController.delete);

export default routes;

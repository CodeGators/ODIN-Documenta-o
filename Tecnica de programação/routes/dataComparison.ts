import { Router } from "express";
import DataComparisonController from "../controllers/DataComparisonController";

const routes = Router();

// Criar nova comparação
routes.post("/", DataComparisonController.create);

// Listar todas as comparações
routes.get("/", DataComparisonController.list);

// Buscar comparação por ID
routes.get("/:id", DataComparisonController.findById);

// Buscar comparações por satélite
routes.get("/satellite/:satellite", DataComparisonController.findBySatellite);

// Buscar comparações por variável
routes.get("/variable/:variable", DataComparisonController.findByVariable);

// Adicionar série temporal a comparação existente
routes.post("/:id/add-series", DataComparisonController.addTimeSeries);

// Remover comparação
routes.delete("/:id", DataComparisonController.delete);

export default routes;

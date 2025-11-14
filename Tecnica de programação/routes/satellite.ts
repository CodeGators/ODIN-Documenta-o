import { Router } from "express";
import SatelliteController from "../controllers/SatelliteController";

const routes = Router();

// Adicionar novo satélite ao catálogo
routes.post("/", SatelliteController.create);

// Listar todos os satélites
routes.get("/", SatelliteController.list);

// Buscar satélite por ID
routes.get("/:id", SatelliteController.findById);

// Atualizar satélite
routes.put("/:id", SatelliteController.update);

// Remover satélite
routes.delete("/:id", SatelliteController.delete);

export default routes;

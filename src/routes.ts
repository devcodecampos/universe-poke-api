import Pokemon from "./controllers/Pokemon/Pokemon";
import express from "express";

const routes = express.Router();

routes.get("/api/v1/pokemon", Pokemon.findAll);
routes.get("/api/v1/pokemon/:pokedex_id", Pokemon.findByPokedexId);
routes.post("/api/v1/pokemon", Pokemon.store);
routes.delete("/api/v1/pokemon/:id", Pokemon.remove)
routes.put("/api/v1/pokemon/:id", Pokemon.update)

export default routes;
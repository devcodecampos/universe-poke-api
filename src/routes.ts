import PokemonController from "./controllers/Pokemon/Pokemon.controller";
import express from "express";

const routes = express.Router();

routes.get("/api/v1/pokemon", PokemonController.findAll);
routes.get("/api/v1/pokemon/:pokedex_id", PokemonController.findByPokedexId);
routes.post("/api/v1/pokemon", PokemonController.store);

export default routes;
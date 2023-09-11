import PokemonController from "./src/controllers/Pokemon/Pokemon.controller";
import express from "express";

const routes = express.Router();

routes.post("/api/v1/pokemon", PokemonController.store);

export default routes;
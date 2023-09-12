import { Pokemon } from "../../modules/Pokemon/Pokemon.model";
import { Request, Response } from "express";

class PokemonController {
  async store(req: Request, res: Response) {
    await Pokemon.sync();

    const {
      pokedex_id,
      name,
      height,
      weight,
      abilities,
      image_url,
      types,
      species,
    } = req.body;

    try {
      const pokemon = await Pokemon.create({
        pokedex_id,
        name,
        height,
        weight,
        abilities,
        image_url,
        types,
        species,
      });

      res.status(201).json(pokemon);
    } catch (error) {
      res.status(500).json({ error: "Error when creating a Pokémon" });
    }
  }

  async findAll(req: Request, res: Response) {
    const pokemons = await Pokemon.findAll();
    res.json(pokemons);
  }
}

export default new PokemonController();
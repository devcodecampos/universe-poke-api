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

  async findByPokedexId(req: Request, res: Response) {
    const { pokedex_id } = req.params;

    try {
      const pokemon = await Pokemon.findOne({
        where: { pokedex_id },
      });

      if (pokemon) {
        res.status(200).json(pokemon);
      } else {
        res.status(404).json({ message: "Pokémon not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error when trying to find a Pokémon by Pokedex ID" });
    }
  }

  async remove(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const pokemon = await Pokemon.destroy({
        where: { id },
      });

      if (pokemon) {
        const pokemons = await Pokemon.findAll();
        res.status(200).json(pokemons);
      } else {
        res.status(404).json({ message: "Pokémon not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error when trying to remove a Pokémon" });
    }
  }
}

export default new PokemonController();
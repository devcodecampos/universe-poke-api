import { AppDataSource } from "../../database/data-source";
import { Pokemon } from "../../entities/Pokemon/Pokemon";
import { Request, Response } from "express";

class PokemonController {
  async store(req: Request, res: Response) {
    try {
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

      const pokemonExists = await AppDataSource.getRepository(
        Pokemon
      ).findOneBy({ name: name });

      if (pokemonExists) {
        res
          .status(200)
          .json({ message: "Pokemon is already registered", pokemonExists });
      } else {
        const pokemon = await AppDataSource.getRepository(Pokemon).create({
          pokedex_id,
          name,
          height,
          weight,
          abilities,
          image_url,
          types,
          species,
        });

        await AppDataSource.getRepository(Pokemon).save(pokemon);
        res.status(201).json(pokemon);
      }
    } catch (error) {
      res.status(500).json({ error: "Error when creating a Pokémon" });
      console.log(error)
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const pokemons = await AppDataSource.getRepository(Pokemon).find();

      if (pokemons.length > 0) {
        res.status(200).json(pokemons);
      } else {
        res.status(200).json({ message: "No Pokémon found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error when trying to find all Pokémon's" });
    }
  }

  async findByPokedexId(req: Request, res: Response) {
    try {
      const { pokedex_id } = req.params;
      const pokemon = await AppDataSource.getRepository(Pokemon).findOneBy({
        pokedex_id: parseInt(pokedex_id),
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
    try {
      const { id } = req.params;
      const pokemon = await AppDataSource.getRepository(Pokemon).delete(id);

      if (pokemon) {
        const pokemons = await AppDataSource.getRepository(Pokemon).find();
        res.status(200).json(pokemons);
      } else {
        res.status(404).json({ message: "Pokémon not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error when trying to remove a Pokémon" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const pokemon = await AppDataSource.getRepository(Pokemon).findOneBy({
        id: parseInt(id),
      });

      if (pokemon) {
        await AppDataSource.getRepository(Pokemon).merge(pokemon, req.body);
        const updatedPokemon = await AppDataSource.getRepository(Pokemon).save(
          pokemon
        );

        res.status(201).json(updatedPokemon);
      } else {
        res.status(404).json({ message: "Pokémon not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error when trying to update a Pokémon" });
    }
  }
}

export default new PokemonController();
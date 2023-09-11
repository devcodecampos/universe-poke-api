import { DataTypes } from "sequelize";
import { sequelize } from "../../database";

export const Pokemon = sequelize.define("Pokemon", {
  pokedex_id: { type: DataTypes.SMALLINT, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  height: { type: DataTypes.SMALLINT, allowNull: false },
  weight: { type: DataTypes.SMALLINT, allowNull: false },
  abilities: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
  image_url: { type: DataTypes.STRING, allowNull: false },
  types: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
  species: { type: DataTypes.STRING, allowNull: false },
});
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("pokemons")
export class Pokemon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pokedex_id: number;

  @Column()
  name: string;

  @Column()
  height: number;

  @Column()
  weight: number;

  @Column("simple-array")
  abilities: string[];

  @Column()
  image_url: string;

  @Column("simple-array")
  types: string[];

  @Column()
  species: string;
}
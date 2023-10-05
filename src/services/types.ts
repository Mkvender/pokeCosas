export type Pokemon = {
  species: {
    name: string;
  };
  sprites: {
    front_shiny: string;
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny_female: string;
  };
  results: Array<PokemonItem>;
  weight: number;
  height: number;
};
export type PokemonItem = {
  name: string;
  url: string;
};

import React from "react";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import { useGetPokemonByNameQuery } from "../../services/pokemon";

const Pokedex: React.FC = () => {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')
  return (
    <PageTemplate>
      <h2>Pokedex</h2>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </PageTemplate>
  );
};

export default Pokedex;

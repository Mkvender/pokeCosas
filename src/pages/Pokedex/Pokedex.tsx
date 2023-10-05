import React from "react";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import ListPokemon from "./partials/ListPokemon/ListPokemon";

const Pokedex: React.FC = () => {
  return (
    <PageTemplate>
      <h2>Pokedex</h2>
      <ListPokemon />
    </PageTemplate>
  );
};

export default Pokedex;

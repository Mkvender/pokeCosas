import React from "react";
import { useParams } from "react-router-dom";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import { useGetPokemonByNameQuery } from "../../services/pokemon";

const Pokemon: React.FC = () => {
  const name = useParams();
  const { data, isLoading, isError } = useGetPokemonByNameQuery(
    name.id ? name.id : ""
  );

  return isError ? (
    "Elemento error"
  ) : isLoading ? (
    "Elemento loading"
  ) : data ? (
    <PageTemplate>
      <h2>Datos del pokemon con el nombre {data?.species.name}</h2>
      <p>Peso: {data?.weight / 10} Kg</p>
      <p>Altura: {data?.height / 10} m</p>
      <img
        src={data.sprites.front_default}
        alt={data.species.name}
        title={`Parte delatera de ${data.species.name}`}
      />
      <img
        src={data.sprites.back_default}
        alt={data.species.name}
        title={`Parte trasera de${data.species.name}`}
      />
    </PageTemplate>
  ) : null;
};

export default Pokemon;

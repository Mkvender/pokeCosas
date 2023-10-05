import React from "react";
import { Link } from "react-router-dom";
import { useGetPokemonsByAmountNumberQuery } from "../../../../services/pokemon";
import ErrorPokedexList from "./partials/ErrorPokedexList/ErrorPokedexList";
import Loading from "../../../../components/Loading/Loading";
import * as S from "./styles";

const ListPokemon: React.FC = () => {
  const { isError, isLoading, data } = useGetPokemonsByAmountNumberQuery(251);

  if (isError) {
    return <ErrorPokedexList />;
  }
  if (isLoading) {
    return <Loading />;
  }
  if (data) {
    return (
      <S.List>
        {data.results.map((pokemon, index) => {
          return (
            <div key={`id_${pokemon.name}`}>
              <Link to={`/pokemon/${pokemon.name}`}>
                <h3>
                  {index + 1}. {pokemon.name.toUpperCase()}
                </h3>
              </Link>
            </div>
          );
        })}
      </S.List>
    );
  }
  return null;
};

export default ListPokemon;

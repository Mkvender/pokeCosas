import React from "react";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import { useGetPokemonByNameQuery } from "../../services/pokemon";
import OnSetStateName from "./hooks";
import * as S from "./styles";

const Home: React.FC = () => {
  const { name, onSetName } = OnSetStateName();
  const { data, isError, isLoading } = useGetPokemonByNameQuery(name);

  return (
    <PageTemplate>
      <div>
        <label>Busca el pokemon del que quieres tener los datos: </label>
        <input type="text" onChange={onSetName} />
      </div>
      <div>
        {isError && (
          <>
            <S.Title>No existe</S.Title>
            <p>Este nombre no pertence a ningún nombre pokemon</p>
          </>
        )}
        {isLoading && <>Loading...</>}
        {data?.species ? (
          <S.AlineaDatos>
            <S.Title>Nombre: {data.species.name.toUpperCase()}</S.Title>
            <img src={data.sprites.front_default} alt={data.species.name} />
            <img src={data.sprites.back_default} alt={data.species.name} />
            <div>
              <h4>Datos del pokemon</h4>
              <p>Peso: {data.weight / 10} Kg</p>
              <p>Altura: {data.height / 10} m</p>
            </div>
          </S.AlineaDatos>
        ) : (
          <>No has introducido ningún aún</>
        )}
      </div>
    </PageTemplate>
  );
};

export default Home;

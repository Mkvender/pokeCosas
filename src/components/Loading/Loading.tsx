import React from "react";
import pokeball from "/pokeball.svg";
import * as S from "./styles";

const Loading: React.FC = () => {
  return (
    <div>
      <S.Title>Cargando....</S.Title>
      <S.Rotate src={pokeball} />
      <S.Rotate src={pokeball} />
      <S.Rotate src={pokeball} />
      <S.Rotate src={pokeball} />
    </div>
  );
};

export default Loading;

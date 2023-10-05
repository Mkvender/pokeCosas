import React from "react";
import logoApp from "/mainIcon.png";
import pokedex from "/Pokedex.png";
import { Link } from "react-router-dom";
import * as S from "./styles";

const Header: React.FC = () => {
  return (
    <>
      <S.Nav>
        <Link to={"/"}>
          <img src={logoApp} />
        </Link>
      </S.Nav>
      <S.Nav>
        <Link to={"/pokedex"}>
          <S.ImgPokedex src={pokedex}></S.ImgPokedex>
        </Link>
      </S.Nav>
    </>
  );
};

export default Header;

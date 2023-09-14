import React from "react";
import styled, { keyframes } from "styled-components";
import pokeball from "../../../public/pokeball.svg";

const Loading: React.FC = () => {
  // Create the keyframes
  const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(360deg);
  }
  75% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

  // Here we create a component that will rotate everything we pass in over two seconds
  const Rotate = styled.img`
    display: inline-block;
    animation: ${rotate} 6s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
    width: 20%;
  `;

  const Title = styled.h2`
    text-align: center;
    font-size: xx-large;
  `;

  return (
    <div>
      <Title>Cargando....</Title>
      <Rotate src={pokeball} />
      <Rotate src={pokeball} />
      <Rotate src={pokeball} />
      <Rotate src={pokeball} />
    </div>
  );
};

export default Loading;

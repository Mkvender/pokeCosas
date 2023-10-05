import styled, { keyframes } from "styled-components";
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
export const Rotate = styled.img`
  display: inline-block;
  animation: ${rotate} 6s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
  width: 20%;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: xx-large;
`;

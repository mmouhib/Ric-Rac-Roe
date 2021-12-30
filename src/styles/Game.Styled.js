import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	
  body {
    background-color: ${(props) => props.theme.bodyBg};
    font-family: 'Road Rage', cursive;
  }
`;

const StyledTitle = styled.h1`
  font-family: "Bungee Shade", cursive;
  background-image: linear-gradient(90deg, red, blue);
  background-clip: text;
  color: transparent;
  text-align: center;
  font-size: 3rem;
  margin: 0 0 1% 2%;
`;

export { GlobalStyle, StyledTitle };

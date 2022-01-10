import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	
  body {
    background-color: ${(props) => props.theme.bodyBg};
    font-family: 'Road Rage', cursive;
  }
`;

const StyledTitle = styled.h1`
  font-family: "Bungee Shade", cursive;
  color: lightpink;
  text-align: center;
  font-size: 3rem;
  margin: 0;
`;

export { GlobalStyle, StyledTitle };

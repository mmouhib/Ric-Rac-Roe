import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	
  body {
    background-color: ${(props) => props.theme.bodyBg};
    font-family: 'Road Rage', cursive;
  }
`;

const StyledTitle = styled.h1`
  font-family: "Luckiest Guy", cursive;
  background-image: linear-gradient(90deg, red, blue);
  background-clip: text;
  color: transparent;
  text-align: center;
  font-size: 3rem;
  margin: 2% 0 0 2%;
`;

export { GlobalStyle, StyledTitle };

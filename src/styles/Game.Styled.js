import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #282c34;
    font-family: 'Road Rage', cursive;
  }
`;

const StyledTitle = styled.h1`
  font-family: "Wallpoet", cursive;
  //background-image: linear-gradient(90deg, red, blue);
  //background-clip: text;
  //color: transparent;
  color: ${(props) => props.theme.titleColor};
  text-align: center;
  font-size: 6rem;
  margin: 0 auto;
`;

export { GlobalStyle, StyledTitle };

import styled from "styled-components";
const StyledButton = styled.button`
  width: 7rem;
  height: 2rem;
  font-weight: bold;
  background-color: ${(props) => props.theme.buttonBgColor};
  border: none;
  border-radius: 10px;
  color: ${(props) => props.theme.buttonTextColor};
  font-size: larger;
  margin-left: 48%;

  &:hover {
    background-color: ${(props) => props.theme.buttonBgHoverColor};
    color: ${(props) => props.theme.buttonTextHoverColor};
  }
`;

export default StyledButton;

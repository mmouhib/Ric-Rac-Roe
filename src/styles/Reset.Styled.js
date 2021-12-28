import styled from "styled-components";

const StyledReset = styled.div`
  text-align: center;

  button {
    width: 8rem;
    height: 2.5rem;
    font-weight: bold;
    background-color: ${(props) => props.theme.buttonBgColor};
    border: none;
    border-radius: 10px;
    color: ${(props) => props.theme.buttonTextColor};
    font-size: larger;
    margin: auto auto 2% 2%;
  }

  button:hover {
    background-color: ${(props) => props.theme.buttonBgHoverColor};
    color: ${(props) => props.theme.buttonTextHoverColor};
  }
`;

export default StyledReset;

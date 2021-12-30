import styled from "styled-components";
const StyledCell = styled.div`
  text-align: center;
  font-size: 5vw;
  width: 6vw;
  height: 6vw;
  border: 3px solid ${(props) => props.theme.cellBorderColor};
  border-radius: ${(props) => props.cellBorderRadius};
  color: ${(props) => props.theme.cellColor};
  margin: 10px;
  cursor: pointer;
  padding-top: 7%;

  &:hover {
    background-color: ${(props) => props.theme.cellHoverBackground};
  }
`;

export default StyledCell;

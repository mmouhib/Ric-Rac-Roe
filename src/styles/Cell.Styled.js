import styled from "styled-components";
const StyledCell = styled.div`
  text-align: center;
  font-size: 5vw;
  width: 6vw;
  height: 6vw;
  border: 3px solid #bb86fc;
  border-radius: 100%;
  color: white;
  margin: 10px;
  cursor: pointer;
  padding-top: 7%;

  &:hover {
    background-color: #42464e;
  }
`;

export default StyledCell;

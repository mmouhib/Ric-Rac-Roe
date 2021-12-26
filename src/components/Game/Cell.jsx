import styled from "styled-components";
const StyledCell = styled.div`
  text-align: center;
  font-size: 5vw;
  width: 6vw;
  height: 6vw;
  border: 3px solid #bb86fc;
  border-radius: 100%;
  color: wheat;
  margin: 10px;
  cursor: pointer;
  padding-top: 7%;

  &:hover {
    background-color: #42464e;
  }
`;
const Cell = ({ id, value, affectChoice, radar, setRadar }) => {
  return (
    <StyledCell
      id={id}
      onClick={() => {
        if (radar[id] === false) {
          affectChoice(id);
          setRadar(
            radar.map((element, index) => {
              return index === id;
            })
          );
        }
      }}
      className="cell"
    >
      {value}
    </StyledCell>
  );
};

export default Cell;

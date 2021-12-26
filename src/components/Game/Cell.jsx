import styled from "styled-components";
const StyledCell = styled.div`
  text-align: center;
  font-size: 10vh;
  width: 5vw;
  height: 10vh;
  border: 5px solid #c74561;
  border-radius: 50px;
  color: wheat;
  margin: 10px;
  cursor: pointer;
  flex: 0 0 25%;

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

import StyledCell from "../../styles/Cell.Styled";

const Cell = ({ id, value, affectChoice, radar, setRadar }) => {
  return (
    <StyledCell
      id={id}
      onClick={() => {
        // \n checks if the cell is already chosen if not it will affect a choice
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

import StyledCell from "../../styles/Cell.Styled";

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

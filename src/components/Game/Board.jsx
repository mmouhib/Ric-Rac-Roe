const Cell = (props) => {
  return (
    <div
      id={props.id}
      onClick={() => {
        props.affectChoice(props.id);
      }}
      className="cell"
    >
      {props.value}
    </div>
  );
};

const Board = ({ setBoard, board, logo, setLogo }) => {
  const affectChoice = (id) => {
    setBoard(
      board.map((element, index) => {
        if (index === id) {
          let symbol = logo;
          if (logo === "X") {
            setLogo("O");
          } else {
            setLogo("X");
          }
          return symbol;
        }
        return element;
      })
    );
  };

  return (
    <div className="board">
      {board.map((element, index) => {
        return <Cell id={index} affectChoice={affectChoice} value={element} />;
      })}
    </div>
  );
};

export default Board;

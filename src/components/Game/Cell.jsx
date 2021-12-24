const Cell = ({
  id,
  board,
  setBoard,
  logo,
  setLogo,
  value,
  radar,
  setRadar,
}) => {
  return (
    <div
      id={id}
      onClick={() => {
        // here we're making sure that the box clicked is not already clicked before so the choice doesn't happen again
        //using the radar array that contains whether each element of the board was clicked before or not
        if (radar[id] === false) {
          setBoard(
            board.map((element, index) => {
              if (index === id) {
                let symbol = logo;
                if (logo === "X") {
                  setLogo("O");
                } else {
                  setLogo("X");
                }
                setRadar(
                  radar.map((element, index) => {
                    return index === id;
                  })
                );
                return symbol;
              }
              setRadar(
                radar.map((element, index) => {
                  return index === id;
                })
              );
              return element;
            })
          );
        }
      }}
      className="cell"
    >
      {value}
    </div>
  );
};

export default Cell;

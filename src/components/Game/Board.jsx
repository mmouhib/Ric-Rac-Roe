import Cell from "./Cell";
import { useState } from "react";

const Board = ({ setBoard, board, logo, setLogo }) => {
  const [radar, setRadar] = useState(Array(9).fill(false));
  return (
    <div className="board">
      {board.map((element, index) => {
        return (
          <Cell
            id={index}
            value={element}
            board={board}
            setLogo={setLogo}
            setBoard={setBoard}
            logo={logo}
            radar={radar}
            setRadar={setRadar}
          />
        );
      })}
    </div>
  );
};

export default Board;

import StyledScore from "../../styles/Score.Styled";

const Score = (props) => {
  return (
    <StyledScore>
      <p id="p1">
        Player 1 (X) : <span>{props.score.scoreCross}</span>
      </p>
      <p>
        Player 2 (O) : <span>{props.score.scoreCircle}</span>
      </p>
      <p>
        Draw : <span>{props.score.scoreDraw}</span>
      </p>
    </StyledScore>
  );
};

export default Score;

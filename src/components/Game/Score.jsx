import styled from "styled-components";

const StyledScore = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-family: "Orbitron", sans-serif;
  margin: auto auto 2% 2%;

  span {
    font-weight: bold;
    color: blueviolet;
  }

  p {
    display: inline-block;
    margin: 0 45px 0 45px;
  }
`;

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

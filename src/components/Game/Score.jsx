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
        X : <span>{props.scoreCross}</span>
      </p>
      <p>
        O : <span>{props.scoreCircle}</span>
      </p>
    </StyledScore>
  );
};

export default Score;

import styled from "styled-components";

const StyledScore = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-family: "Orbitron", sans-serif;

  span {
    font-weight: bold;
    color: blueviolet;
  }

  p {
    display: inline-block;
    margin: 0 45px 45px 45px;
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

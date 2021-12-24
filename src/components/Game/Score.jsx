const Score = (props) => {
  return (
    <div className="score">
      <p id="p1">
        X : <span>{props.scoreCross}</span>
      </p>
      <p>
        O : <span>{props.scoreCircle}</span>
      </p>
    </div>
  );
};

export default Score;

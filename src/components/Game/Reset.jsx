const Reset = (props) => (
  <div className="reset">
    <button
      onClick={() => {
        props.setBoard(Array(9).fill(""));
      }}
    >
      Reset
    </button>
  </div>
);

export default Reset;

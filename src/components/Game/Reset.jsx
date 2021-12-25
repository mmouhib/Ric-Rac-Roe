const Reset = (props) => (
  <div className="reset">
    <button
      onClick={() => {
        props.reset();
      }}
    >
      {props.content}
    </button>
  </div>
);

export default Reset;

import StyledReset from "../../styles/Reset.Styled";

const Reset = (props) => (
  <StyledReset>
    <button
      onClick={() => {
        props.reset();
      }}
    >
      {props.content}
    </button>
  </StyledReset>
);

export default Reset;

import styled from "styled-components";

const StyledReset = styled.div`
  text-align: center;

  button {
    width: 5rem;
    height: 2.5rem;
    font-weight: bold;
    background-color: #ff6384;
    border: none;
    border-radius: 10px;
    color: white;
    text-transform: uppercase;
    font-size: smaller;
    margin: auto auto 2% 2%;
  }

  button:hover {
    background-color: white;
    color: #ff6384;
  }
`;

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

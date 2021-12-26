import styled from "styled-components";

const StyledReset = styled.div`
  text-align: center;

  button {
    width: 8rem;
    height: 2.5rem;
    font-weight: bold;
    background-color: #bb86fc;
    border: none;
    border-radius: 10px;
    color: #2e2c31;
    //text-transform: uppercase;
    font-size: larger;
    margin: auto auto 2% 2%;
  }

  button:hover {
    background-color: white;
    color: #e05672;
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

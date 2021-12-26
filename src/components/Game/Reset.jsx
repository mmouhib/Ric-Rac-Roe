import styled from "styled-components";

const StyledReset = styled.div`
  text-align: center;

  button {
    width: 100px;
    height: 35px;
    font-weight: bold;
    background-color: #ff6384;
    border: none;
    border-radius: 10px;
    color: white;
    text-transform: uppercase;
    margin-bottom: 2%;
  }

  button:hover {
    background-color: #c74561;
    color: white;
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

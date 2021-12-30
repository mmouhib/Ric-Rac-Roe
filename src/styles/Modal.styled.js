import Modal from "styled-react-modal";
import styled from "styled-components";

const StyledModal = Modal.styled`
  width: 60vh;
  height: 70vh;
  border-radius: 25px;
  background-color: lightgrey;
`;

const StyledCloseX = styled.p`
  margin: 2% 0 0 95%;
  font-size: 3rem;
`;

export { StyledCloseX };
export default StyledModal;

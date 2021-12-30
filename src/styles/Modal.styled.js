import Modal from "styled-react-modal";
import styled from "styled-components";

const StyledModal = Modal.styled`
	font-family: 'Geo', sans-serif;
	
  width: 60vh;
  height: 70vh;
  border-radius: 25px;
  background-color: rgba(175, 175, 175, 0.91);
`;

const StyledCloseX = styled.p`
  margin: 2% 0 0 94%;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: #1e3975;
  }
`;

const StyledTitle = styled.h1`
  margin: -5% 0 20% 0;
  text-align: center;
`;

const SmallTitles = styled.h2`
  font-family: "Megrim", cursive;
  color: #5312a1;
  text-align: center;
  margin-left: -15%;
`;

const SmallTitlesTwo = styled.h2`
  font-family: "Megrim", cursive;
  color: #5312a1;
  text-align: center;
  margin-left: -37%;
`;

const StyledRadioDiv = styled.div`
  font-size: larger;
  font-family: "Comfortaa Light", serif;
  font-weight: bold;
  margin: 7% 0 0 13%;
`;

const StyledLabels = styled.label`
  padding: 0 0 0 30px;
`;

const ThemesDiv = styled.div`
  margin: 15% 0 0 15%;
`;

export {
  StyledCloseX,
  StyledTitle,
  StyledRadioDiv,
  StyledLabels,
  SmallTitles,
  ThemesDiv,
  SmallTitlesTwo,
};
export default StyledModal;

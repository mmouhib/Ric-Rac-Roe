import Settings from "../UI/Settings.jsx";

import StyledModal, {
  StyledCloseX,
  StyledTitle,
  StyledRadioDiv,
  StyledLabels,
  SmallTitles,
  ThemesDiv,
  SmallTitlesTwo,
} from "../../styles/Modal.styled";

const Modal = ({
  setTheme,
  modalIsOpen,
  setModalIsOpen,
  setCellBorderRadius,
}) => {
  return (
    <div>
      <StyledModal
        isOpen={modalIsOpen}
        onBackgroundClick={() => setModalIsOpen(false)}
        onEscapeKeydown={() => setModalIsOpen(false)}
      >
        <StyledCloseX onClick={() => setModalIsOpen(false)}>X</StyledCloseX>
        <Settings onClick={() => setModalIsOpen(false)} />
        <StyledTitle>Customize your Game:</StyledTitle>

        <StyledRadioDiv>
          <SmallTitles>cell types:</SmallTitles>
          <div className="CellBorders">
            <StyledLabels htmlFor="r1">Rounded</StyledLabels>
            <input
              type="radio"
              id="r1"
              name="radio"
              onClick={() => setCellBorderRadius("25%")}
            />
            <StyledLabels htmlFor="r1">Squared</StyledLabels>
            <input
              type="radio"
              id="r2"
              name="radio"
              onClick={() => setCellBorderRadius("0%")}
            />
            <StyledLabels htmlFor="r1">Circle</StyledLabels>
            <input
              type="radio"
              id="r3"
              name="radio"
              onClick={() => setCellBorderRadius("100%")}
            />
          </div>

          <ThemesDiv>
            <SmallTitlesTwo>Theme:</SmallTitlesTwo>
            <StyledLabels htmlFor="r4">Dark</StyledLabels>
            <input
              type="radio"
              id="r4"
              name="radio2"
              onClick={() => setTheme(true)}
            />
            <StyledLabels htmlFor="r5">Light</StyledLabels>
            <input
              type="radio"
              id="r5"
              name="radio2"
              onClick={() => setTheme(false)}
            />
          </ThemesDiv>
        </StyledRadioDiv>
      </StyledModal>
    </div>
  );
};

export default Modal;

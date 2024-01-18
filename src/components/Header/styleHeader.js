import styled from "styled-components"
import breakpoints from "../../style/responsive"

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) =>
    theme.theme === "light" ? theme.colors.blue4 : theme.colors.blue2};
  height: 11rem;
  width: 100%;
  padding: 0 10rem;
  align-items: center;

  @media (max-width: ${breakpoints.medium1}px) {
    padding: 0 30px;
    background-color: transparent;
  }

  @media (max-width: ${breakpoints.small1}px) {
    padding: 0 10px;
  }
`

const StyledLogo = styled.img`
  height: 7rem;
  filter: ${({ theme }) =>
    theme.theme === "light"
      ? "invert(31%) sepia(89%) saturate(1029%) hue-rotate(184deg) brightness(89%) contrast(90%)"
      : "none"};

  @media (max-width: ${breakpoints.medium1}px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export { StyledHeader, StyledLogo }

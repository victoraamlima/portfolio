import styled from "styled-components"
import breakpoints from "../../style/responsive"

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
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
    background-color: ${({ theme }) =>
      theme.theme === "light" ? theme.colors.white3 : theme.colors.blue3};

    &::before {
      content: "";
      position: absolute;
      bottom: -5rem;
      left: 0;
      width: 100%;
      height: 5rem;
      background: transparent;
      background: linear-gradient(
        180deg,
        ${({ theme }) =>
            theme.theme === "light" ? theme.colors.white3 : theme.colors.blue3}
          0%,
        transparent 100%
      );
    }
  }

  @media (max-width: ${breakpoints.small1}px) {
    padding: 0 10px;
  }
`

const StyledLogo = styled.img`
  height: 7rem;

  @media (max-width: ${breakpoints.medium1}px) {
    filter: ${({ theme }) =>
      theme.theme === "light"
        ? "invert(31%) sepia(89%) saturate(1029%) hue-rotate(184deg) brightness(65%) contrast(200%)"
        : "none"};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export { StyledHeader, StyledLogo }

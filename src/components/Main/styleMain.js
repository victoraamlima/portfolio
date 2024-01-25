import styled from "styled-components"

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 10rem;
  background-color: ${({ theme }) =>
    theme.theme === "light" ? theme.colors.white3 : theme.colors.blue3};

  * {
    filter: ${({ $isSelectedDetailedProject }) =>
      $isSelectedDetailedProject ? "blur(5px)" : "blur(0)"};
  }
`

export { StyledMain }

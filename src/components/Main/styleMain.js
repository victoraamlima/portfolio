import styled from "styled-components"
import breakpoints from "../../style/responsive"

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 10rem;
  background-color: ${({ theme }) =>
    theme.theme === "light" ? theme.colors.white3 : theme.colors.blue3};


`

export { StyledMain }

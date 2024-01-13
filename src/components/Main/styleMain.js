import styled from "styled-components"

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 100px;
  background-color: ${({ theme }) =>
    theme.theme === "light" ? theme.colors.white3 : theme.colors.blue3};
`

export { StyledMain }

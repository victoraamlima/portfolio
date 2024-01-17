import styled from "styled-components"

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) =>
    theme.theme === "light" ? theme.colors.blue4 : theme.colors.blue2};
  height: 100px;
  padding: 0px 100px;
  align-items: center;
`

const StyledLogo = styled.img`
  height: 70px;
`

export { StyledHeader, StyledLogo }

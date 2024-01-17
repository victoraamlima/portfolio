import styled from "styled-components"

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) =>
    theme.theme === "light" ? theme.colors.blue4 : theme.colors.blue2};
  padding: 50px 100px;
  text-align: center;
  gap: 20px;
`
export { StyledFooter }

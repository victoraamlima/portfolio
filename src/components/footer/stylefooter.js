import styled from "styled-components"
import breakpoints from "../../style/responsive"

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) =>
    theme.theme === "light" ? theme.colors.blue4 : theme.colors.blue2};
  padding: 50px 10rem;
  text-align: center;
  gap: 40px;

  @media (max-width: ${breakpoints.large2}px) {
    flex-direction: column;
  }

  @media (max-width: ${breakpoints.medium1}px) {
    padding: 20px 30px;
  }

  @media (max-width: ${breakpoints.small1}px) {
    padding: 10px;
  }
`
export { StyledFooter }

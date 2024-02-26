import styled from "styled-components"
import breakpoints from "../../style/responsive"

const StyledProjects = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 10rem;
  align-items: center;
  gap: 6rem;

  h2 {
    color: ${({ theme }) =>
      theme.theme === "light" ? theme.colors.blue3 : theme.colors.white1};
    text-align: center;
    font-family: Inter;
    font-size: 9.6rem;
    font-weight: 600;
  }

  @media (max-width: ${breakpoints.medium1}px) {
    padding: 0 30px;

    h2 {
      font-size: 5rem;
    }
  }

  @media (max-width: ${breakpoints.small1}px) {
    padding: 0 10px;
  }
`

export { StyledProjects }

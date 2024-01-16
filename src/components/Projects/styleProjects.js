import styled from "styled-components"

const StyledProjects = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 100px;
  align-items: center;
  gap: 60px;

  h2 {
    color: ${({ theme }) =>
      theme.theme === "light" ? theme.colors.blue3 : theme.colors.white1};
    text-align: center;
    font-family: Inter;
    font-size: 96px;
    font-weight: 400;
  }
`

export { StyledProjects }

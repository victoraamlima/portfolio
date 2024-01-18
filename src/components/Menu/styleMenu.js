import styled from "styled-components"

const StyledMenu = styled.ul`
  // position: absolute;
  top: 50%;
  left: 50%;
  // transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;

  a {
    color: ${({ theme }) =>
      theme.theme === "light" ? theme.colors.blue1 : theme.colors.white1};
    text-align: center;
    font-family: Inter;
    font-size: 3.2rem;
    font-weight: 500;
    transition: 0.3s;

    &:hover {
      color: ${({ theme }) =>
        theme.theme === "light" ? theme.colors.white2 : theme.colors.blue6};
      text-decoration: underline;
    }
  }
`

export { StyledMenu }

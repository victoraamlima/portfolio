import styled, { css } from "styled-components"

const StyledButtonCss = css`
  display: flex;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  padding: 7px 0;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  background-color: ${({ theme, $local }) => {
    if ($local === "card") {
      return theme.theme === "light" ? theme.colors.blue2 : theme.colors.blue4
    } else if ($local === "project") {
      return theme.theme === "light" ? theme.colors.blue2 : theme.colors.blue5
    } else if ($local === "email") {
      return theme.theme === "light" ? theme.colors.blue2 : theme.colors.blue1
    }
  }};
  color: ${({ theme }) => theme.colors.white1};
  text-align: center;
  font-family: Inter;
  font-size: ${({ $fontesize }) => $fontesize};
  font-weight: 500;
  text-decoration-line: underline;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`

const StyledButton = styled.button`
  ${StyledButtonCss}
`

export { StyledButtonCss, StyledButton }

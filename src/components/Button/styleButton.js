import styled from "styled-components"

const StyledButton = styled.span`
  display: flex;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  padding: 7px 0;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  background-color: ${({ theme }) =>
    theme.theme === "light" ? theme.colors.blue2 : theme.colors.blue4};
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

export { StyledButton }

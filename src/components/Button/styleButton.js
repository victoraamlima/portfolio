import styled from "styled-components"

const StyledButton = styled.div`
  display: flex;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  padding: 7px 0;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  background-color: ${({ theme }) =>
    theme.theme === "light" ? theme.colors.blue2 : theme.colors.blue4};

  color: var(--branco, #fff);
  text-align: center;
  font-family: Inter;
  font-size: ${({ $fontesize }) => $fontesize};
  font-weight: 500;
  text-decoration-line: underline;
  text-transform: uppercase;
`

export { StyledButton }

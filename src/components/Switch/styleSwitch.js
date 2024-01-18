import styled from "styled-components"

const StyledSwitch = styled.button`
  position: relative;
  border: none;
  width: 13.8rem;
  height: 6rem;
  border-radius: 6.5rem;
  background: ${({ theme }) =>
    theme.theme === "light" ? theme.colors.blue6 : theme.colors.blue1};
  display: flex;
  flex-direction: ${({ theme }) =>
    theme.theme === "light" ? "row" : "row-reverse"};
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  transition: all 0.3s ease;
  cursor: pointer;

  span {
    position: absolute;
    right: ${({ theme }) => (theme.theme === "light" ? "10px" : "80px")};
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.white1};
    transition: all 0.5s ease-in-out;
  }
`
const ThemeIcon = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  svg {
    padding: 0 0 0 10px;
    width: 4.5rem;
    height: 4.5rem;
    transition: all 0.5s ease-in-out;

    &.active {
      opacity: 1;
    }

    &.inactive {
      opacity: 0;
    }
  }
`

export { StyledSwitch, ThemeIcon }

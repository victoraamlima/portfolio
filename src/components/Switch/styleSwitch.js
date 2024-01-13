import styled from "styled-components"

const StyledSwitch = styled.button`
  position: relative;
  border: none;
  width: 180px;
  height: 75px;
  border-radius: 65px;
  background: ${({ theme }) =>
    theme.theme === "light" ? theme.colors.blue6 : theme.colors.blue1};
  display: flex;
  flex-direction: ${({ theme }) =>
    theme.theme === "light" ? "row" : "row-reverse"};
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  transition: all 0.3s ease;

  span {
    position: absolute;
    right: ${({ theme }) => (theme.theme === "light" ? "10px" : "110px")};
    width: 58px;
    height: 58px;
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
    width: 60px;
    height: 60px;
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

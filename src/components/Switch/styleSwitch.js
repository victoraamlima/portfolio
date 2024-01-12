import styled from "styled-components"

const StyledSwitch = styled.div`
  width: 180px;
  height: 75px;
  border-radius: 65px;
  background: var(--azul-6, #7ec9f7);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  div {
    width: 58px;
    height: 58px;
    border-radius: 50%;
    background: var(--azul-1, #ffffff);
    transition: all 0.3s ease;
  }

  svg {
    padding: 0 0 0 10px;
    width: 60px;
    height: 60px;
  }
`

const Theme = styled.svg`
//   padding: 0 0 0 10px;
`

export { StyledSwitch, Theme }

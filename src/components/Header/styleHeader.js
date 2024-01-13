import styled from "styled-components"

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.blue4};
  height: 180px;
  padding: 0px 100px;
  align-items: center;
`

export { StyledHeader }

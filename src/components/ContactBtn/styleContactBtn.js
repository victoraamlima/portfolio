import styled from "styled-components"

const StyledContactBtn = styled.ul`
  display: flex;
  flex-direction: ${({ $footer }) => ($footer ? " column " : "row")};
  gap: 40px;
`

const ContactIcon = styled.img`
  width: 70px;
  height: 70px;
`

export { StyledContactBtn, ContactIcon }

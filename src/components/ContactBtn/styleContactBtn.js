import styled from "styled-components"
import breakpoints from "../../style/responsive"

const StyledContactBtn = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 40px;

  @media (max-width: ${breakpoints.large2}px) {
    flex-direction: row;
  }
`

const ContactIcon = styled.img`
  width: 7rem;
  height: 7rem;

  &:hover {
    transform: scale(1.1);
  }
`

export { StyledContactBtn, ContactIcon }

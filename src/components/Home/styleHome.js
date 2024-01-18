import styled from "styled-components"
import breakpoints from "../../style/responsive"

const StyledHome = styled.section`
  display: flex;
  justify-content: center;
  padding: 0 10rem;
  gap: 10rem;

  @media (max-width: ${breakpoints.medium1}px) {
    flex-direction: column-reverse;
    align-items: center;
    padding: 0 30px;
  }

  @media (max-width: ${breakpoints.small1}px) {
    padding: 0 10px;
  }
`

const ProfileFoto = styled.img`
  width: 50rem;
  height: 50rem;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: ${breakpoints.small1}px) {
    width: 30rem;
    height: 30rem;
  }
`

export { StyledHome, ProfileFoto }

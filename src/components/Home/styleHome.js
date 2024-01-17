import styled from "styled-components"

const StyledHome = styled.section`
  display: flex;
  justify-content: center;
  padding: 0 100px;
  gap: 100px;
`

const ProfileFoto = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 50%;
  object-fit: cover;
`

export { StyledHome, ProfileFoto }

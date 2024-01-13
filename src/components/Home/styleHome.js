import styled from "styled-components"

const StyledHome = styled.section`
  display: flex;
  justify-content: center;
  padding: 0 100px;
  gap: 100px;
`
const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  max-width: 900px;

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  h2 {
    color: ${({ theme }) =>
      theme.theme === "light" ? theme.colors.blue3 : theme.colors.white1};
    font-family: Inter;
    font-size: 80px;
    font-weight: 700;
    line-height: 100%;
  }

  h3 {
    color: ${({ theme }) =>
      theme.theme === "light" ? theme.colors.blue3 : theme.colors.white1};
    font-family: Inter;
    font-size: 40px;
    font-weight: 600;
    line-height: 100%;
  }

  h4 {
    color: ${({ theme }) =>
      theme.theme === "light" ? theme.colors.blue3 : theme.colors.white1};
    font-family: Inter;
    font-size: 48px;
    font-weight: 500;
    line-height: 100%;
  }

  p {
    color: ${({ theme }) =>
      theme.theme === "light" ? theme.colors.blue1 : theme.colors.white1};
    font-family: Inter;
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 10px;
  }
`

const ProfileFoto = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 50%;
  object-fit: cover;
`

export { StyledHome, ProfileInfo, ProfileFoto }

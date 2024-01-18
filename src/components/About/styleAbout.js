import styled from "styled-components"

const StyledAbout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 100px;
  gap: 50px;

  h2 {
    color: ${({ theme }) =>
      theme.theme === "light" ? theme.colors.blue3 : theme.colors.white1};
    text-align: center;
    font-family: Inter;
    font-size: 96px;
    font-weight: 400;
  }

  h3 {
    color: ${({ theme }) =>
      theme.theme === "light" ? theme.colors.blue3 : theme.colors.white1};
    margin-bottom: 50px;
    font-family: Inter;
    font-size: 40px;
    font-weight: 500;
  }

  p {
    color: ${({ theme }) =>
      theme.theme === "light" ? theme.colors.blue1 : theme.colors.white1};
    font-family: Inter;
    font-size: 32px;
    font-weight: 400;
    line-height: 175%;
  }
`
const AboutInfo = styled.div`
  display: flex;
  gap: 100px;
  width: 100%;
  justify-content: space-between;

  & > div {
    max-width: 50%;
    min-width: 40%;
  }
`
const Technologies = styled.div`
  display: grid;
  justify-items: start;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 75px;
`
const TechnologyInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  span {
    color: ${({ theme }) =>
      theme.theme === "light" ? theme.colors.black1 : theme.colors.white1};
    text-align: center;
    font-family: Inter;
    font-size: 20px;
    font-weight: 500;
  }
`

export { StyledAbout, AboutInfo, Technologies, TechnologyInfo }

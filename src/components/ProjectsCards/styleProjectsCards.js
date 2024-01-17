import styled from "styled-components"

const ProjectsCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 60px;
`

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 515px;
  height: 782px;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ theme }) =>
    theme.theme === "light" ? theme.colors.blue6 : theme.colors.blue2};

  h4 {
    color: ${({ theme }) =>
      theme.theme === "light" ? theme.colors.blue1 : theme.colors.white1};
    text-align: center;
    font-family: Inter;
    font-size: 36px;
    font-weight: 600;
    text-transform: capitalize;
  }

  h5 {
    color: ${({ theme }) => theme.colors.white1};
    text-align: center;
    font-family: Inter;
    font-size: 30px;
    font-weight: 500;
    border-radius: 7px;
    width: 185px;
    padding: 7px 0;
    text-transform: capitalize;
    background: ${({ theme }) => theme.colors.orange1};
  }

  p {
    color: ${({ theme }) =>
      theme.theme === "light" ? theme.colors.blue1 : theme.colors.white1};
    text-align: center;
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    padding: 5px 0;
  }
`
const ProjectsCardsInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 30px 20px;
  align-items: center;
  gap: 15px;
`

const ProjectImage = styled.img`
  width: 100%;
  height: 290px;
  border-radius: 10px 10px 0 0;
`

const ProjectTechnologies = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 25px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white5};

  img {
    width: 50px;
    height: 50px;
  }
`
const ProjectLinks = styled.div`
  display: flex;
  padding: 15px 0px;
  justify-content: center;
  align-items: flex-start;
  gap: 15px;
`
const ButtonMoreInformations = styled.button`
  all: unset;
  color: ${({ theme }) =>
    theme.theme === "light" ? theme.colors.blue1 : theme.colors.blue6};
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
  cursor: pointer;
`

export {
  ProjectsCardsContainer,
  ProjectCard,
  ProjectsCardsInfo,
  ProjectImage,
  ProjectTechnologies,
  ProjectLinks,
  ButtonMoreInformations,
}

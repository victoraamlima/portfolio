import styled from "styled-components"
import breakpoints from "../../style/responsive"

const StyledHome = styled.section`
  display: flex;
  justify-content: center;
  padding: 20rem 7rem;
  margin-top: -10rem;
  gap: 10rem;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: block;
    background-color: ${({ theme }) => theme.colors.blue3};
    background-image: linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.blue2},
      ${({ theme }) => theme.colors.blue3}
    );
    z-index: -1;
  }

  @media (max-width: ${breakpoints.medium1}px) {
    padding: 100px 30px;
  }

  @media (max-width: ${breakpoints.small1}px) {
    padding: 75px 10px;
  }
`
const GoDown = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;

  span {
    display: block;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid ${({ theme }) => theme.colors.white1};

    animation: goDown 2s infinite;
    transition: 0.3s;

    @keyframes goDown {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(10px);
      }
      100% {
        transform: translateY(0);
      }
    }
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

export { StyledHome, ProfileFoto, GoDown }

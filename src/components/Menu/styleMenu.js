import styled from "styled-components"
import breakpoints from "../../style/responsive"

const StyledMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
  transition: 0.3s;

  a {
    color: ${({ theme }) => theme.colors.white1};
    text-align: center;
    font-family: Inter;
    font-size: 3.2rem;
    font-weight: 500;
    transition: 0.3s;

    &:hover {
      color: ${({ theme }) =>
        theme.theme === "light" ? theme.colors.white2 : theme.colors.blue6};
      text-decoration: underline;
      transform: scale(1.1);
    }
  }

  li:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${breakpoints.medium1}px) {
    display: none;
    opacity: 0;
  }
`

const LabelMenuHamburger = styled.label`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 40px;
  height: 29px;
  transition: 0.3s;

  input {
    display: none;
    all: unset;
    position: relative;
    width: 40px;
    height: 3px;
    background: ${({ theme }) =>
      theme.theme === "light" ? theme.colors.blue4 : theme.colors.white1};
    border-radius: 5px;

    &::after,
    &::before {
      display: none;
      content: "";
      position: absolute;
      width: 40px;
      height: 3px;
      border-radius: 5px;
      background: ${({ theme }) =>
        theme.theme === "light" ? theme.colors.blue4 : theme.colors.white1};
      transition: 0.3s;
    }

    &::after {
      top: -10px;
    }

    &::before {
      top: 10px;
    }

    &:checked {
      &::after {
        transform: rotate(45deg);
        top: 0;
      }

      &::before {
        transform: rotate(-45deg);
        top: 0;
      }

      & {
        background: transparent;
      }

      &:checked + ${StyledMenu} {
        position: absolute;
        top: 47px;
        transform: translatex(calc(-100% + 20px));
        display: flex;
        flex-direction: column;
        background-color: ${({ theme }) =>
          theme.theme === "light" ? theme.colors.blue4 : theme.colors.blue4};
        padding: 0 100px;
        height: 250px;
        width: 284px;
        opacity: 1;

        li:last-child a::after {
          height: 0;
        }

        li {
          position: relative;
          width: 100%;
          text-align: center;
        }

        li a:after {
          content: "";
          position: absolute;
          bottom: -20px;
          left: -64px;
          width: 220px;
          height: 2px;
          background-color: ${({ theme }) => theme.colors.white1};
        }
      }
    }
  }

  @media (max-width: ${breakpoints.medium1}px) {
    top: 50%;
    right: 30px;
    transform: translatey(-50%);

    input:after,
    input:before {
      display: block;
    }
  }

  @media (max-width: ${breakpoints.small1}px) {
    right: 10px;
  }
`

export { StyledMenu, LabelMenuHamburger }

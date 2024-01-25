import styled from "styled-components"
import breakpoints from "../../style/responsive"

const StyledMenu = styled.nav`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);

  @media (max-width: ${breakpoints.medium1}px) {
    right: 30px;
    transform: translate(0, -50%);
  }

  @media (max-width: ${breakpoints.small1}px) {
    right: 10px;
  }
`

const LabelMenuHamburger = styled.label`
  display: none;
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
    }
  }

  @media (max-width: ${breakpoints.medium1}px) {
    display: flex;
    input:after,
    input:before {
      display: block;
    }
  }
`

const StyledMenuList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
  transition: 0.3s;
  cursor: pointer;

  a {
    color: ${({ theme }) => theme.colors.white1};
    text-align: center;
    font-family: Inter;
    font-size: 3.2rem;
    font-weight: 500;
    transition: 0.3s;
    text-align: center;

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
    position: absolute;
    top: 47px;
    right: 0;
    display: ${({ $inputChecked }) => ($inputChecked ? "flex" : "none")};
    flex-direction: column;
    height: 250px;
    width: 250px;
    background-color: ${({ theme }) =>
      theme.theme === "light" ? theme.colors.blue4 : theme.colors.blue4};

    li:last-child::after {
      height: 0;
    }

    li {
      position: relative;
      display: flex;
      justify-content: center;
      width: 100%;
    }

    li:after {
      content: "";
      position: absolute;
      bottom: -17.5px;
      width: 220px;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.white1};
    }
  }
`

export { StyledMenu, StyledMenuList, LabelMenuHamburger }

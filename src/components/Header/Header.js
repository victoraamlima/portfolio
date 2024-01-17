import Menu from "../Menu/Menu"
import Switch from "../Switch/Switch"
import { StyledHeader, StyledLogo } from "./styleHeader"
import logo  from "../../images/logo.svg"

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo src={logo} alt="Logo" />
      <Menu />
      <Switch />
    </StyledHeader>
  )
}

export default Header

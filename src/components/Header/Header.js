import Menu from "../Menu/Menu"
import Switch from "../Switch/Switch"
import { StyledHeader } from "./styleHeader"
import { ReactComponent as Logo } from "../../images/logo.svg"

const Header = () => {
  return (
      <StyledHeader >
        <Logo />
        <Menu />
        <Switch />
      </StyledHeader>
  )
}

export default Header

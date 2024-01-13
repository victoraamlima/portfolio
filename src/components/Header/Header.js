import Menu from "../Menu/Menu"
import Switch from "../Switch/Switch"
import { StyledHeader } from "./styleHeader"
import { ReactComponent as Logo } from "../../images/logo.svg"
import { useSelector } from "react-redux"

const Header = () => {
  const theme = useSelector((state) => state.themeColors)

  return (
    <StyledHeader theme={theme}>
      <Logo />
      <Menu />
      <Switch />
    </StyledHeader>
  )
}

export default Header

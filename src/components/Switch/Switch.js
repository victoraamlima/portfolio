import { StyledSwitch } from "./styleSwitch"
import { ReactComponent as ThemeLight } from "../../images/theme-light.svg"
import { useSelector } from "react-redux"

const Switch = () => {
  const theme = useSelector((state) => state.themeColors)

  return (
    <StyledSwitch theme={theme}>
      <ThemeLight />
      <div />
    </StyledSwitch>
  )
}

export default Switch

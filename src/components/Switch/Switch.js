import { useState } from "react"
import { ReactComponent as ThemeLight } from "../../images/theme-light.svg"
import { ReactComponent as ThemeDark } from "../../images/theme-dark.svg"
import switchTheme from "../store/actions/themesColors"
import { StyledSwitch, ThemeIcon } from "./styleSwitch"
import { useDispatch } from "react-redux"

const Switch = () => {
  const dispatch = useDispatch()
  const [themeType, setThemeType] = useState("light")

  return (
    <StyledSwitch
      onClick={() => {
        dispatch(switchTheme(themeType))
        setThemeType(themeType === "light" ? "dark" : "light")
      }}
    >
      <ThemeIcon>
        <ThemeLight className={themeType === "light" ? "active" : "inactive"} />
        <ThemeDark className={themeType === "dark" ? "active" : "inactive"} />
      </ThemeIcon>
      <span />
    </StyledSwitch>
  )
}

export default Switch

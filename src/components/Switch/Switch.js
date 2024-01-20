import { useState } from "react"
import { ReactComponent as ThemeLight } from "../../images/theme-light.svg"
import { ReactComponent as ThemeDark } from "../../images/theme-dark.svg"
import switchTheme from "../store/actions/themesColors"
import { StyledSwitch, ThemeIcon } from "./styleSwitch"
import { useDispatch, useSelector } from "react-redux"

const Switch = () => {
  const themeInfo = useSelector((state) => state.themeColors)

  const dispatch = useDispatch()
  const [themeType, setThemeType] = useState(themeInfo.theme)

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

import { StyledSwitch, Theme } from "./styleSwitch"
import { ReactComponent as ThemeLight } from "../../images/theme-light.svg"

const Switch = () => {
  return (
    <StyledSwitch>
      {/* <Theme> */}
        <ThemeLight />
      {/* </Theme> */}
      <div />
    </StyledSwitch>
  )
}

export default Switch

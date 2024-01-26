import ProfileInfo from "../ProfileInfo/ProfileInfo"
import { StyledFooter } from "./styleFooter"

const Footer = () => {
  return (
    <StyledFooter id="footer">
      <ProfileInfo footer={true} />
    </StyledFooter>
  )
}

export default Footer

import Email from "../Email/Email"
import ProfileInfo from "../ProfileInfo/ProfileInfo"
import { StyledFooter } from "./styleFooter"

const Footer = () => {
  return (
    <StyledFooter id="footer">
      <ProfileInfo footer={true} />
      <Email />
    </StyledFooter>
  )
}

export default Footer

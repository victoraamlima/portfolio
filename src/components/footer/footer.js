import Email from "../Email/Email"
import ProfileInfo from "../ProfileInfo/ProfileInfo"
import { StyledFooter } from "./styleFooter"

const Footer = () => {
  return (
    <StyledFooter>
      <ProfileInfo footer={true} />
      <Email />
    </StyledFooter>
  )
}

export default Footer

import perfioFoto from "../../images/profile.jpg"
import { ProfileFoto, StyledHome } from "./styleHome"
import ProfileInfo from "../ProfileInfo/ProfileInfo"

const Home = () => {
  return (
    <StyledHome id="home"> 
      <ProfileInfo footer={false} />

      <ProfileFoto src={perfioFoto} alt="Foto do perfio do Victor Meireles" />
    </StyledHome>
  )
}

export default Home

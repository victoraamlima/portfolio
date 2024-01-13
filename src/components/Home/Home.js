import { ContactBtn } from "../ContactBtn/ContactBtn"
import perfioFoto from "../../images/profile.jpg"
import { ProfileFoto, ProfileInfo, StyledHome } from "./styleHome"

const Home = () => {
  return (
    <StyledHome>
      <ProfileInfo>
        <div>
          <h4>Oi, eu sou</h4>
          <h2>Victor Meireles.</h2>
          <h3>Desenvolvedor Front-End.</h3>
        </div>

        <p>
          Desde que interessei-me pela área da programação, há um ano, tenho
          estudado e praticado diariamente. Além de, ter feito diversos
          projetos.
        </p>

        <ContactBtn />
      </ProfileInfo>

      <ProfileFoto src={perfioFoto} alt="Foto do perfio do Victor Meireles" />
    </StyledHome>
  )
}

export default Home

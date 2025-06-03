import ImagemJogador from "../components/ImagemJogador"
import InfoJogador from "../components/InfoJogador"
import Habilidade from "../components/Habilidade"

const Card = ({imagem, nome, numeroCamisa, posicao, time, habilidade}) => {
  return(
    <div className="card">
      <ImagemJogador imagem={imagem}/>
      <InfoJogador nome={nome} numeroCamisa={numeroCamisa} posicao={posicao} time={time}/>
      <Habilidade habilidade={habilidade}/>
    </div>
  )
}

export default Card
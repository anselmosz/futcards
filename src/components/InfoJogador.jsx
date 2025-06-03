const InfoJogador = ({nome, numeroCamisa, posicao, time}) => {
  return(
    <div className="info-jogador">
      <h3>{nome} #{numeroCamisa}</h3>
      <p><i>{posicao}</i> - {time}</p>
    </div>
  )
}

export default InfoJogador
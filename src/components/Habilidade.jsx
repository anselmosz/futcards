import Medal from '../images/medal.png'

const Habilidade = ({habilidade}) => {
  return(
    <div className="habilidade">
      <img src={Medal} alt="medalha" />
      <p>
        <strong>Habilidade:</strong> {habilidade}
      </p>
    </div>
  )
}

export default Habilidade
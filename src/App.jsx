import './App.css'
import Card from './views/Card'
import YuriAlberto from '../src/images/yuri-alberto.jpg'
import HugoSouza from '../src/images/hugo-souza.jpg'
import MemphisDepay from '../src/images/memphis-depay.jpg'

function App() {
  return (
    <div className='container'>
      <Card imagem={YuriAlberto} nome="Yuri Alberto" numeroCamisa="9" posicao="Centroavante" time="Corinthians" habilidade="habilidade"/>
      <Card imagem={HugoSouza} nome="Hugo Souza" numeroCamisa="1" posicao="Goleiro" time="Corinthians" habilidade="habilidade"/>
      <Card imagem={MemphisDepay} nome="Memphis Depay" numeroCamisa="10" posicao="Atacante" time="Corinthians" habilidade="habilidade"/>
      <Card imagem={YuriAlberto} nome="Yuri Alberto" numeroCamisa="9" posicao="Centroavante" time="Corinthians" habilidade="habilidade"/>
    </div>
  )
}

export default App

import './App.css'
import Card from './views/Card'
import YuriAlberto from '../src/images/yuri-alberto.jpg'
import HugoSouza from '../src/images/hugo-souza.jpg'
import MemphisDepay from '../src/images/memphis-depay.jpg'

function App() {
  return (
    <div className='container'>
      <Card imagem={YuriAlberto} nome="Yuri Alberto" numeroCamisa="9" posicao="Atacante" time="Corinthians" habilidade="Marcação Ativa"/>
      <Card imagem={HugoSouza} nome="Hugo Souza" numeroCamisa="1" posicao="Goleiro" time="Corinthians" habilidade="Reação rápida"/>
      <Card imagem={MemphisDepay} nome="Memphis Depay" numeroCamisa="10" posicao="Atacante" time="Corinthians" habilidade="Freestyle"/>
    </div>
  )
}

export default App

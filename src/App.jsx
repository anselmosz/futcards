import './App.css'
import Card from './views/Card'
import YuriAlberto from '../src/images/yuri-alberto.jpg'
import HugoSouza from '../src/images/hugo-souza.jpg'
import MemphisDepay from '../src/images/memphis-depay.jpg'
import CristianoRonaldo from '../src/images/cristiano-ronaldo.jpg'

function App() {
  return (
    <section className='jogadores-dashboard'>
      <h2>Jogadores</h2>
      <div className='container'>
        <Card imagem={YuriAlberto} nome="Yuri Alberto" numeroCamisa="9" posicao="Atacante" time="Corinthians" habilidade="Marcação Ativa"/>
        <Card imagem={HugoSouza} nome="Hugo Souza" numeroCamisa="1" posicao="Goleiro" time="Corinthians" habilidade="Reação rápida"/>
        <Card imagem={MemphisDepay} nome="Memphis Depay" numeroCamisa="10" posicao="Atacante" time="Corinthians" habilidade="Freestyle"/>
        <Card imagem={CristianoRonaldo} nome="Cristiano Ronaldo" numeroCamisa="7" posicao="Atacante" time="Al-Nassr" habilidade="Corrida explosiva"/>
      </div>
    </section>
  )
}

export default App

import './App.css'
import { Link } from "react-router-dom";
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Card } from './components/Card';
import { Section1 } from './components/Section1';
import { Conheca } from './components/Conheca';
import { useEffect, useState } from 'react';

function App() {

  const [locais, setLocais] = useState([]);

  useEffect(() => {
    async function getLocais() {
      const response = await fetch('http://localhost:3000/locais')
      const locais2 = await response.json()
      setLocais(locais2)
    }
    getLocais()
  }, [])

  const listaLocais = locais.map(local => (
    <Card
    key={local.id}
    local={local}
    locais={locais}
    setLocais={setLocais} 
    />
  ))

  return (
    <>
      <Header 
      locais={locais}
      setLocais={setLocais}
      />
      <Section1 />
      <main className='app_main'>
        <div className='app_main_titulo'>
          <hr className='app_main_barra'/>
          <Link to='/formulario' className='app_main_botao'>Descubra o seu passeio ideal</Link>
          <hr className='app_main_barra'/>
        </div>

        <div className='grid_locais'>
          {listaLocais}
        </div>
        {/* <Card /> */}

      </main>
      <Conheca />
      <Footer />
    </>
  )
}

export default App
